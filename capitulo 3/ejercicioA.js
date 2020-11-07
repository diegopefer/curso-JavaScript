// A) Cofla entró en una tienda que vende móviles porque le pareció bueno comprarse un nuevo celular.
// De todos los modelos que hay disponibles en esa tienda, a Cofla le llamaron la atención 3 teléfonos
// específicamente. El problema es que ningún vendedor sabe nada al respecto entonces no pueden recomendarle
// absolutamente nada; pero claro, Cofla antes de comprar los móviles quierer ver sus carácterísticas
// y comportamientos para poder comprarlos, ahí entramos nosotros en acción.

// 	Crear soluciones:

// 	- Crear un sistema para mostrarle a Cofla las particularidades de los 3 móviles.
// 	- Cada móvil debe tener color, peso, tamaño de pantalla, resolución de cámara y memoria RAM.
// 	- Cada móvil debe poner encenderse, reiniciarse, fotografíar y grabar.


class Movil {
    constructor(color, peso, tamaño, resolucionC, ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionC = resolucionC;
        this.ram = ram;
        this.encendido = false;
    }

    presionarBotonEncendido(){
        if(this.encendido == false){
            alert("Teléfono encendido");
            this.encendido = true;
        }else{
            alert("Teléfono apagado");
            this.encendido = false;
        }
    }

    reiniciar(){
        if(this.encendido == true){
            alert("Reiniciando teléfono");
        }else{
            alert("El teléfono está apagado")
        }
    }

    fotografiar(){
        alert(`Fotografía sacada en una resolucion de ${this.resolucionC}`);
    }

    grabarVideo(){
        alert(`Grabando vídeo en una resolucion de ${this.resolucionC}`);
    }

    mostrarInformacion(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tamaño de pantalla: <b>${this.tamaño}</b><br>
        Resolución de cámara: <b>${this.resolucionC}</b><br>
        Memoria RAM: <b>${this.ram}</b><br>`
        ;
    }
    
}

// creacion de los 3 telefonos

const movil1 = new Movil("negro","150g","5'","full hd","2GB");
const movil2 = new Movil("rojo","150g","5.4'","hd","16GB");
const movil3 = new Movil("azul","132g","5.6'","4k","8GB");

// movil1.presionarBotonEncendido();
// movil1.reiniciar();
// movil1.fotografiar();
// movil1.grabarVideo();

document.write(movil1.mostrarInformacion() + "<br>");
document.write(movil2.mostrarInformacion() + "<br>");
document.write(movil3.mostrarInformacion() + "<br>");