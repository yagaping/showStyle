// pages/showList/showList.js
const getRandomColor = require('../../common/common.js')
const { data, imgs } = require('../../common/data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:data,
    loading:false,
    icoType: {
      i4: imgs.i4,
      i4_2: imgs.i4_2,
      as: imgs.as,
      as_2: imgs.as_2
    },
    current:0,
    installBtn:'install',
    swiperHeight:'',
    classify:[
      {
        url:'http://d.image.i4.cn/i4_jqb/apptype/1072x.png',
        name:'工具',
      }, {
        url: 'http://d.image.i4.cn/i4_jqb/apptype/1052x.png',
        name: '生活',
      }, {
        url: 'http://d.image.i4.cn/i4_jqb/apptype/1062x.png',
        name: '娱乐',
      }, {
        url: 'http://d.image.i4.cn/i4_jqb/apptype/1502x.png',
        name: '购物',
      }, {
        url: 'http://d.image.i4.cn/i4_jqb/apptype/1102x.png',
        name: '效率',
      }, {
        url: 'http://d.image.i4.cn/i4_jqb/apptype/1142x.png',
        name: '财务',
      }, {
        url: 'http://d.image.i4.cn/i4_jqb/apptype/1092x.png',
        name: '摄像',
      }, {
        url: 'http://d.image.i4.cn/i4_jqb/apptype/1172x.png',
        name: '参考',
      }, {
        url: 'http://d.image.i4.cn/i4_jqb/apptype/1122x.png',
        name: '天气',
      }, {
        url: 'http://d.image.i4.cn/i4_jqb/apptype/1452x.png',
        name: '其它',
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this;
    const system = wx.getSystemInfoSync();
    const query = wx.createSelectorQuery()
    query.select('.h-top').boundingClientRect()
    query.exec(function (res) {
      _this.setData({
        swiperHeight: system.windowHeight - res[0].height
      })
    })
    getApp().number = getApp().number+1;
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
    const list = this.data.list;
    let idx = Math.floor(Math.random() * (list.length - 5));
    let addData = list.slice(idx, idx + 5)
    this.setData({
      loading: true,
    })
    setTimeout(function () {
      this.setData({
        loading: false,
        list: list.concat(addData)
      })
    }.bind(this), Math.floor(Math.random() * 1000))
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  detail(event){
    const detail = event.currentTarget.dataset.detail;
    wx.navigateTo({
      url:'../detail/detail?detail='+JSON.stringify(detail)
    });
  },
  install(t){
    console.log(t);
  },
  switchTab(e){
    const { current } = e.currentTarget.dataset 
    this.setData({
      current,
    })
  },
  pageScroll(){
    this.onReachBottom()
  },
  swiperChange(e){
    const { current } = e.detail;
    this.setData({
      current,
    });
  },
  animation(e){
    console.log(e)
  }
})