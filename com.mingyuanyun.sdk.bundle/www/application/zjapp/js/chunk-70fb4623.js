(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-70fb4623"],{1993:function(e,t,n){var r=n("bf49");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("85cb").default)("140dcfa8",r,!0,{sourceMap:!1,shadowMode:!1})},"5b46":function(e,t,n){"use strict";n("1993")},bf49:function(e,t,n){(e.exports=n("690e")(!1)).push([e.i,".zjapp .show-dmp[data-v-c4ddb060]{width:100%;height:100%;border:none}",""])},c3d6:function(e,t,n){"use strict";n.r(t);n("c04d");var r,o,i=n("f585"),s=(n("6a61"),n("2e91")),a=(n("7f43"),n("3094")),c=n("162a"),d=n("3bd5"),u={name:"NcovReportDMPIndex",data:function(){return{src:"",isLoading:!1,token:""}},created:function(){this.errorHandel()},activated:function(){this.init()},methods:{init:(o=Object(s.a)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.src="",this.isLoading=!0,e.next=4,this.load().catch((function(e){t.src="",Object(i.a)(e&&e.errmsg)}));case 4:e.sent,this.isLoading=!1;case 6:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)}),load:(r=Object(s.a)(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t="","dist"===APP_ENV){e.next=7;break}return e.next=4,this.login();case 4:t=e.sent,e.next=8;break;case 7:t=d.a.getUser().access_token;case 8:return n=window.__YL_SUPER_APP__?{super_app_token:d.a.getToken()}:{token:t},e.next=11,this.getUrl(n);case 11:return r=e.sent,this.src=r,e.abrupt("return",this.loadIDmpResource());case 14:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)}),login:function(){var e={tenant_code:"mysoft",account:"建设单位XY",pwd:"Test1234",pwd_enc:a.a.encrypt("Test1234","O57DLSOV0MJY81Q8","CBC","XFJMJJ924Y4L2PG9"),device_id:window.device&&window.device.uuid||"",application_code:"MobileCheckQuality"};return c.a.post("/common/proxy",null,{url:"https://appzj.myyscm.com/common/login?o=mysoft&is_wifi=1&app_version=3.1.5393&platform=Android&applicationId=undefined&deviceToken=undefined&manufacturer=undefined&pushChannel=undefined&access_token=",data:JSON.stringify(e)}).then((function(e){return e&&!e.errcode?e.access_token:Promise.reject(e.errmsg)}))},getUrl:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};APP_ENV;return c.a.post("/common/proxy",{},{url:"https://bigdata.myyscm.com/dmp/yfw/access-auth?biz_code=9a1a92d3ad0d4130b7b6ef79472c0e7d",data:JSON.stringify(JSON.stringify(e)),header:["Content-Type: application/json"]}).then((function(e){return e&&!e.errcode?e.url:Promise.reject(e.errmsg)}))},loadIDmpResource:function(){var e=this;return new Promise((function(t,n){setTimeout((function(r){e.$refs.dmp.onload=function(){console.log("资源加载成功"),t()},e.$refs.dmp.onerror=function(){console.log("资源加载失败"),n()}}),0)}))},errorHandel:function(){var e=this;window.addEventListener("message",(function(t){if(console.log("接收到消息"),t&&"message"===t.type&&"token-timeout"===t.data)return e.init().catch((function(t){e.src="",Object(i.a)(t)}))}),!1)}}},p=(n("5b46"),n("17cc")),f=Object(p.a)(u,(function(){var e=this.$createElement,t=this._self._c||e;return t("page-content",{ref:"parent",attrs:{title:"防疫专项看板","show-go-root":"Report"}},[this.src?t("iframe",{ref:"dmp",staticClass:"show-dmp",attrs:{src:this.src,width:"100%",height:"100%",frameborder:"0"}}):this._e(),t("loading-status",{attrs:{"is-loading":this.isLoading,"is-empty":!this.isLoading&&!this.src,"empty-text":"当前无网络",type:"error"}})],1)}),[],!1,null,"c4ddb060",null);t.default=f.exports}}]);