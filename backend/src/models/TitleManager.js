const AbstractManager = require("./AbstractManager");

class PlaybyidManager extends AbstractManager {
  constructor() {
    super({ table: "title" });
  }

  update(title, id) {
    return this.connection.query(
      `update ${this.table} set slider_title = ? where id = ?`,
      [title, id]
    );
  }
}
module.exports = PlaybyidManager;
