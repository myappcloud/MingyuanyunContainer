(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-61f56ea8"],{"019e":function(t,e,o){"use strict";(function(t){o("e697"),o("cc57"),o("f548");var a,n,i=o("fd50"),l=o("ed08"),r=o("3516"),s=o("f97c"),c=o("a18c"),u={},p="安全文明",d={CheckBatchList:"安全文明",CheckSafetyBatchList:"安全检查",CheckQualityBatchList:"质量检查"},h={isLoading:!0,batchList:[],mode:p,defaultBatch:{},init:function(){var e=c.a.currentRoute,o=window.__YL_SUPER_APP__?e.name.replace("zjapp-",""):e.name;h.isLoading=!0,e.name.indexOf("measure")>-1?h.mode="实测实量":e.name.indexOf("process")>-1?h.mode="工序移交":e.name.indexOf("measure-inspect")>-1?h.mode="实测巡检":(p=d[o]||p,h.mode=p);var f=s.a.getDefaultProject().id;return r.a.hasLocalChanged(u[h.mode])||a!==h.mode||n!==f?(h.batchList=[],r.a.getBatchList(h.mode,f).then((function(t){h.batchList=t,u[h.mode]=l.a.now(),a=h.mode,n=f})).then((function(){var e;$rootScope.newBatch&&((e=t.find(h.batchList,{id:$rootScope.newBatch.id}))&&h.selectBatch(e),delete $rootScope.newBatch)})).then((function(){return h.getDefaultBatch()})).then((function(){r.a.downloadBatch(h.mode).then((function(t){if(t.length)return r.a.getBatchList(h.mode,f).then((function(t){h.batchList=t,u[h.mode]=l.a.now(),a=h.mode,n=f}))}))})).finally((function(){h.isLoading=!1}))):(h.isLoading=!1,i.a.when())},getDefaultBatch:function(){var t=s.a.getDefaultProject().id;return r.a.getDefaultBatch(p,t).then((function(t){h.defaultBatch=t||(h.batchList[0]||{})}))},selectBatch:function(t){var e=s.a.getDefaultProject().id;r.a.selectBatch(t,e),h.defaultBatch=t}};e.a=h}).call(this,o("391c"))},"774b":function(t,e,o){"use strict";var a=o("d18d").a,n=(o("b225"),o("17cc")),i=Object(n.a)(a,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"scroll-warp",staticClass:"scroll-warp",class:{"scroll-warp-pulling":t.pulling,"scroll-warp-complete":!t.hasNext&&!t.isEmpty,"scroll-warp-empty":t.isEmpty},style:{"padding-bottom":t.numberKeyboardCoverHeight+"px"},on:{scroll:t.onScroll,touchstart:t.onTouchstart,touchmove:t.onTouchmove,touchend:t.onTouchend}},[t.allowPullDown?o("div",{staticClass:"pull-refresh-warp",style:{height:t.pullDist+"px"}},[o("div",{staticClass:"pull-refresh"},[o("div",{staticClass:"animation-refresher",class:{refreshing:t.refreshing}}),t.updateTime?o("p",{staticClass:"pull-refresh-date"},[t._v("最后成功同步："+t._s(t.updateTime))]):t._e()])]):t._e(),t._t("default"),t.loading?o("div",{staticClass:"page-loading"},[o("svg",{staticClass:"svg-loading",attrs:{viewBox:"0 0 80 80"}},[o("circle",{attrs:{cx:"40",cy:"40",r:"36"}})])]):t._e(),t.hasNext||t.isEmpty?t._e():[t.$slots.end?t._t("end"):t._e(),!t.$slots.end&&t.endText?o("div",{staticClass:"end-text"},[t._v("\n      "+t._s(t.endText)+"\n    ")]):t._e()]],2)}),[],!1,null,"2b1a346c",null);e.a=i.exports},9455:function(t,e,o){"use strict";o("f272")},"9d55":function(t,e,o){(t.exports=o("690e")(!1)).push([t.i,'.zjapp .scroll-warp[data-v-2b1a346c]{flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.zjapp .scroll-warp-pulling[data-v-2b1a346c]{overflow:hidden}.zjapp .scroll-warp-complete[data-v-2b1a346c]:after{content:"";display:block;height:100px}.zjapp .scroll-warp-empty[data-v-2b1a346c]{display:flex;flex-direction:column}.zjapp .pull-refresh-warp[data-v-2b1a346c]{position:relative;height:0;overflow:hidden}.zjapp .pull-refresh[data-v-2b1a346c]{position:absolute;left:0;bottom:0;height:70px;width:100%;padding:6px;text-align:center}.zjapp .pull-refresh-date[data-v-2b1a346c]{margin-top:4px;height:16px;line-height:16px;font-size:12px;color:#bcbcbc}.zjapp .page-loading[data-v-2b1a346c]{padding:10px;text-align:center}.zjapp .end-text[data-v-2b1a346c]{color:#c8c8c8;background:#f4f4f4;position:relative;line-height:76px;height:76px;text-align:center}.zjapp .end-text[data-v-2b1a346c]:after,.zjapp .end-text[data-v-2b1a346c]:before{content:"";position:absolute;width:48px;height:1px;background:#e4e4e4;top:50%;margin-top:-1px}.zjapp .end-text[data-v-2b1a346c]:after{left:50%;transform:translateX(-92px)}.zjapp .end-text[data-v-2b1a346c]:before{right:50%;transform:translateX(90px)}.zjapp .end-slot[data-v-2b1a346c]{padding:30px;line-height:18px;text-align:center;color:#c8c8c8}',""])},b225:function(t,e,o){"use strict";o("ef48")},c62c:function(t,e,o){(t.exports=o("690e")(!1)).push([t.i,'.zjapp .app-radio[data-v-2340da0b]{position:relative;line-height:20px;font-size:0}.zjapp .app-radio>*[data-v-2340da0b]{display:inline-block;vertical-align:middle}.zjapp .app-radio .app-radio-icon[data-v-2340da0b]{width:20px;height:20px;border:1px solid #d9d9d9;border-radius:20px}.zjapp .app-radio .app-radio-icon+*[data-v-2340da0b]{margin-left:10px;font-size:16px}.zjapp .app-radio .checked-icon[data-v-2340da0b]{position:relative;border:1px solid #4275e8}.zjapp .app-radio .checked-icon[data-v-2340da0b]:before{content:" ";background:#4275e8;display:inline-block;width:14px;height:14px;border-radius:20px;position:absolute;top:2px;left:2px}',""])},d18d:function(t,e,o){"use strict";(function(t){o("2b45");var a,n=o("4360"),i=o("48f4"),l=o("162a"),r=o("e2a7"),s=o("a500"),c=o("6f9e"),u={};e.a={name:"Scroller",props:{buildingId:{type:String,default:""},hasNext:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},isSync:{type:Boolean,default:!0},endText:{type:String,default:""},memoryScrollTop:{type:Boolean,default:!0},keepScrollTop:{type:Boolean},hasPullDown:{type:Boolean,default:!0},onPullDown:{type:Function}},data:function(){return{pullDist:0,refreshing:!1,pulling:!1,loading:!1,scrollTop:0,isCurrKeyboard:!1,gapBottom:0}},computed:{allowPullDown:function(){return this.hasPullDown&&(!!this.$listeners.pullDown||!!this.onPullDown)},updateTime:function(){return n.a.state.global.businessDownloadTime},numberKeyboardCoverHeight:function(){return n.a.state.global.isNumberInputOpen?n.a.state.global.numberKeyboardHeight-this.gapBottom:0}},mounted:function(){var t=this;c.a.$on("numberKeyboardOpen",this.onNumberKeyboardOpen),this.$nextTick((function(){var e=t.$refs["scroll-warp"]&&t.$refs["scroll-warp"].getBoundingClientRect&&t.$refs["scroll-warp"].getBoundingClientRect();e&&(t.gapBottom=document.documentElement.clientHeight-e.bottom),t.$el&&t.$el.addEventListener("focus",(function(e){var o=e&&e.target,a=o&&o.tagName&&o.tagName.toLowerCase();if("input"===a||"textarea"===a){window.addEventListener("resize",(function e(){var a=o.getBoundingClientRect(),n=t.$el.getBoundingClientRect(),i=a.bottom-n.bottom;i>0&&t.scrollBy(i),window.removeEventListener("resize",e,!1)}),!1)}}),!0)}))},destroyed:function(){c.a.$off("numberKeyboardOpen",this.onNumberKeyboardOpen)},activated:function(){var t=this.keepScrollTop||this.$router.isBack&&this.memoryScrollTop;this.scrollTop&&t&&(this.$refs["scroll-warp"].scrollTop=this.scrollTop)},deactivated:function(){this.memoryScrollTop&&(this.scrollTop=this.$refs["scroll-warp"].scrollTop)},methods:{onScroll:function(t){var e=this,o=this.$refs["scroll-warp"].scrollTop,a=this.$refs["scroll-warp"].scrollHeight;if(o+this.$refs["scroll-warp"].clientHeight>=a-5&&!this.loading&&this.hasNext){this.loading=!0;var n=this.$listeners.loadNext();n&&n.then&&"function"==typeof n.then?n.then((function(){e.loading=!1})):this.loading=!1}this.$emit("scroll",t)},getTouchDiretion:function(t){if(!(u&&t&&t.touches&&t.touches[0]))return"";var e=t.touches[0].clientX,o=t.touches[0].clientY;return Math.abs(o-u.y)>Math.abs(e-u.x)&&Math.abs(o-u.y)>=3?o>u.y?"down":"up":""},onTouchstart:function(t){this.allowPullDown&&t.touches&&1===t.touches.length&&(u={x:t.touches[0].clientX,y:t.touches[0].clientY,scrollTop:this.$refs["scroll-warp"].scrollTop,pullDist:this.pullDist})},onTouchmove:function(t){if(this.allowPullDown&&t.touches&&1===t.touches.length){var e=this.$refs["scroll-warp"].scrollTop,o=t.touches[0].clientY,a=o-u.y,n=this.getTouchDiretion(t);"down"===n?!this.refreshing&&e<=0?(this.pulling=!0,this.pullDist=(a-u.scrollTop)/2,t.preventDefault()):this.pulling=!1:"up"===n?this.pullDist>0&&(this.pullDist=u.pullDist-(u.y-o),t.preventDefault()):this.pullDist=u.pullDist}},onTouchend:function(){var t=this;this.allowPullDown&&(u={},this.pulling=!1,this.pullDist>=70&&this.isSync?this.refreshing?this.makePullTo(70):this.makePullTo(70).then((function(){if(t.refreshing=!0,t.onPullDown){var e=t.onPullDown();e&&e.then&&"function"==typeof e?e.finally((function(){t.refreshing=!1,t.makePullTo(0)})):(t.refreshing=!1,t.makePullTo(0))}else t.dataSync().then((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")})).catch((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")}))})):(this.refreshing=!1,this.makePullTo(0)))},makePullTo:function(t){var e=this,o=this.pullDist,a=t,n=a-o,i=o;return o===a?Promise.resolve():new Promise((function(t){!function l(){window.requestAnimationFrame((function(){i+=n/6,e.pullDist=i,o<a&&i<a||o>a&&i>a?l():(e.pullDist=a,e.refreshing=!1,t())}))}()}))},dataSync:function(){var t,e=i.default.getCurrentModuleCode(),o=i.default.getCurrentRoute(),a=o.meta&&o.meta.isTodo;if(i.default.isModuleNeedBuilding(e)&&!a){if(!this.buildingId)return new Promise((function(t){setTimeout((function(){t()}),500)}));t=this.buildingId}return s.a.addTrack("公共-手动下拉刷新","",""),l.a.beginManualUpdate(),i.default.checkSync(t).then((function(t){return l.a.endManualUpdate(),t})).catch((function(t){$log.error("下拉刷新错误",t),t&&"Error: Network Error"===t.toString()?r.a.alert("当前网络无法同步数据"):r.a.alert(t),l.a.endManualUpdate()}))},getScrollHeight:function(){return this.$refs["scroll-warp"].offsetHeight},getScrollTop:function(){return this.$refs["scroll-warp"].scrollTop},setScrollTop:function(t){this.$refs["scroll-warp"].scrollTop=t},scrollBy:function(t){var e=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=this.getScrollTop(),i=n+t,l=Math.round(o/16.7),r=t/l,s=n,c=a=+new Date;return n===i?Promise.resolve():new Promise((function(t){!function o(){window.requestAnimationFrame((function(){c===a&&(s+=r,e.$refs["scroll-warp"].scrollTop=s,n<i&&s<i||n>i&&s>i?o():(e.$refs["scroll-warp"].scrollTop=i,t()))}))}()}))},scrollTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,o=this.getScrollTop(),a=t-o;return this.scrollBy(a,e)},scrollToEle:function(t){var e=t.keyboardHeight||232,o=(t=t.$el?t.$el:t).getBoundingClientRect(),a=this.$refs["scroll-warp"].getBoundingClientRect();if(o&&a){var i=document.documentElement.clientHeight-(n.a.state.global.isNumberInputOpen?e:0),l=a.bottom<i?a.bottom:i,r=a.top-o.top,s=o.bottom-l;r>0?this.scrollBy(-r-10):s>0&&this.scrollBy(s+10)}},isCurrent:function(e,o){var a=this;e.length&&t.each(e,(function(t){t._uid===o?a.isCurrKeyboard=!0:a.isCurrent(t.$children,o)}))},onNumberKeyboardOpen:function(t){this.isCurrKeyboard=!1,this.isCurrent(this.$children,t._uid),this.isCurrKeyboard&&this.scrollToEle(t)}}}}).call(this,o("391c"))},dc52:function(t,e,o){"use strict";var a={props:{text:{type:String,default:""},checked:{type:Boolean,default:!1},changeRadio:{type:Function,default:function(){return 0}}},data:function(){return{status:!1}},watch:{checked:function(t){this.status=t}},created:function(){this.status=this.checked},methods:{clickEvent:function(){this.status=!0,this.$emit("changeRadio",this.status)}}},n=(o("9455"),o("17cc")),i=Object(n.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-radio",on:{click:this.clickEvent}},[e("span",{class:{"app-radio-icon":!0,"checked-icon":this.status}}),this.text?e("span",[this._v(this._s(this.text))]):e("span",[this._t("default")],2)])}),[],!1,null,"2340da0b",null);e.a=i.exports},ef48:function(t,e,o){var a=o("9d55");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,o("85cb").default)("a1a65c0c",a,!0,{sourceMap:!1,shadowMode:!1})},f272:function(t,e,o){var a=o("c62c");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,o("85cb").default)("6a97aac3",a,!0,{sourceMap:!1,shadowMode:!1})}}]);