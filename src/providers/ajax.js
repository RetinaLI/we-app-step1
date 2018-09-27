import wepy from 'wepy'

const SERVER_API_ROUTE_MAP = {
  // passport
  'getCurrentUser': {
    url: '/profile/info',
    method: 'get',
    isArray: false
  }
};

class AjaxProvider {
  DOMAIN = 'http://localhost:9012';
  // domain = 'https://www.sxszmj.com';

  // getStrLength(str, maxLen) {
  //   ///<summary>获得字符串实际长度，中文2，英文1</summary>
  //   ///<param name="str">要获得长度的字符串</param>
  //   var realLength = 0, len = str.length, charCode = -1, temp = '';
  //   for (var i = 0; i < len; i++) {
  //       charCode = str.charCodeAt(i);
  //       if (charCode >= 0 && charCode <= 128) realLength += 1;
  //       else realLength += 2;
  //       if(realLength <= maxLen) {
  //         temp += str[i];
  //       }
  //   }
  //   return [realLength, temp];
  // }

  getApiInfo (_action) {
    let temp = SERVER_API_ROUTE_MAP[_action];

    return {
      url: this.DOMAIN + temp.url,
      method: temp.method
    }
  }

  request (_action, _params) {
    let routeConfig = SERVER_API_ROUTE_MAP[_action];

    if (!routeConfig) throw new Error('SERVER_API_ROUTE_MAP no action: ' + _action);

    _params = _params || {};
    Object.keys(_params).forEach(k => {
      if (_params[k] == null) delete _params[k];
    });
    return wepy.request({
      url: `${this.DOMAIN}${routeConfig.url}`, // 仅为示例，并非真实的接口地址
      data: _params,
      method: routeConfig.method,
      header: {
        'ssr': wepy.getStorageSync('session'),
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      }
    }).then(result => {
      return result.data;
    }, error => {
      if (routeConfig.isArray) {
        return { total: 0, list: [] };
      }
      return { data: null, msg: error, code: 0 };
    });
  }

  async login () {
    let userDetail;
    let p = new Promise(resolve => {
      wx.getUserInfo({
        withCredentials: true,
        success: async (detail) => {
          userDetail = detail;
          let login = await wepy.login();
          userDetail.code = login.code;
          let result = await this.request('generateSession', userDetail);
          wepy.setStorageSync('session', result.data);
          resolve(!!result.data);
        },
        fail: (error) => {
          if (error.errMsg === 'getUserInfo:fail scope unauthorized') {
            wepy.redirectTo({
              url: '/pages/login'
            });
          }
        }
      });
    });

    let r = await Promise.all([p]);
    return r[0];
  }

  async checkSession () {
    let p = new Promise(resolve => {
      wepy.checkSession().then(result => {
        resolve(result);
      }).catch(result => {
        resolve(result);
      });
    });

    let r = await Promise.all([p]);
    return r[0] && r[0].errMsg && r[0].errMsg.indexOf('checkSession:fail') === -1;
  }

  async updateSession () {
    let result = await this.request('updateSession');
    return result.data;
  }
}

export default new AjaxProvider();
