const busquedaOpc = {
    idCurso: {
        alias: 'i'
    }
}

const inscripcionOpc = {
    idCurso: {
        alias: 'i',
        demand: true
    },
    nombreEstudiante: {
        alias: 'n',
        demand: true
    },
    idEstudiante: {
        alias: 'd',
        demand: true
    }
}

module.exports = {
    busquedaOpc,
    inscripcionOpc
};