(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-6c4b0d2e","chunk-739f37c8"],{"32a4":function(t,e,o){var n=o("dba1");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,o("85cb").default)("edf7740c",n,!0,{sourceMap:!1,shadowMode:!1})},"619b":function(t,e,o){"use strict";o("32a4")},"774b":function(t,e,o){"use strict";o.r(e);var n=o("d18d").a,l=(o("b225"),o("17cc")),r=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"scroll-warp",staticClass:"scroll-warp",class:{"scroll-warp-pulling":t.pulling,"scroll-warp-complete":!t.hasNext&&!t.isEmpty,"scroll-warp-empty":t.isEmpty},style:{"padding-bottom":t.numberKeyboardCoverHeight+"px"},on:{scroll:t.onScroll,touchstart:t.onTouchstart,touchmove:t.onTouchmove,touchend:t.onTouchend}},[t.allowPullDown?o("div",{staticClass:"pull-refresh-warp",style:{height:t.pullDist+"px"}},[o("div",{staticClass:"pull-refresh"},[o("div",{staticClass:"animation-refresher",class:{refreshing:t.refreshing}}),t.updateTime?o("p",{staticClass:"pull-refresh-date"},[t._v("最后成功同步："+t._s(t.updateTime))]):t._e()])]):t._e(),t._t("default"),t.loading?o("div",{staticClass:"page-loading"},[o("svg",{staticClass:"svg-loading",attrs:{viewBox:"0 0 80 80"}},[o("circle",{attrs:{cx:"40",cy:"40",r:"36"}})])]):t._e(),t.hasNext||t.isEmpty?t._e():[t.$slots.end?t._t("end"):t._e(),!t.$slots.end&&t.endText?o("div",{staticClass:"end-text"},[t._v("\n      "+t._s(t.endText)+"\n    ")]):t._e()]],2)}),[],!1,null,"2b1a346c",null);e.default=r.exports},"9d55":function(t,e,o){(t.exports=o("690e")(!1)).push([t.i,'.zjapp .scroll-warp[data-v-2b1a346c]{flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.zjapp .scroll-warp-pulling[data-v-2b1a346c]{overflow:hidden}.zjapp .scroll-warp-complete[data-v-2b1a346c]:after{content:"";display:block;height:100px}.zjapp .scroll-warp-empty[data-v-2b1a346c]{display:flex;flex-direction:column}.zjapp .pull-refresh-warp[data-v-2b1a346c]{position:relative;height:0;overflow:hidden}.zjapp .pull-refresh[data-v-2b1a346c]{position:absolute;left:0;bottom:0;height:70px;width:100%;padding:6px;text-align:center}.zjapp .pull-refresh-date[data-v-2b1a346c]{margin-top:4px;height:16px;line-height:16px;font-size:12px;color:#bcbcbc}.zjapp .page-loading[data-v-2b1a346c]{padding:10px;text-align:center}.zjapp .end-text[data-v-2b1a346c]{color:#c8c8c8;background:#f4f4f4;position:relative;line-height:76px;height:76px;text-align:center}.zjapp .end-text[data-v-2b1a346c]:after,.zjapp .end-text[data-v-2b1a346c]:before{content:"";position:absolute;width:48px;height:1px;background:#e4e4e4;top:50%;margin-top:-1px}.zjapp .end-text[data-v-2b1a346c]:after{left:50%;transform:translateX(-92px)}.zjapp .end-text[data-v-2b1a346c]:before{right:50%;transform:translateX(90px)}.zjapp .end-slot[data-v-2b1a346c]{padding:30px;line-height:18px;text-align:center;color:#c8c8c8}',""])},b225:function(t,e,o){"use strict";o("ef48")},cd4c:function(t,e,o){"use strict";o.r(e);o("5ab2"),o("e10e"),o("6d57");var n=o("28f8"),l=o("4c09"),r=(o("c904"),o("fc08")),i=o("774b"),a=o("162a"),s=o("1b7e");function c(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function u(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?c(Object(o),!0).forEach((function(e){Object(n.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var p={components:{Scroller:i.default},data:function(){return{isLoading:!1,list:[]}},activated:function(){this.getData(),this.hasNetWork()},methods:{hasNetWork:function(){var t=this;return s.a.getHasNetwork().then((function(e){e&&t.updateLocaoFollowProject()}))},getData:function(){var t=this;return r.a.getData().then((function(e){console.log("🚀 ~ file: project-follow.vue ~ line 59 ~ returnFollowService.getData ~ res",e),t.list=Object(l.a)(e.list).sort((function(t,e){return t[1].sort_by>e[1].sort_by?.5:-.5})).map((function(t){return u(u({},t[1]),{},{isFollow:!0})})),console.log("🚀 ~ file: project-follow.vue ~ line 62 ~ returnFollowService.getData ~ this.list",t.list)}))},updateLocaoFollowProject:function(){var t=this;this.isLoading=!0,this.getAllProjectObject().then((function(t){return r.a.filterFollow(t)})).then((function(e){return t.getData()})).catch((function(t){$log.log("update follow’s project error:",t)})),this.isLoading=!1},follow:function(t,e){t.stopPropagation();var o=!e.isFollow;o?r.a.add(e).then((function(t){return e.isFollow=o})):r.a.remove(e.id).then((function(t){return e.isFollow=o}))},toDetail:function(t){var e=1===t.is_end?"/project-map-end-detail":"/project-map-detail";this.$router.push({path:e,query:{proj_id:t.id,timestmap:(new Date).getTime()}})},getAllProjectObject:function(){var t=this;return a.a.request("/project-map/org-tree",{origin:"homepage"}).then((function(e){return t.getProjectList(e)}))},getProjectList:function(t){var e=[];return function t(o,n){o.forEach((function(o){o.children&&t(o.children,o),"project"===o.label&&n&&"company"===n.label&&e.push(o)}))}(this.companyList),e}}},h=(o("619b"),o("17cc")),f=Object(h.a)(p,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("page-content",{attrs:{title:"我的关注"}},[t.list.length?o("scroller",t._l(t.list,(function(e){return o("van-cell",{key:e.id,attrs:{title:e.name},on:{click:function(o){t.toDetail(e)}}},[[e.isFollow?o("van-button",{attrs:{plain:"",type:"info",color:"#999",round:"",size:"mini"},on:{click:function(o){t.follow(o,e)}}},[t._v("取消关注")]):o("van-button",{attrs:{plain:"",type:"info",round:"",size:"mini"},on:{click:function(o){t.follow(o,e)}}},[t._v("关注")])]],2)}))):t._e(),o("loading-status",{attrs:{"is-loading":t.isLoading,"is-empty":!t.list.length,"empty-text":"没有任何关注~"}})],1)}),[],!1,null,"32a887fe",null);e.default=f.exports},d18d:function(t,e,o){"use strict";(function(t){o("2b45");var n,l=o("4360"),r=o("48f4"),i=o("162a"),a=o("e2a7"),s=o("a500"),c=o("6f9e"),u={};e.a={name:"Scroller",props:{buildingId:{type:String,default:""},hasNext:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},isSync:{type:Boolean,default:!0},endText:{type:String,default:""},memoryScrollTop:{type:Boolean,default:!0},keepScrollTop:{type:Boolean},hasPullDown:{type:Boolean,default:!0},onPullDown:{type:Function}},data:function(){return{pullDist:0,refreshing:!1,pulling:!1,loading:!1,scrollTop:0,isCurrKeyboard:!1,gapBottom:0}},computed:{allowPullDown:function(){return this.hasPullDown&&(!!this.$listeners.pullDown||!!this.onPullDown)},updateTime:function(){return l.a.state.global.businessDownloadTime},numberKeyboardCoverHeight:function(){return l.a.state.global.isNumberInputOpen?l.a.state.global.numberKeyboardHeight-this.gapBottom:0}},mounted:function(){var t=this;c.a.$on("numberKeyboardOpen",this.onNumberKeyboardOpen),this.$nextTick((function(){var e=t.$refs["scroll-warp"]&&t.$refs["scroll-warp"].getBoundingClientRect&&t.$refs["scroll-warp"].getBoundingClientRect();e&&(t.gapBottom=document.documentElement.clientHeight-e.bottom),t.$el&&t.$el.addEventListener("focus",(function(e){var o=e&&e.target,n=o&&o.tagName&&o.tagName.toLowerCase();if("input"===n||"textarea"===n){window.addEventListener("resize",(function e(){var n=o.getBoundingClientRect(),l=t.$el.getBoundingClientRect(),r=n.bottom-l.bottom;r>0&&t.scrollBy(r),window.removeEventListener("resize",e,!1)}),!1)}}),!0)}))},destroyed:function(){c.a.$off("numberKeyboardOpen",this.onNumberKeyboardOpen)},activated:function(){var t=this.keepScrollTop||this.$router.isBack&&this.memoryScrollTop;this.scrollTop&&t&&(this.$refs["scroll-warp"].scrollTop=this.scrollTop)},deactivated:function(){this.memoryScrollTop&&(this.scrollTop=this.$refs["scroll-warp"].scrollTop)},methods:{onScroll:function(t){var e=this,o=this.$refs["scroll-warp"].scrollTop,n=this.$refs["scroll-warp"].scrollHeight;if(o+this.$refs["scroll-warp"].clientHeight>=n-5&&!this.loading&&this.hasNext){this.loading=!0;var l=this.$listeners.loadNext();l&&l.then&&"function"==typeof l.then?l.then((function(){e.loading=!1})):this.loading=!1}this.$emit("scroll",t)},getTouchDiretion:function(t){if(!(u&&t&&t.touches&&t.touches[0]))return"";var e=t.touches[0].clientX,o=t.touches[0].clientY;return Math.abs(o-u.y)>Math.abs(e-u.x)&&Math.abs(o-u.y)>=3?o>u.y?"down":"up":""},onTouchstart:function(t){this.allowPullDown&&t.touches&&1===t.touches.length&&(u={x:t.touches[0].clientX,y:t.touches[0].clientY,scrollTop:this.$refs["scroll-warp"].scrollTop,pullDist:this.pullDist})},onTouchmove:function(t){if(this.allowPullDown&&t.touches&&1===t.touches.length){var e=this.$refs["scroll-warp"].scrollTop,o=t.touches[0].clientY,n=o-u.y,l=this.getTouchDiretion(t);"down"===l?!this.refreshing&&e<=0?(this.pulling=!0,this.pullDist=(n-u.scrollTop)/2,t.preventDefault()):this.pulling=!1:"up"===l?this.pullDist>0&&(this.pullDist=u.pullDist-(u.y-o),t.preventDefault()):this.pullDist=u.pullDist}},onTouchend:function(){var t=this;this.allowPullDown&&(u={},this.pulling=!1,this.pullDist>=70&&this.isSync?this.refreshing?this.makePullTo(70):this.makePullTo(70).then((function(){if(t.refreshing=!0,t.onPullDown){var e=t.onPullDown();e&&e.then&&"function"==typeof e?e.finally((function(){t.refreshing=!1,t.makePullTo(0)})):(t.refreshing=!1,t.makePullTo(0))}else t.dataSync().then((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")})).catch((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")}))})):(this.refreshing=!1,this.makePullTo(0)))},makePullTo:function(t){var e=this,o=this.pullDist,n=t,l=n-o,r=o;return o===n?Promise.resolve():new Promise((function(t){!function i(){window.requestAnimationFrame((function(){r+=l/6,e.pullDist=r,o<n&&r<n||o>n&&r>n?i():(e.pullDist=n,e.refreshing=!1,t())}))}()}))},dataSync:function(){var t,e=r.default.getCurrentModuleCode(),o=r.default.getCurrentRoute(),n=o.meta&&o.meta.isTodo;if(r.default.isModuleNeedBuilding(e)&&!n){if(!this.buildingId)return new Promise((function(t){setTimeout((function(){t()}),500)}));t=this.buildingId}return s.a.addTrack("公共-手动下拉刷新","",""),i.a.beginManualUpdate(),r.default.checkSync(t).then((function(t){return i.a.endManualUpdate(),t})).catch((function(t){$log.error("下拉刷新错误",t),t&&"Error: Network Error"===t.toString()?a.a.alert("当前网络无法同步数据"):a.a.alert(t),i.a.endManualUpdate()}))},getScrollHeight:function(){return this.$refs["scroll-warp"].offsetHeight},getScrollTop:function(){return this.$refs["scroll-warp"].scrollTop},setScrollTop:function(t){this.$refs["scroll-warp"].scrollTop=t},scrollBy:function(t){var e=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,l=this.getScrollTop(),r=l+t,i=Math.round(o/16.7),a=t/i,s=l,c=n=+new Date;return l===r?Promise.resolve():new Promise((function(t){!function o(){window.requestAnimationFrame((function(){c===n&&(s+=a,e.$refs["scroll-warp"].scrollTop=s,l<r&&s<r||l>r&&s>r?o():(e.$refs["scroll-warp"].scrollTop=r,t()))}))}()}))},scrollTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,o=this.getScrollTop(),n=t-o;return this.scrollBy(n,e)},scrollToEle:function(t){var e=t.keyboardHeight||232,o=(t=t.$el?t.$el:t).getBoundingClientRect(),n=this.$refs["scroll-warp"].getBoundingClientRect();if(o&&n){var r=document.documentElement.clientHeight-(l.a.state.global.isNumberInputOpen?e:0),i=n.bottom<r?n.bottom:r,a=n.top-o.top,s=o.bottom-i;a>0?this.scrollBy(-a-10):s>0&&this.scrollBy(s+10)}},isCurrent:function(e,o){var n=this;e.length&&t.each(e,(function(t){t._uid===o?n.isCurrKeyboard=!0:n.isCurrent(t.$children,o)}))},onNumberKeyboardOpen:function(t){this.isCurrKeyboard=!1,this.isCurrent(this.$children,t._uid),this.isCurrKeyboard&&this.scrollToEle(t)}}}}).call(this,o("391c"))},dba1:function(t,e,o){(t.exports=o("690e")(!1)).push([t.i,"[data-v-32a887fe] .van-cell{font-size:14px}[data-v-32a887fe] .van-cell .van-cell__title{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}[data-v-32a887fe] .van-cell .van-cell__value{max-width:76px}[data-v-32a887fe] .van-cell .van-button--round{width:68px;height:24px;line-height:24px}",""])},ef48:function(t,e,o){var n=o("9d55");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,o("85cb").default)("a1a65c0c",n,!0,{sourceMap:!1,shadowMode:!1})}}]);