(window["webpackJsonp_module_entry_gcxt_"]=window["webpackJsonp_module_entry_gcxt_"]||[]).push([["chunk-64a83162"],{"2da2":function(e,t,r){"use strict";r("5ab2"),r("6d57"),r("e10e");var o=r("28f8"),n=r("225c");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t["a"]=c({},n["a"])},"7ae6":function(e,t,r){"use strict";r("5ab2"),r("6d57"),r("e10e");var o=r("28f8"),n=(r("e697"),r("a262")),i=r("fd50");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s,u,l={extends:n["a"],data:function(){var e=this;return{formHooks:{afterRelative:function(t,r,o){if("project_id"===o.id){var n=t.find((function(e){return"fq_company"===e.id}));if(n)return n.getBizData().then((function(){var t=n.data,r=e.data.formData.dataModel.fq_company;1===t.length&&(r.value=t[0].value,r.text=t[0].text,r.valueObj=[a({value:r.value},t[0].__orgOption)])})).catch((function(e){console.error(e)}))}return i["a"].resolve()}}}},provide:function(){return{formHooks:this.formHooks}}},p=l,f=r("c701"),d=Object(f["a"])(p,s,u,!1,null,null,null);t["a"]=d.exports},"9a99":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("business-edit-view",{attrs:{data:e.data,config:e.config,"biz-type":e.bizType,"change-type":e.changeType,mode:e.mode,comps:e.comps},on:{"select-biz-change":e.onSelectBizChange},scopedSlots:e._u([{key:"ReceiveSelector",fn:function(t){var o=t.editData,n=t.bindRef;return[r("receive-selector",{ref:"ReceiveSelector",attrs:{sheet:o.detail,list:o.users,"recently-list":o.recentlyUsers["receive_users"],"use-work-group":!0,"work-group":e.workGroup,project_id:e.project_id,multi:!0,"show-search-btn":!0,"before-edit":e.reqNextStep(n,"ReceiveSelector"),"selector-title":"选择责任人",label:"责任人",placeholder:"必选",field:"receive_users"},on:{"update-work-group":e.updateWorkGroup,"delete-work-group":e.deleteWorkGroup},model:{value:e.receiveUserList,callback:function(t){e.receiveUserList=t},expression:"receiveUserList"}})]}},{key:"ConfirmSelector",fn:function(t){var o=t.editData,n=t.bindRef;return[r("receive-selector",{ref:"ConfirmSelector",attrs:{sheet:o.detail,list:o.users,"recently-list":o.recentlyUsers["confirm_users"],"show-search-btn":!0,"before-edit":e.reqNextStep(n,"ConfirmSelector"),"selector-title":"选择审核人",label:"审核人",placeholder:"非必选",field:"confirm_users"},model:{value:e.confirmUserList,callback:function(t){e.confirmUserList=t},expression:"confirmUserList"}})]}}])})},n=[],i=(r("e204"),r("e697"),r("cb6f")),c=r("f67b"),a=r("da71"),s=r("ab3e"),u={name:"TcTaskReportEdit",components:{ReceiveSelector:c["a"]},mixins:[i["a"]],data:function(){return{comps:["ViewTemplate","FormComp","UploadImages","Attachment","SubForms","ReceiveSelector","ConfirmSelector","UserSelector"],receiveUserList:[],confirmUserList:[],workGroup:[],project_id:""}},watch:{receive_work_groups:function(e){this.workGroup=e}},methods:{reqNextStep:function(e,t){var r=this;return e(this.$refs[t]),function(){var e=r.data.formData.dataModel[r.data.defaultSelectBizId],t=function(e){return"选择"===e.substr(0,2)?e.substr(2):e},o=!0;return e&&"project_id"===e.id&&Array.isArray(e.value)&&(o=!!e.value.length),!(e&&!e.value||!o)||(r.sui.toast("请先选择".concat(t(e.label)||"相关业务单据")),!1)}},onSelectBizChange:function(e){var t=this,r=e.id;if("project_id"===r){var o={project_id:e.value,biz_type:this.bizType};if(this.project_id===e.value)return;this.project_id=e.value,Object(s["a"])({url:a["a"].work_group_list,data:o}).then((function(e){t.workGroup=e.data}))}},updateWorkGroup:function(e){var t=e.group_id,r=e.group_name,o=e.groupUser,n=this.workGroup.find((function(e){return e.group_id===t}));n?(n.group_name=r,n.count=o.length):this.workGroup.push({group_id:t,group_name:r,count:o.length})},deleteWorkGroup:function(e){var t=e.group_id,r=this.workGroup.findIndex((function(e){return e.group_id===t}));this.workGroup.splice(r,1)}}},l=u,p=r("c701"),f=Object(p["a"])(l,o,n,!1,null,null,null);t["default"]=f.exports},cb6f:function(e,t,r){"use strict";var o=r("7ae6"),n=r("2da2"),i=r("db68"),c=r("3ec3"),a=r("040f");t["a"]={components:{BusinessEditView:o["a"]},data:function(){return{bizType:i["b"].store.getValueByKey("biz_type"),changeType:i["b"].store.getValueByKey("change_type")||"",data:null,hooks:{afterLayoutRequest:function(e){var t=e.dataModel;"project_id"in t&&(t.project_id.pagingFun=a["a"].pagingFunUserProjects)}}}},computed:{sheetId:function(){return this.$route.query.id},mode:function(){return this.sheetId?"edit":"add"},config:function(){return c["a"][this.bizType]}},watch:{sheetId:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var e=this;n["a"].init({bizType:this.bizType,changeType:this.changeType,sheetId:this.sheetId,params:JSON.parse(this.$route.query.params||"null"),config:this.config,hooks:this.hooks}).then((function(t){var r=t;return e.hooks.afterInit?e.hooks.afterInit(r):r})).then((function(t){e.data=t})).catch((function(e){console.error(e)}))}}}}}]);