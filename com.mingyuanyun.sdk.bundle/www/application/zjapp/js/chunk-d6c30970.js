(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-d6c30970"],{"2c39":function(t,e,a){(t.exports=a("690e")(!1)).push([t.i,".zjapp .drop-down-group[data-v-fb829978]{display:flex;flex-direction:row}.zjapp .drop-down-group .select-con[data-v-fb829978]{flex:1}",""])},"2d06":function(t,e,a){"use strict";(function(t){a("5ab2"),a("6d57"),a("e10e");var i=a("28f8"),n=a("4c09"),o=(a("e697"),a("07d2")),s=a("f7ab"),c=a("774b"),r=a("d623"),d=a("f546"),u=a("efa7"),l=a("aab3"),p=a("7798"),h=a("ed08"),f=a("48f4"),g=a("c745");function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){Object(i.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var k={sectionId:"",buildingId:"",unit:"",checkitemId:"",userIdentity:""};e.a={name:"MeasureIndex",components:{item:o.default,SynchronizeTipBar:s.a,Scroller:c.default,DropDownSelect:r.a,StatusTotalBar:d.a,PlaceList:u.a},data:function(){return{isListLoading:!0,labels:[{name:"标段"},{key:"buildings",name:"楼栋"},{key:"units",name:"单元"}],placeOptions:[],checkitemOptions:[],placeList:[],totalData:[],isLaserScanning:!1}},computed:{projId:function(){return this.$store.state.global.currentProject.id},processMode:function(){return t.isEmpty(this.checkitemSelected)||t.isEmpty(this.checkitemSelected[1])?"":parseInt(this.checkitemSelected[1].process_mode)},placeSelected:function(){return this.$store.getters["measure/indexPlace"]},checkitemSelected:function(){return this.checkitemOptions&&this.checkitemOptions.length?this.$store.getters["measure/indexCheckitem"]:[]},sectionId:function(){return this.placeSelected&&this.placeSelected[0]&&this.placeSelected[0].id||""},buildingId:function(){return this.placeSelected&&this.placeSelected[1]&&this.placeSelected[1].id||""},unit:function(){return this.placeSelected&&this.placeSelected[2]&&this.placeSelected[2].id||""},checkitemId:function(){return this.checkitemSelected&&this.checkitemSelected[1]&&this.checkitemSelected[1].id||""},errorTips:function(){var t="没有楼层";return this.placeSelected&&this.placeSelected.length?this.checkitemSelected&&this.checkitemSelected.length||(t="当前标段无实测实量检查项，请在PC端设置"):t="当前项目没有楼栋，请在PC端设置",t}},activated:function(){var t=this;this.init(),console.log("666"),g.a.allowLaserScanning().then((function(e){t.isLaserScanning=e}))},methods:{init:function(){var t=this;return p.a.getMeasureUserIdentity(this.projId).then((function(e){t.userIdentity=e})).then((function(){return l.a.getSectionsWithBuildingsAndUnits(t.projId).then((function(e){t.placeOptions=e}))})).then((function(){return t.getDefaultPlace()})).then((function(){return t.getCheckitemOptions()})).then((function(){return t.getDefaultCheckitem()})).then((function(){return t.getPlaceList()})).catch((function(t){$log.error(t)}))},getDefaultPlace:function(){var e=this,a=this.sectionId&&t.find(this.placeOptions,(function(t){return t.id===e.sectionId})),i=a&&this.buildingId&&t.find(a.buildings,(function(t){return t.id===e.buildingId})),n=i&&this.unit&&t.find(i.units,(function(t){return t.id===e.unit})),o=[];if(t.isEmpty(i)||t.isEmpty(i.units)||!t.isEmpty(n)||(n=i.units[0]),a&&i)o.push(a),o.push(i),t.isEmpty(n)||o.push(n);else{var s=t.find(this.placeOptions,(function(e){return!t.isEmpty(e.buildings)})),c=s?s.buildings[0]:null,r=c&&!t.isEmpty(c.units)?c.units[0]:null;c&&(o.push(s),o.push(c),r&&o.push(r))}return Promise.resolve(o).then((function(t){e.$store.dispatch("measure/setIndexPlace",t)}))},getCheckitemOptions:function(){var t=this;return Promise.resolve().then((function(){return t.sectionId&&t.buildingId?p.a.getAllMeasureBuildingCheckItems(t.sectionId,t.buildingId):Promise.resolve([])})).then((function(e){var a,i=t.checkitemOptions.length;(a=t.checkitemOptions).splice.apply(a,[0,i].concat(Object(n.a)(e)))}))},getDefaultCheckitem:function(){var e,a=this,i=this.checkitemSelected?this.checkitemSelected[1]:{},n=i&&i.id,o=[];return t.each(this.checkitemOptions,(function(e){t.each(e.children,(function(t){t.id===n&&(o.push(e),o.push(t))}))})),t.isEmpty(o)&&(e=t.find(this.checkitemOptions,(function(e){return!t.isEmpty(e.children)})))&&(o.push(e),o.push(e.children[0])),Promise.resolve(o).then((function(t){a.$store.dispatch("measure/setIndexCheckitem",t)}))},getPlaceList:function(){var e=this,a={sectionId:this.sectionId,buildingId:this.buildingId,unit:this.unit,checkitemId:this.checkitemId,userIdentity:this.userIdentity},i=this.hasQueryParamsChanged(a),o=f.default.hasLocalChanged();return i||o?(k=a,h.a.now(),p.a.getRoomsAndData(this.sectionId,this.buildingId,2===this.processMode?"":this.unit,this.checkitemId,this.userIdentity).then((function(a){var i,o;e.checkitemId||(a.list=[]);var s=[{status:"施工单位已测",color:"green"},{status:"监理单位已测",color:"orange"},{status:"建设单位已测",color:"blue"}],c=a.total.splice(0,e.userIdentity),r=t.map(a.list,(function(t){return m(m({},t),{},{name:t.floor_text,children:t.rooms})}));(i=e.placeList).splice.apply(i,[0,e.placeList.length].concat(Object(n.a)(r)));var d=t.map(c,(function(t,e){return m(m({},s[e]),{},{total:t})}));(o=e.totalData).splice.apply(o,[0,e.totalData.length].concat(Object(n.a)(d))),e.isListLoading=!1}))):(this.isListLoading=!1,Promise.resolve())},hasQueryParamsChanged:function(t){return k.sectionId!==t.sectionId||k.buildingId!==t.buildingId||k.unit!==t.unit||k.checkitemId!==t.checkitemId||k.userIdentity!==t.userIdentity},onChangeBuilding:function(t){var e=this;this.isListLoading=!0,this.$store.dispatch("measure/setIndexPlace",t),this.getCheckitemOptions().then((function(){e.getDefaultCheckitem().then((function(){e.getPlaceList()}))}))},onChangeCheckitem:function(t){this.isListLoading=!0,this.$store.dispatch("measure/setIndexCheckitem",t),this.getPlaceList()},gotoDetail:function(t){var e;1===this.processMode?e={roomId:t.id,checkitemId:this.checkitemId}:2!==this.processMode&&5!==this.processMode||(e={buildingId:t.building_id,unit:this.placeSelected[2]&&this.placeSelected[2].id?this.placeSelected[2].id:"",floor:t.floor,checkitemId:this.checkitemId}),this.$router.push({name:"MeasureDetail",query:e})},collect:function(){this.$router.push({name:"MeasureCollect",query:{sectionId:this.sectionId,buildingId:this.buildingId,unit:this.unit,checkitemId:this.checkitemId}})},laserScanning:function(){this.$router.push({name:"LaserScanning"})}}}}).call(this,a("391c"))},"2d6e":function(t,e,a){var i=a("7eb2");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a("85cb").default)("53a2fbaa",i,!0,{sourceMap:!1,shadowMode:!1})},"5b85":function(t,e,a){var i=a("e2a8");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a("85cb").default)("45a0f20c",i,!0,{sourceMap:!1,shadowMode:!1})},"65e9":function(t,e,a){"use strict";(function(t){a("5ab2"),a("6d57"),a("e10e");var i=a("28f8"),n=a("4360"),o=a("48f4"),s=a("162a"),c=a("f2d3"),r=a("6906"),d=a("a18c"),u=a("c745");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){Object(i.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e.a={name:"SynchronizeTipBar",props:{isTodo:{type:Boolean},useDownload:{type:Boolean,default:!0},enterDoCheck:{type:Boolean,default:!0},buildingId:{type:String,default:""},automaticUpdateCallback:{type:Function,default:null}},data:function(){return{currentModuleCode:"",oneUpdateData:!0}},computed:{projId:function(){return n.a.state.global.currentProject.id},waitUploadNum:function(){return n.a.state.global.waitUploadNum},hasTopProgress:function(){return n.a.state.global.hasTopProgress},hasChanged:function(){if(!this.useDownload)return!1;if(this.currentModuleCode){var t,e=o.default.isModuleNeedBuilding(this.currentModuleCode)&&!this.isTodo;return!(e&&!this.buildingId)&&(t=this.isTodo?n.a.state.global.todoChangedStatus||{}:n.a.state.global.businessChangedStatus||{},e?!!t[this.currentModuleCode]&&t[this.currentModuleCode][this.buildingId]:t[this.currentModuleCode])}return!1},show:function(){return(this.hasChanged||this.waitUploadNum)&&!this.hasTopProgress},oneDataSync:function(){return this.$store.state.app.oneDataSync}},watch:{hasChanged:function(t){var e=this;t&&this.$nextTick((function(){setTimeout((function(){var t=e.$refs["synchronize-tip-bar"];if(t&&t.style){t.style.display="none";t.offsetHeight;t.style.display="block"}}),100)}))},buildingId:function(t){this.currentModuleCode&&o.default.isModuleNeedBuilding(this.currentModuleCode)&&t&&(console.log("楼栋重新加载，是否再次自动加载数据：",this.oneUpdateData),this.oneUpdateData&&this.automaticLogic(),this.checkSync())},show:function(t){t?this.$emit("show"):this.$emit("hide")}},activated:function(){this.init()},methods:{init:function(){this.getCurrentModuleCode(),this.enterDoCheck&&!d.a.isBack&&this.checkSync(),this.automaticLogic()},automaticLogic:function(){var t=this;this.$router.isBack||(this.oneUpdateData=!0,u.a.getAutomaticLoadData().then((function(e){$log.log("是否要自动加载 ===> ",e&&t.oneDataSync&&"function"==typeof t.automaticUpdateCallback),e&&t.oneDataSync&&"function"==typeof t.automaticUpdateCallback&&t.dataSync().then((function(e){console.log("是否需要初始化页面 ====> ",Boolean(e)),e&&t.automaticUpdateCallback()}))})))},getCurrentModuleCode:function(){var t=o.default.getCurrentModuleCode(),e=this.isTodo?"todo":"";this.currentModuleCode=t||e},checkSync:function(){var e=this,a="checkDataUpdate",i=this.currentModuleCode,s=this.buildingId,d=n.a.state.global.isLeader?this.projId:"";return!o.default.isModuleNeedBuilding(i)||s||this.isTodo?(this.isTodo&&(a+="_todo"),i&&(a+="_".concat(i)),s&&(a+="_".concat(s)),r.a.execAfterInterval(120,a).then((function(){return e.isTodo?"todo"===i?c.a.getModuleList().then((function(e){var a=t.map(e,"code");return o.default.hasTodoChangedData("",a)})):o.default.hasTodoChangedData("",[i]):o.default.hasBusinessChangedData(d,[i],s)})).then((function(t){if(e.isTodo){var a=p({},n.a.state.global.todoChangedStatus);a[i]=t,n.a.commit("global/SET_TODO_CHANGED_STATUS",a)}else{var o=p({},n.a.state.global.businessChangedStatus);if(s){var c=o[i]?o[i]:{};c[s]=t,o[i]=c}else o[i]=t;n.a.commit("global/SET_BUSINESS_CHANGED_STATUS",o)}})).catch((function(t){return t&&!0===t.timeNotTo?($log.debug(t.msg),!1):$q.reject(t)}))):Promise.resolve()},dataSync:function(){var t=this.currentModuleCode,e=this.buildingId,a=o.default.isModuleNeedBuilding(t),i=a&&!e;return $log.log(["模块名：",t," 楼栋id：",e," 当前模块是否需要楼栋id：",a," 判断是否终止自动更新：",i]),i?Promise.resolve():(this.oneUpdateData=!1,s.a.beginManualUpdate(),o.default.checkSync(e).then((function(t){return s.a.endManualUpdate(),t})).catch((function(t){$log.error("自动更新错误",t),s.a.endManualUpdate()})))}}}}).call(this,a("391c"))},"7eb2":function(t,e,a){(t.exports=a("690e")(!1)).push([t.i,".zjapp .synchronize-tip-bar[data-v-66826030]{height:30px;padding:5px 15px;line-height:20px;text-align:center;background-color:#ffe6e6;color:#ff6060;font-size:14px}.zjapp .synchronize-tip-bar .icon-caution[data-v-66826030]{line-height:20px;margin-right:5px}@media screen and (-webkit-min-device-pixel-ratio:1){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 100%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:1.5){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 66.6667%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:2){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 50%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:2.625){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 38.0952%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:3){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 33.3333%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}@media screen and (-webkit-min-device-pixel-ratio:4){.zjapp .synchronize-tip-bar[data-v-66826030]{border:none;background-image:linear-gradient(0deg,#ffd3d3,#ffd3d3 25%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}}",""])},"8aa8":function(t,e,a){var i=a("2c39");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a("85cb").default)("5468c85b",i,!0,{sourceMap:!1,shadowMode:!1})},a983:function(t,e,a){"use strict";a.r(e);var i=a("2d06").a,n=(a("f836"),a("17cc")),o=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-content",{attrs:{title:"实测实量"}},[a("div",{attrs:{slot:"header-bar-right"},slot:"header-bar-right"},[t.isLaserScanning?a("div",{directives:[{name:"track",rawName:"v-track",value:"激光扫描实测-入口",expression:"'激光扫描实测-入口'"}],staticClass:"header-btn",on:{click:t.laserScanning}},[a("icon",{attrs:{name:"jiguangsaomiaoshice"}})],1):t._e(),a("div",{directives:[{name:"track",rawName:"v-track",value:"实测实量-汇总",expression:"'实测实量-汇总'"}],staticClass:"header-btn",on:{click:t.collect}},[a("icon",{attrs:{name:"huizong"}})],1)]),a("synchronize-tip-bar",{attrs:{"automatic-update-callback":t.init,"building-id":t.buildingId}}),a("div",{staticClass:"drop-down-group bg-sub-theme border-bottom"},[a("drop-down-select",{attrs:{value:t.placeSelected,options:t.placeOptions,stage:3,"min-select-stage":2,"keep-stage":[!0,!0],"show-text-level":2===t.processMode?2:3,"options-map":t.labels},on:{onSelect:t.onChangeBuilding}}),a("drop-down-select",{attrs:{value:t.checkitemSelected,options:t.checkitemOptions,stage:2},on:{onSelect:t.onChangeCheckitem}})],1),a("scroller",{attrs:{"building-id":t.buildingId,"is-empty":t.isListLoading||!t.placeList.length},on:{pullDown:t.init}},[!t.isListLoading&&t.placeList.length?a("status-total-bar",{attrs:{data:t.totalData}}):t._e(),t.isListLoading||1!==t.processMode?t._e():a("place-list",{staticClass:"mt10",attrs:{data:t.placeList,"has-title":!0,"status-key":"done","status-class":{1:"bg-green",2:"bg-orange",3:"bg-blue"}},on:{click:t.gotoDetail}}),t.isListLoading||2!==t.processMode&&5!==t.processMode?t._e():a("place-list",{staticClass:"mt10",attrs:{data:t.placeList,"status-key":"done","status-class":{1:"bg-green",2:"bg-orange",3:"bg-blue"}},on:{click:t.gotoDetail}}),a("loading-status",{attrs:{"is-loading":t.isListLoading,"is-empty":!t.placeList.length,"empty-text":t.errorTips}})],1)],1)}),[],!1,null,"fb829978",null);e.default=o.exports},e2a8:function(t,e,a){(t.exports=a("690e")(!1)).push([t.i,'.zjapp .status-total-bar[data-v-be07cd9c]{display:flex;flex-direction:row;text-align:center}.zjapp .total-item[data-v-be07cd9c]{flex:1;line-height:20px;padding:10px 5px 0;color:#111;font-size:12px}.zjapp .total-status[data-v-be07cd9c]{white-space:nowrap}.zjapp .total-status[data-v-be07cd9c]:before{content:"";width:10px;height:10px;display:inline-block;vertical-align:top;margin:5px 5px 0 0;background-color:#ddd;border-radius:50%}.zjapp .total-status-orange[data-v-be07cd9c]:before{background-color:#fc8b01}.zjapp .total-status-orange2[data-v-be07cd9c]:before{background-color:#ff8e24}.zjapp .total-status-white2[data-v-be07cd9c]:before{background-color:#fff;border:1px solid #dcdcdc}.zjapp .total-status-red[data-v-be07cd9c]:before{background-color:#ff3d3d}.zjapp .total-status-green[data-v-be07cd9c]:before{background-color:#0bc666}.zjapp .total-status-white[data-v-be07cd9c]:before{background-color:#fff}.zjapp .total-status-white-border[data-v-be07cd9c]:before{background-color:#fff;border:1px solid #dcdcdc}.zjapp .total-status-blue[data-v-be07cd9c]:before{background-color:#4174e9}.zjapp .total-status-purple-border[data-v-be07cd9c]:before{background-color:#fff;border:1px solid #796bfb}.zjapp .total-status-green-border[data-v-be07cd9c]:before{background-color:#fff;border:1px solid #0bc666}.zjapp .status-total-bar.-abs-top-right[data-v-be07cd9c]{position:absolute;top:0;right:13px}.zjapp .status-total-bar.-abs-top-right .total-item[data-v-be07cd9c]{padding-left:3px;padding-right:3px}.zjapp .status-total-bar.-abs-top-right .total-status[data-v-be07cd9c]:before{margin-right:2px}',""])},e89f:function(t,e,a){"use strict";var i=a("04f3"),n=a("cf09"),o=a("4360"),s=0;e.a={name:"PopupMixin",data:function(){return{backButtonEvent:null}},watch:{show:function(t){var e=this;if(t){if(this.$nextTick((function(){e.$el&&e.$el.style&&(e.$el.style.zIndex=++n.a.zIndex,s++,o.a.commit("app/SET_HAS_POPUP",!!s))})),!this.backButtonEvent){var a=this.close||this.closePopup;this.backButtonEvent=Object(i.a)(a)}}else--s<0&&(s=0),o.a.commit("app/SET_HAS_POPUP",!!s),this.backButtonEvent&&(Object(i.c)(this.backButtonEvent),this.backButtonEvent=null)}},methods:{}}},f546:function(t,e,a){"use strict";var i={name:"StatusTotalBar",props:{data:{type:Array,default:function(){return[]}},status:{type:String,default:"default"}},data:function(){return{}}},n=(a("f6de"),a("17cc")),o=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"status-total-bar"},t._l(t.data,(function(e,i){return a("div",{key:i,staticClass:"total-item"},["default"===t.status?[a("p",[a("span",{staticClass:"total-status",class:"total-status-"+e.color},[t._v("\n          "+t._s(e.status)+"\n        ")])]),a("p",[t._v("\n        "+t._s(e.total)+"\n      ")])]:t._e(),"laser-scanning"===t.status?[a("p",[a("span",{staticClass:"total-status",class:"total-status-"+e.color},[t._v("\n          "+t._s(e.status)+"\n        ")]),t._v("\n        ("+t._s(e.total)+")\n      ")])]:t._e()],2)})))}),[],!1,null,"be07cd9c",null);e.a=o.exports},f6de:function(t,e,a){"use strict";a("5b85")},f7ab:function(t,e,a){"use strict";var i=a("65e9").a,n=(a("f7d4"),a("17cc")),o=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("div",{ref:"synchronize-tip-bar",staticClass:"synchronize-tip-bar"},[a("icon",{attrs:{name:"caution"}}),t.waitUploadNum?a("span",[t._v("您有"+t._s(t.waitUploadNum)+"条数据待上传")]):t._e(),!t.waitUploadNum&&t.hasChanged?a("span",[t._v("有新数据")]):t._e(),t._v("\n  ，下拉可"+t._s(t.waitUploadNum?"上传":"刷新")+"\n")],1):t._e()}),[],!1,null,"66826030",null);e.a=o.exports},f7d4:function(t,e,a){"use strict";a("2d6e")},f836:function(t,e,a){"use strict";a("8aa8")}}]);