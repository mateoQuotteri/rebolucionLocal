const db = require("../database/models")
const passport = require("passport")
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const bcrypt = require("bcryptjs")



const GOOGLE_CLIENT_ID ="219187070770-8etp7aglnutn7ne64q52ppvt7c79gkq9.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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"

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/google/callback",
    passReqToCallback   : true
  },

 async function  (req, accessToken, refreshToken, profile, done) {
    //const user = await db.Users.findOne({ where: { email: profile && password : profile.id } })


    
    const idGoogle = profile.id
    console.log("este es el id google "  + idGoogle);
    
    const user = await db.Users.findOne({ where: { email: profile.email } })
    
    if (user) {
  console.log("este es el user " + user);
 
    return done(null, user)
}




   db.Users.create({
    email: profile.email,
    name: profile.given_name,
    lastname : profile.family_name,
    googleID :idGoogle,

   
}
).then((user) => {
   return done(null, user)
}
  
)  
}

)

);
passport.serializeUser(async function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function(id, done) {
  await db.Users.findByPk(id).then(user => {
      done(null, user);
  });
});


/*

    passport.serializeUser: este método se llama cuando el usuario inicia sesión y se utiliza 
    para serializar al usuario, lo que significa que se toma la información del usuario y se guarda en la sesión. En este método, se debe elegir qué información del usuario se quiere guardar en la sesión, como su ID, nombre, correo electrónico, etc.

    passport.deserializeUser: este método se llama cuando el usuario hace una solicitud al 
    servidor y Passport.js necesita obtener la información del usuario de la sesión. Este método toma la información serializada del usuario que se guardó en la sesión y la convierte en un objeto de usuario que se puede utilizar en la aplicación.

    passport.authenticate: este método se utiliza para autenticar a los usuarios en las rutas 
    protegidas de la aplicación. Si un usuario intenta acceder a una ruta protegida y no ha iniciado sesión, Passport.js redirigirá al usuario a la página de inicio de sesión. Si el usuario ha iniciado sesión correctamente, Passport.js permitirá que el usuario acceda a la ruta protegida.



En resumen, passport.serializeUser se utiliza para guardar
 la información del usuario en la sesión, passport.deserializeUser se utiliza para recuperar la información del usuario de la sesión y
 passport.authenticate se utiliza para autenticar a los usuarios en las rutas protegidas. */