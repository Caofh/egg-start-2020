'use strict';

const Controller = require('egg').Controller;
const core = require('./utils/core');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    // 与数据库交互示例(egg文档、包含事务处理方式：https://eggjs.org/zh-cn/tutorials/mysql.html#%E5%AE%89%E8%A3%85%E4%B8%8E%E9%85%8D%E7%BD%AE)
    // 通过service与数据库交互（推荐）
    // const userId = 1;
    // const user = await ctx.service.demo.find(userId);
    // ctx.body = user;

    // 直接与数据库交互
    // let mysql_info = await this.app.mysql.get('user')
    // console.log(mysql_info)
    // ctx.body = mysql_info;


    // 获取get、post参数示例
    // const para = ctx.query.id; // 获取get参数
    // const para = ctx.params.id; // 获取get参数（路由为参数命名方式）
    // const para = ctx.request.body // 获取post参数（csrf关闭）
    // ctx.body = {
    //   para: para
    // }


    // 调用外部接口示例
    // let params = {
    //   ctx: ctx,
    //   url: 'https://tpdoc.cn/api/data_list',
    //   data: {}
    // }
    // const userInfo = await core.api(params)
    //
    // ctx.body = userInfo.data;


    // 直接抛出restful接口示例
    // let outData = core.outFormat({
    //   id: 3,
    //   data: [1,2,3],
    //   status: 'success'
    // })
    //
    // ctx.body = outData

  }






}

module.exports = HomeController;
