const express = require("express")
const router = express.Router()
const teacherController = require("../controllers/teacherControllers")

router.get("/",  teacherController.showAllTeachers);

/*router.get("/adminpanel", mainController.admin)*/


router.get("/create-teacher", teacherController.showCreateTeacher);

router.post("/create-teacher", teacherController.createTeacher);


module.exports = router