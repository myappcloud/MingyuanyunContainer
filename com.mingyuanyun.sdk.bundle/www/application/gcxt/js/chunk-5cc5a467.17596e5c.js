(window["webpackJsonp_module_entry_gcxt_"]=window["webpackJsonp_module_entry_gcxt_"]||[]).push([["chunk-5cc5a467"],{"12c5":function(s,t,e){t=s.exports=e("690e")(!1),t.push([s.i,".gcxt .no-express-data[data-v-0d29ab67]{text-align:center;padding-top:19%}.gcxt .no-express-data .logo[data-v-0d29ab67]{display:block;margin:0 auto;width:40%}.gcxt .no-express-data .hint[data-v-0d29ab67]{padding-top:18px;color:#969696}",""])},7107:function(s,t,e){s.exports=e.p+"img/no-express-data.b2946fb4.png"},"75af":function(s,t,e){"use strict";e("b041")},8256:function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("page",[e("v-header",{attrs:{slot:"header",title:"查看物流"},slot:"header"}),e("div",[e("div",{staticClass:"kv-list"},[e("ul",[e("li",[e("div",{staticClass:"ii bb"},[e("div",{staticClass:"kv fz14"},[e("div",{staticClass:"k k-6p5em"},[s._v("物流状态:")]),e("div",{staticClass:"v",class:"已签收"===s.expressInfo.express_status?"color-success":"",domProps:{textContent:s._s(s.expressInfo.express_status)}})]),e("div",{staticClass:"kv fz14"},[e("div",{staticClass:"k k-6p5em"},[s._v("承运来源:")]),e("div",{staticClass:"v",domProps:{textContent:s._s(s.expressInfo.express_corp_name)}})]),e("div",{staticClass:"kv fz14"},[e("div",{staticClass:"k k-6p5em"},[s._v("运单编号:")]),e("div",{staticClass:"v",domProps:{textContent:s._s(s.expressInfo.express_num)}})])])])])]),e("div",{staticClass:"kv-list express-list",staticStyle:{"margin-top":"0.5rem"}},[e("ul",s._l(s.expressInfo.express_info,(function(t,a){return e("li",{key:a},[e("em",{staticClass:"dot"}),e("div",{staticClass:"ii bb"},[e("dl",{staticClass:"express-item"},[e("dt",[s.regPhone(t.status)?e("a",{attrs:{href:"tel:"+t.status},domProps:{textContent:s._s(t.status)}}):e("span",{domProps:{textContent:s._s(t.status)}})]),e("dd",{domProps:{textContent:s._s(t.time)}})])])])}))),e("div",{directives:[{name:"show",rawName:"v-show",value:!s.expressInfo.express_info.length,expression:"!expressInfo.express_info.length"}],staticClass:"no-express-data"},[e("img",{staticClass:"logo",attrs:{src:s.noExpressImage}}),e("div",{staticClass:"hint"},[s._v("没有查询到物流信息")])])])])],1)},n=[],o=e("f121"),i=e("2ca8"),r=e("7107"),c=e.n(r),d={name:"Express",data:function(){return{noExpressImage:c.a,expressInfo:{express_info:[]}}},created:function(){var s=this;Object(i["n"])(this.$route.query).then((function(t){s.expressInfo=t.data}))},methods:{regPhone:function(s){return o["j"].expressPhone.test(s)}}},p=d,l=(e("75af"),e("5d22")),x=Object(l["a"])(p,a,n,!1,null,"0d29ab67",null);t["default"]=x.exports},b041:function(s,t,e){var a=e("12c5");"string"===typeof a&&(a=[[s.i,a,""]]),a.locals&&(s.exports=a.locals);var n=e("85cb").default;n("084c1045",a,!0,{sourceMap:!1,shadowMode:!1})}}]);