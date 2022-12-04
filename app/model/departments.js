const db = require('../config/db');

class Department {
  constructor(department_id, description, role) {
    this.department_id = department_id;
    this.description = description;
    this.role = role;
  }

  save() {
    let sql = `INSERT INTO departmets(department_id, description, role) VALUES ('${this.department_id}','${this.description}','${this.role}')`;
    const [newDepartment, _] = db.execute(sql);

    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM departments"

    return db.execute(sql);
  }

  static findById(department_id) {
    let sql = `SELECT * FROM departments WHERE department_id = ${department_id};`;

    return db.execute(sql);
  }

  static findByDescription(description) {
    let sql = "SELECT description FROM departments ORDER BY description ASC"

    return db.execute(sql);
  }
}


module.exports = Department;
