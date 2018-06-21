// 通过正则来检验邮箱是否有效
var validateEmail = function (txt) {
  var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(txt)
}

// 通过正则来检验手机号是否有效
var validateMobile = function (txt) {
  var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
  return reg.test(txt)
}

//通过正则表达式验证邮政编码
var validatePostCode=function(txt){
  var reg = /^\d{6}$/;
  return reg.test(txt)
}

//通过正则表达式验证数字
var validateNumber = function (txt) {
  var reg = /^[0-9]*$/;
  return reg.test(txt)
}

//通过正则表达式汉字
var validateChinese = function (txt) {
  var reg = /^[\u0391-\uFFE5]+$/;
  return reg.test(txt)
}


//通过正则表达式电话号码
var validatePhone = function (txt) {
  var reg = /^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/;
  return reg.test(txt)
}

//通过正则表达式字母
var validateZimu = function (txt) {
  var reg = /^[A-Za-z]+$/;
  return reg.test(txt)
}

// 判断输入是否是一个由 0-9 / A-Z / a-z 组成的字符串
var validateAlphanumber = function (txt) {
  var reg = /^[a-zA-Z0-9]+$/;
  return reg.test(txt)
}

// 验证18位身份证
var validateIDCard = function (txt) {
  var reg = /\d{18}/;
  return reg.test(txt)
}

//由数字、26个字母或者下划线组成的字符串
var validateUserName = function (txt) {
  var reg = /^\w+$/;
  return reg.test(txt)
}

//验证日期格式
var validateDate = function (txt) {
  var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})/;
  return reg.test(txt)
}

//验证日期时间格式
var validateDateTime = function (txt) {
  var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/; 
  return reg.test(txt)
}

//验证时间格式
var validateTime = function (txt) {
  var reg = /^((20|21|22|23|[0-1]\d)\:[0-5][0-9])(\:[0-5][0-9])?$/;
  return reg.test(txt)
}

module.exports = {
  validateEmail: validateEmail,//验证邮箱
  validateMobile: validateMobile,//验证手机号
  validatePostCode: validatePostCode,//验证邮政编码
  validateNumber: validateNumber,//验证数字
  validateChinese: validateChinese,//验证中文
  validatePhone: validatePhone,//验证电话号码
  validateZimu: validateZimu,//验证大小写字母
  validateAlphanumber: validateAlphanumber,//验证数字，字母组成
  validateIDCard: validateIDCard,//验证18位身份证
  validateUserName: validateUserName,//验证用户名（数字，字母，下划线）
  validateDate: validateDate,//验证日期  
  validateDateTime: validateDateTime,//验证日期时间
  validateTime: validateTime//验证时间
}
