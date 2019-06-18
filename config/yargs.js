const descripcion = {
    demand: true,
    alias: 'd'
};
const completada = {
    alias: 'c',
    default: true
}
const argv = require("yargs")
    .command('crear', 'crea una tarea', {
        descripcion
    })
    .command('actualizar', 'actualiza estatus tarea', {
        descripcion,
        completada
    })
    .command('borrar', 'borra tarea', {
        descripcion
    })
    .help()
    .argv


module.exports = {
    argv
}