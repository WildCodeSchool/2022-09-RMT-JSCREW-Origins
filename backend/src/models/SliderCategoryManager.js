const AbstractManager = require("./AbstractManager");

class SliderCategory extends AbstractManager {
  constructor() {
    super({ table: "display_by_id" });
  }

  findAll() {
    return this.connection.query(`select * from ${this.table}`);
  }

  insert(displayById) {
    return this.connection.query(
      `insert into ${this.table} (id, id_Category, Number) values (?, ?, ?)`,
      [displayById.id, displayById.id_Category, displayById.Number]
    );
  }

  update(displayById) {
    return this.connection.query(
      `update ${this.table} set id_Category = ?, Number = ? where id = ?`,
      [displayById.id_Category, displayById.Number, displayById.id]
    );
  }
}

module.exports = SliderCategory;
