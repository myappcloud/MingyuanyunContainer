(window["webpackJsonp_module_entry_zhkf_"]=window["webpackJsonp_module_entry_zhkf_"]||[]).push([["chunk-140c8d40"],{"24fa":function(e,t,n){var a=n("de5c");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("85cb").default;r("4f0d1d48",a,!0,{})},"2c80":function(e,t,n){"use strict";n.r(t);n("6a61");var a=n("2e91"),r=(n("cc57"),n("39bb")),i=n("97528"),o={name:"ComponentName",components:{textBox:r["a"]},data:function(){return{reasons:[],curReason:{},remark:""}},computed:{forced_reason:function(){return"".concat(this.curReason.name,";").concat(this.remark)},query:function(){return this.$route.query}},activated:function(){this.resetPage(),this.getRefuseReason()},methods:{resetPage:function(){this.curReason={},this.remark=""},reasonClk:function(e){this.curReason=e},getRefuseReason:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["d"])();case 2:t=e.sent,this.reasons=t;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),doRefuse:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.curReason.name){e.next=2;break}return e.abrupt("return",this.$toast("请选择拒绝原因"));case 2:return this.$toast.loading({message:"",forbidClick:!0,duration:0}),e.next=5,Object(i["e"])({id:this.query.id,forced_reason:this.forced_reason});case 5:this.$toast("拒绝操作成功"),setTimeout((function(){t.$router.go(-2)}),500);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-view x-rel x-col"},[n("cus-nav-bar",{attrs:{title:"拒绝确认","left-arrow":"",border:!1},on:{"click-left":function(t){return e.$router.go(-1)}}}),e._v(" "),n("div",{staticClass:"detail-content x-grow"},[n("p",{staticClass:"refuse-reason"},[e._v("拒绝原因")]),e._v(" "),n("ul",{staticClass:"expend-select-list"},e._l(e.reasons,(function(t){return n("li",{key:t.id,staticClass:"expend-select-item van-hairline--bottom",class:{selected:t.id===e.curReason.id},on:{click:function(n){return e.reasonClk(t)}}},[e._v("\n        "+e._s(t.name)+"\n      ")])})),0),e._v(" "),n("div",{staticStyle:{"margin-top":"10px"}},[n("text-box",{attrs:{"max-length":100,placeholder:"补充说明"},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}})],1),e._v(" "),n("div",{staticStyle:{margin:"20px 15px"}},[n("app-button",{attrs:{disabled:!e.curReason.name},on:{click:e.doRefuse}},[e._v("确认")])],1)])],1)},c=[],u=n("d082");function d(e){n("9c5a")}var l=!1,p=d,f="data-v-a7e258ba",h=null,x=Object(u["a"])(o,s,c,l,p,f,h);t["default"]=x.exports},"39bb":function(e,t,n){"use strict";n("163d");var a={name:"Textbox",model:{prop:"text",event:"text_change"},props:{placeholder:String,maxLength:Number,text:String},data:function(){return{reason:""}},watch:{text:function(e){this.reason=e}},deactivated:function(){this.reason=""},methods:{sendMsgToParent:function(){this.reason.length>this.maxLength&&(this.reason=this.reason.substring(0,this.maxLength)),this.$emit("listenToChildEvent",this.reason),this.$emit("text_change",this.reason)},textBlur:function(){this.$emit("blur")}}},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"edit-wrapper x-rel"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.reason,expression:"reason"}],staticClass:"edit",attrs:{placeholder:e.placeholder},domProps:{value:e.reason},on:{input:[function(t){t.target.composing||(e.reason=t.target.value)},e.sendMsgToParent],blur:e.textBlur}}),e._v(" "),n("i",{staticClass:"num"},[e._v(e._s(e.maxLength-e.reason.length))])])},i=[],o=n("d082");function s(e){n("24fa")}var c=!1,u=s,d="data-v-18dac14e",l=null,p=Object(o["a"])(a,r,i,c,u,d,l);t["a"]=p.exports},"4e33":function(e,t,n){var a=n("5454");t=e.exports=n("690e")(!1),t.push([e.i,"\n.zhkf .detail-content[data-v-a7e258ba] {\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.zhkf .detail-content .refuse-reason[data-v-a7e258ba] {\n    height: 44px;\n    line-height: 44px;\n    font-size: 16px;\n    color: #606060;\n    padding: 0 15px;\n}\n.zhkf .expend-select-list[data-v-a7e258ba] {\n  background: #fff;\n}\n.zhkf .expend-select-list .expend-select-item[data-v-a7e258ba] {\n    line-height: 20px;\n    padding: 15px;\n    font-size: 15px;\n    font-family: PingFangSC-Regular, PingFang SC;\n    color: #303030;\n    padding-right: 40px;\n}\n.zhkf .expend-select-list .expend-select-item.selected[data-v-a7e258ba] {\n      color: #0085ff;\n}\n.zhkf .expend-select-list .expend-select-item.selected[data-v-a7e258ba]::before {\n        content: '';\n        display: inline-block;\n        width: 12px;\n        height: 12px;\n        background-image: url("+a(n("5b29"))+");\n        background-repeat: no-repeat;\n        background-size: contain;\n        position: absolute;\n        top: 50%;\n        margin-top: -6px;\n        right: 15px;\n}\n",""])},"5b29":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAUCAYAAACTQC2+AAAAAXNSR0IArs4c6QAAAcZJREFUSA21lT8sBEEYxd93XESlEOV1Qq0/WpFoNP6UGho6/xVccbfb0JFoXaJDhMaf8uprlToVhQaR8Hmze5O9nd0NOWuK2/nezL5f3uw3OeC/RlV9VHXX2nfbSW5P1QI8HEKxGHhWFdiWXckNYIyOtIhn1AmZcXwr+SXa11484ZSACQcCCN7zSeRrH75wySSjMYhQESxhUw7/DqrpAM2vaTniQD5Zz2NL6kb/29HtaQnvuKXPsDFrGx9MMssk51brPFFNh5jijkYla9Z6vqKAKUJu2vXOEnk6Qsg1jcyxRUPwQsgkNqQRieEsAtnLxZ53N8VqX8v88FcE9cV0sOe6MY41aTp6UBaC3xCyw/lO+21OvODrBCE3CYjgkZCxLIjxKbSMDcSOdJinM4RcENJrN7aeDyiijHW5d/RYGSaKSUERh3m6QMgJIUVn6z2TlLEqD46eKMOui47O3VBh5jdCfHeBdRM9/CYr8pSylpCi9s6GJV6i0EBX0F0vaYtpWgQyq7+BCZuhn/dkUV7TDLO0OOgnmOAMg5jDtHxkGWbpyWYI71El5YVjQqY7gRivZCJLaD9GwQE2sQwR/ov9xzCwmnp5WH8DfPODPR1n4cwAAAAASUVORK5CYII="},97528:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return c}));var a=n("1961");function r(e){return Object(a["b"])("property-task-api/index/page",e)}function i(e){return Object(a["b"])("property-task-api/index/detail",e)}function o(e){return Object(a["b"])("property-task-api/index/accept",e)}function s(e){return Object(a["b"])("property-task-api/index/refuse",e)}function c(e){return Object(a["b"])("property-task-api/parameter/transfer-reason",e)}},"9c5a":function(e,t,n){var a=n("4e33");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("85cb").default;r("2ed77a23",a,!0,{})},de5c:function(e,t,n){t=e.exports=n("690e")(!1),t.push([e.i,"\n.zhkf .edit-wrapper[data-v-18dac14e] {\n  position: relative;\n  background-color: #fff;\n  padding-bottom: 20px;\n}\n.zhkf .edit-wrapper .edit[data-v-18dac14e] {\n  width: 100%;\n  height: 100px;\n  padding: 18px 15px;\n  border: none;\n  resize: none;\n  font-size: 14px;\n  color: #202020;\n}\n.zhkf .edit-wrapper .num[data-v-18dac14e] {\n  position: absolute;\n  bottom: 10px;\n  right: 14px;\n  line-height: 1;\n  font-size: 14px;\n  color: #a0a0a0;\n}\n",""])}}]);