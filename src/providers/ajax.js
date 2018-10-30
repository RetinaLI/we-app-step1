import wepy from 'wepy';
import toast from '../lib/toast';

const SERVER_API_ROUTE_MAP = {
  // passport
  'login': {
    url: '/security/login!loginNoCaptcha.do',
    method: 'post',
    isArray: false
  },
  'registUserByWeiXinUserInfo': {
    url: '/passport/regist',
    method: 'post',
    isArray: false
  },
  'uploadAvatar': {
    url: '/file!uploadFiles.do?moduleId=user_manage',
    method: 'post',
    isArray: false
  },
  'getCurrentUser': {
    url: '/manage/user!getSelf.do',
    method: 'get',
    isArray: false
  },
  'getProfilePlatforms': {
    url: '/manage/user!listGroupUsers.do',
    method: 'get',
    isArray: true
  },
  'addPlatform': {
    url: '/profile/platform/add',
    method: 'post',
    isArray: false
  },
  'removePlatform': {
    url: '/profile/platform/remove',
    method: 'post',
    isArray: false
  },
  // 报告
  'getReportList': {
    url: '/report/list',
    method: 'get',
    isArray: true
  },
  // 车辆详情-实时
  'getRealTimeInfo': {
    url: '/business/can_bus!listAnalysisCodes.do',
    method: 'get',
    isArray: false
  },
  // 车辆详情-实时
  'getCarDetailInfo': {
    url: '/business/device!findByDid.do',
    method: 'get',
    isArray: false
  },
  // 车辆详情-实时
  'getWarnInfo': {
    url: '/business/can_bus!listByCarId.do',
    method: 'get',
    isArray: false
  },
  // 车辆详情-画像
  'getPortraitScore': {
    url: '/business/device_stats!listByCarId.do',
    method: 'get',
    isArray: false
  },
  'getPortraitProvinceOrder': {
    url: '/sas/capacity_daily!provinceTopAnalysis.do',
    method: 'get',
    isArray: false
  },
  'getPortraitCityOrder': {
    url: '/sas/capacity_daily!cityTopAnalysis.do',
    method: 'get',
    isArray: false
  },
  'getCitiesProportion': {
    url: '/sas/car_tags!listByCar.do',
    method: 'get',
    isArray: false
  },
  'getPortraitStopPoints': {
    url: '/sas/car_analysis!stopPointAnalysis.do',
    method: 'get',
    isArray: false
  },
  'getPortraitDayNight': {
    url: '/sas/car_analysis!runPeriodAnalysis.do',
    method: 'get',
    isArray: false
  },
  'getPortraitWeather': {
    url: '/sas/capacity_daily!weatherAnalysis.do',
    method: 'get',
    isArray: false
  },
  'getPortraitHumidity': {
    url: '/sas/capacity_daily!humidityAnalysis.do',
    method: 'get',
    isArray: false
  },
  'getPortraitTemperature': {
    url: '/sas/capacity_daily!temperatureAnalysis.do',
    method: 'get',
    isArray: false
  },
  'getPortraitAltitude': {
    url: '/sas/car_analysis!elevationAnalysis.do',
    method: 'get',
    isArray: false
  },

  // 车辆列表
  'getList': {
    url: '/business/device!listBySQL.do',
    method: 'post',
    isArray: false
  },
  // 品牌列表
  'getBrands': {
    url: '/common/car_brand!combo.do',
    method: 'get',
    isArray: false
  },
  // 型号列表
  'getTypes': {
    url: '/common/car_type!combo.do',
    method: 'get',
    isArray: false
  },
  // 搜索列表
  'getSearchList': {
    url: '/search',
    method: 'post',
    isArray: false
  },
  // 我的-修改用户名
  'updateUserName': {
    url: '/manage/user!save.do',
    method: 'post',
    isArray: false
  },
  // 'uploadFile': {
  //   url: '/file!uploadFiles.do',
  //   method: 'post',
  //   isArray: false
  // },
  'submitSuggest': {
    url: '/profile/suggest/submit',
    method: 'post',
    isArray: false
  },
  'getSubscribeConfig': {
    url: '/profile/suggest/getSubscribeConfig',
    method: 'get',
    isArray: false
  },
  // 行程
  'getTripIndex': {
    url: '/sas/car_analysis!findRunInfo.do',
    method: 'get',
    isArray: false
  },
  'getTripIndexCreated': {
    url: '/business/car_info!get.do',
    method: 'get',
    isArray: false
  },
  'getTripIndexList': {
    url: '/sas/car_analysis!listRunRecord.do',
    method: 'get',
    isArray: false
  },
  'getTripMonth': {
    url: '/trip/getTripMonth',
    method: 'get',
    isArray: false
  },
  'getTripMonthList': {
    url: '/business/location_summary!findByMonth.do',
    method: 'get',
    isArray: false
  },
  'getTripDayTime': {
    url: '/business/location_summary!findRunDetailByDaily.do',
    method: 'get',
    isArray: false
  },
  'getTripDayMap': {
    url: '/business/location!listByDid.do',
    method: 'get',
    isArray: false
  },
  'editSubscribeConfig': {
    url: '/profile/suggest/editSubscribeConfig',
    method: 'post',
    isArray: false
  },
  // 车辆概况
  'getCarSituation': {
    url: '/business/server_summary!onlineInfo.do',
    method: 'post',
    isArray: false
  },
  'getProvinceCarInfo': {
    url: '/sas/market/device_monthly!findCountByProvince.do',
    method: 'post',
    isArray: true
  },
  'getCarConfigurationInfo': {
    url: '/business/component!installByCarBrandDate.do?dateType=2',
    method: 'get',
    isArray: false
  },
  'getCarModelsInfo': {
    url: '/sas/car_operation!listGroupByCarType.do',
    method: 'post',
    isArray: false
  }
};

