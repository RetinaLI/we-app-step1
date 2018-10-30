// import wepy from 'wepy';
import ajaxProvider from '../providers/ajax';

class PassportService {

  checkLogin() {

  }

  async registUserByWeiXinUserInfo(wxUserInfo) {
    let result = await ajaxProvider.request('registUserByWeiXinUserInfo', wxUserInfo);
    return result;
  }

  async login({ username, password, companyNo }) {
    let result = await ajaxProvider.request('login', {
      username: username || 'sa',
      password: password || 'IPdtB6HiNx',
      companyNo: companyNo || 'E017'
    });
    return result;
  }

  saveCookie() {

  }

  getCookie() {

  }
}

export default new PassportService();
