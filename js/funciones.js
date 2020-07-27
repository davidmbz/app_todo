
// AÑADIR TAREAS

function guardarTarea(pTarea) {
    listaTareas.push(pTarea);
}




// FILTRAR TAREAS

// function filtrarXPrioridad(pListaTareas, pPrioridad) {
//     if (pPrioridad = pListaTareas.filter(pTarea => pTarea.prioridad == pPrioridad));

//     return tareasFiltradas;
// }

// function filtrarXTarea(pListaTareas, pTitulo) {
//     let tareaXTitulo = new Array();

//     tareaXTitulo = pListaTareas.filter(tarea => tarea.titulo == pTitulo.toLowerCase());

//     return tareaXTitulo;
// }


// BORRAR TAREAS

function borrar(pId) {
    console.log(pId); // id
    let id = parseInt(pId);

    let posicionBorrar = listaTareas.findIndex(tarea => tarea.id == id);

    listaTareas.splice(posicionBorrar, 1);
}



