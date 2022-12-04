const db = require('../config/db');

class Expenses{
  constructor(bill_no, chart_id,name,description,qty,amount,net,tax,paid,duedate,transdate,project_id,department_id){
    this.bill_no = bill_no;
    this.chart_id = chart_id;
    this.name = name;
    this.description = description;
    this.qty =qty;
    this.amount = amount;
    this.net = net;
    this.tax = tax;
    this.paid = paid;
    this.duedate = duedate;
    this.transdate = transdate;
    this.project_id = project_id;
    this.department_id = department_id;

  }
  save() {
    let sql = `INSERT INTO expenses (bill_no, chart_id,name, description, qty, amount, duedate) VALUES
    ('${this.bill_no}','${this.chart_id}','${this.name}','${this.description}','${this.qty}','${this.amount}','${this.duedate}')`;
    // const newExpense = db.execute(sql);

    return db.execute(sql);
  }


  static findAll() {
    let sql = "SELECT * FROM expenses"

    return db.execute(sql);
  }

  static findById(bill_no) {
    let sql = `SELECT * FROM expenses WHERE bill_no = ${bill_no};`;

    return db.execute(sql);
  }

  static findTopTen(){
    let sql = "SELECT * FROM expenses LIMIT 10"

    return db.execute(sql);
  }

}

module.exports = Expenses;
