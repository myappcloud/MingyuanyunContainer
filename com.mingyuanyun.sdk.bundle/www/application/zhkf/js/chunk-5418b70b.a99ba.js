(window["webpackJsonp_module_entry_zhkf_"]=window["webpackJsonp_module_entry_zhkf_"]||[]).push([["chunk-5418b70b"],{"0523":function(t,e,o){"use strict";o("6d57");var n=o("c6e3"),i=o("fd50"),a=o("a654"),r=o("c2c1"),s=o("8ae6"),h=function(t){return n["a"].getRoomBaseInfo(t)},c=function(t){return n["a"].getRoomCustomer(t)},f=function(t,e,o){var n,i={batch_unit_id:t,unit_list:[]},a="0";(_.isEmpty(e)||1===e.length&&""===e[0])&&(n=!0,e=[a]);var r={unit:[""],floor_list:[],status_counter:{all:0}};i.unit_list.push(r);for(var s=0;s<e.length;s++){var h=e[s],c={floor:h,room_list:[]};r.floor_list.push(c);for(var f=0;f<o.length;f++){var l=o[f];!n&&l.floor!=h||l.batch_unit_id!=t||(l.floor=n?a:l.floor,c.room_list.push(l),r.status_counter["all"]+=1,l.room_status in r.status_counter?r.status_counter[l.room_status]+=1:r.status_counter[l.room_status]=1)}}return i},l=function(t){return n["a"].getRoomIsReviewed(t)},u=function(t){return n["a"].getRoomTypeDiagram(t).then((function(t){if(!t)return!1;var e=i["a"].when(!1);return t.forEach((function(t){e=e.then((function(e){return e?i["a"].resolve(!0):r["a"].checkFileIsExists(Object(s["e"])()+t.path)}))})),e}))},d=function(t){return n["a"].getDiagramById(t).then((function(t){if(t){if("dev"==window.ZHKF_GLOBAL_ENV.VUE_APP_ENV)return t.url;var e=Object(s["e"])()+t.path;return console.log(e,"========================"),r["a"].checkFileIsExists(e).then((function(t){return t?e:null}))}return null}))},m=function(t){try{return u(t).catch((function(){return!1})).then((function(t){return!!t}))}catch(e){return console.error(e),i["a"].when(!1)}},A=function(t){return a["a"].existsDesignChange(t)},v=function(t){return a["a"].getDesignChange(t)},p=function(t,e){return a["a"].addDesignChangeProblem(t,e)},g=function(t){return h(t).then((function(t){return t.building_name+(t.unit?t.unit+(t.unit.indexOf("单元")>-1?"":"单元"):"")+(-1==t.floor.indexOf("层")&&-1==t.floor.indexOf("楼")&&-1==t.floor.indexOf("公共区域")?t.floor+"楼":t.floor)+(-1!==t.room_no.indexOf("公共区域")?t.floor+"层 公共区域":t.room_no)}))};e["a"]={getRoomBaseInfo:h,getRoomCustomer:c,buildRoomListData:f,getRoomIsReviewed:l,getRoomTypeImageFileIsExists:u,getRoomTypeImageFileIsExistsIgnoreError:m,existsRoomDesignChange:A,getRoomDesignChange:v,addRoomDesignChangeProblem:p,getRoomTitle:g,getDiagramFullPathById:d,getBatchRoomList:function(t,e){return n["a"].getBatchRoomList(t,e)}}},"06e1":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACg0lEQVRYR9WZPUwUQRTH//8Bc1pIw54fkcTCQgs7NVpi7d0h2d2EwspKDfZQWFFgjwEqKhNi9giCWEtpolZYSGFhghHZscFCLhz7zO555A64j113ddh25/3nlzd5H/OGSPAJoL7bQzd6FW5D5BqAy0I5D8HpSI74SeE3AOsgP1QDvDm7sPSOQBB3O8Yx0G7hQhBwlJR7AAfi2AKyIcLnSskzy1v52q1tV4Abw8P9ObU7AfI+gFy34i3WVSAyVwlOPBlYXPzRSasjoO+URgCZAmB1Eov5Xyuq0X5v6UU7u5aAMjjYq62+KUAexNw45nLOWnr7MVdXq0cZHgkorntKo+JB5E7M3ZItJ19byLn0vF8HBQ4BRp7L9738Z3B1ohDS37570JOHAH2nNJP9sbZyNGfz5eWHjX+bAP8ExHyyc0rHSlGNNAbOPmCUSnqqnzKI1rjkurLXe6WegvYBtV2YFrLJvXGVU1svMpNfWHlUK0oAwgohws8pJOG0GCukXAorTgS4ZRcnSYylpZ6Gjgienll4Nc6w8Gun8CV+bU0Do52GbFjllYvctIdu9jB4m/V2SfT3RN2idofGRILJJAJZ25BqnFt2sUzCznqzJPoEy9R2cU2Iq0kEsrah4CN9t+hDWrdSlrecKYd2S631CU3fKe60y3//FRCoHANA04/Y6CAB16idkicQJ9NISCheSzOmJ2rjS53xzYLx7daxaFhDSN8uTMPUlj8ENP7SFHmxNocx89pZz6VGX9xDSONHHxGkycOj+lEbPX5rrO3GDjAbIcMUdFLtTkhKI2CKzO2kNQJuBDV2iH6wnWt8hgiC4LoKnyEUzjU9QwTYDIB1pdT7v3mG+A2gi1T1vZPSFwAAAABJRU5ErkJggg=="},"0db3":function(t,e,o){e=t.exports=o("690e")(!1),e.push([t.i,"\n.zhkf .photo[data-v-70a3ed1c] {\n  padding: 15px;\n  background: #fff;\n  margin-top: 10px;\n}\n.zhkf .photo .photo-tip[data-v-70a3ed1c] {\n    font-size: 15px;\n    color: #a0a0a0;\n    margin-bottom: 15px;\n}\n.zhkf .photo .img-wrapper[data-v-70a3ed1c] {\n    display: inline-block;\n    position: relative;\n}\n.zhkf .photo img[data-v-70a3ed1c] {\n    display: inline-block;\n    width: 60px;\n    height: 60px;\n    margin-right: 20px;\n}\n.zhkf .photo .delete[data-v-70a3ed1c] {\n    position: absolute;\n    right: -10px;\n    top: -10px;\n    width: 20px;\n    height: 20px;\n}\n.zhkf .btns[data-v-70a3ed1c] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.zhkf .btns .btn[data-v-70a3ed1c] {\n    padding: 12px 0;\n    text-align: center;\n    font-size: 16px;\n}\n.zhkf .btns .btn-gray[data-v-70a3ed1c] {\n    color: #bbb;\n    background: #fff;\n    width: 100px;\n}\n.zhkf .btns .btn-blue[data-v-70a3ed1c] {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    color: #fff;\n    background: #0099ff;\n}\n.zhkf .isIOSX-bottom[data-v-70a3ed1c] {\n  bottom: 20px;\n}\n",""])},2213:function(t,e,o){var n=o("e398");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("85cb").default;i("7b019942",n,!0,{})},2405:function(t,e,o){var n=o("7826");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("85cb").default;i("e652a6ca",n,!0,{})},"2d3d":function(t,e,o){"use strict";o("e697"),o("6d57"),o("cc57");var n=o("fd50"),i=o("cb6b"),a=o("0e1c"),r=o("653b"),s=o("0523");e["a"]=function(){var t=20,e={},o={getConditions:function(){return i["a"].set(a["a"].DELIVERY_PROCESS_CONDITION,{batch:e.filterList[0].id,status:e.filterList[2].id},i["a"].level.user),{batchId:e.filterList[0].id,name:e.currType,status:e.filterList[2].name,page:e.currPage,pageSize:t,checkroomType:e.checkroomType,batchType:e.batchType}},load:function(){var i=o.getConditions();return i.batchId?r["a"].getTodoDeliveryList(i,e.search.keyword||"").then((function(o){return e.total=o.total,e.list=e.currPage?e.list.concat(o.list):o.list,0===e.currPage&&(e.search.lastKeyword=""),e.total*t>e.list.length&&e.currPage++,o.list})).then((function(t){return"delivery_check_room"===e.currType?o.setUploadStatus(t):t})):n["a"].reject("无效批次")},changeNumberStatus:function(t,o,n){var i=[];return t.room_list.forEach((function(t){i.push(t.room_id)})),r["a"].changeNumberStatus({batch_id:e.filterList[0].id,signin_id:t.signin_id,room_ids:i.join(","),operate_type:n,name:e.currType}).then((function(){e.list.splice(o,1)}))},setUploadStatus:function(t){t=t||e.list;var o=[],n=[];return t.forEach((function(t){t.room_list.forEach((function(t){o.push(t.room_id)}))})),s["a"].getBatchRoomList(e.filterList[0].id,o).then((function(t){return t.forEach((function(t){e.list.forEach((function(e){var o=_.find(e.room_list,{room_id:t.room_id});o&&(o.batchRoomId=t.id,n.push(t.id))}))})),r["a"].getHasUploadRoomList(n).then((function(t){_.isEmpty(t)||e.list.forEach((function(e){e.room_list.forEach((function(o){t.indexOf(o.batchRoomId)>-1&&(e.hasUpload=!0)}))}))}))}))}};return{model:e,init:function(t){var o=this,s=t.type,h=t.batchType;e.currType=s,e.batchType=h,e.checkroomType="全部",e.currPage=0,e.total=0,e.filterList=[{id:"",name:"",label:"批次",type:"batch",options:[]},{id:"",name:"",label:"验房类型",type:"checkroomType",options:[],hidden:!("online_delivery_center"===h)},{id:"",name:"",label:"办理状态",type:"status",options:[]}],e.currStatus="",e.search={keyword:"",lastKeyword:""},e.list=[];var c=i["a"].getObject(a["a"].DELIVERY_PROCESS_CONDITION,i["a"].level.user)||{};return r["a"].getBatchList(h).then((function(t){return t=t||[],t.length&&(e.filterList[0].options=t,e.filterList[1].options=[{id:"all",name:"全部"},{id:"offline_delivery",name:"现场验房"},{id:"online_delivery_center",name:"在线验房"}],e.filterList[2].options=[{id:1,name:"待办理"},{id:2,name:"已办理"},{id:3,name:"已过号"}],e.filterList.forEach((function(t){var e=c[t.type]||"",o=_.find(t.options,{id:e})||{};t.id=o.id||t.options[0].id,t.name=o.name||t.options[0].name})),e.currStatus=e.filterList[2].name),n["a"].resolve(!0)})).then((function(){return o.load()}))},load:function(){return e.currPage=0,o.load()},loadMore:function(){return o.load()},cross:function(t,e){return o.changeNumberStatus(t,e,"过号")},resetRecovery:function(t,e){return o.changeNumberStatus(t,e,"恢复排号")},removeItem:function(t,o,n){if(!_.isEmpty(e)&&!_.isEmpty(e.list)&&"已办理"!==e.filterList[2].name&&e.currType===n){var i=_.find(e.list,{signin_id:t}),a=!0;if(i&&(i.room_list.forEach((function(t){t.room_id===o&&(t.status=1),a&=!!t.status})),a)){var r=_.indexOf(e.list,i);r>-1&&e.list.splice(r,1)}}}}}()},"2fa5":function(t,e,o){"use strict";o("163d");var n=o("a740"),i=o("0938"),a=o("c2c1"),r=o("8ae6"),s=o("265f"),h={name:"TakePhoto",model:{event:"change"},props:{imageList:{type:Array,default:function(){return[]}},batchUnitId:{type:String,default:i["a"].uuid()},batchRoomId:{type:String,default:i["a"].uuid()},folder:{type:String,default:""},disabled:{type:Boolean,default:!1},flag:{type:Boolean,default:!1},hasLog:{type:Boolean,default:!1},imgType:{type:String,default:"problem"},imgLimit:{type:Number,default:3}},data:function(){return{isCanSelectFromAlbum:!1}},created:function(){"on"==s["a"].getAlbumSetting()?this.isCanSelectFromAlbum=!0:this.isCanSelectFromAlbum=!1},methods:{getWatermarkText:function(){var t=Object(n["j"])().user_name,e=i["a"].getNowDate();return t+" "+e+" 拍摄"},showLargeImg:function(t){var e=this.imageList.map((function(t){return t.img_local_fullpath||t.localFullPath?t.img_local_fullpath?t.img_local_fullpath:t.localFullPath:t.fullPath}));a["a"].openImageBrowser(e,t)},removeImg:function(t){this.imageList.splice(t,1),this.$emit("reset",this.imageList)},takePhoto:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!this.disabled)if(this.imageList.length>3)this.$toast("最多只能上传3张图片");else{var o={withGraffiti:!0,text:this.getWatermarkText()};e&&"fromAlbum"==e&&(o.fromAlbum="fromAlbum");var n={};this.folder&&this.folder.length?n.folder=this.folder:(n.folder=this.batchUnitId+"/"+this.batchRoomId,n.imageId=i["a"].uuid()),n.type=this.imgType;var s=r["a"].getNewProblemImagePath(n);if(this.folder&&this.folder.length){var h=i["a"].uuid()+".jpg";s.full_path+=h,s.save_path+=h}a["a"].takePhoto(s.full_path,o).then((function(){t.$emit("change",s)}),(function(t){t.notAllow}))}}}},c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{flag:t.flag}},[n("section",{staticClass:"photo"},[t._t("default"),t._v(" "),t._l(t.imageList,(function(e,i){return n("div",{key:i,staticClass:"img-wrapper"},[n("img",{attrs:{src:e.img_view_path||e.viewPath,alt:"problem-photo"},on:{click:function(e){return t.showLargeImg(i)}}}),t._v(" "),e.needDownload&&e._srcPath&&e._srcPath.includes("img_blank.png")?n("a",{staticClass:"downloadTip"},[t._v("点击下载")]):t._e(),t._v(" "),t.hasLog?t._e():n("img",{staticClass:"delete",attrs:{src:o("06e1"),alt:"delete"},on:{click:function(e){return t.removeImg(i)}}})])})),t._v(" "),n("img",{directives:[{name:"show",rawName:"v-show",value:!t.hasLog&&t.imageList&&t.imageList.length<t.imgLimit,expression:"!hasLog && imageList && imageList.length < imgLimit"}],attrs:{src:o("f4b5"),alt:"take-photo"},on:{click:t.takePhoto}}),t._v(" "),n("img",{directives:[{name:"show",rawName:"v-show",value:t.isCanSelectFromAlbum&&!t.hasLog&&t.imageList&&t.imageList.length<t.imgLimit,expression:"isCanSelectFromAlbum && !hasLog && imageList && imageList.length < imgLimit"}],attrs:{src:o("d807"),alt:"take-photo-fromAlbum"},on:{click:function(e){return t.takePhoto("fromAlbum")}}})],2)])},f=[],l=o("d082");function u(t){o("2213")}var d=!1,m=u,A="data-v-46bc9c5b",v=null,p=Object(l["a"])(h,c,f,d,m,A,v);e["a"]=p.exports},"35b9":function(t,e,o){"use strict";o.r(e);o("5ab2"),o("e44b"),o("e10e"),o("6d57"),o("f0e6");var n,i,a,r,s=o("28f8"),h=o("c42d"),c=o("6013"),f=o("db55"),l=o("9f72"),u=o("438a"),d=o("265f"),m=o("8ae6"),A=o("2fa5"),v=o("a14a"),p=o.n(v),g=o("2d3d"),y=o("b6fa"),b=o("f2de"),_=o("ba1a");function k(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function I(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?k(Object(o),!0).forEach((function(e){Object(s["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):k(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var x={components:{DeliveryProcessCustomer:l["a"],EmptyPage:u["a"],TakePhoto:A["a"]},data:function(){return{hasNetwork:!1,loading:!1,photoList:[],customers:[],roomName:"",transactedAgain:!1,hasLog:!1,isHideRejectDeliveryBtn:d["a"].getIsHideRejectDeliveryButton()}},computed:I({},Object(b["e"])({currentMenuType:function(t){return t.app.global.currentMenuType},currentBatchType:function(t){return t.app.global.currentBatchType},deliveryConfig:function(t){return t.app.deliveryConfig},isIOSX:function(t){return t.app.global.isIOSX}})),activated:function(){var t=this;h["a"].getHasNetwork().then((function(e){t.hasNetwork=e,e&&t.initData()}))},methods:{initData:function(){var t=this;return this.loading=!0,n=_["a"].getDecodeQuery(this.$route.query),i=f["a"].model.currRoom.room_id,console.log("roomInfo",f["a"].model.roomInfo),a=f["a"].model.roomInfo.batchId,r=f["a"].model.roomInfo.signin_id,this.isShowRecord(),this.getCustomerInfo(),c["a"].getDeliveryConfirmInfo(a,i,n.nodeId).then((function(e){console.log(e),p.a.isEmpty(e)||(t.hasLog=1==e.status,t.photoList=[],e.img_url.forEach((function(e){t.photoList.push({viewPath:e,localFullPath:e,localPath:e})})))})).finally((function(){t.loading=!1}))},isShowRecord:function(){for(var t=f["a"].model.nodeList,e=0;e<t.length;e++)t[e].id==n.nodeId&&(this.transactedAgain=0!=t[e].status)},getCustomerInfo:function(){var t=f["a"].model.baseInfo;this.customers=t.customers||[],this.roomName=t.room_name},goRecord:function(){console.log("办理记录",a);var t={batchId:a,roomId:i,processId:n.nodeId};this.$router.push({path:"/checkroom/".concat(this.currentMenuType||this.currentBatchType,"-room-log"),query:I({},t)})},updateProblemImages:function(t){this.photoList.push({localFullPath:t.full_path,localPath:t.save_path,viewPath:m["a"].getImageWebViewPath(t.full_path)})},refuse:function(){this.$router.push({path:"/checkroom/".concat(this.currentMenuType||this.currentBatchType,"-refusing"),query:I({},n)})},uploadDeliveryInfo:function(){var t=this;if(p.a.isEmpty(this.photoList))return this.$toast("至少要拍摄一张照片"),!1;this.$toast.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"正在提交数据..."});var e={signin_id:r,batch_id:a,room_id:i,process_id:n.nodeId,process_name:n.nodeName},o=[];this.photoList.forEach((function(t){o.push(t.localFullPath)})),console.log(o),c["a"].uploadDeliveryConfirmInfo(o,e,n.childNodeId).then((function(){g["a"].removeItem(r,i,"delivery_confirm"),y["a"].updateList(),t.$router.go(-1)})).catch((function(e){console.error(e),t.$toast("提交数据失败，请稍后重试")})).finally((function(){t.$toast.clear()}))},changeToRefuse:function(){var t=this;this.$dialog.confirm({title:"温馨提示",message:"变更为暂不收楼，将会同步删除当前房间的已交付凭证，您确认变更为暂不收楼吗？",confirmButtonText:"取消",cancelButtonText:"确认"}).then((function(){return!1})).catch((function(){t.refuse()}))}}},L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"delivery-process-confirmed yf-comp-wrapper"},[n("cus-nav-bar",{attrs:{title:"交付确认","left-arrow":"","right-text":t.transactedAgain?"办理记录":"",border:!1},on:{"click-right":t.goRecord}}),t._v(" "),n("empty-page",{attrs:{"show-empty":!t.hasNetwork,"empty-msg":"当前网络异常，请稍后重试","empty-img-src":o("6233")}}),t._v(" "),n("empty-page",{attrs:{"show-empty":t.loading,"loading-page":!0,"empty-msg":"正在加载数据，请稍等"}}),t._v(" "),t.hasNetwork&&!t.loading?n("delivery-process-customer",{attrs:{customers:t.customers,"room-name":t.roomName}}):t._e(),t._v(" "),t.hasNetwork&&!t.loading?n("take-photo",{attrs:{"has-log":t.hasLog,folder:"delivery_process","image-list":t.photoList},on:{change:t.updateProblemImages}},[n("p",{staticClass:"photo-tip"},[t._v("已交付凭证")])]):t._e(),t._v(" "),n("div",{staticClass:"btns",class:{"isIOSX-bottom":t.isIOSX}},[!t.hasLog&&t.deliveryConfig.reject_delivery.enabled&&"on"!==t.isHideRejectDeliveryBtn?n("div",{staticClass:"btn btn-gray",on:{click:t.refuse}},[t._v(t._s(t.deliveryConfig.reject_delivery.text))]):t._e(),t._v(" "),t.hasLog?t._e():n("div",{staticClass:"btn btn-blue",on:{click:t.uploadDeliveryInfo}},[t._v(t._s(t.deliveryConfig.receive_delivery.text))]),t._v(" "),t.hasLog&&t.deliveryConfig.reject_delivery.enabled&&"on"!==t.isHideRejectDeliveryBtn?n("div",{staticClass:"btn btn-blue",on:{click:t.changeToRefuse}},[t._v("变更为"+t._s(t.deliveryConfig.reject_delivery.text))]):t._e()])],1)},P=[],w=o("d082");function R(t){o("d139")}var D=!1,C=R,O="data-v-70a3ed1c",T=null,S=Object(w["a"])(x,L,P,D,C,O,T);e["default"]=S.exports},"447b":function(t,e,o){"use strict";o("ed63");var n=o("fd50"),i=o("dfb1"),a=o("07a4"),r={getDeliveryBatchUnitList:function(t){var e=a["a"].state.projectList.currentItem.id,o=["online_delivery","online_delivery_center"],n=o.includes(t)?"在线交付":"交付";return i["a"].getDeliveryBatchUnitList(e,n)},getDeliveryBatchRoomData:function(t){var e=[i["a"].getDeliveryBatchRoomCount(t),i["a"].getDeliveryBatchRoomList(t)];return n["a"].all(e).then((function(t){var e={count:t[0],list:t[1]};return e}))},getDeliveryBatchRoomList:function(t){return i["a"].getDeliveryBatchRoomList(t)}};e["a"]=r},6013:function(t,e,o){"use strict";var n=o("07a4"),i=o("dfb1"),a=o("81ad"),r=o("c6e3"),s=o("9430"),h=o("a14a"),c=o.n(h),f={getDeliveryNodeList:function(){return i["a"].getDeliveryNodeList(n["a"].state.projectList.currentItem.id)},getTodoDeliveryDetail:function(t){return i["a"].getTodoDeliveryDetail(t)},uploadDeliveryConfirmInfo:function(t,e,o){return a["a"].uploadFiles(t,"deliveryProcess",e.room_id).then((function(t){console.log(t),t=c.a.uniq(t);var n={child_process:[{id:o,status:1,imgs:t}],reason:"",remark:""};return n=c.a.extend(n,e),i["a"].uploadProcessData(n)}))},uploadProcessData:function(t){return i["a"].uploadProcessData(t)},getProcessOperateLog:function(t){return i["a"].getProcessOperateLog(t)},getDeliveryConfirmInfo:function(t,e,o){return i["a"].getDeliveryConfirmInfo(t,e,o)},getRoomData:function(t,e){return r["a"].getBatchRoom(t,e)},assistSignIn:function(t){return i["a"].assistSignIn(t)},hasUploadData:function(t){return s["a"].existsBatchRoomUploadData(t)}};e["a"]=f},7826:function(t,e,o){e=t.exports=o("690e")(!1),e.push([t.i,"\n.zhkf .color-green[data-v-030d81df] {\n  color: #74c913;\n}\n.zhkf .color-orange[data-v-030d81df] {\n  color: #ff8100;\n}\n.zhkf .cutomer-info[data-v-030d81df] {\n  padding: 15px;\n  font-size: 15px;\n  background: #ffffff;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n.zhkf .cutomer-info .info-column[data-v-030d81df] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    line-height: 1;\n}\n.zhkf .cutomer-info .info-column .right-item[data-v-030d81df] {\n      margin-bottom: 20px;\n}\n.zhkf .cutomer-info .info-column .right-item[data-v-030d81df]:last-child {\n        margin-bottom: 0;\n}\n.zhkf .cutomer-info .info-column[data-v-030d81df]:not(:first-child) {\n    margin-top: 18px;\n}\n.zhkf .cutomer-info .item-left[data-v-030d81df] {\n    color: #a0a0a0;\n}\n.zhkf .cutomer-info .item-right[data-v-030d81df] {\n    margin-left: 20px;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n.zhkf .cutomer-info .item-right span[data-v-030d81df] {\n      color: #a0a0a0;\n}\n.zhkf .cutomer-info .item-right a[data-v-030d81df] {\n      color: #0099ff;\n}\n.zhkf .cutomer-info .item-right > div[data-v-030d81df]:not(:first-child) {\n      margin-top: 20px;\n}\n.zhkf .cutomer-info .icon-tip[data-v-030d81df] {\n    color: #ff8100;\n}\n",""])},"9f72":function(t,e,o){"use strict";var n={props:{customers:{type:Array,default:function(){return[]}},roomName:{type:String,default:null},qualification:{type:String,default:""},reason:{type:String,default:""},showQualification:{type:Boolean,default:!1}}},i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"cutomer-info"},[o("div",{staticClass:"info-column"},[o("div",{staticClass:"item-left"},[t._v("业主姓名")]),t._v(" "),o("div",{staticClass:"item-right"},t._l(t.customers,(function(e,n){return o("div",{key:n,staticClass:"right-item"},[t._v("\n        "+t._s(e.customerName)+"\n        "),e.canDialTelphonee?t._e():o("span",[t._v(t._s(e.customerPhone))]),t._v(" "),e.canDialTelphonee?o("a",{attrs:{href:"tel:"+e.customerPhone}},[t._v(t._s(e.customerPhone))]):t._e(),t._v(" "),e.hasTag?o("i",{staticClass:"iconfont icon-xiaolian icon-tip"}):t._e()])})),0)]),t._v(" "),null!=t.roomName?o("div",{staticClass:"info-column"},[o("div",{staticClass:"item-left"},[t._v("房产名称")]),t._v(" "),o("div",{staticClass:"item-right flex"},[t._v(t._s(t.roomName))])]):t._e(),t._v(" "),t.showQualification?o("div",{staticClass:"info-column"},[o("div",{staticClass:"item-left"},[t._v("交付资格")]),t._v(" "),o("div",{staticClass:"item-right flex",class:"符合"===t.qualification?"color-green":"color-orange"},[t._v(t._s(t.qualification))])]):t._e(),t._v(" "),"不符合"===t.qualification&&t.showQualification?o("div",{staticClass:"info-column"},[o("div",{staticClass:"item-left"},[t._v("具体原因")]),t._v(" "),o("div",{staticClass:"item-right flex"},[t._v(t._s(t.reason))])]):t._e()])},a=[],r=o("d082");function s(t){o("2405")}var h=!1,c=s,f="data-v-030d81df",l=null,u=Object(r["a"])(n,i,a,h,c,f,l);e["a"]=u.exports},a654:function(t,e,o){"use strict";var n=o("1834"),i=o("0938");e["a"]={existsDesignChange:function(t){var e="select 1 from room_design_change a inner join batch_room b on a.room_id = b.room_id where b.id = ?";return n["a"].queryOne(e,[t]).then((function(t){return!_.isEmpty(t)}))},getDesignChange:function(t){var e="select a.id, a.location, a.content, a.remark, a.sort from room_design_change a inner join batch_room b on a.room_id = b.room_id where b.id = ? order by a.sort";return n["a"].query(e,[t])},addDesignChangeProblem:function(t,e){if(t&&e){var o=i["a"].uuid();n["a"].insert("room_design_change_problem",["id","design_change_id","checkroom_problem_id"],[o,e,t])}}}},b6fa:function(t,e,o){"use strict";o("cc57"),o("6d57");var n=o("447b");e["a"]=function(){var t={display_rooms:[],tabs:[{name:"全部",key:"all_room_count",dot:""},{name:"待交付",key:"to_delivery_room_count",dot:"room-type1"},{name:"交付中",key:"",dot:"room-type2"},{name:"已交付",key:"deliveried_room_count",dot:"room-type4"}],filter:{current:{name:"全部",count:0},selectStatus:!1,options:[{name:"全部",count:0},{name:"扫码签到",count:0},{name:"交付资料审核",count:0},{name:"财务手续办理",count:0},{name:"物业手续办理",count:0},{name:"验房",count:0},{name:"领取礼品",count:0},{name:"暂不收楼",count:0}]},status_sel:"全部",count:{}},e={load:function(e,o){return n["a"].getDeliveryBatchRoomList({batch_unit_id:t.buildingId,status:e,name:o}).then((function(t){for(var e=[],o={"待交付":"room-type1","交付中":"room-type2","已交付":"room-type4"},n=0;n<t.length;n++){for(var i={floor:t[n].floor,room_list:[]},a=0;a<t[n].room_list.length;a++)i.room_list.push({room_no:t[n].room_list[a].room_no,room_status_class:o[t[n].room_list[a].status],id:t[n].room_list[a].room_id});e.push(i)}return e}))}};return{model:t,init:function(e){var o=this;return e&&(t.buildingId=e),t.status_sel="全部",t.filter.current={name:"全部",count:0},n["a"].getDeliveryBatchRoomData({batch_unit_id:t.buildingId,status:"全部"}).then((function(e){for(var n={count:e.count,list:[]},i={"待交付":"room-type1","交付中":"room-type2","已交付":"room-type4"},a=0;a<e.list.length;a++){for(var r={floor:e.list[a].floor,room_list:[]},s=0;s<e.list[a].room_list.length;s++)r.room_list.push({room_no:e.list[a].room_list[s].room_no,room_status_class:i[e.list[a].room_list[s].status],id:e.list[a].room_list[s].room_id});n.list.push(r)}return t.display_rooms=n.list,t.count=n.count,o.initFilter(),n}))},initFilter:function(){var e=t.count.deliveying_room_count.process_count;t.filter.options.forEach((function(o){"全部"==o.name?o.count=t.count.deliveying_room_count.count:o.count=e[o.name]})),t.filter.current.count=t.count.deliveying_room_count.count},updateList:function(){var e=this;this.load(t.status_sel).then((function(){e.initFilter()}))},load:function(o,n){return e.load(o,n).then((function(e){t.display_rooms=e}))}}}()},d139:function(t,e,o){var n=o("0db3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("85cb").default;i("f5c7a268",n,!0,{})},d807:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAACcFBMVEVHcEwAhf8Ahv8Amf8AhP8Ahv8Ahf8Ag/8Ahf8Ahf8Ahf8Ah/8Ahf8Ap/8AhP8Ahv8Ahf8Aif8AhP8Ahf8Ahf8Ahf8Ahv8Ahv8Ahv8Ahf8Ahv8Ahv8Akv8Ahv8Akf8Ahf8Ai/8Ah/8Ahf8Ahf8Aif8Ahf8Ahv8AhP8Ahf8Ahv8Ahv8Ah/8Ah/8Ahf8Ah/8Ahf8Ahv8Ahf8Ah/8Ahf8Ahf8Ahv8Ahv8Ah/8Ahf8Ahf8Ahf8Ah/8Ahv8Ahv8Ahv8Ahv8Af/8Ahv8AhP8Ahv8Ahf8Ahf8Ahv8A//8AhP8Ahv8Af/8Ahf8Ahv8Ahf8Ahv8Ahv8Ahf8Ahf8Ag/8AiP8Ahf8Ahf8Ah/8Ahf8Ahv8Af/8Ahv8Ahf8Ahf8Ahv8Ahf8Ahf8Ah/8Ah/8Ahv8Ahf8Ahv8Ahf8Ahv8Ahv8Ah/8Ahf8Ahf8Ahv8Ahf8AiP8Ahv8AAP8Aiv8Ahv8Agv8Ah/8Ahv8Ahf8Ahf8Ahv8Ahf8Ahv8Ahf8Ahv8Aif8Ahf8Ahf8Ahf8Ahv8Ahv8Ahv8Ahf8Ahv8Ahf8Ahv8Ahv8AiP8Ah/8Ahf8Ahf8Ahv8Ah/8Ahv8Ahf8Aiv8Ahv8Ahv8Ahf8Ahf8Aif8Ahf8Ahv8AhP8AiP8Ahv8Ah/8Ahv8Ah/8Ahf8Ahv8Ahv8Ahf8Ahv8Ah/8Ahv8Ahv8Ah/8Ahv8Ahv8Ahv8Ahf8Ah/8Ahv8Ahf8Ahf8Ahv8Ahf8Ahv8Ahv8Ahv8Ah/8Ah/8Ahv8Ahv8Ahf8Ahf8Ahf8Aif8AhP8AZv8Ahv8Ahf8Ahf8Ahv8Ahv8Abf8Ahf8Ah/8AiP8Ahf8AhP8AhP8Ahv8Ahv8AhP8Ahv8Ahv8Ahf/s0ea5AAAAz3RSTlMA+uUFG/x3gG/3/SLRAzjnfw0f7/7qfFCH2WfQB2kC9QsR+/kP7r+B8cK4QFPiVTJMeTNBhHLVIGIsQxWeftJhBGOgJvDj/gESUgjbX6yPGKdcQCjdxAmYFwby1/jI9vQuI6Dr+ORl3SpF7HOVWDkBDqkMaMrt8+Gq1K+yGpf8zpOObuCmazD6JxDBiTUWu64UTbGd2CVxOzQ6ZkZqd4JguYyFREp6ZOk9mdpIvXXmUbRaksx9XdNLT4CfHB0FWLaQpIMHy5AefevOmlTv4+qDc/UTAAAJ8klEQVR42u2d918T2RqHDwkiGQ1Ik2JIQhWkKNjLalYwiRRdjaAQSqgiIIICl6aAkY4K9rb2jtjdtbtuu/2+/9I9k5DMRCaBzMZM5uN8f5mcyYk+wMx55p1zBhBC2uQOo6gScGJWiDdEe/ALQrH3rjgK4RhOKh71hq5cMHfuXN9AFOjJL96sSCtb3WbA3+eThR/HxIgfkWtQrP9JLTp7bBTxKk8UyahLwy9mNPaoA524zDNoWY8RKRYc4Bl13z1EvOEZM9LmIJiL+Bf+QaevQvAd36DTCKTYxDfouYCSxTyEnod4CL1xHQ+hgxfyDfr7BB4OeVFrBLkIchHkIshFkIsgF0EuglwEuXwNuagyDlcR8JdDVB3OULlLLvJle8FF2btM7ia57MlTuwpanbfHTXI5BC7MITfJpdiV0MVukkuhK6EL3SQXcGncJBeOodnJhWNodnLhHpqFXLiHZiEX7qFZyIVjaHZy4RianVw4hhbkIshFkIsgF37IRZ35N2Mcz+RyZDhVVzZ+KppXcjHWkCti3l/nlVzumD9/rZRPctln/vzOED7J5aP58z+38EkuTVnkx8W/RvNJLgl1SoRUr1L4JZfW+KsLr2cKlcu3WbmUfj6XK+FZ5VLxSorkka28qlwGfE239etavzK0K+WiXlxgevdgzxHeVC5zmqKm3t6ex5vKpbvG+n7NfJ5ULi0G2uJgvy28qFzibttMf12aPllArFp45VSpJ8lF4ZNl0yM/bNr8Vyc+DpXflXqQXD4f/KJL/oYv54PKyN3Kco+RC5GnnD7XGG8zpSuaWsSfFU94iFyaddP7HLiYTT981lgmZjOKPUMuIRNMU8XyfTHUGL5SZd19654nyKWkz063aoXlzsGGANruSyXcy0Wy2N6UvLK30twlsczmR/CyhGu5EOVDdvuNPTJ1qSqz3d14muBYLi8c/aT2tM8Btej+l7sDm7mVS/YFhz1rehKbln2Ytrs/nEu5VMxwbB3IP97IdMgn3eNOLuoeGWKV334J5kwuMUcRy1wp4kwuxFUpO2b5AoI7uay6wGohs3jpT1zKJXxbmo/TSevVc1y5EHOcDiHcFvsmb4t58oQ+x0vc2MmF48WE7OTC8bJNdnLhfoHst7IUmftF38JzLm6J8JyLuyI85+KuCA9RuhFaeIhSkIsgF0EuglwEuQhycVouqljvfFpTo3t9OXaGj/x2/vV5zuQij9JNXLmR2/0j7VfVScNAtNT0Kms7FaXN59bHQ+IM//SHtZbo8GflZ63N46zlItUO3r92s6n5YUotefveaGCCvty9y5Iz15ih89dttc1yS5ftWyxZ1IBQwLC1WeeUXGTPensevP3c1pl3ptZadhMltcbi51u1TNChQdYa28uXGdr7y/U2iyxdvAEGJDjREJKEUGw4HCnCrUo1LHZKLqoFtqvJYx4ONz1fePfyatvxkQ4dfT2MTG6RA+jKTCoDNtBvI3GODUxBJx7FrZeZdqDtyuVix6dTbcc27x5Ji/w40Qz60eONBQxHDg26qE9KZmuQA+jyDCpPbaB3kNsIyRT0bnLJyzyRHejZyWUJzPdmPtxp0JLIqRcOoLfR9v/wV6BnIRcmaOXHiIiIyCWQeRNvDczQAc/we3XhkI03EV2uhJ6FXJigvfXmU0ddiTe+zNCrz5B9CCDIzX1XQs9CLkzQ238PCQmpKAIiDm+vMEMHduP3ao+AF96EnHcZtF25SA8GUDkBPw1SLfMJKfPbuXNnaDfUVuPte/JEnA6dRfZ5lQnz8WbnkMug7crFrzicSikU7bI29BFUL10QbfSwcyJeI6gT0biEymPW0HYrl+X/sHt/No3q9RKP4DfzHY4e8kSAx/flM8nFGWi7lUtNz2YqIohrszbeLrN2yifvrSdMyh1BG7Cl1M0GM3R2LpUU1tB25SLNV1LBx/RZqkWN60/U+Dtdq1jpCLoXf13RxKLjJuj6WCq5ZmgxPksGAarJs8VXUnE7IOBdNpxej1sGfxjBG7Fr5aL6VFIForCguGQpemIHeiy8Mg7aTxEntHbkUl3ieLagpNqFciFPVn/9ZhCdr4f2UZSaUPI9A7Rmf0J8HiSeTykaUboSmqVcEDp4mlg8gkePoXB1e8GO1tYdDNDaT+pxrHFpBJTuZ4bO2JGTcw7gQQ5OuVfhSE5OpD/E38WtySDoyMnZkeFCuSA0oUjYY7r2mMj8A61RZP6bATqHGDZfe+T+z+8ry+XdJV+b6EG0gN6OCCSV2A695gumgEPe6JAkbnw6dFlKTKgZumxTFoY+rKWSS0EHAqRS0FEPoV7mvFySRF42CQb1AL3tvw+Pv6ehau3UVZ5Yg3xjKvZNg/7QBvHHzdAaFXkiBmVTKaSgDQC3KOiuXXBD5bxcLrb726QSokPobX0S+XhedFiB9dJUc1Xt7zcNejyu9dlsKpflAOkUdJkRrmqcl0tjup9NiiF7nN6+EIsOHK08o6Oup/MfwF5vOrQhAOE+MZ2xNtDNYVT0FHQyxNRQ0Ib/Ej6IlVxmPBGXiqo1FHTUKVikokMPb9ykQul7B22LgD+kVJoo6EmoKKOgk+5V9qGvU7nI/66hVS5dL+AYokFrVsHzAiRfN7vK5Qf4ZxcF/awwc+tM0GzlIqeXWw2lUEeHVulhm3i25ZZsEZwcoqAnox+PzgTNWi506BsAZ+nQ+XrzCDAraF3K1FdogpbVw66umaBZy4UGLRNBM6JD47H2V81soV+1SswrVUzQe/IgT45YVS7OQecAHLWBXm2c48NQjTfRhqDrFmhZj7qqn4JeGwQrEWJVudhczRXPAO29EVosT26N/4e4o8HXT5JLDNAK2mAvsUC/a4dh86F0zgtD14H6T1NrMMHZymXqemfwbNm8eR8rwM6iHTO0dLIouNzydM7oYwh5uqQCQpYzQB+RUJljgT4KwfgCcbsuo78T/BuUWyAPoT91GbptAJNs5lwiW+JCRCIvIP6ldACNj8KKW9Z7HeXme38dQwzQjyKp/D4FLcuGF/grrpMUFgLou1JB8gSheklCKcDARTZyuVw79dhe/wEH0AV1pceoe2ZRqQ86O0+vWT/bO0zyCNPDaunkUzEtyfKxp/G4ypkg/9dMHxUbuQy93o+z1e56Y02STx8+cDR9Dgb7gB/LzaWwtufpXdp+37YR8wvxaCN5uyG9ocFA1six/XjYKWhoaOhvFOZceDbn4hERJvTdGGFC3y0RJvTdCC3IRZCLIBdBLoJcBLkIchHkIshFkIuHyIXgnVzuRKPaNTxjlq9QoJ8LeAYtqzei9wYVv6DHTnSgW7tu8wtal5CMtCdbQrVyvhzPssaCebu15B9JL71+Ti5LJf8Y+cJlyJNfvFlR37ZCZpp00CZ3nKlZbvoNqcFxqz35BaEwdoRqEPo//hH0TUz+gf0AAAAASUVORK5CYII="},db55:function(t,e,o){"use strict";o("5ab2"),o("e10e");var n=o("28f8"),i=(o("e697"),o("6d57"),o("e44b"),o("cc57"),o("fd50")),a=o("07a4"),r=o("a18c"),s=o("6013"),h=o("0523"),c=o("ca33"),f=o("a593");function l(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function u(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?l(Object(o),!0).forEach((function(e){Object(n["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}e["a"]=function(){var t={},e={},o={review_material:"delivery_review_material",handle_finance:"delivery_handle_finance",handle_property:"delivery_handle_property",check_room:"delivery_check_room",give_gift:"delivery_receive_gift",delivery_confirm:"delivery_confirm"};return e.getConditions=function(){return{batchId:t.roomInfo.batchId,roomId:t.roomInfo.room_list[t.currRoomIndex].room_id}},e.gotoNextRoom=function(){var o=t.roomInfo.room_list.length;return t.currRoomIndex<o-1?(t.currRoomIndex+=1,t.currRoom=t.roomInfo.room_list[t.currRoomIndex],e.load()):i["a"].resolve()},e.load=function(){var n=e.getConditions();return s["a"].getTodoDeliveryDetail(n).then((function(n){t.nodeList=[],t.baseInfo.delivery_qualification=n.delivery_qualification,t.baseInfo.appointment_process_list=n.appointment_process_list||[],t.baseInfo.checkroom_type=n.checkroom_type,t.baseInfo.delivery_unqualified_reason=n.delivery_unqualified_reason,t.baseInfo.hasTag=!1,t.baseInfo.room_name=t.roomInfo.room_list[t.currRoomIndex].room_name,t.baseInfo.customers=[],t.no="",_.each(n.customer_list,(function(e){t.baseInfo.customers.push({customerName:e.customer_name,customerPhone:e.customer_phone,canDialTelphonee:-1===e.customer_phone.indexOf("*"),hasTag:e.has_tag}),1==e.has_tag&&(t.baseInfo.hasTag=!0)})),n.no&&(t.no=n.no),n.signin_id&&(t.roomInfo.signin_id=n.signin_id);var i=a["a"].state.app.global.currentBatchType;_.each(t.sourseData,(function(e,a){var r={name:e.name,id:a,child_node:[],type:o[e.function_code],status:n.process[a]&&1==n.process[a].status?n.process[a].status:0,authRight:f["default"].prototype.$checkRight("view_room",i)&&f["default"].prototype.$checkRight(e.function_code,i)};_.each(e.child_process,(function(t,e){var o={name:t.name,type:t.type,remark:t.remark,id:e};n.process[a]&&1==n.process[a].status&&n.process[a].child_process[e]&&n.process[a].child_process[e].status?o["status"]=n.process[a].child_process[e].status:o["status"]=0,r.child_node.push(o)})),t.nodeList.push(r)}));for(var r=0;r<t.nodeList.length;r++){for(var s=!1,h=0;h<t.nodeList[r].child_node.length;h++)1==t.nodeList[r].child_node[h].status&&(s=!0);t.nodeList[r]["showStatus"]=s}return e.updateCheckroomNode().then((function(){return t.nodeList}))}))},e.updateCheckroomNode=function(){var e=i["a"].when();return t.currRoom.batchRoomId||(e=h["a"].getBatchRoomList(t.roomInfo.batchId,[t.currRoom.room_id]).then((function(e){return!_.isEmpty(e)&&(t.currRoom.batchRoomId=e[0].id,!0)}))),e.then((function(e){if(!1!==e)return s["a"].hasUploadData(t.currRoom.batchRoomId).then((function(e){if(_.isEmpty(e))return i["a"].resolve();var o=_.find(t.nodeList,{type:"delivery_check_room"});if(o){var n=!1;e.forEach((function(t){o.child_node.forEach((function(e){("问题"===t.type&&"登记问题"===e.name||"房间"===t.type&&"登记问题"!==e.name)&&(e.status=1),n=n||1==e.status}))})),o.showStatus=n,o.status=1,o.hasUpload=!0}}))}))},{model:t,initModel:function(e){t.roomInfo=e,t.currRoomIndex=0,t.currRoom=t.roomInfo.room_list[0],t.baseInfo={customers:[]};for(var o=t.roomInfo.room_list.length,n=0;n<o;n++)t.roomInfo.room_list[n].ans=n},init:function(){return s["a"].getDeliveryNodeList().then((function(o){return t.sourseData=o,_.each(t.sourseData,(function(t,e){_.each(t.child_process,(function(t,e){t.type=t.type.substr(0,t.type.length-1)}))})),e.load()}))},gotoNextRoom:function(){return e.gotoNextRoom()},gotoCheckRoom:function(){var e=a["a"].state.app.global.currentBatchType,o={deliveryprocess:{name:"正式交付",type:"交付",batch_type:"delivery",from:"deliveryprocess"},online_delivery_center:{name:"在线交房",type:"在线交付",batch_type:"online_delivery",from:"online_delivery_center"}},n=o[e]["batch_type"];return s["a"].getRoomData(t.roomInfo.batchId,t.currRoom.room_id).then((function(i){if(!_.isEmpty(i)){var s={batchRoomId:i.id,roomId:i.room_id,building_id:i.building_id,batch_unit_id:i.batch_unit_id,type:n,fitment_standard:i.fitment_standard,roomTitle:i.building_name+i.room_no,menuType:a["a"].state.app.global.currentMenuType,batch_id:t.roomInfo.batchId};return h["a"].getRoomTypeImageFileIsExists(i.id).then((function(t){t?(s.mode="0",s.isImageExists=!0):s.from=e,console.log("/checkroom/".concat(n,"-roomdetail")),r["a"].push({path:"/checkroom/".concat(n,"-roomdetail"),query:u(u({},s),{},{from:e})})}))}return a["a"].commit("app/APP",{currentBatchType:n}),r["a"].push({path:"/checkroom/".concat(n,"-batch-unit"),query:o[e]})}))},load:function(){return e.load()},uploadRoomData:function(e){return s["a"].getRoomData(t.roomInfo.batchId,t.currRoom.room_id).then((function(t){return c["a"].uploadData(t.batch_unit_id,t.id).then((function(){e.hasUpload=!1}))}))}}}()},e398:function(t,e,o){e=t.exports=o("690e")(!1),e.push([t.i,"\n.zhkf .photo[data-v-46bc9c5b] {\n  padding: 15px;\n  background: #fff;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.zhkf .photo .img-wrapper[data-v-46bc9c5b] {\n    display: inline-block;\n    position: relative;\n    padding-bottom: 5px;\n}\n.zhkf .photo img[data-v-46bc9c5b] {\n    display: inline-block;\n    width: 60px;\n    height: 60px;\n    margin-right: 20px;\n}\n.zhkf .photo .delete[data-v-46bc9c5b] {\n    position: absolute;\n    right: -10px;\n    top: -10px;\n    width: 20px;\n    height: 20px;\n}\n.zhkf .photo .downloadTip[data-v-46bc9c5b] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    color: #606060;\n    width: 100%;\n    font-size: 12px;\n    text-align: center;\n}\n",""])},f4b5:function(t,e){t.exports="data:image/png;base64,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"}}]);