module.exports = {
  getTripIndex() { // trip-index
    return {
      code: 1,
      data: {
        operations: {
          mileage: 231,
          time: 12,
          dirveDay: 12,
          runDay: 12,
          avgSpeed: 12,
          loss: 12,
        },
        statistics: [
          {
            year: '2018',
            date: [
              {
                calendar: '2018-01',
                onLine: 22,
                mileage: 22,
                oil: 22,
              },
              {
                calendar: '2018-02',
                onLine: 22,
                mileage: 22,
                oil: 22,
              },
              {
                calendar: '2018-03',
                onLine: 22,
                mileage: 22,
                oil: 22,
              },
            ],
          },
          {
            year: '2017',
            date: [
              {
                calendar: '2017-01',
                onLine: 22,
                mileage: 22,
                oil: 22,
              },
              {
                calendar: '2017-02',
                onLine: 22,
                mileage: 22,
                oil: 22,
              },
              {
                calendar: '2017-03',
                onLine: 22,
                mileage: 22,
                oil: 22,
              },
              {
                calendar: '2017-04',
                onLine: 22,
                mileage: 22,
                oil: 22,
              },
              {
                calendar: '2017-05',
                onLine: 22,
                mileage: 22,
                oil: 22,
              },
              {
                calendar: '2017-06',
                onLine: 22,
                mileage: 22,
                oil: 22,
              },
              {
                calendar: '2017-07',
                onLine: 22,
                mileage: 22,
                oil: 22,
              },
              {
                calendar: '2017-08',
                onLine: 22,
                mileage: 22,
                oil: 22,
              },
              {
                calendar: '2017-09',
                onLine: 22,
                mileage: 22,
                oil: 22,
              },
              {
                calendar: '2017-10',
                onLine: 22,
                mileage: 22,
                oil: 22,
              },
              {
                calendar: '2017-11',
                onLine: 22,
                mileage: 22,
                oil: 22,
              },
              {
                calendar: '2017-12',
                onLine: 22,
                mileage: 22,
                oil: 22,
              },
            ],
          },
        ],
      },
      msg: '',
    };
  },
  getTripMonth() { // trip-month
    return {
      code: 1,
      data: {
        operations: {
          mileage: 231,
          time: 12,
          dirveDay: 12,
          runDay: 12,
          avgSpeed: 12,
          loss: 12,
        },
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
          '包头'
        ],
        footprint: [
          {
            'province': '山东省',
            'value': 721,
          },
          {
            'province': '河北省',
            'value': 877,
          },
          {
            'province': '河南省',
            'value': 431,
          },
          {
            'province': '北京市',
            'value': 420,
          },
          {
            'province': '浙江省',
            'value': 328,
          },
          {
            'province': '江苏省',
            'value': 315,
          },
          {
            'province': '广东省',
            'value': 249,
          },
          {
            'province': '安徽省',
            'value': 232,
          },
          {
            'province': '山西省',
            'value': 171,
          },
          {
            'province': '黑龙江省',
            'value': 140,
          },
          {
            'province': '上海市',
            'value': 101,
          },
          {
            'province': '辽宁省',
            'value': 100,
          },
          {
            'province': '四川省',
            'value': 94,
          },
          {
            'province': '江西省',
            'value': 77,
          },
          {
            'province': '湖北省',
            'value': 64,
          },
          {
            'province': '福建省',
            'value': 63,
          },
          {
            'province': '重庆市',
            'value': 57,
          },
          {
            'province': '内蒙古自治区',
            'value': 57,
          },
          {
            'province': '西藏自治区',
            'value': 45,
          },
          {
            'province': '陕西省',
            'value': 42,
          },
          {
            'province': '吉林省',
            'value': 40,
          },
          {
            'province': '宁夏回族自治区',
            'value': 35,
          },
          {
            'province': '云南省',
            'value': 34,
          },
          {
            'province': '贵州省',
            'value': 34,
          },
          {
            'province': '广西壮族自治区',
            'value': 32,
          },
          {
            'province': '湖南省',
            'value': 32,
          },
          {
            'province': '新疆维吾尔自治区',
            'value': 29,
          },
          {
            'province': '甘肃省',
            'value': 23,
          },
          {
            'province': '天津市',
            'value': 22,
          },
          {
            'province': '青海省',
            'value': 22,
          },
          {
            'province': '海南省',
            'value': 10,
          },
        ],
      },
      msg: '',
    };
  },
  getTripDay() { // trip-day
    return {
      code: 1,
      data: {
        operations: {
          mileage: 231,
          time: '12时12分',
          runDay: '13时12分',
          loss: 12,
        },
        footprint: {},
      },
      msg: '',
    };
  },
  getTripDayTime() { // trip-day-time
    return {
      code: 1,
      data: {
        operations: {
          mileage: 231,
          time: 12,
          dirveDay: 12,
          runDay: 12,
          avgSpeed: 12,
          loss: 12,
        },
      },
      msg: '',
    };
  },
};
