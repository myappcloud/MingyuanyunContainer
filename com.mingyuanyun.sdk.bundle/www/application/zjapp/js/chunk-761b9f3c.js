(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-761b9f3c"],{"3c772":function(t,a,e){"use strict";e("44c2")},"44c2":function(t,a,e){var i=e("f8be");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e("85cb").default)("76c842bd",i,!0,{sourceMap:!1,shadowMode:!1})},"788b":function(t,a,e){var i=e("8cca");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e("85cb").default)("44b486a8",i,!0,{sourceMap:!1,shadowMode:!1})},"8bd3":function(t,a,e){"use strict";e.r(a);e("cc57");var i=e("e2a7"),o=e("3bd5"),s=e("fd50"),c=e("3516"),n=e("7b81"),p=e("9864"),r=e("07d2"),l={name:"FlyInspectSafetyBatchDetail",components:{CheckUserContact:p.a,Item:r.default},data:function(){return{isLoading:!1,batchId:"",batch:{},batchData:{},editable:!1,mode:""}},activated:function(){$log.log("飞检&专项批次详情，activated"),this.init()},methods:{init:function(){var t=this,a=this.$route.params;this.isLoading=!0,this.batchId=a&&a.id?a.id:"",s.a.all([c.a.getBatch(this.batchId),c.a.getBatchUsers(this.batchId),c.a.getCheckTemplate(this.batchId)]).then((function(a){t.batch=a[0];var e=a[1];t.editable=t.batch.in_charge_by===o.a.getUser().user_id,c.a.getCheckTemplate(t.batch.template_id).then((function(a){t.batchData={name:t.batch.name,timeLimit:t.batch.repair_deadline,bidsection:a?a.name:"模板已在PC端被删除",inspector:e,room:[],type:"飞检&专项",item_name:t.batch.item_name,purpose:t.batch.batch_purpose||"正式",created_on:t.batch.created_on,proj_name:t.batch.proj_name}})),n.a.getUsersByIds([t.batch.in_charge_by||t.batch.created_by]).then((function(a){a[0]=a[0]?[a[0]]:[],t.$set(t.batchData,"charger_info",a[0])})),t.isLoading=!1}))},batchDelete:function(){var t=this;this.batch.id&&("测试"===this.batch.batch_purpose||"1"!==this.batch.is_downloaded?i.a.confirm("确定要删除批次吗？",(function(){i.a.loading("请稍等..."),c.a.deleteBatch(t.batch.id).then((function(){t.$router.go(-1),i.a.hideLoading()})).catch((function(t){i.a.hideLoading(),i.a.alert(t.errmsg)}))})):i.a.alert("被他人下载过的批次不能删除"))},closeBatch:function(){var t=this;this.batch.id&&i.a.confirm("关闭批次后，在APP将看不到该批次及相关问题，可在PC端统计报表中查看。确定关闭批次？",(function(){i.a.loading("请稍等..."),c.a.closeBatch(t.batch.id).then((function(){t.$router.go(-1)})).catch((function(t){i.a.alert(t)})).finally((function(){i.a.hideLoading()}))}))},batchEdit:function(){this.batchId?this.$router.push("/fly-inspect-batch-edit/".concat(this.batchId)):i.a.alert("缺少批次id")}}},d=(e("3c772"),e("17cc")),u=Object(d.a)(l,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("page-content",{attrs:{title:"批次详情","show-go-root":!0}},[e("div",{staticClass:"content-wrap"},[t.isLoading?t._e():e("div",{staticClass:"list bg-white pt10 pb10 border"},[e("item",{attrs:{label:"项目",text:t.batchData.proj_name}}),e("item",{attrs:{label:"批次名称",text:t.batchData.name}}),e("item",{attrs:{label:"检查模板",text:t.batchData.bidsection}}),e("item",{attrs:{label:"检查人"}},[e("div",{staticClass:"item-text",attrs:{slot:"right"},slot:"right"},[e("check-user-contact",{attrs:{list:t.batchData.inspector}})],1)]),e("item",{attrs:{label:"创建人"}},[e("div",{staticClass:"item-text",attrs:{slot:"right"},slot:"right"},[e("check-user-contact",{attrs:{list:t.batchData.charger_info}}),e("div",{staticClass:"color-light mt10"},[t._v(t._s(t._f("formatDate")(t.batchData.created_on)))])],1)])],1),t.editable&&!t.isLoading?e("app-button-group",{attrs:{direction:"row"}},[e("app-button",{attrs:{type:"operate","data-track":"飞检&专项-批次列表-删除批次"},on:{click:t.batchDelete}},[t._v("\n        删除\n      ")]),e("app-button",{attrs:{type:"operate"},on:{click:t.closeBatch}},[t._v("\n        关闭\n      ")]),e("app-button",{attrs:{type:"operate","data-track":"飞检&专项-批次列表-修改批次"},on:{click:t.batchEdit}},[t._v("\n        修改\n      ")])],1):t._e(),e("loading-status",{attrs:{"is-loading":t.isLoading}})],1)])}),[],!1,null,"24cf31aa",null);a.default=u.exports},"8cca":function(t,a,e){var i=e("5454");(t.exports=e("690e")(!1)).push([t.i,".zjapp .item-user-unit[data-v-2ccee61c]{position:relative;display:inline-block;vertical-align:top;font-size:0}.zjapp .item-user-name[data-v-2ccee61c]{font-size:16px;display:inline-block;vertical-align:middle}.zjapp .icon-im-btn[data-v-2ccee61c]{position:relative;z-index:5;display:inline-block;vertical-align:middle;width:34px;height:22px;background:url("+i(e("f77a"))+") no-repeat 6px;background-size:16px 10px}.zjapp .popup-user-im[data-v-2ccee61c]{position:absolute;z-index:5;bottom:30px;left:50%;margin-left:-65px;padding:0 5px;width:130px;height:60px;background-color:rgba(0,0,0,.8);border-radius:5px}.zjapp .popup-user-im-item[data-v-2ccee61c]{float:left;width:60px;height:60px;text-align:center;color:#fff;padding-top:10px}.zjapp .popup-user-im-item.disabled[data-v-2ccee61c]{color:#666}.zjapp .popup-user-im-arrow[data-v-2ccee61c]{position:absolute;bottom:-5px;left:50%;margin-left:-5px;border:5px solid transparent;border-bottom:none;border-top-color:rgba(0,0,0,.8)}.zjapp .popup-user-im-icon[data-v-2ccee61c]{display:block;font-size:21px}.zjapp .popup-user-im-text[data-v-2ccee61c]{font-size:12px;line-height:16px;margin-top:4px}.zjapp .popup-user-posi-bottom[data-v-2ccee61c]{bottom:auto;top:30px}.zjapp .popup-user-posi-bottom .popup-user-im-arrow[data-v-2ccee61c]{top:-5px;bottom:auto;border-top:none;border-bottom:5px solid rgba(0,0,0,.8)}",""])},9864:function(t,a,e){"use strict";var i=e("cdce").a,o=(e("c509"),e("17cc")),s=Object(o.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"root"},[t.list.length?t._e():e("div",{staticClass:"item-user-unit"},[e("span",{staticClass:"item-user-name"},[t._v("\n      无\n    ")])]),t._l(t.list,(function(a,i){return e("div",{key:i,staticClass:"item-user-unit"},[e("span",{staticClass:"item-user-name"},[t._v("\n      "+t._s(a&&a.name?a.name:"")+"\n    ")]),e("div",{staticClass:"icon-im-btn",on:{click:function(e){if(e.stopPropagation(),e.target!==e.currentTarget)return null;t.openImPopup(a,e)}}},[t.popupOpenItemId===a.id?e("div",{staticClass:"popup-user-im",class:{"popup-user-posi-bottom":t.popupUserPosiBottom},style:{left:t.popupL}},[e("div",{directives:[{name:"track",rawName:"v-track",value:"公共-发起聊天",expression:"'公共-发起聊天'"}],staticClass:"popup-user-im-item",class:{disabled:t.isImDisabled(a)},on:{click:function(e){t.openIm(a)}}},[e("icon",{staticClass:"popup-user-im-icon",attrs:{name:"liaotian"}}),e("p",{staticClass:"popup-user-im-text"},[t._v("聊天")])],1),a.mobile&&t.userInfo.user_id!==a.id?e("a",{directives:[{name:"track",rawName:"v-track",value:"公共-打电话",expression:"'公共-打电话'"}],staticClass:"popup-user-im-item",attrs:{href:"tel:"+a.mobile}},[e("icon",{staticClass:"popup-user-im-icon",attrs:{name:"dianhua"}}),e("p",{staticClass:"popup-user-im-text"},[t._v("电话")])],1):e("div",{staticClass:"popup-user-im-item disabled"},[e("icon",{staticClass:"popup-user-im-icon",attrs:{name:"dianhua"}}),e("p",{staticClass:"popup-user-im-text"},[t._v("电话")])],1),e("div",{staticClass:"popup-user-im-arrow",style:{left:t.arrowL}})]):t._e()])])}))],2)}),[],!1,null,"2ccee61c",null);a.a=s.exports},c509:function(t,a,e){"use strict";e("788b")},cdce:function(t,a,e){"use strict";(function(t){e("cc57");var i=e("4360"),o=e("3bd5"),s=e("1601"),c=e("e2a7"),n=e("6f9e");a.a={name:"CheckUserContact",props:{list:{type:Array,default:function(){return[]}}},data:function(){return{popupOpenItemId:"",popupL:"50%",arrowL:"50%",popupUserPosiBottom:!1}},computed:{allowIM:function(){return window&&window.$rootScope&&window.$rootScope.allowIM},userInfo:function(){return o.a.getUser()}},created:function(){n.a.$on("pageContentClick",this.closeImPopup)},destroyed:function(){n.a.$off("pageContentClick",this.closeImPopup)},methods:{hasIm:function(t){return!!parseInt(t.is_im_user)},openImPopup:function(t,a){if($log.log("打开聊天窗口",t),n.a.$emit("pageContentClick"),this.popupOpenItemId=t.id,a&&a.target){var e=a.target.getBoundingClientRect(),o=window.innerWidth,s=i.a.state.app.isIOS?i.a.state.app.isIOSBezelLess?88:64:44;e.top<s+68?this.popupUserPosiBottom=!0:this.popupUserPosiBottom=!1,o-e.right<50?(this.popupL=16-(50-(o-e.right))+"px",this.arrowL=50-(o-e.right)+65+"px"):(this.popupL="50%",this.arrowL="50%")}},closeImPopup:function(){this.popupOpenItemId=""},openIm:function(a){var e=this.isImDisabled(a),i=this.allowIM&&!e;if(console.log(e,i,this.allowIM),i)if(t.has(a,"headimg_url")){var o=this.userInfo.tenant_code+"_"+a.id;s.a.openIm(o,a.name,a.headimg_url).catch((function(t){c.a.alert(t)}))}else s.a.openUserChat(a.id).catch((function(t){c.a.alert(t)}));else c.a.alert("聊天功能优化中暂不可用")},isImDisabled:function(t){return 1!==parseInt(t.is_im_user)||t.id===this.userInfo.user_id}}}}).call(this,e("391c"))},f77a:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAeCAYAAABqpJ3BAAAAAXNSR0IArs4c6QAAAnlJREFUWAntmD1PFEEYx2dmbxUhd0eABAQsjAap0AIagYYYayWUxMaCaIJQGg1kQ0VNAdkY/QA0JH4AQyEdDRdB74xGQ4CYUABnJMfezsM8JHvKMs8ei4GdGDe57O3zMvP7z8vO7HBW5QIAPjmX65Oc93JgrcDY5Sop5+JW9ZY4Z5sCYGnqSdd7zhWNunhUbdPul2zRLz5mTNyKirtoHwD7lEnVvXk+cmNXUJVjy5sIj7yqJzqRDRktSoBsHuwHJgYof/J23rS4/GOH7AEc88lDRhMgIykAJ2x0evJeZCQFJPW2idMsyEgKiFNQkrH/BSTZ+li3tgdcF+ykwU5b/4mV2Jn5nPHs/acM2PXTFpJk3DEBL9y1q8LzRkHwxrhQtiXEw4G27o5r6Q7MLawXCwvvNpY9X0pdWXHjdWWgrbISO26u0y/740zwDBUcZR+6197TdbP+TiolbPw1N9S0NGQvidWvexu6vLjxujLQdjQHJuY+9B5IeKZ2eFeowGr2oOX/jNPZAr/Op7MF8dRdOK9W2iXIRzxiX0Qlm2AXjKd+qRXN+1sYHPPhMnS2IEbn09mCeOpuLb6d3b//YOyjD+XbaqN65o+VwvefWzjms3V2puyDt/ZtbxUnsVR7Xl3lceN1ZaCt8hZy3HyT55dGla2FCjbRXhGAcI67WXtQ3h7BDwYTYXVMxwRgwPw8WCvbuWHVOXd1CabZTggIAF/O5tzgv8l37V7IZOAw278rQI2tUlitac/ISPYAqEMk04DDPMhICsATsHCCac/ISArA4zvGZN406N88Mo+MpAA8e0xb6ddmipB5ZENGch0IlJpyuIsT9mjMhw53DwElT/W1PxsJFAAAAABJRU5ErkJggg=="},f8be:function(t,a,e){(t.exports=e("690e")(!1)).push([t.i,".zjapp .content-wrap[data-v-24cf31aa]{max-height:100%;overflow:auto;padding-bottom:50px}",""])}}]);