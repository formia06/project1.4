const Department = require('../model/departments');
const Income = require('../model/income');
const Expenses = require('../model/expenses');
const Project = require ('../model/project');
const AccTrans = require ('../model/acc_trans');
const Chart = require ('../model/Chart');
const Employee = require ('../model/Employee');
const Stock = require ('../model/Stock');
const Test = require ('../model/test');






var express = require('express');
const path = require('path');
var router = express.Router();




exports.getAllTest = async (req, res, next) => {
  try {

    const [test, _] = await Test.findAll();

    res.status(200).render('projects.ejs', {
      test: test
    });

  } catch (error) {
    console.log(error);
    next(error);
  };
}
