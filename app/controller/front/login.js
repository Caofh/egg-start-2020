'use strict';

const Controller = require('egg').Controller;
const core = require('../utils/core');

// 外部接口url
const { wxLogin } = require('../../api/login')

class LoginController extends Controller {

  async getUserInfo() {

    const { ctx } = this;

    // 获取post参数
    const para = ctx.query // 获取get参数

    const openId = para.openId ? para.openId : ''
    const phoneNumber = para.phoneNumber ? para.phoneNumber : ''

    // 查询数据库
    let json = ''
    if (openId) {
      json = {
        where: {
          openId: openId,
        }

      }
    } else if (phoneNumber) {
      json = {
        where: {
          phoneNumber: phoneNumber
        }

      }
    }

    let userInfo = await ctx.service.common.find('user', json)

    // 输出
    ctx.body = core.outFormat({
      data: userInfo,
      status: 'success'
    })
  }

}

module.exports = LoginController;
