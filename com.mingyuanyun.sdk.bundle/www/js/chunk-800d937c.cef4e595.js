(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-800d937c"],{"02aa":function(t,e,i){},"10d6":function(t,e,i){"use strict";i("6b98")},1914:function(t,e,i){},"23b8":function(t,e,i){"use strict";i("1914")},"47fd":function(t,e,i){"use strict";i("02aa")},"6b98":function(t,e,i){},a718:function(t,e,i){},b071:function(t,e,i){"use strict";i.r(e);var n,a,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"project-manage-wrapper"},[i("app-header",{attrs:{title:"项目管理"}}),i("div",{staticClass:"verify-list"},[i("van-tabs",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[i("van-tab",{attrs:{title:"已授权"}},[i("list",{attrs:{type:"auth"}})],1),i("van-tab",{attrs:{title:"审批中"}},[i("list",{attrs:{type:"approve"}})],1)],1)],1),i("div",{staticClass:"footer-ctrl"},[i("app-button",{on:{click:t.toAuth}},[t._v("申请项目权限")])],1)],1)},s=[],l=(i("1d7a"),i("28f8")),r=i("266e"),c=i("f6df"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("van-pull-refresh",{staticClass:"manage-list-wrapper",on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[i("empty-page",{attrs:{emptyMsg:"暂无消息",showEmpty:!t.list.length}}),i("van-list",{staticClass:"list",attrs:{finished:t.finished,"finished-text":"— 干工程是有底线的 —","immediate-check":!1},on:{load:t.loadMore},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[t._l(t.list,(function(e){return["1"===e.is_apply_obj?i("div",{key:e.org_id,staticClass:"company-item",on:{click:function(i){return t.toDetail(e)}}},[i("div",[t._v(t._s(e.org_name))]),i("van-icon",{staticClass:"info-icon",attrs:{name:"info-o"}})],1):i("app-fold",{key:e.org_id,ref:"company-fold",refInFor:!0,staticClass:"mt10",attrs:{title:e.org_name,showTitleLine:!0,defaultFold:!0},on:{click:function(i){return t.handleClick(i,e)}}},[e.proj_list?i("Item",{attrs:{list:e.proj_list,showInfo:"approve"==t.type,type:t.type}}):i("van-loading",{attrs:{size:"12px"}},[t._v(" 加载中... ")])],1)]}))],2)],1)},u=[],p=(i("445a"),i("6540"),i("402f"),i("e060")),f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"contract-item-wrapper",on:{click:function(e){return t.$emit("click")}}},t._l(t.list,(function(e,n){return i("div",{key:n},[e.childList&&e.childList.length?i("div",{staticClass:"child-container"},[i("app-fold",{attrs:{showTitleLine:!0,defaultFold:!0,title:e.proj_name}},t._l(e.childList,(function(n,a){return i("div",{key:n.id},[i("div",{staticClass:"item-con",class:{"bottom-border":a!==e.childList.length-1},on:{click:function(e){return t.toDetail(n)}}},[i("div",{staticClass:"name"},[t._v(t._s(n.proj_name))]),t.showInfo?i("van-icon",{staticClass:"info-icon",attrs:{name:"info-o"}}):t._e()],1)])})),0)],1):i("div",{staticClass:"item-con no-child-item",class:{"bottom-border":n!==t.list.length-1},on:{click:function(i){return t.toDetail(e)}}},[i("div",{staticClass:"name"},[t._v(t._s(e.proj_name))]),t.showInfo?i("van-icon",{staticClass:"info-icon",attrs:{name:"info-o"}}):t._e()],1)])})),0)},h=[],m={components:{AppFold:p["a"]},props:{type:{type:String,default:""},list:{type:Array,default:function(){return[]}},showInfo:{type:Boolean,default:!1}},data:function(){return{}},methods:{toDetail:function(t){console.log("item ======> ",t),"approve"===this.type&&(console.log("params ====> ",{applyId:t.id,projectId:t.object_id}),this.$router.push({name:"applyDetail",params:{applyId:t.apply_user_id,projectId:t.object_id}}))}}},v=m,g=(i("10d6"),i("5d22")),y=Object(g["a"])(v,f,h,!1,null,"083daf12",null),_=y.exports,b=i("9d6d"),j=i("5e13"),k={auth:{approvalState:1},approve:{approvalState:0}},w=0,C={props:{type:{type:String,default:""}},components:(n={},Object(l["a"])(n,b["a"].name,b["a"]),Object(l["a"])(n,"AppFold",p["a"]),Object(l["a"])(n,"Item",_),n),data:function(){return{currPage:1,loading:!1,refreshing:!1,finished:!1,list:[]}},created:function(){this.init()},activated:function(){this.init()},methods:{init:function(){if(this.loading)return!1;w=0,this.currPage=1,this.loading=!1,this.list=[],this.load()},load:function(){var t=this;return this.loading?Promise.reject(!1):(this.loading=!0,this.$refs["company-fold"]&&this.$refs["company-fold"].map((function(t){t.setFold(!0)})),Object(j["c"])(k[this.type]).then((function(e){return w=1,1===t.currPage?t.list=e||[]:t.list=t.list.concat(e||[]),t.currPage++,t.loading=!1,t.finished=!!(w&&t.currPage>w),Promise.resolve()})).catch((function(e){return console.log("获取失败",e),t.loading=!1,Promise.reject()})))},onRefresh:function(){var t=this;if(this.loading)return!1;this.currPage=1,this.refreshing=!0,this.load().then((function(){t.refreshing=!1})).catch((function(){t.refreshing=!1}))},loadMore:function(){return!this.finished&&this.load()},openFlow:function(t){return"1"!==t.approval_state&&this.$router.push({path:"/user/apply-info",query:{applyId:t.apply_id,projectId:t.project_id}}),!1},handleClick:function(t,e){"auth"!==this.type||t||e.proj_list&&e.proj_list.length||this.getProjectListInOrg(e)},getProjectListInOrg:function(t){var e=this,i=k[this.type];return i.orgId=t.org_id,Object(j["d"])(i).then((function(i){e.$set(t,"proj_list",i.projectList||[])})).catch((function(i){e.$set(t,"proj_list",[]),console.log("获取失败",i)}))},toDetail:function(t){"approve"===this.type&&this.$router.push({name:"applyDetail",params:{applyId:t.apply_id,projectId:t.org_id}})}}},F=C,O=(i("23b8"),Object(g["a"])(F,d,u,!1,null,"dd309baa",null)),I=O.exports,$=i("5047"),x=i("468b"),L=i("1f03"),P={components:(a={},Object(l["a"])(a,r["a"].name,r["a"]),Object(l["a"])(a,c["a"].name,c["a"]),Object(l["a"])(a,"List",I),Object(l["a"])(a,"AppButton",$["a"]),a),data:function(){return{active:0}},methods:{toAuth:function(){var t=Object(L["getUserContext"])();return x["a"].openPage("/auth/role",{realname:t.realname,realnameReadonly:"1"})}}},A=P,B=(i("fc27"),Object(g["a"])(A,o,s,!1,null,"1babb908",null));e["default"]=B.exports},e060:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-fold"},[i("div",{class:{top:!0,hasChecked:t.hasChecked,"van-hairline--bottom":t.showTitleLine},on:{click:t.toggle}},[i("span",{staticClass:"title"},[t._v(t._s(t.title))]),i("van-icon",{attrs:{name:t.isFold?"arrow-up":"arrow-down"}})],1),i("div",{ref:"fold-content",class:{"fold-content":!0,isFold:t.isFold}},[i("div",[t._t("default")],2)])])},o=[],s=(i("1d7a"),i("d0bf"),i("28f8")),l=i("2e1c"),r=i("0407"),c=i("2dd6"),d={name:"AppFold",components:(n={},Object(s["a"])(n,l["a"].name,l["a"]),Object(s["a"])(n,r["a"].name,r["a"]),Object(s["a"])(n,c["a"].name,c["a"]),n),props:{showTitleLine:{type:Boolean,default:!1},title:{type:String,default:"--"},checked:{type:[Number,String,Boolean],default:""},hasChecked:{type:Boolean,default:!1},checkboxUseVmodel:{type:Boolean,default:!1},defaultFold:{type:Boolean,default:!1}},data:function(){return{isFold:this.defaultFold||!1,observer:null}},methods:{setFold:function(t){this.isFold=t},toggle:function(){var t=this;this.countHeight(),window.setTimeout((function(){t.isFold=!t.isFold}),0),window.setTimeout((function(){var e=t.$refs["fold-content"];e.style.height="auto"}),310),this.$emit("click",!this.isFold)},countHeight:function(){var t=this.$refs["fold-content"],e=t.childNodes[0];t.style.height=e.offsetHeight+"px"}}},u=d,p=(i("47fd"),i("5d22")),f=Object(p["a"])(u,a,o,!1,null,"41f0537d",null);e["a"]=f.exports},fc27:function(t,e,i){"use strict";i("a718")}}]);