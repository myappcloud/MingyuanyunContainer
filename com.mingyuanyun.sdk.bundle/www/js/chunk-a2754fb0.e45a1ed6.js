(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a2754fb0"],{1944:function(t,n,e){},"1fe7":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tenant-list-warpper"},[e("app-header",{attrs:{title:"切换建设单位"}}),e("div",{staticClass:"blank"}),e("div",{staticClass:"tenant-list-content"},[t._l(t.tenantList,(function(n){return e("tenant-item",{key:n.tenantCode,attrs:{name:n.tenantName+"("+n.tenantCode+")"},on:{click:function(e){return t.changeTenant(n)}}},[n.tenantCode===t.currentTenantCode?e("i",{staticClass:"super-app-iconfont super-app-icon-selected light"}):t._e()])})),t.verifyList.length?e("div",{staticClass:"disable-title"},[t._v("申请中的建设单位")]):t._e(),t._l(t.verifyList,(function(n){return e("tenant-item",{key:n.code,attrs:{name:n.tenantName},on:{click:function(e){return t.openVerifyPage(n)}}},[e("div",{class:{"wait-pending-text":n.approveStatus===t.allStatus.waiting,"reject-text":n.approveStatus===t.allStatus.reject}},[t._v(" "+t._s(t.statusText[n.approveStatus])+" ")])])}))],2),e("div",{staticClass:"footer"},[e("app-button",{attrs:{secondary:""},on:{click:t.openBindPage}},[t._v("绑定其他用户")]),e("app-button",{on:{click:t.openAuthPage}},[t._v("申请建设单位认证")])],1),e("van-popup",{style:{height:"45%"},attrs:{"close-on-click-overlay":!1,round:"",position:"bottom"},model:{value:t.show,callback:function(n){t.show=n},expression:"show"}},[e("div",{staticClass:"circle-con"},[e("oval-loading",{attrs:{size:"160",status:t.changeStatus}},[e("div",{staticClass:"circle-text",class:{light:"finish"===t.changeStatus}},["loading"===t.changeStatus?[e("i",{staticClass:"super-app-iconfont super-app-icon-change-light"}),t._v(" 切换中... ")]:"finish"===t.changeStatus?[e("i",{staticClass:"super-app-iconfont super-app-icon-selected"}),t._v(" 切换成功 ")]:"stop"===t.changeStatus?[e("i",{staticClass:"super-app-iconfont super-app-icon-fail"}),t._v(" 切换失败 ")]:t._e()],2)]),"stop"===t.changeStatus?e("div",{staticClass:"retry-btn"},[e("app-button",{staticClass:"cancel-btn",on:{click:function(n){t.show=!1}}},[t._v("取消")]),e("app-button",{on:{click:t.doChange}},[t._v("重试")])],1):t._e()],1)])],1)},i=[],s=(e("51d7"),e("9920")),o=e("5047"),c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"oval-loading",style:{width:t.size+"px",height:t.size+"px"}},[e("svg",{style:{zoom:t.zoom},attrs:{width:38,height:38,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".5",cx:"18",cy:"18",r:"18",stroke:"full"===t.status?t.color:t.layerColor}}),e("path",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status,expression:"status === 'loading'"}],staticClass:"oval-path",attrs:{d:"M36 18c0-9.94-8.06-18-18-18",stroke:t.color}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})],1)])])]),e("div",{staticClass:"oval-content"},[t._t("default")],2)])},r=[],u=(e("4ec5"),e("65ba"),["loading","stop","finish"]),l={props:{size:{type:[Number,String],default:36},color:{type:String,default:"#2C5CF7"},layerColor:{type:String,default:"#EBF1FF"},status:{validator:function(t){return/^\d+$/gi.test(t)?!!u[t]:~u.indexOf(t)}}},data:function(){return{zoom:1}},created:function(){this.zoom=this.size/36}},d=l,p=(e("6182"),e("5d22")),h=Object(p["a"])(d,c,r,!1,null,"3bc201f4",null),f=h.exports,g=e("371d"),v=e("468b"),m=e("6a2c"),C=e("11d2"),T={components:{tenantItem:s["a"],AppButton:o["a"],OvalLoading:f},data:function(){return{show:!1,currentRate:0,tenantList:[],verifyList:[],currentTenantCode:window.TENANT_CONFIG.TENANT_CODE,currentItem:null,clockwise:!0,timer:null,allStatus:C["a"].SSO_APPROVE_STATUS,statusText:C["a"].SSO_APPROVE_STATUS_TEXT,changeStatus:"loading"}},activated:function(){this.init()},methods:{init:function(){var t=this;return this.currentItem=null,this.changeStatus="loading",this.show=!1,this.$toast.loading({duration:0,overlay:!0,forbidClick:!0,loadingType:"spinner",message:"加载中..."}),g["a"].getTenantList().then((function(n){t.$toast.clear(),console.log("list =====> ",n),t.tenantList=n.tenantList||[],t.verifyList=n.verifyTenantList||[],t.currentTenantCode=window.TENANT_CONFIG.TENANT_CODE,console.log(t.currentTenantCode)})).catch((function(){t.$toast.clear(),t.tenantList=[],t.verifyList=[],t.currentTenantCode=window.TENANT_CONFIG.TENANT_CODE}))},doChange:function(){var t=this;return this.show=!0,g["a"].changeTenant(this.currentItem.tenantCode,this.currentItem.tenantName).then((function(){t.changeStatus="finish",t.currentItem=null,console.log("TenantService.changeTenant ===== "),setTimeout((function(){t.show=!1,t.$router.push({path:"/user"})}),500)})).catch((function(){t.changeStatus="stop"}))},changeTenant:function(t){var n=this;if(this.currentTenantCode===t.tenantCode)return!1;this.currentItem=t,this.changeStatus="loading",this.$dialog.confirm({message:"确认切换开发商到【".concat(t.tenantName,"(").concat(t.tenantCode,")】吗？切换后只能处理该开发商业务"),confirmButtonText:"确认切换"}).then((function(){n.doChange(),console.log(t,"item")}))},openAuthPage:function(){v["a"].openPage("/auth/index",{tenantCode:"",tenantName:""})},openBindPage:function(){v["a"].openPage("/bind-user")},openVerifyPage:function(t){return m["a"].token2token(t.tenantCode,!1).then((function(n){v["a"].openPage("/auth/auditing",{token:n,tenantCode:t.tenantCode,tenantName:t.tenantName,showLeftBtn:1})}))}}},_=T,w=(e("3ad5"),Object(p["a"])(_,a,i,!1,null,"0ec20045",null));n["default"]=w.exports},"3ad5":function(t,n,e){"use strict";e("99df")},6182:function(t,n,e){"use strict";e("1944")},9920:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tenant-item van-hairline--bottom",on:{click:function(n){return t.$emit("click")}}},[e("div",{staticClass:"tenant-item-left"},[e("i",{staticClass:"super-app-iconfont",class:t.icons.outside}),e("i",{staticClass:"super-app-iconfont light",class:t.icons.inside})]),e("div",{staticClass:"tenant-item-content"},[t._v(" "+t._s(t.name)+" ")]),t._t("default")],2)},i=[],s={props:{name:String,icons:{type:Object,default:function(){return{outside:"super-app-icon-tenant",inside:"super-app-icon-tenant-light"}}}}},o=s,c=(e("b68a"),e("5d22")),r=Object(c["a"])(o,a,i,!1,null,"4ce225db",null);n["a"]=r.exports},"99df":function(t,n,e){},aab8:function(t,n,e){},b68a:function(t,n,e){"use strict";e("aab8")}}]);