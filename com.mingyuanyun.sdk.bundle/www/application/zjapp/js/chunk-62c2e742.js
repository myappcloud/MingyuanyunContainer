(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-62c2e742"],{"23ae":function(t,e,o){"use strict";o.r(e);var r=o("f026").a,l=(o("d8f9"),o("17cc")),a=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("page-content",{attrs:{title:t.projectSelected.name+t.title,"show-go-root":!0}},[t.list.length?o("scroller",[t._l(t.list,(function(e,r){return o("div",{key:r,staticClass:"watering-record-box van-hairline--bottom",on:{click:function(o){t.goRecordAndDetail(e)}}},[o("div",{staticClass:"record-img",style:{"background-image":"url("+e.image+")"}}),o("div",{staticClass:"record-content"},[o("p",{staticClass:"record-place"},[t._v(t._s(e.building_name))]),o("div",{staticClass:"record-remark"},[t._v(t._s(e.name))]),o("div",{staticClass:"record-date"},[t._v(t._s(t._f("formatDate")(e.regist_date)))])])])})),o("p",{staticClass:"scroller-last-text"},[t._v("就这么多了")])],2):t._e(),o("loading-status",{attrs:{"is-loading":t.isLoading,"is-empty":!t.list.length,type:t.errorType,"empty-text":"search"===t.errorType?"没有记录":""}})],1)}),[],!1,null,"94b0935e",null);e.default=a.exports},"3c90":function(t,e,o){(t.exports=o("690e")(!1)).push([t.i,'.zjapp .scroll-warp[data-v-94b0935e]{background:#fff}.zjapp .scroller-last-text[data-v-94b0935e]{position:relative;line-height:17px;margin:30px 0;font-size:12px;color:#c8c8c8;text-align:center}.zjapp .scroller-last-text[data-v-94b0935e]:before{left:calc(50% - 85px)}.zjapp .scroller-last-text[data-v-94b0935e]:after,.zjapp .scroller-last-text[data-v-94b0935e]:before{content:"";position:absolute;width:48px;height:1px;top:7px;background:#e4e4e4}.zjapp .scroller-last-text[data-v-94b0935e]:after{right:calc(50% - 85px)}.zjapp .watering-record-box[data-v-94b0935e]{display:flex;padding:17px 15px}.zjapp .watering-record-box .record-img[data-v-94b0935e]{position:relative;flex:0 0 70px;width:70px;height:70px;background:no-repeat 50%;background-size:cover;background-color:#eee;margin:0 10px 0 0}.zjapp .watering-record-box .record-content[data-v-94b0935e]{flex:1}.zjapp .watering-record-box .record-content .record-place[data-v-94b0935e]{line-height:22px;margin:0 0 5px 0;font-size:16px;color:#333}.zjapp .watering-record-box .record-content .record-remark[data-v-94b0935e]{line-height:20px;color:#666;margin:0 0 10px 0}.zjapp .watering-record-box .record-content .record-date[data-v-94b0935e]{line-height:18px;font-size:12px;color:#999}',""])},"774b":function(t,e,o){"use strict";var r=o("d18d").a,l=(o("b225"),o("17cc")),a=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"scroll-warp",staticClass:"scroll-warp",class:{"scroll-warp-pulling":t.pulling,"scroll-warp-complete":!t.hasNext&&!t.isEmpty,"scroll-warp-empty":t.isEmpty},style:{"padding-bottom":t.numberKeyboardCoverHeight+"px"},on:{scroll:t.onScroll,touchstart:t.onTouchstart,touchmove:t.onTouchmove,touchend:t.onTouchend}},[t.allowPullDown?o("div",{staticClass:"pull-refresh-warp",style:{height:t.pullDist+"px"}},[o("div",{staticClass:"pull-refresh"},[o("div",{staticClass:"animation-refresher",class:{refreshing:t.refreshing}}),t.updateTime?o("p",{staticClass:"pull-refresh-date"},[t._v("最后成功同步："+t._s(t.updateTime))]):t._e()])]):t._e(),t._t("default"),t.loading?o("div",{staticClass:"page-loading"},[o("svg",{staticClass:"svg-loading",attrs:{viewBox:"0 0 80 80"}},[o("circle",{attrs:{cx:"40",cy:"40",r:"36"}})])]):t._e(),t.hasNext||t.isEmpty?t._e():[t.$slots.end?t._t("end"):t._e(),!t.$slots.end&&t.endText?o("div",{staticClass:"end-text"},[t._v("\n      "+t._s(t.endText)+"\n    ")]):t._e()]],2)}),[],!1,null,"2b1a346c",null);e.a=a.exports},"9d55":function(t,e,o){(t.exports=o("690e")(!1)).push([t.i,'.zjapp .scroll-warp[data-v-2b1a346c]{flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.zjapp .scroll-warp-pulling[data-v-2b1a346c]{overflow:hidden}.zjapp .scroll-warp-complete[data-v-2b1a346c]:after{content:"";display:block;height:100px}.zjapp .scroll-warp-empty[data-v-2b1a346c]{display:flex;flex-direction:column}.zjapp .pull-refresh-warp[data-v-2b1a346c]{position:relative;height:0;overflow:hidden}.zjapp .pull-refresh[data-v-2b1a346c]{position:absolute;left:0;bottom:0;height:70px;width:100%;padding:6px;text-align:center}.zjapp .pull-refresh-date[data-v-2b1a346c]{margin-top:4px;height:16px;line-height:16px;font-size:12px;color:#bcbcbc}.zjapp .page-loading[data-v-2b1a346c]{padding:10px;text-align:center}.zjapp .end-text[data-v-2b1a346c]{color:#c8c8c8;background:#f4f4f4;position:relative;line-height:76px;height:76px;text-align:center}.zjapp .end-text[data-v-2b1a346c]:after,.zjapp .end-text[data-v-2b1a346c]:before{content:"";position:absolute;width:48px;height:1px;background:#e4e4e4;top:50%;margin-top:-1px}.zjapp .end-text[data-v-2b1a346c]:after{left:50%;transform:translateX(-92px)}.zjapp .end-text[data-v-2b1a346c]:before{right:50%;transform:translateX(90px)}.zjapp .end-slot[data-v-2b1a346c]{padding:30px;line-height:18px;text-align:center;color:#c8c8c8}',""])},b01b:function(t,e,o){var r=o("3c90");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,o("85cb").default)("5eb7f3d8",r,!0,{sourceMap:!1,shadowMode:!1})},b225:function(t,e,o){"use strict";o("ef48")},d18d:function(t,e,o){"use strict";(function(t){o("2b45");var r,l=o("4360"),a=o("48f4"),i=o("162a"),n=o("e2a7"),s=o("a500"),c=o("6f9e"),p={};e.a={name:"Scroller",props:{buildingId:{type:String,default:""},hasNext:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},isSync:{type:Boolean,default:!0},endText:{type:String,default:""},memoryScrollTop:{type:Boolean,default:!0},keepScrollTop:{type:Boolean},hasPullDown:{type:Boolean,default:!0},onPullDown:{type:Function}},data:function(){return{pullDist:0,refreshing:!1,pulling:!1,loading:!1,scrollTop:0,isCurrKeyboard:!1,gapBottom:0}},computed:{allowPullDown:function(){return this.hasPullDown&&(!!this.$listeners.pullDown||!!this.onPullDown)},updateTime:function(){return l.a.state.global.businessDownloadTime},numberKeyboardCoverHeight:function(){return l.a.state.global.isNumberInputOpen?l.a.state.global.numberKeyboardHeight-this.gapBottom:0}},mounted:function(){var t=this;c.a.$on("numberKeyboardOpen",this.onNumberKeyboardOpen),this.$nextTick((function(){var e=t.$refs["scroll-warp"]&&t.$refs["scroll-warp"].getBoundingClientRect&&t.$refs["scroll-warp"].getBoundingClientRect();e&&(t.gapBottom=document.documentElement.clientHeight-e.bottom),t.$el&&t.$el.addEventListener("focus",(function(e){var o=e&&e.target,r=o&&o.tagName&&o.tagName.toLowerCase();if("input"===r||"textarea"===r){window.addEventListener("resize",(function e(){var r=o.getBoundingClientRect(),l=t.$el.getBoundingClientRect(),a=r.bottom-l.bottom;a>0&&t.scrollBy(a),window.removeEventListener("resize",e,!1)}),!1)}}),!0)}))},destroyed:function(){c.a.$off("numberKeyboardOpen",this.onNumberKeyboardOpen)},activated:function(){var t=this.keepScrollTop||this.$router.isBack&&this.memoryScrollTop;this.scrollTop&&t&&(this.$refs["scroll-warp"].scrollTop=this.scrollTop)},deactivated:function(){this.memoryScrollTop&&(this.scrollTop=this.$refs["scroll-warp"].scrollTop)},methods:{onScroll:function(t){var e=this,o=this.$refs["scroll-warp"].scrollTop,r=this.$refs["scroll-warp"].scrollHeight;if(o+this.$refs["scroll-warp"].clientHeight>=r-5&&!this.loading&&this.hasNext){this.loading=!0;var l=this.$listeners.loadNext();l&&l.then&&"function"==typeof l.then?l.then((function(){e.loading=!1})):this.loading=!1}this.$emit("scroll",t)},getTouchDiretion:function(t){if(!(p&&t&&t.touches&&t.touches[0]))return"";var e=t.touches[0].clientX,o=t.touches[0].clientY;return Math.abs(o-p.y)>Math.abs(e-p.x)&&Math.abs(o-p.y)>=3?o>p.y?"down":"up":""},onTouchstart:function(t){this.allowPullDown&&t.touches&&1===t.touches.length&&(p={x:t.touches[0].clientX,y:t.touches[0].clientY,scrollTop:this.$refs["scroll-warp"].scrollTop,pullDist:this.pullDist})},onTouchmove:function(t){if(this.allowPullDown&&t.touches&&1===t.touches.length){var e=this.$refs["scroll-warp"].scrollTop,o=t.touches[0].clientY,r=o-p.y,l=this.getTouchDiretion(t);"down"===l?!this.refreshing&&e<=0?(this.pulling=!0,this.pullDist=(r-p.scrollTop)/2,t.preventDefault()):this.pulling=!1:"up"===l?this.pullDist>0&&(this.pullDist=p.pullDist-(p.y-o),t.preventDefault()):this.pullDist=p.pullDist}},onTouchend:function(){var t=this;this.allowPullDown&&(p={},this.pulling=!1,this.pullDist>=70&&this.isSync?this.refreshing?this.makePullTo(70):this.makePullTo(70).then((function(){if(t.refreshing=!0,t.onPullDown){var e=t.onPullDown();e&&e.then&&"function"==typeof e?e.finally((function(){t.refreshing=!1,t.makePullTo(0)})):(t.refreshing=!1,t.makePullTo(0))}else t.dataSync().then((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")})).catch((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")}))})):(this.refreshing=!1,this.makePullTo(0)))},makePullTo:function(t){var e=this,o=this.pullDist,r=t,l=r-o,a=o;return o===r?Promise.resolve():new Promise((function(t){!function i(){window.requestAnimationFrame((function(){a+=l/6,e.pullDist=a,o<r&&a<r||o>r&&a>r?i():(e.pullDist=r,e.refreshing=!1,t())}))}()}))},dataSync:function(){var t,e=a.default.getCurrentModuleCode(),o=a.default.getCurrentRoute(),r=o.meta&&o.meta.isTodo;if(a.default.isModuleNeedBuilding(e)&&!r){if(!this.buildingId)return new Promise((function(t){setTimeout((function(){t()}),500)}));t=this.buildingId}return s.a.addTrack("公共-手动下拉刷新","",""),i.a.beginManualUpdate(),a.default.checkSync(t).then((function(t){return i.a.endManualUpdate(),t})).catch((function(t){$log.error("下拉刷新错误",t),t&&"Error: Network Error"===t.toString()?n.a.alert("当前网络无法同步数据"):n.a.alert(t),i.a.endManualUpdate()}))},getScrollHeight:function(){return this.$refs["scroll-warp"].offsetHeight},getScrollTop:function(){return this.$refs["scroll-warp"].scrollTop},setScrollTop:function(t){this.$refs["scroll-warp"].scrollTop=t},scrollBy:function(t){var e=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,l=this.getScrollTop(),a=l+t,i=Math.round(o/16.7),n=t/i,s=l,c=r=+new Date;return l===a?Promise.resolve():new Promise((function(t){!function o(){window.requestAnimationFrame((function(){c===r&&(s+=n,e.$refs["scroll-warp"].scrollTop=s,l<a&&s<a||l>a&&s>a?o():(e.$refs["scroll-warp"].scrollTop=a,t()))}))}()}))},scrollTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,o=this.getScrollTop(),r=t-o;return this.scrollBy(r,e)},scrollToEle:function(t){var e=t.keyboardHeight||232,o=(t=t.$el?t.$el:t).getBoundingClientRect(),r=this.$refs["scroll-warp"].getBoundingClientRect();if(o&&r){var a=document.documentElement.clientHeight-(l.a.state.global.isNumberInputOpen?e:0),i=r.bottom<a?r.bottom:a,n=r.top-o.top,s=o.bottom-i;n>0?this.scrollBy(-n-10):s>0&&this.scrollBy(s+10)}},isCurrent:function(e,o){var r=this;e.length&&t.each(e,(function(t){t._uid===o?r.isCurrKeyboard=!0:r.isCurrent(t.$children,o)}))},onNumberKeyboardOpen:function(t){this.isCurrKeyboard=!1,this.isCurrent(this.$children,t._uid),this.isCurrKeyboard&&this.scrollToEle(t)}}}}).call(this,o("391c"))},d8f9:function(t,e,o){"use strict";o("b01b")},ef48:function(t,e,o){var r=o("9d55");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,o("85cb").default)("a1a65c0c",r,!0,{sourceMap:!1,shadowMode:!1})},f026:function(t,e,o){"use strict";(function(t){var r=o("e2a7"),l=o("774b"),a=o("162a");e.a={name:"WaterPouringTestRecord",components:{Scroller:l.a},data:function(){return{isLoading:!0,errorType:"search",buildingId:"",title:"淋水记录",list:[]}},computed:{projectSelected:function(){return this.$store.state.global.currentProject}},activated:function(){this.$router.isBack||this.getListData()},methods:{getListData:function(){var e=this;this.list=[],this.isLoading=!0,this.errorType="search";var o={proj_id:this.projectSelected.id};a.a.request("/online/water-pouring-test/get-batch-list",o).then((function(o){t.each(o,(function(t){t.image=(JSON.parse(t.image_file||"[]")[0]||{}).url})),e.list=o})).catch((function(t){e.list=[],e.errorType="error",r.a.alert(t)})).finally((function(){e.isLoading=!1}))},goRecordAndDetail:function(t){this.$router.push({name:"WaterPouringTestRecordBatch",query:{id:t.id}})}}}}).call(this,o("391c"))}}]);