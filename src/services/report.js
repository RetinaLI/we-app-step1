import ajaxProvider from '../providers/ajax';

class ReportService {
  async getList(params) {
    let result = await ajaxProvider.request('getReportList', params);
    return result;
  }
}

export default new ReportService();
