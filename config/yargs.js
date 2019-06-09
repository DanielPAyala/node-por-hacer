
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente una tarea'
        }
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}