// AÑADIR TAREAS

let addTarea = document.querySelector('#addTarea');
let selectPrioridad1 = document.querySelector('#selectPrioridad1');
let guardar = document.querySelector('#btnGuardar');
let ulTareas = document.querySelector('#ulTareas');
let tareas = document.querySelector('.tareas');
let idTarea = 4;


guardar.addEventListener('click', capturarTarea);

function capturarTarea(event) {
    event.preventDefault();

    let tarea = addTarea.value;
    let prioridad = selectPrioridad1;

    const newTarea = {
        id: idTarea,
        titulo: tarea,
        prioridad: prioridad
    };

    guardarTarea(newTarea);
    // console.log(newTarea);

    pintarTarea(newTarea);
    addTarea.value = "";
    idTarea++;
}

function pintarTarea(pTarea) {
    ulTareas.innerHTML += `<div data-id="${pTarea.id}" id="tarea_${pTarea.id}" class="${pTarea.prioridad}">
                                <li>${pTarea.titulo}</li>
                                <a href="#" onclick="borrarTarea('tarea_${pTarea.id}')">Eliminar</a>
                            </div>`
}

function pintarTareas(pListaTareas) {
    ulTareas.innerHTML = "";
    pListaTareas.forEach(tarea => pintarTarea(tarea));
}

pintarTareas(listaTareas);

// FILTRAR TAREAS

// let selectPrioridad2 = document.querySelector('#selectPrioridad2');
// selectPrioridad2.addEventListener('change', filtrarXPrioridad);

// function filtrarXPrioridad(event) {
//     let prioridad = event.target.value;
//     let tareaFiltrada = filtrarXPrioridad(listaTareas, prioridad);

//     pintarTareaFiltrada(tareaFiltrada);

// }

// function pintarXPrioridad(pListaTareas, pPrioridad) {
//     if (pPrioridad ==)
// }

// let selectTarea = document.querySelector('#selectTarea');
// selectTarea.addEventListener('input', capturarTarea);

// function capturarTarea(event) {
//     let tarea = event.target.value;

//     pintarTarea(filtrarXTarea(listaTareas, tarea));
// }



// BORRAR TAREAS

function borrarTarea(pTareaBorrar) {
    let tareaBorrar = document.getElementById(pTareaBorrar);
    ulTareas.removeChild(tareaBorrar);

    // borrar(tareaBorrar.dataset.id);

    let id = pTareaBorrar.split('_')[1];

    borrar(id);
}
