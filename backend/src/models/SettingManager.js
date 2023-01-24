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

  updateRole(isAdmin, id) {
    return this.connection.query(
      `update ${this.table} set isAdmin = ? where id = ?`,
      [isAdmin, id]
    );
  }

  findOne(user) {
    return this.connection.query(
      `select * from  ${this.table} where email = ?`,
      [user.email]
    );
  }

  deleteUser(id) {
    return this.connection.query(
      `delete from ${this.table} where id = ? and isDeletable is null`,
      [id]
    );
  }
}

module.exports = SettingManager;
