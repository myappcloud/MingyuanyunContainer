(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-02611c36"],{"1da5":function(e,a,t){"use strict";t("55e5")},2753:function(e,a,t){"use strict";t.r(a);var s=t("a1eb").a,i=(t("1da5"),t("17cc")),n=Object(i.a)(s,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("page-content",{attrs:{title:"退回记录"}},[!e.isLoading&&e.sendBacks.length>1?t("div",{staticClass:"tabs border-bottom"},[t("div",{staticClass:"tabs-scroll"},e._l(e.sendBacks,(function(a,s){return t("div",{key:s,staticClass:"tab",class:{cur:s===e.pageIndex},on:{click:function(a){e.clickTab(s)}}},[e._v("\n        第"+e._s(s+1)+"次\n      ")])})))]):e._e(),e.isLoading?e._e():t("van-swipe",{ref:"content-swipe",attrs:{"initial-swipe":e.initPageIndex,loop:!1,"show-indicators":!1},on:{change:e.changeDetail}},e._l(e.sendBacks,(function(a,s){return t("van-swipe-item",{key:s},[t("scroller",[8!==e.passrateMode?t("item",{attrs:{label:"整改值"}},[t("div",{staticClass:"item-text",attrs:{slot:"right"},slot:"right"},[a.hasRepairValue?t("point-detail-value-template",{attrs:{"point-items":a.pointItems,"passrate-mode":e.passrateMode,"value-type":"repairValue"}}):t("span",{staticClass:"color-gray"},[e._v("\n              未填\n            ")])],1)]):e._e(),a.repairRemark||a.repairPicture.length?t("item",{attrs:{label:a.repairRemark?"备注":"相关照片"}},[t("div",{staticClass:"item-con",attrs:{slot:"right"},slot:"right"},[a.repairRemark?t("div",{staticClass:"item-font"},[e._v(e._s(a.repairRemark))]):e._e(),t("item-img-list",{attrs:{editabled:!1},model:{value:a.repairPicture,callback:function(t){e.$set(a,"repairPicture",t)},expression:"detail.repairPicture"}})],1)]):e._e(),t("user-select",{attrs:{title:"整改人",mode:"view",date:e.formatDate(a.repairDate),editabled:!1},model:{value:a.repair,callback:function(t){e.$set(a,"repair",t)},expression:"detail.repair"}}),t("item",{attrs:{label:"退回原因",text:a.sendbackReason}}),a.sendbackRemark||a.sendbackPicture.length?t("item",{attrs:{label:a.sendbackRemark?"备注":"相关照片"}},[t("div",{staticClass:"item-con",attrs:{slot:"right"},slot:"right"},[a.sendbackRemark?t("div",{staticClass:"item-font"},[e._v("\n              "+e._s(a.sendbackRemark)+"\n            ")]):e._e(),t("item-img-list",{attrs:{editabled:!1},model:{value:a.sendbackPicture,callback:function(t){e.$set(a,"sendbackPicture",t)},expression:"detail.sendbackPicture"}})],1)]):e._e(),t("user-select",{attrs:{title:"复验人",mode:"view",date:e.formatDate(a.reinspectDate),editabled:!1},model:{value:a.reinspect,callback:function(t){e.$set(a,"reinspect",t)},expression:"detail.reinspect"}})],1)],1)}))),t("loading-status",{attrs:{"is-loading":e.isLoading,"is-empty":!e.sendBacks.length,"empty-text":"暂无退回记录"}})],1)}),[],!1,null,"142443c4",null);a.default=n.exports},"28b4":function(e,a,t){"use strict";(function(e){t("163d");var s=t("07d2");a.a={name:"MeasurePointDetailValueTemplate",components:{item:s.a},props:{pointItems:{type:Array},valueType:{type:String},passrateMode:{type:Number}},data:function(){return{}},methods:{hasVal:function(e){return""!==e&&null!=e},pointFilter:function(a,t){return e.filter(a,t)},filterPointLabel:function(a){return e.uniqBy(e.map(a,"label"))}}}}).call(this,t("391c"))},"55e5":function(e,a,t){var s=t("f583");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,t("85cb").default)("29faf577",s,!0,{sourceMap:!1,shadowMode:!1})},a1eb:function(e,a,t){"use strict";(function(e){var s=t("774b"),i=t("07d2"),n=t("cd05"),r=t("d2cb"),l=t("7798"),o=t("6bf2"),c=t.n(o),p=t("e68e");a.a={name:"MeasureDetail",components:{Scroller:s.a,item:i.a,UserSelect:n.a,PointDetailValueTemplate:r.a,ItemImgList:p.a},data:function(){return{pointId:"",isLoading:!0,pageIndex:0,initPageIndex:0,sendBacks:[],passrateMode:""}},activated:function(){this.$router.isBack||(this.pointId=this.$route.params.id,this.loadDetail())},methods:{loadDetail:function(){var a=this;return this.pointId?(this.isLoading=!0,l.a.getPointSendBacks(this.pointId).then((function(t){e.each(t,(function(a){a.hasRepairValue=e.some(a.pointItems,(function(a){return e.some(a.repairValue,(function(e){return""!==e.val&&null!==e.val&&void 0!==e.val}))}))})),a.sendBacks=t})).then((function(){if(!e.isEmpty(a.sendBacks))return l.a.getMeasureProblemIdByPointId(a.sendBacks[0].pointId).then((function(t){return l.a.getPointParentItems(t.measure_problem_id).then((function(t){a.passrateMode=e.isEmpty(t)?"":parseInt(t[0].passrate_mode)}))}))})).then((function(){a.isLoading=!1})).catch((function(e){console.log(e)}))):Promise.resolve()},formatDate:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm";return c()(e).format(a)},clickTab:function(e){this.$refs["content-swipe"].swipeTo(e),this.pageIndex=e},changeDetail:function(e){this.pageIndex=e}}}}).call(this,t("391c"))},c292:function(e,a,t){var s=t("cade");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,t("85cb").default)("5f44715e",s,!0,{sourceMap:!1,shadowMode:!1})},cade:function(e,a,t){(e.exports=t("690e")(!1)).push([e.i,".zjapp .con[data-v-9fdc4a3a]{padding-bottom:12px}.zjapp .point-group[data-v-9fdc4a3a]{display:flex;flex-direction:row}.zjapp .group-value[data-v-9fdc4a3a]{flex:1}",""])},cae0:function(e,a,t){"use strict";t("c292")},d2cb:function(e,a,t){"use strict";var s=t("28b4").a,i=(t("cae0"),t("17cc")),n=Object(i.a)(s,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"con"},[e._l(e.pointItems,(function(a,s){return[1===e.passrateMode||2===e.passrateMode||13===e.passrateMode?[s?[e._v(" / ")]:e._e(),e._l(a[e.valueType],(function(a,i){return[i?[e._v(",")]:e._e(),t("span",{key:s+i,class:{"color-red":a.isExceed}},[e._v("\n          "+e._s(e.hasVal(a.val)?a.val:"空")+"\n        ")])]}))]:e._e(),3===e.passrateMode||16===e.passrateMode?[t("div",{key:s,staticClass:"point-group"},[t("div",{staticClass:"group-value"},[e._l(a[e.valueType],(function(a,s){return[s?[e._v(",")]:e._e(),t("span",{key:s,class:{"color-red":a.isExceed}},[e._v("\n              "+e._s(e.hasVal(a.val)?a.val:"空")+"\n            ")])]}))],2),t("div",{staticClass:"color-gray"},[e._v("设计值"+e._s(a[e.valueType][0].setVal))])])]:e._e(),5===e.passrateMode||14===e.passrateMode?e._l(e.filterPointLabel(a[e.valueType]),(function(i,n){return t("div",{key:s+n,staticClass:"point-group"},[t("div",{staticClass:"group-value"},[e._v("\n          "+e._s(i)+"度：\n          "),e._l(e.pointFilter(a[e.valueType],{label:i}),(function(a,s){return[s?[e._v(",")]:e._e(),t("span",{key:s,class:{"color-red":a.isExceed}},[e._v("\n              "+e._s(e.hasVal(a.val)?a.val:"空")+"\n            ")])]}))],2),t("div",{staticClass:"color-gray"},[e._v("\n          设计值"+e._s(e.pointFilter(a[e.valueType],{label:i})[0].setVal)+"\n        ")])])})):e._e(),6===e.passrateMode||15===e.passrateMode?e._l(e.filterPointLabel(a[e.valueType]),(function(i,n){return t("div",{key:s+n,staticClass:"point-group"},[t("div",{staticClass:"group-value"},[e._v("\n          "+e._s(i)+"：\n          "),e._l(e.pointFilter(a[e.valueType],{label:i}),(function(a,s){return[s?[e._v(",")]:e._e(),t("span",{key:s,class:{"color-red":a.isExceed}},[e._v("\n              "+e._s(e.hasVal(a.val)?a.val:"空")+"\n            ")])]}))],2),t("div",{staticClass:"color-gray"},[e._v("\n          设计值"+e._s(e.pointFilter(a[e.valueType],{label:i})[0].setVal)+"\n        ")])])})):e._e(),7===e.passrateMode?[s?[e._v(" / ")]:e._e(),e._l(a[e.valueType],(function(a,s){return[s?[e._v(",")]:e._e(),t("span",{key:s,class:{"color-red":a.isExceed}},[e._v("\n          "+e._s(e.hasVal(a.val)?a.val:"空")+"\n        ")])]}))]:e._e(),8===e.passrateMode?[s?[e._v(" / ")]:e._e(),e._l(a[e.valueType],(function(a,s){return[s?[e._v(",")]:e._e(),t("span",{key:s,class:{"color-red":a.isExceed}},[e._v("\n          "+e._s(a.val?"合格":"不合格")+"\n        ")])]}))]:e._e(),17===e.passrateMode?[t("div",{key:s,staticClass:"point-group"},[t("div",{staticClass:"group-value"},[t("div",[e._v("\n            高度："),e._l(a[e.valueType].slice(0,2),(function(a,s){return[s?[e._v(",")]:e._e(),t("span",{key:s,class:{"color-red":a.isExceed}},[e._v("\n                "+e._s(e.hasVal(a.val)?a.val:"空")+"\n              ")])]}))],2),t("div",[e._v("\n            水平距离："),e._l(a[e.valueType].slice(2),(function(a,s){return[s?[e._v(",")]:e._e(),t("span",{key:s,class:{"color-red":a.isExceed}},[e._v("\n                "+e._s(e.hasVal(a.val)?a.val:"空")+"\n              ")])]}))],2)]),t("div",{staticClass:"color-gray"},[e._v("设计值 "+e._s(a[e.valueType][0].setVal))])])]:e._e()]}))],2)}),[],!1,null,"9fdc4a3a",null);a.a=n.exports},f583:function(e,a,t){(e.exports=t("690e")(!1)).push([e.i,'.zjapp .tabs[data-v-142443c4]{margin-bottom:3px;height:40px;font-size:0;text-align:center;background-color:#fff;overflow:visible}.zjapp .tabs-scroll[data-v-142443c4]{padding:10px 0;margin:-10px 0;white-space:nowrap;overflow-x:auto}.zjapp .tabs-scroll[data-v-142443c4]::-webkit-scrollbar{display:none}.zjapp .tab[data-v-142443c4]{display:inline-block;padding:10px 15px;line-height:20px;font-size:16px;color:#333;white-space:nowrap}.zjapp .tab.cur[data-v-142443c4]{position:relative;z-index:3;color:#4275e8}.zjapp .tab.cur[data-v-142443c4]:after{content:"";position:absolute;z-index:3;bottom:-3px;left:50%;margin-left:-3px;width:7px;height:7px;border-radius:50%;background-color:#4275e8}.zjapp .van-swipe[data-v-142443c4]{flex:1}[data-v-142443c4] .van-swipe-item{display:flex;flex-direction:column}',""])}}]);