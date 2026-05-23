"use strict";
var e=getApp(),t=require("../../utils/util.js"),a=require("../../service/dataService.js"),s=require("../../utils/schoolChange.js");
Page(t.merge({data:{indexMenu:[{icon:"../../images/bat.png",text:"座位批量管理",url:"free"},{icon:"../../images/qr.png",text:"离线二维码",url:"qrcode"},{icon:"../../images/qst.png",text:"问题回复",url:"question"},{icon:"../../images/black.png",text:"黑名单",url:"black"},{icon:"../../images/plus.png",text:"发送通知",url:"message"}],yesterday:{reserve_sum:0,mark_sum:0,hold_sum:0,cancel_sum:0,confirm_sum:0},version:e.globalData.version},tongjiClick:function(e){t.navigateToPage("tongji")},onLoad:function(){var s=this;
t.checkRedirect(),this.setData({userInfo:e.globalData.userInfo});
var r=t.getStruct(e.globalData.userInfo,"getToken.accessToken"),n=a.getCurrentSch({sch_id:0});
a.index(r,n.sch_id).then((function(r){return 0===r.code?(e.globalData.schList=r.data.schList,a.setCurrentSch(r.data.currentSch),s.setData(r.data)):t.showError(r.msg),r}))},schChangeInPage:function(s){var r=this,n=t.getStruct(e.globalData.userInfo,"getToken.accessToken");
a.index(n,s.sch_id).then((function(s){return 0===s.code?(e.globalData.schList=s.data.schList,a.setCurrentSch(s.data.currentSch),r.setData(s.data)):t.showError(s.msg),s}))}},s));
