// app列表数据
const data = [
  {
    "id":1,
    "name":"今日头条",
    "url":"https://s2.ax1x.com/2019/01/12/FjULnI.png",
    "down":"4044",
    "size":"258.51",
    "describe":"今日头条，一款越用越懂你的资讯客户端",
    "i4":1,
    "appstroe":1,
    "install":0,
  }, {
    "id": 2,
    "name": "拼多多 - 3亿人都在拼的购物App",
    "url": "https://s2.ax1x.com/2019/01/12/FjUvAf.png",
    "down": "2103",
    "size": "72.55",
    "describe": "新人送888元购物红包",
    "i4": 0,
    "appstroe": 1,
    "install": 0,
  }, {
    "id": 3,
    "name": "西瓜视频 - 人气综艺和娱乐搞笑视频",
    "url": "https://s2.ax1x.com/2019/01/12/FjUbjA.png",
    "down": "1090",
    "size": "168.36",
    "describe": "超过3亿懂得生活趣味的人给你新鲜好看",
    "i4": 1,
    "appstroe": 1,
    "install": 1,
  }, {
    "id": 4,
    "name": "抖音短视频",
    "url": "https://s2.ax1x.com/2019/01/12/FjUHcd.png",
    "down": "3755",
    "size": "175.37",
    "describe": "记录美好生活",
    "i4": 1,
    "appstroe": 0,
    "install": 0,
  }, {
    "id": 5,
    "name": "大天使之剑H5 - 新职业魔剑士上线",
    "url": "https://s2.ax1x.com/2019/01/12/FjUxN8.png",
    "down": "308",
    "size": "28.3",
    "describe": "魔武双修 最强战士崛起",
    "i4": 1,
    "appstroe": 1,
    "install": 0,
  }, {
    "id": 6,
    "name": "今日头条极速版",
    "url": "https://s2.ax1x.com/2019/01/12/FjUOBt.png",
    "down": "93.8",
    "size": "86.6",
    "describe": "今日头条，最懂你的信息平台",
    "i4": 1,
    "appstroe": 1,
    "install": 0,
  }, {
    "id": 7,
    "name": "三国战争 - 送VIP送马超",
    "url": "https://s2.ax1x.com/2019/01/12/Fja93Q.png",
    "down": "16.3",
    "size": "367.58",
    "describe": "秒杀武将吕布已超神",
    "i4": 1,
    "appstroe": 0,
    "install": 1,
  }, {
    "id": 8,
    "name": "虎牙直播 - 游戏互动直播平台",
    "url": "https://s2.ax1x.com/2019/01/12/FjUXHP.png",
    "down": "474",
    "size": "107.12",
    "describe": "热门手游蓝光高清直播",
    "i4": 1,
    "appstroe": 1,
    "install": 0,
  }, {
    "id": 9,
    "name": "永恒纪元",
    "url": "https://s2.ax1x.com/2019/01/12/Fjap9g.png",
    "down": "638",
    "size": "238.98",
    "describe": "新职业觉醒，无限竞技新体验",
    "i4": 0,
    "appstroe": 1,
    "install": 1,
  }, {
    "id": 10,
    "name": "必看小说 - 全本免费",
    "url": "https://s2.ax1x.com/2019/01/12/FjUz4S.png",
    "down": "16.3",
    "size": "43.32",
    "describe": "热门网络小说随便看",
    "i4": 1,
    "appstroe": 1,
    "install": 0,
  }, {
    "id": 11,
    "name": "屠龙破晓 - 抖音热门推荐",
    "url": "https://s2.ax1x.com/2019/01/12/FjaFun.png",
    "down": "57.4",
    "size": "15.12",
    "describe": "开局三倍爆率,5分钟神装加身",
    "i4": 1,
    "appstroe": 1,
    "install": 0,
  },
];
// 图片数组
const imgs = {
  "i8": "https://s2.ax1x.com/2019/01/10/FOdqe0.jpg",
  "i9": "https://s2.ax1x.com/2019/01/10/FOd4Jg.jpg",
  "i10": "https://s2.ax1x.com/2019/01/10/FOdIzj.jpg",
  "b_1": "https://s2.ax1x.com/2019/01/10/FOd5WQ.png",
  "b_2": "https://s2.ax1x.com/2019/01/10/FOd7yn.png",
  "bg": "https://s2.ax1x.com/2019/01/10/FOdTQs.jpg",
  "head": "https://s2.ax1x.com/2019/01/10/FOdHLq.png",
  "hot_1": "https://s2.ax1x.com/2019/01/10/FOdLwV.png",
  "hot_2": "https://s2.ax1x.com/2019/01/10/FOwSSJ.png",
  "hot_3": "https://s2.ax1x.com/2019/01/10/FOw9yR.png",
  "local": "https://s2.ax1x.com/2019/01/10/FOdjFU.png",
  "logo": "https://s2.ax1x.com/2019/01/10/FOdOoT.png",
  "other": "https://s2.ax1x.com/2019/01/10/FOdxW4.png",
  "sao": "https://s2.ax1x.com/2019/01/10/FOdvYF.png",
  "toLocal": "https://s2.ax1x.com/2019/01/10/FOwpl9.png",
  "z_1": "https://s2.ax1x.com/2019/01/10/FOwiex.png",
  "z_2": "https://s2.ax1x.com/2019/01/10/FOwCO1.png",
  "z_3": "https://s2.ax1x.com/2019/01/10/FOwkTK.png",
  "z_4": "https://s2.ax1x.com/2019/01/10/FOwFw6.png",

  "more_ico": "https://s2.ax1x.com/2019/01/10/FOf8r8.png",
  "tj_big": "https://s2.ax1x.com/2019/01/10/FOfN5j.png",
  "tj_m1": "https://s2.ax1x.com/2019/01/10/FOf3Kf.png",
  "tj_m2": "https://s2.ax1x.com/2019/01/10/FOflxP.png",
  "tj_m3": "https://s2.ax1x.com/2019/01/10/FOfYVg.png",
  "tj_m4": "https://s2.ax1x.com/2019/01/10/FOfGqS.png",

  "ms1": "https://s2.ax1x.com/2019/01/10/FOqdTx.png",
  "ms2": "https://s2.ax1x.com/2019/01/10/FOqBtK.png",
  "ms3": "https://s2.ax1x.com/2019/01/10/FOqa01.png",
  "ms4": "https://s2.ax1x.com/2019/01/10/FOqUmR.png",
  "ms5": "https://s2.ax1x.com/2019/01/10/FOqtX9.png",
  "ms6": "https://s2.ax1x.com/2019/01/10/FOqspD.png",
  "ms7": "https://s2.ax1x.com/2019/01/10/FOq0k6.png",
  "ms8": "https://s2.ax1x.com/2019/01/10/FOqDfO.png",
  "ms9": "https://s2.ax1x.com/2019/01/10/FOqy1e.png",

  "app_1": "https://s2.ax1x.com/2019/01/12/FjULnI.png",
  "app_2": "https://s2.ax1x.com/2019/01/12/FjUvAf.png",
  "app_3": "https://s2.ax1x.com/2019/01/12/FjUbjA.png",
  "app_4": "https://s2.ax1x.com/2019/01/12/FjUHcd.png",
  "app_5": "https://s2.ax1x.com/2019/01/12/FjUxN8.png",
  "app_6": "https://s2.ax1x.com/2019/01/12/FjUOBt.png",
  "app_7": "https://s2.ax1x.com/2019/01/12/Fja93Q.png",
  "app_8": "https://s2.ax1x.com/2019/01/12/FjUXHP.png",
  "app_9": "https://s2.ax1x.com/2019/01/12/Fjap9g.png",
  "app_10": "https://s2.ax1x.com/2019/01/12/FjUz4S.png",
  "app_11": "https://s2.ax1x.com/2019/01/12/FjaFun.png",
  "ib_1": "https://s2.ax1x.com/2019/01/12/FjakBq.png",
  "ico_bz": "https://s2.ax1x.com/2019/01/12/Fjae4U.png",
  "ico_ls": "https://s2.ax1x.com/2019/01/12/FjaZNT.png",
  "ico_tp": "https://s2.ax1x.com/2019/01/12/FjanCF.png",
  "ico_yy": "https://s2.ax1x.com/2019/01/12/Fjau34.png",

  "i4": "../../resources/applist_source_i4_236ee7.png",
  "i4_2": "../../resources/applist_source_i4_236ee7.png",
  "as": "../../resources/applist_source_ap_236ee7.png",
  "as_2": "../../resources/applist_source_ap_default.png"
}

// 计算时间格式
function show10(d) {
  return d >= 10 ? d : '0' + d;
}
// 倒计时
const countDown = function(time, _this) {
  var newTime = new Date(time).getTime();
  var nowTime = new Date().getTime();
  var allSecond = newTime - nowTime;
  if (allSecond < 0) {
    return;
  }
  var day = '0';
  var hour = '00';
  var miute = '00';
  var second = '00';
  day = Math.floor(allSecond / 1000 / 60 / 60 / 24);
  hour = show10(Math.floor(allSecond / 1000 / 60 / 60 % 24));
  miute = show10(Math.floor(allSecond / 1000 / 60 % 60));
  second = show10(Math.floor(allSecond / 1000 % 60));
  setTimeout(function() {
    countDown(time, _this);
  }, 1000);
  var timeTxt = '';
  if (parseInt(day) > 0) {
    timeTxt = day + '天' + hour + ':' + miute + ':' + second;
  } else {
    timeTxt = hour + ':' + miute + ':' + second
  }
  _this.setData({
    countDown: timeTxt
  })


}


module.exports = {
  data,
  imgs,
  countDown,
}