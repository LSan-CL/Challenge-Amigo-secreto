let amigos = [];

function agregarAmigo() {
    let input = document.getElementById('amigo'); //Capturar el valor del campo de entrada
    let nombre = input.value.trim();
        if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Validar la entrada
    }

    amigos.push(nombre); //Actualizar el array de amigos

    input.value = ""; //Limpiar el campo de entrada:

    mostrarListaAmigos(); 

 }

function mostrarListaAmigos() {
    let lista = document.getElementById('listaAmigos'); //ver los nombres en la html
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) { //Iterar sobre el arreglo
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}


function sortearAmigo() {
    if (amigos.length === 0) { //Validar que haya amigos disponibles
        alert("Faltan mnombres para sortear.");
        return;
    }
        let indiceAleatorio = Math.floor(Math.random() * amigos.length); //Generar un índice aleatorio

        let amigoSorteado = amigos[indiceAleatorio]; //Obtener el nombre sorteado

        let resultadoHTML = document.getElementById('resultado'); //Mostrar el resultado
        resultadoHTML.innerHTML = `<li>Tu Amigo secreto es: ${amigoSorteado}</li>`;
}

