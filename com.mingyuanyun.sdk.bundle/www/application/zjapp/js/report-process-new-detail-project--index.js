(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["report-process-new-detail-project--index"],{"0c09":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return i}));var r="QA",i="ES"},"27a0":function(t,e,a){"use strict";a("36bf")},"36bf":function(t,e,a){var r=a("667d");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a("85cb").default)("318b706f",r,!0,{sourceMap:!1,shadowMode:!1})},"667d":function(t,e,a){(t.exports=a("690e")(!1)).push([t.i,'.zjapp .table-wrap[data-v-ac423fb8]{height:100%;overflow:auto}.zjapp .table-wrap .scroll-warp[data-v-ac423fb8]{height:100%}.zjapp .table-wrap .ncov-title[data-v-ac423fb8]{position:relative;height:46px;line-height:46px;padding:0 15px;font-size:18px;color:#333;font-weight:500;background:#fff}.zjapp .table-wrap .ncov-title[data-v-ac423fb8]:before{content:"";position:absolute;top:15px;left:0;width:4px;height:16px;background:#4275e8}.zjapp .table-wrap .ncov-title .icon-yiwen[data-v-ac423fb8]{position:absolute;color:#c8c8c8;top:14px;right:15px}.zjapp .table-wrap .ncov-table[data-v-ac423fb8]{display:flex;flex-wrap:wrap;margin:0 0 10px 0}.zjapp .table-wrap .ncov-table .item[data-v-ac423fb8]{display:block;flex:0 0 25%;padding:15px 0;text-align:center}.zjapp .table-wrap .ncov-table .item .number[data-v-ac423fb8]{height:28px;font-size:18px;font-weight:600;color:#4275e8;line-height:28px}.zjapp .table-wrap .ncov-table .item .describe[data-v-ac423fb8]{height:17px;font-size:12px;font-weight:400;line-height:17px;color:#666}.zjapp .table-wrap .ncov-table .item .unit[data-v-ac423fb8]{font-size:12px;color:#999}.zjapp .table-wrap .item-right[data-v-ac423fb8]{color:#c8c8c8;max-width:140px;margin:0 0 0 10px}.zjapp .table-wrap .item-right.warning[data-v-ac423fb8]{color:#ff3c46}.zjapp .table-wrap .scroll-y[data-v-ac423fb8]{flex:1;overflow-y:auto;position:relative}.zjapp .table-wrap .scroll-x[data-v-ac423fb8]{max-width:100%;overflow-x:auto;position:relative}.zjapp .table-wrap .table-content[data-v-ac423fb8]{position:relative;display:flex;flex-direction:column;flex:1;overflow:hidden;margin:0 0 10px 0}.zjapp .table-wrap .fixed-head[data-v-ac423fb8]{position:absolute;left:0;top:0;z-index:2}.zjapp .table-wrap .fixed-slide[data-v-ac423fb8]{position:absolute;left:0;top:0;z-index:1;transform:translateZ(0)}.zjapp .table-wrap .fixed-nook[data-v-ac423fb8]{position:absolute;left:0;top:0;z-index:3}.zjapp .table-wrap .fixed-nook.heighest[data-v-ac423fb8]{z-index:4}.zjapp .table-wrap .table[data-v-ac423fb8]{border-collapse:collapse}.zjapp .table-wrap .table td[data-v-ac423fb8],.zjapp .table-wrap .table th[data-v-ac423fb8]{min-width:110px;height:50px;max-height:50px;padding:5px 10px;line-height:16px;font-size:14px;text-align:center;box-sizing:border-box;border:none;overflow:hidden;word-break:break-all}.zjapp .table-wrap .table td.click[data-v-ac423fb8]{color:#4275e8}.zjapp .table-wrap .table th[data-v-ac423fb8]{color:#888}.zjapp .table-wrap .table td[data-v-ac423fb8]:first-child,.zjapp .table-wrap .table th[data-v-ac423fb8]:first-child{position:relative;width:115px;min-width:115px}.zjapp .table-wrap .table tr[data-v-ac423fb8]{background-color:#fafafa}.zjapp .table-wrap .name[data-v-ac423fb8]{display:inline-block;line-height:16px;max-height:32px;overflow:hidden}.zjapp .table-wrap .icon-dropdown[data-v-ac423fb8]{position:absolute;top:22px;left:11.5px}.zjapp .table-wrap .icon-dropright[data-v-ac423fb8]{position:absolute;top:19px;left:14.5px}.zjapp .table-wrap .icon-dropdown[data-v-ac423fb8]:before,.zjapp .table-wrap .icon-dropright[data-v-ac423fb8]:before{display:block;content:"";width:0;height:0;border:6px solid #c8c8c8}.zjapp .table-wrap .icon-dropdown[data-v-ac423fb8]:before{border-left-color:transparent;border-right-color:transparent;border-bottom-color:transparent}.zjapp .table-wrap .icon-dropright[data-v-ac423fb8]:before{border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent}.zjapp .table-wrap .width-105[data-v-ac423fb8]{min-width:105px!important}.zjapp .table-wrap .width-105 span[data-v-ac423fb8]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.zjapp .table-wrap .ncov-report-table-title[data-v-ac423fb8]{min-height:50px}.zjapp .table-wrap .ncov-report-table-title span[data-v-ac423fb8]{width:90px;max-height:none;height:auto;line-height:22px;white-space:normal;word-break:break-all}.zjapp .table-wrap .ncov-report-table-title .ncov-P-R-all[data-v-ac423fb8]{width:auto}',""])},"7c93":function(t,e,a){"use strict";a.r(e);var r=a("c37b").a,i=(a("27a0"),a("17cc")),o=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-content",{attrs:{title:"工序移交明细"}},[a("div",{staticClass:"header-btn",attrs:{slot:"header-bar-right"},on:{click:t.openFilter},slot:"header-bar-right"},[a("icon",{attrs:{name:"nav-filter"}})],1),!t.isLoading&&t.reportData.length?a("div",{staticClass:"table-wrap"},[a("table",{directives:[{name:"show",rawName:"v-show",value:t.showFixedHeadPatch,expression:"showFixedHeadPatch"}],staticClass:"table fixed-head",style:{transform:"translateX("+-t.fixedHeadLeft+"px)"}},[a("thead",[a("tr",{staticClass:"border-bottom border-top"},[a("th",{staticClass:"border-right ncov-report-table-title"},[t._v("楼栋")]),a("th",{staticClass:"border-right"},[t._v("部位")]),a("th",{staticClass:"border-right"},[t._v("工序")]),a("th",{staticClass:"border-right"},[t._v("报验时间")]),a("th",{staticClass:"border-right"},[t._v("状态")])])])]),a("scroller",{attrs:{"has-next":t.hasNext},on:{loadNext:t.getNextPageData}},[t.reportData&&t.reportData.length?a("div",{staticClass:"table-content"},[a("div",{staticClass:"scroll-y"},[a("div",{staticClass:"scroll-x",on:{touchmove:t.touchFun,scroll:t.onScrollX}},[a("table",{staticClass:"table"},[a("thead",[a("tr",{staticClass:"border-bottom"},[a("th",{staticClass:"border-right ncov-report-table-title"},[t._v("楼栋")]),a("th",{staticClass:"border-right"},[t._v("部位")]),a("th",{staticClass:"border-right"},[t._v("工序")]),a("th",{staticClass:"border-right"},[t._v("报验时间")]),a("th",{staticClass:"border-right"},[t._v("状态")])])]),a("tbody",[t._l(t.reportData,(function(e,r){return[a("tr",{key:r,staticClass:"border-bottom",on:{click:function(a){t.goAccept(e)}}},[a("td",{staticClass:"border-right ncov-report-table-title"},[a("span",{staticClass:"name"},[t._v(t._s(e.building_name||e.location_name||"/"))])]),1===Number(e.process_mode)?a("td",{staticClass:"border-right"},[t._v(t._s(e.unit+e.floor+e.room_no||""))]):t._e(),2===Number(e.process_mode)||5===Number(e.process_mode)?a("td",{staticClass:"border-right"},[t._v(t._s(e.unit+e.floor))]):t._e(),3===Number(e.process_mode)?a("td",{staticClass:"border-right"},[t._v("整栋")]):t._e(),90===Number(e.process_mode)?a("td",{staticClass:"border-right"},[t._v(t._s(e.custom_location))]):t._e(),a("td",{staticClass:"border-right"},[t._v(t._s(e.item_name))]),a("td",{staticClass:"border-right"},[t._v(t._s(t._f("formatDate")(e.regist_date,"YYYY-MM-DD")))]),a("td",{staticClass:"border-right"},[t._v(t._s(e.status))])])]}))],2)])])])]):t._e()])],1):t._e(),a("condition-filter",{ref:"condition-filter",attrs:{build:t.buildList,"check-list":t.checkList,"custom-status":t.statusList,"building-select-is-multiple":!0}}),a("loading-status",{attrs:{"is-loading":t.isLoading,type:t.errorType,"is-empty":!t.isLoading&&!t.reportData.length,"empty-text":t.emptyTips||"没有报表数据"}})],1)}),[],!1,null,"ac423fb8",null);e.default=o.exports},c37b:function(t,e,a){"use strict";(function(t){a("6d57");var r,i=a("4c09"),o=(a("6a61"),a("2e91")),n=a("07d2"),s=a("774b"),l=a("fd50"),c=(a("6bf2"),a("1b7e")),p=a("2e68"),d=a("bd36"),b=a("da2f"),h=a("0c09");e.a={name:"ReportProcessNewDetailProjectIndex",components:{item:n.a,Scroller:s.a,conditionFilter:p.a},data:function(){return{isLoading:!0,emptyTips:"",errorType:"report",reportData:[],hasNext:!1,currentPage:1,fixedHeadTop:0,fixedHeadLeft:0,showFixedHead:!0,showFixedHeadPatch:!0,showFixedSlide:!0,showFixedNook:!0,showFixedNookX:!0,buildList:[],checkList:[],statusList:[{value:"",label:"全部"},{value:"待验收",label:"待验收"},{value:"已退回",label:"已退回"},{value:"已验收",label:"已验收"}]}},computed:{projectSelected:function(){return this.$store.state.global.currentReportProject}},activated:function(){this.fixedHeadTop=0,this.fixedHeadLeft=0,this.$router.isBack||this.init()},methods:{init:(r=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getData();case 2:return t.next=4,this.getCheckItemData();case 4:return t.next=6,this.getBuildingData();case 6:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)}),touchFun:function(t){t.stopPropagation()},onScrollX:function(t){var e=t&&t.target?t.target.scrollLeft:0;e>=0?(this.fixedHeadLeft=e,this.showFixedSlide=!0,this.showFixedNookX=!0):(this.fixedHeadLeft=0,this.showFixedSlide=!1,this.showFixedNookX=!1)},getNextPageData:function(){this.getDataListByPage(this.currentPage+1)},getDataListByPage:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return this.currentPage=a,c.a.getHasNetwork().then((function(t){if(!t)return l.a.reject({errmsg:"当前无网络连接"})})).then((function(){var o=e.$store.getters["defaultValues/getProcessDetailFilter"]||{},n=e.$route.query.proj_id||e.projectSelected.id||"",s={proj_id:n,bidsection_id:e.$route.query.bidsection_id||"",page:a,page_size:r};return o.projId===n&&o.currentBuild&&o.currentBuild.length>0&&(s.building_id=o.currentBuild.map((function(t){return t.id})).join()),o.currentCheckList&&!t.isEmpty(o.currentCheckList)&&(s.item_ids=String(t.map(o.currentCheckList,(function(t){return t.id})))),o.startDate&&(s.start_day=o.startDate),o.endDate&&(s.end_day=o.endDate),o.currentStatus&&o.currentStatus.value&&(s.status=o.currentStatus.value),console.log({params:s}),Object(b.f)(s).then((function(a){console.log("data===>",a.list),e.hasNext=1===a.hasNext;var r=a.list||[];t.each(r,(function(t){t.unit=t.unit?"单元"===t.unit.substr(t.unit.length-2)?t.unit:t.unit+"单元":"",t.floor=t.floor?"层"!==t.floor.substr(t.floor.length-1)?t.floor+"层":t.floor:"",t.room_no=t.room_no||""})),e.reportData=[].concat(Object(i.a)(e.reportData),Object(i.a)(r||[])),t.isEmpty(e.reportData)&&(e.emptyTips="没有报表数据"),e.isLoading=!1}))})).catch((function(t){e.emptyTips=t.errmsg||"获取数据失败",e.errorType="error",e.isLoading=!1}))},getData:function(){return this.emptyTips="",this.reportData=[],this.errorType="report",this.fixedHeadTop=0,this.fixedHeadLeft=0,this.isLoading=!0,this.getDataListByPage(1)},getCheckItemData:function(){var e=this;return Object(b.i)().then((function(a){a=a.children||[],t.forEach(a,(function(e){e.children&&e.children.length&&t.forEach(e.children,(function(t){t.parent_id=e.id,delete t.children}))})),e.checkList=a||[]}))},getBuildingData:function(){var e=this,a=this.$route.query.proj_id,r=this.$route.query.bidsection_id||"";return Object(b.e)({proj_id:a||this.projectSelected.id,bidsection_id:r}).then((function(a){console.log("data...",a);var r=a.building||[],i=a.location||[];t.forEach(r,(function(t){t.name=t.full_name,t.id=t.building_id}));var o=r.concat(i);console.log("buildList",o),e.buildList=o||[]}))},openFilter:function(){var t=this,e=this.$store.getters["defaultValues/getProcessDetailFilter"]||{},a=this.$route.query.proj_id||this.projectSelected.id||"";e.projId!==a&&(e.currentBuild={id:"",name:"全部"}),console.log("filterData",e),this.$refs["condition-filter"].open({startDate:e.startDate||"",endDate:e.endDate||"",dateType:e.dateType||1,currentBuild:e.currentBuild||d.a,currentStatus:e.currentStatus||{value:"",label:"全部"},currentCheckList:e.currentCheckList||[],onConfirm:function(e){console.log("filterData => ",e),e&&t.$store.commit("defaultValues/SET_REPORT_PROCESS_DETAIL_FILTER",e),t.getData()}})},goAccept:function(t){this.$router.push({name:"ReportCommonIframe",query:{path:"report/process-new/detail",title:"工序移交明细",site_type:h.a,parameter:{id:t.id}}})}}}}).call(this,a("391c"))}}]);