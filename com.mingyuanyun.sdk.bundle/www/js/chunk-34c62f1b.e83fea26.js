(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34c62f1b"],{"570a":function(t,n,e){"use strict";e("cab6")},"722d":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"workbench-container"},[t._v(" 加载中... ")])},i=[],c=e("d211"),a=e("cf6b"),u=e("418c"),s=e("78bf"),r={data:function(){return{isLoading:!1}},computed:Object(c["a"])({},Object(a["c"])({clientWidth:function(t){return t.app.global.clientWidth},lastTime:function(t){return t.app.lastUpdateTime.workbench||0},loadingStatus:function(t){return t.app.loadingStatus},topModules:function(t){return t.page.workbench.topModules},modules:function(t){return t.page.workbench.modules}})),activated:function(){+new Date-this.lastTime>6e5?this.init():u["b"].isEmpty(this.modules)&&this.getConfig()},methods:Object(c["a"])(Object(c["a"])({},Object(a["b"])("app",["LAST_UPDATE_TIME"])),{},{init:function(){this.isLoading=!0,this.getConfig()},getConfig:function(){var t=this;return s["a"].workbench().then((function(){t.LAST_UPDATE_TIME({workbench:+new Date}),t.isLoading=!1})).catch((function(n){t.isLoading=!1,console.error(n)})).then((function(){console.log("刷新选择项目插件列表"),t.hasProjectSelect&&t.$refs["project-select-component"].init()})).then((function(){window.__module_entry_zjapp__&&window.__module_entry_zjapp__.doDownloadPorject&&t.loadingStatus&&!t.loadingStatus.zjapp&&window.__module_entry_zjapp__.doDownloadPorject().catch((function(t){console.log("同步质检项目数据失败！",t)}))}))}})},l=r,d=(e("570a"),e("5d22")),p=Object(d["a"])(l,o,i,!1,null,null,null);n["default"]=p.exports},cab6:function(t,n,e){}}]);