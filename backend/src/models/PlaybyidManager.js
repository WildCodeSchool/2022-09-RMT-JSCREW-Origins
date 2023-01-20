const AbstractManager = require("./AbstractManager");

class PlaybyidManager extends AbstractManager {
  constructor() {
    super({ table: "play_by_id" });
  }

  insertBatch(playsbyid) {
    return this.connection.query(
      `insert into ${this.table} (id_Video, Type) values ?`,
      [playsbyid]
    );
  }

  browseSlider1() {
    return this.connection.query(
      `SELECT play_by_id.id, video.id AS video_id, video.Name, video.Url FROM ${this.table} INNER JOIN video ON video.id = id_Video WHERE Type = 1`
    );
  }

  deleteVideo(id) {
    return this.connection.query(`Delete FROM ${this.table} WHERE id = ?`, id);
  }
}
module.exports = PlaybyidManager;
