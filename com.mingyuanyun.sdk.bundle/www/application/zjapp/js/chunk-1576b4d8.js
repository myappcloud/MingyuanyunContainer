(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-1576b4d8","chunk-739f37c8"],{"2ab5":function(t,e,n){"use strict";(function(t){n("f548"),n("c904"),n("6d57"),n("cc57");var a=n("07d2"),r=n("774b"),o=n("918e"),i=n("aab3"),s=n("5685"),u=n("7cb8"),c=n("bc69"),l=n("6144");e.a={name:"ProcessNew",components:{Item:a.default,Scroller:r.default,TableChart:o.a},data:function(){return{isLoading:!1,units:[],currentUnit:"",buildingData:{},collectData:[],legendData:[{name:"已退回",color:"red"},{name:"待验收",color:"orange"},{name:"已验收",color:"green"}],floors:[],checkitems:[],datas:[]}},computed:{title:function(){return t.isEmpty(this.buildingData)?"...":this.buildingData.name+"工序移交进度"}},activated:function(){this.$router.isBack||(this.buildingId=this.$route.query.buildingId,this.unit=this.$route.query.unit),this.init()},methods:{init:function(){this.getData()},getData:function(){var e,n=this;return this.isLoading=!0,i.a.getBuildingInfo(this.buildingId).then((function(t){n.buildingData=t[0]})).then((function(){return s.a.getProcessCheckData2(n.buildingId).then((function(t){e=t}))})).then((function(){n.collectData=e,n.units=t.map(t.keys(e),(function(t){return{id:t,name:Object(u.a)(t,"单元")}})),n.currentUnit=t.isEmpty(n.units)?"":n.units[0].id})).then((function(){n.getShowData(),n.isLoading=!1})).catch((function(t){console.error(t)}))},getShowData:function(){var e=this,n=this.currentUnit?this.collectData[this.currentUnit]:this.collectData[""],a=n[0]?n[0].floors:[];a=t.sortBy(a,(function(t){return parseInt(t.sort)})),this.floors=t.map(a,(function(t){return{id:t.floor,name:Object(u.a)(t.floor,"层")}})),this.checkitems=t.map(n,(function(t){return{id:t.id,name:t.name}}));var r=[];t.each(n,(function(n){t.each(n.floors,(function(t){var e;(t.pass||t.back||t.transfer)&&(t.pass?e="green":t.back?e="red":t.transfer&&(e="orange"),r.push({x:n.id,y:t.floor,status:e}))})),e.datas=r}))},clickTab:function(t){this.currentUnit=t.id,this.getShowData()},onClickChart:function(t){console.log("点击报表-----------",t),l.a.saveObject(c.a.PROCESS_DEFAULT_CHECKITEM_OF_BUILDING,t.x,l.a.level.user);var e=l.a.getObject(c.a.PROCESS_COMMON_BUILDING_SELECTED,l.a.level.user)||{};e.unit&&(e.unit={id:this.currentUnit,name:this.currentUnit.replace("单元","")+"单元"}),l.a.saveObject(c.a.PROCESS_COMMON_BUILDING_SELECTED,e,l.a.level.user),this.$router.go(-1)}}}}).call(this,n("391c"))},"4e62":function(t,e,n){var a=n("4f97");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("85cb").default)("6e249eae",a,!0,{sourceMap:!1,shadowMode:!1})},"4f97":function(t,e,n){(t.exports=n("690e")(!1)).push([t.i,'.zjapp .tabs[data-v-b03a0260]{height:40px;font-size:0;text-align:center;background-color:#fff;overflow:visible}.zjapp .tabs-scroll[data-v-b03a0260]{padding:10px 0;margin:-10px 0;white-space:nowrap;overflow-x:auto}.zjapp .tabs-scroll[data-v-b03a0260]::-webkit-scrollbar{display:none}.zjapp .tab[data-v-b03a0260]{display:inline-block;padding:10px 15px;line-height:20px;font-size:16px;color:#333;white-space:nowrap}.zjapp .tab.cur[data-v-b03a0260]{position:relative;z-index:3;color:#4275e8}.zjapp .tab.cur[data-v-b03a0260]:after{content:"";position:absolute;z-index:3;bottom:-3px;left:50%;margin-left:-3px;width:7px;height:7px;border-radius:50%;background-color:#4275e8}.zjapp .table-chart[data-v-b03a0260]{flex:1;width:100%}.zjapp .report-legend[data-v-b03a0260]{position:absolute;padding:7px 10px;top:6px;right:6px;width:80px;height:68px;background:#fff;border-radius:2px;z-index:10;box-shadow:0 0 2px 0 rgba(0,0,0,.5)}.zjapp .pass-legend[data-v-b03a0260],.zjapp .return-legend[data-v-b03a0260],.zjapp .transfer-legend[data-v-b03a0260]{margin:0;line-height:1.5;white-space:nowrap}.zjapp .pass-legend[data-v-b03a0260]:before,.zjapp .return-legend[data-v-b03a0260]:before,.zjapp .transfer-legend[data-v-b03a0260]:before{content:"";margin-right:8px;vertical-align:-1px;display:inline-block;width:15px;height:10px}.zjapp .transfer-legend[data-v-b03a0260]:before{background-color:#ffa340}.zjapp .pass-legend[data-v-b03a0260]:before{background-color:#48d48c}.zjapp .return-legend[data-v-b03a0260]:before{background-color:#ff6e6e}',""])},5685:function(t,e,n){"use strict";(function(t){var a=n("162a"),r=n("6144"),o=n("9cd1"),i=n("da2f"),s=n("c77f");function u(t,e){return t?(t-e)/t*100:0}var c={getProcessCheckNewBuilding:function(t){var e=r.a.getString("reportDateType",r.a.level.user)||"month";return Object(i.d)({proj_id:t,query_type:e})},getProjTotalData:function(){return a.a.request("/report/project-over-view")},getDailyCheckData:function(t,e,n,r,o){var i={proj_id:t,bidsection_id:e,begin_date:n,end_date:r};return o&&(i.module=o),a.a.request("/report/check",i)},getReportCheckList:function(t){return a.a.request("/report/check-batch-problem-list",{batch_id:t.batchId,begin_date:t.dateStart,end_date:t.dateEnd})},getReportCheckTimeoutList:function(t,e,n){return a.a.request("/report/get-over-due-check",{proj_id:t,key:e,page:n,pageSize:15})},getOverDueCheckConfig:function(t){return a.a.request("/report/get-over-due-check-config",{proj_id:t})},getReportCheckDetail:function(t){return a.a.request("/report/check-batch-problem-detail",{id:t})},postReportCheckUpdate:function(t){return a.a.post("/checkquality-comment/upload",{},t)},postReportCheckSendBack:function(t){return a.a.post("/checkquality-comment/send-back",{},t)},measureProjectData:[],waterPercolationData:[],getMeasureData:function(e){return a.a.request("/report/measure",{proj_id:e}).then((function(e){return t.each(e,(function(e){e.repair_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},e.supervision_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},e.construct_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},t.each(e.buildings,(function(n){n.repair_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},n.supervision_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},n.construct_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},t.each(n.check_items,(function(a){a.repair_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},a.supervision_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},a.construct_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},t.each(a.children,(function(r){e.repair_data.measurement_points_num+=r.measure_data[0].measurement_points,e.repair_data.problem_points_num+=r.measure_data[0].problem_points,e.repair_data.checkitem_num+=r.measure_data[0].measurement_points?1:0,e.supervision_data.measurement_points_num+=r.measure_data[1].measurement_points,e.supervision_data.problem_points_num+=r.measure_data[1].problem_points,e.supervision_data.checkitem_num+=r.measure_data[1].measurement_points?1:0,e.construct_data.measurement_points_num+=r.measure_data[2].measurement_points,e.construct_data.problem_points_num+=r.measure_data[2].problem_points,e.construct_data.checkitem_num+=r.measure_data[2].measurement_points?1:0,n.repair_data.measurement_points_num+=r.measure_data[0].measurement_points,n.repair_data.problem_points_num+=r.measure_data[0].problem_points,n.repair_data.checkitem_num+=r.measure_data[0].measurement_points?1:0,n.supervision_data.measurement_points_num+=r.measure_data[1].measurement_points,n.supervision_data.problem_points_num+=r.measure_data[1].problem_points,n.supervision_data.checkitem_num+=r.measure_data[1].measurement_points?1:0,n.construct_data.measurement_points_num+=r.measure_data[2].measurement_points,n.construct_data.problem_points_num+=r.measure_data[2].problem_points,n.construct_data.checkitem_num+=r.measure_data[2].measurement_points?1:0,a.repair_data.measurement_points_num+=r.measure_data[0].measurement_points,a.repair_data.problem_points_num+=r.measure_data[0].problem_points,a.repair_data.checkitem_num+=r.measure_data[0].measurement_points?1:0,a.supervision_data.measurement_points_num+=r.measure_data[1].measurement_points,a.supervision_data.problem_points_num+=r.measure_data[1].problem_points,a.supervision_data.checkitem_num+=r.measure_data[1].measurement_points?1:0,a.construct_data.measurement_points_num+=r.measure_data[2].measurement_points,a.construct_data.problem_points_num+=r.measure_data[2].problem_points,a.construct_data.checkitem_num+=r.measure_data[2].measurement_points?1:0,t.each(r.measure_data,(function(t){t.measurement_points?t.passport=(t.measurement_points-t.problem_points)/t.measurement_points*100:t.passport=0}))})),a.repair_data.passport=u(a.repair_data.measurement_points_num,a.repair_data.problem_points_num),a.supervision_data.passport=u(a.supervision_data.measurement_points_num,a.supervision_data.problem_points_num),a.construct_data.passport=u(a.construct_data.measurement_points_num,a.construct_data.problem_points_num)})),n.repair_data.passport=u(n.repair_data.measurement_points_num,n.repair_data.problem_points_num),n.supervision_data.passport=u(n.supervision_data.measurement_points_num,n.supervision_data.problem_points_num),n.construct_data.passport=u(n.construct_data.measurement_points_num,n.construct_data.problem_points_num)})),e.repair_data.passport=u(e.repair_data.measurement_points_num,e.repair_data.problem_points_num),e.supervision_data.passport=u(e.supervision_data.measurement_points_num,e.supervision_data.problem_points_num),e.construct_data.passport=u(e.construct_data.measurement_points_num,e.construct_data.problem_points_num)})),e}))},measureBuildData:{},setMeasureBuildData:function(t){c.measureBuildData=t},getMeasureBuildData:function(e){return t.isEmpty(c.measureBuildData)?c.getMeasureData(e).then((function(t){return t[0]})):Promise.resolve(c.measureBuildData)},getCheckAcceptData:function(t){return a.a.request("/report/check-accept",{proj_id:t})},getCheckAcceptDataOfBuilding:function(t,e,n){return a.a.request("/report/check-accept-detail",{section_id:t,building_id:e,unit:n||""})},getProcessCheckData:function(t,e){return a.a.request("/report/processcheck",{building_id:t,unit:e})},getProcessCheckData2:function(t){return Object(i.g)({building_id:t})},getMaterialData:function(t,e,n){return a.a.request("/report/material",{proj_id:t,begin_date:e,end_date:n})},getProcessAcceptBuilding:function(t){var e=r.a.getString("reportDateType",r.a.level.user)||"month";return Object(s.n)({proj_id:t,query_type:e})},getWaterPercolation:function(t){return a.a.request("/report/close-water-test",{proj_id:t})},getProcessAcceptData:function(t,e,n,a){return Object(s.o)({building_id:t,unit:e,start:n||"",end:a||""})},getProcessAcceptPileItem:function(t){return a.a.request("/report/get-pile-check-items",{bidsection_id:t})},getProcessAcceptPileData:function(t,e){return a.a.request("/report/process-accept-with-pile",{building_id:t,item_id:e})},getMeasureCheckedData:function(){return a.a.request("/report/leader-measure")},getSchedulePlanData:function(){return Object(o.i)()},getSchedulePlanProjectData:function(t){return Object(o.a)({proj_id:t})},getCheckProblemStatisticsData:function(t){return a.a.request("/report/leader-secure",t)},getProcessCheckStatisticsData:function(){return Object(i.k)()},schedulePlanNodeList:function(t){return Object(o.e)({plan_id:t})}};e.a=c}).call(this,n("391c"))},"774b":function(t,e,n){"use strict";n.r(e);var a=n("d18d").a,r=(n("b225"),n("17cc")),o=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"scroll-warp",staticClass:"scroll-warp",class:{"scroll-warp-pulling":t.pulling,"scroll-warp-complete":!t.hasNext&&!t.isEmpty,"scroll-warp-empty":t.isEmpty},style:{"padding-bottom":t.numberKeyboardCoverHeight+"px"},on:{scroll:t.onScroll,touchstart:t.onTouchstart,touchmove:t.onTouchmove,touchend:t.onTouchend}},[t.allowPullDown?n("div",{staticClass:"pull-refresh-warp",style:{height:t.pullDist+"px"}},[n("div",{staticClass:"pull-refresh"},[n("div",{staticClass:"animation-refresher",class:{refreshing:t.refreshing}}),t.updateTime?n("p",{staticClass:"pull-refresh-date"},[t._v("最后成功同步："+t._s(t.updateTime))]):t._e()])]):t._e(),t._t("default"),t.loading?n("div",{staticClass:"page-loading"},[n("svg",{staticClass:"svg-loading",attrs:{viewBox:"0 0 80 80"}},[n("circle",{attrs:{cx:"40",cy:"40",r:"36"}})])]):t._e(),t.hasNext||t.isEmpty?t._e():[t.$slots.end?t._t("end"):t._e(),!t.$slots.end&&t.endText?n("div",{staticClass:"end-text"},[t._v("\n      "+t._s(t.endText)+"\n    ")]):t._e()]],2)}),[],!1,null,"2b1a346c",null);e.default=o.exports},"9cd1":function(t,e,n){"use strict";n.d(e,"h",(function(){return i})),n.d(e,"m",(function(){return s})),n.d(e,"g",(function(){return u})),n.d(e,"f",(function(){return c})),n.d(e,"d",(function(){return l})),n.d(e,"l",(function(){return p})),n.d(e,"k",(function(){return d})),n.d(e,"j",(function(){return m})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return _})),n.d(e,"c",(function(){return f})),n.d(e,"i",(function(){return b})),n.d(e,"a",(function(){return g}));var a=n("5e8d"),r=n("162a"),o=n("bcc78");function i(t){return Object(a.a)().then((function(){var e=o.a.schedulePlanTaskInfo.url;return r.a.request(e,t)}))}function s(t){return Object(a.a)().then((function(){var e=o.a.schedulePlanSaveTask.url;return r.a.post(e,null,t)}))}function u(t){return Object(a.a)().then((function(){var e=o.a.schedulePlanPlanList.url;return r.a.request(e,t)}))}function c(t){return Object(a.a)().then((function(){var e=o.a.schedulePlanNodeList.url;return r.a.request(e,t)}))}function l(t){return Object(a.a)().then((function(){var e=o.a.schedulePlanNodeInfo.url;return r.a.request(e,t)}))}function p(t){return Object(a.a)().then((function(){var e=o.a.schedulePlanSaveReport.url;return r.a.post(e,null,t)}))}function d(t){return Object(a.a)().then((function(){var e=o.a.schedulePlanSaveCompleteTime.url;return r.a.post(e,null,t)}))}function m(t){return Object(a.a)().then((function(){var e=o.a.schedulePlanSaveChecker.url;return r.a.post(e,null,t)}))}function h(t){return Object(a.a)().then((function(){var e=o.a.schedulePlanCheckerLogList.url;return r.a.request(e,t)}))}function _(t){return Object(a.a)().then((function(){var e=o.a.schedulePlanNodeLevel.url;return r.a.request(e,t)}))}function f(){return Object(a.a)().then((function(){var t=o.a.schedulePlanCompletedTimeSetting.url;return r.a.request(t)}))}function b(){return Object(a.a)().then((function(){var t=o.a.schedulePlanLeaderSchedulePlan.url;return r.a.request(t)}))}function g(t){return Object(a.a)().then((function(){var e=o.a.schedulePlanGetByFirstProject.url;return r.a.request(e,t)}))}},"9d55":function(t,e,n){(t.exports=n("690e")(!1)).push([t.i,'.zjapp .scroll-warp[data-v-2b1a346c]{flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.zjapp .scroll-warp-pulling[data-v-2b1a346c]{overflow:hidden}.zjapp .scroll-warp-complete[data-v-2b1a346c]:after{content:"";display:block;height:100px}.zjapp .scroll-warp-empty[data-v-2b1a346c]{display:flex;flex-direction:column}.zjapp .pull-refresh-warp[data-v-2b1a346c]{position:relative;height:0;overflow:hidden}.zjapp .pull-refresh[data-v-2b1a346c]{position:absolute;left:0;bottom:0;height:70px;width:100%;padding:6px;text-align:center}.zjapp .pull-refresh-date[data-v-2b1a346c]{margin-top:4px;height:16px;line-height:16px;font-size:12px;color:#bcbcbc}.zjapp .page-loading[data-v-2b1a346c]{padding:10px;text-align:center}.zjapp .end-text[data-v-2b1a346c]{color:#c8c8c8;background:#f4f4f4;position:relative;line-height:76px;height:76px;text-align:center}.zjapp .end-text[data-v-2b1a346c]:after,.zjapp .end-text[data-v-2b1a346c]:before{content:"";position:absolute;width:48px;height:1px;background:#e4e4e4;top:50%;margin-top:-1px}.zjapp .end-text[data-v-2b1a346c]:after{left:50%;transform:translateX(-92px)}.zjapp .end-text[data-v-2b1a346c]:before{right:50%;transform:translateX(90px)}.zjapp .end-slot[data-v-2b1a346c]{padding:30px;line-height:18px;text-align:center;color:#c8c8c8}',""])},b225:function(t,e,n){"use strict";n("ef48")},d18d:function(t,e,n){"use strict";(function(t){n("2b45");var a,r=n("4360"),o=n("48f4"),i=n("162a"),s=n("e2a7"),u=n("a500"),c=n("6f9e"),l={};e.a={name:"Scroller",props:{buildingId:{type:String,default:""},hasNext:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},isSync:{type:Boolean,default:!0},endText:{type:String,default:""},memoryScrollTop:{type:Boolean,default:!0},keepScrollTop:{type:Boolean},hasPullDown:{type:Boolean,default:!0},onPullDown:{type:Function}},data:function(){return{pullDist:0,refreshing:!1,pulling:!1,loading:!1,scrollTop:0,isCurrKeyboard:!1,gapBottom:0}},computed:{allowPullDown:function(){return this.hasPullDown&&(!!this.$listeners.pullDown||!!this.onPullDown)},updateTime:function(){return r.a.state.global.businessDownloadTime},numberKeyboardCoverHeight:function(){return r.a.state.global.isNumberInputOpen?r.a.state.global.numberKeyboardHeight-this.gapBottom:0}},mounted:function(){var t=this;c.a.$on("numberKeyboardOpen",this.onNumberKeyboardOpen),this.$nextTick((function(){var e=t.$refs["scroll-warp"]&&t.$refs["scroll-warp"].getBoundingClientRect&&t.$refs["scroll-warp"].getBoundingClientRect();e&&(t.gapBottom=document.documentElement.clientHeight-e.bottom),t.$el&&t.$el.addEventListener("focus",(function(e){var n=e&&e.target,a=n&&n.tagName&&n.tagName.toLowerCase();if("input"===a||"textarea"===a){window.addEventListener("resize",(function e(){var a=n.getBoundingClientRect(),r=t.$el.getBoundingClientRect(),o=a.bottom-r.bottom;o>0&&t.scrollBy(o),window.removeEventListener("resize",e,!1)}),!1)}}),!0)}))},destroyed:function(){c.a.$off("numberKeyboardOpen",this.onNumberKeyboardOpen)},activated:function(){var t=this.keepScrollTop||this.$router.isBack&&this.memoryScrollTop;this.scrollTop&&t&&(this.$refs["scroll-warp"].scrollTop=this.scrollTop)},deactivated:function(){this.memoryScrollTop&&(this.scrollTop=this.$refs["scroll-warp"].scrollTop)},methods:{onScroll:function(t){var e=this,n=this.$refs["scroll-warp"].scrollTop,a=this.$refs["scroll-warp"].scrollHeight;if(n+this.$refs["scroll-warp"].clientHeight>=a-5&&!this.loading&&this.hasNext){this.loading=!0;var r=this.$listeners.loadNext();r&&r.then&&"function"==typeof r.then?r.then((function(){e.loading=!1})):this.loading=!1}this.$emit("scroll",t)},getTouchDiretion:function(t){if(!(l&&t&&t.touches&&t.touches[0]))return"";var e=t.touches[0].clientX,n=t.touches[0].clientY;return Math.abs(n-l.y)>Math.abs(e-l.x)&&Math.abs(n-l.y)>=3?n>l.y?"down":"up":""},onTouchstart:function(t){this.allowPullDown&&t.touches&&1===t.touches.length&&(l={x:t.touches[0].clientX,y:t.touches[0].clientY,scrollTop:this.$refs["scroll-warp"].scrollTop,pullDist:this.pullDist})},onTouchmove:function(t){if(this.allowPullDown&&t.touches&&1===t.touches.length){var e=this.$refs["scroll-warp"].scrollTop,n=t.touches[0].clientY,a=n-l.y,r=this.getTouchDiretion(t);"down"===r?!this.refreshing&&e<=0?(this.pulling=!0,this.pullDist=(a-l.scrollTop)/2,t.preventDefault()):this.pulling=!1:"up"===r?this.pullDist>0&&(this.pullDist=l.pullDist-(l.y-n),t.preventDefault()):this.pullDist=l.pullDist}},onTouchend:function(){var t=this;this.allowPullDown&&(l={},this.pulling=!1,this.pullDist>=70&&this.isSync?this.refreshing?this.makePullTo(70):this.makePullTo(70).then((function(){if(t.refreshing=!0,t.onPullDown){var e=t.onPullDown();e&&e.then&&"function"==typeof e?e.finally((function(){t.refreshing=!1,t.makePullTo(0)})):(t.refreshing=!1,t.makePullTo(0))}else t.dataSync().then((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")})).catch((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")}))})):(this.refreshing=!1,this.makePullTo(0)))},makePullTo:function(t){var e=this,n=this.pullDist,a=t,r=a-n,o=n;return n===a?Promise.resolve():new Promise((function(t){!function i(){window.requestAnimationFrame((function(){o+=r/6,e.pullDist=o,n<a&&o<a||n>a&&o>a?i():(e.pullDist=a,e.refreshing=!1,t())}))}()}))},dataSync:function(){var t,e=o.default.getCurrentModuleCode(),n=o.default.getCurrentRoute(),a=n.meta&&n.meta.isTodo;if(o.default.isModuleNeedBuilding(e)&&!a){if(!this.buildingId)return new Promise((function(t){setTimeout((function(){t()}),500)}));t=this.buildingId}return u.a.addTrack("公共-手动下拉刷新","",""),i.a.beginManualUpdate(),o.default.checkSync(t).then((function(t){return i.a.endManualUpdate(),t})).catch((function(t){$log.error("下拉刷新错误",t),t&&"Error: Network Error"===t.toString()?s.a.alert("当前网络无法同步数据"):s.a.alert(t),i.a.endManualUpdate()}))},getScrollHeight:function(){return this.$refs["scroll-warp"].offsetHeight},getScrollTop:function(){return this.$refs["scroll-warp"].scrollTop},setScrollTop:function(t){this.$refs["scroll-warp"].scrollTop=t},scrollBy:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,r=this.getScrollTop(),o=r+t,i=Math.round(n/16.7),s=t/i,u=r,c=a=+new Date;return r===o?Promise.resolve():new Promise((function(t){!function n(){window.requestAnimationFrame((function(){c===a&&(u+=s,e.$refs["scroll-warp"].scrollTop=u,r<o&&u<o||r>o&&u>o?n():(e.$refs["scroll-warp"].scrollTop=o,t()))}))}()}))},scrollTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=this.getScrollTop(),a=t-n;return this.scrollBy(a,e)},scrollToEle:function(t){var e=t.keyboardHeight||232,n=(t=t.$el?t.$el:t).getBoundingClientRect(),a=this.$refs["scroll-warp"].getBoundingClientRect();if(n&&a){var o=document.documentElement.clientHeight-(r.a.state.global.isNumberInputOpen?e:0),i=a.bottom<o?a.bottom:o,s=a.top-n.top,u=n.bottom-i;s>0?this.scrollBy(-s-10):u>0&&this.scrollBy(u+10)}},isCurrent:function(e,n){var a=this;e.length&&t.each(e,(function(t){t._uid===n?a.isCurrKeyboard=!0:a.isCurrent(t.$children,n)}))},onNumberKeyboardOpen:function(t){this.isCurrKeyboard=!1,this.isCurrent(this.$children,t._uid),this.isCurrKeyboard&&this.scrollToEle(t)}}}}).call(this,n("391c"))},de18:function(t,e,n){"use strict";n("4e62")},ef48:function(t,e,n){var a=n("9d55");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("85cb").default)("a1a65c0c",a,!0,{sourceMap:!1,shadowMode:!1})},f793:function(t,e,n){"use strict";n.r(e);var a=n("2ab5").a,r=(n("de18"),n("17cc")),o=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page-content",{attrs:{title:t.title}},[!t.isLoading&&t.units.length>1?n("div",{staticClass:"tabs border-bottom"},[n("div",{staticClass:"tabs-scroll"},t._l(t.units,(function(e,a){return n("div",{key:a,staticClass:"tab",class:{cur:e.id===t.currentUnit},on:{click:function(n){t.clickTab(e)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])})))]):t._e(),t.isLoading?t._e():n("table-chart",{staticClass:"table-chart",attrs:{"x-items":t.checkitems,"y-items":t.floors,datas:t.datas,legend:t.legendData},on:{click:t.onClickChart}}),n("loading-status",{attrs:{"is-loading":t.isLoading}})],1)}),[],!1,null,"b03a0260",null);e.default=o.exports}}]);