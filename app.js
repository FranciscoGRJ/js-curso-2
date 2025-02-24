function consoleButton () {
console.log("El botton fue clicado")
}

function promptButton () {
    const city = prompt("Ingrese el nombre de una ciudad")
    alert(`Estuve en ${city} y me acorde de tí`)
}

function alertButton ( ) {
    alert("Yo amo JS!")
}

function sum () {
    valueA = prompt("Ingrese A")
    valueB = prompt("Ingrese B")
    alert(`La suma de A y B es ${parseInt(valueA) + parseInt(valueB)}`)
}

let title = document.querySelector("h1")
title.innerHTML= "Hora del desafio"
