(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["report-process-accept-project-pile-detail","chunk-1cd94a56"],{"0732":function(t,e,i){var a=i("81f2");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i("85cb").default)("1b5b07de",a,!0,{sourceMap:!1,shadowMode:!1})},"0dc0":function(t,e,i){var a=i("0e64");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i("85cb").default)("6e89c5c9",a,!0,{sourceMap:!1,shadowMode:!1})},"0e64":function(t,e,i){(t.exports=i("690e")(!1)).push([t.i,".zjapp .list[data-v-2059d84c]{margin-bottom:10px}.zjapp .item-base[data-v-2059d84c]{align-items:center;border:none;background-image:linear-gradient(0deg,#dcdcdc,#dcdcdc 33.3333%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:bottom}.zjapp .item-base[data-v-2059d84c] .van-icon{position:relative;display:block;padding-right:10px;margin-right:-10px;width:34px;height:34px;line-height:34px;text-align:right;font-size:20px;color:#c8c8c8}.zjapp .btn[data-v-2059d84c]{border-radius:0}.zjapp .btn-link[data-v-2059d84c]{background:#fff;color:#4275e8}",""])},"1def5":function(t,e,i){"use strict";(function(t){i("cc57"),i("9a33");var a=i("774b"),n=i("e68e"),o=i("cd05"),s=i("f369"),c=i("162a");e.a={components:{Scroller:a.default,ItemImgList:n.a,UserSelect:o.a,CheckGuide:s.a},data:function(){return{isLoading:!0,baseInfo:{},problemData:{acceptor:[],partners:[],cc:[]}}},activated:function(){var t=this.$route.query;this.loadData(t.id)},methods:{loadData:function(e){var i=this;return console.log({id:e}),c.a.request("/project-map/get-process-accept-detail",{id:e}).then((function(e){i.problemData=e,e.unit=e.unit&&e.unit.indexOf("单元")<0?e.unit+"单元":e.unit,e.floor=e.floor&&e.floor.indexOf("层")<0?e.floor+"层":e.floor,e.floors=e.floors?e.floors.split(","):[],e.floor_text="",t.each(e.floors,(function(t,i){t=t&&t.indexOf("层")<0?t+"层":t,e.floor_text=e.floor_text+(i?"、":"")+t})),"1"===e.process_mode?e.placeName=e.room_no:"2"===e.process_mode?e.placeName=e.floor_text:"3"===e.process_mode?e.placeName="整栋":"4"===e.process_mode?e.placeName="":"5"===e.process_mode&&(e.placeName=e.floor_text),e.image_file_view=[],e.problem_values_view=[],e.problem_values=JSON.parse(e.problem_values||"[]"),t.each(e.details,(function(t){t.problem_values?t.problem_values=JSON.parse(t.problem_values):t.problem_values=[],e.image_file_view=e.image_file_view.concat(t.image_file),e.problem_values_view=e.problem_values_view.concat(t.problem_values)})),t.each(e.users,(function(t){t.is_im_user=parseInt(t.is_im_user)})),e.drawing_file=JSON.parse(e.drawing_file||"[]"),e.roomtype_diagram=t.isEmpty(e.drawing_file)?"":e.drawing_file[0].url,e.isSingleRoomAndDiagram="1"===e.process_mode&&e.drawing_file.length,e.isPointImageMode=!t.some(e.details,(function(t){return!(!t.image_file||"[]"===t.image_file||t.problem_values&&t.problem_values.length)})),i.problemData.acceptor=t.filter(e.users,{type:"验收人"})||{},t.each(i.problemData.acceptor,(function(t){t.date=t.accept_date,t.user={id:t.id,name:t.name,mobile:t.mobile,is_im_user:t.is_im_user}})),i.problemData.partners=t.filter(e.users,{type:"同验人"}),i.problemData.cc=t.filter(e.users,{type:"抄送人"}),i.isLoading=!1})).catch((function(){i.isLoading=!1}))}}}}).call(this,i("391c"))},2055:function(t,e,i){"use strict";i.r(e);var a=i("1def5").a,n=(i("df63"),i("c39c"),i("17cc")),o=Object(n.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("page-content",{attrs:{title:"工序验收","show-go-root":"Report"}},[i("check-guide",{attrs:{slot:"header-bar-right","item-id":t.problemData.item_id},slot:"header-bar-right"}),t.isLoading?t._e():i("scroller",[i("div",{staticClass:"list process-accept-detail-header"},[i("h4",{staticClass:"process-accept-detail-title f18 color-black"},[t._v(t._s(t.problemData.check_item_name))]),i("p",{staticClass:"process-accept-detail-content"},[t._v("标段："+t._s(t.problemData.bidsection_name)+"("+t._s(t.problemData.proj_name)+")")]),i("p",{staticClass:"process-accept-detail-content"},[t._v("楼栋："+t._s(t.problemData.building_name)+t._s(t.problemData.unit))]),"4"!==t.problemData.process_mode?i("p",{staticClass:"process-accept-detail-content"},[t._v("部位："+t._s(t.problemData.placeName))]):t._e()]),i("div",{staticClass:"list bg-white process-accept-detail-list"},[t.problemData.pile_address?i("div",{staticClass:"item item-base border-top mb10"},[i("i",{staticClass:"process-accept-icon-sys"}),i("div",{staticStyle:{flex:"0 0 auto",width:"54px","line-height":"34px"}},[t._v("桩号")]),i("span",{staticStyle:{flex:"auto","line-height":"34px"}},[t._v(t._s(t.problemData.pile_address))])]):t._e(),t._l(t.problemData.details,(function(e,a){return i("div",{key:a},[i("div",{staticClass:"item-base border-none process-accept-detail-item-header"},[i("i",{staticClass:"process-accept-icon-sys"}),i("div",{staticClass:"item-text"},[t._v(t._s(e.title))])]),i("div",{staticClass:"p15 border-none pt0"},[i("item-img-list",{attrs:{editabled:!1,group:"process-accept-view"},model:{value:e.image_file,callback:function(i){t.$set(e,"image_file",i)},expression:"point.image_file"}})],1)])}))],2),i("div",{staticClass:"list bg-white"},[t._l(t.problemData.acceptor,(function(e,a){return i("div",{key:a,staticClass:"process-accept-user-list"},[0===a?i("user-select",{attrs:{title:"验收人",date:t._f("formatDate")(e.date),mode:"view",editabled:!1},model:{value:e.user,callback:function(i){t.$set(e,"user",i)},expression:"item.user"}}):t._e(),0!==a?i("user-select",{attrs:{title:"",date:t._f("formatDate")(e.date),mode:"view",editabled:!1},model:{value:e.user,callback:function(i){t.$set(e,"user",i)},expression:"item.user"}}):t._e()],1)})),i("user-select",{attrs:{title:"共同验收人",multi:!0,mode:"view",editabled:!1},model:{value:t.problemData.partners,callback:function(e){t.$set(t.problemData,"partners",e)},expression:"problemData.partners"}}),i("user-select",{attrs:{title:"抄送人",multi:!0,mode:"view",editabled:!1},model:{value:t.problemData.cc,callback:function(e){t.$set(t.problemData,"cc",e)},expression:"problemData.cc"}})],2)]),i("loading-status",{attrs:{"is-loading":t.isLoading,type:"report"}})],1)}),[],!1,null,"2059d84c",null);e.default=o.exports},"302b":function(t,e,i){"use strict";i("8934")},3411:function(t,e,i){"use strict";i("ef1c")},"515e":function(t,e,i){"use strict";var a=i("329b"),n=i("f1e4").a,o=(i("302b"),i("17cc")),s=Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"slide-right"}},[t.show?i("page-content",{class:{"content-not-empty":t.content.length},attrs:{mode:"dialog",title:"检查指引","on-close":t.closePopup}},[!t.isLoading&&t.title?i("div",{staticClass:"check-guide-detail-hd border-bottom"},[i("h2",{staticClass:"check-guide-detail-title pb10"},[t._v(t._s(t.title))])]):t._e(),!t.isLoading&&t.content.length?i("div",{staticClass:"check-guide-detail-content"},t._l(t.content,(function(e,a){return i("span",{key:a},[e.isImg&&e.src?i("p",[i("img",{class:{"img-not-ready":!e.ready,error:"rejected"===e.status},attrs:{src:t.getThumbnail(e)},on:{error:function(i){t.imgError(e,a)},click:function(i){t.imgClick(e)}}})]):t._e(),e.isHref&&e.url?i("span",{staticClass:"href-text",on:{click:function(i){t.openHref(e.url)}}},[t._v("\n          "+t._s(e.val)+"\n        ")]):i("span",[t._v("\n          "+t._s(e.val)+"\n        ")]),e.joinBrToSplitLine?i("br"):t._e()])}))):t._e(),i("loading-status",{attrs:{"is-loading":t.isLoading,"is-empty":!t.content.length,"empty-text":"PC端未设置检查指引"}})],1):t._e()],1)}),[],!1,null,"092cce02",null).exports,c=!1;c||(c=new(a.default.extend(s))({el:document.createElement("div")}),document.body.appendChild(c.$el));e.a=c},6481:function(t,e,i){(t.exports=i("690e")(!1)).push([t.i,".zjapp .content-not-empty[data-v-092cce02] .layout-content{display:auto;overflow:auto;padding-bottom:100px}.zjapp .check-guide-detail-hd[data-v-092cce02]{margin-left:30px;padding:25px 30px 5px 0}.zjapp .check-guide-detail-title[data-v-092cce02]{margin:0;line-height:20px;font-size:18px;color:#111;font-weight:700;word-break:break-all}.zjapp .check-guide-detail-info[data-v-092cce02]{line-height:20px;font-size:14px;color:#8c8c8c}.zjapp .check-guide-detail-content[data-v-092cce02]{padding:30px;line-height:30px;color:#333;font-size:16px}.zjapp .check-guide-detail-content p[data-v-092cce02]{margin-bottom:30px;min-height:1em}.zjapp .check-guide-detail-content img[data-v-092cce02]{max-width:100%}.zjapp .check-guide-detail-content .img-not-ready[data-v-092cce02]{width:80px;height:auto}.zjapp .check-guide-detail-content .href-text[data-v-092cce02]{text-decoration:underline;color:#4275e8}.zjapp .error[data-v-092cce02]{max-width:50%}",""])},"81f2":function(t,e,i){(t.exports=i("690e")(!1)).push([t.i,'.zjapp .main[data-v-2cac8864]{position:fixed;width:100%;bottom:0}.zjapp .arrow[data-v-2cac8864]{position:absolute;top:-7px;right:18px;width:0;height:0;border-bottom:7px solid #fff;border-right:7px solid transparent;border-left:7px solid transparent}.zjapp .content[data-v-2cac8864]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.4);overflow:hidden}.zjapp .box[data-v-2cac8864]{display:flex;flex-direction:column;background-color:#fff;overflow:auto}.zjapp .box-single[data-v-2cac8864]{display:flex;flex-direction:column;flex:1}.zjapp .detail-hd[data-v-2cac8864]{display:flex;padding:6px 15px}.zjapp .detail-arrow-right[data-v-2cac8864]{width:13px;height:34px;overflow:hidden}.zjapp .detail-arrow-right[data-v-2cac8864]:before{display:block;content:"";width:0;height:0;margin-top:12px;border:5px solid transparent;border-left:5px solid #c8c8c8}.zjapp .detail-arrow-down[data-v-2cac8864]{width:13px;height:34px;overflow:hidden}.zjapp .detail-arrow-down[data-v-2cac8864]:before{display:block;content:"";width:0;height:0;margin-top:15px;border:5px solid transparent;border-top:5px solid #c8c8c8}.zjapp .detail-title[data-v-2cac8864]{flex:1;line-height:34px;color:#111;font-size:16px}.zjapp .detail-bd[data-v-2cac8864]{padding:8px 15px 8px 35px;background-color:#fafafa}.zjapp .text-line[data-v-2cac8864]{font-size:14px;color:#666;line-height:30px;margin-bottom:30px}.zjapp .detail-hd-single[data-v-2cac8864]{padding:6px 0;margin:0 15px}.zjapp .detail-bd-single[data-v-2cac8864]{display:flex;flex-direction:column;flex:1;padding:8px 15px;background-color:#fff}',""])},8934:function(t,e,i){var a=i("6481");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i("85cb").default)("266da06d",a,!0,{sourceMap:!1,shadowMode:!1})},"91c1":function(t,e,i){"use strict";(function(t){i("5ab2"),i("6d57"),i("e10e"),i("9a33");var a=i("28f8"),n=i("e68e"),o=i("6f9e"),s=i("bcc7"),c=i("e89f");function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){Object(a.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}e.a={name:"CheckGuideDetailDrop",components:{ItemImgList:n.a},mixins:[c.a],data:function(){return{show:!1,showList:!1,isLoading:!1,isOpening:!1,isClosing:!1,contentTop:64,listHeight:510,module:"",itemIds:[],data:[],target:""}},watch:{show:function(t){var e=this;t&&this.$nextTick((function(){e.showList=!0}))}},created:function(){o.a.$on("routerBeforeEach",this.closePopup),o.a.$on("pageContentClick",this.onClickOther)},destroyed:function(){o.a.$off("routerBeforeEach",this.closePopup),o.a.$off("pageContentClick",this.onClickOther)},methods:{openPopup:function(e){this.show=!0,this.$emit("open"),this.module=e.module,this.itemIds=e.itemIds,this.options=e.options;var i=document.querySelector(".layout-main .layout-header");if(this.contentTop=i.offsetHeight,e.el){var a=e.el.getBoundingClientRect();this.contentTop=a.bottom}this.target=e.el,this.listHeight=t.minBy([window.innerHeight-this.contentTop-50,510]),this.getData()},closePopup:function(){var t=this;if(!this.isOpening)return this.showList=!1,this.$emit("close"),new Promise((function(e){t.$on("afterClosePopup",e)}))},afterClose:function(){this.show=!1,this.isClosing=!1,this.$emit("afterClosePopup")},onClickOther:function(t){t&&t.target&&t.target!==this.target&&this.show&&this.closePopup()},getData:function(){var e=this;return this.options&&this.options.length?(this.data=t.map(this.options,(function(t){return l(l({},t),{},{isOpen:!1})})),Promise.resolve()):s.a.getMeasureCheckItem(this.itemIds).then((function(i){e.data=t.map(i,(function(e){var i=e.content?e.content.trim():"",a=i?i.split("\n"):[],n=e.content_image?JSON.parse(e.content_image):[],o=t.filter(a,(function(t){return!/<img([\s\S]*)>/gm.test(t)}));return t.each(n,(function(t){t.url=t.url.split("@")[0]})),{id:e.id,name:e.full_name,textArr:o,contentImage:n,isOpen:!1}}))})).catch((function(t){console.error(t)}))},toggleItem:function(t){this.data.length>1&&this.$set(t,"isOpen",!t.isOpen)}}}}).call(this,i("391c"))},a81c:function(t,e,i){var a=i("de25");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i("85cb").default)("60127b3e",a,!0,{sourceMap:!1,shadowMode:!1})},c39c:function(t,e,i){"use strict";i("a81c")},d1d1:function(t,e,i){"use strict";(function(t){var a=i("fd50"),n=i("bcc7"),o=i("515e"),s=i("07d2"),c=i("7bac"),r=i("a7c3"),l=i("4360");e.a={name:"CheckGuideList",components:{Item:s.default},store:l.a,data:function(){return{isLoading:!0,listData:[],module:"",itemId:"",batchId:"",sectionId:"",options:""}},computed:{moduleAttribute:function(){return this.$store.state.global.moduleAttribute}},methods:{init:function(e){var i,n=this;for(var o in this.module=e.module,this.itemId=e.itemId,this.batchId=e.batchId,this.sectionId=e.sectionId,this.options=e.options,e)this[o]=e[o];this.checkType={check:31,"check-safety":36,"check-quality":37,"measure-v3":41,process:32,"fly-inspect":101}[this.module];var s=!1;t.isEmpty(this.itemId)?!t.isEmpty(this.checkType)&&t.isEmpty(this.sectionId)?i=this.initByType():t.isEmpty(this.batchId)?t.isEmpty(this.options)?t.isEmpty(this.sectionId)?i=a.a.when():(s=!0,i=this.initByBidsection()):i=this.initByOptions():i=this.initByBatch():i=this.initById(),this.isLoading=!0,i.then((function(e){var i=n.moduleAttribute[n.module]||{};!t.isEmpty(i)&&i.setUsualItems&&s?c.a.getUserKey(n.mmkvCode()).then((function(t){t=null===t?e:n.mergeArray(n.deepClone(e),t),n.listData=t||[],n.isLoading=!1})):(n.listData=e||[],n.isLoading=!1)}))},mmkvCode:function(){var t=this.moduleAttribute[this.module]||{};return r.a[t.mmkv_item]+"_"+this.sectionId},mergeArray:function(e,i){var a=this;return t.filter(e,(function(e){var n=i[e.id];return t.isEmpty(e.subitem)||(e.subitem=a.mergeArray(e.subitem,i)),!t.isEmpty(n)||"desc"===e.type}))},clickItem:function(t){t.subitem&&t.subitem.length?this.$set(t,"isOpen",!t.isOpen):"special-inspect"===this.module?o.a.openPopup({itemId:t.id,module:this.module}):o.a.openPopup({itemId:t.item_id,module:this.module})},initById:function(){var t=this;if("special-inspect"!==this.module)return n.a.getCheckItem(this.itemId,this.checkType).then((function(e){return e?t.sectionId?n.a.getBidSectionCheckItemListByCode(t.sectionId,e.code):n.a.getCheckItemTreeByCode(e.code):a.a.when()}))},initByType:function(){return n.a.getCheckItemGuidelineList(this.checkType)},initByBatch:function(){return a.a.when()},initByBidsection:function(){return n.a.getBidSectionCheckItemTreeByType(this.sectionId,this.checkType)},initByOptions:function(){return a.a.resolve(this.options)},deepClone:function(t){return JSON.parse(JSON.stringify(t))}}}}).call(this,i("391c"))},dc98:function(t,e,i){"use strict";i("0732")},de25:function(t,e,i){(t.exports=i("690e")(!1)).push([t.i,".zjapp .process-accept-detail-header{background-color:#fff;padding:10px 15px}.zjapp .process-accept-detail-header .process-accept-detail-title{font-size:18px;color:#111;margin-bottom:10px}.zjapp .process-accept-detail-header .process-accept-detail-content{height:auto;line-height:20px;font-size:14px;color:#8c8c8c}.zjapp .process-accept-detail-list{position:relative;padding-top:1px;padding-bottom:1px;padding-left:0}.zjapp .process-accept-detail-list .process-accept-detail-item-header{position:relative;align-items:center}.zjapp .content-bottom-btn-con{text-align:center}.zjapp .delete-btn{display:inline-block!important;padding:3px 10px!important;width:80px!important;height:28px!important;border:1px solid #dcdcdc!important;background:transparent!important;line-height:20px!important;text-align:center!important;font-size:14px!important;color:#666!important;border-radius:14px!important}.zjapp .process-accept-point-content{font-size:14px;background-color:#f0f0f0;padding:10px;color:#666;border-radius:3px}.zjapp .process-accept-icon-sys{position:absolute;left:0;width:4px;height:16px;background-color:#4275e8}.zjapp .process-accept-edit-content{display:flex;flex-direction:column}.zjapp .process-accept-detail-img-list{padding:15px}.zjapp .bar-fixed-buttons{background-color:#fff;border:none;background-image:linear-gradient(180deg,#dcdcdc,#dcdcdc 100%,transparent 0);background-size:100% 1px;background-repeat:no-repeat;background-position:top;display:flex;flex-direction:horizontal;justify-content:center}.zjapp .btn-text-blue{display:block;padding:10px;margin:0 auto;width:auto;height:40px;line-height:20px;font-size:14px;color:#7a95d1;border:none;background:transparent}",""])},df63:function(t,e,i){"use strict";i("0dc0")},e9ea:function(t,e,i){(t.exports=i("690e")(!1)).push([t.i,".zjapp .guide-box[data-v-ff0679ce]{flex:1;display:flex}.zjapp .page-scroll[data-v-ff0679ce]{flex:1;overflow:auto;padding-bottom:100px;transform:translateZ(0)}.zjapp .sublist[data-v-ff0679ce]{padding-left:25px;padding-top:1px;background-color:#fff}.zjapp .sublist>.sublist[data-v-ff0679ce]{padding-left:10px;padding-top:0}",""])},ef1c:function(t,e,i){var a=i("e9ea");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i("85cb").default)("2e832052",a,!0,{sourceMap:!1,shadowMode:!1})},f1e4:function(t,e,i){"use strict";(function(t){i("5ab2"),i("e10e");var a=i("28f8"),n=(i("9dd9"),i("616f"),i("9e76"),i("ed63"),i("8cf2"),i("6d57"),i("9a33"),i("f548"),i("cc57"),i("4ad6")),o=i("e89f"),s=i("bcc7"),c=i("3122"),r=i("6e1b"),l=i("c130"),p=i("0636");function d(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?d(Object(i),!0).forEach((function(e){Object(a.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}e.a={name:"CheckGuideDetail",components:{},mixins:[o.a],data:function(){return{show:!1,isLoading:!0,isImageDownloading:!1,title:"",content:[],module:"",itemId:""}},methods:{openPopup:function(e){var i=this;for(var a in this.value=!0,this.show=!0,this.module=e.module,this.itemId=e.itemId,this.$emit("open"),e)this[a]=e[a];this.checkType={check:31,"check-safety":36,"check-quality":37,"measure-v3":41,process:32,"fly-inspect":101}[this.module],this.isLoading=!0,("special-inspect"===this.module?r.a.getSpecialInspectCheckItemDetail(this.itemId):"templet-plan"===this.module?l.a.getTempletDetail(this.itemId):"material"===this.module?p.a.getMaterialDetail(this.itemId):s.a.getCheckItem(this.itemId,this.checkType)).then((function(e){console.log("checkitemData",e),e=e||{},i.checkitemData=e,i.title=e.full_name||e.name,"special-inspect"!==i.module&&"inspect"!==i.module&&"fly-inspect"!==i.module&&"material"!==i.module||(e.content=e.guideline||e.content);var a=e.content?e.content.trim():"",n="【------<REPLACE_SRT>-------】";a=(a=(a=(a=(a=(a=a.replace(/<\/p><p>/gm,"\n")).replace(/<p>/gm,"")).replace(/<\/p>/gm,"")).replace(/<br>/gm,"")).replace(/<br \/>/gm,"")).replace(/\n/gm,"".concat(n,"\n"));var o=/(<img[^\>]*>|<a[^>]*href=['"][^"]*['"][^>]*>.*?<\/a>)/gm;if(o.test(a)){var s=a.split(o);(s=s.filter((function(t){return!!t}))).forEach((function(t,e){t&&!/^\s*\n/.test(t)&&e&&!/\n\s*$/.test(s[e-1])&&(s[e]="\n"+t)})),a=s.join("")}var c=a?a.split("\n"):[],r=t.map(c,(function(t,e){if(t!==n&&!t.includes(n)){var i=c[e+1];i&&i===n&&(t+=n)}var a;if(/<img([\s\S]*)>/gm.test(t)){var o=t.split(/\ssrc="([^"]*)"/gm)[1],s=o?o.match(/[\w|-]{36}/gm)[0]:(new Date).getTime()+"-"+e;a={isImg:!0,isHref:!1,src:"",url:o,status:"pending",id:s,ready:!0}}else if(/<a.*<\/a>/gm.test(t)){var r=t.split(/href="([^"]*)".*>(.*)<\/a>/);a={isImg:!1,isHref:!0,val:r[2],url:r[1]}}else a={isImg:!1,isHref:!1,val:t};return a.val&&(a.joinBrToSplitLine=t!==n&&t.endsWith(n)),a}));i.content=[];for(var l=0;l<r.length;l++){var p=r[l];!(p.val===n)&&(p.val&&(p.val=p.val.replace(new RegExp("".concat(n),"gm"),"")),i.content.push(p))}i.downloadImage(),i.isLoading=!1})).catch((function(t){$log.log(t)}))},openHref:function(t){n.a.openUrl(t)},closePopup:function(){this.value=!1,this.show=!1,this.$emit("close")},getThumbnail:function(t){return"pending"===t.status?c.a.IMAGE_LOADING:"rejected"===t.status?c.a.IMAGE_RELOAD:"dev"===APP_ENV?t.url:"fulfilled"===t.status?t.src:($log.log("检查指引-显示图片：",t),c.a.IMAGE_PLACEHOLD)},imgError:function(t,e){$log.error("检查指引-加载图片出现错误：",t);var i=u({},t);i.status="rejected",this.$set(this.content,e,i)},downloadImage:function(e){var i=this;e=e?[e]:this.imageList(),t.each(e,(function(e){var a=u({},e),n=t.map(i.content,(function(t){return t.id})).indexOf(e.id);c.a.isNeedDownload(e.url).then((function(t){t?c.a.download(e.url).then((function(t){a.status="fulfilled",a.src=c.a.fixUrl(t),i.$set(i.content,n,a)})).catch((function(t){$log.error("检查指引-下载图片：",t)})):(a.status="fulfilled",a.src=c.a.fixUrl(c.a.getPathFromUrl(e.url)),i.$set(i.content,n,a))}))}))},imageList:function(){return t.filter(this.content,(function(t){return t.isImg}))},imgClick:function(e){var i=this;if("pending"===e.status)return!1;if("rejected"===e.status)return this.downloadImage(e),$log.log("检查指引-点击重新加载-重新下载图片：",e),!1;var a=this.imageList(),o=t.map(a,(function(t){return t.id})).indexOf(e.id);a=t.map(a,(function(t){return i.getThumbnail(t)})),n.a.openImageBrowser(a,o)}}}}).call(this,i("391c"))},f369:function(t,e,i){"use strict";var a=i("fd50"),n=i("bcc7"),o=i("329b"),s=i("d1d1").a,c=(i("3411"),i("17cc")),r={name:"CheckGuideList",components:{GuideList:Object(c.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"guide-box"},[!t.isLoading&&t.listData.length?i("div",{staticClass:"page-scroll"},t._l(t.listData,(function(e,a){return i("div",{key:a},[i("item",{attrs:{border:"bottom","icon-right":e.subitem&&e.subitem.length?e.isOpen?"arrow-up":"arrow-down":"arrow-right"},on:{click:function(i){t.clickItem(e)}}},[i("div",{staticClass:"item-text fw-b color-blue one-line"},[t._v(t._s(e.item_name))])]),e.isOpen?t._l(e.subitem,(function(e,a){return i("div",{key:a,staticClass:"sublist"},[i("item",{staticClass:"pl0",attrs:{border:"bottom","icon-right":e.subitem&&e.subitem.length?e.isOpen?"arrow-up":"arrow-down":"arrow-right"},on:{click:function(i){t.clickItem(e)}}},[i("div",{staticClass:"item-text checkitem-list-name"},[t._v(t._s(e.item_name))])]),e.isOpen?t._l(e.subitem,(function(e,a){return i("div",{key:a,staticClass:"sublist"},[i("item",{staticClass:"pl0",attrs:{border:"bottom","icon-right":e.subitem&&e.subitem.length?e.isOpen?"arrow-up":"arrow-down":"arrow-right"},on:{click:function(i){t.clickItem(e)}}},[i("div",{staticClass:"item-text checkitem-list-name"},[t._v(t._s(e.item_name))])]),e.isOpen?t._l(e.subitem,(function(e,a){return i("div",{key:a,staticClass:"sublist"},[i("item",{staticClass:"pl0",attrs:{border:"bottom","icon-right":e.subitem&&e.subitem.length?e.isOpen?"arrow-up":"arrow-down":"arrow-right"},on:{click:function(i){t.clickItem(e)}}},[i("div",{staticClass:"item-text checkitem-list-name"},[t._v(t._s(e.item_name))])])],1)})):t._e()],2)})):t._e()],2)})):t._e()],2)}))):t._e(),i("loading-status",{attrs:{"is-loading":t.isLoading,"is-empty":!t.listData.length,"empty-text":"没有检查项"}})],1)}),[],!1,null,"ff0679ce",null).exports},mixins:[i("e89f").a],data:function(){return{show:!1}},methods:{openPopup:function(t){var e=this;this.value=!0,this.show=!0,this.$nextTick((function(){e.$refs["guide-list"].init(t),e.$emit("open")}))},closePopup:function(){this.value=!1,this.show=!1,this.$emit("close")}}},l=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"slide-right"}},[this.show?e("page-content",{attrs:{mode:"dialog",title:"检查指引","on-close":this.closePopup}},[e("guide-list",{ref:"guide-list"})],1):this._e()],1)}),[],!1,null,null,null).exports,p=!1;p||(p=new(o.default.extend(l))({el:document.createElement("div")}),document.body.appendChild(p.$el));var d=p,u=i("515e"),m=i("91c1").a,h=(i("dc98"),Object(c.a)(m,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("div",{staticClass:"main",style:{top:t.contentTop+"px"}},[i("i",{staticClass:"arrow"}),i("div",{staticClass:"content",on:{click:function(e){return e.target!==e.currentTarget?null:t.closePopup(e)}}},[i("transition",{attrs:{name:"slide-down"},on:{enter:function(e){t.isOpening=!0},"after-enter":function(e){t.isOpening=!1},leave:function(e){t.isClosing=!0},"after-leave":t.afterClose}},[t.showList?i("div",{staticClass:"box",style:{height:t.listHeight+"px"}},t._l(t.data,(function(e,a){return i("div",{key:a,class:{"border-bottom":t.data.length>1,"box-single":1===t.data.length}},[i("div",{staticClass:"detail-hd",class:{"border-bottom":t.data.length<=1,"detail-hd-single":t.data.length<=1},on:{click:function(i){t.toggleItem(e)}}},[t.data.length>1?i("i",{class:{"detail-arrow-right":!e.isOpen,"detail-arrow-down":e.isOpen}}):t._e(),i("div",{staticClass:"detail-title"},[t._v(t._s(e.name))])]),t.data.length<=1||e.isOpen?i("div",{staticClass:"detail-bd",class:{"detail-bd-single":t.data.length<=1}},[t._l(e.textArr,(function(e,a){return i("p",{key:a,staticClass:"text-line"},[t._v("\n              "+t._s(e)+"\n            ")])})),i("item-img-list",{attrs:{editabled:!1},model:{value:e.contentImage,callback:function(i){t.$set(e,"contentImage",i)},expression:"item.contentImage"}}),i("loading-status",{attrs:{"is-empty":!e.textArr.length&&!e.contentImage.length,"empty-text":"PC端未设置检查指引"}})],2):t._e()])}))):t._e()])],1)]):t._e()}),[],!1,null,"2cac8864",null).exports),f=!1;f||(f=new(o.default.extend(h))({el:document.createElement("div")}),document.body.appendChild(f.$el));var g=f,b={name:"CheckGuide",components:{},props:{module:{type:String,default:""},mode:{type:String,default:"page"},itemId:{type:String,default:""},itemIds:{type:Array,default:function(){return[]}},batchId:{type:String,default:""},sectionId:{type:String,default:""},options:{type:Array,default:function(){return[]}},optionsPromise:{type:Function,default:function(){}},beforeOpen:{type:Function,default:function(){}}},data:function(){return{isLoading:!1}},methods:{openCheckGuide:function(){var t=this,e=this.beforeOpen&&this.beforeOpen();e instanceof Promise||(e=Promise.resolve(e)),e.then((function(e){!1!==e&&("drop"===t.mode?g.openPopup({itemIds:t.itemIds,el:t.$refs["check-guide-btn"],options:t.options}):("templet-plan"===t.module?a.a.when(!1):t.itemId&&t.sectionId?n.a.hasChildSectionCheckItem(t.itemId,t.sectionId):t.itemId?n.a.hasChildCheckItem(t.itemId):a.a.when(!0)).then((function(e){e?d.openPopup({module:t.module,itemId:t.itemId,batchId:t.batchId,sectionId:t.sectionId,options:t.options}):u.a.openPopup({itemId:t.itemId,module:t.module})})))}))}}},v=Object(c.a)(b,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"check-guide-btn",staticClass:"header-btn",on:{click:function(e){t.openCheckGuide()}}},[i("icon",{attrs:{name:"nav-info"}})],1)}),[],!1,null,null,null);e.a=v.exports}}]);