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
    let prioridad = selectPrioridad1.value;

    const newTarea = {
        id: idTarea,
        titulo: tarea,
        prioridad: prioridad
    };
    // console.log(newTarea);

    guardarTarea(newTarea);
    // console.log(newTarea);

    pintarTarea(newTarea);
    addTarea.value = "";
    idTarea++;
}

function pintarTareas(pListaTareas) {
    ulTareas.innerHTML = "";
    pListaTareas.forEach(tarea => pintarTarea(tarea));
    // console.log(pListaTareas);
}

function pintarTarea(pTarea) {

    let color = "";

    switch (pTarea.prioridad) {
        case 'Diaria':
            color = "green";
            break;
        case 'Mensual':
            color = "blue";
            break;
        case 'Urgente':
            color = "red";
            break;
    }
    console.log(pTarea.prioridad);


    ulTareas.innerHTML += `<div  style="background-color: ${color}"; data-id="${pTarea.id}" id="tarea_${pTarea.id}">
                                <li class="${pTarea.prioridad}">${pTarea.titulo}</li>
                                <a href="#" onclick="borrarTarea('tarea_${pTarea.id}')">Eliminar</a>
                            </div>`
    // console.log(pTarea);
}

pintarTareas(listaTareas);


// FILTRAR TAREAS

let selectPrioridad2 = document.querySelector('#selectPrioridad2');
selectPrioridad2.addEventListener('change', capturarPrioridad);

function capturarPrioridad(event) {
    event.preventDefault();

    let prioridad = event.target.value;

    // console.log(event.target.value);

    pintarTareas(filtrarXPrioridad(listaTareas, prioridad));
}


// let selectTarea = document.querySelector('#selectTarea');
// selectTarea.addEventListener('input', capturarTarea);

// function capturarTarea(event) {
//     event.preventDefault();

//     let titulo = event.target.value;
//     let tareaFiltradaTitulo = filtrarXTarea(listaTareas, titulo);
//     pintarTareas(tareaFiltradaTitulo);
//     console.log(tareaFiltradaTitulo);

// }


// BORRAR TAREAS

function borrarTarea(pTareaBorrar) {
    let tareaBorrar = document.getElementById(pTareaBorrar);
    ulTareas.removeChild(tareaBorrar);

    let id = pTareaBorrar.split('_')[1];

    borrar(id);
}
