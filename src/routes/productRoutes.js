const express = require("express")
const router = express.Router()
const productController = require("../controllers/productController")
const fileUpload = require("../middlewares/multer")

/*const productController = require("../controllers/productsControllers")*/
const moduleValidator = require("../validations/createModuleValidation")
const authMiddleware = require("../middlewares/authMiddleware")
const adminMiddleware = require("../middlewares/adminMiddleware");

const editionOfModulesRoutes = require("./editModulesRoutes")

router.get("/", authMiddleware ,productController.index);

/*router.get("/adminpanel", mainController.admin)*/


router.get("/createmodule", adminMiddleware, productController.showCreateModule);



router.post("/createmodule",
fileUpload.single("image"), 
moduleValidator,
productController.createModule)

router.get("/showmodulestoedit", adminMiddleware, productController.showModulesToEdit);

router.use("/editmodule/", editionOfModulesRoutes);


router.get("/showmodulestodelete" , adminMiddleware,productController.showModulesToDelete)
router.get("/deletemodule/:id" , adminMiddleware, productController.showDeleteModule)
router.delete("/deletemodule/:id" , adminMiddleware, productController.deleteModule)


router.get("/:id" , authMiddleware , productController.showModuleDetail)
module.exports = router