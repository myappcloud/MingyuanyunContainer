(window["webpackJsonp_module_entry_zhkf_"]=window["webpackJsonp_module_entry_zhkf_"]||[]).push([["chunk-a2dfba6a"],{"08ec":function(t,e,n){var a=n("41be");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("85cb").default;r("6772140b",a,!0,{})},"33b7":function(t,e,n){"use strict";n.d(e,"h",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"g",(function(){return s})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"k",(function(){return u})),n.d(e,"l",(function(){return p})),n.d(e,"m",(function(){return d})),n.d(e,"j",(function(){return l})),n.d(e,"i",(function(){return h})),n.d(e,"f",(function(){return f})),n.d(e,"e",(function(){return b})),n.d(e,"d",(function(){return m}));var a=n("1961");function r(t){return Object(a["a"])({url:"check-task-api/check-task-problem-list/child-problem-list",method:"post",data:t})}function i(t){return Object(a["a"])({url:"check-task-api/check-task-problem-void/void",method:"post",data:t})}function s(t){return Object(a["a"])({url:"check-task-api/check-task-problem-activate/activate",method:"post",data:t})}function o(t){return Object(a["a"])({url:"check-task-api/check-task-problem-add/add-child-problem",method:"post",data:t})}function c(t){return Object(a["a"])({url:"check-task-api/check-task-problem-assign/assign",method:"post",data:t})}function u(t){return Object(a["a"])({url:"check-task-api/check-task-problem-return-assign/return-assign",method:"post",data:t})}function p(t){return Object(a["a"])({url:"check-task-api/check-task-problem-review/review-no-pass",method:"post",data:t})}function d(t){return Object(a["a"])({url:"check-task-api/check-task-problem-review/review-pass",method:"post",data:t})}function l(t){return Object(a["a"])({url:"check-task-api/check-task-user/user-list",params:t})}function h(t){return Object(a["a"])({url:"check-task-api/check-task-problem-detail/child-detail",params:t})}function f(t){return Object(a["a"])({url:"check-task-api/check-task-problem-progress/create-child-progress-handing",method:"post",data:t})}function b(t){return Object(a["a"])({url:"check-task-api/check-task-problem-progress/create-child-progress-close",method:"post",data:t})}function m(t){return Object(a["a"])({url:"check-task-api/check-task-problem-progress/create-child-progress-abnormal-close",method:"post",data:t})}},"35a9":function(t,e,n){"use strict";var a={name:"app-button",props:{disabled:Boolean,secondary:Boolean},computed:{buttonStyle:function(){return[this.disabled&&"disabled",this.secondary?"secondary":"primary"]}}},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",t._g({staticClass:"app-button",class:t.buttonStyle,attrs:{href:"javascript:;"}},t.$listeners),[t._t("default")],2)},i=[],s=n("d082");function o(t){n("4e29")}var c=!1,u=o,p="data-v-ea4c4440",d=null,l=Object(s["a"])(a,r,i,c,u,p,d);e["a"]=l.exports},"381b":function(t,e,n){"use strict";n.r(e);n("6a61");var a=n("2e91"),r=(n("cc57"),n("721f")),i=n("35a9"),s=n("85ad"),o=n("33b7"),c=n("ba8f"),u=n("cdfe"),p=n("f809"),d={components:{appToast:r["a"],appButton:i["a"]},mixins:[Object(c["a"])({name:u["b"],state:["checkedUser","detailData"],mutations:["updateListData","updateCheckedUser"]})],data:function(){return{changeTime:"",reason:"",maxLength:200,error:"",showDatetime:!1,minDate:new Date,currentDate:new Date}},computed:{changeName:function(){var t="整改人";return this.checkedUser[t].name},changeNameId:function(){var t="整改人";return this.checkedUser[t].id},checkName:function(){var t="复验人";return this.checkedUser[t].name},checkNameId:function(){var t="复验人";return this.checkedUser[t].id},btnActive:function(){return!(this.changeName&&this.changeTime&&this.checkName&&this.reason)}},watch:{$route:function(t,e){/child-task-list|child-task-detail/.test(e.path)&&(console.log("-------------------router"),this.initPage())}},mounted:function(){console.log("-------------mounted"),this.initPage()},methods:{goBack:function(){this.$router.go(-1)},navToSelectUser:function(t){this.$router.push({path:"select-user",query:{title:t}})},confirm:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.btnActive){t.next=14;break}return e={id:this.$route.query.id,subject:this.reason,handler_id:this.changeNameId,handler_name:this.changeName,reviewer_id:this.checkNameId,reviewer_name:this.checkName,problem_deadline:this.changeTime},t.prev=2,t.next=5,Object(o["b"])(e);case 5:this.resetPage(),this.updateListData(),this.$router.go(-1),t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](2),this.error=t.t0.errmsg,Object(s["b"])(t.t0);case 14:case"end":return t.stop()}}),t,this,[[2,10]])})));function e(){return t.apply(this,arguments)}return e}(),resetPage:function(){this.updateCheckedUser({"整改人":{id:"",name:""},"复验人":{id:"",name:""}}),this.changeTime="",this.reason=""},initPage:function(){this.updateCheckedUser({"整改人":{id:this.$route.query.handler_id,name:this.$route.query.handler_name},"复验人":{id:this.$route.query.reviewer_id,name:this.$route.query.reviewer_name}}),this.changeTime=this.$route.query.problem_deadline,this.reason=this.$route.query.subject||""},showDatePicker:function(){this.showDatetime=!0},cancelDatetime:function(){this.showDatetime=!1},confirmDatetime:function(t){this.changeTime=Object(p["a"])(t,"yyyy-MM-dd"),this.showDatetime=!1}}},l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-view x-col"},[n("header",{staticClass:"app-header x-lock"},[n("i",{staticClass:"app-nav-left app-nav-back",on:{click:t.goBack}}),t._v(" "),n("span",{staticClass:"app-nav-title"},[t._v("指派任务")])]),t._v(" "),n("div",{staticClass:"page-content"},[n("div",{staticClass:"info-item x-row has-arrow must bdbt",on:{click:function(e){return t.navToSelectUser("整改人")}}},[n("span",{staticClass:"label"},[t._v("整改人")]),t._v(" "),n("span",{staticClass:"txt"},[t._v(t._s(t.changeName))])]),t._v(" "),n("div",{staticClass:"info-item x-row has-arrow must bdbt",on:{click:t.showDatePicker}},[n("span",{staticClass:"label"},[t._v("整改时限")]),t._v(" "),n("span",{staticClass:"txt"},[t._v(t._s(t.changeTime))])]),t._v(" "),n("div",{staticClass:"info-item x-row has-arrow must bdbt",on:{click:function(e){return t.navToSelectUser("复验人")}}},[n("span",{staticClass:"label"},[t._v("复验人")]),t._v(" "),n("span",{staticClass:"txt"},[t._v(t._s(t.checkName))])]),t._v(" "),n("div",{staticClass:"edit-wrapper x-rel"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.reason,expression:"reason"}],staticClass:"edit",attrs:{placeholder:"任务内容(必填）",maxlength:t.maxLength},domProps:{value:t.reason},on:{input:function(e){e.target.composing||(t.reason=e.target.value)}}}),t._v(" "),n("i",{staticClass:"num"},[t._v(t._s(t.maxLength-t.reason.length))])]),t._v(" "),n("app-button",{staticClass:"confirm-btn",attrs:{disabled:t.btnActive},on:{click:t.confirm}},[t._v("确认")])],1),t._v(" "),n("app-toast",{model:{value:t.error,callback:function(e){t.error=e},expression:"error"}}),t._v(" "),n("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:t.showDatetime,callback:function(e){t.showDatetime=e},expression:"showDatetime"}},[n("van-datetime-picker",{attrs:{type:"date","min-date":t.minDate},on:{confirm:t.confirmDatetime,cancel:function(e){return t.cancelDatetime()}},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1)],1)},h=[],f=n("d082");function b(t){n("bce7")}var m=!1,g=b,k="data-v-726ab657",v=null,x=Object(f["a"])(d,l,h,m,g,k,v);e["default"]=x.exports},"41be":function(t,e,n){e=t.exports=n("690e")(!1),e.push([t.i,"\n.zhkf .app-toast[data-v-1b84d5c4] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  text-align: center;\n  z-index: 999999;\n}\n.zhkf .app-toast .app-toast-message[data-v-1b84d5c4] {\n  display: inline-block;\n  min-width: 160px;\n  max-width: 80%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  padding: 10px;\n  color: #fff;\n  border-radius: 4px;\n  font-size: 14px;\n  line-height: 21px;\n  background: rgba(51, 51, 51, 0.5);\n  -webkit-transform: translate(-50%, -50%) translateZ(0);\n          transform: translate(-50%, -50%) translateZ(0);\n}\n",""])},"4e29":function(t,e,n){var a=n("9a2e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("85cb").default;r("ca454eb4",a,!0,{})},"721f":function(t,e,n){"use strict";n("163d");var a={name:"app-toast",props:{message:{type:String,default:""},duration:{type:Number,default:2e3}},model:{prop:"message",event:"hide"},computed:{show:function(){var t=this;return!!this.message&&(setTimeout((function(){return t.$emit("hide","")}),this.duration),!0)}}},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"app-toast"},[n("span",{staticClass:"app-toast-message"},[t._v(t._s(t.message))])]):t._e()},i=[],s=n("d082");function o(t){n("08ec")}var c=!1,u=o,p="data-v-1b84d5c4",d=null,l=Object(s["a"])(a,r,i,c,u,p,d);e["a"]=l.exports},"9a2e":function(t,e,n){e=t.exports=n("690e")(!1),e.push([t.i,'\n@charset "utf-8";\n/**\n *****************************************\n * Created by lifx\n * Created on 2018-04-25 09:04:31\n *****************************************\n */\n/**\n *****************************************\n * 按钮样式\n *****************************************\n */\n.zhkf .app-button[data-v-ea4c4440] {\n  display: block;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-width: 120px;\n  padding: 0 40px;\n  border-radius: 4px;\n  font-size: 16px;\n  text-align: center;\n}\n.zhkf .app-button.primary[data-v-ea4c4440] {\n  padding: 12px 0;\n  color: white;\n  background-image: -webkit-gradient(linear, right top, left top, from(#2567ff), color-stop(98%, #2f9eff));\n  background-image: linear-gradient(-90deg, #2567ff 0%, #2f9eff 98%);\n  -webkit-transition: opacity 0.3s ease-in-out;\n  transition: opacity 0.3s ease-in-out;\n}\n.zhkf .app-button.primary.disabled[data-v-ea4c4440] {\n  opacity: 0.5;\n}\n',""])},ba8f:function(t,e,n){"use strict";n("5ab2"),n("6d57"),n("e44b"),n("e10e");var a=n("28f8"),r=(n("cc57"),n("f2de")),i=n("e048");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e["a"]=function(t){var e=t.name,n=void 0===e?"app":e,a=t.store,s=t.state,c=t.getters,u=t.mutations,p=t.actions,d={};return a&&(d.beforeCreate=function(){return Object(i["a"])(n,o({namespaced:!0},a))}),s&&(d.computed=Object(r["e"])(n,s)),c&&(d.computed=Object(r["c"])(n,c)),u&&(d.methods=Object(r["d"])(n,u)),p&&(d.methods=Object(r["b"])(n,p)),d}},bce7:function(t,e,n){var a=n("edc5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("85cb").default;r("e8756414",a,!0,{})},cdfe:function(t,e,n){"use strict";n.d(e,"b",(function(){return s}));n("5ab2"),n("6d57"),n("e44b"),n("e10e");var a=n("28f8");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s="CHECK_CHILD_PROBLEM";e["a"]={state:{checkedUser:{"整改人":{id:"",name:""},"复验人":{id:"",name:""}},userPageTitle:"",listRefreshFlag:!1,detailData:{}},mutations:{updateCheckedUser:function(t,e){t.checkedUser=i(i({},t.checkedUser),e)},updateUserPageTitle:function(t,e){t.userPageTitle=e},updateListData:function(t){t.listRefreshFlag=!t.listRefreshFlag},updateDetailData:function(t,e){t.detailData=i(i({},t.detailData),e)}}}},e048:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));n("cc57");var a=n("07a4");function r(t,e){return a["a"].registerModule(t,e)}function i(t){a["a"].state[t]&&a["a"].unregisterModule(t)}},e71c:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAYlJREFUSA3t1b1OwzAQAGBfS8gTsID4ERIJqlJmZlYkNkYQPwNCPA5DxYL4kXgDRmY2hroNAaqKFcQLUFk1dwFHHUKoz+6Gh56b6O6zI+ciBGOkaX8xTV/WGalFSq2YjTmRsjev1GdPKXUv5eOl1tq6BlHWSfW6nsG8KUrWWux2Ok8XHNwabjRWHgCgRTANRHc4uDVMWJLEJ4if0ZwGB4fvVPtfxAB32sJ4ZLJxMde4qD2MQ3Ptt8iGqWA5Lq6SZHX/L9wJdsGdYS7uBebg3mBb3Ctsg3uHK/BbPO1b5rSzGggVrxpYXOP7fIxxpMmIzW73+dzkTQSm4oRjL7/DWdFMtB4uGThv9uaPz9huZ9vYYm6w5s/m4D0MawfGmMiOR9B8YwAiBZhei6Kob2Dvh6sMFSLcaDaX3wxK0Ss8LuoVtkG9wbaoF5iDOsNc1Al2QdmwK8qCsyybHQz0KyYHeQFsDmXvKd2rGtadSymYw4JOKC2I1UCkzA7xG7AQBLXTOI4/qnb2f888gS+RN/3dVWeOIQAAAABJRU5ErkJggg=="},edc5:function(t,e,n){var a=n("5454");e=t.exports=n("690e")(!1),e.push([t.i,"\n.zhkf .info-item[data-v-726ab657] {\n  position: relative;\n  min-height: 50px;\n  padding: 12px 15px;\n  font-size: 14px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  background: #fff;\n}\n.zhkf .info-item .label[data-v-726ab657] {\n  min-width: 9em;\n  color: #808080;\n}\n.zhkf .info-item .txt[data-v-726ab657] {\n  color: #202020;\n}\n.zhkf .info-item .txt[data-v-726ab657]:empty:before {\n  content: '\\9009\\586B';\n  color: #bbb;\n}\n.zhkf .info-item.has-arrow[data-v-726ab657] {\n  padding-right: 32px;\n}\n.zhkf .info-item.has-arrow[data-v-726ab657]:after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  right: 14px;\n  width: 15px;\n  height: 15px;\n  margin-top: -7px;\n  background: url("+a(n("e71c"))+") no-repeat;\n  background-size: contain;\n}\n.zhkf .info-item.must .txt[data-v-726ab657]:empty:before {\n  content: '\\5FC5\\586B';\n}\n.zhkf .info-item .inp-wrapper[data-v-726ab657] {\n  text-align: right;\n}\n.zhkf .info-item .inp-wrapper > input[data-v-726ab657] {\n  position: absolute;\n  width: 100%;\n  height: 50px;\n  top: 0;\n  left: 0;\n  opacity: 0;\n}\n.zhkf .info-item .inp-wrapper > span[data-v-726ab657]:empty:before {\n  content: '0.00';\n  color: #bbb;\n}\n.zhkf .edit-wrapper[data-v-726ab657] {\n  position: relative;\n  background-color: #fff;\n}\n.zhkf .edit-wrapper .edit[data-v-726ab657] {\n  width: 100%;\n  height: 110px;\n  padding: 18px 15px;\n  border: none;\n  resize: none;\n  font-size: 14px;\n  color: #202020;\n}\n.zhkf .edit-wrapper .num[data-v-726ab657] {\n  position: absolute;\n  bottom: 18px;\n  right: 14px;\n  font-size: 14px;\n  color: #a0a0a0;\n}\n.zhkf .confirm-btn[data-v-726ab657] {\n  width: 92%;\n  margin: 20px auto 0;\n}\n.zhkf .dp-header .dp-item.dp-right[data-v-726ab657] {\n  color: #2467ff;\n}\n",""])},f809:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("9dd9"),n("f548");function a(t){return t<10?"0".concat(t):t}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss",n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var r in/(y+)/i.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(-RegExp.$1.length))),n)if(new RegExp("("+r+")").test(e)){var i=n[r]+"",s=RegExp.$1.length<i.length?i.length:RegExp.$1.length;i=a(i),e=e.replace(RegExp.$1,i.substr(-s))}return/(S+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getMilliseconds()+"").substr(0,RegExp.$1.length))),e}}}]);