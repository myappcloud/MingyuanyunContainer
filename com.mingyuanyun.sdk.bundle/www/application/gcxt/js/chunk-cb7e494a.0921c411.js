(window["webpackJsonp_module_entry_gcxt_"]=window["webpackJsonp_module_entry_gcxt_"]||[]).push([["chunk-cb7e494a"],{"25f1":function(t,e,a){"use strict";a("d923")},"28c7":function(t,e,a){"use strict";a("dd67")},"35d6":function(t,e,a){var i=a("8524");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("85cb").default;o("8af3fcc0",i,!0,{sourceMap:!1,shadowMode:!1})},"76e6":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"image-group"},[t._l(t.data,(function(e,i){return a("div",{key:e.img_id,staticClass:"image-item"},[a("div",{staticClass:"img",style:{"background-image":"url("+t.parserPath(e.image_thumb_path)+")"},on:{click:function(e){t.viewImg(i,t.data)}}}),[a("i",{staticClass:"icon-delete",on:{click:function(a){a.stopPropagation(),t.del(e)}}}),t.editable?a("p",{staticClass:"edit-text",on:{click:function(a){a.stopPropagation(),t.edit(e)}}},[t._v("编辑")]):t._e(),t.uploadingStatus[e.img_id]&&e.progress&&e.progress>0&&e.progress<100?a("div",{staticClass:"progress"},[a("div",{staticClass:"progress-percent"},[t._v(t._s(e.progress)+"%"+t._s(e.ossUrl))])]):t._e()]],2)})),a("div",{staticClass:"image-add image-item",on:{click:function(e){t.add()}}},[t._m(0)])],2)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"center"},[a("i",{staticClass:"iconfont icon__add-pic icon-_tupian"}),a("span",{staticClass:"text"},[t._v("添加图片")])])}],s=(a("ac67"),a("32ea"),a("1bc7"),a("34f5")),n=(a("e680"),a("948d")),r=a("0938"),c=a("a740"),d=a("8dfd"),l=a("329b"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("popup-page",{directives:[{name:"phy-back",rawName:"v-phy-back",value:{status:t.show,method:"closePopup"},expression:"{status: show, method: 'closePopup'}"}],staticClass:"photo-edit",attrs:{value:t.show}},[a("v-header",{staticStyle:{position:"relative"},attrs:{slot:"header",title:"图片编辑","back-action":t.closePopup},slot:"header"}),a("div",{staticClass:"photo-edit"},[a("ul",{staticClass:"list"},t._l(t.data,(function(e,i){return a("li",{key:e.img_id,staticClass:"list-item"},[a("div",{staticClass:"image-item"},[a("img",{attrs:{src:t.parserPath(e.image_thumb_path),alt:""},on:{click:function(a){if(a.target!==a.currentTarget)return null;t.graffiti(e)}}}),a("i",{staticClass:"icon-delete",on:{click:function(a){a.stopPropagation(),t.del(e)}}})]),a("div",{staticClass:"desc",class:{"with-group":e.image_group}},[t.imageGroups.length?a("div",{staticClass:"image-groups"},t._l(t.imageGroups,(function(i){return a("span",{key:i.text,staticClass:"image-group",class:{active:e.image_group===i.text},on:{click:function(a){t.selectGroup(e,i.text)}}},[t._v("\n              "+t._s(i.text)+"\n            ")])}))):t._e(),t._v("\n          "+t._s(e.test)+"\n          "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.remark,expression:"v.remark"}],staticClass:"image-remark",attrs:{placeholder:"点击添加文字",maxlength:"200"},domProps:{value:e.remark},on:{input:function(a){a.target.composing||t.$set(e,"remark",a.target.value)}}})]),t.data.length>1?a("div",{staticClass:"sort-seat"},[a("div",{staticClass:"sort"},[a("div",{staticClass:"icon icon-up",style:{visibility:0==i?"hidden":"visible"},on:{click:function(e){t.changePos(i,-1)}}}),a("div",{staticStyle:{flex:"1"}}),a("div",{staticClass:"icon icon-down",style:{visibility:i==t.data.length-1?"hidden":"visible"},on:{click:function(e){t.changePos(i,1)}}})])]):t._e()])})))]),a("app-button-group",{attrs:{slot:"footer"},slot:"footer"},[a("app-button",{on:{click:t.done}},[t._v("\n      完成\n    ")])],1)],1)},u=[],g=(a("8dee"),a("5bbb")),f=a("f121"),m=a("fe6f"),h={data:function(){return{show:!1,imageGroups:[],data:[]}},methods:{graffiti:function(t){var e=this;this.GRAFFITI_PHOTO({file:t}).then((function(t){t&&Array.isArray(t)&&e.data.forEach((function(e){t.forEach((function(t){t.img_id===e.img_id&&(e.ossUrl=t.ossUrl,e.file_path=t.ossUrl,e.image_thumb_path=e.ossUrl+"?"+f["n"])}))}))}))},changePos:function(t,e){this.data[t]=[this.data[t+e],this.data[t+e]=this.data[t]][0],this.data=JSON.parse(JSON.stringify(this.data))||[]},done:function(){this.callback&&this.callback(this.data),this.closePopup()},selectGroup:function(t,e){t.image_group===e?t.image_group="":t.image_group=e},openPopup:function(t){this.show=!0,this.data=Object(g["a"])(t.data)||[],this.imageGroups=t.imageGroups,this.callback=t.callback},closePopup:function(){this.show=!1},del:function(t){this.data=this.data.filter((function(e){return e.img_id!==t.img_id}))},parserPath:function(t){return Object(m["b"])()&&(t=t.replace("file://","")),t}}},x=h,b=(a("25f1"),a("5d22")),v=Object(b["a"])(x,p,u,!1,null,"2f3f701e",null),_=v.exports;function y(t){var e;return function(){return e||(e=t.apply(this,arguments))}}var k=y((function(){var t=l["a"].extend(_);return new t({el:document.createElement("div")})})),w=function(t){var e=k();return document.body.appendChild(e.$el),e},C=w;function O(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function j(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?O(Object(a),!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var P={name:"ImageUploader",mixins:[d["a"]],inheritAttrs:!1,props:{value:{type:Array,default:function(){return[]}},imageGroups:{type:Array,default:function(){return[]}},maxLength:{type:Number,default:10},editable:{type:Boolean,default:!0}},data:function(){return{data:[],uploadingStatus:{}}},computed:{defaultImageGroup:function(){return 1===this.imageGroups.length?this.imageGroups[0].value:""}},watch:{value:{handler:function(t){this.data=t},immediate:!0}},mounted:function(){},methods:{del:function(t){this.data=this.data.filter((function(e){return e.img_id!==t.img_id})),delete this.uploadingStatus[t.img_id],this.$emit("input",this.data)},edit:function(t){var e=this;C().openPopup({data:this.data,imageGroups:this.imageGroups,callback:function(t){e.data=t,e.$emit("input",e.data)}})},add:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.uploading=!0,Object(n["a"])()?this.localAdd(t):this.realAdd(t)},localAdd:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=[{img_id:Object(r["c"])(),file_name:"Mock图片--".concat(Object(r["c"])(5),".jpg"),file_path:"https://gcxt-test.oss-cn-shenzhen.aliyuncs.com/gcxt/files/my570cd49bc2458/61491c29-96c7-cd0a-7912-027250fdb9df.jpg",create_by:Object(c["a"])("xt_user_name"),user_id:Object(c["d"])("user_id"),create_time:(new Date).toLocaleString(),image_thumb_path:"https://gcxt-img-test.myfuwu.com.cn/gcxt/files/my570cd49bc2458/61491c29-96c7-cd0a-7912-027250fdb9df.jpg?x-oss-process=image/resize,h_100,w_100,90_q,limit_1,value_0",image_compress_path:"https://gcxt-img-test.myfuwu.com.cn/gcxt/files/my570cd49bc2458/61491c29-96c7-cd0a-7912-027250fdb9df.jpg?x-oss-process=image/resize,h_1000,w_1000,90_q,limit_1,value_0",image_group:this.defaultImageGroup,is_original:!0}];return this.selectLocalFile(e),this.uploading=!1,this.uploadingStatus={},t.selectLocalFile&&t.selectLocalFile(e),this.$emit("input",this.data),Promise.resolve()},realAdd:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.GET_PHOTO({selectLocalFile:function(a){t.selectLocalFile(a),e.selectLocalFile&&e.selectLocalFile(a)},processIndex:function(e){return t.processIndex(e)},process:function(e){t.data=t.data.map((function(t){return t.img_id===e.img_id?j(j({},t),{},{progress:e.progress}):t}))},number:this.maxLength}).then(this.successUploadImage).catch((function(){return t.uploading=!1,!1}))},processIndex:function(t){var e=this;this.data.forEach((function(a){t.img_id===a.img_id&&(a.ossUrl=t.ossUrl,a.file_path=t.ossUrl,e.$delete(e.uploadingStatus,a.img_id))})),this.uploadingStatus=this.uploadingStatus},successUploadImage:function(t){var e=this;this.uploading=!1,t&&(t.forEach((function(t){e.data.forEach((function(a){a.img_id!==t.img_id||a.ossUrl||(a.ossUrl=t.ossUrl,a.file_path=t.ossUrl,a.is_original=!0,e.$delete(e.uploadingStatus,a.img_id))}))})),this.$emit("input",this.data))},selectLocalFile:function(t){var e=this;t&&(this.hasAppend&&(this.appendData=this.appendData.concat(t)),t.forEach((function(t){t.image_group=e.defaultImageGroup,e.uploadingStatus[t.img_id]=!0})),this.data=this.data.concat(t),this.uploading=!0)},hasUploading:function(){var t=this;return this.data.some((function(e){return t.uploadingStatus[e.img_id]}))||this.uploading}}},G=P,U=(a("7a3d"),Object(b["a"])(G,i,o,!1,null,"4d821550",null));e["a"]=U.exports},"7a3d":function(t,e,a){"use strict";a("35d6")},"7b41":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"upload-images"},[a("div",{staticClass:"up-title"},[a("span",{staticClass:"color-black"},[t._v("图片")]),!t.editable&&t.hasAppend?a("a",{staticClass:"append-btn",attrs:{href:"javascript:void(0);"},on:{click:t.appendImg}},[t._v("追加图片")]):t._e()]),t.editable?t._e():a("div",{staticClass:"view-image-list"},t._l(t.data,(function(e,i){return a("li",{key:e.id,staticClass:"image-item",on:{click:function(e){t.viewImg(i,t.data)}}},[a("div",{staticClass:"left img",style:{"background-image":"url("+t.parserPath(e.image_thumb_path)+")"}}),a("div",{staticClass:"right"},[a("div",{staticClass:"line line-name"},[t._v(t._s(e.file_name||""))]),a("div",{staticClass:"line line-remark"},[t._v(t._s(e.remark||""))]),a("div",{staticClass:"line line-info"},[t._v(t._s((e.image_group||"")+"   "+(e.create_time||"")+"   来自 "+e.create_by))])])])}))),t.editable?a("uploader",{ref:"EditUploader",attrs:{"image-group-check":t.imageGroupCheck,"image-groups":t.imageGroups,"max-length":t.maxLength},model:{value:t.data,callback:function(e){t.data=e},expression:"data"}}):t._e(),!t.editable&&t.hasAppend?a("append-popup",{ref:"AppendPopup",attrs:{"image-group-check":t.imageGroupCheck,"image-groups":t.imageGroups,"org-data":t.value},on:{submit:t.appendSubmit}}):t._e(),t.ios&&t.show_not_support&&t.editable?a("div",{staticClass:"up-info"},[t._t("default",[t._v("如需上传其他类型的附件可先保存为草稿再去电脑端上传")])],2):t._e()],1)},o=[],s=a("0e2e"),n=(a("1bc7"),a("e680"),a("82f8")),r=a("bc32"),c=a("fe6f"),d=a("a783"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("popup-page",{directives:[{name:"phy-back",rawName:"v-phy-back",value:{status:t.show,method:"cancel"},expression:"{status: show, method: 'cancel'}"}],attrs:{value:!0,"extra-style":{display:t.show?"flex":"none"}}},[a("v-header",{attrs:{slot:"header",title:"追加图片","is-back":!1},slot:"header"},[a("span",{staticClass:"cancel-action",attrs:{slot:"left"},on:{click:t.cancel},slot:"left"},[t._v("取消")])]),a("uploader",{ref:"Uploader",attrs:{"image-groups":t.imageGroups},model:{value:t.data,callback:function(e){t.data=e},expression:"data"}}),a("template",{slot:"footer"},[t.data.length?a("app-button-group",[a("app-button",{on:{click:t.save}},[t._v("提交")])],1):t._e()],1)],2)},p=[],u=a("76e6"),g=a("8dfd"),f=a("ecd2"),m={name:"ImageAppendPopup",components:{Uploader:u["a"]},mixins:[g["a"]],props:{imageGroups:{type:Array,default:function(){return[]}},orgData:{type:Array,default:function(){return[]}}},data:function(){return{show:!1,data:[]}},inject:{getSheetData:{from:"getSheetData",default:function(){}}},methods:{cancel:function(){var t=this;this.data.length?this.sui.confirm({message:"确认离开当前页面吗？离开后所做操作将无法保存。",confirmButtonText:"确认离开",cancelButtonText:"取消"}).then((function(){t.data=[],t.show=!1})).catch((function(){})):this.show=!1},add:function(){var t=this;this.$refs.Uploader.add({selectLocalFile:function(e){e.length&&(t.show=!0)}})},save:function(){var t=this;if(this.data.length){if(!this.$refs.Uploader.hasUploading()){var e=this.getSheetData().approveData.actionData,a=e.biz_id,i=e.proc_type_id;return Object(n["b"])({biz_id:a,proc_type_id:i,images:[].concat(Object(s["a"])(this.orgData),Object(s["a"])(this.data))}).then((function(){t.$emit("submit",t.data),t.reset(),t.show=!1,f["a"].success("提交成功")}))}this.sui.toast("请等待图片上传完毕")}else this.sui.toast("请选择图片")},reset:function(){this.data=[]}}},h=m,x=a("5d22"),b=Object(x["a"])(h,l,p,!1,null,null,null),v=b.exports,_=a("933f"),y={name:"UploadImages",components:{AppendPopup:v,Uploader:u["a"]},mixins:[g["a"]],props:{title:{type:String,default:""},show_not_support:{type:Boolean,default:!0},value:{type:Array,default:function(){return[]}},hasAppend:{type:Boolean,default:!1},editable:{type:Boolean,default:!0},maxLength:{type:Number,default:10}},data:function(){return{ios:Object(c["b"])(),imageGroupCheck:[],imageGroups:[],data:[]}},watch:{value:{handler:function(t){this.data=t||[]},immediate:!0}},mounted:function(){window.uploadImageTest=this,(this.editable||this.hasAppend)&&this.getParamsByCode()},methods:{getParamsByCode:function(){var t=this;Object(n["v"])({scope_type:0,codes:["image_group_".concat(d["a"].bizType)],scope_type_id:0,change_type:d["a"].changeType}).then((function(e){var a=e.data;a&&a.length>0&&(t.imageGroupCheck=Object(r["a"])(a[0].p_items,[]),t.imageGroups=t.imageGroupCheck)}))},hasUploading:function(){var t=this.$refs.EditUploader;return t.hasUploading()},getData:function(){return this.data},validateRequirement:function(){var t=this.imageGroupCheck||[],e={},a=[];if(Array.isArray(this.data)&&this.data.forEach((function(t){t.image_group&&(e[t.image_group]=!0)})),Array.isArray(t)&&t.forEach((function(t){e[t.value]||1!==t.req||a.push(t.value)})),a.length>0)return{flag:!1,msg:"请上传"+a.join(",")+"的照片"};var i=t.some((function(t){return!!t.allReq}));return i&&Array.isArray(this.data)&&!this.data.length?{flag:!1,msg:"请至少上传一张图片"}:{flag:!0,msg:""}},appendImg:function(){_["a"].idkey(_["a"].idkeys.editClickUploadImg),this.$refs.AppendPopup.add()},appendSubmit:function(t){this.data=[].concat(Object(s["a"])(this.data),Object(s["a"])(t))}}},k=y,w=(a("28c7"),Object(x["a"])(k,i,o,!1,null,"7a8c94fc",null));e["a"]=w.exports},8524:function(t,e,a){var i=a("5454");e=t.exports=a("690e")(!1),e.push([t.i,".gcxt .progress[data-v-4d821550]{position:absolute;top:0;right:0;left:0;bottom:0;background:rgba(0,0,0,.5);text-align:center;font-size:12px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#fff}.gcxt .image-group[data-v-4d821550],.gcxt .progress[data-v-4d821550]{display:-webkit-box;display:-ms-flexbox;display:flex}.gcxt .image-group[data-v-4d821550]{padding:.5rem;-ms-flex-wrap:wrap;flex-wrap:wrap;background:#fff}.gcxt .image-item[data-v-4d821550]{margin:2%;width:21%;padding-top:21%;position:relative;border:1px solid #ddd}.gcxt .image-item .img[data-v-4d821550]{position:absolute;top:0;width:100%;height:100%;background-size:cover}.gcxt .image-item .icon-delete[data-v-4d821550]{position:absolute;top:-10px;right:-10px;width:20px;height:20px;background-image:url("+i(a("f408"))+");background-size:cover;z-index:10;border:1px solid #fff;border-radius:50%}.gcxt .image-item .edit-text[data-v-4d821550]{position:absolute;bottom:0;z-index:100;margin:0;width:100%;text-align:center;font-size:12px;background:rgba(255,95,62,.9);color:#fff}.gcxt .image-add[data-v-4d821550]{border:1px dashed #d1d1d6}.gcxt .image-add .center[data-v-4d821550]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center}.gcxt .image-add .icon__add-pic[data-v-4d821550]{display:block;font-size:23px;color:#c8c8c8}.gcxt .image-add .text[data-v-4d821550]{font-size:12px;color:#c8c8c8;white-space:nowrap;display:block}",""])},"85fe":function(t,e,a){e=t.exports=a("690e")(!1),e.push([t.i,".gcxt[data-v-7a8c94fc] :export{colorPrimary:#0268b3;headerBackgroundColor:#fff;headerTextColor:#333}.gcxt .upload-images[data-v-7a8c94fc]{background-color:#fff;margin:0 0 10px}.gcxt .append-img[data-v-7a8c94fc],.gcxt .up-title[data-v-7a8c94fc]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.gcxt .up-title[data-v-7a8c94fc]{font-size:.8rem;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;line-height:2.2rem;padding:0 15px;height:2.2rem}.gcxt .up-title .label[data-v-7a8c94fc]{color:#0268b3;font-size:.8rem}.gcxt .up-title .label.color-black[data-v-7a8c94fc]{color:#000}.gcxt .up-title .append-btn[data-v-7a8c94fc]{display:inline-block;height:22px;line-height:22px;color:#666;border:1px solid #dcdcdc;border-radius:12px;padding:0 5px;font-size:13px;background:#fff;white-space:nowrap}.gcxt .image-group[data-v-7a8c94fc]{padding:3px 10px 10px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.gcxt .up-info[data-v-7a8c94fc]{padding:0 0 .6rem .75rem;font-size:.6rem;color:#999}.gcxt .view-image-list[data-v-7a8c94fc]{list-style:none;padding:0}.gcxt .view-image-list .image-item[data-v-7a8c94fc]{padding:13px 15px;display:-webkit-box;display:-ms-flexbox;display:flex}.gcxt .view-image-list .image-item+.image-item[data-v-7a8c94fc]{margin-top:10px}.gcxt .view-image-list .img[data-v-7a8c94fc]{-ms-flex-negative:0;flex-shrink:0;margin-top:3px;margin-right:9px;width:41px;height:41px;background-size:cover}.gcxt .view-image-list .line-name[data-v-7a8c94fc]{line-height:1.4;margin-bottom:5px}.gcxt .view-image-list .line-remark[data-v-7a8c94fc]{color:#8e8e93;word-break:break-all;font-size:13px}.gcxt .view-image-list .line-info[data-v-7a8c94fc]{color:#8e8e93;font-size:13px}",""])},"8dfd":function(t,e,a){"use strict";a("d0f2"),a("8dee");var i=a("f121"),o=a("fe6f"),s=a("a075");e["a"]={methods:{getImagePath:function(t){var e=t.indexOf("?")>=0?"&":"?";return t.indexOf("x-oss-process=image/resize")>=0?t:[t,i["n"]].join(e)},parserPath:function(t){return Object(o["b"])()&&(t=t.replace("file://","")),'"'+t+'"'},viewImg:function(t,e){var a=e.map((function(t){var e="";t.image_group&&(e+=t.image_group),t.image_group&&t.remark&&(e+="："),t.remark&&(e+=t.remark),t.create_time&&t.create_by&&((t.image_group||t.remark)&&(e+="\n"),e+=s["a"].date.format(t.create_time,"yyyy-MM-dd HH:mm")+" 来自 "+t.create_by);var a=t.image_compress_path||t.file_path,i=a.match(/^\/.*/)?"file://"+a:a,o={imgUrl:i,description:e};return o}));return this.$previewPicture(a,t)}}}},d852:function(t,e,a){var i=a("5454");e=t.exports=a("690e")(!1),e.push([t.i,".gcxt .photo-edit li[data-v-2f3f701e],.gcxt .photo-edit ul[data-v-2f3f701e]{list-style:none}.gcxt .photo-edit textarea[data-v-2f3f701e]{border:none;display:block;width:100%;height:80px;padding-left:10px;overflow:hidden}.gcxt .photo-edit .desc[data-v-2f3f701e]{position:relative;margin-left:15px;-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;display:-webkit-flex;height:90px}.gcxt .photo-edit .mask-textarea[data-v-2f3f701e]{position:absolute;top:0;left:0;width:100%;height:100%;display:none;background:transparent}.gcxt .photo-edit .sort-seat[data-v-2f3f701e]{width:1.5rem;height:90px}.gcxt .photo-edit .sort[data-v-2f3f701e]{font-size:.8rem;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.gcxt .photo-edit .sort>.icon[data-v-2f3f701e]{position:relative;display:block;line-height:1;color:#3492e9;text-align:center}.gcxt .photo-edit .sort .icon[data-v-2f3f701e]:active{background:#eee}.gcxt .photo-edit .with-group .image-remark[data-v-2f3f701e]{-webkit-box-flex:1;-ms-flex:1;flex:1;height:auto;margin-top:10px;padding:0;resize:none}.gcxt .photo-edit .edit-card[data-v-2f3f701e]{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.gcxt .photo-edit .edit-card[data-v-2f3f701e],.gcxt .photo-edit .image-groups[data-v-2f3f701e]{display:-webkit-box;display:-ms-flexbox;display:flex;display:-webkit-flex}.gcxt .photo-edit .image-groups[data-v-2f3f701e]{-ms-flex-negative:0;flex-shrink:0;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-flex-shrink:0;-webkit-flex-wrap:nowrap;overflow:auto}.gcxt .photo-edit .image-group[data-v-2f3f701e]{line-height:1;padding:5px;-ms-flex-negative:0;flex-shrink:0;-webkit-flex-shrink:0;margin-right:10px;border-radius:2px;border:1px solid #b5b5b5;color:#b5b5b5}.gcxt .photo-edit .image-group[data-v-2f3f701e]:last-child{margin-right:0}.gcxt .photo-edit .image-group.active[data-v-2f3f701e]{border-color:#3492e9;color:#fff;background:#3492e9}.gcxt .list[data-v-2f3f701e]{list-style:none;margin-bottom:40px;-webkit-box-flex:1;-ms-flex:1;flex:1}.gcxt .list .list-item[data-v-2f3f701e]{margin:10px 0;padding:10px;border-radius:5px;background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.gcxt .image-item[data-v-2f3f701e]{margin:2%;width:21%;padding-top:21%;position:relative;border:1px solid #ddd}.gcxt .image-item img[data-v-2f3f701e]{height:100%;width:100%;position:absolute;top:0}.gcxt .image-item .icon-delete[data-v-2f3f701e]{position:absolute;top:-10px;right:-10px;width:20px;height:20px;background-image:url("+i(a("f408"))+");background-size:cover;z-index:10;border:1px solid #fff;border-radius:50%}.gcxt .dialog-wrapper[data-v-2f3f701e]{position:absolute;background:#f5f5f5;top:0;left:0;width:100%;height:100%;z-index:2000;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}",""])},d923:function(t,e,a){var i=a("d852");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("85cb").default;o("113d16d7",i,!0,{sourceMap:!1,shadowMode:!1})},dd67:function(t,e,a){var i=a("85fe");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("85cb").default;o("d238a2bc",i,!0,{sourceMap:!1,shadowMode:!1})}}]);