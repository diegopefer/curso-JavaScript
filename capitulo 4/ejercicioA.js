// A) Cofla ya está terminando el primer semestre del primer ciclo, la tarea que debe hacer es
// mucho mas avanzada de la que tenia antes, ademas de suma, resta, multiplicacion y division ahora
// necesitará tambien calcular potencias, raices cuadradas y cubicas

// - Perfeccionar la calculadora para poder implementar las nuevas funciones

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

// nuevas funciones para calculadora de Cofla
const potenciar = (num,exp) => {
    
    return num**exp;
}

const raizCuadrada = num => {return Math.sqrt(num)}; 

const raizCubica = num => {return Math.cbrt(num)}; 


alert("¿Que operación deseas realizar?");
let operacion = prompt("1 = SUMA, 2 = RESTA, 3 = DIVISIÓN, 4= MULTIPLICACIÓN , 5: POTENCIACION ,6: RAIZ CUADRADA, 7: RAIZ CÚBICA");

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
else if(operacion == 5){
    let numero1 = prompt("Introduce el primer número para la potencia");
    let numero2 = prompt("Introduce el numero exponente de la potencia");

    let resultado = potenciar(numero1, numero2);
    alert(`El resultado de la operación ${numero1} * ${numero2} = ${resultado} `)
}
else if(operacion == 6){
    let numero1 = prompt("Introduce el numero para calcular la raiz cuadrada");

    let resultado = raizCuadrada(numero1);
    alert(`El resultado de la raiz cuadrada de ${numero1}  = ${resultado} `)
}
else if(operacion == 7){
    let numero1 = prompt("Introduce el numero para calcular la raiz cúbica");

    let resultado = raizCubica(numero1);
    alert(`El resultado de la raiz cúbica de ${numero1}  = ${resultado} `)
}
else{
    alert("No se ha encontrado la operación introducida")
}