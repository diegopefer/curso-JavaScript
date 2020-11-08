// A)Terminó el primer semestre y Cofla no sabe si aprobará o no las materias, para lograrlo necesitará:
// Contar con al menos el 90% de asistencia
// Promedio por materia debe ser de al menos 7/10
// Debe tener al menos el 75% de los trabajos practicos entregados

// - Solicitar los datos y decirle si aprueba o no
// - Mostrar todo esto con colores respresentativos en consola (Ej: no aprobar en rojo)
// - Todo esto estructurado como tabla


let materias = {
    fisica: [90,6,4,"fisica"],//1er el: asistencia, 2º el: promedio materia, 3º el: 3 trabajos 75%, 4º el: nombre materia
    matematicas: [80,6,2,"matematicas"],
    logica: [60,6,3,"logica"],
    bbdd: [40,8,4,"bbdd"],
    diseño: [91,6,3,"diseño"],
    dibujo: [75,4,3,"dibujo"],
    ortografia: [92,6,3,"ortografia"]
}

const aprobar = ()=>{
    for (materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];
        console.log(materias[materia][3]);
        if (asistencias >= 90){
            
            console.log("%c Asistencia Aprobado","color:green;font-weight:bold");
        }else{
           
            console.log("%c Asistencia Suspenso","color:red;font-weight:bold");
        }

        if(promedio >= 7){
           
            console.log("%c Promedio superado","color:green;font-weight:bold");
        }else{
            
            console.log("%c Promedio no superado","color:red;font-weight:bold");
        }

        
        if(trabajos >= 3){
            
            console.log("%c Trabajos Aprobado","color:green;font-weight:bold");
        }else{
            
            console.log("%c Trabajos Suspenso","color:red;font-weight:bold");
        }


    }
}

aprobar();