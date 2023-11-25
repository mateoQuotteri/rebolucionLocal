const { check } = require('express-validator')

module.exports = [
    check('password').notEmpty().withMessage('Debes colocar tu contraseña actual.'),
    check('newPassword')
        .isLength({ min: 5 })
        .withMessage('La contraseña debe tener al menos 5 caracteres'),
]