(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-706ccd64"],{"0c1a":function(t,e,a){"use strict";a("8fb2")},1304:function(t,e,a){"use strict";var i=a("c5a7");e.__esModule=!0,e.SlotsMixin=void 0;var n=i(a("329b")).default.extend({methods:{slots:function(t,e){void 0===t&&(t="default");var a=this.$slots,i=this.$scopedSlots[t];return i?i(e):a[t]}}});e.SlotsMixin=n},"19a9":function(t,e,a){"use strict";a("7d4e")},2064:function(t,e,a){"use strict";e.__esModule=!0,e.addUnit=function(t){if(!(0,i.isDef)(t))return;return t=String(t),(0,n.isNumber)(t)?t+"px":t};var i=a("b7b4"),n=a("f24f")},"27c4":function(t,e,a){var i=a("db6b2");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a("85cb").default)("42e360af",i,!0,{sourceMap:!1,shadowMode:!1})},"2d6e":function(t,e,a){var i=a("7eb2");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a("85cb").default)("53a2fbaa",i,!0,{sourceMap:!1,shadowMode:!1})},3050:function(t,e,a){"use strict";e.__esModule=!0,e.default=void 0;e.default={name:"姓名",tel:"电话",save:"保存",confirm:"确认",cancel:"取消",delete:"删除",complete:"完成",loading:"加载中...",telEmpty:"请填写电话",nameEmpty:"请填写姓名",confirmDelete:"确定要删除么",telInvalid:"请填写正确的电话",vanContactCard:{addText:"添加联系人"},vanContactList:{addText:"新建联系人"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计："},vanCoupon:{valid:"有效期",unlimited:"无使用门槛",discount:function(t){return t+"折"},condition:function(t){return"满"+t+"元可用"}},vanCouponCell:{title:"优惠券",tips:"使用优惠",count:function(t){return t+"张可用"}},vanCouponList:{empty:"暂无优惠券",exchange:"兑换",close:"不使用优惠",enable:"可使用优惠券",disabled:"不可使用优惠券",placeholder:"请输入优惠码"},vanAddressEdit:{area:"地区",postal:"邮政编码",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",postalEmpty:"邮政编码格式不正确",defaultAddress:"设为默认收货地址",telPlaceholder:"收货人手机号",namePlaceholder:"收货人姓名",areaPlaceholder:"选择省 / 市 / 区"},vanAddressEditDetail:{label:"详细地址",placeholder:"街道门牌、楼层房间号等信息"},vanAddressList:{add:"新增地址"}}},4412:function(t,e,a){"use strict";e.__esModule=!0,e.createBEM=function(t){return function(e,a){return e&&"string"!=typeof e&&(a=e,e=""),e=i(t,e,"__"),a?[e,n(e,a)]:e}};function i(t,e,a){return e?t+a+e:t}function n(t,e){if("string"==typeof e)return i(t,e,"--");if(Array.isArray(e))return e.map((function(e){return n(t,e)}));var a={};return e&&Object.keys(e).forEach((function(i){a[t+"--"+i]=e[i]})),a}},"4aef":function(t,e,a){"use strict";var i=a("dd16").a,n=a("17cc"),o=Object(n.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("span",{class:this.classSet[this.status]},[this._v(this._s(this.text||this.status))])}),[],!1,null,null,null);e.a=o.exports},"4d1b":function(t,e,a){"use strict";var i=a("c5a7");e.__esModule=!0,e.default=void 0;var n=i(a("329b")),o=a("53a5"),r=i(a("3050")),s=n.default.prototype,c=n.default.util.defineReactive;c(s,"$vantLang","zh-CN"),c(s,"$vantMessages",{"zh-CN":r.default});var l={messages:function(){return s.$vantMessages[s.$vantLang]},use:function(t,e){var a;s.$vantLang=t,this.add(((a={})[t]=e,a))},add:function(t){void 0===t&&(t={}),(0,o.deepAssign)(s.$vantMessages,t)}};e.default=l},"53a5":function(t,e,a){"use strict";e.__esModule=!0,e.deepAssign=o;var i=a("b7b4"),n=Object.prototype.hasOwnProperty;function o(t,e){return Object.keys(e).forEach((function(a){!function(t,e,a){var r=e[a];(0,i.isDef)(r)&&(n.call(t,a)&&(0,i.isObj)(r)&&"function"!=typeof r?t[a]=o(Object(t[a]),e[a]):t[a]=r)}(t,e,a)})),t}},6147:function(t,e,a){"use strict";e.__esModule=!0,e.createNamespace=function(t){return t="van-"+t,[(0,n.createComponent)(t),(0,i.createBEM)(t),(0,o.createI18N)(t)]};var i=a("4412"),n=a("7e06"),o=a("65af")},"65af":function(t,e,a){"use strict";var i=a("c5a7");e.__esModule=!0,e.createI18N=function(t){var e=(0,o.camelize)(t)+".";return function(t){for(var a=(0,n.get)(r.default.messages(),e+t)||(0,n.get)(r.default.messages(),t),i=arguments.length,o=new Array(i>1?i-1:0),s=1;s<i;s++)o[s-1]=arguments[s];return"function"==typeof a?a.apply(void 0,o):a}};var n=a("b7b4"),o=a("a1aa"),r=i(a("4d1b"))},"65e9":function(t,e,a){"use strict";(function(t){a("5ab2"),a("6d57"),a("e10e");var i=a("28f8"),n=a("4360"),o=a("48f4"),r=a("162a"),s=a("f2d3"),c=a("6906"),l=a("a18c"),d=a("c745");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){Object(i.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e.a={name:"SynchronizeTipBar",props:{isTodo:{type:Boolean},useDownload:{type:Boolean,default:!0},enterDoCheck:{type:Boolean,default:!0},buildingId:{type:String,default:""},automaticUpdateCallback:{type:Function,default:null}},data:function(){return{currentModuleCode:"",oneUpdateData:!0}},computed:{projId:function(){return n.a.state.global.currentProject.id},waitUploadNum:function(){return n.a.state.global.waitUploadNum},hasTopProgress:function(){return n.a.state.global.hasTopProgress},hasChanged:function(){if(!this.useDownload)return!1;if(this.currentModuleCode){var t,e=o.default.isModuleNeedBuilding(this.currentModuleCode)&&!this.isTodo;return!(e&&!this.buildingId)&&(t=this.isTodo?n.a.state.global.todoChangedStatus||{}:n.a.state.global.businessChangedStatus||{},e?!!t[this.currentModuleCode]&&t[this.currentModuleCode][this.buildingId]:t[this.currentModuleCode])}return!1},show:function(){return(this.hasChanged||this.waitUploadNum)&&!this.hasTopProgress},oneDataSync:function(){return this.$store.state.app.oneDataSync}},watch:{hasChanged:function(t){var e=this;t&&this.$nextTick((function(){setTimeout((function(){var t=e.$refs["synchronize-tip-bar"];if(t&&t.style){t.style.display="none";t.offsetHeight;t.style.display="block"}}),100)}))},buildingId:function(t){this.currentModuleCode&&o.default.isModuleNeedBuilding(this.currentModuleCode)&&t&&(console.log("楼栋重新加载，是否再次自动加载数据：",this.oneUpdateData),this.oneUpdateData&&this.automaticLogic(),this.checkSync())},show:function(t){t?this.$emit("show"):this.$emit("hide")}},activated:function(){this.init()},methods:{init:function(){this.getCurrentModuleCode(),this.enterDoCheck&&!l.a.isBack&&this.checkSync(),this.automaticLogic()},automaticLogic:function(){var t=this;this.$router.isBack||(this.oneUpdateData=!0,d.a.getAutomaticLoadData().then((function(e){$log.log("是否要自动加载 ===> ",e&&t.oneDataSync&&"function"==typeof t.automaticUpdateCallback),e&&t.oneDataSync&&"function"==typeof t.automaticUpdateCallback&&t.dataSync().then((function(e){console.log("是否需要初始化页面 ====> ",Boolean(e)),e&&t.automaticUpdateCallback()}))})))},getCurrentModuleCode:function(){var t=o.default.getCurrentModuleCode(),e=this.isTodo?"todo":"";this.currentModuleCode=t||e},checkSync:function(){var e=this,a="checkDataUpdate",i=this.currentModuleCode,r=this.buildingId,l=n.a.state.global.isLeader?this.projId:"";return!o.default.isModuleNeedBuilding(i)||r||this.isTodo?(this.isTodo&&(a+="_todo"),i&&(a+="_".concat(i)),r&&(a+="_".concat(r)),c.a.execAfterInterval(120,a).then((function(){return e.isTodo?"todo"===i?s.a.getModuleList().then((function(e){var a=t.map(e,"code");return o.default.hasTodoChangedData("",a)})):o.default.hasTodoChangedData("",[i]):o.default.hasBusinessChangedData(l,[i],r)})).then((function(t){if(e.isTodo){var a=p({},n.a.state.global.todoChangedStatus);a[i]=t,n.a.commit("global/SET_TODO_CHANGED_STATUS",a)}else{var o=p({},n.a.state.global.businessChangedStatus);if(r){var s=o[i]?o[i]:{};s[r]=t,o[i]=s}else o[i]=t;n.a.commit("global/SET_BUSINESS_CHANGED_STATUS",o)}})).catch((function(t){return t&&!0===t.timeNotTo?($log.debug(t.msg),!1):$q.reject(t)}))):Promise.resolve()},dataSync:function(){var t=this.currentModuleCode,e=this.buildingId,a=o.default.isModuleNeedBuilding(t),i=a&&!e;return $log.log(["模块名：",t," 楼栋id：",e," 当前模块是否需要楼栋id：",a," 判断是否终止自动更新：",i]),i?Promise.resolve():(this.oneUpdateData=!1,r.a.beginManualUpdate(),o.default.checkSync(e).then((function(t){return r.a.endManualUpdate(),t})).catch((function(t){$log.error("自动更新错误",t),r.a.endManualUpdate()})))}}}}).call(this,a("391c"))},6718:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("163d"),a("cc57");var i=a("b7b4"),n={name:"SwipeTab",props:{title:{type:String}},data:function(){return{offset:0,style:{},bem:Object(i.createNamespace)("swipe-item")[1](),parent:{}}},computed:{index:function(){return this.parent.tabs.indexOf(this)}},beforeCreate:function(){this.$parent.swipes.push(this)},created:function(){this.findParent("SwipeTabs")},destroyed:function(){this.$parent.swipes.splice(this.$parent.swipes.indexOf(this),1)},mounted:function(){var t=this,e=this.parent.tabs,a=this.parent.$slots.default.indexOf(this.$vnode);e.splice(-1===a?e.length:a,0,this),this.$nextTick((function(){var e=t.$parent,a=e.vertical,i=e.computedWidth,n=e.computedHeight;t.style={width:i+"px",height:a?i+"px":n+"px",transform:"translate".concat(a?"Y":"X","(").concat(t.offset,"px)")}}))},methods:{findParent:function(t){for(var e=this.$parent;e;){if(e.$options.name===t){this.parent=e;break}e=e.$parent}}}},o=a("17cc"),r=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",this._g({class:this.bem,style:this.style},this.$listeners),[this._t("default")],2)}),[],!1,null,null,null).exports,s={name:"SwipeTabs",model:{prop:"tabIndex",event:"change"},props:{tabIndex:{type:Number,default:0},markType:{type:String,default:"line"},showTabs:{type:Boolean,default:!0},touchable:{type:Boolean,default:!0}},data:function(){return{curIndex:0,initIndex:0,tabs:[],tabScrollVersion:null}},computed:{tabsPadding:function(){return Math.max(24-4*this.tabs.length,0)},markLeft:function(){var t=(100-2*this.tabsPadding)/this.tabs.length;return this.tabsPadding+(this.curIndex+.5)*t}},watch:{tabIndex:function(t){t!==this.curIndex&&(this.curIndex=t,this.$refs.swipe.swipeTo(t,{immediate:!0}))},curIndex:function(){this.scrollTabsTocurrent()}},created:function(){this.initIndex=this.tabIndex,this.curIndex=this.tabIndex},activated:function(){this.initIndex=this.tabIndex,this.curIndex=this.tabIndex},mounted:function(){this.$nextTick(this.scrollTabsTocurrent)},methods:{changeIndex:function(t){this.$refs.swipe.swipeTo(t)},onChange:function(t){this.curIndex=t,this.$emit("change",t)},scrollTabsTocurrent:function(){var t=this.$refs["tabs-scroll"],e=this.$refs["tab-point"]?this.$refs["tab-point"][this.curIndex]:null;if(t&&e){var a=t.getBoundingClientRect(),i=e.getBoundingClientRect(),n=i.left-a.left,o=a.right-i.right;n<0&&this.tabScrollBy(n),o<0&&this.tabScrollBy(-o)}},tabScrollBy:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,i=this.$refs["tabs-scroll"];if(i){var n=i.scrollLeft,o=n+t,r=Math.round(a/16.7),s=t/r,c=n,l=this.tabScrollVersion=+new Date;return n===o?Promise.resolve():new Promise((function(t){!function a(){window.requestAnimationFrame((function(){l===e.tabScrollVersion&&(c+=s,i.scrollLeft=c,n<o&&c<o||n>o&&c>o?a():(i.scrollTop=o,t()))}))}()}))}}}},c=(a("bcf4"),Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"swipe-tabs"},[t.showTabs?["line"===t.markType?a("div",{staticClass:"tabs border-bottom",style:{padding:"0 "+Math.max(24-4*t.tabs.length,0)+"%"}},[t._l(t.tabs,(function(e){return a("div",{key:e.index,staticClass:"tab",class:{"tab-current":e.index===t.curIndex},on:{click:function(a){t.changeIndex(e.index)}}},[t._v("\n        "+t._s(e.title)+"\n      ")])})),a("div",{staticClass:"mark-line",style:{left:t.markLeft+"%"}})],2):t._e(),"point"===t.markType?a("div",{staticClass:"tabs-point border-bottom"},[a("div",{ref:"tabs-scroll",staticClass:"tabs-scroll"},t._l(t.tabs,(function(e){return a("div",{key:e.index,ref:"tab-point",refInFor:!0,staticClass:"tab-point",class:{"tab-current":e.index===t.curIndex},on:{click:function(a){t.changeIndex(e.index)}}},[t._v("\n          "+t._s(e.title)+"\n        ")])})))]):t._e()]:t._e(),t._t("fixed"),a("van-swipe",{ref:"swipe",attrs:{"initial-swipe":t.initIndex,"show-indicators":!1,duration:250,loop:!1,touchable:t.touchable},on:{change:t.onChange}},[t._t("default")],2)],2)}),[],!1,null,"025feb99",null));e.b=c.exports},"7d4e":function(t,e,a){var i=a("c59b");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a("85cb").default)("62c5f5a2",i,!0,{sourceMap:!1,shadowMode:!1})},"7e06":function(t,e,a){"use strict";var i=a("c5a7");e.__esModule=!0,e.unifySlots=s,e.createComponent=function(t){return function(e){var a;return"function"==typeof e&&(e={functional:!0,props:(a=e).props,model:a.model,render:function(t,e){return a(t,e.props,s(e),e)}}),e.functional||(e.mixins=e.mixins||[],e.mixins.push(o.SlotsMixin)),e.name=t,e.install=r,e}},a("4d1b");var n=a("a1aa"),o=a("1304");i(a("329b"));function r(t){var e=this.name;t.component(e,this),t.component((0,n.camelize)("-"+e),this)}function s(t){var e=t.scopedSlots||t.data.scopedSlots||{},a=t.slots();return Object.keys(a).forEach((function(t){e[t]||(e[t]=function(){return a[t]})})),e}},"7eb2":function(t,e,a){(t.exports=a("690e")(!1)).push([t.i,".zjapp .synchronize-tip-bar[data-v-66826030]{height:30px;padding:5px 15px;line-height:20px;text-align:center;background-color:#ffe6e6;color:#ff6060;font-size:14px}.zjapp .synchronize-tip-bar .icon-caution[data-v-66826030]{line-height:20px;margin-right:5px}@media screen and (-webkit-min-device-pixel-ratio:1){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 100%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:1.5){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 66.6667%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:2){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 50%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:2.625){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 38.0952%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:3){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 33.3333%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:4){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 25%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}",""])},"8fb2":function(t,e,a){var i=a("cbbc");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a("85cb").default)("d7dcf27e",i,!0,{sourceMap:!1,shadowMode:!1})},"967a":function(t,e,a){"use strict";var i=a("8d95");e.a={REPAIR_DEADLINE_STATUS:{name:"repair_deadline_status",status:["待整改"],module:[i.a.CHECK]}}},"9bfd":function(t,e,a){"use strict";(function(t){a("f548"),a("cc57");var i=a("fd50"),n=a("f369"),o=a("774b"),r=a("fa4f"),s=a("3bd5"),c=a("3516"),l=a("6144"),d=a("bc69"),u=a("0654"),p=a("3122"),f=a("48f4"),h=a("07d2"),b=a("6bf2"),g=a.n(b),m=a("a500"),x=a("f7ab"),v=a("6f9e"),y=a("e2a7"),_=a("6718"),w=a("a18c");e.a={name:"CheckQualityIndex",components:{CheckGuide:n.a,Scroller:o.default,ItemList:r.a,Item:h.default,SynchronizeTipBar:x.a,SwipeTabs:_.b,SwipeTab:_.a},data:function(){return{isLoadingBatch:!0,defaultBatch:{},hasNewBatchRights:!1,tabIndex:0,draftLimit:10,draftData:[],isDraftLoading:!1,submittedLimit:10,submittedData:[],isSubmitLoading:!1}},computed:{tabsWidth:function(){return window.innerWidth/2},draftDataShow:function(){return this.draftData&&this.draftData.length?this.draftData.slice(0,this.draftLimit):[]},submittedDataShow:function(){return this.submittedData&&this.submittedData.length?this.submittedData.slice(0,this.submittedLimit):[]},batchText:function(){return this.isLoadingBatch?"正在加载检批次...":this.defaultBatch&&this.defaultBatch.id?this.defaultBatch.is_closed?"上次使用的批次已关闭":this.defaultBatch.name:this.hasNewBatchRights?"请新建一个检查批次":"暂无与你相关的检查批次"},batchTips:function(){return this.isLoadingBatch?"":this.defaultBatch&&this.defaultBatch.id&&!this.defaultBatch.is_closed?"切换批次":""},batchArrow:function(){return!this.isLoadingBatch&&(!(!this.defaultBatch||!this.defaultBatch.id)||this.hasNewBatchRights)}},created:function(){Object(v.e)(this.init)},activated:function(){var t=l.a.getString("check-quality-index-tab-index");t&&(this.tabIndex=parseInt(t),l.a.remove("check-quality-index-tab-index")),this.init()},methods:{backEvent:function(){window.__YL_SUPER_APP__?w.a.back():this.$router.replace("/layout/workbench",!0)},onRefresh:function(t){this.init().then((function(){"function"==typeof t&&t(!1)}))},beforeCheckGuideOpen:function(){if(!this.defaultBatch||!this.defaultBatch.id)return y.a.alert("请先选择批次"),!1},batchClick:function(){this.isLoadingBatch||(this.defaultBatch&&this.defaultBatch.id?(m.a.addTrack("质量检查-首页-进入批次列表"),this.$router.push("/checkQualityBatchList")):this.hasNewBatchRights&&this.$router.push("/checkQualityBatchAdd"))},problemAdd:function(t){this.defaultBatch.id&&!this.defaultBatch.is_closed?this.$router.push({name:"CheckQualityEdit"}):y.a.alert("请先选择检查批次")},problemEdit:function(t){this.$router.push({name:"CheckQualityEdit",params:{id:t.id}})},problemDetail:function(t){this.$router.push({name:"CheckQualityDetail",params:{id:t.id}})},init:function(){var t=this;return this.getDetaulBatch().then((function(){return t.getDraftData()})).then((function(){return t.getSubmittedData()}))},getDetaulBatch:function(){var t=this,e=s.a.getUser(),a=l.a.getObject(d.a.HOME_PAGE_DEFAULT_PROJECT,l.a.level.user)||{};return this.isLoadingBatch=!0,c.a.checkUserBatchRights(e.user_id).then((function(e){t.hasNewBatchRights=!!e})).then((function(){return c.a.getDefaultBatch("质量检查",a.id).then((function(e){e?t.defaultBatch=e:(t.defaultBatch={},t.draftData=[],t.submittedData=[])}))})).finally((function(){t.isLoadingBatch=!1}))},getDraftData:function(){var e=this;return this.isDraftLoading=!0,this.defaultBatch.is_closed?(this.draftData=[],this.isDraftLoading=!1,i.a.when()):u.a.getCheckProblemDraftList(this.defaultBatch.id).then((function(a){t.each(a,(function(t){t.thumbnail=p.a.getDefaultThumbnailFromList(t.image_file,"质量检查"),t.regist_date=g()(t.created_on).format("MM-DD HH:mm")})),e.draftData=a,e.isDraftLoading=!1}))},getSubmittedData:function(){var e=this;return this.isSubmitLoading=!0,this.defaultBatch.is_closed?(this.submittedData=[],this.isSubmitLoading=!1,i.a.when()):u.a.getCheckProblemList(this.defaultBatch.id).then((function(a){var i=t.filter(a.data,(function(t){var e=JSON.parse(t.image_file||"[]");return t.thumbnail=p.a.getDefaultThumbnailFromList(e,"质量检查"),t.regist_date=g()(t.regist_date).format("MM-DD HH:mm"),p.a.isNeedThumbnail(e)}));f.default.autoLoadThumbnail(i,"质量检查","image_file","thumbnail","checkquality_problem"),e.submittedData=a.data,e.isSubmitLoading=!1}))},pageDraft:function(){this.draftLimit=this.draftLimit+10},pageSubmit:function(){this.submittedLimit=this.submittedLimit+10}}}}).call(this,a("391c"))},a1aa:function(t,e,a){"use strict";e.__esModule=!0,e.camelize=function(t){return t.replace(i,(function(t,e){return e.toUpperCase()}))},e.padZero=function(t,e){void 0===e&&(e=2);var a=t+"";for(;a.length<e;)a="0"+a;return a};var i=/-(\w)/g},b7b4:function(t,e,a){"use strict";var i=a("c5a7");e.__esModule=!0,e.noop=function(){},e.isDef=c,e.isObj=function(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)},e.get=function(t,e){var a=e.split("."),i=t;return a.forEach((function(t){i=c(i[t])?i[t]:""})),i},e.isServer=e.addUnit=e.createNamespace=void 0;var n=i(a("329b")),o=a("6147");e.createNamespace=o.createNamespace;var r=a("2064");e.addUnit=r.addUnit;var s=n.default.prototype.$isServer;function c(t){return null!=t}e.isServer=s},bcf4:function(t,e,a){"use strict";a("27c4")},c59b:function(t,e,a){(t.exports=a("690e")(!1)).push([t.i,".zjapp .item-list{position:relative;padding:10px;display:flex;align-items:center;background-color:#fff;min-height:100px}.zjapp .item-list .img{display:block;width:80px;height:80px;background:no-repeat 50%;background-size:cover;background-color:#ddd}.zjapp .item-list .item-list-con{flex:1;padding:0 15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.zjapp .item-list .item-list-con .title{height:30px;line-height:24px;color:#111;font-size:16px;padding-top:6px;margin:0;padding-right:10px;margin-right:-10px;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;font-weight:400}.zjapp .item-list .item-list-con .title .type-tag{display:inline-block;height:16px;line-height:16px;padding:0 4px;border-radius:2px;border:1px solid #4275e8;color:#4275e8;font-size:12px;zoom:.8;margin:3px 0 0 0;vertical-align:text-top}.zjapp .item-list .item-list-con .text{height:30px;line-height:24px;color:#8c8c8c;padding-bottom:6px;padding-right:11px;margin-right:-10px}.zjapp .item-list .item-list-con .text,.zjapp .item-list .item-list-con .time{font-size:14px;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.zjapp .item-list .item-list-con .time{height:20px;line-height:20px;color:#b3b3b3;padding-right:11px!important;margin-right:-10px!important}.zjapp .item-list .item-list-con .time .ion{color:#a6a6a6;font-size:20px;font-weight:700;margin-right:5px;vertical-align:top}.zjapp .item-list .item-list-r{width:60px;line-height:18px;text-align:center}.zjapp .item-list .item-list-status{min-width:4em;line-height:18px;text-align:center;white-space:normal;font-size:14px}.zjapp .item-list .icon-unread{display:inline-block;text-align:center;width:12px;height:12px;border-radius:6px;background-color:red}.zjapp .item-list .icon-return,.zjapp .item-list .icon-timeout,.zjapp .item-list .icon-urgent{display:inline-block;width:16px;height:16px;text-align:center;line-height:16px;font-size:12px;font-style:normal;color:#fff;border-radius:2px;-webkit-border-radius:2px;vertical-align:top;margin-top:4px;margin-right:5px}.zjapp .item-list .icon-timeout{background:#964bfe}.zjapp .item-list .icon-return{background:#fe8b00}.zjapp .item-list .icon-urgent{background:#ff3c3d}.zjapp .item-list .icon-return:last-child,.zjapp .item-list .icon-timeout:last-child,.zjapp .item-list .icon-urgent:last-child{margin-right:0}.zjapp .item-list-tip{height:70px;line-height:60px;color:#b4b4b4;text-align:center}.zjapp .status-new-tag{position:absolute;right:0;top:0;width:50px;height:50px;overflow:hidden;z-index:10}.zjapp .status-new-tag>.tag{position:absolute;right:-32px;bottom:22px;height:20px;line-height:20px;width:100px;color:#fff;font-size:12px;transform:rotate(45deg);text-align:center;border-width:1px;border-style:solid}.zjapp .time-status{font-size:10px;color:#999}",""])},c5a7:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},cbbc:function(t,e,a){(t.exports=a("690e")(!1)).push([t.i,".zjapp .swipe-tabs[data-v-258ce8f2]{flex:1}",""])},db6b2:function(t,e,a){(t.exports=a("690e")(!1)).push([t.i,'.zjapp .swipe-tabs[data-v-025feb99]{display:flex;flex-direction:column;flex:1;overflow:hidden}.zjapp .tabs[data-v-025feb99]{position:relative;display:flex;background-color:#fff}.zjapp .tab[data-v-025feb99]{flex:1;height:40px;line-height:20px;padding:10px;font-size:14px;text-align:center;box-sizing:border-box}.zjapp .tab-current[data-v-025feb99]{color:#4275e8}.zjapp .mark-line[data-v-025feb99]{position:absolute;bottom:0;left:0;width:20px;height:2px;margin-left:-10px;background-image:linear-gradient(90deg,#5ea2ff,#4f83eb 50%,#4275e8);transition:left .4s cubic-bezier(.1,.7,.1,1)}.zjapp .tabs-point[data-v-025feb99]{position:relative;z-index:1;height:40px;font-size:0;text-align:center;background-color:#fff;overflow:visible}.zjapp .tabs-scroll[data-v-025feb99]{position:relative;padding-bottom:3px;margin-bottom:-3px;white-space:nowrap;overflow-x:auto}.zjapp .tabs-scroll[data-v-025feb99]::-webkit-scrollbar{display:none}.zjapp .tab-point[data-v-025feb99]{display:inline-block;padding:10px 15px;line-height:20px;font-size:16px;color:#333;white-space:nowrap}.zjapp .tab-point.tab-current[data-v-025feb99]{position:relative;z-index:3;color:#4275e8}.zjapp .tab-point.tab-current[data-v-025feb99]:after{content:"";position:absolute;z-index:3;bottom:-3px;left:50%;margin-left:-3px;width:7px;height:7px;border-radius:50%;background-color:#4275e8}',""])},dd16:function(t,e,a){"use strict";(function(t){e.a={name:"StatusText",props:{status:{type:String},text:{type:String},extend:{type:Object,default:function(){return{}}},statusStyles:{type:Object,default:function(){return{}}}},data:function(){return{classSet:t.extend({"草稿":"color-gray","暂存":"color-gray","检查中":"color-orange","待整改":"color-red","待复验":"color-orange","待验收":"color-red","待报验":"color-red","待申请进场":"color-red","待初验":"color-red","待送检":"color-red","待上传报告":"color-red","待退场":"color-red","待建设单位验收":"color-red","待区域验收":"color-red","供应链退回":"color-red","预创建":"color-status-blue","已提交":"color-green","已整改":"color-green","已验收":"color-green","已通过":"color-green","已退场":"color-gray","已关闭":"color-gray","非正常关闭":"color-gray","已退回":"color-red","已完成":"color-green","已甩项":"color-gray","检查完毕":"color-green","送检合格":"color-green","复验合格":"color-green","验收合格":"color-green","验收不合格":"color-red","未验收":"color-orange","待点评":"color-orange","已点评":"color-green","合格":"color-green","不合格":"color-red","待审核":"color-orange","已发布":"color-green","已拒绝":"color-red","进度正常":"color-green","进度滞后":"color-red","正常":"color-green","滞后":"color-red","施工单位验收合格":"color-green","监理单位验收合格":"color-green","建设单位验收合格":"color-green","施工单位验收不合格":"color-red","监理单位验收不合格":"color-red","建设单位验收不合格":"color-red"},this.extend)}},mounted:function(){}}}).call(this,a("391c"))},e89f:function(t,e,a){"use strict";var i=a("04f3"),n=a("cf09"),o=a("4360"),r=0;e.a={name:"PopupMixin",data:function(){return{backButtonEvent:null}},watch:{show:function(t){var e=this;if(t){if(this.$nextTick((function(){e.$el&&e.$el.style&&(e.$el.style.zIndex=++n.a.zIndex,r++,o.a.commit("app/SET_HAS_POPUP",!!r))})),!this.backButtonEvent){var a=this.close||this.closePopup;this.backButtonEvent=Object(i.a)(a)}}else--r<0&&(r=0),o.a.commit("app/SET_HAS_POPUP",!!r),this.backButtonEvent&&(Object(i.c)(this.backButtonEvent),this.backButtonEvent=null)}},methods:{}}},e8cbc:function(t,e,a){"use strict";a.r(e);var i=a("9bfd").a,n=(a("0c1a"),a("17cc")),o=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-content",{attrs:{title:"质量检查","on-close":t.backEvent}},[a("check-guide",{attrs:{slot:"header-bar-right",module:"check-quality","section-id":t.defaultBatch.bidsection_id,"before-open":t.beforeCheckGuideOpen},slot:"header-bar-right"}),a("item",{staticClass:"bg-sub-theme",attrs:{border:"bottom","icon-right":t.batchArrow?"arrow-right":""},on:{click:t.batchClick}},[a("div",{staticClass:"item-text"},[t._v(t._s(t.batchText))]),a("div",{staticClass:"item-font color-gray"},[t._v(t._s(t.batchTips))])]),a("swipe-tabs",{attrs:{color:"#4275e8","title-active-color":"#4275e8","line-width":t.tabsWidth},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[a("swipe-tab",{attrs:{title:"草稿"}},[a("synchronize-tip-bar",{attrs:{"automatic-update-callback":t.init,"use-download":!1}}),a("scroller",{attrs:{"has-next":t.draftLimit<t.draftData.length,"is-empty":!t.draftData.length,"end-text":""},on:{pullDown:t.init,loadNext:t.pageDraft}},[t._l(t.draftDataShow,(function(e,i){return a("item-list",{key:i,attrs:{img:e.thumbnail,title:e.item_full_name||"未选检查项",detail:(e.desc_name?e.desc_name+" ":"")+(e.remark||""),footer:e.regist_date+" "+(e.place||"")},on:{click:function(a){t.problemEdit(e)}}})})),a("loading-status",{attrs:{"is-loading":t.isDraftLoading,"is-empty":!t.draftData.length,"empty-text":"请登记问题"}})],2)],1),a("swipe-tab",{attrs:{title:"已提交"}},[a("synchronize-tip-bar",{attrs:{"use-download":!1}}),a("scroller",{attrs:{"has-next":t.submittedLimit<t.submittedData.length,"is-empty":!t.submittedData.length},on:{pullDown:t.init,loadNext:t.pageSubmit}},[t._l(t.submittedDataShow,(function(e,i){return a("item-list",{key:i,attrs:{"is-unread":e.unread,"is-timeout":e.is_timeout,"is-urgent":"紧急"==e.emergency_degree||"特急"==e.emergency_degree,"is-return":e.sent_back_times>0,img:e.thumbnail,title:e.item_full_name||"未选检查项",detail:(e.desc_name?e.desc_name+" ":"")+(e.remark||""),footer:e.regist_date+" "+(e.place||""),status:e.status,"status-text":e.status_text},on:{click:function(a){t.problemDetail(e)}}})})),a("loading-status",{attrs:{"is-loading":t.isSubmitLoading,"is-empty":!t.submittedData||!t.submittedData.length,"empty-text":"这里暂无数据"}})],2)],1)],1),a("app-button-group",{attrs:{"fixed-bottom":""}},[a("app-button",{on:{click:function(e){t.problemAdd()}}},[a("van-icon",{attrs:{name:"plus"}}),t._v("\n      登记问题\n    ")],1)],1)],1)}),[],!1,null,"258ce8f2",null);e.default=o.exports},f24f:function(t,e,a){"use strict";e.__esModule=!0,e.isNumber=function(t){return/^\d+(\.\d+)?$/.test(t)},e.isNaN=function(t){if(Number.isNaN)return Number.isNaN(t);return t!=t}},f7ab:function(t,e,a){"use strict";var i=a("65e9").a,n=(a("f7d4"),a("17cc")),o=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("div",{ref:"synchronize-tip-bar",staticClass:"synchronize-tip-bar"},[a("icon",{attrs:{name:"caution"}}),t.waitUploadNum?a("span",[t._v("您有"+t._s(t.waitUploadNum)+"条数据待上传")]):t._e(),!t.waitUploadNum&&t.hasChanged?a("span",[t._v("有新数据")]):t._e(),t._v("\n  ，下拉可"+t._s(t.waitUploadNum?"上传":"刷新")+"\n")],1):t._e()}),[],!1,null,"66826030",null);e.a=o.exports},f7d4:function(t,e,a){"use strict";a("2d6e")},fa4f:function(t,e,a){"use strict";var i=a("4aef"),n=a("967a"),o={name:"ItemList",components:{StatusText:i.a},props:{img:{type:String,default:""},title:{type:String,default:""},detail:{type:String,default:""},footer:{type:String,default:""},status:{type:String,default:""},isShowNewStatus:{type:Boolean,default:!1},statusText:{type:String,default:""},statusClassSet:{type:Object,default:function(){return{}}},typeTag:{type:String,default:""},isUnread:{type:Boolean,default:!1},isTimeout:{type:Boolean,default:!1},isUrgent:{type:Boolean,default:!1},isReturn:{type:Boolean,default:!1},repairDeadline:{type:String,default:null}},data:function(){return{repairDeadlineStatus:n.a.REPAIR_DEADLINE_STATUS.status}},computed:{bgNewClass:function(){return{"草稿":"bg-gray7 b-color","暂存":"bg-gray b-color","检查中":"bg-orange b-color","待整改":"bg-red2 b-color ","待复验":"bg-purple b-color","待验收":"bg-red b-color","待报验":"bg-red b-color","待申请进场":"bg-red b-color","待初验":"bg-red b-color","待送检":"bg-red b-color","待上传报告":"bg-red b-color","待退场":"bg-red b-color","待建设单位验收":"bg-red b-color","待区域验收":"bg-red b-color","已提交":"bg-green b-color","已整改":"bg-green b-color","已验收":"bg-green b-color","已通过":"bg-green2 b-color","已退场":"bg-gray b-color","已关闭":"bg-gray7 b-color","非正常关闭":"bg-gray b-color","已退回":"bg-red b-color","已完成":"bg-green b-color","已甩项":"bg-gray b-color","检查完毕":"bg-green b-color","送检合格":"bg-green b-color","复验合格":"bg-green b-color","验收合格":"bg-green b-color","验收不合格":"bg-red b-color","未验收":"bg-orange b-color","待点评":"bg-orange b-color","已点评":"bg-green b-color","合格":"bg-green b-color","不合格":"bg-red b-color","进度正常":"bg-green2 b-color","进度滞后":"bg-red2 b-color","施工单位验收合格":"bg-green b-color","监理单位验收合格":"bg-green b-color","建设单位验收合格":"bg-green b-color","施工单位验收不合格":"bg-red b-color","监理单位验收不合格":"bg-red b-color","建设单位验收不合格":"bg-red b-color"}}},activated:function(){}},r=(a("19a9"),a("17cc")),s=Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._g({staticClass:"item-list border-bottom"},t.$listeners),[t.isShowNewStatus?a("div",{staticClass:"status-new-tag"},[a("div",{staticClass:"tag",class:t.bgNewClass[t.status]},[t._v("\n      "+t._s(t.status)+"\n    ")])]):t._e(),t.img?a("div",{staticClass:"img",style:{"background-image":"url("+t.img+")"}}):t._e(),a("div",{staticClass:"item-list-con"},[a("h2",{staticClass:"title"},[t.isUnread?a("i",{staticClass:"icon-unread"}):t._e(),t.isTimeout?a("i",{staticClass:"icon-timeout"},[t._v("\n        超\n      ")]):t._e(),t.isUrgent?a("i",{staticClass:"icon-urgent"},[t._v("\n        急\n      ")]):t._e(),t.isReturn?a("i",{staticClass:"icon-return"},[t._v("\n        退\n      ")]):t._e(),t.$slots.title?t._t("title"):[t.typeTag?a("span",{staticClass:"type-tag"},[t._v(t._s(t.typeTag))]):t._e(),t._v("\n        "+t._s(t.title||"")+"\n      ")]],2),a("p",{staticClass:"text"},[t._v(t._s(t.detail||""))]),t.$slots.footer?t._t("footer"):a("p",{staticClass:"time",domProps:{innerHTML:t._s(t.footer||"")}})],2),t.status&&!t.isShowNewStatus?a("div",{staticClass:"item-list-status"},[a("status-text",{attrs:{status:t.status,text:t.statusText,extend:t.statusClassSet}}),t.repairDeadline&&t.repairDeadlineStatus.includes(t.status)?a("p",{staticClass:"time-status"},[t._v("\n      "+t._s(t._f("timeStatus")(t.repairDeadline))+"\n    ")]):t._e()],1):t._e()])}),[],!1,null,null,null);e.a=s.exports}}]);