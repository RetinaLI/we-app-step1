let fs = require('fs');
let path = require('path');

let platforms = [
  {
    id: 1,
    name: '欧曼车联网平台',
    code: 'E017',
    userName: 'sa',
    nickName: 'sa'
  },
  {
    id: 2,
    name: '欧马可车联网平台',
    code: 'E018',
    userName: 'sa',
    nickName: 'sa'
  },
  {
    id: 3,
    name: '欧马可车联网平台',
    code: 'E019',
    userName: 'sa',
    nickName: 'sa'
  },
  {
    id: 4,
    name: '欧马可车联网平台',
    code: 'E010',
    userName: 'sa',
    nickName: 'sa'
  },
  {
    id: 5,
    name: '欧马可车联网平台',
    code: 'E011',
    userName: 'sa',
    nickName: 'sa'
  }
];

module.exports = {
  getCurrentUser () {
    return {
      data: {
        'id': 1,
        'name': '王小虎dfljglkjdsjdsfjf都结束了开发技术就算了副教授积分',
        userName: 'sa',
        platformCode: 'E017',
        platformName: '欧曼车联网平台',
        'email': 'ddd@126.com放松放松非公开接受了开机速度就仿佛看见跨境电商斐林试剂分手就分手浪费健康',
        'headImageUrl': 'http://localhost:8081/public/img/zfb.png',
        'token': 'jdslkfjdslkfsfkdsklf13221lkjlkjkjkjlkjlkdgdfdfff',
        'counter': 88,
        'fee': 15,
        'expire': '2016-05-04'
      }
    };
  },
  addPlatform () {
    return { code: 200 };
  },
  removePlatform (id) {
    platforms.splice(platforms.findIndex(e => e.id === id), 1);
    return { code: 200 };
  },
  getPlatforms () {
    return {
      list: platforms
    };
  },
  // 我的个人信息
  updateUserName () {
    return { code: 200 };
  },
  uploadFile() {
    return { code: 200 };
  },
  submitSuggest () {
    return { code: 200 };
  },
  getSubscribeConfig() {
    return {
      subscribeData: [
        {subscribeType: 'saleReport', status: false},
        {subscribeType: 'serviceReport', status: true},
        {subscribeType: 'logisticsReport', status: false},
        {subscribeType: 'analyzeReport', status: true},
        {subscribeType: 'onlineNotice', status: true},
        {subscribeType: 'offlineNotice', status: true},
        {subscribeType: 'lockNotice', status: false},
        {subscribeType: 'reachNotice', status: true},
        {subscribeType: 'warnNotice', status: true}
      ]
    };
  },
  editSubscribeConfig() {
    return { code: 200 };
  },

  // 首页-车辆状况
  getCarSituation() {
    return {
      carStatistics: {
        allCar: 159999,
        onlineToday: 10239,
        offlineToday: 5684,
        drive: 2374,
        paking: 7864
      }
    };
  },

  // 首页-各省车辆情况
  getProvinceCarInfo() {
    return {
      mapList: [
        {name: '山东', value: 14525},
        {name: '河北', value: 12756},
        {name: '河南', value: 9211},
        {name: '江苏', value: 8808},
        {name: '山西', value: 8666},
        {name: '广东', value: 6639},
        {name: '安徽', value: 5768},
        {name: '浙江', value: 5713},
        {name: '内蒙古', value: 5294},
        {name: '新疆', value: 4758},
        {name: '广东', value: 6639},
        {name: '北京', value: 639},
        {name: '天津', value: 539},
        {name: '上海', value: 539},
        {name: '重庆', value: 39},
        {name: '辽宁', value: 439},
        {name: '吉林', value: 39},
        {name: '黑龙江', value: 39},
        {name: '江苏', value: 39},
        {name: '浙江', value: 39},
        {name: '安徽', value: 39},
        {name: '福建', value: 39},
        {name: '天津', value: 539},
        {name: '北京', value: 639},
        {name: '天津', value: 539},
        {name: '上海', value: 539},
        {name: '重庆', value: 39},
        {name: '辽宁', value: 439},
        {name: '吉林', value: 39},
        {name: '黑龙江', value: 39},
        {name: '江苏', value: 39},
        {name: '浙江', value: 39},
        {name: '安徽', value: 39},
        {name: '福建', value: 39},
        {name: '天津', value: 28}

      ]
    };
  },

  // 首页-近六个月车辆配装情况
  getCarConfigurationInfo() {
    return {
      carConfigurationData: [
        {month: '2018-01', value: 120},
        {month: '2018-02', value: 132},
        {month: '2018-03', value: 101},
        {month: '2018-04', value: 134},
        {month: '2018-05', value: 90},
        {month: '2018-06', value: 230},
        {month: '2018-07', value: 210}
      ]
    };
  },

  // 各车型车辆数
  getCarModelsInfo() {
    return {
      carScaleData: [
        {value: 43916, name: 'ETX'},
        {value: 36510, name: 'GTL'},
        {value: 20904, name: 'EST'},
        {value: 8654, name: '其他'},
        {value: 665, name: '特殊订单'}
      ]
    };
  }
};
