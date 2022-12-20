const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  constructor() {
    super({ table: "category" });
  }

  insert(category) {
    return this.connection.query(
      `insert into ${this.table} (Name, Icon, Description) values (?, ?, ?)`,
      [category.Name, category.Icon, category.Description]
    );
  }

  update(category) {
    return this.connection.query(
      `update ${this.table} set Name = ?, Icon = ?, Description = ? where id = ?`,
      [category.Name, category.Icon, category.Description, category.id]
    );
  }
}

module.exports = CategoryManager;
