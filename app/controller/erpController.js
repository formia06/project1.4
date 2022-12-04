const Department = require('../model/departments');
const Income = require('../model/income');
const Expenses = require('../model/expenses');
const Project = require('../model/project')
var express = require('express');
const path = require('path');
var router = express.Router();


// render('erp.ejs', {
//   sql: departments
// })

exports.erpHome = async (req, res, next) => {
  try {
    const [departments, _] = await Department.findAll();
    const [income] = await Income.findTopTen();
    const [expenses] = await Expenses.findTopTen();
    const [project] = await Project.findAll();


    res.status(200).render('erp.ejs', {
      departments: departments,
      income: income,
      expenses: expenses,
      project: project,
      action: "list"
    });

  } catch (error) {
    console.log(error);
    next(error);
  };
}


// exports.queryIncome = async (req, res, next) => {
//   try {
//     const [income, _] = await Income.query();
//     res.status(200).JSON({income})
//   } catch (error) {
//     console.log(error);
//     next(error);
//   };
// }

exports.queryIncome = async (req, res, next) => {
  try {

    let {
      name, chart_id
    } = req.body;

    let income = new Income(name, chart_id);

    income = await income.query();
    res.status(200)

  } catch (error) {
    console.log(error);
    next(error);
  };
}


exports.getAllIncome = async (req, res, next) => {
  try {
    const [income, _] = await Income.findAll();
    res.status(200)

  } catch (error) {
    console.log(error);
    next(error);
  };
}

exports.createNewIncome = async (req, res, next) => {
  try {
    let {
      invoice_no, chart_id,name, description, qty, amount, duedate
    } = req.body;

    let income = new Income(invoice_no, chart_id, name, description, qty, amount, duedate);

    income = await income.save();

    res.status(201).redirect("/erp")

  } catch (error) {
    console.log(error);
    next(error);
  };
}

exports.getInvoiceById = async (req, res, next) => {
  try {
    let invoice_no = req.params.income;
    let [income, _] = await Income.findById(invoice_no);

    res.status(200).json({
      income: income[0]
    });
  } catch (error) {
    console.log(error);
    next(error);
  }

};

exports.getAllExpenses = async (req, res, next) => {
  try {
    const [expenses, _] = await Expenses.findAll();
    res.status(200).render('erp.ejs', {
      sql: expenses
    })

  } catch (error) {
    console.log(error);
    next(error);
  };
}


exports.createNewExpense = async (req, res, next) => {
  try {
    let {
      bill_no, chart_id, name, description, qty, amount, duedate
    } = req.body;

    let expenses = new Expenses(bill_no, chart_id,name, description, qty, amount, duedate);

    expenses = await expenses.save();

    res.status(200).redirect("/erp")

  } catch (error) {
    console.log(error);
    next(error);
  };
}

exports.getAllDepartments = async (req, res, next) => {
  try {
    const [departments, _] = await Department.findAll();
    res.status(200).json({
      departments
    });

  } catch (error) {
    console.log(error);
    next(error);
  };
}
