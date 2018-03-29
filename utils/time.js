//时间转为 2018/03/28  18:08:38
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
//转换为数字
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//得到当前的日期
function getNowDate() {
  var date = new Date();
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  return [year, month, day].map(formatNumber).join('-')
}

//得到当前的日期
function getMorenDate() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  return year + '年' + month + '月' + day+'日'
}

//得到选中的日期
function getSelectDate(riqi) {
  var date = riqi.split('-');
  var year = date[0];
  var month = date[1];
  var day = date[2];
  return year + '年' + month + '月' + day + '日'
}

//得到日期的年
function getSelectYear(riqi) {
  var date = riqi.split('-');
  var year = parseInt(date[0]);
  return year
}

//得到日期的月
function getSelectMonth(riqi) {
  var date = riqi.split('-');
  var month = parseInt(date[1]);
  return month
}

//得到日期的日
function getSelectDay(riqi) {
  var date = riqi.split('-');
  var day = parseInt(date[2]);
  return day
}

//得到2日期比较
function getCompairDate(start,end) {

  var onedate = Date.parse(start);
  var twodate = Date.parse(end);

  if (onedate >= twodate){
    return false;
  }else{
    return true;
  }
}

//得到当前的时间
function getNowTime() {
  var date = new Date();
  var hour = date.getHours()
  var minute = date.getMinutes()
  return [hour, minute].map(formatNumber).join(':')
}

//得到月份的天数
function getDayNum(year,month) {
 var result=30;
 //31天的月份
 if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
 {
   result = 31;
 }//2月份的天数
 else if (month==2)
 {
   //闰年
   if(((year % 4) == 0) && ((year % 100) != 0) || ((year % 400) == 0)) 
   {
     result = 29;
   }//平年
   else{
     result = 28;
   }
 }
 return result;
}

//得到星期几
function getWeekDay(year, month,day)
{
  var show_day = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'); 
  var date= Date.parse(year + "-" + month+"-"+day);
  var day = date.getDay(); 
  return show_day[day];
}

//得到本月的第几周
function getWeekNum(year, month, day) {
  var date = new Date(year, parseInt(month) - 1, day), 
         w = date.getDay(), 
         d = date.getDate();
  return Math.ceil((d + 6 - w) / 7);
}
//得到本年的第几周
function getYearNum(year, month, day) {
  var date1 = new Date(year, parseInt(month) - 1, day), 
      date2 = new Date(year, 0, 1),
      d = Math.round((date1.valueOf() - date2.valueOf()) / 86400000);
  return Math.ceil((d + ((date2.getDay() + 1) - 1)) / 7);
}

//两个时间相差天数 兼容firefox chrome
function getDayCount(sDate1, sDate2) {    //sDate1和sDate2是2006-12-18格式  
  var dateSpan,tempDate,iDays;

  sDate1 = Date.parse(sDate1);
  sDate2 = Date.parse(sDate2);

  dateSpan = sDate2 - sDate1;
  dateSpan = Math.abs(dateSpan);
  iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
  return iDays;
};
//2个时间的时间差
function getDateDiff(startTime, endTime, diffType) {
  //将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式 
  startTime = startTime.replace(/\-/g, "/");
  endTime = endTime.replace(/\-/g, "/");
  //将计算间隔类性字符转换为小写
  diffType = diffType.toLowerCase();
  var sTime = new Date(startTime); //开始时间
  var eTime = new Date(endTime); //结束时间
  //作为除数的数字
  var timeType = 1;
  switch (diffType) {
    case "second":
      timeType = 1000;
      break;
    case "minute":
      timeType = 1000 * 60;
      break;
    case "hour":
      timeType = 1000 * 3600;
      break;
    case "day":
      timeType = 1000 * 3600 * 24;
      break;
    default:
      break;
  }
  return parseInt((eTime.getTime() - sTime.getTime()) / parseInt(timeType));
}

module.exports = {
  formatTime: formatTime,//时间的格式化
  getNowDate: getNowDate,//得到当前的日期:2018-03-28
  getNowTime: getNowTime,//得到当前的时间:18:08
  getMorenDate: getMorenDate,//得到当前的时间:2018年03月28日
  getSelectDate: getSelectDate,//转化为时间2018年03月28日
  getCompairDate:getCompairDate,//比较时间的大小 
  getSelectYear: getSelectYear,//得到选择的年
  getSelectMonth: getSelectMonth,//得到选择的月
  getSelectDay: getSelectDay,//得到选择的日
  getDayNum: getDayNum,//得到月份对应的天数
  getWeekDay: getWeekDay,//得到星期几
  getWeekNum: getWeekNum,//得到日期所在月的周数
  getYearNum: getYearNum,//得到日期所在年的周数
  getDayCount: getDayCount,//得到2个日期相差的天数
  getDateDiff: getDateDiff//得到时间差
}