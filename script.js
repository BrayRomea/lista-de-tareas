const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


// 1. Función para agregar una nueva tarea
function addTask() {
    // Validar que el campo no esté vacío
    if (inputBox.value.trim() === "") {
        alert("¡Debes escribir algo primero!");
    } else {
        // Crear un nuevo elemento de lista
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);


        // Crear el botón para eliminar la tarea
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }


    // Limpiar el campo de entrada
    inputBox.value = "";


    // Guardar los cambios
    saveData();
}


// 2. Detectar clics en las tareas y en el botón de eliminar
listContainer.addEventListener("click", function (e) {
    // Marcar o desmarcar una tarea
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    // Eliminar una tarea 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});


// 3. Guardar las tareas en LocalStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}


// 4. Mostrar las tareas guardadas
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}


// 5. Cargar las tareas al abrir la página
showTask();