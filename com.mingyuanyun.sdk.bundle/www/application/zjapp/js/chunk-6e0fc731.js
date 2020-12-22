(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-6e0fc731"],{"2c76":function(t,e,a){"use strict";a("c070")},"2d78":function(t,e,a){"use strict";a.r(e);a("f548"),a("cc57");var r=a("07d2"),i=a("774b"),n=a("3c64"),o=a("5a71"),s=(a("88c7"),a("cd05")),c=a("cd66"),l=a("e2a7"),u=a("4603"),d=a("f97c"),m={name:"MaterialTraceabilityAddTask",components:{Item:r.a,Scroller:i.a,ItemTextarea:n.a,SingleSelect:o.a,UserSelect:s.a,MaterialInfoSelect:c.a},data:function(){return{task_name:"",material:{},materialList:[],brand:{},brandList:[],contractor:{},contractorList:[],contractorUsers:{},contractorUsersList:[],place:"",remark:"",formCheck:!1,can_change_user:!0}},computed:{proj_id:function(){return d.a.getDefaultProject().id},mode:function(){return this.$route.query.data?"edit":"add"},title:function(){return"edit"===this.mode?"编辑任务":"新建任务"}},activated:function(){this.$router.isBack||this.init()},methods:{init:function(){if("add"===this.mode)this.material={},this.materialList=[],this.brand={},this.brandList=[],this.contractor={},this.contractorList=[],this.contractorUsers={},this.contractorUsersList=[],this.place="",this.remark="",this.formCheck=!1,this.can_change_user=!0,this.task_name="",this.getMaterialList(),this.getContractorList();else{var t=this.$route.query.data;this.task_name=t.name,this.material=t.material,this.brand=t.brand,this.contractor=t.contractor,this.contractorUsers=t.contractorUsers,this.place=t.place,this.remark=t.remark,this.can_change_user=t.can_change_user,this.materialList=[],this.contractorList=[],this.contractorUsersList=[],this.formCheck=!1,this.getContractorList(),this.getContractorUsersList()}},submit:function(){var t=this,e=this.$route.query.data,a=this.material.id,r=this.brand.id,i=this.contractor.id,n=this.contractorUsers.id;if(this.task_name){if(a&&r&&i&&n){this.formCheck=!1;var o={proj_id:this.proj_id,materialId:a,brandId:r,contractorId:i,contractorUsersId:n,place:this.place,remark:this.remark,name:this.task_name};return"edit"===this.mode&&e&&e.id&&(o.id=e.id),u.a.postSubmitTask(o).then((function(a){setTimeout((function(){"add"===t.mode?t.$router.replace({name:"MaterialTraceability"}):t.$router.replace({name:"MaterialTraceabilityDetail",query:{id:e.id,tabIndex:0,title:t.task_name}}),setTimeout((function(){t.$router.go(-1)}),300)}),500)}))}this.formCheck=!0}else l.a.alert("请输入任务名称")},changeMaterialName:function(){this.brand={},this.getBrandList()},checkMaterialIsAvailable:function(){if(!this.material||!this.material.id)return l.a.alert("请先选择材料名称"),!1},checkContractorIsAvailable:function(){if(!this.contractor||!this.contractor.id)return l.a.alert("请先选择材料供应商"),!1},changeContractor:function(){this.contractorUsers={},this.getContractorUsersList()},getMaterialList:function(){var t=this;u.a.getMaterialList().then((function(e){t.materialList=e}))},getBrandList:function(){var t=this;u.a.getBrandList(this.material.id).then((function(e){t.brandList=e}))},getContractorList:function(){var t=this;u.a.getContractorList(this.proj_id).then((function(e){t.contractorList=e}))},getContractorUsersList:function(){var t=this;u.a.getContractorUsersList(this.contractor.id).then((function(e){t.contractorUsersList=e.map((function(e){return 31===e.role&&(e.contractors=[t.contractor]),e})),$log.log("获取供应商下用户：",t.contractorUsersList)}))}}},p=(a("b878"),a("17cc")),h=Object(p.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-content",{staticClass:"material-traceability-addTask",attrs:{title:t.title,"show-go-root":!0}},[a("scroller",{staticClass:"main"},[a("item",{attrs:{label:"任务名称",border:"bottom",mode:"edit"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.task_name,expression:"task_name"}],staticClass:"input-align-r f16",attrs:{slot:"right",type:"text",placeholder:"请输入",maxLength:"20"},domProps:{value:t.task_name},on:{input:function(e){e.target.composing||(t.task_name=e.target.value)}},slot:"right"})]),a("material-info-select",{attrs:{options:t.materialList,title:"材料名称",grouping:"category_name","custom-type":"3","form-check":t.formCheck,editabled:"add"===t.mode},on:{onSelect:t.changeMaterialName},model:{value:t.material,callback:function(e){t.material=e},expression:"material"}}),a("single-select",{attrs:{options:t.brandList,"form-check":t.formCheck,editabled:"add"===t.mode,title:"品牌","before-open":t.checkMaterialIsAvailable},model:{value:t.brand,callback:function(e){t.brand=e},expression:"brand"}}),a("single-select",{attrs:{options:t.contractorList,title:"材料供应商","form-check":t.formCheck,editabled:t.can_change_user},on:{onSelect:t.changeContractor},model:{value:t.contractor,callback:function(e){t.contractor=e},expression:"contractor"}}),a("user-select",{attrs:{options:t.contractorUsersList,"form-check":t.formCheck,"before-open":t.checkContractorIsAvailable,editabled:t.can_change_user,title:"供应商经办人"},model:{value:t.contractorUsers,callback:function(e){t.contractorUsers=e},expression:"contractorUsers"}}),a("item",{attrs:{label:"使用部位",border:"bottom",mode:"edit"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.place,expression:"place"}],staticClass:"input-align-r f16",attrs:{slot:"right",type:"text",placeholder:"选填",maxLength:"200"},domProps:{value:t.place},on:{input:function(e){e.target.composing||(t.place=e.target.value)}},slot:"right"})]),a("item-textarea",{attrs:{"default-height":200,placeholder:"备注（选填）"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1),a("app-button-group",{attrs:{"fixed-bottom":""}},[a("app-button",{on:{click:t.submit}},[t._v("提交")])],1)],1)}),[],!1,null,"ce2f4188",null);e.default=h.exports},"3c64":function(t,e,a){"use strict";a("163d");var r={name:"ItemTextarea",components:{},props:{value:{type:String,default:""},placeholder:{type:String,default:""},maxlength:{type:Number,default:200},borderBottom:{type:Boolean,default:!0}},data:function(){return{textareaHeight:40,isLock:!1,blurTime:null}},computed:{lastLength:function(){var t=this.value&&this.value.length||0,e=this.maxlength-t;return e>0?e:0}},mounted:function(){var t=this;this.$nextTick((function(){t.textareaHeight=t.$refs.rule&&t.$refs.rule.offsetHeight||40}))},methods:{onfocus:function(){var t=(new Date).getTime();this.blurTime&&t-this.blurTime<300&&window.cordova&&window.cordova.plugins&&window.cordova.plugins.Keyboard&&(this.$refs.input.blur(),window.cordova.plugins.Keyboard.close()),this.blurTime=null,this.$emit("focus")},onblur:function(){this.blurTime=(new Date).getTime(),this.$emit("blur")},setStatus:function(t){console.log(t),this.isLock=t},oninput:function(t){var e=this;setTimeout((function(){if(!e.isLock){var a=t.target.value;a.length>e.maxlength&&(a=a.substring(0,e.maxlength),e.$refs.input.value=a),e.$refs.rule.innerText=a,e.textareaHeight=e.$refs.rule&&e.$refs.rule.offsetHeight+20,e.$emit("input",a),e.$emit("change",a)}}),0)}}},i=(a("2c76"),a("17cc")),n=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item-textarea",class:{"border-bottom":t.borderBottom}},[a("div",{staticClass:"item-textarea-content"},[a("textarea",{ref:"input",style:{height:t.textareaHeight+"px"},attrs:{placeholder:t.placeholder},domProps:{value:t.value},on:{focus:t.onfocus,blur:t.onblur,compositionstart:function(e){t.setStatus(!0)},compositionend:function(e){t.setStatus(!1)},input:t.oninput}}),a("div",{ref:"rule",staticClass:"rule"},[t._v("\n      "+t._s(t.value)+"\n    ")]),t.maxlength!==1/0?a("p",{staticClass:"counter"},[t._v("\n      "+t._s(t.lastLength)+"\n    ")]):t._e()])])}),[],!1,null,null,null);e.a=n.exports},4603:function(t,e,a){"use strict";(function(t){a("163d"),a("cc57"),a("6d57"),a("06a2");var r=a("1b7e"),i=a("e2a7"),n=a("6bf2"),o=a.n(n),s=a("3122"),c=a("162a"),l=a("3bd5"),u=a("9094");function d(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm";return t.isEmpty(e)?"":o()(e).format(a)}function m(){return r.a.getHasNetwork().then((function(t){if(!t)return i.a.alert("当前无网络"),Promise.reject("no network")}))}function p(t){try{return t&&"string"==typeof t?JSON.parse(t):t}catch(e){return t}}function h(e){var a=[];return t.each(e,(function(t){!t.url&&t.temp?a.push(s.a.uploadImage(t.temp).then((function(e){t.url=e,delete t.temp}))):delete t.temp,!t.videoUrl&&t.videoTemp?a.push(s.a.uploadImage(t.videoTemp).then((function(e){t.videoUrl=e,delete t.videoTemp}))):delete t.videoTemp})),Promise.all(a).then((function(){return e}))}var f={getSectionList:function(t){return c.a.request("/online/common/get-bidsection-list-of-project",{proj_id:t}).catch((function(t){return $log.error("获取标段列表-error：",t),Promise.reject(t)}))},getMaterialList:function(){return Object(u.c)().catch((function(t){return $log.error("获取标段下材料列表-error：",t),Promise.reject(t)}))},getBrandList:function(t){return c.a.request("/online/common/get-brand-list-of-material",{material_id:t}).catch((function(t){return $log.error("获取材料下品牌列表-error：",t),Promise.reject(t)}))},getContractorList:function(t){return Object(u.b)({proj_id:t}).catch((function(t){return $log.error("获取标段下供应商列表-error：",t),Promise.reject(t)}))},getContractorUsersList:function(t){return c.a.request("/online/common/get-users-of-contractor",{contractor_id:t}).then((function(t){return(t||[]).map((function(t){return t.head_portrait=function(t,e){try{return t?s.a.getThumbnailFromUrl(t):"image"===e?"static/photo-default.png":"static/default_img_simple.png"}catch(t){return"image"===e?"static/photo-default.png":"static/default_img_simple.png"}}(t.headimg_url,"avater"),t}))})).catch((function(t){return $log.error("获取供应商下用户-error：",t),Promise.reject(t)}))},postSubmitTask:function(t){return i.a.loading("正在提交..."),m().then((function(){var e={proj_id:t.proj_id,name:t.name,material_id:t.materialId,brand_id:t.brandId,contractor_id:t.contractorId,agent_user_id:t.contractorUsersId,place:t.place,remark:t.remark};return t.id&&(e.id=t.id),$log.log("材料溯源-提交任务-数据：",e),c.a.post("/online/material-traceability/save-task",null,e).then((function(t){return i.a.hideLoading(),i.a.alert("提交成功"),t})).catch((function(t){return i.a.hideLoading(),i.a.alert(t.errmsg),Promise.reject(t)}))})).catch((function(t){return $log.error("材料溯源-提交任务-error：",t),Promise.reject(t)}))},getIndexList:function(t){return m().then((function(){return c.a.request("/online/material-traceability/task-list",t).then((function(t){return t.items=(t.items||[]).map((function(t){return t.created_on=d(t.created_on,"YYYY-MM-DD"),t})),t}))})).catch((function(t){return $log.error("材料溯源-列表-error：",t),Promise.reject(t)}))},getTaskDetail:function(t){return m().then((function(){return c.a.request("/online/material-traceability/get-task-detail",{id:t})})).then((function(t){return t?{id:t.id,can_change_user:t.can_change_user,created_by_name:t.created_by_name,can_edit:t.can_edit,section:{id:t.bidsection_id,name:t.bidsection_name},material:{id:t.material_id,name:t.material_name},brand:{id:t.brand_id,name:t.brand_name},contractor:{id:t.contractor_id,name:t.contractor_name},contractorUsers:{id:t.agent_user_id,name:t.agent_user_name},place:t.place,remark:t.remark,name:t.name}:Promise.reject(t.errmsg)})).catch((function(t){return $log.error("材料溯源-任务详情-error：",t),Promise.reject(t)}))},getTraceabilityDetail:function(e){return m().then((function(){return c.a.request("/online/material-traceability/get-trace-detail",{id:e}).then((function(e){if(!e)return Promise.reject(e.errmsg);e.task&&(e.task.basic_info=p(e.task.basic_info),e.task.composition=p(e.task.composition)),e.supply&&(e.supply.images=p(e.supply.images),e.supply.basic_info=p(e.supply.basic_info),e.supply.composition=p(e.supply.composition)),e.status=Number(e.status);var a=e.task,r=void 0===a?{}:a,i=e.supply,n=void 0===i?{}:i,o=e.raw_supply,s=void 0===o?{}:o;r=r||{},n=n||{},s=s||[];var c=t.isEmpty(n.basic_info)?(r.basic_info||[]).map((function(t){return{name:t,value:""}})):n.basic_info,u=t.isEmpty(n.composition)?(r.composition||[]).map((function(t){return{name:t,value:""}})):n.composition,m=t.isEmpty(s)?[]:(s||[]).map((function(t){return{id:t.id,can_change_user:t.can_change_user,information:{id:t.contractor_id,name:t.contractor_name,formCheck:!1},informationBy:{id:t.agent_user_id,name:t.agent_user_name,formCheck:!1}}})),h={basic:c,composition:u,image_file:n.images||[],material_information:m,proj_id:r.proj_id,contractor:n.contractor_name,contractorBy:n.agent_user_name},f=s.filter((function(t){return t.agent_user_id===l.a.getUser().user_id}))[0]||{},g=t.isEmpty(f.raw_material_info)?[{name:"",remark:"",image_file:[]}]:p(f.raw_material_info||[{name:"",remark:"",image_file:[]}]);return{traceability1:h,traceability2:{id:f.id,material:f.contractor_name,materialBy:f.agent_user_name,remark:r.guideline,materialList:g},traceability3:{material:{basic:n.basic_info||[],product:n.composition||[],submit_time:d(n.submit_time,"YYYY-MM-DD"),annotate:"".concat(n.agent_user_name," - ").concat(n.contractor_name),image_file:n.images||[],can_edit:n.can_edit},rawMaterial:s.filter((function(t){return 0===Number(t.is_system_created)})).map((function(t){return t.annotate="".concat(t.agent_user_name," - ").concat(t.contractor_name),t.submit_time=d(t.submit_time,"YYYY-MM-DD"),t.raw_material_info=p(t.raw_material_info||"[]"),t}))},status:e.status,title:r.name}}))})).catch((function(t){return $log.error("材料溯源-任务详情-error：",t),Promise.reject(t)}))},postSaveTraceabilitySupplier:function(t){return i.a.loading("正在提交..."),m().then((function(){return h(t.image_file).then((function(e){t.image_file=e})).then((function(){var e={task_id:t.id,basic_info:JSON.stringify(t.basic),composition:JSON.stringify(t.composition),images:JSON.stringify(t.image_file),raw_supply:JSON.stringify(t.material_information),proj_id:t.proj_id};return c.a.post("/online/material-traceability/save-supply-data",null,e).then((function(t){return i.a.hideLoading(),i.a.alert("提交成功"),t})).catch((function(t){return i.a.hideLoading(),i.a.alert(t.errmsg),Promise.reject(t)}))}))})).catch((function(t){return $log.error("材料溯源-供应商数据-error：",t),Promise.reject(t)}))},postSaveRawMaterial:function(e){return i.a.loading("正在提交..."),m().then((function(){var a=[];return t.each(e.materialList,(function(t){var e=h(t.image_file).then((function(e){t.image_file=e}));a.push(e)})),Promise.all(a).then((function(){var t={id:e.id,raw_material_info:JSON.stringify(e.materialList)};return c.a.post("/online/material-traceability/save-raw-supply-data",null,t).then((function(t){return i.a.hideLoading(),i.a.alert("提交成功"),t})).catch((function(t){return i.a.hideLoading(),i.a.alert(t.errmsg),Promise.reject(t)}))}))})).catch((function(t){return $log.error("材料溯源-原材商保存-error：",t),Promise.reject(t)}))},getInfluencesList:function(t,e){return m().then((function(){var a={process:"get-process-list",accept:"get-accept-list",assemble:"get-assemble-list"}[e];return $log.log("材料溯源-加工出厂等列表-参数：",t,a),c.a.request("/online/material-traceability/".concat(a),t).then((function(t){return t&&t.items?(t.items=t.items.map((function(t){return t.created_info=[{id:t.user_id,name:t.user_name}],t.created_on=d(t.created_on),t.images=p(t.images||"[]"),t})),t):Promise.reject(t.errmsg)}))})).catch((function(t){return $log.error("材料溯源-加工出厂等列表-error：",t),Promise.reject(t)}))},postSaveInfluences:function(t,e){return i.a.loading("正在提交..."),m().then((function(){return h(t.images).then((function(e){t.images=e})).then((function(){var a={task_id:t.task_id,proj_id:t.proj_id,images:JSON.stringify(t.images),remark:t.remark};t.id&&(a.id=t.id);var r={process:"save-process-data",accept:"save-accept-data",assemble:"save-assemble-data"}[e];return c.a.post("/online/material-traceability/".concat(r),null,a).then((function(t){return i.a.hideLoading(),i.a.alert("提交成功"),t})).catch((function(t){return i.a.hideLoading(),i.a.alert(t.errmsg),Promise.reject(t)}))}))})).catch((function(t){return $log.error("材料溯源-加工出厂、进场验收、安装的保存-error：",t),Promise.reject(t)}))},postDelelteTask:function(t){return i.a.loading("正在提交..."),m().then((function(){return $log.log("材料溯源-删除任务-参数：",t),c.a.post("/online/material-traceability/delete-task",null,{id:t}).then((function(t){return i.a.hideLoading(),i.a.alert("删除成功"),t})).catch((function(t){return i.a.hideLoading(),i.a.alert(t.errmsg),Promise.reject(t)}))})).catch((function(t){return $log.error("材料溯源-删除任务-error：",t),Promise.reject(t)}))}};e.a=f}).call(this,a("391c"))},5245:function(t,e,a){(t.exports=a("690e")(!1)).push([t.i,".zjapp .material-traceability-addTask .main[data-v-ce2f4188]{flex:1}.zjapp .material-traceability-addTask[data-v-ce2f4188] .item-textarea textarea{min-height:88px}",""])},"574c":function(t,e,a){(t.exports=a("690e")(!1)).push([t.i,".zjapp .item-textarea{background-color:#fff;padding:5px 15px}.zjapp .item-textarea-content{position:relative}.zjapp .item-textarea .rule,.zjapp .item-textarea textarea{width:100%;min-height:40px;line-height:20px;font-size:16px;padding:0;border:none}.zjapp .item-textarea .rule{position:absolute;top:0;left:0;visibility:hidden;word-break:break-all}.zjapp .item-textarea .counter{text-align:right;margin:0 0 -5px 0;height:15px;line-height:15px;color:#b2b2b2;font-size:12px}",""])},7274:function(t,e,a){(t.exports=a("690e")(!1)).push([t.i,'.zjapp .custom-material-dialog[data-v-6fc312fe] .van-dialog__content{padding:20px}.zjapp .custom-material-dialog[data-v-6fc312fe] .van-dialog__content span{display:inline-block;color:#333;height:30px;line-height:30px;padding:0 13px;text-align:center;font-size:15px;border:1px solid #dcdcdc;border-radius:4px}.zjapp .custom-material-dialog[data-v-6fc312fe] .van-dialog__content span.checked{position:relative;border-color:#4275e8;color:#4275e8!important}.zjapp .custom-material-dialog[data-v-6fc312fe] .van-dialog__content span.checked:before{position:absolute;content:" ";display:block;border:1px solid #4275e8;border-top:none;border-right:none;width:8px;height:4px;transform:rotate(-45deg);right:3px;bottom:5px}.zjapp .custom-material-dialog[data-v-6fc312fe] .van-dialog__content .untis{margin:0 -3px}.zjapp .custom-material-dialog[data-v-6fc312fe] .van-dialog__content .untis span{padding:0;width:50px;margin:0 3px 5px 3px;font-size:14px;color:#666}.zjapp .custom-material-dialog[data-v-6fc312fe] .van-dialog__content p{padding:14px 0 10px 0;line-height:20px;color:#999;font-size:12px}.zjapp .custom-material-dialog[data-v-6fc312fe] .van-dialog__content p.error{color:#ff3d3d}.zjapp .custom-material-dialog .new-name[data-v-6fc312fe]{margin-top:10px}.zjapp .custom-material-dialog .new-name input[data-v-6fc312fe]{width:100%;height:40px;padding:10px;border-radius:0;font-size:14px;border:none;background-image:linear-gradient(180deg,#dcdcdc,#dcdcdc 66.6667%,transparent 0),linear-gradient(270deg,#dcdcdc,#dcdcdc 66.6667%,transparent 0),linear-gradient(0deg,#dcdcdc,#dcdcdc 66.6667%,transparent 0),linear-gradient(90deg,#dcdcdc,#dcdcdc 66.6667%,transparent 0);background-size:100% 1px,1px 100%,100% 1px,1px 100%;background-repeat:no-repeat;background-position:top,100% 0,bottom,0 0}.zjapp .custom-material-dialog .new-name.error input[data-v-6fc312fe]::-webkit-input-placeholder{color:#ff3d3d}',""])},"774b":function(t,e,a){"use strict";var r=a("d18d").a,i=(a("b225"),a("17cc")),n=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"scroll-warp",staticClass:"scroll-warp",class:{"scroll-warp-pulling":t.pulling,"scroll-warp-complete":!t.hasNext&&!t.isEmpty,"scroll-warp-empty":t.isEmpty},style:{"padding-bottom":t.numberKeyboardCoverHeight+"px"},on:{scroll:t.onScroll,touchstart:t.onTouchstart,touchmove:t.onTouchmove,touchend:t.onTouchend}},[t.allowPullDown?a("div",{staticClass:"pull-refresh-warp",style:{height:t.pullDist+"px"}},[a("div",{staticClass:"pull-refresh"},[a("div",{staticClass:"animation-refresher",class:{refreshing:t.refreshing}}),t.updateTime?a("p",{staticClass:"pull-refresh-date"},[t._v("最后成功同步："+t._s(t.updateTime))]):t._e()])]):t._e(),t._t("default"),t.loading?a("div",{staticClass:"page-loading"},[a("svg",{staticClass:"svg-loading",attrs:{viewBox:"0 0 80 80"}},[a("circle",{attrs:{cx:"40",cy:"40",r:"36"}})])]):t._e(),t.hasNext||t.isEmpty?t._e():[t.$slots.end?t._t("end"):t._e(),!t.$slots.end&&t.endText?a("div",{staticClass:"end-text"},[t._v("\n      "+t._s(t.endText)+"\n    ")]):t._e()]],2)}),[],!1,null,"2b1a346c",null);e.a=n.exports},"8c64":function(t,e,a){"use strict";(function(t){var r=a("4c09"),i=(a("e697"),a("cc57"),a("5a71")),n=a("88c7"),o=a("6f9e"),s=a("e2a7"),c=a("a500");e.a={name:"MaterialInfoSelect",components:{SingleSelect:i.a,MultiSelect:n.a},props:{title:{type:String,default:""},value:{type:[Object,Array]},multi:{type:Boolean,default:!1},options:{type:Array,default:function(){return[]}},optionsDisabled:{type:Array,default:function(){return[]}},rightBtn:{type:String,default:""},customType:{type:String,default:"1"},grouping:{type:String,default:""},beforeOpen:{type:Function},standardUnit:{type:String,default:""},editabled:{type:Boolean,default:!0},formCheck:{type:Boolean,default:!1}},data:function(){return{selected:this.multi?[]:{},showCustom:!1,customMaterialCategory:"",customName:"",customMaterialUnit:"",customFormError:!1,materialCategory:[],units:[{id:"包",name:"包"},{id:"卷",name:"卷"},{id:"匹",name:"匹"},{id:"套",name:"套"},{id:"桶",name:"桶"},{id:"支",name:"支"},{id:"只",name:"只"},{id:"组",name:"组"},{id:"根",name:"根"},{id:"箱",name:"箱"},{id:"米",name:"米"},{id:"台",name:"台"},{id:"盏",name:"盏"},{id:"个",name:"个"},{id:"片",name:"片"},{id:"块",name:"块"},{id:"吨",name:"吨"},{id:"樘",name:"樘"},{id:"棵",name:"棵"},{id:"株",name:"株"},{id:"公斤",name:"公斤"},{id:"平方米",name:"平方米"},{id:"立方米",name:"立方米"},{id:"其它",name:"其它"}]}},watch:{value:function(t){this.selected=t},showCustom:function(t){var e=this;t&&this.$nextTick((function(){e.$refs["custom-input"].focus()}))}},mounted:function(){this.value&&(this.selected=this.value)},methods:{onHandleSelect:function(e){t.has(e,"num")&&(e.num=""),this.selected=e,this.$emit("input",e),this.$emit("onSelect",e),o.a.$emit("closeDialog")},showCustomDialog:function(t){this.customMaterialUnit=this.standardUnit,this.materialCategory=t,this.customMaterialCategory=t[0],this.showCustom=!0,c.a.addTrack("材料验收-手工添加材料".concat(this.title),"","")},selectMaterialCategory:function(t){this.customMaterialCategory=t},selectCustomMaterialUnit:function(t){this.customMaterialUnit=t.name},customSubmit:function(e,a){var i,n,o=this;if("confirm"===e){if(!this.customName)return this.customFormError=!0,a(!1);switch(this.customType){case"1":(n=t.find(this.options,(function(t){return t.name===o.customName})))?i=n:(i={id:"custom-"+(new Date).getTime(),name:this.customName,checked:!0},this.options.push(i));break;case"2":if(!this.customMaterialUnit)return this.customFormError=!0,a(!1);(n=t.find(this.options,(function(t){return t.name===o.customName})))?i=n:(i={id:"custom-"+(new Date).getTime(),name:this.customName,checked:!0,quantity_unit:this.customMaterialUnit},this.options.push(i));break;case"3":if(!this.customMaterialUnit)return this.customFormError=!0,a(!1);(n=t.find(this.options,(function(t){return t.name===o.customName&&t.category_name===o.customMaterialCategory})))?i=n:(i={id:"custom-"+(new Date).getTime(),name:this.customName,checked:!0,quantity_unit:this.customMaterialUnit,category_name:this.customMaterialCategory},this.options.push(i))}i.disabled?s.a.alert("“"+this.customName+"”已存在，且不可选"):this.multi?(this.selected=this.$refs.multiSelectDialog.getDialogValue(),this.$refs.multiSelectDialog.setDialogValue([].concat(Object(r.a)(this.selected),[i]))):this.onHandleSelect(i),this.resetData(),a()}else this.resetData(),a()},resetData:function(){this.showCustom=!1,this.customMaterialCategory="",this.customName="",this.customMaterialUnit="",this.customFormError=!1}}}}).call(this,a("391c"))},9094:function(t,e,a){"use strict";a.d(e,"c",(function(){return o})),a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return c}));var r=a("5e8d"),i=a("da71"),n=a("162a");function o(){return Object(r.a)().then((function(){var t=i.a.materialList.url;return n.a.request(t)}))}function s(t){return Object(r.a)().then((function(){var e=i.a.contractorListByProject.url;return n.a.request(e,t)}))}function c(t){return Object(r.a)().then((function(){var e=i.a.getContractList.url;return n.a.request(e,t)}))}},"9d55":function(t,e,a){(t.exports=a("690e")(!1)).push([t.i,'.zjapp .scroll-warp[data-v-2b1a346c]{flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.zjapp .scroll-warp-pulling[data-v-2b1a346c]{overflow:hidden}.zjapp .scroll-warp-complete[data-v-2b1a346c]:after{content:"";display:block;height:100px}.zjapp .scroll-warp-empty[data-v-2b1a346c]{display:flex;flex-direction:column}.zjapp .pull-refresh-warp[data-v-2b1a346c]{position:relative;height:0;overflow:hidden}.zjapp .pull-refresh[data-v-2b1a346c]{position:absolute;left:0;bottom:0;height:70px;width:100%;padding:6px;text-align:center}.zjapp .pull-refresh-date[data-v-2b1a346c]{margin-top:4px;height:16px;line-height:16px;font-size:12px;color:#bcbcbc}.zjapp .page-loading[data-v-2b1a346c]{padding:10px;text-align:center}.zjapp .end-text[data-v-2b1a346c]{color:#c8c8c8;background:#f4f4f4;position:relative;line-height:76px;height:76px;text-align:center}.zjapp .end-text[data-v-2b1a346c]:after,.zjapp .end-text[data-v-2b1a346c]:before{content:"";position:absolute;width:48px;height:1px;background:#e4e4e4;top:50%;margin-top:-1px}.zjapp .end-text[data-v-2b1a346c]:after{left:50%;transform:translateX(-92px)}.zjapp .end-text[data-v-2b1a346c]:before{right:50%;transform:translateX(90px)}.zjapp .end-slot[data-v-2b1a346c]{padding:30px;line-height:18px;text-align:center;color:#c8c8c8}',""])},aa1f:function(t,e,a){var r=a("7274");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a("85cb").default)("5f53ac0f",r,!0,{sourceMap:!1,shadowMode:!1})},b225:function(t,e,a){"use strict";a("ef48")},b878:function(t,e,a){"use strict";a("c8f5")},c070:function(t,e,a){var r=a("574c");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a("85cb").default)("35590dcb",r,!0,{sourceMap:!1,shadowMode:!1})},c8f5:function(t,e,a){var r=a("5245");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a("85cb").default)("1792e534",r,!0,{sourceMap:!1,shadowMode:!1})},cd66:function(t,e,a){"use strict";var r=a("8c64").a,i=(a("e9d7"),a("17cc")),n=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t.multi?a("multi-select",{ref:"multiSelectDialog",attrs:{options:t.options,title:t.title,"right-btn":t.rightBtn,editabled:t.editabled},on:{onSelect:t.onHandleSelect,rightBtnEvent:t.showCustomDialog},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[t._t("default")],2):a("single-select",{ref:"singleSelectDialog",attrs:{options:t.options,"options-disabled":t.optionsDisabled,title:t.title,"right-btn":t.rightBtn,grouping:t.grouping,"auto-open":!0,"before-open":t.beforeOpen,"standard-unit":t.standardUnit,editabled:t.editabled,"form-check":t.formCheck},on:{onSelect:t.onHandleSelect,rightBtnEvent:t.showCustomDialog},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),a("van-dialog",{attrs:{"show-cancel-button":"","get-container":"body","class-name":"custom-material-dialog","cancel-button-color":"#666","before-close":t.customSubmit},model:{value:t.showCustom,callback:function(e){t.showCustom=e},expression:"showCustom"}},[a("div",{on:{click:function(){t.$refs["custom-input"].blur()}}},["3"===t.customType?t._l(t.materialCategory,(function(e,r){return a("span",{key:"cate-"+r,staticClass:"mr5 mb5",class:t.customMaterialCategory===e?"checked":"",on:{click:function(a){t.selectMaterialCategory(e)}}},[t._v(t._s(e))])})):t._e(),a("div",{class:{"new-name":!0,error:t.customFormError&&!t.customName}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.customName,expression:"customName"}],ref:"custom-input",attrs:{placeholder:"请输入"+t.title,maxlength:"20"},domProps:{value:t.customName},on:{click:function(t){t.stopPropagation()},input:function(e){e.target.composing||(t.customName=e.target.value)}}})]),"2"===t.customType||"3"===t.customType?[a("p",{class:{error:t.customFormError&&!t.customMaterialUnit}},[t._v("请选择数量单位")]),a("div",{staticClass:"untis"},t._l(t.units,(function(e,r){return a("span",{key:"unit-"+r,class:t.customMaterialUnit===e.name?"checked":"",on:{click:function(a){t.selectCustomMaterialUnit(e)}}},[t._v(t._s(e.name))])})))]:t._e()],2)])],1)}),[],!1,null,"6fc312fe",null);e.a=n.exports},d18d:function(t,e,a){"use strict";(function(t){a("2b45");var r,i=a("4360"),n=a("48f4"),o=a("162a"),s=a("e2a7"),c=a("a500"),l=a("6f9e"),u={};e.a={name:"Scroller",props:{buildingId:{type:String,default:""},hasNext:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},isSync:{type:Boolean,default:!0},endText:{type:String,default:""},memoryScrollTop:{type:Boolean,default:!0},keepScrollTop:{type:Boolean},hasPullDown:{type:Boolean,default:!0},onPullDown:{type:Function}},data:function(){return{pullDist:0,refreshing:!1,pulling:!1,loading:!1,scrollTop:0,isCurrKeyboard:!1,gapBottom:0}},computed:{allowPullDown:function(){return this.hasPullDown&&(!!this.$listeners.pullDown||!!this.onPullDown)},updateTime:function(){return i.a.state.global.businessDownloadTime},numberKeyboardCoverHeight:function(){return i.a.state.global.isNumberInputOpen?i.a.state.global.numberKeyboardHeight-this.gapBottom:0}},mounted:function(){var t=this;l.a.$on("numberKeyboardOpen",this.onNumberKeyboardOpen),this.$nextTick((function(){var e=t.$refs["scroll-warp"]&&t.$refs["scroll-warp"].getBoundingClientRect&&t.$refs["scroll-warp"].getBoundingClientRect();e&&(t.gapBottom=document.documentElement.clientHeight-e.bottom),t.$el&&t.$el.addEventListener("focus",(function(e){var a=e&&e.target,r=a&&a.tagName&&a.tagName.toLowerCase();if("input"===r||"textarea"===r){window.addEventListener("resize",(function e(){var r=a.getBoundingClientRect(),i=t.$el.getBoundingClientRect(),n=r.bottom-i.bottom;n>0&&t.scrollBy(n),window.removeEventListener("resize",e,!1)}),!1)}}),!0)}))},destroyed:function(){l.a.$off("numberKeyboardOpen",this.onNumberKeyboardOpen)},activated:function(){var t=this.keepScrollTop||this.$router.isBack&&this.memoryScrollTop;this.scrollTop&&t&&(this.$refs["scroll-warp"].scrollTop=this.scrollTop)},deactivated:function(){this.memoryScrollTop&&(this.scrollTop=this.$refs["scroll-warp"].scrollTop)},methods:{onScroll:function(t){var e=this,a=this.$refs["scroll-warp"].scrollTop,r=this.$refs["scroll-warp"].scrollHeight;if(a+this.$refs["scroll-warp"].clientHeight>=r-5&&!this.loading&&this.hasNext){this.loading=!0;var i=this.$listeners.loadNext();i&&i.then&&"function"==typeof i.then?i.then((function(){e.loading=!1})):this.loading=!1}this.$emit("scroll",t)},getTouchDiretion:function(t){if(!(u&&t&&t.touches&&t.touches[0]))return"";var e=t.touches[0].clientX,a=t.touches[0].clientY;return Math.abs(a-u.y)>Math.abs(e-u.x)&&Math.abs(a-u.y)>=3?a>u.y?"down":"up":""},onTouchstart:function(t){this.allowPullDown&&t.touches&&1===t.touches.length&&(u={x:t.touches[0].clientX,y:t.touches[0].clientY,scrollTop:this.$refs["scroll-warp"].scrollTop,pullDist:this.pullDist})},onTouchmove:function(t){if(this.allowPullDown&&t.touches&&1===t.touches.length){var e=this.$refs["scroll-warp"].scrollTop,a=t.touches[0].clientY,r=a-u.y,i=this.getTouchDiretion(t);"down"===i?!this.refreshing&&e<=0?(this.pulling=!0,this.pullDist=(r-u.scrollTop)/2,t.preventDefault()):this.pulling=!1:"up"===i?this.pullDist>0&&(this.pullDist=u.pullDist-(u.y-a),t.preventDefault()):this.pullDist=u.pullDist}},onTouchend:function(){var t=this;this.allowPullDown&&(u={},this.pulling=!1,this.pullDist>=70&&this.isSync?this.refreshing?this.makePullTo(70):this.makePullTo(70).then((function(){if(t.refreshing=!0,t.onPullDown){var e=t.onPullDown();e&&e.then&&"function"==typeof e?e.finally((function(){t.refreshing=!1,t.makePullTo(0)})):(t.refreshing=!1,t.makePullTo(0))}else t.dataSync().then((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")})).catch((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")}))})):(this.refreshing=!1,this.makePullTo(0)))},makePullTo:function(t){var e=this,a=this.pullDist,r=t,i=r-a,n=a;return a===r?Promise.resolve():new Promise((function(t){!function o(){window.requestAnimationFrame((function(){n+=i/6,e.pullDist=n,a<r&&n<r||a>r&&n>r?o():(e.pullDist=r,e.refreshing=!1,t())}))}()}))},dataSync:function(){var t,e=n.default.getCurrentModuleCode(),a=n.default.getCurrentRoute(),r=a.meta&&a.meta.isTodo;if(n.default.isModuleNeedBuilding(e)&&!r){if(!this.buildingId)return new Promise((function(t){setTimeout((function(){t()}),500)}));t=this.buildingId}return c.a.addTrack("公共-手动下拉刷新","",""),o.a.beginManualUpdate(),n.default.checkSync(t).then((function(t){return o.a.endManualUpdate(),t})).catch((function(t){$log.error("下拉刷新错误",t),t&&"Error: Network Error"===t.toString()?s.a.alert("当前网络无法同步数据"):s.a.alert(t),o.a.endManualUpdate()}))},getScrollHeight:function(){return this.$refs["scroll-warp"].offsetHeight},getScrollTop:function(){return this.$refs["scroll-warp"].scrollTop},setScrollTop:function(t){this.$refs["scroll-warp"].scrollTop=t},scrollBy:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,i=this.getScrollTop(),n=i+t,o=Math.round(a/16.7),s=t/o,c=i,l=r=+new Date;return i===n?Promise.resolve():new Promise((function(t){!function a(){window.requestAnimationFrame((function(){l===r&&(c+=s,e.$refs["scroll-warp"].scrollTop=c,i<n&&c<n||i>n&&c>n?a():(e.$refs["scroll-warp"].scrollTop=n,t()))}))}()}))},scrollTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,a=this.getScrollTop(),r=t-a;return this.scrollBy(r,e)},scrollToEle:function(t){var e=t.keyboardHeight||232,a=(t=t.$el?t.$el:t).getBoundingClientRect(),r=this.$refs["scroll-warp"].getBoundingClientRect();if(a&&r){var n=document.documentElement.clientHeight-(i.a.state.global.isNumberInputOpen?e:0),o=r.bottom<n?r.bottom:n,s=r.top-a.top,c=a.bottom-o;s>0?this.scrollBy(-s-10):c>0&&this.scrollBy(c+10)}},isCurrent:function(e,a){var r=this;e.length&&t.each(e,(function(t){t._uid===a?r.isCurrKeyboard=!0:r.isCurrent(t.$children,a)}))},onNumberKeyboardOpen:function(t){this.isCurrKeyboard=!1,this.isCurrent(this.$children,t._uid),this.isCurrKeyboard&&this.scrollToEle(t)}}}}).call(this,a("391c"))},e9d7:function(t,e,a){"use strict";a("aa1f")},ef48:function(t,e,a){var r=a("9d55");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a("85cb").default)("a1a65c0c",r,!0,{sourceMap:!1,shadowMode:!1})}}]);