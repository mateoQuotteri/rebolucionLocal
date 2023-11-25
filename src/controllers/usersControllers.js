const db = require("../database/models")
const bcrypt = require("bcryptjs")

const { validationResult } = require("express-validator")


module.exports = {
    register : (req,res)=>{
        res.render("register")
    },
    createNewUser: async (req,res)=>{

    const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.render("register", {
                errors: errors.mapped(),
                old: req.body,
            })
            return
        }
        const user = JSON.parse(JSON.stringify(req.body))
        /*VERIFICO SI EL USUARIO YA ESTA REGISTRADO */

        /*INSERTO USUARIO CON SUS CARACTERISTICAS EN DB*/
     db.Users.create({
            email: user.email,
            name: user.name,
            lastname : user.lastname,
            password: bcrypt.hashSync(req.body.password, 10),
           
        }).then((user) => {
            delete user.rePassword
            req.session.loggedUser = user;
            res.redirect("/")
        }).catch((error) => res.send(error))
        
    },
    showLogin : (req,res)=>{
        res.render("login")
    },
    
    login: async (req,res)=>{


        /*VERIFICO QUE A LA HORA DE ENVIAR EL FORMULARIO DEL LOGIN NO HAYA ERRORES */
        const errors = validationResult(req)
         console.log(errors)
        if (!errors.isEmpty()) {
            res.render("login", {
                errors: errors.mapped(),
                old: req.body,
            })
            return
        }
        const emailLogin = req.body.email
        const password = req.body.password
        /*BUSCO AL USUARIO EN LA DB */
        const user = await db.Users.findOne({ where: { email: emailLogin } })
        /*COMPARO SI EL USER QUE SE ESTA QUERIENDO REGISTRAR COINCIDE 
        CON EL EMAIL Y CONTRASEÑA QUE TENGO YO */
        if (user && bcrypt.compareSync(password, user.password)) {
            req.session.loggedUser = user;
            res.redirect("/")
            return
        }else {
            res.locals.erorrOnLogin = {
                msg :'Algun dato colocado es incorrecto.'
            };
            res.render("login", res.locals.erorrOnLogin)
        }

    },
    showMyProfile: (req, res) => { 
       const user =req.session.loggedUser;
      
       if (user) {
        res.render("user/userProfile", {
           user
        })
    } else {
        res.render("not-found")
    }
    },
    logout: (req, res) => { 
      req.session./*loggedUser.*/destroy((error)=>{
        if (error) {
            console.log(error);
            res.send("Nothing had happened") 
      }else{
        console.log("Destroyed");
        res.redirect("/")
      }
   })

    },
    showEditMyProfile: async(req, res) => {
        const userId = req.session.loggedUser.id



        const userLogged = await  db.Users.findOne({ where: { id: userId } })
       
        if (userLogged) {
         res.render("user/editUserProfile", {
            user : userLogged
         })
     }
    },
    editMyProfile: async (req, res) => {
        const errors = validationResult(req)
        console.log(errors)
       if (!errors.isEmpty()) {
           res.render("login", {
               errors: errors.mapped(),
               old: req.body,
           })
           return
       }

       const phoneOfUser = req.body.phone;
      const phoneToNumber = Number(phoneOfUser);

      
      if(isNaN(phoneToNumber)){
        const userId = req.session.loggedUser.id


        const user = await  db.Users.findOne({ where: { id: userId } })
        console.log("Es NAN");
        res.locals.phoneIsNaN = {
            msg :'El celular colocado no es un numero.'
        };
       return res.render("user/editUserProfile", {
        phoneIsNaN : res.locals.phoneIsNaN ,
            user
        }  
    
       // res.locals.phoneIsNaN , user
    )
    }else {
        console.log("No fue Nan Genio");
    }


    db.Users.update(
        {
           
            name: req.body.name,
            lastname : req.body.lastname,
            email: req.body.email,
            celular: req.body.phone,
            city : req.body.city,
            state : req.body.state,
            country : req.body.country,
            phone : Number(req.body.phone)
            
        },
        {
            where: { id: req.session.loggedUser.id },
        }
    ).then((u) => {
        req.session.loggedUser.name = req.body.name;
        req.session.loggedUser.email = req.body.email;
        req.session.loggedUser.lastname = req.body.lastname;
        req.session.loggedUser.phone = req.body.phone;
        req.session.loggedUser.country = req.body.country;
        req.session.loggedUser.state = req.body.state;
        req.session.loggedUser.city = req.body.city;


        res.redirect("/user/my-profile")
    });

        
    
    },

    showEditPassword : async (req, res) => {
        const userId = req.session.loggedUser.id



        const userLogged = await  db.Users.findOne({ where: { id: userId } })
       
        if (userLogged) {
         res.render("user/editUserPassword", {
            user : userLogged
         })
     } },

     editPassword :async (req,res)=>{

        const errors = validationResult(req)
        console.log(errors)
            if (!errors.isEmpty()) {
                res.render("user/editUserPassword", {
                    errors: errors.mapped(),
                    old: req.body,
                })
                return
            }

            const oldPass = req.body.password;
            const newPass = req.body.newPassword;
            console.log(newPass);
            const userId = req.session.loggedUser.id;
            const userLogged = await  db.Users.findOne({ where: { id: userId } });

            if(bcrypt.compareSync(oldPass, userLogged.password)){
                db.Users.update(
                    {
                        password : bcrypt.hashSync(newPass, 10),
                    },
                    {
                        where: { id: req.session.loggedUser.id },
                    }
                ).then((u) => {
                    req.session.loggedUser.password = bcrypt.hashSync(newPass, 10),
            
            
                    res.redirect("/user/my-profile")
                });
            }else {
                res.locals.errorOnEditPass = {
                    msg :'La contraseña colocada no coincide con la actual!'
                };
                res.render("user/editUserPassword", res.locals.errorOnEditPass)
            }
        
        },

}

