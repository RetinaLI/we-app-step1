import ajaxProvider from '../providers/ajax';

class TripService {
  // 车辆详情-行程
  async getTripIndex(params = {}) {
    let result = await ajaxProvider.request('getTripIndex', params);
    return result;
  }
  async getTripIndexCreated(params = {}) {
    let result = await ajaxProvider.request('getTripIndexCreated', params);
    return result;
  }
  async getTripIndexList(params = {}) {
    let result = await ajaxProvider.request('getTripIndexList', params);
    return result;
  }
  async getTripMonth(params = {}) {
    let result = await ajaxProvider.request('getTripMonth', params);
    return result;
  }
  async getTripMonthList(params = {}) {
    let result = await ajaxProvider.request('getTripMonthList', params);
    return result;
  }
  async getTripDayMap(params = {}) {
    let result = await ajaxProvider.request('getTripDayMap', params);
    return result;
  }
  async getTripDayTime(params = {}) {
    let result = await ajaxProvider.request('getTripDayTime', params);
    return result;
  }
}

export default new TripService();
