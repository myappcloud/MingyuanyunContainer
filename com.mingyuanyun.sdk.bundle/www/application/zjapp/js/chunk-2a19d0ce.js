(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-2a19d0ce"],{"3bddc":function(t,e,o){"use strict";o("b4a5")},"3ece":function(t,e,o){"use strict";o.r(e);var i=o("774b"),n=o("07d2"),l=o("d623"),a=o("7798"),r=o("bcc7"),s=o("e2a7"),c={name:"MeasurePointDetail",components:{Scroller:i.a,item:n.a,DropDownSelect:l.a},data:function(){return{sectionId:"",buildingId:"",unit:"",floor:"",checkitemId:"",processMode:"",pageTitle:"",checkitem:"",isLoading:!0,userIdentity:"",tabIndex:0,repairData:[],supervisionData:[],constructData:[]}},computed:{projId:function(){return this.$store.state.global.currentProject.id},tabsWidth:function(){return window.innerWidth/3}},activated:function(){this.$router.isBack||(this.sectionId=this.$route.query.sectionId,this.buildingId=this.$route.query.buildingId,this.unit=this.$route.query.unit,this.floor=this.$route.query.floor,this.checkitemId=this.$route.query.checkitemId,this.loadDetail())},methods:{loadDetail:function(){var t=this;return this.isLoading=!0,this.pageTitle=this.floor?this.floor+("层"===this.floor.substr(this.floor.length-1)?"":"层"):"",r.a.getCheckItem(this.checkitemId).then((function(e){t.checkitem=e})).then((function(){return a.a.getMeasureUserIdentity(t.projId).then((function(e){t.userIdentity=e}))})).then((function(){return a.a.loadFloorCollect(t.projId,t.sectionId,t.buildingId,t.unit,t.floor,t.checkitem,t.userIdentity).then((function(e){t.repairData=e.repairData,t.supervisionData=e.supervisionData,t.constructData=e.constructData}))})).then((function(){t.isLoading=!1})).catch((function(t){console.error(t)}))},gotoDetail:function(t,e){t.done_num?t.floor?this.$router.push({name:"MeasureDetail",query:{buildingId:t.building_id,unit:t.unit,floor:t.floor,checkitemId:this.checkitemId,viewIdentity:e,readonly:1}}):this.$router.push({name:"MeasureDetail",query:{roomId:t.id,checkitemId:this.checkitemId,viewIdentity:e,readonly:1}}):s.a.alert("此项暂无测量数据")}}},u=(o("3bddc"),o("17cc")),d=Object(u.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("page-content",{attrs:{title:t.pageTitle}},[t.isLoading?t._e():o("item",{staticClass:"bg-sub-theme",attrs:{label:"检查项",mode:"edit",text:t.checkitem.full_name}}),t.isLoading?t._e():o("van-tabs",{attrs:{animated:"",swipeable:"","line-width":t.tabsWidth},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[o("van-tab",{attrs:{title:"施工单位数据"}},[o("scroller",[o("div",{staticClass:"place-list-con border-tb"},t._l(t.repairData,(function(e,i){return o("div",{key:i,staticClass:"place-list-item",class:{"bg-green":e.done},on:{click:function(o){t.gotoDetail(e,1)}}},[t._v("\n            "+t._s(e.name)+"\n          ")])})))])],1),t.userIdentity>=2?o("van-tab",{attrs:{title:"监理单位数据"}},[o("scroller",[o("div",{staticClass:"place-list-con border-tb"},t._l(t.supervisionData,(function(e,i){return o("div",{key:i,staticClass:"place-list-item",class:{"bg-orange":e.done},on:{click:function(o){t.gotoDetail(e,2)}}},[t._v("\n            "+t._s(e.name)+"\n          ")])})))])],1):t._e(),t.userIdentity>=3?o("van-tab",{attrs:{title:"建设单位数据"}},[o("scroller",[o("div",{staticClass:"place-list-con border-tb"},t._l(t.constructData,(function(e,i){return o("div",{key:i,staticClass:"place-list-item",class:{"bg-blue":e.done},on:{click:function(o){t.gotoDetail(e,3)}}},[t._v("\n            "+t._s(e.name)+"\n          ")])})))])],1):t._e()],1),o("loading-status",{attrs:{"is-loading":t.isLoading}})],1)}),[],!1,null,"c860f61e",null);e.default=d.exports},"774b":function(t,e,o){"use strict";var i=o("d18d").a,n=(o("b225"),o("17cc")),l=Object(n.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"scroll-warp",staticClass:"scroll-warp",class:{"scroll-warp-pulling":t.pulling,"scroll-warp-complete":!t.hasNext&&!t.isEmpty,"scroll-warp-empty":t.isEmpty},style:{"padding-bottom":t.numberKeyboardCoverHeight+"px"},on:{scroll:t.onScroll,touchstart:t.onTouchstart,touchmove:t.onTouchmove,touchend:t.onTouchend}},[t.allowPullDown?o("div",{staticClass:"pull-refresh-warp",style:{height:t.pullDist+"px"}},[o("div",{staticClass:"pull-refresh"},[o("div",{staticClass:"animation-refresher",class:{refreshing:t.refreshing}}),t.updateTime?o("p",{staticClass:"pull-refresh-date"},[t._v("最后成功同步："+t._s(t.updateTime))]):t._e()])]):t._e(),t._t("default"),t.loading?o("div",{staticClass:"page-loading"},[o("svg",{staticClass:"svg-loading",attrs:{viewBox:"0 0 80 80"}},[o("circle",{attrs:{cx:"40",cy:"40",r:"36"}})])]):t._e(),t.hasNext||t.isEmpty?t._e():[t.$slots.end?t._t("end"):t._e(),!t.$slots.end&&t.endText?o("div",{staticClass:"end-text"},[t._v("\n      "+t._s(t.endText)+"\n    ")]):t._e()]],2)}),[],!1,null,"2b1a346c",null);e.a=l.exports},"8fc9":function(t,e,o){(t.exports=o("690e")(!1)).push([t.i,".zjapp .place-list-con[data-v-c860f61e]{display:flex;flex-wrap:wrap;padding:0 15px 15px 0;background-color:#fff}.zjapp .place-list-item[data-v-c860f61e]{min-width:65px;min-height:30px;line-height:18px;margin:15px 0 0 15px;padding:6px 10px;text-align:center;font-size:14px;color:#000;border:1px solid #dcdcdc;border-radius:3px}.zjapp .place-list-item.selected[data-v-c860f61e]{border-color:#4275e8;background-color:#4275e8;color:#fff}.zjapp .place-list-item.disabled[data-v-c860f61e]{background-color:#f2f2f2;color:#999}.zjapp .place-list-item.bg-green[data-v-c860f61e]{color:#fff;border-color:#0bc666}.zjapp .place-list-item.bg-blue[data-v-c860f61e]{color:#fff;border-color:#4174e9}.zjapp .place-list-item.bg-orange[data-v-c860f61e]{color:#fff;border-color:#ff8400}",""])},"9d55":function(t,e,o){(t.exports=o("690e")(!1)).push([t.i,'.zjapp .scroll-warp[data-v-2b1a346c]{flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.zjapp .scroll-warp-pulling[data-v-2b1a346c]{overflow:hidden}.zjapp .scroll-warp-complete[data-v-2b1a346c]:after{content:"";display:block;height:100px}.zjapp .scroll-warp-empty[data-v-2b1a346c]{display:flex;flex-direction:column}.zjapp .pull-refresh-warp[data-v-2b1a346c]{position:relative;height:0;overflow:hidden}.zjapp .pull-refresh[data-v-2b1a346c]{position:absolute;left:0;bottom:0;height:70px;width:100%;padding:6px;text-align:center}.zjapp .pull-refresh-date[data-v-2b1a346c]{margin-top:4px;height:16px;line-height:16px;font-size:12px;color:#bcbcbc}.zjapp .page-loading[data-v-2b1a346c]{padding:10px;text-align:center}.zjapp .end-text[data-v-2b1a346c]{color:#c8c8c8;background:#f4f4f4;position:relative;line-height:76px;height:76px;text-align:center}.zjapp .end-text[data-v-2b1a346c]:after,.zjapp .end-text[data-v-2b1a346c]:before{content:"";position:absolute;width:48px;height:1px;background:#e4e4e4;top:50%;margin-top:-1px}.zjapp .end-text[data-v-2b1a346c]:after{left:50%;transform:translateX(-92px)}.zjapp .end-text[data-v-2b1a346c]:before{right:50%;transform:translateX(90px)}.zjapp .end-slot[data-v-2b1a346c]{padding:30px;line-height:18px;text-align:center;color:#c8c8c8}',""])},b225:function(t,e,o){"use strict";o("ef48")},b4a5:function(t,e,o){var i=o("8fc9");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,o("85cb").default)("5de2bfad",i,!0,{sourceMap:!1,shadowMode:!1})},d18d:function(t,e,o){"use strict";(function(t){o("2b45");var i,n=o("4360"),l=o("48f4"),a=o("162a"),r=o("e2a7"),s=o("a500"),c=o("6f9e"),u={};e.a={name:"Scroller",props:{buildingId:{type:String,default:""},hasNext:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},isSync:{type:Boolean,default:!0},endText:{type:String,default:""},memoryScrollTop:{type:Boolean,default:!0},keepScrollTop:{type:Boolean},hasPullDown:{type:Boolean,default:!0},onPullDown:{type:Function}},data:function(){return{pullDist:0,refreshing:!1,pulling:!1,loading:!1,scrollTop:0,isCurrKeyboard:!1,gapBottom:0}},computed:{allowPullDown:function(){return this.hasPullDown&&(!!this.$listeners.pullDown||!!this.onPullDown)},updateTime:function(){return n.a.state.global.businessDownloadTime},numberKeyboardCoverHeight:function(){return n.a.state.global.isNumberInputOpen?n.a.state.global.numberKeyboardHeight-this.gapBottom:0}},mounted:function(){var t=this;c.a.$on("numberKeyboardOpen",this.onNumberKeyboardOpen),this.$nextTick((function(){var e=t.$refs["scroll-warp"]&&t.$refs["scroll-warp"].getBoundingClientRect&&t.$refs["scroll-warp"].getBoundingClientRect();e&&(t.gapBottom=document.documentElement.clientHeight-e.bottom),t.$el&&t.$el.addEventListener("focus",(function(e){var o=e&&e.target,i=o&&o.tagName&&o.tagName.toLowerCase();if("input"===i||"textarea"===i){window.addEventListener("resize",(function e(){var i=o.getBoundingClientRect(),n=t.$el.getBoundingClientRect(),l=i.bottom-n.bottom;l>0&&t.scrollBy(l),window.removeEventListener("resize",e,!1)}),!1)}}),!0)}))},destroyed:function(){c.a.$off("numberKeyboardOpen",this.onNumberKeyboardOpen)},activated:function(){var t=this.keepScrollTop||this.$router.isBack&&this.memoryScrollTop;this.scrollTop&&t&&(this.$refs["scroll-warp"].scrollTop=this.scrollTop)},deactivated:function(){this.memoryScrollTop&&(this.scrollTop=this.$refs["scroll-warp"].scrollTop)},methods:{onScroll:function(t){var e=this,o=this.$refs["scroll-warp"].scrollTop,i=this.$refs["scroll-warp"].scrollHeight;if(o+this.$refs["scroll-warp"].clientHeight>=i-5&&!this.loading&&this.hasNext){this.loading=!0;var n=this.$listeners.loadNext();n&&n.then&&"function"==typeof n.then?n.then((function(){e.loading=!1})):this.loading=!1}this.$emit("scroll",t)},getTouchDiretion:function(t){if(!(u&&t&&t.touches&&t.touches[0]))return"";var e=t.touches[0].clientX,o=t.touches[0].clientY;return Math.abs(o-u.y)>Math.abs(e-u.x)&&Math.abs(o-u.y)>=3?o>u.y?"down":"up":""},onTouchstart:function(t){this.allowPullDown&&t.touches&&1===t.touches.length&&(u={x:t.touches[0].clientX,y:t.touches[0].clientY,scrollTop:this.$refs["scroll-warp"].scrollTop,pullDist:this.pullDist})},onTouchmove:function(t){if(this.allowPullDown&&t.touches&&1===t.touches.length){var e=this.$refs["scroll-warp"].scrollTop,o=t.touches[0].clientY,i=o-u.y,n=this.getTouchDiretion(t);"down"===n?!this.refreshing&&e<=0?(this.pulling=!0,this.pullDist=(i-u.scrollTop)/2,t.preventDefault()):this.pulling=!1:"up"===n?this.pullDist>0&&(this.pullDist=u.pullDist-(u.y-o),t.preventDefault()):this.pullDist=u.pullDist}},onTouchend:function(){var t=this;this.allowPullDown&&(u={},this.pulling=!1,this.pullDist>=70&&this.isSync?this.refreshing?this.makePullTo(70):this.makePullTo(70).then((function(){if(t.refreshing=!0,t.onPullDown){var e=t.onPullDown();e&&e.then&&"function"==typeof e?e.finally((function(){t.refreshing=!1,t.makePullTo(0)})):(t.refreshing=!1,t.makePullTo(0))}else t.dataSync().then((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")})).catch((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")}))})):(this.refreshing=!1,this.makePullTo(0)))},makePullTo:function(t){var e=this,o=this.pullDist,i=t,n=i-o,l=o;return o===i?Promise.resolve():new Promise((function(t){!function a(){window.requestAnimationFrame((function(){l+=n/6,e.pullDist=l,o<i&&l<i||o>i&&l>i?a():(e.pullDist=i,e.refreshing=!1,t())}))}()}))},dataSync:function(){var t,e=l.default.getCurrentModuleCode(),o=l.default.getCurrentRoute(),i=o.meta&&o.meta.isTodo;if(l.default.isModuleNeedBuilding(e)&&!i){if(!this.buildingId)return new Promise((function(t){setTimeout((function(){t()}),500)}));t=this.buildingId}return s.a.addTrack("公共-手动下拉刷新","",""),a.a.beginManualUpdate(),l.default.checkSync(t).then((function(t){return a.a.endManualUpdate(),t})).catch((function(t){$log.error("下拉刷新错误",t),t&&"Error: Network Error"===t.toString()?r.a.alert("当前网络无法同步数据"):r.a.alert(t),a.a.endManualUpdate()}))},getScrollHeight:function(){return this.$refs["scroll-warp"].offsetHeight},getScrollTop:function(){return this.$refs["scroll-warp"].scrollTop},setScrollTop:function(t){this.$refs["scroll-warp"].scrollTop=t},scrollBy:function(t){var e=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=this.getScrollTop(),l=n+t,a=Math.round(o/16.7),r=t/a,s=n,c=i=+new Date;return n===l?Promise.resolve():new Promise((function(t){!function o(){window.requestAnimationFrame((function(){c===i&&(s+=r,e.$refs["scroll-warp"].scrollTop=s,n<l&&s<l||n>l&&s>l?o():(e.$refs["scroll-warp"].scrollTop=l,t()))}))}()}))},scrollTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,o=this.getScrollTop(),i=t-o;return this.scrollBy(i,e)},scrollToEle:function(t){var e=t.keyboardHeight||232,o=(t=t.$el?t.$el:t).getBoundingClientRect(),i=this.$refs["scroll-warp"].getBoundingClientRect();if(o&&i){var l=document.documentElement.clientHeight-(n.a.state.global.isNumberInputOpen?e:0),a=i.bottom<l?i.bottom:l,r=i.top-o.top,s=o.bottom-a;r>0?this.scrollBy(-r-10):s>0&&this.scrollBy(s+10)}},isCurrent:function(e,o){var i=this;e.length&&t.each(e,(function(t){t._uid===o?i.isCurrKeyboard=!0:i.isCurrent(t.$children,o)}))},onNumberKeyboardOpen:function(t){this.isCurrKeyboard=!1,this.isCurrent(this.$children,t._uid),this.isCurrKeyboard&&this.scrollToEle(t)}}}}).call(this,o("391c"))},e89f:function(t,e,o){"use strict";var i=o("04f3"),n=o("cf09"),l=o("4360"),a=0;e.a={name:"PopupMixin",data:function(){return{backButtonEvent:null}},watch:{show:function(t){var e=this;if(t){if(this.$nextTick((function(){e.$el&&e.$el.style&&(e.$el.style.zIndex=++n.a.zIndex,a++,l.a.commit("app/SET_HAS_POPUP",!!a))})),!this.backButtonEvent){var o=this.close||this.closePopup;this.backButtonEvent=Object(i.a)(o)}}else--a<0&&(a=0),l.a.commit("app/SET_HAS_POPUP",!!a),this.backButtonEvent&&(Object(i.c)(this.backButtonEvent),this.backButtonEvent=null)}},methods:{}}},ef48:function(t,e,o){var i=o("9d55");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,o("85cb").default)("a1a65c0c",i,!0,{sourceMap:!1,shadowMode:!1})}}]);