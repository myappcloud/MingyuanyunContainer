(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-29b7ca28"],{"2e6d":function(t,e,a){(t.exports=a("690e")(!1)).push([t.i,".zjapp .content-wrap[data-v-8cfb7986]{max-height:100%;overflow:auto;padding-bottom:50px}.zjapp .item-con[data-v-8cfb7986]{display:block;flex:1;line-height:34px;color:#666;font-size:16px;white-space:normal}",""])},"2e86":function(t,e,a){var o=a("2e6d");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,a("85cb").default)("169d6cc1",o,!0,{sourceMap:!1,shadowMode:!1})},"6e70":function(t,e,a){"use strict";a.r(e);var o=a("af4d").a,n=(a("dd86"),a("17cc")),i=Object(n.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-content",{attrs:{title:"批次详情","show-go-root":!0}},[a("div",{staticClass:"content-wrap"},[t.isLoading?t._e():a("div",{staticClass:"list bg-white pt10 pb10 border"},[a("item",{attrs:{label:"项目",text:t.batchData.proj_name}}),a("item",{attrs:{label:"批次名称",text:t.batchData.name}}),a("item",{attrs:{label:"检查模板",text:t.batchData.temp}}),a("item",{attrs:{label:"模板类型",text:t.tempTypes[t.batchData.temp_mode]}}),t._l(t.batchData.contracts,(function(e,o){return a("item",{key:o,attrs:{label:"合同"+(o+1)}},[a("div",{staticClass:"item-con",attrs:{slot:"right"},slot:"right"},[a("p",{staticClass:"color-black",staticStyle:{"line-height":"22px","margin-top":"6px"},domProps:{textContent:t._s(e.name)}}),a("p",{staticClass:"color-gray1 f12",staticStyle:{"line-height":"22px"},domProps:{textContent:t._s(e.code)}}),a("p",{staticClass:"color-gray",staticStyle:{"line-height":"22px","margin-top":"8px"},domProps:{textContent:t._s(e.remark)}})])])})),a("user-select",{attrs:{title:"检查人",multi:!0,mode:"view",editabled:!1},model:{value:t.batchData.inspector,callback:function(e){t.$set(t.batchData,"inspector",e)},expression:"batchData.inspector"}}),a("user-select",{attrs:{title:"抄送人",multi:!0,mode:"view",editabled:!1},model:{value:t.batchData.cc,callback:function(e){t.$set(t.batchData,"cc",e)},expression:"batchData.cc"}}),a("user-select",{attrs:{title:"创建人",date:t._f("formatDate")(t.batchData.created_on),mode:"view",editabled:!1},model:{value:t.batchData.creator,callback:function(e){t.$set(t.batchData,"creator",e)},expression:"batchData.creator"}})],2),t.editable&&!t.isLoading?a("app-button-group",{attrs:{direction:"row"}},[a("app-button",{attrs:{type:"operate"},on:{click:t.batchDelete}},[t._v("\n        删除\n      ")]),a("app-button",{attrs:{type:"operate"},on:{click:t.closeBatch}},[t._v("\n        关闭\n      ")]),a("app-button",{attrs:{type:"operate"},on:{click:t.batchEdit}},[t._v("\n        修改\n      ")])],1):t._e(),a("loading-status",{attrs:{"is-loading":t.isLoading}})],1)])}),[],!1,null,"8cfb7986",null);e.default=i.exports},"774b":function(t,e,a){"use strict";var o=a("d18d").a,n=(a("b225"),a("17cc")),i=Object(n.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"scroll-warp",staticClass:"scroll-warp",class:{"scroll-warp-pulling":t.pulling,"scroll-warp-complete":!t.hasNext&&!t.isEmpty,"scroll-warp-empty":t.isEmpty},style:{"padding-bottom":t.numberKeyboardCoverHeight+"px"},on:{scroll:t.onScroll,touchstart:t.onTouchstart,touchmove:t.onTouchmove,touchend:t.onTouchend}},[t.allowPullDown?a("div",{staticClass:"pull-refresh-warp",style:{height:t.pullDist+"px"}},[a("div",{staticClass:"pull-refresh"},[a("div",{staticClass:"animation-refresher",class:{refreshing:t.refreshing}}),t.updateTime?a("p",{staticClass:"pull-refresh-date"},[t._v("最后成功同步："+t._s(t.updateTime))]):t._e()])]):t._e(),t._t("default"),t.loading?a("div",{staticClass:"page-loading"},[a("svg",{staticClass:"svg-loading",attrs:{viewBox:"0 0 80 80"}},[a("circle",{attrs:{cx:"40",cy:"40",r:"36"}})])]):t._e(),t.hasNext||t.isEmpty?t._e():[t.$slots.end?t._t("end"):t._e(),!t.$slots.end&&t.endText?a("div",{staticClass:"end-text"},[t._v("\n      "+t._s(t.endText)+"\n    ")]):t._e()]],2)}),[],!1,null,"2b1a346c",null);e.a=i.exports},"9d55":function(t,e,a){(t.exports=a("690e")(!1)).push([t.i,'.zjapp .scroll-warp[data-v-2b1a346c]{flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.zjapp .scroll-warp-pulling[data-v-2b1a346c]{overflow:hidden}.zjapp .scroll-warp-complete[data-v-2b1a346c]:after{content:"";display:block;height:100px}.zjapp .scroll-warp-empty[data-v-2b1a346c]{display:flex;flex-direction:column}.zjapp .pull-refresh-warp[data-v-2b1a346c]{position:relative;height:0;overflow:hidden}.zjapp .pull-refresh[data-v-2b1a346c]{position:absolute;left:0;bottom:0;height:70px;width:100%;padding:6px;text-align:center}.zjapp .pull-refresh-date[data-v-2b1a346c]{margin-top:4px;height:16px;line-height:16px;font-size:12px;color:#bcbcbc}.zjapp .page-loading[data-v-2b1a346c]{padding:10px;text-align:center}.zjapp .end-text[data-v-2b1a346c]{color:#c8c8c8;background:#f4f4f4;position:relative;line-height:76px;height:76px;text-align:center}.zjapp .end-text[data-v-2b1a346c]:after,.zjapp .end-text[data-v-2b1a346c]:before{content:"";position:absolute;width:48px;height:1px;background:#e4e4e4;top:50%;margin-top:-1px}.zjapp .end-text[data-v-2b1a346c]:after{left:50%;transform:translateX(-92px)}.zjapp .end-text[data-v-2b1a346c]:before{right:50%;transform:translateX(90px)}.zjapp .end-slot[data-v-2b1a346c]{padding:30px;line-height:18px;text-align:center;color:#c8c8c8}',""])},af4d:function(t,e,a){"use strict";(function(t){a("cc57");var o=a("e2a7"),n=a("8248"),i=a("3bd5"),l=a("fd50"),r=a("3516"),s=a("7b81"),c=a("9864"),h=a("6e1b"),u=a("07d2"),p=a("cd05");e.a={name:"CheckBatchDetail",components:{CheckUserContact:c.a,Item:u.a,UserSelect:p.a},filters:{formatDate:function(t){return Object(n.a)(t)}},data:function(){return{isLoading:!1,batchId:"",batch:{},batchData:{},editable:!1,mode:"",tempTypes:{1:"可打分，加权平均计算总分",2:"无打分，仅记录是否合格，计算合格率",3:"可打分，按得分率计算总分",4:'可打分，按"权重+得分率"计算总分',5:"可打分，按满分减扣分计算总分",6:"合同巡检",7:"实测实量",8:"质量风险",9:"得分率(打分制)",10:"加/扣分",11:"观感效果",99:"组合模板",100:"组合嵌套模板"}}},activated:function(){this.init()},methods:{init:function(){var e=this,a=this.$route.params;this.isLoading=!0,this.batchId=a&&a.id?a.id:"",l.a.all([h.a.getSpecialInspectBatchById(this.batchId),r.a.getBatchUsers(this.batchId),r.a.getBatchCCs(this.batchId)]).then((function(a){e.batch=a[0];var o=a[1];"实测实量"===e.batch.batch_type?e.mode="measure":"工序移交"===e.batch.batch_type?e.mode="process":"安全文明"===e.batch.batch_type&&(e.mode="check"),e.batchData={proj_name:e.batch.proj_name,name:e.batch.name,temp:e.batch.temp_name,temp_mode:e.batch.temp_mode,contracts:e.batch.contracts,inspector:t.map(o,(function(t){return t})),cc:a[2]||[],type:"专项巡检",creator:{id:e.batch.created_by,name:e.batch.created_by_name,mobile:e.batch.created_by_mobile,is_im_user:e.batch.is_im_user},created_by_name:e.batch.created_by_name,created_by_mobile:e.batch.created_by_mobile,created_on:e.batch.created_on},console.log("this.batchData ========",e.batchData),e.editable=e.batch.created_by===i.a.getUser().user_id,s.a.getUsersByIds([e.batch.created_by]).then((function(t){e.$set(e.batchData,"create_user_info",t[0])})),e.isLoading=!1}))},batchDelete:function(){var t=this;this.batch.id&&(1*this.batch.is_downloaded!=1?o.a.confirm("确定要删除批次吗？",(function(){o.a.loading("请稍等..."),r.a.deleteBatch(t.batch.id).then((function(){t.$router.go(-1),o.a.hideLoading()})).catch((function(t){o.a.hideLoading(),o.a.alert(t.errmsg)}))})):o.a.alert("被他人下载过的批次不能删除"))},closeBatch:function(){var t=this;this.batch.id&&o.a.confirm("关闭批次后，在APP将看不到该批次及相关问题。确定关闭批次？",(function(){o.a.loading("请稍等..."),r.a.closeBatch(t.batch.id).then((function(){t.$router.go(-1)})).catch((function(t){o.a.alert(t)})).finally((function(){o.a.hideLoading()}))}))},batchEdit:function(){this.batchId?this.$router.push("/special-inspect-batch-edit/".concat(this.batchId)):o.a.alert("缺少批次id")}}}}).call(this,a("391c"))},b225:function(t,e,a){"use strict";a("ef48")},d18d:function(t,e,a){"use strict";(function(t){a("2b45");var o,n=a("4360"),i=a("48f4"),l=a("162a"),r=a("e2a7"),s=a("a500"),c=a("6f9e"),h={};e.a={name:"Scroller",props:{buildingId:{type:String,default:""},hasNext:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},isSync:{type:Boolean,default:!0},endText:{type:String,default:""},memoryScrollTop:{type:Boolean,default:!0},keepScrollTop:{type:Boolean},hasPullDown:{type:Boolean,default:!0},onPullDown:{type:Function}},data:function(){return{pullDist:0,refreshing:!1,pulling:!1,loading:!1,scrollTop:0,isCurrKeyboard:!1,gapBottom:0}},computed:{allowPullDown:function(){return this.hasPullDown&&(!!this.$listeners.pullDown||!!this.onPullDown)},updateTime:function(){return n.a.state.global.businessDownloadTime},numberKeyboardCoverHeight:function(){return n.a.state.global.isNumberInputOpen?n.a.state.global.numberKeyboardHeight-this.gapBottom:0}},mounted:function(){var t=this;c.a.$on("numberKeyboardOpen",this.onNumberKeyboardOpen),this.$nextTick((function(){var e=t.$refs["scroll-warp"]&&t.$refs["scroll-warp"].getBoundingClientRect&&t.$refs["scroll-warp"].getBoundingClientRect();e&&(t.gapBottom=document.documentElement.clientHeight-e.bottom),t.$el&&t.$el.addEventListener("focus",(function(e){var a=e&&e.target,o=a&&a.tagName&&a.tagName.toLowerCase();if("input"===o||"textarea"===o){window.addEventListener("resize",(function e(){var o=a.getBoundingClientRect(),n=t.$el.getBoundingClientRect(),i=o.bottom-n.bottom;i>0&&t.scrollBy(i),window.removeEventListener("resize",e,!1)}),!1)}}),!0)}))},destroyed:function(){c.a.$off("numberKeyboardOpen",this.onNumberKeyboardOpen)},activated:function(){var t=this.keepScrollTop||this.$router.isBack&&this.memoryScrollTop;this.scrollTop&&t&&(this.$refs["scroll-warp"].scrollTop=this.scrollTop)},deactivated:function(){this.memoryScrollTop&&(this.scrollTop=this.$refs["scroll-warp"].scrollTop)},methods:{onScroll:function(t){var e=this,a=this.$refs["scroll-warp"].scrollTop,o=this.$refs["scroll-warp"].scrollHeight;if(a+this.$refs["scroll-warp"].clientHeight>=o-5&&!this.loading&&this.hasNext){this.loading=!0;var n=this.$listeners.loadNext();n&&n.then&&"function"==typeof n.then?n.then((function(){e.loading=!1})):this.loading=!1}this.$emit("scroll",t)},getTouchDiretion:function(t){if(!(h&&t&&t.touches&&t.touches[0]))return"";var e=t.touches[0].clientX,a=t.touches[0].clientY;return Math.abs(a-h.y)>Math.abs(e-h.x)&&Math.abs(a-h.y)>=3?a>h.y?"down":"up":""},onTouchstart:function(t){this.allowPullDown&&t.touches&&1===t.touches.length&&(h={x:t.touches[0].clientX,y:t.touches[0].clientY,scrollTop:this.$refs["scroll-warp"].scrollTop,pullDist:this.pullDist})},onTouchmove:function(t){if(this.allowPullDown&&t.touches&&1===t.touches.length){var e=this.$refs["scroll-warp"].scrollTop,a=t.touches[0].clientY,o=a-h.y,n=this.getTouchDiretion(t);"down"===n?!this.refreshing&&e<=0?(this.pulling=!0,this.pullDist=(o-h.scrollTop)/2,t.preventDefault()):this.pulling=!1:"up"===n?this.pullDist>0&&(this.pullDist=h.pullDist-(h.y-a),t.preventDefault()):this.pullDist=h.pullDist}},onTouchend:function(){var t=this;this.allowPullDown&&(h={},this.pulling=!1,this.pullDist>=70&&this.isSync?this.refreshing?this.makePullTo(70):this.makePullTo(70).then((function(){if(t.refreshing=!0,t.onPullDown){var e=t.onPullDown();e&&e.then&&"function"==typeof e?e.finally((function(){t.refreshing=!1,t.makePullTo(0)})):(t.refreshing=!1,t.makePullTo(0))}else t.dataSync().then((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")})).catch((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")}))})):(this.refreshing=!1,this.makePullTo(0)))},makePullTo:function(t){var e=this,a=this.pullDist,o=t,n=o-a,i=a;return a===o?Promise.resolve():new Promise((function(t){!function l(){window.requestAnimationFrame((function(){i+=n/6,e.pullDist=i,a<o&&i<o||a>o&&i>o?l():(e.pullDist=o,e.refreshing=!1,t())}))}()}))},dataSync:function(){var t,e=i.default.getCurrentModuleCode(),a=i.default.getCurrentRoute(),o=a.meta&&a.meta.isTodo;if(i.default.isModuleNeedBuilding(e)&&!o){if(!this.buildingId)return new Promise((function(t){setTimeout((function(){t()}),500)}));t=this.buildingId}return s.a.addTrack("公共-手动下拉刷新","",""),l.a.beginManualUpdate(),i.default.checkSync(t).then((function(t){return l.a.endManualUpdate(),t})).catch((function(t){$log.error("下拉刷新错误",t),t&&"Error: Network Error"===t.toString()?r.a.alert("当前网络无法同步数据"):r.a.alert(t),l.a.endManualUpdate()}))},getScrollHeight:function(){return this.$refs["scroll-warp"].offsetHeight},getScrollTop:function(){return this.$refs["scroll-warp"].scrollTop},setScrollTop:function(t){this.$refs["scroll-warp"].scrollTop=t},scrollBy:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=this.getScrollTop(),i=n+t,l=Math.round(a/16.7),r=t/l,s=n,c=o=+new Date;return n===i?Promise.resolve():new Promise((function(t){!function a(){window.requestAnimationFrame((function(){c===o&&(s+=r,e.$refs["scroll-warp"].scrollTop=s,n<i&&s<i||n>i&&s>i?a():(e.$refs["scroll-warp"].scrollTop=i,t()))}))}()}))},scrollTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,a=this.getScrollTop(),o=t-a;return this.scrollBy(o,e)},scrollToEle:function(t){var e=t.keyboardHeight||232,a=(t=t.$el?t.$el:t).getBoundingClientRect(),o=this.$refs["scroll-warp"].getBoundingClientRect();if(a&&o){var i=document.documentElement.clientHeight-(n.a.state.global.isNumberInputOpen?e:0),l=o.bottom<i?o.bottom:i,r=o.top-a.top,s=a.bottom-l;r>0?this.scrollBy(-r-10):s>0&&this.scrollBy(s+10)}},isCurrent:function(e,a){var o=this;e.length&&t.each(e,(function(t){t._uid===a?o.isCurrKeyboard=!0:o.isCurrent(t.$children,a)}))},onNumberKeyboardOpen:function(t){this.isCurrKeyboard=!1,this.isCurrent(this.$children,t._uid),this.isCurrKeyboard&&this.scrollToEle(t)}}}}).call(this,a("391c"))},dd86:function(t,e,a){"use strict";a("2e86")},ef48:function(t,e,a){var o=a("9d55");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,a("85cb").default)("a1a65c0c",o,!0,{sourceMap:!1,shadowMode:!1})}}]);