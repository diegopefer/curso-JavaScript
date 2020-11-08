// B) La facultad está por comenzar y ya las 12 materias de la carrera tienen asignado un profesor y todos los alumnos
// que se anotaron en dichas clases, pero necesitamos ver esto de manera ordenada.

//     - Crear una función que al pasarle como parámetro la materia nos devuelva:
//         1. profesor asignado
//         2. nombre de todos los alumnos

//     - Crear función que nos diga en cuantas clases está Cofla.
//     - Mostrar las clases en las que está y los profesores de cada una.


const obtenerInformación = (materia)=>{
    // array de elementos clave-valor en que cada valor es un array. Primer elemento de los array es el profesor
     const materias = {
        fisica: ["perez", "antonio", "lucas", "juan"],
        matematicas: ["lopez", "antonio", "lucas"],
        seguridad: ["ramos", "antonio", "cofla","carlos"],
        programacion: ["hernandez", "cofla", "pedro"]
    }

    if(materias[materia] != undefined){
        return [materias[materia],materia,materias]; //devuelve un array con la materia y los alumnos de ella
    }else{
        return materias;
    }
}

// mostrar informacion de todas las materias

const mostrarInformacionMaterias = (materia)=>{
    let informacion = obtenerInformación(materia);

    if(informacion !== false){
        let profesor = informacion[0][0]; //acceso al primer elemento del array
        let alumnos = informacion[0].shift();//elimina el primer elemento y lo devuelve el eliminado
        alumnos = informacion[0]
        document.write(`El profesor de materia <b>${informacion[1]}</b> es: ${profesor} <br>
        Los alumnos son: ${alumnos}<br><br>`);
    }
}

mostrarInformacionMaterias("fisica");
mostrarInformacionMaterias("matematicas");
mostrarInformacionMaterias("seguridad");
mostrarInformacionMaterias("programacion");

//mostra en cuantas clases esta un alumno(Cofla)

const cantidadClases = (alumno)=>{
    let informacion = obtenerInformación();
    let cantidadTotal = 0;
    let clasesPresentes = []; //clases en las que esta el alumno

    for (info in informacion){
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    }
    return `el alumno <b>${alumno}</b> está en ${cantidadTotal} clases: <b>${clasesPresentes}</b>`;
    
}

document.write(cantidadClases("cofla")+"<br>");
document.write(cantidadClases("antonio") + "<br>");