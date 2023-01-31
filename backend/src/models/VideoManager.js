const AbstractManager = require("./AbstractManager");

class VideoManager extends AbstractManager {
  constructor() {
    super({ table: "video" });
  }

  findAll({ search }) {
    let query = `select * from  ${this.table}`;
    const value = [];
    if (search) {
      query += " where Name like ?";
      value.push(`%${search}%`);
    }
    return this.connection.query(query, value);
  }

  insert(video) {
    return this.connection.query(
      `insert into ${this.table} (Name, id_Category, Url, Description, Premium, Screenshot) values (?,?,?,?,?,?)`,
      [
        video.Name,
        video.id_Category,
        video.Url,
        video.Description,
        video.Premium,
        video.Screenshot,
      ]
    );
  }

  update(video) {
    const { id } = video;
    const myVideo = { ...video };
    delete myVideo.id;
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      myVideo,
      id,
    ]);
  }

  findCategory(id) {
    return this.connection.query(
      `select video.id, video.Name, video.Url, video.Description, video.id_Category, video.Premium, category.Name as Category from video inner join category on video.id_category = category.id where video.id = ?`,
      [id]
    );
  }

  countVideos() {
    return this.connection.query(`SELECT count(*) as count FROM ${this.table}`);
  }
}

module.exports = VideoManager;
