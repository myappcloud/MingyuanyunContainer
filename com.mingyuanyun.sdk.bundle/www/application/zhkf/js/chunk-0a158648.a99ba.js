(window["webpackJsonp_module_entry_zhkf_"]=window["webpackJsonp_module_entry_zhkf_"]||[]).push([["chunk-0a158648"],{"0a1d":function(t,o,e){"use strict";e("6d57");var n=e("16ca"),i=e("fd50"),a=e("c6e3"),r=e("a324"),s=e("0523"),c=function(){var t=function(t,o){for(var e=0;e<t.length;e++){var n=t[e],i=!1,a=0,r=!0;if("已交付"!=n.delivery_status){for(var s=0;s<o.length;s++){var c=o[s];c.batch_room_id.toLowerCase()==n.id.toLowerCase()&&(i=!0,["待派单","待指派","待整改"].indexOf(c.status)>-1&&(n.room_status="待整改",r=!1),"已整改"===c.status&&(r=!1,a=1),"已通过"!==c.status&&(r=!1))}r||n.room_status?"待整改"===n.room_status&&(n.has_repaired=a):n.room_status="已整改","交付中"!=n.delivery_status||"暂不收楼"===n.delivery_situation||i&&!r?("待交付"!=n.delivery_status||i&&!r)&&("交付中"!=n.delivery_status||"暂不收楼"!=n.delivery_situation||i&&!r)||(n.room_status="待交付"):n.room_status="已交付"}else n.room_status="已交付"}return t},o=function(o){var e=[a["a"].getUnitFloors(o),a["a"].getUnitRooms(o),r["a"].getProblemListByBatchUnitId(o)];return i["a"].all(e).then((function(e){var n=e[0],i=e[1],a=e[2];return t(i,a),s["a"].buildRoomListData(o,n,i)}))};return{getRoomListByBatchUnit:o}},u=c(),l=function(){var t=function(t,o){for(var e=0;e<t.length;e++){for(var n=t[e],i=!1,a=0,r=!0,s=0;s<o.length;s++){var c=o[s];c.batch_room_id.toLowerCase()==n.id.toLowerCase()&&(i=!0,["待派单","待指派","待整改"].indexOf(c.status)>-1&&(n.room_status="待整改",r=!1),"已整改"===c.status&&(r=!1,a=1),"已通过"!==c.status&&(r=!1))}if(r||n.room_status?"待整改"===n.room_status&&(n.has_repaired=a):n.room_status="已整改",i?r&&("已接待"===n.opening_status?n.room_status="已接待":n.room_status="待接待"):"已接待"===n.opening_status?n.room_status="已接待":n.room_status="待接待",!n.room_status)throw new Error("room_status 赋值为空."+n.id)}return t},o=function(o){var e=[a["a"].getUnitFloors(o),a["a"].getUnitRooms(o),r["a"].getProblemListByBatchUnitId(o)];return i["a"].all(e).then((function(e){var n=e[0],i=e[1],a=e[2];return i=t(i,a),s["a"].buildRoomListData(o,n,i)}))};return{getRoomListByBatchUnit:o}},d=l(),m=function(){var t={simulate:[{name:"全部",key:"all",dot:"",less:0},{name:"待检查",key:"待检查",dot:"white",less:0},{name:"待整改",key:"待整改",dot:"red",less:0},{name:"已整改",key:"已整改",dot:"blue",less:0},{name:"已通过",key:"已通过",dot:"green",less:0}],delivery:[{name:"全部",key:"all",dot:"",less:0},{name:"待交付",key:"待交付",dot:"white",less:0},{name:"待整改",key:"待整改",dot:"red",less:0},{name:"已整改",key:"已整改",dot:"blue",less:0},{name:"已交付",key:"已交付",dot:"green",less:0}],online_delivery:[{name:"全部",key:"all",dot:"",less:0},{name:"待交付",key:"待交付",dot:"white",less:0},{name:"待整改",key:"待整改",dot:"red",less:0},{name:"已整改",key:"已整改",dot:"blue",less:0},{name:"已交付",key:"已交付",dot:"green",less:0}],opening:[{name:"全部",key:"all",dot:"",less:0},{name:"待接待",key:"待接待",dot:"white",less:0},{name:"待整改",key:"待整改",dot:"red",less:0},{name:"已整改",key:"已整改",dot:"blue",less:0},{name:"已接待",key:"已接待",dot:"green",less:0}]},o={simulate:n["a"],delivery:u,opening:d,online_delivery:u},e={tabs:[],items:{},lastView:{},status_sel:"全部",status_counter:0,display_rooms:[]};return{model:e,init:function(t,o){return this.model.batchType=t,this.model.unitId=o,this.model.tabs=this.getTabs(t),this.getRoomList(t,o)},updateRoomList:function(){var t=this.model,o=t.batchType,e=t.unitId;this.init(o,e)},getTabs:function(o){return t[o]},tabsInit:function(){var t=this.model.items.unit_list[0].status_counter;this.model.tabs.forEach((function(o){o.less=t[o.key]||0}))},getRoomList:function(t,e){var n=this;return"special_checkitem"===t&&(t="simulate"),o[t]&&o[t].getRoomListByBatchUnit?o[t].getRoomListByBatchUnit(e).then((function(t){n.model.items=t,n.iniRoomData(),n.tabsInit()})):Promise.resolve()},iniRoomData:function(){this.model.items["unit_sel"]=this.model.items.unit_list[0].unit,this.roomStatusClass(),this.model.status_sel=this.model.lastView&&this.model.lastView.status||"全部",this.filterRoomList(),this.model.status_counter=this.model.items.unit_list[0].status_counter},filterRoomList:function(){for(var t=this.model.items.unit_list[0].floor_list,o=[],e=0;e<t.length;e++){for(var n=t[e].room_list,i=[],a=!1,r=0;r<n.length;r++)"全部"!=this.model.status_sel&&n[r].room_status!=this.model.status_sel||(i.push(n[r]),a=!0);a&&o.push({floor:t[e].floor,room_list:i})}this.model.display_rooms=o,console.log(this.model.display_rooms,"------------楼栋数据------------")},roomStatusClass:function(){for(var t=e.items.unit_list,o=0;o<t.length;o++)for(var n=t[o].floor_list,i=0;i<n.length;i++){var a=n[i].room_list;n[i]["floor_show"]=!0;for(var r=0;r<a.length;r++){switch(a[r]["room_show"]=!0,a[r].room_status){case"待检查":a[r]["room_status_class"]="white";break;case"待整改":a[r]["room_status_class"]="red",a[r].has_repaired&&(a[r]["room_status_class"]+=" problem-repaired");break;case"已整改":a[r]["room_status_class"]="blue";break;case"已通过":case"已接待":case"已交付":a[r]["room_status_class"]="green";break;default:a[r]["room_status_class"]="white";break}a[r]["room_info"]=JSON.stringify({building_name:a[r].building_name,unit:a[r].unit,floor:a[r].floor,room_no:a[r].room_no})}}}}};o["a"]=m()},"16ca":function(t,o,e){"use strict";var n=e("fd50"),i=e("c6e3"),a=e("a324"),r=e("0523"),s=e("07a4"),c=e("af4c"),u=function(t,o){for(var e=0;e<o.length;e++){var n=o[e];if(n.batch_room_id.toLowerCase()==t.toLowerCase())return!1}return!0},l=function(t,o){for(var e=0;e<t.length;e++){var n=t[e];if(0!=n.has_problem||0!=n.is_checked)if(u(n.id,o))t[e].room_status="已通过";else{for(var i=!0,a=0,r=0;r<o.length;r++){var s=o[r];if(n.id.toLowerCase()==s.batch_room_id.toLowerCase()){var c=["待派单","待指派","待整改"];c.indexOf(s.status)>-1&&(n.room_status="待整改",i=!1),"已整改"===s.status&&(i=!1,a=1)}}i?n.room_status="已通过":n.room_status?"待整改"===n.room_status&&(n.has_repaired=a):n.room_status="已整改"}else t[e].room_status="待检查"}return t},d=function(t){var o=[i["a"].getUnitFloors(t),i["a"].getUnitRooms(t),a["a"].getProblemListByBatchUnitId(t)];return n["a"].all(o).then((function(o){var e=o[0],n=o[1],i=o[2];return l(n,i),r["a"].buildRoomListData(t,e,n)}))};o["a"]={getRoomListByBatchUnit:d,updateCheckStatus:function(t){return i["a"].getRoomCheckStatus(t).then((function(t){t=t||{};var o=!t["is_checked"]||!t["check_date"]||!t["check_engineer"];return i["a"].updateCheckStatus(t,o)})).then((function(){"todo"===s["a"].state.app.global.currentMenuType&&c["a"].updateRoomList(!0)}))}}},"269c":function(t,o,e){"use strict";var n={name:"AppButton",props:{disabled:Boolean,secondary:Boolean},computed:{buttonStyle:function(){return[this.disabled&&"disabled",this.secondary?"secondary":"primary"]}}},i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("a",t._g({staticClass:"app-button",class:t.buttonStyle,attrs:{href:"javascript:void(0);"}},t.$listeners),[t._t("default")],2)},a=[],r=e("d082");function s(t){e("5c53")}var c=!1,u=s,l="data-v-44e13a4d",d=null,m=Object(r["a"])(n,i,a,c,u,l,d);o["a"]=m.exports},"3d3a":function(t,o,e){"use strict";e("e697");var n=e("fd50"),i=e("0cd9"),a=e("8fee"),r=e("3fa2"),s=e("a14a"),c=e.n(s);function u(){var t,o,e={},s=r["a"].room;return t={model:e,init:function(){return e.currentPosition={},e.currentItem={},o=["全部"],o.push(1==s.isVirtual?"公区":"房间"),o="('"+o.join("','")+"')",i["a"].getRoomFitmentStandard(s.batchRoomId).then((function(t){return e.fitmentStandard=t.fitment_standard,i["a"].getPositionList(s.projectId,s.batchRoomId)})).then((function(t){return e.positionList=t,i["a"].getFirstPositionItemNotDone(s.projectId,s.batchRoomId,e.fitmentStandard,o)})).then((function(o){return o&&o.position_id?e.defaultPositionId=o.position_id:e.defaultPositionId=e.positionList&&e.positionList[0]&&e.positionList[0].position_id,t.getPositionItem(e.defaultPositionId,!0)}))},getPositionItem:function(t,a){if(t){var r=c.a.find(e.positionList,{position_id:t});return r&&r.checkItem?n["a"].when(r.checkItem):r?i["a"].getPositionEndItem(s.projectId,s.batchRoomId,t,e.fitmentStandard,o).then((function(t){return r.checkItem=t,a&&(r.open=!0),r.checkItem})):n["a"].when([])}},setPositionItemDone:function(t,o){if(t&&o){var n=c.a.find(e.positionList,{position_id:t}),a=c.a.find(n.checkItem,{item_id:o});a.done=!0}else t=e.currentPosition.position_id,o=e.currentItem.item_id,!e.currentItem.done&&(e.currentItem.done=!0);return i["a"].addDoneItemRecord(s.batchRoomId,t,o)},getItemDesc:function(t){return a["a"].getRoomCheckListDescList(t,e.fitmentStandard)},setCurrent:function(t,o){e.currentPosition.position_id!=t&&(e.currentPosition=c.a.find(e.positionList,{position_id:t})),e.currentItem.item_id!=o&&(e.currentItem=c.a.find(e.currentPosition.checkItem,{item_id:o}))},getCurrentItemPosition:function(){if(!e.currentPosition.position_id||!e.currentItem.item_id)return!1;var t=c.a.indexOf(e.currentPosition.checkItem,e.currentItem),o=c.a.indexOf(e.positionList,e.currentPosition),n=e.currentPosition.checkItem.length-1,i=e.positionList.length-1,a=!0,r=!0;return t==n&&o==i?r=!1:0==t&&0==o?a=!1:(t<0||o<0)&&(a=!1,r=!1),{hasPrev:a,hasNext:r}},getPreviousItem:function(){var o,i=c.a.indexOf(e.currentPosition.checkItem,e.currentItem);if(0!==i)return o=e.currentPosition.checkItem[i-1],n["a"].when(o);var a=c.a.indexOf(e.positionList,e.currentPosition);if(0!==a){var r=e.positionList[a-1];return e.currentPosition=r,r.checkItem?(o=r.checkItem[r.checkItem.length-1],n["a"].when(o)):t.getPositionItem(r.position_id).then((function(t){return n["a"].when(t&&t[t.length-1])}))}return n["a"].reject()},getNextItem:function(){var o,i=c.a.indexOf(e.currentPosition.checkItem,e.currentItem);if(i!==e.currentPosition.checkItem.length-1)return o=e.currentPosition.checkItem[i+1],n["a"].when(o);var a=c.a.indexOf(e.positionList,e.currentPosition);if(a!==e.positionList.length-1){var r=e.positionList[a+1];return e.currentPosition=r,r.checkItem?(o=r.checkItem[0],n["a"].when(o)):t.getPositionItem(r.position_id).then((function(t){return n["a"].when(t&&t[0])}))}return n["a"].reject()}},t}o["a"]=u()},"43ee":function(t,o,e){"use strict";e("c904");var n=e("fd50"),i=e("a14a"),a=e.n(i),r=e("d49d"),s=function(){var t={unitId:"",list:[],currRoom:{}},o={getRoomList:function(){return r["a"].getRoomList(t.unitId).then((function(o){var e=[];if(console.log(o),o){var n=a.a.groupBy(o,"floor");console.log(n),a.a.each(n,(function(t,o){var n={};n.floor=o,n.roomList=[],n.no=o,console.log(t),a.a.each(t,(function(t){n.roomList.push({id:t.id,room_no:t.room_no,count:t.count})})),n.roomList=n.roomList.sort((function(t,o){return o.room_no-t.room_no})),e.push(n)})),e=e.sort((function(t,o){return o.no-t.no})),t.list=e}}))}};return{model:t,initRoomList:function(e,i){return e||t.unitId?(t.list=[],e&&(t.unitId=e),i&&(t.currRoom={}),o.getRoomList()):n["a"].reject("无效的单元")},refresh:function(){return o.getRoomList()},checkHasUpload:function(t){return r["a"].checkHasUpload(t)}}};o["a"]=s()},"5c53":function(t,o,e){var n=e("d048");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("85cb").default;i("67289221",n,!0,{})},"8fee":function(t,o,e){"use strict";var n=e("760e"),i=e("a14a"),a=e.n(i);o["a"]={getCheckItemDescList:function(t,o,e){return n["a"].getCheckItemDescList(t,o,e).then((function(t){return t}))},getRoomCheckListDescList:function(t,o){return n["a"].getRoomCheckListDescList(t,o).then((function(t){if(!a.a.isEmpty(t))for(var o=0;o<t.length&&o<3;o++)t[o].isImportant=!0;return t}))},searchDesc:function(t,o){return n["a"].searchDesc(t,o)}}},"99ee":function(t,o,e){"use strict";e("c904");var n=e("fd50"),i=e("a14a"),a=e.n(i),r=e("ff29"),s=function(){var t={unitId:"",list:[],currRoom:{}},o={getRoomList:function(){return r["a"].getRoomList(t.unitId).then((function(o){var e=[];if(console.log(o),o){var n=a.a.groupBy(o,"floor");console.log(n),a.a.each(n,(function(t,o){var n={};n.floor=o,n.roomList=[],n.no=o,console.log(t),a.a.each(t,(function(t){n.roomList.push({id:t.id,room_no:t.room_no,count:t.count})})),n.roomList=n.roomList.sort((function(t,o){return o.room_no-t.room_no})),e.push(n)})),e=e.sort((function(t,o){return o.no-t.no})),t.list=e}}))}};return{model:t,initRoomList:function(e,i){return e||t.unitId?(t.list=[],e&&(t.unitId=e),i&&(t.currRoom={}),o.getRoomList()):n["a"].reject("无效的单元")},refresh:function(){return o.getRoomList()},checkHasUpload:function(t){return r["a"].checkHasUpload(t)}}};o["a"]=s()},af4c:function(t,o,e){"use strict";e("e697");var n=e("fd50"),i=e("a18c"),a=e("99ee"),r=e("43ee"),s=e("a14a"),c=e.n(s),u=e("c6e3"),l=function(){return{getNotCheckFloorAndRoom:function(t,o){return n["a"].all([u["a"].getTodoUnitFloors(t),u["a"].getTodoRoomByUnitId(t,o)]).then((function(t){var o,e=t[0],n=t[1],i="0";(c.a.isEmpty(e)||1===e.length&&""===e[0].floor)&&(o=!0,e=[{floor:i}]);for(var a=0;a<e.length;a++){e[a].roomList=[];for(var r=0;r<n.length;r++)(o||n[r].floor===e[a].floor)&&(n[r].floor=o?i:n[r].floor,e[a].roomList.push(n[r]))}return c.a.filter(e,(function(t){return t.roomList&&t.roomList.length>0}))}))},checkHasUpload:function(t,o){return u["a"].checkHasUpload(t,o).then((function(t){return t&&!!t["id"]}))},getRoomInfo:function(t,o){return u["a"].getTodoBatchRoomById(t,o)}}},d=l(),m=function(){var t={floorList:[]},o={},e={special_checkitem:"检查",simulate:"检查",opening:"接待",online_opening:"拍摄",feedback_remain_reply:"回复",delivery:"交付",online_delivery:"交付",problem_remain_reinspect:"复验"};return o.init=function(e,i,a){return a=a||!1,a||e!==t.batchUnitId||i!==t.moduleType?(t.floorList=[],t.batchUnitId=e,t.moduleType=i,t.currRoom=null,t.currFloor=null,t.tip="",o.getRoomList().then((function(o){console.log(o,"floorlist-----"),t.floorList=o}))):n["a"].resolve()},o.getRoomList=function(){return"problem_remain_reinspect"===t.moduleType?o.getReinspectRoomList():"feedback_remain_reply"===t.moduleType?o.getReplyRoomList():o.getCheckRoomList()},o.getCheckRoomList=function(){return d.getNotCheckFloorAndRoom(t.batchUnitId,t.moduleType).then((function(o){return c.a.isEmpty(o)&&d.checkHasUpload(t.batchUnitId,t.moduleType).then((function(o){o&&(t.tip="您已经"+e[t.moduleType]+"完毕，请立即上传~")})),o}))},o.getReinspectRoomList=function(){return a["a"].initRoomList(t.batchUnitId).then((function(){return c.a.isEmpty(a["a"].model.list)&&a["a"].checkHasUpload(t.batchUnitId).then((function(o){o&&(t.tip="您已经"+e[t.moduleType]+"完毕，请立即上传~")})),a["a"].model.list}))},o.getReplyRoomList=function(){return r["a"].initRoomList(t.batchUnitId).then((function(){return c.a.isEmpty(r["a"].model.list)&&r["a"].checkHasUpload(t.batchUnitId).then((function(o){o&&(t.tip="您已经"+e[t.moduleType]+"完毕，请立即上传~")})),r["a"].model.list}))},o.getRoomInfo=function(t,o){return d.getRoomInfo(t,o)},o.removeRoom=function(){var e=c.a.find(t.currFloor.roomList,{id:t.currRoom.id}),n=c.a.indexOf(t.currFloor.roomList,e);n>-1&&t.currFloor.roomList.splice(n,1),c.a.isEmpty(t.currFloor.roomList)&&(n=c.a.indexOf(t.floorList,t.currFloor),n>-1&&t.floorList.splice(n,1)),c.a.isEmpty(t.floorList)&&(o.init(t.batchUnitId,t.moduleType,!0),i["a"].go(-2))},{model:t,init:o.init,updateRoomList:function(i){return c.a.isEmpty(t)||!t.moduleType?n["a"].resolve():(i=i||!1,i?o.removeRoom():"problem_remain_reinspect"===t.moduleType?a["a"].refresh().then((function(){c.a.isEmpty(a["a"].model.list)&&a["a"].checkHasUpload(t.batchUnitId).then((function(o){o&&(t.tip="您已经"+e[t.moduleType]+"完毕，请立即上传~")})),t.floorList=a["a"].model.list})):"feedback_remain_reply"!==t.moduleType?o.getRoomInfo(t.currRoom.id,t.moduleType).then((function(e){if(c.a.isEmpty(e)||"已检查"===e.check_status)return o.removeRoom();for(var n=t.currFloor.roomList.length,i=0;i<n;i++)if(t.currFloor.roomList[i].id===e.id){t.currFloor.roomList[i]=e;break}})):(c.a.isEmpty(r["a"].model.list)&&r["a"].checkHasUpload(t.batchUnitId).then((function(o){o&&(t.tip="您已经"+e[t.moduleType]+"完毕，请立即上传~")})),void(t.floorList=r["a"].model.list)))}}};o["a"]=m()},cb64:function(t,o,e){"use strict";e("6d57");var n=e("fd50"),i=e("1834"),a=e("0938"),r=e("9430"),s=e("c6e3"),c=e("a740");o["a"]={saveShootRoomInfo:function(t){var o;return s["a"].getRoomParams(t).then((function(e){if(!e||!e.batch_id||!e.batch_unit_id)return console.error("saveReviewInfo：未找到对应房间信息。batchRoomId:"+t),n["a"].reject("未找到对应房间信息");var s=!1,u={opening_status:"待审核",opening_receive_date:a["a"].getNowDate(),check_engineer:Object(c["j"])().user_id,check_date:a["a"].getNowDate()};return i["a"].transaction((function(n){n.update("batch_room",u,{id:t},(function(i){if(!i.rowsAffected)throw console.error("saveShootRoomInfo：未更新对应房间。batchRoomId:"+t),new Error("未更新对应房间");o={type:"房间",operation:"shooting_finished",relation_id:t,batch_unit_id:e.batch_unit_id,batch_room_id:t,batch_id:e.batch_id},r["a"].insert(n,o),s=!0}))})).then((function(){s&&window.uploadStatus("waitUpload")}))}))},saveShootRoom:function(t,o){var e=t.batchRoomId;return s["a"].getRoomParams(e).then((function(s){if(!s||!s.batch_id||!s.batch_unit_id)return console.error("saveReviewInfo：未找到对应房间信息。batchRoomId:"+e),n["a"].reject("未找到对应房间信息");var u=!1;return i["a"].transaction((function(n){var l,d,m,h=["id","batch_room_id","batch_unit_id","position_id","item_id","shooting_user_id","material_type","shooting_date","status","material_localpath","material_url","material_thumbnail_localpath","status","sort"];o.deletes.length&&!o.new.length?o.deletes.forEach((function(o){n.delete("batch_room_material",{batch_room_id:t.batchRoomId,id:o.id}),m={type:"素材",operation:"delete_material",relation_id:o.id,batch_unit_id:s.batch_unit_id,batch_room_id:t.batchRoomId,batch_id:s.batch_id},r["a"].insert(n,m),u=!0})):!o.deletes.length&&o.new.length?(l=1,n.delete("batch_room_material",{batch_room_id:e,position_id:t.position_id,item_id:t.item_id}),o.new.forEach((function(o){if(o.localPath||o.material_localpath){var f={};f.id=o.id||a["a"].uuid(),f.batch_room_id=t.batchRoomId,f.batch_unit_id=s.batch_unit_id,f.shooting_user_id=Object(c["j"])().user_id,f.material_url=o.material_url||null,f.material_localpath=o.material_localpath||o.localPath||null,f.material_thumbnail_localpath=o.material_thumbnail_localpath||null,f.material_type="image",f.position_id=t.position_id,f.item_id=t.item_id,f.shooting_date=a["a"].getNowDate(),f.status="待审核",f.sort=l,d=i["a"].getColumnsValues(f,h,["material_url","material_thumbnail_localpath","status"]),n.insert("batch_room_material",h,d),l++,f.material_url||(m={type:"素材",operation:"add_material",relation_id:f.id,batch_unit_id:s.batch_unit_id,batch_room_id:e,batch_id:s.batch_id},r["a"].insert(n,m),u=!0)}}))):(o.deletes.forEach((function(o){var e={type:"素材",operation:"delete_material",relation_id:o.id,batch_unit_id:s.batch_unit_id,batch_room_id:t.batchRoomId,batch_id:s.batch_id};r["a"].insert(n,e),u=!0})),l=t.maxSort+1,n.delete("batch_room_material",{batch_room_id:e,position_id:t.position_id,item_id:t.item_id}),o.new.forEach((function(o){if(o.material_localpath||o.localPath){var m={};if(m.id=o.id||a["a"].uuid(),m.batch_room_id=t.batchRoomId,m.batch_unit_id=s.batch_unit_id,m.shooting_user_id=Object(c["j"])().user_id,m.material_localpath=o.material_localpath||o.localPath||null,m.material_url=o.material_url||null,m.material_thumbnail_localpath=o.material_thumbnail_localpath||null,m.material_type="image",m.position_id=t.position_id,m.item_id=t.item_id,m.shooting_date=a["a"].getNowDate(),m.status=o.status||"待审核",m.sort=l,d=i["a"].getColumnsValues(m,h,["material_url","material_thumbnail_localpath","status"]),n.insert("batch_room_material",h,d),l++,!m.material_url){var f={type:"素材",operation:"add_material",relation_id:m.id,batch_unit_id:s.batch_unit_id,batch_room_id:e,batch_id:s.batch_id};r["a"].insert(n,f),u=!0}}})))})).then((function(){u&&window.uploadStatus("waitUpload")}))}))}}},d048:function(t,o,e){o=t.exports=e("690e")(!1),o.push([t.i,"\n.zhkf .app-button[data-v-44e13a4d] {\n  display: block;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-width: 120px;\n  padding: 0 40px;\n  border-radius: 23px;\n  font-size: 16px;\n  text-align: center;\n  text-decoration: none;\n}\n.zhkf .app-button.primary[data-v-44e13a4d] {\n    padding: 12px 0;\n    color: white;\n    background: -webkit-gradient(linear, left top, right top, from(#02b8ff), to(#0085ff));\n    background: linear-gradient(90deg, #02b8ff 0%, #0085ff 100%);\n    -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 153, 255, 0.27);\n            box-shadow: 0px 2px 4px 0px rgba(0, 153, 255, 0.27);\n    -webkit-transition: opacity 0.3s ease-in-out;\n    transition: opacity 0.3s ease-in-out;\n}\n.zhkf .app-button.primary.disabled[data-v-44e13a4d] {\n      opacity: 0.5;\n}\n",""])},d49d:function(t,o,e){"use strict";var n=e("fd50"),i=e("4325"),a=e("a14a"),r=e.n(a),s=function(){var t={},o={position:i["a"].getPositionFilter,checkItem:i["a"].getCheckItemFilter};return t.getRoomList=function(t){return i["a"].getReplyRooms(t)},t.getFeedbackListByBatchRoomId=function(t,o,e){return t.batchRoomId?i["a"].getFeedbackListByBatchRoomId(t,o,e).then((function(t){return t})):n["a"].reject("获取问题列表失败")},t.getFeedbackFilters=function(t,e){if(!t.batchRoomId)return n["a"].reject();var i=r.a.cloneDeep(o),a=[];return delete i[e],t.position||delete i.checkItem,r.a.each(i,(function(e,n){a.push(function(e){return o[n](t).then((function(t){return{type:e,options:t}}))}(n))})),n["a"].all(a).then((function(t){var o={};return r.a.each(t,(function(t){var e=0;r.a.each(t.options,(function(t){e+=t.count})),t.options.unshift({name:"全部",count:e,id:""}),o[t.type]=t.options})),o}))},t.hasMoreFeedback=function(t){return i["a"].getFeedbackCount(t).then((function(t){return t.count>0}))},t.getAllFeedbackIds=function(t){return i["a"].getAllFeedbackIds(t).then((function(t){return t}))},t.checkHasUpload=function(t){return i["a"].hasUploadData(t).then((function(t){return t&&!!t["id"]}))},t};o["a"]=s()},edc1:function(t,o,e){"use strict";var n=e("57d1"),i=e("cb64");o["a"]={getRoomWaitShootingInfo:function(t){return n["a"].getRoomWaitShootingInfo(t)},saveShootRoomInfo:function(t){return i["a"].saveShootRoomInfo(t)},getFirstProjectPositionItemNotDone:function(t,o,e){return n["a"].getFirstProjectPositionItemNotDone(t,o,e)}}},f588:function(t,o,e){"use strict";e("6d57");var n=e("edc1"),i=e("3d3a"),a=e("3fa2");function r(){var t={positionList:[]},o={};function e(t){return o.batchRoomId=t,n["a"].getRoomWaitShootingInfo(t).then((function(t){o.title=(-1===t.building_name.indexOf("栋")&&-1===t.building_name.indexOf("幢")?t.building_name+"栋":t.building_name)+(t.unit?"-"+t.unit+(t.unit.indexOf("单元")>-1?"":"单元"):"")+(-1===t.floor.indexOf("层")&&-1===t.floor.indexOf("楼")&&-1===t.floor.indexOf("公共区域")?"-"+t.floor+"楼":"-"+t.floor)+(-1!==t.room_no.indexOf("公共区域")?"-"+t.floor+"层 公共区域":"-"+t.room_no)}))}return{model:t,room:o,pIdx:0,idx:0,list:[],params:{},init:function(o){var n=this;return this.params=o,a["a"].init(o).then((function(){return i["a"].init().then((function(){return t.positionList=i["a"].model.positionList,e(o.batchRoomId).then((function(){return n.initList()}))}))}))},initList:function(){var o=t.positionList,e=Promise.resolve(),n=!1;return o.forEach((function(o,a){e=i["a"].getPositionItem(o.position_id).then((function(e){o.checkItem=e,o.material_count=e.reduce((function(t,o){return o.material_count+t}),0),o.has_dot=e.some((function(t){return 1===t.has_dot})),o.material_count||n||(n=!0,t.curr_open_index=a)}))})),e.then((function(){return t.positionList=o,console.log(o,"====拍摄清单===="),o}))},cachePositionInList:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];this.pIdx=o,this.idx=e,t.positionList=n},getNextCheckItem:function(){var o=t.positionList[this.pIdx],e=o.checkItem.length;return this.idx+2>e?(this.pIdx=this.pIdx+1,this.idx=0):this.idx=this.idx+1,{currPosition:t.positionList[this.pIdx],currCheckItem:t.positionList[this.pIdx].checkItem[this.idx]}},getIsBottom:function(){var o=t.positionList[this.pIdx],e=t.positionList.length,n=o.checkItem.length;return this.pIdx+1===e&&this.idx+1===n}}}o["a"]=r()},ff29:function(t,o,e){"use strict";e("cc57"),e("e697"),e("9a33");var n=e("fd50"),i=e("4531"),a=e("760e"),r=e("a14a"),s=e.n(r),c=function(){var t={},o={position:i["a"].getPositionFilter,checkItem:i["a"].getCheckItemFilter,register:i["a"].getRegisterFilter};return t.getRoomList=function(t){return i["a"].getReinspectRooms(t)},t.getProblemListByBatchRoomId=function(t,o,e){return t.batchRoomId?i["a"].getProblemListByBatchRoomId(t,o,e).then((function(t){var o=[];return s.a.each(t,(function(t){t.desc=t.desc_id.split(";"),o=o.concat(t.desc)})),o=s.a.uniq(o),a["a"].getDescByIds(o).then((function(o){return s.a.each(t,(function(t){s.a.each(t.desc,(function(e,n){var i=s.a.find(o,{id:e});t.desc[n]=i?i.name:"无描述"})),t.desc=t.desc.join("；"),t.title=t.problem=t.position_name+"-"+t.item_name+"-"+t.desc+(t.remark?"；"+t.remark:"")})),t}))})):n["a"].reject("获取问题列表失败")},t.getProblemFilters=function(t,e){if(!t.batchRoomId)return n["a"].reject();var i=s.a.cloneDeep(o),a=[];return delete i[e],t.position||delete i.checkItem,s.a.each(i,(function(e,n){a.push(function(e){return o[n](t).then((function(t){return{type:e,options:t}}))}(n))})),n["a"].all(a).then((function(t){var o={};return s.a.each(t,(function(t){var e=0;s.a.each(t.options,(function(t){e+=t.count})),t.options.unshift({name:"全部",count:e,id:""}),o[t.type]=t.options})),o}))},t.hasMoreProblem=function(t){return i["a"].getProblemCount(t).then((function(t){return t.count>0}))},t.getAllProblemIds=function(t){return i["a"].getAllProblemIds(t).then((function(t){return t}))},t.checkHasUpload=function(t){return i["a"].hasUploadData(t).then((function(t){return t&&!!t["id"]}))},t};o["a"]=c()}}]);