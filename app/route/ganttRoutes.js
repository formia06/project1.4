const express = require("express");
const path = require('path');
const ganttController = require("../controller/ganttController");
const router = express.Router();



router.get("/", function(req, res, err){

  if (!err) {
    res.render('gantt.ejs')
  } else {
    res.send(err)
  }
});

module.exports =router;
