// pages/modal/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    actionSheetHidden: true,
    actionSheetItems: ['选项A', '选项B', '选项C'],

    showmodal: false,//是否显示弹窗
    animationData: '',//动画
  },
  //弹出底部的Sheet
  showsheet: function () {
    this.setData({
      //取反
      actionSheetHidden: !this.data.actionSheetHidden
    });
  },
  //监听点击的Sheet
  itemSheet: function (e) {
    console.log("点击的Sheet");
    console.log(e.currentTarget.dataset.id);
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  //取消点击的Sheet
  cancelSheet:function(){
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  //显示原生的Modal弹窗
  showModal:function(){
    wx.showModal({
      title: '提示',//提示的标题
      content: '原生弹窗的内容',//提示的内容
      showCancel:true,//是否显示取消按钮
      cancelText:'取消',//取消按钮的文字，最多4个字符
      cancelColor:'#f00',//取消按钮的文字颜色
      confirmText:'确定',//确定按钮的样式
      confirmColor:'#0f0',//确定按钮的样式
      success:function(res)
      {
        if(res.confirm)
        {
          console.log("点击了确定按钮");
        }
        else if(res.cancel)
        {
          console.log("点击了取消按钮");
        }        
      },
    })
  },
  //显示弹层
  showVModal: function (e) {
   
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showmodal: true,//显示弹出层
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏弹层
  hideModal: function () {
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showmodal: false,//隐藏弹出层
      })

    }.bind(this), 200)
  },
  //成功的Toast弹窗
  showSToast:function(){
    wx.showToast({
      title: '弹窗提示成功',//弹窗的内容
      duration:2000,//显示2秒
      mask: true
    })
  },
  //失败的Toast弹窗
  showFToast: function () {
    wx.showToast({
      title: '弹窗提示失败',//弹窗的内容
      duration: 2000,//显示2秒
      image:'/resources/shibai.jpg',
      mask:true
    })
  },
  //无图标的Toast弹窗
  showWToast:function(){
    wx.showToast({
      title: '无图标弹窗提示',//弹窗的内容
      duration: 2000,//显示2秒
      icon: 'none',
      mask: true
    })
  },
  //加载弹窗
  showSLoading:function(){
    wx.showLoading({
      title: '数据正在加载中...',
      mask:false      
    })
  },
  //隐藏弹窗
  showHLoading:function(){
    wx.hideLoading();
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