
const {cursos, impresion, consulta, inscripcion} = require ('./cursos');
const {busquedaOpc, inscripcionOpc} = require ('./opciones');
const fs = require('fs');
const argv = require('yargs')
    .command('buscar','Buscar cursos', busquedaOpc, (args)=>consulta(cursos,args.i))
    .command('inscribir', 'Inscribir curso', inscripcionOpc, ({i, n, d}) => inscripcion(i, n, d))
    .command('salir', 'Volver a inicio', () => impresion(cursos))
    .argv


