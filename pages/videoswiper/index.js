// pages/videoswiper/index.js
const urls = [
  'http://1252076676.vod2.myqcloud.com/d7eee309vodgzp1252076676/2dbe7eca5285890794073052281/447nYOh5H2IA.mp4',
  'http://1252076676.vod2.myqcloud.com/d7eee309vodgzp1252076676/302875785285890794073167099/HhGL7OJObiYA.mp4',
  'http://1252076676.vod2.myqcloud.com/d7eee309vodgzp1252076676/30287db75285890794073167278/WVQpwkgnb9EA.mp4',
  'http://1252076676.vod2.myqcloud.com/d7eee309vodgzp1252076676/320e66af5285890794073202694/8ksYlGUevogA.mp4',
  'http://1252076676.vod2.myqcloud.com/d7eee309vodgzp1252076676/30010ead5285890794073141537/DGAx2EgLMEYA.mp4',
  'http://1252076676.vod2.myqcloud.com/d7eee309vodgzp1252076676/320ed9255285890794073203062/JyqT3zzDH4MA.mp4',
  'http://1252076676.vod2.myqcloud.com/d7eee309vodgzp1252076676/320ee16a5285890794073203247/okwtzftAVuwA.mp4',
  'http://1252076676.vod2.myqcloud.com/d7eee309vodgzp1252076676/2fcc59275285890794073114126/ySa5LZ3k4EcA.mp4'
]

const videoList = urls.map((url, index) => ({
  id: index + 1,
  url
}))

Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoList
  },
  onPlay(e) {},
  onPause(e) {
    //  console.log('pause', e.detail.activeId)
  },
  onEnded(e) {},
  onError(e) {},
  onWaiting(e) {},
  onTimeUpdate(e) {},
  onProgress(e) {},
  onLoadedMetaData(e) {
    console.log('LoadedMetaData', e)
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