const db = require('../config/db');


class Task{
  constructor(id,name, task_no, description, entrydate, startdate, enddate, progress, dependencies, project_id){
      this.id = id;
      this.name = name;
      this.task_no = task_no;
      this.description =description;
      this.entrydate = entrydate;
      this.startdate = startdate;
      this.enddate = enddate;
      this.progress = progress;
      this.dependencies = dependencies;
      this.project_id = project_id;
  }
  save() {

    let sql = `INSERT INTO task(name, task_no, description, startdate, enddate, progress, dependencies) VALUES
    ('${this.name}','${this.task_no}','${this.description}','${this.startdate}','${this.enddate}','${this.progress}','${this.dependencies}')`;


    return db.execute(sql);
  }


  static findAll(){
    let sql = `SELECT * FROM task`

    return db.execute(sql);
  }

  static findByTaskNo(invoice_no) {
    let sql = `SELECT * FROM task WHERE task_no = ${task_no};`;

    return db.execute(sql);
  }

  static findTaskForGantt(){
    let sql = "SELECT (name, task_no, startdate, enddate, progress, dependencies) FROM task"

    return db.execute(sql);
  }


}

module.exports = Task;
