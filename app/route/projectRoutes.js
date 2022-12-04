const express = require("express");
const projectController = require("../controller/projectController")
const router = express.Router();


router.route("/").get(projectController.getAllProjectFinance);

router.get("/view/:projectName",projectController.getProjectByName);


module.exports =router;
