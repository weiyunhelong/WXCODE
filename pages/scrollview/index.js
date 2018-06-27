// pages/scrollview/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,  //对应样式变化  
    scrollTop: 0,  //用作跳转后右侧视图回到顶部  
    screenArray: [], //左侧导航栏内容  
    screenId: "",  //后台查询需要的字段  
    childrenArray: {}, //右侧内容     
  },
  //点击子分类
  gochildtype: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../menu/goodlist?id=' + id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获得分类筛选  
    var screenArray = [
      {
        id: 0,
        screenName: '居家',
        screenId: '0'
      },
      {
        id: 1,
        screenName: '餐厨',
        screenId: '1'
      },
      {
        id: 2,
        screenName: '配件',
        screenId: '2'
      },
      {
        id: 3,
        screenName: '服装',
        screenId: '3'
      },
      {
        id: 4,
        screenName: '洗护',
        screenId: '4'
      },
      {
        id: 5,
        screenName: '杂货',
        screenId: '5'
      },
      {
        id: 6,
        screenName: '饮食',
        screenId: '6'
      },
    ];
    that.setData({
      screenArray: screenArray,
      screenId: screenArray[0].id
    })
    that.getchildrenArray();
  },
  //得到分类下的有的的小分类
  getchildrenArray: function () {
    var that = this;
    //得到参数
    var screenId = that.data.screenId;
    console.log("选中的id的值:" + screenId);
    screenId = parseInt(screenId);
    var childrenArray = {};
    if (screenId % 2 == 0) {
      childrenArray = {

        fengmian: '/resources/hdtu1.jpg',
        childitems: [
          {
            id: 1,
            ImageUrl: '/resources/hdtu2.jpg',
            Name: "上衣"
          },
          {
            id: 2,
            ImageUrl: '/resources/hdtu3.jpg',
            Name: "彩妆"
          },
          {
            id: 3,
            ImageUrl: '/resources/hdtu4.jpg',
            Name: "鞋子"
          },
          {
            id: 4,
            ImageUrl: '/resources/hdtu5.jpg',
            Name: "手机"
          },
          {
            id: 5,
            ImageUrl: '/resources/tu1.jpg',
            Name: "饮食"
          },
          {
            id: 6,
            ImageUrl: '/resources/tu2.jpg',
            Name: "特价"
          },
          {
            id: 7,
            ImageUrl: '/resources/tu3.jpg',
            Name: "夏季"
          },
          {
            id: 8,
            ImageUrl: '/resources/tu4.jpg',
            Name: "碗筷"
          },
          {
            id: 9,
            ImageUrl: '/resources/tu5.jpg',
            Name: "香蕉"
          },
          {
            id: 10,
            ImageUrl: '/resources/tu3.jpg',
            Name: "欢乐购"
          },
          {
            id: 11,
            ImageUrl: '/resources/tu4.jpg',
            Name: "陶瓷"
          },
          {
            id: 12,
            ImageUrl: '/resources/tu5.jpg',
            Name: "水果"
          },
        ]
      }
    } else {
      childrenArray = {

        fengmian: '/resources/hdtu1.jpg',
        childitems: [
          {
            id: 1,
            ImageUrl: '/resources/hdtu2.jpg',
            Name: "上衣"
          },
          {
            id: 2,
            ImageUrl: '/resources/hdtu3.jpg',
            Name: "彩妆"
          },
          {
            id: 3,
            ImageUrl: '/resources/hdtu4.jpg',
            Name: "鞋子"
          },
          {
            id: 4,
            ImageUrl: '/resources/hdtu5.jpg',
            Name: "手机"
          },
          {
            id: 5,
            ImageUrl: '/resources/tu1.jpg',
            Name: "饮食"
          }
        ]
      }
    }
    console.log("子分类的数据:");
    console.log(childrenArray);
    that.setData({
      childrenArray: childrenArray
    })
    //结束标识符
  },
  //左侧大分类的点选
  navbarTap: function (e) {
    var that = this;
    console.log(e);
    this.setData({
      currentTab: e.currentTarget.id,   //按钮CSS变化  
      screenId: e.currentTarget.dataset.screenid,
      scrollTop: 0,   //切换导航后，控制右侧滚动视图回到顶部  
    })
    //刷新右侧内容的数据  
    this.getchildrenArray();
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