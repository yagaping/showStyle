// pages/health/health.js
const { imgs, countDown } = require('../../common/data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      imgs.i8,
      imgs.i9,
      imgs.i10,
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    ulHieight:'',
    tabIndex:0,
    tempData:{
      clickEvent:'featurePage',
    },
    appImgs:[
      imgs.z_1,
      imgs.z_2,
      imgs.z_3,
      imgs.z_4,
    ],
    banner:[
      imgs.b_1,
      imgs.b_2,
    ],
    hots:[
      {
        src: imgs.hot_1,
        tit1:'子情贝诺',
        tit2:'草莓猪猪蛋糕',
        price1:'20',
        price2:'48',
      }, {
        src: imgs.hot_2,
        tit1: '肯德基',
        tit2: '5份早餐(套餐5选1）',
        price1: '39',
        price2: '67.50',
      }, {
        src: imgs.hot_3,
        tit1: '功夫肩颈',
        tit2: '【店长推荐】头部放松',
        price1: '69',
        price2: '299',
      }
    ],
    startTime:'2019/1/11 20:00:00', //ios需要用‘/’隔开年月日，否则显示null
    countDown:'00:00:00',
    icoMore: imgs.more_ico,
    tj_big: imgs.tj_big,
    tj_m1: {
      src: imgs.tj_m1,
      t1:'肯德基',
      t2:'新年展翅桶兑换券',
      price:39,
    },
    tj_m2:[
      {
        src: imgs.tj_m2,
        t1: '香港满记甜品',
        t2: '3份薏米热饮（2选1）',
        price: 45,
        price2:60,
      }, {
        src: imgs.tj_m3,
        t1: '绿茶餐厅',
        t2: '花田喜事',
        price: 18,
        price2:35,
      }, {
        src: imgs.tj_m4,
        t1: '乐凯撒披萨',
        t2: '一人食升级套餐',
        price: 48.99,
        price2:77,
      }
    ],
    nearby:[
      {
        url:imgs.ms1,
        name:'一品佳（思创店）',
        pop:'94',
        fire:3,
        type:['品种丰富','好美味','店家热情'],
        distance:'1.1Km',
        address:'南山西丽',
      }, {
        url: imgs.ms2,
        name: '浅葱小唱（南山店）',
        pop: '91',
        fire: 3,
        type: ['预定','南山区川菜第6名'],
        distance: '222m',
        address:'南山科技园',
      }, {
        url: imgs.ms3,
        name: '100元代金券，可叠加使用',
        pop: '90',
        fire: 2,
        type: ['实在','优惠'],
        distance: '1.1Km',
        address:'琼林（大冲店）',
      }, {
        url: imgs.ms4,
        name: '霸气西柚',
        pop: '89',
        type: ['美味','速度'],
        distance: '100m',
        address:'柰雪の茶（华润万象天地店）',
      }, {
        url: imgs.ms5,
        name: '仅售95元！价值100元的代金券1张',
        pop: '86',
        type: ['实惠方便'],
        distance: '1.2Km',
        address:'巴陵会馆（科技园店）',
      }, {
        url: imgs.ms9,
        name: '单人洗吹造型',
        pop: '86',
        type: ['满意','舒服'],
        distance: '993m',
        address:'Joe 乔·沙龙美发轻奢定制潮品店',
      }, {
        url: imgs.ms6,
        name: '汕头八合里海记牛肉店(海岸城店）',
        pop: '90',
        type: ['排号','海岸城美食榜第1名'],
        distance: '3.5Km',
        address:'海岸城',
      }, {
        url: imgs.ms7,
        name: '十秒到云南过桥米线(科兴科学院店）',
        pop: '90',
        type: ['美味','消费高'],
        distance: '248m',
        address:'科兴科学院店',
      }, {
        url: imgs.ms8,
        name: '中影国际影城深圳龙华九方店',
        pop: '88',
        type: ['观影小食','巨幕厅','可停车'],
        distance: '11.8Km',
        address:'龙华',
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
  },
  onReady:function(){
    const _this = this;
    let query = wx.createSelectorQuery();
    query.select('#ul').boundingClientRect()
    // query.selectViewport().scrollOffset()
    query.exec(function (res) {
      _this.setData({
        ulHieight:res[0].height
      })
    })
    countDown(this.data.startTime,this)
  },
  onPullDownRefresh:function(e){
    console.log(123,e);
    wx.stopPullDownRefresh()
  },
  onReachBottom:function(e){
    const data = this.data.nearby
    const idx = Math.floor(Math.random() * (data.length - 5))
    const addData = data.slice(idx,idx+5);
    this.setData({
      nearby:data.concat(addData)
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  banner(res){
    console.log(res);
  },
  tabChange(e){
    let index = e.detail.current;
    this.setData({
      tabIndex:index,
    })
  },
  featurePage(e){
    console.log(e)
  },
})