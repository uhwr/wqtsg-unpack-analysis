"use strict";
var a=require("../utils/http.js");
module.exports={login:function(c,e){var n={adm_account:c,adm_passwd:e};
return a.query(a.apiUrl(),"query($adm_account:String!,$adm_passwd:String!){adminLogin(adm_account:$adm_account,adm_passwd:$adm_passwd){adm_id adm_nick:adm_account adm_account getToken{accessToken expiresIn}}}",n)},check:function(c){var e={accessToken:c};
return a.query(a.apiUrl(),"query($accessToken:String!){verifyToken(accessToken:$accessToken)}",e,!1)}};
