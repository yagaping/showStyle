// pages/user/user.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hdUrl:app.imgs.head,
    nickname:'Empyrean',
    clearBtn:false,
    time:'2019-01-09',
    sexArray: ['男', '女', '保密'],
    sex:0,
    customItem:"全部",
    region: ['江西省', '吉安市', '吉水县'],
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

  },
  // 更换头像
  changeHead(){
    const _this = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        _this.setData({
          hdUrl: tempFilePaths,
        });
        console.log(res);
      }
    })
  },
  // 输入框获得焦点
  inputFocus(res){
    let name = res.detail.value;
    if (name){
      this.setData({
        clearBtn: true,
      })
    }
    
  },
  // 输入昵称
  inputName(res){
    let name = res.detail.value;
    if(!name){
      this.setData({
        clearBtn: false,
      })
    }else{
      this.setData({
        nickname:name,
        clearBtn: true,
      })
    }
    
  },
  // 输入完昵称，离开输入框
  inputBlur(res){
    let name = res.detail.value;
    setTimeout(function(){
      if (this.data.nickname){
        this.setData({
          nickname: name,
        })
      }
      this.setData({
        clearBtn:false,
      })
    }.bind(this),200)
    
  },
  // 清空昵称输入
  clearName(){
    this.setData({
      nickname:'',
      clearBtn:false,
    })
  },
  bindDateChange(res){
    const time = res.detail.value;
    this.setData({
      time,
    })
  },
  // 选择性别
  sexChange(res){
    this.setData({
      sex: res.detail.value
    })
  },
  // 地址选择
  addressChange(res){
    this.setData({
      region:res.detail.value
    })
  }
})