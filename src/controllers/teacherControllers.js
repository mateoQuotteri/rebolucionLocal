const { validationResult } = require("express-validator")
const db = require("../database/models")

module.exports = {
    showAllTeachers : (req,res)=>{
        db.Teachers.findAll().then((teacher) => {
            res.render("teacher/allTeacher", { teacher })
        })
    },
    showCreateTeacher : (req,res)=>{
        res.render("teacher/createTeacher")
    },
    createTeacher : (req,res)=>{
        db.Teachers.create({
            ...req.body
        }).then((teacher) => {
            res.redirect("/")
        }).catch((error) => res.send(error))
    },
}