// pages/goods/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videosrc:'',//视频的路径
    winheight:0,
    inputValue:'',//弹幕内容
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;

    that.setData({
      videosrc: options.path
    })

    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          winheight:res.screenHeight
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo');
  },
  //获取发送弹幕的内容
  bindInputBlur: function (e) {
    this.setData({
      inputValue:e.detail.value
    })
  },
  //发送弹幕
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.data.inputValue,
      color: this.getRandomColor()
    })
  },
  //随机颜色值
  getRandomColor:function(){
    //颜色列表
    var list = [
      "#FFFF00",
      "#FFFACD",
      "#FFE1FF",
      "#FFD700",
      "#FFBBFF",
      "#FF4500",
      "#FAFAD2",
      "#F0FFF0",
      "#EEEE00",
      "#EEAEEE",
      "#CDCDB4",
      "#E066FF",
      "#CAFF70",
      "#C1FFC1",
      "#C0FF3E",
      "#B3EE3A",
      "#ADFF2F",
      "#9ACD32",
      "#9AFF9A",
      "#98FB98",
      "#9B30FF",
      "#9400D3",
      "#7CFC00",
      "#76EE00",
      "#7CCD7C",
      "#4EEE94",
      "#54FF9F",
      "#32CD32",
      "#00FA9A",
      "#00FFFF",
      "#00FF00",
      "#00CD00",
      "#228B22",
      "#EEEE00",
      "#ADFF2F",
      "#98FB98",
    ];
    var n = Math.floor(Math.random()* 44);
    var backcolor = list[n];
    console.log(n + ",背景颜色:" + backcolor);
    return backcolor;
  },
  //暂停播放
  puashe:function(){
    this.videoContext.pause();
  },
  //开始播放
  puashe: function () {
    this.videoContext.play();
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