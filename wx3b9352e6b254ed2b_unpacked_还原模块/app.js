"use strict";
var e=require("./service/userService.js"),t=require("./utils/util.js");
App({onLaunch:function(){var n=this,a=wx.getStorageSync("userInfo"),o=t.getStruct(a,"getToken.accessToken");
t.getStruct(a,"adm_account");
if(this.globalData.sysinfo=wx.getSystemInfoSync(),this.globalData.authCall=o?e.check(o).then((function(e){return 0==e.code&&!0===t.getStruct(e.data,"verifyToken")?(n.globalData.userInfo=a,console.log(a)):wx.removeStorageSync("userInfo"),e})):new Promise((function(e,t){e({code:1,msg:"invilad Token"})})),wx.canIUse("getUpdateManager")){var c=wx.getUpdateManager();
c.onCheckForUpdate((function(e){e.hasUpdate&&(c.onUpdateReady((function(){wx.showModal({title:"更新提示",content:"新版本已经准备好，请重启应用",success:function(e){e.confirm&&c.applyUpdate()}})})),c.onUpdateFailed((function(){wx.showModal({title:"已经有新版本了哟~",content:"新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"})})))}))}},globalData:{userInfo:null,authCall:!1,version:"1.3.10"}});
