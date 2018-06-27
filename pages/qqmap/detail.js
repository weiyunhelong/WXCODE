// pages/qqmap/detail.js

let plugin = requirePlugin("mapRoute");

let routeInfo = {
  startLat: 0,    //起点经度 选填
  startLng: 0,    //起点纬度 选填
  startName: "我的位置",   // 起点名称 选填
  endLat: 0,    // 终点经度必传
  endLng: 0,  //终点纬度 必传
  endName: "",  //终点名称 必传
  mode: 'car'  //算路方式 选填
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    routeInfo: {}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("获取的参数:");
    console.log(options);
    var that = this;
    that.setData({
      routeInfo: {
        startLat: parseFloat(options.startLat), //起点经度 选填
        startLng: parseFloat(options.startLng), //起点纬度 选填
        startName: "我的位置", // 起点名称 选填
        endLat: parseFloat(options.endLat), // 终点经度必传
        endLng: parseFloat(options.endLng), //终点纬度 必传
        endName: options.endName, //终点名称 必传
        mode: "car" //算路方式 选填 car，bus，walk
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})