(window["webpackJsonp_module_entry_zhkf_"]=window["webpackJsonp_module_entry_zhkf_"]||[]).push([["chunk-625fb08f"],{"0520":function(t,e,n){var o=n("e7a4");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("85cb").default;a("d5e8a080",o,!0,{})},"0a1d":function(t,e,n){"use strict";n("6d57");var o=n("16ca"),a=n("fd50"),i=n("c6e3"),r=n("a324"),s=n("0523"),c=function(){var t=function(t,e){for(var n=0;n<t.length;n++){var o=t[n],a=!1,i=0,r=!0;if("已交付"!=o.delivery_status){for(var s=0;s<e.length;s++){var c=e[s];c.batch_room_id.toLowerCase()==o.id.toLowerCase()&&(a=!0,["待派单","待指派","待整改"].indexOf(c.status)>-1&&(o.room_status="待整改",r=!1),"已整改"===c.status&&(r=!1,i=1),"已通过"!==c.status&&(r=!1))}r||o.room_status?"待整改"===o.room_status&&(o.has_repaired=i):o.room_status="已整改","交付中"!=o.delivery_status||"暂不收楼"===o.delivery_situation||a&&!r?("待交付"!=o.delivery_status||a&&!r)&&("交付中"!=o.delivery_status||"暂不收楼"!=o.delivery_situation||a&&!r)||(o.room_status="待交付"):o.room_status="已交付"}else o.room_status="已交付"}return t},e=function(e){var n=[i["a"].getUnitFloors(e),i["a"].getUnitRooms(e),r["a"].getProblemListByBatchUnitId(e)];return a["a"].all(n).then((function(n){var o=n[0],a=n[1],i=n[2];return t(a,i),s["a"].buildRoomListData(e,o,a)}))};return{getRoomListByBatchUnit:e}},l=c(),u=function(){var t=function(t,e){for(var n=0;n<t.length;n++){for(var o=t[n],a=!1,i=0,r=!0,s=0;s<e.length;s++){var c=e[s];c.batch_room_id.toLowerCase()==o.id.toLowerCase()&&(a=!0,["待派单","待指派","待整改"].indexOf(c.status)>-1&&(o.room_status="待整改",r=!1),"已整改"===c.status&&(r=!1,i=1),"已通过"!==c.status&&(r=!1))}if(r||o.room_status?"待整改"===o.room_status&&(o.has_repaired=i):o.room_status="已整改",a?r&&("已接待"===o.opening_status?o.room_status="已接待":o.room_status="待接待"):"已接待"===o.opening_status?o.room_status="已接待":o.room_status="待接待",!o.room_status)throw new Error("room_status 赋值为空."+o.id)}return t},e=function(e){var n=[i["a"].getUnitFloors(e),i["a"].getUnitRooms(e),r["a"].getProblemListByBatchUnitId(e)];return a["a"].all(n).then((function(n){var o=n[0],a=n[1],i=n[2];return a=t(a,i),s["a"].buildRoomListData(e,o,a)}))};return{getRoomListByBatchUnit:e}},d=u(),f=function(){var t={simulate:[{name:"全部",key:"all",dot:"",less:0},{name:"待检查",key:"待检查",dot:"white",less:0},{name:"待整改",key:"待整改",dot:"red",less:0},{name:"已整改",key:"已整改",dot:"blue",less:0},{name:"已通过",key:"已通过",dot:"green",less:0}],delivery:[{name:"全部",key:"all",dot:"",less:0},{name:"待交付",key:"待交付",dot:"white",less:0},{name:"待整改",key:"待整改",dot:"red",less:0},{name:"已整改",key:"已整改",dot:"blue",less:0},{name:"已交付",key:"已交付",dot:"green",less:0}],online_delivery:[{name:"全部",key:"all",dot:"",less:0},{name:"待交付",key:"待交付",dot:"white",less:0},{name:"待整改",key:"待整改",dot:"red",less:0},{name:"已整改",key:"已整改",dot:"blue",less:0},{name:"已交付",key:"已交付",dot:"green",less:0}],opening:[{name:"全部",key:"all",dot:"",less:0},{name:"待接待",key:"待接待",dot:"white",less:0},{name:"待整改",key:"待整改",dot:"red",less:0},{name:"已整改",key:"已整改",dot:"blue",less:0},{name:"已接待",key:"已接待",dot:"green",less:0}]},e={simulate:o["a"],delivery:l,opening:d,online_delivery:l},n={tabs:[],items:{},lastView:{},status_sel:"全部",status_counter:0,display_rooms:[]};return{model:n,init:function(t,e){return this.model.batchType=t,this.model.unitId=e,this.model.tabs=this.getTabs(t),this.getRoomList(t,e)},updateRoomList:function(){var t=this.model,e=t.batchType,n=t.unitId;this.init(e,n)},getTabs:function(e){return t[e]},tabsInit:function(){var t=this.model.items.unit_list[0].status_counter;this.model.tabs.forEach((function(e){e.less=t[e.key]||0}))},getRoomList:function(t,n){var o=this;return"special_checkitem"===t&&(t="simulate"),e[t]&&e[t].getRoomListByBatchUnit?e[t].getRoomListByBatchUnit(n).then((function(t){o.model.items=t,o.iniRoomData(),o.tabsInit()})):Promise.resolve()},iniRoomData:function(){this.model.items["unit_sel"]=this.model.items.unit_list[0].unit,this.roomStatusClass(),this.model.status_sel=this.model.lastView&&this.model.lastView.status||"全部",this.filterRoomList(),this.model.status_counter=this.model.items.unit_list[0].status_counter},filterRoomList:function(){for(var t=this.model.items.unit_list[0].floor_list,e=[],n=0;n<t.length;n++){for(var o=t[n].room_list,a=[],i=!1,r=0;r<o.length;r++)"全部"!=this.model.status_sel&&o[r].room_status!=this.model.status_sel||(a.push(o[r]),i=!0);i&&e.push({floor:t[n].floor,room_list:a})}this.model.display_rooms=e,console.log(this.model.display_rooms,"------------楼栋数据------------")},roomStatusClass:function(){for(var t=n.items.unit_list,e=0;e<t.length;e++)for(var o=t[e].floor_list,a=0;a<o.length;a++){var i=o[a].room_list;o[a]["floor_show"]=!0;for(var r=0;r<i.length;r++){switch(i[r]["room_show"]=!0,i[r].room_status){case"待检查":i[r]["room_status_class"]="white";break;case"待整改":i[r]["room_status_class"]="red",i[r].has_repaired&&(i[r]["room_status_class"]+=" problem-repaired");break;case"已整改":i[r]["room_status_class"]="blue";break;case"已通过":case"已接待":case"已交付":i[r]["room_status_class"]="green";break;default:i[r]["room_status_class"]="white";break}i[r]["room_info"]=JSON.stringify({building_name:i[r].building_name,unit:i[r].unit,floor:i[r].floor,room_no:i[r].room_no})}}}}};e["a"]=f()},"16ca":function(t,e,n){"use strict";var o=n("fd50"),a=n("c6e3"),i=n("a324"),r=n("0523"),s=n("07a4"),c=n("af4c"),l=function(t,e){for(var n=0;n<e.length;n++){var o=e[n];if(o.batch_room_id.toLowerCase()==t.toLowerCase())return!1}return!0},u=function(t,e){for(var n=0;n<t.length;n++){var o=t[n];if(0!=o.has_problem||0!=o.is_checked)if(l(o.id,e))t[n].room_status="已通过";else{for(var a=!0,i=0,r=0;r<e.length;r++){var s=e[r];if(o.id.toLowerCase()==s.batch_room_id.toLowerCase()){var c=["待派单","待指派","待整改"];c.indexOf(s.status)>-1&&(o.room_status="待整改",a=!1),"已整改"===s.status&&(a=!1,i=1)}}a?o.room_status="已通过":o.room_status?"待整改"===o.room_status&&(o.has_repaired=i):o.room_status="已整改"}else t[n].room_status="待检查"}return t},d=function(t){var e=[a["a"].getUnitFloors(t),a["a"].getUnitRooms(t),i["a"].getProblemListByBatchUnitId(t)];return o["a"].all(e).then((function(e){var n=e[0],o=e[1],a=e[2];return u(o,a),r["a"].buildRoomListData(t,n,o)}))};e["a"]={getRoomListByBatchUnit:d,updateCheckStatus:function(t){return a["a"].getRoomCheckStatus(t).then((function(t){t=t||{};var e=!t["is_checked"]||!t["check_date"]||!t["check_engineer"];return a["a"].updateCheckStatus(t,e)})).then((function(){"todo"===s["a"].state.app.global.currentMenuType&&c["a"].updateRoomList(!0)}))}}},"43ee":function(t,e,n){"use strict";n("c904");var o=n("fd50"),a=n("a14a"),i=n.n(a),r=n("d49d"),s=function(){var t={unitId:"",list:[],currRoom:{}},e={getRoomList:function(){return r["a"].getRoomList(t.unitId).then((function(e){var n=[];if(console.log(e),e){var o=i.a.groupBy(e,"floor");console.log(o),i.a.each(o,(function(t,e){var o={};o.floor=e,o.roomList=[],o.no=e,console.log(t),i.a.each(t,(function(t){o.roomList.push({id:t.id,room_no:t.room_no,count:t.count})})),o.roomList=o.roomList.sort((function(t,e){return e.room_no-t.room_no})),n.push(o)})),n=n.sort((function(t,e){return e.no-t.no})),t.list=n}}))}};return{model:t,initRoomList:function(n,a){return n||t.unitId?(t.list=[],n&&(t.unitId=n),a&&(t.currRoom={}),e.getRoomList()):o["a"].reject("无效的单元")},refresh:function(){return e.getRoomList()},checkHasUpload:function(t){return r["a"].checkHasUpload(t)}}};e["a"]=s()},4438:function(t,e,n){"use strict";var o=n("cb6b"),a=n("0e1c");e["a"]={getLocalBusinessToggle:function(){var t=o["a"].getObject(a["a"].BUSINESS_TOGGLE,o["a"].level.user);return t||{enable_opening_tab:0,enable_pass_when_add:0,enable_pass_when_to_repair:0,sign_when_receive_delivery:1,special_project_switch:0,take_photo_when_review:0,take_photo_when_regist:0,hide_owner_phone:0,enable_problem_reason:0}}}},"5a4f":function(t,e,n){"use strict";n("5ab2"),n("6d57"),n("e44b"),n("e10e"),n("cc57");var o=n("28f8");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var r={name:"AppInput",model:{prop:"value",event:"change"},props:{type:{type:String,default:"text"},value:{type:String,default:""},name:{type:String,default:""}},computed:{text:{get:function(){return this.value},set:function(t){this.$emit("change",t)}},listeners:function(){return i(i({},this.$listeners),{},{change:function(){}})}},watch:{text:function(t){String(this.name).toLowerCase().indexOf("pwd")<0&&(this.text=t.slice(0,20))}},methods:{onBlur:function(){this.type}}},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",t._g(t._b({directives:[{name:"model",rawName:"v-model.trim",value:t.text,expression:"text",modifiers:{trim:!0}}],staticClass:"app-input",attrs:{type:t.type,name:t.name},domProps:{value:t.text},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("submit")},blur:[function(e){return t.onBlur()},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||(t.text=e.target.value.trim())}}},"input",t.$attrs,!1),t.listeners))},c=[],l=n("d082");function u(t){n("d18a")}var d=!1,f=u,m="data-v-7ace17fb",h=null,p=Object(l["a"])(r,s,c,d,f,m,h);e["a"]=p.exports},"65e1":function(t,e,n){"use strict";n("163d");var o={name:"Rating",props:{score:{type:[String,Number],required:!0},index:{type:[String,Number],default:0},disabled:{type:Boolean,default:!1}},computed:{},methods:{getClass:function(t){return t<=parseInt(this.score,10)?"xingxing1":"xingxing"},setScore:function(t){this.disabled||this.$emit("update:score",t,this.index)}}},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rating"},t._l(5,(function(e){return n("span",{key:e,staticClass:"star",class:t.getClass(e),on:{click:function(n){return t.setScore(e)}}})})),0)},i=[],r=n("d082");function s(t){n("c1fd")}var c=!1,l=s,u="data-v-a6e622e0",d=null,f=Object(r["a"])(o,a,i,c,l,u,d);e["a"]=f.exports},"76c0":function(t,e,n){"use strict";n("5f54");var o=n("cb6b"),a=n("0e1c"),i={customer_phone:"",saved_customer_phone:"",signature_image_localpath:"",saved_signature_image_localpath:"",review_signature_image_localpath:"",saved_review_signature_image_localpath:""};e["a"]={getReceive:function(){return o["a"].getObject(a["a"].RECEIVE_RECORD_STORAGE)||i},updateReceive:function(t){var e=o["a"].getObject(a["a"].RECEIVE_RECORD_STORAGE)||i,n=Object.assign({},e,t);o["a"].set(a["a"].RECEIVE_RECORD_STORAGE,n)}}},7803:function(t,e,n){var o=n("5454");e=t.exports=n("690e")(!1),e.push([t.i,"\n.zhkf .star[data-v-a6e622e0] {\n  display: inline-block;\n  font-size: 18px;\n  width: 24px;\n  height: 24px;\n  margin-left: 8px;\n}\n.zhkf .star[data-v-a6e622e0]:first-child {\n    margin-left: 0;\n}\n.zhkf .xingxing[data-v-a6e622e0] {\n  background: url("+o(n("5ea5"))+") no-repeat;\n  background-size: 100%;\n}\n.zhkf .xingxing1[data-v-a6e622e0] {\n  background: url("+o(n("2470"))+") no-repeat;\n  background-size: 100%;\n}\n",""])},"99ee":function(t,e,n){"use strict";n("c904");var o=n("fd50"),a=n("a14a"),i=n.n(a),r=n("ff29"),s=function(){var t={unitId:"",list:[],currRoom:{}},e={getRoomList:function(){return r["a"].getRoomList(t.unitId).then((function(e){var n=[];if(console.log(e),e){var o=i.a.groupBy(e,"floor");console.log(o),i.a.each(o,(function(t,e){var o={};o.floor=e,o.roomList=[],o.no=e,console.log(t),i.a.each(t,(function(t){o.roomList.push({id:t.id,room_no:t.room_no,count:t.count})})),o.roomList=o.roomList.sort((function(t,e){return e.room_no-t.room_no})),n.push(o)})),n=n.sort((function(t,e){return e.no-t.no})),t.list=n}}))}};return{model:t,initRoomList:function(n,a){return n||t.unitId?(t.list=[],n&&(t.unitId=n),a&&(t.currRoom={}),e.getRoomList()):o["a"].reject("无效的单元")},refresh:function(){return e.getRoomList()},checkHasUpload:function(t){return r["a"].checkHasUpload(t)}}};e["a"]=s()},af4c:function(t,e,n){"use strict";n("e697");var o=n("fd50"),a=n("a18c"),i=n("99ee"),r=n("43ee"),s=n("a14a"),c=n.n(s),l=n("c6e3"),u=function(){return{getNotCheckFloorAndRoom:function(t,e){return o["a"].all([l["a"].getTodoUnitFloors(t),l["a"].getTodoRoomByUnitId(t,e)]).then((function(t){var e,n=t[0],o=t[1],a="0";(c.a.isEmpty(n)||1===n.length&&""===n[0].floor)&&(e=!0,n=[{floor:a}]);for(var i=0;i<n.length;i++){n[i].roomList=[];for(var r=0;r<o.length;r++)(e||o[r].floor===n[i].floor)&&(o[r].floor=e?a:o[r].floor,n[i].roomList.push(o[r]))}return c.a.filter(n,(function(t){return t.roomList&&t.roomList.length>0}))}))},checkHasUpload:function(t,e){return l["a"].checkHasUpload(t,e).then((function(t){return t&&!!t["id"]}))},getRoomInfo:function(t,e){return l["a"].getTodoBatchRoomById(t,e)}}},d=u(),f=function(){var t={floorList:[]},e={},n={special_checkitem:"检查",simulate:"检查",opening:"接待",online_opening:"拍摄",feedback_remain_reply:"回复",delivery:"交付",online_delivery:"交付",problem_remain_reinspect:"复验"};return e.init=function(n,a,i){return i=i||!1,i||n!==t.batchUnitId||a!==t.moduleType?(t.floorList=[],t.batchUnitId=n,t.moduleType=a,t.currRoom=null,t.currFloor=null,t.tip="",e.getRoomList().then((function(e){console.log(e,"floorlist-----"),t.floorList=e}))):o["a"].resolve()},e.getRoomList=function(){return"problem_remain_reinspect"===t.moduleType?e.getReinspectRoomList():"feedback_remain_reply"===t.moduleType?e.getReplyRoomList():e.getCheckRoomList()},e.getCheckRoomList=function(){return d.getNotCheckFloorAndRoom(t.batchUnitId,t.moduleType).then((function(e){return c.a.isEmpty(e)&&d.checkHasUpload(t.batchUnitId,t.moduleType).then((function(e){e&&(t.tip="您已经"+n[t.moduleType]+"完毕，请立即上传~")})),e}))},e.getReinspectRoomList=function(){return i["a"].initRoomList(t.batchUnitId).then((function(){return c.a.isEmpty(i["a"].model.list)&&i["a"].checkHasUpload(t.batchUnitId).then((function(e){e&&(t.tip="您已经"+n[t.moduleType]+"完毕，请立即上传~")})),i["a"].model.list}))},e.getReplyRoomList=function(){return r["a"].initRoomList(t.batchUnitId).then((function(){return c.a.isEmpty(r["a"].model.list)&&r["a"].checkHasUpload(t.batchUnitId).then((function(e){e&&(t.tip="您已经"+n[t.moduleType]+"完毕，请立即上传~")})),r["a"].model.list}))},e.getRoomInfo=function(t,e){return d.getRoomInfo(t,e)},e.removeRoom=function(){var n=c.a.find(t.currFloor.roomList,{id:t.currRoom.id}),o=c.a.indexOf(t.currFloor.roomList,n);o>-1&&t.currFloor.roomList.splice(o,1),c.a.isEmpty(t.currFloor.roomList)&&(o=c.a.indexOf(t.floorList,t.currFloor),o>-1&&t.floorList.splice(o,1)),c.a.isEmpty(t.floorList)&&(e.init(t.batchUnitId,t.moduleType,!0),a["a"].go(-2))},{model:t,init:e.init,updateRoomList:function(a){return c.a.isEmpty(t)||!t.moduleType?o["a"].resolve():(a=a||!1,a?e.removeRoom():"problem_remain_reinspect"===t.moduleType?i["a"].refresh().then((function(){c.a.isEmpty(i["a"].model.list)&&i["a"].checkHasUpload(t.batchUnitId).then((function(e){e&&(t.tip="您已经"+n[t.moduleType]+"完毕，请立即上传~")})),t.floorList=i["a"].model.list})):"feedback_remain_reply"!==t.moduleType?e.getRoomInfo(t.currRoom.id,t.moduleType).then((function(n){if(c.a.isEmpty(n)||"已检查"===n.check_status)return e.removeRoom();for(var o=t.currFloor.roomList.length,a=0;a<o;a++)if(t.currFloor.roomList[a].id===n.id){t.currFloor.roomList[a]=n;break}})):(c.a.isEmpty(r["a"].model.list)&&r["a"].checkHasUpload(t.batchUnitId).then((function(e){e&&(t.tip="您已经"+n[t.moduleType]+"完毕，请立即上传~")})),void(t.floorList=r["a"].model.list)))}}};e["a"]=f()},b32e:function(t,e,n){e=t.exports=n("690e")(!1),e.push([t.i,"\n.zhkf .app-input[data-v-7ace17fb] {\n  display: block;\n  border: 0;\n  border-radius: 0;\n  outline: 0;\n  font-size: 14px;\n  background: transparent;\n}\n",""])},c1fd:function(t,e,n){var o=n("7803");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("85cb").default;a("0c324747",o,!0,{})},ce7b:function(t,e,n){"use strict";var o=n("fd50"),a=n("c6e3"),i=n("d42a"),r=n("d485"),s=n("28c8"),c=n("76c0");e["a"]={getReceiveInfo:function(t,e){var n=[a["a"].getRoomReceiveInfo(t),a["a"].getRoomTitle(t,!0),r["a"].getProblemList(t,1),s["a"].getRoomSatisfactionValueList("开放",t),a["a"].getRoomReceivePersonInfo(e)];return o["a"].all(n).then((function(t){var e=t[0];return e.room_title=t[1],e.problemList=t[2],e.satisfactionList=t[3],e.customers=t[4],e}))},saveReceiveInfo:function(t,e){return i["a"].saveReceiveInfo(t,e)},isChangeRecord:function(){var t=c["a"].getReceive(),e=t.customer_phone!=t.saved_customer_phone||t.signature_image_localpath!=t.saved_signature_image_localpath;if(e)return!0;var n=[];for(var o in t)-1!=o.indexOf("record_")&&n.push(o.slice(7));for(var a=0;a<n.length;a++)if(t["record_"+n[a]]!=t["saved_"+n[a]])return!0;return!1}}},d18a:function(t,e,n){var o=n("b32e");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("85cb").default;a("6599e76d",o,!0,{})},d49d:function(t,e,n){"use strict";var o=n("fd50"),a=n("4325"),i=n("a14a"),r=n.n(i),s=function(){var t={},e={position:a["a"].getPositionFilter,checkItem:a["a"].getCheckItemFilter};return t.getRoomList=function(t){return a["a"].getReplyRooms(t)},t.getFeedbackListByBatchRoomId=function(t,e,n){return t.batchRoomId?a["a"].getFeedbackListByBatchRoomId(t,e,n).then((function(t){return t})):o["a"].reject("获取问题列表失败")},t.getFeedbackFilters=function(t,n){if(!t.batchRoomId)return o["a"].reject();var a=r.a.cloneDeep(e),i=[];return delete a[n],t.position||delete a.checkItem,r.a.each(a,(function(n,o){i.push(function(n){return e[o](t).then((function(t){return{type:n,options:t}}))}(o))})),o["a"].all(i).then((function(t){var e={};return r.a.each(t,(function(t){var n=0;r.a.each(t.options,(function(t){n+=t.count})),t.options.unshift({name:"全部",count:n,id:""}),e[t.type]=t.options})),e}))},t.hasMoreFeedback=function(t){return a["a"].getFeedbackCount(t).then((function(t){return t.count>0}))},t.getAllFeedbackIds=function(t){return a["a"].getAllFeedbackIds(t).then((function(t){return t}))},t.checkHasUpload=function(t){return a["a"].hasUploadData(t).then((function(t){return t&&!!t["id"]}))},t};e["a"]=s()},db51:function(t,e,n){"use strict";n.r(e);n("5ab2"),n("e44b"),n("e10e"),n("cc57"),n("6d57");var o=n("28f8"),a=n("5a4f"),i=n("65e1"),r=n("bdbb"),s=n("c2c1"),c=n("f2de"),l=n("8ae6"),u=n("4438"),d=n("76c0"),f=n("ce7b"),m=n("3fa2"),h=n("0a1d"),p=n("af4c");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b="",_="",k={name:"ReceiveRecord",components:{AppInput:a["a"],Rating:i["a"],TextBox:r["a"]},data:function(){return{baseInfo:{},score:3,remark:"",signatureImageLocalpath:"",signatureImagePath:"",isShowPhone:!1,canDialTelphone:!1}},computed:v(v({},Object(c["e"])({currentMenuType:function(t){return t.app.global.currentMenuType}})),{},{text:function(){return this.currentRate.toFixed(2)+"%"}}),created:function(){var t=this;b=m["a"].room.batchRoomId,_=m["a"].room.id,this.isShowPhone=1!=u["a"].getLocalBusinessToggle().hide_owner_phone,d["a"].updateReceive({signature_image_localpath:"",saved_signature_image_localpath:""}),f["a"].getReceiveInfo(b,_).then((function(e){e.satisfactionList.forEach((function(t){t.score=0})),console.log("ReceiveInfo",e),t.baseInfo={roomTitle:e.room_title,customerName:e.customer_name,customerPhone:e.customer_phone,customers:e.customers,problemList:e.problemList,satisfactionList:e.satisfactionList,satisfactionRemark:e.satisfaction_remark||""},t.baseInfo.customers.forEach((function(t,e){t.canDialTelphonee=-1===t.customer_phone.indexOf("*")})),t.canDialTelphone=-1===t.baseInfo.customer_phone.indexOf("*"),d["a"].updateReceive({customer_phone:e.customer_phone,saved_customer_phone:e.customer_phone,degree:e.satisfactionList,saved_degree:e.satisfactionList,satisfaction_remark:e.satisfaction_remark});for(var n=0;n<e.satisfactionList.length;n++){var o={};o["record_"+e.satisfactionList[n].id]=e.satisfactionList[n].value,o["saved_"+e.satisfactionList[n].id]=e.satisfactionList[n].value,d["a"].updateReceive(o)}}))},methods:{updateScore:function(t,e){this.baseInfo.satisfactionList[e].value=t;var n=this.baseInfo.satisfactionList[e].id;this.updateReceiveStorage("record_"+n,t)},onChangeRemark:function(t){this.baseInfo.satisfactionRemark=t},updateReceiveStorage:function(t,e){var n={};n[t]=e,d["a"].updateReceive(n)},signImg:function(){var t=this;s["a"].openSign().then((function(e){e&&(t.signatureImagePath=e,t.signatureImageLocalpath=Object(l["f"])(e),t.updateReceiveStorage("signature_image_localpath",e))}))},delSignImg:function(){this.signatureImagePath="",this.signatureImageLocalpath="",this.updateReceiveStorage("signature_image_localpath","")},showSignImg:function(t){console.error("showSignImg"),s["a"].openImageBrowser([t],0)},submitSaveReceive:function(){for(var t=this,e=0;e<this.baseInfo.satisfactionList.length;e++){var n=this.baseInfo.satisfactionList[e];if(!n.score)return this.$toast("请选择".concat(n.name)),!1}var o=u["a"].getLocalBusinessToggle(),a=o&&1==o.sign_when_receive_delivery;if(a&&!this.signatureImagePath)return this.$toast("请邀请业主签名"),!1;this.$toast.loading({mask:!0,message:"正在提交...",duration:0});var i={customer_phone:this.baseInfo.customerPhone,signature_image_localpath:this.signatureImagePath||"",satisfactionList:this.baseInfo.satisfactionList,satisfaction_remark:this.baseInfo.satisfactionRemark};f["a"].saveReceiveInfo(b,i).then((function(e){m["a"].room.isReceived=!0,t.$toast.clear(),t.$toast("提交成功",1e3),"todo"!=t.currentMenuType&&h["a"].updateRoomList(),t.$router.go(-1),"todo"===t.currentMenuType&&p["a"].updateRoomList(!0)}),(function(e){t.$toast.clear(),t.$toast("提交失败"),console.log("提交失败交付信息失败",e)}))}}},y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"delivery-view yf-comp-wrapper"},[o("cus-nav-bar",{attrs:{title:"接待信息","left-arrow":"",border:!1}}),t._v(" "),o("div",{staticClass:"content"},[o("div",{staticClass:"title"},[t._v("基础信息")]),t._v(" "),o("div",{staticClass:"base-info wrapper"},[o("div",{staticClass:"item"},[o("div",{staticClass:"base-label"},[t._v("房产")]),t._v(" "),o("div",{staticClass:"value"},[t._v(t._s(t.baseInfo.roomTitle))])]),t._v(" "),o("div",{staticClass:"item cus"},[o("div",{staticClass:"base-label"},[t._v("业主")]),t._v(" "),t.baseInfo.customers&&t.baseInfo.customers.length?o("div",{staticClass:"block"},t._l(t.baseInfo.customers,(function(e,n){return o("div",{staticClass:"customer",attrs:{Key:n}},[o("span",{staticClass:"customer-name"},[t._v(t._s(e.customer_name))]),t._v(" "),e.canDialTelphonee?o("a",{attrs:{href:"tel:"+e.customer_phone}},[t._v(t._s(e.customer_phone))]):t._e(),t._v(" "),e.canDialTelphonee?t._e():o("span",{staticClass:"color-gray"},[t._v(t._s(e.customer_phone))])])})),0):t._e()])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.baseInfo.problemList&&t.baseInfo.problemList.length>0,expression:"baseInfo.problemList && baseInfo.problemList.length > 0"}],staticClass:"title"},[t._v("房间问题")]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.baseInfo.problemList&&t.baseInfo.problemList.length>0,expression:"baseInfo.problemList && baseInfo.problemList.length > 0"}],staticClass:"problem-info wrapper"},t._l(t.baseInfo.problemList,(function(e,n){return o("div",{key:n,staticClass:"problem-item"},[o("p",{staticClass:"h2"},[t._v(t._s(e.position_name)+" "+t._s(e.item_name))]),t._v(" "),o("p",{staticClass:"problem-desc",staticStyle:{"padding-right":"10px"}},[t._v(t._s(e.desc))])])})),0),t._v(" "),o("div",{staticClass:"title"},[t._v("接待记录")]),t._v(" "),o("div",{staticClass:"delivery-info wrapper van-hairline--bottom"},t._l(t.baseInfo.satisfactionList,(function(e,n){return o("div",{key:n,staticClass:"item"},[o("div",{staticClass:"satisfactionList-label"},[t._v(t._s(e.name))]),t._v(" "),o("div",{staticClass:"value"},[o("rating",{attrs:{score:e.score,disabled:!1,index:n},on:{"update:score":[function(n){return t.$set(e,"score",n)},t.updateScore]}})],1)])})),0),t._v(" "),o("text-box",{attrs:{remark:t.baseInfo.satisfactionRemark,placeholder:"满意度说明/其他补充说明"},on:{input:t.onChangeRemark}}),t._v(" "),o("div",{staticClass:"sign wrapper van-hairline--top"},[o("div",{staticClass:"item"},[o("div",{staticClass:"sign-label"},[t._v("业主签名")]),t._v(" "),o("div",{staticClass:"value"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!t.signatureImageLocalpath,expression:"!signatureImageLocalpath"}],staticClass:"sign-btn",on:{click:t.signImg}},[t._v("签名")]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.signatureImageLocalpath,expression:"signatureImageLocalpath"}],staticClass:"img-wrapper"},[o("img",{staticClass:"sign-img",attrs:{src:t.signatureImageLocalpath},on:{click:function(e){return t.showSignImg(t.signatureImageLocalpath)}}}),t._v(" "),o("img",{staticClass:"delete",attrs:{src:n("fa1c"),alt:"delete"},on:{click:function(e){return e.stopPropagation(),t.delSignImg()}}})])])])])],1),t._v(" "),o("div",{staticClass:"footer"},[o("ul",{staticClass:"btn-wrapper"},[o("li",{staticClass:"blue",on:{click:t.submitSaveReceive}},[t._v("提交")])])])],1)},x=[],R=n("d082");function L(t){n("0520")}var w=!1,I=L,C="data-v-130a0d32",O=null,z=Object(R["a"])(k,y,x,w,I,C,O);e["default"]=z.exports},e7a4:function(t,e,n){e=t.exports=n("690e")(!1),e.push([t.i,"\n[data-v-130a0d32] .textarea {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.zhkf .sign .sign-label[data-v-130a0d32] {\n  margin-right: 18px;\n}\n.zhkf .sign-btn[data-v-130a0d32] {\n  width: 80px;\n  height: 40px;\n  background: #f4f4f4;\n  text-align: center;\n  line-height: 40px;\n  color: #0099ff;\n  font-size: 15px;\n}\n.zhkf .img-wrapper[data-v-130a0d32] {\n  display: inline-block;\n  position: relative;\n}\n.zhkf .sign-img[data-v-130a0d32] {\n  display: inline-block;\n  width: 80px;\n  height: 40px;\n}\n.zhkf .delete[data-v-130a0d32] {\n  position: absolute;\n  right: -10px;\n  top: -10px;\n  width: 20px;\n  height: 20px;\n}\n.zhkf .customer[data-v-130a0d32] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 15px;\n}\n.zhkf .customer[data-v-130a0d32]:last-child {\n    margin-bottom: 0;\n}\n.zhkf .customer .customer-name[data-v-130a0d32] {\n    margin-right: 5px;\n}\n.zhkf .customer a[data-v-130a0d32] {\n    color: #0099ff;\n}\n.zhkf .font-grey[data-v-130a0d32] {\n  color: #a8a8a8;\n  font-size: 12px;\n}\n.zhkf .color-gray[data-v-130a0d32] {\n  color: #a0a0a0;\n}\n.zhkf .action-sheet[data-v-130a0d32] {\n  position: fixed;\n  background: rgba(0, 0, 0, 0.35);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n  z-index: 2002;\n}\n.zhkf .action-sheet .overlay[data-v-130a0d32] {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n.zhkf .content[data-v-130a0d32] {\n  overflow: auto;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.zhkf .content .title[data-v-130a0d32] {\n    height: 45px;\n    color: #606060;\n    font-size: 15px;\n    padding-left: 15px;\n    line-height: 45px;\n}\n.zhkf .content .wrapper[data-v-130a0d32] {\n    padding: 15px;\n    background: #fff;\n}\n.zhkf .content .item[data-v-130a0d32] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #202020;\n    font-size: 15px;\n    margin-bottom: 16px;\n}\n.zhkf .content .item.cus[data-v-130a0d32] {\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: flex-start;\n}\n.zhkf .content .item[data-v-130a0d32]:last-child {\n      margin-bottom: 0px;\n}\n.zhkf .content .item .base-label[data-v-130a0d32] {\n      width: 50px;\n}\n.zhkf .content .item .delivery-label[data-v-130a0d32] {\n      width: 70px;\n}\n.zhkf .content .item .satisfactionList-label[data-v-130a0d32] {\n      width: 138px;\n}\n.zhkf .content .item .value[data-v-130a0d32] {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n}\n.zhkf .content .item .value.checkbox[data-v-130a0d32] {\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: reverse;\n            -ms-flex-direction: row-reverse;\n                flex-direction: row-reverse;\n}\n.zhkf .content .item .value .ipt[data-v-130a0d32] {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n}\n.zhkf .content .item .value .unit[data-v-130a0d32] {\n        color: #a0a0a0;\n}\n.zhkf .content .item .value .arrow[data-v-130a0d32] {\n        color: #d2d2d7;\n        font-size: 12px;\n        margin-right: 7px;\n}\n.zhkf .footer[data-v-130a0d32] {\n  background: #fff;\n}\n.zhkf .footer .btn-wrapper[data-v-130a0d32] {\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 45px;\n}\n.zhkf .footer .btn-wrapper li[data-v-130a0d32] {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      text-align: center;\n      line-height: 45px;\n      font-size: 16px;\n}\n.zhkf .footer .btn-wrapper li.white[data-v-130a0d32] {\n        background: #fff;\n        color: #eb544d;\n}\n.zhkf .footer .btn-wrapper li.blue[data-v-130a0d32] {\n        background: #0099ff;\n        color: #fff;\n}\n.zhkf .problem-info[data-v-130a0d32] {\n  padding: 15px;\n}\n.zhkf .problem-info .problem-item[data-v-130a0d32] {\n    font-size: 15px;\n}\n.zhkf .problem-info .problem-item h2[data-v-130a0d32] {\n      color: #202020;\n}\n.zhkf .problem-info .problem-item .problem-desc[data-v-130a0d32] {\n      color: #606060;\n}\n.zhkf .problem-info .problem-item[data-v-130a0d32]:not(:first-child) {\n    margin-top: 20px;\n}\n",""])},fa1c:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACg0lEQVRYR9WZPUwUQRTH//8Bc1pIw54fkcTCQgs7NVpi7d0h2d2EwspKDfZQWFFgjwEqKhNi9giCWEtpolZYSGFhghHZscFCLhz7zO555A64j113ddh25/3nlzd5H/OGSPAJoL7bQzd6FW5D5BqAy0I5D8HpSI74SeE3AOsgP1QDvDm7sPSOQBB3O8Yx0G7hQhBwlJR7AAfi2AKyIcLnSskzy1v52q1tV4Abw8P9ObU7AfI+gFy34i3WVSAyVwlOPBlYXPzRSasjoO+URgCZAmB1Eov5Xyuq0X5v6UU7u5aAMjjYq62+KUAexNw45nLOWnr7MVdXq0cZHgkorntKo+JB5E7M3ZItJ19byLn0vF8HBQ4BRp7L9738Z3B1ohDS37570JOHAH2nNJP9sbZyNGfz5eWHjX+bAP8ExHyyc0rHSlGNNAbOPmCUSnqqnzKI1rjkurLXe6WegvYBtV2YFrLJvXGVU1svMpNfWHlUK0oAwgohws8pJOG0GCukXAorTgS4ZRcnSYylpZ6Gjgienll4Nc6w8Gun8CV+bU0Do52GbFjllYvctIdu9jB4m/V2SfT3RN2idofGRILJJAJZ25BqnFt2sUzCznqzJPoEy9R2cU2Iq0kEsrah4CN9t+hDWrdSlrecKYd2S631CU3fKe60y3//FRCoHANA04/Y6CAB16idkicQJ9NISCheSzOmJ2rjS53xzYLx7daxaFhDSN8uTMPUlj8ENP7SFHmxNocx89pZz6VGX9xDSONHHxGkycOj+lEbPX5rrO3GDjAbIcMUdFLtTkhKI2CKzO2kNQJuBDV2iH6wnWt8hgiC4LoKnyEUzjU9QwTYDIB1pdT7v3mG+A2gi1T1vZPSFwAAAABJRU5ErkJggg=="},ff29:function(t,e,n){"use strict";n("cc57"),n("e697"),n("9a33");var o=n("fd50"),a=n("4531"),i=n("760e"),r=n("a14a"),s=n.n(r),c=function(){var t={},e={position:a["a"].getPositionFilter,checkItem:a["a"].getCheckItemFilter,register:a["a"].getRegisterFilter};return t.getRoomList=function(t){return a["a"].getReinspectRooms(t)},t.getProblemListByBatchRoomId=function(t,e,n){return t.batchRoomId?a["a"].getProblemListByBatchRoomId(t,e,n).then((function(t){var e=[];return s.a.each(t,(function(t){t.desc=t.desc_id.split(";"),e=e.concat(t.desc)})),e=s.a.uniq(e),i["a"].getDescByIds(e).then((function(e){return s.a.each(t,(function(t){s.a.each(t.desc,(function(n,o){var a=s.a.find(e,{id:n});t.desc[o]=a?a.name:"无描述"})),t.desc=t.desc.join("；"),t.title=t.problem=t.position_name+"-"+t.item_name+"-"+t.desc+(t.remark?"；"+t.remark:"")})),t}))})):o["a"].reject("获取问题列表失败")},t.getProblemFilters=function(t,n){if(!t.batchRoomId)return o["a"].reject();var a=s.a.cloneDeep(e),i=[];return delete a[n],t.position||delete a.checkItem,s.a.each(a,(function(n,o){i.push(function(n){return e[o](t).then((function(t){return{type:n,options:t}}))}(o))})),o["a"].all(i).then((function(t){var e={};return s.a.each(t,(function(t){var n=0;s.a.each(t.options,(function(t){n+=t.count})),t.options.unshift({name:"全部",count:n,id:""}),e[t.type]=t.options})),e}))},t.hasMoreProblem=function(t){return a["a"].getProblemCount(t).then((function(t){return t.count>0}))},t.getAllProblemIds=function(t){return a["a"].getAllProblemIds(t).then((function(t){return t}))},t.checkHasUpload=function(t){return a["a"].hasUploadData(t).then((function(t){return t&&!!t["id"]}))},t};e["a"]=c()}}]);