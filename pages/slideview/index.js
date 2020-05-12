// pages/slideview/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas: [],
    slideBtns: [{
      type: 'default',
      text: '编辑',
      extClass: 'test',
      src: '', // icon的路径
    }, {
      type: 'warn',
      text: '删除',
      extClass: 'test',
      src: '', // icon的路径
    }], //操作按钮
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var datas = [];
    for (var i = 0; i < 20; i++) {
      var item = {
        ID: i + 1,
        Name: "Item " + (i + 1)
      };
      datas.push(item);
    }

    that.setData({
      datas: datas
    })
  },
  slideopt(e) { //左滑操作
    var that = this;

    if (e.detail.index == 0) {
      wx.showToast({
        title: '编辑操作',
      })
    } else {
      wx.showToast({
        title: '删除操作',
      })
    }
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