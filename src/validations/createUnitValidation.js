const { body } = require('express-validator')

module.exports = [
    body('id_modulo').notEmpty().withMessage('Coloca un el id del modulo al que pertenece dicha unidad.'),
    body('title').notEmpty().withMessage('Coloca un titulo para la unidad.'),
    body('description').notEmpty().withMessage('Coloca descripcion para la unidad.'),
    body('video').notEmpty().withMessage('Coloca una url que corresponda al video de la unidad.'),
 
]