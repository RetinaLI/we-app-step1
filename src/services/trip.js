import ajaxProvider from '../providers/ajax';

class TripService {
  // 车辆详情-实时
  async getTripIndex(params = {}) {
    let result = await ajaxProvider.request('getTripIndex', params);
    return result;
  }
  async getTripMonth(params = {}) {
    let result = await ajaxProvider.request('getTripMonth', params);
    return result;
  }
  async getTripDay(params = {}) {
    let result = await ajaxProvider.request('getTripDay', params);
    return result;
  }
  async getTripDayTime(params = {}) {
    let result = await ajaxProvider.request('getTripDayTime', params);
    return result;
  }
}

export default new TripService();
