const db = require('../config/db');

class Chart{
  constructor(accno, description, charttype, category, link, gifi_accno){
    this.accno = accno;
    this.description = description;
    this.charttype = charttype;
    this.category = category;
    this.link = link;
    this.gifi_accno = gifi_accno;
  }

  static findAll() {
    let sql = "SELECT * FROM chart"

    return db.execute(sql)
  }

  static findByAccno(accno){
    let sql = `SELECT * FROM chart WHERE accno = ${accno};`;

    return db.execute(sql);
  }


}

module.exports = Chart;
