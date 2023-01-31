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

  browseSlider(sliderType) {
    return this.connection.query(
      `SELECT play_by_id.id, video.id AS id_video, video.Name, video.Url, video.Premium, video.Screenshot, video.Description FROM ${this.table} INNER JOIN video ON video.id = id_Video WHERE Type = ?`,
      [sliderType]
    );
  }

  deleteVideo(id) {
    return this.connection.query(`Delete FROM ${this.table} WHERE id = ?`, id);
  }
}
module.exports = PlaybyidManager;
