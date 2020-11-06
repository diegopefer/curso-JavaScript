// A) Un joven muy afortunado logró ganar el primer premio de la lotería...exacto, estamos hablando del pobre
// al que Cofla le echo una mano, este pobre decide hacer una fiesta para festejar que salió de la pobreza con este
// billete de lotería que salió ganador. El ahora millonario compró una máquina que deja pasar a:

// - mayores de edad
// - primera persona que accede a la fiesta despues de las 2 AM, no paga.

let gratis = false;

const validarCliente = (hora)=>{
    let edad = prompt("Cual es tu edad?");

    if( edad >= 18){
        if( hora >= 2 && hora < 7 && gratis == false){
            alert("Puedes entrar gratis, eres la primera persona despues de las 2 AM, adelante!");
            gratis=true;
        }else{
            alert(`Son las ${hora} y puedes pasar, pero deberás pagar tu entrada`);
        }
    }else{
        alert("Eres menor de edad, no puedes entrar, lo siento.");
    }
}

validarCliente(2);
// sola pasa la primera persona despues de las 2 AM, porque la variable "gratis" cambio a true porque el primero que ha entrado y ya no vuelve a ser true.
validarCliente(3);


