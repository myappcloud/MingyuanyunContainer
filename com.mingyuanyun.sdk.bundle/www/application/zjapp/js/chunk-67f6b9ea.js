(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-67f6b9ea","chunk-739f37c8"],{"28b40":function(t,e,n){"use strict";n.r(e);n("e697");var o=n("774b"),a=n("07d2"),i=n("f7ab"),r=(n("3bd5"),n("6e1b")),l=(n("e2a7"),n("6f9e")),s=n("bc49"),c=n("9416"),u=n("8d95"),d={name:"SpecialInspectCheckitemList",components:{Scroller:o.default,Item:a.default,SynchronizeTipBar:i.a},data:function(){return{title:Object(c.a)(u.a.SPECIAL_INSPECT)||"专项巡检",isLoading:!0,batchId:"",placeId:"",batchData:{},templateConfig:null,pageConfig:null,checkitemListComponent:null}},created:function(){var t=this;Object(l.e)((function(){return t.init()}))},activated:function(){this.batchId=this.$route.query.batchId,this.placeId=this.$route.query.placeId,this.init()},methods:{init:function(){var t=this;return this.getBatchData(this.batchId).then((function(){t.getTemplateConfig(t.batchData.mode),t.$refs.checkitemListComponent&&t.$refs.checkitemListComponent.$emit("reload")})).finally((function(){t.isLoading=!1}))},getBatchData:function(){var t=this;return this.batchId?r.a.getSpecialInspectBatchById(this.batchId).then((function(e){t.batchData=e})):Promise.reject("缺少批次id")},getTemplateConfig:function(t){var e=s.a.templates.find((function(e){return e.mode===t}));if(this.templateConfig!==e){if(this.templateConfig=e,!e)return this.pageConfig=null,void(this.checkitemListComponent=null);this.pageConfig=e.pages.checkitemList,this.checkitemListComponent=e&&e.checkitemListComponent||null}},problemList:function(){this.templateConfig&&this.templateConfig.isProblemPureMode?this.$router.push({path:"/special-inspect-problem-pure-list",query:{placeId:this.placeId}}):this.$router.push({path:"/special-inspect-problem-list",query:{batchId:this.batchData.id,mode:this.batchData.mode}})},onPullDown:function(){var t=this;r.a.recoverDraftFromMmkv().then((function(){return t.init()}))}}},p=n("17cc"),h=Object(p.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page-content",{attrs:{title:t.title}},[!t.isLoading&&t.pageConfig.hasAllProblemList?n("div",{staticClass:"header-btn",attrs:{slot:"header-bar-right"},on:{click:t.problemList},slot:"header-bar-right"},[t._v("\n    全部问题\n  ")]):t._e(),n("synchronize-tip-bar"),n("scroller",{attrs:{"is-empty":t.isLoading},on:{pullDown:t.onPullDown}},[!t.isLoading&&t.checkitemListComponent?n(t.checkitemListComponent,{ref:"checkitemListComponent",tag:"component",attrs:{"batch-data":t.batchData,"place-id":t.placeId}}):t._e(),n("loading-status",{attrs:{"is-loading":t.isLoading}})],1)],1)}),[],!1,null,"2617a66c",null);e.default=h.exports},"2d6e":function(t,e,n){var o=n("7eb2");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n("85cb").default)("53a2fbaa",o,!0,{sourceMap:!1,shadowMode:!1})},"65e9":function(t,e,n){"use strict";(function(t){n("5ab2"),n("6d57"),n("e10e");var o=n("28f8"),a=n("4360"),i=n("48f4"),r=n("162a"),l=n("f2d3"),s=n("6906"),c=n("a18c"),u=n("c745");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a={name:"SynchronizeTipBar",props:{isTodo:{type:Boolean},useDownload:{type:Boolean,default:!0},enterDoCheck:{type:Boolean,default:!0},buildingId:{type:String,default:""},automaticUpdateCallback:{type:Function,default:null}},data:function(){return{currentModuleCode:"",oneUpdateData:!0}},computed:{projId:function(){return a.a.state.global.currentProject.id},waitUploadNum:function(){return a.a.state.global.waitUploadNum},hasTopProgress:function(){return a.a.state.global.hasTopProgress},hasChanged:function(){if(!this.useDownload)return!1;if(this.currentModuleCode){var t,e=i.default.isModuleNeedBuilding(this.currentModuleCode)&&!this.isTodo;return!(e&&!this.buildingId)&&(t=this.isTodo?a.a.state.global.todoChangedStatus||{}:a.a.state.global.businessChangedStatus||{},e?!!t[this.currentModuleCode]&&t[this.currentModuleCode][this.buildingId]:t[this.currentModuleCode])}return!1},show:function(){return(this.hasChanged||this.waitUploadNum)&&!this.hasTopProgress},oneDataSync:function(){return this.$store.state.app.oneDataSync}},watch:{hasChanged:function(t){var e=this;t&&this.$nextTick((function(){setTimeout((function(){var t=e.$refs["synchronize-tip-bar"];if(t&&t.style){t.style.display="none";t.offsetHeight;t.style.display="block"}}),100)}))},buildingId:function(t){this.currentModuleCode&&i.default.isModuleNeedBuilding(this.currentModuleCode)&&t&&(console.log("楼栋重新加载，是否再次自动加载数据：",this.oneUpdateData),this.oneUpdateData&&this.automaticLogic(),this.checkSync())},show:function(t){t?this.$emit("show"):this.$emit("hide")}},activated:function(){this.init()},methods:{init:function(){this.getCurrentModuleCode(),this.enterDoCheck&&!c.a.isBack&&this.checkSync(),this.automaticLogic()},automaticLogic:function(){var t=this;this.$router.isBack||(this.oneUpdateData=!0,u.a.getAutomaticLoadData().then((function(e){$log.log("是否要自动加载 ===> ",e&&t.oneDataSync&&"function"==typeof t.automaticUpdateCallback),e&&t.oneDataSync&&"function"==typeof t.automaticUpdateCallback&&t.dataSync().then((function(e){console.log("是否需要初始化页面 ====> ",Boolean(e)),e&&t.automaticUpdateCallback()}))})))},getCurrentModuleCode:function(){var t=i.default.getCurrentModuleCode(),e=this.isTodo?"todo":"";this.currentModuleCode=t||e},checkSync:function(){var e=this,n="checkDataUpdate",o=this.currentModuleCode,r=this.buildingId,c=a.a.state.global.isLeader?this.projId:"";return!i.default.isModuleNeedBuilding(o)||r||this.isTodo?(this.isTodo&&(n+="_todo"),o&&(n+="_".concat(o)),r&&(n+="_".concat(r)),s.a.execAfterInterval(120,n).then((function(){return e.isTodo?"todo"===o?l.a.getModuleList().then((function(e){var n=t.map(e,"code");return i.default.hasTodoChangedData("",n)})):i.default.hasTodoChangedData("",[o]):i.default.hasBusinessChangedData(c,[o],r)})).then((function(t){if(e.isTodo){var n=p({},a.a.state.global.todoChangedStatus);n[o]=t,a.a.commit("global/SET_TODO_CHANGED_STATUS",n)}else{var i=p({},a.a.state.global.businessChangedStatus);if(r){var l=i[o]?i[o]:{};l[r]=t,i[o]=l}else i[o]=t;a.a.commit("global/SET_BUSINESS_CHANGED_STATUS",i)}})).catch((function(t){return t&&!0===t.timeNotTo?($log.debug(t.msg),!1):$q.reject(t)}))):Promise.resolve()},dataSync:function(){var t=this.currentModuleCode,e=this.buildingId,n=i.default.isModuleNeedBuilding(t),o=n&&!e;return $log.log(["模块名：",t," 楼栋id：",e," 当前模块是否需要楼栋id：",n," 判断是否终止自动更新：",o]),o?Promise.resolve():(this.oneUpdateData=!1,r.a.beginManualUpdate(),i.default.checkSync(e).then((function(t){return r.a.endManualUpdate(),t})).catch((function(t){$log.error("自动更新错误",t),r.a.endManualUpdate()})))}}}}).call(this,n("391c"))},"774b":function(t,e,n){"use strict";n.r(e);var o=n("d18d").a,a=(n("b225"),n("17cc")),i=Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"scroll-warp",staticClass:"scroll-warp",class:{"scroll-warp-pulling":t.pulling,"scroll-warp-complete":!t.hasNext&&!t.isEmpty,"scroll-warp-empty":t.isEmpty},style:{"padding-bottom":t.numberKeyboardCoverHeight+"px"},on:{scroll:t.onScroll,touchstart:t.onTouchstart,touchmove:t.onTouchmove,touchend:t.onTouchend}},[t.allowPullDown?n("div",{staticClass:"pull-refresh-warp",style:{height:t.pullDist+"px"}},[n("div",{staticClass:"pull-refresh"},[n("div",{staticClass:"animation-refresher",class:{refreshing:t.refreshing}}),t.updateTime?n("p",{staticClass:"pull-refresh-date"},[t._v("最后成功同步："+t._s(t.updateTime))]):t._e()])]):t._e(),t._t("default"),t.loading?n("div",{staticClass:"page-loading"},[n("svg",{staticClass:"svg-loading",attrs:{viewBox:"0 0 80 80"}},[n("circle",{attrs:{cx:"40",cy:"40",r:"36"}})])]):t._e(),t.hasNext||t.isEmpty?t._e():[t.$slots.end?t._t("end"):t._e(),!t.$slots.end&&t.endText?n("div",{staticClass:"end-text"},[t._v("\n      "+t._s(t.endText)+"\n    ")]):t._e()]],2)}),[],!1,null,"2b1a346c",null);e.default=i.exports},"7eb2":function(t,e,n){(t.exports=n("690e")(!1)).push([t.i,".zjapp .synchronize-tip-bar[data-v-66826030]{height:30px;padding:5px 15px;line-height:20px;text-align:center;background-color:#ffe6e6;color:#ff6060;font-size:14px}.zjapp .synchronize-tip-bar .icon-caution[data-v-66826030]{line-height:20px;margin-right:5px}@media screen and (-webkit-min-device-pixel-ratio:1){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 100%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:1.5){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 66.6667%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:2){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 50%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:2.625){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 38.0952%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:3){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 33.3333%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:4){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 25%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}",""])},"9d55":function(t,e,n){(t.exports=n("690e")(!1)).push([t.i,'.zjapp .scroll-warp[data-v-2b1a346c]{flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.zjapp .scroll-warp-pulling[data-v-2b1a346c]{overflow:hidden}.zjapp .scroll-warp-complete[data-v-2b1a346c]:after{content:"";display:block;height:100px}.zjapp .scroll-warp-empty[data-v-2b1a346c]{display:flex;flex-direction:column}.zjapp .pull-refresh-warp[data-v-2b1a346c]{position:relative;height:0;overflow:hidden}.zjapp .pull-refresh[data-v-2b1a346c]{position:absolute;left:0;bottom:0;height:70px;width:100%;padding:6px;text-align:center}.zjapp .pull-refresh-date[data-v-2b1a346c]{margin-top:4px;height:16px;line-height:16px;font-size:12px;color:#bcbcbc}.zjapp .page-loading[data-v-2b1a346c]{padding:10px;text-align:center}.zjapp .end-text[data-v-2b1a346c]{color:#c8c8c8;background:#f4f4f4;position:relative;line-height:76px;height:76px;text-align:center}.zjapp .end-text[data-v-2b1a346c]:after,.zjapp .end-text[data-v-2b1a346c]:before{content:"";position:absolute;width:48px;height:1px;background:#e4e4e4;top:50%;margin-top:-1px}.zjapp .end-text[data-v-2b1a346c]:after{left:50%;transform:translateX(-92px)}.zjapp .end-text[data-v-2b1a346c]:before{right:50%;transform:translateX(90px)}.zjapp .end-slot[data-v-2b1a346c]{padding:30px;line-height:18px;text-align:center;color:#c8c8c8}',""])},b225:function(t,e,n){"use strict";n("ef48")},d18d:function(t,e,n){"use strict";(function(t){n("2b45");var o,a=n("4360"),i=n("48f4"),r=n("162a"),l=n("e2a7"),s=n("a500"),c=n("6f9e"),u={};e.a={name:"Scroller",props:{buildingId:{type:String,default:""},hasNext:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},isSync:{type:Boolean,default:!0},endText:{type:String,default:""},memoryScrollTop:{type:Boolean,default:!0},keepScrollTop:{type:Boolean},hasPullDown:{type:Boolean,default:!0},onPullDown:{type:Function}},data:function(){return{pullDist:0,refreshing:!1,pulling:!1,loading:!1,scrollTop:0,isCurrKeyboard:!1,gapBottom:0}},computed:{allowPullDown:function(){return this.hasPullDown&&(!!this.$listeners.pullDown||!!this.onPullDown)},updateTime:function(){return a.a.state.global.businessDownloadTime},numberKeyboardCoverHeight:function(){return a.a.state.global.isNumberInputOpen?a.a.state.global.numberKeyboardHeight-this.gapBottom:0}},mounted:function(){var t=this;c.a.$on("numberKeyboardOpen",this.onNumberKeyboardOpen),this.$nextTick((function(){var e=t.$refs["scroll-warp"]&&t.$refs["scroll-warp"].getBoundingClientRect&&t.$refs["scroll-warp"].getBoundingClientRect();e&&(t.gapBottom=document.documentElement.clientHeight-e.bottom),t.$el&&t.$el.addEventListener("focus",(function(e){var n=e&&e.target,o=n&&n.tagName&&n.tagName.toLowerCase();if("input"===o||"textarea"===o){window.addEventListener("resize",(function e(){var o=n.getBoundingClientRect(),a=t.$el.getBoundingClientRect(),i=o.bottom-a.bottom;i>0&&t.scrollBy(i),window.removeEventListener("resize",e,!1)}),!1)}}),!0)}))},destroyed:function(){c.a.$off("numberKeyboardOpen",this.onNumberKeyboardOpen)},activated:function(){var t=this.keepScrollTop||this.$router.isBack&&this.memoryScrollTop;this.scrollTop&&t&&(this.$refs["scroll-warp"].scrollTop=this.scrollTop)},deactivated:function(){this.memoryScrollTop&&(this.scrollTop=this.$refs["scroll-warp"].scrollTop)},methods:{onScroll:function(t){var e=this,n=this.$refs["scroll-warp"].scrollTop,o=this.$refs["scroll-warp"].scrollHeight;if(n+this.$refs["scroll-warp"].clientHeight>=o-5&&!this.loading&&this.hasNext){this.loading=!0;var a=this.$listeners.loadNext();a&&a.then&&"function"==typeof a.then?a.then((function(){e.loading=!1})):this.loading=!1}this.$emit("scroll",t)},getTouchDiretion:function(t){if(!(u&&t&&t.touches&&t.touches[0]))return"";var e=t.touches[0].clientX,n=t.touches[0].clientY;return Math.abs(n-u.y)>Math.abs(e-u.x)&&Math.abs(n-u.y)>=3?n>u.y?"down":"up":""},onTouchstart:function(t){this.allowPullDown&&t.touches&&1===t.touches.length&&(u={x:t.touches[0].clientX,y:t.touches[0].clientY,scrollTop:this.$refs["scroll-warp"].scrollTop,pullDist:this.pullDist})},onTouchmove:function(t){if(this.allowPullDown&&t.touches&&1===t.touches.length){var e=this.$refs["scroll-warp"].scrollTop,n=t.touches[0].clientY,o=n-u.y,a=this.getTouchDiretion(t);"down"===a?!this.refreshing&&e<=0?(this.pulling=!0,this.pullDist=(o-u.scrollTop)/2,t.preventDefault()):this.pulling=!1:"up"===a?this.pullDist>0&&(this.pullDist=u.pullDist-(u.y-n),t.preventDefault()):this.pullDist=u.pullDist}},onTouchend:function(){var t=this;this.allowPullDown&&(u={},this.pulling=!1,this.pullDist>=70&&this.isSync?this.refreshing?this.makePullTo(70):this.makePullTo(70).then((function(){if(t.refreshing=!0,t.onPullDown){var e=t.onPullDown();e&&e.then&&"function"==typeof e?e.finally((function(){t.refreshing=!1,t.makePullTo(0)})):(t.refreshing=!1,t.makePullTo(0))}else t.dataSync().then((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")})).catch((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")}))})):(this.refreshing=!1,this.makePullTo(0)))},makePullTo:function(t){var e=this,n=this.pullDist,o=t,a=o-n,i=n;return n===o?Promise.resolve():new Promise((function(t){!function r(){window.requestAnimationFrame((function(){i+=a/6,e.pullDist=i,n<o&&i<o||n>o&&i>o?r():(e.pullDist=o,e.refreshing=!1,t())}))}()}))},dataSync:function(){var t,e=i.default.getCurrentModuleCode(),n=i.default.getCurrentRoute(),o=n.meta&&n.meta.isTodo;if(i.default.isModuleNeedBuilding(e)&&!o){if(!this.buildingId)return new Promise((function(t){setTimeout((function(){t()}),500)}));t=this.buildingId}return s.a.addTrack("公共-手动下拉刷新","",""),r.a.beginManualUpdate(),i.default.checkSync(t).then((function(t){return r.a.endManualUpdate(),t})).catch((function(t){$log.error("下拉刷新错误",t),t&&"Error: Network Error"===t.toString()?l.a.alert("当前网络无法同步数据"):l.a.alert(t),r.a.endManualUpdate()}))},getScrollHeight:function(){return this.$refs["scroll-warp"].offsetHeight},getScrollTop:function(){return this.$refs["scroll-warp"].scrollTop},setScrollTop:function(t){this.$refs["scroll-warp"].scrollTop=t},scrollBy:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,a=this.getScrollTop(),i=a+t,r=Math.round(n/16.7),l=t/r,s=a,c=o=+new Date;return a===i?Promise.resolve():new Promise((function(t){!function n(){window.requestAnimationFrame((function(){c===o&&(s+=l,e.$refs["scroll-warp"].scrollTop=s,a<i&&s<i||a>i&&s>i?n():(e.$refs["scroll-warp"].scrollTop=i,t()))}))}()}))},scrollTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=this.getScrollTop(),o=t-n;return this.scrollBy(o,e)},scrollToEle:function(t){var e=t.keyboardHeight||232,n=(t=t.$el?t.$el:t).getBoundingClientRect(),o=this.$refs["scroll-warp"].getBoundingClientRect();if(n&&o){var i=document.documentElement.clientHeight-(a.a.state.global.isNumberInputOpen?e:0),r=o.bottom<i?o.bottom:i,l=o.top-n.top,s=n.bottom-r;l>0?this.scrollBy(-l-10):s>0&&this.scrollBy(s+10)}},isCurrent:function(e,n){var o=this;e.length&&t.each(e,(function(t){t._uid===n?o.isCurrKeyboard=!0:o.isCurrent(t.$children,n)}))},onNumberKeyboardOpen:function(t){this.isCurrKeyboard=!1,this.isCurrent(this.$children,t._uid),this.isCurrKeyboard&&this.scrollToEle(t)}}}}).call(this,n("391c"))},ef48:function(t,e,n){var o=n("9d55");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n("85cb").default)("a1a65c0c",o,!0,{sourceMap:!1,shadowMode:!1})},f7ab:function(t,e,n){"use strict";var o=n("65e9").a,a=(n("f7d4"),n("17cc")),i=Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{ref:"synchronize-tip-bar",staticClass:"synchronize-tip-bar"},[n("icon",{attrs:{name:"caution"}}),t.waitUploadNum?n("span",[t._v("您有"+t._s(t.waitUploadNum)+"条数据待上传")]):t._e(),!t.waitUploadNum&&t.hasChanged?n("span",[t._v("有新数据")]):t._e(),t._v("\n  ，下拉可"+t._s(t.waitUploadNum?"上传":"刷新")+"\n")],1):t._e()}),[],!1,null,"66826030",null);e.a=i.exports},f7d4:function(t,e,n){"use strict";n("2d6e")}}]);