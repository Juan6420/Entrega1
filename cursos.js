const fs=require('fs');
let cursos = [
    {
        id: "it-001",
        nombre: "Italiano 1",
        duracion: 64,
        valor: '100.000'
    },
    {
        id: "cl-001",
        nombre: "Cálculo 1",
        duracion: 80,
        valor: '150.000'
    },
    {
        id: "fs-001",
        nombre: "Física 1",
        duracion: 64,
        valor: '100.000'
    },
    {
        id: "bd-002",
        nombre: "Bases de datos 2",
        duracion: 80,
        valor: '250.000'
    },
    {
        id: "aq-000",
        nombre: "Arquitectura",
        duracion: 80,
        valor: '80.000'
    }
];

let imp=(curso)=>{
    console.log("ID curso: "+curso.id);
    console.log("Nombre curso: "+curso.nombre);
    console.log("Duración (horas): "+curso.duracion);
    console.log("Valor: $"+curso.valor+"\n");
}

let impresion=(materias)=>{
    console.log("***Bienvenido al sistema de listado de cursos***\nLos cursos disponibles actualmente son: \n")
    for(let i=0; i< materias.length; i++){
        setTimeout(function(){
            imp(materias[i]);
        },2000*i);
    }
}

let consulta=(materias, idCurso)=>{
    let curso = materias.find(x => x.id === idCurso);
    if(curso){
        imp(curso);
    }
    else{
        console.log('El curso con ID ' + idCurso + ' no existe.')
    }
    return curso;
}

let inscripcion=(idCurso, nombreEstudiante, idEstudiante)=>{
    let cursoIns = cursos.find(x => x.id === idCurso);
    // let cursoIns = consulta(cursos,idCurso);
    if(cursoIns){
        textoIns = '***INSCRIPCIÓN***\n'+'Nombre del aspirante: ' + nombreEstudiante + '\n' + 'Identificación: ' + idEstudiante + '\n\n'
            + "ID curso: " + cursoIns.id + '\n' + "Nombre curso: " + cursoIns.nombre + '\n' + "Duración (horas): " + cursoIns.duracion + '\n'
            + "Valor: $" + cursoIns.valor + '\n'
        fs.writeFile('inscripcion.txt', textoIns, (err) => {
            if(err) throw(err);
            console.log('Inscripción exitosa')
        });
    }
    else{
        console.log('El ID de curso ingresado no existe');
    }
}

module.exports = {
    cursos,
    impresion,
    consulta,
    inscripcion
};