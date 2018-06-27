// pages/goods/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,//商品的id
    mode: 'aspectFit',
    indicatorDots: true,//是否出现焦点 
    autoplay: true,  //是否自动播放 
    interval: 2000,  //自动播放时间间隔 
    duration: 1000,  //滑动动画时间,
    imgUrls: [],//图片路径
    videopath: '',//视频的地址
    geige: '',//选取的规格
    guigeids: '',//选中的规格
    guigelist: [],//规格数据列表
    isshowinfo: true,//显示商品详情
    goodinfo: [],//商品详情
    allcomnum: 2,//全部评价
    goodcomnum: 2,//好评个数
    zhongcomnum: 0,//中评
    badcomnum: 0,//差评
    commentlist: [],//评价列表
    tuijianlist: [],//推荐产品
    iscollect: false,//是否收藏

    //选择的规格
    default_spe_img: '/resources/tu1.jpg',//默认图
    num: 1,//初始数量
    amount: 0,//初始金额
    minusStatus: 'disabled',
    // 使用data数据对象设置样式名
    choose_modal: "none",
    // 规格数量框
    flag: 0,//点选规格时来源 0：规格点 1：立即购买 2：加入购物车
    //规格数据
    spec: [{
      id: 1,
      name: "尺寸",
      child: [
        {
          id: 11,
          name: "1.8*1.5",
          isSelect: false
        }, {
          id: 12,
          name: "2.0*1.5",
          isSelect: false
        }, {
          id: 13,
          name: "2.0*1.8",
          isSelect: false
        },
      ]
    }, {
      id: 2,
      name: "重量",
      child: [
        {
          id: 21,
          name: "1Kg",
          isSelect: false
        }, {
          id: 22,
          name: "2Kg",
          isSelect: false
        }, {
          id: 23,
          name: "5Kg",
          isSelect: false
        }]
    }],
    selectName: "",//已选的属性名字
    selectAttrid: "",//选择的属性id
  },
  //播放视频
  goplayvideo: function (e) {
    var that = this;
    wx.navigateTo({
      url: '../goods/video?path=' + that.data.videopath
    })
  },
  //显示商品详情或评价
  changeshow: function () {
    var that = this;
    that.setData({
      isshowinfo: !that.data.isshowinfo//显示商品详情
    })
  },
  /* 点击减号 */
  bindMinus: function () {
    var num = this.data.num;
    // 如果大于1时，才可以减
    if (num > 1) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
    this.change_price();
  },
  /* 点击加号 */
  bindPlus: function () {
    var num = this.data.num;
    // 不作过多考虑自增1
    num++;
    // 只有大于一件的时候，才能normal状态，否则disable状态
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
    this.change_price();
  },
  /* 输入框事件 */
  bindManual: function (e) {
    var num = e.detail.value;
    if (isNaN(num)) {
      num = 1;
    }
    // 将数值与状态写回
    this.setData({
      num: parseInt(num)
    });
    this.change_price();
  },
  //修改价格
  change_price: function () {
    var that = this;
    var rmnum = Math.random() * 100;
    var random = parseFloat(rmnum.toFixed(0));
    console.log("随机数大小:" + random);
    that.setData({
      amount: (500 + random) * that.data.num
    })
  },
  //弹出
  modal_show: function (e) {
    this.setData({
      choose_modal: "block",
    });
  },
  //消失
  modal_none: function () {
    this.setData({
      choose_modal: "none",
    });
  },
  //弹窗选择规格属性
  choose_spec: function () {
    this.setData({
      choose_modal: "block"
    })
  },
  //属性选择
  clickAttr: function (e) {
    var that = this;
    //获取参数
    var pid = e.currentTarget.dataset.pid;
    var id = e.currentTarget.dataset.id;
    console.log("参数值:" + pid + "," + id);
    //获取选择的数据
    var txtarry = [];
    //重置选择的数据
    var specdata = that.data.spec;
    for (var i = 0; i < specdata.length; i++) {
      if (pid == specdata[i].id) {
        var child = [];
        for (var j = 0; j < specdata[i].child.length; j++) {

          if (id == specdata[i].child[j].id) {
            child[j] = {
              id: specdata[i].child[j].id,
              name: specdata[i].child[j].name,
              isSelect: true
            }
          } else {
            child[j] = {
              id: specdata[i].child[j].id,
              name: specdata[i].child[j].name,
              isSelect: false
            }
          }
        }
        txtarry[i] = {
          id: specdata[i].id,
          name: specdata[i].name,
          child: child
        };
      }//没有选中的
      else {
        txtarry[i] = {
          id: specdata[i].id,
          name: specdata[i].name,
          child: specdata[i].child
        };
      }
      //结束标识符
    }

    console.log("重置后的属性数据:");
    console.log(txtarry);
    //赋值数据
    that.setData({
      spec: txtarry,//变换选择框
    });

    //得到选中的数据,更新价格
    var selectName = '', selectAttrid = '';
    for (var i = 0; i < that.data.spec.length; i++) {
      for (var j = 0; j < that.data.spec[i].child.length; j++) {
        if (that.data.spec[i].child[j].isSelect) {
          selectName += that.data.spec[i].child[j].name + ","
          selectAttrid += that.data.spec[i].id + "," + that.data.spec[i].child[j].id + ";"
        }
      }
    }
    that.setData({
      selectName: selectName,
      selectAttrid: selectAttrid,
      guige: selectName + that.data.num + "件"
    })
    //价格的改变
    that.change_price();
  },
  //属性规格的选择确定按钮
  okopt: function () {
    var that = this;
    var selectName = that.data.selectName;
    var spec = that.data.spec;
    var chknum = 0;
    if (selectName != "") {
      chknum = selectName.split(",").length - 1;
    }
    console.log("选择的属性数值:" + chknum + "," + spec.length);
    //判断规格的选择
    if (that.data.selectName == "" || chknum != spec.length) {
      wx.showModal({
        title: '提示',
        content: '请选择商品的规格',
        showCancel: false
      })
    } else {
      //关闭弹窗
      that.setData({
        choose_modal: "none"
      })
    }
  },
  //首页
  gohome: function () {
    wx.switchTab({
      url: '../index/index',
    })
  },
  //收藏
  gocollect: function () {
    var that = this;
    //收藏代码
    that.setData({
      iscollect: !that.data.iscollect
    })
  },
  //立即购买
  gobuy: function () {
    wx.redirectTo({
      url: '../payfor/index?money=' + this.data.amount + "&order_number=1",
    })
  },
  //加入到购物车
  goaddcart: function () {
    wx.switchTab({
      url: '../cart/index',
    })
  },
  //结束标识符
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //var id=options.id;//正式环境
    var id = 1;//测试环境

    //轮播图
    var imgUrls = ["/resources/tu1.jpg", "/resources/tu2.jpg", "/resources/tu3.jpg", "/resources/tu4.jpg", "/resources/tu5.jpg"];
    that.setData({
      imgUrls: imgUrls,
      videopath: 'http://www.w3school.com.cn/example/html5/mov_bbb.mp4'
    })

    //活动详情
    var goodinfo = [
      "/resources/hdtu1.jpg",
      "/resources/hdtu2.jpg",
      "/resources/hdtu3.jpg",
      "/resources/hdtu4.jpg",
      "/resources/hdtu5.jpg"
    ];
    that.setData({
      goodinfo: goodinfo
    })

    //评价列表
    var commentlist = [
      {
        id: 1,
        tx: '/resources/hdtu1.jpg',
        username: '笨鸟先飞',
        content: '产品很好',
        date: '2017-12-01'
      },
      {
        id: 2,
        tx: '/resources/hdtu3.jpg',
        username: '早入林',
        content: '不错哟不错哟不错哟不错哟不错哟不错哟不错哟不错哟不错哟不错哟不错哟不错哟不错哟不错哟不错哟不错哟不错哟不错哟不错哟不错哟不错哟不错哟不错哟不错哟',
        date: '2017-11-31'
      },
    ];
    that.setData({
      commentlist: commentlist
    })
    //推荐产品
    var tuijianlist = [
      {
        id: 1,
        imgpath: '/resources/tu1.jpg',
        name: '保暖嫩肤蚕丝绒字母被保暖嫩肤蚕丝绒字母被',
        price: "1.00",
        salenum: 144
      },
      {
        id: 2,
        imgpath: '/resources/tu1.jpg',
        name: '全棉几何线条印花四件套',
        price: "1.00",
        salenum: 136
      },
      {
        id: 3,
        imgpath: '/resources/tu1.jpg',
        name: '日式木质收纳盒  3层',
        price: "1.00",
        salenum: 147
      },
    ];
    that.setData({
      tuijianlist: tuijianlist
    })
    //结束标识符
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