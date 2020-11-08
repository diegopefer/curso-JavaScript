// C) Coflaya vio las 12 materias en cual se va a inscribir asi que en tres días lo hará, el problema es que se estropeó el sistema de inscripciones.

// - Crear una función para preguntarle a Cofla en que materia se quiere inscribir.
// - Si ya hay 20 alumnos en la materia, negarle la inscripción.
// - Si hay menos de 20 alumnos, inscribir a Cofla y añadirlo a la lista e alumnos.


let materias = {
    fisica: ["perez", "antonio", "lucas", "juan"],
    matematicas: ["lopez", "antonio", "lucas"],
    seguridad: ["ramos", "antonio", "cofla","carlos"],
    programacion: ["hernandez", "cofla", "pedro"]
}


const inscribir = (alumno,materia)=>{

    let personas = materias[materia];
    personas.shift(); //eliminamos al profesor(primer elemento)

    if(personas.length >= 21){ //profesor + 20 alumnos
        document.write(`lo siento <b>${alumno}</b>, las clases estan llenas.`)
    }else{
        personas.push(alumno);
        if(materia == "fisica"){
             materias = {
                fisica: personas,
                matematicas: materias['matematicas'],
                seguridad:  materias['seguridad'],
                programacion:  materias['prgramacion']
            }
        }
        else if(materia == "matematicas"){
            materias = {
               fisica: materias['fisica'],
               matematicas: personas,
               seguridad:  materias['logica'],
               programacion:  materias['quimica']
           }
       }
       else if(materia == "seguridad"){
            materias = {
                fisica: materias['fisica'],
                matematicas: materias['matematicas'],
                seguridad:  personas,
                programacion:  materias['quimica']
            }
       
        }
        else if(materia == "programacion"){
            materias = {
                fisica: materias['fisica'],
                matematicas: materias['matematicas'],
                seguridad:  materias['seguridad'],
                programacion: personas
            }
       
        }
       
        document.write(`felicidades <b>${alumno}</b>, te has inscrito en la materia ${materia} correctamente.<br>`);
    }
}

document.write(materias['programacion'] + "<br><br>");
inscribir("cofla","programacion");
inscribir("pedro","programacion");
inscribir("antonio","programacion");
inscribir("juan","programacion");
inscribir("ana","programacion");
inscribir("felipe","programacion");
inscribir("marta","programacion");
inscribir("matias","programacion");
inscribir("marcos","programacion");


document.write("<br>"+ materias['programacion']);