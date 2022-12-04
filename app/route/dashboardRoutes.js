const express = require("express");
const path = require('path');
const dashboardController = require("../controller/dashboardController")
const router = express.Router();
const database = require('../config/db');



router.get("/", dashboardController.findProject);

router.get('/get_data', function(req, res, next) {
  var type = req.query.type;

  var search_query = req.query.parent_value;

  if (type == 'load_number') {
    var query = `SELECT DISTINCT taskNumber AS Data FROM project_finance
    WHERE projectName = '${search_query}'
    ORDER BY taskNumber ASC
    `;
  }

  if (type == 'load_name') {
    var query = `
    SELECT projectName AS Data FROM project_finance
    WHERE taskNumber = '${search_query}'
    ORDER BY ASC
    `;
  };

  database.query(query, function(err, data) {

    var data_arr = [];

    data.forEach(function(row) {
      data_arr.push(row.Data);
    });

    res.json(data_arr);

  });
});

// router.get('/get_data', function(req, res, next) {
//   var type = req.query.type;
//
//   var search_query = req.query.parent_value;
//
//   if (type == 'load_description') {
//     var query = `
//     SELECT DISTINCT description AS data FROM departments
//     WHERE description = `
//     $ {
//       search_query
//     }
//     `
//     ORDER BY state ASC
//     `;
//   }
//
//   database.query(query, fucntion(err, data) {
//
//     var data_arr = [];
//
//     data.forEach(function(row) {
//       data_arr.push(row.Data);
//     });
//
//     res.json(data_arr);
//   });
// });


module.exports = router;
