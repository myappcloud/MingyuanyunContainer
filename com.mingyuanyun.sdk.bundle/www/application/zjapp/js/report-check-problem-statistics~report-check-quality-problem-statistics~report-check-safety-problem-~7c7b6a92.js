(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["report-check-problem-statistics~report-check-quality-problem-statistics~report-check-safety-problem-~7c7b6a92","chunk-739f37c8"],{"06a8":function(t,e,n){"use strict";(function(t){n("6d57"),n("e10e"),n("163d");var a=n("915f"),r=n("774b"),i=n("c52d");e.a={name:"AddInstructionIndex",components:{Scroller:r.default,reportPie:i.a},mixins:[a.a],props:{show:{type:Boolean,defalut:!1},params:{type:Object,default:function(){}},index:{type:Number,default:0}},data:function(){return{isEnd:!0,parentItemName:"",level:1,isOther:!0,problemNum:0,listData:[],chartLegend:[],chartData:[],loading:!1}},watch:{params:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.isEqual(t,e)||this.load(t)}},activated:function(){this.loading=!1},mounted:function(){this.load()},methods:{load:function(e){e=e||this.params,t.isEmpty(e)||(this.isEnd=e.isEnd,this.parentItemName=e.parentItemName,this.level=e.level,this.isOther=e.isOther,this.problemNum=e.problemNum,this.listData=e.listData,this.chartLegend=e.chartLegend,this.chartData=e.chartData,this.loading=!0)},close:function(){this.$emit("close",this.index)},closePopup:function(t){this.$emit("closePopup")},isEqual:function(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var a in e)if(!t.isEqual(e[a],n[a]))return!1;return!0},itemClick:function(t){this.$emit("itemClick",t,this.index)},chartCallback:function(t){this.$emit("itemClick",t,this.index)}}}}).call(this,n("391c"))},"12d8":function(t,e,n){"use strict";n("76f2")},"203c":function(t,e,n){(t.exports=n("690e")(!1)).push([t.i,".zjapp .container[data-v-641fa140]{height:200px;position:realtive}.zjapp .container[data-v-641fa140]:before{content:attr(num);position:absolute;top:0;right:0;bottom:0;left:0;font-size:16px;line-height:30px;height:30px;margin:auto;text-align:center;z-index:1000;width:40px}",""])},3469:function(t,e,n){"use strict";n("546f")},"546f":function(t,e,n){var a=n("f9c3");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("85cb").default)("2d83af4c",a,!0,{sourceMap:!1,shadowMode:!1})},5685:function(t,e,n){"use strict";(function(t){var a=n("162a"),r=n("6144"),i=n("9cd1"),o=n("da2f"),s=n("c77f");function u(t,e){return t?(t-e)/t*100:0}var c={getProcessCheckNewBuilding:function(t){var e=r.a.getString("reportDateType",r.a.level.user)||"month";return Object(o.d)({proj_id:t,query_type:e})},getProjTotalData:function(){return a.a.request("/report/project-over-view")},getDailyCheckData:function(t,e,n,r,i){var o={proj_id:t,bidsection_id:e,begin_date:n,end_date:r};return i&&(o.module=i),a.a.request("/report/check",o)},getReportCheckList:function(t){return a.a.request("/report/check-batch-problem-list",{batch_id:t.batchId,begin_date:t.dateStart,end_date:t.dateEnd})},getReportCheckTimeoutList:function(t,e,n){return a.a.request("/report/get-over-due-check",{proj_id:t,key:e,page:n,pageSize:15})},getOverDueCheckConfig:function(t){return a.a.request("/report/get-over-due-check-config",{proj_id:t})},getReportCheckDetail:function(t){return a.a.request("/report/check-batch-problem-detail",{id:t})},postReportCheckUpdate:function(t){return a.a.post("/checkquality-comment/upload",{},t)},postReportCheckSendBack:function(t){return a.a.post("/checkquality-comment/send-back",{},t)},measureProjectData:[],waterPercolationData:[],getMeasureData:function(e){return a.a.request("/report/measure",{proj_id:e}).then((function(e){return t.each(e,(function(e){e.repair_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},e.supervision_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},e.construct_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},t.each(e.buildings,(function(n){n.repair_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},n.supervision_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},n.construct_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},t.each(n.check_items,(function(a){a.repair_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},a.supervision_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},a.construct_data={measurement_points_num:0,problem_points_num:0,checkitem_num:0,passport:0},t.each(a.children,(function(r){e.repair_data.measurement_points_num+=r.measure_data[0].measurement_points,e.repair_data.problem_points_num+=r.measure_data[0].problem_points,e.repair_data.checkitem_num+=r.measure_data[0].measurement_points?1:0,e.supervision_data.measurement_points_num+=r.measure_data[1].measurement_points,e.supervision_data.problem_points_num+=r.measure_data[1].problem_points,e.supervision_data.checkitem_num+=r.measure_data[1].measurement_points?1:0,e.construct_data.measurement_points_num+=r.measure_data[2].measurement_points,e.construct_data.problem_points_num+=r.measure_data[2].problem_points,e.construct_data.checkitem_num+=r.measure_data[2].measurement_points?1:0,n.repair_data.measurement_points_num+=r.measure_data[0].measurement_points,n.repair_data.problem_points_num+=r.measure_data[0].problem_points,n.repair_data.checkitem_num+=r.measure_data[0].measurement_points?1:0,n.supervision_data.measurement_points_num+=r.measure_data[1].measurement_points,n.supervision_data.problem_points_num+=r.measure_data[1].problem_points,n.supervision_data.checkitem_num+=r.measure_data[1].measurement_points?1:0,n.construct_data.measurement_points_num+=r.measure_data[2].measurement_points,n.construct_data.problem_points_num+=r.measure_data[2].problem_points,n.construct_data.checkitem_num+=r.measure_data[2].measurement_points?1:0,a.repair_data.measurement_points_num+=r.measure_data[0].measurement_points,a.repair_data.problem_points_num+=r.measure_data[0].problem_points,a.repair_data.checkitem_num+=r.measure_data[0].measurement_points?1:0,a.supervision_data.measurement_points_num+=r.measure_data[1].measurement_points,a.supervision_data.problem_points_num+=r.measure_data[1].problem_points,a.supervision_data.checkitem_num+=r.measure_data[1].measurement_points?1:0,a.construct_data.measurement_points_num+=r.measure_data[2].measurement_points,a.construct_data.problem_points_num+=r.measure_data[2].problem_points,a.construct_data.checkitem_num+=r.measure_data[2].measurement_points?1:0,t.each(r.measure_data,(function(t){t.measurement_points?t.passport=(t.measurement_points-t.problem_points)/t.measurement_points*100:t.passport=0}))})),a.repair_data.passport=u(a.repair_data.measurement_points_num,a.repair_data.problem_points_num),a.supervision_data.passport=u(a.supervision_data.measurement_points_num,a.supervision_data.problem_points_num),a.construct_data.passport=u(a.construct_data.measurement_points_num,a.construct_data.problem_points_num)})),n.repair_data.passport=u(n.repair_data.measurement_points_num,n.repair_data.problem_points_num),n.supervision_data.passport=u(n.supervision_data.measurement_points_num,n.supervision_data.problem_points_num),n.construct_data.passport=u(n.construct_data.measurement_points_num,n.construct_data.problem_points_num)})),e.repair_data.passport=u(e.repair_data.measurement_points_num,e.repair_data.problem_points_num),e.supervision_data.passport=u(e.supervision_data.measurement_points_num,e.supervision_data.problem_points_num),e.construct_data.passport=u(e.construct_data.measurement_points_num,e.construct_data.problem_points_num)})),e}))},measureBuildData:{},setMeasureBuildData:function(t){c.measureBuildData=t},getMeasureBuildData:function(e){return t.isEmpty(c.measureBuildData)?c.getMeasureData(e).then((function(t){return t[0]})):Promise.resolve(c.measureBuildData)},getCheckAcceptData:function(t){return a.a.request("/report/check-accept",{proj_id:t})},getCheckAcceptDataOfBuilding:function(t,e,n){return a.a.request("/report/check-accept-detail",{section_id:t,building_id:e,unit:n||""})},getProcessCheckData:function(t,e){return a.a.request("/report/processcheck",{building_id:t,unit:e})},getProcessCheckData2:function(t){return Object(o.g)({building_id:t})},getMaterialData:function(t,e,n){return a.a.request("/report/material",{proj_id:t,begin_date:e,end_date:n})},getProcessAcceptBuilding:function(t){var e=r.a.getString("reportDateType",r.a.level.user)||"month";return Object(s.n)({proj_id:t,query_type:e})},getWaterPercolation:function(t){return a.a.request("/report/close-water-test",{proj_id:t})},getProcessAcceptData:function(t,e,n,a){return Object(s.o)({building_id:t,unit:e,start:n||"",end:a||""})},getProcessAcceptPileItem:function(t){return a.a.request("/report/get-pile-check-items",{bidsection_id:t})},getProcessAcceptPileData:function(t,e){return a.a.request("/report/process-accept-with-pile",{building_id:t,item_id:e})},getMeasureCheckedData:function(){return a.a.request("/report/leader-measure")},getSchedulePlanData:function(){return Object(i.i)()},getSchedulePlanProjectData:function(t){return Object(i.a)({proj_id:t})},getCheckProblemStatisticsData:function(t){return a.a.request("/report/leader-secure",t)},getProcessCheckStatisticsData:function(){return Object(o.k)()},schedulePlanNodeList:function(t){return Object(i.e)({plan_id:t})}};e.a=c}).call(this,n("391c"))},"76f2":function(t,e,n){var a=n("203c");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("85cb").default)("689ca957",a,!0,{sourceMap:!1,shadowMode:!1})},"774b":function(t,e,n){"use strict";n.r(e);var a=n("d18d").a,r=(n("b225"),n("17cc")),i=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"scroll-warp",staticClass:"scroll-warp",class:{"scroll-warp-pulling":t.pulling,"scroll-warp-complete":!t.hasNext&&!t.isEmpty,"scroll-warp-empty":t.isEmpty},style:{"padding-bottom":t.numberKeyboardCoverHeight+"px"},on:{scroll:t.onScroll,touchstart:t.onTouchstart,touchmove:t.onTouchmove,touchend:t.onTouchend}},[t.allowPullDown?n("div",{staticClass:"pull-refresh-warp",style:{height:t.pullDist+"px"}},[n("div",{staticClass:"pull-refresh"},[n("div",{staticClass:"animation-refresher",class:{refreshing:t.refreshing}}),t.updateTime?n("p",{staticClass:"pull-refresh-date"},[t._v("最后成功同步："+t._s(t.updateTime))]):t._e()])]):t._e(),t._t("default"),t.loading?n("div",{staticClass:"page-loading"},[n("svg",{staticClass:"svg-loading",attrs:{viewBox:"0 0 80 80"}},[n("circle",{attrs:{cx:"40",cy:"40",r:"36"}})])]):t._e(),t.hasNext||t.isEmpty?t._e():[t.$slots.end?t._t("end"):t._e(),!t.$slots.end&&t.endText?n("div",{staticClass:"end-text"},[t._v("\n      "+t._s(t.endText)+"\n    ")]):t._e()]],2)}),[],!1,null,"2b1a346c",null);e.default=i.exports},"8c9f":function(t,e,n){"use strict";(function(t){n("163d");var a=n("7780"),r=n.n(a),i=(n("5a50"),n("ed08"));e.a={name:"PieEcharts",props:{chartData:{type:Array,default:function(){return[]}},chartCallback:{type:Function,default:function(){}},problemNum:{type:Number,default:null}},data:function(){return{elId:i.a.uuid(),chartObj:void 0}},computed:{problemNumMap:function(){return t.isEmpty(this.problemNum)&&0!==this.problemNum?"":this.problemNum},isChartData:function(){return!t.isEmpty(this.chartData)}},watch:{chartData:function(t){this.drawPie(t)}},mounted:function(){this.drawPie(this.chartData)},activated:function(){this.drawPie(this.chartData)},methods:{bindingId:function(){var e=this,n=document.getElementById(this.elId);t.isEmpty(this.chartObj)&&this.isChartData&&!t.isEmpty(n)&&(this.chartObj=r.a.init(n),this.chartObj.on("click",(function(t){e.chartCallback(t.data)})))},drawPie:function(e){if(e=e||this.chartData,this.bindingId(),!t.isEmpty(e)&&!t.isEmpty(this.chartObj)){var n={series:[{type:"pie",radius:[40,60],avoidLabelOverlap:!1,label:{formatter:function(t){return["".concat(t.percent.toFixed(1),"%")].join("\n")},rich:{a:{color:"red",lineHeight:10},b:{color:"#999999",lineHeight:20,fontSize:14},x:{fontSize:18,fontFamily:"Microsoft YaHei",borderColor:"#449933",borderRadius:4}}},data:e}]};this.chartObj.setOption(n)}}}}}).call(this,n("391c"))},"9cd1":function(t,e,n){"use strict";n.d(e,"h",(function(){return o})),n.d(e,"m",(function(){return s})),n.d(e,"g",(function(){return u})),n.d(e,"f",(function(){return c})),n.d(e,"d",(function(){return l})),n.d(e,"l",(function(){return p})),n.d(e,"k",(function(){return d})),n.d(e,"j",(function(){return m})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return f})),n.d(e,"c",(function(){return _})),n.d(e,"i",(function(){return b})),n.d(e,"a",(function(){return v}));var a=n("5e8d"),r=n("162a"),i=n("bcc78");function o(t){return Object(a.a)().then((function(){var e=i.a.schedulePlanTaskInfo.url;return r.a.request(e,t)}))}function s(t){return Object(a.a)().then((function(){var e=i.a.schedulePlanSaveTask.url;return r.a.post(e,null,t)}))}function u(t){return Object(a.a)().then((function(){var e=i.a.schedulePlanPlanList.url;return r.a.request(e,t)}))}function c(t){return Object(a.a)().then((function(){var e=i.a.schedulePlanNodeList.url;return r.a.request(e,t)}))}function l(t){return Object(a.a)().then((function(){var e=i.a.schedulePlanNodeInfo.url;return r.a.request(e,t)}))}function p(t){return Object(a.a)().then((function(){var e=i.a.schedulePlanSaveReport.url;return r.a.post(e,null,t)}))}function d(t){return Object(a.a)().then((function(){var e=i.a.schedulePlanSaveCompleteTime.url;return r.a.post(e,null,t)}))}function m(t){return Object(a.a)().then((function(){var e=i.a.schedulePlanSaveChecker.url;return r.a.post(e,null,t)}))}function h(t){return Object(a.a)().then((function(){var e=i.a.schedulePlanCheckerLogList.url;return r.a.request(e,t)}))}function f(t){return Object(a.a)().then((function(){var e=i.a.schedulePlanNodeLevel.url;return r.a.request(e,t)}))}function _(){return Object(a.a)().then((function(){var t=i.a.schedulePlanCompletedTimeSetting.url;return r.a.request(t)}))}function b(){return Object(a.a)().then((function(){var t=i.a.schedulePlanLeaderSchedulePlan.url;return r.a.request(t)}))}function v(t){return Object(a.a)().then((function(){var e=i.a.schedulePlanGetByFirstProject.url;return r.a.request(e,t)}))}},"9d55":function(t,e,n){(t.exports=n("690e")(!1)).push([t.i,'.zjapp .scroll-warp[data-v-2b1a346c]{flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.zjapp .scroll-warp-pulling[data-v-2b1a346c]{overflow:hidden}.zjapp .scroll-warp-complete[data-v-2b1a346c]:after{content:"";display:block;height:100px}.zjapp .scroll-warp-empty[data-v-2b1a346c]{display:flex;flex-direction:column}.zjapp .pull-refresh-warp[data-v-2b1a346c]{position:relative;height:0;overflow:hidden}.zjapp .pull-refresh[data-v-2b1a346c]{position:absolute;left:0;bottom:0;height:70px;width:100%;padding:6px;text-align:center}.zjapp .pull-refresh-date[data-v-2b1a346c]{margin-top:4px;height:16px;line-height:16px;font-size:12px;color:#bcbcbc}.zjapp .page-loading[data-v-2b1a346c]{padding:10px;text-align:center}.zjapp .end-text[data-v-2b1a346c]{color:#c8c8c8;background:#f4f4f4;position:relative;line-height:76px;height:76px;text-align:center}.zjapp .end-text[data-v-2b1a346c]:after,.zjapp .end-text[data-v-2b1a346c]:before{content:"";position:absolute;width:48px;height:1px;background:#e4e4e4;top:50%;margin-top:-1px}.zjapp .end-text[data-v-2b1a346c]:after{left:50%;transform:translateX(-92px)}.zjapp .end-text[data-v-2b1a346c]:before{right:50%;transform:translateX(90px)}.zjapp .end-slot[data-v-2b1a346c]{padding:30px;line-height:18px;text-align:center;color:#c8c8c8}',""])},b225:function(t,e,n){"use strict";n("ef48")},c52d:function(t,e,n){"use strict";var a=n("8c9f").a,r=(n("12d8"),n("17cc")),i=Object(r.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.isChartData?e("div",{class:{"pie-graphic-c":!0,"show-problem-num":Number(this.problemNumMap)>=0},attrs:{id:this.elId,num:this.problemNumMap}}):this._e(),this.isChartData?this._e():e("div",{staticClass:"no-data pie-graphic-c"})])}),[],!1,null,"641fa140",null);e.a=i.exports},c77f:function(t,e,n){"use strict";n.d(e,"h",(function(){return s})),n.d(e,"g",(function(){return u})),n.d(e,"a",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return p})),n.d(e,"d",(function(){return d})),n.d(e,"n",(function(){return m})),n.d(e,"o",(function(){return h})),n.d(e,"b",(function(){return f})),n.d(e,"i",(function(){return _})),n.d(e,"k",(function(){return b})),n.d(e,"c",(function(){return v})),n.d(e,"l",(function(){return g})),n.d(e,"p",(function(){return w})),n.d(e,"m",(function(){return k})),n.d(e,"j",(function(){return y}));var a=n("5e8d"),r=n("162a"),i=n("bcc78"),o=n("da71");function s(t){return Object(a.a)().then((function(){var e=i.a.commonGetProblemClassTree.url;return r.a.request(e,t)}))}function u(t){return Object(a.a)().then((function(){var e=i.a.pileAcceptGetPileBuildingSummary.url;return r.a.request(e,t)}))}function c(t){return Object(a.a)().then((function(){var e=i.a.pileAcceptGetBidsectionBuildingTree.url;return r.a.request(e,t)}))}function l(){return Object(a.a)().then((function(){var t=i.a.pileAcceptGetPileAcceptItems.url;return r.a.request(t)}))}function p(t){return Object(a.a)().then((function(){var e=i.a.pileAcceptGetPileAcceptList.url;return r.a.request(e,t)}))}function d(t){return Object(a.a)().then((function(){var e=i.a.pileAcceptGetPileAcceptInfo.url;return r.a.request(e,t)}))}function m(t){return Object(a.a)().then((function(){var e=i.a.processAcceptBuilding.url;return r.a.request(e,t)}))}function h(t){return Object(a.a)().then((function(){var e=i.a.processAcceptCollect.url;return r.a.request(e,t)}))}function f(t){return Object(a.a)().then((function(){var e=i.a.processAcceptv3GetBuildingList.url;return r.a.request(e,t)}))}function _(t){return Object(a.a)().then((function(){var e=i.a.processAcceptv3GetProcessAcceptv3List.url;return r.a.request(e,t)}))}function b(t){return Object(a.a)().then((function(){var e=o.a.getReportOrgTree.url;return r.a.request(e,t)}))}function v(t){return Object(a.a)().then((function(){var e=o.a.getHomeReports.url;return r.a.request(e,t)}))}function g(t){return Object(a.a)().then((function(){var e=o.a.getReportPools.url;return r.a.request(e,t)}))}function w(t){return Object(a.a)().then((function(){var e=o.a.saveMyReportsSetting.url;return r.a.post(e,null,t)}))}function k(t){return Object(a.a)().then((function(){var e=i.a.getUrlReportAuth.url;return r.a.request(e,t)}))}function y(t){return Object(a.a)().then((function(){var e=i.a.getProgressV3Summary.url;return r.a.request(e,t)}))}},d18d:function(t,e,n){"use strict";(function(t){n("2b45");var a,r=n("4360"),i=n("48f4"),o=n("162a"),s=n("e2a7"),u=n("a500"),c=n("6f9e"),l={};e.a={name:"Scroller",props:{buildingId:{type:String,default:""},hasNext:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},isSync:{type:Boolean,default:!0},endText:{type:String,default:""},memoryScrollTop:{type:Boolean,default:!0},keepScrollTop:{type:Boolean},hasPullDown:{type:Boolean,default:!0},onPullDown:{type:Function}},data:function(){return{pullDist:0,refreshing:!1,pulling:!1,loading:!1,scrollTop:0,isCurrKeyboard:!1,gapBottom:0}},computed:{allowPullDown:function(){return this.hasPullDown&&(!!this.$listeners.pullDown||!!this.onPullDown)},updateTime:function(){return r.a.state.global.businessDownloadTime},numberKeyboardCoverHeight:function(){return r.a.state.global.isNumberInputOpen?r.a.state.global.numberKeyboardHeight-this.gapBottom:0}},mounted:function(){var t=this;c.a.$on("numberKeyboardOpen",this.onNumberKeyboardOpen),this.$nextTick((function(){var e=t.$refs["scroll-warp"]&&t.$refs["scroll-warp"].getBoundingClientRect&&t.$refs["scroll-warp"].getBoundingClientRect();e&&(t.gapBottom=document.documentElement.clientHeight-e.bottom),t.$el&&t.$el.addEventListener("focus",(function(e){var n=e&&e.target,a=n&&n.tagName&&n.tagName.toLowerCase();if("input"===a||"textarea"===a){window.addEventListener("resize",(function e(){var a=n.getBoundingClientRect(),r=t.$el.getBoundingClientRect(),i=a.bottom-r.bottom;i>0&&t.scrollBy(i),window.removeEventListener("resize",e,!1)}),!1)}}),!0)}))},destroyed:function(){c.a.$off("numberKeyboardOpen",this.onNumberKeyboardOpen)},activated:function(){var t=this.keepScrollTop||this.$router.isBack&&this.memoryScrollTop;this.scrollTop&&t&&(this.$refs["scroll-warp"].scrollTop=this.scrollTop)},deactivated:function(){this.memoryScrollTop&&(this.scrollTop=this.$refs["scroll-warp"].scrollTop)},methods:{onScroll:function(t){var e=this,n=this.$refs["scroll-warp"].scrollTop,a=this.$refs["scroll-warp"].scrollHeight;if(n+this.$refs["scroll-warp"].clientHeight>=a-5&&!this.loading&&this.hasNext){this.loading=!0;var r=this.$listeners.loadNext();r&&r.then&&"function"==typeof r.then?r.then((function(){e.loading=!1})):this.loading=!1}this.$emit("scroll",t)},getTouchDiretion:function(t){if(!(l&&t&&t.touches&&t.touches[0]))return"";var e=t.touches[0].clientX,n=t.touches[0].clientY;return Math.abs(n-l.y)>Math.abs(e-l.x)&&Math.abs(n-l.y)>=3?n>l.y?"down":"up":""},onTouchstart:function(t){this.allowPullDown&&t.touches&&1===t.touches.length&&(l={x:t.touches[0].clientX,y:t.touches[0].clientY,scrollTop:this.$refs["scroll-warp"].scrollTop,pullDist:this.pullDist})},onTouchmove:function(t){if(this.allowPullDown&&t.touches&&1===t.touches.length){var e=this.$refs["scroll-warp"].scrollTop,n=t.touches[0].clientY,a=n-l.y,r=this.getTouchDiretion(t);"down"===r?!this.refreshing&&e<=0?(this.pulling=!0,this.pullDist=(a-l.scrollTop)/2,t.preventDefault()):this.pulling=!1:"up"===r?this.pullDist>0&&(this.pullDist=l.pullDist-(l.y-n),t.preventDefault()):this.pullDist=l.pullDist}},onTouchend:function(){var t=this;this.allowPullDown&&(l={},this.pulling=!1,this.pullDist>=70&&this.isSync?this.refreshing?this.makePullTo(70):this.makePullTo(70).then((function(){if(t.refreshing=!0,t.onPullDown){var e=t.onPullDown();e&&e.then&&"function"==typeof e?e.finally((function(){t.refreshing=!1,t.makePullTo(0)})):(t.refreshing=!1,t.makePullTo(0))}else t.dataSync().then((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")})).catch((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")}))})):(this.refreshing=!1,this.makePullTo(0)))},makePullTo:function(t){var e=this,n=this.pullDist,a=t,r=a-n,i=n;return n===a?Promise.resolve():new Promise((function(t){!function o(){window.requestAnimationFrame((function(){i+=r/6,e.pullDist=i,n<a&&i<a||n>a&&i>a?o():(e.pullDist=a,e.refreshing=!1,t())}))}()}))},dataSync:function(){var t,e=i.default.getCurrentModuleCode(),n=i.default.getCurrentRoute(),a=n.meta&&n.meta.isTodo;if(i.default.isModuleNeedBuilding(e)&&!a){if(!this.buildingId)return new Promise((function(t){setTimeout((function(){t()}),500)}));t=this.buildingId}return u.a.addTrack("公共-手动下拉刷新","",""),o.a.beginManualUpdate(),i.default.checkSync(t).then((function(t){return o.a.endManualUpdate(),t})).catch((function(t){$log.error("下拉刷新错误",t),t&&"Error: Network Error"===t.toString()?s.a.alert("当前网络无法同步数据"):s.a.alert(t),o.a.endManualUpdate()}))},getScrollHeight:function(){return this.$refs["scroll-warp"].offsetHeight},getScrollTop:function(){return this.$refs["scroll-warp"].scrollTop},setScrollTop:function(t){this.$refs["scroll-warp"].scrollTop=t},scrollBy:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,r=this.getScrollTop(),i=r+t,o=Math.round(n/16.7),s=t/o,u=r,c=a=+new Date;return r===i?Promise.resolve():new Promise((function(t){!function n(){window.requestAnimationFrame((function(){c===a&&(u+=s,e.$refs["scroll-warp"].scrollTop=u,r<i&&u<i||r>i&&u>i?n():(e.$refs["scroll-warp"].scrollTop=i,t()))}))}()}))},scrollTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=this.getScrollTop(),a=t-n;return this.scrollBy(a,e)},scrollToEle:function(t){var e=t.keyboardHeight||232,n=(t=t.$el?t.$el:t).getBoundingClientRect(),a=this.$refs["scroll-warp"].getBoundingClientRect();if(n&&a){var i=document.documentElement.clientHeight-(r.a.state.global.isNumberInputOpen?e:0),o=a.bottom<i?a.bottom:i,s=a.top-n.top,u=n.bottom-o;s>0?this.scrollBy(-s-10):u>0&&this.scrollBy(u+10)}},isCurrent:function(e,n){var a=this;e.length&&t.each(e,(function(t){t._uid===n?a.isCurrKeyboard=!0:a.isCurrent(t.$children,n)}))},onNumberKeyboardOpen:function(t){this.isCurrKeyboard=!1,this.isCurrent(this.$children,t._uid),this.isCurrKeyboard&&this.scrollToEle(t)}}}}).call(this,n("391c"))},de15:function(t,e,n){"use strict";var a=n("329b"),r=n("06a8").a,i=(n("3469"),n("17cc")),o=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page-content",{style:{"z-index":t.level+5},attrs:{mode:"dialog",title:"问题类型分析","on-close":t.closePopup}},[n("scroller",{staticClass:"check-report-leader_scroller"},[n("div",{staticClass:"measure-pass-rate"},[n("div",{staticClass:"pie-graphic-title"},[t.level>1?n("span",{staticClass:"back-out",staticStyle:{"font-weight":"bold"},on:{click:function(e){t.close()}}},[t._v("上一级")]):t._e(),n("span",{staticClass:"back-text",class:{active:t.parentItemName&&t.parentItemName.length>14}},[t._v("\n          "+t._s(t.parentItemName)+"\n        ")])]),t.loading&&!t.isOther?n("report-pie",{attrs:{"chart-data":t.chartData,"problem-num":t.problemNum,"chart-callback":t.chartCallback}}):t._e()],1),t.isOther?t._e():n("ul",{staticClass:"chart-legend-list"},[n("li",[n("div",t._l(t.chartLegend,(function(e,a){return n("div",{directives:[{name:"show",rawName:"v-show",value:a%2==0,expression:"(key%2) === 0"}],key:a},[n("span",{staticClass:"chart-legend",style:{"background-color":e.color}}),n("span",{staticClass:"chart-legend-text"},[t._v(t._s(e.name))])])})))]),n("li",[n("div",t._l(t.chartLegend,(function(e,a){return n("div",{directives:[{name:"show",rawName:"v-show",value:a%2==1,expression:"key%2 === 1"}],key:a},[n("span",{staticClass:"chart-legend",style:{"background-color":e.color}}),n("span",{staticClass:"chart-legend-text"},[t._v(t._s(e.name))])])})))])]),n("ul",{staticClass:"table-tree-r"},[n("li",{staticClass:"table-title"},[n("div",[t._v(t._s(t.isEnd?"问题描述":"检查项"))]),n("div",[t._v("问题数")]),n("div",[t._v("占比")])]),t._l(t.listData,(function(e,a){return n("li",{key:a,on:{click:function(n){t.itemClick(e)}}},[n("div",{staticClass:"no-child"},[t._v(t._s(e.name))]),n("div",[t._v(t._s(e.sum_problem_num))]),n("div",[t._v(t._s(e.value+"%"))])])}))],2)])],1)}),[],!1,null,"5e5b639f",null).exports,s=n("04f3"),u={name:"CheckReportLeaderDialog",components:{dialogItem:o},data:function(){return{show:[!1,!1,!1],level:1,dataList:[],options:{},backButtonEvent:null}},methods:{openPopup:function(t){this.$set(this.show,t.level-1,!0),this.penetrate=t.penetrate,this.options=t.options,this.level=t.level;var e=JSON.parse(JSON.stringify(this.dataList));e[this.level-1]=t,this.dataList=e,this.backButtonEvent||(this.backButtonEvent=Object(s.a)(this.closePopup))},close:function(t){this.$set(this.show,t,!1)},closePopup:function(){this.show=[!1,!1,!1],this.backButtonEvent&&(Object(s.c)(this.backButtonEvent),this.backButtonEvent=null)},itemClick:function(t,e){this.penetrate(t,this.dataList[e],this.options)}}},c=Object(i.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"slide-right"}},[n("dialog-item",{directives:[{name:"show",rawName:"v-show",value:t.show[0],expression:"show[0]"}],attrs:{params:t.dataList[0],index:0},on:{close:t.close,closePopup:t.closePopup,itemClick:t.itemClick}})],1),n("transition",{attrs:{name:"slide-right"}},[n("dialog-item",{directives:[{name:"show",rawName:"v-show",value:t.show[1],expression:"show[1]"}],attrs:{params:t.dataList[1],index:1},on:{close:t.close,closePopup:t.closePopup,itemClick:t.itemClick}})],1),n("transition",{attrs:{name:"slide-right"}},[n("dialog-item",{directives:[{name:"show",rawName:"v-show",value:t.show[2],expression:"show[2]"}],attrs:{params:t.dataList[2],index:2},on:{close:t.close,closePopup:t.closePopup,itemClick:t.itemClick}})],1),n("transition",{attrs:{name:"slide-right"}},[n("dialog-item",{directives:[{name:"show",rawName:"v-show",value:t.show[3],expression:"show[3]"}],attrs:{params:t.dataList[3],index:3},on:{close:t.close,closePopup:t.closePopup,itemClick:t.itemClick}})],1)],1)}),[],!1,null,null,null).exports,l=!1;l||(l=new(a.default.extend(c))({el:document.createElement("div")}),document.body.appendChild(l.$el));e.a=l},ef48:function(t,e,n){var a=n("9d55");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("85cb").default)("a1a65c0c",a,!0,{sourceMap:!1,shadowMode:!1})},f9c3:function(t,e,n){(t.exports=n("690e")(!1)).push([t.i,".zjapp .check-report-leader_scroller[data-v-5e5b639f]{background-color:#fff}.zjapp .back-text.active[data-v-5e5b639f]{text-indent:60px}",""])}}]);