(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-511d2efa","chunk-739f37c8"],{"0731":function(t,e,o){"use strict";(function(t){o("e697");var a,i,n=o("fd50"),l=o("ed08"),s=o("3516"),r=o("f97c"),c={},d={isLoading:!0,batchList:[],mode:"飞检&专项",defaultBatch:{},init:function(e){d.isLoading=!0;var o=r.a.getDefaultProject().id;return s.a.hasLocalChanged(c[d.mode])||a!==d.mode||i!==o?(d.batchList=[],s.a.getBatchList(d.mode,o).then((function(t){d.batchList=t,c[d.mode]=l.a.now(),a=d.mode,i=o})).then((function(){var e;$rootScope.newBatch&&((e=t.find(d.batchList,{id:$rootScope.newBatch.id}))&&d.selectBatch(e),delete $rootScope.newBatch)})).then((function(){return d.getDefaultBatch()})).then((function(){s.a.downloadBatch(d.mode).then((function(t){if(t.length)return s.a.getBatchList(d.mode,o).then((function(t){d.batchList=t,c[d.mode]=l.a.now(),a=d.mode,i=o}))}))})).finally((function(){d.isLoading=!1}))):(d.isLoading=!1,n.a.when())},getDefaultBatch:function(){var t=r.a.getDefaultProject().id;return s.a.getDefaultBatch("飞检&专项",t).then((function(t){d.defaultBatch=t||(d.batchList[0]||{})}))},selectBatch:function(t){var e=r.a.getDefaultProject().id;s.a.selectBatch(t,e),d.defaultBatch=t}};e.a=d}).call(this,o("391c"))},"32ec":function(t,e,o){"use strict";o.r(e);o("f548");var a=o("774b"),i=o("07d2"),n=o("dc52"),l=o("0731"),s=o("3516"),r=o("3bd5"),c={name:"FlyInspectBatchList",components:{Scroller:a.default,Item:i.default,appRadio:n.a},data:function(){return{model:{isLoading:!1,batchList:[]},userId:r.a.getUser().user_id,hasNewBatchRights:!1}},created:function(){this.init()},activated:function(){this.init()},methods:{init:function(){var t=this;this.$set(this.model,"isLoading",!0),s.a.checkUserBatchRights(this.userId).then((function(e){t.hasNewBatchRights=!!e})),l.a.init().then((function(){t.model=l.a}))},backEvent:function(){this.$router.replace("/fly-inspect-index",!0)},addNew:function(){this.$router.push("/fly-inspect-batch-add")},onRefresh:function(t){l.a.init().catch((function(t){$log.log(t)}))},selectBatch:function(t,e){var o=this;this.model.selectBatch(t),window.setTimeout((function(){o.$router.go(-1)}),300)},batchDetail:function(t){this.$router.push("/fly-inspect-batch-detail/".concat(t.id))}}},d=(o("8da1"),o("17cc")),u=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("page-content",{attrs:{title:"检查批次","show-go-root":!0,"on-close":t.backEvent}},[t.hasNewBatchRights?o("div",{staticClass:"header-btn",attrs:{slot:"header-bar-right"},on:{click:t.addNew},slot:"header-bar-right"},[t._v("\n    新建批次\n  ")]):t._e(),o("scroller",{attrs:{"is-empty":!t.model.batchList.length},on:{pullDown:t.onRefresh}},[!t.model.isLoading&&t.model.batchList.length?t._l(t.model.batchList,(function(e){return o("item",{key:e.id,attrs:{border:"bottom"},on:{click:function(o){t.selectBatch(e)}}},[o("app-radio",{attrs:{checked:e.id===t.model.defaultBatch.id}}),o("div",{staticClass:"item-text"},[t._v(t._s(e.name))]),o("div",{directives:[{name:"track",rawName:"v-track",value:"飞检&专项-批次列表-详情",expression:"'飞检&专项-批次列表-详情'"}],staticClass:"btn-detail",on:{click:function(o){o.stopPropagation(),t.batchDetail(e)}}},[t._v("\n          详情\n        ")])],1)})):t._e(),o("loading-status",{attrs:{"is-loading":t.model.isLoading,"is-empty":!t.model.isLoading&&!t.model.batchList.length,"empty-text":"这里暂无批次"}})],2)],1)}),[],!1,null,"dcbe336c",null);e.default=u.exports},"774b":function(t,e,o){"use strict";o.r(e);var a=o("d18d").a,i=(o("b225"),o("17cc")),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"scroll-warp",staticClass:"scroll-warp",class:{"scroll-warp-pulling":t.pulling,"scroll-warp-complete":!t.hasNext&&!t.isEmpty,"scroll-warp-empty":t.isEmpty},style:{"padding-bottom":t.numberKeyboardCoverHeight+"px"},on:{scroll:t.onScroll,touchstart:t.onTouchstart,touchmove:t.onTouchmove,touchend:t.onTouchend}},[t.allowPullDown?o("div",{staticClass:"pull-refresh-warp",style:{height:t.pullDist+"px"}},[o("div",{staticClass:"pull-refresh"},[o("div",{staticClass:"animation-refresher",class:{refreshing:t.refreshing}}),t.updateTime?o("p",{staticClass:"pull-refresh-date"},[t._v("最后成功同步："+t._s(t.updateTime))]):t._e()])]):t._e(),t._t("default"),t.loading?o("div",{staticClass:"page-loading"},[o("svg",{staticClass:"svg-loading",attrs:{viewBox:"0 0 80 80"}},[o("circle",{attrs:{cx:"40",cy:"40",r:"36"}})])]):t._e(),t.hasNext||t.isEmpty?t._e():[t.$slots.end?t._t("end"):t._e(),!t.$slots.end&&t.endText?o("div",{staticClass:"end-text"},[t._v("\n      "+t._s(t.endText)+"\n    ")]):t._e()]],2)}),[],!1,null,"2b1a346c",null);e.default=n.exports},"8da1":function(t,e,o){"use strict";o("adc2")},9455:function(t,e,o){"use strict";o("f272")},"98bb":function(t,e,o){(t.exports=o("690e")(!1)).push([t.i,'.zjapp .item[data-v-dcbe336c]{padding-right:0}[data-v-dcbe336c] .app-radio{margin-top:5px}.zjapp .btn-detail[data-v-dcbe336c]{position:relative;padding:0 20px;height:22px;line-height:22px;margin:4px 0;color:#8c8c8c;border-left:1px solid #d9d9d9}.zjapp .btn-detail[data-v-dcbe336c]:before{position:absolute;content:"";width:100%;height:46px;top:-12px;left:0}',""])},"9d55":function(t,e,o){(t.exports=o("690e")(!1)).push([t.i,'.zjapp .scroll-warp[data-v-2b1a346c]{flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.zjapp .scroll-warp-pulling[data-v-2b1a346c]{overflow:hidden}.zjapp .scroll-warp-complete[data-v-2b1a346c]:after{content:"";display:block;height:100px}.zjapp .scroll-warp-empty[data-v-2b1a346c]{display:flex;flex-direction:column}.zjapp .pull-refresh-warp[data-v-2b1a346c]{position:relative;height:0;overflow:hidden}.zjapp .pull-refresh[data-v-2b1a346c]{position:absolute;left:0;bottom:0;height:70px;width:100%;padding:6px;text-align:center}.zjapp .pull-refresh-date[data-v-2b1a346c]{margin-top:4px;height:16px;line-height:16px;font-size:12px;color:#bcbcbc}.zjapp .page-loading[data-v-2b1a346c]{padding:10px;text-align:center}.zjapp .end-text[data-v-2b1a346c]{color:#c8c8c8;background:#f4f4f4;position:relative;line-height:76px;height:76px;text-align:center}.zjapp .end-text[data-v-2b1a346c]:after,.zjapp .end-text[data-v-2b1a346c]:before{content:"";position:absolute;width:48px;height:1px;background:#e4e4e4;top:50%;margin-top:-1px}.zjapp .end-text[data-v-2b1a346c]:after{left:50%;transform:translateX(-92px)}.zjapp .end-text[data-v-2b1a346c]:before{right:50%;transform:translateX(90px)}.zjapp .end-slot[data-v-2b1a346c]{padding:30px;line-height:18px;text-align:center;color:#c8c8c8}',""])},adc2:function(t,e,o){var a=o("98bb");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,o("85cb").default)("3ffcf52a",a,!0,{sourceMap:!1,shadowMode:!1})},b225:function(t,e,o){"use strict";o("ef48")},c62c:function(t,e,o){(t.exports=o("690e")(!1)).push([t.i,'.zjapp .app-radio[data-v-2340da0b]{position:relative;line-height:20px;font-size:0}.zjapp .app-radio>*[data-v-2340da0b]{display:inline-block;vertical-align:middle}.zjapp .app-radio .app-radio-icon[data-v-2340da0b]{width:20px;height:20px;border:1px solid #d9d9d9;border-radius:20px}.zjapp .app-radio .app-radio-icon+*[data-v-2340da0b]{margin-left:10px;font-size:16px}.zjapp .app-radio .checked-icon[data-v-2340da0b]{position:relative;border:1px solid #4275e8}.zjapp .app-radio .checked-icon[data-v-2340da0b]:before{content:" ";background:#4275e8;display:inline-block;width:14px;height:14px;border-radius:20px;position:absolute;top:2px;left:2px}',""])},d18d:function(t,e,o){"use strict";(function(t){o("2b45");var a,i=o("4360"),n=o("48f4"),l=o("162a"),s=o("e2a7"),r=o("a500"),c=o("6f9e"),d={};e.a={name:"Scroller",props:{buildingId:{type:String,default:""},hasNext:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},isSync:{type:Boolean,default:!0},endText:{type:String,default:""},memoryScrollTop:{type:Boolean,default:!0},keepScrollTop:{type:Boolean},hasPullDown:{type:Boolean,default:!0},onPullDown:{type:Function}},data:function(){return{pullDist:0,refreshing:!1,pulling:!1,loading:!1,scrollTop:0,isCurrKeyboard:!1,gapBottom:0}},computed:{allowPullDown:function(){return this.hasPullDown&&(!!this.$listeners.pullDown||!!this.onPullDown)},updateTime:function(){return i.a.state.global.businessDownloadTime},numberKeyboardCoverHeight:function(){return i.a.state.global.isNumberInputOpen?i.a.state.global.numberKeyboardHeight-this.gapBottom:0}},mounted:function(){var t=this;c.a.$on("numberKeyboardOpen",this.onNumberKeyboardOpen),this.$nextTick((function(){var e=t.$refs["scroll-warp"]&&t.$refs["scroll-warp"].getBoundingClientRect&&t.$refs["scroll-warp"].getBoundingClientRect();e&&(t.gapBottom=document.documentElement.clientHeight-e.bottom),t.$el&&t.$el.addEventListener("focus",(function(e){var o=e&&e.target,a=o&&o.tagName&&o.tagName.toLowerCase();if("input"===a||"textarea"===a){window.addEventListener("resize",(function e(){var a=o.getBoundingClientRect(),i=t.$el.getBoundingClientRect(),n=a.bottom-i.bottom;n>0&&t.scrollBy(n),window.removeEventListener("resize",e,!1)}),!1)}}),!0)}))},destroyed:function(){c.a.$off("numberKeyboardOpen",this.onNumberKeyboardOpen)},activated:function(){var t=this.keepScrollTop||this.$router.isBack&&this.memoryScrollTop;this.scrollTop&&t&&(this.$refs["scroll-warp"].scrollTop=this.scrollTop)},deactivated:function(){this.memoryScrollTop&&(this.scrollTop=this.$refs["scroll-warp"].scrollTop)},methods:{onScroll:function(t){var e=this,o=this.$refs["scroll-warp"].scrollTop,a=this.$refs["scroll-warp"].scrollHeight;if(o+this.$refs["scroll-warp"].clientHeight>=a-5&&!this.loading&&this.hasNext){this.loading=!0;var i=this.$listeners.loadNext();i&&i.then&&"function"==typeof i.then?i.then((function(){e.loading=!1})):this.loading=!1}this.$emit("scroll",t)},getTouchDiretion:function(t){if(!(d&&t&&t.touches&&t.touches[0]))return"";var e=t.touches[0].clientX,o=t.touches[0].clientY;return Math.abs(o-d.y)>Math.abs(e-d.x)&&Math.abs(o-d.y)>=3?o>d.y?"down":"up":""},onTouchstart:function(t){this.allowPullDown&&t.touches&&1===t.touches.length&&(d={x:t.touches[0].clientX,y:t.touches[0].clientY,scrollTop:this.$refs["scroll-warp"].scrollTop,pullDist:this.pullDist})},onTouchmove:function(t){if(this.allowPullDown&&t.touches&&1===t.touches.length){var e=this.$refs["scroll-warp"].scrollTop,o=t.touches[0].clientY,a=o-d.y,i=this.getTouchDiretion(t);"down"===i?!this.refreshing&&e<=0?(this.pulling=!0,this.pullDist=(a-d.scrollTop)/2,t.preventDefault()):this.pulling=!1:"up"===i?this.pullDist>0&&(this.pullDist=d.pullDist-(d.y-o),t.preventDefault()):this.pullDist=d.pullDist}},onTouchend:function(){var t=this;this.allowPullDown&&(d={},this.pulling=!1,this.pullDist>=70&&this.isSync?this.refreshing?this.makePullTo(70):this.makePullTo(70).then((function(){if(t.refreshing=!0,t.onPullDown){var e=t.onPullDown();e&&e.then&&"function"==typeof e?e.finally((function(){t.refreshing=!1,t.makePullTo(0)})):(t.refreshing=!1,t.makePullTo(0))}else t.dataSync().then((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")})).catch((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")}))})):(this.refreshing=!1,this.makePullTo(0)))},makePullTo:function(t){var e=this,o=this.pullDist,a=t,i=a-o,n=o;return o===a?Promise.resolve():new Promise((function(t){!function l(){window.requestAnimationFrame((function(){n+=i/6,e.pullDist=n,o<a&&n<a||o>a&&n>a?l():(e.pullDist=a,e.refreshing=!1,t())}))}()}))},dataSync:function(){var t,e=n.default.getCurrentModuleCode(),o=n.default.getCurrentRoute(),a=o.meta&&o.meta.isTodo;if(n.default.isModuleNeedBuilding(e)&&!a){if(!this.buildingId)return new Promise((function(t){setTimeout((function(){t()}),500)}));t=this.buildingId}return r.a.addTrack("公共-手动下拉刷新","",""),l.a.beginManualUpdate(),n.default.checkSync(t).then((function(t){return l.a.endManualUpdate(),t})).catch((function(t){$log.error("下拉刷新错误",t),t&&"Error: Network Error"===t.toString()?s.a.alert("当前网络无法同步数据"):s.a.alert(t),l.a.endManualUpdate()}))},getScrollHeight:function(){return this.$refs["scroll-warp"].offsetHeight},getScrollTop:function(){return this.$refs["scroll-warp"].scrollTop},setScrollTop:function(t){this.$refs["scroll-warp"].scrollTop=t},scrollBy:function(t){var e=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,i=this.getScrollTop(),n=i+t,l=Math.round(o/16.7),s=t/l,r=i,c=a=+new Date;return i===n?Promise.resolve():new Promise((function(t){!function o(){window.requestAnimationFrame((function(){c===a&&(r+=s,e.$refs["scroll-warp"].scrollTop=r,i<n&&r<n||i>n&&r>n?o():(e.$refs["scroll-warp"].scrollTop=n,t()))}))}()}))},scrollTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,o=this.getScrollTop(),a=t-o;return this.scrollBy(a,e)},scrollToEle:function(t){var e=t.keyboardHeight||232,o=(t=t.$el?t.$el:t).getBoundingClientRect(),a=this.$refs["scroll-warp"].getBoundingClientRect();if(o&&a){var n=document.documentElement.clientHeight-(i.a.state.global.isNumberInputOpen?e:0),l=a.bottom<n?a.bottom:n,s=a.top-o.top,r=o.bottom-l;s>0?this.scrollBy(-s-10):r>0&&this.scrollBy(r+10)}},isCurrent:function(e,o){var a=this;e.length&&t.each(e,(function(t){t._uid===o?a.isCurrKeyboard=!0:a.isCurrent(t.$children,o)}))},onNumberKeyboardOpen:function(t){this.isCurrKeyboard=!1,this.isCurrent(this.$children,t._uid),this.isCurrKeyboard&&this.scrollToEle(t)}}}}).call(this,o("391c"))},dc52:function(t,e,o){"use strict";var a={props:{text:{type:String,default:""},checked:{type:Boolean,default:!1},changeRadio:{type:Function,default:function(){return 0}}},data:function(){return{status:!1}},watch:{checked:function(t){this.status=t}},created:function(){this.status=this.checked},methods:{clickEvent:function(){this.status=!0,this.$emit("changeRadio",this.status)}}},i=(o("9455"),o("17cc")),n=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-radio",on:{click:this.clickEvent}},[e("span",{class:{"app-radio-icon":!0,"checked-icon":this.status}}),this.text?e("span",[this._v(this._s(this.text))]):e("span",[this._t("default")],2)])}),[],!1,null,"2340da0b",null);e.a=n.exports},ef48:function(t,e,o){var a=o("9d55");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,o("85cb").default)("a1a65c0c",a,!0,{sourceMap:!1,shadowMode:!1})},f272:function(t,e,o){var a=o("c62c");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,o("85cb").default)("6a97aac3",a,!0,{sourceMap:!1,shadowMode:!1})}}]);