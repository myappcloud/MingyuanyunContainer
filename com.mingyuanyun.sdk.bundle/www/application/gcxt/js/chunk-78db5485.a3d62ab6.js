(window["webpackJsonp_module_entry_gcxt_"]=window["webpackJsonp_module_entry_gcxt_"]||[]).push([["chunk-78db5485"],{"17ed":function(t,e,a){e=t.exports=a("690e")(!1),e.push([t.i,".gcxt .user[data-v-b6c3a76e]{background-color:#fff;padding:22px 0 8px 15px;margin-bottom:10px}.gcxt .user-info[data-v-b6c3a76e]{position:relative;padding-left:60px;padding-bottom:20px;margin-bottom:8px;border-bottom:1px solid #f3f3f3}.gcxt .user-header[data-v-b6c3a76e]{position:absolute;width:50px;height:50px;left:0;top:-7px}.gcxt .user-header img[data-v-b6c3a76e]{display:block;width:100%;height:100%}.gcxt .user-name[data-v-b6c3a76e]{font-size:16px}.gcxt .user-phone[data-v-b6c3a76e]{font-size:13px;color:#999}.gcxt .user .icon-_lianxikefu[data-v-b6c3a76e]{position:absolute;right:15px;top:7px;font-size:23px}.gcxt .user-row[data-v-b6c3a76e]{line-height:32px}.gcxt .user-row span[data-v-b6c3a76e]{color:#666;padding-left:25px}.gcxt .user .sp-user[data-v-b6c3a76e]{display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:8px;padding-top:8px;border-top:1px solid #e7e7e7;line-height:32px;position:relative}.gcxt .user .sp-user label[data-v-b6c3a76e]{white-space:nowrap}.gcxt .user .sp-user span[data-v-b6c3a76e]{color:#666;padding-left:38px;padding-right:40px;word-break:break-all}.gcxt .user .identify-status[data-v-b6c3a76e]{position:absolute;width:auto;height:90px;right:24px;top:45px}.gcxt .license-image.img-row[data-v-b6c3a76e]{margin-bottom:0}",""])},"18c5":function(t,e,a){t.exports=a.p+"img/auth_sp_2.022bb3b1.png"},"431a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-group"},[a("div",{staticClass:"page",class:{"page-current":!t.page}},[a("v-header",{attrs:{title:t.text_title}}),a("div",{staticClass:"content"},[a("div",{staticClass:"bar bar-tab content-bottom"},[a("div",{staticClass:"btn-confirm",domProps:{textContent:t._s(t.text_button)},on:{click:t.confirm}})]),a("div",{staticClass:"content-main"},["1"===t.auth_type?a("div",[a("xt-wizard",{attrs:{wizard:t.wizard,current:t.current}})],1):t._e(),"2"===t.auth_type&&t.user?a("div",[a("identify-user",{attrs:{user:t.user}})],1):t._e(),a("div",{staticClass:"project"},[a("div",{staticClass:"project-title",domProps:{textContent:t._s(t.name+"申请的项目("+t.project_count+")")}}),t._l(t.projectList,(function(e){return a("div",{key:e.project,staticClass:"project-item"},[a("div",{staticClass:"project-parent",domProps:{textContent:t._s(e.project_name)}}),t._l(e.children,(function(e){return a("div",{key:e.project_id,staticClass:"project-subItem"},[a("div",{staticClass:"project-child",domProps:{textContent:t._s(e.project_name)}}),a("van-switch",{staticClass:"w60 agree",attrs:{size:"22px"},model:{value:t.identify[e.project_id],callback:function(a){t.$set(t.identify,e.project_id,a)},expression:"identify[child.project_id]"}})],1)}))],2)}))],2)])])],1),a("authorize-reject-reason",{attrs:{pid:"reason",page:t.page,reject:t.reject,"go-back":function(){return t.page=null}}})],1)},r=[],o=(a("a450"),a("af0b")),i=a("72c4"),c=a("9423"),s=a("8e4c"),u={name:"IdentifyProject",components:{IdentifyUser:i["a"],AuthorizeRejectReason:c["a"]},props:{user:Object},data:function(){var t=this.$route.query.auth_type;return{wizard:s["a"],current:s["a"][1],auth_type:t,text_button:"2"===t?"完成":"授权并通过认证",text_title:"2"===t?"项目权限审批":"授权项目",page:"",projectList:[],name:"",project_count:0,identify:{}}},watch:{},mounted:function(){var t=this,e=this.$route.query.auth_id;Object(o["k"])({auth_id:e}).then((function(e){t.projectList=e.data.project,t.name=e.data.name,t.project_count=e.data.project_count}))},methods:{toggle:function(t){var e=t.project_id,a=this.identify[e];this.$set(this.identify,e,!a)},confirm:function(){var t=this,e=this.auth_type,a=this.name,n=this.identify,r=this.$route.query,i=r.auth_id,c=r.role_code,s=r.sp_user_id,u=[];for(var p in n)n[p]&&u.push(p);u.length?Object(o["f"])({auth_id:i,role_code:c,project_id:u,sp_user_id:s}).then((function(e){t.$router.push({path:"/identify/result",query:{auth_id:i,role_code:c}})})):"2"===e?this.sui.confirm("您未授权任何项目，是否确认拒绝".concat(a,"的申请？"),(function(){t.page="reason"})):this.sui.toast("请选择授权项目")},reject:function(t){var e=this,a=this.$route.query,n=a.auth_id,r=a.role_code,i=a.sp_user_id;Object(o["u"])({auth_id:n,role_code:r,sp_user_id:i,reason:t}).then((function(t){e.$router.push("/home/todo")}))}}},p=u,d=(a("90f8"),a("5d22")),l=Object(d["a"])(p,n,r,!1,null,"389219a0",null);e["default"]=l.exports},"4cea":function(t,e,a){"use strict";a("bf88")},"72c4":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.user?n("div",{staticClass:"user"},[n("div",{staticClass:"user-info"},[n("span",{staticClass:"user-header"},[t.user.photo?n("img",{attrs:{src:t.user.photo,alt:""}}):n("img",{attrs:{src:a("e841"),alt:""}})]),n("div",{staticClass:"user-name",domProps:{textContent:t._s(t.user.name)}}),n("div",{staticClass:"user-phone",domProps:{textContent:t._s(t.user.phone)}}),t.user_id!==t.user.user_id?n("a",{staticClass:"iconfont icon-_lianxikefu",attrs:{href:"tel:"+t.user.phone}}):t._e()]),n("div",{staticClass:"user-row role"},[n("label",[t._v("认证身份")]),n("span",{domProps:{textContent:t._s(t.user.role_name)}})]),t.station&&t.user.station_name?n("div",{staticClass:"user-row role"},[n("label",[t._v("认证岗位")]),n("span",{domProps:{textContent:t._s(t.user.station_name)}})]):t._e(),n("div",{staticClass:"user-row time"},[n("label",[t._v("发起时间")]),n("span",{domProps:{textContent:t._s(t.user.create_time)}})]),t.user.auth_count>0||t.user.contract&&t.user.contract.length?n("div",{staticClass:"sp-user"},[n("label",[t._v("审批人")]),n("span",{domProps:{textContent:t._s(t.user.sp_user_name+"("+t.user.sp_user_phone+")")}}),n("a",{staticClass:"iconfont icon-_lianxikefu",attrs:{href:"tel:"+t.user.sp_user_phone}})]):t._e(),1===t.user.sp_status?n("img",{staticClass:"identify-status",attrs:{src:a("e645"),alt:""}}):2===t.user.sp_status?n("img",{staticClass:"identify-status",attrs:{src:a("18c5"),alt:""}}):t._e()]):t._e(),t.user&&t.user.license_image&&t.user.license_image.length?n("upload-images",{staticClass:"license-image img-row",attrs:{value:t.user.license_image,editable:!1}}):t._e()],1)},r=[],o=a("a740"),i=a("7b41"),c={name:"IdentifyUser",components:{UploadImages:i["a"]},props:{user:Object,station:Boolean},data:function(){var t=Object(o["d"])();return{user_id:t.user_id}},methods:{}},s=c,u=(a("4cea"),a("5d22")),p=Object(u["a"])(s,n,r,!1,null,"b6c3a76e",null);e["a"]=p.exports},8456:function(t,e,a){e=t.exports=a("690e")(!1),e.push([t.i,".gcxt .content[data-v-1b24b228]{position:static}.gcxt .reason[data-v-1b24b228]{border:none;resize:none;background-color:#fff;padding:8px 15px;width:100%;height:100px}.gcxt .btn[data-v-1b24b228]{border:none;height:50px;line-height:50px;text-align:center;font-size:16px;width:50%}.gcxt .cancel[data-v-1b24b228]{background-color:#fff;color:#3492e9}.gcxt .confirm[data-v-1b24b228]{color:#fff;background-color:#3492e9}",""])},"8e4c":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return u}));var n,r=a("34f5"),o=a("f121"),i=[{name:"身份认证",route:"/identify/role"},{name:"选择项目授权",route:"/identify/project"}],c=[{name:"身份认证",route:"/identify/role"},{name:"选择合同授权",route:"/identify/contract"}],s=[{name:"身份认证",route:"/identify/role"},{name:"选择项目与供应商",route:"/pages/auth/apply_gys_auth.html",isOldGcxt:!0}],u=(n={},Object(r["a"])(n,o["b"].CONSULTANT,i),Object(r["a"])(n,o["b"].DATA_MNGER,i),Object(r["a"])(n,o["b"].CONTRACT_CLERK,i),Object(r["a"])(n,o["b"].JF_MNGER,i),Object(r["a"])(n,o["b"].JF_WORKER,i),Object(r["a"])(n,o["b"].SUPERVISOR,i),Object(r["a"])(n,o["b"].YF_MNGER,c),Object(r["a"])(n,o["b"].YF_WORKER,c),Object(r["a"])(n,o["b"].JF_CLY,i),Object(r["a"])(n,o["b"].YF_CLY,i),Object(r["a"])(n,o["b"].CLGYS,i),Object(r["a"])(n,o["b"].CLGYSCZ,s),n)},"90f8":function(t,e,a){"use strict";a("ee18")},9423:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("popup-page",{attrs:{value:t.pid===t.page}},[a("v-header",{attrs:{title:"审批意见","back-action":t.goBack}}),a("div",{staticClass:"content"},[a("div",{staticClass:"content-main"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.reason,expression:"reason"}],staticClass:"reason",attrs:{placeholder:"请输入拒绝原因（非必填）"},domProps:{value:t.reason},on:{input:function(e){e.target.composing||(t.reason=e.target.value)}}})])]),a("app-button-group",{attrs:{slot:"footer"},slot:"footer"},[a("app-button",{attrs:{plain:""},on:{click:t.goBack}},[t._v("取消")]),a("app-button",{on:{click:function(e){t.reject(t.reason)}}},[t._v("确定")])],1)],1)},r=[],o=a("e5b9"),i={name:"IdentifyRejectReason",components:{PopupPage:o["a"]},props:{page:String,pid:String,goBack:{type:Function,default:function(){return function(){}}},reject:Function},data:function(){return{reason:""}},watch:{page:function(){this.reason=""}}},c=i,s=(a("faef"),a("5d22")),u=Object(s["a"])(c,n,r,!1,null,"1b24b228",null);e["a"]=u.exports},af0b:function(t,e,a){"use strict";a.d(e,"q",(function(){return s})),a.d(e,"e",(function(){return u})),a.d(e,"m",(function(){return d})),a.d(e,"n",(function(){return l})),a.d(e,"a",(function(){return f})),a.d(e,"p",(function(){return b})),a.d(e,"v",(function(){return _})),a.d(e,"c",(function(){return g})),a.d(e,"w",(function(){return h})),a.d(e,"b",(function(){return x})),a.d(e,"o",(function(){return m})),a.d(e,"t",(function(){return j})),a.d(e,"s",(function(){return v})),a.d(e,"d",(function(){return y})),a.d(e,"j",(function(){return O})),a.d(e,"k",(function(){return w})),a.d(e,"r",(function(){return C})),a.d(e,"f",(function(){return k})),a.d(e,"g",(function(){return P})),a.d(e,"u",(function(){return R})),a.d(e,"l",(function(){return z})),a.d(e,"i",(function(){return E})),a.d(e,"h",(function(){return p}));a("ac67"),a("1bc7"),a("32ea");var n=a("34f5"),r=a("ab3e"),o=a("da71");function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(){return Object(r["a"])({url:o["a"].get_tenant})}function u(t){return Object(r["a"])({url:o["a"].auth_check_tenant,data:t})}function p(t){return Object(r["a"])({url:o["a"].get_role_with_level,data:t})}function d(t){return Object(r["a"])({url:o["a"].get_jf_new_manager_project,data:t})}function l(t){return Object(r["a"])({url:o["a"].get_jf_manager_project,data:t})}function f(t){return Object(r["a"])({url:o["a"].jf_apply_auth,data:c(c({},t),{},{error:!0})})}function b(t){return Object(r["a"])({url:o["a"].get_jf_users,data:t})}function _(t){return Object(r["a"])({url:o["a"].revoke_auth,data:t})}function g(t){return Object(r["a"])({url:o["a"].yf_manager_apply_auth,data:t})}function h(t){return Object(r["a"])({url:o["a"].check_user_role,data:t})}function x(t){return Object(r["a"])({url:o["a"].yf_engineer_apply_auth,data:t})}function m(){return Object(r["a"])({url:o["a"].get_jf_project})}function j(){return Object(r["a"])({url:o["a"].get_yf_user_project})}function v(t){return Object(r["a"])({url:o["a"].get_yf_user_contract,data:t})}function y(t){return Object(r["a"])({url:o["a"].check_project_has_manager,data:t})}function O(t){return Object(r["a"])({url:o["a"].get_auth_detail,data:t})}function w(t){return Object(r["a"])({url:o["a"].get_jf_auth_project,data:t})}function C(t){return Object(r["a"])({url:o["a"].get_yf_auth_contract,data:t})}function k(t){return Object(r["a"])({url:o["a"].empower_for_jf,data:t})}function P(t){return t=c(c({},t),{},{showLoading:!0}),Object(r["a"])({url:o["a"].empower_for_yf,data:t})}function R(t){return t=c(c({},t),{},{showLoading:!0}),Object(r["a"])({url:o["a"].reject_auth,data:t})}function z(t){return Object(r["a"])({url:o["a"].get_sync_jf_contracts,data:t})}function E(t){return Object(r["a"])({url:o["a"].get_sync_yf_contracts,data:t})}},bee0:function(t,e,a){e=t.exports=a("690e")(!1),e.push([t.i,".gcxt .content-main[data-v-389219a0]{position:absolute;left:0;top:0;bottom:50px;width:100%;overflow:auto}.gcxt .content-bottom[data-v-389219a0]{position:absolute;left:0;bottom:1px;width:100%;height:50px;border-top:1px solid #e7e7e7}.gcxt .project-title[data-v-389219a0]{line-height:40px;padding-left:15px;color:#999}.gcxt .project-item[data-v-389219a0]{background-color:#fff;padding-left:15px}.gcxt .project-parent[data-v-389219a0]{line-height:44px;border-bottom:1px solid #f3f3f3}.gcxt .project-subItem[data-v-389219a0]{padding-left:15px;position:relative}.gcxt .project-child[data-v-389219a0]{line-height:44px;border-bottom:1px solid #f3f3f3;position:relative}.gcxt .project .van-switch[data-v-389219a0]{position:absolute;right:10px;top:10px;line-height:22px}.gcxt .btn-confirm[data-v-389219a0]{display:block;width:100%;height:50px;background-color:#3492e9;color:#fff;text-align:center;line-height:50px;border:none;font-size:16px}.gcxt .btn-confirm .iconfont[data-v-389219a0]{display:inline-block;margin-right:7px}",""])},bf88:function(t,e,a){var n=a("17ed");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("85cb").default;r("1f298e98",n,!0,{sourceMap:!1,shadowMode:!1})},c69a:function(t,e,a){var n=a("8456");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("85cb").default;r("12abfbb4",n,!0,{sourceMap:!1,shadowMode:!1})},e645:function(t,e,a){t.exports=a.p+"img/auth_sp_1.17007aa7.png"},e841:function(t,e,a){t.exports=a.p+"img/head.754c7a6f.png"},ee18:function(t,e,a){var n=a("bee0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("85cb").default;r("aa5b5f50",n,!0,{sourceMap:!1,shadowMode:!1})},faef:function(t,e,a){"use strict";a("c69a")}}]);