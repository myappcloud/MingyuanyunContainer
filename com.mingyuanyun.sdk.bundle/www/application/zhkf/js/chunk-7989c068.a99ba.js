(window["webpackJsonp_module_entry_zhkf_"]=window["webpackJsonp_module_entry_zhkf_"]||[]).push([["chunk-7989c068"],{"0081":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAoCAYAAACxbNkLAAAC00lEQVRoQ9XYO1ATURTG8f9JjAyFQ+Foh5WPml4rcRjEhgaw1EIatVIwsVAKSCy0E8cWWtFCCwVLbCmlk44KCy0gw4w5zs1D8trsuZs12dw25z5+k72b80UYxLGsBaDIU3nefHwZKI9qijyrKPPVcy81owYH9FYz/GQNZa7pS2hADQbolQ5T5B3KzYAn6h8q+aCCjlDiI8q1kOtRRiUbtKLngC8oY8a7vpRc0EsdpcgWcMWIASGbTNCKXga2UC6YMIIi3Ccrq8kD5XUM5TPKeSPmD3CHnKy7+mSBCnqVEp9QRkwYOCbFHFn5UKtPDqigk5TYQBk2Yg5JMU1WNuvrkwHK6yzKOkrGhBF+AVPk5FvyWp+83qPEGyBlwsABGSZYkJ129f39hlZ0AeWFEeJu/D5pxlmU3aA5/QNVOuZFD8wPMozzWPY6zek9qLVjDjcJ30lzg0XZDyvuLajSMbvLPxt2sLrPdxhigkdyYJnTO5DrmI/YACYtB6vWbHOGKR7Kb+uc9qBlrSTBNonQunBDnb1jPpkmbHKWaebl0GfPVlAF86y6SEsi9Fm8XOvfMbu32XsucpsZOfbdrxHUiKmtFR0VpWOGNS5xlxlxPZr3OAG1x0RHuY5Z+QqMmk8lvCbLA0TUPKepsALqjPFHVTpmF8xcQLMNoUBOsrbi4CoxYuwo/465HMzIifuh7Xr4gtyGwXfKt2OuC2ZdS6oL+Dxy9Xu2ovw75oZgFi/Ifo/ao/w75pZgFj8oKirFESV8nv+2wez/gKKh7GdxwSzFLZ7Itn2SX2Wn1qfWLfitGFzdMZjFtUlwc2r7bbKdwxDMbAuFV3XutuNB7XGa62HBLPyotorw+NAdapdT5cgcGsxsxw2vCgdFf1F4BbPwo9oqbCB/1Dbp8tvM/d3U02EHWVERg1lcaj9QGKqLYNY/UDCqq2DWX1AzKoZg1n9QDSUMxRHM4gL9BfFYCTmWlrw8AAAAAElFTkSuQmCC"},"271b":function(e,t,n){"use strict";n("6d57");var r=n("fd50"),i=n("07a4"),o=(n("cc57"),n("e697"),n("9a33"),n("bc35")),a=n("760e"),c=n("a14a"),l=n.n(c),s={},d={checkItem:o["a"].getCheckItemFilter,building:o["a"].getBuildingFilter,batch:o["a"].getBatchFilter};s.getProblemByPage=function(e,t,n){return e=e||{},t=t||0,o["a"].getProblemByPage(e,t,n).then((function(e){var t=[],n=[];return l.a.each(e,(function(e){e.roomName=e.buildingName+(e.unit?e.unit+(e.unit.indexOf("单元")>-1?"":"单元"):"")+e.roomNo,e.desc=e.descId.split(";"),t=t.concat(e.desc),n.push(e.id)})),t=l.a.uniq(t),r["a"].all([o["a"].getProblemSendBackDate(n),a["a"].getDescByIds(t)]).then((function(t){var n=t[0],r=t[1];return l.a.each(e,(function(e){var t=l.a.find(n,{problem_id:e.id});console.log(t),t&&(e.sendbackDate=t.time||""),l.a.each(e.desc,(function(t,n){var i=l.a.find(r,{id:t});e.desc[n]=i?i.name:"无描述"})),e.desc=e.desc.join("；"),e.problem=e.problem=e.positionName+"-"+e.itemName+"-"+e.desc+(e.remark?"；"+e.remark:"")})),e}))}))},s.getFilters=function(e,t){var n=[],i=l.a.cloneDeep(d);return delete i[t],e.project||(delete i.checkItem,delete i.building,delete i.batch),l.a.each(i,(function(t,r){n.push(function(t){return d[r](e).then((function(e){return{type:t,options:e}}))}(r))})),r["a"].all(n).then((function(e){var t={};return l.a.each(e,(function(e){var n=0;l.a.each(e.options,(function(e){n+=e.count})),e.options.unshift({name:"全部",count:n,id:""}),t[e.type]=e.options})),t}))},s.getAllProblemAndUnitIds=function(e){return o["a"].getAllProblemAndUnitIds(e)},s.getProjectList=function(){return o["a"].getProjects()};var u=s,f=n("a18c"),h=n("a593");t["a"]=function(){var e={list:[],filterList:[],currPage:0,totalPage:0,allSelected:!1},t={},n=20;return t.getConditions=function(){var t={};return _.each(e.filterList,(function(e){e.id&&(t[e.type]=e.id)})),t["project"]=i["a"].state.projectList.currentItem.id,t},t.getFilter=function(r){var i=t.getConditions(),o=[];return!i[r]&&(r=""),u.getFilters(i,r).then((function(t){if(_.each(e.filterList,(function(n,r){var i=e.filterList[r].value||"";if(n&&t[n.type]){var a=_.filter(t[n.type],{id:i});a&&a[0]&&o.push(a[0].count),e.filterList[r].options=t[n.type]}})),o.length){var r=Math.min.apply(null,o);e.totalPage=Math.ceil(r/n)}}))},t.getProblemList=function(){var r=t.getConditions(),i=e.currPage*n;return u.getProblemByPage(r,i,n).then((function(t){e.list=e.currPage?e.list.concat(t):t,e.list.length&&e.currPage++}))},t.resetProblemList=function(){return e.currProjectId="",e.filterList.forEach((function(e){e.id="",e.name=""})),t.getProblemList()},{model:e,init:function(){return e.list=[],e.filterList=[{id:"",name:"",label:"批次",type:"batch",options:[]},{id:"",name:"",label:"楼栋",type:"building",options:[]},{id:"",name:"",label:"检查项",type:"checkItem",options:[]}],e.currPage=0,e.totalPage=0,e.allSelected=!1,e.currProjectId=i["a"].state.projectList.currentItem.id,t.getProblemList().then((function(){return t.getFilter()}))},loadMore:function(){return e.currPage<e.totalPage?t.getProblemList():r["a"].resolve()},refreshList:function(n){return e.currPage=0,e.totalPage=0,e.allSelected=!1,t.getProblemList().then((function(){var i=r["a"].when();return e.list.length||(n="",i=t.resetProblemList()),i.then((function(){return t.getFilter(n).then((function(){e.filterList[0].id||e.filterList[0].options[0].count||(h["default"].prototype.$toast("恭喜！您已完成所有问题的指派",2e3),f["a"].push({path:"/todo"}))}))}))}))},getSelecteds:function(){var n=[],i=r["a"].defer();if(e.allSelected){var o=t.getConditions();u.getAllProblemAndUnitIds(o).then((function(e){i.resolve(e)}))}else _.each(e.list,(function(e){e.selected&&n.push({problemId:e.id,batchUnitId:e.batch_unit_id})})),i.resolve(n);return i.promise}}}()},"27cc":function(e,t,n){e.exports=n.p+"img/label_opening.22395308.png"},"3d9d":function(e,t,n){"use strict";n.r(t);n("5ab2"),n("e44b"),n("e10e"),n("6d57"),n("f0e6"),n("cc57");var r=n("28f8"),i=n("f2de"),o=n("6583"),a=n("2297"),c=n("e786"),l=n("97b4"),s=n("438a"),d=n("271b"),u=n("92fb"),f=n("4778"),h=n("c42d");function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g="[views]/sendback-problem：",b={components:{topTip:o["a"],problemFilter:l["a"],problemBtn:a["a"],emptyPage:s["a"],PList:f["a"],problemItem:c["a"]},data:function(){return{loading:!1,hasNetwork:!0,hasMoreProblemData:!1,loadingData:!1,noProblemData:!1,showItem:!1,emptySrc:n("b98c"),model:{allSelected:!1},wrapperScrollTop:0}},computed:m({},Object(i["e"])({currentBatchType:function(e){return e.app.global.currentBatchType},currentMenuType:function(e){return e.app.global.currentMenuType},currentItem:function(e){return e.projectList.currentItem},contentHeight:function(e){return e.app.global.contentHeight},footerHeight:function(e){return e.app.global.footerHeight}})),watch:{currentItem:function(e,t){this.$route.name.indexOf("SendbackProblem")>-1&&e&&e.id!==(t&&t.id)&&this.init()},showItem:function(e){e&&this.$refs.filterElement.maskClickHandler()}},activated:function(){this.$router.isForward?this.wrapperScrollTop=0:this.$refs.problemList.scrollTop=this.wrapperScrollTop},created:function(){this.init()},methods:{init:function(){var e=this;this.model={},d["a"].init().finally((function(){e.loading=!1,e.model=d["a"].model,console.log(g,"init() - model",e.model),console.log(g,"init() - filterList",e.model.filterList),e.updatePageStatus()})),h["a"].getHasNetwork().then((function(t){e.hasNetwork=t}))},selectFilterOption:function(e,t){var n=this,r=this.model.filterList,i=r.length;while(i--)(r[i]!==t||!r[i].id)&&(r[i].options=[]);this.loading=!0,d["a"].refreshList(t.type).then((function(){n.updatePageStatus(),n.loading=!1}))},selectedAll:function(){var e=this;this.$set(this.model,"allSelected",!this.model.allSelected),this.model.list.forEach((function(t){e.$set(t,"selected",e.model.allSelected)}))},setContractors:function(){var e=this;return h["a"].getHasNetwork().then((function(t){return e.hasNetwork=t,t?d["a"].getSelecteds().then((function(t){if(t=t||[],!t.length)return e.$toast("请选择问题"),!1;u["a"].setData(t,"重新指派承建商","todo-sendback"),e.$router.push({path:"/checkroom/todo-contractor-reselect"})})):(e.$toast("当前无网络，请联网操作"),!1)}))},selectItem:function(e){if(this.hasNetwork){this.$set(e,"selected",!e.selected);var t=!0;_.each(this.model.list,(function(e){if(!e.selected)return t=!1,!1})),this.model.allSelected=t}},openDetail:function(e){this.wrapperScrollTop=this.$refs.problemList.scrollTop,this.$router.push({path:"/checkroom/".concat(this.currentMenuType||this.currentBatchType,"-problem-detail"),query:{question_id:e.id,batch_room_id:e.batch_room_id,batch_unit_id:e.batch_unit_id,building_id:e.building_id,title:e.roomName,type:"todo-sendback"}})},loadMoreProblemData:function(){var e=this,t=this.model.currPage;return d["a"].loadMore().then((function(){e.updatePageStatus()})).finally((function(){e.hasMoreProblemData&&t===e.model.currPage&&(e.hasMoreProblemData=!1),e.loadingData=!1}))},updatePageStatus:function(){this.hasMoreProblemData=this.model.currPage<this.model.totalPage,this.noProblemData=!this.model.list.length&&!this.hasMoreProblemData,this.model.allSelected&&this.model.list.forEach((function(e){e.selected=this.model.allSelected}))}}},v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"todo-sendback-problem"},[r("cus-nav-bar",{attrs:{title:"被退回问题","left-arrow":"",border:!1}},[r("div",{attrs:{slot:"title"},slot:"title"},[r("p-list",{model:{value:e.showItem,callback:function(t){e.showItem=t},expression:"showItem"}})],1)]),e._v(" "),r("top-tip",{attrs:{show:!e.hasNetwork,message:"当前无网络，请在有网络的时候进行指派",icon:n("02f9"),"icon-width":23}}),e._v(" "),r("empty-page",{attrs:{"show-empty":e.loading,"loading-page":!0,"empty-msg":"正在加载问题，请稍等"}}),e._v(" "),r("problem-filter",{ref:"filterElement",attrs:{"filter-list":e.model.filterList},on:{chooseItem:e.selectFilterOption}}),e._v(" "),e.noProblemData?e._e():r("div",{ref:"problemList",staticClass:"problem-list"},[r("van-list",{staticClass:"list-container",attrs:{finished:!e.hasMoreProblemData},on:{load:e.loadMoreProblemData},model:{value:e.loadingData,callback:function(t){e.loadingData=t},expression:"loadingData"}},e._l(e.model.list,(function(t,n){return r("problem-item",{key:n,attrs:{type:"sendback","show-degree":!1,item:t},on:{selectItem:e.selectItem,openDetail:e.openDetail}})})),1)],1),e._v(" "),r("empty-page",{staticStyle:{flex:"1"},attrs:{"show-empty":e.noProblemData,"empty-img-src":e.emptySrc,"empty-msg":"本地暂无问题，请先下载房间数据"}}),e._v(" "),e.noProblemData?e._e():r("problem-btn",{staticClass:"footer",attrs:{"select-text":"全选","action-text":"重新指派承建商","is-selected":e.model.allSelected,"aciton-disabled":!e.hasNetwork},on:{select:e.selectedAll,action:e.setContractors}})],1)},x=[],y=n("d082");function w(e){n("b3e8")}var k=!1,P=w,C="data-v-cf9e755c",I=null,L=Object(y["a"])(b,v,x,k,P,C,I);t["default"]=L.exports},"48da":function(e,t,n){t=e.exports=n("690e")(!1),t.push([e.i,"\n.zhkf .todo-sendback-problem[data-v-cf9e755c] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n}\n.zhkf .problem-list[data-v-cf9e755c] {\n  overflow: scroll;\n  padding-left: 10px;\n  padding-right: 10px;\n  background: #F4F4F4;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  max-height: 100%;\n}\n.zhkf .problem-list .list-container[data-v-cf9e755c] {\n    margin-bottom: 10px;\n}\n.zhkf .problem-list .problem-item.van-hairline--bottom[data-v-cf9e755c]::after {\n    display: none;\n}\n.zhkf .footer[data-v-cf9e755c] {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n",""])},6824:function(e,t,n){e.exports=n.p+"img/label_special.0c131de7.png"},"6a56":function(e,t,n){e.exports=n.p+"img/label_simulate.e565b6f6.png"},"92fb":function(e,t,n){"use strict";n("6d57");var r=n("dd0a"),i=(n("ed63"),n("8cf2"),n("fd50")),o=n("0e79"),a={},c=1e3,l=0;a.formatUploadData=function(e,t,n){var r={problemIdList:[],batchUnitIdList:[],contractorId:t,forbidContractorReturn:n};return _.each(e,(function(e){r.problemIdList.push(e.problemId),_.includes(r.batchUnitIdList,e.batchUnitId)||r.batchUnitIdList.push(e.batchUnitId)})),r},a.uploadData=function(e,t,n){var r=i["a"].when(),s=0;l=e.length;var d=[];while(s<l){var u=l-s>c?c:l-s,f=a.formatUploadData(e.slice(s,s+u),t,n);s+=u,d.push(f)}return _.each(d,(function(e){r=r.then((function(){return Object(o["a"])(e)}))})),r.then((function(e){return console.log("指派承建商 then",e),Promise.resolve()})).catch((function(e){return console.error("指派承建商 catch",e),Promise.reject()}))};var s=a;t["a"]=function(){var e={list:[],selectedId:-1,operateType:"指派承建商",operateReason:"指派",problemId:[],problemData:[],from:"",forbidContractorReturn:0},t={getList:function(t){var n=e.problemId.length>0?e.problemId[0]:"";return r["a"].getProjectContractorList(n,t).then((function(t){e.list=t}))},setSelectedConstructionId:function(t){e.selectedId!==t&&(e.selectedId=t)},setData:function(n,r,i){_.isArray(n)||(n=[n]),e.problemData=n;var o=[];n.forEach((function(e){o.push(e.problemId)})),e.problemId!==o&&(e.problemId=o,t.getList("")),e.operateType!==r&&(e.operateType=r,"指派承建商"===e.operateType?e.operateReason="指派":"重新指派承建商"===e.operateType?e.operateReason="重新指派":e.operateReason=null),e.from=i},changeConstruction:function(){if(-1!==e.selectedId){var t=e.problemId;return s.uploadData(e.problemData,e.selectedId,e.forbidContractorReturn).then((function(){return r["a"].changeConstruction(t,e.selectedId,e.operateType,e.operateReason)}))}}};return{model:e,init:function(e){return t.getList(e)},getList:function(e){return t.getList(e)},setSelectedConstructionId:function(e){return t.setSelectedConstructionId(e)},setData:function(e,n,r){return r=r||"",t.setData(e,n,r)},setForbidContractorReturn:function(t){e.forbidContractorReturn!==t&&(e.forbidContractorReturn=t)},changeConstruction:function(){return t.changeConstruction()}}}()},"97b4":function(e,t,n){"use strict";n("cc57");var r={filters:{format:function(e){return e.length>11?e.slice(0,11)+"...":e}},props:{filterList:{type:Array,default:function(){return[]}}},data:function(){return{top:0,showFilterContent:!1,currFilter:{},currIndex:"",labelSimulateUrl:n("6a56"),labelOpeningUrl:n("27cc"),labelSpecialUrl:n("6824"),labelDeliveryUrl:n("f093"),labelOnlineDeliveryUrl:n("e15e")}},mounted:function(){this.initPosition()},updated:function(){this.initPosition()},methods:{initPosition:function(){var e=this.$refs.filterHeader;this.top=e.offsetTop+e.offsetHeight},getLabelUrl:function(e){var t=e.child_type||e.type||"";switch(t){case"验房":return this.labelSimulateUrl;case"交付":return this.labelDeliveryUrl;case"开放":return this.labelOpeningUrl;case"在线交付":return this.labelOnlineDeliveryUrl;case"专项检查":return this.labelSpecialUrl}return""},changeFilter:function(e){if(e===this.currIndex)return this.maskClickHandler(),this.currIndex="",!1;this.currFilter=this.filterList[e],this.currIndex=e,this.showFilterContent=!0,this.$emit("changeFilter",e)},maskClickHandler:function(){this.showFilterContent=!1,this.currFilter={},this.currIndex=""},chooseItem:function(e,t){this.currFilter.name=this.currFilter.options[e].name,this.currFilter.id!=this.currFilter.options[e].id&&(this.currFilter.id=this.currFilter.options[e].id,console.log(this.currFilter),this.currFilter={},this.$emit("chooseItem",e,t))}}},i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"filter"},[r("ul",{ref:"filterHeader",staticClass:"filter-header van-hairline--bottom"},e._l(e.filterList,(function(t,n){return r("li",{directives:[{name:"show",rawName:"v-show",value:!t.hidden,expression:"!filter.hidden"}],key:n,staticClass:"filter-item",class:{"filter-item__active":e.currFilter.type===t.type||t.id},on:{click:function(t){return e.changeFilter(n)}}},[r("div",{staticClass:"filter-desc van-hairline--left"},[r("span",{staticClass:"filter-title"},[e._v(e._s(t.id?t.name:t.label))]),e._v(" "),r("i",{staticClass:"iconfont",class:e.currIndex===n&&e.showFilterContent?"icon-hebingxingzhuang":"icon-hebingxingzhuang1"})])])})),0),e._v(" "),e.showFilterContent?r("div",{staticClass:"filter-content",style:{top:e.top+"px"},on:{click:e.maskClickHandler}},[r("ul",{staticClass:"filter-list"},e._l(e.currFilter.options,(function(t,i){return r("li",{key:i,staticClass:"filter-cell van-hairline--bottom",class:{"filter-cell__active":e.currFilter.id===t.id},on:{click:function(t){return e.chooseItem(i,e.currFilter)}}},[r("img",{staticClass:"icon-checked",attrs:{src:n("0081")}}),e._v(" "),e.getLabelUrl(t)?r("img",{staticClass:"label-img",attrs:{src:e.getLabelUrl(t)}}):e._e(),e._v(" "),r("span",{staticClass:"name-text"},[e._v(e._s(t.name))]),e._v(" "),r("span",{staticStyle:{"flex-grow":"1","min-width":"12px"}}),e._v(" "),r("span",[e._v(e._s(t.count))])])})),0)]):e._e()])},o=[],a=n("d082");function c(e){n("e596")}var l=!1,s=c,d="data-v-8decb152",u=null,f=Object(a["a"])(r,i,o,l,s,d,u);t["a"]=f.exports},b3e8:function(e,t,n){var r=n("48da");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("85cb").default;i("4cfe4c8a",r,!0,{})},dd0a:function(e,t,n){"use strict";n("e697"),n("6d57"),n("9a33");var r=n("fe97"),i=n("fd50"),o=n("a14a"),a=n.n(o),c=function(e){return r["a"].getProjectContractor(e)},l=function(e,t,n){var o=i["a"].defer();return r["a"].getContractor(e,t,n).then((function(e){if(e){var t=e;t.desc_id=n,o.resolve(t)}else{var r={contractor_id:"",contractor_name:"",desc_id:n};o.resolve(r)}})),o.promise},s=function(e,t,n){var o=[];if(n&&-1!=n){for(var c=n.split(";"),s=[],d=0;d<c.length;d++)s.push(l(e,t,c[d]));return i["a"].all(s).then((function(e){return e&&e.forEach((function(e){e&&e.contractor_id&&(a.a.find(o,{contractor_id:e.contractor_id})||o.push(e))})),o}))}return r["a"].getContractor(e,t).then((function(e){return e}))},d=function(e,t){return r["a"].getProjectContractorList(e,t)},u=function(e,t,n,i){return r["a"].changeConstruction(e,t,n,i)};t["a"]={getContractorList:c,getContractor:s,getContractorBySingleDesc:l,getProjectContractorList:d,changeConstruction:u}},e15e:function(e,t,n){e.exports=n.p+"img/label_online_delivery.0ae98a18.png"},e596:function(e,t,n){var r=n("e8b1");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("85cb").default;i("1ad1c9e7",r,!0,{})},e8b1:function(e,t,n){t=e.exports=n("690e")(!1),t.push([e.i,"\n.zhkf .filter[data-v-8decb152] {\n  background: #fff;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n.zhkf .label-img[data-v-8decb152] {\n  width: 54px;\n  margin-right: 10px;\n}\n.zhkf .name-text[data-v-8decb152] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.zhkf .filter-header[data-v-8decb152] {\n  height: 45px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.zhkf .filter-header .filter-item[data-v-8decb152] {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    text-align: center;\n    padding: 10px 0;\n    width: 20%;\n    line-height: 25px;\n    color: #606060;\n}\n.zhkf .filter-header .filter-item .filter-desc[data-v-8decb152] {\n      height: 100%;\n      font-size: 14px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      padding-left: 15px;\n      padding-right: 10px;\n}\n.zhkf .filter-header .filter-item .filter-desc .filter-title[data-v-8decb152] {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n}\n.zhkf .filter-header .filter-item .filter-desc .icon-hebingxingzhuang1[data-v-8decb152],\n      .zhkf .filter-header .filter-item .filter-desc .icon-hebingxingzhuang[data-v-8decb152] {\n        -ms-flex-negative: 0;\n            flex-shrink: 0;\n        font-size: 10px;\n        color: #d2d2d7;\n        vertical-align: middle;\n}\n.zhkf .filter-header .filter-item .filter-desc img[data-v-8decb152] {\n        width: 10px;\n        height: 10px;\n}\n.zhkf .filter-header .filter-item:first-child .filter-desc[data-v-8decb152] {\n      border-left: 0;\n}\n.zhkf .filter-header .filter-item__active[data-v-8decb152] {\n    color: #0085ff;\n}\n.zhkf .filter-header .filter-item__active .filter-desc .icon-hebingxingzhuang1[data-v-8decb152],\n    .zhkf .filter-header .filter-item__active .filter-desc .icon-hebingxingzhuang[data-v-8decb152] {\n      color: #0085ff;\n}\n.zhkf .filter-content[data-v-8decb152] {\n  width: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.35);\n  z-index: 9990;\n}\n.zhkf .filter-content .filter-list[data-v-8decb152] {\n    background: #fff;\n    max-height: 320px;\n    overflow: scroll;\n}\n.zhkf .filter-content .filter-list .filter-cell[data-v-8decb152] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      height: 50px;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding-left: 38px;\n      padding-right: 15px;\n      font-size: 15px;\n      color: #303030;\n}\n.zhkf .filter-content .filter-list .filter-cell[data-v-8decb152]:last-child {\n        border-bottom: 0;\n}\n.zhkf .filter-content .filter-list .icon-checked[data-v-8decb152] {\n      display: none;\n}\n.zhkf .filter-content .filter-list .filter-cell__active[data-v-8decb152] {\n      position: relative;\n      color: #0085ff;\n}\n.zhkf .filter-content .filter-list .filter-cell__active .icon-checked[data-v-8decb152] {\n        display: inline-block;\n        position: absolute;\n        width: 13px;\n        left: 15px;\n}\n",""])},f093:function(e,t,n){e.exports=n.p+"img/label_delivery.5ed8949e.png"},fe97:function(e,t,n){"use strict";n("163d");var r=n("1834"),i=n("fd50"),o=n("a14a"),a=n.n(o),c=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];n.length>0?console.log("[repositories]/construction-repostory.js：",e,n):console.log("[repositories]/construction-repostory.js：",e)},l=function(e,t){var n="select leader_id as id from project_contractor pc where pc.proj_id = ? and pc.contractor_id = ? ";return r["a"].queryOne(n,[e,t])},s=function(e,t){var n='select distinct cc.id contractor_id,cc.name contractor_name from checkroom_problem cr join project_contractor pc on pc.proj_id=cr.proj_id join contractor cc on pc.contractor_id=cc.id where cr.id = ? and cc.name like "%" || ? || "%" order by cc.sort';return r["a"].query(n,[e,t])},d=function(e,t,n,o){a.a.isArray(e)&&(e=e.join("','"));var c="update checkroom_problem set contractor_id = ?, responsible_company_id = ? where id in ('"+e+"')";return r["a"].executeSql(c,[t,t]).then((function(t){var n="select id, batch_unit_id, batch_room_id, batch_id from checkroom_problem where id in ('"+e+"')";return r["a"].query(n).then((function(){return i["a"].resolve(!0)})).catch((function(e){return i["a"].reject(e)}))}))},u=function(e){var t="select distinct cc.id contractor_id,cc.name contractor_name from batch_room br join checkroom_batch cb on br.batch_id=cb.batch_id join project_contractor pc on pc.proj_id=cb.project_id join contractor cc on pc.contractor_id=cc.id where br.id = ? order by cc.sort";return r["a"].query(t,[e])},f=function(e,t,n){var i,o=null,a="";return i="select building_id,unit,floor,room_id,is_virtual from batch_room where id = ?",r["a"].queryOne(i,[e]).then((function(l){if(!l)throw new Error("未找到当前房间."+e);if(!l.building_id)throw new Error("未找到当前房间的楼栋."+e);return o=l,a=1===Number(o.is_virtual)?"公区":"标准房间",i='select range.contractor_id, contractor.name contractor_name            from construction_range range           inner join contractor on range.contractor_id = contractor.id           where ( range.desc_id = ? or ( range.item_id = ? and (desc_id = "" or desc_id is null) ) )           and range.building_id = ?           and  range.room_id = ?            order by desc_id desc ',c("1. 寻找匹配的承建商 - _getContractor","modeCondition=".concat(a),"check_item_id=".concat(t),"check_desc_id=".concat(n),"rangeInfo",o),r["a"].queryOne(i,[n,t,o.building_id,o.room_id])})).then((function(e){return e||(c("2. 指定房间没找到，查找楼层范围"),i='select range.contractor_id, contractor.name contractor_name              from construction_range range             inner join contractor on range.contractor_id = contractor.id             where ( range.desc_id = ? or ( range.item_id = ? and (desc_id = "" or desc_id is null) ) )             and range.building_id = ?             and range.unit = ?             and range.floor = ?             and mode in ("全部", ? )             and (range.room_id = "" or range.room_id is null)             order by (CASE mode WHEN "指定房间" THEN 1 WHEN "全部" THEN 3 ELSE 2 END), range.desc_id desc ',r["a"].queryOne(i,[n,t,o.building_id,o.unit,o.floor,a]))})).then((function(e){return e||(c("3. 楼层范围没找到，查找单元范围"),i='select range.contractor_id,contractor.name contractor_name              from construction_range range             inner join contractor on range.contractor_id = contractor.id             where ( range.desc_id = ? or ( range.item_id = ? and (desc_id = "" or desc_id is null) ) )             and range.building_id = ?             and range.unit = ?             and mode in ("全部", ? )             and (range.floor = "" or range.floor is null)             and (range.room_id = "" or range.room_id is null)             order by (CASE mode WHEN "指定房间" THEN 1 WHEN "全部" THEN 3 ELSE 2 END), range.desc_id desc ',r["a"].queryOne(i,[n,t,o.building_id,o.unit,a]))})).then((function(e){return e||(c("4. 单元范围没找到，查找楼栋范围"),i='select range.contractor_id,contractor.name contractor_name              from construction_range range             inner join contractor on range.contractor_id = contractor.id             where ( range.desc_id = ? or ( range.item_id = ? and (desc_id = "" or desc_id is null) ) )             and range.building_id = ?             and mode in ("全部", ?)              and (range.unit = "" or range.unit is null)             and (range.floor = "" or range.floor is null)             and (range.room_id = "" or range.room_id is null)             order by (CASE mode WHEN "指定房间" THEN 1 WHEN "全部" THEN 3 ELSE 2 END), range.desc_id desc ',r["a"].queryOne(i,[n,t,o.building_id,a]))})).then((function(e){return c("- 检查项/问题描述自动匹配的承建商：",e),e}))};t["a"]={getContractor:f,getProjectContractor:u,getProjectContractorList:s,changeConstruction:d,getProjectContractorLeaderId:l,getContractorByIds:function(e){a.a.isArray(e)&&(e=e.join("','"));var t="select id, name  from contractor  where id in ('".concat(e,"')  order by sort");return r["a"].query(t)}}}}]);