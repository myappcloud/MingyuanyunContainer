(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["report-process-accept-project--index"],{"0552":function(e,t,n){"use strict";(function(e){n("cc57"),n("f548");var r=n("07d2"),a=n("5685");t.a={name:"ReportProcessAcceptIndex",components:{item:r.default},data:function(){return{isLoading:!0,sections:[],curBuilding:{},buildIndex:0}},computed:{projectSelected:function(){return this.$store.state.global.currentReportProject},sectionIsEmpty:function(){return e.isEmpty(this.sections)}},activated:function(){this.getReportData()},methods:{getReportData:function(){var t=this;return a.a.getProcessAcceptBuilding(this.projectSelected.id).then((function(n){var r=[],a={},i={};e.each(n,(function(e){a[e.bidsection_id]||(a[e.bidsection_id]={id:e.bidsection_id,name:e.bidsection_name,buildings:[]},r.push(a[e.bidsection_id])),i[e.building_id]||(i[e.building_id]={id:e.building_id,name:e.building_name,units:[]},a[e.bidsection_id].buildings.push(i[e.building_id])),e.unit&&i[e.building_id].units.push({id:e.unit,name:e.unit.replace("单元","")+"单元",has_new:1===e.has_new}),1===e.has_new&&(i[e.building_id].has_new=!0)})),t.sections=a,console.log(a)})).catch((function(e){Popup.alert(e&&e.errmsg||e)})).finally((function(){t.isLoading=!1}))},clickBuilding:function(e,t,n){this.curBuilding=e,this.buildIndex=t,e.units&&e.units.length||this.goProcessProgress(n,e.id,"")},clickUnit:function(e,t){this.goProcessProgress(t,this.curBuilding.id,e.id)},goProcessProgress:function(e,t,n){var r={proj_id:this.projectSelected.id,section_id:e,floor:"[]",building_id:t,unit:n,building_title:this.curBuilding.name,type:3};console.log({query:r}),this.$router.push({name:"ReportProcessAcceptProcess",query:r})}}}}).call(this,n("391c"))},5685:function(e,t,n){"use strict";(function(e){var r=n("162a"),a=n("6144"),i=n("9cd1"),u=n("da2f"),o=n("c77f");function s(e,t){return e?(e-t)/e*100:0}var c={getProcessCheckNewBuilding:function(e){var t=a.a.getString("reportDateType",a.a.level.user)||"month";return Object(u.d)({proj_id:e,query_type:t})},getProjTotalData:function(){return r.a.request("/report/project-over-view")},getDailyCheckData:function(e,t,n,a,i){var u={proj_id:e,bidsection_id:t,begin_date:n,end_date:a};return i&&(u.module=i),r.a.request("/report/check",u)},getReportCheckList:function(e){return r.a.request("/report/check-batch-problem-list",{batch_id:e.batchId,begin_date:e.dateStart,end_date:e.dateEnd})},getReportCheckTimeoutList:function(e,t,n){return r.a.request("/report/get-over-due-check",{proj_id:e,key:t,page:n,pageSize:15})},getOverDueCheckConfig:function(e){return r.a.request("/report/get-over-due-check-config",{proj_id:e})},getReportCheckDetail:function(e){return r.a.request("/report/check-batch-problem-detail",{id:e})},postReportCheckUpdate:function(e){return r.a.post("/checkquality-comment/upload",{},e)},postReportCheckSendBack:function(e){return r.a.post("/checkquality-comment/send-back",{},e)},measureProjectData:[],waterPercolationData:[],getMeasureData:function(t){return r.a.request("/report/measure",{proj_id:t}).then((function(t){return e.each(t,(function(t){t.repair_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},t.supervision_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},t.construct_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},e.each(t.buildings,(function(n){n.repair_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},n.supervision_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},n.construct_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},e.each(n.check_items,(function(r){r.repair_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},r.supervision_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},r.construct_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},e.each(r.children,(function(a){t.repair_data.measurement_points_num+=a.measure_data[0].measurement_points,t.repair_data.problem_points_num+=a.measure_data[0].problem_points,t.repair_data.checkitem_num+=a.measure_data[0].measurement_points?1:0,t.supervision_data.measurement_points_num+=a.measure_data[1].measurement_points,t.supervision_data.problem_points_num+=a.measure_data[1].problem_points,t.supervision_data.checkitem_num+=a.measure_data[1].measurement_points?1:0,t.construct_data.measurement_points_num+=a.measure_data[2].measurement_points,t.construct_data.problem_points_num+=a.measure_data[2].problem_points,t.construct_data.checkitem_num+=a.measure_data[2].measurement_points?1:0,n.repair_data.measurement_points_num+=a.measure_data[0].measurement_points,n.repair_data.problem_points_num+=a.measure_data[0].problem_points,n.repair_data.checkitem_num+=a.measure_data[0].measurement_points?1:0,n.supervision_data.measurement_points_num+=a.measure_data[1].measurement_points,n.supervision_data.problem_points_num+=a.measure_data[1].problem_points,n.supervision_data.checkitem_num+=a.measure_data[1].measurement_points?1:0,n.construct_data.measurement_points_num+=a.measure_data[2].measurement_points,n.construct_data.problem_points_num+=a.measure_data[2].problem_points,n.construct_data.checkitem_num+=a.measure_data[2].measurement_points?1:0,r.repair_data.measurement_points_num+=a.measure_data[0].measurement_points,r.repair_data.problem_points_num+=a.measure_data[0].problem_points,r.repair_data.checkitem_num+=a.measure_data[0].measurement_points?1:0,r.supervision_data.measurement_points_num+=a.measure_data[1].measurement_points,r.supervision_data.problem_points_num+=a.measure_data[1].problem_points,r.supervision_data.checkitem_num+=a.measure_data[1].measurement_points?1:0,r.construct_data.measurement_points_num+=a.measure_data[2].measurement_points,r.construct_data.problem_points_num+=a.measure_data[2].problem_points,r.construct_data.checkitem_num+=a.measure_data[2].measurement_points?1:0,e.each(a.measure_data,(function(e){e.measurement_points?e.passport=(e.measurement_points-e.problem_points)/e.measurement_points*100:e.passport=0}))})),r.repair_data.passport=s(r.repair_data.measurement_points_num,r.repair_data.problem_points_num),r.supervision_data.passport=s(r.supervision_data.measurement_points_num,r.supervision_data.problem_points_num),r.construct_data.passport=s(r.construct_data.measurement_points_num,r.construct_data.problem_points_num)})),n.repair_data.passport=s(n.repair_data.measurement_points_num,n.repair_data.problem_points_num),n.supervision_data.passport=s(n.supervision_data.measurement_points_num,n.supervision_data.problem_points_num),n.construct_data.passport=s(n.construct_data.measurement_points_num,n.construct_data.problem_points_num)})),t.repair_data.passport=s(t.repair_data.measurement_points_num,t.repair_data.problem_points_num),t.supervision_data.passport=s(t.supervision_data.measurement_points_num,t.supervision_data.problem_points_num),t.construct_data.passport=s(t.construct_data.measurement_points_num,t.construct_data.problem_points_num)})),t}))},measureBuildData:{},setMeasureBuildData:function(e){c.measureBuildData=e},getMeasureBuildData:function(t){return e.isEmpty(c.measureBuildData)?c.getMeasureData(t).then((function(e){return e[0]})):Promise.resolve(c.measureBuildData)},getCheckAcceptData:function(e){return r.a.request("/report/check-accept",{proj_id:e})},getCheckAcceptDataOfBuilding:function(e,t,n){return r.a.request("/report/check-accept-detail",{section_id:e,building_id:t,unit:n||""})},getProcessCheckData:function(e,t){return r.a.request("/report/processcheck",{building_id:e,unit:t})},getProcessCheckData2:function(e){return Object(u.g)({building_id:e})},getMaterialData:function(e,t,n){return r.a.request("/report/material",{proj_id:e,begin_date:t,end_date:n})},getProcessAcceptBuilding:function(e){var t=a.a.getString("reportDateType",a.a.level.user)||"month";return Object(o.m)({proj_id:e,query_type:t})},getWaterPercolation:function(e){return r.a.request("/report/close-water-test",{proj_id:e})},getProcessAcceptData:function(e,t,n,r){return Object(o.n)({building_id:e,unit:t,start:n||"",end:r||""})},getProcessAcceptPileItem:function(e){return r.a.request("/report/get-pile-check-items",{bidsection_id:e})},getProcessAcceptPileData:function(e,t){return r.a.request("/report/process-accept-with-pile",{building_id:e,item_id:t})},getMeasureCheckedData:function(){return r.a.request("/report/leader-measure")},getSchedulePlanData:function(){return Object(i.i)()},getSchedulePlanProjectData:function(e){return Object(i.a)({proj_id:e})},getCheckProblemStatisticsData:function(e){return r.a.request("/report/leader-secure",e)},getProcessCheckStatisticsData:function(){return Object(u.k)()},schedulePlanNodeList:function(e){return Object(i.e)({plan_id:e})}};t.a=c}).call(this,n("391c"))},"6bf81":function(e,t,n){"use strict";n.r(t);var r=n("0552").a,a=(n("a4a0"),n("17cc")),i=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("page-content",{attrs:{title:"报表-工序验收"}},[e.isLoading?e._e():n("div",{staticClass:"report-process-accept-wrap"},[e._l(e.sections,(function(t,r){return n("div",{key:r},[n("div",{staticClass:"list-title"},[e._v(e._s(t.name))]),n("div",{staticClass:"list list-room van-hairline--top-bottom pr0"},[n("div",{staticClass:"clearfix"},[e._l(t.buildings,(function(a,i){return n("div",{key:i,staticClass:"item-list-room",class:{selected:e.curBuilding.id===a.id,"new-progress":a.has_new},on:{click:function(n){e.clickBuilding(a,r,t.id)}}},[e._v(e._s(a.name))])})),t.buildings.length?e._e():n("div",{staticClass:"color-light pb10"},[e._v("此标段未设楼栋范围")])],2),e.curBuilding.units&&e.curBuilding.units.length&&e.buildIndex===r?n("div",{staticClass:"clearfix border-top pt10"},e._l(e.curBuilding.units,(function(r,a){return n("div",{key:a,staticClass:"item-list-room",class:{"new-progress":r.has_new},on:{click:function(n){e.clickUnit(r,t.id)}}},[e._v(e._s(r.name))])}))):e._e()])])})),n("loading-status",{attrs:{"is-loading":e.isLoading,"is-empty":e.sectionIsEmpty,"empty-text":"此项目未设置标段楼栋信息",type:"report"}})],2)])}),[],!1,null,"40e20f4d",null);t.default=i.exports},"9cd1":function(e,t,n){"use strict";n.d(t,"h",(function(){return u})),n.d(t,"m",(function(){return o})),n.d(t,"g",(function(){return s})),n.d(t,"f",(function(){return c})),n.d(t,"d",(function(){return p})),n.d(t,"l",(function(){return d})),n.d(t,"k",(function(){return m})),n.d(t,"j",(function(){return _})),n.d(t,"b",(function(){return l})),n.d(t,"e",(function(){return f})),n.d(t,"c",(function(){return h})),n.d(t,"i",(function(){return b})),n.d(t,"a",(function(){return g}));var r=n("5e8d"),a=n("162a"),i=n("bcc78");function u(e){return Object(r.a)().then((function(){var t=i.a.schedulePlanTaskInfo.url;return a.a.request(t,e)}))}function o(e){return Object(r.a)().then((function(){var t=i.a.schedulePlanSaveTask.url;return a.a.post(t,null,e)}))}function s(e){return Object(r.a)().then((function(){var t=i.a.schedulePlanPlanList.url;return a.a.request(t,e)}))}function c(e){return Object(r.a)().then((function(){var t=i.a.schedulePlanNodeList.url;return a.a.request(t,e)}))}function p(e){return Object(r.a)().then((function(){var t=i.a.schedulePlanNodeInfo.url;return a.a.request(t,e)}))}function d(e){return Object(r.a)().then((function(){var t=i.a.schedulePlanSaveReport.url;return a.a.post(t,null,e)}))}function m(e){return Object(r.a)().then((function(){var t=i.a.schedulePlanSaveCompleteTime.url;return a.a.post(t,null,e)}))}function _(e){return Object(r.a)().then((function(){var t=i.a.schedulePlanSaveChecker.url;return a.a.post(t,null,e)}))}function l(e){return Object(r.a)().then((function(){var t=i.a.schedulePlanCheckerLogList.url;return a.a.request(t,e)}))}function f(e){return Object(r.a)().then((function(){var t=i.a.schedulePlanNodeLevel.url;return a.a.request(t,e)}))}function h(){return Object(r.a)().then((function(){var e=i.a.schedulePlanCompletedTimeSetting.url;return a.a.request(e)}))}function b(){return Object(r.a)().then((function(){var e=i.a.schedulePlanLeaderSchedulePlan.url;return a.a.request(e)}))}function g(e){return Object(r.a)().then((function(){var t=i.a.schedulePlanGetByFirstProject.url;return a.a.request(t,e)}))}},a4a0:function(e,t,n){"use strict";n("d74c")},c77f:function(e,t,n){"use strict";n.d(t,"h",(function(){return o})),n.d(t,"g",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return p})),n.d(t,"f",(function(){return d})),n.d(t,"d",(function(){return m})),n.d(t,"m",(function(){return _})),n.d(t,"n",(function(){return l})),n.d(t,"b",(function(){return f})),n.d(t,"i",(function(){return h})),n.d(t,"j",(function(){return b})),n.d(t,"c",(function(){return g})),n.d(t,"k",(function(){return v})),n.d(t,"o",(function(){return j})),n.d(t,"l",(function(){return k}));var r=n("5e8d"),a=n("162a"),i=n("bcc78"),u=n("da71");function o(e){return Object(r.a)().then((function(){var t=i.a.commonGetProblemClassTree.url;return a.a.request(t,e)}))}function s(e){return Object(r.a)().then((function(){var t=i.a.pileAcceptGetPileBuildingSummary.url;return a.a.request(t,e)}))}function c(e){return Object(r.a)().then((function(){var t=i.a.pileAcceptGetBidsectionBuildingTree.url;return a.a.request(t,e)}))}function p(){return Object(r.a)().then((function(){var e=i.a.pileAcceptGetPileAcceptItems.url;return a.a.request(e)}))}function d(e){return Object(r.a)().then((function(){var t=i.a.pileAcceptGetPileAcceptList.url;return a.a.request(t,e)}))}function m(e){return Object(r.a)().then((function(){var t=i.a.pileAcceptGetPileAcceptInfo.url;return a.a.request(t,e)}))}function _(e){return Object(r.a)().then((function(){var t=i.a.processAcceptBuilding.url;return a.a.request(t,e)}))}function l(e){return Object(r.a)().then((function(){var t=i.a.processAcceptCollect.url;return a.a.request(t,e)}))}function f(e){return Object(r.a)().then((function(){var t=i.a.processAcceptv3GetBuildingList.url;return a.a.request(t,e)}))}function h(e){return Object(r.a)().then((function(){var t=i.a.processAcceptv3GetProcessAcceptv3List.url;return a.a.request(t,e)}))}function b(e){return Object(r.a)().then((function(){var t=u.a.getReportOrgTree.url;return a.a.request(t,e)}))}function g(e){return Object(r.a)().then((function(){var t=u.a.getHomeReports.url;return a.a.request(t,e)}))}function v(e){return Object(r.a)().then((function(){var t=u.a.getReportPools.url;return a.a.request(t,e)}))}function j(e){return Object(r.a)().then((function(){var t=u.a.saveMyReportsSetting.url;return a.a.post(t,null,e)}))}function k(e){return Object(r.a)().then((function(){var t=i.a.getUrlReportAuth.url;return a.a.request(t,e)}))}},d74c:function(e,t,n){var r=n("fc82");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("85cb").default)("51c2902a",r,!0,{sourceMap:!1,shadowMode:!1})},fc82:function(e,t,n){(e.exports=n("690e")(!1)).push([e.i,".zjapp .report-process-accept-wrap[data-v-40e20f4d]{height:100%;overflow:auto}.zjapp .report-process-accept-wrap .item-select-project>*[data-v-40e20f4d]{pointer-events:none}.zjapp .report-process-accept-wrap .list-title[data-v-40e20f4d]{position:relative;color:#888;font-size:14px;line-height:30px;min-height:40px;margin-bottom:0;margin-top:0;padding:8px 16px 2px}.zjapp .report-process-accept-wrap .list-room[data-v-40e20f4d]{padding:15px 20px 0;background-color:#fff;overflow:hidden}.zjapp .report-process-accept-wrap .item-list-room[data-v-40e20f4d]{float:left;min-width:65px;min-height:30px;line-height:30px;margin:0 25px 15px 0;padding:0 15px;text-align:center;border:1px solid #dcdcdc;border-radius:3px}.zjapp .report-process-accept-wrap .item-list-room.selected[data-v-40e20f4d]{border-color:#4275e8;background-color:#4275e8;color:#fff}.zjapp .report-process-accept-wrap .item-list-room.disabled[data-v-40e20f4d]{background-color:#f2f2f2;color:#999}.zjapp .report-process-accept-wrap .item-list-room.bg-green[data-v-40e20f4d]{color:#fff;border-color:#0bc666}.zjapp .report-process-accept-wrap .item-list-room.bg-blue[data-v-40e20f4d]{color:#fff;border-color:#4174e9}.zjapp .report-process-accept-wrap .item-list-room.bg-orange[data-v-40e20f4d]{color:#fff;border-color:#ff8400}.zjapp .report-process-accept-wrap .item-list-room.bg-red[data-v-40e20f4d]{color:#fff;border-color:#ff3d3d}.zjapp .report-process-accept-wrap .item-list-room.bg-brown[data-v-40e20f4d]{color:#fff;border-color:#ff7439}.zjapp .report-process-accept-wrap .item-list-room.bg-part[data-v-40e20f4d]{border:1px solid #0bc666;position:relative;color:#0bc666}",""])}}]);