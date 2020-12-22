(window["webpackJsonp_module_entry_gcxt_"]=window["webpackJsonp_module_entry_gcxt_"]||[]).push([["chunk-390bab61"],{"14bb":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-popup",{directives:[{name:"phy-back",rawName:"v-phy-back",value:{status:t.visible,method:"closeModal"},expression:"{ status: visible, method: 'closeModal' }"}],staticClass:"recharge-popup fixed-bottom--popup",class:t.iosClassNames,attrs:{value:t.visible,position:"bottom","get-container":"body",closeable:!0},on:{input:t.closeModal}},[a("div",{staticClass:"popup-title"},[t._v("选择充值对象")]),a("div",{staticClass:"popup-sub-title"},[t._v("充值后个人和项目之间无法互相转移")]),a("div",{staticClass:"content-container"},[a("div",{staticClass:"item",class:{selected:t.mode===t.PERSONAL},on:{click:function(e){t.selectMode(t.PERSONAL)}}},[a("i",{staticClass:"iconfont icon_selected icon-_xuanzhong"}),a("div",{staticClass:"name"},[t._v("充值给"),a("strong",[t._v("个人账号")])]),a("div",{staticClass:"desc"},[t._v("\n          为指定账号延长有效期。有效期内，对该账号拥有权限的项目，用户可以发起及审批业务单据。\n        ")])]),a("div",{staticClass:"item",class:{selected:t.mode===t.PROGRAM},on:{click:function(e){t.selectMode(t.PROGRAM)}}},[a("i",{staticClass:"iconfont icon_selected icon-_xuanzhong"}),a("div",{staticClass:"name"},[t._v("充值给"),a("strong",[t._v("指定项目")])]),a("div",{staticClass:"desc"},[t._v("\n          为指定项目下的指定单位延长有效期。有效期内，该乙方单位下的所有用户均可对该项目发起及审批业务单据。\n        ")])])])])},c=[],s="personal",r="program",i={name:"RechargeModal",props:{visible:{type:Boolean,required:!0,default:!1}},data:function(){return{PERSONAL:s,PROGRAM:r,mode:""}},methods:{selectMode:function(t){var e=this;this.mode=t,setTimeout((function(){e.$emit("confirm",e.mode),e.closeModal()}),300)},closeModal:function(){this.mode="",this.hint=" ",this.$emit("close")}}},n=i,d=(a("496a"),a("c701")),l=Object(d["a"])(n,o,c,!1,null,"bdc43a46",null);e["a"]=l.exports},"3ad8":function(t,e,a){var o=a("f30d");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var c=a("85cb").default;c("ee95ffb0",o,!0,{sourceMap:!1,shadowMode:!1})},"496a":function(t,e,a){"use strict";a("bfa0")},8004:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("page",[o("v-header",{attrs:{slot:"header",title:"充值"},slot:"header"},[o("span",{staticClass:"gorecorder _ex-click",attrs:{slot:"right"},on:{click:t.goRechargeRecorder},slot:"right"},[t._v("充值记录")])]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showTop,expression:"showTop"}]},[o("div",{staticClass:"buttons-tab"},[t.isThirdPartyRecharge?t._e():o("span",{staticClass:"tab-link button",class:{active:"card"===t.cur_tab},attrs:{id:"tab_card"},on:{click:function(e){t.changeCard("card")}}},[t._v("\n        充值卡充值\n      ")]),o("span",{staticClass:"tab-link button",class:{active:"token"===t.cur_tab},attrs:{id:"tab_token"},on:{click:function(e){t.changeCard("token")}}},[t._v("\n        卡密充值\n      ")])])]),o("div",{staticClass:"content",class:{"hide-token":t.hideToken}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],staticClass:"tabs"},[o("div",{staticClass:"tab card-list",class:{active:"card"===t.cur_tab},attrs:{id:"card"}},[o("scroll-refresh",{directives:[{name:"show",rawName:"v-show",value:t.renderList.length>0&&t.loaded,expression:"renderList.length > 0 && loaded"}],attrs:{loading:t.loading,finished:t.finished},on:{refresh:t.refresh,more:t.more}},[o("div",{staticClass:"kv-list kv-ml-list pic-list"},[o("ul",t._l(t.renderList,(function(e,a){return o("li",{key:a},[o("div",{staticClass:"ii bb"},[o("div",{staticClass:"kv"},[o("div",{staticClass:"k"},["未充值"==e.status?o("span",{staticClass:"iconfont icon-goukachongzhi",staticStyle:{"font-size":"2rem","line-height":"1",color:"#57A7F3"}}):o("span",{staticClass:"iconfont icon-goukachongzhi",staticStyle:{"font-size":"2rem","line-height":"1",color:"#d2d2d2"}})]),o("div",{staticClass:"v"},[o("dl",[o("dt",[t._v("\n                          "+t._s(e.number)),o("span",{staticStyle:{color:"#999","font-size":"0.6rem"}},[t._v("\n                            （卡号）\n                          ")])]),o("dd",[t._v(t._s(t._f("filterYear")(e.specs_amount))+"年有效期")])])]),"未充值"==e.status?o("button",{staticClass:"button button-primary but card-recharge",on:{click:function(a){t.cardRecharge(e)}}},[t._v("\n                      充值\n                    ")]):t._e()])])])})))])]),o("div",{directives:[{name:"show",rawName:"v-show",value:0===t.renderList.length&&t.loaded,expression:"renderList.length === 0 && loaded"}],staticClass:"empty-list empty-lists"},[o("img",{staticStyle:{width:"150px"},attrs:{src:a("cd45")}}),o("span",[t._v("您当前没有可使用的充值卡")]),o("app-button",{staticClass:"button-buy",attrs:{size:"small"},on:{click:t.goBuyCard}},[t._v("\n            去购卡\n          ")])],1)],1),o("div",{staticClass:"tab",class:{active:"token"===t.cur_tab},attrs:{id:"token"}},[o("div",{staticClass:"list-block"},[o("ul",[o("li",[o("div",{staticClass:"item-content"},[o("div",{staticClass:"item-inner"},[o("div",{staticClass:"item-title"},[t._v("卡密：")]),o("div",{staticClass:"item-input"},[o("form",{attrs:{onsubmit:"return false;"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.token,expression:"token"},{name:"focus",rawName:"v-focus",value:t.focus,expression:"focus"}],attrs:{id:"token-input",type:"number",placeholder:"请输入13位卡密号码"},domProps:{value:t.token},on:{input:function(e){e.target.composing||(t.token=e.target.value)}}})])])])])])])]),o("div",{staticClass:"pl-15 pr-15 mt-20"},[o("app-button",{attrs:{id:"token_recharge"},on:{click:t.tokenRecharge}},[t._v("充值")])],1)])])]),o("recharge-modal",{attrs:{visible:t.rechargeModal},on:{close:t.toggleRechargeMadol,confirm:t.confirmRecharge}})],1)},c=[],s=(a("5ab2"),a("6d57"),a("e10e"),a("4c09")),r=a("28f8"),i=a("4ae5"),n=a("14bb"),d=a("f2de"),l=a("a740"),u=a("5782");function h(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?h(Object(a),!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var b={name:"Recharge",components:{AppButton:u["a"],RechargeModal:n["a"]},filters:{filterYear:function(t){return(t/12).toFixed(0)}},directives:{focus:{inserted:function(t,e){var a=e.value;a&&t.focus()}}},data:function(){var t=1===Object(l["a"])("is_thirdparty_recharge_mode")||"";return{loading:!1,loaded:!1,hide_account_charge:{card_charge:0,code_charge:0},finished:!1,showTop:!1,hideToken:!0,cur_tab:t?"token":"card",pageSize:20,pageIndex:1,status:1,renderList:[],rechargeModal:!1,curRechargeCard:{},card_no:"",token:"",focus:!1,isThirdPartyRecharge:t}},computed:p({},Object(d["b"])({custom_setting:function(t){return t.todo.custom_setting}})),mounted:function(){var t=this.custom_setting.hide_account_charge;try{t=JSON.parse(t)}catch(e){t={card_charge:0,code_charge:0}}0!==t.card_charge||0!==t.code_charge||this.isThirdPartyRecharge?0!==t.card_charge||this.isThirdPartyRecharge?0===t.code_charge&&(this.cur_tab="token"):this.cur_tab="card":(this.cur_tab="card",this.showTop=!0,this.hideToken=!1),this.getData()},methods:{refresh:function(){this.pageIndex=1,this.getData()},more:function(){this.getData()},changeCard:function(t){this.cur_tab=t},goBuyCard:function(){this.$router.push("/buy/index")},getData:function(t){var e=this;e.loading=!0,e.$store.dispatch(i["e"],{tab:e.cur_tab,page_index:e.pageIndex,status:e.status}).then((function(a){e.loaded=!0,e.loading=!1;var o=e.renderList.length+a.data.length;o>=a.record_count&&(e.finished=!0);var c=Object(s["a"])(e.renderList);a.data.length&&(e.pageIndex=e.pageIndex+1,t||1===e.pageIndex?e.renderList=a.data:e.renderList=c.concat(a.data))})).catch((function(t){console.error(t),e.loaded=!0,e.loading=!1}))},goRechargeRecorder:function(){this.$router.push("/buy/card_used")},checkRechargeModal:function(t){var e=this.custom_setting.recharge_object,a=this.buildUrl();try{e=JSON.parse(e)}catch(o){e={person_recharge:{enable:0},project_recharge:{enable:0}}}if(0===e.person_recharge.enable&&0===e.project_recharge.enable)return this.sui.toast("没有配置充值方式"),!1;1===e.person_recharge.enable&&0===e.project_recharge.enable?this.$router.push("/buy/select_person?".concat(a)):0===e.person_recharge.enable&&1===e.project_recharge.enable?this.$router.push("/buy/select_proj?".concat(a)):this.toggleRechargeMadol()},cardRecharge:function(t){this.curRechargeCard=t,this.checkRechargeModal({card_id:t.id,indent_id:t.indent_id})},toggleRechargeMadol:function(){this.rechargeModal=!this.rechargeModal},confirmRecharge:function(t){var e=this.buildUrl();switch(t){case"personal":this.$router.push("/buy/select_person?".concat(e));break;case"program":this.$router.push("/buy/select_proj?".concat(e));break}},buildUrl:function(){return"card"==this.cur_tab?"card_id=".concat(this.curRechargeCard.id,"&indent_id=").concat(this.curRechargeCard.indent_id):"card_no=".concat(this.card_no)},tokenRecharge:function(){var t=this,e=this.checkTokenInput();e&&this.$store.dispatch(i["a"],{card_no:e}).then((function(a){t.card_no=e,t.checkRechargeModal({card_no:e})})).catch((function(e){e.message&&t.sui.toast(e.message)}))},checkTokenInput:function(){var t=this.token.trim();return""===t?(this.sui.toast("请输入卡密号码"),this.token="",this.focus=!0,!1):/^\d{13}$/.test(t)?(this.focus=!1,t):(this.sui.toast("卡密不正确，请重新输入"),this.focus=!0,!1)}}},g=b,f=(a("a26b"),a("c701")),v=Object(f["a"])(g,o,c,!1,null,"0f3237b1",null);e["default"]=v.exports},"80f5":function(t,e,a){e=t.exports=a("690e")(!1),e.push([t.i,'.gcxt[data-v-bdc43a46] :export{colorPrimary:#2c5cf7;headerBackgroundColor:#fff;headerTextColor:#333}.gcxt .icon_selected[data-v-bdc43a46]{position:absolute;right:0;bottom:0;display:none}.gcxt .icon_selected[data-v-bdc43a46]:before{font-size:10px;-webkit-transform:scale(.6);transform:scale(.6);display:inline-block;color:#fff;font-weight:700;position:absolute;right:0;bottom:1px;line-height:1}.gcxt .icon_selected[data-v-bdc43a46]:after{content:"";border:10px solid #2c5cf7;display:block;border-top-color:transparent;border-left-color:transparent}.gcxt .recharge-popup[data-v-bdc43a46]{background:#fff}.gcxt .popup-title[data-v-bdc43a46]{text-align:center;color:#323233;font-size:16px;padding:12px 15px;font-weight:700}.gcxt .popup-sub-title[data-v-bdc43a46]{margin-bottom:10px;text-align:center;color:#ff9400;font-size:14px}.gcxt .content-container[data-v-bdc43a46]{padding:10px 30px 25px}.gcxt .item[data-v-bdc43a46]{border:1px solid transparent;background:#f5f5f5;position:relative;padding:12px 15px;border-radius:3px}.gcxt .item+.item[data-v-bdc43a46]{margin-top:20px}.gcxt .item .name[data-v-bdc43a46]{color:#000;font-size:15px;margin-bottom:3px}.gcxt .item .desc[data-v-bdc43a46]{color:#999;font-size:12px}.gcxt .item.selected[data-v-bdc43a46]{border-color:#2c5cf7;background-color:#e9f2ff}.gcxt .item.selected .icon_selected[data-v-bdc43a46]{display:block}.gcxt .item.selected .name[data-v-bdc43a46]{color:#2c5cf7}.gcxt .item.selected .desc[data-v-bdc43a46]{color:rgba(44,92,247,.7)}.gcxt .item.selected .tip i[data-v-bdc43a46]:before{background-color:#e9f2ff}',""])},a26b:function(t,e,a){"use strict";a("3ad8")},bfa0:function(t,e,a){var o=a("80f5");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var c=a("85cb").default;c("497f5571",o,!0,{sourceMap:!1,shadowMode:!1})},cd45:function(t,e,a){t.exports=a.p+"img/no_card.61676a04.png"},f30d:function(t,e,a){e=t.exports=a("690e")(!1),e.push([t.i,'.gcxt[data-v-0f3237b1] :export{colorPrimary:#2c5cf7;headerBackgroundColor:#fff;headerTextColor:#333}.gcxt .top[data-v-0f3237b1]{position:absolute;left:0;width:100%;top:2.2rem;z-index:200}.gcxt .top .buttons-tab[data-v-0f3237b1]:after{display:none}.gcxt .empty-lists[data-v-0f3237b1]{z-index:11111111;top:40%;-webkit-transform:translateY(-50%);transform:translateY(-50%);display:block;position:absolute}.gcxt .xt-ios .top[data-v-0f3237b1]{top:2.9rem}.gcxt .bar-nav~.content[data-v-0f3237b1]{top:2.2rem}.gcxt .content.hide-token[data-v-0f3237b1]{top:.2rem}.gcxt .xt-ios .content.hide-token[data-v-0f3237b1]{top:.9rem}.gcxt .content[data-v-0f3237b1]{position:relative;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.gcxt .bar[data-v-0f3237b1]:after{display:none}.gcxt #token .list-block[data-v-0f3237b1]{margin:0}.gcxt #token .list-block .item-title[data-v-0f3237b1]{-ms-flex-negative:0;flex-shrink:0}.gcxt .button-link.header-link[data-v-0f3237b1]{color:#fff}.gcxt .button-buy[data-v-0f3237b1]{width:100px;margin:10px auto}.gcxt .buttons-tab[data-v-0f3237b1]{margin-bottom:5px}.gcxt .buttons-tab .button.active[data-v-0f3237b1]{border-bottom-color:transparent}.gcxt .buttons-tab .button.active[data-v-0f3237b1]:before{content:"";display:block;position:absolute;width:30%;bottom:-2px;height:2px;left:35%;background-color:#2c5cf7}',""])}}]);