const ProjectFinance = require ('../model/projectFinance');

var express = require('express');
const path = require('path');
var router = express.Router();




exports.getAllProjectFinance = async (req, res, next) => {
  try {

    const [projectFinance] = await ProjectFinance.findAll();

    res.status(200).render('projects.ejs', {
      projectFinance: projectFinance,
      action: "list"
    });

  } catch (error) {
    console.log(error);
    next(error);
  };
}


exports.getProjectByName = async (req, res, next) => {
  try {
    let projectName = req.params.projectName;
    const [projectFinance] = await ProjectFinance.findByName(projectName);

    res.status(200).render('projects.ejs', {
      projectFinance: projectFinance,
      action: "findByName"
    });
  } catch (error) {
    console.log(error);
    next(error);
  };

}
