(window["webpackJsonp_module_entry_gcxt_"]=window["webpackJsonp_module_entry_gcxt_"]||[]).push([["chunk-0d2852b1"],{5145:function(e,t,i){t=e.exports=i("690e")(!1),t.push([e.i,"[data-v-97ab3be4] .relative-field{background:#00f}[data-v-97ab3be4] .relative-field .tip{margin-top:5px;display:-webkit-box;display:-ms-flexbox;display:flex}",""])},"89dc":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("business-edit-view",{ref:"businessEdit",attrs:{data:e.data,config:e.config,"biz-type":e.bizType,"change-type":e.changeType,mode:e.mode,comps:e.comps}},[i("template",{slot:"footer"},[i("app-button-group",[i("app-button",{on:{click:e.saveContractInvoice}},[e._v("提交")])],1)],1)],2)},a=[],o=(i("5ab2"),i("6d57"),i("e10e"),i("28f8")),r=i("a262"),s=i("225c"),c=i("db68"),u=i("3ec3"),p=i("3fe4"),f=i("7bce");function d(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?d(Object(i),!0).forEach((function(t){Object(o["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var b={name:"InvoiceRegistrationEdit",components:{BusinessEditView:r["a"]},data:function(){return{bizType:c["b"].store.getValueByKey("biz_type"),changeType:c["b"].store.getValueByKey("change_type")||"",data:null,comps:["FormComp","RelativeFieldGroup"]}},computed:{sheetId:function(){return this.$route.query.id},mode:function(){return this.sheetId?"edit":"add"},config:function(){return u["a"][this.bizType]}},watch:{sheetId:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var e=this;s["a"].init({bizType:this.bizType,changeType:this.changeType,sheetId:this.sheetId,params:JSON.parse(this.$route.query.params||"null"),config:this.config}).then((function(t){var i=t;e.data=i}))},saveContractInvoice:function(){var e=this,t=this.data.formData.dataModel,i=f["b"].validate(t);if(!i.result)return this.sui.toast(i.msg);var n=f["b"].getFormValuesForSave(t),a=this.$refs.businessEdit.getFormatRefs().RelativeFieldGroup;if(a){var o=a.validateRequirement();if(o.flag){var r=a.getData(),s=this.sui.showIndicator();return Object(p["d"])(l(l({},n),r)).then((function(){e.sui.toast("发票登记成功"),e.$router.go(-1)})).catch((function(t){t&&t.message&&e.sui.toast(t.message)})).finally((function(){s.clear()}))}this.sui.toast("请添加发票进行发票登记")}else this.sui.toast("缺少添加发票组件，请联系管理员")}}},h=b,y=(i("f508"),i("c701")),g=Object(y["a"])(h,n,a,!1,null,"97ab3be4",null);t["default"]=g.exports},c21d:function(e,t,i){var n=i("5145");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("85cb").default;a("2fbf1bb4",n,!0,{sourceMap:!1,shadowMode:!1})},f508:function(e,t,i){"use strict";i("c21d")}}]);