const { body } = require('express-validator')


module.exports = [
    body('name').notEmpty().withMessage('Este campo debe estar completo.'),
    body('lastname').notEmpty().withMessage('Este campo debe estar completo.'),
    body('email').isEmail().withMessage('Debes colocar un email valido.'),
    body('phone').notEmpty().withMessage('Debes colocar un celular.'),
    /*Buscar metodo de express valkidaor que valide que el campo contenga un numero de celular*/
    body('country')
        .notEmpty()
        .withMessage('Debes seleccionar el pais en el que resides.'),
    body('state')
        .notEmpty()
        .withMessage('Debes seleccionar el estado en el que resides.'),
    body('city')
        .notEmpty()
        .withMessage('Debes seleccionar la localidad en la que resides.'),
      
    



   
]