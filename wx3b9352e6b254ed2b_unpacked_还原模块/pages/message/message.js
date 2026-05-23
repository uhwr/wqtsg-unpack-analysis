"use strict";
var e=require("../../@babel/runtime/helpers/defineProperty"),t=getApp(),s=(require("../../utils/util.js"),require("../../service/userService.js"),require("../../service/dataService.js")),i=require("../../utils/util.js");
Page({data:{endTime:"",title:"",content:"",userMobile:"",schId:"",showType:"",schList:[]},onLoad:function(){var e=this,a=i.getStruct(t.globalData.userInfo,"getToken.accessToken"),r=s.getCurrentSch({sch_id:0});
s.index(a,r.sch_id).then((function(a){return 0===a.code?(t.globalData.schList=a.data.schList,s.setCurrentSch(a.data.currentSch),e.setData(a.data)):i.showError(a.msg),a}))},send:function(){s.sendMsg(this.data.endTime,this.data.title,this.data.content,this.data.userMobile,this.data.schId.toString(),this.data.showType).then((function(e){0==e.code?(i.showError("发送成功"),setTimeout((function(){wx.redirectTo({url:"../index/index"})}),1e3)):i.showError(e.msg)}))},bindValue:function(t){var s=t.currentTarget.dataset.key;
this.setData(e({},s,t.detail.value))},schAll:function(e){var t=this.data.schList,s=[];
if(-1!=e.detail.value.indexOf("0"))for(var i in t)t[i].checked=!0,s.push(t[i].sch_id);
else for(var a in t)t[a].checked=!1;
this.setData({schList:t,schId:s})},syncCtx:function(e){this.setData({content:e.detail})}});
