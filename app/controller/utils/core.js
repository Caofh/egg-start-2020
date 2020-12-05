
// 请求默认配置
var defaultOptions = {
  headers: {},
  method: 'get',
  dataType: 'json',
  data: {}
};

var methed = {
  // 请求其他接口方法(curl参数文档：https://eggjs.org/api/Agent.html#curl)
  api: function (option) {
    const ctx = option.ctx || ''
    const url = option.url || ''

    delete option.url
    let targetOption = Object.assign(defaultOptions, option)

    const result = ctx.curl(url, targetOption)

    return result
  },

  // 格式化输出
  outFormat: function (json) {
    var timestamp = new Date().getTime()

    var defaultJson =  {
      data: json.data || null,
      update_time: timestamp,
      msg: json.msg ? json.msg : (json.status && json.status == 'success' ? '请求成功' : '请求失败'),
      status: json.status
    }

    var targetJson = Object.assign(defaultJson, json)

    return targetJson

  },

  // 格式化数组（数组变字符串存库）
  arrToStr: function (arr) {
    if (!arr) return arr
    var arrNew = eval(arr.slice())
    return JSON.stringify(arrNew)
  },
  // 格式化字符串（字符串变数组取库）
  strToArr: function (str) {
    if (!str) return str
    return JSON.parse(str)
  },

  // 字符传前后加'\''，转为数据库查询形式
  toDatabaseStr: function (str) {
    var str_new = '\'' + str + '\''

    return str_new
  },

  /*
   * 将obj转换成url参数形式
   * toQueryString({a:1,b:2})  =>   a=1&b=2
   *
   * */
  toQueryString: function (obj) {
    var ret = [];
    for (var key in obj) {
      key = encodeURIComponent(key);
      var values = obj[key];
      if (values && values.constructor == Array) { //数组
        var queryValues = [];
        for (var i = 0, len = values.length, value; i < len; i++) {
          value = values[i];
          queryValues.push(methed.toQueryPair(key, value));
        }
        ret = ret.concat(queryValues);
      } else { //字符串
        ret.push(methed.toQueryPair(key, values));
      }
    }
    return ret.join('&');
  },
  toQueryPair: function (key, value) {
    if (typeof value == 'undefined') {
      return key;
    }
    return key + '=' + encodeURIComponent(value === null ? '' : String(value));
  },

  /*
    获取当前环境，返回值如下：
    local(开发环境)
    test(测试环境)
    prod(线上环境)
   */
  getEnv () {
    return process.env.npm_lifecycle_script.split('--env=')[1]
  }


}

module.exports = methed;