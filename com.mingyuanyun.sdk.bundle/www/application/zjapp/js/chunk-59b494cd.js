(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-59b494cd"],{1304:function(t,e,n){"use strict";var a=n("c5a7");e.__esModule=!0,e.SlotsMixin=void 0;var i=a(n("329b")).default.extend({methods:{slots:function(t,e){void 0===t&&(t="default");var n=this.$slots,a=this.$scopedSlots[t];return a?a(e):n[t]}}});e.SlotsMixin=i},2064:function(t,e,n){"use strict";e.__esModule=!0,e.addUnit=function(t){if(!(0,a.isDef)(t))return;return t=String(t),(0,i.isNumber)(t)?t+"px":t};var a=n("b7b4"),i=n("f24f")},"27c4":function(t,e,n){var a=n("db6b2");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("85cb").default)("42e360af",a,!0,{sourceMap:!1,shadowMode:!1})},3050:function(t,e,n){"use strict";e.__esModule=!0,e.default=void 0;e.default={name:"姓名",tel:"电话",save:"保存",confirm:"确认",cancel:"取消",delete:"删除",complete:"完成",loading:"加载中...",telEmpty:"请填写电话",nameEmpty:"请填写姓名",confirmDelete:"确定要删除么",telInvalid:"请填写正确的电话",vanContactCard:{addText:"添加联系人"},vanContactList:{addText:"新建联系人"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计："},vanCoupon:{valid:"有效期",unlimited:"无使用门槛",discount:function(t){return t+"折"},condition:function(t){return"满"+t+"元可用"}},vanCouponCell:{title:"优惠券",tips:"使用优惠",count:function(t){return t+"张可用"}},vanCouponList:{empty:"暂无优惠券",exchange:"兑换",close:"不使用优惠",enable:"可使用优惠券",disabled:"不可使用优惠券",placeholder:"请输入优惠码"},vanAddressEdit:{area:"地区",postal:"邮政编码",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",postalEmpty:"邮政编码格式不正确",defaultAddress:"设为默认收货地址",telPlaceholder:"收货人手机号",namePlaceholder:"收货人姓名",areaPlaceholder:"选择省 / 市 / 区"},vanAddressEditDetail:{label:"详细地址",placeholder:"街道门牌、楼层房间号等信息"},vanAddressList:{add:"新增地址"}}},"43b6":function(t,e,n){"use strict";n.r(e);n("cc57"),n("163d");var a=n("774b"),i=n("6718"),r=n("07d2"),o=n("9eea"),s=n("e2a7"),l=(n("1b7e"),n("162a"),n("4603")),c=n("f97c"),u=n("3bd5"),d=n("7b81"),p={name:"MaterialTraceability",components:{Scroller:a.a,SwipeTabs:i.b,SwipeTab:i.a,Item:r.a,appSearchBar:o.a},data:function(){return{tabIndex:0,isRole33:!1,all:{list:[],page:1,hasNext:!1,isLoading:!1,emptyTips:"暂无材料溯源记录",keyword:"",total:null},upcoming:{list:[],page:1,hasNext:!1,isLoading:!1,emptyTips:"暂无材料溯源记录",keyword:"",total:null},pageSize:15}},computed:{proj_id:function(){return c.a.getDefaultProject().id},tab:function(){return this.tabIndex?"upcoming":"all"},addHide:function(){return!0},tabsWidth:function(){return window.innerWidth/2},appSearchRefs:function(){var t="all"===this.tab?"app-search-bar-all":"app-search-bar-upcoming";return this.$refs[t]}},activated:function(){this.init(),this.getList(),this.getList(this.tabIndex?0:1)},methods:{init:function(){this.all={list:[],page:1,hasNext:!1,isLoading:!1,emptyTips:"暂无材料溯源记录",keyword:"",total:null},this.upcoming={list:[],page:1,hasNext:!1,isLoading:!1,emptyTips:"暂无材料溯源记录",keyword:"",total:null},this[this.tab].isLoading=!0,this.$refs["app-search-bar-all"].cancelSearching(),this.$refs["app-search-bar-upcoming"].cancelSearching(),this.isRole()},getList:function(t){var e=this[this.tab];return t||0===t?e=this[t?"upcoming":"all"]:t=this.tabIndex,l.a.getIndexList({proj_id:this.proj_id,page:e.page,page_size:this.pageSize,keyword:e.keyword,type:t+1}).then((function(t){1===e.page?e.list=t.items:e.list=e.list.concat(t.items),e.total=Number(t.total)||0,e.hasNext=Number(t.total)>e.list.length})).catch((function(t){"no network"===t?(e.emptyTips="当前无网络连接",1!==e.page&&s.a.alert("当前无网络连接")):e.emptyTips="暂无数据"})).finally((function(){e.isLoading=!1}))},addGo:function(){this.$router.push({name:"MaterialTraceabilityAddTask"})},isRole:function(){var t=this;d.a.hasRoles(u.a.getUser().user_id,33).then((function(e){t.isRole33=Boolean(e)}))},detailGo:function(t){this.appSearchRefs&&this.appSearchRefs.saveHistory(),this.$router.push({name:"MaterialTraceabilityDetail",query:{id:t.id,title:t.name}})},expandList:function(){var t=this[this.tab];if(t.hasNext)return t.page=t.page+1,this.getList()},onRefresh:function(){return this[this.tab].page=1,this.getList()},swipeTabChange:function(){var t=this[this.tab];t.list&&!t.list.length&&(t.isLoading=!0,this.getList())},search:function(){var t=this[this.tab];t.page=1,t.list=[],t.isLoading=!0,this.getList()}}},f=(n("6486"),n("17cc")),h=Object(f.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page-content",{staticClass:"material-traceability",attrs:{title:"材料溯源"}},[t.addHide?n("div",{directives:[{name:"show",rawName:"v-show",value:t.isRole33,expression:"isRole33"}],staticClass:"header-btn",attrs:{slot:"header-bar-right"},on:{click:t.addGo},slot:"header-bar-right"},[t._v("\n    新建\n  ")]):t._e(),n("swipe-tabs",{attrs:{color:"#4275e8","title-active-color":"#4275e8","line-width":t.tabsWidth},on:{change:t.swipeTabChange},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[n("swipe-tab",{attrs:{title:"全部 "+(null!==t.all.total?"("+t.all.total+")":"")}},[n("app-search-bar",{ref:"app-search-bar-all",staticClass:"bg-white",attrs:{placeholder:"搜索","history-key":"MaterialTraceabilityAll"},on:{input:t.search},model:{value:t.all.keyword,callback:function(e){t.$set(t.all,"keyword",e)},expression:"all.keyword"}}),n("scroller",{attrs:{"has-next":t.all.hasNext,"is-empty":!t.all.list.length},on:{loadNext:t.expandList}},[t._l(t.all.list,(function(e,a){return n("van-cell",{key:a,staticClass:"list-cell",attrs:{label:"创建时间："+e.created_on,"title-class":"cell-title","label-class":"cell-label","is-link":""},on:{click:function(n){t.detailGo(e)}}},[n("div",{attrs:{slot:"title"},slot:"title"},[e.has_todo?n("span",{staticClass:"list-celll_red"}):t._e(),t._v(t._s(e.name)+"\n          ")])])})),t.all.isLoading||!t.all.isLoading&&!t.all.list.length?n("loading-status",{attrs:{"is-loading":t.all.isLoading,"is-empty":!t.all.isLoading&&!t.all.list.length,"empty-text":""}},[n("div",{staticClass:"empty-content",attrs:{slot:"empty-content"},slot:"empty-content"},[t.all.keyword?n("span",[t._v("未搜索到包含"),n("span",{staticClass:"mark"},[t._v(t._s(t.all.keyword))]),t._v("的结果")]):n("span",[t._v(t._s(t.all.emptyTips))])])]):t._e()],2)],1),n("swipe-tab",{attrs:{title:"待处理 "+(null!==t.upcoming.total?"("+t.upcoming.total+")":"")}},[n("app-search-bar",{ref:"app-search-bar-upcoming",staticClass:"bg-white",attrs:{placeholder:"搜索","history-key":"MaterialTraceabilityUpcoming"},on:{input:t.search},model:{value:t.upcoming.keyword,callback:function(e){t.$set(t.upcoming,"keyword",e)},expression:"upcoming.keyword"}}),n("scroller",{attrs:{"has-next":t.upcoming.hasNext,"is-empty":!t.upcoming.list.length},on:{loadNext:t.expandList}},[t._l(t.upcoming.list,(function(e,a){return n("van-cell",{key:a,staticClass:"list-cell",attrs:{title:e.name,label:"创建时间："+e.created_on,"title-class":"cell-title","label-class":"cell-label","is-link":""},on:{click:function(n){t.detailGo(e)}}},[n("div",{attrs:{slot:"title"},slot:"title"},[e.has_todo?n("span",{staticClass:"list-celll_red"}):t._e(),t._v(t._s(e.name)+"\n          ")])])})),t.upcoming.isLoading||!t.upcoming.isLoading&&!t.upcoming.list.length?n("loading-status",{attrs:{"is-loading":t.upcoming.isLoading,"is-empty":!t.upcoming.isLoading&&!t.upcoming.list.length,"empty-text":""}},[n("div",{staticClass:"empty-content",attrs:{slot:"empty-content"},slot:"empty-content"},[t.upcoming.keyword?n("span",[t._v("未搜索到包含"),n("span",{staticClass:"mark"},[t._v(t._s(t.upcoming.keyword))]),t._v("的结果")]):n("span",[t._v(t._s(t.upcoming.emptyTips))])])]):t._e()],2)],1)],1)],1)}),[],!1,null,"0eb9f2d7",null);e.default=h.exports},4412:function(t,e,n){"use strict";e.__esModule=!0,e.createBEM=function(t){return function(e,n){return e&&"string"!=typeof e&&(n=e,e=""),e=a(t,e,"__"),n?[e,i(e,n)]:e}};function a(t,e,n){return e?t+n+e:t}function i(t,e){if("string"==typeof e)return a(t,e,"--");if(Array.isArray(e))return e.map((function(e){return i(t,e)}));var n={};return e&&Object.keys(e).forEach((function(a){n[t+"--"+a]=e[a]})),n}},4603:function(t,e,n){"use strict";(function(t){n("163d"),n("cc57"),n("6d57"),n("06a2");var a=n("1b7e"),i=n("e2a7"),r=n("6bf2"),o=n.n(r),s=n("3122"),l=n("162a"),c=n("3bd5"),u=n("9094");function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm";return t.isEmpty(e)?"":o()(e).format(n)}function p(){return a.a.getHasNetwork().then((function(t){if(!t)return i.a.alert("当前无网络"),Promise.reject("no network")}))}function f(t){try{return t&&"string"==typeof t?JSON.parse(t):t}catch(e){return t}}function h(e){var n=[];return t.each(e,(function(t){!t.url&&t.temp?n.push(s.a.uploadImage(t.temp).then((function(e){t.url=e,delete t.temp}))):delete t.temp,!t.videoUrl&&t.videoTemp?n.push(s.a.uploadImage(t.videoTemp).then((function(e){t.videoUrl=e,delete t.videoTemp}))):delete t.videoTemp})),Promise.all(n).then((function(){return e}))}var m={getSectionList:function(t){return l.a.request("/online/common/get-bidsection-list-of-project",{proj_id:t}).catch((function(t){return $log.error("获取标段列表-error：",t),Promise.reject(t)}))},getMaterialList:function(){return Object(u.c)().catch((function(t){return $log.error("获取标段下材料列表-error：",t),Promise.reject(t)}))},getBrandList:function(t){return l.a.request("/online/common/get-brand-list-of-material",{material_id:t}).catch((function(t){return $log.error("获取材料下品牌列表-error：",t),Promise.reject(t)}))},getContractorList:function(t){return Object(u.b)({proj_id:t}).catch((function(t){return $log.error("获取标段下供应商列表-error：",t),Promise.reject(t)}))},getContractorUsersList:function(t){return l.a.request("/online/common/get-users-of-contractor",{contractor_id:t}).then((function(t){return(t||[]).map((function(t){return t.head_portrait=function(t,e){try{return t?s.a.getThumbnailFromUrl(t):"image"===e?"static/photo-default.png":"static/default_img_simple.png"}catch(t){return"image"===e?"static/photo-default.png":"static/default_img_simple.png"}}(t.headimg_url,"avater"),t}))})).catch((function(t){return $log.error("获取供应商下用户-error：",t),Promise.reject(t)}))},postSubmitTask:function(t){return i.a.loading("正在提交..."),p().then((function(){var e={proj_id:t.proj_id,name:t.name,material_id:t.materialId,brand_id:t.brandId,contractor_id:t.contractorId,agent_user_id:t.contractorUsersId,place:t.place,remark:t.remark};return t.id&&(e.id=t.id),$log.log("材料溯源-提交任务-数据：",e),l.a.post("/online/material-traceability/save-task",null,e).then((function(t){return i.a.hideLoading(),i.a.alert("提交成功"),t})).catch((function(t){return i.a.hideLoading(),i.a.alert(t.errmsg),Promise.reject(t)}))})).catch((function(t){return $log.error("材料溯源-提交任务-error：",t),Promise.reject(t)}))},getIndexList:function(t){return p().then((function(){return l.a.request("/online/material-traceability/task-list",t).then((function(t){return t.items=(t.items||[]).map((function(t){return t.created_on=d(t.created_on,"YYYY-MM-DD"),t})),t}))})).catch((function(t){return $log.error("材料溯源-列表-error：",t),Promise.reject(t)}))},getTaskDetail:function(t){return p().then((function(){return l.a.request("/online/material-traceability/get-task-detail",{id:t})})).then((function(t){return t?{id:t.id,can_change_user:t.can_change_user,created_by_name:t.created_by_name,can_edit:t.can_edit,section:{id:t.bidsection_id,name:t.bidsection_name},material:{id:t.material_id,name:t.material_name},brand:{id:t.brand_id,name:t.brand_name},contractor:{id:t.contractor_id,name:t.contractor_name},contractorUsers:{id:t.agent_user_id,name:t.agent_user_name},place:t.place,remark:t.remark,name:t.name}:Promise.reject(t.errmsg)})).catch((function(t){return $log.error("材料溯源-任务详情-error：",t),Promise.reject(t)}))},getTraceabilityDetail:function(e){return p().then((function(){return l.a.request("/online/material-traceability/get-trace-detail",{id:e}).then((function(e){if(!e)return Promise.reject(e.errmsg);e.task&&(e.task.basic_info=f(e.task.basic_info),e.task.composition=f(e.task.composition)),e.supply&&(e.supply.images=f(e.supply.images),e.supply.basic_info=f(e.supply.basic_info),e.supply.composition=f(e.supply.composition)),e.status=Number(e.status);var n=e.task,a=void 0===n?{}:n,i=e.supply,r=void 0===i?{}:i,o=e.raw_supply,s=void 0===o?{}:o;a=a||{},r=r||{},s=s||[];var l=t.isEmpty(r.basic_info)?(a.basic_info||[]).map((function(t){return{name:t,value:""}})):r.basic_info,u=t.isEmpty(r.composition)?(a.composition||[]).map((function(t){return{name:t,value:""}})):r.composition,p=t.isEmpty(s)?[]:(s||[]).map((function(t){return{id:t.id,can_change_user:t.can_change_user,information:{id:t.contractor_id,name:t.contractor_name,formCheck:!1},informationBy:{id:t.agent_user_id,name:t.agent_user_name,formCheck:!1}}})),h={basic:l,composition:u,image_file:r.images||[],material_information:p,proj_id:a.proj_id,contractor:r.contractor_name,contractorBy:r.agent_user_name},m=s.filter((function(t){return t.agent_user_id===c.a.getUser().user_id}))[0]||{},g=t.isEmpty(m.raw_material_info)?[{name:"",remark:"",image_file:[]}]:f(m.raw_material_info||[{name:"",remark:"",image_file:[]}]);return{traceability1:h,traceability2:{id:m.id,material:m.contractor_name,materialBy:m.agent_user_name,remark:a.guideline,materialList:g},traceability3:{material:{basic:r.basic_info||[],product:r.composition||[],submit_time:d(r.submit_time,"YYYY-MM-DD"),annotate:"".concat(r.agent_user_name," - ").concat(r.contractor_name),image_file:r.images||[],can_edit:r.can_edit},rawMaterial:s.filter((function(t){return 0===Number(t.is_system_created)})).map((function(t){return t.annotate="".concat(t.agent_user_name," - ").concat(t.contractor_name),t.submit_time=d(t.submit_time,"YYYY-MM-DD"),t.raw_material_info=f(t.raw_material_info||"[]"),t}))},status:e.status,title:a.name}}))})).catch((function(t){return $log.error("材料溯源-任务详情-error：",t),Promise.reject(t)}))},postSaveTraceabilitySupplier:function(t){return i.a.loading("正在提交..."),p().then((function(){return h(t.image_file).then((function(e){t.image_file=e})).then((function(){var e={task_id:t.id,basic_info:JSON.stringify(t.basic),composition:JSON.stringify(t.composition),images:JSON.stringify(t.image_file),raw_supply:JSON.stringify(t.material_information),proj_id:t.proj_id};return l.a.post("/online/material-traceability/save-supply-data",null,e).then((function(t){return i.a.hideLoading(),i.a.alert("提交成功"),t})).catch((function(t){return i.a.hideLoading(),i.a.alert(t.errmsg),Promise.reject(t)}))}))})).catch((function(t){return $log.error("材料溯源-供应商数据-error：",t),Promise.reject(t)}))},postSaveRawMaterial:function(e){return i.a.loading("正在提交..."),p().then((function(){var n=[];return t.each(e.materialList,(function(t){var e=h(t.image_file).then((function(e){t.image_file=e}));n.push(e)})),Promise.all(n).then((function(){var t={id:e.id,raw_material_info:JSON.stringify(e.materialList)};return l.a.post("/online/material-traceability/save-raw-supply-data",null,t).then((function(t){return i.a.hideLoading(),i.a.alert("提交成功"),t})).catch((function(t){return i.a.hideLoading(),i.a.alert(t.errmsg),Promise.reject(t)}))}))})).catch((function(t){return $log.error("材料溯源-原材商保存-error：",t),Promise.reject(t)}))},getInfluencesList:function(t,e){return p().then((function(){var n={process:"get-process-list",accept:"get-accept-list",assemble:"get-assemble-list"}[e];return $log.log("材料溯源-加工出厂等列表-参数：",t,n),l.a.request("/online/material-traceability/".concat(n),t).then((function(t){return t&&t.items?(t.items=t.items.map((function(t){return t.created_info=[{id:t.user_id,name:t.user_name}],t.created_on=d(t.created_on),t.images=f(t.images||"[]"),t})),t):Promise.reject(t.errmsg)}))})).catch((function(t){return $log.error("材料溯源-加工出厂等列表-error：",t),Promise.reject(t)}))},postSaveInfluences:function(t,e){return i.a.loading("正在提交..."),p().then((function(){return h(t.images).then((function(e){t.images=e})).then((function(){var n={task_id:t.task_id,proj_id:t.proj_id,images:JSON.stringify(t.images),remark:t.remark};t.id&&(n.id=t.id);var a={process:"save-process-data",accept:"save-accept-data",assemble:"save-assemble-data"}[e];return l.a.post("/online/material-traceability/".concat(a),null,n).then((function(t){return i.a.hideLoading(),i.a.alert("提交成功"),t})).catch((function(t){return i.a.hideLoading(),i.a.alert(t.errmsg),Promise.reject(t)}))}))})).catch((function(t){return $log.error("材料溯源-加工出厂、进场验收、安装的保存-error：",t),Promise.reject(t)}))},postDelelteTask:function(t){return i.a.loading("正在提交..."),p().then((function(){return $log.log("材料溯源-删除任务-参数：",t),l.a.post("/online/material-traceability/delete-task",null,{id:t}).then((function(t){return i.a.hideLoading(),i.a.alert("删除成功"),t})).catch((function(t){return i.a.hideLoading(),i.a.alert(t.errmsg),Promise.reject(t)}))})).catch((function(t){return $log.error("材料溯源-删除任务-error：",t),Promise.reject(t)}))}};e.a=m}).call(this,n("391c"))},"4d1b":function(t,e,n){"use strict";var a=n("c5a7");e.__esModule=!0,e.default=void 0;var i=a(n("329b")),r=n("53a5"),o=a(n("3050")),s=i.default.prototype,l=i.default.util.defineReactive;l(s,"$vantLang","zh-CN"),l(s,"$vantMessages",{"zh-CN":o.default});var c={messages:function(){return s.$vantMessages[s.$vantLang]},use:function(t,e){var n;s.$vantLang=t,this.add(((n={})[t]=e,n))},add:function(t){void 0===t&&(t={}),(0,r.deepAssign)(s.$vantMessages,t)}};e.default=c},"53a5":function(t,e,n){"use strict";e.__esModule=!0,e.deepAssign=r;var a=n("b7b4"),i=Object.prototype.hasOwnProperty;function r(t,e){return Object.keys(e).forEach((function(n){!function(t,e,n){var o=e[n];(0,a.isDef)(o)&&(i.call(t,n)&&(0,a.isObj)(o)&&"function"!=typeof o?t[n]=r(Object(t[n]),e[n]):t[n]=o)}(t,e,n)})),t}},6147:function(t,e,n){"use strict";e.__esModule=!0,e.createNamespace=function(t){return t="van-"+t,[(0,i.createComponent)(t),(0,a.createBEM)(t),(0,r.createI18N)(t)]};var a=n("4412"),i=n("7e06"),r=n("65af")},6486:function(t,e,n){"use strict";n("af0b")},"65af":function(t,e,n){"use strict";var a=n("c5a7");e.__esModule=!0,e.createI18N=function(t){var e=(0,r.camelize)(t)+".";return function(t){for(var n=(0,i.get)(o.default.messages(),e+t)||(0,i.get)(o.default.messages(),t),a=arguments.length,r=new Array(a>1?a-1:0),s=1;s<a;s++)r[s-1]=arguments[s];return"function"==typeof n?n.apply(void 0,r):n}};var i=n("b7b4"),r=n("a1aa"),o=a(n("4d1b"))},6718:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("163d"),n("cc57");var a=n("b7b4"),i={name:"SwipeTab",props:{title:{type:String}},data:function(){return{offset:0,style:{},bem:Object(a.createNamespace)("swipe-item")[1](),parent:{}}},computed:{index:function(){return this.parent.tabs.indexOf(this)}},beforeCreate:function(){this.$parent.swipes.push(this)},created:function(){this.findParent("SwipeTabs")},destroyed:function(){this.$parent.swipes.splice(this.$parent.swipes.indexOf(this),1)},mounted:function(){var t=this,e=this.parent.tabs,n=this.parent.$slots.default.indexOf(this.$vnode);e.splice(-1===n?e.length:n,0,this),this.$nextTick((function(){var e=t.$parent,n=e.vertical,a=e.computedWidth,i=e.computedHeight;t.style={width:a+"px",height:n?a+"px":i+"px",transform:"translate".concat(n?"Y":"X","(").concat(t.offset,"px)")}}))},methods:{findParent:function(t){for(var e=this.$parent;e;){if(e.$options.name===t){this.parent=e;break}e=e.$parent}}}},r=n("17cc"),o=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",this._g({class:this.bem,style:this.style},this.$listeners),[this._t("default")],2)}),[],!1,null,null,null).exports,s={name:"SwipeTabs",model:{prop:"tabIndex",event:"change"},props:{tabIndex:{type:Number,default:0},markType:{type:String,default:"line"},showTabs:{type:Boolean,default:!0},touchable:{type:Boolean,default:!0}},data:function(){return{curIndex:0,initIndex:0,tabs:[],tabScrollVersion:null}},computed:{tabsPadding:function(){return Math.max(24-4*this.tabs.length,0)},markLeft:function(){var t=(100-2*this.tabsPadding)/this.tabs.length;return this.tabsPadding+(this.curIndex+.5)*t}},watch:{tabIndex:function(t){t!==this.curIndex&&(this.curIndex=t,this.$refs.swipe.swipeTo(t,{immediate:!0}))},curIndex:function(){this.scrollTabsTocurrent()}},created:function(){this.initIndex=this.tabIndex,this.curIndex=this.tabIndex},activated:function(){this.initIndex=this.tabIndex,this.curIndex=this.tabIndex},mounted:function(){this.$nextTick(this.scrollTabsTocurrent)},methods:{changeIndex:function(t){this.$refs.swipe.swipeTo(t)},onChange:function(t){this.curIndex=t,this.$emit("change",t)},scrollTabsTocurrent:function(){var t=this.$refs["tabs-scroll"],e=this.$refs["tab-point"]?this.$refs["tab-point"][this.curIndex]:null;if(t&&e){var n=t.getBoundingClientRect(),a=e.getBoundingClientRect(),i=a.left-n.left,r=n.right-a.right;i<0&&this.tabScrollBy(i),r<0&&this.tabScrollBy(-r)}},tabScrollBy:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,a=this.$refs["tabs-scroll"];if(a){var i=a.scrollLeft,r=i+t,o=Math.round(n/16.7),s=t/o,l=i,c=this.tabScrollVersion=+new Date;return i===r?Promise.resolve():new Promise((function(t){!function n(){window.requestAnimationFrame((function(){c===e.tabScrollVersion&&(l+=s,a.scrollLeft=l,i<r&&l<r||i>r&&l>r?n():(a.scrollTop=r,t()))}))}()}))}}}},l=(n("bcf4"),Object(r.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swipe-tabs"},[t.showTabs?["line"===t.markType?n("div",{staticClass:"tabs border-bottom",style:{padding:"0 "+Math.max(24-4*t.tabs.length,0)+"%"}},[t._l(t.tabs,(function(e){return n("div",{key:e.index,staticClass:"tab",class:{"tab-current":e.index===t.curIndex},on:{click:function(n){t.changeIndex(e.index)}}},[t._v("\n        "+t._s(e.title)+"\n      ")])})),n("div",{staticClass:"mark-line",style:{left:t.markLeft+"%"}})],2):t._e(),"point"===t.markType?n("div",{staticClass:"tabs-point border-bottom"},[n("div",{ref:"tabs-scroll",staticClass:"tabs-scroll"},t._l(t.tabs,(function(e){return n("div",{key:e.index,ref:"tab-point",refInFor:!0,staticClass:"tab-point",class:{"tab-current":e.index===t.curIndex},on:{click:function(n){t.changeIndex(e.index)}}},[t._v("\n          "+t._s(e.title)+"\n        ")])})))]):t._e()]:t._e(),t._t("fixed"),n("van-swipe",{ref:"swipe",attrs:{"initial-swipe":t.initIndex,"show-indicators":!1,duration:250,loop:!1,touchable:t.touchable},on:{change:t.onChange}},[t._t("default")],2)],2)}),[],!1,null,"025feb99",null));e.b=l.exports},"774b":function(t,e,n){"use strict";var a=n("d18d").a,i=(n("b225"),n("17cc")),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"scroll-warp",staticClass:"scroll-warp",class:{"scroll-warp-pulling":t.pulling,"scroll-warp-complete":!t.hasNext&&!t.isEmpty,"scroll-warp-empty":t.isEmpty},style:{"padding-bottom":t.numberKeyboardCoverHeight+"px"},on:{scroll:t.onScroll,touchstart:t.onTouchstart,touchmove:t.onTouchmove,touchend:t.onTouchend}},[t.allowPullDown?n("div",{staticClass:"pull-refresh-warp",style:{height:t.pullDist+"px"}},[n("div",{staticClass:"pull-refresh"},[n("div",{staticClass:"animation-refresher",class:{refreshing:t.refreshing}}),t.updateTime?n("p",{staticClass:"pull-refresh-date"},[t._v("最后成功同步："+t._s(t.updateTime))]):t._e()])]):t._e(),t._t("default"),t.loading?n("div",{staticClass:"page-loading"},[n("svg",{staticClass:"svg-loading",attrs:{viewBox:"0 0 80 80"}},[n("circle",{attrs:{cx:"40",cy:"40",r:"36"}})])]):t._e(),t.hasNext||t.isEmpty?t._e():[t.$slots.end?t._t("end"):t._e(),!t.$slots.end&&t.endText?n("div",{staticClass:"end-text"},[t._v("\n      "+t._s(t.endText)+"\n    ")]):t._e()]],2)}),[],!1,null,"2b1a346c",null);e.a=r.exports},"7e06":function(t,e,n){"use strict";var a=n("c5a7");e.__esModule=!0,e.unifySlots=s,e.createComponent=function(t){return function(e){var n;return"function"==typeof e&&(e={functional:!0,props:(n=e).props,model:n.model,render:function(t,e){return n(t,e.props,s(e),e)}}),e.functional||(e.mixins=e.mixins||[],e.mixins.push(r.SlotsMixin)),e.name=t,e.install=o,e}},n("4d1b");var i=n("a1aa"),r=n("1304");a(n("329b"));function o(t){var e=this.name;t.component(e,this),t.component((0,i.camelize)("-"+e),this)}function s(t){var e=t.scopedSlots||t.data.scopedSlots||{},n=t.slots();return Object.keys(n).forEach((function(t){e[t]||(e[t]=function(){return n[t]})})),e}},9094:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return l}));var a=n("5e8d"),i=n("da71"),r=n("162a");function o(){return Object(a.a)().then((function(){var t=i.a.materialList.url;return r.a.request(t)}))}function s(t){return Object(a.a)().then((function(){var e=i.a.contractorListByProject.url;return r.a.request(e,t)}))}function l(t){return Object(a.a)().then((function(){var e=i.a.getContractList.url;return r.a.request(e,t)}))}},"9d55":function(t,e,n){(t.exports=n("690e")(!1)).push([t.i,'.zjapp .scroll-warp[data-v-2b1a346c]{flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.zjapp .scroll-warp-pulling[data-v-2b1a346c]{overflow:hidden}.zjapp .scroll-warp-complete[data-v-2b1a346c]:after{content:"";display:block;height:100px}.zjapp .scroll-warp-empty[data-v-2b1a346c]{display:flex;flex-direction:column}.zjapp .pull-refresh-warp[data-v-2b1a346c]{position:relative;height:0;overflow:hidden}.zjapp .pull-refresh[data-v-2b1a346c]{position:absolute;left:0;bottom:0;height:70px;width:100%;padding:6px;text-align:center}.zjapp .pull-refresh-date[data-v-2b1a346c]{margin-top:4px;height:16px;line-height:16px;font-size:12px;color:#bcbcbc}.zjapp .page-loading[data-v-2b1a346c]{padding:10px;text-align:center}.zjapp .end-text[data-v-2b1a346c]{color:#c8c8c8;background:#f4f4f4;position:relative;line-height:76px;height:76px;text-align:center}.zjapp .end-text[data-v-2b1a346c]:after,.zjapp .end-text[data-v-2b1a346c]:before{content:"";position:absolute;width:48px;height:1px;background:#e4e4e4;top:50%;margin-top:-1px}.zjapp .end-text[data-v-2b1a346c]:after{left:50%;transform:translateX(-92px)}.zjapp .end-text[data-v-2b1a346c]:before{right:50%;transform:translateX(90px)}.zjapp .end-slot[data-v-2b1a346c]{padding:30px;line-height:18px;text-align:center;color:#c8c8c8}',""])},a1aa:function(t,e,n){"use strict";e.__esModule=!0,e.camelize=function(t){return t.replace(a,(function(t,e){return e.toUpperCase()}))},e.padZero=function(t,e){void 0===e&&(e=2);var n=t+"";for(;n.length<e;)n="0"+n;return n};var a=/-(\w)/g},af0b:function(t,e,n){var a=n("bbf7");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("85cb").default)("6d081ab4",a,!0,{sourceMap:!1,shadowMode:!1})},b225:function(t,e,n){"use strict";n("ef48")},b7b4:function(t,e,n){"use strict";var a=n("c5a7");e.__esModule=!0,e.noop=function(){},e.isDef=l,e.isObj=function(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)},e.get=function(t,e){var n=e.split("."),a=t;return n.forEach((function(t){a=l(a[t])?a[t]:""})),a},e.isServer=e.addUnit=e.createNamespace=void 0;var i=a(n("329b")),r=n("6147");e.createNamespace=r.createNamespace;var o=n("2064");e.addUnit=o.addUnit;var s=i.default.prototype.$isServer;function l(t){return null!=t}e.isServer=s},bbf7:function(t,e,n){(t.exports=n("690e")(!1)).push([t.i,".zjapp .material-traceability .list-cell[data-v-0eb9f2d7]{padding:14px 15px}.zjapp .material-traceability .list-cell .cell-title[data-v-0eb9f2d7]{font-size:16px;line-height:23px;color:#333}.zjapp .material-traceability .list-cell .cell-label[data-v-0eb9f2d7]{margin-top:6px;color:#999}.zjapp .material-traceability .list-celll_red[data-v-0eb9f2d7]{width:12px;height:12px;display:inline-block;margin-right:5px;background:#ff3c46;border-radius:50%}.zjapp .material-traceability .empty-content[data-v-0eb9f2d7]{padding:0 15px 0;line-height:20px;text-align:center;font-size:16px;color:#999}.zjapp .material-traceability .empty-content .mark[data-v-0eb9f2d7]{color:#4275e8}",""])},bcf4:function(t,e,n){"use strict";n("27c4")},c5a7:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},d18d:function(t,e,n){"use strict";(function(t){n("2b45");var a,i=n("4360"),r=n("48f4"),o=n("162a"),s=n("e2a7"),l=n("a500"),c=n("6f9e"),u={};e.a={name:"Scroller",props:{buildingId:{type:String,default:""},hasNext:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},isSync:{type:Boolean,default:!0},endText:{type:String,default:""},memoryScrollTop:{type:Boolean,default:!0},keepScrollTop:{type:Boolean},hasPullDown:{type:Boolean,default:!0},onPullDown:{type:Function}},data:function(){return{pullDist:0,refreshing:!1,pulling:!1,loading:!1,scrollTop:0,isCurrKeyboard:!1,gapBottom:0}},computed:{allowPullDown:function(){return this.hasPullDown&&(!!this.$listeners.pullDown||!!this.onPullDown)},updateTime:function(){return i.a.state.global.businessDownloadTime},numberKeyboardCoverHeight:function(){return i.a.state.global.isNumberInputOpen?i.a.state.global.numberKeyboardHeight-this.gapBottom:0}},mounted:function(){var t=this;c.a.$on("numberKeyboardOpen",this.onNumberKeyboardOpen),this.$nextTick((function(){var e=t.$refs["scroll-warp"]&&t.$refs["scroll-warp"].getBoundingClientRect&&t.$refs["scroll-warp"].getBoundingClientRect();e&&(t.gapBottom=document.documentElement.clientHeight-e.bottom),t.$el&&t.$el.addEventListener("focus",(function(e){var n=e&&e.target,a=n&&n.tagName&&n.tagName.toLowerCase();if("input"===a||"textarea"===a){window.addEventListener("resize",(function e(){var a=n.getBoundingClientRect(),i=t.$el.getBoundingClientRect(),r=a.bottom-i.bottom;r>0&&t.scrollBy(r),window.removeEventListener("resize",e,!1)}),!1)}}),!0)}))},destroyed:function(){c.a.$off("numberKeyboardOpen",this.onNumberKeyboardOpen)},activated:function(){var t=this.keepScrollTop||this.$router.isBack&&this.memoryScrollTop;this.scrollTop&&t&&(this.$refs["scroll-warp"].scrollTop=this.scrollTop)},deactivated:function(){this.memoryScrollTop&&(this.scrollTop=this.$refs["scroll-warp"].scrollTop)},methods:{onScroll:function(t){var e=this,n=this.$refs["scroll-warp"].scrollTop,a=this.$refs["scroll-warp"].scrollHeight;if(n+this.$refs["scroll-warp"].clientHeight>=a-5&&!this.loading&&this.hasNext){this.loading=!0;var i=this.$listeners.loadNext();i&&i.then&&"function"==typeof i.then?i.then((function(){e.loading=!1})):this.loading=!1}this.$emit("scroll",t)},getTouchDiretion:function(t){if(!(u&&t&&t.touches&&t.touches[0]))return"";var e=t.touches[0].clientX,n=t.touches[0].clientY;return Math.abs(n-u.y)>Math.abs(e-u.x)&&Math.abs(n-u.y)>=3?n>u.y?"down":"up":""},onTouchstart:function(t){this.allowPullDown&&t.touches&&1===t.touches.length&&(u={x:t.touches[0].clientX,y:t.touches[0].clientY,scrollTop:this.$refs["scroll-warp"].scrollTop,pullDist:this.pullDist})},onTouchmove:function(t){if(this.allowPullDown&&t.touches&&1===t.touches.length){var e=this.$refs["scroll-warp"].scrollTop,n=t.touches[0].clientY,a=n-u.y,i=this.getTouchDiretion(t);"down"===i?!this.refreshing&&e<=0?(this.pulling=!0,this.pullDist=(a-u.scrollTop)/2,t.preventDefault()):this.pulling=!1:"up"===i?this.pullDist>0&&(this.pullDist=u.pullDist-(u.y-n),t.preventDefault()):this.pullDist=u.pullDist}},onTouchend:function(){var t=this;this.allowPullDown&&(u={},this.pulling=!1,this.pullDist>=70&&this.isSync?this.refreshing?this.makePullTo(70):this.makePullTo(70).then((function(){if(t.refreshing=!0,t.onPullDown){var e=t.onPullDown();e&&e.then&&"function"==typeof e?e.finally((function(){t.refreshing=!1,t.makePullTo(0)})):(t.refreshing=!1,t.makePullTo(0))}else t.dataSync().then((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")})).catch((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")}))})):(this.refreshing=!1,this.makePullTo(0)))},makePullTo:function(t){var e=this,n=this.pullDist,a=t,i=a-n,r=n;return n===a?Promise.resolve():new Promise((function(t){!function o(){window.requestAnimationFrame((function(){r+=i/6,e.pullDist=r,n<a&&r<a||n>a&&r>a?o():(e.pullDist=a,e.refreshing=!1,t())}))}()}))},dataSync:function(){var t,e=r.default.getCurrentModuleCode(),n=r.default.getCurrentRoute(),a=n.meta&&n.meta.isTodo;if(r.default.isModuleNeedBuilding(e)&&!a){if(!this.buildingId)return new Promise((function(t){setTimeout((function(){t()}),500)}));t=this.buildingId}return l.a.addTrack("公共-手动下拉刷新","",""),o.a.beginManualUpdate(),r.default.checkSync(t).then((function(t){return o.a.endManualUpdate(),t})).catch((function(t){$log.error("下拉刷新错误",t),t&&"Error: Network Error"===t.toString()?s.a.alert("当前网络无法同步数据"):s.a.alert(t),o.a.endManualUpdate()}))},getScrollHeight:function(){return this.$refs["scroll-warp"].offsetHeight},getScrollTop:function(){return this.$refs["scroll-warp"].scrollTop},setScrollTop:function(t){this.$refs["scroll-warp"].scrollTop=t},scrollBy:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,i=this.getScrollTop(),r=i+t,o=Math.round(n/16.7),s=t/o,l=i,c=a=+new Date;return i===r?Promise.resolve():new Promise((function(t){!function n(){window.requestAnimationFrame((function(){c===a&&(l+=s,e.$refs["scroll-warp"].scrollTop=l,i<r&&l<r||i>r&&l>r?n():(e.$refs["scroll-warp"].scrollTop=r,t()))}))}()}))},scrollTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=this.getScrollTop(),a=t-n;return this.scrollBy(a,e)},scrollToEle:function(t){var e=t.keyboardHeight||232,n=(t=t.$el?t.$el:t).getBoundingClientRect(),a=this.$refs["scroll-warp"].getBoundingClientRect();if(n&&a){var r=document.documentElement.clientHeight-(i.a.state.global.isNumberInputOpen?e:0),o=a.bottom<r?a.bottom:r,s=a.top-n.top,l=n.bottom-o;s>0?this.scrollBy(-s-10):l>0&&this.scrollBy(l+10)}},isCurrent:function(e,n){var a=this;e.length&&t.each(e,(function(t){t._uid===n?a.isCurrKeyboard=!0:a.isCurrent(t.$children,n)}))},onNumberKeyboardOpen:function(t){this.isCurrKeyboard=!1,this.isCurrent(this.$children,t._uid),this.isCurrKeyboard&&this.scrollToEle(t)}}}}).call(this,n("391c"))},db6b2:function(t,e,n){(t.exports=n("690e")(!1)).push([t.i,'.zjapp .swipe-tabs[data-v-025feb99]{display:flex;flex-direction:column;flex:1;overflow:hidden}.zjapp .tabs[data-v-025feb99]{position:relative;display:flex;background-color:#fff}.zjapp .tab[data-v-025feb99]{flex:1;height:40px;line-height:20px;padding:10px;font-size:14px;text-align:center;box-sizing:border-box}.zjapp .tab-current[data-v-025feb99]{color:#4275e8}.zjapp .mark-line[data-v-025feb99]{position:absolute;bottom:0;left:0;width:20px;height:2px;margin-left:-10px;background-image:linear-gradient(90deg,#5ea2ff,#4f83eb 50%,#4275e8);transition:left .4s cubic-bezier(.1,.7,.1,1)}.zjapp .tabs-point[data-v-025feb99]{position:relative;z-index:1;height:40px;font-size:0;text-align:center;background-color:#fff;overflow:visible}.zjapp .tabs-scroll[data-v-025feb99]{position:relative;padding-bottom:3px;margin-bottom:-3px;white-space:nowrap;overflow-x:auto}.zjapp .tabs-scroll[data-v-025feb99]::-webkit-scrollbar{display:none}.zjapp .tab-point[data-v-025feb99]{display:inline-block;padding:10px 15px;line-height:20px;font-size:16px;color:#333;white-space:nowrap}.zjapp .tab-point.tab-current[data-v-025feb99]{position:relative;z-index:3;color:#4275e8}.zjapp .tab-point.tab-current[data-v-025feb99]:after{content:"";position:absolute;z-index:3;bottom:-3px;left:50%;margin-left:-3px;width:7px;height:7px;border-radius:50%;background-color:#4275e8}',""])},ef48:function(t,e,n){var a=n("9d55");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("85cb").default)("a1a65c0c",a,!0,{sourceMap:!1,shadowMode:!1})},f24f:function(t,e,n){"use strict";e.__esModule=!0,e.isNumber=function(t){return/^\d+(\.\d+)?$/.test(t)},e.isNaN=function(t){if(Number.isNaN)return Number.isNaN(t);return t!=t}}}]);