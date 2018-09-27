import ajaxProvider from '../providers/ajax';

class ProfileService {

  async getCurrentUser() {
    let result = await ajaxProvider.request('getCurrentUser');
    return result.data;
  }

  async removePlatform() {

  }

  async addPlatform() {
    
  }

  async getPlatforms() {
    return {
      list: [
        { id: 1, code: 'E017', name: '欧曼' }
      ]
    };
  }
}

export default new ProfileService();