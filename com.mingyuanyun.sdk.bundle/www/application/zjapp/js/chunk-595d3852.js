(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-595d3852"],{"37c3":function(e,t,n){var a=n("d802");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n("85cb").default)("dab24232",a,!0,{sourceMap:!1,shadowMode:!1})},"38ec":function(e,t,n){"use strict";n.r(t);n("6a61");var a,o=n("2e91"),i=n("4c09"),r=n("bd4d"),l=n("329b"),d={name:"DebuggerInfo",data:function(){return{loading:!1,finished:!1,indexNumber:1,debuggerData:[],debuggerTotal:0,enableConsole:"dist"!==APP_ENV}},activated:function(){this.loading=!1,this.finished=!1,this.indexNumber=1,this.debuggerData=[],this.debuggerTotal=0,this.getList()},methods:{onLoad:function(){var e=this;setTimeout((function(){e.indexNumber++;var t=r.a.get(e.indexNumber,999).data;e.debuggerData=[].concat(Object(i.a)(e.debuggerData),Object(i.a)(t)),e.loading=!1,e.debuggerData.length===e.debuggerTotal&&(e.finished=!0)}),500)},getList:function(e){var t=r.a.get(1,10),n=t.data,a=t.total;this.debuggerData=n,this.debuggerTotal=a,a<=15?(this.loading=!1,this.finished=!0):this.finished=!1,$log.log("this.debuggerData",n,a)},clear:function(){r.a.clear(),this.debuggerData=[]},openConsole:(a=Object(o.a)(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e("vendors~dynamic-vconsole").then(n.t.bind(null,"aac1",7));case 2:t=e.sent.default,a=new t,l.default.use(a);case 5:case"end":return e.stop()}}),e)}))),function(){return a.apply(this,arguments)})}},s=(n("b946"),n("17cc")),c=Object(s.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("page-content",{attrs:{title:"调试日志信息","show-go-root":"My"}},[n("div",{staticClass:"page-content"},[n("van-list",{attrs:{finished:e.finished,"finished-text":"没有更多了",offset:500},on:{load:e.onLoad},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},e._l(e.debuggerData,(function(t,a){return n("van-cell",{key:a},[n("div",{class:{"color-red":"error"===t.level,"color-blue":"debug"===t.level,"color-black":"log"===t.level,"color-gray":"info"===t.level},staticStyle:{"word-break":"break-all"}},[e._v("\n          "+e._s(t.msg)+"\n        ")])])})))],1),n("app-button-group",{attrs:{"fixed-bottom":""}},[n("app-button",{on:{click:e.clear}},[e._v("\n      清空\n    ")]),e.enableConsole?n("app-button",{on:{click:e.openConsole}},[e._v("\n      控制台\n    ")]):e._e()],1)],1)}),[],!1,null,"1cad94d0",null);t.default=c.exports},b946:function(e,t,n){"use strict";n("37c3")},d802:function(e,t,n){(e.exports=n("690e")(!1)).push([e.i,"[data-v-1cad94d0] .layout-content{display:flex;flex-direction:column}.zjapp .page-content[data-v-1cad94d0]{flex:1;padding:0 0 50px 0;overflow:auto}",""])}}]);