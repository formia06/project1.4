const db = require('../config/db');


class Test {
  constructor(name, project_no, invoice_no, bill_no, invoice_amount, expense_amount){
    this.name = name;
    this.project_no = project_no;
    this.invoice_no = invoice_no;
    this.bill_no = bill_no;
    this.invoice_amount = invoice_amount;
    this.expense_amount = expense_amount;
  }

  static findAll(){
    let sql =
    "SELECT project.name, project.project_no, income.invoice_no, expenses.bill_no, SUM (income.amount) as income, SUM (expenses.amount) as expense    FROM project    INNER JOIN income ON project.project_id = income.project_id    INNER JOIN expenses ON project.project_id = expenses.project_id GROUP BY project.project_no";

    return db.execute(sql);
  }

}





module.exports = Test;
