(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["report-schedule-manage-leader-index","chunk-739f37c8"],{"326b":function(e,t,n){var r=n("bd29");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("85cb").default)("3613bb53",r,!0,{sourceMap:!1,shadowMode:!1})},5685:function(e,t,n){"use strict";(function(e){var r=n("162a"),a=n("6144"),o=n("9cd1"),i=n("da2f"),s=n("c77f");function u(e,t){return e?(e-t)/e*100:0}var c={getProcessCheckNewBuilding:function(e){var t=a.a.getString("reportDateType",a.a.level.user)||"month";return Object(i.d)({proj_id:e,query_type:t})},getProjTotalData:function(){return r.a.request("/report/project-over-view")},getDailyCheckData:function(e,t,n,a,o){var i={proj_id:e,bidsection_id:t,begin_date:n,end_date:a};return o&&(i.module=o),r.a.request("/report/check",i)},getReportCheckList:function(e){return r.a.request("/report/check-batch-problem-list",{batch_id:e.batchId,begin_date:e.dateStart,end_date:e.dateEnd})},getReportCheckTimeoutList:function(e,t,n){return r.a.request("/report/get-over-due-check",{proj_id:e,key:t,page:n,pageSize:15})},getOverDueCheckConfig:function(e){return r.a.request("/report/get-over-due-check-config",{proj_id:e})},getReportCheckDetail:function(e){return r.a.request("/report/check-batch-problem-detail",{id:e})},postReportCheckUpdate:function(e){return r.a.post("/checkquality-comment/upload",{},e)},postReportCheckSendBack:function(e){return r.a.post("/checkquality-comment/send-back",{},e)},measureProjectData:[],waterPercolationData:[],getMeasureData:function(t){return r.a.request("/report/measure",{proj_id:t}).then((function(t){return e.each(t,(function(t){t.repair_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},t.supervision_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},t.construct_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},e.each(t.buildings,(function(n){n.repair_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},n.supervision_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},n.construct_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},e.each(n.check_items,(function(r){r.repair_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},r.supervision_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},r.construct_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},e.each(r.children,(function(a){t.repair_data.measurement_points_num+=a.measure_data[0].measurement_points,t.repair_data.problem_points_num+=a.measure_data[0].problem_points,t.repair_data.checkitem_num+=a.measure_data[0].measurement_points?1:0,t.supervision_data.measurement_points_num+=a.measure_data[1].measurement_points,t.supervision_data.problem_points_num+=a.measure_data[1].problem_points,t.supervision_data.checkitem_num+=a.measure_data[1].measurement_points?1:0,t.construct_data.measurement_points_num+=a.measure_data[2].measurement_points,t.construct_data.problem_points_num+=a.measure_data[2].problem_points,t.construct_data.checkitem_num+=a.measure_data[2].measurement_points?1:0,n.repair_data.measurement_points_num+=a.measure_data[0].measurement_points,n.repair_data.problem_points_num+=a.measure_data[0].problem_points,n.repair_data.checkitem_num+=a.measure_data[0].measurement_points?1:0,n.supervision_data.measurement_points_num+=a.measure_data[1].measurement_points,n.supervision_data.problem_points_num+=a.measure_data[1].problem_points,n.supervision_data.checkitem_num+=a.measure_data[1].measurement_points?1:0,n.construct_data.measurement_points_num+=a.measure_data[2].measurement_points,n.construct_data.problem_points_num+=a.measure_data[2].problem_points,n.construct_data.checkitem_num+=a.measure_data[2].measurement_points?1:0,r.repair_data.measurement_points_num+=a.measure_data[0].measurement_points,r.repair_data.problem_points_num+=a.measure_data[0].problem_points,r.repair_data.checkitem_num+=a.measure_data[0].measurement_points?1:0,r.supervision_data.measurement_points_num+=a.measure_data[1].measurement_points,r.supervision_data.problem_points_num+=a.measure_data[1].problem_points,r.supervision_data.checkitem_num+=a.measure_data[1].measurement_points?1:0,r.construct_data.measurement_points_num+=a.measure_data[2].measurement_points,r.construct_data.problem_points_num+=a.measure_data[2].problem_points,r.construct_data.checkitem_num+=a.measure_data[2].measurement_points?1:0,e.each(a.measure_data,(function(e){e.measurement_points?e.passport=(e.measurement_points-e.problem_points)/e.measurement_points*100:e.passport=0}))})),r.repair_data.passport=u(r.repair_data.measurement_points_num,r.repair_data.problem_points_num),r.supervision_data.passport=u(r.supervision_data.measurement_points_num,r.supervision_data.problem_points_num),r.construct_data.passport=u(r.construct_data.measurement_points_num,r.construct_data.problem_points_num)})),n.repair_data.passport=u(n.repair_data.measurement_points_num,n.repair_data.problem_points_num),n.supervision_data.passport=u(n.supervision_data.measurement_points_num,n.supervision_data.problem_points_num),n.construct_data.passport=u(n.construct_data.measurement_points_num,n.construct_data.problem_points_num)})),t.repair_data.passport=u(t.repair_data.measurement_points_num,t.repair_data.problem_points_num),t.supervision_data.passport=u(t.supervision_data.measurement_points_num,t.supervision_data.problem_points_num),t.construct_data.passport=u(t.construct_data.measurement_points_num,t.construct_data.problem_points_num)})),t}))},measureBuildData:{},setMeasureBuildData:function(e){c.measureBuildData=e},getMeasureBuildData:function(t){return e.isEmpty(c.measureBuildData)?c.getMeasureData(t).then((function(e){return e[0]})):Promise.resolve(c.measureBuildData)},getCheckAcceptData:function(e){return r.a.request("/report/check-accept",{proj_id:e})},getCheckAcceptDataOfBuilding:function(e,t,n){return r.a.request("/report/check-accept-detail",{section_id:e,building_id:t,unit:n||""})},getProcessCheckData:function(e,t){return r.a.request("/report/processcheck",{building_id:e,unit:t})},getProcessCheckData2:function(e){return Object(i.g)({building_id:e})},getMaterialData:function(e,t,n){return r.a.request("/report/material",{proj_id:e,begin_date:t,end_date:n})},getProcessAcceptBuilding:function(e){var t=a.a.getString("reportDateType",a.a.level.user)||"month";return Object(s.n)({proj_id:e,query_type:t})},getWaterPercolation:function(e){return r.a.request("/report/close-water-test",{proj_id:e})},getProcessAcceptData:function(e,t,n,r){return Object(s.o)({building_id:e,unit:t,start:n||"",end:r||""})},getProcessAcceptPileItem:function(e){return r.a.request("/report/get-pile-check-items",{bidsection_id:e})},getProcessAcceptPileData:function(e,t){return r.a.request("/report/process-accept-with-pile",{building_id:e,item_id:t})},getMeasureCheckedData:function(){return r.a.request("/report/leader-measure")},getSchedulePlanData:function(){return Object(o.i)()},getSchedulePlanProjectData:function(e){return Object(o.a)({proj_id:e})},getCheckProblemStatisticsData:function(e){return r.a.request("/report/leader-secure",e)},getProcessCheckStatisticsData:function(){return Object(i.k)()},schedulePlanNodeList:function(e){return Object(o.e)({plan_id:e})}};t.a=c}).call(this,n("391c"))},"6d02":function(e,t,n){"use strict";n("da9b3")},"774b":function(e,t,n){"use strict";n.r(t);var r=n("d18d").a,a=(n("b225"),n("17cc")),o=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"scroll-warp",staticClass:"scroll-warp",class:{"scroll-warp-pulling":e.pulling,"scroll-warp-complete":!e.hasNext&&!e.isEmpty,"scroll-warp-empty":e.isEmpty},style:{"padding-bottom":e.numberKeyboardCoverHeight+"px"},on:{scroll:e.onScroll,touchstart:e.onTouchstart,touchmove:e.onTouchmove,touchend:e.onTouchend}},[e.allowPullDown?n("div",{staticClass:"pull-refresh-warp",style:{height:e.pullDist+"px"}},[n("div",{staticClass:"pull-refresh"},[n("div",{staticClass:"animation-refresher",class:{refreshing:e.refreshing}}),e.updateTime?n("p",{staticClass:"pull-refresh-date"},[e._v("最后成功同步："+e._s(e.updateTime))]):e._e()])]):e._e(),e._t("default"),e.loading?n("div",{staticClass:"page-loading"},[n("svg",{staticClass:"svg-loading",attrs:{viewBox:"0 0 80 80"}},[n("circle",{attrs:{cx:"40",cy:"40",r:"36"}})])]):e._e(),e.hasNext||e.isEmpty?e._e():[e.$slots.end?e._t("end"):e._e(),!e.$slots.end&&e.endText?n("div",{staticClass:"end-text"},[e._v("\n      "+e._s(e.endText)+"\n    ")]):e._e()]],2)}),[],!1,null,"2b1a346c",null);t.default=o.exports},"8b2c":function(e,t,n){"use strict";(function(e){var r=n("774b"),a=n("7bac"),o=n("a7c3"),i=n("5685"),s=n("9416"),u=n("8d95");t.a={name:"ReportScheduleManageLeader",components:{Scroller:r.default},data:function(){return{title:"报表-"+(Object(s.a)(u.a.SCHEDULE_PLAN)||"进度管理"),isLoading:!0,errorTips:"",overview:{},list:[],schedulePlanNode:[{value:"1级"},{value:"2级"}],activeNames:[],listData:[]}},computed:{projId:function(){return this.$store.state.global.currentProject.id}},activated:function(){this.getData()},methods:{getData:function(){var t=this;this.errorTips="",i.a.getSchedulePlanData().then((function(n){t.isLoading=!1,t.list=n.detail,t.overview=n.overview,i.a.schedulePlanNodeList(t.projId).then((function(e){e&&e.length>0&&(t.schedulePlanNode=e)})),a.a.getUserKey(o.a.REPORT_SCHEDULE_MANAGE_COLLAPSE).then((function(n){var r=n||[],a=t.list.map((function(e){return e.id}));t.activeNames=e.difference(a,r)}))})).catch((function(n){t.list=[],t.errorTips=e.isString(n)?n:"获取数据失败",t.isLoading=!1}))},collapseChange:function(t){var n=this.list.map((function(e){return e.id})),r=e.difference(n,t);a.a.setUserKey(o.a.REPORT_SCHEDULE_MANAGE_COLLAPSE,r)},goProjectList:function(e){this.$router.push({name:"ReportScheduleManageList",query:{projId:e.first_project_id}})}}}}).call(this,n("391c"))},"8dfd":function(e,t,n){"use strict";n("326b")},"9c22":function(e,t,n){"use strict";n.r(t);var r=n("8b2c").a,a=(n("6d02"),n("8dfd"),n("17cc")),o=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("page-content",{staticClass:"report-schedule-manage-wrap",attrs:{title:e.title}},[e.isLoading||e.errorTips||!e.list.length?e._e():n("scroller",[n("div",{staticClass:"report-title"},[n("ul",{staticClass:"schedule-paln-dl"},[n("li",[n("div",{staticClass:"t-level-1"},[e._v(e._s(e.overview.level_1))]),n("div",[e._v(e._s(e.schedulePlanNode[0].value)+"预警节点")])]),n("li",[n("div",{staticClass:"t-level-2"},[e._v(e._s(e.overview.level_2))]),n("div",[e._v(e._s(e.schedulePlanNode[1].value)+"预警节点")])])])]),n("van-collapse",{on:{change:e.collapseChange},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},e._l(e.list,(function(t,r){return n("van-collapse-item",{key:r,attrs:{name:t.id}},[n("div",{attrs:{slot:"title"},slot:"title"},[n("div",{staticClass:"collapse-title",class:{rotate:e.activeNames.includes(t.id)}},[e._v("\n            "+e._s(t.name)+"\n          ")]),n("div",{staticClass:"right-content"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.level_1,expression:"item.level_1"}],staticClass:"circle level-1"},[e._v("\n              "+e._s(t.level_1)+"\n            ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.level_2,expression:"item.level_2"}],staticClass:"circle level-2"},[e._v("\n              "+e._s(t.level_2)+"\n            ")]),n("div",{staticClass:"icon"})])]),e._l(t.first_projects,(function(t,r){return n("div",{directives:[{name:"track",rawName:"v-track",value:"报表-集团进度管理-进入项目",expression:"'报表-集团进度管理-进入项目'"}],key:r,staticClass:"project-list",class:{"van-hairline--top":r>0},on:{click:function(n){e.goProjectList(t)}}},[e._v("\n          "+e._s(t.first_project_name)+"\n          "),n("div",{staticClass:"right-content"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.level_1,expression:"proj.level_1"}],staticClass:"circle level-1"},[e._v("\n              "+e._s(t.level_1)+"\n            ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.level_2,expression:"proj.level_2"}],staticClass:"circle level-2"},[e._v("\n              "+e._s(t.level_2)+"\n            ")]),n("div",{staticClass:"icon"},[n("icon",{attrs:{name:"arrow-right"}})],1)])])}))],2)})))],1),n("loading-status",{attrs:{"is-loading":e.isLoading,"is-empty":!e.list.length||!!e.errorTips,"empty-text":e.errorTips?e.errorTips:"没有报表数据",type:e.errorTips?"error":"report"}})],1)}),[],!1,null,"355d3d72",null);t.default=o.exports},"9cd1":function(e,t,n){"use strict";n.d(t,"h",(function(){return i})),n.d(t,"m",(function(){return s})),n.d(t,"g",(function(){return u})),n.d(t,"f",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"l",(function(){return p})),n.d(t,"k",(function(){return d})),n.d(t,"j",(function(){return m})),n.d(t,"b",(function(){return h})),n.d(t,"e",(function(){return f})),n.d(t,"c",(function(){return _})),n.d(t,"i",(function(){return v})),n.d(t,"a",(function(){return g}));var r=n("5e8d"),a=n("162a"),o=n("bcc78");function i(e){return Object(r.a)().then((function(){var t=o.a.schedulePlanTaskInfo.url;return a.a.request(t,e)}))}function s(e){return Object(r.a)().then((function(){var t=o.a.schedulePlanSaveTask.url;return a.a.post(t,null,e)}))}function u(e){return Object(r.a)().then((function(){var t=o.a.schedulePlanPlanList.url;return a.a.request(t,e)}))}function c(e){return Object(r.a)().then((function(){var t=o.a.schedulePlanNodeList.url;return a.a.request(t,e)}))}function l(e){return Object(r.a)().then((function(){var t=o.a.schedulePlanNodeInfo.url;return a.a.request(t,e)}))}function p(e){return Object(r.a)().then((function(){var t=o.a.schedulePlanSaveReport.url;return a.a.post(t,null,e)}))}function d(e){return Object(r.a)().then((function(){var t=o.a.schedulePlanSaveCompleteTime.url;return a.a.post(t,null,e)}))}function m(e){return Object(r.a)().then((function(){var t=o.a.schedulePlanSaveChecker.url;return a.a.post(t,null,e)}))}function h(e){return Object(r.a)().then((function(){var t=o.a.schedulePlanCheckerLogList.url;return a.a.request(t,e)}))}function f(e){return Object(r.a)().then((function(){var t=o.a.schedulePlanNodeLevel.url;return a.a.request(t,e)}))}function _(){return Object(r.a)().then((function(){var e=o.a.schedulePlanCompletedTimeSetting.url;return a.a.request(e)}))}function v(){return Object(r.a)().then((function(){var e=o.a.schedulePlanLeaderSchedulePlan.url;return a.a.request(e)}))}function g(e){return Object(r.a)().then((function(){var t=o.a.schedulePlanGetByFirstProject.url;return a.a.request(t,e)}))}},"9d55":function(e,t,n){(e.exports=n("690e")(!1)).push([e.i,'.zjapp .scroll-warp[data-v-2b1a346c]{flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.zjapp .scroll-warp-pulling[data-v-2b1a346c]{overflow:hidden}.zjapp .scroll-warp-complete[data-v-2b1a346c]:after{content:"";display:block;height:100px}.zjapp .scroll-warp-empty[data-v-2b1a346c]{display:flex;flex-direction:column}.zjapp .pull-refresh-warp[data-v-2b1a346c]{position:relative;height:0;overflow:hidden}.zjapp .pull-refresh[data-v-2b1a346c]{position:absolute;left:0;bottom:0;height:70px;width:100%;padding:6px;text-align:center}.zjapp .pull-refresh-date[data-v-2b1a346c]{margin-top:4px;height:16px;line-height:16px;font-size:12px;color:#bcbcbc}.zjapp .page-loading[data-v-2b1a346c]{padding:10px;text-align:center}.zjapp .end-text[data-v-2b1a346c]{color:#c8c8c8;background:#f4f4f4;position:relative;line-height:76px;height:76px;text-align:center}.zjapp .end-text[data-v-2b1a346c]:after,.zjapp .end-text[data-v-2b1a346c]:before{content:"";position:absolute;width:48px;height:1px;background:#e4e4e4;top:50%;margin-top:-1px}.zjapp .end-text[data-v-2b1a346c]:after{left:50%;transform:translateX(-92px)}.zjapp .end-text[data-v-2b1a346c]:before{right:50%;transform:translateX(90px)}.zjapp .end-slot[data-v-2b1a346c]{padding:30px;line-height:18px;text-align:center;color:#c8c8c8}',""])},b225:function(e,t,n){"use strict";n("ef48")},b40c:function(e,t,n){(e.exports=n("690e")(!1)).push([e.i,".zjapp .report-schedule-manage-wrap .report-title[data-v-355d3d72]{background:#fff}.zjapp .report-schedule-manage-wrap .report-title .schedule-paln-dl[data-v-355d3d72]{height:120px;text-align:center}.zjapp .report-schedule-manage-wrap .report-title .schedule-paln-dl li[data-v-355d3d72]{margin:15px 0 30px;float:left;width:50%;line-height:1.5}.zjapp .report-schedule-manage-wrap .report-title .schedule-paln-dl li .t-level-1[data-v-355d3d72]{color:#fd6f6f;font-size:36px}.zjapp .report-schedule-manage-wrap .report-title .schedule-paln-dl li .t-level-2[data-v-355d3d72]{color:#fda24d;font-size:36px}.zjapp .report-schedule-manage-wrap .report-title .schedule-paln-dl div[data-v-355d3d72]{font-size:16px;color:#6d6d6d}.zjapp .report-schedule-manage-wrap .report-title .schedule-paln-dl div[data-v-355d3d72]:last-child{padding:0 10px}",""])},bd29:function(e,t,n){(e.exports=n("690e")(!1)).push([e.i,'.zjapp .report-schedule-manage-wrap .layout-content{background:#fff}.zjapp .report-schedule-manage-wrap .van-collapse-item .van-cell__title>div{display:flex;align-content:center;justify-content:space-between}.zjapp .report-schedule-manage-wrap .van-collapse-item .van-cell__title>div .collapse-title{flex:1;padding:0 20px}.zjapp .report-schedule-manage-wrap .van-collapse-item .van-cell__title>div .collapse-title:before{content:"";position:absolute;height:0;width:0;overflow:hidden;border-left:6px solid #c8c8c8;border-top:5px solid transparent;border-bottom:5px solid transparent;transform-origin:center center;left:15px;top:16px}.zjapp .report-schedule-manage-wrap .van-collapse-item .van-cell__title>div .rotate:before{transform:rotate(90deg)}.zjapp .report-schedule-manage-wrap .van-collapse-item .van-cell{font-size:14px;padding:8px 10px;line-height:28px}.zjapp .report-schedule-manage-wrap .van-collapse-item .van-icon-arrow{display:none}.zjapp .report-schedule-manage-wrap .van-collapse-item .van-collapse-item__content{padding:0}.zjapp .report-schedule-manage-wrap .van-collapse-item .van-collapse-item__content .project-list{display:flex;align-content:center;justify-content:space-between;line-height:28px;padding:8px 10px 8px 30px;background-color:#fafafa;font-size:14px}.zjapp .report-schedule-manage-wrap .van-collapse-item .right-content{max-width:100px;display:flex;align-items:center;justify-content:flex-end}.zjapp .report-schedule-manage-wrap .van-collapse-item .right-content .circle{height:28px;width:28px;overflow:hidden;text-align:center;line-height:28px;color:#fff;border-radius:50%;margin:0 10px 0 0}.zjapp .report-schedule-manage-wrap .van-collapse-item .right-content .icon{width:12px;height:28px;line-height:28px;font-size:12px;color:#989a9c;opacity:.5}.zjapp .report-schedule-manage-wrap .van-collapse-item .right-content .level-1{background-image:linear-gradient(#ff7c7c,#f84848)}.zjapp .report-schedule-manage-wrap .van-collapse-item .right-content .level-2{background-image:linear-gradient(#ffb273,#fb8914)}',""])},c77f:function(e,t,n){"use strict";n.d(t,"h",(function(){return s})),n.d(t,"g",(function(){return u})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return p})),n.d(t,"d",(function(){return d})),n.d(t,"n",(function(){return m})),n.d(t,"o",(function(){return h})),n.d(t,"b",(function(){return f})),n.d(t,"i",(function(){return _})),n.d(t,"k",(function(){return v})),n.d(t,"c",(function(){return g})),n.d(t,"l",(function(){return b})),n.d(t,"p",(function(){return w})),n.d(t,"m",(function(){return j})),n.d(t,"j",(function(){return x}));var r=n("5e8d"),a=n("162a"),o=n("bcc78"),i=n("da71");function s(e){return Object(r.a)().then((function(){var t=o.a.commonGetProblemClassTree.url;return a.a.request(t,e)}))}function u(e){return Object(r.a)().then((function(){var t=o.a.pileAcceptGetPileBuildingSummary.url;return a.a.request(t,e)}))}function c(e){return Object(r.a)().then((function(){var t=o.a.pileAcceptGetBidsectionBuildingTree.url;return a.a.request(t,e)}))}function l(){return Object(r.a)().then((function(){var e=o.a.pileAcceptGetPileAcceptItems.url;return a.a.request(e)}))}function p(e){return Object(r.a)().then((function(){var t=o.a.pileAcceptGetPileAcceptList.url;return a.a.request(t,e)}))}function d(e){return Object(r.a)().then((function(){var t=o.a.pileAcceptGetPileAcceptInfo.url;return a.a.request(t,e)}))}function m(e){return Object(r.a)().then((function(){var t=o.a.processAcceptBuilding.url;return a.a.request(t,e)}))}function h(e){return Object(r.a)().then((function(){var t=o.a.processAcceptCollect.url;return a.a.request(t,e)}))}function f(e){return Object(r.a)().then((function(){var t=o.a.processAcceptv3GetBuildingList.url;return a.a.request(t,e)}))}function _(e){return Object(r.a)().then((function(){var t=o.a.processAcceptv3GetProcessAcceptv3List.url;return a.a.request(t,e)}))}function v(e){return Object(r.a)().then((function(){var t=i.a.getReportOrgTree.url;return a.a.request(t,e)}))}function g(e){return Object(r.a)().then((function(){var t=i.a.getHomeReports.url;return a.a.request(t,e)}))}function b(e){return Object(r.a)().then((function(){var t=i.a.getReportPools.url;return a.a.request(t,e)}))}function w(e){return Object(r.a)().then((function(){var t=i.a.saveMyReportsSetting.url;return a.a.post(t,null,e)}))}function j(e){return Object(r.a)().then((function(){var t=o.a.getUrlReportAuth.url;return a.a.request(t,e)}))}function x(e){return Object(r.a)().then((function(){var t=o.a.getProgressV3Summary.url;return a.a.request(t,e)}))}},d18d:function(e,t,n){"use strict";(function(e){n("2b45");var r,a=n("4360"),o=n("48f4"),i=n("162a"),s=n("e2a7"),u=n("a500"),c=n("6f9e"),l={};t.a={name:"Scroller",props:{buildingId:{type:String,default:""},hasNext:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},isSync:{type:Boolean,default:!0},endText:{type:String,default:""},memoryScrollTop:{type:Boolean,default:!0},keepScrollTop:{type:Boolean},hasPullDown:{type:Boolean,default:!0},onPullDown:{type:Function}},data:function(){return{pullDist:0,refreshing:!1,pulling:!1,loading:!1,scrollTop:0,isCurrKeyboard:!1,gapBottom:0}},computed:{allowPullDown:function(){return this.hasPullDown&&(!!this.$listeners.pullDown||!!this.onPullDown)},updateTime:function(){return a.a.state.global.businessDownloadTime},numberKeyboardCoverHeight:function(){return a.a.state.global.isNumberInputOpen?a.a.state.global.numberKeyboardHeight-this.gapBottom:0}},mounted:function(){var e=this;c.a.$on("numberKeyboardOpen",this.onNumberKeyboardOpen),this.$nextTick((function(){var t=e.$refs["scroll-warp"]&&e.$refs["scroll-warp"].getBoundingClientRect&&e.$refs["scroll-warp"].getBoundingClientRect();t&&(e.gapBottom=document.documentElement.clientHeight-t.bottom),e.$el&&e.$el.addEventListener("focus",(function(t){var n=t&&t.target,r=n&&n.tagName&&n.tagName.toLowerCase();if("input"===r||"textarea"===r){window.addEventListener("resize",(function t(){var r=n.getBoundingClientRect(),a=e.$el.getBoundingClientRect(),o=r.bottom-a.bottom;o>0&&e.scrollBy(o),window.removeEventListener("resize",t,!1)}),!1)}}),!0)}))},destroyed:function(){c.a.$off("numberKeyboardOpen",this.onNumberKeyboardOpen)},activated:function(){var e=this.keepScrollTop||this.$router.isBack&&this.memoryScrollTop;this.scrollTop&&e&&(this.$refs["scroll-warp"].scrollTop=this.scrollTop)},deactivated:function(){this.memoryScrollTop&&(this.scrollTop=this.$refs["scroll-warp"].scrollTop)},methods:{onScroll:function(e){var t=this,n=this.$refs["scroll-warp"].scrollTop,r=this.$refs["scroll-warp"].scrollHeight;if(n+this.$refs["scroll-warp"].clientHeight>=r-5&&!this.loading&&this.hasNext){this.loading=!0;var a=this.$listeners.loadNext();a&&a.then&&"function"==typeof a.then?a.then((function(){t.loading=!1})):this.loading=!1}this.$emit("scroll",e)},getTouchDiretion:function(e){if(!(l&&e&&e.touches&&e.touches[0]))return"";var t=e.touches[0].clientX,n=e.touches[0].clientY;return Math.abs(n-l.y)>Math.abs(t-l.x)&&Math.abs(n-l.y)>=3?n>l.y?"down":"up":""},onTouchstart:function(e){this.allowPullDown&&e.touches&&1===e.touches.length&&(l={x:e.touches[0].clientX,y:e.touches[0].clientY,scrollTop:this.$refs["scroll-warp"].scrollTop,pullDist:this.pullDist})},onTouchmove:function(e){if(this.allowPullDown&&e.touches&&1===e.touches.length){var t=this.$refs["scroll-warp"].scrollTop,n=e.touches[0].clientY,r=n-l.y,a=this.getTouchDiretion(e);"down"===a?!this.refreshing&&t<=0?(this.pulling=!0,this.pullDist=(r-l.scrollTop)/2,e.preventDefault()):this.pulling=!1:"up"===a?this.pullDist>0&&(this.pullDist=l.pullDist-(l.y-n),e.preventDefault()):this.pullDist=l.pullDist}},onTouchend:function(){var e=this;this.allowPullDown&&(l={},this.pulling=!1,this.pullDist>=70&&this.isSync?this.refreshing?this.makePullTo(70):this.makePullTo(70).then((function(){if(e.refreshing=!0,e.onPullDown){var t=e.onPullDown();t&&t.then&&"function"==typeof t?t.finally((function(){e.refreshing=!1,e.makePullTo(0)})):(e.refreshing=!1,e.makePullTo(0))}else e.dataSync().then((function(){e.refreshing=!1,e.makePullTo(0),e.$emit("pullDown")})).catch((function(){e.refreshing=!1,e.makePullTo(0),e.$emit("pullDown")}))})):(this.refreshing=!1,this.makePullTo(0)))},makePullTo:function(e){var t=this,n=this.pullDist,r=e,a=r-n,o=n;return n===r?Promise.resolve():new Promise((function(e){!function i(){window.requestAnimationFrame((function(){o+=a/6,t.pullDist=o,n<r&&o<r||n>r&&o>r?i():(t.pullDist=r,t.refreshing=!1,e())}))}()}))},dataSync:function(){var e,t=o.default.getCurrentModuleCode(),n=o.default.getCurrentRoute(),r=n.meta&&n.meta.isTodo;if(o.default.isModuleNeedBuilding(t)&&!r){if(!this.buildingId)return new Promise((function(e){setTimeout((function(){e()}),500)}));e=this.buildingId}return u.a.addTrack("公共-手动下拉刷新","",""),i.a.beginManualUpdate(),o.default.checkSync(e).then((function(e){return i.a.endManualUpdate(),e})).catch((function(e){$log.error("下拉刷新错误",e),e&&"Error: Network Error"===e.toString()?s.a.alert("当前网络无法同步数据"):s.a.alert(e),i.a.endManualUpdate()}))},getScrollHeight:function(){return this.$refs["scroll-warp"].offsetHeight},getScrollTop:function(){return this.$refs["scroll-warp"].scrollTop},setScrollTop:function(e){this.$refs["scroll-warp"].scrollTop=e},scrollBy:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,a=this.getScrollTop(),o=a+e,i=Math.round(n/16.7),s=e/i,u=a,c=r=+new Date;return a===o?Promise.resolve():new Promise((function(e){!function n(){window.requestAnimationFrame((function(){c===r&&(u+=s,t.$refs["scroll-warp"].scrollTop=u,a<o&&u<o||a>o&&u>o?n():(t.$refs["scroll-warp"].scrollTop=o,e()))}))}()}))},scrollTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=this.getScrollTop(),r=e-n;return this.scrollBy(r,t)},scrollToEle:function(e){var t=e.keyboardHeight||232,n=(e=e.$el?e.$el:e).getBoundingClientRect(),r=this.$refs["scroll-warp"].getBoundingClientRect();if(n&&r){var o=document.documentElement.clientHeight-(a.a.state.global.isNumberInputOpen?t:0),i=r.bottom<o?r.bottom:o,s=r.top-n.top,u=n.bottom-i;s>0?this.scrollBy(-s-10):u>0&&this.scrollBy(u+10)}},isCurrent:function(t,n){var r=this;t.length&&e.each(t,(function(e){e._uid===n?r.isCurrKeyboard=!0:r.isCurrent(e.$children,n)}))},onNumberKeyboardOpen:function(e){this.isCurrKeyboard=!1,this.isCurrent(this.$children,e._uid),this.isCurrKeyboard&&this.scrollToEle(e)}}}}).call(this,n("391c"))},da9b3:function(e,t,n){var r=n("b40c");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("85cb").default)("3a04a3b4",r,!0,{sourceMap:!1,shadowMode:!1})},ef48:function(e,t,n){var r=n("9d55");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("85cb").default)("a1a65c0c",r,!0,{sourceMap:!1,shadowMode:!1})}}]);