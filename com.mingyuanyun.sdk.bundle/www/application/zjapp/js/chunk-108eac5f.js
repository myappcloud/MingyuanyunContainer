(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-108eac5f"],{"6baf":function(t,e,a){"use strict";a("7044")},7044:function(t,e,a){var n=a("c7cf");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("85cb").default)("caa24a2c",n,!0,{sourceMap:!1,shadowMode:!1})},"73f9":function(t,e,a){"use strict";a.r(e);var n=a("7969").a,c=(a("6baf"),a("17cc")),s=Object(c.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:2===t.tabIndex,expression:"tabIndex === 2"}],staticClass:"tab-item-wrap"},[(t.editAuth||t.viewAuth)&&t.isHasNetwork?a("scroller",{ref:"scroller"},[a("problem-detail-header",{staticClass:"bg-white",attrs:{status:t.currentStatus,"status-text":t.currentStatus}}),a("detail-header-content",{attrs:{"checkitem-data":t.checkItemData,"place-data":t.placeData,construct:t.construct,"process-mode":t.processMode,"accept-id":t.acceptId,"batch-name":t.customAcceptBatch.name,"is-batch-operation":t.isBatchOperation,"batch-data":t.batchData}}),a("process-accept-detail",{staticClass:"mt10",attrs:{"check-type":"spotcheck","detail-data":t.spotcheckData,"user-options":t.userOptions,"process-mode":t.processMode,"accept-id":t.acceptId,"is-edit-status":t.isEditStatus,"dis-edit-force":!t.isEditStatus},on:{problemValueChange:t.problemValueChange,setDetailStatus:t.setDetailStatus}}),t.hasDraft?a("app-button-group",[a("app-button",{attrs:{type:"text",name:"删除此草稿"},on:{click:function(e){t.onClickDelDraft()}}})],1):t._e()],1):t._e(),(t.editAuth||t.viewAuth)&&t.isHasNetwork?[a("overall-result",{attrs:{"detail-data":t.spotcheckData,"no-button":!t.isEditStatus}}),t.isEditStatus?a("app-button-group",{attrs:{seamless:"","fixed-bottom":""}},[t.isFormV3List?a("app-button",{class:{"btn-color-gray":t.isBatchOperation},staticStyle:{width:"50%"},attrs:{plain:""},on:{click:t.onClickSave}},[t._v("\n        暂存\n      ")]):t._e(),a("app-button",{ref:"spotcheckButton",on:{click:t.onClickSubmit}},[t._v("通过")])],1):t._e()]:t._e(),(t.editAuth||t.viewAuth)&&t.isHasNetwork?t._e():a("loading-status",{attrs:{"is-empty":!t.editAuth&&!t.viewAuth,type:t.isHasNetwork?"common":"error","empty-text":t.isHasNetwork?"暂无抽验记录":"当前无网络"}})],2)}),[],!1,null,"6264de67",null);e.default=s.exports},7969:function(t,e,a){"use strict";(function(t){a("cc57"),a("6d57"),a("06a2"),a("c904"),a("6a61");var n,c=a("2e91"),s=(a("163d"),a("e2a7")),o=a("5750"),r=(a("3122"),a("5dc5"));e.a={components:{Scroller:function(){return Promise.resolve().then(a.bind(null,"774b"))},OverallResult:function(){return a.e("chunk-4d7a5a3b").then(a.bind(null,"3fd3"))},ProblemDetailHeader:function(){return Promise.resolve().then(a.bind(null,"da1c"))},DetailHeaderContent:function(){return a.e("chunk-8f1bb452").then(a.bind(null,"8b99"))},ProcessAcceptDetail:function(){return Promise.resolve().then(a.bind(null,"9428"))}},props:{tabIndex:{type:Number},isHasNetwork:{type:Boolean,default:!0},isBatchOperation:{type:Boolean,default:!1},isEditStatus:{type:Boolean,default:!1},editAuth:{type:Boolean,default:!1},viewAuth:{type:Boolean,default:!1},isFormV3List:{type:Boolean,default:!1},acceptId:{type:String,default:""},uuId:{type:String,default:""},hasDraft:{type:Boolean,default:!1},construct:{type:Object,default:function(){}},processMode:{type:Number,default:1},operationType:{type:String,default:""},currentStatus:{type:String,default:"待报验"},customAcceptBatch:{type:Object,default:function(){}},batchData:{type:Array,default:function(){return[]}},spotcheckData:{type:Object,default:function(){}},checkItemData:{type:Object,default:function(){}},placeData:{type:Object,default:function(){}},contractorOptions:{type:Array,default:function(){return[]}},userOptions:{type:Array,default:function(){return[]}}},data:function(){return{current_process_id:""}},computed:{},methods:{onClickSave:(n=Object(c.a)(regeneratorRuntime.mark((function t(){var e,a,n,c,o,i,p,u,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.isBatchOperation){t.next=2;break}return t.abrupt("return",s.a.alert("批量操作模式下不可暂存"));case 2:return e=this.placeData,a=e.section_id,n=e.building_id,c=e.unit,o=e.floor,i=e.room_id,p=e.inspection_lot_id,u=e.inspection_lot_name,d={uuId:this.uuId,spotcheck:this.spotcheckData,bidsection_id:a,building_id:n,unit:c,floor:o,room_id:i,inspection_lot_id:p,inspection_lot_name:u,process_mode:this.processMode,checkItemId:this.checkItemData.id,currentDataStatus:this.currentStatus,placeData:this.placeData,construct:this.construct},console.log("saveDraft",d),t.next=7,Object(r.j)(d);case 7:this.$emit("updateHasDraft",!0),s.a.alert("暂存成功");case 9:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),onClickDelDraft:function(){var t=this;s.a.confirm("确定要删除此草稿吗？",(function(){return Object(r.b)().then((function(){return s.a.alert("删除成功").then((function(){t.$router.go(-1)}))}))}))},problemValueChange:function(t){t=Object(r.h)(t)},setDetailStatus:function(t,e,a){var n;n=t.status===e?"":e,this.$set(t,"status",n),a=Object(r.h)(a),this.$emit("updateSpotcheck",a)},onClickSubmit:function(){var e=this,a=this.spotcheckData,n=Object(r.g)(a,this.construct.id).errMsg;if(n)return s.a.alert(n);var c=[],i=[];return this.$refs.spotcheckButton&&this.$refs.spotcheckButton.setActive(),t.each(a.process_checkpoint||[],(function(t){i.push(Object(r.l)(t.image_file).then((function(e){c.push({checkpoint_id:t.id,title:t.title,content:t.content,sort:t.sort,is_fill:t.is_fill,image_file:JSON.stringify(e)})})))})),Promise.all(i).then((function(){var n=[];t.each(a.process_type||[],(function(t){n.push({item_type_id:t.id,proj_type:t.proj_type,accept_type:t.accept_type,is_jilt_item:t.is_jilt_item,name:t.name,content:t.content,sort:t.sort,status:t.status,rate:t.rate,problem_values:JSON.stringify(t.problem_values),problem_points:t.problem_points,measurement_points:t.measurement_points,standard_symbol:t.standard_symbol||"",standard:t.standard||""})}));var i=t.map(a.acceptor_user,"id"),p=t.map(a.cc_set,"id"),u={accept_id:e.acceptId,project_type_data:JSON.stringify(n),checkpoint_data:JSON.stringify(c),master_status:a.sum.masterStatus,common_status:a.sum.commonStatus,measure_lowest_rate:a.sum.lowest,remark:a.remark||"",acceptor_user:JSON.stringify(i),cc:JSON.stringify(p)};return e.isBatchOperation?(e.$emit("batchAlert",!0),Object(r.a)(u,e.batchData,e.operationType,e.processMode).then((function(t){e.$router.go(-1)})).catch((function(t){-1===t.errcode&&s.a.notify(t.errmsg).then((function(){return e.$router.go(-1)}))})).finally((function(t){e.$emit("batchAlert",!1),e.$refs.spotcheckButton&&e.$refs.spotcheckButton.setNormal()}))):Object(o.u)(u).then((function(){Object(r.b)(),e.$emit("init",e.acceptId,!0)})).catch((function(t){return s.a.alert(t.errmsg||t)}))}))}}}}).call(this,a("391c"))},c7cf:function(t,e,a){(t.exports=a("690e")(!1)).push([t.i,".zjapp .tab-item-wrap[data-v-6264de67]{display:flex;flex-direction:column;flex:1;height:100%}.zjapp .tab-item-wrap .process-accept-v3-nodes[data-v-6264de67] {margin:10px 0 0}.zjapp .tab-item-wrap .process-accept-v3-nodes[data-v-6264de67] .van-tabs--line .van-tabs__wrap{height:120px;padding-top:10px;background:#fff}.zjapp .tab-item-wrap .process-accept-v3-nodes[data-v-6264de67] .van-tabs--line .van-tabs__wrap:after{border:none}.zjapp .tab-item-wrap .process-accept-v3-nodes[data-v-6264de67] .van-tabs__nav{padding-left:15px;padding-right:15px;padding-bottom:0;background-image:none}.zjapp .tab-item-wrap .process-accept-v3-nodes[data-v-6264de67] .van-tabs__line{display:none}.zjapp .tab-item-wrap .process-accept-v3-nodes[data-v-6264de67] .van-tabs .van-tab{flex:1 0 auto!important;padding-right:8px!important;padding-left:0!important}.zjapp .tab-item-wrap .process-accept-v3-nodes[data-v-6264de67] .van-tabs .van-tab:first-child{max-width:58px}.zjapp .tab-item-wrap .process-accept-v3-nodes[data-v-6264de67] .van-tabs .van-tab:not(:first-child){max-width:93px}.zjapp .tab-item-wrap .process-accept-v3-nodes[data-v-6264de67] .van-ellipsis{overflow:visible;white-space:normal}.zjapp .tab-item-wrap .process-accept-v3-nodes[data-v-6264de67] .van-tab--active .node-name{color:#4275e8}.zjapp .tab-item-wrap .process-accept-v3-nodes[data-v-6264de67] .van-tab--active .node-avatar-name{color:#fff}.zjapp .tab-item-wrap .process-accept-v3-nodes[data-v-6264de67] .van-tab--active .node-avatar{background-color:#4275e8;border:1px solid #4275e8}.zjapp .tab-item-wrap .process-accept-v3-nodes[data-v-6264de67] .van-tab--active .icon-avatar-start{color:#fff}.zjapp .tab-item-wrap .process-accept-v3-nodes[data-v-6264de67] .van-tab--active .node-line{background:#4275e8}",""])}}]);