// pages/me/me.js
const { imgs } = require('../../common/data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'',
    animationData:{},
    shareBool:false,
    imgs,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.timer = null;
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

  },
  // 拍照，选择相片
  takePhoto(){
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
      }
    })
  },
  // 设置
  setting(){
    wx.navigateTo({
      url: '../setting/setting',
    })
  },
  // 问题反馈
  feedback(){
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  },
  // 关于我们
  aboutus(){
    wx.navigateTo({
      url: '../aboutus/aboutus',
    })
  },
  // 账户安全
  account(){
    wx.navigateTo({
      url:'../account/account'
    })
  },
  //个人信息
  user(){
    wx.navigateTo({
      url: '../user/user',
    })
  },
  // 邀请好友
  share(){
    const animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })
    this.animation = animation;
    animation.bottom(0).step();
    this.setData({
      animationData: animation.export(),
      shareBool:true,
    })
  },
  hideShare(){
    this.animation.translateY(100).step({ duration:500});
    this.setData({
      animationData: this.animation.export(),
    })
    setTimeout(function(){
      this.setData({
        shareBool:false,
      })
    }.bind(this),500);
  },

})