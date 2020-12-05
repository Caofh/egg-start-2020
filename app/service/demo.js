const Service = require('egg').Service;


class UserService extends Service {
  // 默认不需要提供构造函数。
  // constructor(ctx) {
  //   super(ctx); 如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
  //   // 就可以直接通过 this.ctx 获取 ctx 了
  //   // 还可以直接通过 this.app 获取 app 了
  // }
  async find(userId) {
    // // 假如 我们拿到用户 id 从数据库获取用户详细信息
    // // const data = await this.ctx.db.query('select * from user_detail where id = ?', uid);
    // const data = await this.app.mysql.get('t_commodity');
    //
    // // 假定这里还有一些复杂的计算，然后返回需要的信息。
    // // const picture = await this.getPicture(uid);

    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    // const data = await this.app.mysql.get('user', {id: 1});
    const data = await this.app.mysql.select('user');
    // const data = await this.app.mysql.query('select * from user where id = ?', 2);

    return data;
  }

  async getPicture(uid) {
    const result = await this.ctx.curl(
      `https://tpdoc.cn/api/data_list`,
      {
        dataType: 'json'
      }
    );

    return result.data;
  }
}
module.exports = UserService;