// pages/pushrefresh/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageNum:0,       // 设置加载的第几次，默认是第一次  
    list:[],//列表数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;

    var list= [];//列表数据
    for(var i=1;i<21;i++)
    {
      list[i]={
        id:i,
        name:'第'+i+'项内容'
      };
    }
    that.setData({
      list: list
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
    
    var that=this;
    var pageNum = that.data.pageNum+1;
    var list = that.data.list;
    var newlist = [];//列表数据
    for (var i = pageNum * 20 + 1; i < pageNum *20+21; i++) {
      newlist[i] = {
        id: i,
        name: '第' + i + '项内容'
      };
    }
    list = list.concat(newlist);
    console.log();
    that.setData({
      list: list,
      pageNum: pageNum
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    var pageNum = that.data.pageNum + 1;
    var list = that.data.list;
    var newlist = [];//列表数据
    for (var i = pageNum * 20 + 1; i < pageNum * 20 + 21; i++) {
      newlist[i] = {
        id: i,
        name: '第' + i + '项内容'
      };
    }
    list = list.concat(newlist);
    console.log();
    that.setData({
      list: list,
      pageNum: pageNum
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})