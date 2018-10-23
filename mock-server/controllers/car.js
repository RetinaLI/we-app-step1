let fs = require('fs');
let path = require('path');

module.exports = {
  getTypes () {
    return JSON.parse(fs.readFileSync(path.join(__dirname, '../json/car/car-types.json')));
  },
  getBrands () {
    return JSON.parse(fs.readFileSync(path.join(__dirname, '../json/car/car-brands.json')));
  },
  getList () {
    return JSON.parse(fs.readFileSync(path.join(__dirname, '../json/car/list.json')));
  },

  getSearchList () {
    return {
      list: [
        {id: 1, vin: 'GHHHHHD2004447', lpn: '鲁GFd433'},
        {id: 2, vin: 'GHHHHHD2004447', lpn: '鲁GFd433'},
        {id: 3, vin: 'GHHHHHD2004447', lpn: '鲁GFd433'}
      ]
    };
  },
  // 车辆详情-实时
  getRealTimeInfo () {
    return {
      position: {
        location: '北京市昌平区老牛湾福田汽车股份有限公司',
        timesBefore: 1539653189908
      },
      faults: [
        {
          img: '/assets/realtime/fault1.png',
          imgRed: '/assets/realtime/fault1_red.png',
          txt: '空滤正常',
          txtRed: '空滤异常',
          isRed: true
        },
        {
          img: '/assets/realtime/fault2.png',
          imgRed: '/assets/realtime/fault2_red.png',
          txt: '水温正常',
          txtRed: '水温异常',
          isRed: false
        },
        {
          img: '/assets/realtime/fault3.png',
          imgRed: '/assets/realtime/fault3_red.png',
          txt: 'GPS正常',
          txtRed: 'GNSS天线未接或被剪断',
          isRed: true
        },
        {
          img: '/assets/realtime/fault4.png',
          imgRed: '/assets/realtime/fault4_red.png',
          txt: '制动液位正常',
          txtRed: '制动液位异常',
          isRed: false
        },
        {
          img: '/assets/realtime/fault5.png',
          imgRed: '/assets/realtime/fault5_red.png',
          txt: '冷却液位正常',
          txtRed: '冷却液位异常',
          isRed: false
        },
        {
          img: '/assets/realtime/fault6.png',
          imgRed: '/assets/realtime/fault6_red.png',
          txt: '转向液位正常',
          txtRed: '转向液位异常',
          isRed: false
        }
      ],
      engine: [
        {
          name: '机油液位',
          value: '33%',
          img: '/assets/realtime/engine1.png'
        },
        {
          name: '蓄电池电压',
          value: '28V',
          img: '/assets/realtime/engine2.png'
        },
        {
          name: '机油温度',
          value: '96℃',
          img: '/assets/realtime/engine3.png'
        },
        {
          name: '尿素液位',
          value: '98%',
          img: '/assets/realtime/engine4.png'
        },
        {
          name: '冷却液位',
          value: '100%',
          img: '/assets/realtime/engine5.png'
        }
      ],
      carBody: [
        {
          name: '车门状态',
          value: 'OFF',
          imgOff: '/assets/realtime/carbody_door_off.png',
          imgOn: '/assets/realtime/carbody_door_on.png',
          isOn: false
        },
        {
          name: '手刹状态',
          value: 'OFF',
          imgOff: '/assets/realtime/carbody_hand_off.png',
          imgOn: '/assets/realtime/carbody_hand_on.png',
          isOn: false
        },
        {
          name: '门锁状态',
          value: 'ON',
          imgOff: '/assets/realtime/carbody_lock_off.png',
          imgOn: '/assets/realtime/carbody_lock_on.png',
          isOn: true
        },
        {
          name: '空调状态',
          value: '98%',
          imgOff: '/assets/realtime/carbody_air_off.png',
          imgOn: '/assets/realtime/carbody_air_on.png',
          isOn: false
        }, {
          name: '车载状态',
          value: '空载',
          imgOff: '/assets/realtime/carbody_load_off.png',
          imgOn: '/assets/realtime/carbody_load_on.png',
          isOn: true
        }
      ],
      wranInfo: [
        {
          name: '加速踏板信号',
          value: '正常',
          img: '/assets/realtime/wran1.png'
        },
        {
          name: '氮氧排放',
          value: '超标',
          img: '/assets/realtime/wran2.png'
        },
        {
          name: '发动机转速',
          value: '过高',
          img: '/assets/realtime/wran3.png'
        },
        {
          name: '发动机进气压力',
          value: '过高',
          img: '/assets/realtime/wran4.png'
        },
        {
          name: '冷却液液位',
          value: '过低',
          img: '/assets/realtime/wran5.png'
        },
        {
          name: '冷却液温度',
          value: '过高',
          img: '/assets/realtime/wran6.png'
        },
        {
          name: '喷油器计量',
          value: '异常',
          img: '/assets/realtime/wran7.png'
        },
        {
          name: '发动机油压力',
          value: '过高',
          img: '/assets/realtime/wran8.png'
        }
      ],
      dashBoard: {
        round: 4120,  // 转速
        speed: 67,    // 速度
        expendGas: 18.8,    // 瞬时油耗
        mileage: 24213,   // 里程
        remainderGas: 62,   // 剩余油量
        waterTemp: 45   // 水温
      }
    }
  },
  // 车辆详情-画像
  getPortraitInfo () {
    return {
      score: 36,
      stars: [
        {
          name: '行驶里程',
          value: 2
        },
        {
          name: '行驶时长',
          value: 4
        },
        {
          name: '夜间出行',
          value: 2
        },
        {
          name: '利用率',
          value: 0
        }
      ],
      footprint: [
        {
          'province': '山东省',
          'value': 721
        },
        {
          'province': '河北省',
          'value': 877
        },
        {
          'province': '河南省',
          'value': 431
        },
        {
          'province': '北京市',
          'value': 420
        },
        {
          'province': '浙江省',
          'value': 328
        },
        {
          'province': '江苏省',
          'value': 315
        },
        {
          'province': '广东省',
          'value': 249
        },
        {
          'province': '安徽省',
          'value': 232
        },
        {
          'province': '山西省',
          'value': 171
        },
        {
          'province': '黑龙江省',
          'value': 140
        },
        {
          'province': '上海市',
          'value': 101
        },
        {
          'province': '辽宁省',
          'value': 100
        },
        {
          'province': '四川省',
          'value': 94
        },
        {
          'province': '江西省',
          'value': 77
        },
        {
          'province': '湖北省',
          'value': 64
        },
        {
          'province': '福建省',
          'value': 63
        },
        {
          'province': '重庆市',
          'value': 57
        },
        {
          'province': '内蒙古自治区',
          'value': 57
        },
        {
          'province': '西藏自治区',
          'value': 45
        },
        {
          'province': '陕西省',
          'value': 42
        },
        {
          'province': '吉林省',
          'value': 40
        },
        {
          'province': '宁夏回族自治区',
          'value': 35
        },
        {
          'province': '云南省',
          'value': 34
        },
        {
          'province': '贵州省',
          'value': 34
        },
        {
          'province': '广西壮族自治区',
          'value': 32
        },
        {
          'province': '湖南省',
          'value': 32
        },
        {
          'province': '新疆维吾尔自治区',
          'value': 29
        },
        {
          'province': '甘肃省',
          'value': 23
        },
        {
          'province': '天津市',
          'value': 22
        },
        {
          'province': '青海省',
          'value': 22
        },
        {
          'province': '海南省',
          'value': 10
        }
      ],
      beenPlace: {
        cities: 9,
        province: 4,
        raty: '44.7%'
      },
      citiesOrder: [
        '菏泽',
        '廊坊',
        '开封',
        '盐城',
        '大同',
        '苏州',
        '北京',
        '泉州',
        '张家口',
        '呼和浩特啊',
        '徐州',
        '包头'],
      stopPoints: [
        {
          latitude: 40.1241200000,
          longitude: 116.2753500000
        },
        {
          latitude: 35.1241200000,
          longitude: 96.2753500000
        },
        {
          latitude: 28.1241200000,
          longitude: 108.2753500000
        }
      ],
      dayNight: [
        { name: '白天', value: 68 },
        { name: '夜间', value: 32 }
      ],
      weather: [
        { name: '雨', value: 23.73 },
        { name: '晴/阴/多云', value: 76.27 }
      ],
      humidity: [
        { name: '潮湿', value: 53.73 },
        { name: '舒适', value: 46.27 }
      ],
      temperature: [
        { name: '寒冷', value: 11 },
        { name: '凉爽', value: 33 },
        { name: '极寒', value: 5 },
        { name: '温暖', value: 36 },
        { name: '炎热', value: 15 },
      ],
      altitude: [
        { name: '平原', value: 20 },
        { name: '丘陵', value: 11 },
        { name: '山地', value: 33 },
        { name: '高原', value: 36 },
      ]
    };
  },
  // 车辆详情-位置
  getPositionByVin () {
    return {
      vin: 'D2004466',
      brand: '欧曼-GTL',
      lpn: '川G Fd4337',
      position: '北京市昌平区老牛湾福田汽车股份有限公司',
      longitude: 118.33128,
      latitude: 40.22077,
      stopTimes: '3小时',
      acc: 'OFF',
      speed: 0,
      gps: '正常',
      timesBefore: 1539653189908
    }
  }
};
