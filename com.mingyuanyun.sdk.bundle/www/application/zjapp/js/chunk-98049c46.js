(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-98049c46"],{1595:function(t,e,a){(t.exports=a("690e")(!1)).push([t.i,".zjapp .header[data-v-04efac6e]{min-height:78px;background:#fff;padding:15px;color:#999;font-size:14px;margin-bottom:10px;line-height:22px}.zjapp .header .title[data-v-04efac6e]{color:#333;font-size:16px;margin-bottom:10px;min-height:22px}.zjapp .laser-scanning-loading-status[data-v-04efac6e] .empty-text{width:200px;line-height:23px}[data-v-04efac6e] .ls-header-go-back{display:flex;padding:0}[data-v-04efac6e] .ls-header-go-back div{position:relative;display:inline-block;vertical-align:top;height:44px;line-height:22px;padding:11px 12px;border:none;margin:0;font-size:16px;color:#fff}.zjapp .loading-status-button[data-v-04efac6e]{padding:5px 16px;background:linear-gradient(270deg,#55abff,#4c7aff);border-radius:15px;margin-top:30px;color:#fff;font-size:14px}",""])},"3d2e":function(t,e,a){var n=a("9fad");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("85cb").default)("0cee695a",n,!0,{sourceMap:!1,shadowMode:!1})},"9fad":function(t,e,a){(t.exports=a("690e")(!1)).push([t.i,".zjapp .laser-scanning-edit-page-content[data-v-0bc6070f] input{line-height:inherit;color:#666}.zjapp .laser-scanning-edit-page-content .label-class[data-v-0bc6070f]{color:#333}.zjapp .laser-scanning-edit-page-content .loading-status-class[data-v-0bc6070f]{height:250px;background:none;margin-bottom:50px}.zjapp .laser-scanning-edit-page-content .hor[data-v-0bc6070f]{color:#999;background:#f4f4f4;padding:0 15px;height:30px;line-height:40px;font-size:12px}.zjapp .laser-scanning-edit-page-content .lable-item[data-v-0bc6070f]{padding:10px 15px}.zjapp .laser-scanning-edit-page-content .list[data-v-0bc6070f]{width:100%;background:#fff;margin-bottom:20px}.zjapp .laser-scanning-edit-page-content .list-li>div[data-v-0bc6070f]{padding:20px 15px;border-bottom:1px solid #ececec}.zjapp .laser-scanning-edit-page-content .list-name[data-v-0bc6070f]{color:#333;font-size:16px;margin-bottom:15px}.zjapp .laser-scanning-edit-page-content .list-input[data-v-0bc6070f]{display:flex;align-items:center}.zjapp .laser-scanning-edit-page-content .list-input>*[data-v-0bc6070f]{margin-right:8px}.zjapp .laser-scanning-edit-page-content .list-text_end[data-v-0bc6070f],.zjapp .laser-scanning-edit-page-content .list-text_start[data-v-0bc6070f]{color:#666;font-size:16px;display:inline-block;min-width:35px;text-align:center}.zjapp .laser-scanning-edit-page-content .list-text_input[data-v-0bc6070f]{width:60px}",""])},b141:function(t,e,a){"use strict";a.r(e);a("5ab2"),a("e10e"),a("f548"),a("06a2"),a("6d57");var n=a("4c09"),i=(a("163d"),a("28f8")),s=a("3e83"),r=(a("6a61"),a("2e91")),o=(a("ed63"),a("8cf2"),a("cc57"),a("07d2")),l=a("774b"),c=a("ced3"),u=a("1fb46"),d=a("1b7e"),p=(a("6144"),a("4ad6")),h=a("e2a7"),m=a("329b"),g=a("e89f"),f=a("6948"),v=a("3103");function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function k(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){Object(i.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var _,x={3:{name:"标准+设计值"},4:{name:"净高"},5:{name:"高宽",start:"高",end:"宽"},6:{name:"开间进深",start:"开间",end:"进深"},10:{name:"最大偏差"},11:{name:"设计值百分比"}},S={name:"LaserScanningEdit",components:{Item:o.a,Scroller:l.a,NumberInput:f.a},mixins:[g.a],data:function(){return{show:!1,name:"",id:null,parentCheckitemId:"",isListLoading:!1,list:[],text:x,proj_id:null,selectRoom:{},callback:function(){},batchId:null,isDelete:!1}},computed:{title:function(){return this.id?"编辑测站":"添加测站"},listFilter:function(){var t=this;return this.list.filter((function(e){if(t.text[e.passrate_mode])return e}))},showDeleteButton:function(){return this.id&&this.isDelete},inputDisabled:function(){return Boolean(this.batchId)}},methods:{onOpen:(_=Object(r.a)(regeneratorRuntime.mark((function t(e){var a,n,i,s,r,o,l,c,u,d,p=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.show=!0,this.isListLoading=!0,a=e.parentId,n=e.id,i=e.selectRoom,s=e.proj_id,r=e.name,o=e.callback,this.id=n||null,this.parentCheckitemId=a,this.selectRoom=i,this.proj_id=s,this.name=r||"",this.callback=o,$log.log("激光扫描实测-添加测站-进入弹出框-传入参数：",e),l=n?v.a.getIsDeleteStation(n):Promise.resolve({isDelete:!1,batchId:null}),t.next=14,l;case 14:return c=t.sent,this.isDelete=c.isDelete,this.batchId=c.batchId,u=n?this.batchId?v.a.getAllStationCheckItems(n):v.a.getAllStationCheckItemsRelation(n):v.a.getAllRelatedCheckItems(a),t.next=20,u;case 20:d=t.sent,n?(d=d.map((function(t){t.design_val="string"==typeof t.design_val?JSON.parse(t.design_val):[{}];var e=t.design_val;if(5===t.passrate_mode||6===t.passrate_mode){var a=p.text[t.passrate_mode];e.forEach((function(e){a.start===e.label?t.min=e.setVal:a.end===e.label&&(t.max=e.setVal)}))}else t.min=e[0].setVal;return t})),this.list=d):this.list=d,$log.log("激光扫描实测-添加测站-获取关联检查项：",c,d),t.next=28;break;case 25:t.prev=25,t.t0=t.catch(0),$log.error("激光扫描实测-添加测站-获取关联检查项-报错：",t.t0);case 28:return t.prev=28,this.isListLoading=!1,t.finish(28);case 31:case"end":return t.stop()}}),t,this,[[0,25,28,31]])}))),function(t){return _.apply(this,arguments)}),onSave:function(){var t=this;this.$nextTick((function(){var e=t.name,a=t.list,n=t.id;if(e)if(t.list.map((function(e){return!t.text[e.passrate_mode]||(5===e.passrate_mode||6===e.passrate_mode?Boolean(e.min||0===e.min)&&Boolean(e.max||0===e.max):Boolean(e.min||0===e.min))})).includes(!1))h.a.alert("请输入设计值");else{var i=k(k({},t.selectRoom),{},{id:n||null,parent_checkitem_id:t.parentCheckitemId,name:e,proj_id:t.proj_id}),s=t.deepCppy(a).map((function(e){var a=t.text[e.passrate_mode],n=[{setVal:null}];return!e.min&&0!==e.min||!e.max&&0!==e.max?(e.min||0===e.min)&&(n=[{setVal:e.min}]):n=[{label:a.start,setVal:e.min},{label:a.end,setVal:e.max}],Object.assign(e,{design_val:JSON.stringify(n)})}));$log.log("激光扫描实测-添加测站-保存测站-数据：",i,s),v.a.saveAddRelationCheckItem(i,s).then((function(e){h.a.alert("保存成功"),t.callback(),t.onClose()})).catch((function(t){$log.error("激光扫描实测-添加测站-保存测站-报错：",t)}))}else h.a.alert("请输入测站名称")}))},onClose:function(){this.show=!1},areaNumChange:function(t,e,a){this.list=this.list.map((function(n){return n.checkitem_id===e.checkitem_id&&(n[a]=t),n}))},deleteStation:function(){var t=this;if(!this.showDeleteButton)return h.a.alert("不允许删除此测站"),!1;var e=this.list.map((function(t){return t.id})),a={staionId:this.id,checkItemids:e,batchId:this.batchId};h.a.confirm("确定删除测站吗",(function(){$log.log("激光扫描实测-删除测站-数据：",a),v.a.getDeleteStation(a).then((function(){h.a.alert("删除成功"),t.callback("delete"),t.onClose()})).catch((function(t){$log.error("激光扫描实测-测站页面-删除 error =>",t)}))}))},deepCppy:function(t){return JSON.parse(JSON.stringify(t||[]))}}},y=(a("efec"),a("17cc")),w=Object(y.a)(S,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"slide-right"}},[t.show?a("page-content",{staticClass:"laser-scanning-edit-page-content",attrs:{title:t.title,mode:"dialog","on-close":t.onClose,"show-go-back":!1}},[a("div",{directives:[{name:"track",rawName:"v-track",value:"激光扫描实测-取消保存测站",expression:"'激光扫描实测-取消保存测站'"}],staticClass:"header-btn",attrs:{slot:"header-bar-left"},on:{click:t.onClose},slot:"header-bar-left"},[t._v("\n      取消\n    ")]),t.isListLoading?t._e():a("div",{directives:[{name:"track",rawName:"v-track",value:"激光扫描实测-保存测站",expression:"'激光扫描实测-保存测站'"}],staticClass:"header-btn",attrs:{slot:"header-bar-right"},on:{click:t.onSave},slot:"header-bar-right"},[t._v("\n      保存\n    ")]),t.isListLoading?t._e():a("scroller",[a("van-field",{staticClass:"lable-item",attrs:{"label-class":"label-class",label:"测站名称",placeholder:"请输入测站名称","input-align":"right",maxlength:"20"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t.listFilter.length>0?a("div",{staticClass:"hor"},[t._v("设计值")]):t._e(),t.listFilter.length>0?a("ul",{staticClass:"list"},t._l(t.listFilter,(function(e,n){return a("li",{key:n,staticClass:"list-li"},[1!==e.passrate_mode?a("div",[a("div",{staticClass:"list-name"},[t._v(t._s(e.name))]),a("div",{staticClass:"list-input"},[5===e.passrate_mode||6===e.passrate_mode?a("span",{staticClass:"list-text_start"},[t._v(t._s(t.text[e.passrate_mode].start))]):t._e(),a("number-input",{ref:"listTextInput",refInFor:!0,staticClass:"list-text_input",attrs:{type:"all",disabled:t.inputDisabled,required:!0,range:[-999999,999999],decimal:3},on:{blur:function(a){t.areaNumChange(a,e,"min")}},model:{value:e.min,callback:function(a){t.$set(e,"min",a)},expression:"item.min"}}),5===e.passrate_mode||6===e.passrate_mode?a("span",{staticClass:"list-text_end"},[t._v(t._s(t.text[e.passrate_mode].end))]):t._e(),5===e.passrate_mode||6===e.passrate_mode?a("number-input",{ref:"listTextInput",refInFor:!0,staticClass:"list-text_input",attrs:{type:"all",disabled:t.inputDisabled,required:!0,range:[-999999,999999],decimal:3},on:{blur:function(a){t.areaNumChange(a,e,"max")}},model:{value:e.max,callback:function(a){t.$set(e,"max",a)},expression:"item.max"}}):t._e()],1)]):t._e()])}))):t._e(),a("loading-status",{staticClass:"loading-status-class",attrs:{"is-loading":t.isListLoading,"is-empty":!t.listFilter.length,"empty-text":"暂无需填写的设计值"}}),t.showDeleteButton?a("app-button-group",{attrs:{direction:"row"}},[a("app-button",{directives:[{name:"track",rawName:"v-track",value:"激光扫描实测-删除测站",expression:"'激光扫描实测-删除测站'"}],attrs:{type:"operate"},on:{click:t.deleteStation}},[t._v("\n          删除\n        ")])],1):t._e()],1)],1):t._e()],1)}),[],!1,null,"0bc6070f",null).exports,j=!1;j||(j=new(m.default.extend(w))({el:document.createElement("div")}),document.body.appendChild(j.$el));var O=j,D=a("83b2"),L=a("ed08");a("24de");function P(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function I(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?P(Object(a),!0).forEach((function(e){Object(i.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var C,$={0:"加载中",1:"当前未连接激光设备的Wi-Fi 请先连接再重试",2:"当前未连接到正确的激光设置的Wi-Fi 请重新连接",3:"暂无测站"},R=["scan","downloading","scanning","analyzing","uploading","finished","failed","busy"],E={name:"LaserScanningStart",components:{item:o.a,Scroller:l.a,LaserScanningList:c.a},data:function(){return{isListLoading:!0,emptyType:null,stationList:[],scanningPop:null,interval:null,localKey:"",fakeDataBur:!1,batch_id:null,oneResultOperating:!1,stationData:{},pollingstatus:!1,pollingAllData:{}}},computed:{projId:function(){return this.pollingstatus?this.pollingAllData.projId:this.$store.state.global.currentProject.id},placeSelected:function(){return this.pollingstatus?this.pollingAllData.placeSelected:this.$store.getters["laserScanning/indexPlace"]},checkitemSelected:function(){if(this.pollingstatus)return this.pollingAllData.checkitemSelected;var t=this.$store.getters["laserScanning/indexCheckitem"];return t&&t[0]?t[0]:{}},selectRoom:function(){return this.pollingstatus?this.pollingAllData.selectRoom:this.$store.getters["laserScanning/getSelectedRoom"]||{}},resultStatus:function(){return this.pollingstatus?this.pollingAllData.resultStatus:this.$store.getters["laserScanning/getIsResult"]},emptyText:function(){var t=this.emptyType||1;return $[t]},noNetwork:function(){return 1===this.emptyType||2===this.emptyType},titleText:function(){var t=this.placeSelected;return t&&this.selectRoom.name?(t[0]?t[0].name:"")+(t[1]?t[1].name:"")+(t[2]?t[2].name:"")+this.selectRoom.name:""},showSubmitButton:function(){var t=this.stationList.map((function(t){return t.status}));return this.stationList.length>0&&t.includes(!0)},isReulst:function(){return this.$route.query.isReulst},appDev:function(){return"dev"===APP_ENV},roomInformation:function(){var t=this.placeSelected;return{project:this.$store.state.global.currentProject.name||"",building:t[1]?t[1].name:"",suite:"".concat(t[2]?t[2].name:"").concat(this.selectRoom.name),room:this.stationData.name,stage:this.checkitemSelected.name||""}}},created:function(){this.scanningPop=h.a.scanningLoadPopup()},activated:function(){this.$router.isBack||this.init()},methods:{init:function(){var t=this;this.oneResultOperating=!1,this.emptyType=3,this.stationList=[],this.isListLoading=!0,this.fakeDataBur=!1,this.pollingstatus=this.getPDSStatus(),this.pollingAllData=this.getPollingDataStateAllData();this.scanningPop;return this.networkJudgment().then((function(){return t.getStartList()}))},networkJudgment:function(){var t=this;return d.a.getConnectionInfo().then((function(e){t.emptyType=3,t.onResumeEven()})).catch((function(t){$log.error("激光扫描实测-start.vue-初始化：",t)})).finally((function(){t.isListLoading=!1}))},getStartList:function(){var t=this,e=this.selectRoom.room_id,a=this.checkitemSelected.id;v.a.getStartDataList(e,a,this.resultStatus).then((function(e){t.stationList=e.list,t.batch_id=e.batch_id})).catch((function(t){$log.log("激光扫描实测-获取测站数据-报错：",t)}))},wifiClick:function(){this.init()},addStation:function(){var t=this,e={parentId:this.checkitemSelected.id,selectRoom:this.selectRoom,proj_id:this.projId,callback:function(){t.getStartList()}};O.onOpen(e)},listEdit:function(t){var e=this,a={id:t.id,name:t.name,parentId:this.checkitemSelected.id,selectRoom:this.selectRoom,proj_id:this.projId,callback:function(){e.getStartList()}};O.onOpen(a)},listDetail:function(t){this.$router.push({name:"LaserScanningDetail",query:{resultId:t.id}})},listStart:function(t){this.fakeDataBur=!1,this.stationData=t,this.scanStarts(t)},fakeData:function(t){this.fakeDataBur=!0,this.stationData=t,this.scanStarts(t)},toModel:function(t){t&&t.taskId?Object(u.e)(t.taskId).then((function(){})).catch((function(t){$log.error("激光扫描实测-测站页面-进入三维模型-error：",t)})):h.a.alert("无设备任务id")},scanStarts:(C=Object(r.a)(regeneratorRuntime.mark((function t(e,a){var n,i,s,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n=null,this.saveAllData(),p.a.keepScreenOn(!0),this.fakeDataBur){t.next=37;break}return clearTimeout(window.laserScanningTimeout),h.a.loading("正在连接设备..."),t.next=9,Object(u.a)();case 9:if(t.sent){t.next=13;break}return h.a.alert("请连接扫描仪WiFi后再试"),t.abrupt("return",!1);case 13:return h.a.hideLoading(),this.scanningPop.onOpen(),this.popSwitch(Boolean(a)),i=a||L.a.uuid(),this.pollingstatus=this.getPDSStatus(),this.pollingstatus&&(this.pollingAllData=this.getPollingDataStateAllData(),s=this.getPollingDataState(),r=s.taskId,i=r),this.startEvent(),$log.log("激光扫描实测-开始扫描-加载前-数据：",i,this.pollingstatus,this.getPollingDataState()),t.next=24,this.loadingState(i,Boolean(a));case 24:if("error"!==(o=t.sent)){t.next=27;break}throw new Error("激光扫描-开始扫描-加载中-报错："+o);case 27:if(!0===o){t.next=29;break}return t.abrupt("return",!1);case 29:return this.endEvent(),t.next=32,Object(u.c)({taskId:i});case 32:n=t.sent,a=i,$log.log("激光扫描实测-获取设备数据-原始数据：",n),t.next=39;break;case 37:n={room:{measurements:[{id:"6",value:[2828,2828,2834,2832,2831]},{id:"8",value:[3518,3520]},{id:"9",value:[3761,3753]},{id:"12",value:[11]},{id:"10",value:[14]}]},ceiling:{id:2,measurements:[{id:"4",value:[1535,1535,1530,1544,1524]}]},floor:{id:0,measurements:[{id:"4",value:11},{id:"2",value:[2,0,0,2]}]},walls:[{id:1,measurements:[{id:"2",value:[7,13,6,7,6]},{id:"3",value:[8,10,13,25]}]},{id:4,measurements:[{id:"2",value:[4,4,8,2]},{id:"3",value:[2,3,7,3,4]}]},{id:5,measurements:[{id:"2",value:[1,6,4,1]},{id:"3",value:[10,9,11,17,11]}]},{id:6,measurements:[{id:"2",value:[2,4,3,2]},{id:"3",value:[4,2,1,1,2]}]}],multiwalls:[{id:"7",walls:[4,6],value:4},{id:"7",walls:[5,6],value:3}],openings:[{id:0,measurements:[{id:"11",value:[1122,1122,2201,2201]}]},{id:1,measurements:[{id:"11",value:[550,555,1110,1110]}]}]},a="39ed7f62-6b57-d94b-4e0d-000000000008";case 39:n=this.dataConversion(n),$log.log("激光扫描实测-获取设备数据-转换后数据：",n,e,a),this.getSaveMeasureResult(n,e,a),this.reastLocal(),t.next=49;break;case 45:t.prev=45,t.t0=t.catch(0),h.a.alert("激光扫描失败"),$log.error("激光扫描实测-开始扫描-报错：",t.t0);case 49:return t.prev=49,p.a.keepScreenOn(!1),this.scanningPop.onClose(),t.finish(49);case 53:case"end":return t.stop()}}),t,this,[[0,45,49,53]])}))),function(t,e){return C.apply(this,arguments)}),loadingState:function(t,e){var a=this;if(!t)return!1;var n=this.scanningPop,i=this.popSwitch(e),o=i.state,l=i.rate;return Object(u.b)({taskId:t,state:o,rate:l}).then((function(e){return new Promise(function(){var i=Object(r.a)(regeneratorRuntime.mark((function i(r,c){var d,p;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if($log.log("激光扫描实测轮询-接口返回值：",t,o,l,e),"object"!==Object(s.a)(e)){i.next=47;break}if(d=e.state,p=e.taskId,"scanning"!==o||"analyzing"!==d){i.next=11;break}return n.onLoading(100),i.next=7,a.setTimeoutSeal(.5,(function(){return!0}));case 7:return n.onSwitch("switch"),l=0,i.next=11,a.setTimeoutSeal(1,(function(){return!0}));case 11:n.onLoading(l),i.t0=d,i.next="pedding"===i.t0||"scanning"===i.t0?15:"analyzing"===i.t0?19:"uploading"===i.t0||"finished"===i.t0?23:"failed"===i.t0?30:"pending"===i.t0?33:"busy"===i.t0?36:"fail"===i.t0?39:42;break;case 15:return n.onSwitch("scanning"),(l<90||l>=90&&l<99)&&(l+=1),a.delayedCall({time:220,taskId:p},r,c),i.abrupt("break",44);case 19:return n.onSwitch("analyzing"),l<90?l+=2:l>=90&&l<99&&(l+=1),a.delayedCall({time:200,taskId:p},r,c),i.abrupt("break",44);case 23:return l=100,n.onLoading(l),n.onSwitch("finished"),i.next=28,a.setTimeoutSeal(2,(function(){return!0}));case 28:return r(!0),i.abrupt("break",44);case 30:return h.a.alert("测量失败"),r(!1),i.abrupt("break",44);case 33:return h.a.alert("设备无法连接，请检查设备是否正常运行"),r(!1),i.abrupt("break",44);case 36:return h.a.alert("设备正在工作，请稍后再试"),r(!1),i.abrupt("break",44);case 39:return h.a.alert("无参数"),r(!1),i.abrupt("break",44);case 42:return a.delayedCall({time:100,taskId:p},r,c),i.abrupt("break",44);case 44:a.setLocalLaserScanningState({taskId:t,rate:l,state:d}),i.next=49;break;case 47:return"taskId not exist"===e&&Object(u.d)(I({taskId:t},a.roomInformation)).then((function(e){$log.log("激光扫描实测-开启扫描-返回数据：",e,t),"success"===e?(a.setLocalLaserScanningState({rate:0,state:"scan"}),a.delayedCall({time:300,taskId:t},r,c)):"busy"===e?(h.a.alert("扫描设备忙，请稍后再试"),r(!1)):(h.a.alert(e),$log.error("激光扫描实测-开启扫描-报错：",e))})),i.abrupt("return",e);case 49:case"end":return i.stop()}}),i)})));return function(t,e){return i.apply(this,arguments)}}())})).catch((function(t){return h.a.alert("扫描失败"),$log.error("激光扫描实测-扫描轮询-报错：",t),t}))},delayedCall:function(t,e,a){var n=this;if(!this.$route.meta.isLaserScanningStart)return!1;window.laserScanningTimeout=setTimeout((function(){clearTimeout(window.laserScanningTimeout),n.loadingState(t.taskId,!0).then((function(t){e(t)})).catch((function(t){a(t)}))}),10*t.time)},startEvent:function(){document.addEventListener("pause",this.onPauseEvent,!1),document.addEventListener("resume",this.onResumeEven,!1)},endEvent:function(){document.removeEventListener("pause",this.onPauseEvent,!1),document.removeEventListener("resume",this.onResumeEven,!1)},onPauseEvent:function(){clearTimeout(window.laserScanningTimeout),this.scanningPop.onClose()},onResumeEven:function(){var t=this.getPollingDataState(),e=t.taskId,a=t.rate,n=t.state;if(e&&R.indexOf(n)<5&&R.indexOf(n)>0){var i=this.getPollingDataStateAllData().stationData;this.stationData=i,$log.log("激光扫描实测-后台切换到页面-数据：",e,a,n,i),this.scanStarts(i,e)}},popSwitch:function(t){var e=this.scanningPop,a=t?this.getPollingDataState():{state:"scan",rate:0},n=a.state,i=a.rate;return e.onSwitch(n),e.onLoading(i),{state:n,rate:i}},reastLocal:function(t){this.setLocalLaserScanningState({rate:0,state:"scan"}),this.saveAllData({})},getPDSStatus:function(){return this.$store.getters["laserScanning/getPollingDataStateStatus"]},getPollingDataState:function(){return this.$store.getters["laserScanning/getPollingDataState"]},getPollingDataStateAllData:function(){return this.$store.getters["laserScanning/getPollingDataStateAllData"]},saveAllData:function(t){var e={stationData:this.stationData,projId:this.projId,placeSelected:this.placeSelected,checkitemSelected:this.checkitemSelected,selectRoom:this.selectRoom,resultStatus:this.resultStatus};this.$store.dispatch("laserScanning/setPollingDataStateAllData",t||e)},setLocalLaserScanningState:function(t){this.$store.dispatch("laserScanning/setPollingDataState",t)},setTimeoutSeal:function(t,e){return new Promise((function(a,n){var i=setTimeout((function(){e()&&(clearTimeout(i),a())}),1e3*t)}))},dataConversion:function(t){var e=[];for(var a in t){var i=t[a];if(Array.isArray(i))for(var r in i){var o=i[r];if(o.measurements)for(var l in o.measurements){var c=o.measurements[l];e.push(Object.assign(c,{area:a+o.id}))}else e.push(Object.assign(o,{area:a}))}else if("object"===Object(s.a)(i))for(var u in i.measurements){var d=i.measurements[u];e.push(Object.assign(d,{area:a}))}}var p={};for(var h in e){var m=e[h];if(5===Number(m.id)||11===Number(m.id)){m.value;m.value=m.value.slice(2,4).concat(m.value.slice(0,2))}var g,f=[];if(Array.isArray(m.value))for(var v in m.value){var b=m.value[v];b=this.decimals(b,3);var k={};k=5===Number(m.id)||11===Number(m.id)?{val:b,area:m.area,label:v<=1?"高":"宽"}:8===Number(m.id)?{val:b,area:m.area,label:"开间"}:9===Number(m.id)?{val:b,area:m.area,label:"进深"}:{val:b,area:m.area},f.push(k)}else Array.isArray(m.walls)?(m.value=this.decimals(m.value,3),f=[{val:m.value,area:m.area}]):(m.value=this.decimals(m.value,3),f.push({val:m.value,area:m.area}));if(p[m.id])(g=p[m.id]).push.apply(g,Object(n.a)(f));else p[m.id]=f}if(p[8]&&p[9]){var _=p[8];p[8]=_.concat(p[9]),p[9]=_.concat(p[9])}return p},decimals:function(t,e){return"number"==typeof t?parseFloat(t.toFixed(e)):parseFloat(Number(t).toFixed(e))},getSaveMeasureResult:function(t,e,a){var n=this,i=Boolean(this.batch_id),s=I(I({},this.selectRoom),{},{proj_id:this.projId,status:"检查中",parent_checkitem_id:this.checkitemSelected.id,id:i?this.batch_id:L.a.uuid()}),r=[],o=function(i){var o=e.children[i],l=Number(o.third_checkitem_id),c=t[l]||[],u=0,d=0,p=null;if(c&&0!==c.length){var h="string"==typeof o.design_val?JSON.parse(o.design_val):o.design_val;c=c.map((function(t){return 5===l||8===l||9===l||11===l?h.forEach((function(e){t.label===e.label&&(t.setVal=e.setVal)})):t.setVal=h[0].setVal,t})),console.log(JSON.stringify(c),JSON.stringify({passrateMode:o.passrate_mode,standard:o.standard}),o.third_checkitem_id);var m=5===o.passrate_mode?{passrateMode:o.passrate_mode,minW:o.standard.min_w,maxW:o.standard.max_w,minH:o.standard.min_h,maxH:o.standard.max_h}:{passrateMode:o.passrate_mode,min:o.standard.min,max:o.standard.max},g=Object(D.a)(m),f=g.getPointsTotal(c);u=f.all,d=f.exceed,c=g.setPointState(c),p=g.getPassrate(c),console.log("all, exceed, passRate, ",u,d,p)}r.push({id:e.status?o.id:null,batch_id:s.id,station_id:e.id,proj_id:n.projId,bidsection_id:n.selectRoom.bidsection_id,building_id:n.selectRoom.building_id,unit:n.selectRoom.unit,floor:n.selectRoom.floor,room_id:n.selectRoom.room_id,third_checkitem_id:o.thirdCheckitemId,parent_checkitem_id:o.parent_checkitem_id,checkitem_id:o.checkitem_id,measurement_points:u,problem_points:d,measure_data:c,pass_rate:p,design_val:o.design_val,standard:o.standard,passrate_mode:o.passrate_mode,task_id:a||null})};for(var l in e.children)o(l);return $log.log("激光扫描实测-添加测站-批次和结果表数据：",s,r,i),this.oneResultOperating=!0,v.a.saveMeasurementResults(s,r,i).then((function(t){h.a.alert("测量成果"),n.$store.dispatch("laserScanning/setIsResult",!1),n.getStartList()})).catch((function(t){$log.error("激光扫描实测-添加测站-批次和结果表数据-报错：",t)}))},submit:function(){var t=this;if(this.batch_id){var e={status:"已提交",id:this.batch_id};return h.a.confirm("确定提交数据吗",(function(){var a=[];return t.stationList.forEach((function(e){!0!==e.status&&a.push(t.getSaveMeasureResult({},e))})),Promise.all(a).then((function(a){return v.a.updateBatchStatus(e).then((function(){h.a.alert("提交成功"),t.$router.go(t.isReulst?-2:-1)})).catch((function(t){$log.error("激光扫描实测-测站页面-提交 error =>",t)}))})).catch((function(t){$log.error("激光扫描实测-测站页面-提交-添加空白测站 error =>",t)}))}))}h.a.alert("请先测量数据")},lsGoBack:function(){this.$router.go(this.oneResultOperating&&this.isReulst?-2:-1)},lsClose:function(){this.$router.replace({name:"WorkBench"},!0)}}},z=(a("b99a"),Object(y.a)(E,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-content",{attrs:{title:"激光扫描实测","show-go-root":!1,"show-go-back":!1}},[a("div",{staticClass:"header-btn ls-header-go-back",attrs:{slot:"header-bar-left"},slot:"header-bar-left"},[a("div",{directives:[{name:"track",rawName:"v-track",value:"激光扫描实测-返回上一页",expression:"'激光扫描实测-返回上一页'"}],on:{click:function(e){t.lsGoBack()}}},[a("icon",{attrs:{name:"nav-back"}})],1),a("div",{directives:[{name:"track",rawName:"v-track",value:"激光扫描实测-返回顶层",expression:"'激光扫描实测-返回顶层'"}],on:{click:function(e){t.lsClose()}}},[a("icon",{attrs:{name:"nav-close"}})],1)]),a("div",{staticClass:"header-btn",attrs:{slot:"header-bar-right"},slot:"header-bar-right"},[t.noNetwork||t.isListLoading?t._e():a("div",{directives:[{name:"track",rawName:"v-track",value:"激光扫描实测-添加测站",expression:"'激光扫描实测-添加测站'"}],on:{click:function(e){t.addStation()}}},[t._v("\n      添加测站\n    ")])]),t.noNetwork||t.isListLoading?t._e():a("scroller",{attrs:{"is-empty":!t.stationList.length}},[a("div",{staticClass:"header"},[a("p",{staticClass:"title"},[t._v(t._s(t.titleText))]),a("p",[t._v("施工阶段："+t._s(t.checkitemSelected.name))])]),t.stationList.length?a("laser-scanning-list",{attrs:{list:t.stationList},on:{edit:t.listEdit,detail:t.listDetail,start:t.listStart,fakeData:t.fakeData,toModel:t.toModel}}):t._e(),a("loading-status",{staticClass:"laser-scanning-loading-status",attrs:{"is-empty":!t.stationList.length,"empty-text":t.emptyText}},[t.stationList.length?t._e():a("div",{staticClass:"loading-status-button",attrs:{slot:"empty-content"},on:{click:function(e){t.addStation()}},slot:"empty-content"},[t._v("\n        去添加\n      ")])])],1),a("loading-status",{staticClass:"laser-scanning-loading-status",attrs:{"is-loading":t.isListLoading,"is-empty":t.noNetwork,"empty-text":t.emptyText}},[t.noNetwork?a("div",{staticClass:"loading-status-button",attrs:{slot:"empty-content"},on:{click:t.wifiClick},slot:"empty-content"},[t._v("\n      去连接\n    ")]):t._e()]),t.isListLoading||!t.showSubmitButton||t.noNetwork?t._e():a("app-button-group",{attrs:{"fixed-bottom":""}},[a("app-button",{on:{click:t.submit}},[t._v("提交")])],1)],1)}),[],!1,null,"04efac6e",null));e.default=z.exports},b99a:function(t,e,a){"use strict";a("f428")},e89f:function(t,e,a){"use strict";var n=a("04f3"),i=a("cf09"),s=a("4360"),r=0;e.a={name:"PopupMixin",data:function(){return{backButtonEvent:null}},watch:{show:function(t){var e=this;if(t){if(this.$nextTick((function(){e.$el&&e.$el.style&&(e.$el.style.zIndex=++i.a.zIndex,r++,s.a.commit("app/SET_HAS_POPUP",!!r))})),!this.backButtonEvent){var a=this.close||this.closePopup;this.backButtonEvent=Object(n.a)(a)}}else--r<0&&(r=0),s.a.commit("app/SET_HAS_POPUP",!!r),this.backButtonEvent&&(Object(n.c)(this.backButtonEvent),this.backButtonEvent=null)}},methods:{}}},efec:function(t,e,a){"use strict";a("3d2e")},f428:function(t,e,a){var n=a("1595");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("85cb").default)("2207a12b",n,!0,{sourceMap:!1,shadowMode:!1})}}]);