(window["webpackJsonp_module_entry_gcxt_"]=window["webpackJsonp_module_entry_gcxt_"]||[]).push([["chunk-29cb2005"],{"0869":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("business-edit-view",{attrs:{data:e.data,config:e.config,"biz-type":e.bizType,"change-type":e.changeType,mode:e.mode}})},a=[],o=r("cb6f"),i={name:"TcJfWorksheetEdit",mixins:[o["a"]]},c=i,u=r("5d22"),s=Object(u["a"])(c,n,a,!1,null,null,null);t["default"]=s.exports},"2da2":function(e,t,r){"use strict";r("ac67"),r("1bc7"),r("32ea");var n=r("34f5"),a=r("225c");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t["a"]=i({},a["a"])},"7ae6":function(e,t,r){"use strict";r("ac67"),r("1bc7"),r("32ea");var n=r("34f5"),a=(r("e5b4"),r("a262")),o=r("fd50");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u,s,f={extends:a["a"],data:function(){var e=this;return{formHooks:{afterRelative:function(t,r,n){if("project_id"===n.id){var a=t.find((function(e){return"fq_company"===e.id}));if(a)return a.getBizData().then((function(){var t=a.data,r=e.data.formData.dataModel.fq_company;1===t.length&&(r.value=t[0].value,r.text=t[0].text,r.valueObj=[c({value:r.value},t[0].__orgOption)])})).catch((function(e){console.error(e)}))}return o["a"].resolve()}}}},provide:function(){return{formHooks:this.formHooks}}},p=f,d=r("5d22"),h=Object(d["a"])(p,u,s,!1,null,null,null);t["a"]=h.exports},cb6f:function(e,t,r){"use strict";r("6a61");var n=r("ed32"),a=r("7ae6"),o=r("2da2"),i=r("db68"),c=r("3ec3"),u=r("040f"),s=r("82f8"),f=r("a783");t["a"]={components:{BusinessEditView:a["a"]},data:function(){return{bizType:i["b"].store.getValueByKey("biz_type"),changeType:i["b"].store.getValueByKey("change_type")||"",data:null,hooks:{afterLayoutRequest:function(e){var t=e.dataModel;"project_id"in t&&(t.project_id.pagingFun=u["a"].pagingFunUserProjects)}}}},computed:{sheetId:function(){return this.$route.query.id},mode:function(){return this.sheetId?"edit":"add"},config:function(){return c["a"][this.bizType]}},watch:{sheetId:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getDefaultProjectInfo();case 2:t=e.sent,r=t?Object.assign({project_id:t.project_id},JSON.parse(this.$route.query.params||"null")):JSON.parse(this.$route.query.params||"null"),o["a"].init({bizType:this.bizType,changeType:this.changeType,sheetId:this.sheetId,params:r,config:this.config,hooks:this.hooks}).then((function(e){var t=e;return n.hooks.afterInit?n.hooks.afterInit(t):t})).then((function(e){console.log(e),n.data=e})).catch((function(e){console.error(e)}));case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getDefaultProjectInfo:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.config.isTCMode||"add"!==this.mode||!window.__YL__){e.next=17;break}return e.next=3,window.__YL__.dataShare.getProjectInfo();case 3:if(t=e.sent,t){e.next=6;break}return e.abrupt("return");case 6:return e.prev=6,e.next=9,Object(s["W"])({erp_project_id:[t.id]});case 9:if(r=e.sent,!(r.data.length>0)){e.next=13;break}return f["a"].project=r.data,e.abrupt("return",r.data[0]);case 13:e.next=17;break;case 15:e.prev=15,e.t0=e["catch"](6);case 17:case"end":return e.stop()}}),e,this,[[6,15]])})));function t(){return e.apply(this,arguments)}return t}()}}}}]);