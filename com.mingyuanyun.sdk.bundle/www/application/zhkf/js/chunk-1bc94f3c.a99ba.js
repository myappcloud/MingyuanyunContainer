(window["webpackJsonp_module_entry_zhkf_"]=window["webpackJsonp_module_entry_zhkf_"]||[]).push([["chunk-1bc94f3c"],{"2ab7":function(e,t,n){var o=n("6f1b");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("85cb").default;r("104801d8",o,!0,{})},"55bf":function(e,t,n){"use strict";n.r(t);n("5ab2"),n("6d57"),n("e44b"),n("e10e"),n("6a61");var o=n("2e91"),r=n("28f8"),a=n("c2c1"),i=n("a740"),c=n("7eca"),s=n("783f"),p=n("2934"),l=n("f2de"),u=n("bd52"),f=n("357d"),d=n("6bea");function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b="[views]/about.vue：",v=Object(i["j"])(),m={yf:"明源移动验房",kf:"明源移动客服",yf_kf:"明源智慧客服"},w={data:function(){return{inSdk:Object(i["f"])(),version:"",hasNewVersion:!1,versionText:"",updateInfo:{},qrCodeSrc:"",isShowUpdateInfo:!0,remoteUrl:{},name:"",clickCount:0,lastClickTime:0}},computed:g({},Object(l["e"])({isAppUpgradeInfoChanged:function(e){return e.app.global.isAppUpgradeInfoChanged}})),activated:function(){this.name=m[window.ZHKF_GLOBAL_ENV.VUE_APP_PKG_TYPE]||"明源智慧客服",this.init(),this.getRemoteUrl()},methods:{enterDebug:function(){var e=(new Date).getTime();if(e-this.lastClickTime<1e3){if(this.clickCount++,10===this.clickCount){var t=document.createElement("script");t.src="https://debug.myy.com",document.head.appendChild(t)}}else this.clickCount=0;this.lastClickTime=e},init:function(){var e=this;this.updateTimeStamp(),this.getQrCodeSrc(),this.checkUpdate(),a["a"].getAppFullVersion().then((function(t){e.version="v"+t.fullVersion}))},updateTimeStamp:function(){u["a"].updateDownloadTimestamp("common-quality-problem",d["a"].getDate())},getRemoteUrl:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(p["c"])();case 2:t=e.sent,this.remoteUrl=t;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),openRemote:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;t=t.trim(),a["a"].openUrlInWebview(t,{onOpen:function(){console.log(b,"打开【Webview】: ",t)},onClose:function(){console.log(b,"关闭【Webview】: ",t)},onError:function(t){return e.$toast(t.errMsg)},navBar:{barTitle:n,barPosition:1,barProgressColor:"#0099ff"},isShowRefresh:!0})},checkUpdate:function(){var e=this,t=v;!t||"mysoft"==t.tenant_code.toLowerCase()&&"appstore"==t.user_code.toLowerCase()?this.isShowUpdateInfo=!1:c["a"].checkAppUpdate("".concat(Object(f["a"])("app_tools_site"),"/api/update/app-version/get-version"),{appCode:window.ZHKF_GLOBAL_ENV.VUE_APP_CODE,tenant:t.tenant_code,gray:1,account:t.user_id}).then((function(t){console.log(b,"checkUpdate() - updateInfo=",t),"AppVersion"===t.type&&(e.updateInfo=t.updatedVersion,e.hasNewVersion=!0,e.versionText="有新版本v"+e.updateInfo.versionCode+"00")})).catch((function(t){console.error(b,t),e.hasNewVersion=!1,e.updateInfo={},e.versionText="已是最新版本"}))},getQrCodeSrc:function(){var e=v;e=e.tenant_code+"_"+e.user_code,"mysoft_appstore"===e.toLocaleLowerCase()?this.qrCodeSrc=n("e430"):this.qrCodeSrc=n("a0b3")},getNewVersion:function(){if(console.log(b,"getNewVersion() - hasNewVersion=",this.hasNewVersion),!this.hasNewVersion)return!1;Object(s["a"])(this.updateInfo)}}},_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("cus-nav-bar",{attrs:{title:"关于","left-arrow":"",border:!1},on:{"click-left":function(t){return e.$router.go(-1)}}}),e._v(" "),e.qrCodeSrc?n("div",{staticClass:"qrcode"},[n("div",{staticClass:"img-wrapper"},[n("img",{attrs:{src:e.qrCodeSrc,alt:"qrcode"}})]),e._v(" "),n("p",{staticClass:"version-text"},[e._v(e._s(e.name)+e._s(e.version))])]):e._e(),e._v(" "),n("van-cell-group",[n("van-cell",{attrs:{title:"客服热线"},on:{click:e.enterDebug}},[[n("a",{staticClass:"tel",attrs:{href:"tel: 0755-86309355"}},[e._v("0755-86309355")])]],2),e._v(" "),e.inSdk?e._e():[e.isShowUpdateInfo?n("van-cell",{attrs:{title:"软件更新"}},[[n("span",{class:{"color-blue":e.hasNewVersion},on:{click:e.getNewVersion}},[e._v(e._s(e.versionText))])]],2):e._e(),e._v(" "),n("van-cell",{attrs:{title:"更新说明","is-link":"",to:"/user/upgrade-info"}},[n("i",{directives:[{name:"show",rawName:"v-show",value:e.isAppUpgradeInfoChanged,expression:"isAppUpgradeInfoChanged"}],staticClass:"dot"})])]],2),e._v(" "),n("van-cell-group",{staticStyle:{"margin-top":"10px"}},[n("van-cell",{attrs:{title:"用户协议","is-link":"",clickable:""},on:{click:function(t){return e.openRemote(e.remoteUrl.user_agreement_url,"用户协议")}}}),e._v(" "),n("van-cell",{attrs:{title:"隐私声明","is-link":""},on:{click:function(t){return e.openRemote(e.remoteUrl.privacy_policy_url,"隐私声明")}}})],1)],1)},k=[],x=n("d082");function C(e){n("2ab7")}var O=!1,y=C,j="data-v-e5cfab82",S=null,U=Object(x["a"])(w,_,k,O,y,j,S);t["default"]=U.exports},"6bea":function(e,t,n){"use strict";t["a"]={getDate:function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,o=e.getDate(),r=e.getHours(),a=e.getMinutes(),i=e.getSeconds();function c(e){return String(e+100).slice(1)}return"".concat(t,"-").concat(c(n),"-").concat(c(o)," ").concat(c(r),":").concat(c(a),":").concat(c(i))}}},"6f1b":function(e,t,n){t=e.exports=n("690e")(!1),t.push([e.i,"\n.zhkf .about[data-v-e5cfab82] .van-cell__value {\n  width: 120px;\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto;\n}\n.zhkf .img-wrapper[data-v-e5cfab82] {\n  width: 140px;\n  height: 140px;\n  background: #fff;\n  margin: 40px auto 15px;\n  padding: 12px;\n  -webkit-box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.16);\n          box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.16);\n}\n.zhkf .img-wrapper img[data-v-e5cfab82] {\n    width: 116px;\n    height: 116px;\n}\n.zhkf .tel[data-v-e5cfab82] {\n  color: #0099ff;\n  font-size: 15px;\n}\n.zhkf .color-blue[data-v-e5cfab82] {\n  color: #0099ff;\n}\n.zhkf .dot[data-v-e5cfab82] {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  height: 6px;\n  width: 6px;\n  text-align: center;\n  border-radius: 50%;\n  background: -webkit-gradient(linear, left top, right top, from(#fc8e83), to(#f7554c));\n  background: linear-gradient(90deg, #fc8e83 0%, #f7554c 100%);\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.zhkf .version-text[data-v-e5cfab82] {\n  font-size: 14px;\n  color: #606060;\n  text-align: center;\n  margin-bottom: 30px;\n}\n",""])},a0b3:function(e,t,n){e.exports=n.p+"img/app-qr-code.88aa7e57.png"},e430:function(e,t,n){e.exports=n.p+"img/app-qr-code-app-store.9d311003.png"}}]);