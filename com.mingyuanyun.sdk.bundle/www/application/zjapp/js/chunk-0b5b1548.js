(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-0b5b1548"],{"002b":function(e,t,i){var a=i("7599");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,i("85cb").default)("036d6bac",a,!0,{sourceMap:!1,shadowMode:!1})},"12b3":function(e,t,i){"use strict";i.r(t);var a=i("cbc7").a,n=(i("8b19"),i("17cc")),l=Object(n.a)(a,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("page-search-content",{attrs:{title:"样板管理",placeholder:"请输入样板名称"},on:{search:e.search}},[i("item",{staticClass:"bg-sub-theme plan-select",attrs:{text:e.isPlanLoading?"...":e.hasPlanSelected?e.planSelected.name:"当前项目暂无样板计划",border:"bottom","icon-right":e.hasPlanSelected?e.isPlanSelectOpen?"arrow-up":"arrow-down":""},on:{click:e.selectPlan}}),i("scroller",{attrs:{"is-empty":e.isTempLoading||!e.templetList||!e.templetList.length}},[e.templetList&&e.templetList.length?e._l(e.templetList,(function(t,a){return i("div",{directives:[{name:"track",rawName:"v-track",value:"样板管理-列表页-进入单个样板详情",expression:"'样板管理-列表页-进入单个样板详情'"}],key:a,staticClass:"item-templet-plan-list border-bottom",on:{click:function(i){e.gotoDetail(t)}}},[i("div",{staticClass:"item-templet-plan-main"},[i("div",{staticClass:"item-templet-plan-time",class:{"item-templet-plan-time-mormal":"未验收"===t.status,"item-templet-plan-time-orange":"验收中"===t.status}},["0000-00-00 00:00:00"!==t.deadline&&t.deadline?[i("p",{staticClass:"item-templet-plan-day"},[e._v(e._s(e._f("formatDate")(t.deadline,"MM-DD")))]),i("p",{staticClass:"item-templet-plan-year"},[e._v(e._s(e._f("formatDate")(t.deadline,"YYYY")))])]:[i("p",{staticClass:"item-templet-plan-day"},[e._v("未设")]),i("p",{staticClass:"item-templet-plan-year"},[e._v("计划时间")])]],2),i("div",{staticClass:"item-templet-plan-con"},[i("p",{staticClass:"item-templet-plan-title"},[e._v(e._s(t.templet_name))]),i("div",{staticClass:"item-templet-plan-detail"},[i("span",{staticClass:"item-templet-plan-ele"},[e._v(e._s(t.type))]),"已验收"===t.status?[t.overday?i("span",{staticClass:"item-templet-plan-exceed"},[e._v("\n                  "+e._s(t.overday)+"\n                ")]):e._e()]:[t.overday?i("span",{staticClass:"item-templet-plan-timeout"},[e._v("\n                  "+e._s(t.overday)+"\n                ")]):e._e(),t.leftday?i("span",{staticClass:"item-templet-plan-surplus"},[e._v("\n                  "+e._s(t.leftday)+"\n                ")]):e._e()]],2)])]),["已验收"===t.status?i("div",{staticClass:"item-templet-plan-status color-green"},[i("icon",{staticClass:"icon-qualified"}),e._v("已验收\n          ")],1):e._e(),"验收中"===t.status&&t.current_operator===e.currentUserId?i("div",{staticClass:"item-templet-plan-status"},[i("span",{staticClass:"item-templet-plan-opare"},[e._v("去验收")])]):e._e(),"验收中"===t.status&&t.current_operator!==e.currentUserId?i("div",{staticClass:"item-templet-plan-status color-orange"},[i("icon",{staticClass:"icon-clock"}),e._v("验收中\n          ")],1):e._e(),"未验收"===t.status?i("div",{staticClass:"item-templet-plan-status"},[i("span",{staticClass:"item-templet-plan-opare"},[e._v("去报验")])]):e._e()]],2)})):e._e(),i("loading-status",{attrs:{"is-loading":e.isTempLoading,"is-empty":!e.templetList||!e.templetList.length,type:e.searchKey?"search":"common","empty-text":e.searchKey?"未搜索到相关内容":"暂无与你相关的样板计划"}})],2)],1)}),[],!1,null,"7fd80c8f",null);t.default=l.exports},"47df":function(e,t,i){var a=i("cc4c");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,i("85cb").default)("1ffcc628",a,!0,{sourceMap:!1,shadowMode:!1})},7599:function(e,t,i){(e.exports=i("690e")(!1)).push([e.i,".zjapp .plan-select[data-v-7fd80c8f] >div,.zjapp .plan-select[data-v-7fd80c8f] >i{pointer-events:none}.zjapp .item-templet-plan-list[data-v-7fd80c8f]{display:flex;align-items:center;padding:24px 15px 19px;background-color:#fff;background-position:75px 100%!important}.zjapp .item-templet-plan-main[data-v-7fd80c8f]{display:flex;flex:1}.zjapp .item-templet-plan-time[data-v-7fd80c8f]{width:65px;border-left:2px solid #0bc666;padding-left:7px;color:#333}.zjapp .item-templet-plan-time-mormal[data-v-7fd80c8f]{border-color:#ececec}.zjapp .item-templet-plan-time-orange[data-v-7fd80c8f]{border-color:#ff8e24}.zjapp .item-templet-plan-con[data-v-7fd80c8f]{flex:1}.zjapp .item-templet-plan-day[data-v-7fd80c8f]{font-size:17px;line-height:17px}.zjapp .item-templet-plan-year[data-v-7fd80c8f]{font-size:9px;line-height:9px;margin-top:7px;padding-left:1px}.zjapp .item-templet-plan-title[data-v-7fd80c8f]{font-size:17px;line-height:17px;color:#333}.zjapp .item-templet-plan-detail[data-v-7fd80c8f]{font-size:0;line-height:0;padding-top:10px}.zjapp .item-templet-plan-ele[data-v-7fd80c8f]{margin-right:5px;margin-bottom:4px;max-width:80px;padding:0 7px;border:1px solid #ececec;line-height:15px;border-radius:8.5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.zjapp .item-templet-plan-ele[data-v-7fd80c8f],.zjapp .item-templet-plan-exceed[data-v-7fd80c8f]{display:inline-block;vertical-align:top;height:17px;font-size:11px;color:#999}.zjapp .item-templet-plan-exceed[data-v-7fd80c8f]{line-height:17px}.zjapp .item-templet-plan-timeout[data-v-7fd80c8f]{background-color:#796bfb}.zjapp .item-templet-plan-surplus[data-v-7fd80c8f],.zjapp .item-templet-plan-timeout[data-v-7fd80c8f]{display:inline-block;vertical-align:top;margin-right:5px;height:17px;padding:0 7px;line-height:17px;font-size:11px;color:#fff;border-radius:8.5px}.zjapp .item-templet-plan-surplus[data-v-7fd80c8f]{background-color:#febd01}.zjapp .item-templet-plan-status[data-v-7fd80c8f]{padding-left:10px;padding-bottom:5px}.zjapp .item-templet-plan-opare[data-v-7fd80c8f]{display:inline-block;height:28px;line-height:26px;border:1px solid #ececec;padding:1px 10px 0 10px;color:#999;border-radius:14px}.zjapp .icon-qualified[data-v-7fd80c8f]{font-size:9px;margin-right:7px}.zjapp .icon-clock[data-v-7fd80c8f]{font-size:14px;margin-right:7px}",""])},"774b":function(e,t,i){"use strict";var a=i("d18d").a,n=(i("b225"),i("17cc")),l=Object(n.a)(a,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"scroll-warp",staticClass:"scroll-warp",class:{"scroll-warp-pulling":e.pulling,"scroll-warp-complete":!e.hasNext&&!e.isEmpty,"scroll-warp-empty":e.isEmpty},style:{"padding-bottom":e.numberKeyboardCoverHeight+"px"},on:{scroll:e.onScroll,touchstart:e.onTouchstart,touchmove:e.onTouchmove,touchend:e.onTouchend}},[e.allowPullDown?i("div",{staticClass:"pull-refresh-warp",style:{height:e.pullDist+"px"}},[i("div",{staticClass:"pull-refresh"},[i("div",{staticClass:"animation-refresher",class:{refreshing:e.refreshing}}),e.updateTime?i("p",{staticClass:"pull-refresh-date"},[e._v("最后成功同步："+e._s(e.updateTime))]):e._e()])]):e._e(),e._t("default"),e.loading?i("div",{staticClass:"page-loading"},[i("svg",{staticClass:"svg-loading",attrs:{viewBox:"0 0 80 80"}},[i("circle",{attrs:{cx:"40",cy:"40",r:"36"}})])]):e._e(),e.hasNext||e.isEmpty?e._e():[e.$slots.end?e._t("end"):e._e(),!e.$slots.end&&e.endText?i("div",{staticClass:"end-text"},[e._v("\n      "+e._s(e.endText)+"\n    ")]):e._e()]],2)}),[],!1,null,"2b1a346c",null);t.a=l.exports},"8b19":function(e,t,i){"use strict";i("002b")},"92b7":function(e,t,i){"use strict";i.d(t,"g",(function(){return s})),i.d(t,"f",(function(){return o})),i.d(t,"c",(function(){return r})),i.d(t,"b",(function(){return c})),i.d(t,"a",(function(){return p})),i.d(t,"d",(function(){return d})),i.d(t,"e",(function(){return u}));var a=i("5e8d"),n=i("162a"),l=i("bcc78");function s(e){return Object(a.a)().then((function(){var t=l.a.templetPlanV2PlanList.url;return n.a.request(t,e)}))}function o(e){return Object(a.a)().then((function(){var t=l.a.templetPlanV2TempletList.url;return n.a.request(t,e)}))}function r(e){return Object(a.a)().then((function(){var t=l.a.templetPlanV2Info.url;return n.a.request(t,e)}))}function c(e){return Object(a.a)().then((function(){var t=l.a.templetPlanV2ChangeUser.url;return n.a.post(t,null,e)}))}function p(e){return Object(a.a)().then((function(){var t=l.a.templetPlanV2Accept.url;return n.a.post(t,null,e)}))}function d(){return Object(a.a)().then((function(){var e=l.a.templetPlanV2GetLeaderTempletPlanv2Summary.url;return n.a.request(e)}))}function u(e){return Object(a.a)().then((function(){var t=l.a.templetPlanV2GetPlanTempletList.url;return n.a.request(t,e)}))}},"9d55":function(e,t,i){(e.exports=i("690e")(!1)).push([e.i,'.zjapp .scroll-warp[data-v-2b1a346c]{flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.zjapp .scroll-warp-pulling[data-v-2b1a346c]{overflow:hidden}.zjapp .scroll-warp-complete[data-v-2b1a346c]:after{content:"";display:block;height:100px}.zjapp .scroll-warp-empty[data-v-2b1a346c]{display:flex;flex-direction:column}.zjapp .pull-refresh-warp[data-v-2b1a346c]{position:relative;height:0;overflow:hidden}.zjapp .pull-refresh[data-v-2b1a346c]{position:absolute;left:0;bottom:0;height:70px;width:100%;padding:6px;text-align:center}.zjapp .pull-refresh-date[data-v-2b1a346c]{margin-top:4px;height:16px;line-height:16px;font-size:12px;color:#bcbcbc}.zjapp .page-loading[data-v-2b1a346c]{padding:10px;text-align:center}.zjapp .end-text[data-v-2b1a346c]{color:#c8c8c8;background:#f4f4f4;position:relative;line-height:76px;height:76px;text-align:center}.zjapp .end-text[data-v-2b1a346c]:after,.zjapp .end-text[data-v-2b1a346c]:before{content:"";position:absolute;width:48px;height:1px;background:#e4e4e4;top:50%;margin-top:-1px}.zjapp .end-text[data-v-2b1a346c]:after{left:50%;transform:translateX(-92px)}.zjapp .end-text[data-v-2b1a346c]:before{right:50%;transform:translateX(90px)}.zjapp .end-slot[data-v-2b1a346c]{padding:30px;line-height:18px;text-align:center;color:#c8c8c8}',""])},ad46:function(e,t,i){"use strict";(function(e){i("f548"),i("e697"),i("cc57"),i("9dd9");var a,n=i("07d2"),l=i("9eea"),s=i("6f9e"),o=i("e89f"),r=[],c=[],p=[],d=!0,u=null,h=["没有标段","没有楼栋","没有单元","没有楼层"],f=["","list bg-gray6","list bg-gray5","list bg-gray4"];t.a={name:"DropDownSelectDialog",components:{Item:n.a,appSearchBar:l.a},mixins:[o.a],data:function(){return{show:!1,showList:!1,isOpening:!1,isClosing:!1,isSearching:!1,contentTop:64,listHeight:510,target:"",selectedSet:[],stage:1,layoutMap:[],keepStage:[],componentUid:"",showNote:!0,hasSearch:!1,searchTimer:null,keyword:""}},watch:{show:function(e){var t=this;e&&this.$nextTick((function(){t.showList=!0}))},showList:function(t){var i=this;t&&this.$nextTick((function(){i.$refs["list-wrap"]&&e.each(i.$refs["list-wrap"].querySelectorAll(".selected")||[],(function(e){setTimeout((function(){e.scrollIntoViewIfNeeded(!0)}),400)}))}))},keyword:function(e){var t=this;clearTimeout(this.searchTimer),this.searchTimer=setTimeout((function(){t.initSelectedSet(r,c)}),100)}},created:function(){s.a.$on("routerBeforeEach",this.closePopup),s.a.$on("pageContentClick",this.onClickOther)},destroyed:function(){s.a.$off("routerBeforeEach",this.closePopup),s.a.$off("pageContentClick",this.onClickOther)},methods:{openPopup:function(t){var i=this;if(this.show)return t.componentUid===this.componentUid?void this.closePopup():void this.closePopup().then((function(){i.openPopup(t)}));this.stage=t.stage,this.componentUid=t.componentUid||"";var n=document.querySelector(".layout-main .layout-header");this.contentTop=n.offsetHeight;var l=t.el&&t.el.$el?t.el.$el:t.el;if(l){var s=l.getBoundingClientRect();this.contentTop=s.bottom}this.target=l,this.listHeight=e.minBy([window.innerHeight-this.contentTop-50,510]),r=t.options,c=e.clone(t.selected),p=t.optionsMap||[],d=!1!==t.needFullSelecte||t.needFullSelecte,u=t.minSelectStage||this.stage,a=t.callback,this.showNote=t.showNote,this.layoutMap=[];for(var o=0;o<t.stage;o++)this.layoutMap.push({level:o,bgColor:t.hasBgColor?f[o]:"",emptyText:t.emptyText&&t.emptyText[o]?t.emptyText[o]:h[o],keep:!!e.isEmpty(t.keepStage)||!!t.keepStage[o]});this.hasSearch=!!t.hasSearch,this.initSelectedSet(t.options,t.selected),this.show=!0,this.$emit("open")},closePopup:function(){var e=this;if(!this.isOpening)return this.$refs["app-search-bar"]&&this.$refs["app-search-bar"].cancelSearch(),this.showList=!1,this.$emit("close"),new Promise((function(t){e.$on("afterClosePopup",t)}))},afterClose:function(){this.show=!1,this.keyword="",this.isClosing=!1,this.$emit("afterClosePopup")},onClickOther:function(e){e&&e.target&&e.target!==this.target&&this.show&&this.closePopup()},getLevelOptionsKey:function(e){return p&&p[e]&&p[e].key?p[e].key:"children"},initSelectedSet:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.selectedSet=[],e.each(a||[],(function(a,n){var l=t.getLevelOptionsKey(n);if(a&&!(n>t.stage-1)){if(!t.selectedSet[n]){var s;s=n?t.selectedSet[n-1].selected&&t.selectedSet[n-1].selected[l]||[]:i;var o=n||e.isEmpty(t.keyword)?s:e.filter(s,(function(e){return new RegExp(t.keyword,"gm").test(e.name)}));t.selectedSet[n]={selected:{},options:o}}var r=t.selectedSet[n].options,c=e.find(r,{id:a.id});c&&(t.selectedSet[n].selected=c)}})),e.isEmpty(this.selectedSet)&&(this.selectedSet=[{selected:{},options:i}])},showName:function(e){var t=e;return t=(t=t.replace(new RegExp("<","gm"),"&lt;")).replace(new RegExp(">","gm"),"&gt;")},highLightKeyword:function(e){if(this.keyword){var t="";return t=e.replace(new RegExp(this.keyword,"gm"),"-----hightLightTagL-----"+this.keyword+"-----hightLightTagR-----"),t=(t=(t=this.showName(t)).replace(/-----hightLightTagL-----/gm,'<span class="color-blue">')).replace(/-----hightLightTagR-----/gm,"</span>")}return this.showName(e)},getResult:function(){var t=this,i=[];return e.each(this.selectedSet,(function(a,n){var l=e.extend({},a.selected);delete l[t.getLevelOptionsKey(n+1)],e.isEmpty(l)||i.push(l)})),i},select:function(t,i){var n=this,l=this.getLevelOptionsKey(i+1),s=e.isEmpty(t[l]),o=i>=this.stage-1||i>=u-1&&s||!d&&s;this.selectedSet.splice(i+1),this.selectedSet[i].selected=t,c.splice(i),c.push(t),this.$refs["app-search-bar"]&&this.$refs["app-search-bar"].saveHistory(),o?setTimeout((function(){a&&a(n.getResult()),n.closePopup()}),100):this.selectedSet.push({selected:{},options:t[l]})},onSearchTypeChange:function(e){this.isSearching=e}}}}).call(this,i("391c"))},b225:function(e,t,i){"use strict";i("ef48")},cbc7:function(e,t,i){"use strict";(function(e){i("e697");var a=i("07d2"),n=i("1b7e"),l=(i("162a"),i("774b")),s=i("d152"),o=i("6bf2"),r=i.n(o),c=i("3bd5"),p=i("f97c"),d=i("6144"),u=i("bc69"),h=i("92b7");t.a={name:"TempletPlan",components:{item:a.a,Scroller:l.a},data:function(){return{isPlanLoading:!0,isTempLoading:!0,searchKey:"",projId:"",planList:[],planSelected:[],templetList:[],currentUserId:c.a.getUser().user_id}},computed:{isPlanSelectOpen:function(){return s.a.show},hasPlanSelected:function(){return!e.isEmpty(this.planSelected)}},activated:function(){this.planList=[],this.planSelected=[],this.templetList=[],this.projId=p.a.getDefaultProject().id,this.init()},methods:{search:function(e){console.log("开始搜索",e),this.searchKey=e,this.getTempletList()},init:function(){var e=this;this.isTempLoading=!0,this.getPlanList().then((function(){return e.setPlanSelected()})).then((function(){e.getTempletList()}))},getPlanList:function(){var e=this;return this.isPlanLoading=!0,n.a.getHasNetwork().then((function(e){if(!e)return Promise.reject("当前无网络")})).then((function(){var t={proj_id:e.projId};return Object(h.g)(t)})).then((function(t){console.log("plans",t),e.planList=t,e.isPlanLoading=!1})).catch((function(e){Popup.alert(e.errmsg||e)}))},setPlanSelected:function(t){var i,a=d.a.getUserObject(u.a.LAST_TEMPLET_PLAN_V2_ID)||{},n=a[this.projId],l="";i=(l=e.isEmpty(t)?e.isObject(n)?n.id||"":n:t)&&e.find(this.planList,{id:l}),(e.isEmpty(l)||e.isEmpty(i))&&(i=this.planList[0]||{}),this.planSelected=i,a[this.projId]=i.id,d.a.saveUserObject(u.a.LAST_TEMPLET_PLAN_V2_ID,a)},getTempletList:function(){var t=this;if(this.isTempLoading=!0,this.templetList=[],!e.isEmpty(this.planSelected))return n.a.getHasNetwork().then((function(e){if(!e)return Promise.reject("当前无网络")})).then((function(){var e={plan_id:t.planSelected.id,name:t.searchKey};return Object(h.f)(e)})).then((function(i){console.log("templetList",i);var a=r()().startOf("day");e.each(i,(function(e){var t;if("0000-00-00 00:00:00"===e.deadline||!e.deadline)return e.leftday="",void(e.overday="");var i=r()(e.deadline).startOf("day");if("已验收"===e.status){e.leftday="";var n=r()(e.complete_time).startOf("day");n.isAfter(i)?(t=n.diff(i,"days"),e.overday="超时"+t+"天验收"):e.overday=""}else if(a.isAfter(i))e.leftday="",t=a.diff(i,"days"),e.overday="超时"+t+"天";else{e.overday="";var l=i.diff(a,"days");e.leftday=0===l?"今天":l<=7?"还剩"+l+"天":""}})),t.templetList=i,t.isTempLoading=!1})).catch((function(e){t.isTempLoading=!1,Popup.alert(e.errmsg||e)}));this.isTempLoading=!1},selectPlan:function(e){var t=this;s.a.show?s.a.closePopup():s.a.openPopup({options:this.planList,selected:[this.planSelected],stage:1,el:e.target,callback:function(e){var i=e[0]||{};t.setPlanSelected(i.id),t.getTempletList()}})},gotoDetail:function(e){this.$router.push({name:"TempletPlanV2Detail",query:{id:e.id}})}}}}).call(this,i("391c"))},cc4c:function(e,t,i){(e.exports=i("690e")(!1)).push([e.i,".zjapp .content[data-v-1fa2658d]{position:fixed;width:100%;bottom:0;background-color:rgba(0,0,0,.4);overflow:hidden}.zjapp .box[data-v-1fa2658d]{flex-direction:column}.zjapp .box[data-v-1fa2658d],.zjapp .list-wrap[data-v-1fa2658d]{display:flex;background-color:#fff}.zjapp .list-wrap[data-v-1fa2658d]{flex-direction:row;align-items:flex-start;flex:1;overflow:hidden}.zjapp .list[data-v-1fa2658d]{padding:0 10px}.zjapp .list[data-v-1fa2658d],.zjapp .list-single[data-v-1fa2658d]{flex:1;overflow:auto;height:100%;scroll-behavior:smooth}.zjapp .item-dropdown[data-v-1fa2658d]{padding:6px 0;background-color:transparent}.zjapp .item-dropdown[data-v-1fa2658d] .item-text{font-size:14px}.zjapp .item-dropdown.selected[data-v-1fa2658d]{color:#4275e8;padding-bottom:5px;border-bottom:1px solid #4275e8}.zjapp .item-dropdown.selected[data-v-1fa2658d] .item-text{color:#4275e8}.zjapp .empty-tips[data-v-1fa2658d]{padding:13px 0;line-height:20px;color:#b2b2b2;font-size:14px}.zjapp .select-note[data-v-1fa2658d]{line-height:16px;font-size:12px;color:#8c8c8c}[data-v-1fa2658d] .icon-qualified{width:30px;height:30px;line-height:30px;text-align:center;color:#4275e8}",""])},d152:function(e,t,i){"use strict";var a=i("329b"),n=i("ad46").a,l=(i("fc72"),i("17cc")),s=Object(l.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.show?i("div",{staticClass:"content",style:{top:e.contentTop+"px"},on:{click:function(t){return t.target!==t.currentTarget?null:e.closePopup(t)}}},[i("transition",{attrs:{name:"slide-down"},on:{enter:function(t){e.isOpening=!0},"after-enter":function(t){e.isOpening=!1},leave:function(t){e.isClosing=!0},"after-leave":e.afterClose}},[e.showList?i("div",{staticClass:"box",style:{height:e.listHeight+"px"}},[e.hasSearch?i("app-search-bar",{ref:"app-search-bar",attrs:{placeholder:"输入项目名称搜索","simple-mode":"","history-key":"drop-down-search-history-key"},on:{changeSearchStatus:e.onSearchTypeChange},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}):e._e(),!e.isSearching||e.keyword&&e.selectedSet[0]&&e.selectedSet[0].options.length?i("div",{ref:"list-wrap",staticClass:"list-wrap"},[1===e.stage?e._l(e.layoutMap,(function(t,a){var n;return i("div",{key:"map"+a,staticClass:"list-single",class:(n={},n[t.bgColor]=!0,n),style:{height:e.listHeight-(e.hasSearch?44:0)+"px"}},e._l(e.selectedSet[t.level]&&e.selectedSet[t.level].options||[],(function(n,l){return i("item",{key:l,class:{selected:e.selectedSet[t.level].selected&&e.selectedSet[t.level].selected.id===n.id},attrs:{border:"bottom"},on:{click:function(i){e.select(n,t.level)}}},[i("div",{staticClass:"item-text",class:{"color-theme":n.note&&e.selectedSet[t.level].selected&&e.selectedSet[t.level].selected.id===n.id},domProps:{innerHTML:e._s(a?e.showName(n.nameShow||n.name):e.highLightKeyword(n.nameShow||n.name))}}),!n.note&&e.selectedSet[t.level].selected&&e.selectedSet[t.level].selected.id===n.id?i("icon",{attrs:{name:"qualified"}}):e._e(),n.note?i("div",{staticClass:"item-font color-gray2 f14"},[e._v(e._s(n.note))]):e._e()],1)})))})):[e._l(e.layoutMap,(function(t,a){var n;return[t.keep||e.selectedSet[t.level]&&e.selectedSet[t.level].options&&e.selectedSet[t.level].options.length?i("div",{key:"map"+a,staticClass:"list",class:(n={},n[t.bgColor]=!0,n),style:{height:e.listHeight-(e.hasSearch?44:0)+"px"}},[e._l(e.selectedSet[t.level]&&e.selectedSet[t.level].options||[],(function(n,l){return i("item",{key:l,staticClass:"item-dropdown",class:{selected:e.selectedSet[t.level].selected&&e.selectedSet[t.level].selected.id===n.id},on:{click:function(i){e.select(n,t.level)}}},[i("div",{staticClass:"item-text"},[i("p",{domProps:{innerHTML:e._s(a?e.showName(n.nameShow||n.name):e.highLightKeyword(n.nameShow||n.name))}}),i("p",{staticClass:"select-note"},[e._v(e._s(n.note))])])])})),e.selectedSet[t.level]&&e.selectedSet[t.level].options&&e.selectedSet[t.level].options.length?e._e():i("div",{staticClass:"empty-tips"},[e._v("\n                "+e._s(e.selectedSet[t.level-1]&&e.selectedSet[t.level-1].selected&&e.selectedSet[t.level-1].selected.id?t.emptyText:"请选择")+"\n              ")])],2):e._e()]}))]],2):e._e(),!e.isSearching||!e.keyword||e.selectedSet[0]&&e.selectedSet[0].options.length?e._e():i("loading-status",{attrs:{"is-empty":!0,type:"search","empty-text":"未搜索到相关内容"}})],1):e._e()])],1):e._e()}),[],!1,null,"1fa2658d",null).exports,o=!1;o||(o=new(a.default.extend(s))({el:document.createElement("div")}),document.body.appendChild(o.$el));t.a=o},d18d:function(e,t,i){"use strict";(function(e){i("2b45");var a,n=i("4360"),l=i("48f4"),s=i("162a"),o=i("e2a7"),r=i("a500"),c=i("6f9e"),p={};t.a={name:"Scroller",props:{buildingId:{type:String,default:""},hasNext:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},isSync:{type:Boolean,default:!0},endText:{type:String,default:""},memoryScrollTop:{type:Boolean,default:!0},keepScrollTop:{type:Boolean},hasPullDown:{type:Boolean,default:!0},onPullDown:{type:Function}},data:function(){return{pullDist:0,refreshing:!1,pulling:!1,loading:!1,scrollTop:0,isCurrKeyboard:!1,gapBottom:0}},computed:{allowPullDown:function(){return this.hasPullDown&&(!!this.$listeners.pullDown||!!this.onPullDown)},updateTime:function(){return n.a.state.global.businessDownloadTime},numberKeyboardCoverHeight:function(){return n.a.state.global.isNumberInputOpen?n.a.state.global.numberKeyboardHeight-this.gapBottom:0}},mounted:function(){var e=this;c.a.$on("numberKeyboardOpen",this.onNumberKeyboardOpen),this.$nextTick((function(){var t=e.$refs["scroll-warp"]&&e.$refs["scroll-warp"].getBoundingClientRect&&e.$refs["scroll-warp"].getBoundingClientRect();t&&(e.gapBottom=document.documentElement.clientHeight-t.bottom),e.$el&&e.$el.addEventListener("focus",(function(t){var i=t&&t.target,a=i&&i.tagName&&i.tagName.toLowerCase();if("input"===a||"textarea"===a){window.addEventListener("resize",(function t(){var a=i.getBoundingClientRect(),n=e.$el.getBoundingClientRect(),l=a.bottom-n.bottom;l>0&&e.scrollBy(l),window.removeEventListener("resize",t,!1)}),!1)}}),!0)}))},destroyed:function(){c.a.$off("numberKeyboardOpen",this.onNumberKeyboardOpen)},activated:function(){var e=this.keepScrollTop||this.$router.isBack&&this.memoryScrollTop;this.scrollTop&&e&&(this.$refs["scroll-warp"].scrollTop=this.scrollTop)},deactivated:function(){this.memoryScrollTop&&(this.scrollTop=this.$refs["scroll-warp"].scrollTop)},methods:{onScroll:function(e){var t=this,i=this.$refs["scroll-warp"].scrollTop,a=this.$refs["scroll-warp"].scrollHeight;if(i+this.$refs["scroll-warp"].clientHeight>=a-5&&!this.loading&&this.hasNext){this.loading=!0;var n=this.$listeners.loadNext();n&&n.then&&"function"==typeof n.then?n.then((function(){t.loading=!1})):this.loading=!1}this.$emit("scroll",e)},getTouchDiretion:function(e){if(!(p&&e&&e.touches&&e.touches[0]))return"";var t=e.touches[0].clientX,i=e.touches[0].clientY;return Math.abs(i-p.y)>Math.abs(t-p.x)&&Math.abs(i-p.y)>=3?i>p.y?"down":"up":""},onTouchstart:function(e){this.allowPullDown&&e.touches&&1===e.touches.length&&(p={x:e.touches[0].clientX,y:e.touches[0].clientY,scrollTop:this.$refs["scroll-warp"].scrollTop,pullDist:this.pullDist})},onTouchmove:function(e){if(this.allowPullDown&&e.touches&&1===e.touches.length){var t=this.$refs["scroll-warp"].scrollTop,i=e.touches[0].clientY,a=i-p.y,n=this.getTouchDiretion(e);"down"===n?!this.refreshing&&t<=0?(this.pulling=!0,this.pullDist=(a-p.scrollTop)/2,e.preventDefault()):this.pulling=!1:"up"===n?this.pullDist>0&&(this.pullDist=p.pullDist-(p.y-i),e.preventDefault()):this.pullDist=p.pullDist}},onTouchend:function(){var e=this;this.allowPullDown&&(p={},this.pulling=!1,this.pullDist>=70&&this.isSync?this.refreshing?this.makePullTo(70):this.makePullTo(70).then((function(){if(e.refreshing=!0,e.onPullDown){var t=e.onPullDown();t&&t.then&&"function"==typeof t?t.finally((function(){e.refreshing=!1,e.makePullTo(0)})):(e.refreshing=!1,e.makePullTo(0))}else e.dataSync().then((function(){e.refreshing=!1,e.makePullTo(0),e.$emit("pullDown")})).catch((function(){e.refreshing=!1,e.makePullTo(0),e.$emit("pullDown")}))})):(this.refreshing=!1,this.makePullTo(0)))},makePullTo:function(e){var t=this,i=this.pullDist,a=e,n=a-i,l=i;return i===a?Promise.resolve():new Promise((function(e){!function s(){window.requestAnimationFrame((function(){l+=n/6,t.pullDist=l,i<a&&l<a||i>a&&l>a?s():(t.pullDist=a,t.refreshing=!1,e())}))}()}))},dataSync:function(){var e,t=l.default.getCurrentModuleCode(),i=l.default.getCurrentRoute(),a=i.meta&&i.meta.isTodo;if(l.default.isModuleNeedBuilding(t)&&!a){if(!this.buildingId)return new Promise((function(e){setTimeout((function(){e()}),500)}));e=this.buildingId}return r.a.addTrack("公共-手动下拉刷新","",""),s.a.beginManualUpdate(),l.default.checkSync(e).then((function(e){return s.a.endManualUpdate(),e})).catch((function(e){$log.error("下拉刷新错误",e),e&&"Error: Network Error"===e.toString()?o.a.alert("当前网络无法同步数据"):o.a.alert(e),s.a.endManualUpdate()}))},getScrollHeight:function(){return this.$refs["scroll-warp"].offsetHeight},getScrollTop:function(){return this.$refs["scroll-warp"].scrollTop},setScrollTop:function(e){this.$refs["scroll-warp"].scrollTop=e},scrollBy:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=this.getScrollTop(),l=n+e,s=Math.round(i/16.7),o=e/s,r=n,c=a=+new Date;return n===l?Promise.resolve():new Promise((function(e){!function i(){window.requestAnimationFrame((function(){c===a&&(r+=o,t.$refs["scroll-warp"].scrollTop=r,n<l&&r<l||n>l&&r>l?i():(t.$refs["scroll-warp"].scrollTop=l,e()))}))}()}))},scrollTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,i=this.getScrollTop(),a=e-i;return this.scrollBy(a,t)},scrollToEle:function(e){var t=e.keyboardHeight||232,i=(e=e.$el?e.$el:e).getBoundingClientRect(),a=this.$refs["scroll-warp"].getBoundingClientRect();if(i&&a){var l=document.documentElement.clientHeight-(n.a.state.global.isNumberInputOpen?t:0),s=a.bottom<l?a.bottom:l,o=a.top-i.top,r=i.bottom-s;o>0?this.scrollBy(-o-10):r>0&&this.scrollBy(r+10)}},isCurrent:function(t,i){var a=this;t.length&&e.each(t,(function(e){e._uid===i?a.isCurrKeyboard=!0:a.isCurrent(e.$children,i)}))},onNumberKeyboardOpen:function(e){this.isCurrKeyboard=!1,this.isCurrent(this.$children,e._uid),this.isCurrKeyboard&&this.scrollToEle(e)}}}}).call(this,i("391c"))},e89f:function(e,t,i){"use strict";var a=i("04f3"),n=i("cf09"),l=i("4360"),s=0;t.a={name:"PopupMixin",data:function(){return{backButtonEvent:null}},watch:{show:function(e){var t=this;if(e){if(this.$nextTick((function(){t.$el&&t.$el.style&&(t.$el.style.zIndex=++n.a.zIndex,s++,l.a.commit("app/SET_HAS_POPUP",!!s))})),!this.backButtonEvent){var i=this.close||this.closePopup;this.backButtonEvent=Object(a.a)(i)}}else--s<0&&(s=0),l.a.commit("app/SET_HAS_POPUP",!!s),this.backButtonEvent&&(Object(a.c)(this.backButtonEvent),this.backButtonEvent=null)}},methods:{}}},ef48:function(e,t,i){var a=i("9d55");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,i("85cb").default)("a1a65c0c",a,!0,{sourceMap:!1,shadowMode:!1})},fc72:function(e,t,i){"use strict";i("47df")}}]);