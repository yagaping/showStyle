// pages/search/serach.js
const { imgs, data } = require('../../common/data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCancle:false,
    isClear:false,
    history:true,
    searchList:false,
    searchTxt:'',
    types:[
      "拼多多",
      "必看小说",
      "嘻游记",
      "今日头条",
      "爱奇艺",
      "烽火攻城",
      "抖音短视频",
      "诛仙封神",
      "PP视频",
      "三国战争",
      "懂车帝",
      "忍者大乱斗",
      "西瓜视频",
      "火山小视频",
      "虎牙直播",
      "阿拉德之怒",
    ],
    list: data,
    loading: false,
    icoType: {
      i4: imgs.i4,
      i4_2: imgs.i4_2,
      as: imgs.as,
      as_2: imgs.as_2
    },
    installBtn: 'install',
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
  onFocus(e){
    const { value } = e.detail; 
    this.setData({
      isClear:value?true:false,
      isCancle:true,
      history:false,
    })
  },
  onClear(){
    this.setData({
      isClear: false,
      searchList:false,
      searchTxt: '',
    })
  },
  onCancel(){
    this.setData({
      isCancle:false,
      isClear:false,
      history:true,
      searchTxt:'',
    })
  },
  onInput(e){
    const { value } = e.detail;
    this.setData({
      isClear: value ? true : false,
      searchList:true,
    })
    // console.log(value);
  },
  onSearch(e){
    console.log(e)
  },
  historyBtn(e){
    const { value } = e.target.dataset;
    this.setData({
      searchTxt:value,
      history:false,
      isCancle: true,
    })
  },
  install(t) {
    console.log(t);
  },
})