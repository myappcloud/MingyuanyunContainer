(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-b6875962","chunk-739f37c8"],{"1afc":function(t,e,i){"use strict";(function(t){i("cc57");var o=i("774b"),n=i("07d2"),a=i("d623"),s=i("7798"),r=i("aab3");e.a={name:"MeasurePointDetail",components:{Scroller:o.default,item:n.default,DropDownSelect:a.a},data:function(){return{sectionId:"",buildingId:"",unit:"",checkitemId:"",processMode:"",pageTitle:"",isLoading:!0,checkitemOptions:[],checkitemSelected:[],userIdentity:"",collectData:[],floorsData:[],repairData:{},supervisionData:{},constructData:{}}},computed:{projId:function(){return this.$store.state.global.currentProject.id},passrateMode:function(){return this.checkitemSelected&&this.checkitemSelected[1]?this.checkitemSelected[1].passrate_mode:""},checkitemSelectedText:function(){return t.isEmpty(this.checkitemSelected)?"请选择":t.map(this.checkitemSelected,(function(t){return t.name})).join("-")}},activated:function(){this.$router.isBack||(this.sectionId=this.$route.query.sectionId,this.buildingId=this.$route.query.buildingId,this.unit=this.$route.query.unit,this.checkitemId=this.$route.query.checkitemId,this.loadDetail())},methods:{loadDetail:function(){var e=this;return this.isLoading=!0,s.a.getAllMeasureBuildingCheckItems(this.sectionId,this.buildingId).then((function(i){e.checkitemOptions=i;var o=[];t.each(i,(function(i){t.each(i.children,(function(t){t.id===e.checkitemId&&(o.push(i),o.push(t))}))})),e.checkitemSelected=o})).then((function(){return s.a.getMeasureUserIdentity(e.projId).then((function(t){e.userIdentity=t}))})).then((function(){return s.a.getMeasureCheckitemRealProcessMode(e.buildingId,e.checkitemId).then((function(t){e.processMode=t}))})).then((function(){return r.a.getBuildingInfo(e.buildingId).then((function(i){var o=t.isEmpty(i)?"":i[0].name;if(2===e.processMode)e.pageTitle=o;else{var n=e.unit?e.unit+("单元"===e.unit.substr(e.unit.length-2)?"":"单元"):"";e.pageTitle=o+n}}))})).then((function(){return s.a.loadCollect(e.projId,e.sectionId,e.buildingId,e.unit,e.checkitemSelected[1]?e.checkitemSelected[1]:{},e.userIdentity).then((function(t){e.collectData=t.collectData,e.floorsData=t.floorsData,e.repairData=t.repairData,e.supervisionData=t.supervisionData,e.constructData=t.constructData,e.isLoading=!1}))})).catch((function(t){console.error(t)}))},onChangeCheckitem:function(e){var i=t.isEmpty(e)?"":e[1].id;i&&(this.checkitemId=i,this.$store.dispatch("measure/setIndexCheckitem",e),this.loadDetail())},floorCollect:function(t){this.$router.push({name:"MeasureCollectFloor",query:{sectionId:this.sectionId,buildingId:this.buildingId,unit:this.unit,floor:t.id,checkitemId:this.checkitemId}})}}}}).call(this,i("391c"))},"6e44":function(t,e,i){var o=i("d9b07");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i("85cb").default)("30f3b751",o,!0,{sourceMap:!1,shadowMode:!1})},"774b":function(t,e,i){"use strict";i.r(e);var o=i("d18d").a,n=(i("b225"),i("17cc")),a=Object(n.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"scroll-warp",staticClass:"scroll-warp",class:{"scroll-warp-pulling":t.pulling,"scroll-warp-complete":!t.hasNext&&!t.isEmpty,"scroll-warp-empty":t.isEmpty},style:{"padding-bottom":t.numberKeyboardCoverHeight+"px"},on:{scroll:t.onScroll,touchstart:t.onTouchstart,touchmove:t.onTouchmove,touchend:t.onTouchend}},[t.allowPullDown?i("div",{staticClass:"pull-refresh-warp",style:{height:t.pullDist+"px"}},[i("div",{staticClass:"pull-refresh"},[i("div",{staticClass:"animation-refresher",class:{refreshing:t.refreshing}}),t.updateTime?i("p",{staticClass:"pull-refresh-date"},[t._v("最后成功同步："+t._s(t.updateTime))]):t._e()])]):t._e(),t._t("default"),t.loading?i("div",{staticClass:"page-loading"},[i("svg",{staticClass:"svg-loading",attrs:{viewBox:"0 0 80 80"}},[i("circle",{attrs:{cx:"40",cy:"40",r:"36"}})])]):t._e(),t.hasNext||t.isEmpty?t._e():[t.$slots.end?t._t("end"):t._e(),!t.$slots.end&&t.endText?i("div",{staticClass:"end-text"},[t._v("\n      "+t._s(t.endText)+"\n    ")]):t._e()]],2)}),[],!1,null,"2b1a346c",null);e.default=a.exports},8292:function(t,e,i){"use strict";i.r(e);var o=i("1afc").a,n=(i("fc089"),i("17cc")),a=Object(n.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("page-content",{attrs:{title:t.isLoading?"...":t.pageTitle}},[t.isLoading?t._e():i("drop-down-select",{staticClass:"border-bottom bg-sub-theme",attrs:{value:t.checkitemSelected,options:t.checkitemOptions,stage:2},on:{onSelect:t.onChangeCheckitem}},[i("div",{staticClass:"select-text"},[t._v(t._s(t.checkitemSelectedText))])]),t.isLoading||9===t.passrateMode?t._e():i("scroller",[i("div",{staticClass:"p15 bg-white"},[i("table",{staticClass:"collect-table"},[i("thead",[i("tr",[i("th"),i("th",[t._v("施工单位")]),t.userIdentity>=2?i("th",[t._v("监理单位")]):t._e(),t.userIdentity>=3?i("th",[t._v("建设单位")]):t._e()])]),i("tbody",[i("tr",[i("td",[t._v("已测层数")]),i("td",[t._v(t._s(t.repairData.measured))]),t.userIdentity>=2?i("td",[t._v(t._s(t.supervisionData.measured))]):t._e(),t.userIdentity>=3?i("td",[t._v(t._s(t.constructData.measured))]):t._e()]),i("tr",[i("td",[t._v("总合格率")]),i("td",{class:{"color-red":t.repairData.passrate<=90}},[t._v("\n              "+t._s(""===t.repairData.passrate?"":t.repairData.passrate+"%")+"\n            ")]),t.userIdentity>=2?i("td",{class:{"color-red":t.supervisionData.passrate<=90}},[t._v("\n              "+t._s(""===t.supervisionData.passrate?"":t.supervisionData.passrate+"%")+"\n            ")]):t._e(),t.userIdentity>=3?i("td",{class:{"color-red":t.constructData.passrate<=90}},[t._v("\n              "+t._s(""===t.constructData.passrate?"":t.constructData.passrate+"%")+"\n            ")]):t._e()]),t._l(t.collectData,(function(e,o){return i("tr",{key:o},[i("td",{staticClass:"color-blue",on:{click:function(i){t.floorCollect(e)}}},[t._v(t._s(e.floor))]),i("td",{class:{"color-red":e.repair_passrate<=90}},[t._v("\n              "+t._s(""===e.repair_passrate?"":e.repair_passrate+"%")+"\n            ")]),t.userIdentity>=2?i("td",{class:{"color-red":e.supervision_passrate<=90}},[t._v("\n              "+t._s(""===e.supervision_passrate?"":e.supervision_passrate+"%")+"\n            ")]):t._e(),t.userIdentity>=3?i("td",{class:{"color-red":e.construct_passrate<=90}},[t._v("\n              "+t._s(""===e.construct_passrate?"":e.construct_passrate+"%")+"\n            ")]):t._e()])}))],2)])])]),i("loading-status",{attrs:{"is-loading":t.isLoading,"is-empty":9===t.passrateMode,"empty-text":"此检查项暂无汇总统计"}})],1)}),[],!1,null,"36e17724",null);e.default=a.exports},"9d55":function(t,e,i){(t.exports=i("690e")(!1)).push([t.i,'.zjapp .scroll-warp[data-v-2b1a346c]{flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.zjapp .scroll-warp-pulling[data-v-2b1a346c]{overflow:hidden}.zjapp .scroll-warp-complete[data-v-2b1a346c]:after{content:"";display:block;height:100px}.zjapp .scroll-warp-empty[data-v-2b1a346c]{display:flex;flex-direction:column}.zjapp .pull-refresh-warp[data-v-2b1a346c]{position:relative;height:0;overflow:hidden}.zjapp .pull-refresh[data-v-2b1a346c]{position:absolute;left:0;bottom:0;height:70px;width:100%;padding:6px;text-align:center}.zjapp .pull-refresh-date[data-v-2b1a346c]{margin-top:4px;height:16px;line-height:16px;font-size:12px;color:#bcbcbc}.zjapp .page-loading[data-v-2b1a346c]{padding:10px;text-align:center}.zjapp .end-text[data-v-2b1a346c]{color:#c8c8c8;background:#f4f4f4;position:relative;line-height:76px;height:76px;text-align:center}.zjapp .end-text[data-v-2b1a346c]:after,.zjapp .end-text[data-v-2b1a346c]:before{content:"";position:absolute;width:48px;height:1px;background:#e4e4e4;top:50%;margin-top:-1px}.zjapp .end-text[data-v-2b1a346c]:after{left:50%;transform:translateX(-92px)}.zjapp .end-text[data-v-2b1a346c]:before{right:50%;transform:translateX(90px)}.zjapp .end-slot[data-v-2b1a346c]{padding:30px;line-height:18px;text-align:center;color:#c8c8c8}',""])},b225:function(t,e,i){"use strict";i("ef48")},d18d:function(t,e,i){"use strict";(function(t){i("2b45");var o,n=i("4360"),a=i("48f4"),s=i("162a"),r=i("e2a7"),l=i("a500"),c=i("6f9e"),u={};e.a={name:"Scroller",props:{buildingId:{type:String,default:""},hasNext:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},isSync:{type:Boolean,default:!0},endText:{type:String,default:""},memoryScrollTop:{type:Boolean,default:!0},keepScrollTop:{type:Boolean},hasPullDown:{type:Boolean,default:!0},onPullDown:{type:Function}},data:function(){return{pullDist:0,refreshing:!1,pulling:!1,loading:!1,scrollTop:0,isCurrKeyboard:!1,gapBottom:0}},computed:{allowPullDown:function(){return this.hasPullDown&&(!!this.$listeners.pullDown||!!this.onPullDown)},updateTime:function(){return n.a.state.global.businessDownloadTime},numberKeyboardCoverHeight:function(){return n.a.state.global.isNumberInputOpen?n.a.state.global.numberKeyboardHeight-this.gapBottom:0}},mounted:function(){var t=this;c.a.$on("numberKeyboardOpen",this.onNumberKeyboardOpen),this.$nextTick((function(){var e=t.$refs["scroll-warp"]&&t.$refs["scroll-warp"].getBoundingClientRect&&t.$refs["scroll-warp"].getBoundingClientRect();e&&(t.gapBottom=document.documentElement.clientHeight-e.bottom),t.$el&&t.$el.addEventListener("focus",(function(e){var i=e&&e.target,o=i&&i.tagName&&i.tagName.toLowerCase();if("input"===o||"textarea"===o){window.addEventListener("resize",(function e(){var o=i.getBoundingClientRect(),n=t.$el.getBoundingClientRect(),a=o.bottom-n.bottom;a>0&&t.scrollBy(a),window.removeEventListener("resize",e,!1)}),!1)}}),!0)}))},destroyed:function(){c.a.$off("numberKeyboardOpen",this.onNumberKeyboardOpen)},activated:function(){var t=this.keepScrollTop||this.$router.isBack&&this.memoryScrollTop;this.scrollTop&&t&&(this.$refs["scroll-warp"].scrollTop=this.scrollTop)},deactivated:function(){this.memoryScrollTop&&(this.scrollTop=this.$refs["scroll-warp"].scrollTop)},methods:{onScroll:function(t){var e=this,i=this.$refs["scroll-warp"].scrollTop,o=this.$refs["scroll-warp"].scrollHeight;if(i+this.$refs["scroll-warp"].clientHeight>=o-5&&!this.loading&&this.hasNext){this.loading=!0;var n=this.$listeners.loadNext();n&&n.then&&"function"==typeof n.then?n.then((function(){e.loading=!1})):this.loading=!1}this.$emit("scroll",t)},getTouchDiretion:function(t){if(!(u&&t&&t.touches&&t.touches[0]))return"";var e=t.touches[0].clientX,i=t.touches[0].clientY;return Math.abs(i-u.y)>Math.abs(e-u.x)&&Math.abs(i-u.y)>=3?i>u.y?"down":"up":""},onTouchstart:function(t){this.allowPullDown&&t.touches&&1===t.touches.length&&(u={x:t.touches[0].clientX,y:t.touches[0].clientY,scrollTop:this.$refs["scroll-warp"].scrollTop,pullDist:this.pullDist})},onTouchmove:function(t){if(this.allowPullDown&&t.touches&&1===t.touches.length){var e=this.$refs["scroll-warp"].scrollTop,i=t.touches[0].clientY,o=i-u.y,n=this.getTouchDiretion(t);"down"===n?!this.refreshing&&e<=0?(this.pulling=!0,this.pullDist=(o-u.scrollTop)/2,t.preventDefault()):this.pulling=!1:"up"===n?this.pullDist>0&&(this.pullDist=u.pullDist-(u.y-i),t.preventDefault()):this.pullDist=u.pullDist}},onTouchend:function(){var t=this;this.allowPullDown&&(u={},this.pulling=!1,this.pullDist>=70&&this.isSync?this.refreshing?this.makePullTo(70):this.makePullTo(70).then((function(){if(t.refreshing=!0,t.onPullDown){var e=t.onPullDown();e&&e.then&&"function"==typeof e?e.finally((function(){t.refreshing=!1,t.makePullTo(0)})):(t.refreshing=!1,t.makePullTo(0))}else t.dataSync().then((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")})).catch((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")}))})):(this.refreshing=!1,this.makePullTo(0)))},makePullTo:function(t){var e=this,i=this.pullDist,o=t,n=o-i,a=i;return i===o?Promise.resolve():new Promise((function(t){!function s(){window.requestAnimationFrame((function(){a+=n/6,e.pullDist=a,i<o&&a<o||i>o&&a>o?s():(e.pullDist=o,e.refreshing=!1,t())}))}()}))},dataSync:function(){var t,e=a.default.getCurrentModuleCode(),i=a.default.getCurrentRoute(),o=i.meta&&i.meta.isTodo;if(a.default.isModuleNeedBuilding(e)&&!o){if(!this.buildingId)return new Promise((function(t){setTimeout((function(){t()}),500)}));t=this.buildingId}return l.a.addTrack("公共-手动下拉刷新","",""),s.a.beginManualUpdate(),a.default.checkSync(t).then((function(t){return s.a.endManualUpdate(),t})).catch((function(t){$log.error("下拉刷新错误",t),t&&"Error: Network Error"===t.toString()?r.a.alert("当前网络无法同步数据"):r.a.alert(t),s.a.endManualUpdate()}))},getScrollHeight:function(){return this.$refs["scroll-warp"].offsetHeight},getScrollTop:function(){return this.$refs["scroll-warp"].scrollTop},setScrollTop:function(t){this.$refs["scroll-warp"].scrollTop=t},scrollBy:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=this.getScrollTop(),a=n+t,s=Math.round(i/16.7),r=t/s,l=n,c=o=+new Date;return n===a?Promise.resolve():new Promise((function(t){!function i(){window.requestAnimationFrame((function(){c===o&&(l+=r,e.$refs["scroll-warp"].scrollTop=l,n<a&&l<a||n>a&&l>a?i():(e.$refs["scroll-warp"].scrollTop=a,t()))}))}()}))},scrollTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,i=this.getScrollTop(),o=t-i;return this.scrollBy(o,e)},scrollToEle:function(t){var e=t.keyboardHeight||232,i=(t=t.$el?t.$el:t).getBoundingClientRect(),o=this.$refs["scroll-warp"].getBoundingClientRect();if(i&&o){var a=document.documentElement.clientHeight-(n.a.state.global.isNumberInputOpen?e:0),s=o.bottom<a?o.bottom:a,r=o.top-i.top,l=i.bottom-s;r>0?this.scrollBy(-r-10):l>0&&this.scrollBy(l+10)}},isCurrent:function(e,i){var o=this;e.length&&t.each(e,(function(t){t._uid===i?o.isCurrKeyboard=!0:o.isCurrent(t.$children,i)}))},onNumberKeyboardOpen:function(t){this.isCurrKeyboard=!1,this.isCurrent(this.$children,t._uid),this.isCurrKeyboard&&this.scrollToEle(t)}}}}).call(this,i("391c"))},d9b07:function(t,e,i){(t.exports=i("690e")(!1)).push([t.i,".zjapp .collect-table[data-v-36e17724]{width:100%;border-collapse:collapse}.zjapp .collect-table th[data-v-36e17724]{padding:12px 10px;height:40px;background-color:#e7eeff}.zjapp .collect-table td[data-v-36e17724],.zjapp .collect-table th[data-v-36e17724]{line-height:16px;font-size:14px;text-align:center;border:1px solid #d9d9d9}.zjapp .collect-table td[data-v-36e17724]{padding:10px;height:36px}",""])},e89f:function(t,e,i){"use strict";var o=i("04f3"),n=i("cf09"),a=i("4360"),s=0;e.a={name:"PopupMixin",data:function(){return{backButtonEvent:null}},watch:{show:function(t){var e=this;if(t){if(this.$nextTick((function(){e.$el&&e.$el.style&&(e.$el.style.zIndex=++n.a.zIndex,s++,a.a.commit("app/SET_HAS_POPUP",!!s))})),!this.backButtonEvent){var i=this.close||this.closePopup;this.backButtonEvent=Object(o.a)(i)}}else--s<0&&(s=0),a.a.commit("app/SET_HAS_POPUP",!!s),this.backButtonEvent&&(Object(o.c)(this.backButtonEvent),this.backButtonEvent=null)}},methods:{}}},ef48:function(t,e,i){var o=i("9d55");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i("85cb").default)("a1a65c0c",o,!0,{sourceMap:!1,shadowMode:!1})},fc089:function(t,e,i){"use strict";i("6e44")}}]);