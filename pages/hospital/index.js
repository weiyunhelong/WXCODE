// pages/hospital/index.js
var ipsPlugin = requirePlugin("ipsPlugin")



Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    //appKey和mapID 需要向我方获取
    //设置appkey和mapid    建议写在onLoad中
    //ipsDemo提交审核测试时为true 正常使用下为false ！
    ipsPlugin.init({ ipsDemo: false, ipsAppKey: 'fnAs1mE5HP', ipsMapId: 'VhsehJzuZA' });

    //设置导航目的id  写在需要修改导航目的地Id的地方
    ipsPlugin.init({ ipsTargetId: '1111' });

    //报到成功回调   建议写在onLoad中
    ipsPlugin.init({
      ipsReportSuccess: () => {
        //when success to do...
        console.log('报到 成功')
      }
    });

    //打开弹框，开启报到  写在需要报道的地方
    ipsPlugin.open();
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