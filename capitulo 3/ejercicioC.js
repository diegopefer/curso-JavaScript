// C) Cofla ya tiene su nuevo móvil y ahora está mirando las apps del Play Store ya que quiere jugar a juegos que sean muy populares, que tengan
// buena puntuación y que pesen poco, pero las 7 apps que llamaron su atención son un tanto similares y sabe que si se descarga todas,
// probablemente juegue con todas, pero él solo se va a descargar 2 para tener pérdidas innecesarias de tiempo jugando en su móvil. El problema
// viene cuando no puede decidirse por cual de todas estas apps es la que va a descargar.

// 	Crear soluciones:

// 	- Crear un sistema que ayude a Cofla a decidir que app descargar.
// 	- La información de los instaladores debe contener la cantidad de descargas, la puntuación y tamaño.
// 	- Las apps se deben poder instalar, abrir, cerrar y desinstalar.


class App{

    constructor(descargas, puntuacion, tamaño){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.tamaño = tamaño;
        this.iniciada = false;
        this.instalada = false;
    }

    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("La app está instalada");
        }
    }

    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("La app está desinstalada");
        }
    }

    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("La app está iniciada");
        }
    }

    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("La app está cerrada");
        }
    }

    mostrarInformacion(){
        return `Descargas: <b>${this.descargas}</b><br>
                Puntuación: <b>${this.puntuacion}</b><br>
                Tamaño de la app: <b>${this.tamaño}</b><br>`;
    }

   
}

const app1 = new App("16.000","5 estrellas","90MB");
const app2 = new App("10.000","4 estrellas","200MB");
const app3 = new App("8.000","3.5 estrellas","17MB");
const app4 = new App("6.000","3 estrellas","50MB");
const app5 = new App("26.000","2 estrellas","30MB");
const app6 = new App("10.000","3.9 estrellas","20MB");
const app7 = new App("76.000","4.6 estrellas","40MB");

document.write(`
    ${app1.mostrarInformacion()}<br>
    ${app2.mostrarInformacion()}<br>
    ${app3.mostrarInformacion()}<br>
    ${app4.mostrarInformacion()}<br>
    ${app5.mostrarInformacion()}<br>
    ${app6.mostrarInformacion()}<br>
    ${app7.mostrarInformacion()}<br>
`);

// app.instalar();
// app.abrir();
// app.cerrar();
// app.desinstalar();

