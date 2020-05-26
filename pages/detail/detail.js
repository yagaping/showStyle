// pages/detail/detail.js
const { data } = require('../../common/data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
     detail:data,
     current:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { id } = options;
    for(let i in data){
      if (data[i].id == parseInt(id)){
        this.setData({
          item:data[i]
        })
        break;
      }
    }
  
    wx.setNavigationBarTitle({
      title: this.data.item.name
    })
    
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
  showImg:function(options){
    
    const url = options.target.dataset.url
    wx.previewImage({
      current:url,
      urls: [url]
    })
  },
  // 详情-评论切换
  switchTab(e){
    const current = e.target.dataset.current;
    this.setData({
      current,
    })
  },
  scrollTab(e){
    const current = e.detail.current;
    this.setData({
      current,
    })
  }
})