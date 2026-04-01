document.addEventListener("DOMContentLoaded", function () {

    let tareas = [];

    let categoria = document.getElementById("categoria");
    let otra = document.getElementById("otraCategoria");

    // Mostrar input "otra"
    categoria.addEventListener("change", function () {
        if (this.value === "otra") {
            otra.style.display = "inline";
        } else {
            otra.style.display = "none";
        }
    });

    // AGREGAR TAREA
    window.agregarTarea = function () {

        let texto = document.getElementById("tareaInput").value;
        let cat = document.getElementById("categoria").value;

        if (texto === "") {
            alert("Campo vacío");
            return;
        }

        let tarea = {
            texto: texto,
            categoria: cat,
            hecha: false,
            urgente: false
        };

        tareas.push(tarea);
        mostrarTareas();
    };

    // MOSTRAR TAREAS
    function mostrarTareas() {

        let lista = document.getElementById("lista");
        lista.innerHTML = "";

        tareas.forEach((t, i) => {

            let div = document.createElement("div");

            div.innerHTML = `
                ${t.urgente ? "🚨" : ""} 
                ${t.categoria} ${t.texto}

                <br>

                <button onclick="marcarHecha(${i})">✔️</button>
                <button onclick="marcarUrgente(${i})">⚠️</button>
                <button onclick="eliminar(${i})">❌</button>
            `;

            // estilo visual
            if (t.hecha) div.style.textDecoration = "line-through";
            if (t.urgente) div.style.background = "#ffdede";

            lista.appendChild(div);
        });

        function actualizarContador() {

            let total = tareas.length;
            let hechas = tareas.filter(t => t.hecha).length;
            let pendientes = total - hechas;

            document.getElementById("total").innerText = total;
            document.getElementById("hechas").innerText = hechas;
            document.getElementById("pendientes").innerText = pendientes;
}
    }

    // MARCAR HECHA
    window.marcarHecha = function (i) {
        tareas[i].hecha = !tareas[i].hecha;
        mostrarTareas();
    };

    // MARCAR URGENTE
    window.marcarUrgente = function (i) {
        tareas[i].urgente = !tareas[i].urgente;
        mostrarTareas();
    };

    // ELIMINAR
    window.eliminar = function (i) {
        if (confirm("¿Eliminar tarea?")) {
            tareas.splice(i, 1);
            mostrarTareas();
        }
    };

    // CONTADOR
    function actualizarContador() {

        let total = tareas.length;
        let hechas = tareas.filter(t => t.hecha).length;
        let pendientes = total - hechas;

        console.log("Total:", total);
        console.log("Hechas:", hechas);
        console.log("Pendientes:", pendientes);
    }

});