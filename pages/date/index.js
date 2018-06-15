// pages/date/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datetime:'',//时间
    ishow:false//是否显示插件
  },
  //选择时间
  chkdate:function(){
    var that=this;
    that.setData({
      ishow: !that.data.ishow
    })
  },
  //选择的日期
  yybindchange:function(e){
    var that=this;
    console.log("选择的日期:");
    console.log(e);
    that.setData({
      datetime: e.detail.date
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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