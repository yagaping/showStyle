// pages/account/account.js
const bindContact = ['绑定微信','绑定QQ','绑定微博'];
const unbindContact = ['解绑微信', '解绑QQ', '解绑微信'];
Page({
  /**
   * 页面的初始数据
   */
  data: {
    animationData: {},
    alertData:{
      width:600,
      height:300,
      bool:false,
      title:'绑定手机号'
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      alertData: {
        ...this.data.alertData,
        clickAlert:'showAlert'
      },
    })
  },
  bindContact:function(e){
    const index = e.currentTarget.dataset.id
    
    wx.showActionSheet({
      itemList: [unbindContact[index]],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  showAlert() {
    this.setData({
      alertData: {
        ...this.data.alertData,
        bool: true
      }
    })
    console.log(this);
  },
  hideAlert(){
    this.setData({
      alertData: {
        ...this.data.alertData,
        bool: false
      }
    })
  }
})