const db = require("../database/models")

// Definir la función en tu controlador
async function verificarEmail(req, res, next) {
  const email = req.body.email; // Obtener el correo electrónico del req body

  // Buscar el correo electrónico en la base de datos
  const user = await db.Users.findOne({ where: { email: email } })
  console.log(user);
  if (user) {
    res.locals.reEmailError = {
        msg :'El correo electrónico ya está registrado.'
    };
    console.log("No se ha enviado");
    return res.render('register', res.locals.reEmailError);
  }
    // Si el correo electrónico ya existe, renderizar el archivo ejs "register" con el mensaje de error

    // Si el correo electrónico no existe en la base de datos, continuar con el siguiente middleware
    next();
  ;
}

// Exportar la función para utilizarla en el router correspondiente
module.exports = 
  verificarEmail
;