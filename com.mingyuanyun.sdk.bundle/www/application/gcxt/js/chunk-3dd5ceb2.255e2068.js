(window["webpackJsonp_module_entry_gcxt_"]=window["webpackJsonp_module_entry_gcxt_"]||[]).push([["chunk-3dd5ceb2"],{"25f1":function(t,e,i){"use strict";i("d923")},"2fff":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("page",{staticClass:"upload-image-sheet"},[i("v-header",{attrs:{slot:"header",title:"上传照片"},slot:"header"}),i("div",{staticClass:"content"},[i("div",[i("af-picker-cell",{staticStyle:{"margin-top":"15px"},attrs:{id:"test",label:"上传到",data:t.imageGroup},on:{change:t.changeValue},model:{value:t.imageValue,callback:function(e){t.imageValue=e},expression:"imageValue"}}),i("div",{staticClass:"photo-group"},[i("upload-images",{staticClass:"img-uploader",attrs:{editable:!1},model:{value:t.imageList,callback:function(e){t.imageList=e},expression:"imageList"}})],1),i("div",{staticClass:"tip-txt"},[t._v("\n        移动端上传照片完成后，照片会马上同步到电脑端，您可在电脑端查看并继续编辑照片\n      ")])],1)]),i("app-button-group",{attrs:{slot:"footer"},slot:"footer"},[i("app-button",{staticClass:"action-button -sync",on:{click:t.save}},[t._v("提交")])],1)],1)},o=[],s=(i("ac67"),i("8dee"),i("aa18"),i("982e"),i("32ea"),i("6a61"),i("ed32")),r=i("34f5"),n=(i("1bc7"),i("fc02"),i("82f8")),c=i("fe6f"),d=i("76e6");function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function p(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){Object(r["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var u={name:"UploadImageSheet",components:{uploadImages:d["a"]},data:function(){return{accessid:"",params:[],imageGroup:[],imageValue:"",imageList:[],uploadingStatus:{},isIOS:Object(c["b"])()}},computed:{},mounted:function(){this.accessid=this.$route.query.accessid,this.params=this.accessid.split("|"),this.check(),window.testImageScan=this},methods:{changeValue:function(t){this.imageValue=t},processIndex:function(t){var e=this;this.imageList.forEach((function(i){t.img_id===i.img_id&&(i.ossUrl=t.ossUrl,i.file_path=t.ossUrl,e.$delete(e.uploadingStatus,i.img_id))})),this.uploadingStatus=this.uploadingStatus},successUploadImage:function(t){var e=this;t&&t.forEach((function(t){e.imageList.forEach((function(i){i.img_id!==t.img_id||i.ossUrl||(i.ossUrl=t.ossUrl,i.file_path=t.ossUrl,e.$delete(e.uploadingStatus,i.img_id))}))}))},selectLocalFile:function(t){var e=this;t&&(t.forEach((function(t){e.uploadingStatus[t.img_id]=!0})),this.imageList=this.imageList.concat(t))},addPhoto:function(){var t=this;this.GET_PHOTO({selectLocalFile:function(e){return t.selectLocalFile(e)},processIndex:function(e){return t.processIndex(e)},process:function(e){t.imageList=t.imageList.map((function(t){return t.img_id===e.img_id?p(p({},t),{},{progress:e.progress}):t}))},number:20}).then(this.successUploadImage)},deletePhoto:function(t){this.$delete(this.uploadingStatus,this.imageList[t].img_id),this.imageList.splice(t,1)},save:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!Object.keys(this.uploadingStatus).length){t.next=3;break}return this.sui.toast("图片还未全部上传完成"),t.abrupt("return");case 3:if(this.imageValue||!this.imageGroup.length){t.next=6;break}return this.sui.toast("请选择图片分组"),t.abrupt("return");case 6:if(this.imageList.length){t.next=9;break}return this.sui.toast("请至少选择一张图片"),t.abrupt("return");case 9:return this.imageList.forEach((function(t){t.image_group=i.imageValue})),t.next=12,Object(n["S"])({accessid:this.params[0],files:this.imageList,error:!0});case 12:e=t.sent,e.success&&(this.sui.toast("提交成功"),window.history.back());case 14:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),init:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(n["v"])({codes:["image_group_"+this.params[1]]});case 2:e=t.sent,i=e.data,a=[];try{a=JSON.parse(i[0].p_items).map((function(t){return{text:t.text,name:t.value}}))}catch(o){}this.imageGroup=a,console.log(a);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),check:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(n["f"])({biz_id:this.params[0],biz_type:this.params[1]});case 2:e=t.sent,i=e.data,!i||["0","1","2","7"].includes(i.check_status)&&i.version==this.params[2]?this.init():this.sui.modal({text:"照片没有提交确定取消吗？",buttons:[{text:"取消"},{text:"确定",onClick:function(){history.back()}}]});case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),parserPath:function(t){return this.isIOS&&(t=t.replace("file://","")),'"'+t+'"'}}},g=u,f=(i("5c44"),i("5d22")),h=Object(f["a"])(g,a,o,!1,null,"e8b1ed42",null);e["default"]=h.exports},"35d6":function(t,e,i){var a=i("8524");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("85cb").default;o("8af3fcc0",a,!0,{sourceMap:!1,shadowMode:!1})},4861:function(t,e,i){var a=i("6a07");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("85cb").default;o("46953d95",a,!0,{sourceMap:!1,shadowMode:!1})},"5c44":function(t,e,i){"use strict";i("4861")},"6a07":function(t,e,i){e=t.exports=i("690e")(!1),e.push([t.i,".gcxt .upload-image-sheet .button-fill[data-v-e8b1ed42]{margin:30px 20px 0 20px}.gcxt .upload-image-sheet .tip-txt[data-v-e8b1ed42]{line-height:1.3;margin-top:15px;color:#999;font-size:13px;padding:0 15px}.gcxt .upload-image-sheet .photo-item[data-v-e8b1ed42]{position:relative}.gcxt .upload-image-sheet .upload-progress[data-v-e8b1ed42]{position:absolute;top:0;left:.3rem;right:.3rem;bottom:0;background:rgba(0,0,0,.4);color:#fff;font-size:14px;text-align:center;line-height:4rem;display:none}.gcxt .upload-image-sheet .uploading .upload-progress[data-v-e8b1ed42]{display:block}.gcxt .upload-image-sheet .delete-photo[data-v-e8b1ed42]{position:absolute;top:-14px;right:0;width:20px;height:20px;z-index:1}.gcxt .upload-image-sheet .cancel-upload[data-v-e8b1ed42]{position:relative;z-index:20;padding:.5rem 0;line-height:1.2rem;font-size:.8rem}.gcxt .upload-image-sheet .photo-item .img[data-v-e8b1ed42]{background-size:cover;background-position:50%;width:100%;height:100%}.gcxt .upload-image-sheet .icon-_shanchu-[data-v-e8b1ed42]{font-size:20px;color:#ff5f3e}.gcxt .img-uploader[data-v-e8b1ed42]{background:transparent;padding:0}",""])},"76e6":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"image-group"},[t._l(t.data,(function(e,a){return i("div",{key:e.img_id,staticClass:"image-item"},[i("div",{staticClass:"img",style:{"background-image":"url("+t.parserPath(e.image_thumb_path)+")"},on:{click:function(e){t.viewImg(a,t.data)}}}),[i("i",{staticClass:"icon-delete",on:{click:function(i){i.stopPropagation(),t.del(e)}}}),t.editable?i("p",{staticClass:"edit-text",on:{click:function(i){i.stopPropagation(),t.edit(e)}}},[t._v("编辑")]):t._e(),t.uploadingStatus[e.img_id]&&e.progress&&e.progress>0&&e.progress<100?i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-percent"},[t._v(t._s(e.progress)+"%"+t._s(e.ossUrl))])]):t._e()]],2)})),i("div",{staticClass:"image-add image-item",on:{click:function(e){t.add()}}},[t._m(0)])],2)},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"center"},[i("i",{staticClass:"iconfont icon__add-pic icon-_tupian"}),i("span",{staticClass:"text"},[t._v("添加图片")])])}],s=(i("ac67"),i("32ea"),i("1bc7"),i("34f5")),r=(i("e680"),i("948d")),n=i("0938"),c=i("a740"),d=i("8dfd"),l=i("329b"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("popup-page",{directives:[{name:"phy-back",rawName:"v-phy-back",value:{status:t.show,method:"closePopup"},expression:"{status: show, method: 'closePopup'}"}],staticClass:"photo-edit",attrs:{value:t.show}},[i("v-header",{staticStyle:{position:"relative"},attrs:{slot:"header",title:"图片编辑","back-action":t.closePopup},slot:"header"}),i("div",{staticClass:"photo-edit"},[i("ul",{staticClass:"list"},t._l(t.data,(function(e,a){return i("li",{key:e.img_id,staticClass:"list-item"},[i("div",{staticClass:"image-item"},[i("img",{attrs:{src:t.parserPath(e.image_thumb_path),alt:""},on:{click:function(i){if(i.target!==i.currentTarget)return null;t.graffiti(e)}}}),i("i",{staticClass:"icon-delete",on:{click:function(i){i.stopPropagation(),t.del(e)}}})]),i("div",{staticClass:"desc",class:{"with-group":e.image_group}},[t.imageGroups.length?i("div",{staticClass:"image-groups"},t._l(t.imageGroups,(function(a){return i("span",{key:a.text,staticClass:"image-group",class:{active:e.image_group===a.text},on:{click:function(i){t.selectGroup(e,a.text)}}},[t._v("\n              "+t._s(a.text)+"\n            ")])}))):t._e(),t._v("\n          "+t._s(e.test)+"\n          "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.remark,expression:"v.remark"}],staticClass:"image-remark",attrs:{placeholder:"点击添加文字",maxlength:"200"},domProps:{value:e.remark},on:{input:function(i){i.target.composing||t.$set(e,"remark",i.target.value)}}})]),t.data.length>1?i("div",{staticClass:"sort-seat"},[i("div",{staticClass:"sort"},[i("div",{staticClass:"icon icon-up",style:{visibility:0==a?"hidden":"visible"},on:{click:function(e){t.changePos(a,-1)}}}),i("div",{staticStyle:{flex:"1"}}),i("div",{staticClass:"icon icon-down",style:{visibility:a==t.data.length-1?"hidden":"visible"},on:{click:function(e){t.changePos(a,1)}}})])]):t._e()])})))]),i("app-button-group",{attrs:{slot:"footer"},slot:"footer"},[i("app-button",{on:{click:t.done}},[t._v("\n      完成\n    ")])],1)],1)},u=[],g=(i("8dee"),i("5bbb")),f=i("f121"),h=i("fe6f"),m={data:function(){return{show:!1,imageGroups:[],data:[]}},methods:{graffiti:function(t){var e=this;this.GRAFFITI_PHOTO({file:t}).then((function(t){t&&Array.isArray(t)&&e.data.forEach((function(e){t.forEach((function(t){t.img_id===e.img_id&&(e.ossUrl=t.ossUrl,e.file_path=t.ossUrl,e.image_thumb_path=e.ossUrl+"?"+f["n"])}))}))}))},changePos:function(t,e){this.data[t]=[this.data[t+e],this.data[t+e]=this.data[t]][0],this.data=JSON.parse(JSON.stringify(this.data))||[]},done:function(){this.callback&&this.callback(this.data),this.closePopup()},selectGroup:function(t,e){t.image_group===e?t.image_group="":t.image_group=e},openPopup:function(t){this.show=!0,this.data=Object(g["a"])(t.data)||[],this.imageGroups=t.imageGroups,this.callback=t.callback},closePopup:function(){this.show=!1},del:function(t){this.data=this.data.filter((function(e){return e.img_id!==t.img_id}))},parserPath:function(t){return Object(h["b"])()&&(t=t.replace("file://","")),t}}},b=m,x=(i("25f1"),i("5d22")),v=Object(x["a"])(b,p,u,!1,null,"2f3f701e",null),_=v.exports;function k(t){var e;return function(){return e||(e=t.apply(this,arguments))}}var w=k((function(){var t=l["a"].extend(_);return new t({el:document.createElement("div")})})),y=function(t){var e=w();return document.body.appendChild(e.$el),e},O=y;function j(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function P(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?j(Object(i),!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):j(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var S={name:"ImageUploader",mixins:[d["a"]],inheritAttrs:!1,props:{value:{type:Array,default:function(){return[]}},imageGroups:{type:Array,default:function(){return[]}},maxLength:{type:Number,default:10},editable:{type:Boolean,default:!0}},data:function(){return{data:[],uploadingStatus:{}}},computed:{defaultImageGroup:function(){return 1===this.imageGroups.length?this.imageGroups[0].value:""}},watch:{value:{handler:function(t){this.data=t},immediate:!0}},mounted:function(){},methods:{del:function(t){this.data=this.data.filter((function(e){return e.img_id!==t.img_id})),delete this.uploadingStatus[t.img_id],this.$emit("input",this.data)},edit:function(t){var e=this;O().openPopup({data:this.data,imageGroups:this.imageGroups,callback:function(t){e.data=t,e.$emit("input",e.data)}})},add:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.uploading=!0,Object(r["a"])()?this.localAdd(t):this.realAdd(t)},localAdd:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=[{img_id:Object(n["c"])(),file_name:"Mock图片--".concat(Object(n["c"])(5),".jpg"),file_path:"https://gcxt-test.oss-cn-shenzhen.aliyuncs.com/gcxt/files/my570cd49bc2458/61491c29-96c7-cd0a-7912-027250fdb9df.jpg",create_by:Object(c["a"])("xt_user_name"),user_id:Object(c["d"])("user_id"),create_time:(new Date).toLocaleString(),image_thumb_path:"https://gcxt-img-test.myfuwu.com.cn/gcxt/files/my570cd49bc2458/61491c29-96c7-cd0a-7912-027250fdb9df.jpg?x-oss-process=image/resize,h_100,w_100,90_q,limit_1,value_0",image_compress_path:"https://gcxt-img-test.myfuwu.com.cn/gcxt/files/my570cd49bc2458/61491c29-96c7-cd0a-7912-027250fdb9df.jpg?x-oss-process=image/resize,h_1000,w_1000,90_q,limit_1,value_0",image_group:this.defaultImageGroup,is_original:!0}];return this.selectLocalFile(e),this.uploading=!1,this.uploadingStatus={},t.selectLocalFile&&t.selectLocalFile(e),this.$emit("input",this.data),Promise.resolve()},realAdd:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.GET_PHOTO({selectLocalFile:function(i){t.selectLocalFile(i),e.selectLocalFile&&e.selectLocalFile(i)},processIndex:function(e){return t.processIndex(e)},process:function(e){t.data=t.data.map((function(t){return t.img_id===e.img_id?P(P({},t),{},{progress:e.progress}):t}))},number:this.maxLength}).then(this.successUploadImage).catch((function(){return t.uploading=!1,!1}))},processIndex:function(t){var e=this;this.data.forEach((function(i){t.img_id===i.img_id&&(i.ossUrl=t.ossUrl,i.file_path=t.ossUrl,e.$delete(e.uploadingStatus,i.img_id))})),this.uploadingStatus=this.uploadingStatus},successUploadImage:function(t){var e=this;this.uploading=!1,t&&(t.forEach((function(t){e.data.forEach((function(i){i.img_id!==t.img_id||i.ossUrl||(i.ossUrl=t.ossUrl,i.file_path=t.ossUrl,i.is_original=!0,e.$delete(e.uploadingStatus,i.img_id))}))})),this.$emit("input",this.data))},selectLocalFile:function(t){var e=this;t&&(this.hasAppend&&(this.appendData=this.appendData.concat(t)),t.forEach((function(t){t.image_group=e.defaultImageGroup,e.uploadingStatus[t.img_id]=!0})),this.data=this.data.concat(t),this.uploading=!0)},hasUploading:function(){var t=this;return this.data.some((function(e){return t.uploadingStatus[e.img_id]}))||this.uploading}}},C=S,L=(i("7a3d"),Object(x["a"])(C,a,o,!1,null,"4d821550",null));e["a"]=L.exports},"7a3d":function(t,e,i){"use strict";i("35d6")},8524:function(t,e,i){var a=i("5454");e=t.exports=i("690e")(!1),e.push([t.i,".gcxt .progress[data-v-4d821550]{position:absolute;top:0;right:0;left:0;bottom:0;background:rgba(0,0,0,.5);text-align:center;font-size:12px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#fff}.gcxt .image-group[data-v-4d821550],.gcxt .progress[data-v-4d821550]{display:-webkit-box;display:-ms-flexbox;display:flex}.gcxt .image-group[data-v-4d821550]{padding:.5rem;-ms-flex-wrap:wrap;flex-wrap:wrap;background:#fff}.gcxt .image-item[data-v-4d821550]{margin:2%;width:21%;padding-top:21%;position:relative;border:1px solid #ddd}.gcxt .image-item .img[data-v-4d821550]{position:absolute;top:0;width:100%;height:100%;background-size:cover}.gcxt .image-item .icon-delete[data-v-4d821550]{position:absolute;top:-10px;right:-10px;width:20px;height:20px;background-image:url("+a(i("f408"))+");background-size:cover;z-index:10;border:1px solid #fff;border-radius:50%}.gcxt .image-item .edit-text[data-v-4d821550]{position:absolute;bottom:0;z-index:100;margin:0;width:100%;text-align:center;font-size:12px;background:rgba(255,95,62,.9);color:#fff}.gcxt .image-add[data-v-4d821550]{border:1px dashed #d1d1d6}.gcxt .image-add .center[data-v-4d821550]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center}.gcxt .image-add .icon__add-pic[data-v-4d821550]{display:block;font-size:23px;color:#c8c8c8}.gcxt .image-add .text[data-v-4d821550]{font-size:12px;color:#c8c8c8;white-space:nowrap;display:block}",""])},"8dfd":function(t,e,i){"use strict";i("d0f2"),i("8dee");var a=i("f121"),o=i("fe6f"),s=i("a075");e["a"]={methods:{getImagePath:function(t){var e=t.indexOf("?")>=0?"&":"?";return t.indexOf("x-oss-process=image/resize")>=0?t:[t,a["n"]].join(e)},parserPath:function(t){return Object(o["b"])()&&(t=t.replace("file://","")),'"'+t+'"'},viewImg:function(t,e){var i=e.map((function(t){var e="";t.image_group&&(e+=t.image_group),t.image_group&&t.remark&&(e+="："),t.remark&&(e+=t.remark),t.create_time&&t.create_by&&((t.image_group||t.remark)&&(e+="\n"),e+=s["a"].date.format(t.create_time,"yyyy-MM-dd HH:mm")+" 来自 "+t.create_by);var i=t.image_compress_path||t.file_path,a=i.match(/^\/.*/)?"file://"+i:i,o={imgUrl:a,description:e};return o}));return this.$previewPicture(i,t)}}}},d852:function(t,e,i){var a=i("5454");e=t.exports=i("690e")(!1),e.push([t.i,".gcxt .photo-edit li[data-v-2f3f701e],.gcxt .photo-edit ul[data-v-2f3f701e]{list-style:none}.gcxt .photo-edit textarea[data-v-2f3f701e]{border:none;display:block;width:100%;height:80px;padding-left:10px;overflow:hidden}.gcxt .photo-edit .desc[data-v-2f3f701e]{position:relative;margin-left:15px;-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;display:-webkit-flex;height:90px}.gcxt .photo-edit .mask-textarea[data-v-2f3f701e]{position:absolute;top:0;left:0;width:100%;height:100%;display:none;background:transparent}.gcxt .photo-edit .sort-seat[data-v-2f3f701e]{width:1.5rem;height:90px}.gcxt .photo-edit .sort[data-v-2f3f701e]{font-size:.8rem;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.gcxt .photo-edit .sort>.icon[data-v-2f3f701e]{position:relative;display:block;line-height:1;color:#3492e9;text-align:center}.gcxt .photo-edit .sort .icon[data-v-2f3f701e]:active{background:#eee}.gcxt .photo-edit .with-group .image-remark[data-v-2f3f701e]{-webkit-box-flex:1;-ms-flex:1;flex:1;height:auto;margin-top:10px;padding:0;resize:none}.gcxt .photo-edit .edit-card[data-v-2f3f701e]{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.gcxt .photo-edit .edit-card[data-v-2f3f701e],.gcxt .photo-edit .image-groups[data-v-2f3f701e]{display:-webkit-box;display:-ms-flexbox;display:flex;display:-webkit-flex}.gcxt .photo-edit .image-groups[data-v-2f3f701e]{-ms-flex-negative:0;flex-shrink:0;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-flex-shrink:0;-webkit-flex-wrap:nowrap;overflow:auto}.gcxt .photo-edit .image-group[data-v-2f3f701e]{line-height:1;padding:5px;-ms-flex-negative:0;flex-shrink:0;-webkit-flex-shrink:0;margin-right:10px;border-radius:2px;border:1px solid #b5b5b5;color:#b5b5b5}.gcxt .photo-edit .image-group[data-v-2f3f701e]:last-child{margin-right:0}.gcxt .photo-edit .image-group.active[data-v-2f3f701e]{border-color:#3492e9;color:#fff;background:#3492e9}.gcxt .list[data-v-2f3f701e]{list-style:none;margin-bottom:40px;-webkit-box-flex:1;-ms-flex:1;flex:1}.gcxt .list .list-item[data-v-2f3f701e]{margin:10px 0;padding:10px;border-radius:5px;background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.gcxt .image-item[data-v-2f3f701e]{margin:2%;width:21%;padding-top:21%;position:relative;border:1px solid #ddd}.gcxt .image-item img[data-v-2f3f701e]{height:100%;width:100%;position:absolute;top:0}.gcxt .image-item .icon-delete[data-v-2f3f701e]{position:absolute;top:-10px;right:-10px;width:20px;height:20px;background-image:url("+a(i("f408"))+");background-size:cover;z-index:10;border:1px solid #fff;border-radius:50%}.gcxt .dialog-wrapper[data-v-2f3f701e]{position:absolute;background:#f5f5f5;top:0;left:0;width:100%;height:100%;z-index:2000;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}",""])},d923:function(t,e,i){var a=i("d852");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("85cb").default;o("113d16d7",a,!0,{sourceMap:!1,shadowMode:!1})}}]);