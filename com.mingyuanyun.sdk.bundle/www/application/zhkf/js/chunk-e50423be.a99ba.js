(window["webpackJsonp_module_entry_zhkf_"]=window["webpackJsonp_module_entry_zhkf_"]||[]).push([["chunk-e50423be"],{"0191":function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a}));var n=r("ab3e");r("fd50");function o(e){return Object(n["e"])("common-api/message/get-no-read-msg-count",e)}function a(e){return Object(n["e"])("/study/study/save-click-log",e)}},"0d74":function(e,t,r){"use strict";var n=r("ab3e"),o=function(){return Object(n["a"])({url:"appcheckroom/report/get-mobile-report-url",method:"POST"})},a={getMobileReportUrl:o},i=r("c2c1"),c=r("a593"),u=function(){return new Promise((function(e,t){a.getMobileReportUrl().then((function(e){if(e.errcode)return setTimeout(t,2e3),c["default"].$comComps.toast.show(e.errmsg,2e3);i["a"].openUrlInWebview(e.data.url,{onOpen:function(){console.log("打开【Webview】: ",e.data)},onClose:function(){t(),console.log("关闭【Webview】: ",e.data)},onError:function(e){return setTimeout(t,2e3),c["default"].$comComps.toast.show(e,2e3)},navBar:{barTitle:"移动报表",barPosition:1,barTitleColor:"#000000",barButtonColor:"#000000",barProgressColor:"#0099ff"},isShowRefresh:!1})}),(function(e){return setTimeout(t,2e3),c["default"].$comComps.toast(e,2e3)}))}))};t["a"]={open:u}},"38d9":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("ab3e");function o(e){return Object(n["b"])("task-approve/task-approve/workflow-center-url",e)}},"510b":function(e,t,r){t=e.exports=r("690e")(!1),t.push([e.i,"\n.zhkf .zhkf-z[data-v-a807416e] .van-nav-bar__left {\n  top: initial;\n}\n.zhkf .zhkf-z[data-v-a807416e] .van-nav-bar__right {\n  top: initial;\n}\n",""])},"6dde":function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a}));var n=["special_checkitem","simulate","opening","online_opening","feedback_remain_reply","delivery","online_delivery","problem_remain_reinspect"],o=["delivery_review_material","delivery_handle_finance","delivery_handle_property","delivery_check_room","delivery_receive_gift","delivery_confirm"],a=["online_delivery_review_material","online_delivery_handle_finance","online_delivery_handle_property","online_delivery_check_room","online_delivery_give_gift","online_delivery_delivery_confirm"]},"9a8e":function(e,t,r){var n=r("510b");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=r("85cb").default;o("6e6d7444",n,!0,{})},e048:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a}));r("cc57");var n=r("07a4");function o(e,t){return n["a"].registerModule(e,t)}function a(e){n["a"].state[e]&&n["a"].unregisterModule(e)}},ea49:function(e,t,r){"use strict";r.r(t);r("ed63"),r("8cf2"),r("cc57"),r("6a61"),r("6491");var n=r("2e91"),o=r("c422"),a=r("d9cd"),i=r("07a4"),c=r("06c1"),u=r("6dde"),p=r("9229"),s=r("0d74"),l=r("38d9"),f=r("0191"),d=r("c2c1"),h=r("357d"),_=r("320d"),m=r("ba1a"),b=r("ab3e"),y=r("a18c"),v=r("e048"),k="[views]/super-app-transit.vue：",g=o["a"].getFunctionCodeRoutes();function w(e){var t=e.type,r=e.url||"";r=r.trim(),d["a"].openUrlInWebview(r,{onOpen:function(){console.log("打开【Webview】: ",r)},onClose:function(){console.log("关闭【Webview】: ",r)},onError:function(e){return Popup.alert(e.errMsg)},navBar:{barTitle:t,barPosition:1,barColor:"#0099ff",barTitleColor:"#ffffff",barButtonColor:"#ffffff",barProgressColor:"#0099ff"},isShowRefresh:!0})}function z(e,t){return x.apply(this,arguments)}function x(){return x=Object(n["a"])(regeneratorRuntime.mark((function e(t,n){var o,c,u,d,_;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o="/zhkf"+(t.route.startsWith("/")?t.route:"/"+t.route),console.log(k,"real path:",o),"report"!=t.batch_type){e.next=6;break}p["a"].getReportMode().then((function(e){"YfAppCustomReport"===e?n("/zhkf/report"):s["a"].open().catch((function(){return n(!1)}))})),e.next=27;break;case 6:if(c=+("专项检查"===t.child_type),i["a"].commit("app/".concat(a["a"]),{currentMenuType:"",currentBatchType:t.batch_type,isSpecialBatch:c}),!t.isRemote){e.next=22;break}if(u="",!t.isNewFlow){e.next=16;break}return e.next=13,Object(l["a"])();case 13:if(d=e.sent,!d.data.workflow_center_url){e.next=16;break}return e.abrupt("return",w({url:d.data.workflow_center_url,type:"流程中心"}));case 16:if(_=Object(h["a"])("v_engineer_site"),u=Object(b["d"])(t.route,{},"",_),!(window.ZHKF_GLOBAL_ENV.VUE_APP_PKG_TYPE.indexOf("kf")>-1)){e.next=20;break}return e.abrupt("return",Promise.resolve().then(r.bind(null,"96c5")).then((function(e){var t=e.open;return t(u).then((function(){n(!1)}))})).catch((function(){n(!1)})));case 20:e.next=27;break;case 22:if("学习坊"!==t.name){e.next=26;break}return e.next=25,Object(f["b"])();case 25:Object(v["b"])("MY_STUDY");case 26:n({path:o,query:{type:encodeURIComponent(t.type),child_type:encodeURIComponent(t.child_type||""),name:encodeURIComponent(t.name),batch_type:encodeURIComponent(t.batch_type),from:"appengineerkit"}});case 27:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function R(e,t){return C.apply(this,arguments)}function C(){return C=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i["a"].commit("app/".concat(a["a"]),{currentMenuType:"todo"}),"daily_task"!==t){e.next=4;break}return r({path:"/zhkf/appengineer/daily-task",query:{from:"appengineerkit"}}),e.abrupt("return");case 4:if("property_task"!==t){e.next=7;break}return r({path:"/zhkf/appengineer/property_task_list",query:{from:"appengineerkit"}}),e.abrupt("return");case 7:if("check_task"!==t){e.next=10;break}return r({path:"/zhkf/appengineer/repair-task",query:{from:"appengineerkit"}}),e.abrupt("return");case 10:n=u["a"].includes(t),o=u["b"].includes(t),n||o?(c=n?"deliveryprocess":"online_delivery_center",i["a"].commit("app/".concat(a["a"]),{currentBatchType:c}),r({path:"/zhkf/checkroom/todo-nolist",query:{type:t}})):u["c"].indexOf(t)>-1?(i["a"].commit("app/".concat(a["a"]),{currentBatchType:t}),r({path:"/zhkf/checkroom/todo-batch-unit",query:{moduleType:t}})):"problem_remain_dispatch"==t?r({path:"/zhkf/checkroom/todo-dispatch-problem",query:{type:t}}):"problem_contractor_return"==t&&r({path:"/zhkf/checkroom/todo-sendback-problem",query:{type:t}});case 13:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}function O(e,t){return q.apply(this,arguments)}function q(){return q=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n={newest_check_progress:"最新查验进展",final_rectification_situation:"最终整改情况",latest_appointment_progress:"最新预约进展",final_appointment_situation:"最终预约情况",focus_delivery_progress:"集中交付进展",focus_delivering_overall_situation:"集中交付整体情况",sporadic_delivery_progress:"零星交付进展",final_delivery_situation:"最终交付情况"},o=n[t],o?r({path:"/zhkf/chat/chat-detail",query:{type:encodeURIComponent(o)}}):(a={todo_msg:"待办任务",approve_msg:"审批任务",upgrade_msg:"预警/升级提醒",overtime_msg:"超时任务",urge_msg:"催办任务",notice_msg:"知会消息"},o=a[t],r({path:"/zhkf/appengineer/notice",query:{msg_group_type_title:encodeURIComponent(o)}}));case 3:case"end":return e.stop()}}),e)}))),q.apply(this,arguments)}var P={data:function(){return{}},computed:{},beforeRouteUpdate:function(e,t,r){"/zhkf"===e.path?(r(!1),m["a"].goHome(),window.$log("[超级APP]/路由异常",{to:e.path,from:t.path})):r()},beforeRouteEnter:function(e,t,r){if(console.log("%c 超级APP进入智慧客服中转页","background-color: #3DB642;color: #FFF"),console.log(e.path,e.query,t.path),"/zhkf"!==e.path&&c["default"].checkDataUpdate().then((function(){var t=i["a"].state.projectList.currentItem;e.path.indexOf("checkroom")>-1&&t&&t.id&&c["default"].checkDataUpdate("project")})),"/zhkf"===e.path)if(y["a"].isForward=!0,y["a"].isBack=!1,t.path.startsWith("/zhkf")||_["a"].push(t),e.query.func&&g[e.query.func]){var n=g[e.query.func];console.log(k,"find route: ",n),z(n,r)}else if(e.query.todo){var o=e.query.todo;R(o,r)}else if(e.query.message){var a=e.query.message;O(a,r)}else r(!1),m["a"].goHome(),window.$log("[超级APP]/路由异常",{to:e,from:t});else r()},created:function(){},destroyed:function(){_["a"].clear()},methods:{}},T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"zhkf-z"},[r("keep-alive",[r("router-view")],1)],1)},j=[],U=r("d082");function B(e){r("9a8e")}var I=!1,M=B,W="data-v-a807416e",E=null,F=Object(U["a"])(P,T,j,I,M,W,E);t["default"]=F.exports}}]);