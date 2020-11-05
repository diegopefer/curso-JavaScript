// A) 3 chicos de 23 años perfectamente normales entran a una heladería a comprar un helado pero hay problemas: los precios no están al lado de cada estante con su respectivo helado.
// Ellos quieren comprar el helado más caro que puedan con la plata que tienen, asi que... veamos como podemos ayudarlos.

// Cofla tiene 3€
// Pedro tiene 1.7€
// Roberto tiene 1.5€

// Los precios de los helados son los siguientes:

// palito de helado de agua: 0.6€
// palito de helado de crema: 1€
// bombón helado marca heladix: 1.6€
// bombón helado marca heladovich: 1.7€
// bombón helado marca helardo: 1.8€
// potecito de helado con confites: 2.9€
// pote 1/4 kg : 2.9€

// Soluciones:
// - Pedirles que ingresen el monto que tienen y mostrarles el helado por pantalla
// - Si hay 2 o más con el mismo precio, mostrar ambos.
// - Cofla quiere saber cuanto es la vuelta.


//pide por pantalla cantidad de dinero
let dineroCofla = prompt("¿Cuanto dinero tienes Cofla?");
let dineroPedro = prompt("¿Cuanto dinero tienes Pedro?");
let dineroRoberto = prompt("¿Cuanto dinero tienes Roberto?");

// convertimos "3" en 3. Sirve para convertir en int
dineroCofla = parseInt(dineroCofla);

//condiciones para mostrar el helado que pueden comprar cada uno

// Cofla
if(dineroCofla >= 0.6 && dineroCofla < 1){
    alert("Cofla cómprate el helado de agua");
    alert("Tu vuelta es: " + (dineroCofla - 0.6));
}
else if(dineroCofla >= 1 && dineroCofla < 1.6){
    alert("Cofla cómprate el helado de crema");
    alert("Tu vuelta es: " + (dineroCofla - 1));
}
else if(dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("Cofla cómprate el helado heladix");
    alert("Tu vuelta es: " + (dineroCofla - 1.6));
    
}
else if(dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert("Cofla cómprate el helado heladovich");
    alert("Tu vuelta es: " + (dineroCofla - 1.7));
}
else if(dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert("Cofla cómprate el helado helardo");
    alert("Tu vuelta es: " + (dineroCofla - 1.8));
}
else if(dineroCofla >= 2.9){
    alert("Cofla cómprate el potecito de confites o el pote de 1/4 kg");
    alert("Tu vuelta es: " + (dineroCofla - 2.9));
}
else{
    alert("Lo siento Cofla, no puedes comprar ninguno con tu cantidad de dinero");
}

// Pedro
if(dineroPedro >= 0.6 && dineroPedro < 1){
    alert("Pedro cómprate el helado de agua");
}
else if(dineroPedro >= 1 && dineroPedro < 1.6){
    alert("Pedro cómprate el helado de crema");
}
else if(dineroPedro >= 1.6 && dineroPedro < 1.7){
    alert("Pedro cómprate el helado heladix");
}
else if(dineroPedro >= 1.7 && dineroPedro < 1.8){
    alert("Pedro cómprate el helado heladovich");
}
else if(dineroPedro >= 1.8 && dineroPedro < 2.9){
    alert("cómprate el helado helardo");
}
else if(dineroPedro >= 2.9){
    alert("Pedro cómprate el potecito de confites o el pote de 1/4 kg");
}
else{
    alert("Lo siento Pedro, no puedes comprar ninguno con tu cantidad de dinero");
}


// Roberto
if(dineroRoberto >= 0.6 && dineroRoberto < 1){
    alert("Roberto cómprate el helado de agua");
}
else if(dineroRoberto >= 1 && dineroRoberto < 1.6){
    alert("Roberto cómprate el helado de crema");
}
else if(dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    alert("Roberto cómprate el helado heladix");
}
else if(dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    alert("Roberto cómprate el helado heladovich");
}
else if(dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    alert("Roberto cómprate el helado helardo");
}
else if(dineroRoberto >= 2.9){
    alert("Roberto cómprate el potecito de confites o el pote de 1/4 kg");
}
else{
    alert("Lo siento Roberto, no puedes comprar ninguno con tu cantidad de dinero");
}


