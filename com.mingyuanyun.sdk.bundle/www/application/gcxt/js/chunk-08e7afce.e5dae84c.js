(window["webpackJsonp_module_entry_gcxt_"]=window["webpackJsonp_module_entry_gcxt_"]||[]).push([["chunk-08e7afce"],{2401:function(e,t,a){"use strict";var i=a("41a4");t["a"]={bizName:"outputvaluehs",procTypeId:3,service:"OutputValueServiceHs",routeName:"OutputValueHs",sheetIdKey:"outputvalue_id",defaultTitle:"产值申报",detail:{getTitle:function(e){return Object(i["a"])(e)},formLayout:"outputvalue_view",subForms:[{id:"workloads",layoutId:"workloads"}]},edit:{formLayout:"outputvalue_edit",defaultSelectBizId:["contract_id"],subForms:[{id:"workloads",layoutId:"workloads"}]}}},a521:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("business-detail-view",{attrs:{data:e.data,config:e.config,"biz-type":e.bizType,"change-type":e.changeType,comps:e.comps}})},o=[],n=a("8e2f"),u=a("db68"),s=a("a23a"),c=a("08eb"),r=a("c0a8"),l=a("2401"),d=a("e200"),p={name:"OutputValueHsDetail",components:{BusinessDetailView:c["a"]},mixins:[s["a"]],data:function(){return{data:null,bizType:u["b"].store.getValueByKey("biz_type"),changeType:u["b"].store.getValueByKey("change_type"),comps:["RelativeInfo","CardHeader","FormDetail","UploadImages","Attachment","PaymentProcess","Flow"],config:l["a"]}},beforeCreate:function(){d["a"].setService(r["a"])},destroyed:function(){d["a"].resetService()},methods:{init:function(){var e=this;n["a"].init({bizType:this.bizType,changeType:this.changeType,sheetId:this.sheetId,config:this.config}).then((function(){e.data=n["a"].data}))}}},y=p,f=a("c701"),h=Object(f["a"])(y,i,o,!1,null,null,null);t["default"]=h.exports}}]);