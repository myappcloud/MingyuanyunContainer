(window["webpackJsonp_module_entry_gcxt_"]=window["webpackJsonp_module_entry_gcxt_"]||[]).push([["chunk-2be421f5"],{"0823":function(t,e,a){e=t.exports=a("690e")(!1),e.push([t.i,".gcxt .card-header-wrapper[data-v-5b4079f1]{position:relative;z-index:1}.gcxt .card-header[data-v-5b4079f1]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;word-break:break-all}.gcxt .i-gongcheng[data-v-5b4079f1]{margin-right:6px;font-size:36px;color:#3492e9;line-height:1}.gcxt .cont-title[data-v-5b4079f1]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;text-align:left;color:#333;font-size:18px}.gcxt .overtime-tip[data-v-5b4079f1]{font-size:20px;margin-right:6px}.gcxt .overtime-tip.overtime-warn[data-v-5b4079f1]{color:#faa304}.gcxt .overtime-tip.overtime-over[data-v-5b4079f1]{color:#ff3b30}.gcxt .signature[data-v-5b4079f1]{position:absolute;right:10px;top:16px}",""])},"0d22":function(t,e,a){e=t.exports=a("690e")(!1),e.push([t.i,".gcxt .biz-table[data-v-3caf625f]{margin-bottom:10px}",""])},"13bb":function(t,e,a){"use strict";a("16bf")},"16bf":function(t,e,a){var n=a("4428");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("85cb").default;r("0cd94c7e",n,!0,{sourceMap:!1,shadowMode:!1})},"18c5":function(t,e,a){t.exports=a.p+"img/auth_sp_2.022bb3b1.png"},"1eb4":function(t,e,a){var n=a("0823");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("85cb").default;r("364e8a3f",n,!0,{sourceMap:!1,shadowMode:!1})},3192:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"biz-table-groups"},t._l(t.bizTablesConfig,(function(e,n){return a("biz-table",{key:n,staticClass:"biz-table",attrs:{label:e.label,loading:e.loading,finished:e.isEnd,list:t.bizTableDatas[n],count:e.count},on:{onload:function(e){t.getBizTableData(n)}}})})))},r=[],i=(a("ac67"),a("32ea"),a("a450"),a("34f5")),o=(a("1bc7"),a("6a61"),a("ed32")),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"biz-table"},[a("van-cell",{staticClass:"cell",attrs:{value:t.label+"("+t.count+")","is-link":""},on:{click:t.open}},[a("template",{slot:"right-icon"},[a("span",{staticClass:"cell-right-text"},[t._v("详情")]),a("i",{staticClass:"icon_right-arrow iconfont icon-1_you"})])],2),a("popup-page",{directives:[{name:"phy-back",rawName:"v-phy-back",value:{status:t.show,method:"close"},expression:"{status: show, method: 'close'}"}],attrs:{value:t.show}},[a("v-header",{attrs:{slot:"header",title:t.label+"详情","back-action":t.close},slot:"header"}),a("van-list",{staticClass:"sheet-list-wrapper",attrs:{value:t.loading,finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad}},[a("van-collapse",{staticClass:"sheet-list",model:{value:t.openingSheet,callback:function(e){t.openingSheet=e},expression:"openingSheet"}},[t._l(t.list,(function(e,n){return[a("van-collapse-item",{key:n,attrs:{title:"单据"+(n+1),name:n}},t._l(e,(function(e,n){return a("div",{key:n,staticClass:"sheet"},[a("div",{staticClass:"sheet-item"},[a("div",{staticClass:"label"},[t._v(t._s(e.label))]),a("div",{staticClass:"value",domProps:{innerHTML:t.xss(t._s(e.value))}})])])})))]}))],2)],1)],1)],1)},c=[],l=(a("e680"),{name:"BizTable",props:{label:{type:String,default:""},loading:{type:Boolean,default:!1},finished:{type:Boolean,default:!1},count:{type:Number,default:0},list:{type:Array,default:function(){return[]}}},data:function(){return{show:!1,openingSheet:[0]}},watch:{list:{handler:function(t){this.openingSheet=t.map((function(t,e){return e}))},immediate:!0}},methods:{open:function(){this.show=!0},close:function(){this.show=!1},onLoad:function(){this.$emit("onload")}}}),u=l,p=(a("641b"),a("5d22")),d=Object(p["a"])(u,s,c,!1,null,"28294225",null),f=d.exports,b=a("82f8"),h=a("f121"),g=a("bc32"),m=a("ab3e"),v=a("da71");function x(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function y(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?x(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var _=function(t){return Object(m["a"])({url:v["a"].get_monthly_statement_statement_item_list,data:y({showLoading:!0},t)})},w=a("5fe8"),O=a("a075");function k(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function z(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?k(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var j=10,T={name:"BizTableGroups",components:{BizTable:f},props:{bizId:{type:String,required:!0},layoutId:{type:String,required:!0}},data:function(){return{bizTablesConfig:[],bizTableDatas:[]}},mounted:function(){this.init()},methods:{init:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.getBizTableLayout());case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getBizTableLayout:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a,n,r,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(b["o"])({codes:[this.layoutId]});case 2:e=t.sent,a=Object(g["a"])(e.data[0].layout,{}),n=a.groups,r=void 0===n?[]:n,this.bizTablesConfig=r.map((function(t){var e=t.biz_type,a=t.change_type,n=void 0===a?"":a,r=t.group_name,i=t.list,o=void 0===i?[]:i,s=o.map((function(t){return t.key})),c={biz_type:e,change_type:n,layout_fields:s};return{query:c,page_index:0,isEnd:!1,loading:!1,count:0,label:r,fieldHeads:o}})),this.bizTableDatas=this.bizTablesConfig.map((function(t){return[]})),this.bizTablesConfig.forEach((function(t,e){i.getBizTableData(e)}));case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getBizTableData:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var a,n,r,i,o,s,c,l,u=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=this.bizTablesConfig[e],!a.isEnd&&!a.loading){t.next=3;break}return t.abrupt("return");case 3:return a.page_index++,n=a.query,r=a.page_index,i=a.fieldHeads,a.loading=!0,t.next=8,_(z(z({biz_id:this.bizId},n),{},{page_index:r,page_size:j,showLoading:!0}));case 8:o=t.sent,a.loading=!1,s=o.data,c=o.record_count,l=void 0===c?0:c,a.count=l,this.transfromField(s,i).forEach((function(t){u.bizTableDatas[e].push(t)})),a.isEnd=r*j>=l;case 14:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),transfromField:function(t,e){var a=this;return t.map((function(t){return e.map((function(e){var n=e.key,r=e.name,i=t[n]||"--";return"check_status"===n?i='<span class="'.concat(a.renderColor(t),'">').concat(a.renderStatus(t)).concat(a.renderStatusUser(t),"</span>"):"fq_date"===n&&(i=a.renderTime(i)),{label:r,value:i}}))}))},renderStatus:function(t){var e=Object(h["g"])(),a=t.check_status;return a===h["m"].refuse||a===h["m"]._refuse||("已终止"===t.erp_check_status||"已作废"===t.erp_check_status||"未审核"===t.erp_check_status&&"未审核"===t.gcxt_status)&&t.check_status===h["m"].authorized?e[4]:e[a]},renderStatusUser:function(t){return"1"===t.check_status&&t.sp_user_name?" - "+t.sp_user_name:""},renderColor:function(t){if(t.check_status===h["m"].refuse||t.check_status===h["m"]._refuse||t.check_status===h["m"].cancel||("已终止"===t.erp_check_status||"已作废"===t.erp_check_status||"未审核"===t.erp_check_status&&"未审核"===t.gcxt_status)&&t.check_status==h["m"].authorized)return"color-danger";if(this.bizType===w["a"].MONTHLY_STATEMENT&&t.check_status===h["m"].draft)return"color-warning";switch(t.check_status){case h["m"].draft:return"color-draft";case h["m"].overview:case h["m"].confirm:return"color-warning";case h["m"].authorized:return"color-warning";case h["m"].approval:return"color-success";default:return"color-draft"}},renderTime:function(t){return O["a"].date.beautify(t)}}},C=T,S=(a("6037"),Object(p["a"])(C,n,r,!1,null,"3caf625f",null));e["a"]=S.exports},4428:function(t,e,a){e=t.exports=a("690e")(!1),e.push([t.i,".gcxt .contract-info{padding:9px 0 10px;background-color:#fff}.gcxt .field-item{display:-webkit-box;display:-ms-flexbox;display:flex}.gcxt .field-label{width:103px;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;padding:8px 5px 8px 15px;font-size:14px;color:#999}.gcxt .field-value{padding:8px 15px 8px 10px;font-size:14px;color:#000}",""])},4484:function(t,e,a){e=t.exports=a("690e")(!1),e.push([t.i,".gcxt .cell-right-text[data-v-28294225]{margin-right:5px;font-size:14;color:#9b9b9b}.gcxt .icon_right-arrow[data-v-28294225]{font-size:14px;color:#999}.gcxt .sheet-list-wrapper[data-v-28294225]{background-color:transparent}.gcxt .sheet-item[data-v-28294225]{display:-webkit-box;display:-ms-flexbox;display:flex}.gcxt .sheet-item .label[data-v-28294225]{width:103px;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;padding:8px 5px 8px 15px;font-size:14px;color:#999}.gcxt .sheet-item .value[data-v-28294225]{padding:8px 15px 8px 10px;font-size:14px;color:#000}[data-v-28294225] .van-collapse-item__title{margin-top:10px;background:transparent;padding:6px 15px}[data-v-28294225] .van-collapse-item__title:after{display:none}[data-v-28294225] .van-cell__title{font-size:13px;color:#666}[data-v-28294225] .van-hairline--top,[data-v-28294225] .van-hairline--top-bottom{border:none}[data-v-28294225] .van-hairline--top-bottom:after,[data-v-28294225] .van-hairline--top:after{display:none}[data-v-28294225] .van-collapse-item:not(:last-child){margin-bottom:10px}[data-v-28294225] .van-collapse-item__content{padding:6px 0 6px}[data-v-28294225] .van-collapse-item--border:after{display:none}",""])},6037:function(t,e,a){"use strict";a("b4de")},"641b":function(t,e,a){"use strict";a("d584")},6607:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("business-edit-view",{attrs:{data:t.data,config:t.config,"biz-type":t.bizType,"change-type":t.changeType,mode:t.mode,comps:t.comps,"page-title":"月度对账详情"}},[t.data?a("card-header",{attrs:{slot:"CardHeader",title:t.data.detail.biz_title},slot:"CardHeader"}):t._e(),t.contractInfo?a("contract-info",{staticClass:"component-wrapper",attrs:{slot:"ContractInfo","contract-info":t.contractInfo},slot:"ContractInfo"}):t._e(),a("biz-table-groups",{staticClass:"component-wrapper",attrs:{slot:"BizTableGroups","layout-id":t.bizTableGroupsLayoutId,"biz-id":t.sheetId},slot:"BizTableGroups"})],1)},r=[],i=a("a262"),o=a("3192"),s=a("b50c"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contract-info"},t._l(t.renderList,(function(e,n){return a("div",{key:n,staticClass:"field-item"},[a("div",{staticClass:"field-label"},[t._v(t._s(e.label))]),a("div",{staticClass:"field-value"},[t._v(t._s(e.text))])])})))},l=[],u=(a("ac67"),a("1bc7"),a("32ea"),a("34f5"));function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){Object(u["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f=[{label:"合同名称",key:"contract_name"},{label:"合同编号",key:"contract_no"},{label:"所属项目",key:"project_name"},{label:"乙方单位",key:"yf_company"}],b={name:"ContractInfo",props:{contractInfo:{type:Object,default:function(){}}},computed:{renderList:function(){var t=this;return f.map((function(e){return d(d({},e),{},{text:t.contractInfo[e.key]||"--"})}))}}},h=b,g=(a("13bb"),a("5d22")),m=Object(g["a"])(h,c,l,!1,null,null,null),v=m.exports,x=a("225c"),y=a("db68"),_=a("3ec3"),w={name:"MonthlyStatementEdit",components:{CardHeader:s["a"],BusinessEditView:i["a"],ContractInfo:v,BizTableGroups:o["a"]},data:function(){return{bizType:y["b"].store.getValueByKey("biz_type"),changeType:y["b"].store.getValueByKey("change_type")||"",data:null,comps:["CardHeader","ContractInfo","BizTableGroups","FormComp","Attachment","SelectPeople","UserSelector"],bizTableGroupsLayoutId:"monthly_statement_biz_table"}},computed:{sheetId:function(){return this.$route.query.id},mode:function(){return this.sheetId?"edit":"add"},config:function(){return _["a"][this.bizType]},isAandoned:function(){return("4"===this.data.detail.check_status||"5"===this.data.detail.check_status||("已终止"===this.data.detail.erp_check_status||"已作废"===this.data.detail.erp_check_status)&&"2"===this.data.detail.check_status)&&this.data.detail.sp_action.length<2},contractInfo:function(){return this.data&&this.data.contracts&&this.data.contracts[0]}},watch:{sheetId:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;x["a"].init({bizType:this.bizType,changeType:this.changeType,sheetId:this.sheetId,params:JSON.parse(this.$route.query.params||"null"),config:this.config}).then((function(e){var a=e;t.data=a})).catch((function(t){console.error(t)}))}}},O=w,k=(a("dc84"),Object(g["a"])(O,n,r,!1,null,"2293639b",null));e["default"]=k.exports},a687:function(t,e,a){t.exports=a.p+"img/invalid.5957e4a0.png"},b4de:function(t,e,a){var n=a("0d22");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("85cb").default;r("034cf8da",n,!0,{sourceMap:!1,shadowMode:!1})},b50c:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header-wrapper"},[n("div",{staticClass:"card-header"},[n("div",{staticClass:"cont-title",domProps:{innerHTML:t.xss(t._s(t.handleText(t.title)))}})]),"6"===t.checkStatus||"1"===t.erpInvaildDisplay?n("div",{staticClass:"signature"},[n("img",{attrs:{width:"74",height:"74",src:a("a687")}})]):t._e(),"3"===t.checkStatus?n("div",{staticClass:"signature"},[t.store.bizType===t.BizKeys.TC_TASK_REPORT?n("img",{attrs:{width:"74",height:"74",src:a("f1ac")}}):n("img",{attrs:{width:"84",height:"74",src:a("e645")}})]):t._e(),t.isAbandoned?n("div",{staticClass:"signature"},[n("img",{attrs:{width:"84",height:"74",src:a("18c5")}})]):t._e()])},r=[],i=a("b893"),o=a("a783"),s=a("5fe8"),c={name:"DetailHeaderLabel",props:{title:{type:String,default:""},warningStatus:{type:String,default:""},checkStatus:{type:String,default:""},erpInvaildDisplay:{type:String,default:""},isAbandoned:{type:Boolean,default:!1}},data:function(){return{store:o["a"],BizKeys:s["a"]}},methods:{handleText:i["f"]}},l=c,u=(a("c49c"),a("5d22")),p=Object(u["a"])(l,n,r,!1,null,"5b4079f1",null);e["a"]=p.exports},c49c:function(t,e,a){"use strict";a("1eb4")},d04e:function(t,e,a){var n=a("e0d50");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("85cb").default;r("744a1c37",n,!0,{sourceMap:!1,shadowMode:!1})},d584:function(t,e,a){var n=a("4484");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("85cb").default;r("5ff1e2b4",n,!0,{sourceMap:!1,shadowMode:!1})},dc84:function(t,e,a){"use strict";a("d04e")},e0d50:function(t,e,a){e=t.exports=a("690e")(!1),e.push([t.i,".gcxt .component-wrapper[data-v-2293639b]{margin-bottom:10px}",""])},e645:function(t,e,a){t.exports=a.p+"img/auth_sp_1.17007aa7.png"},f1ac:function(t,e,a){t.exports=a.p+"img/auth_sp_3.a3379606.png"}}]);