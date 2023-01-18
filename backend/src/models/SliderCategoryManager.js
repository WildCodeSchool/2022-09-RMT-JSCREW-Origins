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
      `insert into ${this.table} (id_Category, Number) values (?, ?)`,
      [displayById.id_Category, displayById.Number]
    );
  }
}

module.exports = SliderCategory;