class AjaxProvider {
  // DOMAIN = 'http://localhost:9012';
  DOMAIN = 'http://ov.ifoton.com.cn';
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

  getApiInfo (_action) {
    let temp = SERVER_API_ROUTE_MAP[_action];
    let url = temp.url;
    if (url.indexOf('?') === -1) {
      url += '?IS_MOBILE=true';
    } else {
      url += '&IS_MOBILE=true';
    }
    return {
      url: this.DOMAIN + url,
      method: temp.method,
      isArray: temp.isArray
    };
  }

  request (_action, _params) {
    let routeConfig = this.getApiInfo(_action);

    if (!routeConfig) throw new Error('SERVER_API_ROUTE_MAP no action: ' + _action);

    _params = _params || {};
    Object.keys(_params).forEach(k => {
      if (_params[k] == null) delete _params[k];
    });
    let header = {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    };

    if (_action !== 'login') {
      header.cookie = wepy.getStorageSync('cookie');
      // header.referer = 'http://ov.ifoton.com.cn/index.jsp';
    }

    return wepy.request({
      url: routeConfig.url, // 仅为示例，并非真实的接口地址
      data: _params,
      method: routeConfig.method,
      header: header
    }).then((response) => {
      if (_action === 'login' && response.data && response.data.success) {
        let cookie = response.header['Set-Cookie'];
        let newCookie = '';
        let newCookieMap = {};
        cookie.split(';').forEach(item => {
          if (item.indexOf('SESSION=') > -1 || item.indexOf('ck_username=') > -1 || item.indexOf('ck_company_code=') > -1) {
            item = item.replace('Path=/,', '').trim();
            newCookieMap[item.split('=')[0]] = item;
          }
        });
        newCookie = [newCookieMap['ck_company_code'], 'ck_login_result=login', newCookieMap['ck_username'], newCookieMap['SESSION']].join('; ');
        wepy.setStorageSync('cookie', newCookie);
      }

      if (response.statusCode !== 200) {
        if (response.statusCode === 403) {
          response.data = {
            code: 403,
            msg: '重新登录'
          };

          // todo 跳转到登录页面
        } else {
          response.data = {
            code: 0,
            msg: response.data
          };
        }
      } else if (response.data.success === false) {
        response.data.code = 0;
        response.data.msg = response.data.info;
      } else {
        response.data.code = 200;
      }
      return response.data;
    }, error => {
      if (routeConfig.isArray) {
        return { total: 0, list: [], code: 0, msg: error && error.errMsg ? error.errMsg : 'has error' };
      }
      return { data: null, msg: error && error.errMsg ? error.errMsg : 'has error', code: 0 };
    });
  }
}

export default new AjaxProvider();
