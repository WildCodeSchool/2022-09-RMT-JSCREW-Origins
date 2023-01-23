// ---------- EXEMPLE DE MANAGER ------------
const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "favorite" });
  }

  findAllByUser(id) {
    return this.connection.query(
      `select ${this.table}.id_user, video.Name as videoName, video.Url from ${this.table}
    inner join video on ${this.table}.id_video = video.id
    inner join user on ${this.table}.id_user = user.id
    where ${this.table}.id_user = ?`,
      [id]
    );
  }

  insert(idUser, idVideo) {
    return this.connection.query(
      `insert into ${this.table} (id_user, id_video) values (?, ?)`,
      [idUser, idVideo]
    );
  }
}

module.exports = ItemManager;
