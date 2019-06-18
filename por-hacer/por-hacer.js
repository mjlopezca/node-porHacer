const fs = require('fs')

let listaPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listaPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo guardar');
        return `datos guardados`;
    });
}
const cargarDB = () => {
    try {
        listaPorHacer = require('../db/data.json')
    } catch (error) {
        listaPorHacer = []
    }
}
const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completada: false
    }
    listaPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}
const getListado = () => {
    cargarDB();
    return listaPorHacer;

}
const actualizar = (descripcion, completada = true) => {
    cargarDB();
    let index = listaPorHacer.findIndex(tarea => tarea.descripcion == descripcion)

    if (index >= 0) {
        listaPorHacer[index].completada = completada;
        guardarDB();
        return true;
    }
    return false;
}

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listaPorHacer.filter(tarea => tarea.descripcion !== descripcion)
    if (nuevoListado.length !== listaPorHacer.length) {
        listaPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
    return false;

}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}