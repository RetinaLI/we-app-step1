
let platforms = {
  "data": "", "info": "",
  "list": [
    {
      "company": { "code": "E017", "id": 50060, "name": "福田戴姆勒" },
      "fullname": "超级管理员", "groupNo": 66924,
      "id": 50312, "name": "sa", "orginalPassword": "IPdtB6HiNx"
    },
    {
      "company": { "code": "FYGYJH", "id": 51257, "name": "阜阳广宇汽车销售有限公司" },
      "fullname": "阜阳广宇汽车销售有限公司", "groupNo": 66924, "id": 66924,
      "name": "fygyjh", "orginalPassword": "123456"
    }
  ],
  "success": true, "texts": "", "totalCount": 0, "url": ""
};

let userInfo = {
  'address': '',
  'authorizetype': '',
  'email': 'sa@foton.com.cn',
  'platformCode': 'E017',
  platformName: '欧曼车联网平台',
  'fax': '',
  'fullname': '超级管理员',
  'id': 50312,
  'mobile': '',
  'name': 'sa',
  'phone': '',
  'photo': '',
  'rememberKey': '7861e2456f09431cb5194e4c64eeb45f',
  'title': 1,
  'zip': ''
};
module.exports = {
  getCurrentUser () {
    return {
      'data': userInfo,
      'info': '',
      'list': '',
      'success': true,
      'texts': '',
      'totalCount': 0,
      'url': ''
    };
  },
  login ({ companyNo, username, password }) {
    userInfo.platformCode = companyNo;
    let platform = platforms.list.find(e => e.company.code === companyNo && e.name === username && e.orginalPassword === password);
    userInfo.platformName = platform.company.name;
    return { code: 200 };
  },
  addPlatform () {
    return { code: 200 };
  },
  removePlatform ({ code, username }) {
    platforms.splice(platforms.list.findIndex(e => e.company.code === code && e.name === username), 1);
    return { code: 200 };
  },
  getPlatforms () {
    return platforms;
  },
  // 我的个人信息
  updateUserName () {
    return { code: 200 };
  },
  submitSuggest () {
    return { code: 200 };
  },
  getSubscribeConfig () {
    return {
      subscribeData: [
        { subscribeType: 'saleReport', status: false },
        { subscribeType: 'serviceReport', status: true },
        { subscribeType: 'logisticsReport', status: false },
        { subscribeType: 'analyzeReport', status: true },
        { subscribeType: 'onlineNotice', status: true },
        { subscribeType: 'offlineNotice', status: true },
        { subscribeType: 'lockNotice', status: false },
        { subscribeType: 'reachNotice', status: true },
        { subscribeType: 'warnNotice', status: true }
      ]
    };
  },
  editSubscribeConfig () {
    return { code: 200 };
  },

  // 首页-车辆状况
  getCarSituation () {
    return {
      onlineMap: {
        ALLNUM: 176084,
        OFFLINENUM: 21702,
        ONLINENUM: 154382,
        todayCanBusCount: 640784930,
        todayLocationCount: 109789058,
        todayRunCount: 42705,
        todayStopCount: 111335
        // allCar: 159999,
        // onlineToday: 10239,
        // offlineToday: 5684,
        // drive: 2374,
        // paking: 7864
      }
    };
  },

  // 首页-各省车辆情况
  getProvinceCarInfo () {
    return {
      list: [
        {province: '山东省', car_count: 17722},
        {province: '河北省', car_count: 15741},
        {province: '河南省', car_count: 11988},
        {province: '江苏省', car_count: 10319},
        {province: '山西省', car_count: 9343},
        {province: '广东省', car_count: 7010},
        {province: '安徽省', car_count: 6941},
        {province: '浙江省', car_count: 6117},
        {province: '内蒙古自治区', car_count: 5876},
        {province: '新疆维吾尔自治区', car_count: 5708},
        {province: '四川省', car_count: 5048},
        {province: '辽宁省', car_count: 3940},
        {province: '陕西省', car_count: 3893},
        {province: '黑龙江省', car_count: 3360},
        {province: '江西省', car_count: 3340},
        {province: '北京市', car_count: 2799},
        {province: '云南省', car_count: 2535},
        {province: '贵州省', car_count: 2342},
        {province: '湖北省', car_count: 2052},
        {province: '福建省', car_count: 2033},
        {province: '湖南省', car_count: 1552},
        {province: '甘肃省', car_count: 1544},
        {province: '天津市', car_count: 1369},
        {province: '西藏自治区', car_count: 1311},
        {province: '上海市', car_count: 1297},
        {province: '广西壮族自治区', car_count: 1065},
        {province: '青海省', car_count: 991},
        {province: '海南省', car_count: 919},
        {province: '重庆市', car_count: 853},
        {province: '宁夏回族自治区', car_count: 752},
        {province: '吉林省', car_count: 742}
      ]
    };
  },

  // 首页-近六个月车辆配装情况
  getCarConfigurationInfo () {
    return {
      data: {
        categories: ['2017-11', '2017-12', '2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10'],
        series: [
          {
            data: [18002, 20045, 21328, 22191, 23473, 25302, 27122, 28860, 30223, 32095, 33549, 34187],
            id: '',
            name: 'EST'
          },
          {
            data: [284, 302, 323, 330, 348, 358, 387, 403, 436, 480, 582, 586],
            id: '',
            name: 'EST-A'
          },
          {
            data: [40229, 41428, 43134, 44851, 47602, 50996, 54705, 59324, 63099, 66082, 68182, 69400],
            id: '',
            name: 'ETX'
          },
          {
            data: [30448, 33811, 36375, 38081, 40814, 43920, 47046, 50099, 52967, 55155, 56816, 57560],
            id: '',
            name: 'GTL'
          },
          {
            data: [6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7],
            id: '',
            name: 'TX'
          },
          {
            data: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
            id: '其他',
            name: 'VT'
          },
          {
            data: [4594, 5198, 6375, 6965, 8792, 10164, 11191, 11945, 12649, 12925, 13282, 14351],
            id: '',
            name: '其他'
          }
        ]
      }
    };
  },

  // 各车型车辆数
  getCarModelsInfo () {
    return {
      list: [
        {car_type_id: 50080, car_type_name: 'EST', car_count: 22604, total_run_day: 22604},
        {car_type_id: 50081, car_type_name: 'EST-A', car_count: 262, total_run_day: 262},
        {car_type_id: 3006, car_type_name: 'ETX', car_count: 46925, total_run_day: 46925},
        {car_type_id: 3005, car_type_name: 'GTL', car_count: 38955, total_run_day: 38955},
        {car_type_id: 1262518, car_type_name: 'TX', car_count: 1, total_run_day: 1, avg_run_time: 37747},
        {car_type_id: 3007, car_type_name: 'VT', car_count: 3, total_run_day: 3},
        {car_type_id: 50160, car_type_name: '其他', car_count: 8781, total_run_day: 8781}
      ]
    };
  }
};
