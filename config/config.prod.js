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

  return config
};





