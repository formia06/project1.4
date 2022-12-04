const db = require('../config/db');

class Employee {
  constructor(login, name, addr1, addr2, addr3, addr4, workphone, homephone, startdate, enddate, notes, role, project_id) {
    this.login = login;
    this.name = name;
    this.addr1 = addr1;
    this.addr2 = addr2;
    this.addr3 = addr3;
    this.addr4 = addr4;
    this.workphone = workphone;
    this.homephone = homephone;
    this.startdate = startdate;
    this.enddate = enddate;
    this.notes = notes;
    this.role = role;
    this.project_id = project_id;

  }

  static getAll() {
    let sql = "SELECT * FROM employee";

    return db.execute(sql);

  }


}
//
// CREATE TABLE employee (
//   employee_id INTEGER,
//   login VARCHAR(20),
//   name VARCHAR(35),
//   addr1 VARCHAR(35),
//   addr2 VARCHAR(35),
//   addr3 VARCHAR(35),
//   addr4 VARCHAR(35),
//   workphone VARCHAR(20),
//   homephone VARCHAR(20),
//   startdate DATE DEFAULT NOW(),
//   enddate DATE,
//   notes VARCHAR(4000),
//   role VARCHAR(30),
//   project_id INTEGER,
//   PRIMARY KEY (employee_id),
//   FOREIGN KEY (project_id) REFERENCES project(project_id)
// );
