(window["webpackJsonp_module_entry_gcxt_"]=window["webpackJsonp_module_entry_gcxt_"]||[]).push([["chunk-7475b4c2"],{44547:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("business-detail-view",{attrs:{data:e.data,config:e.config,"biz-type":e.bizType,"change-type":e.changeType}})},i=[],c=n("8e2f"),s=n("db68"),o=n("a23a"),u=n("08eb"),h={name:"JzcConfirmDetail",components:{BusinessDetailView:u["a"]},mixins:[o["a"]],data:function(){return{data:null,bizType:s["b"].store.getValueByKey("biz_type"),changeType:s["b"].store.getValueByKey("change_type")}},methods:{init:function(){var e=this;this.data=null,c["a"].init({bizType:this.bizType,changeType:this.changeType,sheetId:this.sheetId,config:this.config}).then((function(){e.data=c["a"].data})).catch((function(){}))}}},l=h,p=n("c701"),y=Object(p["a"])(l,a,i,!1,null,null,null);t["default"]=y.exports}}]);