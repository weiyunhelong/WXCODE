//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    grids: [
    {
      name:'日历插件',
      url:'../calendar/index'
    },
    {
      name: '日历模板插件',
      url: '../calendarTemplate/index'
    },
    {
      name: '日历弹窗选择插件',
      url: '../datepickerTemplate/index'
    },
    {
      name: '图表插件',
      url: '../chart/index'
    },
    {
      name: '截图插件',
      url: '../jietu/index'
    },
    {
      name: '地图插件',
      url: '../map/index'
    },
    {
      name: '弹窗插件',
      url: '../modal/index'
    },
    {
      name: '刷新列表',
      url: '../pushrefresh/index'
    },
    {
      name: '富文本插件',
      url: '../wxParse/index'
    },
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //初始化函数
  onLoad: function () 
  {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    //判断是用户是否登录了
    if (app.globalData.openid && app.globalData.openid != '') 
    {
      //加载首页数据  
      console.log("第一次登录");
      that.initHomeData();
    } 
    else {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.isloginCallback = openid => 
      {
        if (openid != '') 
        {
          console.log("回调登录");
          //加载首页数据        
          that.initHomeData();
        }
      }
    }
    //结束标识符

  },
  //得到用户的信息
  getUserInfo: function(e)
  {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //得到首页的数据
  initHomeData:function()
  {
    console.log("首页的数据加载完成!!!");
  },
})
