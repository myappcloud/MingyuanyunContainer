(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-70ffd2a0","chunk-739f37c8"],{"2d6e":function(e,t,a){var i=a("7eb2");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,a("85cb").default)("53a2fbaa",i,!0,{sourceMap:!1,shadowMode:!1})},3336:function(e,t,a){(e.exports=a("690e")(!1)).push([e.i,".zjapp .plan-select[data-v-b9015800] >div,.zjapp .plan-select[data-v-b9015800] >i{pointer-events:none}.zjapp .item-templet-plan-list[data-v-b9015800]{display:flex;align-items:center;padding:24px 15px 19px;background-color:#fff;background-position:75px 100%!important}.zjapp .item-templet-plan-main[data-v-b9015800]{display:flex;flex:1}.zjapp .item-templet-plan-time[data-v-b9015800]{width:65px;border-left:2px solid #0bc666;padding-left:7px;color:#333}.zjapp .item-templet-plan-time-mormal[data-v-b9015800]{border-color:#ececec}.zjapp .item-templet-plan-con[data-v-b9015800]{flex:1}.zjapp .item-templet-plan-day[data-v-b9015800]{font-size:17px;line-height:17px}.zjapp .item-templet-plan-year[data-v-b9015800]{font-size:9px;line-height:9px;margin-top:7px;padding-left:1px}.zjapp .item-templet-plan-title[data-v-b9015800]{font-size:17px;line-height:17px;color:#333}.zjapp .item-templet-plan-detail[data-v-b9015800]{font-size:0;line-height:0;padding-top:10px}.zjapp .item-templet-plan-ele[data-v-b9015800]{margin-right:5px;margin-bottom:4px;max-width:80px;padding:0 7px;border:1px solid #ececec;line-height:15px;border-radius:8.5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.zjapp .item-templet-plan-ele[data-v-b9015800],.zjapp .item-templet-plan-exceed[data-v-b9015800]{display:inline-block;vertical-align:top;height:17px;font-size:11px;color:#999}.zjapp .item-templet-plan-exceed[data-v-b9015800]{line-height:17px}.zjapp .item-templet-plan-timeout[data-v-b9015800]{background-color:#796bfb}.zjapp .item-templet-plan-surplus[data-v-b9015800],.zjapp .item-templet-plan-timeout[data-v-b9015800]{display:inline-block;vertical-align:top;margin-right:5px;height:17px;padding:0 7px;line-height:17px;font-size:11px;color:#fff;border-radius:8.5px}.zjapp .item-templet-plan-surplus[data-v-b9015800]{background-color:#febd01}.zjapp .item-templet-plan-status[data-v-b9015800]{padding-left:10px;padding-bottom:5px}.zjapp .item-templet-plan-opare[data-v-b9015800]{display:inline-block;height:28px;line-height:26px;border:1px solid #ececec;padding:1px 10px 0 10px;color:#999;border-radius:14px}.zjapp .icon-qualified[data-v-b9015800]{font-size:9px;margin-right:7px}.zjapp .icon-clock[data-v-b9015800]{font-size:14px;margin-right:7px}",""])},"47df":function(e,t,a){var i=a("cc4c");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,a("85cb").default)("1ffcc628",i,!0,{sourceMap:!1,shadowMode:!1})},"65e9":function(e,t,a){"use strict";(function(e){a("5ab2"),a("6d57"),a("e10e");var i=a("28f8"),n=a("4360"),o=a("48f4"),s=a("162a"),l=a("f2d3"),r=a("6906"),c=a("a18c"),p=a("c745");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.a={name:"SynchronizeTipBar",props:{isTodo:{type:Boolean},useDownload:{type:Boolean,default:!0},enterDoCheck:{type:Boolean,default:!0},buildingId:{type:String,default:""},automaticUpdateCallback:{type:Function,default:null}},data:function(){return{currentModuleCode:"",oneUpdateData:!0}},computed:{projId:function(){return n.a.state.global.currentProject.id},waitUploadNum:function(){return n.a.state.global.waitUploadNum},hasTopProgress:function(){return n.a.state.global.hasTopProgress},hasChanged:function(){if(!this.useDownload)return!1;if(this.currentModuleCode){var e,t=o.default.isModuleNeedBuilding(this.currentModuleCode)&&!this.isTodo;return!(t&&!this.buildingId)&&(e=this.isTodo?n.a.state.global.todoChangedStatus||{}:n.a.state.global.businessChangedStatus||{},t?!!e[this.currentModuleCode]&&e[this.currentModuleCode][this.buildingId]:e[this.currentModuleCode])}return!1},show:function(){return(this.hasChanged||this.waitUploadNum)&&!this.hasTopProgress},oneDataSync:function(){return this.$store.state.app.oneDataSync}},watch:{hasChanged:function(e){var t=this;e&&this.$nextTick((function(){setTimeout((function(){var e=t.$refs["synchronize-tip-bar"];if(e&&e.style){e.style.display="none";e.offsetHeight;e.style.display="block"}}),100)}))},buildingId:function(e){this.currentModuleCode&&o.default.isModuleNeedBuilding(this.currentModuleCode)&&e&&(console.log("楼栋重新加载，是否再次自动加载数据：",this.oneUpdateData),this.oneUpdateData&&this.automaticLogic(),this.checkSync())},show:function(e){e?this.$emit("show"):this.$emit("hide")}},activated:function(){this.init()},methods:{init:function(){this.getCurrentModuleCode(),this.enterDoCheck&&!c.a.isBack&&this.checkSync(),this.automaticLogic()},automaticLogic:function(){var e=this;this.$router.isBack||(this.oneUpdateData=!0,p.a.getAutomaticLoadData().then((function(t){$log.log("是否要自动加载 ===> ",t&&e.oneDataSync&&"function"==typeof e.automaticUpdateCallback),t&&e.oneDataSync&&"function"==typeof e.automaticUpdateCallback&&e.dataSync().then((function(t){console.log("是否需要初始化页面 ====> ",Boolean(t)),t&&e.automaticUpdateCallback()}))})))},getCurrentModuleCode:function(){var e=o.default.getCurrentModuleCode(),t=this.isTodo?"todo":"";this.currentModuleCode=e||t},checkSync:function(){var t=this,a="checkDataUpdate",i=this.currentModuleCode,s=this.buildingId,c=n.a.state.global.isLeader?this.projId:"";return!o.default.isModuleNeedBuilding(i)||s||this.isTodo?(this.isTodo&&(a+="_todo"),i&&(a+="_".concat(i)),s&&(a+="_".concat(s)),r.a.execAfterInterval(120,a).then((function(){return t.isTodo?"todo"===i?l.a.getModuleList().then((function(t){var a=e.map(t,"code");return o.default.hasTodoChangedData("",a)})):o.default.hasTodoChangedData("",[i]):o.default.hasBusinessChangedData(c,[i],s)})).then((function(e){if(t.isTodo){var a=u({},n.a.state.global.todoChangedStatus);a[i]=e,n.a.commit("global/SET_TODO_CHANGED_STATUS",a)}else{var o=u({},n.a.state.global.businessChangedStatus);if(s){var l=o[i]?o[i]:{};l[s]=e,o[i]=l}else o[i]=e;n.a.commit("global/SET_BUSINESS_CHANGED_STATUS",o)}})).catch((function(e){return e&&!0===e.timeNotTo?($log.debug(e.msg),!1):$q.reject(e)}))):Promise.resolve()},dataSync:function(){var e=this.currentModuleCode,t=this.buildingId,a=o.default.isModuleNeedBuilding(e),i=a&&!t;return $log.log(["模块名：",e," 楼栋id：",t," 当前模块是否需要楼栋id：",a," 判断是否终止自动更新：",i]),i?Promise.resolve():(this.oneUpdateData=!1,s.a.beginManualUpdate(),o.default.checkSync(t).then((function(e){return s.a.endManualUpdate(),e})).catch((function(e){$log.error("自动更新错误",e),s.a.endManualUpdate()})))}}}}).call(this,a("391c"))},"67ae":function(e,t,a){"use strict";a("b6ff")},"774b":function(e,t,a){"use strict";a.r(t);var i=a("d18d").a,n=(a("b225"),a("17cc")),o=Object(n.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"scroll-warp",staticClass:"scroll-warp",class:{"scroll-warp-pulling":e.pulling,"scroll-warp-complete":!e.hasNext&&!e.isEmpty,"scroll-warp-empty":e.isEmpty},style:{"padding-bottom":e.numberKeyboardCoverHeight+"px"},on:{scroll:e.onScroll,touchstart:e.onTouchstart,touchmove:e.onTouchmove,touchend:e.onTouchend}},[e.allowPullDown?a("div",{staticClass:"pull-refresh-warp",style:{height:e.pullDist+"px"}},[a("div",{staticClass:"pull-refresh"},[a("div",{staticClass:"animation-refresher",class:{refreshing:e.refreshing}}),e.updateTime?a("p",{staticClass:"pull-refresh-date"},[e._v("最后成功同步："+e._s(e.updateTime))]):e._e()])]):e._e(),e._t("default"),e.loading?a("div",{staticClass:"page-loading"},[a("svg",{staticClass:"svg-loading",attrs:{viewBox:"0 0 80 80"}},[a("circle",{attrs:{cx:"40",cy:"40",r:"36"}})])]):e._e(),e.hasNext||e.isEmpty?e._e():[e.$slots.end?e._t("end"):e._e(),!e.$slots.end&&e.endText?a("div",{staticClass:"end-text"},[e._v("\n      "+e._s(e.endText)+"\n    ")]):e._e()]],2)}),[],!1,null,"2b1a346c",null);t.default=o.exports},"7eb2":function(e,t,a){(e.exports=a("690e")(!1)).push([e.i,".zjapp .synchronize-tip-bar[data-v-66826030]{height:30px;padding:5px 15px;line-height:20px;text-align:center;background-color:#ffe6e6;color:#ff6060;font-size:14px}.zjapp .synchronize-tip-bar .icon-caution[data-v-66826030]{line-height:20px;margin-right:5px}@media screen and (-webkit-min-device-pixel-ratio:1){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 100%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:1.5){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 66.6667%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:2){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 50%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:2.625){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 38.0952%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:3){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 33.3333%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:4){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 25%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}",""])},"9d55":function(e,t,a){(e.exports=a("690e")(!1)).push([e.i,'.zjapp .scroll-warp[data-v-2b1a346c]{flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.zjapp .scroll-warp-pulling[data-v-2b1a346c]{overflow:hidden}.zjapp .scroll-warp-complete[data-v-2b1a346c]:after{content:"";display:block;height:100px}.zjapp .scroll-warp-empty[data-v-2b1a346c]{display:flex;flex-direction:column}.zjapp .pull-refresh-warp[data-v-2b1a346c]{position:relative;height:0;overflow:hidden}.zjapp .pull-refresh[data-v-2b1a346c]{position:absolute;left:0;bottom:0;height:70px;width:100%;padding:6px;text-align:center}.zjapp .pull-refresh-date[data-v-2b1a346c]{margin-top:4px;height:16px;line-height:16px;font-size:12px;color:#bcbcbc}.zjapp .page-loading[data-v-2b1a346c]{padding:10px;text-align:center}.zjapp .end-text[data-v-2b1a346c]{color:#c8c8c8;background:#f4f4f4;position:relative;line-height:76px;height:76px;text-align:center}.zjapp .end-text[data-v-2b1a346c]:after,.zjapp .end-text[data-v-2b1a346c]:before{content:"";position:absolute;width:48px;height:1px;background:#e4e4e4;top:50%;margin-top:-1px}.zjapp .end-text[data-v-2b1a346c]:after{left:50%;transform:translateX(-92px)}.zjapp .end-text[data-v-2b1a346c]:before{right:50%;transform:translateX(90px)}.zjapp .end-slot[data-v-2b1a346c]{padding:30px;line-height:18px;text-align:center;color:#c8c8c8}',""])},a124:function(e,t,a){"use strict";(function(e){a("e697");var i=a("07d2"),n=a("f7ab"),o=a("774b"),s=a("d152"),l=a("f97c"),r=a("c130"),c=a("6144"),p=a("bc69");t.a={name:"TempletPlan",components:{item:i.default,SynchronizeTipBar:n.a,Scroller:o.default},data:function(){return{isPlanLoading:!0,isTempLoading:!0,searchKey:"",projId:"",planList:[],planSelected:[],templetList:[]}},computed:{isPlanSelectOpen:function(){return s.a.show},hasPlanSelected:function(){return!e.isEmpty(this.planSelected)},isAttentiveMode:function(){return this.$store.state.global.allGrayRelease.UsingTempletPlanNewStatus}},activated:function(){this.projId=l.a.getDefaultProject().id,this.init()},methods:{init:function(){var e=this;this.getPlanList().then((function(){return e.setPlanSelected()})).then((function(){e.getTempletList()}))},search:function(e){console.log("开始搜索",e),this.searchKey=e,this.getTempletList()},getPlanList:function(){var e=this;return this.isPlanLoading=!0,r.a.getTempletPlanList(this.projId).then((function(t){e.planList=t,e.isPlanLoading=!1}))},setPlanSelected:function(t){var a,i=c.a.getUserObject(p.a.LAST_TEMPLET_PLAN_ID)||{},n=i[this.projId],o="";a=(o=e.isEmpty(t)?e.isObject(n)?n.id||"":n:t)&&e.find(this.planList,{id:o}),(e.isEmpty(o)||e.isEmpty(a))&&(a=this.planList[0]||{}),this.planSelected=a,i[this.projId]=a.id,c.a.saveUserObject(p.a.LAST_TEMPLET_PLAN_ID,i)},getTempletList:function(){var t=this;return this.isTempLoading=!0,e.isEmpty(this.planSelected)?(this.templetList=[],void(this.isTempLoading=!1)):r.a.getTempletList(this.planSelected.id,this.searchKey).then((function(e){t.templetList=e,t.isTempLoading=!1})).catch((function(e){t.isTempLoading=!1,$log.error(e)}))},selectPlan:function(e){var t=this;s.a.show?s.a.closePopup():s.a.openPopup({options:this.planList,selected:[this.planSelected],stage:1,el:e.target,callback:function(e){var a=e[0]||{};t.setPlanSelected(a.id),t.getTempletList()}})},gotoDetail:function(e){this.$router.push({name:"TempletPlanDetail",params:{id:e.id}})}}}}).call(this,a("391c"))},ad46:function(e,t,a){"use strict";(function(e){a("f548"),a("e697"),a("cc57"),a("9dd9");var i,n=a("07d2"),o=a("9eea"),s=a("6f9e"),l=a("e89f"),r=[],c=[],p=[],d=!0,u=null,h=["没有标段","没有楼栋","没有单元","没有楼层"],f=["","list bg-gray6","list bg-gray5","list bg-gray4"];t.a={name:"DropDownSelectDialog",components:{Item:n.default,appSearchBar:o.default},mixins:[l.a],data:function(){return{show:!1,showList:!1,isOpening:!1,isClosing:!1,isSearching:!1,contentTop:64,listHeight:510,target:"",selectedSet:[],stage:1,layoutMap:[],keepStage:[],componentUid:"",showNote:!0,hasSearch:!1,searchTimer:null,keyword:""}},watch:{show:function(e){var t=this;e&&this.$nextTick((function(){t.showList=!0}))},showList:function(t){var a=this;t&&this.$nextTick((function(){a.$refs["list-wrap"]&&e.each(a.$refs["list-wrap"].querySelectorAll(".selected")||[],(function(e){setTimeout((function(){e.scrollIntoViewIfNeeded(!0)}),400)}))}))},keyword:function(e){var t=this;clearTimeout(this.searchTimer),this.searchTimer=setTimeout((function(){t.initSelectedSet(r,c)}),100)}},created:function(){s.a.$on("routerBeforeEach",this.closePopup),s.a.$on("pageContentClick",this.onClickOther)},destroyed:function(){s.a.$off("routerBeforeEach",this.closePopup),s.a.$off("pageContentClick",this.onClickOther)},methods:{openPopup:function(t){var a=this;if(this.show)return t.componentUid===this.componentUid?void this.closePopup():void this.closePopup().then((function(){a.openPopup(t)}));this.stage=t.stage,this.componentUid=t.componentUid||"";var n=document.querySelector(".layout-main .layout-header");this.contentTop=n.offsetHeight;var o=t.el&&t.el.$el?t.el.$el:t.el;if(o){var s=o.getBoundingClientRect();this.contentTop=s.bottom}this.target=o,this.listHeight=e.minBy([window.innerHeight-this.contentTop-50,510]),r=t.options,c=e.clone(t.selected),p=t.optionsMap||[],d=!1!==t.needFullSelecte||t.needFullSelecte,u=t.minSelectStage||this.stage,i=t.callback,this.showNote=t.showNote,this.layoutMap=[];for(var l=0;l<t.stage;l++)this.layoutMap.push({level:l,bgColor:t.hasBgColor?f[l]:"",emptyText:t.emptyText&&t.emptyText[l]?t.emptyText[l]:h[l],keep:!!e.isEmpty(t.keepStage)||!!t.keepStage[l]});this.hasSearch=!!t.hasSearch,this.initSelectedSet(t.options,t.selected),this.show=!0,this.$emit("open")},closePopup:function(){var e=this;if(!this.isOpening)return this.$refs["app-search-bar"]&&this.$refs["app-search-bar"].cancelSearch(),this.showList=!1,this.$emit("close"),new Promise((function(t){e.$on("afterClosePopup",t)}))},afterClose:function(){this.show=!1,this.keyword="",this.isClosing=!1,this.$emit("afterClosePopup")},onClickOther:function(e){e&&e.target&&e.target!==this.target&&this.show&&this.closePopup()},getLevelOptionsKey:function(e){return p&&p[e]&&p[e].key?p[e].key:"children"},initSelectedSet:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.selectedSet=[],e.each(i||[],(function(i,n){var o=t.getLevelOptionsKey(n);if(i&&!(n>t.stage-1)){if(!t.selectedSet[n]){var s;s=n?t.selectedSet[n-1].selected&&t.selectedSet[n-1].selected[o]||[]:a;var l=n||e.isEmpty(t.keyword)?s:e.filter(s,(function(e){return new RegExp(t.keyword,"gm").test(e.name)}));t.selectedSet[n]={selected:{},options:l}}var r=t.selectedSet[n].options,c=e.find(r,{id:i.id});c&&(t.selectedSet[n].selected=c)}})),e.isEmpty(this.selectedSet)&&(this.selectedSet=[{selected:{},options:a}])},showName:function(e){var t=e;return t=(t=t.replace(new RegExp("<","gm"),"&lt;")).replace(new RegExp(">","gm"),"&gt;")},highLightKeyword:function(e){if(this.keyword){var t="";return t=e.replace(new RegExp(this.keyword,"gm"),"-----hightLightTagL-----"+this.keyword+"-----hightLightTagR-----"),t=(t=(t=this.showName(t)).replace(/-----hightLightTagL-----/gm,'<span class="color-blue">')).replace(/-----hightLightTagR-----/gm,"</span>")}return this.showName(e)},getResult:function(){var t=this,a=[];return e.each(this.selectedSet,(function(i,n){var o=e.extend({},i.selected);delete o[t.getLevelOptionsKey(n+1)],e.isEmpty(o)||a.push(o)})),a},select:function(t,a){var n=this,o=this.getLevelOptionsKey(a+1),s=e.isEmpty(t[o]),l=a>=this.stage-1||a>=u-1&&s||!d&&s;this.selectedSet.splice(a+1),this.selectedSet[a].selected=t,c.splice(a),c.push(t),this.$refs["app-search-bar"]&&this.$refs["app-search-bar"].saveHistory(),l?setTimeout((function(){i&&i(n.getResult()),n.closePopup()}),100):this.selectedSet.push({selected:{},options:t[o]})},onSearchTypeChange:function(e){this.isSearching=e}}}}).call(this,a("391c"))},b225:function(e,t,a){"use strict";a("ef48")},b691:function(e,t,a){"use strict";a.r(t);var i=a("a124").a,n=(a("67ae"),a("17cc")),o=Object(n.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page-search-content",{attrs:{title:"样板管理",placeholder:"请输入样板名称"},on:{search:e.search}},[a("synchronize-tip-bar",{attrs:{"automatic-update-callback":e.init}}),a("item",{staticClass:"bg-sub-theme plan-select",attrs:{text:e.isPlanLoading?"...":e.hasPlanSelected?e.planSelected.name:"暂无与你相关的样板计划",border:"bottom","icon-right":e.hasPlanSelected?e.isPlanSelectOpen?"arrow-up":"arrow-down":""},on:{click:e.selectPlan}}),a("scroller",{attrs:{"is-empty":e.isTempLoading||!e.templetList||!e.templetList.length},on:{pullDown:e.init}},[e.templetList&&e.templetList.length?e._l(e.templetList,(function(t,i){return a("div",{directives:[{name:"track",rawName:"v-track",value:"样板管理-列表页-进入单个样板详情",expression:"'样板管理-列表页-进入单个样板详情'"}],key:i,staticClass:"item-templet-plan-list border-bottom",on:{click:function(a){e.gotoDetail(t)}}},[a("div",{staticClass:"item-templet-plan-main"},[a("div",{staticClass:"item-templet-plan-time",class:{"item-templet-plan-time-mormal":"已验收"!==t.status}},[t.deadline?[a("p",{staticClass:"item-templet-plan-day"},[e._v(e._s(e._f("formatDate")(t.deadline,"MM-DD")))]),a("p",{staticClass:"item-templet-plan-year"},[e._v(e._s(e._f("formatDate")(t.deadline,"YYYY")))])]:[a("p",{staticClass:"item-templet-plan-day"},[e._v("未设")]),a("p",{staticClass:"item-templet-plan-year"},[e._v("计划时间")])]],2),a("div",{staticClass:"item-templet-plan-con"},[a("p",{staticClass:"item-templet-plan-title"},[e._v(e._s(t.name))]),a("div",{staticClass:"item-templet-plan-detail"},[a("span",{staticClass:"item-templet-plan-ele"},[e._v(e._s(t.type))]),a("span",{staticClass:"item-templet-plan-ele"},[e._v(e._s(t.in_charge_by_name))]),"已验收"===t.status?[t.overday?a("span",{staticClass:"item-templet-plan-exceed"},[e._v("\n                  "+e._s(t.overday)+"\n                ")]):e._e()]:[t.overday?a("span",{staticClass:"item-templet-plan-timeout"},[e._v("\n                  "+e._s(t.overday)+"\n                ")]):e._e(),t.leftday?a("span",{staticClass:"item-templet-plan-surplus"},[e._v("\n                  "+e._s(t.leftday)+"\n                ")]):e._e()]],2)])]),e.isAttentiveMode?[t.isInChargeBy?["已验收"===t.status?[t.noReviewNum>0?a("div",{staticClass:"item-templet-plan-status color-orange"},[a("icon",{attrs:{name:"clock"}}),e._v("验收中\n              ")],1):a("div",{staticClass:"item-templet-plan-status color-green"},[a("icon",{staticClass:"icon-qualified"}),e._v("已验收\n              ")],1)]:[a("div",{staticClass:"item-templet-plan-status"},[a("span",{staticClass:"item-templet-plan-opare"},[e._v("去报验")])])]]:e._e(),!t.isInChargeBy&&t.isReviewer?[t.noReviewNum>0?[t.isReviewComplete?a("div",{staticClass:"item-templet-plan-status color-text"},[a("icon",{staticClass:"icon-qualified"}),e._v("已点评\n              ")],1):a("div",{staticClass:"item-templet-plan-status"},[a("span",{staticClass:"item-templet-plan-opare"},[e._v("去点评")])])]:["已验收"===t.status?a("div",{staticClass:"item-templet-plan-status color-green"},[a("icon",{staticClass:"icon-qualified"}),e._v("已验收\n              ")],1):a("div",{staticClass:"item-templet-plan-status color-text"},[a("icon",{staticClass:"icon-qualified"}),e._v("已点评\n              ")],1)]]:e._e()]:["已验收"===t.status?a("div",{staticClass:"item-templet-plan-status color-green"},[a("icon",{staticClass:"icon-qualified"}),e._v("已验收\n          ")],1):[t.isInChargeBy?a("div",{staticClass:"item-templet-plan-status"},[a("span",{staticClass:"item-templet-plan-opare"},[e._v("去验收")])]):e._e(),!t.isInChargeBy&&t.isReviewer&&t.isReviewComplete?a("div",{staticClass:"item-templet-plan-status color-text"},[a("icon",{staticClass:"icon-qualified"}),a("span",[e._v("已点评")])],1):e._e(),t.isInChargeBy||!t.isReviewer||t.isReviewComplete?e._e():a("div",{staticClass:"item-templet-plan-status"},[a("span",{staticClass:"item-templet-plan-opare"},[e._v("去点评")])])]]],2)})):e._e(),a("loading-status",{attrs:{"is-loading":e.isTempLoading,"is-empty":!e.templetList||!e.templetList.length,type:e.searchKey?"search":"common","empty-text":e.searchKey?"未搜索到相关内容":"暂无与你相关的样板计划"}})],2)],1)}),[],!1,null,"b9015800",null);t.default=o.exports},b6ff:function(e,t,a){var i=a("3336");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,a("85cb").default)("c18205a8",i,!0,{sourceMap:!1,shadowMode:!1})},cc4c:function(e,t,a){(e.exports=a("690e")(!1)).push([e.i,".zjapp .content[data-v-1fa2658d]{position:fixed;width:100%;bottom:0;background-color:rgba(0,0,0,.4);overflow:hidden}.zjapp .box[data-v-1fa2658d]{flex-direction:column}.zjapp .box[data-v-1fa2658d],.zjapp .list-wrap[data-v-1fa2658d]{display:flex;background-color:#fff}.zjapp .list-wrap[data-v-1fa2658d]{flex-direction:row;align-items:flex-start;flex:1;overflow:hidden}.zjapp .list[data-v-1fa2658d]{padding:0 10px}.zjapp .list[data-v-1fa2658d],.zjapp .list-single[data-v-1fa2658d]{flex:1;overflow:auto;height:100%;scroll-behavior:smooth}.zjapp .item-dropdown[data-v-1fa2658d]{padding:6px 0;background-color:transparent}.zjapp .item-dropdown[data-v-1fa2658d] .item-text{font-size:14px}.zjapp .item-dropdown.selected[data-v-1fa2658d]{color:#4275e8;padding-bottom:5px;border-bottom:1px solid #4275e8}.zjapp .item-dropdown.selected[data-v-1fa2658d] .item-text{color:#4275e8}.zjapp .empty-tips[data-v-1fa2658d]{padding:13px 0;line-height:20px;color:#b2b2b2;font-size:14px}.zjapp .select-note[data-v-1fa2658d]{line-height:16px;font-size:12px;color:#8c8c8c}[data-v-1fa2658d] .icon-qualified{width:30px;height:30px;line-height:30px;text-align:center;color:#4275e8}",""])},d152:function(e,t,a){"use strict";var i=a("329b"),n=a("ad46").a,o=(a("fc72"),a("17cc")),s=Object(o.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.show?a("div",{staticClass:"content",style:{top:e.contentTop+"px"},on:{click:function(t){return t.target!==t.currentTarget?null:e.closePopup(t)}}},[a("transition",{attrs:{name:"slide-down"},on:{enter:function(t){e.isOpening=!0},"after-enter":function(t){e.isOpening=!1},leave:function(t){e.isClosing=!0},"after-leave":e.afterClose}},[e.showList?a("div",{staticClass:"box",style:{height:e.listHeight+"px"}},[e.hasSearch?a("app-search-bar",{ref:"app-search-bar",attrs:{placeholder:"输入项目名称搜索","simple-mode":"","history-key":"drop-down-search-history-key"},on:{changeSearchStatus:e.onSearchTypeChange},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}):e._e(),!e.isSearching||e.keyword&&e.selectedSet[0]&&e.selectedSet[0].options.length?a("div",{ref:"list-wrap",staticClass:"list-wrap"},[1===e.stage?e._l(e.layoutMap,(function(t,i){var n;return a("div",{key:"map"+i,staticClass:"list-single",class:(n={},n[t.bgColor]=!0,n),style:{height:e.listHeight-(e.hasSearch?44:0)+"px"}},e._l(e.selectedSet[t.level]&&e.selectedSet[t.level].options||[],(function(n,o){return a("item",{key:o,class:{selected:e.selectedSet[t.level].selected&&e.selectedSet[t.level].selected.id===n.id},attrs:{border:"bottom"},on:{click:function(a){e.select(n,t.level)}}},[a("div",{staticClass:"item-text",class:{"color-theme":n.note&&e.selectedSet[t.level].selected&&e.selectedSet[t.level].selected.id===n.id},domProps:{innerHTML:e._s(i?e.showName(n.nameShow||n.name):e.highLightKeyword(n.nameShow||n.name))}}),!n.note&&e.selectedSet[t.level].selected&&e.selectedSet[t.level].selected.id===n.id?a("icon",{attrs:{name:"qualified"}}):e._e(),n.note?a("div",{staticClass:"item-font color-gray2 f14"},[e._v(e._s(n.note))]):e._e()],1)})))})):[e._l(e.layoutMap,(function(t,i){var n;return[t.keep||e.selectedSet[t.level]&&e.selectedSet[t.level].options&&e.selectedSet[t.level].options.length?a("div",{key:"map"+i,staticClass:"list",class:(n={},n[t.bgColor]=!0,n),style:{height:e.listHeight-(e.hasSearch?44:0)+"px"}},[e._l(e.selectedSet[t.level]&&e.selectedSet[t.level].options||[],(function(n,o){return a("item",{key:o,staticClass:"item-dropdown",class:{selected:e.selectedSet[t.level].selected&&e.selectedSet[t.level].selected.id===n.id},on:{click:function(a){e.select(n,t.level)}}},[a("div",{staticClass:"item-text"},[a("p",{domProps:{innerHTML:e._s(i?e.showName(n.nameShow||n.name):e.highLightKeyword(n.nameShow||n.name))}}),a("p",{staticClass:"select-note"},[e._v(e._s(n.note))])])])})),e.selectedSet[t.level]&&e.selectedSet[t.level].options&&e.selectedSet[t.level].options.length?e._e():a("div",{staticClass:"empty-tips"},[e._v("\n                "+e._s(e.selectedSet[t.level-1]&&e.selectedSet[t.level-1].selected&&e.selectedSet[t.level-1].selected.id?t.emptyText:"请选择")+"\n              ")])],2):e._e()]}))]],2):e._e(),!e.isSearching||!e.keyword||e.selectedSet[0]&&e.selectedSet[0].options.length?e._e():a("loading-status",{attrs:{"is-empty":!0,type:"search","empty-text":"未搜索到相关内容"}})],1):e._e()])],1):e._e()}),[],!1,null,"1fa2658d",null).exports,l=!1;l||(l=new(i.default.extend(s))({el:document.createElement("div")}),document.body.appendChild(l.$el));t.a=l},d18d:function(e,t,a){"use strict";(function(e){a("2b45");var i,n=a("4360"),o=a("48f4"),s=a("162a"),l=a("e2a7"),r=a("a500"),c=a("6f9e"),p={};t.a={name:"Scroller",props:{buildingId:{type:String,default:""},hasNext:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},isSync:{type:Boolean,default:!0},endText:{type:String,default:""},memoryScrollTop:{type:Boolean,default:!0},keepScrollTop:{type:Boolean},hasPullDown:{type:Boolean,default:!0},onPullDown:{type:Function}},data:function(){return{pullDist:0,refreshing:!1,pulling:!1,loading:!1,scrollTop:0,isCurrKeyboard:!1,gapBottom:0}},computed:{allowPullDown:function(){return this.hasPullDown&&(!!this.$listeners.pullDown||!!this.onPullDown)},updateTime:function(){return n.a.state.global.businessDownloadTime},numberKeyboardCoverHeight:function(){return n.a.state.global.isNumberInputOpen?n.a.state.global.numberKeyboardHeight-this.gapBottom:0}},mounted:function(){var e=this;c.a.$on("numberKeyboardOpen",this.onNumberKeyboardOpen),this.$nextTick((function(){var t=e.$refs["scroll-warp"]&&e.$refs["scroll-warp"].getBoundingClientRect&&e.$refs["scroll-warp"].getBoundingClientRect();t&&(e.gapBottom=document.documentElement.clientHeight-t.bottom),e.$el&&e.$el.addEventListener("focus",(function(t){var a=t&&t.target,i=a&&a.tagName&&a.tagName.toLowerCase();if("input"===i||"textarea"===i){window.addEventListener("resize",(function t(){var i=a.getBoundingClientRect(),n=e.$el.getBoundingClientRect(),o=i.bottom-n.bottom;o>0&&e.scrollBy(o),window.removeEventListener("resize",t,!1)}),!1)}}),!0)}))},destroyed:function(){c.a.$off("numberKeyboardOpen",this.onNumberKeyboardOpen)},activated:function(){var e=this.keepScrollTop||this.$router.isBack&&this.memoryScrollTop;this.scrollTop&&e&&(this.$refs["scroll-warp"].scrollTop=this.scrollTop)},deactivated:function(){this.memoryScrollTop&&(this.scrollTop=this.$refs["scroll-warp"].scrollTop)},methods:{onScroll:function(e){var t=this,a=this.$refs["scroll-warp"].scrollTop,i=this.$refs["scroll-warp"].scrollHeight;if(a+this.$refs["scroll-warp"].clientHeight>=i-5&&!this.loading&&this.hasNext){this.loading=!0;var n=this.$listeners.loadNext();n&&n.then&&"function"==typeof n.then?n.then((function(){t.loading=!1})):this.loading=!1}this.$emit("scroll",e)},getTouchDiretion:function(e){if(!(p&&e&&e.touches&&e.touches[0]))return"";var t=e.touches[0].clientX,a=e.touches[0].clientY;return Math.abs(a-p.y)>Math.abs(t-p.x)&&Math.abs(a-p.y)>=3?a>p.y?"down":"up":""},onTouchstart:function(e){this.allowPullDown&&e.touches&&1===e.touches.length&&(p={x:e.touches[0].clientX,y:e.touches[0].clientY,scrollTop:this.$refs["scroll-warp"].scrollTop,pullDist:this.pullDist})},onTouchmove:function(e){if(this.allowPullDown&&e.touches&&1===e.touches.length){var t=this.$refs["scroll-warp"].scrollTop,a=e.touches[0].clientY,i=a-p.y,n=this.getTouchDiretion(e);"down"===n?!this.refreshing&&t<=0?(this.pulling=!0,this.pullDist=(i-p.scrollTop)/2,e.preventDefault()):this.pulling=!1:"up"===n?this.pullDist>0&&(this.pullDist=p.pullDist-(p.y-a),e.preventDefault()):this.pullDist=p.pullDist}},onTouchend:function(){var e=this;this.allowPullDown&&(p={},this.pulling=!1,this.pullDist>=70&&this.isSync?this.refreshing?this.makePullTo(70):this.makePullTo(70).then((function(){if(e.refreshing=!0,e.onPullDown){var t=e.onPullDown();t&&t.then&&"function"==typeof t?t.finally((function(){e.refreshing=!1,e.makePullTo(0)})):(e.refreshing=!1,e.makePullTo(0))}else e.dataSync().then((function(){e.refreshing=!1,e.makePullTo(0),e.$emit("pullDown")})).catch((function(){e.refreshing=!1,e.makePullTo(0),e.$emit("pullDown")}))})):(this.refreshing=!1,this.makePullTo(0)))},makePullTo:function(e){var t=this,a=this.pullDist,i=e,n=i-a,o=a;return a===i?Promise.resolve():new Promise((function(e){!function s(){window.requestAnimationFrame((function(){o+=n/6,t.pullDist=o,a<i&&o<i||a>i&&o>i?s():(t.pullDist=i,t.refreshing=!1,e())}))}()}))},dataSync:function(){var e,t=o.default.getCurrentModuleCode(),a=o.default.getCurrentRoute(),i=a.meta&&a.meta.isTodo;if(o.default.isModuleNeedBuilding(t)&&!i){if(!this.buildingId)return new Promise((function(e){setTimeout((function(){e()}),500)}));e=this.buildingId}return r.a.addTrack("公共-手动下拉刷新","",""),s.a.beginManualUpdate(),o.default.checkSync(e).then((function(e){return s.a.endManualUpdate(),e})).catch((function(e){$log.error("下拉刷新错误",e),e&&"Error: Network Error"===e.toString()?l.a.alert("当前网络无法同步数据"):l.a.alert(e),s.a.endManualUpdate()}))},getScrollHeight:function(){return this.$refs["scroll-warp"].offsetHeight},getScrollTop:function(){return this.$refs["scroll-warp"].scrollTop},setScrollTop:function(e){this.$refs["scroll-warp"].scrollTop=e},scrollBy:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=this.getScrollTop(),o=n+e,s=Math.round(a/16.7),l=e/s,r=n,c=i=+new Date;return n===o?Promise.resolve():new Promise((function(e){!function a(){window.requestAnimationFrame((function(){c===i&&(r+=l,t.$refs["scroll-warp"].scrollTop=r,n<o&&r<o||n>o&&r>o?a():(t.$refs["scroll-warp"].scrollTop=o,e()))}))}()}))},scrollTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,a=this.getScrollTop(),i=e-a;return this.scrollBy(i,t)},scrollToEle:function(e){var t=e.keyboardHeight||232,a=(e=e.$el?e.$el:e).getBoundingClientRect(),i=this.$refs["scroll-warp"].getBoundingClientRect();if(a&&i){var o=document.documentElement.clientHeight-(n.a.state.global.isNumberInputOpen?t:0),s=i.bottom<o?i.bottom:o,l=i.top-a.top,r=a.bottom-s;l>0?this.scrollBy(-l-10):r>0&&this.scrollBy(r+10)}},isCurrent:function(t,a){var i=this;t.length&&e.each(t,(function(e){e._uid===a?i.isCurrKeyboard=!0:i.isCurrent(e.$children,a)}))},onNumberKeyboardOpen:function(e){this.isCurrKeyboard=!1,this.isCurrent(this.$children,e._uid),this.isCurrKeyboard&&this.scrollToEle(e)}}}}).call(this,a("391c"))},e89f:function(e,t,a){"use strict";var i=a("04f3"),n=a("cf09"),o=a("4360"),s=0;t.a={name:"PopupMixin",data:function(){return{backButtonEvent:null}},watch:{show:function(e){var t=this;if(e){if(this.$nextTick((function(){t.$el&&t.$el.style&&(t.$el.style.zIndex=++n.a.zIndex,s++,o.a.commit("app/SET_HAS_POPUP",!!s))})),!this.backButtonEvent){var a=this.close||this.closePopup;this.backButtonEvent=Object(i.a)(a)}}else--s<0&&(s=0),o.a.commit("app/SET_HAS_POPUP",!!s),this.backButtonEvent&&(Object(i.c)(this.backButtonEvent),this.backButtonEvent=null)}},methods:{}}},ef48:function(e,t,a){var i=a("9d55");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,a("85cb").default)("a1a65c0c",i,!0,{sourceMap:!1,shadowMode:!1})},f7ab:function(e,t,a){"use strict";var i=a("65e9").a,n=(a("f7d4"),a("17cc")),o=Object(n.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.show?a("div",{ref:"synchronize-tip-bar",staticClass:"synchronize-tip-bar"},[a("icon",{attrs:{name:"caution"}}),e.waitUploadNum?a("span",[e._v("您有"+e._s(e.waitUploadNum)+"条数据待上传")]):e._e(),!e.waitUploadNum&&e.hasChanged?a("span",[e._v("有新数据")]):e._e(),e._v("\n  ，下拉可"+e._s(e.waitUploadNum?"上传":"刷新")+"\n")],1):e._e()}),[],!1,null,"66826030",null);t.a=o.exports},f7d4:function(e,t,a){"use strict";a("2d6e")},fc72:function(e,t,a){"use strict";a("47df")}}]);