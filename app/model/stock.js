const db = require('../config/db');


class Stock {
  constructor(partnumber, description, unit, listprice, sellprice, lastcost, priceupdate, onhand, notes, inventory_accno_id, income_accno_id, expense_accno_id) {
    this.partnumber = partnumber;
    this.description = description;
    this.unit = unit;
    this.listprice = listprice;
    this.sellprice = sellprice;
    this.lastcost = lastcost;
    this.priceupdate = priceupdate;
    this.onhand = onhand;
    this.notes = notes;
    this.inventory_accno_id = inventory_accno_id;
    this.income_accno_id = income_accno_id;
    this.expense_accno_id = expense_accno_id;
  }

  static findAll() {
    let sql = "SELECT * FROM stock"

    return db.execute(sql);
  }

}


module.exports = Stock
