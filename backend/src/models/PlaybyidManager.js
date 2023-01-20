const AbstractManager = require("./AbstractManager");

class PlaybyidManager extends AbstractManager {
  constructor() {
    super({ table: "slider_by_video" });
  }

  insertBatch(playsbyid) {
    return this.connection.query(
      `insert into ${this.table} (id_Video, Type) values ?`,
      [playsbyid]
    );
  }

  browseSlider1(Type) {
    return this.connection.query(

      `SELECT slider_by_video.id, video.id AS video_id, video.Name FROM ${this.table} INNER JOIN video ON video.id = id_Video WHERE Type = ?`,
      [Type]
    );
  }

  deleteVideo(id) {
    return this.connection.query(`Delete FROM ${this.table} WHERE id = ?`, id);
  }
}
module.exports = PlaybyidManager;
