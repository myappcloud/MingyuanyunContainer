(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aa27dcea"],{"2b9f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-contanier"},[a("indexHeader",{attrs:{titleMaxWidth:t.clientWidth-148}},[a("div",{staticClass:"user-left",attrs:{slot:"header-left"},slot:"header-left"},[t._v(" 我的 ")])]),a("section",{staticClass:"user-wrapper"},[a("card",[a("div",{staticClass:"user-info",on:{click:t.toInfo}},[a("div",{staticClass:"user-avatar"},[t.userInfo.avatarUrl?a("img",{attrs:{src:t.userInfo.avatarUrl}}):t._e()]),a("div",{staticClass:"user-info-content"},[a("div",{staticClass:"user-info-content-name"},[t._v(" "+t._s(t.userInfo.name)+" ")]),a("div",{staticClass:"user-info-content-title"},[t._v(t._s(t.userInfo.title))])]),a("van-icon",{attrs:{name:"arrow"}})],1)]),a("div",{staticClass:"function-list"},t._l(t.settings,(function(e,n){return a("div",{key:n,staticClass:"function-item",on:{click:function(a){return t.toPage(e)}}},[a("div",{staticClass:"function-item-left"},[a("i",{staticClass:"super-app-iconfont",class:e.icons.outside}),a("i",{staticClass:"super-app-iconfont light",class:e.icons.inside})]),a("div",{staticClass:"function-item-content"},[t._v(" "+t._s(e.name)+" ")]),e.value?a("div",{staticClass:"function-item-right-text"},[t._v(" "+t._s(e.value)+" ")]):t._e(),a("van-icon",{attrs:{name:"arrow"}})],1)})),0)],1)],1)},s=[],i=(a("1e6a"),a("d211")),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-card gradient-background"},[t._t("default")],2)},c=[],o={name:"Card"},l=o,u=(a("ba53"),a("5d22")),d=Object(u["a"])(l,r,c,!1,null,null,null),f=d.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"index-header"},[a("div",{staticClass:"header-left"},[t._t("header-left")],2),a("div",{staticClass:"header-right"},[t._t("header-right")],2)])},h=[],p=(a("65ba"),{name:"IndexHeader",props:{type:{type:String,default:"tenant"},titleMaxWidth:{type:Number}},components:{}}),m=p,C=(a("74e7"),Object(u["a"])(m,v,h,!1,null,null,null)),b=C.exports,_=a("4820"),g=a("1f03"),I=a("c325"),x=a("e98e"),w=a("cf6b"),k={components:{Card:f,IndexHeader:b},data:function(){return{settings:[],userInfo:{avatarUrl:"",name:"",title:""}}},computed:Object(i["a"])({},Object(w["c"])({clientWidth:function(t){return t.app.global.clientWidth}})),activated:function(){this.init()},methods:{init:function(){var t=Object(g["getUserContext"])();console.log("user =====> ",t),this.userInfo.avatarUrl=Object(x["getWebViewPath"])(t.avatarPath)||t.avatarUrl||"",this.userInfo.name=t.tenantInfo.tenantName||t.realname||t.nickname||t.username||t.phone||"",this.userInfo.title=t.role,this.settings=_["a"].getMyConfig()},toInfo:function(){this.$router.push({name:"userInfo"})},toPage:function(t){return I["a"].goto(t)}}},j=k,O=(a("90d3"),Object(u["a"])(j,n,s,!1,null,"cb7561a0",null));e["default"]=O.exports},6913:function(t,e,a){},"74e7":function(t,e,a){"use strict";a("6913")},"769b":function(t,e,a){},"90d3":function(t,e,a){"use strict";a("769b")},"96ad":function(t,e,a){},ba53:function(t,e,a){"use strict";a("96ad")}}]);