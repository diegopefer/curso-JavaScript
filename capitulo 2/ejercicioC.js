// C) Cofla feliz por haber empezado las clases volvió a su casa y ya tiene la tarea básica de cálculo;
// tiene que hacer un par de ejercicios de matemáticas que incluyen suma, resta, división y multiplicación.
// Realizar esto con una calculadora puede ser mucho más efectivo.

// - Crear calculadora que nos simplifique el trabajo


// creacion de las funciones

const sumar = (num1,num2)=> {
    return parseInt(num1) + parseInt(num2); //por las dudas parseamos las variables porque pedimos los datos por prompt
}


const restar = (num1,num2)=> {
    return parseInt(num1) - parseInt(num2);
}


const dividir = (num1,num2)=> {
    return parseInt(num1) / parseInt(num2);
}


const multiplicar = (num1,num2)=> {
    return parseInt(num1) * parseInt(num2);
}

alert("¿Que operación deseas realizar?");
let operacion = prompt("1 = SUMA, 2 = RESTA, 3 = DIVISIÓN, 4= MULTIPLICACIÓN");

if(operacion == 1){
    let numero1 = prompt("Introduce el primer número para sumar");
    let numero2 = prompt("Introduce el segundo número para sumar");

    let resultado = sumar(numero1, numero2);
    alert(`El resultado es: ${numero1} + ${numero2} = ${resultado} `);
}
else if(operacion == 2){
    let numero1 = prompt("Introduce el primer número para restar");
    let numero2 = prompt("Introduce el segundo número para restar");

    let resultado = restar(numero1, numero2);
    alert(`El resultado de la operación ${numero1} - ${numero2} = ${resultado} `)
}
else if(operacion == 3){
    let numero1 = prompt("Introduce el dividendo");
    let numero2 = prompt("Introduce el divisor");

    let resultado = dividir(numero1, numero2);
    alert(`El resultado de la operación ${numero1} / ${numero2} = ${resultado} `)
}
else if(operacion == 4){
    let numero1 = prompt("Introduce el primer número para multiplicar");
    let numero2 = prompt("Introduce el segundo número para multiplicar");

    let resultado = multiplicar(numero1, numero2);
    alert(`El resultado de la operación ${numero1} * ${numero2} = ${resultado} `)
}
else{
    alert("No se ha encontrado la operación introducida")
}