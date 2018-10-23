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
  async getRealTimeInfo(params = {}) {
    let result = await ajaxProvider.request('getRealTimeInfo', params);
    return result;
  }
  // 车辆详情-画像
  async getPortraitInfo(params = {}) {
    let result = await ajaxProvider.request('getPortraitInfo', params);
    return result;
  }
  // 车辆详情-位置详情
  async getPositionByVin(params = {}) {
    let result = await ajaxProvider.request('getPositionByVin', params);
    return result;
  }
}

export default new CarService();
