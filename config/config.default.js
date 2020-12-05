/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1564041448006_8555';

  // 关闭csrf防御
  config.security = {
    csrf: false
  };

  // add your middleware config here
  config.middleware = [];

  config.mysql = {
    client: {
      host: 'localhost', // 数据库ip：可以连接远端云服务器ip（如：12.222.222.343）
      port: '3306', // 数据库端口
      user: 'root', // 数据库user
      password: '***', // 数据库密码
      database: '***' // 数据库名称
    },
    app: true,
    agent: false,
  }

  config.bodyParser = {
    jsonLimit: '10mb',
    formLimit: '10mb',
  }

  // 代码中cors不可和nginx重复配置跨域
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }

  config.alinode = {
    // 从 `Node.js 性能平台` 获取对应的接入参数
    appid: '81306',
    secret: '72b775ca6630764cf3a84387042a4e5f8ef1dbd3',
  }

  return config
};





