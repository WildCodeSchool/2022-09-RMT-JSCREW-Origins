const AbstractManager = require("./AbstractManager");

class SliderCategory extends AbstractManager {
  constructor() {
    super({ table: "display_by_id" });
  }

  findAllByCategory() {
    return this.connection
      .query(`select ${this.table}.id, ${this.table}.Number, ${this.table}.id_category, category.Name as category, video.Name as videoName, video.Url, video.premium from ${this.table}
    inner join category on ${this.table}.id_category = category.id
    inner join video on ${this.table}.id_category = video.id_Category
    order by ${this.table}.id`);
  }

  findByCategory(id, limit) {
    let query = `select ${this.table}.id, ${this.table}.Number, ${this.table}.id_category, category.Name as category, video.Name as videoName, video.Url, video.premium from ${this.table}
    inner join category on ${this.table}.id_category = category.id
    inner join video on ${this.table}.id_category = video.id_Category
    where ${this.table}.id = ?`;
    const value = [id];
    if (limit) {
      query += " limit ?";
      value.push(limit);
    }
    return this.connection.query(query, value);
  }

  insert(displayById) {
    return this.connection.query(
      `insert into ${this.table} (id, id_Category, Number) values (?, ?, ?)`,
      [displayById.id, displayById.id_Category, displayById.Number]
    );
  }

  update(displayById) {
    return this.connection.query(
      `update ${this.table} set id_Category = ?, Number = ? where id = ?`,
      [displayById.id_Category, displayById.Number, displayById.id]
    );
  }
}

module.exports = SliderCategory;
