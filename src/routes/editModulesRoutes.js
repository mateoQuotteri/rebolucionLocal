const express = require("express")
const router = express.Router()
const productController = require("../controllers/productController")

/*const productController = require("../controllers/productsControllers")*/
const moduleValidator = require("../validations/createModuleValidation")
const authMiddleware = require("../middlewares/authMiddleware")
const adminMiddleware = require("../middlewares/adminMiddleware");


const fileUploadForUpdateModule = require("../middlewares/multerForUpdateModule")

router.get("/:id", adminMiddleware, productController.showEditModule);

router.put("/:id",  fileUploadForUpdateModule.single("newImage"),
 moduleValidator,
 productController.editModule);


module.exports = router