"use strict";
var a=getApp(),e=require("../../utils/util.js"),t=require("../../service/userService.js");
Page({data:{name:"",passwd:"",projectName:"",userInfo:[],logo:e.themeUrl("logo.png"),canIuse:wx.canIUse("button.open-type.getUserInfo"),ready:!1},bindKeyInput:function(a){var e={};
e[a.target.id]=a.detail.value,this.setData(e)},loginSuccess:function(t){a.globalData.login=!1,a.globalData.userInfo=e.getStruct(t.data,"adminLogin");
var n=e.getStruct(a.globalData.userInfo,"getToken.accessToken"),o=e.getStruct(a.globalData.userInfo,"adm_account");
n&&o&&(a.globalData.userInfo.getToken.accessToken=o+"|"+n),wx.setStorageSync("userInfo",a.globalData.userInfo),wx.redirectTo({url:"../index/index"})},login:function(){var a=this;
t.login(this.data.name,this.data.passwd).then((function(t){0===t.code?a.loginSuccess(t):e.showError(t.msg)}))},onLoad:function(t){var n=this;
this.setData(e.getConfig()),wx.showLoading({title:"加载中"}),a.globalData.userInfo?(wx.redirectTo({url:"../index/index"}),wx.hideLoading()):a.globalData.authCall?a.globalData.authCall.then((function(a){return wx.hideLoading(),0==a.code?wx.redirectTo({url:"../index/index"}):n.setData({ready:!0}),a})):(wx.hideLoading(),this.setData({ready:!0})),a.globalData.authCall=null}});
