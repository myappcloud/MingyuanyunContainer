(window["webpackJsonp_module_entry_zhkf_"]=window["webpackJsonp_module_entry_zhkf_"]||[]).push([["chunk-1b905bfc"],{9298:function(e,t,n){var a=n("a5c6");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("85cb").default;i("1bf4e84e",a,!0,{})},9950:function(e,t,n){"use strict";n.r(t);var a=n("265f"),i={name:"MemorySetting",data:function(){return{isCancel:0,isSendback:0,isClose:0}},created:function(){this.initData()},methods:{initData:function(){this.isCancel=a["a"].getProblemMemorySetting("cancel"),this.isSendback=a["a"].getProblemMemorySetting("sendback"),this.isClose=a["a"].getProblemMemorySetting("close")},cancelSetting:function(e){a["a"].setProblemMemorySetting("cancel",e)},sendbackSetting:function(e){a["a"].setProblemMemorySetting("sendback",e)},closeSetting:function(e){a["a"].setProblemMemorySetting("close",e)}}},c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"memory-setting"},[n("cus-nav-bar",{attrs:{title:"智能记忆设置","left-arrow":"",border:!1},on:{"click-left":function(t){return e.$router.go(-1)}}}),e._v(" "),n("van-cell-group",[n("van-switch-cell",{staticClass:"van-hairline--bottom",attrs:{title:"作废问题时，默认上次的原因和补充说明","active-value":1,"inactive-value":0},on:{change:e.cancelSetting},model:{value:e.isCancel,callback:function(t){e.isCancel=t},expression:"isCancel"}}),e._v(" "),n("van-switch-cell",{staticClass:"van-hairline--bottom",attrs:{title:"退回问题时，默认上次的原因和补充说明","active-value":1,"inactive-value":0},on:{change:e.sendbackSetting},model:{value:e.isSendback,callback:function(t){e.isSendback=t},expression:"isSendback"}}),e._v(" "),n("van-switch-cell",{staticClass:"van-hairline--bottom",attrs:{title:"关闭问题时，默认上次的原因和补充说明","active-value":1,"inactive-value":0},on:{change:e.closeSetting},model:{value:e.isClose,callback:function(t){e.isClose=t},expression:"isClose"}})],1)],1)},s=[],l=n("d082");function o(e){n("9298")}var r=!1,u=o,v="data-v-130cb538",b=null,f=Object(l["a"])(i,c,s,r,u,v,b);t["default"]=f.exports},a5c6:function(e,t,n){t=e.exports=n("690e")(!1),t.push([e.i,"",""])}}]);