// B) Cofla vuelve de la comisaría exhausto y por lo cansado que estaba se fue a dormir. Al otro día comienzan las clases
// de ciclo básico de la universidad (Cofla quiere ser programador y se inscribió en la facultad de ingeniería para estudiar
// desarrollo de software). 

// En su curso en total son 19 alumnos, pero surgió un problema que complicó un poco a la facultad: se dañó el sistema de
// registro de asistencia y durante los próximos 30 días no se podrán registrar datos de ningún tipo, por lo tanto las clases no 
// podrán comenzar hasta que esto se solucione.

// - Crear minisistema que permita registrar los alumnos que están presentes (P) y ausentes (A) en clase.
// - Pasados 30 días, mostrar las situación final de todos los alumnos (nº total de presentes y ausentes).
// - Se puede tener un máximo de 10% de ausencias por mes, si se tienen más aclarar que está suspendido.


let cantidad = prompt("cuantos alumnos son?");
let alumnosTotales = []; //array vacio

// En cada iteracion guardamos en cada posicion de alumnos totales un array con el nombre y la cantidad de asistencias 
for (i = 0; i < cantidad ; i++){
    alumnosTotales[i] = [prompt("nombre del alumno " + (i+1)), 0]; // 0 es la cantidad de asistencias. 
}

// funcion para pasar asistencia de la clase, si es P se incrementa en 1 las asistencias del alumno
const pasarAsistencia = (nombre, posicion) =>{

    let presencia = prompt(nombre);
    if(presencia == "p" || presencia == "P"){
        alumnosTotales[posicion][1]++;
    }
}


// ejecucion del bucle para 30 dias y llamar a la funcion para que pase la asistencia 30 dias seguidos
for (i = 0; i < 30 ; i++){
    for (alumno in alumnosTotales){
        pasarAsistencia(alumnosTotales[alumno][0],alumno); //solo le pasamos el nombre del alumno con alumnosTotales[alumno][0] , porque [0] es donde esta guardado el nombre y la posicion, que es "alumno" solamente en el "for in"
    }
}

// bucle para mostrar presencias y ausencias de todos los alumnos. 
// Ausencias= 30 dias - presencias
for (alumno in alumnosTotales){
    let resultado = `<b>${alumnosTotales[alumno][0]}</b><br>
    -------presentes: ${alumnosTotales[alumno][1]} <br>
    -------ausentes: ${30 - alumnosTotales[alumno][1]}` 
            ;
    //10% ausencias al mes es máximo 3
    if(30 - alumnosTotales[alumno][1] > 3){
        resultado += "<b style='color:red'> SUSPENDIDO POR AUSENCIAS</b><br>";
    }else{
        resultado += "<br><br>";
    }
    document.write(resultado);
}
