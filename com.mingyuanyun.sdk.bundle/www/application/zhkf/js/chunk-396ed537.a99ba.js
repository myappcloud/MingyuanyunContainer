(window["webpackJsonp_module_entry_zhkf_"]=window["webpackJsonp_module_entry_zhkf_"]||[]).push([["chunk-396ed537"],{"269c":function(t,n,e){"use strict";var i={name:"AppButton",props:{disabled:Boolean,secondary:Boolean},computed:{buttonStyle:function(){return[this.disabled&&"disabled",this.secondary?"secondary":"primary"]}}},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a",t._g({staticClass:"app-button",class:t.buttonStyle,attrs:{href:"javascript:void(0);"}},t.$listeners),[t._t("default")],2)},o=[],s=e("d082");function r(t){e("5c53")}var l=!1,c=r,d="data-v-44e13a4d",p=null,f=Object(s["a"])(i,a,o,l,c,d,p);n["a"]=f.exports},"5a4f":function(t,n,e){"use strict";e("5ab2"),e("6d57"),e("e44b"),e("e10e"),e("cc57");var i=e("28f8");function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){Object(i["a"])(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var s={name:"AppInput",model:{prop:"value",event:"change"},props:{type:{type:String,default:"text"},value:{type:String,default:""},name:{type:String,default:""}},computed:{text:{get:function(){return this.value},set:function(t){this.$emit("change",t)}},listeners:function(){return o(o({},this.$listeners),{},{change:function(){}})}},watch:{text:function(t){String(this.name).toLowerCase().indexOf("pwd")<0&&(this.text=t.slice(0,20))}},methods:{onBlur:function(){this.type}}},r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("input",t._g(t._b({directives:[{name:"model",rawName:"v-model.trim",value:t.text,expression:"text",modifiers:{trim:!0}}],staticClass:"app-input",attrs:{type:t.type,name:t.name},domProps:{value:t.text},on:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.$emit("submit")},blur:[function(n){return t.onBlur()},function(n){return t.$forceUpdate()}],input:function(n){n.target.composing||(t.text=n.target.value.trim())}}},"input",t.$attrs,!1),t.listeners))},l=[],c=e("d082");function d(t){e("d18a")}var p=!1,f=d,u="data-v-7ace17fb",b=null,v=Object(c["a"])(s,r,l,p,f,u,b);n["a"]=v.exports},"5c53":function(t,n,e){var i=e("d048");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("85cb").default;a("67289221",i,!0,{})},"5cb1":function(t,n,e){"use strict";e.r(n);e("f548");var i=e("269c"),a=e("5a4f"),o=e("d5ab"),s=e("0938"),r=e("03f7"),l={name:"ForgetPwd",components:{appButton:i["a"],appInput:a["a"]},data:function(){return{pwd:"",confirmPwd:"",pwdType:["password","text"],pwdStyle:["icon-biyan","icon-PageCopy1"],pwdVisible0:0,pwdVisible1:0,zhRegExp:/[\u4E00-\u9FA5\uF900-\uFA2D]/g,level:0,showError:!1}},watch:{pwd:function(t){this.zhRegExp.test(t)&&(t.value=s["a"].toCDB(t.replace(this.zhRegExp,"").replace(/\s+/g,""))),t||(this.showError=!1),this.updatePwdLevel()},confirmPwd:function(t){this.pwd&&(this.showError=this.isRepPwdNotEqualToNewPwd())}},beforeDestroy:function(){clearTimeout(this.timer)},activated:function(){this.pwd="",this.confirmPwd="",this.showError=!1},methods:{updatePwdLevel:function(){this.level=o["c"](this.pwd||""),console.log(this.level)},togglePwdVisibility:function(t){this["pwdVisible".concat(t)]=this["pwdVisible".concat(t)]?0:1},isRepPwdNotEqualToNewPwd:function(){var t=this.pwd||"",n=this.confirmPwd||"";return n&&n!==t},validate:function(t){var n="";return this.pwd?this.confirmPwd?this.isRepPwdNotEqualToNewPwd()?n="两次密码输入不一致，请重新输入":this.level<2&&(n="您设置的密码安全级别过低"):n="请再次输入新密码":n="新密码不能为空",!n||(this.$toast(n),!1)},submit:function(){var t=this;if(!this.validate())return!1;var n=this.pwd;this.$comComps.toast.show("正在处理...");var e=this.$route.query,i=e.code,a=e.number,s=e.validId;o["d"](i,a,n,s).then((function(e){t.$comComps.toast.show("重置密码成功，正在登录..."),r["d"](i,e.account,n,{checkUpdate:!0}).then((function(){t.$comComps.toast.hide()}))})).catch((function(n){t.$comComps.toast.hide(),n&&t.$comComps.toast.show(n,2e3)}))},clearInput:function(t){this[t]=""}}},c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"reset-pwd"},[e("cus-nav-bar",{attrs:{title:"设置新密码","left-arrow":""},on:{"click-left":function(n){return t.$router.go(-1)}}}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"form-control van-hairline--bottom"},[e("app-input",{staticClass:"login-input",attrs:{id:"pwd",name:"pwd",type:t.pwdType[t.pwdVisible0],placeholder:"请设置新密码"},model:{value:t.pwd,callback:function(n){t.pwd=n},expression:"pwd"}}),t._v(" "),e("i",{directives:[{name:"show",rawName:"v-show",value:!!t.pwd,expression:"!!pwd"}],staticClass:"clear-btn iconfont icon-cha",on:{click:function(n){return t.clearInput("pwd")}}}),t._v(" "),e("i",{staticClass:"t-visible iconfont",class:t.pwdStyle[t.pwdVisible0],on:{click:function(n){return t.togglePwdVisibility(0)}}})],1),t._v(" "),e("div",{staticClass:"form-control van-hairline--bottom"},[e("app-input",{staticClass:"login-input",attrs:{id:"confirmPwd",name:"confirmPwd",type:t.pwdType[t.pwdVisible1],placeholder:"请再次输入新密码"},model:{value:t.confirmPwd,callback:function(n){t.confirmPwd=n},expression:"confirmPwd"}}),t._v(" "),e("i",{directives:[{name:"show",rawName:"v-show",value:!!t.confirmPwd,expression:"!!confirmPwd"}],staticClass:"clear-btn iconfont icon-cha",on:{click:function(n){return t.clearInput("confirmPwd")}}}),t._v(" "),e("i",{staticClass:"t-visible iconfont",class:t.pwdStyle[t.pwdVisible1],on:{click:function(n){return t.togglePwdVisibility(1)}}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showError,expression:"showError"}],staticClass:"err-tips"},[t._v("\n      *两次密码输入不一致，请重新输入\n    ")]),t._v(" "),e("div",{staticClass:"tips",class:"level"+t.level},[e("div",{directives:[{name:"show",rawName:"v-show",value:!!t.pwd,expression:"!!pwd"}],staticClass:"flex"},[e("label",[t._v("安全等级")]),t._v(" "),t._m(0)]),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"btn-wrapper"},[e("app-button",{staticClass:"login-btn",attrs:{disabled:!t.pwd||!t.confirmPwd},on:{click:function(n){return t.submit()}}},[t._v("\n        确认并登录\n      ")])],1)])],1)},d=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"right flex"},[e("div",{staticClass:"level"},[e("div",{staticClass:"line"}),t._v("\n            弱\n          ")]),t._v(" "),e("div",{staticClass:"level"},[e("div",{staticClass:"line"}),t._v("\n            中\n          ")]),t._v(" "),e("div",{staticClass:"level"},[e("div",{staticClass:"line"}),t._v("\n            强\n          ")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"flex"},[e("label",[t._v("密码要求")]),t._v(" "),e("div",{staticClass:"right"},[e("p",[t._v("1、密码长度大于8位数；")]),t._v(" "),e("p",[t._v("2、密码由数字、字母、特殊字符组成")])])])}],p=e("d082");function f(t){e("8fd9")}var u=!1,b=f,v="data-v-1b848f8a",h=null,w=Object(p["a"])(l,c,d,u,b,v,h);n["default"]=w.exports},"8fd9":function(t,n,e){var i=e("9a52");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("85cb").default;a("54bfefc6",i,!0,{})},"9a52":function(t,n,e){n=t.exports=e("690e")(!1),n.push([t.i,"\n.zhkf .flex[data-v-1b848f8a] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  color: #a0a0a0;\n  font-size: 14px;\n}\n.zhkf .flex label[data-v-1b848f8a] {\n    margin-right: 10px;\n}\n.zhkf .err-tips[data-v-1b848f8a] {\n  color: #eb544d;\n  font-size: 15px;\n  margin-top: 20px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.zhkf .tips[data-v-1b848f8a] {\n  padding: 15px;\n}\n.zhkf .tips .right[data-v-1b848f8a] {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n.zhkf .tips .level[data-v-1b848f8a] {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    text-align: center;\n    margin-right: 3px;\n    margin-top: 4px;\n}\n.zhkf .tips .level[data-v-1b848f8a]:last-child {\n      margin-right: 0;\n}\n.zhkf .tips .line[data-v-1b848f8a] {\n    border-radius: 2px;\n    height: 10px;\n    background: #dddddd;\n}\n.zhkf .tips.level1 .level:first-child .line[data-v-1b848f8a] {\n    background: #ff5500;\n}\n.zhkf .tips.level2 .level:first-child .line[data-v-1b848f8a],\n  .zhkf .tips.level2 .level:nth-child(2) .line[data-v-1b848f8a] {\n    background: #ffbe00;\n}\n.zhkf .tips.level3 .level:first-child .line[data-v-1b848f8a],\n  .zhkf .tips.level3 .level:nth-child(2) .line[data-v-1b848f8a],\n  .zhkf .tips.level3 .level:last-child .line[data-v-1b848f8a] {\n    background: #74c913;\n}\n.zhkf .content[data-v-1b848f8a] {\n  margin-top: 10px;\n}\n.zhkf .content .form-control[data-v-1b848f8a] {\n    padding: 15px;\n    background: #fff;\n    font-size: 15px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.zhkf .content .form-control .login-input[data-v-1b848f8a] {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n}\n.zhkf .content .clear-btn[data-v-1b848f8a] {\n    color: #bbb;\n}\n.zhkf .content .btn-wrapper[data-v-1b848f8a] {\n    padding: 20px 15px;\n}\n.zhkf .content .text-code-btn[data-v-1b848f8a] {\n    margin-left: 15px;\n    color: #0099ff;\n}\n.zhkf .content .countDown[data-v-1b848f8a] {\n    color: #a0a0a0;\n}\n.zhkf .content .t-visible[data-v-1b848f8a] {\n    color: #bbb;\n    width: 25px;\n    text-align: center;\n    font-size: 10px;\n    margin-left: 15px;\n}\n.zhkf .content .icon-PageCopy1[data-v-1b848f8a] {\n    font-size: 13px;\n}\n",""])},b32e:function(t,n,e){n=t.exports=e("690e")(!1),n.push([t.i,"\n.zhkf .app-input[data-v-7ace17fb] {\n  display: block;\n  border: 0;\n  border-radius: 0;\n  outline: 0;\n  font-size: 14px;\n  background: transparent;\n}\n",""])},d048:function(t,n,e){n=t.exports=e("690e")(!1),n.push([t.i,"\n.zhkf .app-button[data-v-44e13a4d] {\n  display: block;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-width: 120px;\n  padding: 0 40px;\n  border-radius: 23px;\n  font-size: 16px;\n  text-align: center;\n  text-decoration: none;\n}\n.zhkf .app-button.primary[data-v-44e13a4d] {\n    padding: 12px 0;\n    color: white;\n    background: -webkit-gradient(linear, left top, right top, from(#02b8ff), to(#0085ff));\n    background: linear-gradient(90deg, #02b8ff 0%, #0085ff 100%);\n    -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 153, 255, 0.27);\n            box-shadow: 0px 2px 4px 0px rgba(0, 153, 255, 0.27);\n    -webkit-transition: opacity 0.3s ease-in-out;\n    transition: opacity 0.3s ease-in-out;\n}\n.zhkf .app-button.primary.disabled[data-v-44e13a4d] {\n      opacity: 0.5;\n}\n",""])},d18a:function(t,n,e){var i=e("b32e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("85cb").default;a("6599e76d",i,!0,{})}}]);