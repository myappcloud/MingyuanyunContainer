(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["report-schedule-manage-leader-list"],{5685:function(t,e,a){"use strict";(function(t){var n=a("162a"),r=a("6144"),i=a("9cd1"),o=a("da2f"),s=a("c77f");function l(t,e){return t?(t-e)/t*100:0}var p={getProcessCheckNewBuilding:function(t){var e=r.a.getString("reportDateType",r.a.level.user)||"month";return Object(o.d)({proj_id:t,query_type:e})},getProjTotalData:function(){return n.a.request("/report/project-over-view")},getDailyCheckData:function(t,e,a,r,i){var o={proj_id:t,bidsection_id:e,begin_date:a,end_date:r};return i&&(o.module=i),n.a.request("/report/check",o)},getReportCheckList:function(t){return n.a.request("/report/check-batch-problem-list",{batch_id:t.batchId,begin_date:t.dateStart,end_date:t.dateEnd})},getReportCheckTimeoutList:function(t,e,a){return n.a.request("/report/get-over-due-check",{proj_id:t,key:e,page:a,pageSize:15})},getOverDueCheckConfig:function(t){return n.a.request("/report/get-over-due-check-config",{proj_id:t})},getReportCheckDetail:function(t){return n.a.request("/report/check-batch-problem-detail",{id:t})},postReportCheckUpdate:function(t){return n.a.post("/checkquality-comment/upload",{},t)},postReportCheckSendBack:function(t){return n.a.post("/checkquality-comment/send-back",{},t)},measureProjectData:[],waterPercolationData:[],getMeasureData:function(e){return n.a.request("/report/measure",{proj_id:e}).then((function(e){return t.each(e,(function(e){e.repair_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},e.supervision_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},e.construct_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},t.each(e.buildings,(function(a){a.repair_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},a.supervision_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},a.construct_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},t.each(a.check_items,(function(n){n.repair_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},n.supervision_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},n.construct_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},t.each(n.children,(function(r){e.repair_data.measurement_points_num+=r.measure_data[0].measurement_points,e.repair_data.problem_points_num+=r.measure_data[0].problem_points,e.repair_data.checkitem_num+=r.measure_data[0].measurement_points?1:0,e.supervision_data.measurement_points_num+=r.measure_data[1].measurement_points,e.supervision_data.problem_points_num+=r.measure_data[1].problem_points,e.supervision_data.checkitem_num+=r.measure_data[1].measurement_points?1:0,e.construct_data.measurement_points_num+=r.measure_data[2].measurement_points,e.construct_data.problem_points_num+=r.measure_data[2].problem_points,e.construct_data.checkitem_num+=r.measure_data[2].measurement_points?1:0,a.repair_data.measurement_points_num+=r.measure_data[0].measurement_points,a.repair_data.problem_points_num+=r.measure_data[0].problem_points,a.repair_data.checkitem_num+=r.measure_data[0].measurement_points?1:0,a.supervision_data.measurement_points_num+=r.measure_data[1].measurement_points,a.supervision_data.problem_points_num+=r.measure_data[1].problem_points,a.supervision_data.checkitem_num+=r.measure_data[1].measurement_points?1:0,a.construct_data.measurement_points_num+=r.measure_data[2].measurement_points,a.construct_data.problem_points_num+=r.measure_data[2].problem_points,a.construct_data.checkitem_num+=r.measure_data[2].measurement_points?1:0,n.repair_data.measurement_points_num+=r.measure_data[0].measurement_points,n.repair_data.problem_points_num+=r.measure_data[0].problem_points,n.repair_data.checkitem_num+=r.measure_data[0].measurement_points?1:0,n.supervision_data.measurement_points_num+=r.measure_data[1].measurement_points,n.supervision_data.problem_points_num+=r.measure_data[1].problem_points,n.supervision_data.checkitem_num+=r.measure_data[1].measurement_points?1:0,n.construct_data.measurement_points_num+=r.measure_data[2].measurement_points,n.construct_data.problem_points_num+=r.measure_data[2].problem_points,n.construct_data.checkitem_num+=r.measure_data[2].measurement_points?1:0,t.each(r.measure_data,(function(t){t.measurement_points?t.passport=(t.measurement_points-t.problem_points)/t.measurement_points*100:t.passport=0}))})),n.repair_data.passport=l(n.repair_data.measurement_points_num,n.repair_data.problem_points_num),n.supervision_data.passport=l(n.supervision_data.measurement_points_num,n.supervision_data.problem_points_num),n.construct_data.passport=l(n.construct_data.measurement_points_num,n.construct_data.problem_points_num)})),a.repair_data.passport=l(a.repair_data.measurement_points_num,a.repair_data.problem_points_num),a.supervision_data.passport=l(a.supervision_data.measurement_points_num,a.supervision_data.problem_points_num),a.construct_data.passport=l(a.construct_data.measurement_points_num,a.construct_data.problem_points_num)})),e.repair_data.passport=l(e.repair_data.measurement_points_num,e.repair_data.problem_points_num),e.supervision_data.passport=l(e.supervision_data.measurement_points_num,e.supervision_data.problem_points_num),e.construct_data.passport=l(e.construct_data.measurement_points_num,e.construct_data.problem_points_num)})),e}))},measureBuildData:{},setMeasureBuildData:function(t){p.measureBuildData=t},getMeasureBuildData:function(e){return t.isEmpty(p.measureBuildData)?p.getMeasureData(e).then((function(t){return t[0]})):Promise.resolve(p.measureBuildData)},getCheckAcceptData:function(t){return n.a.request("/report/check-accept",{proj_id:t})},getCheckAcceptDataOfBuilding:function(t,e,a){return n.a.request("/report/check-accept-detail",{section_id:t,building_id:e,unit:a||""})},getProcessCheckData:function(t,e){return n.a.request("/report/processcheck",{building_id:t,unit:e})},getProcessCheckData2:function(t){return Object(o.g)({building_id:t})},getMaterialData:function(t,e,a){return n.a.request("/report/material",{proj_id:t,begin_date:e,end_date:a})},getProcessAcceptBuilding:function(t){var e=r.a.getString("reportDateType",r.a.level.user)||"month";return Object(s.n)({proj_id:t,query_type:e})},getWaterPercolation:function(t){return n.a.request("/report/close-water-test",{proj_id:t})},getProcessAcceptData:function(t,e,a,n){return Object(s.o)({building_id:t,unit:e,start:a||"",end:n||""})},getProcessAcceptPileItem:function(t){return n.a.request("/report/get-pile-check-items",{bidsection_id:t})},getProcessAcceptPileData:function(t,e){return n.a.request("/report/process-accept-with-pile",{building_id:t,item_id:e})},getMeasureCheckedData:function(){return n.a.request("/report/leader-measure")},getSchedulePlanData:function(){return Object(i.i)()},getSchedulePlanProjectData:function(t){return Object(i.a)({proj_id:t})},getCheckProblemStatisticsData:function(t){return n.a.request("/report/leader-secure",t)},getProcessCheckStatisticsData:function(){return Object(o.k)()},schedulePlanNodeList:function(t){return Object(i.e)({plan_id:t})}};e.a=p}).call(this,a("391c"))},"774b":function(t,e,a){"use strict";var n=a("d18d").a,r=(a("b225"),a("17cc")),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"scroll-warp",staticClass:"scroll-warp",class:{"scroll-warp-pulling":t.pulling,"scroll-warp-complete":!t.hasNext&&!t.isEmpty,"scroll-warp-empty":t.isEmpty},style:{"padding-bottom":t.numberKeyboardCoverHeight+"px"},on:{scroll:t.onScroll,touchstart:t.onTouchstart,touchmove:t.onTouchmove,touchend:t.onTouchend}},[t.allowPullDown?a("div",{staticClass:"pull-refresh-warp",style:{height:t.pullDist+"px"}},[a("div",{staticClass:"pull-refresh"},[a("div",{staticClass:"animation-refresher",class:{refreshing:t.refreshing}}),t.updateTime?a("p",{staticClass:"pull-refresh-date"},[t._v("最后成功同步："+t._s(t.updateTime))]):t._e()])]):t._e(),t._t("default"),t.loading?a("div",{staticClass:"page-loading"},[a("svg",{staticClass:"svg-loading",attrs:{viewBox:"0 0 80 80"}},[a("circle",{attrs:{cx:"40",cy:"40",r:"36"}})])]):t._e(),t.hasNext||t.isEmpty?t._e():[t.$slots.end?t._t("end"):t._e(),!t.$slots.end&&t.endText?a("div",{staticClass:"end-text"},[t._v("\n      "+t._s(t.endText)+"\n    ")]):t._e()]],2)}),[],!1,null,"2b1a346c",null);e.a=i.exports},"78bb":function(t,e,a){(t.exports=a("690e")(!1)).push([t.i,'.zjapp .report-schedule-manage-list-wrap .project[data-v-0bc100b3]{background:#fff;margin:0 0 10px 0}.zjapp .report-schedule-manage-list-wrap .project[data-v-0bc100b3]:last-child{margin:0 0 40px 0}.zjapp .report-schedule-manage-list-wrap .project .project-name[data-v-0bc100b3]{position:relative;line-height:45px;padding-left:20px;font-size:16px;font-weight:400}.zjapp .report-schedule-manage-list-wrap .project .project-name[data-v-0bc100b3]:before{content:"";height:15px;width:3px;border-radius:2px;background:#4275e8;position:absolute;margin:auto;top:0;bottom:0;left:10px}.zjapp .report-schedule-manage-list-wrap .project .plan[data-v-0bc100b3]{background-color:#fff}.zjapp .report-schedule-manage-list-wrap .project .plan .plan-name[data-v-0bc100b3]{padding-left:10px;line-height:40px}.zjapp .report-schedule-manage-list-wrap .project .plan .plan-list[data-v-0bc100b3]{position:relative;padding:1px 0 0;margin-bottom:10px}.zjapp .report-schedule-manage-list-wrap .project .plan .plan-list[data-v-0bc100b3]:last-child{margin-bottom:0}.zjapp .report-schedule-manage-list-wrap .project .plan .plan-list .plan-list-details[data-v-0bc100b3]{display:flex;align-items:center;justify-content:center;position:relative;padding:24px 15px 0 0;overflow:hidden}.zjapp .report-schedule-manage-list-wrap .project .plan .plan-list .plan-list-details .icon-box[data-v-0bc100b3]{line-height:18px;transform:scale(.5)}.zjapp .report-schedule-manage-list-wrap .project .plan .plan-list .plan-list-details .icon-box .icon-qualified[data-v-0bc100b3]{font-size:12px}.zjapp .report-schedule-manage-list-wrap .project .plan .plan-list .plan-bar[data-v-0bc100b3]{position:absolute;left:0;top:0;width:2px;background-color:#c3cee6}.zjapp .report-schedule-manage-list-wrap .project .plan .plan-list .plan-bar-bg[data-v-0bc100b3]{position:absolute;left:74px;top:0;width:2px;height:100%;background-color:#f4f4f4}.zjapp .report-schedule-manage-list-wrap .project .plan .plan-list .plan-bar-bg.first[data-v-0bc100b3]{top:33px}.zjapp .report-schedule-manage-list-wrap .project .plan .plan-list .plan-bar-bg.last[data-v-0bc100b3]{height:33px}.zjapp .report-schedule-manage-list-wrap .project .plan .plan-list .plan-status-icon-finish[data-v-0bc100b3]{position:absolute;top:24px;left:66px;width:18px;height:18px;line-height:18px;border-radius:9px;background-color:#7a95d1;font-size:14px;color:#fff;text-align:center}.zjapp .report-schedule-manage-list-wrap .project .plan .plan-list .plan-status-icon-doing[data-v-0bc100b3]{position:absolute;top:29px;left:71px;width:8px;height:8px;border-radius:4px;background-color:#7a95d1}.zjapp .report-schedule-manage-list-wrap .project .plan .plan-list .plan-status-icon-pending[data-v-0bc100b3]{position:absolute;top:29px;left:71px;width:8px;height:8px;border-radius:4px;background-color:#c8c8c8}.zjapp .report-schedule-manage-list-wrap .project .plan .plan-list .plan-main[data-v-0bc100b3]{display:flex;align-items:flex-start;justify-content:flex-start;flex:1}.zjapp .report-schedule-manage-list-wrap .project .plan .plan-list .plan-main .plan-time[data-v-0bc100b3]{width:75px;color:#666;text-align:center}.zjapp .report-schedule-manage-list-wrap .project .plan .plan-list .plan-main .plan-time .plan-day[data-v-0bc100b3]{font-size:15px;line-height:15px}.zjapp .report-schedule-manage-list-wrap .project .plan .plan-list .plan-main .plan-time .plan-year[data-v-0bc100b3]{font-size:9px;line-height:9px;margin-top:7px}.zjapp .report-schedule-manage-list-wrap .project .plan .plan-list .plan-main .plan-content[data-v-0bc100b3]{flex:1;padding:0 0 20px 20px}.zjapp .report-schedule-manage-list-wrap .project .plan .plan-list .plan-main .plan-content .plan-title[data-v-0bc100b3]{font-size:17px;line-height:17px;color:#333;word-wrap:break-word;word-break:break-all}.zjapp .report-schedule-manage-list-wrap .project .plan .plan-list .plan-main .plan-content .plan-detail[data-v-0bc100b3]{font-size:0;line-height:0;padding-top:10px;margin-bottom:-5px}.zjapp .report-schedule-manage-list-wrap .project .plan .plan-list .plan-main .plan-content .plan-detail .plan-level[data-v-0bc100b3]{display:inline-block;vertical-align:top;margin-right:5px;margin-bottom:5px;height:17px;padding:0 7px;line-height:17px;font-size:11px;color:#999;background-color:#f4f4f4;border-radius:8.5px}.zjapp .report-schedule-manage-list-wrap .project .plan .plan-list .plan-main .plan-content .plan-detail .plan-exceed[data-v-0bc100b3]{display:inline-block;vertical-align:top;height:17px;line-height:17px;font-size:11px;color:#999}.zjapp .report-schedule-manage-list-wrap .project .plan .plan-list .plan-main .plan-content .plan-detail .plan-report[data-v-0bc100b3]{display:inline-block;vertical-align:top;margin-right:5px;margin-bottom:5px;height:17px;padding:0 7px;line-height:17px;font-size:11px;color:#fff;background-color:#ff7439;border-radius:8.5px}.zjapp .report-schedule-manage-list-wrap .project .plan .plan-list .plan-main .plan-content .plan-detail .plan-timeout[data-v-0bc100b3]{display:inline-block;vertical-align:top;margin-right:5px;margin-bottom:5px;height:17px;padding:0 7px;line-height:17px;font-size:11px;color:#fff;background-color:#ff3c46;border-radius:8.5px}',""])},"7bb4":function(t,e,a){var n=a("78bb");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("85cb").default)("518355f4",n,!0,{sourceMap:!1,shadowMode:!1})},"9cd1":function(t,e,a){"use strict";a.d(e,"h",(function(){return o})),a.d(e,"m",(function(){return s})),a.d(e,"g",(function(){return l})),a.d(e,"f",(function(){return p})),a.d(e,"d",(function(){return u})),a.d(e,"l",(function(){return c})),a.d(e,"k",(function(){return d})),a.d(e,"j",(function(){return m})),a.d(e,"b",(function(){return h})),a.d(e,"e",(function(){return _})),a.d(e,"c",(function(){return f})),a.d(e,"i",(function(){return b})),a.d(e,"a",(function(){return g}));var n=a("5e8d"),r=a("162a"),i=a("bcc78");function o(t){return Object(n.a)().then((function(){var e=i.a.schedulePlanTaskInfo.url;return r.a.request(e,t)}))}function s(t){return Object(n.a)().then((function(){var e=i.a.schedulePlanSaveTask.url;return r.a.post(e,null,t)}))}function l(t){return Object(n.a)().then((function(){var e=i.a.schedulePlanPlanList.url;return r.a.request(e,t)}))}function p(t){return Object(n.a)().then((function(){var e=i.a.schedulePlanNodeList.url;return r.a.request(e,t)}))}function u(t){return Object(n.a)().then((function(){var e=i.a.schedulePlanNodeInfo.url;return r.a.request(e,t)}))}function c(t){return Object(n.a)().then((function(){var e=i.a.schedulePlanSaveReport.url;return r.a.post(e,null,t)}))}function d(t){return Object(n.a)().then((function(){var e=i.a.schedulePlanSaveCompleteTime.url;return r.a.post(e,null,t)}))}function m(t){return Object(n.a)().then((function(){var e=i.a.schedulePlanSaveChecker.url;return r.a.post(e,null,t)}))}function h(t){return Object(n.a)().then((function(){var e=i.a.schedulePlanCheckerLogList.url;return r.a.request(e,t)}))}function _(t){return Object(n.a)().then((function(){var e=i.a.schedulePlanNodeLevel.url;return r.a.request(e,t)}))}function f(){return Object(n.a)().then((function(){var t=i.a.schedulePlanCompletedTimeSetting.url;return r.a.request(t)}))}function b(){return Object(n.a)().then((function(){var t=i.a.schedulePlanLeaderSchedulePlan.url;return r.a.request(t)}))}function g(t){return Object(n.a)().then((function(){var e=i.a.schedulePlanGetByFirstProject.url;return r.a.request(e,t)}))}},"9d55":function(t,e,a){(t.exports=a("690e")(!1)).push([t.i,'.zjapp .scroll-warp[data-v-2b1a346c]{flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.zjapp .scroll-warp-pulling[data-v-2b1a346c]{overflow:hidden}.zjapp .scroll-warp-complete[data-v-2b1a346c]:after{content:"";display:block;height:100px}.zjapp .scroll-warp-empty[data-v-2b1a346c]{display:flex;flex-direction:column}.zjapp .pull-refresh-warp[data-v-2b1a346c]{position:relative;height:0;overflow:hidden}.zjapp .pull-refresh[data-v-2b1a346c]{position:absolute;left:0;bottom:0;height:70px;width:100%;padding:6px;text-align:center}.zjapp .pull-refresh-date[data-v-2b1a346c]{margin-top:4px;height:16px;line-height:16px;font-size:12px;color:#bcbcbc}.zjapp .page-loading[data-v-2b1a346c]{padding:10px;text-align:center}.zjapp .end-text[data-v-2b1a346c]{color:#c8c8c8;background:#f4f4f4;position:relative;line-height:76px;height:76px;text-align:center}.zjapp .end-text[data-v-2b1a346c]:after,.zjapp .end-text[data-v-2b1a346c]:before{content:"";position:absolute;width:48px;height:1px;background:#e4e4e4;top:50%;margin-top:-1px}.zjapp .end-text[data-v-2b1a346c]:after{left:50%;transform:translateX(-92px)}.zjapp .end-text[data-v-2b1a346c]:before{right:50%;transform:translateX(90px)}.zjapp .end-slot[data-v-2b1a346c]{padding:30px;line-height:18px;text-align:center;color:#c8c8c8}',""])},"9ff9":function(t,e,a){"use strict";a.r(e);var n=a("ef7c").a,r=(a("fe09"),a("17cc")),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-content",{attrs:{title:t.title,"show-go-root":"Report"}},[t.isLoading?t._e():a("scroller",[a("div",{staticClass:"report-schedule-manage-list-wrap"},t._l(t.list,(function(e,n){return a("div",{key:n,staticClass:"project"},[a("div",{staticClass:"project-name van-hairline--bottom"},[t._v(t._s(e.proj_name))]),t._l(e.schedule_plans,(function(e,n){return a("div",{key:n,staticClass:"plan"},[a("div",{staticClass:"plan-name"},[t._v(t._s(e.schedule_plan_name))]),a("div",{staticClass:"plan-list"},t._l(e.details,(function(n,r){return a("div",{directives:[{name:"track",rawName:"v-track",value:"报表-集团进度管理-进入节点",expression:"'报表-集团进度管理-进入节点'"}],key:r,staticClass:"plan-list-details",on:{click:function(e){t.goDetail(n)}}},[1!==e.details.length?a("div",{staticClass:"plan-bar-bg",class:{first:!r,last:r+1===e.details.length}},[a("div",{staticClass:"plan-bar",style:{height:{a:"100%",b:"100%",t:"33px"}[n.bar_status],top:{a:0,b:"33px",t:0}[n.bar_status]}})]):t._e(),a("div",{class:{finish:"plan-status-icon-finish",doing:"plan-status-icon-doing",pending:"plan-status-icon-pending"}[n.node_status]},[a("div",{staticClass:"icon-box"},[n.complete_time?a("icon",{attrs:{name:"qualified"}}):t._e()],1)]),a("div",{staticClass:"plan-main"},[a("div",{staticClass:"plan-time",class:{"item-schedule-plan-time-mormal":"已验收"!==n.status&&"已点评"!==n.status}},[n.deadline?a("p",{staticClass:"plan-day"},[t._v(t._s(t._f("formatDate")(n.deadline,"MM-DD")))]):t._e(),n.deadline?a("p",{staticClass:"plan-year"},[t._v(t._s(t._f("formatDate")(n.deadline,"YYYY")))]):t._e(),n.deadline?t._e():a("p",{staticClass:"plan-day"},[t._v("未设")]),n.deadline?t._e():a("p",{staticClass:"plan-year"},[t._v("计划时间")])]),a("div",{staticClass:"plan-content van-hairline--bottom"},[a("p",{staticClass:"plan-title"},[t._v(t._s(n.schedule_plan_detail_name))]),a("div",{staticClass:"plan-detail"},[a("span",{staticClass:"plan-level"},[t._v(t._s(n.schedule_node_level_value))]),n.complete_time?a("span",{staticClass:"plan-exceed"},[t._v("实际")]):t._e(),n.complete_time?a("span",{staticClass:"plan-exceed"},[t._v(t._s(t._f("formatDate")(n.complete_time,"YYYY-MM-DD")))]):t._e(),n.complete_time&&n.timeout_days?a("span",{staticClass:"plan-exceed ml5 color-red"},[t._v(t._s("超时"+n.timeout_days+"天"))]):t._e(),!n.complete_time&&n.timeout_days?a("span",{staticClass:"plan-timeout"},[t._v(t._s("超时"+n.timeout_days+"天"))]):t._e(),!n.complete_time&&n.report_count>0?a("span",{staticClass:"plan-report"},[t._v("已汇报"+t._s(n.report_count)+"次")]):t._e()])])])])})))])}))],2)})))]),a("loading-status",{attrs:{"is-loading":t.isLoading,"is-empty":!t.list.length,"empty-text":"没有报表数据",type:"report"}})],1)}),[],!1,null,"0bc100b3",null);e.default=i.exports},b225:function(t,e,a){"use strict";a("ef48")},c77f:function(t,e,a){"use strict";a.d(e,"i",(function(){return s})),a.d(e,"h",(function(){return l})),a.d(e,"a",(function(){return p})),a.d(e,"f",(function(){return u})),a.d(e,"g",(function(){return c})),a.d(e,"e",(function(){return d})),a.d(e,"n",(function(){return m})),a.d(e,"o",(function(){return h})),a.d(e,"b",(function(){return _})),a.d(e,"j",(function(){return f})),a.d(e,"k",(function(){return b})),a.d(e,"c",(function(){return g})),a.d(e,"d",(function(){return v})),a.d(e,"l",(function(){return x})),a.d(e,"p",(function(){return j})),a.d(e,"m",(function(){return w}));var n=a("5e8d"),r=a("162a"),i=a("bcc78"),o=a("da71");function s(t){return Object(n.a)().then((function(){var e=i.a.commonGetProblemClassTree.url;return r.a.request(e,t)}))}function l(t){return Object(n.a)().then((function(){var e=i.a.pileAcceptGetPileBuildingSummary.url;return r.a.request(e,t)}))}function p(t){return Object(n.a)().then((function(){var e=i.a.pileAcceptGetBidsectionBuildingTree.url;return r.a.request(e,t)}))}function u(){return Object(n.a)().then((function(){var t=i.a.pileAcceptGetPileAcceptItems.url;return r.a.request(t)}))}function c(t){return Object(n.a)().then((function(){var e=i.a.pileAcceptGetPileAcceptList.url;return r.a.request(e,t)}))}function d(t){return Object(n.a)().then((function(){var e=i.a.pileAcceptGetPileAcceptInfo.url;return r.a.request(e,t)}))}function m(t){return Object(n.a)().then((function(){var e=i.a.processAcceptBuilding.url;return r.a.request(e,t)}))}function h(t){return Object(n.a)().then((function(){var e=i.a.processAcceptCollect.url;return r.a.request(e,t)}))}function _(t){return Object(n.a)().then((function(){var e=i.a.processAcceptv3GetBuildingList.url;return r.a.request(e,t)}))}function f(t){return Object(n.a)().then((function(){var e=i.a.processAcceptv3GetProcessAcceptv3List.url;return r.a.request(e,t)}))}function b(t){return Object(n.a)().then((function(){var e=o.a.getReportOrgTree.url;return r.a.request(e,t)}))}function g(t){return Object(n.a)().then((function(){var e=o.a.getHomeReports.url;return r.a.request(e,t)}))}function v(t){return Object(n.a)().then((function(){var e=o.a.getMyReports.url;return r.a.request(e,t)}))}function x(t){return Object(n.a)().then((function(){var e=o.a.getReportPools.url;return r.a.request(e,t)}))}function j(t){return Object(n.a)().then((function(){var e=o.a.saveMyReportsSetting.url;return r.a.post(e,null,t)}))}function w(t){return Object(n.a)().then((function(){var e=i.a.getUrlReportAuth.url;return r.a.request(e,t)}))}},d18d:function(t,e,a){"use strict";(function(t){a("2b45");var n,r=a("4360"),i=a("48f4"),o=a("162a"),s=a("e2a7"),l=a("a500"),p=a("6f9e"),u={};e.a={name:"Scroller",props:{buildingId:{type:String,default:""},hasNext:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},isSync:{type:Boolean,default:!0},endText:{type:String,default:""},memoryScrollTop:{type:Boolean,default:!0},keepScrollTop:{type:Boolean},hasPullDown:{type:Boolean,default:!0},onPullDown:{type:Function}},data:function(){return{pullDist:0,refreshing:!1,pulling:!1,loading:!1,scrollTop:0,isCurrKeyboard:!1,gapBottom:0}},computed:{allowPullDown:function(){return this.hasPullDown&&(!!this.$listeners.pullDown||!!this.onPullDown)},updateTime:function(){return r.a.state.global.businessDownloadTime},numberKeyboardCoverHeight:function(){return r.a.state.global.isNumberInputOpen?r.a.state.global.numberKeyboardHeight-this.gapBottom:0}},mounted:function(){var t=this;p.a.$on("numberKeyboardOpen",this.onNumberKeyboardOpen),this.$nextTick((function(){var e=t.$refs["scroll-warp"]&&t.$refs["scroll-warp"].getBoundingClientRect&&t.$refs["scroll-warp"].getBoundingClientRect();e&&(t.gapBottom=document.documentElement.clientHeight-e.bottom),t.$el&&t.$el.addEventListener("focus",(function(e){var a=e&&e.target,n=a&&a.tagName&&a.tagName.toLowerCase();if("input"===n||"textarea"===n){window.addEventListener("resize",(function e(){var n=a.getBoundingClientRect(),r=t.$el.getBoundingClientRect(),i=n.bottom-r.bottom;i>0&&t.scrollBy(i),window.removeEventListener("resize",e,!1)}),!1)}}),!0)}))},destroyed:function(){p.a.$off("numberKeyboardOpen",this.onNumberKeyboardOpen)},activated:function(){var t=this.keepScrollTop||this.$router.isBack&&this.memoryScrollTop;this.scrollTop&&t&&(this.$refs["scroll-warp"].scrollTop=this.scrollTop)},deactivated:function(){this.memoryScrollTop&&(this.scrollTop=this.$refs["scroll-warp"].scrollTop)},methods:{onScroll:function(t){var e=this,a=this.$refs["scroll-warp"].scrollTop,n=this.$refs["scroll-warp"].scrollHeight;if(a+this.$refs["scroll-warp"].clientHeight>=n-5&&!this.loading&&this.hasNext){this.loading=!0;var r=this.$listeners.loadNext();r&&r.then&&"function"==typeof r.then?r.then((function(){e.loading=!1})):this.loading=!1}this.$emit("scroll",t)},getTouchDiretion:function(t){if(!(u&&t&&t.touches&&t.touches[0]))return"";var e=t.touches[0].clientX,a=t.touches[0].clientY;return Math.abs(a-u.y)>Math.abs(e-u.x)&&Math.abs(a-u.y)>=3?a>u.y?"down":"up":""},onTouchstart:function(t){this.allowPullDown&&t.touches&&1===t.touches.length&&(u={x:t.touches[0].clientX,y:t.touches[0].clientY,scrollTop:this.$refs["scroll-warp"].scrollTop,pullDist:this.pullDist})},onTouchmove:function(t){if(this.allowPullDown&&t.touches&&1===t.touches.length){var e=this.$refs["scroll-warp"].scrollTop,a=t.touches[0].clientY,n=a-u.y,r=this.getTouchDiretion(t);"down"===r?!this.refreshing&&e<=0?(this.pulling=!0,this.pullDist=(n-u.scrollTop)/2,t.preventDefault()):this.pulling=!1:"up"===r?this.pullDist>0&&(this.pullDist=u.pullDist-(u.y-a),t.preventDefault()):this.pullDist=u.pullDist}},onTouchend:function(){var t=this;this.allowPullDown&&(u={},this.pulling=!1,this.pullDist>=70&&this.isSync?this.refreshing?this.makePullTo(70):this.makePullTo(70).then((function(){if(t.refreshing=!0,t.onPullDown){var e=t.onPullDown();e&&e.then&&"function"==typeof e?e.finally((function(){t.refreshing=!1,t.makePullTo(0)})):(t.refreshing=!1,t.makePullTo(0))}else t.dataSync().then((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")})).catch((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")}))})):(this.refreshing=!1,this.makePullTo(0)))},makePullTo:function(t){var e=this,a=this.pullDist,n=t,r=n-a,i=a;return a===n?Promise.resolve():new Promise((function(t){!function o(){window.requestAnimationFrame((function(){i+=r/6,e.pullDist=i,a<n&&i<n||a>n&&i>n?o():(e.pullDist=n,e.refreshing=!1,t())}))}()}))},dataSync:function(){var t,e=i.default.getCurrentModuleCode(),a=i.default.getCurrentRoute(),n=a.meta&&a.meta.isTodo;if(i.default.isModuleNeedBuilding(e)&&!n){if(!this.buildingId)return new Promise((function(t){setTimeout((function(){t()}),500)}));t=this.buildingId}return l.a.addTrack("公共-手动下拉刷新","",""),o.a.beginManualUpdate(),i.default.checkSync(t).then((function(t){return o.a.endManualUpdate(),t})).catch((function(t){$log.error("下拉刷新错误",t),t&&"Error: Network Error"===t.toString()?s.a.alert("当前网络无法同步数据"):s.a.alert(t),o.a.endManualUpdate()}))},getScrollHeight:function(){return this.$refs["scroll-warp"].offsetHeight},getScrollTop:function(){return this.$refs["scroll-warp"].scrollTop},setScrollTop:function(t){this.$refs["scroll-warp"].scrollTop=t},scrollBy:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,r=this.getScrollTop(),i=r+t,o=Math.round(a/16.7),s=t/o,l=r,p=n=+new Date;return r===i?Promise.resolve():new Promise((function(t){!function a(){window.requestAnimationFrame((function(){p===n&&(l+=s,e.$refs["scroll-warp"].scrollTop=l,r<i&&l<i||r>i&&l>i?a():(e.$refs["scroll-warp"].scrollTop=i,t()))}))}()}))},scrollTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,a=this.getScrollTop(),n=t-a;return this.scrollBy(n,e)},scrollToEle:function(t){var e=t.keyboardHeight||232,a=(t=t.$el?t.$el:t).getBoundingClientRect(),n=this.$refs["scroll-warp"].getBoundingClientRect();if(a&&n){var i=document.documentElement.clientHeight-(r.a.state.global.isNumberInputOpen?e:0),o=n.bottom<i?n.bottom:i,s=n.top-a.top,l=a.bottom-o;s>0?this.scrollBy(-s-10):l>0&&this.scrollBy(l+10)}},isCurrent:function(e,a){var n=this;e.length&&t.each(e,(function(t){t._uid===a?n.isCurrKeyboard=!0:n.isCurrent(t.$children,a)}))},onNumberKeyboardOpen:function(t){this.isCurrKeyboard=!1,this.isCurrent(this.$children,t._uid),this.isCurrKeyboard&&this.scrollToEle(t)}}}}).call(this,a("391c"))},ef48:function(t,e,a){var n=a("9d55");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("85cb").default)("a1a65c0c",n,!0,{sourceMap:!1,shadowMode:!1})},ef7c:function(t,e,a){"use strict";(function(t){var n=a("774b"),r=a("5685");e.a={name:"ReportScheduleManageList",components:{Scroller:n.a},data:function(){return{isLoading:!0,title:"...",list:[]}},activated:function(){this.$router.isBack||this.getData()},methods:{getData:function(){var e=this;this.isLoading=!0;var a=this.$route.query.projId;r.a.getSchedulePlanProjectData(a).then((function(a){console.log(a),e.isLoading=!1,a.length&&(e.title=a[0].first_proj_name,t.each(a,(function(e){t.each(e.schedule_plans,(function(e){t.each(e.details,(function(t,a){t.node_status=t.complete_time?"finish":t.report_count>0?"doing":"pending",("finish"===t.node_status||"doing"===t.node_status)&&a&&"finish"===e.details[a-1].node_status?(t.bar_status="t","t"===e.details[a-1].bar_status?e.details[a-1].bar_status="a":e.details[a-1].bar_status=1===a?"a":"b"):t.bar_status=""}))}))}))),e.list=a||[]}))},goDetail:function(t){console.log({node:t}),this.$router.push({name:"SchedulePlanDetail",params:{id:t.schedule_plan_detail_id,fromReport:!0}})}}}}).call(this,a("391c"))},fe09:function(t,e,a){"use strict";a("7bb4")}}]);