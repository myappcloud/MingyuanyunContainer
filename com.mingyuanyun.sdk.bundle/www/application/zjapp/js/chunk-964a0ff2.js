(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-964a0ff2","chunk-739f37c8"],{"26fa":function(t,e,o){"use strict";o("f0e4")},"2d6e":function(t,e,o){var n=o("7eb2");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,o("85cb").default)("53a2fbaa",n,!0,{sourceMap:!1,shadowMode:!1})},"65e9":function(t,e,o){"use strict";(function(t){o("5ab2"),o("6d57"),o("e10e");var n=o("28f8"),a=o("4360"),i=o("48f4"),r=o("162a"),s=o("f2d3"),l=o("6906"),c=o("a18c"),u=o("c745");function d(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function p(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?d(Object(o),!0).forEach((function(e){Object(n.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}e.a={name:"SynchronizeTipBar",props:{isTodo:{type:Boolean},useDownload:{type:Boolean,default:!0},enterDoCheck:{type:Boolean,default:!0},buildingId:{type:String,default:""},automaticUpdateCallback:{type:Function,default:null}},data:function(){return{currentModuleCode:"",oneUpdateData:!0}},computed:{projId:function(){return a.a.state.global.currentProject.id},waitUploadNum:function(){return a.a.state.global.waitUploadNum},hasTopProgress:function(){return a.a.state.global.hasTopProgress},hasChanged:function(){if(!this.useDownload)return!1;if(this.currentModuleCode){var t,e=i.default.isModuleNeedBuilding(this.currentModuleCode)&&!this.isTodo;return!(e&&!this.buildingId)&&(t=this.isTodo?a.a.state.global.todoChangedStatus||{}:a.a.state.global.businessChangedStatus||{},e?!!t[this.currentModuleCode]&&t[this.currentModuleCode][this.buildingId]:t[this.currentModuleCode])}return!1},show:function(){return(this.hasChanged||this.waitUploadNum)&&!this.hasTopProgress},oneDataSync:function(){return this.$store.state.app.oneDataSync}},watch:{hasChanged:function(t){var e=this;t&&this.$nextTick((function(){setTimeout((function(){var t=e.$refs["synchronize-tip-bar"];if(t&&t.style){t.style.display="none";t.offsetHeight;t.style.display="block"}}),100)}))},buildingId:function(t){this.currentModuleCode&&i.default.isModuleNeedBuilding(this.currentModuleCode)&&t&&(console.log("楼栋重新加载，是否再次自动加载数据：",this.oneUpdateData),this.oneUpdateData&&this.automaticLogic(),this.checkSync())},show:function(t){t?this.$emit("show"):this.$emit("hide")}},activated:function(){this.init()},methods:{init:function(){this.getCurrentModuleCode(),this.enterDoCheck&&!c.a.isBack&&this.checkSync(),this.automaticLogic()},automaticLogic:function(){var t=this;this.$router.isBack||(this.oneUpdateData=!0,u.a.getAutomaticLoadData().then((function(e){$log.log("是否要自动加载 ===> ",e&&t.oneDataSync&&"function"==typeof t.automaticUpdateCallback),e&&t.oneDataSync&&"function"==typeof t.automaticUpdateCallback&&t.dataSync().then((function(e){console.log("是否需要初始化页面 ====> ",Boolean(e)),e&&t.automaticUpdateCallback()}))})))},getCurrentModuleCode:function(){var t=i.default.getCurrentModuleCode(),e=this.isTodo?"todo":"";this.currentModuleCode=t||e},checkSync:function(){var e=this,o="checkDataUpdate",n=this.currentModuleCode,r=this.buildingId,c=a.a.state.global.isLeader?this.projId:"";return!i.default.isModuleNeedBuilding(n)||r||this.isTodo?(this.isTodo&&(o+="_todo"),n&&(o+="_".concat(n)),r&&(o+="_".concat(r)),l.a.execAfterInterval(120,o).then((function(){return e.isTodo?"todo"===n?s.a.getModuleList().then((function(e){var o=t.map(e,"code");return i.default.hasTodoChangedData("",o)})):i.default.hasTodoChangedData("",[n]):i.default.hasBusinessChangedData(c,[n],r)})).then((function(t){if(e.isTodo){var o=p({},a.a.state.global.todoChangedStatus);o[n]=t,a.a.commit("global/SET_TODO_CHANGED_STATUS",o)}else{var i=p({},a.a.state.global.businessChangedStatus);if(r){var s=i[n]?i[n]:{};s[r]=t,i[n]=s}else i[n]=t;a.a.commit("global/SET_BUSINESS_CHANGED_STATUS",i)}})).catch((function(t){return t&&!0===t.timeNotTo?($log.debug(t.msg),!1):$q.reject(t)}))):Promise.resolve()},dataSync:function(){var t=this.currentModuleCode,e=this.buildingId,o=i.default.isModuleNeedBuilding(t),n=o&&!e;return $log.log(["模块名：",t," 楼栋id：",e," 当前模块是否需要楼栋id：",o," 判断是否终止自动更新：",n]),n?Promise.resolve():(this.oneUpdateData=!1,r.a.beginManualUpdate(),i.default.checkSync(e).then((function(t){return r.a.endManualUpdate(),t})).catch((function(t){$log.error("自动更新错误",t),r.a.endManualUpdate()})))}}}}).call(this,o("391c"))},"774b":function(t,e,o){"use strict";o.r(e);var n=o("d18d").a,a=(o("b225"),o("17cc")),i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"scroll-warp",staticClass:"scroll-warp",class:{"scroll-warp-pulling":t.pulling,"scroll-warp-complete":!t.hasNext&&!t.isEmpty,"scroll-warp-empty":t.isEmpty},style:{"padding-bottom":t.numberKeyboardCoverHeight+"px"},on:{scroll:t.onScroll,touchstart:t.onTouchstart,touchmove:t.onTouchmove,touchend:t.onTouchend}},[t.allowPullDown?o("div",{staticClass:"pull-refresh-warp",style:{height:t.pullDist+"px"}},[o("div",{staticClass:"pull-refresh"},[o("div",{staticClass:"animation-refresher",class:{refreshing:t.refreshing}}),t.updateTime?o("p",{staticClass:"pull-refresh-date"},[t._v("最后成功同步："+t._s(t.updateTime))]):t._e()])]):t._e(),t._t("default"),t.loading?o("div",{staticClass:"page-loading"},[o("svg",{staticClass:"svg-loading",attrs:{viewBox:"0 0 80 80"}},[o("circle",{attrs:{cx:"40",cy:"40",r:"36"}})])]):t._e(),t.hasNext||t.isEmpty?t._e():[t.$slots.end?t._t("end"):t._e(),!t.$slots.end&&t.endText?o("div",{staticClass:"end-text"},[t._v("\n      "+t._s(t.endText)+"\n    ")]):t._e()]],2)}),[],!1,null,"2b1a346c",null);e.default=i.exports},"7e74":function(t,e,o){(t.exports=o("690e")(!1)).push([t.i,".zjapp .item[data-v-1c3ac7e7]{background-position:75px bottom;background-color:#fff;align-items:center}.zjapp .item[data-v-1c3ac7e7]:last-child{background-position:bottom}.zjapp .item-ele[data-v-1c3ac7e7]{padding-right:15px}.zjapp .module-icon[data-v-1c3ac7e7]{width:45px;height:45px}.zjapp .title[data-v-1c3ac7e7]{color:#333;font-size:16px;line-height:28px;margin:0}.zjapp .detail[data-v-1c3ac7e7]{color:#8c8c8c;font-size:14px;line-height:22px}.zjapp .module-count[data-v-1c3ac7e7]{font-size:14px}.zjapp .todo-count[data-v-1c3ac7e7]{font-size:24px;margin-right:5px}.zjapp .layout-content[data-v-1c3ac7e7]{display:flex;overflow:hidden}.zjapp .todo-module-title .unread[data-v-1c3ac7e7]{display:inline-block;width:10px;height:10px;border-radius:5px;vertical-align:top;margin-top:7px;margin-right:5px;background-color:red}",""])},"7eb2":function(t,e,o){(t.exports=o("690e")(!1)).push([t.i,".zjapp .synchronize-tip-bar[data-v-66826030]{height:30px;padding:5px 15px;line-height:20px;text-align:center;background-color:#ffe6e6;color:#ff6060;font-size:14px}.zjapp .synchronize-tip-bar .icon-caution[data-v-66826030]{line-height:20px;margin-right:5px}@media screen and (-webkit-min-device-pixel-ratio:1){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 100%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:1.5){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 66.6667%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:2){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 50%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:2.625){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 38.0952%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:3){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 33.3333%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:4){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 25%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}",""])},"9d55":function(t,e,o){(t.exports=o("690e")(!1)).push([t.i,'.zjapp .scroll-warp[data-v-2b1a346c]{flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.zjapp .scroll-warp-pulling[data-v-2b1a346c]{overflow:hidden}.zjapp .scroll-warp-complete[data-v-2b1a346c]:after{content:"";display:block;height:100px}.zjapp .scroll-warp-empty[data-v-2b1a346c]{display:flex;flex-direction:column}.zjapp .pull-refresh-warp[data-v-2b1a346c]{position:relative;height:0;overflow:hidden}.zjapp .pull-refresh[data-v-2b1a346c]{position:absolute;left:0;bottom:0;height:70px;width:100%;padding:6px;text-align:center}.zjapp .pull-refresh-date[data-v-2b1a346c]{margin-top:4px;height:16px;line-height:16px;font-size:12px;color:#bcbcbc}.zjapp .page-loading[data-v-2b1a346c]{padding:10px;text-align:center}.zjapp .end-text[data-v-2b1a346c]{color:#c8c8c8;background:#f4f4f4;position:relative;line-height:76px;height:76px;text-align:center}.zjapp .end-text[data-v-2b1a346c]:after,.zjapp .end-text[data-v-2b1a346c]:before{content:"";position:absolute;width:48px;height:1px;background:#e4e4e4;top:50%;margin-top:-1px}.zjapp .end-text[data-v-2b1a346c]:after{left:50%;transform:translateX(-92px)}.zjapp .end-text[data-v-2b1a346c]:before{right:50%;transform:translateX(90px)}.zjapp .end-slot[data-v-2b1a346c]{padding:30px;line-height:18px;text-align:center;color:#c8c8c8}',""])},b225:function(t,e,o){"use strict";o("ef48")},be3b:function(t,e,o){"use strict";(function(t){o("f548"),o("cc57");var n=o("ed08"),a=o("f2d3"),i=o("774b"),r=o("48f4"),s=o("07d2"),l=o("f7ab"),c=o("1601"),u=o("6f9e");e.a={name:"Todo",components:{Scroller:i.default,Item:s.default,SynchronizeTipBar:l.a},data:function(){return{isAsyning:!1,moduleList:[],refreshing:!1,queryTime:"",allowIM:!1,unreadCount:0,isLeader:this.$store.state.user.isLeader}},created:function(){var t=this;$log.log("首次进入待办"),this.isAsyning=!0,this.init().then((function(){t.isAsyning=!1})),Object(u.e)(this.init)},activated:function(){var t=this;$log.log("进入待办activated"),this.isAsyning||this.init(),c.a.allowIm().then((function(e){t.allowIM=e})),c.a.getTotalUnreadCount().then((function(e){t.unreadCount=e}))},methods:{init:function(){var e=this;return a.a.getModuleList().then((function(o){t.isEmpty(e.moduleList)&&(e.moduleList=t.map(o,(function(t){return{name:t.name,code:t.code,icon:t.todo.icon,todoCount:0,doneCount:0,ccCount:0,module:t}}))),e.getModuleList()}))},entryApplyDailyClassifyPage:function(){this.$router.push({name:"ApplyDailyClassify"})},imList:function(){this.$router.push("/im-list")},gotoList:function(t){this.$router.push({name:"TodoList",params:{module:t.code},query:{online:t.module.todo.online}})},onRefresh:function(){this.init()},getModuleList:function(){var t=this;return r.default.checkSync(),a.a.getModuleList().then((function(e){return a.a.getModuleCountList(e).then((function(e){t.moduleList=e&&e.length?e:t.moduleList}))})).then((function(){t.queryTime=n.a.now()})).catch((function(t){console.error(t)}))},onClose:function(){this.$router.replace({name:"WorkBench"},!0)}}}}).call(this,o("391c"))},d18d:function(t,e,o){"use strict";(function(t){o("2b45");var n,a=o("4360"),i=o("48f4"),r=o("162a"),s=o("e2a7"),l=o("a500"),c=o("6f9e"),u={};e.a={name:"Scroller",props:{buildingId:{type:String,default:""},hasNext:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},isSync:{type:Boolean,default:!0},endText:{type:String,default:""},memoryScrollTop:{type:Boolean,default:!0},keepScrollTop:{type:Boolean},hasPullDown:{type:Boolean,default:!0},onPullDown:{type:Function}},data:function(){return{pullDist:0,refreshing:!1,pulling:!1,loading:!1,scrollTop:0,isCurrKeyboard:!1,gapBottom:0}},computed:{allowPullDown:function(){return this.hasPullDown&&(!!this.$listeners.pullDown||!!this.onPullDown)},updateTime:function(){return a.a.state.global.businessDownloadTime},numberKeyboardCoverHeight:function(){return a.a.state.global.isNumberInputOpen?a.a.state.global.numberKeyboardHeight-this.gapBottom:0}},mounted:function(){var t=this;c.a.$on("numberKeyboardOpen",this.onNumberKeyboardOpen),this.$nextTick((function(){var e=t.$refs["scroll-warp"]&&t.$refs["scroll-warp"].getBoundingClientRect&&t.$refs["scroll-warp"].getBoundingClientRect();e&&(t.gapBottom=document.documentElement.clientHeight-e.bottom),t.$el&&t.$el.addEventListener("focus",(function(e){var o=e&&e.target,n=o&&o.tagName&&o.tagName.toLowerCase();if("input"===n||"textarea"===n){window.addEventListener("resize",(function e(){var n=o.getBoundingClientRect(),a=t.$el.getBoundingClientRect(),i=n.bottom-a.bottom;i>0&&t.scrollBy(i),window.removeEventListener("resize",e,!1)}),!1)}}),!0)}))},destroyed:function(){c.a.$off("numberKeyboardOpen",this.onNumberKeyboardOpen)},activated:function(){var t=this.keepScrollTop||this.$router.isBack&&this.memoryScrollTop;this.scrollTop&&t&&(this.$refs["scroll-warp"].scrollTop=this.scrollTop)},deactivated:function(){this.memoryScrollTop&&(this.scrollTop=this.$refs["scroll-warp"].scrollTop)},methods:{onScroll:function(t){var e=this,o=this.$refs["scroll-warp"].scrollTop,n=this.$refs["scroll-warp"].scrollHeight;if(o+this.$refs["scroll-warp"].clientHeight>=n-5&&!this.loading&&this.hasNext){this.loading=!0;var a=this.$listeners.loadNext();a&&a.then&&"function"==typeof a.then?a.then((function(){e.loading=!1})):this.loading=!1}this.$emit("scroll",t)},getTouchDiretion:function(t){if(!(u&&t&&t.touches&&t.touches[0]))return"";var e=t.touches[0].clientX,o=t.touches[0].clientY;return Math.abs(o-u.y)>Math.abs(e-u.x)&&Math.abs(o-u.y)>=3?o>u.y?"down":"up":""},onTouchstart:function(t){this.allowPullDown&&t.touches&&1===t.touches.length&&(u={x:t.touches[0].clientX,y:t.touches[0].clientY,scrollTop:this.$refs["scroll-warp"].scrollTop,pullDist:this.pullDist})},onTouchmove:function(t){if(this.allowPullDown&&t.touches&&1===t.touches.length){var e=this.$refs["scroll-warp"].scrollTop,o=t.touches[0].clientY,n=o-u.y,a=this.getTouchDiretion(t);"down"===a?!this.refreshing&&e<=0?(this.pulling=!0,this.pullDist=(n-u.scrollTop)/2,t.preventDefault()):this.pulling=!1:"up"===a?this.pullDist>0&&(this.pullDist=u.pullDist-(u.y-o),t.preventDefault()):this.pullDist=u.pullDist}},onTouchend:function(){var t=this;this.allowPullDown&&(u={},this.pulling=!1,this.pullDist>=70&&this.isSync?this.refreshing?this.makePullTo(70):this.makePullTo(70).then((function(){if(t.refreshing=!0,t.onPullDown){var e=t.onPullDown();e&&e.then&&"function"==typeof e?e.finally((function(){t.refreshing=!1,t.makePullTo(0)})):(t.refreshing=!1,t.makePullTo(0))}else t.dataSync().then((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")})).catch((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")}))})):(this.refreshing=!1,this.makePullTo(0)))},makePullTo:function(t){var e=this,o=this.pullDist,n=t,a=n-o,i=o;return o===n?Promise.resolve():new Promise((function(t){!function r(){window.requestAnimationFrame((function(){i+=a/6,e.pullDist=i,o<n&&i<n||o>n&&i>n?r():(e.pullDist=n,e.refreshing=!1,t())}))}()}))},dataSync:function(){var t,e=i.default.getCurrentModuleCode(),o=i.default.getCurrentRoute(),n=o.meta&&o.meta.isTodo;if(i.default.isModuleNeedBuilding(e)&&!n){if(!this.buildingId)return new Promise((function(t){setTimeout((function(){t()}),500)}));t=this.buildingId}return l.a.addTrack("公共-手动下拉刷新","",""),r.a.beginManualUpdate(),i.default.checkSync(t).then((function(t){return r.a.endManualUpdate(),t})).catch((function(t){$log.error("下拉刷新错误",t),t&&"Error: Network Error"===t.toString()?s.a.alert("当前网络无法同步数据"):s.a.alert(t),r.a.endManualUpdate()}))},getScrollHeight:function(){return this.$refs["scroll-warp"].offsetHeight},getScrollTop:function(){return this.$refs["scroll-warp"].scrollTop},setScrollTop:function(t){this.$refs["scroll-warp"].scrollTop=t},scrollBy:function(t){var e=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,a=this.getScrollTop(),i=a+t,r=Math.round(o/16.7),s=t/r,l=a,c=n=+new Date;return a===i?Promise.resolve():new Promise((function(t){!function o(){window.requestAnimationFrame((function(){c===n&&(l+=s,e.$refs["scroll-warp"].scrollTop=l,a<i&&l<i||a>i&&l>i?o():(e.$refs["scroll-warp"].scrollTop=i,t()))}))}()}))},scrollTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,o=this.getScrollTop(),n=t-o;return this.scrollBy(n,e)},scrollToEle:function(t){var e=t.keyboardHeight||232,o=(t=t.$el?t.$el:t).getBoundingClientRect(),n=this.$refs["scroll-warp"].getBoundingClientRect();if(o&&n){var i=document.documentElement.clientHeight-(a.a.state.global.isNumberInputOpen?e:0),r=n.bottom<i?n.bottom:i,s=n.top-o.top,l=o.bottom-r;s>0?this.scrollBy(-s-10):l>0&&this.scrollBy(l+10)}},isCurrent:function(e,o){var n=this;e.length&&t.each(e,(function(t){t._uid===o?n.isCurrKeyboard=!0:n.isCurrent(t.$children,o)}))},onNumberKeyboardOpen:function(t){this.isCurrKeyboard=!1,this.isCurrent(this.$children,t._uid),this.isCurrKeyboard&&this.scrollToEle(t)}}}}).call(this,o("391c"))},e3b4a:function(t,e,o){"use strict";o.r(e);var n=o("be3b").a,a=(o("26fa"),o("17cc")),i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("page-content",{attrs:{title:"待办","show-go-back":!1}},[o("div",{staticClass:"header-btn",attrs:{slot:"header-bar-right"},on:{click:t.entryApplyDailyClassifyPage},slot:"header-bar-right"},[o("icon",{attrs:{name:"xiaoxi"}})],1),o("synchronize-tip-bar",{attrs:{"is-todo":""}}),o("scroller",{on:{pullDown:t.onRefresh}},t._l(t.moduleList,(function(e,n){return o("item",{key:n,staticClass:"p15",attrs:{border:"bottom"},on:{click:function(o){t.gotoList(e)}}},[o("div",{staticClass:"item-ele"},[o("img",{staticClass:"module-icon",attrs:{src:e.icon,alt:e.name}})]),o("div",{staticClass:"item-con"},[o("h2",{staticClass:"title todo-module-title"},[e.unread?o("i",{staticClass:"ion-record unread"}):t._e(),o("span",[t._v(t._s(e.name))])]),o("p",{staticClass:"detail"},[o("span",[t._v(t._s(e.doneCount))]),t._v("已办 "),o("span",{staticClass:"ml10"},[t._v(t._s(e.ccCount))]),t._v("抄送\n        ")])]),o("div",{staticClass:"item-font color-red module-count",class:{"color-red":e.todoCount>0,"color-gray3":0===e.todoCount}},[o("span",{staticClass:"todo-count"},[t._v(t._s(e.todoCount))]),t._v("待办\n      ")])])})))],1)}),[],!1,null,"1c3ac7e7",null);e.default=i.exports},ef48:function(t,e,o){var n=o("9d55");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,o("85cb").default)("a1a65c0c",n,!0,{sourceMap:!1,shadowMode:!1})},f0e4:function(t,e,o){var n=o("7e74");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,o("85cb").default)("3ba90cce",n,!0,{sourceMap:!1,shadowMode:!1})},f7ab:function(t,e,o){"use strict";var n=o("65e9").a,a=(o("f7d4"),o("17cc")),i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.show?o("div",{ref:"synchronize-tip-bar",staticClass:"synchronize-tip-bar"},[o("icon",{attrs:{name:"caution"}}),t.waitUploadNum?o("span",[t._v("您有"+t._s(t.waitUploadNum)+"条数据待上传")]):t._e(),!t.waitUploadNum&&t.hasChanged?o("span",[t._v("有新数据")]):t._e(),t._v("\n  ，下拉可"+t._s(t.waitUploadNum?"上传":"刷新")+"\n")],1):t._e()}),[],!1,null,"66826030",null);e.a=i.exports},f7d4:function(t,e,o){"use strict";o("2d6e")}}]);