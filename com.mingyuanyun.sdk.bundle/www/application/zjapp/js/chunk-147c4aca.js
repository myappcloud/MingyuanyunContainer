(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-147c4aca"],{1304:function(t,e,n){"use strict";var a=n("c5a7");e.__esModule=!0,e.SlotsMixin=void 0;var i=a(n("329b")).default.extend({methods:{slots:function(t,e){void 0===t&&(t="default");var n=this.$slots,a=this.$scopedSlots[t];return a?a(e):n[t]}}});e.SlotsMixin=i},"165a":function(t,e,n){"use strict";n.r(e);var a=n("2329").a,i=(n("5e97"),n("17cc")),o=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page-content",{staticClass:"laser-scanning-result",attrs:{title:"激光扫描实测","show-go-root":!0}},[n("scroller",{attrs:{"is-empty":t.isLoading||!t.batchs.length}},[t.isLoading?t._e():[n("div",{staticClass:"header"},[n("p",{staticClass:"title"},[t._v(t._s(t.titleText))]),n("p",[t._v("施工阶段："+t._s(t.checkitem.name))]),n("div",{staticClass:"item-button",on:{click:function(e){t.onceAgain()}}},[t._v("再测一遍")])]),n("div",{staticClass:"tabs-point border-bottom"},[n("div",{ref:"tabs-scroll",staticClass:"tabs-scroll"},t._l(t.batchs,(function(e,a){return n("div",{key:a,ref:"tab-point",refInFor:!0,staticClass:"tab-point",class:{"tab-current":a===t.tabIndex},on:{click:function(e){t.changeTab(a)}}},[t._v("\n            "+t._s("第"+(a+1)+"次")+"\n          ")])})))]),t.isResultLoading?t._e():[t._l(t.resultGroups,(function(e){return[n("item",{key:e.station_id,staticClass:"border-bottom item-title"},[n("i",{staticClass:"icon-point"}),n("div",{staticClass:"item-text color-theme"},[t._v("\n              "+t._s(e.station_name)+"\n            ")]),e.task_id?n("div",{staticClass:"item-button item-button-toModel",on:{click:function(n){n.stopPropagation(),t.toModel(e.task_id)}}},[t._v("\n              三维模型\n            ")]):t._e()]),t._l(e.results,(function(a){return n("item",{key:e.station_id+"-"+a.id,staticClass:"border-bottom",attrs:{"icon-right":"arrow-right"},on:{click:function(e){t.listDetail(a)}}},[n("div",{staticClass:"item-text"},[t._v("\n              "+t._s(a.checkitem_name)+"\n              "),n("span",{staticClass:"color-text"},[t._v(t._s(a.standardRange))])]),n("div",{staticClass:"item-font",class:{"color-green":a.pass_rate>=.8,"color-red":a.pass_rate<.8}},[t._v("\n              "+t._s(null!==a.pass_rate&&""!==a.pass_rate?t.percent(a.pass_rate,2):"")+"\n            ")])])}))]}))]],n("loading-status",{attrs:{"is-loading":t.isResultLoading,"is-empty":!t.resultGroups.length,"empty-text":"暂无数据"}})],2),n("loading-status",{attrs:{"is-loading":t.isLoading,"is-empty":!t.batchs.length,"empty-text":"暂无数据"}})],1)}),[],!1,null,"d4b1f8f0",null);e.default=o.exports},2064:function(t,e,n){"use strict";e.__esModule=!0,e.addUnit=function(t){if(!(0,a.isDef)(t))return;return t=String(t),(0,i.isNumber)(t)?t+"px":t};var a=n("b7b4"),i=n("f24f")},2329:function(t,e,n){"use strict";(function(t){n("e697"),n("cc57");var a=n("07d2"),i=n("774b"),o=n("6718"),r=n("f7ab"),s=n("3103"),c=n("ced3"),d=n("1fb46"),l=n("e2a7"),u=n("966e");e.a={name:"LaserScanningResult",components:{item:a.default,SynchronizeTipBar:r.a,Scroller:i.default,SwipeTabs:o.b,SwipeTab:o.a,LaserScanningList:c.a},data:function(){return{isLoading:!0,isResultLoading:!0,tabIndex:0,roomId:"",checkitemId:"",place:{},checkitem:{},batchs:[],results:[],resultGroups:[]}},computed:{projId:function(){return this.$store.state.global.currentProject.id},placeSelected:function(){return this.$store.getters["laserScanning/indexPlace"]},selectRoom:function(){return this.$store.getters["laserScanning/getSelectedRoom"]||{}},titleText:function(){var t=this.placeSelected;return t&&this.selectRoom.name?(t[0]?t[0].name:"")+(t[1]?t[1].name:"")+(t[2]?t[2].name:"")+this.selectRoom.name:""},appDev:function(){return"dev"===APP_ENV}},activated:function(){this.$router.isBack||(this.roomId=this.$route.query.roomId,this.checkitemId=this.$route.query.checkitemId,this.init())},methods:{percent:u.a,init:function(){var t=this;return this.isLoading=!0,this.getPlaceAndCheckitem().then((function(){return t.getBatchs()})).then((function(){t.tabIndex=t.batchs.length-1,t.isLoading=!1;var e=t.batchs[t.tabIndex];if(t.$nextTick((function(){var e=t.$refs["tabs-scroll"];e&&(e.scrollLeft=e.scrollWidth)})),e&&e.id)return t.getResultsByBatch(e.id)}))},changeTab:function(t){this.tabIndex=t;var e=this.batchs[t];if(e&&e.id)return this.getResultsByBatch(e.id)},getPlaceAndCheckitem:function(){var t=this;return s.a.getPlaceAndCheckitem(this.roomId,this.checkitemId).then((function(e){console.log("rrrr ====",e),t.place=e.place,t.checkitem=e.checkitem}))},getBatchs:function(){var t=this;return s.a.getBatchsByRoomAndCheckitem(this.roomId,this.checkitemId).then((function(e){t.batchs=e}))},getResultsByBatch:function(e){var n=this;return this.isResultLoading=!0,s.a.getResultsByBatch(e).then((function(e){n.results=e;var a=[];t.each(e,(function(e){var n=t.find(a,{station_id:e.station_id});n?n.results.push(e):a.push({station_id:e.station_id,station_name:e.station_name,results:[e],task_id:e.task_id})})),n.resultGroups=a,n.isResultLoading=!1}))},listDetail:function(t){this.$router.push({name:"LaserScanningDetail",query:{resultId:t.id}})},onceAgain:function(){var t=this;l.a.loading("正在连接设备..."),Object(d.a)().then((function(e){e=!!t.appDev||e,t.appDev&&$log.log("激光扫描实测，开发环境进入测站页面；是否为开发环境：".concat(t.appDev,", 原始的状态：").concat(t.isLinking)),e?(l.a.hideLoading(),t.$store.dispatch("laserScanning/setIsResult",!0),t.$router.push({name:"LaserScanningStart",query:{isReulst:!0}})):l.a.alert("请连接扫描仪WiFi后再试")})).catch((function(t){l.a.hideLoading(),$log.error("激光扫描实测-再测一遍-进入测站页面-超时判断-报错：",t)}))},toModel:function(t){t?Object(d.e)(t).then((function(){})).catch((function(t){$log.error("激光扫描实测-结果页面-进入三维模型-error：",t)})):l.a.alert("无设备任务id")}}}}).call(this,n("391c"))},"27c4":function(t,e,n){var a=n("db6b2");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("85cb").default)("42e360af",a,!0,{sourceMap:!1,shadowMode:!1})},"2d6e":function(t,e,n){var a=n("7eb2");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("85cb").default)("53a2fbaa",a,!0,{sourceMap:!1,shadowMode:!1})},3050:function(t,e,n){"use strict";e.__esModule=!0,e.default=void 0;e.default={name:"姓名",tel:"电话",save:"保存",confirm:"确认",cancel:"取消",delete:"删除",complete:"完成",loading:"加载中...",telEmpty:"请填写电话",nameEmpty:"请填写姓名",confirmDelete:"确定要删除么",telInvalid:"请填写正确的电话",vanContactCard:{addText:"添加联系人"},vanContactList:{addText:"新建联系人"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计："},vanCoupon:{valid:"有效期",unlimited:"无使用门槛",discount:function(t){return t+"折"},condition:function(t){return"满"+t+"元可用"}},vanCouponCell:{title:"优惠券",tips:"使用优惠",count:function(t){return t+"张可用"}},vanCouponList:{empty:"暂无优惠券",exchange:"兑换",close:"不使用优惠",enable:"可使用优惠券",disabled:"不可使用优惠券",placeholder:"请输入优惠码"},vanAddressEdit:{area:"地区",postal:"邮政编码",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",postalEmpty:"邮政编码格式不正确",defaultAddress:"设为默认收货地址",telPlaceholder:"收货人手机号",namePlaceholder:"收货人姓名",areaPlaceholder:"选择省 / 市 / 区"},vanAddressEditDetail:{label:"详细地址",placeholder:"街道门牌、楼层房间号等信息"},vanAddressList:{add:"新增地址"}}},4412:function(t,e,n){"use strict";e.__esModule=!0,e.createBEM=function(t){return function(e,n){return e&&"string"!=typeof e&&(n=e,e=""),e=a(t,e,"__"),n?[e,i(e,n)]:e}};function a(t,e,n){return e?t+n+e:t}function i(t,e){if("string"==typeof e)return a(t,e,"--");if(Array.isArray(e))return e.map((function(e){return i(t,e)}));var n={};return e&&Object.keys(e).forEach((function(a){n[t+"--"+a]=e[a]})),n}},"4d1b":function(t,e,n){"use strict";var a=n("c5a7");e.__esModule=!0,e.default=void 0;var i=a(n("329b")),o=n("53a5"),r=a(n("3050")),s=i.default.prototype,c=i.default.util.defineReactive;c(s,"$vantLang","zh-CN"),c(s,"$vantMessages",{"zh-CN":r.default});var d={messages:function(){return s.$vantMessages[s.$vantLang]},use:function(t,e){var n;s.$vantLang=t,this.add(((n={})[t]=e,n))},add:function(t){void 0===t&&(t={}),(0,o.deepAssign)(s.$vantMessages,t)}};e.default=d},"53a5":function(t,e,n){"use strict";e.__esModule=!0,e.deepAssign=o;var a=n("b7b4"),i=Object.prototype.hasOwnProperty;function o(t,e){return Object.keys(e).forEach((function(n){!function(t,e,n){var r=e[n];(0,a.isDef)(r)&&(i.call(t,n)&&(0,a.isObj)(r)&&"function"!=typeof r?t[n]=o(Object(t[n]),e[n]):t[n]=r)}(t,e,n)})),t}},"5e97":function(t,e,n){"use strict";n("e346")},6147:function(t,e,n){"use strict";e.__esModule=!0,e.createNamespace=function(t){return t="van-"+t,[(0,i.createComponent)(t),(0,a.createBEM)(t),(0,o.createI18N)(t)]};var a=n("4412"),i=n("7e06"),o=n("65af")},"65af":function(t,e,n){"use strict";var a=n("c5a7");e.__esModule=!0,e.createI18N=function(t){var e=(0,o.camelize)(t)+".";return function(t){for(var n=(0,i.get)(r.default.messages(),e+t)||(0,i.get)(r.default.messages(),t),a=arguments.length,o=new Array(a>1?a-1:0),s=1;s<a;s++)o[s-1]=arguments[s];return"function"==typeof n?n.apply(void 0,o):n}};var i=n("b7b4"),o=n("a1aa"),r=a(n("4d1b"))},"65e9":function(t,e,n){"use strict";(function(t){n("5ab2"),n("6d57"),n("e10e");var a=n("28f8"),i=n("4360"),o=n("48f4"),r=n("162a"),s=n("f2d3"),c=n("6906"),d=n("a18c"),l=n("c745");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a={name:"SynchronizeTipBar",props:{isTodo:{type:Boolean},useDownload:{type:Boolean,default:!0},enterDoCheck:{type:Boolean,default:!0},buildingId:{type:String,default:""},automaticUpdateCallback:{type:Function,default:null}},data:function(){return{currentModuleCode:"",oneUpdateData:!0}},computed:{projId:function(){return i.a.state.global.currentProject.id},waitUploadNum:function(){return i.a.state.global.waitUploadNum},hasTopProgress:function(){return i.a.state.global.hasTopProgress},hasChanged:function(){if(!this.useDownload)return!1;if(this.currentModuleCode){var t,e=o.default.isModuleNeedBuilding(this.currentModuleCode)&&!this.isTodo;return!(e&&!this.buildingId)&&(t=this.isTodo?i.a.state.global.todoChangedStatus||{}:i.a.state.global.businessChangedStatus||{},e?!!t[this.currentModuleCode]&&t[this.currentModuleCode][this.buildingId]:t[this.currentModuleCode])}return!1},show:function(){return(this.hasChanged||this.waitUploadNum)&&!this.hasTopProgress},oneDataSync:function(){return this.$store.state.app.oneDataSync}},watch:{hasChanged:function(t){var e=this;t&&this.$nextTick((function(){setTimeout((function(){var t=e.$refs["synchronize-tip-bar"];if(t&&t.style){t.style.display="none";t.offsetHeight;t.style.display="block"}}),100)}))},buildingId:function(t){this.currentModuleCode&&o.default.isModuleNeedBuilding(this.currentModuleCode)&&t&&(console.log("楼栋重新加载，是否再次自动加载数据：",this.oneUpdateData),this.oneUpdateData&&this.automaticLogic(),this.checkSync())},show:function(t){t?this.$emit("show"):this.$emit("hide")}},activated:function(){this.init()},methods:{init:function(){this.getCurrentModuleCode(),this.enterDoCheck&&!d.a.isBack&&this.checkSync(),this.automaticLogic()},automaticLogic:function(){var t=this;this.$router.isBack||(this.oneUpdateData=!0,l.a.getAutomaticLoadData().then((function(e){$log.log("是否要自动加载 ===> ",e&&t.oneDataSync&&"function"==typeof t.automaticUpdateCallback),e&&t.oneDataSync&&"function"==typeof t.automaticUpdateCallback&&t.dataSync().then((function(e){console.log("是否需要初始化页面 ====> ",Boolean(e)),e&&t.automaticUpdateCallback()}))})))},getCurrentModuleCode:function(){var t=o.default.getCurrentModuleCode(),e=this.isTodo?"todo":"";this.currentModuleCode=t||e},checkSync:function(){var e=this,n="checkDataUpdate",a=this.currentModuleCode,r=this.buildingId,d=i.a.state.global.isLeader?this.projId:"";return!o.default.isModuleNeedBuilding(a)||r||this.isTodo?(this.isTodo&&(n+="_todo"),a&&(n+="_".concat(a)),r&&(n+="_".concat(r)),c.a.execAfterInterval(120,n).then((function(){return e.isTodo?"todo"===a?s.a.getModuleList().then((function(e){var n=t.map(e,"code");return o.default.hasTodoChangedData("",n)})):o.default.hasTodoChangedData("",[a]):o.default.hasBusinessChangedData(d,[a],r)})).then((function(t){if(e.isTodo){var n=p({},i.a.state.global.todoChangedStatus);n[a]=t,i.a.commit("global/SET_TODO_CHANGED_STATUS",n)}else{var o=p({},i.a.state.global.businessChangedStatus);if(r){var s=o[a]?o[a]:{};s[r]=t,o[a]=s}else o[a]=t;i.a.commit("global/SET_BUSINESS_CHANGED_STATUS",o)}})).catch((function(t){return t&&!0===t.timeNotTo?($log.debug(t.msg),!1):$q.reject(t)}))):Promise.resolve()},dataSync:function(){var t=this.currentModuleCode,e=this.buildingId,n=o.default.isModuleNeedBuilding(t),a=n&&!e;return $log.log(["模块名：",t," 楼栋id：",e," 当前模块是否需要楼栋id：",n," 判断是否终止自动更新：",a]),a?Promise.resolve():(this.oneUpdateData=!1,r.a.beginManualUpdate(),o.default.checkSync(e).then((function(t){return r.a.endManualUpdate(),t})).catch((function(t){$log.error("自动更新错误",t),r.a.endManualUpdate()})))}}}}).call(this,n("391c"))},6718:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("163d"),n("cc57");var a=n("b7b4"),i={name:"SwipeTab",props:{title:{type:String}},data:function(){return{offset:0,style:{},bem:Object(a.createNamespace)("swipe-item")[1](),parent:{}}},computed:{index:function(){return this.parent.tabs.indexOf(this)}},beforeCreate:function(){this.$parent.swipes.push(this)},created:function(){this.findParent("SwipeTabs")},destroyed:function(){this.$parent.swipes.splice(this.$parent.swipes.indexOf(this),1)},mounted:function(){var t=this,e=this.parent.tabs,n=this.parent.$slots.default.indexOf(this.$vnode);e.splice(-1===n?e.length:n,0,this),this.$nextTick((function(){var e=t.$parent,n=e.vertical,a=e.computedWidth,i=e.computedHeight;t.style={width:a+"px",height:n?a+"px":i+"px",transform:"translate".concat(n?"Y":"X","(").concat(t.offset,"px)")}}))},methods:{findParent:function(t){for(var e=this.$parent;e;){if(e.$options.name===t){this.parent=e;break}e=e.$parent}}}},o=n("17cc"),r=Object(o.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",this._g({class:this.bem,style:this.style},this.$listeners),[this._t("default")],2)}),[],!1,null,null,null).exports,s={name:"SwipeTabs",model:{prop:"tabIndex",event:"change"},props:{tabIndex:{type:Number,default:0},markType:{type:String,default:"line"},showTabs:{type:Boolean,default:!0},touchable:{type:Boolean,default:!0}},data:function(){return{curIndex:0,initIndex:0,tabs:[],tabScrollVersion:null}},computed:{tabsPadding:function(){return Math.max(24-4*this.tabs.length,0)},markLeft:function(){var t=(100-2*this.tabsPadding)/this.tabs.length;return this.tabsPadding+(this.curIndex+.5)*t}},watch:{tabIndex:function(t){t!==this.curIndex&&(this.curIndex=t,this.$refs.swipe.swipeTo(t,{immediate:!0}))},curIndex:function(){this.scrollTabsTocurrent()}},created:function(){this.initIndex=this.tabIndex,this.curIndex=this.tabIndex},activated:function(){this.initIndex=this.tabIndex,this.curIndex=this.tabIndex},mounted:function(){this.$nextTick(this.scrollTabsTocurrent)},methods:{changeIndex:function(t){this.$refs.swipe.swipeTo(t)},onChange:function(t){this.curIndex=t,this.$emit("change",t)},scrollTabsTocurrent:function(){var t=this.$refs["tabs-scroll"],e=this.$refs["tab-point"]?this.$refs["tab-point"][this.curIndex]:null;if(t&&e){var n=t.getBoundingClientRect(),a=e.getBoundingClientRect(),i=a.left-n.left,o=n.right-a.right;i<0&&this.tabScrollBy(i),o<0&&this.tabScrollBy(-o)}},tabScrollBy:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,a=this.$refs["tabs-scroll"];if(a){var i=a.scrollLeft,o=i+t,r=Math.round(n/16.7),s=t/r,c=i,d=this.tabScrollVersion=+new Date;return i===o?Promise.resolve():new Promise((function(t){!function n(){window.requestAnimationFrame((function(){d===e.tabScrollVersion&&(c+=s,a.scrollLeft=c,i<o&&c<o||i>o&&c>o?n():(a.scrollTop=o,t()))}))}()}))}}}},c=(n("bcf4"),Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swipe-tabs"},[t.showTabs?["line"===t.markType?n("div",{staticClass:"tabs border-bottom",style:{padding:"0 "+Math.max(24-4*t.tabs.length,0)+"%"}},[t._l(t.tabs,(function(e){return n("div",{key:e.index,staticClass:"tab",class:{"tab-current":e.index===t.curIndex},on:{click:function(n){t.changeIndex(e.index)}}},[t._v("\n        "+t._s(e.title)+"\n      ")])})),n("div",{staticClass:"mark-line",style:{left:t.markLeft+"%"}})],2):t._e(),"point"===t.markType?n("div",{staticClass:"tabs-point border-bottom"},[n("div",{ref:"tabs-scroll",staticClass:"tabs-scroll"},t._l(t.tabs,(function(e){return n("div",{key:e.index,ref:"tab-point",refInFor:!0,staticClass:"tab-point",class:{"tab-current":e.index===t.curIndex},on:{click:function(n){t.changeIndex(e.index)}}},[t._v("\n          "+t._s(e.title)+"\n        ")])})))]):t._e()]:t._e(),t._t("fixed"),n("van-swipe",{ref:"swipe",attrs:{"initial-swipe":t.initIndex,"show-indicators":!1,duration:250,loop:!1,touchable:t.touchable},on:{change:t.onChange}},[t._t("default")],2)],2)}),[],!1,null,"025feb99",null));e.b=c.exports},"7e06":function(t,e,n){"use strict";var a=n("c5a7");e.__esModule=!0,e.unifySlots=s,e.createComponent=function(t){return function(e){var n;return"function"==typeof e&&(e={functional:!0,props:(n=e).props,model:n.model,render:function(t,e){return n(t,e.props,s(e),e)}}),e.functional||(e.mixins=e.mixins||[],e.mixins.push(o.SlotsMixin)),e.name=t,e.install=r,e}},n("4d1b");var i=n("a1aa"),o=n("1304");a(n("329b"));function r(t){var e=this.name;t.component(e,this),t.component((0,i.camelize)("-"+e),this)}function s(t){var e=t.scopedSlots||t.data.scopedSlots||{},n=t.slots();return Object.keys(n).forEach((function(t){e[t]||(e[t]=function(){return n[t]})})),e}},"7eb2":function(t,e,n){(t.exports=n("690e")(!1)).push([t.i,".zjapp .synchronize-tip-bar[data-v-66826030]{height:30px;padding:5px 15px;line-height:20px;text-align:center;background-color:#ffe6e6;color:#ff6060;font-size:14px}.zjapp .synchronize-tip-bar .icon-caution[data-v-66826030]{line-height:20px;margin-right:5px}@media screen and (-webkit-min-device-pixel-ratio:1){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 100%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:1.5){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 66.6667%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:2){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 50%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:2.625){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 38.0952%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:3){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 33.3333%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:4){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 25%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}",""])},a1aa:function(t,e,n){"use strict";e.__esModule=!0,e.camelize=function(t){return t.replace(a,(function(t,e){return e.toUpperCase()}))},e.padZero=function(t,e){void 0===e&&(e=2);var n=t+"";for(;n.length<e;)n="0"+n;return n};var a=/-(\w)/g},b7b4:function(t,e,n){"use strict";var a=n("c5a7");e.__esModule=!0,e.noop=function(){},e.isDef=c,e.isObj=function(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)},e.get=function(t,e){var n=e.split("."),a=t;return n.forEach((function(t){a=c(a[t])?a[t]:""})),a},e.isServer=e.addUnit=e.createNamespace=void 0;var i=a(n("329b")),o=n("6147");e.createNamespace=o.createNamespace;var r=n("2064");e.addUnit=r.addUnit;var s=i.default.prototype.$isServer;function c(t){return null!=t}e.isServer=s},bcf4:function(t,e,n){"use strict";n("27c4")},c5a7:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},db6b2:function(t,e,n){(t.exports=n("690e")(!1)).push([t.i,'.zjapp .swipe-tabs[data-v-025feb99]{display:flex;flex-direction:column;flex:1;overflow:hidden}.zjapp .tabs[data-v-025feb99]{position:relative;display:flex;background-color:#fff}.zjapp .tab[data-v-025feb99]{flex:1;height:40px;line-height:20px;padding:10px;font-size:14px;text-align:center;box-sizing:border-box}.zjapp .tab-current[data-v-025feb99]{color:#4275e8}.zjapp .mark-line[data-v-025feb99]{position:absolute;bottom:0;left:0;width:20px;height:2px;margin-left:-10px;background-image:linear-gradient(90deg,#5ea2ff,#4f83eb 50%,#4275e8);transition:left .4s cubic-bezier(.1,.7,.1,1)}.zjapp .tabs-point[data-v-025feb99]{position:relative;z-index:1;height:40px;font-size:0;text-align:center;background-color:#fff;overflow:visible}.zjapp .tabs-scroll[data-v-025feb99]{position:relative;padding-bottom:3px;margin-bottom:-3px;white-space:nowrap;overflow-x:auto}.zjapp .tabs-scroll[data-v-025feb99]::-webkit-scrollbar{display:none}.zjapp .tab-point[data-v-025feb99]{display:inline-block;padding:10px 15px;line-height:20px;font-size:16px;color:#333;white-space:nowrap}.zjapp .tab-point.tab-current[data-v-025feb99]{position:relative;z-index:3;color:#4275e8}.zjapp .tab-point.tab-current[data-v-025feb99]:after{content:"";position:absolute;z-index:3;bottom:-3px;left:50%;margin-left:-3px;width:7px;height:7px;border-radius:50%;background-color:#4275e8}',""])},e346:function(t,e,n){var a=n("fcd7");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("85cb").default)("31fff980",a,!0,{sourceMap:!1,shadowMode:!1})},f24f:function(t,e,n){"use strict";e.__esModule=!0,e.isNumber=function(t){return/^\d+(\.\d+)?$/.test(t)},e.isNaN=function(t){if(Number.isNaN)return Number.isNaN(t);return t!=t}},f7ab:function(t,e,n){"use strict";var a=n("65e9").a,i=(n("f7d4"),n("17cc")),o=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{ref:"synchronize-tip-bar",staticClass:"synchronize-tip-bar"},[n("icon",{attrs:{name:"caution"}}),t.waitUploadNum?n("span",[t._v("您有"+t._s(t.waitUploadNum)+"条数据待上传")]):t._e(),!t.waitUploadNum&&t.hasChanged?n("span",[t._v("有新数据")]):t._e(),t._v("\n  ，下拉可"+t._s(t.waitUploadNum?"上传":"刷新")+"\n")],1):t._e()}),[],!1,null,"66826030",null);e.a=o.exports},f7d4:function(t,e,n){"use strict";n("2d6e")},fcd7:function(t,e,n){(t.exports=n("690e")(!1)).push([t.i,'.zjapp .laser-scanning-result .header[data-v-d4b1f8f0]{min-height:78px;background:#fff;padding:15px 120px 15px 15px;color:#999;font-size:14px;margin-bottom:10px;line-height:22px;position:relative}.zjapp .laser-scanning-result .header .title[data-v-d4b1f8f0]{color:#333;font-size:16px;margin-bottom:10px}.zjapp .laser-scanning-result .item-button[data-v-d4b1f8f0]{background:linear-gradient(270deg,#55abff,#4c7aff);border-radius:15px;padding:5px 14px;color:#fff;position:absolute;top:24px;right:15px}.zjapp .laser-scanning-result .item-button-toModel[data-v-d4b1f8f0]{position:relative;top:auto;right:auto}.zjapp .laser-scanning-result .loading-status-button[data-v-d4b1f8f0]{padding:5px 16px;background:linear-gradient(270deg,#55abff,#4c7aff);border-radius:15px;margin-top:30px;color:#fff;font-size:14px}.zjapp .laser-scanning-result .color-green[data-v-d4b1f8f0]{color:#0bc666}.zjapp .laser-scanning-result[data-v-d4b1f8f0] .item-text{padding-right:10px}.zjapp .laser-scanning-result[data-v-d4b1f8f0] .item-font{text-align:right;min-width:50px}.zjapp .tab-current[data-v-d4b1f8f0]{color:#4275e8}.zjapp .tabs-point[data-v-d4b1f8f0]{position:relative;z-index:1;height:40px;font-size:0;text-align:center;background-color:#fff;overflow:visible}.zjapp .tabs-scroll[data-v-d4b1f8f0]{position:relative;padding-bottom:3px;margin-bottom:-3px;white-space:nowrap;overflow-x:auto}.zjapp .tabs-scroll[data-v-d4b1f8f0]::-webkit-scrollbar{display:none}.zjapp .tab-point[data-v-d4b1f8f0]{display:inline-block;padding:10px 15px;line-height:20px;font-size:16px;color:#333;white-space:nowrap}.zjapp .tab-point.tab-current[data-v-d4b1f8f0]{position:relative;z-index:3;color:#4275e8}.zjapp .tab-point.tab-current[data-v-d4b1f8f0]:after{content:"";position:absolute;z-index:3;bottom:-3px;left:50%;margin-left:-3px;width:7px;height:7px;border-radius:50%;background-color:#4275e8}.zjapp .icon-point[data-v-d4b1f8f0]{position:absolute;top:15px;left:0;width:4px;height:16px;background-color:#4275e8}',""])}}]);