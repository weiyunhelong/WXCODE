//时间的格式化。格式为:2018/03/28  18:05:38
const formatDateTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

//补位0
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//格式化时间
function formatTime(time) {
  if (typeof time !== 'number' || time < 0) {
    return time
  }

  var hour = parseInt(time / 3600)
  time = time % 3600
  var minute = parseInt(time / 60)
  time = time % 60
  var second = time

  return ([hour, minute, second]).map(function (n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }).join(':')
}

//格式化经纬度
function formatLocation(longitude, latitude) {
  if (typeof longitude === 'string' && typeof latitude === 'string') {
    longitude = parseFloat(longitude)
    latitude = parseFloat(latitude)
  }

  longitude = longitude.toFixed(2)
  latitude = latitude.toFixed(2)

  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.')
  }
}

//特殊的请求参数
function json2Form(json){
	 
	var str=[];
    for(var p in json)
    {
	     str.push(encodeURIComponent(p)+"="+encodeURIComponent(json[p]));
    }	
	return str.join("&");
}


module.exports = {
  formatDateTime: formatDateTime,
  formatTime: formatTime,
  formatLocation: formatLocation,
  json2Form:json2Form
}
