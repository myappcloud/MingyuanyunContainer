(window["webpackJsonp_module_entry_gcxt_"]=window["webpackJsonp_module_entry_gcxt_"]||[]).push([["chunk-598c7ff8"],{"39ac":function(t,e,r){var o=r("e441");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=r("85cb").default;i("601a9ec4",o,!0,{sourceMap:!1,shadowMode:!1})},4093:function(t,e,r){var o=r("a85c");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=r("85cb").default;i("582c673e",o,!0,{sourceMap:!1,shadowMode:!1})},"50de":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("page",{staticClass:"page authorize-overview-contract"},[r("v-header",{attrs:{slot:"header",title:"项目合同管理"},slot:"header"}),r("div",{staticClass:"content"},[r("div",{staticClass:"content-main"},[r("div",{staticClass:"project-title"},[r("span",[t._v("已有项目合同权限")]),"extra"===t.mode?r("div",{staticClass:"display"},[r("i",{staticClass:"circle usePeriod-extra"}),r("span",{},[t._v("另购项目("+t._s(t.count)+")")])]):t._e(),"proj"===t.mode?r("div",{staticClass:"display"},[r("i",{staticClass:"circle usePeriod-valid"}),r("span",{},[t._v("已购买")]),r("i",{staticClass:"circle usePeriod-never"}),r("span",{},[t._v("未购买")]),r("i",{staticClass:"circle usePeriod-overdue"}),r("span",{},[t._v("已过期")])]):t._e()]),t._l(t.projectList,(function(e,o){return r("div",{key:e.project_id,staticClass:"project-item"},[r("div",{staticClass:"project-parent",on:{click:function(r){t.toggle(e,o)}}},[r("i",{staticClass:"line",class:e.display}),r("i",{staticClass:"iconfont icon-_xiala",class:{expand:e.expand}}),r("span",{staticClass:"name",domProps:{textContent:t._s(e.project_name)}}),r("span",{staticClass:"count"},[t._v("("+t._s(e.contract_count)+")")]),e.overdue?r("i",{staticClass:"circle usePeriod-warning"}):t._e(),"项目"===e.charge_mode?r("i",{staticClass:"iconfont icon-_gengduo",on:{click:function(r){t.previewCompany(r,e)}}}):t._e()]),e.children&&e.expand?r("div",t._l(e.children,(function(e){return r("div",{key:e.project_id,staticClass:"project-subItem"},[r("div",{staticClass:"project-child"},[r("span",{domProps:{textContent:t._s(e.project_name)}})]),t._l(e.contracts,(function(e){return r("div",{key:e.contract_id,staticClass:"project-contract",on:{click:function(r){t.redirectContractDetail(e.contract_guid)}}},[r("i",{staticClass:"iconfont icon-_wo-xiangmuguanli"}),r("span",{staticClass:"project-contract-name",domProps:{textContent:t._s(e.contract_name)}})])}))],2)}))):t._e()])})),t.projectList.length?t._e():r("no-record",{attrs:{txt:"暂无数据"}})],2)]),r("overdue-company",{attrs:{pid:"company",project:t.currentProject,"overdue-project":t.overdue_project,page:t.page,"go-back":function(){return t.page=null}}}),r("app-button-group",{attrs:{slot:"footer"},slot:"footer"},[r("app-button",[!1===t.authProcess?r("router-link",{staticClass:"btn-confirm",attrs:{to:t.redirect}},[r("i",{staticClass:"iconfont icon--jia"}),r("span",[t._v("申请合同权限")])]):t._e(),t.authProcess?r("router-link",{staticClass:"btn-confirm",attrs:{to:"/authorize/overview/process"}},[t._v("\n        查看申请中的合同\n      ")]):t._e()],1)],1)],1)},i=[],a=(r("6d57"),r("af0b")),n=r("a740"),c=r("df24"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.pid===t.page?r("div",{staticClass:"authorize-overdue-company page page-current"},[r("v-header",{attrs:{title:"乙方单位详情","back-action":t.goBack}}),r("div",{staticClass:"content"},[t._m(0),t._l(t.filterCompany,(function(e){return r("div",{key:e.yf_company_guid,staticClass:"company-item"},[r("i",{staticClass:"line",class:e.display}),r("div",{staticClass:"name",domProps:{textContent:t._s(e.yf_company)}}),e.time?r("div",{staticClass:"time",class:{overdue:"usePeriod-overdue"===e.display},domProps:{textContent:t._s(e.time)}}):t._e(),e.show_overdue?r("i",{staticClass:"circle usePeriod-warning"}):t._e()])}))],2)],1):t._e()},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"display"},[r("i",{staticClass:"circle usePeriod-valid"}),r("span",{},[t._v("已购买")]),r("i",{staticClass:"circle usePeriod-never"}),r("span",{},[t._v("未购买")]),r("i",{staticClass:"circle usePeriod-overdue"}),r("span",{},[t._v("已过期")])])}],p=(r("e697"),r("9a33"),{name:"OverdueCompany",props:{page:String,pid:String,project:Object,overdueProject:Array,goBack:{type:Function,default:function(){return function(){}}}},computed:{filterCompany:function(){var t=this,e=this.project.yf_companies,r=void 0===e?[]:e,o=this.overdueProject;return r.map((function(e){var r,i=e.expire_time,a=e.overdue,n=e.yf_company,c=e.yf_company_guid,s="",u=!1;i&&!a?(r="usePeriod-valid",s="到期时间：".concat(i.split(" ")[0])):!i&&a?r="usePeriod-never":i&&a&&(r="usePeriod-overdue",s="过期时间：".concat(i.split(" ")[0]));var p=o.find((function(t){return t.yf_company_guid===e.yf_company_guid}));return p&&p.project_id===t.project.project_id&&(u=!0),{yf_company_guid:c,yf_company:n,display:r,time:s,show_overdue:u}}))}}}),d=p,l=(r("5520"),r("c701")),f=Object(l["a"])(d,s,u,!1,null,null,null),g=f.exports,h=r("6485"),v={name:"AuthorizeOverview",components:{OverdueCompany:g,noRecord:h["a"]},props:{authProcess:Boolean},data:function(){var t=Object(n["a"])(),e="/authorize/contract";return"1004"===t.role_code&&(e="/authorize/contract-manager"),{overdue_project:[],page:"",currentProject:{},redirect:e,projectList:[],mode:"",count:0}},mounted:function(){var t=this,e=this.$store.getters[c["a"]];this.$store.dispatch(c["c"],e),e.length||(e=this.$store.getters[c["b"]],this.$store.dispatch(c["d"],e)),this.overdue_project=e,e=e.map((function(t){return t.project_id})),this.sui.showIndicator(),Object(a["t"])().then((function(r){var o,i=r.data,a=Object(n["a"])(),c="",s=0,u=!1,p=!1;i.forEach((function(t){"项目"===t.charge_mode&&(u=!0,t.yf_companies&&t.yf_companies.length>1&&(p=!0))})),o=a.original_expired_time?u?a.overdue?"proj":"both":"personal":u?"proj":"personal",i.forEach((function(t){"both"===o&&"项目"===t.charge_mode?(t.display="usePeriod-extra",s+=1):"proj"!==o||p||(t.expire_date&&t.is_overdue?t.display="usePeriod-overdue":t.expire_date?t.display="usePeriod-valid":t.display="usePeriod-never"),e.indexOf(t.project_id)>-1&&(t.overdue=!0)})),"proj"!==o||p?"both"===o&&(c="extra"):c="proj",t.projectList=i,t.mode=c,t.count=s,t.sui.hideIndicator()}))},methods:{toggle:function(t,e){var r=this,o=t.project_id,i=t.expand;Array.isArray(t.children)?this.$set(this.projectList[e],"expand",!i):Object(a["s"])({project_id:o}).then((function(t){r.$set(r.projectList[e],"expand",!0),r.$set(r.projectList[e],"children",t.data)}))},previewCompany:function(t,e){t.stopPropagation(),this.currentProject=e,this.page="company"},redirectContractDetail:function(t){var e=Object(n["a"])(),r=e.menu_layout.menu_permissions.indexOf("contract")>=0;r&&this.$router.push({path:"/contract/contract-detail",query:{contract_guid:t}})}}},x=v,b=(r("a62b"),Object(l["a"])(x,o,i,!1,null,null,null));e["default"]=b.exports},5520:function(t,e,r){"use strict";r("4093")},a62b:function(t,e,r){"use strict";r("39ac")},a85c:function(t,e,r){e=t.exports=r("690e")(!1),e.push([t.i,".gcxt .authorize-overdue-company .display{height:54px;display:-webkit-box;display:-ms-flexbox;display:flex;line-height:24px;font-size:12px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.gcxt .authorize-overdue-company .display .circle{display:inline-block;border-radius:50%;width:12px;height:12px;margin-left:12px}.gcxt .authorize-overdue-company .company-item{position:relative;background-color:#fff;padding:10px 0 10px 20px;margin-bottom:15px}.gcxt .authorize-overdue-company .company-item .name{font-size:16px}.gcxt .authorize-overdue-company .company-item .time{color:#7b7b7b;margin-top:5px}.gcxt .authorize-overdue-company .company-item .time.overdue{color:#f43531}.gcxt .authorize-overdue-company .company-item .circle{position:absolute;border-radius:50%;width:12px;height:12px;right:10px;top:50%;margin-top:-6px}.gcxt .authorize-overdue-company .line{position:absolute;width:8px;height:100%;left:0;top:0}.gcxt .authorize-overdue-company .usePeriod-extra{background-color:#3492e9}.gcxt .authorize-overdue-company .usePeriod-valid{background-color:#3ed0ad}.gcxt .authorize-overdue-company .usePeriod-overdue{background-color:#5b5b5b}.gcxt .authorize-overdue-company .usePeriod-warning{background-color:#f43531}",""])},af0b:function(t,e,r){"use strict";r.d(e,"q",(function(){return s})),r.d(e,"e",(function(){return u})),r.d(e,"m",(function(){return d})),r.d(e,"n",(function(){return l})),r.d(e,"a",(function(){return f})),r.d(e,"p",(function(){return g})),r.d(e,"v",(function(){return h})),r.d(e,"c",(function(){return v})),r.d(e,"w",(function(){return x})),r.d(e,"b",(function(){return b})),r.d(e,"o",(function(){return _})),r.d(e,"t",(function(){return m})),r.d(e,"s",(function(){return j})),r.d(e,"d",(function(){return y})),r.d(e,"j",(function(){return w})),r.d(e,"k",(function(){return z})),r.d(e,"r",(function(){return O})),r.d(e,"f",(function(){return C})),r.d(e,"g",(function(){return k})),r.d(e,"u",(function(){return P})),r.d(e,"l",(function(){return $})),r.d(e,"i",(function(){return L})),r.d(e,"h",(function(){return p}));r("5ab2"),r("6d57"),r("e10e");var o=r("28f8"),i=r("ab3e"),a=r("da71");function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(){return Object(i["a"])({url:a["a"].get_tenant})}function u(t){return Object(i["a"])({url:a["a"].auth_check_tenant,data:t})}function p(t){return Object(i["a"])({url:a["a"].get_role_with_level,data:t})}function d(t){return Object(i["a"])({url:a["a"].get_jf_new_manager_project,data:t})}function l(t){return Object(i["a"])({url:a["a"].get_jf_manager_project,data:t})}function f(t){return Object(i["a"])({url:a["a"].jf_apply_auth,data:c(c({},t),{},{error:!0})})}function g(t){return Object(i["a"])({url:a["a"].get_jf_users,data:t})}function h(t){return Object(i["a"])({url:a["a"].revoke_auth,data:t})}function v(t){return Object(i["a"])({url:a["a"].yf_manager_apply_auth,data:t})}function x(t){return Object(i["a"])({url:a["a"].check_user_role,data:t})}function b(t){return Object(i["a"])({url:a["a"].yf_engineer_apply_auth,data:t})}function _(){return Object(i["a"])({url:a["a"].get_jf_project})}function m(){return Object(i["a"])({url:a["a"].get_yf_user_project})}function j(t){return Object(i["a"])({url:a["a"].get_yf_user_contract,data:t})}function y(t){return Object(i["a"])({url:a["a"].check_project_has_manager,data:t})}function w(t){return Object(i["a"])({url:a["a"].get_auth_detail,data:t})}function z(t){return Object(i["a"])({url:a["a"].get_jf_auth_project,data:t})}function O(t){return Object(i["a"])({url:a["a"].get_yf_auth_contract,data:t})}function C(t){return Object(i["a"])({url:a["a"].empower_for_jf,data:t})}function k(t){return t=c(c({},t),{},{showLoading:!0}),Object(i["a"])({url:a["a"].empower_for_yf,data:t})}function P(t){return t=c(c({},t),{},{showLoading:!0}),Object(i["a"])({url:a["a"].reject_auth,data:t})}function $(t){return Object(i["a"])({url:a["a"].get_sync_jf_contracts,data:t})}function L(t){return Object(i["a"])({url:a["a"].get_sync_yf_contracts,data:t})}},e441:function(t,e,r){e=t.exports=r("690e")(!1),e.push([t.i,'.gcxt :export{colorPrimary:#2c5cf7;headerBackgroundColor:#fff;headerTextColor:#333}.gcxt .authorize-overview-contract .content-main{position:absolute;left:0;top:0;bottom:0;width:100%;overflow:auto}.gcxt .authorize-overview-contract .content-bottom{position:absolute;width:100%;height:50px;border-top:1px solid #e7e7e7}.gcxt .authorize-overview-contract .project-title{font-size:15px;color:#737373;line-height:44px;padding-left:12px;position:relative}.gcxt .authorize-overview-contract .project-item{border-top:1px solid #e7e7e7;border-bottom:1px solid #e7e7e7;margin-bottom:15px}.gcxt .authorize-overview-contract .project-parent{background-color:#fff;height:44px;position:relative}.gcxt .authorize-overview-contract .project-parent .line{display:inline-block;width:8px;height:44px;vertical-align:middle;margin-right:34px}.gcxt .authorize-overview-contract .project-parent .icon-_xiala{position:absolute;font-size:14px;line-height:14px;color:#b5b5b5;left:17px;top:14px}.gcxt .authorize-overview-contract .project-parent .icon-_xiala.expand{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.gcxt .authorize-overview-contract .project-parent .name{font-size:16px;vertical-align:middle}.gcxt .authorize-overview-contract .project-parent .count{color:#8b8b8b;font-size:16px;vertical-align:middle}.gcxt .authorize-overview-contract .project-parent .circle{position:absolute;border-radius:50%;width:12px;height:12px;right:30px;top:15px}.gcxt .authorize-overview-contract .project-parent .icon-_gengduo{float:right;color:#2c5cf7;font-size:20px;line-height:20px;margin-right:5px;margin-top:11px}.gcxt .authorize-overview-contract .project-subItem{background-color:#f6fafe}.gcxt .authorize-overview-contract .project-child{border-top:1px solid #e7e7e7;border-bottom:1px solid #e7e7e7;height:51px;line-height:49px;position:relative;padding-left:40px;color:#696969}.gcxt .authorize-overview-contract .project-child:before{content:"";position:absolute;left:23px;top:20px;width:8px;height:8px;border-radius:50%;background-color:#bebebe}.gcxt .authorize-overview-contract .project-contract{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:35px;padding:15px 10px 15px 5px;border-bottom:1px solid #e7e7e7}.gcxt .authorize-overview-contract .project-contract .iconfont{position:absolute;display:inline-block;font-size:25px;color:#3492e9;vertical-align:middle}.gcxt .authorize-overview-contract .project-contract-name{display:inline-block;color:#7b7b7b;vertical-align:middle;margin-left:30px}.gcxt .authorize-overview-contract .project-contract:last-child{border-bottom:none}.gcxt .authorize-overview-contract .display{position:absolute;right:10px;bottom:8px;display:-webkit-box;display:-ms-flexbox;display:flex;line-height:24px;font-size:12px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.gcxt .authorize-overview-contract .display .circle{display:inline-block;border-radius:50%;width:12px;height:12px;margin-left:12px}.gcxt .authorize-overview-contract .btn-confirm{color:#fff}.gcxt .authorize-overview-contract .btn-confirm .iconfont{display:inline-block;margin-right:7px}.gcxt .authorize-overview-contract .usePeriod-extra{background-color:#3492e9}.gcxt .authorize-overview-contract .usePeriod-valid{background-color:#3ed0ad}.gcxt .authorize-overview-contract .usePeriod-overdue{background-color:#5b5b5b}.gcxt .authorize-overview-contract .usePeriod-warning{background-color:#f43531}',""])}}]);