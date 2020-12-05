const Service = require('egg').Service;


class UserService extends Service {

  // egg文档：https://eggjs.org/zh-cn/tutorials/mysql.html#%E5%AE%89%E8%A3%85%E4%B8%8E%E9%85%8D%E7%BD%AE

  async insert(table, data) {
    const result = await this.app.mysql.insert(table, data);

    return result;
  }
  async update(table, data, options) {

    let result = ''
    if (options) {
      result = await this.app.mysql.update(table, data, options); // 更新 user 表中的记录
    } else {
      result = await this.app.mysql.update(table, data); // 更新 user 表中的记录
    }

    return result;
  }
  async delete(table, data) {
    const result = await this.app.mysql.delete(table, data);

    return result;
  }

  // 查询数据库
  async find(table, data) {
    let result = ''

    if (data) {
      if (data.where) {
        result = await this.app.mysql.select(table, data);
      } else {
        result = await this.app.mysql.get(table, data);
      }

    } else {
      result = await this.app.mysql.select(table);
    }

    return result;
  }

}
module.exports = UserService;