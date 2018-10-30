import ajaxProvider from '../providers/ajax';

class ProfileService {

  async registUserByWeiXinUserInfo(params) {
    let result = await ajaxProvider.request('registUserByWeiXinUserInfo', params);
    return result.data;
  }

  async getCurrentUser() {
    let result = await ajaxProvider.request('getCurrentUser');
    return result.data;
  }

  async removePlatform({code, username}) {
    let result = await ajaxProvider.request('removePlatform', { code, username });
    return result;
  }

  async addPlatform(params) {
    let result = await ajaxProvider.request('addPlatform', params);
    return result;
  }

  async getPlatforms() {
    let result = await ajaxProvider.request('getProfilePlatforms');
    result.list = result.list || [];
    return result;
  }

  // 我的个人信息
  async updateUserName(params) {
    let result = await ajaxProvider.request('updateUserName', params);
    return result;
  }
  // async uploadFile(params) {
  //   let result = await ajaxProvider.request('uploadFile', params);
  //   return result;
  // }
  async submitSuggest(params) {
    let result = await ajaxProvider.request('submitSuggest', params);
    return result;
  }
  async getSubscribeConfig() {
    let result = await ajaxProvider.request('getSubscribeConfig');
    return result;
  }
  async editSubscribeConfig(params) {
    let result = await ajaxProvider.request('editSubscribeConfig', params);
    return result;
  }

  // 首页
  async getCarSituation() {
    let result = await ajaxProvider.request('getCarSituation');
    return result;
  }

  async getProvinceCarInfo() {
    let result = await ajaxProvider.request('getProvinceCarInfo');
    return result;
  }

  async getCarConfigurationInfo() {
    let result = await ajaxProvider.request('getCarConfigurationInfo');
    return result;
  }

  async getCarModelsInfo() {
    let result = await ajaxProvider.request('getCarModelsInfo');
    return result;
  }
}

export default new ProfileService();
