const AbstractManager = require("./AbstractManager");

class VideoManager extends AbstractManager {
  constructor() {
    super({ table: "video" });
  }

  insert(video) {
    return this.connection.query(
      `insert into ${this.table} (id_Category, Url, Description, Premium) values (?,?,?,?)`,
      [video.id_Category, video.Url, video.Description, video.Premium]
    );
  }

  update(video) {
    return this.connection.query(
      `update ${this.table} set id_Category = ?, Url = ?, Description = ?, Premium = ? where id = ?`,
      [video.id_Category, video.Url, video.Description, video.Premium, video.id]
    );
  }

  findCategory(id) {
    return this.connection.query(
      `select video.id, video.Name, video.Url, video.Description, video.Premium , category.Name as Category from video inner join category on video.id_category = category.id where video.id = ?`,
      [id]
    );
  }
}

module.exports = VideoManager;
