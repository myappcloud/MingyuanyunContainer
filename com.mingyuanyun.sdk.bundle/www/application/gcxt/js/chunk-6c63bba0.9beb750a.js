(window["webpackJsonp_module_entry_gcxt_"]=window["webpackJsonp_module_entry_gcxt_"]||[]).push([["chunk-6c63bba0"],{3192:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"biz-table-groups"},t._l(t.bizTablesConfig,(function(e,n){return a("biz-table",{key:n,staticClass:"biz-table",attrs:{label:e.label,loading:e.loading,finished:e.isEnd,list:t.bizTableDatas[n],count:e.count},on:{onload:function(e){t.getBizTableData(n)}}})})))},r=[],i=(a("5ab2"),a("e10e"),a("cc57"),a("28f8")),s=(a("6d57"),a("6a61"),a("2e91")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"biz-table"},[a("van-cell",{staticClass:"cell",attrs:{value:t.label+"("+t.count+")","is-link":""},on:{click:t.open}},[a("template",{slot:"right-icon"},[a("span",{staticClass:"cell-right-text"},[t._v("详情")]),a("i",{staticClass:"icon_right-arrow iconfont icon-1_you"})])],2),a("popup-page",{directives:[{name:"phy-back",rawName:"v-phy-back",value:{status:t.show,method:"close"},expression:"{status: show, method: 'close'}"}],attrs:{value:t.show}},[a("v-header",{attrs:{slot:"header",title:t.label+"详情","back-action":t.close},slot:"header"}),a("van-list",{staticClass:"sheet-list-wrapper",attrs:{value:t.loading,finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad}},[a("van-collapse",{staticClass:"sheet-list",model:{value:t.openingSheet,callback:function(e){t.openingSheet=e},expression:"openingSheet"}},[t._l(t.list,(function(e,n){return[a("van-collapse-item",{key:n,attrs:{title:"单据"+(n+1),name:n}},t._l(e,(function(e,n){return a("div",{key:n,staticClass:"sheet"},[a("div",{staticClass:"sheet-item"},[a("div",{staticClass:"label"},[t._v(t._s(e.label))]),a("div",{staticClass:"value",domProps:{innerHTML:t.xss(t._s(e.value))}})])])})))]}))],2)],1)],1)],1)},c=[],l=(a("163d"),{name:"BizTable",props:{label:{type:String,default:""},loading:{type:Boolean,default:!1},finished:{type:Boolean,default:!1},count:{type:Number,default:0},list:{type:Array,default:function(){return[]}}},data:function(){return{show:!1,openingSheet:[0]}},watch:{list:{handler:function(t){this.openingSheet=t.map((function(t,e){return e}))},immediate:!0}},methods:{open:function(){this.show=!0},close:function(){this.show=!1},onLoad:function(){this.$emit("onload")}}}),u=l,p=(a("641b"),a("c701")),d=Object(p["a"])(u,o,c,!1,null,"28294225",null),b=d.exports,f=a("82f8"),h=a("f121"),g=a("bc32"),m=a("ab3e"),v=a("da71");function y(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function _(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?y(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var x=function(t){return Object(m["a"])({url:v["a"].get_monthly_statement_statement_item_list,data:_({showLoading:!0},t)})},w=a("5fe8"),z=a("a075");function O(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function k(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?O(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var T=10,j={name:"BizTableGroups",components:{BizTable:b},props:{bizId:{type:String,required:!0},layoutId:{type:String,required:!0}},data:function(){return{bizTablesConfig:[],bizTableDatas:[]}},mounted:function(){this.init()},methods:{init:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.getBizTableLayout());case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getBizTableLayout:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,n,r,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["n"])({codes:[this.layoutId]});case 2:e=t.sent,a=Object(g["a"])(e.data[0].layout,{}),n=a.groups,r=void 0===n?[]:n,this.bizTablesConfig=r.map((function(t){var e=t.biz_type,a=t.change_type,n=void 0===a?"":a,r=t.group_name,i=t.list,s=void 0===i?[]:i,o=s.map((function(t){return t.key})),c={biz_type:e,change_type:n,layout_fields:o};return{query:c,page_index:0,isEnd:!1,loading:!1,count:0,label:r,fieldHeads:s}})),this.bizTableDatas=this.bizTablesConfig.map((function(t){return[]})),this.bizTablesConfig.forEach((function(t,e){i.getBizTableData(e)}));case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getBizTableData:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a,n,r,i,s,o,c,l,u=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=this.bizTablesConfig[e],!a.isEnd&&!a.loading){t.next=3;break}return t.abrupt("return");case 3:return a.page_index++,n=a.query,r=a.page_index,i=a.fieldHeads,a.loading=!0,t.next=8,x(k(k({biz_id:this.bizId},n),{},{page_index:r,page_size:T,showLoading:!0}));case 8:s=t.sent,a.loading=!1,o=s.data,c=s.record_count,l=void 0===c?0:c,a.count=l,this.transfromField(o,i).forEach((function(t){u.bizTableDatas[e].push(t)})),a.isEnd=r*T>=l;case 14:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),transfromField:function(t,e){var a=this;return t.map((function(t){return e.map((function(e){var n=e.key,r=e.name,i=t[n]||"--";return"check_status"===n?i='<span class="'.concat(a.renderColor(t),'">').concat(a.renderStatus(t)).concat(a.renderStatusUser(t),"</span>"):"fq_date"===n&&(i=a.renderTime(i)),{label:r,value:i}}))}))},renderStatus:function(t){var e=Object(h["g"])(),a=t.check_status;return a===h["m"].refuse||a===h["m"]._refuse||("已终止"===t.erp_check_status||"已作废"===t.erp_check_status||"未审核"===t.erp_check_status&&"未审核"===t.gcxt_status)&&t.check_status===h["m"].authorized?e[4]:e[a]},renderStatusUser:function(t){return"1"===t.check_status&&t.sp_user_name?" - "+t.sp_user_name:""},renderColor:function(t){if(t.check_status===h["m"].refuse||t.check_status===h["m"]._refuse||t.check_status===h["m"].cancel||("已终止"===t.erp_check_status||"已作废"===t.erp_check_status||"未审核"===t.erp_check_status&&"未审核"===t.gcxt_status)&&t.check_status==h["m"].authorized)return"color-danger";if(this.bizType===w["a"].MONTHLY_STATEMENT&&t.check_status===h["m"].draft)return"color-warning";switch(t.check_status){case h["m"].draft:return"color-draft";case h["m"].overview:case h["m"].confirm:return"color-warning";case h["m"].authorized:return"color-warning";case h["m"].approval:return"color-success";default:return"color-draft"}},renderTime:function(t){return z["a"].date.beautify(t)}}},C=j,D=(a("6037"),Object(p["a"])(C,n,r,!1,null,"3caf625f",null));e["a"]=D.exports},6037:function(t,e,a){"use strict";a("df3d")},"641b":function(t,e,a){"use strict";a("7564")},"6c70":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("business-detail-view",{attrs:{data:t.data,config:t.config,"biz-type":t.bizType,"change-type":t.changeType,comps:t.comps,"page-title":"月度对账详情"}},[a("biz-table-groups",{staticClass:"component-wrapper",attrs:{slot:"BizTableGroups","layout-id":t.bizTableGroupsLayoutId,"biz-id":t.sheetId},slot:"BizTableGroups"})],1)},r=[],i=a("8e2f"),s=a("db68"),o=a("a23a"),c=a("08eb"),l=a("3192"),u={name:"MonthlyStatementDetail",components:{BusinessDetailView:c["a"],BizTableGroups:l["a"]},mixins:[o["a"]],data:function(){return{data:null,bizType:s["b"].store.getValueByKey("biz_type"),changeType:s["b"].store.getValueByKey("change_type"),bizTableGroupsLayoutId:"monthly_statement_biz_table",comps:["CardHeader","FormDetail","BizTableGroups","Attachment","Flow"]}},methods:{init:function(){var t=this;i["a"].init({bizType:this.bizType,changeType:this.changeType,sheetId:this.sheetId,config:this.config}).then((function(){t.data=i["a"].data})).catch((function(t){console.error(t)}))}}},p=u,d=a("c701"),b=Object(d["a"])(p,n,r,!1,null,null,null);e["default"]=b.exports},7564:function(t,e,a){var n=a("8f6e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("85cb").default;r("98d59a30",n,!0,{sourceMap:!1,shadowMode:!1})},"8f6e":function(t,e,a){e=t.exports=a("690e")(!1),e.push([t.i,".gcxt .cell-right-text[data-v-28294225]{margin-right:5px;font-size:14;color:#9b9b9b}.gcxt .icon_right-arrow[data-v-28294225]{font-size:14px;color:#999}.gcxt .sheet-list-wrapper[data-v-28294225]{background-color:transparent}.gcxt .sheet-item[data-v-28294225]{display:-webkit-box;display:-ms-flexbox;display:flex}.gcxt .sheet-item .label[data-v-28294225]{width:103px;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;padding:8px 5px 8px 15px;font-size:14px;color:#999}.gcxt .sheet-item .value[data-v-28294225]{padding:8px 15px 8px 10px;font-size:14px;color:#000}[data-v-28294225] .van-collapse-item__title{margin-top:10px;background:transparent;padding:6px 15px}[data-v-28294225] .van-collapse-item__title:after{display:none}[data-v-28294225] .van-cell__title{font-size:13px;color:#666}[data-v-28294225] .van-hairline--top,[data-v-28294225] .van-hairline--top-bottom{border:none}[data-v-28294225] .van-hairline--top-bottom:after,[data-v-28294225] .van-hairline--top:after{display:none}[data-v-28294225] .van-collapse-item:not(:last-child){margin-bottom:10px}[data-v-28294225] .van-collapse-item__content{padding:6px 0 6px}[data-v-28294225] .van-collapse-item--border:after{display:none}",""])},b12b:function(t,e,a){e=t.exports=a("690e")(!1),e.push([t.i,".gcxt .biz-table[data-v-3caf625f]{margin-bottom:10px}",""])},df3d:function(t,e,a){var n=a("b12b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("85cb").default;r("1a1c7f1c",n,!0,{sourceMap:!1,shadowMode:!1})}}]);