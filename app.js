let inputTarea = document.getElementById("inputTarea");

let btnAgregar = document.getElementById("btnAgregar");

let listaTareas = document.getElementById("listaTareas");

let btnEliminar = document.getElementById("btnEliminar");

let contador = document.getElementById("contador");

let totalTareas = 0;


//click evento

btnAgregar.addEventListener("click", function() {


   console.log("Funciona");

   let tarea = inputTarea.value;

    if (tarea === "") {
        
        alert("Escribe una tarea");
        return;
    }

    let nuevaTarea = document.createElement("li");
    nuevaTarea.innerHTML = tarea;

    listaTareas.appendChild(nuevaTarea);

    totalTareas++;

    contador.innerHTML =
    "Tareas pendientes: " + totalTareas;

    inputTarea.value = "";
});

btnEliminar.addEventListener("click", function() {

    let ultimaTarea = listaTareas.lastElementChild;

    if (ultimaTarea) {
        listaTareas.removeChild(ultimaTarea);

    }else {
        alert("No hay tareas para eliminar");
    }
});