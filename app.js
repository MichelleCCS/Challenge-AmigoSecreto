// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombreAmigos = [];

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo () {
    let amigoUsuario = document.getElementById("amigo").value; //Capturar el valor del campo de entrada
    if (amigoUsuario === "") { 
        alert("Por favor, inserte un nombre"); //Validar la entrada: asegura que el campo no esté vacío. Muestra una alerta con un mensaje de error
    } else {
        nombreAmigos.push (amigoUsuario); // Actualiza el array de nombreAmigos: almacena los nombre de amigos usando el método.push().
        document.getElementById("añadir").setAttribute("enabled","true"); 
        return amigoUsuario;
    }
    limpiarCaja (); //Limpia el campo de entrada
}

function limpiarCaja () {
    document.querySelector("#amigo").value = "";
}

/* Tareas específicas:

Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.

Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.

Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.

Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.*/

function actualizaAmigos () {
    
} 

function sortearAmigo () {

}