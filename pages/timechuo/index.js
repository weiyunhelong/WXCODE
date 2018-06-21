// pages/timechuo/index.js
var timetool=require('../../utils/time.js');//时间工具

Page({

  /**
   * 页面的初始数据
   */
  data: {
    timechuo:'',//时间戳
    datetime:'',//日期时间
    date:'',//日期
    time:'',//时间
    datetimeval:'',//时间日期
    datetimechuo:''//时间戳
  },
  //获取得到时间戳
  gettimechuo:function(e){
    var that=this;
    var txtval=e.detail.value;
    that.setData({
      timechuo: txtval
    })
  },
  //时间戳转换操作
  changeopt:function(){
    var that=this;
    //验证时间戳参数不能为空
    if (that.data.timechuo==""){
      wx.showToast({
        title: '请输入需要转换的时间戳',
        mask:true,
        duration:2000,
        icon:'none'
      })
    }else{
      //转为时间戳
      var timechuo = parseInt(that.data.timechuo);
      var datetime = timetool.formatToDateTime(timechuo);
      var date = timetool.formatToDate(timechuo);
      var time = timetool.formatToTime(timechuo);

      that.setData({
        datetime: datetime,
        date: date,
        time: time
      })
    }
  },
  //获取得到时间日期值
  getdatetime: function (e) {
  
    var that = this;
    var txtval = e.detail.value;
    console.log("日期时间的值:" + txtval);
    that.setData({
      datetimeval: txtval
    })
  },
  //时间戳转换操作
  changedtopt: function () {
    var that = this;
    //验证时间戳参数不能为空
    if (that.data.datetimeval == "") {
      wx.showToast({
        title: '请输入需要转换的日期时间',
        mask: true,
        duration: 2000,
        icon: 'none'
      })
    } else {
      //转为时间戳
      var datetimeval = that.data.datetimeval;
      console.log("被转换的日期时间的值:" + datetimeval);
      var result = timetool.DateTimeToChuo(datetimeval);
      console.log("转换的日期时间的值:" + result);
      that.setData({
        datetimechuo: result,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   wx.setNavigationBarTitle({
     title: '时间戳操作',
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