const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, (err) => {
        if(err) throw new Error('No se pudo grabar', err);
    }) 
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();
    
    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    let data = require('../db/data.json');
    return data;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if(index >= 0) {
        listadoPorHacer[index].completado = JSON.parse(completado);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let tarea = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if(tarea !== -1){
        listadoPorHacer.splice(tarea, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const filtrarPorEstado = (estado) => {
    cargarDB();
    let filtro = listadoPorHacer.filter((arreglo) => arreglo.completado === JSON.parse(estado));
    return filtro;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
    filtrarPorEstado
}