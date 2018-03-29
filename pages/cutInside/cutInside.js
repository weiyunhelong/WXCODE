// pages/cutInside/cutInside.js
import WeCropper from '../../we-cropper/we-cropper.js'

const device = wx.getSystemInfoSync()
const width = device.windowWidth
const height = device.windowHeight - 50

Page({
  data: {
    cropperOpt: {
      id: 'cropper',
      width,
      height,
      scale: 2.5,
      zoom: 8,
      cut: {
        x: (width - 300) / 2,
        y: (height - 300) / 2,
        width: 300,
        height: 300
      }
    },//裁图的配置  
  },
  //触摸开始
  touchStart(e) {
    this.wecropper.touchStart(e)
  },
  //触摸移动
  touchMove(e) {
    this.wecropper.touchMove(e)
  },
  //触摸结束
  touchEnd(e) {
    this.wecropper.touchEnd(e)
  },
  //生成图片
  getCropperImage() {
    this.wecropper.getCropperImage((src) => {
      if (src) {
        console.log(src);
        /**去除预览功能**/
        /*
        wx.previewImage({
          current: '', // 当前显示图片的http链接
          urls: [src] // 需要预览的图片http链接列表
        })
        */
        //显示裁切后的图片
        getApp().globalData.gifttu = src;
        wx.redirectTo({
          url: '../jietu/index',
        })
      } else {
        console.log('获取图片地址失败，请稍后重试')
      }
    })
  },
  //上传图片
  uploadTap() {
    const self = this

    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success(res) {
        const src = res.tempFilePaths[0]
        //  获取裁剪图片资源后，给data添加src属性及其值

        self.wecropper.pushOrign(src)
      }
    })
  },
  //页面的初始化
  onLoad(option) {
    const { cropperOpt } = this.data

    new WeCropper(cropperOpt)
      .on('ready', (ctx) => {
        console.log(`wecropper is ready for work!`)
      })
      .on('beforeImageLoad', (ctx) => {
        console.log(`before picture loaded, i can do something`)
        console.log(`current canvas context:`, ctx)
        wx.showToast({
          title: '上传中',
          icon: 'loading',
          duration: 20000
        })
      })
      .on('imageLoad', (ctx) => {
        console.log(`picture loaded`)
        console.log(`current canvas context:`, ctx)
        wx.hideToast()
      })
      .on('beforeDraw', (ctx, instance) => {
        console.log(`before canvas draw,i can do something`)
        console.log(`current canvas context:`, ctx)
      })
      .updateCanvas()
  }
})
