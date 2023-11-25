const { body } = require('express-validator')

module.exports = [
    body('title').notEmpty().withMessage('Coloca un titulo para el modulo'),
    body('shortDescription').notEmpty().withMessage('Coloca una corta descripcion para el modulo'),
    body('difficulty').notEmpty().withMessage('Coloca una dificultad para el modulo.'),
    body('units').notEmpty().withMessage('Coloca la cantidad de unidades del modulo'),
    body('video').notEmpty().withMessage('Coloca el video del modulo'),
    body('id_teacher').notEmpty().withMessage('Coloca el id del profesor que dicta el modulo'),
 
]