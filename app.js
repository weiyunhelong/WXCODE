//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: loginCode => 
      {
        // 发送 loginCode.code 到后台换取 openId, sessionKey, unionId
        var that = this;
        //得到登录用户的基本信息
        wx.getUserInfo({
          success: function (res) {
            that.globalData.userInfo = res.userInfo;
            console.log('个人信息的值:')
            console.log(res.userInfo)
            that.globalData.username = res.userInfo.nickName;
            that.globalData.touxiang = res.userInfo.avatarUrl;
            that.globalData.sex = res.userInfo.gender;
            typeof cb == "function" && cb(that.globalData.userInfo);

            //用户的登录
            wx.request({
              url: getApp().globalData.requesturl + "token/user",
              method: 'POST',
              header: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              data: {
                code: loginCode.code
              },
              success: function (jieguo) {
                console.log("得到用户的信息:");
                console.log(jieguo);
                that.globalData.userid = jieguo.data.token.uid,//用户id
                that.globalData.openid = jieguo.data.token.openid;//用户openID

                //由于这里是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                if (that.isloginCallback) {
                  that.isloginCallback(that.globalData.openid);
                }
                //判断是否已经登录
              }
            })
            //结束标识符
          }
        })
         //结束标识符
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,//用户的信息
    userid: 0,//用户id
    openid: '',//OPENID
    touxiang: '',//用户头像
    username: '',//用户昵称
    requesturl: '',//请求接口的地址
    gifttu: '/resources/upload.png',//上传的礼品图片
  }
})