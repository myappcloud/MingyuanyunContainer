(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-4722b542"],{"0618":function(t,e,o){"use strict";o.r(e);var i=o("a4e4").a,a=(o("f0e48"),o("17cc")),n=Object(a.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("page-content",{attrs:{title:t.title,"show-go-root":!t.isReport||"Report"}},[t.isReport?o("div",{staticClass:"bg-sub-theme van-hairline--bottom border-bottom"},[o("div",{staticClass:"item-label"},[t._v("消杀时间")]),o("div",{staticClass:"item-con align-r"},[o("div",{staticClass:"report-date-item",on:{click:function(e){t.openDatePicker("start")}}},[t._v(t._s(t.dateRange.start))]),o("span",{staticClass:"report-date-split"},[t._v("至")]),o("div",{staticClass:"report-date-item",on:{click:function(e){t.openDatePicker("end")}}},[t._v(t._s(t.dateRange.end))])])]):t._e(),o("item",{staticClass:"item-part-title border-bottom"},[o("i",{staticClass:"icon-part"}),t.isReport?o("div",{staticClass:"item-text"},[t._v(t._s(t.sectionName))]):o("div",{staticClass:"item-text"},[t._v(t._s(t.projectSelected.name)+t._s(t.bidsection_name))])]),t.list.length?o("scroller",t._l(t.list,(function(e,i){return o("div",{key:i,staticClass:"record-box van-hairline--bottom",on:{click:function(o){t.goDetail(e)}}},[o("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.dis_image,expression:"r.dis_image",arg:"background-image"}],staticClass:"record-img"}),o("div",{staticClass:"record-content"},[o("p",{staticClass:"record-place"},[t._v(t._s(e.dis_site))]),o("div",{staticClass:"record-remark"},[t._v(t._s(e.dis_personnel))]),o("div",{staticClass:"record-date"},[t._v(t._s(t._f("formatDate")(e.dis_time)))])])])}))):t._e(),o("loading-status",{attrs:{"is-loading":t.isLoading,"is-empty":!t.list.length,type:t.errorType,"empty-text":""===t.errorType?"暂无消杀记录":""}}),t.isLoading||t.isReport?t._e():o("app-button-group",{attrs:{"fixed-bottom":""}},[o("app-button",{on:{click:function(e){t.goDetail()}}},[t._v("新增消杀记录")])],1),o("van-popup",{attrs:{position:"bottom"},model:{value:t.isShowSelDate,callback:function(e){t.isShowSelDate=e},expression:"isShowSelDate"}},[o("van-datetime-picker",{attrs:{type:"date"},on:{confirm:t.selDate,cancel:function(e){t.sShowSelDate=!1}},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1)],1)}),[],!1,null,"46c3de8b",null);e.default=n.exports},"774b":function(t,e,o){"use strict";var i=o("d18d").a,a=(o("b225"),o("17cc")),n=Object(a.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"scroll-warp",staticClass:"scroll-warp",class:{"scroll-warp-pulling":t.pulling,"scroll-warp-complete":!t.hasNext&&!t.isEmpty,"scroll-warp-empty":t.isEmpty},style:{"padding-bottom":t.numberKeyboardCoverHeight+"px"},on:{scroll:t.onScroll,touchstart:t.onTouchstart,touchmove:t.onTouchmove,touchend:t.onTouchend}},[t.allowPullDown?o("div",{staticClass:"pull-refresh-warp",style:{height:t.pullDist+"px"}},[o("div",{staticClass:"pull-refresh"},[o("div",{staticClass:"animation-refresher",class:{refreshing:t.refreshing}}),t.updateTime?o("p",{staticClass:"pull-refresh-date"},[t._v("最后成功同步："+t._s(t.updateTime))]):t._e()])]):t._e(),t._t("default"),t.loading?o("div",{staticClass:"page-loading"},[o("svg",{staticClass:"svg-loading",attrs:{viewBox:"0 0 80 80"}},[o("circle",{attrs:{cx:"40",cy:"40",r:"36"}})])]):t._e(),t.hasNext||t.isEmpty?t._e():[t.$slots.end?t._t("end"):t._e(),!t.$slots.end&&t.endText?o("div",{staticClass:"end-text"},[t._v("\n      "+t._s(t.endText)+"\n    ")]):t._e()]],2)}),[],!1,null,"2b1a346c",null);e.a=n.exports},"82a9":function(t,e,o){var i=o("fb20");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,o("85cb").default)("4759e880",i,!0,{sourceMap:!1,shadowMode:!1})},"9d55":function(t,e,o){(t.exports=o("690e")(!1)).push([t.i,'.zjapp .scroll-warp[data-v-2b1a346c]{flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.zjapp .scroll-warp-pulling[data-v-2b1a346c]{overflow:hidden}.zjapp .scroll-warp-complete[data-v-2b1a346c]:after{content:"";display:block;height:100px}.zjapp .scroll-warp-empty[data-v-2b1a346c]{display:flex;flex-direction:column}.zjapp .pull-refresh-warp[data-v-2b1a346c]{position:relative;height:0;overflow:hidden}.zjapp .pull-refresh[data-v-2b1a346c]{position:absolute;left:0;bottom:0;height:70px;width:100%;padding:6px;text-align:center}.zjapp .pull-refresh-date[data-v-2b1a346c]{margin-top:4px;height:16px;line-height:16px;font-size:12px;color:#bcbcbc}.zjapp .page-loading[data-v-2b1a346c]{padding:10px;text-align:center}.zjapp .end-text[data-v-2b1a346c]{color:#c8c8c8;background:#f4f4f4;position:relative;line-height:76px;height:76px;text-align:center}.zjapp .end-text[data-v-2b1a346c]:after,.zjapp .end-text[data-v-2b1a346c]:before{content:"";position:absolute;width:48px;height:1px;background:#e4e4e4;top:50%;margin-top:-1px}.zjapp .end-text[data-v-2b1a346c]:after{left:50%;transform:translateX(-92px)}.zjapp .end-text[data-v-2b1a346c]:before{right:50%;transform:translateX(90px)}.zjapp .end-slot[data-v-2b1a346c]{padding:30px;line-height:18px;text-align:center;color:#c8c8c8}',""])},a4e4:function(t,e,o){"use strict";(function(t){o("cc57");var i=o("e2a7"),a=o("774b"),n=o("07d2"),r=o("6bf2"),s=o.n(r),l=o("162a"),c=o("3122"),p=o("6144");e.a={name:"NcovDisinfectIndex",components:{Scroller:a.a,Item:n.a},data:function(){return{isLoading:!0,title:"...",errorType:"",list:[],projId:"",isReport:!1,isShowSelDate:!1,currentDate:new Date,dateType:"",dateRange:{},bidsection_name:"",sectionName:""}},computed:{projectSelected:function(){return this.$store.state.global.currentProject}},activated:function(){if(!this.$router.isBack){var t=this.$route.query,e=t.projId,o=t.sectionName,i=t.sectionId;this.bidsection_name=(p.a.getObject("ncov-index-section-default"+this.projectSelected.id,p.a.level.user)||{}).name;var a,n=!!e;this.isReport=n,this.projId=e,this.sectionId=i,this.sectionName=o,this.title=n?"防疫消杀明细":"防疫消杀",a=this.$route.query.dateType&&"yesterday"===this.$route.query.dateType?s()().subtract(1,"days").format("YYYY-MM-DD"):s()(new Date).format("YYYY-MM-DD"),this.dateRange={start:a||s()().format("YYYY-MM-DD"),end:a||s()().format("YYYY-MM-DD")},this.getListData()}},methods:{getListData:function(){var e=this;this.list=[],this.isLoading=!0,this.errorType="";var o={proj_id:this.projectSelected.id,bidsection_id:this.sectionId},a={proj_id:this.projId,bidsection_id:this.sectionId,start_date:this.dateRange.start,end_date:this.dateRange.end};l.a.request("/online/ncov-disinfection/get-disinfection-list",this.isReport?a:o).then((function(o){console.log({res:o}),t.each(o,(function(e){var o=JSON.parse(e.dis_image||"[]");e.dis_image=t.isEmpty(o)?"static/photo-empty.png":c.a.getThumbnailFromUrl(o[0].url)})),o=t.sortBy(o,(function(t){return-s()(t.dis_time).unix()})),e.list=o})).catch((function(t){e.list=[],e.errorType="error",i.a.alert(t)})).finally((function(){e.isLoading=!1}))},openDatePicker:function(t){this.dateType=t,this.currentDate=s()(this.dateRange[t]||new Date).toDate(),this.isShowSelDate=!0},selDate:function(t){this.isShowSelDate=!1;var e=this.dateType;this.dateRange[e]=s()(t).format("YYYY-MM-DD"),console.log(this.dateRange),this.getListData()},goDetail:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.log(t),this.$router.push({name:"NcovDisinfectDetail",query:{id:t.id,projId:t.proj_id,sectionId:t.bidsection_id,type:t.id?"detail":"add",isReport:this.isReport}})}}}}).call(this,o("391c"))},b225:function(t,e,o){"use strict";o("ef48")},d18d:function(t,e,o){"use strict";(function(t){o("2b45");var i,a=o("4360"),n=o("48f4"),r=o("162a"),s=o("e2a7"),l=o("a500"),c=o("6f9e"),p={};e.a={name:"Scroller",props:{buildingId:{type:String,default:""},hasNext:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},isSync:{type:Boolean,default:!0},endText:{type:String,default:""},memoryScrollTop:{type:Boolean,default:!0},keepScrollTop:{type:Boolean},hasPullDown:{type:Boolean,default:!0},onPullDown:{type:Function}},data:function(){return{pullDist:0,refreshing:!1,pulling:!1,loading:!1,scrollTop:0,isCurrKeyboard:!1,gapBottom:0}},computed:{allowPullDown:function(){return this.hasPullDown&&(!!this.$listeners.pullDown||!!this.onPullDown)},updateTime:function(){return a.a.state.global.businessDownloadTime},numberKeyboardCoverHeight:function(){return a.a.state.global.isNumberInputOpen?a.a.state.global.numberKeyboardHeight-this.gapBottom:0}},mounted:function(){var t=this;c.a.$on("numberKeyboardOpen",this.onNumberKeyboardOpen),this.$nextTick((function(){var e=t.$refs["scroll-warp"]&&t.$refs["scroll-warp"].getBoundingClientRect&&t.$refs["scroll-warp"].getBoundingClientRect();e&&(t.gapBottom=document.documentElement.clientHeight-e.bottom),t.$el&&t.$el.addEventListener("focus",(function(e){var o=e&&e.target,i=o&&o.tagName&&o.tagName.toLowerCase();if("input"===i||"textarea"===i){window.addEventListener("resize",(function e(){var i=o.getBoundingClientRect(),a=t.$el.getBoundingClientRect(),n=i.bottom-a.bottom;n>0&&t.scrollBy(n),window.removeEventListener("resize",e,!1)}),!1)}}),!0)}))},destroyed:function(){c.a.$off("numberKeyboardOpen",this.onNumberKeyboardOpen)},activated:function(){var t=this.keepScrollTop||this.$router.isBack&&this.memoryScrollTop;this.scrollTop&&t&&(this.$refs["scroll-warp"].scrollTop=this.scrollTop)},deactivated:function(){this.memoryScrollTop&&(this.scrollTop=this.$refs["scroll-warp"].scrollTop)},methods:{onScroll:function(t){var e=this,o=this.$refs["scroll-warp"].scrollTop,i=this.$refs["scroll-warp"].scrollHeight;if(o+this.$refs["scroll-warp"].clientHeight>=i-5&&!this.loading&&this.hasNext){this.loading=!0;var a=this.$listeners.loadNext();a&&a.then&&"function"==typeof a.then?a.then((function(){e.loading=!1})):this.loading=!1}this.$emit("scroll",t)},getTouchDiretion:function(t){if(!(p&&t&&t.touches&&t.touches[0]))return"";var e=t.touches[0].clientX,o=t.touches[0].clientY;return Math.abs(o-p.y)>Math.abs(e-p.x)&&Math.abs(o-p.y)>=3?o>p.y?"down":"up":""},onTouchstart:function(t){this.allowPullDown&&t.touches&&1===t.touches.length&&(p={x:t.touches[0].clientX,y:t.touches[0].clientY,scrollTop:this.$refs["scroll-warp"].scrollTop,pullDist:this.pullDist})},onTouchmove:function(t){if(this.allowPullDown&&t.touches&&1===t.touches.length){var e=this.$refs["scroll-warp"].scrollTop,o=t.touches[0].clientY,i=o-p.y,a=this.getTouchDiretion(t);"down"===a?!this.refreshing&&e<=0?(this.pulling=!0,this.pullDist=(i-p.scrollTop)/2,t.preventDefault()):this.pulling=!1:"up"===a?this.pullDist>0&&(this.pullDist=p.pullDist-(p.y-o),t.preventDefault()):this.pullDist=p.pullDist}},onTouchend:function(){var t=this;this.allowPullDown&&(p={},this.pulling=!1,this.pullDist>=70&&this.isSync?this.refreshing?this.makePullTo(70):this.makePullTo(70).then((function(){if(t.refreshing=!0,t.onPullDown){var e=t.onPullDown();e&&e.then&&"function"==typeof e?e.finally((function(){t.refreshing=!1,t.makePullTo(0)})):(t.refreshing=!1,t.makePullTo(0))}else t.dataSync().then((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")})).catch((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")}))})):(this.refreshing=!1,this.makePullTo(0)))},makePullTo:function(t){var e=this,o=this.pullDist,i=t,a=i-o,n=o;return o===i?Promise.resolve():new Promise((function(t){!function r(){window.requestAnimationFrame((function(){n+=a/6,e.pullDist=n,o<i&&n<i||o>i&&n>i?r():(e.pullDist=i,e.refreshing=!1,t())}))}()}))},dataSync:function(){var t,e=n.default.getCurrentModuleCode(),o=n.default.getCurrentRoute(),i=o.meta&&o.meta.isTodo;if(n.default.isModuleNeedBuilding(e)&&!i){if(!this.buildingId)return new Promise((function(t){setTimeout((function(){t()}),500)}));t=this.buildingId}return l.a.addTrack("公共-手动下拉刷新","",""),r.a.beginManualUpdate(),n.default.checkSync(t).then((function(t){return r.a.endManualUpdate(),t})).catch((function(t){$log.error("下拉刷新错误",t),t&&"Error: Network Error"===t.toString()?s.a.alert("当前网络无法同步数据"):s.a.alert(t),r.a.endManualUpdate()}))},getScrollHeight:function(){return this.$refs["scroll-warp"].offsetHeight},getScrollTop:function(){return this.$refs["scroll-warp"].scrollTop},setScrollTop:function(t){this.$refs["scroll-warp"].scrollTop=t},scrollBy:function(t){var e=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,a=this.getScrollTop(),n=a+t,r=Math.round(o/16.7),s=t/r,l=a,c=i=+new Date;return a===n?Promise.resolve():new Promise((function(t){!function o(){window.requestAnimationFrame((function(){c===i&&(l+=s,e.$refs["scroll-warp"].scrollTop=l,a<n&&l<n||a>n&&l>n?o():(e.$refs["scroll-warp"].scrollTop=n,t()))}))}()}))},scrollTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,o=this.getScrollTop(),i=t-o;return this.scrollBy(i,e)},scrollToEle:function(t){var e=t.keyboardHeight||232,o=(t=t.$el?t.$el:t).getBoundingClientRect(),i=this.$refs["scroll-warp"].getBoundingClientRect();if(o&&i){var n=document.documentElement.clientHeight-(a.a.state.global.isNumberInputOpen?e:0),r=i.bottom<n?i.bottom:n,s=i.top-o.top,l=o.bottom-r;s>0?this.scrollBy(-s-10):l>0&&this.scrollBy(l+10)}},isCurrent:function(e,o){var i=this;e.length&&t.each(e,(function(t){t._uid===o?i.isCurrKeyboard=!0:i.isCurrent(t.$children,o)}))},onNumberKeyboardOpen:function(t){this.isCurrKeyboard=!1,this.isCurrent(this.$children,t._uid),this.isCurrKeyboard&&this.scrollToEle(t)}}}}).call(this,o("391c"))},ef48:function(t,e,o){var i=o("9d55");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,o("85cb").default)("a1a65c0c",i,!0,{sourceMap:!1,shadowMode:!1})},f0e48:function(t,e,o){"use strict";o("82a9")},fb20:function(t,e,o){(t.exports=o("690e")(!1)).push([t.i,".zjapp .record-box[data-v-46c3de8b]{display:flex;padding:17px 15px;background:#fff}.zjapp .record-box .record-img[data-v-46c3de8b]{position:relative;flex:0 0 70px;width:70px;height:70px;background:no-repeat 50%;background-size:cover;background-color:#eee;margin:0 10px 0 0}.zjapp .record-box .record-content[data-v-46c3de8b]{flex:1;overflow:hidden}.zjapp .record-box .record-content .record-place[data-v-46c3de8b]{width:100%;line-height:22px;margin:0 0 5px 0;font-size:16px;color:#333;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.zjapp .record-box .record-content .record-remark[data-v-46c3de8b]{line-height:20px;color:#666;margin:0 0 10px 0}.zjapp .record-box .record-content .record-date[data-v-46c3de8b]{line-height:18px;font-size:12px;color:#999}.zjapp .bg-sub-theme[data-v-46c3de8b]{display:flex;align-items:center;height:44px;padding:0 15px;background:#f0f4ff}.zjapp .bg-sub-theme .item-label[data-v-46c3de8b]{flex:0 0 80px;font-weight:400;font-size:14px;color:#333}.zjapp .bg-sub-theme .item-con[data-v-46c3de8b]{flex:1;display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end}.zjapp .bg-sub-theme .item-con .report-date-item[data-v-46c3de8b]{flex:0 0 96px;height:28px;line-height:28px;background-color:#fff;border-radius:15px;color:#666;text-align:center}.zjapp .bg-sub-theme .item-con .report-date-split[data-v-46c3de8b]{display:block;margin:0 4px 0;font-size:12px}.zjapp .item-part-title[data-v-46c3de8b]{align-items:center}.zjapp .item-part-title .item-text[data-v-46c3de8b]{font-size:16px}.zjapp .icon-part[data-v-46c3de8b]{position:absolute;top:15px;left:0;width:4px;height:16px;background-color:#4275e8}",""])}}]);