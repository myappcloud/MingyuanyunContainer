(window["webpackJsonp_module_entry_zhkf_"]=window["webpackJsonp_module_entry_zhkf_"]||[]).push([["chunk-c5e54066"],{"08ec":function(t,e,n){var a=n("41be");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("85cb").default;r("6772140b",a,!0,{})},1671:function(t,e,n){var a=n("23eb");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("85cb").default;r("01dfcc3a",a,!0,{})},"23eb":function(t,e,n){e=t.exports=n("690e")(!1),e.push([t.i,"\n.zhkf .confirm-btn[data-v-51405bbe] {\n  width: 92%;\n  margin: 20px auto 0;\n}\n",""])},"24fa":function(t,e,n){var a=n("de5c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("85cb").default;r("4f0d1d48",a,!0,{})},"33b7":function(t,e,n){"use strict";n.d(e,"h",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"g",(function(){return i})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return s})),n.d(e,"k",(function(){return u})),n.d(e,"l",(function(){return p})),n.d(e,"m",(function(){return d})),n.d(e,"j",(function(){return l})),n.d(e,"i",(function(){return f})),n.d(e,"f",(function(){return h})),n.d(e,"e",(function(){return b})),n.d(e,"d",(function(){return m}));var a=n("1961");function r(t){return Object(a["a"])({url:"check-task-api/check-task-problem-list/child-problem-list",method:"post",data:t})}function o(t){return Object(a["a"])({url:"check-task-api/check-task-problem-void/void",method:"post",data:t})}function i(t){return Object(a["a"])({url:"check-task-api/check-task-problem-activate/activate",method:"post",data:t})}function c(t){return Object(a["a"])({url:"check-task-api/check-task-problem-add/add-child-problem",method:"post",data:t})}function s(t){return Object(a["a"])({url:"check-task-api/check-task-problem-assign/assign",method:"post",data:t})}function u(t){return Object(a["a"])({url:"check-task-api/check-task-problem-return-assign/return-assign",method:"post",data:t})}function p(t){return Object(a["a"])({url:"check-task-api/check-task-problem-review/review-no-pass",method:"post",data:t})}function d(t){return Object(a["a"])({url:"check-task-api/check-task-problem-review/review-pass",method:"post",data:t})}function l(t){return Object(a["a"])({url:"check-task-api/check-task-user/user-list",params:t})}function f(t){return Object(a["a"])({url:"check-task-api/check-task-problem-detail/child-detail",params:t})}function h(t){return Object(a["a"])({url:"check-task-api/check-task-problem-progress/create-child-progress-handing",method:"post",data:t})}function b(t){return Object(a["a"])({url:"check-task-api/check-task-problem-progress/create-child-progress-close",method:"post",data:t})}function m(t){return Object(a["a"])({url:"check-task-api/check-task-problem-progress/create-child-progress-abnormal-close",method:"post",data:t})}},"35a9":function(t,e,n){"use strict";var a={name:"app-button",props:{disabled:Boolean,secondary:Boolean},computed:{buttonStyle:function(){return[this.disabled&&"disabled",this.secondary?"secondary":"primary"]}}},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",t._g({staticClass:"app-button",class:t.buttonStyle,attrs:{href:"javascript:;"}},t.$listeners),[t._t("default")],2)},o=[],i=n("d082");function c(t){n("4e29")}var s=!1,u=c,p="data-v-ea4c4440",d=null,l=Object(i["a"])(a,r,o,s,u,p,d);e["a"]=l.exports},"39bb":function(t,e,n){"use strict";n("163d");var a={name:"Textbox",model:{prop:"text",event:"text_change"},props:{placeholder:String,maxLength:Number,text:String},data:function(){return{reason:""}},watch:{text:function(t){this.reason=t}},deactivated:function(){this.reason=""},methods:{sendMsgToParent:function(){this.reason.length>this.maxLength&&(this.reason=this.reason.substring(0,this.maxLength)),this.$emit("listenToChildEvent",this.reason),this.$emit("text_change",this.reason)},textBlur:function(){this.$emit("blur")}}},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"edit-wrapper x-rel"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.reason,expression:"reason"}],staticClass:"edit",attrs:{placeholder:t.placeholder},domProps:{value:t.reason},on:{input:[function(e){e.target.composing||(t.reason=e.target.value)},t.sendMsgToParent],blur:t.textBlur}}),t._v(" "),n("i",{staticClass:"num"},[t._v(t._s(t.maxLength-t.reason.length))])])},o=[],i=n("d082");function c(t){n("24fa")}var s=!1,u=c,p="data-v-18dac14e",d=null,l=Object(i["a"])(a,r,o,s,u,p,d);e["a"]=l.exports},"41be":function(t,e,n){e=t.exports=n("690e")(!1),e.push([t.i,"\n.zhkf .app-toast[data-v-1b84d5c4] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  text-align: center;\n  z-index: 999999;\n}\n.zhkf .app-toast .app-toast-message[data-v-1b84d5c4] {\n  display: inline-block;\n  min-width: 160px;\n  max-width: 80%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  padding: 10px;\n  color: #fff;\n  border-radius: 4px;\n  font-size: 14px;\n  line-height: 21px;\n  background: rgba(51, 51, 51, 0.5);\n  -webkit-transform: translate(-50%, -50%) translateZ(0);\n          transform: translate(-50%, -50%) translateZ(0);\n}\n",""])},"4e29":function(t,e,n){var a=n("9a2e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("85cb").default;r("ca454eb4",a,!0,{})},"721f":function(t,e,n){"use strict";n("163d");var a={name:"app-toast",props:{message:{type:String,default:""},duration:{type:Number,default:2e3}},model:{prop:"message",event:"hide"},computed:{show:function(){var t=this;return!!this.message&&(setTimeout((function(){return t.$emit("hide","")}),this.duration),!0)}}},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"app-toast"},[n("span",{staticClass:"app-toast-message"},[t._v(t._s(t.message))])]):t._e()},o=[],i=n("d082");function c(t){n("08ec")}var s=!1,u=c,p="data-v-1b84d5c4",d=null,l=Object(i["a"])(a,r,o,s,u,p,d);e["a"]=l.exports},"9a2e":function(t,e,n){e=t.exports=n("690e")(!1),e.push([t.i,'\n@charset "utf-8";\n/**\n *****************************************\n * Created by lifx\n * Created on 2018-04-25 09:04:31\n *****************************************\n */\n/**\n *****************************************\n * 按钮样式\n *****************************************\n */\n.zhkf .app-button[data-v-ea4c4440] {\n  display: block;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-width: 120px;\n  padding: 0 40px;\n  border-radius: 4px;\n  font-size: 16px;\n  text-align: center;\n}\n.zhkf .app-button.primary[data-v-ea4c4440] {\n  padding: 12px 0;\n  color: white;\n  background-image: -webkit-gradient(linear, right top, left top, from(#2567ff), color-stop(98%, #2f9eff));\n  background-image: linear-gradient(-90deg, #2567ff 0%, #2f9eff 98%);\n  -webkit-transition: opacity 0.3s ease-in-out;\n  transition: opacity 0.3s ease-in-out;\n}\n.zhkf .app-button.primary.disabled[data-v-ea4c4440] {\n  opacity: 0.5;\n}\n',""])},ba8f:function(t,e,n){"use strict";n("5ab2"),n("6d57"),n("e44b"),n("e10e");var a=n("28f8"),r=(n("cc57"),n("f2de")),o=n("e048");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e["a"]=function(t){var e=t.name,n=void 0===e?"app":e,a=t.store,i=t.state,s=t.getters,u=t.mutations,p=t.actions,d={};return a&&(d.beforeCreate=function(){return Object(o["a"])(n,c({namespaced:!0},a))}),i&&(d.computed=Object(r["e"])(n,i)),s&&(d.computed=Object(r["c"])(n,s)),u&&(d.methods=Object(r["d"])(n,u)),p&&(d.methods=Object(r["b"])(n,p)),d}},cdfe:function(t,e,n){"use strict";n.d(e,"b",(function(){return i}));n("5ab2"),n("6d57"),n("e44b"),n("e10e");var a=n("28f8");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var i="CHECK_CHILD_PROBLEM";e["a"]={state:{checkedUser:{"整改人":{id:"",name:""},"复验人":{id:"",name:""}},userPageTitle:"",listRefreshFlag:!1,detailData:{}},mutations:{updateCheckedUser:function(t,e){t.checkedUser=o(o({},t.checkedUser),e)},updateUserPageTitle:function(t,e){t.userPageTitle=e},updateListData:function(t){t.listRefreshFlag=!t.listRefreshFlag},updateDetailData:function(t,e){t.detailData=o(o({},t.detailData),e)}}}},de5c:function(t,e,n){e=t.exports=n("690e")(!1),e.push([t.i,"\n.zhkf .edit-wrapper[data-v-18dac14e] {\n  position: relative;\n  background-color: #fff;\n  padding-bottom: 20px;\n}\n.zhkf .edit-wrapper .edit[data-v-18dac14e] {\n  width: 100%;\n  height: 100px;\n  padding: 18px 15px;\n  border: none;\n  resize: none;\n  font-size: 14px;\n  color: #202020;\n}\n.zhkf .edit-wrapper .num[data-v-18dac14e] {\n  position: absolute;\n  bottom: 10px;\n  right: 14px;\n  line-height: 1;\n  font-size: 14px;\n  color: #a0a0a0;\n}\n",""])},e048:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));n("cc57");var a=n("07a4");function r(t,e){return a["a"].registerModule(t,e)}function o(t){a["a"].state[t]&&a["a"].unregisterModule(t)}},eb00:function(t,e,n){"use strict";n.r(e);n("6a61");var a=n("2e91"),r=n("721f"),o=n("35a9"),i=n("39bb"),c=n("33b7"),s=n("85ad"),u=n("ba8f"),p=n("cdfe"),d={components:{appButton:o["a"],appToast:r["a"],textbox:i["a"]},mixins:[Object(u["a"])({name:p["b"],mutations:["updateListData"]})],data:function(){return{reason:"",error:""}},computed:{query:function(){return this.$route.query}},methods:{goBack:function(){this.$router.go(-1)},confirm:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.reason.length){t.next=13;break}return e={id:this.query.id,remark:this.reason},t.prev=2,t.next=5,Object(c["l"])(e);case 5:this.updateListData(),this.$router.go(-1),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](2),this.error=t.t0.errmsg,Object(s["b"])(t.t0);case 13:case"end":return t.stop()}}),t,this,[[2,9]])})));function e(){return t.apply(this,arguments)}return e}(),changeMsgFromChild:function(t){this.reason=t}}},l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-view x-col"},[n("header",{staticClass:"app-header x-lock"},[n("i",{staticClass:"app-nav-left app-nav-back",on:{click:t.goBack}}),t._v(" "),n("span",{staticClass:"app-nav-title"},[t._v("复验不通过")])]),t._v(" "),n("div",{staticClass:"page-content"},[n("textbox",{attrs:{placeholder:"请输入原因(必填）","max-length":"200"},on:{listenToChildEvent:t.changeMsgFromChild}}),t._v(" "),n("app-button",{staticClass:"confirm-btn",attrs:{disabled:!t.reason.length},on:{click:t.confirm}},[t._v("\n      确认\n    ")])],1),t._v(" "),n("app-toast",{model:{value:t.error,callback:function(e){t.error=e},expression:"error"}})],1)},f=[],h=n("d082");function b(t){n("1671")}var m=!1,g=b,k="data-v-51405bbe",v=null,x=Object(h["a"])(d,l,f,m,g,k,v);e["default"]=x.exports}}]);