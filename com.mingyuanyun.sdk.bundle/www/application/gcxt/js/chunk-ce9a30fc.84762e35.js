(window["webpackJsonp_module_entry_gcxt_"]=window["webpackJsonp_module_entry_gcxt_"]||[]).push([["chunk-ce9a30fc"],{"3af6":function(t,e,i){"use strict";i("5289")},"3fe4":function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"d",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return c}));var a=i("ab3e"),n=i("da71"),s=function(t){return Object(a["a"])({url:n["a"].get_invoice_registration_list,data:t})},r=function(t){return Object(a["a"])({url:n["a"].save_invoice_registration,data:t})},o=function(t){return Object(a["a"])({url:n["a"].get_user_invoice_list,data:t})},c=function(t){return Object(a["a"])({url:n["a"].delete_invoice_registration,data:t})}},5289:function(t,e,i){var a=i("d01e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("85cb").default;n("659d0cc0",a,!0,{sourceMap:!1,shadowMode:!1})},d01e:function(t,e,i){e=t.exports=i("690e")(!1),e.push([t.i,'.gcxt[data-v-dec12752] :export{colorPrimary:#2c5cf7;headerBackgroundColor:#fff;headerTextColor:#333}.gcxt .list-item[data-v-dec12752]{padding:10px 15px 14px}.gcxt .list-item[data-v-dec12752],.gcxt .list-item[data-v-dec12752]:not(.last){position:relative}.gcxt .list-item[data-v-dec12752]:not(.last):before{bottom:0;content:" ";position:absolute;z-index:1;right:0;border-top:1px solid #e7e7e7;-webkit-transform:scaleY(.5);transform:scaleY(.5);left:0;z-index:0;left:15px}.gcxt .list-item .item-title[data-v-dec12752]{margin-bottom:2px;display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;text-overflow:ellipsis;word-break:break-all;font-size:16px}.gcxt .list-item .subtext[data-v-dec12752],.gcxt .list-item .time[data-v-dec12752]{color:#999;font-size:13px;overflow:hidden;white-space:nowrap}.gcxt .list-item .line[data-v-dec12752]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.gcxt .list-item .line+.line[data-v-dec12752]{margin-top:3px}',""])},ee3a:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("invoice-list-view",{attrs:{"biz-type":t.bizType,comps:t.filterComps,"search-placeholder":"合同名称、编号"}})},n=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("extended-single-list-view",t._g(t._b({scopedSlots:t._u([{key:"list-item",fn:function(e){var a=e.info,n=e.key,s=e.isLast,r=e.handleClick;return[i("div",{key:n,staticClass:"list-item",class:{last:s},on:{click:function(t){r(a)}}},[i("div",{staticClass:"item-title"},[t._v(t._s(a.contract_name))]),i("div",{staticClass:"line"},[i("span",{staticClass:"subtext"},[t._v(t._s(a.contract_no))])]),i("div",{staticClass:"line"},[i("span",{staticClass:"subtext"},[t._v("已添加发票金额："+t._s(t._f("formatAmount")(a.total_amount)))]),i("span",{staticClass:"time"},[t._v(t._s(t._f("formatTime")(a.last_biz_time)))])])])]}}])},"extended-single-list-view",Object.assign({},t.$attrs),!1),t.$listeners))},r=[],o=(i("5ab2"),i("e10e"),i("4c09")),c=i("e3ee"),l=(i("1736"),i("6d57"),i("28f8")),d=i("fa90"),u=i("3fe4"),f=i("a075");function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function b(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(Object(i),!0).forEach((function(e){Object(l["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var m=b(b({},d["a"]),{},{methods:b(b({},d["a"].methods),{},{getCount:function(){},loadList:function(){var t=this;if(this.loading)return Promise.resolve();this.page_index++,this.loading=!0;var e={page_index:this.page_index,page_size:this.page_size},i={yf_company:"yf_company_guid",project_ids:"project_id"};Object.entries(this.extraFilterValue).forEach((function(t){var a=Object(c["a"])(t,2),n=a[0],s=a[1].value;e[i[n]]=s}));var a=this.sui.showIndicator();return Object(u["b"])(e).then((function(e){e&&e.success&&(t.dataList=1===t.page_index?Object(o["a"])(e.data):[].concat(Object(o["a"])(t.dataList),Object(o["a"])(e.data)),e.data&&e.data.length<t.page_size&&(t.finished=!0)),t.loading=!1,a.clear()})).catch((function(){t.loading=!1,a.clear()}))}})}),_={name:"InvoiceListView",components:{ExtendedSingleListView:m},filters:{formatTime:function(t){return f["a"].date.beautify(t)},formatAmount:function(t){return"¥"+f["a"].number.format(t,2)}},methods:{}},v=_,g=(i("3af6"),i("c701")),x=Object(g["a"])(v,s,r,!1,null,"dec12752",null),y=x.exports,h=i("db68"),w={name:"InvoiceRegistrationList",components:{InvoiceListView:y},data:function(){return{bizType:h["b"].store.getValueByKey("biz_type"),filterComps:{singleFilters:["project_ids","yf_company"]}}}},j=w,O=Object(g["a"])(j,a,n,!1,null,null,null);e["default"]=O.exports}}]);