(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-742336f6"],{"278a":function(t,e,a){"use strict";(function(t){a("5ab2"),a("e10e");var n=a("4c09"),r=(a("cc57"),a("6d57"),a("ed63"),a("8cf2"),a("28f8")),i=(a("6a61"),a("2e91")),o=(a("163d"),a("7f8d")),s=a("ed08"),c=a("3bd5"),d=a("9715"),p=a("e2a7");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){Object(r.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e.a={name:"BatchOperation",components:{SelectInfoList:function(){return a.e("chunk-409f7168").then(a.bind(null,"14ccb"))}},props:{deliverType:{type:Number,default:function(){return null}},placeData:{type:Array,default:function(){return[]}},params:{type:Object,default:function(){}},hasUnit:{type:Boolean,default:!1}},data:function(){return{btnShow:!1,selectShow:!1,OPERATION_BTN:o.g,batchPlaceData:this.placeData,operationType:null}},methods:{onOpenBatchOperationBtn:function(){var t=this;function e(){return(e=Object(i.a)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.getSpotCheckAuthority();case 2:a=e.sent,t.OPERATION_BTN=a?o.g:t.OPERATION_BTN.filter((function(t){return t.type!==o.i.SAMPLE}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),this.btnShow=!0},onClickOperationBtn:function(e){console.log("item",e);var a=this,n=JSON.parse(JSON.stringify(this.placeData));this.batchPlaceData=function(n){if(a.hasUnit)return n.map((function(t){return l(l({},t),{},{other_data:r(t.other_data)})}));return r(n);function r(t){return t.map((function(t){return s.a.isArrayAndHasLen(t.rooms)?(t.rooms=t.rooms.map((function(t){return i(t,e)})),t):i(t,e)}))}function i(e,a){var n=e.status,r=function(t,e){var a=s.a.isNonData(e.code)&&s.a.isNonData(t),n=t===e.code;return!(a||n)}(e.status,a),i=t.includes(n,o.d),d=function(t,e){if(e===o.i.ACCEPTANCE)return t.operator!==c.a.getUser().user_id;return!1}(e,a.type);return function(t,e,a,n,r){return l(l({},t),{},e||a|n?{isNotMatchCurrentOpt:!0,status:"不可选",alertText:r}:{status:""})}(e,r,i,d,function(t,e,a,n){var r=t.alertText;a?r="该部位有暂存数据":e?r=t.alertText:n&&(r="当前节点验收人非当前用户");return r}(a,r,i,d))}}(n),this.operationType=e.type,this.btnShow=!1,this.selectShow=!0},onClickTags:function(t){var e=this,a=t.status;if(10===n(this.batchPlaceData)&&"已选择"!==a)return p.a.alert("最多可选择10个部位");function n(t){var a=0;return e.hasUnit?t.forEach((function(t){t.other_data.forEach((function(t){s.a.isArrayAndHasLen(t.rooms)?t.rooms.forEach((function(t){return"已选择"===t.status&&a++})):"已选择"===t.status&&a++}))})):t.forEach((function(t){s.a.isArrayAndHasLen(t.rooms)?t.rooms.forEach((function(t){return"已选择"===t.status&&a++})):"已选择"===t.status&&a++})),a}t.status=function(t){var e=t;"已选择"===t?e="":s.a.isNonData(t)&&(e="已选择");return e}(a),this.batchPlaceData=function(t,a){var r=n(t);switch(r){case 0:return function(t,a){return e.hasUnit?t.map((function(t){return l(l({},t),{},{other_data:r(t.other_data)})})):r(t);function n(t){return t.isNotMatchCurrentOpt?t:l(l({},t),{},{status:""})}function r(t){return t.map((function(t){return s.a.isArrayAndHasLen(t.rooms)?(t.rooms=t.rooms.map((function(t){return n(t)})),t):n(t)}))}}(t);case 1:return function(t,a){return e.hasUnit?t.map((function(t){return l(l({},t),{},{other_data:n(t.other_data,a)})})):n(t,a);function n(t,e){return t.map((function(t){return s.a.isArrayAndHasLen(t.rooms)?(t.rooms=t.rooms.map((function(t){return t.sign!==e.sign&&(t.status="不可选"),t})),t):(t.sign!==e.sign&&(t.status="不可选"),t)}))}}(t,a);default:return t}}(this.batchPlaceData,t)},onClickConfirm:function(){var e,a,r,i,o,c,d,p,u,l,m,_,f,h,b,g,y,v,w,O,x=this,C=function(t){if(x.hasUnit){var e=[];return x.batchPlaceData.forEach((function(t){e=[].concat(Object(n.a)(e),Object(n.a)(a(t.other_data)))})),e}return a(x.batchPlaceData);function a(t){var e=[];return t.forEach((function(t){s.a.isArrayAndHasLen(t.rooms)?t.rooms.forEach((function(t){"已选择"===t.status&&e.push(t)})):"已选择"===t.status&&e.push(t)})),e}}();t.isEmpty(C)||(e=C[0],a=x.deliverType,r=x.params,i=r.itemId,o=r.bidsectionId,c=r.bidsectionName,d=e.accept_id,p=e.building_id,u=e.building_name,l=e.unit,m=e.floor,_=e.room_id,f=e.room_no,h=e.uuId,b=6===a?e.id:"",g=6===a?e.name:"",y=x.operationType,v=x.$store.state.global.currentProject,w=v.id,O=v.name,x.$router.push({path:"/process-accept-v3-edit",query:{proj_id:w,proj_name:O,bidsection_id:o,bidsection_name:c,building_id:p,building_name:u,inspection_lot_id:b,inspection_lot_name:g,item_id:i,unit:l,floor:m,room_id:_,room_no:f,process_mode:a,accept_id:d,uuId:h,batchData:C,operationType:y}}))},onClearStatus:function(){}}}}).call(this,a("391c"))},"3fd9":function(t,e,a){var n=a("69e5");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("85cb").default)("3de10025",n,!0,{sourceMap:!1,shadowMode:!1})},"69e5":function(t,e,a){(t.exports=a("690e")(!1)).push([t.i,".zjapp .batch-operation-btn ul>li[data-v-615c0963]{line-height:46px;text-align:center;border-bottom:1px solid #ececec}.zjapp .batch-operation-btn .line[data-v-615c0963]{height:10px;background:#f4f4f4}.zjapp .batch-operation-btn .cancel[data-v-615c0963]{line-height:46px;text-align:center}.zjapp .batch-operation-select[data-v-615c0963]{height:90%}.zjapp .batch-operation-wrapper[data-v-615c0963]{width:100%;height:100%;position:relative}.zjapp .select-header[data-v-615c0963]{display:flex;justify-content:space-between;align-items:center;height:46px;padding:12px 15px;width:100%}.zjapp .select-header .cancel[data-v-615c0963]{font-size:14px;font-weight:400;color:#999;line-height:20px}.zjapp .select-header .title[data-v-615c0963]{font-size:16px;font-weight:400;color:#333;line-height:22px}.zjapp .select-header .confirm[data-v-615c0963]{font-size:14px;font-weight:400;color:#4275e8;line-height:20px}.zjapp .select-content[data-v-615c0963]{overflow:auto;width:100%;height:calc(100% - 46px)}",""])},9715:function(t,e,a){"use strict";(function(t){a("163d"),a("9a33");var n=a("fd50"),r=a("3bd5"),i=a("7b81"),o=a("d185"),s={getAllBuildingCheckItems:function(e){return o.a.getAllBuildingCheckItems(e).then((function(e){var a,r={};return t.each(e,(function(t){r[t.pp_item_id]?delete r[t.pp_item_id].note:r[t.pp_item_id]={id:t.pp_item_id,name:t.pp_item_name,subitem:[]},r[t.pc_item_id]?(r[t.pc_item_id].parent_id=t.pp_item_id,r[t.pc_item_id].full_name=t.pc_full_name,r[t.pc_item_id].process_mode=t.process_mode,r[t.pc_item_id].note=["","分户","不分单元整层","整栋","","分单元整层"][t.process_mode]):r[t.pc_item_id]={id:t.pc_item_id,name:t.pc_item_name,parent_id:t.pp_item_id,full_name:t.pc_full_name,process_mode:t.process_mode,note:["","分户","不分单元整层","整栋","","分单元整层"][t.process_mode],subitem:[]},r[t.pp_item_id].subitem.push(r[t.pc_item_id])})),a=t.filter(r,(function(t){return!t.parent_id})),n.a.resolve(a)}))},getAllProblemByBuildingItem:function(t,e){return o.a.getAllProblemByBuildingItem(t,e)},getCheckitemRealProcessMode:function(t,e){return o.a.getOneDetailByBuildingAndItem(t,e).then((function(t){if(t)return t.process_mode}))},getSectionContractor:function(t){return o.a.getSectionContractor(t)},getSelfDefinitionPlaceProcessData:function(t,e){return o.a.getSelfDefinitionPlaceProcessData(t,e)},getProcessAcceptv2DataById:function(t){return o.a.getProcessAcceptv2DataById(t)},getCustomBuildById:function(t){return o.a.getCustomBuildById(t).then((function(t){var e=t[0].parent_id||t[0].id,a=t[0];return o.a.getBidsectionByCustom(e).then((function(t){return a.bidsection_name=(t[0]||{}).bidsection_name,a.bidsection_id=(t[0]||{}).bidsection_id,a}))}))},getSpotCheckAuthority:function(){return i.a.hasRoles(r.a.getUser().user_id,296).then((function(t){return Boolean(t)}))},setDetailStandard:function(t){var e;"±"===t.standard_symbol?(t.standard_min=-t.standard,t.standard_max=t.standard,t.standard_text=t.standard_symbol+t.standard):"+"===t.standard_symbol?(t.standard_min=0,t.standard_max=t.standard,t.standard_text=t.standard_symbol+t.standard):"-"===t.standard_symbol?(t.standard_min=-t.standard,t.standard_max=0,t.standard_text=t.standard_symbol+t.standard):"≥"===t.standard_symbol||">"===t.standard_symbol?(t.standard_min=t.standard,t.standard_max=1/0,t.standard_text=t.standard_symbol+t.standard):"≤"===t.standard_symbol||"<"===t.standard_symbol?(t.standard_min=-1/0,t.standard_max=t.standard,t.standard_text=t.standard_symbol+t.standard):"区间"===t.standard_symbol?(e=t.standard&&t.standard.split(",")||[],t.standard_min=e[0]||-1/0,t.standard_max=e[1]||1/0,t.standard_text="["+(t.standard_min===-1/0?"不限":t.standard_min)+","+(t.standard_max===1/0?"不限":t.standard_max)+"]"):"人工判断"===t.standard_symbol&&(t.standard_text="人工判断"),t.standard_min=parseFloat(t.standard_min),t.standard_max=parseFloat(t.standard_max)},getSpotcheckDetails:function(e){return e.checkpoint&&e.checkpoint.length&&t.each(e.checkpoint,(function(t){t.image_file=JSON.parse(t.image_file||"[]"),t.is_open=!0})),e.sum={commonStatus:e.common_status,lowest:e.measure_lowest_rate,masterStatus:e.master_status,status:"合格"},e.process_checkpoint=e.checkpoint,e.hasMasterDetail=0,e.hasCommonDetail=0,e.hasMasterNum=t.filter(e.detail,{proj_type:"1"}).length,e.hasCommonNum=t.filter(e.detail,{proj_type:"2"}).length,e.hasJudgeNum=t.filter(e.detail,{accept_type:"1"}).length,e.hasMeasureNum=t.filter(e.detail,{accept_type:"2"}).length,e.process_id="spotcheck",e.detail&&e.detail.length&&t.each(e.detail,(function(t){t.status=t.status||"",t.rate=t.rate||"",t.accept_type=Number(t.accept_type),t.proj_type=Number(t.proj_type),s.setDetailStandard(t),t.problem_values?t.problem_values=JSON.parse(t.problem_values):2===Number(t.accept_type)?t.problem_values=[{val:""}]:t.problem_values=[],1===t.proj_type?e.hasMasterDetail+=1:2===t.proj_type&&(e.hasCommonDetail+=1)})),e.acceptor_user=e.user,e.operator_user_info=e.operator,e.process_type=e.detail,e.mode="view",e}};e.a=s}).call(this,a("391c"))},"9df6":function(t,e,a){"use strict";a.r(e);var n=a("278a").a,r=(a("a57d"),a("17cc")),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-popup",{staticClass:"batch-operation-btn",attrs:{position:"bottom",round:"",ellipsis:!1},model:{value:t.btnShow,callback:function(e){t.btnShow=e},expression:"btnShow"}},[a("div",{staticClass:"operation-wrap"},[a("ul",t._l(t.OPERATION_BTN,(function(e){return a("li",{directives:[{name:"track",rawName:"v-track",value:"工序验收V3-"+e.text,expression:"`工序验收V3-${item.text}`"}],key:e.code,on:{click:function(a){t.onClickOperationBtn(e)}}},[t._v("\n          "+t._s(e.text)+"\n        ")])}))),a("div",{staticClass:"line"}),a("div",{staticClass:"cancel",on:{click:function(e){t.btnShow=!1}}},[t._v("\n        取消\n      ")])])]),a("van-popup",{staticClass:"batch-operation-select",attrs:{position:"bottom",round:"",ellipsis:!1},model:{value:t.selectShow,callback:function(e){t.selectShow=e},expression:"selectShow"}},[a("div",{staticClass:"batch-operation-wrapper"},[a("div",{staticClass:"select-header"},[a("div",{staticClass:"cancel",on:{click:function(e){t.selectShow=!1}}},[t._v("\n          取消\n        ")]),a("div",{staticClass:"title"},[t._v("批量操作")]),a("div",{staticClass:"confirm",on:{click:t.onClickConfirm}},[t._v("\n          确认\n        ")])]),a("div",{staticClass:"select-content"},[a("select-info-list",{attrs:{"deliver-type":t.deliverType,"place-data":t.batchPlaceData,params:t.params,"is-popup":!0,"has-unit":t.hasUnit},on:{onClickTags:t.onClickTags}})],1)])])],1)}),[],!1,null,"615c0963",null);e.default=i.exports},a57d:function(t,e,a){"use strict";a("3fd9")},d185:function(t,e,a){"use strict";var n=a("fc9f"),r={getAllBuildingCheckItems:function(t){return n.a.query("SELECT             pp.id AS pp_item_id,             pp.name AS pp_item_name,             pc.id AS pc_item_id,             pc.name AS pc_item_name,             pc.full_name AS pc_full_name,             case when ifnull(bm.process_mode, '') != '' then bm.process_mode when ifnull(pc.process_mode, '') != '' then pc.process_mode else 1 end as process_mode         FROM problem_class pc         INNER JOIN problem_class pp ON pc.parent_id = pp.id         LEFT JOIN building_item_process_mode bm on pc.id = bm.item_id and bm.building_id = ?         WHERE pp.type = 44         AND ifnull(pp.parent_id, '') != ''         GROUP BY pc.id         ORDER BY pp.code, pc.code",[t])},getAllProblemByBuildingItem:function(t,e){return n.a.query("select pas.*, paf.floor as floor, paf.room_id as room_id             from process_acceptv2 pas             left join process_acceptv2_floor paf on paf.accept_id = pas.id             where building_id = ? and item_id = ? and ifnull(status, '') != ''",[t,e])},getProcessAcceptv2DataById:function(t){return n.a.queryOne("select * from process_acceptv2 where id = ?",[t])},getSelfDefinitionPlaceProcessData:function(t,e){return n.a.query("select * from process_acceptv2         where building_id = ? and item_id = ?         order by regist_date",[t,e])},getOneDetailByBuildingAndItem:function(t,e){return n.a.queryOne("select * from process_acceptv2 where building_id = ? and item_id = ? and ifnull(status, '') != ''",[t,e])},getSectionContractor:function(t){return n.a.queryOne("select c.* from section s join contractor c on c.id = s.contractor_id where s.id = ?",[t])},getCustomBuildById:function(t){return n.a.query("select a.*, p.id as parent_id, p.name as parent_name from location a         left join location p on p.id = a.parent_id         where a.id = ?",[t])},getBidsectionByCustom:function(t){return n.a.query("select bl.*, s.name as bidsection_name         from bidsection_location bl         left join section s on s.id = bl.bidsection_id         where bl.location_id = ?",[t])}};e.a=r}}]);