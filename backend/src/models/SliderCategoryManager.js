const AbstractManager = require("./AbstractManager");

class SliderCategory extends AbstractManager {
  constructor() {
    super({ table: "display_by_id" });
  }

  findAll() {
    return this.connection.query(`select * from ${this.table}`);
  }

  update(displayById) {
    return this.connection.query(
      `update ${this.table} set id_Category = ?, Number = ? where id = ?`,
      [displayById.id_Category, displayById.Number, displayById.id]
    );
  }
}

module.exports = SliderCategory;
