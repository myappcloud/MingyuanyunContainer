(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21d6187a"],{"312b":function(t,n,e){"use strict";e("5aac")},"5aac":function(t,n,e){},"60de":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"verfify-tenant-list-warpper"},[e("app-header",{attrs:{title:"等待审核"}}),e("div",{staticClass:"blank"}),e("div",{staticClass:"tenant-list-content"},t._l(t.verifyList,(function(n){return e("tenant-item",{key:n.code,attrs:{name:n.tenantName},on:{click:function(e){return t.openVerifyPage(n)}}},[e("div",{class:{"wait-pending-text":n.approveStatus===t.allStatus.waiting,"reject-text":n.approveStatus===t.allStatus.reject}},[t._v(" "+t._s(t.statusText[n.approveStatus])+" ")])])})),1)],1)},i=[],s=(e("402f"),e("9920")),c=e("371d"),o=e("468b"),r=e("6a2c"),u=e("11d2"),l="",d={components:{tenantItem:s["a"]},data:function(){return{verifyList:[],allStatus:u["a"].SSO_APPROVE_STATUS,statusText:u["a"].SSO_APPROVE_STATUS_TEXT}},activated:function(){this.init()},methods:{init:function(){var t=this;return l="",this.$toast.loading({duration:0,overlay:!0,forbidClick:!0,loadingType:"spinner",message:"加载中..."}),c["a"].getTenantList().then((function(n){t.$toast.clear(),console.log("list =====> ",n),t.verifyList=n.verifyTenantList||[]})).catch((function(){t.$toast.clear(),t.verifyList=[]}))},openVerifyPage:function(t){var n=Promise.resolve();return n=l?r["a"].token2token(t.tenantCode,!1,l):r["a"].ticket2token(t.tenantCode,!1),n.then((function(n){l=n.accessToken||n,o["a"].openPage("/auth/auditing",{token:l,tenantCode:t.tenantCode,tenantName:t.tenantName,showLeftBtn:1})}))}}},f=d,p=(e("312b"),e("5d22")),v=Object(p["a"])(f,a,i,!1,null,"18dae712",null);n["default"]=v.exports},9920:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tenant-item van-hairline--bottom",on:{click:function(n){return t.$emit("click")}}},[e("div",{staticClass:"tenant-item-left"},[e("i",{staticClass:"super-app-iconfont",class:t.icons.outside}),e("i",{staticClass:"super-app-iconfont light",class:t.icons.inside})]),e("div",{staticClass:"tenant-item-content"},[t._v(" "+t._s(t.name)+" ")]),t._t("default")],2)},i=[],s={props:{name:String,icons:{type:Object,default:function(){return{outside:"super-app-icon-tenant",inside:"super-app-icon-tenant-light"}}}}},c=s,o=(e("b68a"),e("5d22")),r=Object(o["a"])(c,a,i,!1,null,"4ce225db",null);n["a"]=r.exports},aab8:function(t,n,e){},b68a:function(t,n,e){"use strict";e("aab8")}}]);