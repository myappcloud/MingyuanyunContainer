(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-344f0271"],{"2f97":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"feedback"},[o("app-header",{attrs:{title:"帮助与反馈"},on:{"click-right":function(e){return t.$router.push("/user/feedback/history")}}},[o("div",{attrs:{slot:"right"},slot:"right"},[t._v("历史")])]),o("div",{staticClass:"blank"}),o("div",{staticClass:"blank"}),o("div",{staticClass:"text-wrapper"},[o("text-box",{ref:"textbox",attrs:{remark:t.model.remark,placeholder:"描述您遇到的问题或建议"},on:{input:t.updateRemark}})],1),o("section",{staticClass:"image-list"},[t._l(t.model.photoList,(function(e,a){return o("div",{key:a,staticClass:"img-wrapper",class:{ml20:a>0}},[o("img",{attrs:{src:e.img_view,alt:"photo"},on:{click:function(e){return t.showLargeImg(a)}}}),o("i",{staticClass:"delete-btn super-app-iconfont super-app-icon-clear",on:{click:function(e){return t.removeImg(a)}}})])})),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.model.photoList||t.model.photoList.length<3,expression:"!model.photoList || model.photoList.length < 3"}],staticClass:"append-btn",class:{ml20:t.model.photoList&&t.model.photoList.length>0},on:{click:t.addImage}},[o("i",{staticClass:"super-app-iconfont super-app-iconzhaopian"})])],2),o("div",{staticClass:"footer"},[o("app-button",{staticClass:"login-btn",on:{click:t.submit}},[t._v("提交")])],1),o("van-action-sheet",{attrs:{actions:t.actions,"cancel-text":"取消"},on:{select:t.selectAction,cancel:t.cancelSelect},model:{value:t.showImageAction,callback:function(e){t.showImageAction=e},expression:"showImageAction"}})],1)},n=[],s=o("5047"),i=o("6414"),c=o("c8da"),l=o("bc58"),r=o.n(l),u=o("82b4"),m=function(t){r.a.set(u["a"].SHAKE_TO_FEED_BACK,t,r.a.level.user)},h=function(){return r.a.getString(u["a"].SHAKE_TO_FEED_BACK,r.a.level.user)},p={setShake:m,getShake:h},d={components:{appButton:s["a"],textBox:i["a"]},data:function(){return{shake:"on",remark:"",model:{},showImageAction:!1,actions:[]}},activated:function(){this.model=c["a"].model,this.actions=c["a"].actions},methods:{updateRemark:function(t){this.model.remark=t},shakeSwitch:function(t){p.setShake(t)},addImage:function(){this.showImageAction=!0},removeImg:function(t){c["a"].removeImg(t)},showLargeImg:function(t){c["a"].showLargeImg(t)},selectAction:function(t){var e=this;return c["a"].takePhoto(t.index).then((function(){e.showImageAction=!1})).catch((function(t){e.$toast(t||"获取照片失败")}))},cancelSelect:function(){this.showImageAction=!1},submit:function(){var t=this;c["a"].submit().then((function(e){t.$toast.clear(),console.log("msg ===> ",e||"提交成功"),t.$toast(e||"提交成功"),t.model.remark="",t.model.photoList=[],t.model.uploadLog=!0,t.model.currType="optimumSuggest"})).catch((function(e){t.$toast.clear(),t.$toast(e||"提交失败")}))}}},f=d,g=(o("9fff"),o("5d22")),k=Object(g["a"])(f,a,n,!1,null,"66323967",null);e["default"]=k.exports},5969:function(t,e,o){},"9fff":function(t,e,o){"use strict";o("5969")}}]);