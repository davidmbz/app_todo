
// AÑADIR TAREAS

function guardarTarea(pTarea) {
    listaTareas.push(pTarea);
}


// FILTRAR TAREAS

function filtrarXPrioridad(pListaTareas, pPrioridad) {

    let tareasXPrioridad = new Array();

    for (tarea of pListaTareas) {
        if (tarea.prioridad == pPrioridad) {
            tareasXPrioridad.push(tarea);
        }
    }

    return tareasXPrioridad;
}

// function filtrarXTarea(pListaTareas, pTitulo) {
//     const tareaFiltrada = pListaTareas.filter(tarea => tarea.titulo.includes(pTitulo));

//     return tareaFiltrada;
// }


// BORRAR TAREAS

function borrar(pId) {
    // console.log(pId);
    let id = parseInt(pId);

    let posicionBorrar = listaTareas.findIndex(tarea => tarea.id == id);

    listaTareas.splice(posicionBorrar, 1);
}



