(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-0cb2d1d6"],{"199f":function(t,e,i){(t.exports=i("690e")(!1)).push([t.i,".zjapp .item-list[data-v-2236410d]{padding:10px;display:flex;align-items:center;background-color:#fff;min-height:100px}.zjapp .item-list .img[data-v-2236410d]{display:block;width:80px;height:80px;background:no-repeat 50%;background-size:cover;background-color:#ddd}.zjapp .item-list .item-list-con[data-v-2236410d]{flex:1;padding:0 0 0 10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.zjapp .item-list .item-list-con .title[data-v-2236410d]{display:flex;color:#111;font-size:16px;margin:0;padding-right:10px;margin-right:-10px;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;font-weight:400}.zjapp .item-list .item-list-con .title span[data-v-2236410d]{flex:1}.zjapp .item-list .item-list-con .title span[data-v-2236410d]:last-child{color:#999;font-size:12px;text-align:right;max-width:120px}.zjapp .item-list .item-list-con .text[data-v-2236410d]{height:30px;line-height:30px;font-size:14px;display:flex}.zjapp .item-list .item-list-con .text span[data-v-2236410d]{flex:1;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.zjapp .item-list .item-list-con .text span[data-v-2236410d]:last-child{max-width:50px;text-align:right}.zjapp .item-list .item-list-con .text span[data-v-2236410d]:first-child{text-align:left}.zjapp .item-list .item-list-con .time[data-v-2236410d]{height:20px;line-height:20px;color:#b3b3b3;font-size:14px;padding-right:11px!important;margin-right:-10px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.zjapp .item-list .nomarl[data-v-2236410d]{color:#999}.zjapp .item-list .danger[data-v-2236410d]{color:#ff3d3d}",""])},"774b":function(t,e,i){"use strict";var a=i("d18d").a,o=(i("b225"),i("17cc")),n=Object(o.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"scroll-warp",staticClass:"scroll-warp",class:{"scroll-warp-pulling":t.pulling,"scroll-warp-complete":!t.hasNext&&!t.isEmpty,"scroll-warp-empty":t.isEmpty},style:{"padding-bottom":t.numberKeyboardCoverHeight+"px"},on:{scroll:t.onScroll,touchstart:t.onTouchstart,touchmove:t.onTouchmove,touchend:t.onTouchend}},[t.allowPullDown?i("div",{staticClass:"pull-refresh-warp",style:{height:t.pullDist+"px"}},[i("div",{staticClass:"pull-refresh"},[i("div",{staticClass:"animation-refresher",class:{refreshing:t.refreshing}}),t.updateTime?i("p",{staticClass:"pull-refresh-date"},[t._v("最后成功同步："+t._s(t.updateTime))]):t._e()])]):t._e(),t._t("default"),t.loading?i("div",{staticClass:"page-loading"},[i("svg",{staticClass:"svg-loading",attrs:{viewBox:"0 0 80 80"}},[i("circle",{attrs:{cx:"40",cy:"40",r:"36"}})])]):t._e(),t.hasNext||t.isEmpty?t._e():[t.$slots.end?t._t("end"):t._e(),!t.$slots.end&&t.endText?i("div",{staticClass:"end-text"},[t._v("\n      "+t._s(t.endText)+"\n    ")]):t._e()]],2)}),[],!1,null,"2b1a346c",null);e.a=n.exports},"82d5":function(t,e,i){var a=i("199f");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i("85cb").default)("f04d448e",a,!0,{sourceMap:!1,shadowMode:!1})},"9d55":function(t,e,i){(t.exports=i("690e")(!1)).push([t.i,'.zjapp .scroll-warp[data-v-2b1a346c]{flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.zjapp .scroll-warp-pulling[data-v-2b1a346c]{overflow:hidden}.zjapp .scroll-warp-complete[data-v-2b1a346c]:after{content:"";display:block;height:100px}.zjapp .scroll-warp-empty[data-v-2b1a346c]{display:flex;flex-direction:column}.zjapp .pull-refresh-warp[data-v-2b1a346c]{position:relative;height:0;overflow:hidden}.zjapp .pull-refresh[data-v-2b1a346c]{position:absolute;left:0;bottom:0;height:70px;width:100%;padding:6px;text-align:center}.zjapp .pull-refresh-date[data-v-2b1a346c]{margin-top:4px;height:16px;line-height:16px;font-size:12px;color:#bcbcbc}.zjapp .page-loading[data-v-2b1a346c]{padding:10px;text-align:center}.zjapp .end-text[data-v-2b1a346c]{color:#c8c8c8;background:#f4f4f4;position:relative;line-height:76px;height:76px;text-align:center}.zjapp .end-text[data-v-2b1a346c]:after,.zjapp .end-text[data-v-2b1a346c]:before{content:"";position:absolute;width:48px;height:1px;background:#e4e4e4;top:50%;margin-top:-1px}.zjapp .end-text[data-v-2b1a346c]:after{left:50%;transform:translateX(-92px)}.zjapp .end-text[data-v-2b1a346c]:before{right:50%;transform:translateX(90px)}.zjapp .end-slot[data-v-2b1a346c]{padding:30px;line-height:18px;text-align:center;color:#c8c8c8}',""])},b225:function(t,e,i){"use strict";i("ef48")},c214:function(t,e,i){"use strict";i("82d5")},ce68:function(t,e,i){"use strict";i.r(e);var a=i("ff76").a,o=i("17cc"),n=Object(o.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("page-content",{attrs:{title:"日常测温明细","show-go-root":"report"!==t.backRouter||"Report"}},[t.showSearch?t._e():i("template",{slot:"header-bar-right"},[i("div",{staticClass:"header-btn",on:{click:t.searchPepole}},[i("icon",{attrs:{name:"nav-search"}})],1),i("div",{staticClass:"header-btn",on:{click:t.openFilter}},[i("icon",{attrs:{name:"nav-filter"}}),t.hasFilterRule?i("i",{staticClass:"badge"}):t._e()],1)]),i("swipe-tabs",{attrs:{color:"#4275e8","title-active-color":"#4275e8","line-width":t.tabsWidth},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[i("swipe-tab",{attrs:{title:"异常人员"}},[i("list",{attrs:{"is-loading":t.isLoading,list:t.listShow,"has-next-page":!!t.has_next_page,"load-next-page":t.getList,"tab-id":t.tabIndex}})],1),i("swipe-tab",{attrs:{title:"未测人员"}},[i("list",{attrs:{"is-loading":t.isLoading,list:t.listShow,"has-next-page":!!t.has_next_page,"load-next-page":t.getList,"tab-id":t.tabIndex}})],1),i("swipe-tab",{attrs:{title:"所有人员"}},[i("list",{attrs:{"is-loading":t.isLoading,list:t.listShow,"has-next-page":!!t.has_next_page,"load-next-page":t.getList,"tab-id":t.tabIndex}})],1)],1)],2)}),[],!1,null,null,null);e.default=n.exports},d18d:function(t,e,i){"use strict";(function(t){i("2b45");var a,o=i("4360"),n=i("48f4"),s=i("162a"),l=i("e2a7"),r=i("a500"),c=i("6f9e"),p={};e.a={name:"Scroller",props:{buildingId:{type:String,default:""},hasNext:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},isSync:{type:Boolean,default:!0},endText:{type:String,default:""},memoryScrollTop:{type:Boolean,default:!0},keepScrollTop:{type:Boolean},hasPullDown:{type:Boolean,default:!0},onPullDown:{type:Function}},data:function(){return{pullDist:0,refreshing:!1,pulling:!1,loading:!1,scrollTop:0,isCurrKeyboard:!1,gapBottom:0}},computed:{allowPullDown:function(){return this.hasPullDown&&(!!this.$listeners.pullDown||!!this.onPullDown)},updateTime:function(){return o.a.state.global.businessDownloadTime},numberKeyboardCoverHeight:function(){return o.a.state.global.isNumberInputOpen?o.a.state.global.numberKeyboardHeight-this.gapBottom:0}},mounted:function(){var t=this;c.a.$on("numberKeyboardOpen",this.onNumberKeyboardOpen),this.$nextTick((function(){var e=t.$refs["scroll-warp"]&&t.$refs["scroll-warp"].getBoundingClientRect&&t.$refs["scroll-warp"].getBoundingClientRect();e&&(t.gapBottom=document.documentElement.clientHeight-e.bottom),t.$el&&t.$el.addEventListener("focus",(function(e){var i=e&&e.target,a=i&&i.tagName&&i.tagName.toLowerCase();if("input"===a||"textarea"===a){window.addEventListener("resize",(function e(){var a=i.getBoundingClientRect(),o=t.$el.getBoundingClientRect(),n=a.bottom-o.bottom;n>0&&t.scrollBy(n),window.removeEventListener("resize",e,!1)}),!1)}}),!0)}))},destroyed:function(){c.a.$off("numberKeyboardOpen",this.onNumberKeyboardOpen)},activated:function(){var t=this.keepScrollTop||this.$router.isBack&&this.memoryScrollTop;this.scrollTop&&t&&(this.$refs["scroll-warp"].scrollTop=this.scrollTop)},deactivated:function(){this.memoryScrollTop&&(this.scrollTop=this.$refs["scroll-warp"].scrollTop)},methods:{onScroll:function(t){var e=this,i=this.$refs["scroll-warp"].scrollTop,a=this.$refs["scroll-warp"].scrollHeight;if(i+this.$refs["scroll-warp"].clientHeight>=a-5&&!this.loading&&this.hasNext){this.loading=!0;var o=this.$listeners.loadNext();o&&o.then&&"function"==typeof o.then?o.then((function(){e.loading=!1})):this.loading=!1}this.$emit("scroll",t)},getTouchDiretion:function(t){if(!(p&&t&&t.touches&&t.touches[0]))return"";var e=t.touches[0].clientX,i=t.touches[0].clientY;return Math.abs(i-p.y)>Math.abs(e-p.x)&&Math.abs(i-p.y)>=3?i>p.y?"down":"up":""},onTouchstart:function(t){this.allowPullDown&&t.touches&&1===t.touches.length&&(p={x:t.touches[0].clientX,y:t.touches[0].clientY,scrollTop:this.$refs["scroll-warp"].scrollTop,pullDist:this.pullDist})},onTouchmove:function(t){if(this.allowPullDown&&t.touches&&1===t.touches.length){var e=this.$refs["scroll-warp"].scrollTop,i=t.touches[0].clientY,a=i-p.y,o=this.getTouchDiretion(t);"down"===o?!this.refreshing&&e<=0?(this.pulling=!0,this.pullDist=(a-p.scrollTop)/2,t.preventDefault()):this.pulling=!1:"up"===o?this.pullDist>0&&(this.pullDist=p.pullDist-(p.y-i),t.preventDefault()):this.pullDist=p.pullDist}},onTouchend:function(){var t=this;this.allowPullDown&&(p={},this.pulling=!1,this.pullDist>=70&&this.isSync?this.refreshing?this.makePullTo(70):this.makePullTo(70).then((function(){if(t.refreshing=!0,t.onPullDown){var e=t.onPullDown();e&&e.then&&"function"==typeof e?e.finally((function(){t.refreshing=!1,t.makePullTo(0)})):(t.refreshing=!1,t.makePullTo(0))}else t.dataSync().then((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")})).catch((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")}))})):(this.refreshing=!1,this.makePullTo(0)))},makePullTo:function(t){var e=this,i=this.pullDist,a=t,o=a-i,n=i;return i===a?Promise.resolve():new Promise((function(t){!function s(){window.requestAnimationFrame((function(){n+=o/6,e.pullDist=n,i<a&&n<a||i>a&&n>a?s():(e.pullDist=a,e.refreshing=!1,t())}))}()}))},dataSync:function(){var t,e=n.default.getCurrentModuleCode(),i=n.default.getCurrentRoute(),a=i.meta&&i.meta.isTodo;if(n.default.isModuleNeedBuilding(e)&&!a){if(!this.buildingId)return new Promise((function(t){setTimeout((function(){t()}),500)}));t=this.buildingId}return r.a.addTrack("公共-手动下拉刷新","",""),s.a.beginManualUpdate(),n.default.checkSync(t).then((function(t){return s.a.endManualUpdate(),t})).catch((function(t){$log.error("下拉刷新错误",t),t&&"Error: Network Error"===t.toString()?l.a.alert("当前网络无法同步数据"):l.a.alert(t),s.a.endManualUpdate()}))},getScrollHeight:function(){return this.$refs["scroll-warp"].offsetHeight},getScrollTop:function(){return this.$refs["scroll-warp"].scrollTop},setScrollTop:function(t){this.$refs["scroll-warp"].scrollTop=t},scrollBy:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,o=this.getScrollTop(),n=o+t,s=Math.round(i/16.7),l=t/s,r=o,c=a=+new Date;return o===n?Promise.resolve():new Promise((function(t){!function i(){window.requestAnimationFrame((function(){c===a&&(r+=l,e.$refs["scroll-warp"].scrollTop=r,o<n&&r<n||o>n&&r>n?i():(e.$refs["scroll-warp"].scrollTop=n,t()))}))}()}))},scrollTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,i=this.getScrollTop(),a=t-i;return this.scrollBy(a,e)},scrollToEle:function(t){var e=t.keyboardHeight||232,i=(t=t.$el?t.$el:t).getBoundingClientRect(),a=this.$refs["scroll-warp"].getBoundingClientRect();if(i&&a){var n=document.documentElement.clientHeight-(o.a.state.global.isNumberInputOpen?e:0),s=a.bottom<n?a.bottom:n,l=a.top-i.top,r=i.bottom-s;l>0?this.scrollBy(-l-10):r>0&&this.scrollBy(r+10)}},isCurrent:function(e,i){var a=this;e.length&&t.each(e,(function(t){t._uid===i?a.isCurrKeyboard=!0:a.isCurrent(t.$children,i)}))},onNumberKeyboardOpen:function(t){this.isCurrKeyboard=!1,this.isCurrent(this.$children,t._uid),this.isCurrKeyboard&&this.scrollToEle(t)}}}}).call(this,i("391c"))},d951:function(t,e,i){"use strict";i("163d");var a=i("774b"),o=i("3122"),n={name:"TemperatureMeasureReportIndexList",components:{Scroller:a.a},props:{list:{type:Array,default:function(){return[]}},hasNextPage:{type:Boolean,default:!0},loadNextPage:{type:Function,default:function(){}},isLoading:{type:Boolean,default:!0},tabId:{type:[String,Number],default:""}},methods:{gotoDetail:function(t){t.user_id&&this.$router.push("/temperature-measure-detail/".concat(t.user_id))},getHeader:function(t){try{var e=JSON.parse(t);return e[0]&&e[0].url?o.a.getThumbnailFromUrl(e[0].url):"static/photo-empty.png"}catch(t){return"static/photo-empty.png"}},checkBodyT:function(t){return t&&Number(t)>37.3}}},s=(i("c214"),i("17cc")),l=Object(s.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("scroller",{staticStyle:{height:"100%"},attrs:{"has-next":t.hasNextPage},on:{loadNext:t.loadNextPage}},[i("loading-status",{attrs:{"is-loading":t.isLoading&&!t.list.length,"is-empty":!t.list.length,"empty-text":"暂无数据"}}),t._l(t.list,(function(e){return i("div",{key:e.user_id,staticClass:"item-list border-bottom",on:{click:function(i){t.gotoDetail(e)}}},[i("div",{staticClass:"img",style:{"background-image":"url("+t.getHeader(e.image)+")"}}),i("div",{staticClass:"item-list-con"},[i("h2",{staticClass:"title"},[i("span",[t._v(t._s(e.fullname))]),i("span",[t._v(t._s(t._f("formatDate")(e.created_on,"YYYY-MM-DD HH:mm")))])]),i("div",{staticClass:"text"},[e.temperature?i("span",{class:{danger:"1"===e.is_symptom}},[t._v("\n          "+t._s("1"===e.is_symptom?"出现乏力、咳嗽、发烧、肌肉酸痛症状":"无症状")+"\n        ")]):t._e(),1===t.tabId&&e.last_approach_time?i("span",[t._v("\n          "+t._s(Number(e.approach_type)?"最近出场: ":"最近进场: ")+t._s(t._f("formatDate")(e.last_approach_time,"YYYY-MM-DD HH:mm"))+"\n        ")]):t._e(),i("span",{class:{nomarl:!0,danger:t.checkBodyT(e.temperature)}},[t._v("\n          "+t._s(e.temperature?e.temperature+"°C":"未测量")+"\n        ")])]),i("p",{staticClass:"time"},[t._v(t._s(e.bidsection_name))])])])}))],2)}),[],!1,null,"2236410d",null);e.a=l.exports},e4bd:function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return n}));var a=i("162a");function o(t){return a.a.request("/online/ncov-user-temperature/get-list",t)}function n(t){return a.a.request("/webapi/ncov-report/get-allowed-work-condition-details",t)}},e89f:function(t,e,i){"use strict";var a=i("04f3"),o=i("cf09"),n=i("4360"),s=0;e.a={name:"PopupMixin",data:function(){return{backButtonEvent:null}},watch:{show:function(t){var e=this;if(t){if(this.$nextTick((function(){e.$el&&e.$el.style&&(e.$el.style.zIndex=++o.a.zIndex,s++,n.a.commit("app/SET_HAS_POPUP",!!s))})),!this.backButtonEvent){var i=this.close||this.closePopup;this.backButtonEvent=Object(a.a)(i)}}else--s<0&&(s=0),n.a.commit("app/SET_HAS_POPUP",!!s),this.backButtonEvent&&(Object(a.c)(this.backButtonEvent),this.backButtonEvent=null)}},methods:{}}},ef48:function(t,e,i){var a=i("9d55");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i("85cb").default)("a1a65c0c",a,!0,{sourceMap:!1,shadowMode:!1})},ff76:function(t,e,i){"use strict";(function(t){var a=i("4c09"),o=i("6bf2"),n=i.n(o),s=i("4636"),l=i("5694"),r=i("6718"),c=i("6144"),p=i("bc69"),u=i("e4bd"),d=i("774b"),h=i("d951");e.a={name:"TemperatureMeasureReportIndex",components:{SwipeTabs:r.b,SwipeTab:r.a,Scroller:d.a,List:h.a},data:function(){return{backRouter:"",isLoading:!1,has_next_page:1,tabIndex:0,curModule:{},curModuleCode:"",curProjId:"",showSearch:!1,searchKeyword:"",hasFilterRule:!1,listShow:[],start_date:n()().format("YYYY-MM-DD"),end_date:n()().format("YYYY-MM-DD"),bidsection_id:"",list_type:1,page:0,mapping:{0:1,1:2,2:0}}},computed:{tabsWidth:function(){return window.innerWidth/3}},watch:{tabIndex:function(t){var e=this;this.listShow=[],this.list_type=this.mapping[t],this.has_next_page=1,this.page=0,this.$nextTick((function(){e.getList()}))}},created:function(){var t=this.$route.query.back;this.backRouter=t||""},activated:function(){this.init()},methods:{init:function(){var t=c.a.getObject(p.a.HOME_PAGE_DEFAULT_PROJECT,c.a.level.user)||{};this.curProjId=t.id,this.curModuleCode="ncov-anti-epidemic",this.$router.isBack||(this.tabIndex=0,this.list_type=1,this.has_next_page=1,this.page=0,this.getList())},getList:function(){var t=this;if(this.has_next_page&&!this.isLoading)return this.page++,this.isLoading=!0,Object(u.a)({start_date:this.start_date,end_date:this.end_date,bidsection_id:this.bidsection_id,list_type:this.list_type,page:this.page}).then((function(e){t.isLoading=!1,t.listShow=t.page>1?[].concat(Object(a.a)(t.listShow),Object(a.a)(e.list)):e.list,t.has_next_page=e.has_next_page})).catch((function(e){t.isLoading=!1,console.log(e)}))},searchPepole:function(){this.$router.push("/temperature-measure-search")},openFilter:function(){var t=this;s.a.openPopup({moduleCode:this.curModuleCode,projId:"all",callback:function(e){t.hasFilterRule=l.a.hasFilterRule(),t.getFilerData(e)}})},getFilerData:function(t){var e=t.date;t.sections;console.log("触发筛选请求数据。。。。。",t),this.start_date=e.start?e.start:n()().format("YYYY-MM-DD"),this.end_date=e.end?e.end:e.start?"2999-12-30":n()().format("YYYY-MM-DD"),this.listShow=[],this.has_next_page=1,this.page=0,this.getList()},getSelectBid:function(t){var e=[];return t.map((function(t,i){t.children.map((function(t){t.selected&&e.push(t.id)}))})),e.join(",")},toggleSearch:function(e){t.isBoolean(e)?this.showSearch=e:this.showSearch=!this.showSearch,this.showSearch||(this.searchKeyword="")},clearKeyword:function(){this.searchKeyword=""}}}}).call(this,i("391c"))}}]);