// import wepy from 'wepy';
import ajaxProvider from '../providers/ajax';

class PassportService {

  checkLogin() {

  }

  async registUserByWeiXinUserInfo(wxUserInfo) {
    let result = await ajaxProvider.request('registUserByWeiXinUserInfo', wxUserInfo);
    return result;
  }

  async login() {
    return {};
  }

  saveCookie() {

  }

  getCookie() {

  }
}

export default new PassportService();
