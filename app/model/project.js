const db = require('../config/db');


class Project{

  constructor(name, project_no, description, department_id){
    this.name = name;
    this.project_no = project_no;
    this.description = description;
    this.department_id = department_id;
  }

  save() {
    let sql = `INSERT INTO project(projectnumber, description, department_id) VALUES ('${this.name}','${this.project_no}','${this.description}','${this.department_id}')`;
    const [newProject, _] = db.execute(sql);

    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM project"

    return db.execute(sql);
  }

  static findById(project_no) {
    let sql = `SELECT * FROM project WHERE projectnumber = ${project_no};`;

    return db.execute(sql);
  }
}

module.exports = Project;
