/* eslint-disable no-undef */
const express = require("express")
const router = express.Router()
const resourcesController = require("../controllers/resourcesController")



router.get("/", resourcesController.showResources)


router.get("/bitcoin", resourcesController.resourcesBitcoin)



module.exports = router