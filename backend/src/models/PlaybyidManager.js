const AbstractManager = require("./AbstractManager");

class PlaybyidManager extends AbstractManager {
  constructor() {
    super({ table: "playbyid" });
  }

  insertBatch(playsbyid) {
    return this.connection.query(
      `insert into ${this.table} (id_Video, Type) values ?`,
      [playsbyid]
    );
  }

  delete(Type) {
    return this.connection.query(
      `Delete FROM ${this.table} WHERE Type = ?`,
      Type
    );
  }

  browseSlider1() {
    return this.connection.query(
      `SELECT video.id, video.Name FROM ${this.table} INNER JOIN video ON video.id = id_Video WHERE Type = 1`
    );
  }
}
module.exports = PlaybyidManager;
