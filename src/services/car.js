import ajaxProvider from '../providers/ajax';

class CarService {
  // 车辆列表
  async getList (params = {}) {
    let result = await ajaxProvider.request('getList', params);
    return result;
  }

  async getBrands () {
    let result = await ajaxProvider.request('getBrands');
    return result;
  }

  async getTypes (params) {
    let result = await ajaxProvider.request('getTypes', params);
    return result.list;
  }

  async getSearchList (params) {
    let result = await ajaxProvider.request('getSearchList', params);
    return result;
  }

  async getDetail() {

  }

  // 车辆详情-实时
  async getRealTimeInfo (params = {}) {
    let result = await ajaxProvider.request('getRealTimeInfo', params);
    let list = result.list;
    let codeMap = [
      {
        code: '8020067',
        img: '/assets/realtime/fault1.png',
        imgRed: '/assets/realtime/fault1_red.png',
        txt: '空滤正常',
        txtRed: '空滤阻塞报警',
        isRed: false
      },
      {
        code: '1010010',
        img: '/assets/realtime/fault2.png',
        imgRed: '/assets/realtime/fault2_red.png',
        txt: '水温正常',
        txtRed: '水温过高报警',
        isRed: false
      },
      {
        code: '2003',
        img: '/assets/realtime/fault3.png',
        imgRed: '/assets/realtime/fault3_red.png',
        txt: '天线正常',
        txtRed: 'GNSS天线未接或被剪断',
        isRed: false
      },
      {
        code: '8020026',
        img: '/assets/realtime/fault4.png',
        imgRed: '/assets/realtime/fault4_red.png',
        txt: '制动液位正常',
        txtRed: '制动液位低报警',
        isRed: false
      },
      {
        code: '8020069',
        img: '/assets/realtime/fault5.png',
        imgRed: '/assets/realtime/fault5_red.png',
        txt: '冷却液位正常',
        txtRed: '冷却液位低报警',
        isRed: false
      },
      {
        code: '8020066',
        img: '/assets/realtime/fault6.png',
        imgRed: '/assets/realtime/fault6_red.png',
        txt: '转向液位正常',
        txtRed: '转向液位低报警',
        isRed: false
      },
      {
        code: '1010008',
        name: '机油液位',
        value: '--',
        img: '/assets/realtime/engine1.png'
      },
      {
        code: '1010069',
        name: '蓄电池电压',
        value: '--',
        img: '/assets/realtime/engine2.png'
      },
      {
        code: '1010006',
        name: '机油温度',
        value: '--',
        img: '/assets/realtime/engine3.png'
      },
      {
        code: '1010020',
        name: '尿素液位',
        value: '--',
        img: '/assets/realtime/engine4.png'
      },
      {
        code: '8020076',
        name: '冷却液位',
        value: '--',
        img: '/assets/realtime/engine5.png'
      },
      {
        code: '8080027',
        name: '车门状态',
        value: '',
        imgOff: '/assets/realtime/carbody_door_off.png',
        imgOn: '/assets/realtime/carbody_door_on.png',
        isOn: false
      },
      {
        code: '1010038',
        name: '手刹状态',
        value: '',
        imgOff: '/assets/realtime/carbody_hand_off.png',
        imgOn: '/assets/realtime/carbody_hand_on.png',
        isOn: false
      },
      {
        code: '8080025',
        name: '门锁状态',
        value: '',
        imgOff: '/assets/realtime/carbody_lock_off.png',
        imgOn: '/assets/realtime/carbody_lock_on.png',
        isOn: false
      },
      {
        code: '2020001',
        name: '空调状态',
        value: '',
        imgOff: '/assets/realtime/carbody_air_off.png',
        imgOn: '/assets/realtime/carbody_air_on.png',
        isOn: false
      },
      {
        code: '8080023',
        name: '车载状态',
        value: '',
        imgOff: '/assets/realtime/carbody_load_off.png',
        imgOn: '/assets/realtime/carbody_load_on.png',
        isOn: false
      },
      {
        code: '1010027',
        name: '速度',
        value: 0
      },
      {
        code: '1020002',
        name: '油耗',
        value: 0
      },
      {
        code: '80802298',
        name: '转速',
        value: 0
      },
      {
        code: '8020078',
        name: '油量',
        value: 0
      },
      {
        code: '1010010',
        name: '水温',
        value: 0
      }
    ];
    let faultsCode = ['1010097', '1010098', '2003', '8020026', '8020069', '8020066'];
    let engineCode = ['1010008', '1010069', '1010006', '1010020', '8020076'];
    let carBodyInfo = ['8080027', '1010038', '8080025', '2020001', '8080023'];
    let dashBoard = ['1010027', '1020002', '80802298', '8020078', '1010010'];
    let data = [];
    data = codeMap.map(v => {
      let item = list.find(m => m.code === v.code);
      if (item) {
        if (faultsCode.indexOf(v.code) > -1) {
          if (item.value === "1") v.isRed = true;
        }
        if (engineCode.indexOf(v.code) > -1) {
          v.value = (item.value === "" || item.value == null) ? '--' : Math.round(item.value) + item.unit;
        }
        if (carBodyInfo.indexOf(v.code) > -1) {
          if (item.value === '0') {
            v.value = 'OFF';
            v.isOn = false;
          } else {
            v.value = 'ON';
            v.isOn = true;
          }
          if (item.code === "8080023") {
            switch (item.value) {
              case "0":
                v.value = '空载';
                v.isOn = true;
                break;
              case "1":
                v.value = '半载';
                v.isOn = true;
                break;
              case "2":
                v.value = '重载';
                v.isOn = false;
                break;
              case "3":
                v.value = '超载';
                v.isOn = false;
                break;
            }
          }
        }
        if (dashBoard.indexOf(v.code) > -1) {
          v.value = +item.value;
        }
      }
      return v;
    });
    let obj = {
      faults: data.slice(0, 6),
      engine: data.slice(6, 11),
      carBodyInfo: data.slice(11, 16),
      dashBoard: data.slice(16)
    };
    return obj;
  }
  async getCarDetailInfo (params = {}) {
    let result = await ajaxProvider.request('getCarDetailInfo', params);
    let d = result.data.location;
    let carInfo = {
      mileage: d.mileage,
      address: d.address,
      timeUp: result.info,
      acc: d.acc,   // 0关 1开
      latitude: d.latitude,
      longitude: d.longitude,
      vin: result.data.vin,
      lastTimeShow: d.sendTime,
      lpn: result.data.carInfo.lpn,
      id: result.data.carInfo.id
    }
    return carInfo;
  }
  async getWarnInfo(params = {}) {
    let result = await ajaxProvider.request('getWarnInfo', params);
    let arr = result.list.filter(v => v.isAlarm);
    return {
      list: arr
    };
  }
  // 车辆详情-画像
  async getPortraitScore (params = {}) {
    let r = await ajaxProvider.request('getPortraitScore', params);
    let obj = {
      score: r.data.totalGrade || 0,
      stars: [
        { name: '行驶里程', value: Math.round(r.data.mileageGrade / 20) },
        { name: '行驶时长', value: Math.round(r.data.runTimeGrade / 20) },
        { name: '夜间出行', value: Math.round(r.data.nightGrade / 20) },
        { name: '利用率', value: Math.round(r.data.useRateGrade / 20) }
      ]
    }
    return obj;
  }
  async getPortraitProvinceOrder (params = {}) {
    let result = await ajaxProvider.request('getPortraitProvinceOrder', params);
    let obj = {
      provinceCount: result.totalCount,
      list: result.mapList
    }
    return obj;
  }
  async getPortraitCityOrder (params = {}) {
    let result = await ajaxProvider.request('getPortraitCityOrder', params);
    let obj = {
      cityCount: result.totalCount,
      list: result.mapList
    }
    return obj;
  }
  async getCitiesProportion (params = {}) {
    let result = await ajaxProvider.request('getCitiesProportion', params);
    return result;
  }
  async getPortraitStopPoints (params = {}) {
    let result = await ajaxProvider.request('getPortraitStopPoints', params);
    return result;
  }
  async getPortraitDayNight (params = {}) {
    let result = await ajaxProvider.request('getPortraitDayNight', params);
    return {
      data: result
    };
  }
  async getPortraitWeather (params = {}) {
    let result = await ajaxProvider.request('getPortraitWeather', params);
    let arr = [
      {name: '雨', value: result.map.rainy},
      {name: '雪', value: result.map.snowy},
      {name: '特殊天气', value: result.map.special},
      {name: '晴/阴/多云', value: result.map.clear}
    ];
    return {
      data: arr.filter(v => v.value != 0)
    };
  }
  async getPortraitHumidity (params = {}) {
    let result = await ajaxProvider.request('getPortraitHumidity', params);
    let arr = [
      {name: '干燥', value: result.map.dry},
      {name: '潮湿', value: result.map.wet},
      {name: '舒适', value: result.map.comfort}
    ];
    return {
      data: arr.filter(v => v.value != 0)
    };
  }
  async getPortraitTemperature (params = {}) {
    let result = await ajaxProvider.request('getPortraitTemperature', params);
    let {extremecold, cold, cool, warm, hot} = result.map;
    let sum = Number(extremecold) + Number(cold) + Number(cool) + Number(warm) + Number(hot);
    let arr = [
      {name: '极寒', value: Math.round(extremecold / sum * 100)},
      {name: '寒冷', value: Math.round(cold / sum * 100)},
      {name: '凉爽', value: Math.round(cool / sum * 100)},
      {name: '温暖', value: Math.round(warm / sum * 100)},
      {name: '炎热', value: Math.round(hot / sum * 100)}
    ];
    return {
      data: arr
    };
  }
  async getPortraitAltitude (params = {}) {
    let result = await ajaxProvider.request('getPortraitAltitude', params);
    let {plain, hill, mountain, highland} = result.map;
    let sum = Number(plain) + Number(hill) + Number(mountain) + Number(highland);
    let arr = [
      {name: '平原', value: Math.round(plain / sum * 100)},
      {name: '丘陵', value: Math.round(hill / sum * 100)},
      {name: '山地', value: Math.round(mountain / sum * 100)},
      {name: '高原', value: Math.round(highland / sum * 100)}
    ];
    return {
      data: arr
    };
  }
  // 车辆详情-位置详情
  async getLocationPageInfo (params = {}) {
    let r1 = await ajaxProvider.request('getCarDetailInfo', {did: params.did});
    let r2 = await ajaxProvider.request('getRealTimeInfo', {carId: params.carId});
    let d = r1.data.location;
    let carInfo = {
      mileage: d.mileage,
      address: d.address,
      acc: d.acc,   // 0关 1开
      latitude: d.latitude,
      longitude: d.longitude,
      vin: r1.data.vin,
      lastTimeShow: d.sendTime,
      lpn: r1.data.carInfo.lpn,
      id: r1.data.carInfo.id
    };
    let speedItem = r2.list.find(v => v.code === '1010027');
    carInfo.speed = Math.round(speedItem.value);
    return carInfo;
  }
}

export default new CarService();
