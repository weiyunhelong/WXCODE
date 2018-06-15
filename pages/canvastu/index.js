// pages/canvastu/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shareImgSrc: '',//分享的图
    sharetxt: '',//分享的文字
    baitxt: '',//打败的文字
    scale: 0.6,//缩放比例
    portrait_temp: '',//分享的图片
    qrcode_temp: "/resources/wxcode.jpg",//小程序码
    windowWidth: 0,//
    windowHeight: 0,//
    shareimg: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //得到参数信息
    that.setData({
      portrait_temp: "/resources/sharetu.png",
      sharetxt: "文案文字1",
      baitxt: "文案文字2"
    })
    //得到设备的信息
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowWidth: res.windowWidth,//
          windowHeight: res.windowHeight,//
        })
        //绘图
        that.drawImage();
      },
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  //绘制图片
  drawImage: function () {
    //绘制canvas图片
    var that = this
    const ctx = wx.createCanvasContext('myCanvas')
    var bgPath = '/resources/Bg_Share.png';
    var portraitPath = that.data.portrait_temp;
    var hostNickname = getApp().globalData.wxname;

    var qrPath = that.data.qrcode_temp;
    var windowWidth = that.data.windowWidth;

    //绘制背景图片
    ctx.drawImage(bgPath, 0, 0, windowWidth, that.data.scale * windowWidth);
    ctx.save();

    //绘制第一段文本
    ctx.setFillStyle('#ffffff')
    ctx.setFontSize(0.074 * windowWidth)
    ctx.setTextAlign('center')
    ctx.fillText("逢考必测", windowWidth / 2, 0.10 * windowWidth);

    //绘制头像
    ctx.beginPath();
    ctx.rect(windowWidth / 2, 0.7 * windowWidth, 0.3 * windowWidth, 0.3 * windowWidth);
    ctx.drawImage(portraitPath, 0.35 * windowWidth / 2, 0.15 * windowWidth, 0.3 * windowWidth, 0.3 * windowWidth);
    ctx.drawImage(qrPath, 1.00 * windowWidth / 2, 0.15 * windowWidth, 0.3 * windowWidth, 0.3 * windowWidth);
    ctx.restore();

    //绘制第一段文本
    ctx.setFillStyle('#ffffff')
    ctx.setFontSize(0.037 * windowWidth)
    ctx.setTextAlign('center')
    ctx.fillText(that.data.sharetxt, windowWidth / 2, 0.52 * windowWidth);

    //绘制第二段文本
    ctx.setFillStyle('#ffffff')
    ctx.setFontSize(0.037 * windowWidth)
    ctx.setTextAlign('center')
    ctx.fillText(that.data.baitxt, windowWidth / 2, 0.57 * windowWidth)

    ctx.draw();

    wx.showLoading({
      mask: true,
      title: '正在生成分享图....',
    })
    //
    setTimeout(function () {
      that.canvasToImage();
    }, 3000)
  },
  //保存成图片
  canvasToImage: function () {
    var that = this
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: that.data.windowWidth,
      height: that.data.windowWidth * that.data.scale,
      destWidth: that.data.windowWidth * 4,
      destHeight: that.data.windowWidth * 4 * that.data.scale,
      canvasId: 'myCanvas',
      success: function (res) {
        console.log('朋友圈分享图生成成功:' + res.tempFilePath);
        var shareimg = res.tempFilePath;

        that.setData({
          shareimg: shareimg
        })
        //图片保存到手机
        that.saveImgToPhone();
      },
      fail: function (err) {
        console.log('失败')
        console.log(err)
      }
    })
    wx.hideLoading();
  },
  //将图片保存到相册
  saveImgToPhone: function () {
    var that = this;
    wx.saveImageToPhotosAlbum({
      filePath: that.data.shareimg,
      success(res) {
        wx.showModal({
          title: '存图成功',
          content: '图片成功保存到相册了，去发圈噻~',
          showCancel: false,
          confirmText: '好哒',
          confirmColor: '#72B9C3',
        })
      },
      fail(res) {
        wx.showModal({
          title: '提示',
          content: '保存分享图片失败',
          showCancel: false,
          confirmText: '返回',
          confirmColor: '#72B9C3',
        })
      }
    })
    getApp().globalData.showModal = false;
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