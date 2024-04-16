//Funcion numeros aleatorios del 1 al 100
function crearlist() {
    var list = [];

    for (var i = 0; i < 10; i++) {
        var numero = Math.floor(Math.random() * 100) + 1; //
        list.push(numero);
    }

    return list;
}
var list = crearlist();

var elementolist = document.getElementById("arreglo");
for (var i = 0; i < list.length; i++) {
    var elementoNumero = document.createElement("li");
    elementoNumero.textContent = list[i];
    elementolist.appendChild(elementoNumero);
}


// Funcion Suma de todos los elementos del array
var suma = list.reduce((total,actual)=> total + actual, 0);
var resultadoElement = document.getElementById("resultado");
resultadoElement.textContent = suma;

// promedio de todos los elementos del array

var promedio = suma / list.length
var promedioElement = document.getElementById("promedio");
promedioElement.textContent = promedio;

//Funcion Numero Maximo de los elementos del array

var numMax = Math.max(...list)
var maximoElement = document.getElementById("numMax")
maximoElement.textContent = numMax;

//Funcion Numero Minimo de los elementos del array
var numMin = Math.min(...list)
var minimoElement = document.getElementById("numMin")
minimoElement.textContent = numMin;

//Eliminar el primer elemento y el ultimo
list.shift();
list.pop();

var shiftElement = document.getElementById("shift");
shiftElement.innerHTML = "Array sin el primer elemento ni el ultimo: <span style='font-weight: bold; color:black;'> [" + list.join(", " ) + "]</span>";

//Agregar elemento al final

list.push(69)

var pushElement = document.getElementById("push")
pushElement.innerHTML = "Array Con elemento agregado al final: <span style='font-weight: bold; color:black;'> [" + list.join(", ") + "]</span>";

//Ordenar el arreglo de menor a mayor
list.sort((a, b) => a - b);
var ordenarElement = document.getElementById("menorMayor");
ordenarElement.innerHTML = "El orden de mayor a menor es: <span style='font-weight: bold; color:black;'> [" + list.join(", ") + "]</span>";

//Ordenar el arreglo de menor a mayor
list.sort((a, b) => b - a);
var ordenarElement = document.getElementById("mayorMenor");
ordenarElement.innerHTML = "El orden de mayor a menor es: <span style='font-weight: bold; color:black;' >[" + list.join(", ") + "]</span>";
//mostrar promedios en la consola
console.log(list)

//Calculo de promedio de las notas
document.addEventListener("DOMContentLoaded", function() {
var form = document.querySelector('.form form');
form.addEventListener('submit', function(event) {
event.preventDefault();

// Obtiene los valores de los campos
var nombre = form.querySelector('input[name="nombre"]').value.trim();
var email = form.querySelector('input[name="email"]').value.trim();
var legajo = form.querySelector('input[name="legajo"]').value.trim();
var notas = Array.from(form.querySelectorAll('input[name="nota"]')).map(input => input.value.trim());

// Validar campos vacíos
if (nombre === '' || email === '' || legajo === '' || notas.some(nota => nota === '')) {
    alert('Por favor, completa todos los campos.');
    return;
}

//valida los datos validos de las notas
var notaInvalida = notas.find(nota => isNaN(parseInt(nota)));
if (notaInvalida !== undefined) {
    alert('Por favor, introduce solo números en los campos de notas.');
    return;
}

// Validar formato de email
var emailcorrecto = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailcorrecto.test(email)) {
    alert('Por favor, introduce un email válido.');
    return;
}

// Calcular el promedio de las notas
var total = notas.reduce((acc, nota) => acc + parseFloat(nota), 0);
var promedio = total / notas.length;

// Muestra el resultado del promedio
var resultadoPromedio = form.querySelector('#resultadoPromedio');
resultadoPromedio.textContent = "El promedio es: " + promedio.toFixed(2);});
});
