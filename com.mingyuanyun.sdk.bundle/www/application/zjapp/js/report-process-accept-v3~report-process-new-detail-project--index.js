(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["report-process-accept-v3~report-process-new-detail-project--index"],{"08d45":function(t,e,i){"use strict";i("0f68")},"0f68":function(t,e,i){var n=i("aa87");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i("85cb").default)("f1b15482",n,!0,{sourceMap:!1,shadowMode:!1})},"242a":function(t,e,i){"use strict";var n={name:"Checkbox",props:{semiSelection:{type:Boolean,default:!1},status:{type:String,default:null},value:{type:Boolean,default:!1},text:{type:String,default:""},type:{type:String,default:"circular"}},data:function(){return{}},computed:{iconName:function(){var t="";return"circular"===this.type?t=this.value?"checkbox-checked":"checkbox":"square"===this.type&&(t=this.value?"checkbox-square-checked":"checkbox-square"),t}},methods:{semiClickHandle:function(t){if(t.stopPropagation(),this.semiSelection){var e="partSelected"===this.status||!this.value,i="partSelected"===this.status||e?"fullSelected":null;this.$emit("input",e,i),this.$emit("change",e,i)}else this.$emit("input",!this.value),this.$emit("change",!this.value)}}},a=(i("53e4"),i("17cc")),o=Object(a.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{checkbox:!t.semiSelection,semiCheckbox:t.semiSelection,"semiCheckbox-indeterminate":"partSelected"===t.status,"semiCheckbox-checked":"fullSelected"===t.status},on:{click:function(e){t.semiClickHandle(e)}}},[t.semiSelection?i("span",{staticClass:"semiCheckbox-inner"}):t._e(),t.semiSelection?t._e():i("icon",{attrs:{name:t.iconName}}),t._v(t._s(t.text)+"\n")],1)}),[],!1,null,"afcfdff2",null);e.a=o.exports},"2d42":function(t,e,i){(t.exports=i("690e")(!1)).push([t.i,".zjapp .popup-title[data-v-afd7b744]{display:flex;align-items:center;justify-content:space-between;height:44px;padding:0 15px}.zjapp .popup-title .left-button[data-v-afd7b744],.zjapp .popup-title .right-button[data-v-afd7b744]{font-size:14px;color:#-l66666}.zjapp .popup-title .right-button[data-v-afd7b744]{color:#4981ff}.zjapp .popup-title .title-name[data-v-afd7b744]{font-size:16px;color:#333}.zjapp .popup-content[data-v-afd7b744]{display:flex;height:calc(100% - 44px);overflow:auto}.zjapp .popup-content>div[data-v-afd7b744]{width:100%}.zjapp .popup-content>div[data-v-afd7b744] .list-tree .item{align-items:center}",""])},"2e68":function(t,e,i){"use strict";var n=i("c340").a,a=(i("08d45"),i("17cc")),o=Object(a.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("van-popup",{style:{width:"100%",height:"100%"},attrs:{position:"right","get-container":"body"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("page-content",{class:{"iOS-bezel-less":t.isIOSBezelLess},attrs:{"show-bar-left":"",title:"筛选","on-close":t.backEvent}},[i("div",{staticClass:"filter-wrap"},[i("div",{staticClass:"title"},[t._v("楼栋")]),i("div",{staticClass:"button-box"},t._l(t.buildList,(function(e,n){return i("div",{key:n,staticClass:"section",class:{active:t.currentBuildIsActive(e)},on:{click:function(i){t.buildChange(e)}}},[t._v(t._s(e.name))])})))]),i("div",{staticClass:"filter-wrap"},[i("div",{staticClass:"title"},[t._v("报验时间")]),i("div",{staticClass:"button-box date-box"},t._l(t.dateList,(function(e,n){return i("div",{key:n,staticClass:"date",class:{active:e.value===t.dateType},on:{click:function(i){t.dateTagChange(e)}}},[t._v(t._s(e.label))])})))]),i("div",{staticClass:"filter-wrap"},[i("div",{staticClass:"title"},[t._v("状态")]),i("div",{staticClass:"button-box date-box"},t._l(t.statusOptions,(function(e,n){return i("div",{key:n,staticClass:"date",class:{active:t.currentStatus.value===e.value},on:{click:function(i){t.statusChange(e)}}},[t._v(t._s(e.label))])})))]),i("div",{staticClass:"filter-wrap"},[i("div",{staticClass:"title"},[t._v("工序 "),i("a",{staticClass:"select-button",on:{click:t.openCheckItem}},[t._v("选择工序")])]),i("div",{staticClass:"button-box"},t._l(t.currentCheckList,(function(e,n){return i("div",{key:n,staticClass:"section process"},[t._v(t._s(e.name)+"\n          "),i("van-icon",{attrs:{name:"cross"},on:{click:function(e){t.removeProcess(n)}}})],1)})))])]),i("app-button-group",{attrs:{"fixed-bottom":""}},[i("app-button",{on:{click:t.onConfirm}},[t._v("\n      确认\n    ")])],1),i("van-popup",{style:{height:"40%"},attrs:{position:"bottom","get-container":"body",round:""},model:{value:t.showTime,callback:function(e){t.showTime=e},expression:"showTime"}},[i("div",{staticClass:"popup-toolbar bg-white border-bottom"},[i("div",{staticClass:"popup-cancel",on:{click:function(e){t.showTime=!1}}},[t._v("取消")]),i("div",{staticClass:"popup-title"},[t._v("筛选")]),i("div",{staticClass:"popup-confirm",on:{click:t.selectDate}},[t._v("确定")])]),i("div",{staticClass:"tabs-date bg-white"},[i("div",{staticClass:"tabs-start-date",class:{"filter-date-current":"start"===t.type},on:{click:function(e){t.toggleTime("start")}}},[t._v("\n        "+t._s(t.moment(t.start).format("YYYY-MM-DD"))+"\n      ")]),i("div",[t._v("~")]),i("div",{staticClass:"tabs-start-date",class:{"filter-date-current":"end"===t.type},on:{click:function(e){t.toggleTime("end")}}},[t._v("\n        "+t._s(t.moment(t.end).format("YYYY-MM-DD"))+"\n      ")])]),i("van-datetime-picker",{attrs:{type:"date","show-toolbar":!1,"min-date":t.minDate,"max-date":t.maxDate},on:{change:function(e){t.customDate(t.currentDate)}},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1),i("check-item-picker",{ref:"check-item-picker",attrs:{title:"工序"},on:{selected:t.selectedCheckItem}})],1)}),[],!1,null,"e6fd62d4",null);e.a=o.exports},"3ea4":function(t,e,i){(t.exports=i("690e")(!1)).push([t.i,'.zjapp .tree-icon[data-v-792f710a]{position:relative;width:20px;height:30px;line-height:34px;color:#c8c8c8;font-size:26px}.zjapp .color-theme[data-v-792f710a]{position:relative;top:6px}.zjapp .icon-dropdown[data-v-792f710a]:before,.zjapp .icon-dropright[data-v-792f710a]:before{content:"";position:absolute;width:0;height:0;border:6px solid #c8c8c8}.zjapp .icon-dropdown[data-v-792f710a]:before{top:12px;left:0;border-left-color:transparent}.zjapp .icon-dropdown[data-v-792f710a]:before,.zjapp .icon-dropright[data-v-792f710a]:before{border-right-color:transparent;border-bottom-color:transparent}.zjapp .icon-dropright[data-v-792f710a]:before{top:8.5px;left:4px;border-top-color:transparent}.zjapp .list-tree[data-v-792f710a]{position:relative}.zjapp .tree-checkbox[data-v-792f710a]{position:absolute;right:0;top:0;padding:14px 16px}.zjapp .checkBox-right-padding[data-v-792f710a]{padding-right:50px}',""])},"4a69":function(t,e,i){"use strict";i("571f")},"53e4":function(t,e,i){"use strict";i("75b9")},"571f":function(t,e,i){var n=i("3ea4");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i("85cb").default)("0f7a5f2a",n,!0,{sourceMap:!1,shadowMode:!1})},"5fb8":function(t,e,i){"use strict";var n=i("b16d").a,a=(i("d68d"),i("17cc")),o=Object(a.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-popup",{style:{height:"70%"},attrs:{round:"",position:"bottom","get-container":"body"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("div",{staticClass:"popup-title van-hairline--bottom"},[i("div",{staticClass:"left-button",on:{click:function(e){t.show=!1}}},[t._v("取消")]),i("div",{staticClass:"title-name"},[t._v(t._s(t.title))]),i("div",{staticClass:"right-button",on:{click:t.confirm}},[t._v("确定")])]),i("scroller",{staticClass:"popup-content"},[i("tree",{attrs:{data:t.options,"is-checkbox":!0},on:{onSelect:t.onSelect}})],1)],1)],1)}),[],!1,null,"afd7b744",null);e.a=o.exports},"75b9":function(t,e,i){var n=i("e5a0");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i("85cb").default)("417e698a",n,!0,{sourceMap:!1,shadowMode:!1})},7607:function(t,e,i){var n=i("2d42");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i("85cb").default)("3a0bed50",n,!0,{sourceMap:!1,shadowMode:!1})},"774b":function(t,e,i){"use strict";var n=i("d18d").a,a=(i("b225"),i("17cc")),o=Object(a.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"scroll-warp",staticClass:"scroll-warp",class:{"scroll-warp-pulling":t.pulling,"scroll-warp-complete":!t.hasNext&&!t.isEmpty,"scroll-warp-empty":t.isEmpty},style:{"padding-bottom":t.numberKeyboardCoverHeight+"px"},on:{scroll:t.onScroll,touchstart:t.onTouchstart,touchmove:t.onTouchmove,touchend:t.onTouchend}},[t.allowPullDown?i("div",{staticClass:"pull-refresh-warp",style:{height:t.pullDist+"px"}},[i("div",{staticClass:"pull-refresh"},[i("div",{staticClass:"animation-refresher",class:{refreshing:t.refreshing}}),t.updateTime?i("p",{staticClass:"pull-refresh-date"},[t._v("最后成功同步："+t._s(t.updateTime))]):t._e()])]):t._e(),t._t("default"),t.loading?i("div",{staticClass:"page-loading"},[i("svg",{staticClass:"svg-loading",attrs:{viewBox:"0 0 80 80"}},[i("circle",{attrs:{cx:"40",cy:"40",r:"36"}})])]):t._e(),t.hasNext||t.isEmpty?t._e():[t.$slots.end?t._t("end"):t._e(),!t.$slots.end&&t.endText?i("div",{staticClass:"end-text"},[t._v("\n      "+t._s(t.endText)+"\n    ")]):t._e()]],2)}),[],!1,null,"2b1a346c",null);e.a=o.exports},"9d55":function(t,e,i){(t.exports=i("690e")(!1)).push([t.i,'.zjapp .scroll-warp[data-v-2b1a346c]{flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.zjapp .scroll-warp-pulling[data-v-2b1a346c]{overflow:hidden}.zjapp .scroll-warp-complete[data-v-2b1a346c]:after{content:"";display:block;height:100px}.zjapp .scroll-warp-empty[data-v-2b1a346c]{display:flex;flex-direction:column}.zjapp .pull-refresh-warp[data-v-2b1a346c]{position:relative;height:0;overflow:hidden}.zjapp .pull-refresh[data-v-2b1a346c]{position:absolute;left:0;bottom:0;height:70px;width:100%;padding:6px;text-align:center}.zjapp .pull-refresh-date[data-v-2b1a346c]{margin-top:4px;height:16px;line-height:16px;font-size:12px;color:#bcbcbc}.zjapp .page-loading[data-v-2b1a346c]{padding:10px;text-align:center}.zjapp .end-text[data-v-2b1a346c]{color:#c8c8c8;background:#f4f4f4;position:relative;line-height:76px;height:76px;text-align:center}.zjapp .end-text[data-v-2b1a346c]:after,.zjapp .end-text[data-v-2b1a346c]:before{content:"";position:absolute;width:48px;height:1px;background:#e4e4e4;top:50%;margin-top:-1px}.zjapp .end-text[data-v-2b1a346c]:after{left:50%;transform:translateX(-92px)}.zjapp .end-text[data-v-2b1a346c]:before{right:50%;transform:translateX(90px)}.zjapp .end-slot[data-v-2b1a346c]{padding:30px;line-height:18px;text-align:center;color:#c8c8c8}',""])},a57f:function(t,e,i){"use strict";var n=i("c2e0").a,a=(i("4a69"),i("17cc")),o=Object(a.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list,(function(e,n){return i("div",{key:n,staticClass:"list-tree"},[i("item",{class:{"checkBox-right-padding":t.isCheckbox},attrs:{border:"bottom"},on:{click:function(i){t.itemClick(e)}}},[t._l(t.blanks,(function(t,e){return i("div",{key:e,staticClass:"tree-blank"})})),i("div",{class:{"tree-icon":!0,"icon-dropdown":e.children&&e.children.length&&t.openSet[e.id],"icon-dropright":e.children&&e.children.length&&!t.openSet[e.id]}}),i("div",{class:{"item-text":!0,"fw-b":0===t.level},domProps:{innerHTML:t._s(t.keywordFilter(e.name))}}),e.children&&e.children.length||!t.isSelected(e)?t._e():i("icon",{staticClass:"color-theme",attrs:{name:"qualified"}})],2),t.isCheckbox?i("div",{staticClass:"tree-checkbox"},[i("checkbox",{attrs:{status:e.status,value:e.checked,"semi-selection":!0,type:"square"},on:{change:function(i){t.checkboxChange(arguments,e)}}})],1):t._e(),e.children&&e.children.length&&t.openSet[e.id]?[i("tree",{attrs:{data:e.children,level:t.level+1,keyword:t.keyword,selected:t.selected,"is-checkbox":t.isCheckbox},on:{onSelect:t.onSelect}})]:t._e()],2)})))}),[],!1,null,"792f710a",null);e.a=o.exports},aa87:function(t,e,i){(t.exports=i("690e")(!1)).push([t.i,".zjapp .layout-main[data-v-e6fd62d4]{height:calc(100% - 50px)}.zjapp .layout-main.iOS-bezel-less[data-v-e6fd62d4]{height:calc(100% - 60px)}[data-v-e6fd62d4] .layout-content{background:#fff;overflow:auto}[data-v-e6fd62d4] .layout-content .filter-wrap{margin:0 0 10px 0;padding:15px 15px 0}[data-v-e6fd62d4] .layout-content .filter-wrap .title{font-size:14px;font-weight:400;color:#999;line-height:20px;margin:0 0 14px}[data-v-e6fd62d4] .layout-content .filter-wrap .title .select-button{float:right;color:#4275e8}[data-v-e6fd62d4] .layout-content .filter-wrap .button-box{display:flex;flex-flow:wrap}[data-v-e6fd62d4] .layout-content .filter-wrap .button-box.date-box{justify-content:space-between}[data-v-e6fd62d4] .layout-content .filter-wrap .button-box .section{height:28px;line-height:28px;padding:0 12px;border-radius:100px;border:1px solid #dcdcdc;font-size:14px;font-weight:400;color:#666;margin:0 10px 10px 0;max-width:300px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}[data-v-e6fd62d4] .layout-content .filter-wrap .button-box .section.active{background:#4275e8;border-color:#4275e8;color:#fff}[data-v-e6fd62d4] .layout-content .filter-wrap .button-box .date{flex:0 0 30%;height:26px;line-height:26px;text-align:center;border-radius:100px;margin:0 5px 10px 0;color:#666;border:1px solid #dcdcdc}[data-v-e6fd62d4] .layout-content .filter-wrap .button-box .date.active{background:#4275e8;color:#fff;border-color:#4275e8}[data-v-e6fd62d4] .layout-content .filter-wrap .button-box .process{background:#ededed;border:none}[data-v-e6fd62d4] .layout-content .filter-wrap .button-box .process .van-icon{font-size:12px}.zjapp .popup-toolbar[data-v-e6fd62d4]{position:-webkit-sticky;position:sticky;width:100%;top:0;z-index:100;height:46px;line-height:46px}.zjapp .popup-toolbar div[data-v-e6fd62d4]{position:absolute}.zjapp .popup-toolbar .popup-cancel[data-v-e6fd62d4]{left:15px;font-size:14px;color:#999}.zjapp .popup-toolbar .popup-title[data-v-e6fd62d4]{left:50%;transform:translateX(-50%);-webkit-transform:translateX(-50%);font-size:16px;color:#333}.zjapp .popup-toolbar .popup-confirm[data-v-e6fd62d4]{right:10px;font-size:14px;color:#4275e8}.zjapp .tabs-date[data-v-e6fd62d4]{display:flex;flex-direction:row;justify-content:center;position:-webkit-sticky;position:sticky;top:46px;z-index:100;padding:6px 0}.zjapp .tabs-date div[data-v-e6fd62d4]{height:32px;line-height:32px;text-align:center}.zjapp .tabs-date div[data-v-e6fd62d4]:first-child,.zjapp .tabs-date div[data-v-e6fd62d4]:last-child{width:160px;color:#666;font-size:14px;border:1px solid #ececec;border-radius:16px}.zjapp .tabs-date div[data-v-e6fd62d4]:nth-child(2){padding:0 7px}.zjapp .tabs-date .filter-date-current[data-v-e6fd62d4]{border:1px solid #4275e8!important}",""])},b16d:function(t,e,i){"use strict";(function(t){i("5ab2"),i("6d57"),i("e10e");var n=i("28f8"),a=(i("cc57"),i("e2a7"),i("774b")),o=i("a57f");function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){Object(n.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}e.a={name:"PilePickerMulti",components:{Scroller:a.a,Tree:o.a},props:{title:{type:String,default:"工序"}},data:function(){return{show:!1,options:[],result:[]}},methods:{open:function(t){this.show=!0;var e=t.current,i=this.getNodeChecked(t.checkList,e);console.log({current:e,options:i}),this.options=i},getNodeChecked:function(e){var i=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=t.clone(e);return t.each(a,(function(e){e.checked=t.some(n,(function(t){return t.id===e.id})),e.children&&e.children.length?(e.status=i.getCheckedStatus(e.children,n),e.children=i.getNodeChecked(e.children,n)):e.status=t.some(n,(function(t){return t.id===e.id}))?"fullSelected":null})),a},getCheckedStatus:function(e,i){var n=null,a=[],o=[];return t.each(e,(function(e){(!e.children||!e.children.length)&&o.push(e),t.some(i,(function(t){return t.id===e.id}))&&a.push(e),e.children&&e.children.length&&t.each(e.children,(function(e){(!e.children||!e.children.length)&&o.push(e),t.some(i,(function(t){return t.id===e.id}))&&a.push(e)}))})),a.length===o.length&&0!==a.length&&(n="fullSelected"),a.length<o.length&&0!==a.length&&(n="partSelected"),n},confirm:function(){var e=[];t.each(this.options,(function(i){i.children&&i.children.length?t.each(i.children,(function(i){i.children&&i.children.length?t.each(i.children,(function(t){t.checked&&e.push({id:t.id,name:t.name})})):i.checked&&e.push({id:i.id,name:i.name})})):i.checked&&e.push({id:i.id,name:i.name})})),this.show=!1,this.$emit("selected",e)},onSelect:function(t,e){var i=this.deepClone(this.options);i=this.dataMap(i,r(r({},e),{},{items:t}),0),this.options=i},dataMap:function(e,i,n){var a=this;return e.map((function(e){if(e.id===i.items[n].id)if(e.checked=i.checked,e.children&&e.children.length&&n<i.items.length-1?e.children=a.dataMap(e.children,i,n+1):e.children=a.checkChildItems(e.children,i.checked),i.items[i.items.length-1].id===e.id)e.status=i.status,e.checked=i.checked;else{var o=a.currentStatus(e.children,i);e.status=o,e.checked=!t.isEmpty(o)}return e}))},checkChildItems:function(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;return t.map(i,(function(t){return t.status=n?"fullSelected":null,t.checked=n,t.children&&t.children.length&&(t.children=e.checkChildItems(t.children,n)),t}))},currentStatus:function(e,i){return t.isEmpty(e)?i.status:t.filter(e,(function(e){return t.isEmpty(e.status)})).length===e.length?null:t.filter(e,(function(t){return"fullSelected"===t.status})).length===e.length?"fullSelected":"partSelected"},deepClone:function(t){return JSON.parse(JSON.stringify(t))}}}}).call(this,i("391c"))},b225:function(t,e,i){"use strict";i("ef48")},bd36:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var n={id:"",name:"全部"}},c2e0:function(t,e,i){"use strict";(function(t){i("9dd9"),i("f548");var n=i("4c09"),a=(i("e697"),i("6d57"),i("163d"),i("07d2")),o=i("242a");e.a={name:"Tree",components:{Item:a.a,Checkbox:o.a},props:{data:{type:Array,default:function(){return[]}},keyword:{type:String,default:""},level:{type:Number,default:0},selected:{type:Array,default:function(){return[]}},isCheckbox:{type:Boolean,default:!1}},data:function(){return{blanks:new Array(this.level),openSet:{}}},computed:{list:function(){return t.clone(this.data)}},watch:{data:{handler:function(t){var e=this;this.openSet={},(t||[]).forEach((function(t){e.$set(e.openSet,t.id,!!t.isOpen)}))},immediate:!0}},methods:{itemClick:function(t){t.children&&t.children.length?(t.isOpen=!t.isOpen,this.openSet[t.id]=!this.openSet[t.id]):this.isCheckbox||this.$emit("onSelect",t)},onSelect:function(e,i){if(this.isCheckbox){var a,o=e[0],s=t.find(this.list,(function(t){var e=o.parent_id||o.item_id;if(t.id===e)return t}));this.$emit("onSelect",(a=[s]).concat.apply(a,Object(n.a)(e)),i)}else this.$emit("onSelect",e)},keywordFilter:function(t){return this.keyword?t.replace(new RegExp(this.keyword,"gm"),'<span class="color-blue">'+this.keyword+"</span>"):t},isSelected:function(e){return t.isArray(this.selected)?t.some(this.selected,{id:e.id}):this.selected&&this.selected.id===e.id},checkboxChange:function(t,e){var i=t[0],n=t[1];this.$emit("onSelect",[e],{checked:i,status:n})}}}}).call(this,i("391c"))},c340:function(t,e,i){"use strict";(function(t){i("ed63"),i("8cf2"),i("e204");var n=i("6bf2"),a=i.n(n),o=i("e2a7"),s=i("5fb8"),r=i("04f3"),l=i("bd36");e.a={components:{checkItemPicker:s.a},props:{build:{type:Array,default:function(){return[]}},checkList:{type:Array,default:function(){return[]}},customStatus:{type:Array,default:function(){return[]}},buildingSelectIsMultiple:{type:Boolean,default:!1},autoSelectAllWhenOpen:{type:Boolean,default:!0}},data:function(){return{backButtonEvent:null,show:!1,dateList:[{value:1,label:"全部",active:!0},{value:2,label:"上周",active:!1},{value:3,label:"本周",active:!1},{value:4,label:"上月",active:!1},{value:5,label:"本月",active:!1},{value:6,label:"自定义",active:!1}],statusList:[{value:"",label:"全部"},{value:"验收中",label:"验收中"},{value:"已验收",label:"已验收"},{value:"已抽验",label:"已抽验"}],currentBuild:{},selectedBuilds:[],currentStatus:{},currentCheckList:[],dateType:1,startDate:"",endDate:"",start:new Date,end:new Date,showTime:!1,type:"start",currentDate:"",minDate:"",maxDate:"",confirmFn:function(){}}},computed:{projectSelected:function(){return this.$store.state.global.currentReportProject},isIOSBezelLess:function(){return this.$store.state.app.isIOSBezelLess},buildList:function(){var e=t.clone(this.build);return e.unshift(l.a),e},statusOptions:function(){return this.customStatus&&this.customStatus.length?this.customStatus:this.statusList}},methods:{moment:a.a,backEvent:function(){this.close(),this.backButtonEvent&&(Object(r.c)(this.backButtonEvent),this.backButtonEvent=null)},open:function(t){this.currentBuild={},this.selectedBuilds=[],this.autoSelectAllWhenOpen?this.buildChange(t.currentBuild||l.a):t.currentBuild&&JSON.stringify(t.currentBuild)!==JSON.stringify(l.a)&&this.buildChange(t.currentBuild),this.currentStatus=t.currentStatus,this.currentCheckList=t.currentCheckList,this.dateType=t.dateType,this.startDate=t.startDate,this.endDate=t.endDate,this.confirmFn=t.onConfirm,this.show=!0,this.backButtonEvent=Object(r.a)(this.backEvent)},currentBuildIsActive:function(t){return this.buildingSelectIsMultiple?this.selectedBuilds.filter((function(e){return e.id===t.id})).length>0:this.currentBuild.id===t.id},buildChange:function(e){if(this.buildingSelectIsMultiple){if(Array.isArray(e))this.selectedBuilds=e;else{var i=this.selectedBuilds.findIndex((function(t){return t.id===e.id}));-1===i?e.id?this.selectedBuilds.push(e):this.selectedBuilds=t.clone(this.buildList):e.id?this.selectedBuilds.splice(i,1):this.selectedBuilds=[]}var n=this.selectedBuilds.map((function(t){return t.id}));this.build.filter((function(t){return!n.includes(t.id)})).length>0?this.selectedBuilds=this.selectedBuilds.filter((function(t){return!!t.id})):n.includes("")||this.selectedBuilds.push(l.a)}else this.currentBuild=e},statusChange:function(t){this.currentStatus=t},dateTagChange:function(t){this.dateType=t.value,6!==t.value&&this.getSelTimes(t.value),6===t.value&&(this.showTime=!0,this.start=this.startDate?new Date(this.startDate):new Date,this.end=this.endDate?new Date(this.endDate):new Date,this.currentDate="start"===this.type?this.start:this.end,console.log("this.currentDate",this.currentDate),this.setDateRange())},getSelTimes:function(t){var e,i;switch(t){case 1:e="",i="";break;case 2:e=a()().subtract(parseInt(a()().format("E"))+6,"days").format("YYYY-MM-DD"),i=a()().subtract(parseInt(a()().format("E")),"days").format("YYYY-MM-DD");break;case 3:e=a()().weekday(1).format("YYYY-MM-DD"),i=a()().format("YYYY-MM-DD");break;case 4:e=a()().month(a()().month()-1).startOf("month").format("YYYY-MM-DD"),i=a()().month(a()().month()-1).endOf("month").format("YYYY-MM-DD");break;case 5:e=a()().startOf("month").format("YYYY-MM-DD"),i=a()().format("YYYY-MM-DD")}this.startDate=e,this.endDate=i},setDateRange:function(){var t=(new Date).getFullYear(),e=t-10,i=t+10,n=a()("".concat(e,"-01-01")).startOf("year").format("YYYY-MM-DD"),o=a()("".concat(i,"-01-01")).endOf("year").format("YYYY-MM-DD");"start"===this.type?(this.minDate=new Date(a()(n).format("YYYY-MM-DD")),this.maxDate=new Date(a()(this.end).format("YYYY-MM-DD"))):(this.minDate=new Date(a()(this.start).format("YYYY-MM-DD")),this.maxDate=new Date(a()(o).format("YYYY-MM-DD")))},toggleTime:function(t){this.type=t,this.currentDate="start"===t?this.start:this.end,this.setDateRange()},customDate:function(t){"start"===this.type?this.start=a()(t).format("YYYY-MM-DD"):this.end=a()(t).format("YYYY-MM-DD")},selectDate:function(){console.log(this.start,this.end),this.startDate=a()(this.start).format("YYYY-MM-DD"),this.endDate=a()(this.end).format("YYYY-MM-DD"),this.showTime=!1},close:function(){this.show=!1,this.showTime=!1},onConfirm:function(){var t=this.buildingSelectIsMultiple?this.selectedBuilds.filter((function(t){return!!t.id})):this.currentBuild,e={projId:this.projectSelected.id,currentBuild:t,currentStatus:this.currentStatus,currentCheckList:this.currentCheckList,dateType:this.dateType,startDate:this.startDate?a()(this.startDate).format("YYYY-MM-DD"):"",endDate:this.endDate?a()(this.endDate).format("YYYY-MM-DD"):""};this.confirmFn&&this.confirmFn(e),this.close()},onCancel:function(t){this.close()},openCheckItem:function(){if(this.checkList.length){var t={checkList:this.checkList,current:this.currentCheckList};this.$refs["check-item-picker"].open(t)}else o.a.alert("工序为空")},selectedCheckItem:function(t){console.log({result:t}),this.currentCheckList=t||[]},removeProcess:function(t){this.currentCheckList.splice(t,1)}}}}).call(this,i("391c"))},d18d:function(t,e,i){"use strict";(function(t){i("2b45");var n,a=i("4360"),o=i("48f4"),s=i("162a"),r=i("e2a7"),l=i("a500"),c=i("6f9e"),d={};e.a={name:"Scroller",props:{buildingId:{type:String,default:""},hasNext:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},isSync:{type:Boolean,default:!0},endText:{type:String,default:""},memoryScrollTop:{type:Boolean,default:!0},keepScrollTop:{type:Boolean},hasPullDown:{type:Boolean,default:!0},onPullDown:{type:Function}},data:function(){return{pullDist:0,refreshing:!1,pulling:!1,loading:!1,scrollTop:0,isCurrKeyboard:!1,gapBottom:0}},computed:{allowPullDown:function(){return this.hasPullDown&&(!!this.$listeners.pullDown||!!this.onPullDown)},updateTime:function(){return a.a.state.global.businessDownloadTime},numberKeyboardCoverHeight:function(){return a.a.state.global.isNumberInputOpen?a.a.state.global.numberKeyboardHeight-this.gapBottom:0}},mounted:function(){var t=this;c.a.$on("numberKeyboardOpen",this.onNumberKeyboardOpen),this.$nextTick((function(){var e=t.$refs["scroll-warp"]&&t.$refs["scroll-warp"].getBoundingClientRect&&t.$refs["scroll-warp"].getBoundingClientRect();e&&(t.gapBottom=document.documentElement.clientHeight-e.bottom),t.$el&&t.$el.addEventListener("focus",(function(e){var i=e&&e.target,n=i&&i.tagName&&i.tagName.toLowerCase();if("input"===n||"textarea"===n){window.addEventListener("resize",(function e(){var n=i.getBoundingClientRect(),a=t.$el.getBoundingClientRect(),o=n.bottom-a.bottom;o>0&&t.scrollBy(o),window.removeEventListener("resize",e,!1)}),!1)}}),!0)}))},destroyed:function(){c.a.$off("numberKeyboardOpen",this.onNumberKeyboardOpen)},activated:function(){var t=this.keepScrollTop||this.$router.isBack&&this.memoryScrollTop;this.scrollTop&&t&&(this.$refs["scroll-warp"].scrollTop=this.scrollTop)},deactivated:function(){this.memoryScrollTop&&(this.scrollTop=this.$refs["scroll-warp"].scrollTop)},methods:{onScroll:function(t){var e=this,i=this.$refs["scroll-warp"].scrollTop,n=this.$refs["scroll-warp"].scrollHeight;if(i+this.$refs["scroll-warp"].clientHeight>=n-5&&!this.loading&&this.hasNext){this.loading=!0;var a=this.$listeners.loadNext();a&&a.then&&"function"==typeof a.then?a.then((function(){e.loading=!1})):this.loading=!1}this.$emit("scroll",t)},getTouchDiretion:function(t){if(!(d&&t&&t.touches&&t.touches[0]))return"";var e=t.touches[0].clientX,i=t.touches[0].clientY;return Math.abs(i-d.y)>Math.abs(e-d.x)&&Math.abs(i-d.y)>=3?i>d.y?"down":"up":""},onTouchstart:function(t){this.allowPullDown&&t.touches&&1===t.touches.length&&(d={x:t.touches[0].clientX,y:t.touches[0].clientY,scrollTop:this.$refs["scroll-warp"].scrollTop,pullDist:this.pullDist})},onTouchmove:function(t){if(this.allowPullDown&&t.touches&&1===t.touches.length){var e=this.$refs["scroll-warp"].scrollTop,i=t.touches[0].clientY,n=i-d.y,a=this.getTouchDiretion(t);"down"===a?!this.refreshing&&e<=0?(this.pulling=!0,this.pullDist=(n-d.scrollTop)/2,t.preventDefault()):this.pulling=!1:"up"===a?this.pullDist>0&&(this.pullDist=d.pullDist-(d.y-i),t.preventDefault()):this.pullDist=d.pullDist}},onTouchend:function(){var t=this;this.allowPullDown&&(d={},this.pulling=!1,this.pullDist>=70&&this.isSync?this.refreshing?this.makePullTo(70):this.makePullTo(70).then((function(){if(t.refreshing=!0,t.onPullDown){var e=t.onPullDown();e&&e.then&&"function"==typeof e?e.finally((function(){t.refreshing=!1,t.makePullTo(0)})):(t.refreshing=!1,t.makePullTo(0))}else t.dataSync().then((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")})).catch((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")}))})):(this.refreshing=!1,this.makePullTo(0)))},makePullTo:function(t){var e=this,i=this.pullDist,n=t,a=n-i,o=i;return i===n?Promise.resolve():new Promise((function(t){!function s(){window.requestAnimationFrame((function(){o+=a/6,e.pullDist=o,i<n&&o<n||i>n&&o>n?s():(e.pullDist=n,e.refreshing=!1,t())}))}()}))},dataSync:function(){var t,e=o.default.getCurrentModuleCode(),i=o.default.getCurrentRoute(),n=i.meta&&i.meta.isTodo;if(o.default.isModuleNeedBuilding(e)&&!n){if(!this.buildingId)return new Promise((function(t){setTimeout((function(){t()}),500)}));t=this.buildingId}return l.a.addTrack("公共-手动下拉刷新","",""),s.a.beginManualUpdate(),o.default.checkSync(t).then((function(t){return s.a.endManualUpdate(),t})).catch((function(t){$log.error("下拉刷新错误",t),t&&"Error: Network Error"===t.toString()?r.a.alert("当前网络无法同步数据"):r.a.alert(t),s.a.endManualUpdate()}))},getScrollHeight:function(){return this.$refs["scroll-warp"].offsetHeight},getScrollTop:function(){return this.$refs["scroll-warp"].scrollTop},setScrollTop:function(t){this.$refs["scroll-warp"].scrollTop=t},scrollBy:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,a=this.getScrollTop(),o=a+t,s=Math.round(i/16.7),r=t/s,l=a,c=n=+new Date;return a===o?Promise.resolve():new Promise((function(t){!function i(){window.requestAnimationFrame((function(){c===n&&(l+=r,e.$refs["scroll-warp"].scrollTop=l,a<o&&l<o||a>o&&l>o?i():(e.$refs["scroll-warp"].scrollTop=o,t()))}))}()}))},scrollTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,i=this.getScrollTop(),n=t-i;return this.scrollBy(n,e)},scrollToEle:function(t){var e=t.keyboardHeight||232,i=(t=t.$el?t.$el:t).getBoundingClientRect(),n=this.$refs["scroll-warp"].getBoundingClientRect();if(i&&n){var o=document.documentElement.clientHeight-(a.a.state.global.isNumberInputOpen?e:0),s=n.bottom<o?n.bottom:o,r=n.top-i.top,l=i.bottom-s;r>0?this.scrollBy(-r-10):l>0&&this.scrollBy(l+10)}},isCurrent:function(e,i){var n=this;e.length&&t.each(e,(function(t){t._uid===i?n.isCurrKeyboard=!0:n.isCurrent(t.$children,i)}))},onNumberKeyboardOpen:function(t){this.isCurrKeyboard=!1,this.isCurrent(this.$children,t._uid),this.isCurrKeyboard&&this.scrollToEle(t)}}}}).call(this,i("391c"))},d68d:function(t,e,i){"use strict";i("7607")},e5a0:function(t,e,i){(t.exports=i("690e")(!1)).push([t.i,'.zjapp .checkbox[data-v-afcfdff2]{font-size:14px;line-height:20px}.zjapp .icon[data-v-afcfdff2]{vertical-align:top;margin-top:1px;margin-right:7px}.zjapp .semiCheckbox[data-v-afcfdff2]{font-family:Chinese Quote,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:14px;font-variant:tabular-nums;line-height:1.5;color:rgba(0,0,0,.65);box-sizing:border-box;margin:0;padding:0;list-style:none;white-space:nowrap;cursor:pointer;outline:none;display:inline-block;line-height:1;position:relative;vertical-align:middle}.zjapp .semiCheckbox-inner[data-v-afcfdff2]{position:relative;top:0;left:0;display:block;width:18px;height:18px;border:1px solid #d9d9d9;border-radius:2px;background-color:#fff;transition:all .3s}.zjapp .semiCheckbox-indeterminate .semiCheckbox-inner[data-v-afcfdff2]:after{content:" ";transform:translate(-50%,-50%) scale(1);border:0;left:50%;top:50%;width:8px;height:8px;background-color:#4275e8;opacity:1}.zjapp .semiCheckbox-inner[data-v-afcfdff2]:after{transform:rotate(45deg) scale(0);position:absolute;left:5.57142857px;top:2.14285714px;display:table;width:5.71428571px;height:9.14285714px;border:2px solid #fff;border-top:0;border-left:0;content:" ";transition:all .1s cubic-bezier(.71,-.46,.88,.6),opacity .1s;opacity:0}.zjapp .semiCheckbox-checked .semiCheckbox-inner[data-v-afcfdff2]{background-color:#4275e8;border-color:#4275e8}.zjapp .semiCheckbox-checked .semiCheckbox-inner[data-v-afcfdff2]:after{transform:rotate(45deg) scale(1);position:absolute;display:table;border:2px solid #fff;border-top:0;border-left:0;content:" ";transition:opacity .2s cubic-bezier(.12,.4,.29,1.46) .1s;opacity:1}',""])},ef48:function(t,e,i){var n=i("9d55");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i("85cb").default)("a1a65c0c",n,!0,{sourceMap:!1,shadowMode:!1})}}]);