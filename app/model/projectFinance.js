const db = require('../config/db');


class ProjectFinance {
  constructor(projectName, taskNumber, task, startdate, enddate, incomeAmount, invoice_no, expensesAmount, bill_no, department){
    this.projectName = projectName;
    this.taskNumber = taskNumber;
    this.task = task;
    this.startdate = startdate;
    this.enddate = enddate;
    this.incomeAmount = incomeAmount;
    this.invoice_no = invoice_no;
    this.expensesAmount = expensesAmount;
    this.bill_no = bill_no;
    this.department = department;
  }

  static findAll(){
    let sql =
    "SELECT * FROM project_finance";

    return db.execute(sql);
  }


  static findByName(){
    let sql = `SELECT * FROM project_finance WHERE projectName = "${this.projectName}"`;

    return db.execute(sql);
  }

  static findByProject(){
    let sql = "SELECT projectName from project_finance ORDER BY projectName ASC";

    return db.execute(sql);
  }
}


// "SELECT `project`.`name` AS `projectName`, `project`.`project_no` AS `projectNumber`, `income`.`amount` AS `incomeAmount`, `expenses`.`amount` AS `expensesAmount`FROM `project`	LEFT JOIN `income` ON `income`.`project_id` = `project`.`project_id`	LEFT JOIN `expenses` ON `expenses`.`project_id` = `project`.`project_id`;";


module.exports = ProjectFinance;
