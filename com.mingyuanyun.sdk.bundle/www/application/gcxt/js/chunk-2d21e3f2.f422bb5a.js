(window["webpackJsonp_module_entry_gcxt_"]=window["webpackJsonp_module_entry_gcxt_"]||[]).push([["chunk-2d21e3f2"],{d56a:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("business-detail-view",{attrs:{data:e.data,config:e.config,"biz-type":e.bizType,"change-type":e.changeType}})},i=[],s=n("8e2f"),c=n("db68"),o=n("a23a"),u=n("08eb"),d={name:"AnswerQuestionDetail",components:{BusinessDetailView:u["a"]},mixins:[o["a"]],data:function(){return{data:null,bizType:c["b"].store.getValueByKey("biz_type"),changeType:c["b"].store.getValueByKey("change_type")}},methods:{init:function(){var e=this;s["a"].init({bizType:this.bizType,changeType:this.changeType,sheetId:this.sheetId,config:this.config}).then((function(){e.data=s["a"].data})).catch((function(){}))}}},h=d,p=n("5d22"),l=Object(p["a"])(h,a,i,!1,null,null,null);t["default"]=l.exports}}]);