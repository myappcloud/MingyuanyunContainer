(window["webpackJsonp_module_entry_gcxt_"]=window["webpackJsonp_module_entry_gcxt_"]||[]).push([["chunk-ab6e51fa"],{"34de":function(t,e,a){var i=a("f992");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("85cb").default;n("6fd8c8c6",i,!0,{sourceMap:!1,shadowMode:!1})},dabd:function(t,e,a){"use strict";a("34de")},ef0d:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page",[a("v-header",{attrs:{slot:"header",title:t.myTeam?"我的团队":"选择转移对象","back-action":t.back},slot:"header"}),t.myTeam?a("div",{staticClass:"content"},[a("div",{staticClass:"kv-list pic-list"},[a("ul",[t._l(t.list,(function(e,i){return[a("li",{key:i,staticClass:"bb",staticStyle:{"margin-bottom":"0.5rem"}},[a("div",{staticClass:"ii bb"},[t.projectAuthStatus?[a("auth-team-member",{attrs:{"item-data":e}})]:[a("team-member",{attrs:{"item-data":e}})],a("div",{directives:[{name:"show",rawName:"v-show",value:!t.projectAuthStatus,expression:"!projectAuthStatus"}],staticClass:"btn-contain"},[e.enable_transfer?a("button",{staticClass:"button button-gray pull-right but J_go_transfer",on:{click:function(e){e.stopPropagation(),t.transfer(i)}}},[t._v("\n                  转移\n                ")]):t._e()])],2)])]}))],2)])]):a("div",{staticClass:"content",attrs:{id:"transfer-to"}},[a("div",{staticClass:"kv-list pic-list kv-radio-list "},[a("ul",[t._l(t.list,(function(e,i){return[i!==t.transferIndex?a("li",{key:i,staticClass:"bb",class:{selected:i===t.transferIndexEd&&!t.myTeam},staticStyle:{"margin-bottom":"0.5rem"},on:{click:function(e){t.transferEd(i)}}},[a("div",{staticClass:"ii bb"},[a("team-member",{attrs:{"item-data":e}})],1)]):t._e()]}))],2)])]),t.myTeam?t._e():a("app-button-group",{attrs:{slot:"footer"},slot:"footer"},[a("app-button",{on:{click:t.transferSub}},[t._v("确定")])],1)],1)},n=[],s=(a("cc57"),a("c943")),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"kv"},[t.itemData.photo?a("div",{staticClass:"k text-pic",style:"background:url("+t.itemData.photo+")center center;background-size: cover;"}):a("div",{staticClass:"k text-pic",style:t.getUserColorForUser(),domProps:{textContent:t._s(t.getFirstName(t.itemData.name))}}),a("div",{staticClass:"v"},[a("dl",[a("dt",[t._v(t._s(t.itemData.name)+"（"+t._s(t.itemData.user_code)+"）")]),t.itemData.original_expired_time?[0===t.itemData.is_overdue?a("dd",[t._v("到期时间: "+t._s(t.itemData.expired_time))]):a("dd",{class:0===t.itemData.project_overdue?"usePeriod-never-text":"usePeriod-warning-text",domProps:{textContent:t._s(t.getExpiredTime())}})]:a("dd",{staticClass:"usePeriod-never-text"},[t._v("\n        未充值\n      ")])],2)]),a("div",{staticClass:"iconfont radio-select"})])},o=[],c=a("db68"),d=a("a740"),l={name:"TeamMember",props:{itemData:{type:Object,default:function(){return{}}}},data:function(){return{tenant_app:""}},mounted:function(){this.tenant_app=Object(d["d"])().tenant_app},methods:{getExpiredTime:function(){return 0!==this.itemData.project_overdue?"过期时间: ".concat(this.itemData.expired_time):"2"!==this.tenant_app?"项目充值用户":void 0},getFirstName:function(t){return t.substr(0,1)},getUserColorForUser:function(){return"background:".concat(Object(c["c"])(this.itemData))}}},u=l,m=a("c701"),p=Object(m["a"])(u,r,o,!1,null,"20b85a67",null),f=p.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"kv"},[t.itemData.photo?a("div",{staticClass:"k text-pic",style:"background:url("+t.itemData.photo+")center center;background-size: cover;"}):a("div",{staticClass:"k text-pic",style:t.getUserColorForUser(),domProps:{textContent:t._s(t.getFirstName(t.itemData.name))}}),a("div",{staticClass:"v"},[a("dl",[a("dt",[t._v(t._s(t.itemData.name)+"（"+t._s(t.itemData.user_code)+"）")])])]),a("div",{staticClass:"iconfont radio-select"})])},h=[],x={name:"AuthTeamMember",props:{itemData:{type:Object,default:function(){return{}}}},data:function(){return{tenant_app:""}},mounted:function(){this.tenant_app=Object(d["d"])().tenant_app},methods:{getFirstName:function(t){return t.substr(0,1)},getUserColorForUser:function(){return"background:".concat(Object(c["c"])(this.itemData))}}},v=x,g=Object(m["a"])(v,b,h,!1,null,"a666c4ac",null),_=g.exports,k=a("2ca8"),y=a("e717"),C={name:"Team",components:{AppButtonGroup:y["a"],TeamMember:f,AuthTeamMember:_},data:function(){return{transferIndex:-1,transferIndexEd:-1,myTeam:!0,list:[],projectAuthStatus:c["a"].customSetting.getProjectAuthStatus()}},mounted:function(){this.getData()},methods:{back:function(){this.myTeam?window.history.back():this.myTeam=!0},transferEd:function(t){this.transferIndexEd=t},transfer:function(t){this.transferIndex=t,this.myTeam=!1},transferSub:function(){if(this.transferIndexEd<0)this.sui.toast("请选择转移人员");else{var t=this,e=[],a=this.list[this.transferIndex],i=this.list[this.transferIndexEd];a.freeday=a.enable_transfer_day-a.surplus_day,e.push('<div style="font-size:13px;text-align:left;color:#888787;line-height:18px;"><div style="line-height:20px;margin-bottom:8px;text-align:left;color:#000">确认将账户“'),e.push(a.name),e.push("”剩余"),e.push(a.surplus_day),e.push("天使用时间转移到账户“"),e.push(i.name),e.push("”上吗？</div>"),e.push("注：转移只适用于人员离职，转移成功后，账户“"+a.name+"”60天内不能再进行任何转移操作。"),a.freeday>0&&e.push("（有"+a.freeday+"天的免费日，不能转移）"),e.push("</div>"),this.sui.confirm(e.join(""),(function(){Object(k["o"])({trans_from:a.user_id,trans_to:i.user_id}).then((function(){t.sui.toast("转移成功"),t.myTeam=!0,t.transferIndexEd=-1,t.getData()}))}))}},getData:function(){var t=this;Object(s["g"])().then((function(e){t.list=e.data}))}}},w=C,D=(a("dabd"),Object(m["a"])(w,i,n,!1,null,"9986e516",null));e["default"]=D.exports},f992:function(t,e,a){e=t.exports=a("690e")(!1),e.push([t.i,".gcxt #team button[data-v-9986e516]{width:65px}.gcxt .ii.bb[data-v-9986e516]{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.gcxt .kv[data-v-9986e516]{-webkit-box-flex:1;-ms-flex:1;flex:1}.gcxt .kv .v[data-v-9986e516]{padding-right:.25rem}.gcxt .kv .v dt[data-v-9986e516]{line-height:1.2!important;word-break:break-all;word-wrap:break-word}.gcxt .btn-contain[data-v-9986e516]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.gcxt .btn-contain .button[data-v-9986e516]{margin-top:.25rem}.gcxt .btn-contain .button[data-v-9986e516]:first-child{margin-top:0}.gcxt .xt-iphonex #J_transfer[data-v-9986e516]{background:#3492e9;color:#fff;display:inline-block;width:90%;height:2rem;line-height:2rem;border-bottom-left-radius:1rem;border-top-left-radius:1rem;border-top-right-radius:1rem;border-bottom-right-radius:1rem;margin-left:5%;margin-top:.25rem}.gcxt .content[data-v-9986e516]{position:static;padding-bottom:0}",""])}}]);