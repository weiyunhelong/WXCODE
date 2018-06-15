// pages/htmltowxml/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var that=this;

    var content = '<div class="image">';
    content += '<p style= "text-indent: 2em;" > <strong>央视网消息：</strong>6月9日至10日，上海合作组织成员国、观察员国领导人以及有关国际和地区组织负责人齐聚美丽的黄海之滨，共同描绘上海合作组织进入历史新阶段的发展蓝图，并就重大国际和地区问题深入交换意见，达成广泛共识。在主持大范围会谈并发表讲话时，习近平分析了当前世界大发展大变革大调整的新形势，提出了弘扬“上海精神”的五大新观念，并对上合组织发展提出了五点建议。央视网特进行梳理，以飨读者。</p>';
    content += '<p style="text-align: center;" > <img src="http://p1.img.cctvpic.com/photoworkspace/contentimg/2018/06/13/2018061222323446371.jpg" alt= "6月10日，上海合作组织成员国元首理事会第十八次会议在青岛国际会议中心举行。国家主席习近平主持会议并发表重要讲话。 新华社记者李学仁摄" isflag= "1" > </p>';  
    
    //赋值数据
    that.setData({
      content: content
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