// pages/wxParse/index.js
//引入富文本编辑器
var WxParse = require('../../utils/wxParse/wxParse.js');//图文详情插件
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
    var that=this;
    //活动详情
    var hdinfo = "<p><img alt='冲泡红茶需要掌握的基本技巧' src='/resources/shibai.jpg'><br><br>红茶是全发酵茶。想要冲泡一杯口感美味的红茶却不是一件简单的事情。如果你将泡好的红茶倒入冰冷的茶杯当中，这样就会大大的降低了红茶的热度，同时也减少了红茶香气的发挥。</p>< p > 所以我们在冲泡红茶的时候，要用热水将茶壶及茶杯烫过一遍，等红茶泡好以后再倒掉茶杯中的水，最后注入泡好的红茶，此时的口感方为最佳的。还是来看看冲泡红茶需要掌握的基本技巧。</p>< p > <strong>【茶与水的用量】</strong></p><img alt='冲泡红茶需要掌握的基本技巧' src='/resources/shibai.jpg'><p>泡茶时，泡茶要掌握好茶与水的用量比例。家庭泡茶大多是凭经验行事。对茶叶和沸水用量的配比也应酌情而定。通常，一只200毫升白色有柄瓷杯，放入3克左右的茶叶，冲上沸水250毫升即可。冲泡时先冲上三分之一杯沸水，少顷，再冲至七八成满。</p>";

    
    //显示内容
    WxParse.wxParse('article', 'html', hdinfo, that, 5);
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