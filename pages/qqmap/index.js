//index.js
//获取应用实例
const app = getApp()


Page({
  data: {
    longitude: 0,
    latitude: 0,
    endLat:0,
    endLng:0,
    endName:''   
  },
  //页面的初始化  
  onLoad:function(){
    
    var that=this;

    //定位得到经纬度    
    wx.getLocation({
      type: 'gcj02',//wgs84
      success: function (res) {
        console.log("得到经纬度坐标:");
        console.log(res);
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      }
    })
  },
  play:function(e) {
    var that=this;
    console.log("得到经纬度的值:");
    console.log(e);
    console.log("位置x:"+e.detail.x+",位置y:"+e.detail.y);
    var xval = e.detail.x, yval = e.detail.y;
   
    
    if (xval >= 200 && xval <= 280 && yval >= 50 && yval <= 120) {     
      that.setData({
        endLat: 31.3835400000,
        endLng: 121.5274800000,
        endName: '滨江森林公园' 
      })     
      //31.3835400000, 121.5274800000
    }else if (xval >= 50 && xval<=100&&yval>=35&&yval<=125){ 
      that.setData({
        endLat: 31.3417200000,
        endLng: 121.3767100000,
        endName: '顾村公园'
      }) 
      //31.3417200000,121.3767100000
    } else if (xval >= 210 && xval <= 265 && yval >= 150 && yval <= 205){  
      that.setData({
        endLat: 31.2837100000,
        endLng: 121.5009500000,
        endName: '同济大学'
      }) 
      //31.2837100000,121.5009500000
    } else if (xval >= 140&& xval <= 210 && yval >= 170 && yval <= 240) {
      that.setData({
        endLat: 31.2717400000,
        endLng: 121.4832300000,
        endName: '鲁迅公园'
      }) 
      //31.2717400000,121.4832300000
    } else if (xval >= 115 && xval <=170 && yval >= 260 && yval <= 325) {
      that.setData({
        endLat: 31.2339100000,
        endLng: 121.4625000000,
        endName: '静安雕塑公园'
      }) 
      //31.2339100000,121.4625000000
    } else if (xval >= 35 && xval <= 115 && yval >= 280 && yval <= 345) {
      that.setData({
        endLat: 31.2209500000,
        endLng: 121.4203200000,
        endName: '中山公园'
      })
      //31.2209500000,121.4203200000
    } else if (xval >= 220 && xval <= 280 && yval >= 270 && yval <= 335) {
      that.setData({
        endLat: 31.2154000000,
        endLng: 121.5520700000,
        endName: '世纪公园'
      })
      //31.2154000000,121.5520700000
    } else if (xval >= 140 && xval <= 220 && yval >= 340 && yval <= 410) {
      that.setData({
        endLat: 31.2248100000,
        endLng: 121.4667800000,
        endName: '延安中路大型公共绿地'
      })
      //31.2248100000,121.4667800000
    } else if (xval >= 100 && xval <= 160 && yval >= 440 && yval <= 520) {
      that.setData({
        endLat: 31.1461400000,
        endLng: 121.4437900000,
        endName: '上海植物园'
      })    
      //31.1461400000,121.4437900000
    }

    setTimeout(function(){
      //跳转到导航页面
      wx.navigateTo({
        url: '../qqmap/detail?startLat=' + that.data.latitude + '&startLng=' + that.data.longitude + '&endLat=' + that.data.endLat + '&endLng=' + that.data.endLng + '&endName=' + that.data.endName,
      })
    },2000)
   
  }
})