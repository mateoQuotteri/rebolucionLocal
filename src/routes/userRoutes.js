const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersControllers");
const registerValidation = require("../validations/registerValidation");
const loginValidation = require("../validations/loginValidation");
const changePassValidation = require("../validations/changePassValidation")
const guestMiddleware = require("../middlewares/guestMiddleware")
const authMiddleware = require("../middlewares/authMiddleware")
const reEmailMiddleware = require("../middlewares/reEmailMiddleware")
const editionDataValidation = require("../validations/editionDataValidation")

router.get("/register", guestMiddleware ,userController.register)
router.post("/register", registerValidation, reEmailMiddleware, userController.createNewUser)



router.get("/login",  guestMiddleware ,userController.showLogin)
router.post("/login",  loginValidation ,userController.login)


router.get("/my-profile", authMiddleware , userController.showMyProfile)
router.delete("/my-profile", userController.logout)

router.get("/my-profile/edit", authMiddleware ,userController.showEditMyProfile)
router.put("/my-profile/edit", authMiddleware , editionDataValidation ,userController.editMyProfile)


router.get("/my-profile/edit/my-password" , authMiddleware, userController.showEditPassword)
router.put("/my-profile/edit/my-password" , authMiddleware, changePassValidation, userController.editPassword)




module.exports = router