(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-5606a5ee"],{"06de":function(e,t,a){(e.exports=a("690e")(!1)).push([e.i,".zjapp .page-user[data-v-7488e8a4]{background:#f2f2f2}.zjapp .page-user .van-cell-group[data-v-7488e8a4]{margin:0 0 10px}.zjapp .page-user .van-cell-group .van-field[data-v-7488e8a4]{padding:8px 16px}.zjapp .page-user .van-cell-group .van-field[data-v-7488e8a4] .van-field__control{height:34px;padding:2px 24px 0 0;line-height:16px;color:#111;font-size:14px}",""])},"869d":function(e,t,a){"use strict";a.r(t);var o=a("3bd5"),n=a("e2a7"),i=a("7b81"),r={name:"EditMobile",data:function(){return{mobile:""}},computed:{isAndroid:function(){return this.$store.state.app.isAndroid},isIOS:function(){return this.$store.state.app.isIOS}},activated:function(){this.mobile=o.a.getUser().user_mobile},beforeRouteLeave:function(e,t,a){this.mobile!==o.a.getUser().user_mobile?n.a.confirm("您的手机号码已修改，确定放弃当前修改吗？").then((function(e){e?a():a(!1)})):a()},methods:{submit:function(){var e=this,t=this.mobile;return t?/^1(3|4|5|6|7|8|9)\d{9}$/.test(t)?(n.a.loading("正在修改..."),void i.a.updateMobile(this.mobile).then((function(t){n.a.hideLoading(),n.a.alert("修改手机号码成功"),e.$router.back()}),(function(e){n.a.hideLoading(),n.a.alert(e)}))):n.a.alert("手机号码输入错误"):n.a.alert("手机号码不能为空")}}},s=(a("a478"),a("17cc")),l=Object(s.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page-content",{attrs:{title:"修改手机号码","show-go-root":"My"}},[a("div",{staticClass:"page-user"},[a("van-cell-group",[a("van-field",{staticClass:"border-bottom",attrs:{type:"number",border:!1,clearable:"",placeholder:"输入新手机号码"},model:{value:e.mobile,callback:function(t){e.mobile="string"==typeof t?t.trim():t},expression:"mobile"}})],1),a("app-button-group",[a("app-button",{on:{click:e.submit}},[e._v("\n        提交\n      ")])],1)],1)])}),[],!1,null,"7488e8a4",null);t.default=l.exports},a478:function(e,t,a){"use strict";a("f716")},f716:function(e,t,a){var o=a("06de");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,a("85cb").default)("e405f586",o,!0,{sourceMap:!1,shadowMode:!1})}}]);