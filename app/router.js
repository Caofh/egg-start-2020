'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // demo示例
  router.get('/', controller.demo.index);

  // 示例接口
  router.get('/front/getUserInfo', controller.front.login.getUserInfo); // 获取用户信息，返回用户信息（?openId=..... 或 ?phoneNumber=...）









};
