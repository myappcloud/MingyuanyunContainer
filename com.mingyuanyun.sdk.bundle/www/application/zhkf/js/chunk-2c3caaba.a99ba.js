(window["webpackJsonp_module_entry_zhkf_"]=window["webpackJsonp_module_entry_zhkf_"]||[]).push([["chunk-2c3caaba"],{"1fb9":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAYlJREFUSA3t1b1OwzAQAGBfS8gTsID4ERIJqlJmZlYkNkYQPwNCPA5DxYL4kXgDRmY2hroNAaqKFcQLUFk1dwFHHUKoz+6Gh56b6O6zI+ciBGOkaX8xTV/WGalFSq2YjTmRsjev1GdPKXUv5eOl1tq6BlHWSfW6nsG8KUrWWux2Ok8XHNwabjRWHgCgRTANRHc4uDVMWJLEJ4if0ZwGB4fvVPtfxAB32sJ4ZLJxMde4qD2MQ3Ptt8iGqWA5Lq6SZHX/L9wJdsGdYS7uBebg3mBb3Ctsg3uHK/BbPO1b5rSzGggVrxpYXOP7fIxxpMmIzW73+dzkTQSm4oRjL7/DWdFMtB4uGThv9uaPz9huZ9vYYm6w5s/m4D0MawfGmMiOR9B8YwAiBZhei6Kob2Dvh6sMFSLcaDaX3wxK0Ss8LuoVtkG9wbaoF5iDOsNc1Al2QdmwK8qCsyybHQz0KyYHeQFsDmXvKd2rGtadSymYw4JOKC2I1UCkzA7xG7AQBLXTOI4/qnb2f888gS+RN/3dVWeOIQAAAABJRU5ErkJggg=="},29877:function(e,t,n){t=e.exports=n("690e")(!1),t.push([e.i,"\n.zhkf ._checkbox[data-v-3fc79ec1] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 52px;\n  height: 32px;\n  border: 2px solid #e5e5e5;\n  border-radius: 25px;\n  background: #fff;\n}\n.zhkf ._checkbox.checked[data-v-3fc79ec1] {\n  background: #0085ff;\n  border-color: #0085ff;\n}\n.zhkf ._checkbox.checked span[data-v-3fc79ec1] {\n  float: right;\n}\n.zhkf ._checkbox span[data-v-3fc79ec1] {\n  float: left;\n  width: 28px;\n  height: 28px;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background: #fff;\n}\n",""])},"3ab1":function(e,t,n){var i=n("47f5");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var c=n("85cb").default;c("01c68f35",i,!0,{})},"47f5":function(e,t,n){t=e.exports=n("690e")(!1),t.push([e.i,"\n.zhkf .gray-bg .page-header {\n  height: 50px;\n  background: #2f9eff;\n  line-height: 50px;\n  text-align: center;\n  font-size: 18px;\n  color: #ffffff;\n}\n.zhkf .gray-bg .switcher {\n  margin-top: 10px;\n  border-bottom: 1px solid #f4f4f4;\n  height: 50px;\n  line-height: 30px;\n  padding: 10px 15px;\n  background: #fff;\n}\n.zhkf .gray-bg .switcher .title {\n  color: #202020;\n  font-size: 15px;\n}\n.zhkf .gray-bg ._select {\n  border-bottom: 1px solid #f4f4f4;\n}\n.zhkf .gray-bg .describer {\n  padding: 15px;\n  font-size: 14px;\n  color: #aeaeae;\n}\n",""])},5963:function(e,t,n){var i=n("29877");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var c=n("85cb").default;c("6f6d0f4b",i,!0,{})},"8d23":function(e,t,n){"use strict";n.r(t);n("5ab2"),n("6d57"),n("e44b"),n("e10e");var i=n("28f8"),c=(n("6a61"),n("2e91")),r={model:{prop:"checked",event:"changed"},props:{checked:Boolean,changed:Function},data:function(){return{value:this.checked}},computed:{},watch:{},methods:{toggleChecked:function(){this.$emit("changed",!this.value)}}},s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"_checkbox",class:{checked:e.value},on:{click:e.toggleChecked}},[n("span")])},a=[],o=n("d082");function u(e){n("5963")}var d=!1,l=u,f="data-v-3fc79ec1",b=null,p=Object(o["a"])(r,s,a,d,l,f,b),h=p.exports;n("e697");function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={model:{prop:"selectedId",event:"changed"},props:{multi:{type:Boolean,default:!1},title:{type:String,required:!0},value:{type:Object,default:function(){return{id:"",text:""}}},selectableItems:{type:Array,default:function(){return[]}},selectedId:{type:String}},data:function(){return{selecting:!1,selected:[]}},computed:{selectedItem:function(){var e=this,t=this.selectableItems.find((function(t,n){return t.id===e.selectedId}));return t},selectedText:function(){return this.selected.map((function(e){return e.text})).join()}},watch:{},beforeMount:function(){this.selected=this.selectedItem?[m({},this.selectedItem)]:[],console.log(this.selected)},methods:{showSelectableList:function(){this.selecting=!0},hideSelectableList:function(){this.selecting=!1},onClick:function(e){var t=this.selected.some((function(t){return t.id===e.id}));t||(this.multi?this.selected.push(e):(this.selected=[e],this.selecting=!1,this.$emit("changed",e.id)))}}},k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"_select",on:{click:e.showSelectableList}},[n("span",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),n("span",{staticClass:"value"},[e._v(e._s(e.selectedText))])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.selecting,expression:"selecting"}],staticClass:"mask",on:{click:e.hideSelectableList}}),e._v(" "),n("transition",{attrs:{name:"slide","enter-active-class":"animated slideInUp","leave-active-class":"animated slideOutDown"}},[n("ul",{directives:[{name:"show",rawName:"v-show",value:e.selecting,expression:"selecting"}],staticClass:"selectable-list"},e._l(e.selectableItems,(function(t){return n("li",{key:t.id,class:{selected:e.selected.some((function(e){return e.id===t.id}))},on:{click:function(n){return e.onClick(t)}}},[n("i",{staticClass:"check-icon"}),e._v(" "),n("div",{staticClass:"text"},[e._v(e._s(t.text))])])})),0)])],1)},x=[];function y(e){n("a660")}var O,_=!1,j=y,w="data-v-653d0fdd",C=null,z=Object(o["a"])(v,k,x,_,j,w,C),A=z.exports,S=n("cb7e"),D=n("f244"),P=n("85ad"),I=n("a740"),B="SET_APP_CONTEXT",R="SET_USER_CONTEXT",E={appContext:null,userContext:null},G={};O={},Object(i["a"])(O,B,(function(e,t){e.appContext=t||Object(I["e"])()||null})),Object(i["a"])(O,R,(function(e,t){e.userContext=t||Object(I["j"])()||null}));function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=[{id:"10",text:"提前10分钟"},{id:"20",text:"提前20分钟"},{id:"30",text:"提前30分钟"},{id:"40",text:"提前40分钟"},{id:"50",text:"提前50分钟"},{id:"60",text:"提前60分钟"}],Y=[{id:"0",text:"当天提醒"},{id:"1",text:"提前1天"},{id:"2",text:"提前2天"},{id:"3",text:"提前3天"},{id:"4",text:"提前4天"},{id:"5",text:"提前5天"}],K={components:{Checkbox:h,MySelect:A},props:{},data:function(){return{selectableItems:Y,replySelectableItems:L,setting:{is_shake:!0,is_reminder:"",reply_time:"",handle_time:""}}},computed:{appContext:function(){return this.$store.state.app&&this.$store.state.app.appContext||{}},configData:function(){return this.appContext.configData||{}}},watch:{},beforeCreate:function(){},created:function(){},beforeMount:function(){this.getConf()},mounted:function(){},methods:{saveConf:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=J({},this.setting),t.is_shake=!0===t.is_shake?"1":"0",t.is_reminder=!0===t.is_reminder?"1":"0",Object(S["I"])(t).then(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(D["a"])();case 2:i=e.sent,Object(I["m"])("configData",i),c=J(J({},n.appContext),{},{configData:i}),n.$store.commit(B,c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){Object(P["b"])(e)}));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getConf:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.configData.userSetting&&this.configData.userSetting.timeout_reminder?(t=this.configData.userSetting.timeout_reminder,this.setting.is_shake="0"!==t.is_shake,this.setting.is_reminder="1"===t.is_reminder,this.setting.reply_time=t.reply_time,this.setting.handle_time=t.handle_time,console.log(this.setting.reply_time)):Object(S["e"])().then((function(e){n.setting.is_shake="0"!==e.timeout_reminder.is_shake,n.setting.is_reminder="1"===e.timeout_reminder.is_reminder,n.setting.reply_time=e.timeout_reminder.reply_time,n.setting.handle_time=e.timeout_reminder.handle_time})).catch((function(e){Object(P["b"])(e)}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),goBack:function(){this.$router.go(-1)}}},N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"gray-bg app-view"},[n("header",{staticClass:"app-header x-lock"},[n("i",{staticClass:"app-nav-left app-nav-back",on:{click:e.goBack}}),e._v(" "),n("span",{staticClass:"app-nav-title"},[e._v("设置")])]),e._v(" "),n("div",{staticClass:"switcher mb-10"},[n("span",{staticClass:"title"},[e._v("摇一摇反馈")]),e._v(" "),n("checkbox",{key:e.setting.is_shake+"1",staticClass:"fr",on:{changed:e.saveConf},model:{value:e.setting.is_shake,callback:function(t){e.$set(e.setting,"is_shake",t)},expression:"setting.is_shake"}})],1),e._v(" "),n("div",{staticClass:"switcher border-b"},[n("span",{staticClass:"title"},[e._v("超时提醒")]),e._v(" "),n("checkbox",{key:e.setting.is_reminder+"2",staticClass:"fr",on:{changed:e.saveConf},model:{value:e.setting.is_reminder,callback:function(t){e.$set(e.setting,"is_reminder",t)},expression:"setting.is_reminder"}})],1),e._v(" "),n("my-select",{key:e.setting.reply_time+"3",staticClass:"border-b",attrs:{title:"回复超时提醒时间","selectable-items":e.replySelectableItems},on:{changed:e.saveConf},model:{value:e.setting.reply_time,callback:function(t){e.$set(e.setting,"reply_time",t)},expression:"setting.reply_time"}}),e._v(" "),n("my-select",{key:e.setting.handle_time+"4",attrs:{title:"处理超时提醒时间","selectable-items":e.selectableItems},on:{changed:e.saveConf},model:{value:e.setting.handle_time,callback:function(t){e.$set(e.setting,"handle_time",t)},expression:"setting.handle_time"}}),e._v(" "),n("p",{staticClass:"describer"},[e._v("开启后，系统将定时推送回复超时和处理超时提醒。")])],1)},$=[];function M(e){n("3ab1")}var X=!1,q=M,F=null,H=null,Q=Object(o["a"])(K,N,$,X,q,F,H);t["default"]=Q.exports},a660:function(e,t,n){var i=n("dfe9");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var c=n("85cb").default;c("26ee34fa",i,!0,{})},cb7e:function(e,t,n){"use strict";n.d(t,"g",(function(){return c})),n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"I",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"f",(function(){return l})),n.d(t,"E",(function(){return f})),n.d(t,"w",(function(){return b})),n.d(t,"C",(function(){return p})),n.d(t,"D",(function(){return h})),n.d(t,"H",(function(){return g})),n.d(t,"x",(function(){return m})),n.d(t,"v",(function(){return v})),n.d(t,"J",(function(){return k})),n.d(t,"u",(function(){return x})),n.d(t,"t",(function(){return y})),n.d(t,"A",(function(){return O})),n.d(t,"z",(function(){return _})),n.d(t,"y",(function(){return j})),n.d(t,"B",(function(){return w})),n.d(t,"o",(function(){return C})),n.d(t,"G",(function(){return z})),n.d(t,"n",(function(){return A})),n.d(t,"p",(function(){return S})),n.d(t,"k",(function(){return D})),n.d(t,"l",(function(){return P})),n.d(t,"i",(function(){return I})),n.d(t,"j",(function(){return B})),n.d(t,"F",(function(){return R})),n.d(t,"h",(function(){return E})),n.d(t,"m",(function(){return G})),n.d(t,"r",(function(){return T})),n.d(t,"q",(function(){return J})),n.d(t,"s",(function(){return L}));var i=n("1961");function c(){return Object(i["b"])("api/user/info")}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["d"])("api/user/change-password",e)}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["d"])("api/user/send-sms",e)}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["d"])("api/user/change-mobile",e)}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["d"])("api/config/get-user-setting",e)}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(i["d"])("api/config/save-user-setting",e)}function d(){return Object(i["b"])("api/config/init")}function l(){return Object(i["b"])("study/study/has-new")}function f(){return Object(i["b"])("study/study/save-click-log")}function b(){return Object(i["b"])("study/study/lables-has-new")}function p(e){return Object(i["b"])("study/study/lable-list-data?type=".concat(e))}function h(e){return Object(i["b"])("study/study/save-lables-click-log?type=".concat(e))}function g(e,t){return Object(i["b"])("study/study/save-list-click-log?type=".concat(e,"&id=").concat(t))}function m(e){return Object(i["b"])("study/white-paper/list-data",e)}function v(e,t){return Object(i["b"])("study/white-paper/detail?id=".concat(e,"&log_id=").concat(t))}function k(e){return"begin"===e.type?(delete e.type,Object(i["b"])("study/white-paper/save-begin-log",e)):"end"===e.type?(delete e.type,Object(i["b"])("study/white-paper/save-end-log",e)):void 0}function x(e){return Object(i["b"])("study/white-paper/check-item-detail-list",e)}function y(e){return Object(i["b"])("study/white-paper/check-case-list",e)}function O(e){return Object(i["b"])("study/white-paper/problem-list",e)}function _(e){return Object(i["b"])("study/white-paper/problem-check-item-list",e)}function j(e){return Object(i["b"])("study/white-paper/problem-check-item-detail-list",e)}function w(e){return Object(i["b"])("study/white-paper/problem-status-list",e)}function C(e){return Object(i["b"])("study/check-manual/list-data",e)}function z(e){return"begin"===e.type?(delete e.type,Object(i["b"])("study/check-manual/save-begin-log",e)):"end"===e.type?(delete e.type,Object(i["b"])("study/check-manual/save-end-log",e)):void 0}function A(e){return Object(i["b"])("study/check-manual/detail",e)}function S(e){return Object(i["b"])("study/check-manual/problem-list",e)}function D(e){return Object(i["b"])("study/check-case/list-data",e)}function P(e){return Object(i["b"])("study/check-case/check-node-list",e)}function I(e){return Object(i["b"])("study/check-case/check-item-list",e)}function B(e){return Object(i["b"])("study/check-case/case-level-list",e)}function R(e){return"begin"===e.type?(delete e.type,Object(i["b"])("study/check-case/save-begin-log",e)):"end"===e.type?(delete e.type,Object(i["b"])("study/check-case/save-end-log",e)):void 0}function E(e){return Object(i["b"])("study/check-case/detail",e)}function G(e){return Object(i["b"])("study/check-case/problem-list",e)}function T(e){return Object(i["b"])("check-task-api/check-case/list-data",e)}function J(e){return Object(i["b"])("check-task-api/check-case/detail",e)}function L(e){return Object(i["b"])("check-task-api/check-case/problem-list",e)}},dfe9:function(e,t,n){var i=n("5454");t=e.exports=n("690e")(!1),t.push([e.i,"\n.zhkf ._select[data-v-653d0fdd] {\n  padding: 15px;\n  background: url("+i(n("1fb9"))+") no-repeat right center #fff;\n  background-size: 14px 14px;\n  background-origin: content-box;\n}\n.zhkf ._select .title[data-v-653d0fdd] {\n  width: 50%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 15px;\n  color: #202020;\n}\n.zhkf ._select .value[data-v-653d0fdd] {\n  float: right;\n  margin-right: 20px;\n  font-size: 15px;\n  color: #a0a0a0;\n}\n.zhkf .selectable-list[data-v-653d0fdd] {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  max-height: 100%;\n  z-index: 99;\n  background: #ffffff;\n  overflow-y: scroll;\n}\n.zhkf .selectable-list li[data-v-653d0fdd] {\n  position: relative;\n  list-style: none;\n  padding: 15px 0;\n}\n.zhkf .selectable-list li[data-v-653d0fdd]:after {\n  display: block;\n  height: 0;\n  clear: both;\n  content: 'longcz';\n  visibility: hidden;\n}\n.zhkf .selectable-list li .text[data-v-653d0fdd] {\n  font-size: 14px;\n}\n.zhkf .selectable-list li.selected .check-icon[data-v-653d0fdd] {\n  position: relative;\n  background: #0085ff;\n  border-color: #0085ff;\n}\n.zhkf .selectable-list li.selected .check-icon[data-v-653d0fdd]::after {\n  position: absolute;\n  left: 4px;\n  top: 5px;\n  width: 10px;\n  height: 6px;\n  border: 2px solid #fff;\n  border-top: none;\n  border-right: none;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  content: ' ';\n}\n.zhkf .selectable-list .check-icon[data-v-653d0fdd] {\n  float: left;\n  width: 20px;\n  height: 20px;\n  border: 1px solid #e5e5e5;\n  border-radius: 50%;\n  margin: 0 15px;\n}\n.zhkf .selectable-list .text[data-v-653d0fdd] {\n  position: absolute;\n  left: 50px;\n  right: 0;\n  top: 0;\n  border-bottom: 1px solid #e5e5e5;\n  line-height: 50px;\n}\n.zhkf .mask[data-v-653d0fdd] {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: #000;\n  opacity: 0.6;\n  z-index: 98;\n}\n",""])}}]);