(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["report-process-new-project-detail"],{"104e":function(e,t,n){"use strict";n("423e")},2032:function(e,t,n){"use strict";(function(e){n("6a61");var r,a=n("2e91"),o=(n("cc57"),n("c904"),n("6d57"),n("ed08")),i=n("07d2"),u=n("774b"),s=n("918e"),c=n("5685"),l=n("7cb8"),p=n("bc69"),d=n("6144");t.a={name:"ReportProcessNewProjectDetail",components:{Item:i.a,Scroller:u.a,TableChart:s.a},data:function(){return{isLoading:!1,isBusying:!1,units:[],currentUnit:"",buildingData:{},collectData:[],legendData:[{name:"已退回",color:"red"},{name:"待验收",color:"orange"},{name:"已验收",color:"green"}],floors:[],checkitems:[],datas:[],query:{}}},computed:{title:function(){return this.$route.query.building_name?this.$route.query.building_name+"工序移交进度":")"},isDrawing:function(){return this.floors.length&&this.checkitems.length}},activated:function(){this.query=this.$route.query,this.$router.isBack||(this.buildingId=this.$route.query.building_id,this.unit=this.$route.query.unit),this.init()},methods:{init:function(){this.getData()},getData:function(){var t,n=this;return this.isLoading=!0,c.a.getProcessCheckData2(this.buildingId).then((function(e){t=e})).then((function(){n.collectData=t,n.units=e.map(e.keys(t),(function(e){return{id:e,name:Object(l.a)(e,"单元")}})),n.currentUnit=n.$route.query.unit||(e.isEmpty(n.units)?"":n.units[0].id)})).then((function(){n.getShowData(),n.isLoading=!1})).catch((function(e){console.error(e)}))},getShowData:function(){var t=this,n=this.currentUnit?this.collectData[this.currentUnit]:this.collectData[""],r=n[0]?n[0].floors:[];r=e.sortBy(r,(function(e){return parseInt(e.sort)})),this.floors=e.map(r,(function(e){return{id:e.floor,name:Object(l.a)(e.floor,"层")}})),this.checkitems=e.map(n,(function(e){return{id:e.id,name:e.name}}));var a=[];e.each(n,(function(n){e.each(n.floors,(function(e){var t;(e.pass||e.back||e.transfer)&&(e.pass?t="green":e.back?t="red":e.transfer&&(t="orange"),a.push({x:n.id,y:e.floor,status:t}))})),t.datas=a}))},clickTab:function(e){this.currentUnit=e.id,this.query.unit=e.id,this.getShowData()},onClickChart:(r=Object(a.a)(regeneratorRuntime.mark((function e(t){var r,i,u,s,c,m=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isBusying){e.next=2;break}return e.abrupt("return");case 2:return r=this.query,i=r.proj_id,u=r.section_id,s=r.building_id,c=r.unit,this.isBusying=!0,e.next=6,Promise.resolve().then(n.bind(null,"37d5"));case 6:e.sent.default.getProject(i).then((function(e){if(e&&e.expire_time&&e.expire_time<=o.a.now())return $q.reject("该项目租期已过");m.$store.commit("global/SET_CURRENT_PROJECT",e);var n={project:e,section:{id:u,name:""},building:{id:s,name:""},unit:{id:c,name:Object(l.a)(c,"单元")}},r=t.x;return d.a.saveObject(p.a.PROCESS_DEFAULT_CHECKITEM_OF_BUILDING,r,d.a.level.user),d.a.saveObject(p.a.PROCESS_COMMON_BUILDING_SELECTED,n,d.a.level.user)})).then(Object(a.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.bind(null,"06f6"));case 2:return t=e.sent.default,e.abrupt("return",t.projectHasRoomData(i).then(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=7;break}return e.next=3,Promise.resolve().then(n.bind(null,"48f4"));case 3:return(r=e.sent.default).setLocalChanged(),r.showTopProgress(),e.abrupt("return",r.executeSync(s));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:case"end":return e.stop()}}),e)})))).then((function(){m.$router.push({name:"ProcessNewIndex",query:{check_item_id:t.x.id,building_id:s,unit:c}})})).catch((function(e){console.error(e),Popup.alert(e)})).finally((function(){m.isBusying=!1}));case 8:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})}}}).call(this,n("391c"))},"3be0":function(e,t,n){"use strict";n.r(t);var r=n("2032").a,a=(n("104e"),n("17cc")),o=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("page-content",{attrs:{title:e.title,"show-go-root":"Report"}},[!e.isLoading&&e.units.length>1?n("div",{staticClass:"tabs border-bottom"},[n("div",{staticClass:"tabs-scroll"},e._l(e.units,(function(t,r){return n("div",{key:r,staticClass:"tab",class:{cur:t.id===e.currentUnit},on:{click:function(n){e.clickTab(t)}}},[e._v(e._s(t.name))])})))]):e._e(),!e.isLoading&&e.isDrawing?n("table-chart",{staticClass:"table-chart",attrs:{"x-items":e.checkitems,"y-items":e.floors,datas:e.datas,legend:e.legendData},on:{click:e.onClickChart}}):e._e(),n("loading-status",{attrs:{"is-loading":e.isLoading}})],1)}),[],!1,null,"f4e7714a",null);t.default=o.exports},"423e":function(e,t,n){var r=n("9d6c");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("85cb").default)("6b162863",r,!0,{sourceMap:!1,shadowMode:!1})},5685:function(e,t,n){"use strict";(function(e){var r=n("162a"),a=n("6144"),o=n("9cd1"),i=n("da2f"),u=n("c77f");function s(e,t){return e?(e-t)/e*100:0}var c={getProcessCheckNewBuilding:function(e){var t=a.a.getString("reportDateType",a.a.level.user)||"month";return Object(i.d)({proj_id:e,query_type:t})},getProjTotalData:function(){return r.a.request("/report/project-over-view")},getDailyCheckData:function(e,t,n,a,o){var i={proj_id:e,bidsection_id:t,begin_date:n,end_date:a};return o&&(i.module=o),r.a.request("/report/check",i)},getReportCheckList:function(e){return r.a.request("/report/check-batch-problem-list",{batch_id:e.batchId,begin_date:e.dateStart,end_date:e.dateEnd})},getReportCheckTimeoutList:function(e,t,n){return r.a.request("/report/get-over-due-check",{proj_id:e,key:t,page:n,pageSize:15})},getOverDueCheckConfig:function(e){return r.a.request("/report/get-over-due-check-config",{proj_id:e})},getReportCheckDetail:function(e){return r.a.request("/report/check-batch-problem-detail",{id:e})},postReportCheckUpdate:function(e){return r.a.post("/checkquality-comment/upload",{},e)},postReportCheckSendBack:function(e){return r.a.post("/checkquality-comment/send-back",{},e)},measureProjectData:[],waterPercolationData:[],getMeasureData:function(t){return r.a.request("/report/measure",{proj_id:t}).then((function(t){return e.each(t,(function(t){t.repair_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},t.supervision_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},t.construct_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},e.each(t.buildings,(function(n){n.repair_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},n.supervision_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},n.construct_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},e.each(n.check_items,(function(r){r.repair_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},r.supervision_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},r.construct_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},e.each(r.children,(function(a){t.repair_data.measurement_points_num+=a.measure_data[0].measurement_points,t.repair_data.problem_points_num+=a.measure_data[0].problem_points,t.repair_data.checkitem_num+=a.measure_data[0].measurement_points?1:0,t.supervision_data.measurement_points_num+=a.measure_data[1].measurement_points,t.supervision_data.problem_points_num+=a.measure_data[1].problem_points,t.supervision_data.checkitem_num+=a.measure_data[1].measurement_points?1:0,t.construct_data.measurement_points_num+=a.measure_data[2].measurement_points,t.construct_data.problem_points_num+=a.measure_data[2].problem_points,t.construct_data.checkitem_num+=a.measure_data[2].measurement_points?1:0,n.repair_data.measurement_points_num+=a.measure_data[0].measurement_points,n.repair_data.problem_points_num+=a.measure_data[0].problem_points,n.repair_data.checkitem_num+=a.measure_data[0].measurement_points?1:0,n.supervision_data.measurement_points_num+=a.measure_data[1].measurement_points,n.supervision_data.problem_points_num+=a.measure_data[1].problem_points,n.supervision_data.checkitem_num+=a.measure_data[1].measurement_points?1:0,n.construct_data.measurement_points_num+=a.measure_data[2].measurement_points,n.construct_data.problem_points_num+=a.measure_data[2].problem_points,n.construct_data.checkitem_num+=a.measure_data[2].measurement_points?1:0,r.repair_data.measurement_points_num+=a.measure_data[0].measurement_points,r.repair_data.problem_points_num+=a.measure_data[0].problem_points,r.repair_data.checkitem_num+=a.measure_data[0].measurement_points?1:0,r.supervision_data.measurement_points_num+=a.measure_data[1].measurement_points,r.supervision_data.problem_points_num+=a.measure_data[1].problem_points,r.supervision_data.checkitem_num+=a.measure_data[1].measurement_points?1:0,r.construct_data.measurement_points_num+=a.measure_data[2].measurement_points,r.construct_data.problem_points_num+=a.measure_data[2].problem_points,r.construct_data.checkitem_num+=a.measure_data[2].measurement_points?1:0,e.each(a.measure_data,(function(e){e.measurement_points?e.passport=(e.measurement_points-e.problem_points)/e.measurement_points*100:e.passport=0}))})),r.repair_data.passport=s(r.repair_data.measurement_points_num,r.repair_data.problem_points_num),r.supervision_data.passport=s(r.supervision_data.measurement_points_num,r.supervision_data.problem_points_num),r.construct_data.passport=s(r.construct_data.measurement_points_num,r.construct_data.problem_points_num)})),n.repair_data.passport=s(n.repair_data.measurement_points_num,n.repair_data.problem_points_num),n.supervision_data.passport=s(n.supervision_data.measurement_points_num,n.supervision_data.problem_points_num),n.construct_data.passport=s(n.construct_data.measurement_points_num,n.construct_data.problem_points_num)})),t.repair_data.passport=s(t.repair_data.measurement_points_num,t.repair_data.problem_points_num),t.supervision_data.passport=s(t.supervision_data.measurement_points_num,t.supervision_data.problem_points_num),t.construct_data.passport=s(t.construct_data.measurement_points_num,t.construct_data.problem_points_num)})),t}))},measureBuildData:{},setMeasureBuildData:function(e){c.measureBuildData=e},getMeasureBuildData:function(t){return e.isEmpty(c.measureBuildData)?c.getMeasureData(t).then((function(e){return e[0]})):Promise.resolve(c.measureBuildData)},getCheckAcceptData:function(e){return r.a.request("/report/check-accept",{proj_id:e})},getCheckAcceptDataOfBuilding:function(e,t,n){return r.a.request("/report/check-accept-detail",{section_id:e,building_id:t,unit:n||""})},getProcessCheckData:function(e,t){return r.a.request("/report/processcheck",{building_id:e,unit:t})},getProcessCheckData2:function(e){return Object(i.g)({building_id:e})},getMaterialData:function(e,t,n){return r.a.request("/report/material",{proj_id:e,begin_date:t,end_date:n})},getProcessAcceptBuilding:function(e){var t=a.a.getString("reportDateType",a.a.level.user)||"month";return Object(u.n)({proj_id:e,query_type:t})},getWaterPercolation:function(e){return r.a.request("/report/close-water-test",{proj_id:e})},getProcessAcceptData:function(e,t,n,r){return Object(u.o)({building_id:e,unit:t,start:n||"",end:r||""})},getProcessAcceptPileItem:function(e){return r.a.request("/report/get-pile-check-items",{bidsection_id:e})},getProcessAcceptPileData:function(e,t){return r.a.request("/report/process-accept-with-pile",{building_id:e,item_id:t})},getMeasureCheckedData:function(){return r.a.request("/report/leader-measure")},getSchedulePlanData:function(){return Object(o.i)()},getSchedulePlanProjectData:function(e){return Object(o.a)({proj_id:e})},getCheckProblemStatisticsData:function(e){return r.a.request("/report/leader-secure",e)},getProcessCheckStatisticsData:function(){return Object(i.k)()},schedulePlanNodeList:function(e){return Object(o.e)({plan_id:e})}};t.a=c}).call(this,n("391c"))},"774b":function(e,t,n){"use strict";var r=n("d18d").a,a=(n("b225"),n("17cc")),o=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"scroll-warp",staticClass:"scroll-warp",class:{"scroll-warp-pulling":e.pulling,"scroll-warp-complete":!e.hasNext&&!e.isEmpty,"scroll-warp-empty":e.isEmpty},style:{"padding-bottom":e.numberKeyboardCoverHeight+"px"},on:{scroll:e.onScroll,touchstart:e.onTouchstart,touchmove:e.onTouchmove,touchend:e.onTouchend}},[e.allowPullDown?n("div",{staticClass:"pull-refresh-warp",style:{height:e.pullDist+"px"}},[n("div",{staticClass:"pull-refresh"},[n("div",{staticClass:"animation-refresher",class:{refreshing:e.refreshing}}),e.updateTime?n("p",{staticClass:"pull-refresh-date"},[e._v("最后成功同步："+e._s(e.updateTime))]):e._e()])]):e._e(),e._t("default"),e.loading?n("div",{staticClass:"page-loading"},[n("svg",{staticClass:"svg-loading",attrs:{viewBox:"0 0 80 80"}},[n("circle",{attrs:{cx:"40",cy:"40",r:"36"}})])]):e._e(),e.hasNext||e.isEmpty?e._e():[e.$slots.end?e._t("end"):e._e(),!e.$slots.end&&e.endText?n("div",{staticClass:"end-text"},[e._v("\n      "+e._s(e.endText)+"\n    ")]):e._e()]],2)}),[],!1,null,"2b1a346c",null);t.a=o.exports},"9cd1":function(e,t,n){"use strict";n.d(t,"h",(function(){return i})),n.d(t,"m",(function(){return u})),n.d(t,"g",(function(){return s})),n.d(t,"f",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"l",(function(){return p})),n.d(t,"k",(function(){return d})),n.d(t,"j",(function(){return m})),n.d(t,"b",(function(){return f})),n.d(t,"e",(function(){return h})),n.d(t,"c",(function(){return _})),n.d(t,"i",(function(){return g})),n.d(t,"a",(function(){return b}));var r=n("5e8d"),a=n("162a"),o=n("bcc78");function i(e){return Object(r.a)().then((function(){var t=o.a.schedulePlanTaskInfo.url;return a.a.request(t,e)}))}function u(e){return Object(r.a)().then((function(){var t=o.a.schedulePlanSaveTask.url;return a.a.post(t,null,e)}))}function s(e){return Object(r.a)().then((function(){var t=o.a.schedulePlanPlanList.url;return a.a.request(t,e)}))}function c(e){return Object(r.a)().then((function(){var t=o.a.schedulePlanNodeList.url;return a.a.request(t,e)}))}function l(e){return Object(r.a)().then((function(){var t=o.a.schedulePlanNodeInfo.url;return a.a.request(t,e)}))}function p(e){return Object(r.a)().then((function(){var t=o.a.schedulePlanSaveReport.url;return a.a.post(t,null,e)}))}function d(e){return Object(r.a)().then((function(){var t=o.a.schedulePlanSaveCompleteTime.url;return a.a.post(t,null,e)}))}function m(e){return Object(r.a)().then((function(){var t=o.a.schedulePlanSaveChecker.url;return a.a.post(t,null,e)}))}function f(e){return Object(r.a)().then((function(){var t=o.a.schedulePlanCheckerLogList.url;return a.a.request(t,e)}))}function h(e){return Object(r.a)().then((function(){var t=o.a.schedulePlanNodeLevel.url;return a.a.request(t,e)}))}function _(){return Object(r.a)().then((function(){var e=o.a.schedulePlanCompletedTimeSetting.url;return a.a.request(e)}))}function g(){return Object(r.a)().then((function(){var e=o.a.schedulePlanLeaderSchedulePlan.url;return a.a.request(e)}))}function b(e){return Object(r.a)().then((function(){var t=o.a.schedulePlanGetByFirstProject.url;return a.a.request(t,e)}))}},"9d55":function(e,t,n){(e.exports=n("690e")(!1)).push([e.i,'.zjapp .scroll-warp[data-v-2b1a346c]{flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.zjapp .scroll-warp-pulling[data-v-2b1a346c]{overflow:hidden}.zjapp .scroll-warp-complete[data-v-2b1a346c]:after{content:"";display:block;height:100px}.zjapp .scroll-warp-empty[data-v-2b1a346c]{display:flex;flex-direction:column}.zjapp .pull-refresh-warp[data-v-2b1a346c]{position:relative;height:0;overflow:hidden}.zjapp .pull-refresh[data-v-2b1a346c]{position:absolute;left:0;bottom:0;height:70px;width:100%;padding:6px;text-align:center}.zjapp .pull-refresh-date[data-v-2b1a346c]{margin-top:4px;height:16px;line-height:16px;font-size:12px;color:#bcbcbc}.zjapp .page-loading[data-v-2b1a346c]{padding:10px;text-align:center}.zjapp .end-text[data-v-2b1a346c]{color:#c8c8c8;background:#f4f4f4;position:relative;line-height:76px;height:76px;text-align:center}.zjapp .end-text[data-v-2b1a346c]:after,.zjapp .end-text[data-v-2b1a346c]:before{content:"";position:absolute;width:48px;height:1px;background:#e4e4e4;top:50%;margin-top:-1px}.zjapp .end-text[data-v-2b1a346c]:after{left:50%;transform:translateX(-92px)}.zjapp .end-text[data-v-2b1a346c]:before{right:50%;transform:translateX(90px)}.zjapp .end-slot[data-v-2b1a346c]{padding:30px;line-height:18px;text-align:center;color:#c8c8c8}',""])},"9d6c":function(e,t,n){(e.exports=n("690e")(!1)).push([e.i,'.zjapp .tabs[data-v-f4e7714a]{height:40px;font-size:0;text-align:center;background-color:#fff;overflow:visible}.zjapp .tabs-scroll[data-v-f4e7714a]{padding:10px 0;margin:-10px 0;white-space:nowrap;overflow-x:auto}.zjapp .tabs-scroll[data-v-f4e7714a]::-webkit-scrollbar{display:none}.zjapp .tab[data-v-f4e7714a]{display:inline-block;padding:10px 15px;line-height:20px;font-size:16px;color:#333;white-space:nowrap}.zjapp .tab.cur[data-v-f4e7714a]{position:relative;z-index:3;color:#4275e8}.zjapp .tab.cur[data-v-f4e7714a]:after{content:"";position:absolute;z-index:3;bottom:-3px;left:50%;margin-left:-3px;width:7px;height:7px;border-radius:50%;background-color:#4275e8}.zjapp .table-chart[data-v-f4e7714a]{flex:1;width:100%}.zjapp .report-legend[data-v-f4e7714a]{position:absolute;padding:7px 10px;top:6px;right:6px;width:80px;height:68px;background:#fff;border-radius:2px;z-index:10;box-shadow:0 0 2px 0 rgba(0,0,0,.5)}.zjapp .pass-legend[data-v-f4e7714a],.zjapp .return-legend[data-v-f4e7714a],.zjapp .transfer-legend[data-v-f4e7714a]{margin:0;line-height:1.5;white-space:nowrap}.zjapp .pass-legend[data-v-f4e7714a]:before,.zjapp .return-legend[data-v-f4e7714a]:before,.zjapp .transfer-legend[data-v-f4e7714a]:before{content:"";margin-right:8px;vertical-align:-1px;display:inline-block;width:15px;height:10px}.zjapp .transfer-legend[data-v-f4e7714a]:before{background-color:#ffa340}.zjapp .pass-legend[data-v-f4e7714a]:before{background-color:#48d48c}.zjapp .return-legend[data-v-f4e7714a]:before{background-color:#ff6e6e}',""])},b225:function(e,t,n){"use strict";n("ef48")},c77f:function(e,t,n){"use strict";n.d(t,"i",(function(){return u})),n.d(t,"h",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return p})),n.d(t,"e",(function(){return d})),n.d(t,"n",(function(){return m})),n.d(t,"o",(function(){return f})),n.d(t,"b",(function(){return h})),n.d(t,"j",(function(){return _})),n.d(t,"k",(function(){return g})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return v})),n.d(t,"l",(function(){return w})),n.d(t,"p",(function(){return k})),n.d(t,"m",(function(){return j}));var r=n("5e8d"),a=n("162a"),o=n("bcc78"),i=n("da71");function u(e){return Object(r.a)().then((function(){var t=o.a.commonGetProblemClassTree.url;return a.a.request(t,e)}))}function s(e){return Object(r.a)().then((function(){var t=o.a.pileAcceptGetPileBuildingSummary.url;return a.a.request(t,e)}))}function c(e){return Object(r.a)().then((function(){var t=o.a.pileAcceptGetBidsectionBuildingTree.url;return a.a.request(t,e)}))}function l(){return Object(r.a)().then((function(){var e=o.a.pileAcceptGetPileAcceptItems.url;return a.a.request(e)}))}function p(e){return Object(r.a)().then((function(){var t=o.a.pileAcceptGetPileAcceptList.url;return a.a.request(t,e)}))}function d(e){return Object(r.a)().then((function(){var t=o.a.pileAcceptGetPileAcceptInfo.url;return a.a.request(t,e)}))}function m(e){return Object(r.a)().then((function(){var t=o.a.processAcceptBuilding.url;return a.a.request(t,e)}))}function f(e){return Object(r.a)().then((function(){var t=o.a.processAcceptCollect.url;return a.a.request(t,e)}))}function h(e){return Object(r.a)().then((function(){var t=o.a.processAcceptv3GetBuildingList.url;return a.a.request(t,e)}))}function _(e){return Object(r.a)().then((function(){var t=o.a.processAcceptv3GetProcessAcceptv3List.url;return a.a.request(t,e)}))}function g(e){return Object(r.a)().then((function(){var t=i.a.getReportOrgTree.url;return a.a.request(t,e)}))}function b(e){return Object(r.a)().then((function(){var t=i.a.getHomeReports.url;return a.a.request(t,e)}))}function v(e){return Object(r.a)().then((function(){var t=i.a.getMyReports.url;return a.a.request(t,e)}))}function w(e){return Object(r.a)().then((function(){var t=i.a.getReportPools.url;return a.a.request(t,e)}))}function k(e){return Object(r.a)().then((function(){var t=i.a.saveMyReportsSetting.url;return a.a.post(t,null,e)}))}function j(e){return Object(r.a)().then((function(){var t=o.a.getUrlReportAuth.url;return a.a.request(t,e)}))}},d18d:function(e,t,n){"use strict";(function(e){n("2b45");var r,a=n("4360"),o=n("48f4"),i=n("162a"),u=n("e2a7"),s=n("a500"),c=n("6f9e"),l={};t.a={name:"Scroller",props:{buildingId:{type:String,default:""},hasNext:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},isSync:{type:Boolean,default:!0},endText:{type:String,default:""},memoryScrollTop:{type:Boolean,default:!0},keepScrollTop:{type:Boolean},hasPullDown:{type:Boolean,default:!0},onPullDown:{type:Function}},data:function(){return{pullDist:0,refreshing:!1,pulling:!1,loading:!1,scrollTop:0,isCurrKeyboard:!1,gapBottom:0}},computed:{allowPullDown:function(){return this.hasPullDown&&(!!this.$listeners.pullDown||!!this.onPullDown)},updateTime:function(){return a.a.state.global.businessDownloadTime},numberKeyboardCoverHeight:function(){return a.a.state.global.isNumberInputOpen?a.a.state.global.numberKeyboardHeight-this.gapBottom:0}},mounted:function(){var e=this;c.a.$on("numberKeyboardOpen",this.onNumberKeyboardOpen),this.$nextTick((function(){var t=e.$refs["scroll-warp"]&&e.$refs["scroll-warp"].getBoundingClientRect&&e.$refs["scroll-warp"].getBoundingClientRect();t&&(e.gapBottom=document.documentElement.clientHeight-t.bottom),e.$el&&e.$el.addEventListener("focus",(function(t){var n=t&&t.target,r=n&&n.tagName&&n.tagName.toLowerCase();if("input"===r||"textarea"===r){window.addEventListener("resize",(function t(){var r=n.getBoundingClientRect(),a=e.$el.getBoundingClientRect(),o=r.bottom-a.bottom;o>0&&e.scrollBy(o),window.removeEventListener("resize",t,!1)}),!1)}}),!0)}))},destroyed:function(){c.a.$off("numberKeyboardOpen",this.onNumberKeyboardOpen)},activated:function(){var e=this.keepScrollTop||this.$router.isBack&&this.memoryScrollTop;this.scrollTop&&e&&(this.$refs["scroll-warp"].scrollTop=this.scrollTop)},deactivated:function(){this.memoryScrollTop&&(this.scrollTop=this.$refs["scroll-warp"].scrollTop)},methods:{onScroll:function(e){var t=this,n=this.$refs["scroll-warp"].scrollTop,r=this.$refs["scroll-warp"].scrollHeight;if(n+this.$refs["scroll-warp"].clientHeight>=r-5&&!this.loading&&this.hasNext){this.loading=!0;var a=this.$listeners.loadNext();a&&a.then&&"function"==typeof a.then?a.then((function(){t.loading=!1})):this.loading=!1}this.$emit("scroll",e)},getTouchDiretion:function(e){if(!(l&&e&&e.touches&&e.touches[0]))return"";var t=e.touches[0].clientX,n=e.touches[0].clientY;return Math.abs(n-l.y)>Math.abs(t-l.x)&&Math.abs(n-l.y)>=3?n>l.y?"down":"up":""},onTouchstart:function(e){this.allowPullDown&&e.touches&&1===e.touches.length&&(l={x:e.touches[0].clientX,y:e.touches[0].clientY,scrollTop:this.$refs["scroll-warp"].scrollTop,pullDist:this.pullDist})},onTouchmove:function(e){if(this.allowPullDown&&e.touches&&1===e.touches.length){var t=this.$refs["scroll-warp"].scrollTop,n=e.touches[0].clientY,r=n-l.y,a=this.getTouchDiretion(e);"down"===a?!this.refreshing&&t<=0?(this.pulling=!0,this.pullDist=(r-l.scrollTop)/2,e.preventDefault()):this.pulling=!1:"up"===a?this.pullDist>0&&(this.pullDist=l.pullDist-(l.y-n),e.preventDefault()):this.pullDist=l.pullDist}},onTouchend:function(){var e=this;this.allowPullDown&&(l={},this.pulling=!1,this.pullDist>=70&&this.isSync?this.refreshing?this.makePullTo(70):this.makePullTo(70).then((function(){if(e.refreshing=!0,e.onPullDown){var t=e.onPullDown();t&&t.then&&"function"==typeof t?t.finally((function(){e.refreshing=!1,e.makePullTo(0)})):(e.refreshing=!1,e.makePullTo(0))}else e.dataSync().then((function(){e.refreshing=!1,e.makePullTo(0),e.$emit("pullDown")})).catch((function(){e.refreshing=!1,e.makePullTo(0),e.$emit("pullDown")}))})):(this.refreshing=!1,this.makePullTo(0)))},makePullTo:function(e){var t=this,n=this.pullDist,r=e,a=r-n,o=n;return n===r?Promise.resolve():new Promise((function(e){!function i(){window.requestAnimationFrame((function(){o+=a/6,t.pullDist=o,n<r&&o<r||n>r&&o>r?i():(t.pullDist=r,t.refreshing=!1,e())}))}()}))},dataSync:function(){var e,t=o.default.getCurrentModuleCode(),n=o.default.getCurrentRoute(),r=n.meta&&n.meta.isTodo;if(o.default.isModuleNeedBuilding(t)&&!r){if(!this.buildingId)return new Promise((function(e){setTimeout((function(){e()}),500)}));e=this.buildingId}return s.a.addTrack("公共-手动下拉刷新","",""),i.a.beginManualUpdate(),o.default.checkSync(e).then((function(e){return i.a.endManualUpdate(),e})).catch((function(e){$log.error("下拉刷新错误",e),e&&"Error: Network Error"===e.toString()?u.a.alert("当前网络无法同步数据"):u.a.alert(e),i.a.endManualUpdate()}))},getScrollHeight:function(){return this.$refs["scroll-warp"].offsetHeight},getScrollTop:function(){return this.$refs["scroll-warp"].scrollTop},setScrollTop:function(e){this.$refs["scroll-warp"].scrollTop=e},scrollBy:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,a=this.getScrollTop(),o=a+e,i=Math.round(n/16.7),u=e/i,s=a,c=r=+new Date;return a===o?Promise.resolve():new Promise((function(e){!function n(){window.requestAnimationFrame((function(){c===r&&(s+=u,t.$refs["scroll-warp"].scrollTop=s,a<o&&s<o||a>o&&s>o?n():(t.$refs["scroll-warp"].scrollTop=o,e()))}))}()}))},scrollTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=this.getScrollTop(),r=e-n;return this.scrollBy(r,t)},scrollToEle:function(e){var t=e.keyboardHeight||232,n=(e=e.$el?e.$el:e).getBoundingClientRect(),r=this.$refs["scroll-warp"].getBoundingClientRect();if(n&&r){var o=document.documentElement.clientHeight-(a.a.state.global.isNumberInputOpen?t:0),i=r.bottom<o?r.bottom:o,u=r.top-n.top,s=n.bottom-i;u>0?this.scrollBy(-u-10):s>0&&this.scrollBy(s+10)}},isCurrent:function(t,n){var r=this;t.length&&e.each(t,(function(e){e._uid===n?r.isCurrKeyboard=!0:r.isCurrent(e.$children,n)}))},onNumberKeyboardOpen:function(e){this.isCurrKeyboard=!1,this.isCurrent(this.$children,e._uid),this.isCurrKeyboard&&this.scrollToEle(e)}}}}).call(this,n("391c"))},ef48:function(e,t,n){var r=n("9d55");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("85cb").default)("a1a65c0c",r,!0,{sourceMap:!1,shadowMode:!1})}}]);