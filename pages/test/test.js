// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.startAccelerometer({
      interval: 'game'
    })
    wx.onAccelerometerChange(function(res){
      console.log(res)
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
  // 二维码扫描
  code(e){
    const _this = this;
    wx.scanCode({
      success:function(res){
        let text = '一维码';
        let arr = [];
        let str = '';
        const type = ['QR_CODE', 'DATA_MATRIX', 'PDF_417','WX_CODE'];
        if (type.indexOf(res.scanType) !=-1){
          text = '二维码';
        }
        res.scanType = text;
        
        for(let o in res){
          str = o+' : '+res[o];
          arr.push(str);
        }
        console.log(arr);
        _this.setData({
          codeObj: arr
        })
      },
      fail:function(res){
        _this.setData({
          codeObj: ['失败']
        })
      }
    })
  },
  // 使手机震动15ms
  shake(e){
    const { type } = e.target.dataset;
    if(type == '15'){
      wx.vibrateShort()
    }else if( type == '400'){
      wx.vibrateLong()
    }
  },
  // 拨号
  call(e){
    const { tel } = e.detail.value;
    wx.makePhoneCall({
      phoneNumber:tel,
    })
  },
  // 添加联系人
  stopwifi(){
    wx.addPhoneContact()
  },
  // 获取电量信息
  elect(e){
    const info = wx.getBatteryInfoSync();
    this.setData({
      elect:info
    })
  },
  // 用户截屏监听
  screenSave(){
    wx.onUserCaptureScreen(function (res) {
      console.log('用户截屏了')
    })
  },
})