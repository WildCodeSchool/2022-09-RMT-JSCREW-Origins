const AbstractManager = require("./AbstractManager");

class SettingManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (isAdmin, email, password) values (?, ?, ?)`,
      [user.isAdmin, user.email, user.password]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set isAdmin = ?, email = ?, password = ? where id = ?`,
      [user.isAdmin, user.email, user.password, user.id]
    );
  }
}

module.exports = SettingManager;
