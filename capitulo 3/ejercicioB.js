
// B) Cofla no está satisfecho con los móviles así que decide ir a la sección de móviles de alta gama, donde va a poder
// encontrar los móviles más caros del lugar. Al entrar vio 2 móviles que le encantaron, de alta cámara super lenta,
//  reconocimiento facial y camara extra.

// 	Crear soluciones:
	
// 	- Implementar todas las cualidades en los celulares de alta gama


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
        Memoria RAM: <b>${this.ram}</b><br>
        Resolución de cámara: <b>${this.resolucionC}</b><br>`
        ;
    }
    
}

class MovilAltaGama extends Movil{
    constructor(color,peso,tamaño,resolucionC,ram,resolucionCExtra){
        super(color,peso,tamaño,resolucionC,ram);
        this.resolucionCExtra = resolucionCExtra;
    }

    grabarCamaraLenta(){
        
        alert("Estás grabando en cámara lenta");
    }

    reconocimientoFacial(){

        alert("Vamos a iniciar el reconocimiento facial.");
    }

    mostrarInformacionAltaGama(){
        return this.mostrarInformacion() + `Resolución cámara extra: <b>${this.resolucionCExtra}</b><br>`;
    }
}


// creacion de los 3 telefonos
// const movil1 = new Movil("negro","150g","5'","full hd","2GB");
// const movil2 = new Movil("rojo","150g","5.4'","hd","16GB");
// const movil3 = new Movil("azul","132g","5.6'","4k","8GB");


// creacion telefonos alta gama
const movil4 = new MovilAltaGama ("rojo","175g","6'","4k","16GB","full hd");
const movil5 = new MovilAltaGama ("oro","150g","6.2'","4k","64GB","full hd");
const movil6 = new MovilAltaGama ("plata","175g","6.3'","4k","128GB","4k");

// movil1.presionarBotonEncendido();
// movil1.reiniciar();
// movil1.fotografiar();
// movil1.grabarVideo();

// document.write(movil1.mostrarInformacion() + "<br>");
// document.write(movil2.mostrarInformacion() + "<br>");
// document.write(movil3.mostrarInformacion() + "<br>");

document.write(movil4.mostrarInformacionAltaGama() + "<br>");
document.write(movil5.mostrarInformacionAltaGama() + "<br>");
document.write(movil6.mostrarInformacionAltaGama() + "<br>");