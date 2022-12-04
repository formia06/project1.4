const Department = require('../model/departments');
const Income = require('../model/income');
const Expenses = require('../model/expenses');
const Project = require('../model/project');
const ProjectFinance = require('../model/projectFinance');
var express = require('express');
const path = require('path');
var router = express.Router();

exports.findProject = async (req, res, next) => {
  try {
    const [projectFinance] = await ProjectFinance.findByProject();


    res.status(200).render("dashboard.ejs",{
      projectFinance: projectFinance
    });

  } catch (error) {
    console.log(error);
    next(error);
  };
}




// exports.filterData = async (req, res, next) => {
//
//
//   function _(element) {
//     return document.getElementById(element);
//   }
//
//   function fetch_data(parent_element, child_element, type) {
//     fetch '/get_data?type='+type+'&partent_value='+parent_element.value+'').then(
//     function(res){
//       return response.json();
//
//     }). then(fucntion (resData){
//       var html ='';
//       if(type == 'load_department'){
//         html = '<option value="">Select Department</option>';
//       }
//
//       for(var i=0; i < resData.length; i++){
//         html ++ '<option value=" '+resData[i]+'">'resData[i]+'</option>'
//       }
//
//       child_element.innerHTML = html;
//     }
//   }
//
//   ('department').onchange = function(){
//     fetch_data(_('department'))
//   }
//
// }
