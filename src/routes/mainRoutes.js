/* eslint-disable no-undef */
const express = require("express")
const router = express.Router()
const mainController = require("../controllers/mainController")
const userController = require("../controllers/usersControllers")
/*const productController = require("../controllers/productsControllers")*/
const authMiddleware = require("../middlewares/authMiddleware")
const adminMiddleware = require("../middlewares/adminMiddleware");
const passport = require("passport")
const db = require("../database/models")

const auth = require("../middlewares/auth")

router.get("/", mainController.index)
/*router.get("/adminpanel", mainController.admin)*/

router.get("/aviso", authMiddleware ,mainController.aviso)

router.get("/contact-us", authMiddleware,mainController.contact)
router.get("/adminpanel", authMiddleware, adminMiddleware, mainController.showAdminPanel)

router.get("/auth/google" , passport.authenticate("google" ,{scope: ["email" , "profile"] }, ))

router.get("/google/callback", passport.authenticate(
    "google",
    {
        failureRedirect : "/auth/failure"
     }
),passport.authenticate('session'), async function (req,res) {
    const id = req.session.passport.user;
    const userLogged = await db.Users.findOne({ where: { id: id } })
    req.session.loggedUser =  userLogged
    console.log(req.session.loggedUser);

    res.redirect("/")
}
)

router.get("/auth/failure", mainController.errorGoogleAuth)


router.get("/resources", mainController.showResources)



module.exports = router