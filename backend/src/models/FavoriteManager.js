// ---------- EXEMPLE DE MANAGER ------------
const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "favorite" });
  }

  findAllByUser(id) {
    return this.connection.query(
      `select ${this.table}.id, ${this.table}.id_user, ${this.table}.id_video, video.Name as videoName, video.Url from ${this.table}
    inner join video on ${this.table}.id_video = video.id
    inner join user on ${this.table}.id_user = user.id
    where ${this.table}.id_user = ?`,
      [id]
    );
  }

  findFavoriteByUser(videoId, userId) {
    return this.connection.query(
      `select * from ${this.table}
      where id_video = ? and id_user = ?`,
      [videoId, userId]
    );
  }

  insert(idUser, idVideo) {
    return this.connection.query(
      `insert into ${this.table} (id_user, id_video) values (?, ?)`,
      [idUser, idVideo]
    );
  }

  deleteByVideoId(videoId, userId) {
    return this.connection.query(
      `delete from ${this.table} where id_video = ? and id_user = ?`,
      [videoId, userId]
    );
  }
}

module.exports = ItemManager;
