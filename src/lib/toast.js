import wepy from 'wepy';

const TOAST_DURATION_TIME = 2000;

class Toast {
  showByResult(result = { code: 200, msg: '' }) {
    result.code = result.code || 200;
    result.msg = result.msg ? result.msg : result.code === 200 ? '成功' : '失败';
    if (result.code === 200) {
      this.success(result.msg);
    } else {
      this.error(result.msg);
    }
  }
  success(_text) {
    wepy.showToast({
      title: _text,
      icon: 'success',
      duration: TOAST_DURATION_TIME
    });
  }
  error(_text) {
    wepy.showToast({
      title: _text,
      icon: 'error',
      duration: TOAST_DURATION_TIME
    });
  }
  warn(_text) {
    wepy.showToast({
      title: _text,
      icon: 'warn',
      duration: TOAST_DURATION_TIME
    });
  }
  info(_text) {
    wepy.showToast({
      title: _text,
      icon: 'info',
      duration: TOAST_DURATION_TIME
    });
  }
}

export default new Toast();
