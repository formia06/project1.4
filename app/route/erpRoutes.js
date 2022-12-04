const express = require("express");
const path = require('path');
const erpController = require("../controller/erpController")
const router = express.Router();




router.route("/").get(erpController.erpHome);

router.route("/invoice_no").get(erpController.getInvoiceById);

router.get("/new_income", function(request, response, next) {
  response.render("erp", {
    action: "new_income"
  });
});

router.post("/new_income_add", erpController.createNewIncome);


router.get("/new_expense", function(request, response, next) {
  response.render("erp", {
    action: "new_expense"
  });
});

router.post("/new_expense_add", erpController.createNewExpense);

router.route("/queryIncome").get(erpController.queryIncome);

module.exports =router;
