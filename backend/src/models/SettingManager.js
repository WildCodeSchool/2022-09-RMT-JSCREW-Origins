const AbstractManager = require("./AbstractManager");

class SettingManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (isAdmin, email, hashedpassword) values (?, ?, ?)`,
      [1, user.email, user.hashedpassword]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set isAdmin = ?, email = ?, hashedpassword = ? where id = ?`,
      [user.isAdmin, user.email, user.hashedpassword, user.id]
    );
  }
}

module.exports = SettingManager;
