const { body } = require('express-validator')


module.exports = [
    body('name').notEmpty().withMessage('Este campo debe estar completo.'),
    body('lastname').notEmpty().withMessage('Este campo debe estar completo.'),
    body('email').isEmail().withMessage('Debes colocar un email valido.'),
    body('password')
        .isLength(5)
        .withMessage('Tu contraseña debe tener un minimo de 5 caracteres'),
        body('rePassword').custom((value, extra) => {
            if (value !== extra.req.body.password) {
                throw new Error(
                    'La contraseña repetida no coincide con la original'
                )
            }
    

            return true
        }),

   
]