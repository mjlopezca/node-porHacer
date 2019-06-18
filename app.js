const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors')
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('***********************'.green);
            console.log(tarea.descripcion);
            console.log("estado: " + tarea.completada);
            console.log('***********************'.green);

        }
        break;
    case 'actualizar':
        let completada = porHacer.actualizar(argv.descripcion, argv.completada);
        console.log(completada);
        break;
    case 'borrar':
        let born = porHacer.borrar(argv.descripcion);
        console.log(born);
        break;
    default:
        console.log('no se encuentra el comando');

}