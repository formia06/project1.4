const db = require('../config/db');

class Income{
  constructor(invoice_no, chart_id,name,description,qty,amount,net,tax,received,duedate,transdate,project_id,department_id){

    this.invoice_no = invoice_no;
    this.chart_id = chart_id;
    this.name = name;
    this.description = description;
    this.qty =qty;
    this.amount = amount;
    this.net = net;
    this.tax = tax;
    this.received = received;
    this.duedate = duedate;
  }

  save() {

    let sql = `INSERT INTO income(invoice_no, chart_id,name, description, qty, amount, duedate) VALUES
    ('${this.invoice_no}','${this.chart_id}','${this.name}','${this.description}','${this.qty}','${this.amount}','${this.duedate}')`;
    // const newInvoice = db.execute(sql);

    return db.execute(sql);
  }


  static findAll() {
    let sql = "SELECT * FROM income"

    return db.execute(sql);
  }

  static findById(invoice_no) {
    let sql = `SELECT * FROM income WHERE invoice_no = ${invoice_no};`;

    return db.execute(sql);
  }


  static findTopTen(){
    let sql = "SELECT * FROM income LIMIT 10"

    return db.execute(sql);
  }

  query() {
    function buildConditions(constructor) {
      var conditions = [];
      var values = [];
      var conditionsStr;

      if (typeof constructor.name !== 'undefined') {
        conditions.push('name LIKE ?');
        values.push('%' + '${this.name}' + '%');
      }

      if (typeof constructor.chart_id !== 'undefined') {
        conditions.push("chart_id = ?");
        values.push(parseInt('${this.chart_id}'));
      }

      return {
        where: conditions.length ?
          conditions.join(' AND '): '1',
          values: values
      };

    }

  var conditions = buildConditions(constructor);
  var sql = 'SELECT * FROM income WHERE ' + conditions.where;

  return db.execute(sql);
  // connection.query(sql, conditions.values, function(err, results) {
  //
  // });

  }
}

module.exports = Income;
