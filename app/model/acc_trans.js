const db = require('../config/db');

class AccTrans {
  constructor(trans_id,chart_id,income_id,expenses_id,transdate,project_id,department_id){
    this.trans_id = trans_id;
    this.chart_id = chart_id;
    this.income_id = income_id;
    this.expenses_id = expenses_id;
    this.transdate = transdate;
    this.project_id = project_id;
    this.department_id = department_id;
  }

  static findAll(){
    let sql = "SELECT * FROM acc_trans";

    return db.execute(sql)
  }



}

module.exports = AccTrans;
