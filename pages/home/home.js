// pages/home/home.js
const { data, imgs } = require('../../common/data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[
      imgs.ib_1,
      imgs.i10
    ],
    types:[
      {
        title:"壁纸",
        url:imgs.ico_bz,
      }, {
        title: "表情",
        url: imgs.ico_tp,
      }, {
        title: "彩铃",
        url: imgs.ico_yy,
      }, {
        title: "铃声",
        url: imgs.ico_ls,
      }
    ],
    list:data,
    loading:false,
    icoType:{
      i4: imgs.i4,
      i4_2: imgs.i4_2,
      as: imgs.as,
      as_2: imgs.as_2
    },
    installBtn: 'install'
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
    setTimeout(()=>{
      wx.stopPullDownRefresh()
    },500)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    const list = this.data.list;
    let idx = Math.floor(Math.random() * (list.length-5));
    let addData = list.slice(idx,idx+5)
    this.setData({
      loading:true,
    })
    setTimeout(function(){
      this.setData({
        loading:false,
        list: list.concat(addData)
      })
    }.bind(this), Math.floor(Math.random()*1000))
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  install(t){
    console.log(11,t)
  },

})