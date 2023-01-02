const AbstractManager = require("./AbstractManager");

class VideoManager extends AbstractManager {
  constructor() {
    super({ table: "video" });
  }

  insert(video) {
    return this.connection.query(
      `insert into ${this.table} (Name, id_Category, Url, Description, Premium) values (?,?,?,?,?)`,
      [
        video.Name,
        video.id_Category,
        video.Url,
        video.Description,
        video.Premium,
      ]
    );
  }

  update(video) {
    return this.connection.query(
      `update ${this.table} set Name = ?, id_Category = ?, Url = ?, Description = ?, Premium = ? where id = ?`,
      [
        video.Name,
        video.id_Category,
        video.Url,
        video.Description,
        video.Premium,
        video.id,
      ]
    );
  }
}

module.exports = VideoManager;
