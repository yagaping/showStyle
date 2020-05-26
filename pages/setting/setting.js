// pages/setting/setting.js
const tipsArr = ['每次提示', '仅提示一次'];
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tips: tipsArr[0],
    cache:'732 KB'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  // 选择网络播放提示
  tipsEvent() {
    const _this = this;
    wx.showActionSheet({
      itemList: tipsArr,
      success: function(res) {
        _this.setData({
          tips: tipsArr[res.tapIndex]
        });
      }
    })
  },
  // 清空缓存
  clearCache() {
    const _this = this;
    wx.showModal({
      content: '确定要清空缓存吗？',
      confirmText:"清空",
      confirmColor:"#f6822b",
      success(res) {
        if (res.confirm) {
          wx.showToast({
            title: '清空缓存成功',
            icon:"none",
          })
          _this.setData({
            cache:'0 KB'
          });
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})