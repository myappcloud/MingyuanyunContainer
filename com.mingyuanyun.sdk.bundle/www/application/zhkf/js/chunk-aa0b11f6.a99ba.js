(window["webpackJsonp_module_entry_zhkf_"]=window["webpackJsonp_module_entry_zhkf_"]||[]).push([["chunk-aa0b11f6"],{"447b":function(t,e,n){"use strict";n("ed63");var i=n("fd50"),a=n("dfb1"),s=n("07a4"),r={getDeliveryBatchUnitList:function(t){var e=s["a"].state.projectList.currentItem.id,n=["online_delivery","online_delivery_center"],i=n.includes(t)?"在线交付":"交付";return a["a"].getDeliveryBatchUnitList(e,i)},getDeliveryBatchRoomData:function(t){var e=[a["a"].getDeliveryBatchRoomCount(t),a["a"].getDeliveryBatchRoomList(t)];return i["a"].all(e).then((function(t){var e={count:t[0],list:t[1]};return e}))},getDeliveryBatchRoomList:function(t){return a["a"].getDeliveryBatchRoomList(t)}};e["a"]=r},4778:function(t,e,n){"use strict";n("5ab2"),n("6d57"),n("e44b"),n("e10e"),n("cc57");var i=n("28f8"),a=n("f2de"),s=n("d9cd"),r=n("06c1");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c={name:"PList",props:{isDisable:{type:Boolean,default:!1},errMsg:{type:String,defautl:""}},data:function(){return{showItem:!1}},computed:l({},Object(a["e"])({items:function(t){return t.projectList.items},currentItem:function(t){return t.projectList.currentItem},isIOSX:function(t){return t.app.global.isIOSX},isIOS:function(t){return t.app.global.isIOS}})),activated:function(){var t=this;this.init().then((function(e){e.name&&r["default"].checkDataUpdate("project").then((function(e){e&&t.init()}))}))},methods:l(l(l({},Object(a["b"])("projectList",["init","changeProject"])),Object(a["d"])("app",[s["a"]])),{},{toggleItems:function(){this.isDisable?this.$toast(this.errMsg):this.currentItem.name&&(this.showItem=!this.showItem,this.$emit("input",this.showItem))},select:function(t,e){var n=this;e.id!=this.currentItem.id&&this.changeProject(e).then((function(t){n[s["a"]]({deskTopUnitListRefreshTime:{}}),n.$toast("已经成功切换到【".concat(e.name,"】"),1e3),t&&n.init()}))},hide:function(){this.showItem=!1,this.$emit("input",this.showItem)}})},p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-list"},[n("p",{staticClass:"title van-ellipsis",on:{click:function(e){return t.toggleItems()}}},[n("span",{staticClass:"title-name"},[t._v("\n      "+t._s(t.currentItem&&t.currentItem.name?t.currentItem.name:"无项目")+"\n    ")]),t._v(" "),t.currentItem&&t.currentItem.name?n("span",{staticClass:"icon",class:{up:t.showItem}},[n("i",{staticClass:"iconfont icon-fenxiangmuxiala",class:{up:t.showItem}})]):t._e()]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showItem,expression:"showItem"}],staticClass:"wrapper",class:{top20:t.isIOS,top30:t.isIOSX},on:{click:function(e){return t.hide()}}},[n("div",{staticClass:"list"},[n("ul",t._l(t.items,(function(e,i){return n("li",{key:e.id,staticClass:"list-item van-hairline--bottom",on:{click:function(n){return t.select(i,e)}}},[n("i",{staticClass:"upload iconfont",class:{"icon-shangchuan":!1}}),t._v(" "),n("span",{class:{active:e.id===t.currentItem.id}},[t._v(t._s(e.name))]),t._v(" "),n("i",{directives:[{name:"show",rawName:"v-show",value:e.id===t.currentItem.id,expression:"item.id === currentItem.id"}],staticClass:"iconfont icon-gou"})])})),0)])])])},f=[],d=n("d082");function u(t){n("8f12")}var h=!1,m=u,b="data-v-0a6b9a50",v=null,x=Object(d["a"])(c,p,f,h,m,b,v);e["a"]=x.exports},"8f12":function(t,e,n){var i=n("d58f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("85cb").default;a("28cdfc18",i,!0,{})},a011:function(t,e,n){var i=n("c381");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("85cb").default;a("938b1978",i,!0,{})},c146:function(t,e,n){e=t.exports=n("690e")(!1),e.push([t.i,"\n.zhkf .collapse-wrapper[data-v-020a7db0] {\n  position: relative;\n}\n.zhkf .collapse[data-v-020a7db0] {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #323233;\n  font-size: 14px;\n  line-height: 24px;\n  background-color: #fff;\n  height: 50px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.zhkf .title[data-v-020a7db0] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.zhkf .main[data-v-020a7db0] {\n  padding-left: 40px;\n  background: #fff;\n  position: relative;\n  z-index: 1;\n}\n",""])},c381:function(t,e,n){e=t.exports=n("690e")(!1),e.push([t.i,"\n.zhkf .simulate[data-v-e99975b6] {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n}\n.zhkf .wrapper .item[data-v-e99975b6] {\n  border-bottom: 1px solid #ebebeb;\n  height: 44px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.zhkf .wrapper .item .iconfont[data-v-e99975b6] {\n    margin-right: 10px;\n    color: #999;\n}\n.zhkf .wrapper .item[data-v-e99975b6]:last-child {\n    border-bottom: none;\n}\n.zhkf .refresh-wrapper[data-v-e99975b6] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow: scroll;\n}\n.zhkf .content[data-v-e99975b6] {\n  height: 100%;\n}\n.zhkf .content .title[data-v-e99975b6] {\n    color: #a0a0a0;\n    font-size: 16px;\n    position: relative;\n    padding-left: 23px;\n}\n.zhkf .content .title .arrow[data-v-e99975b6] {\n      color: #0099ff;\n      position: absolute;\n      left: 0px;\n      top: 0px;\n      -webkit-transform: rotate(180deg);\n              transform: rotate(180deg);\n      -webkit-transition: -webkit-transform 0.3s ease;\n      transition: -webkit-transform 0.3s ease;\n      transition: transform 0.3s ease;\n      transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n}\n.zhkf .content .list-wrapper .list-item[data-v-e99975b6] {\n    height: 50px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding-right: 15px;\n}\n.zhkf .content .list-wrapper .list-item[data-v-e99975b6]:last-child {\n      border: none;\n}\n.zhkf .content .list-wrapper .list-item span[data-v-e99975b6] {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      font-size: 14px;\n      color: #202020;\n}\n.zhkf .content .list-wrapper .list-item .icon-new_jinru[data-v-e99975b6] {\n      width: 8px;\n      color: #d2d2d7;\n      margin-right: 3px;\n}\n",""])},d58f:function(t,e,n){e=t.exports=n("690e")(!1),e.push([t.i,"\n.zhkf .p-list[data-v-0a6b9a50] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #606060;\n  font-size: 18px;\n  position: relative;\n}\n.zhkf .p-list .title[data-v-0a6b9a50] {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.zhkf .p-list .title .title-name[data-v-0a6b9a50] {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n}\n.zhkf .p-list .icon[data-v-0a6b9a50] {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    width: 16px;\n    height: 16px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin-left: 8px;\n    -webkit-transition: -webkit-transform 0.3s ease;\n    transition: -webkit-transform 0.3s ease;\n    transition: transform 0.3s ease;\n    transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n}\n.zhkf .p-list .icon.up[data-v-0a6b9a50] {\n      -webkit-transform: rotate(180deg);\n              transform: rotate(180deg);\n}\n.zhkf .p-list .wrapper[data-v-0a6b9a50] {\n    position: fixed;\n    top: 48px;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    z-index: 10;\n    background: rgba(0, 0, 0, 0.3);\n}\n.zhkf .p-list .top10[data-v-0a6b9a50] {\n    margin-top: 10px;\n}\n.zhkf .p-list .top20[data-v-0a6b9a50] {\n    top: 68px;\n}\n.zhkf .p-list .top30[data-v-0a6b9a50] {\n    top: 78px;\n}\n.zhkf .p-list .list[data-v-0a6b9a50] {\n    width: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    max-height: 375px;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    background: #fff;\n    font-size: 14px;\n    text-align: left;\n}\n.zhkf .p-list .list-item[data-v-0a6b9a50] {\n      height: 50px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n}\n.zhkf .p-list .list-item .upload[data-v-0a6b9a50] {\n        width: 16px;\n        height: 16px;\n        margin: 0 7px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        color: #ff9323;\n}\n.zhkf .p-list .list-item span[data-v-0a6b9a50] {\n        color: #303030;\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n}\n.zhkf .p-list .list-item span.active[data-v-0a6b9a50] {\n          color: #0099ff;\n}\n.zhkf .p-list .list-item .icon-gou[data-v-0a6b9a50] {\n        width: 21px;\n        font-size: 16px;\n        color: #0099ff;\n        margin-right: 16px;\n}\n",""])},d9cf:function(t,e,n){"use strict";n("cc57");var i={name:"CusCollapse",model:{prop:"activeItems",event:"change"},props:{active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},name:{type:String,default:""},activeItems:{type:Array,default:function(){return[]}}},data:function(){return{isExpand:!1}},created:function(){this.isExpand=this.activeItems.indexOf(this.name)>-1},methods:{toggle:function(){if(!this.disabled){this.isExpand=!this.isExpand;var t=this.activeItems.indexOf(this.name);this.isExpand?t<0&&this.activeItems.push(this.name):this.activeItems.splice(t,1),this.$emit("change",this.activeItems)}}}},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"collapse-wrapper"},[n("div",{staticClass:"collapse van-hairline--bottom",on:{click:function(e){return t.toggle()}}},[n("div",{staticClass:"title",class:{"collapse-title__expended":t.activeItems.indexOf(t.name)>-1}},[t._t("title")],2),t._v(" "),n("div",{staticClass:"right-icon"},[t._t("right-icon")],2)]),t._v(" "),t.activeItems.indexOf(t.name)>-1?n("div",{ref:"main",staticClass:"main van-hairline--bottom"},[n("div",{ref:"wrapper",staticClass:"wrapper"},[t._t("default")],2)]):t._e()])},s=[],r=n("d082");function o(t){n("dd6f")}var l=!1,c=o,p="data-v-020a7db0",f=null,d=Object(r["a"])(i,a,s,l,c,p,f);e["a"]=d.exports},dd6f:function(t,e,n){var i=n("c146");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("85cb").default;a("336b5d14",i,!0,{})},f46a:function(t,e,n){"use strict";n.r(e);n("5ab2"),n("6d57"),n("e44b"),n("e10e"),n("f0e6"),n("cc57");var i=n("28f8"),a=n("f2de"),s=n("d9cf"),r=n("438a"),o=n("c42d"),l=n("447b"),c=function(){var t={};return{model:t,init:function(t){return l["a"].getDeliveryBatchUnitList(t)}}}(),p=n("4778");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={components:{EmptyPage:r["a"],CusCollapse:s["a"],PList:p["a"]},data:function(){return{isLoading:!1,activeNames:["0"],menuItems:[],items:[],zone:!1,noData:!1,loading:!1,emptyMsg:"尚无数据",rightMsg:"该项目没有启用在线交付，暂时无法使用",noNetMsg:"当前网络异常，请稍后重试",authority:!0,hasNetwork:!0}},computed:d({},Object(a["e"])({currentBatchType:function(t){return t.app.global.currentBatchType},currentMenuType:function(t){return t.app.global.currentMenuType},currentItem:function(t){return t.projectList.currentItem},isFinishProjectBaseDataDownload:function(t){return t.app.global.isFinishProjectBaseDataDownload}})),watch:{currentItem:function(t,e){this.$route.name.indexOf("BuildingList")>-1&&t&&t.id!==(e&&e.id)&&this.init()}},activated:function(){this.init()},methods:{init:function(){var t=this;if(!this.loading){this.loading=!0,this.noData=!1,this.authority=!0,o["a"].getHasNetwork().then((function(e){t.hasNetwork=e}));var e=this.currentBatchType;if(c.init(e).then((function(e){e&&e.length>0?t.items=t.handleData(e):t.noData=!0})).finally((function(){t.loading=!1})),"online_delivery_center"===e)return void(this.authority=!0);this.isFinishProjectBaseDataDownload&&this.currentItem&&(this.authority=1==this.currentItem.enable_delivery_process)}},goRoomList:function(t){this.$router.push({path:"/checkroom/".concat(this.currentMenuType||this.currentBatchType,"-room-list"),query:{unitId:t.batch_unit_id,unitName:t.building_name+(t.unit?"-"+t.unit:""),batchId:t.batch_id}})},resetStatus:function(){this.loading=!1,this.authority=!0,this.noData=!1},handleData:function(t){for(var e=0;e<t.length;e++)for(var n=0;n<t[e].unit_list.length;n++)t[e].unit_list[n]["batch_id"]=t[e].batch_id,t[e].unit_list[n].unit&&(t[e].unit_list[n].unit=t[e].unit_list[n].unit.indexOf("单元")>-1?t[e].unit_list[n].unit:t[e].unit_list[n].unit+"单元");return t},onRefresh:function(){var t=this;this.resetStatus();var e=this.currentBatchType;c.init(e).then((function(e){e.length>0?t.items=t.handleData(e):t.noData=!0})).finally((function(){t.isLoading=!1}))}}},h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"simulate"},[i("cus-nav-bar",{attrs:{"left-arrow":""}},[i("div",{attrs:{slot:"title"},slot:"title"},[i("p-list")],1)]),t._v(" "),i("empty-page",{attrs:{"show-empty":t.loading,"loading-page":!0,"empty-msg":"正在统计您的批次，请耐心等待"}}),t._v(" "),i("empty-page",{attrs:{"show-empty":!t.authority&&!t.loading&&t.hasNetwork&&t.isFinishProjectBaseDataDownload,"empty-msg":t.rightMsg,"empty-img-src":n("6233")}}),t._v(" "),i("empty-page",{attrs:{"show-empty":!t.hasNetwork,"empty-msg":t.noNetMsg,"empty-img-src":n("6233")}}),t._v(" "),i("van-pull-refresh",{directives:[{name:"show",rawName:"v-show",value:!t.loading&&t.authority&&t.hasNetwork,expression:"!loading && authority && hasNetwork"}],staticClass:"refresh-wrapper",on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[i("empty-page",{attrs:{"show-empty":t.noData,"empty-msg":t.emptyMsg,"empty-img-src":n("efdf")}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.noData,expression:"!noData"}],staticClass:"content"},[i("div",t._l(t.items,(function(e,n){return i("cus-collapse",{key:e.batch_name,attrs:{name:String(n)},model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[i("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[i("i",{staticClass:"arrow iconfont icon-Oval"}),t._v("\n            "+t._s(e.batch_name)+"\n          ")]),t._v(" "),i("span",{attrs:{slot:"right-icon"},slot:"right-icon"}),t._v(" "),i("ul",{staticClass:"list-wrapper"},t._l(e.unit_list,(function(n,a){return i("li",{key:a,staticClass:"list-item van-hairline--bottom",on:{click:function(e){return t.goRoomList(n)}}},[i("span",{class:{"item-close":e.is_closed}},[t._v(t._s(n.building_name)+t._s(n.unit?"-"+n.unit:""))]),t._v(" "),i("i",{staticClass:"iconfont icon-new_jinru"})])})),0)])})),1)])],1)],1)},m=[],b=n("d082");function v(t){n("a011")}var x=!1,g=v,w="data-v-e99975b6",y=null,k=Object(b["a"])(u,h,m,x,g,w,y);e["default"]=k.exports}}]);