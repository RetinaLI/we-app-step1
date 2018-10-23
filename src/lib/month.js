// 格式化日期
function formatDate(date) {
  return date.getDay();
}

// 获得某月的天数
function getMonthDays(year, month) {
  let monthStartDate = new Date(year, month - 1, 1);
  let monthEndDate = new Date(year, month, 1);
  return (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
}

let monthDay = (year, month) => {
  // 本月总天数
  let days = getMonthDays(year, month);
  // 获得某月从周几开始
  let monthStartDate = formatDate(new Date(year, month - 1, 1));
  return {
    monthStartDate,
    days
  };
};

export default monthDay;
