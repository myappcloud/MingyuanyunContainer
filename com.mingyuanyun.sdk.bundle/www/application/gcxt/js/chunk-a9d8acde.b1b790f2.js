(window["webpackJsonp_module_entry_gcxt_"]=window["webpackJsonp_module_entry_gcxt_"]||[]).push([["chunk-a9d8acde"],{"0b02b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-group"},[n("div",{staticClass:"authorize-contract page",class:{"page-current":!t.page}},[n("v-header",{attrs:{title:"添加合同"}},[n("button",{staticClass:"btn-next",attrs:{slot:"right",type:"button"},on:{click:t.next},slot:"right"},[t._v("\n        提交\n      ")])]),t.initialized?n("div",{staticClass:"content"},[n("xt-wizard",{attrs:{wizard:t.wizard,current:t.current}}),t._l(t.contract,(function(e,a){return n("div",{key:a,staticClass:"fieldset"},[n("div",{staticClass:"authorize-contract-count"},[t._v("合同"+t._s(a+1))]),a?n("i",{staticClass:"iconfont icon-_shanchu-1",on:{click:function(e){t.removeContract(a)}}}):t._e(),n("div",{staticClass:"field"},[n("div",{staticClass:"field-inner",on:{click:function(e){t.onChangeProject(a)}}},[n("span",{staticClass:"field-label"},[t._v("所属项目")]),n("div",{staticClass:"field-content",domProps:{textContent:t._s(e.project&&e.project.project_name)}}),n("i",{staticClass:"iconfont icon-_fanui"})])]),n("div",{staticClass:"field"},[n("div",{staticClass:"field-inner",on:{click:function(e){t.onChangeUser(a)}}},[n("span",{staticClass:"field-label"},[t._v("甲方认证人")]),n("div",{staticClass:"field-content",domProps:{textContent:t._s(e.user&&e.user.name)}}),n("i",{staticClass:"iconfont icon-_fanui"})])]),n("div",{staticClass:"field"},[n("span",{staticClass:"field-label"},[t._v("合同信息")]),n("input",{attrs:{type:"text",placeholder:"合同名称(至少3个字)"},domProps:{value:e.contract_no},on:{input:function(e){t.onContractChange(e,a)}}})])])})),n("div",{staticClass:"fieldset yf-phone",on:{click:t.addContract}},[t._m(0)])],2):t._e()],1),n("authorize-company-list-yf",{directives:[{name:"phy-back",rawName:"v-phy-back",value:{status:"company"===t.page,method:"resetPage"},expression:"{status: page === 'company', method: 'resetPage'}"}],attrs:{"company-list":t.company_list,pid:"company",page:t.page,"go-back":t.resetPage,select:t.onSelectCompany}}),n("authorize-project-list-yf",{directives:[{name:"phy-back",rawName:"v-phy-back",value:{status:"project"===t.page,method:"backToCompany"},expression:"{status: page === 'project', method: 'backToCompany'}"}],attrs:{"project-list":t.project_list,pid:"project",page:t.page,"go-back":t.backToCompany,select:t.onSelectProject}}),n("authorize-user-list",{directives:[{name:"phy-back",rawName:"v-phy-back",value:{status:"user_list"===t.page,method:"resetPage"},expression:"{status: page === 'user_list', method: 'resetPage'}"}],attrs:{"user-list":t.user_list,pid:"user",page:t.page,"go-back":t.resetPage,select:t.onSelectUser}}),n("authorize-picture",{directives:[{name:"phy-back",rawName:"v-phy-back",value:{status:"picture"===t.page,method:"closePicture"},expression:"{status: page === 'picture', method: 'closePicture'}"}],attrs:{pid:"picture",wizard:t.wizard,page:t.page,"go-back":t.closePicture,submit:t.submit}})],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field"},[n("span",{staticClass:"btn-1"},[n("i",{staticClass:"iconfont icon--jia"}),t._v("\n            添加合同\n          ")]),n("span",{staticClass:"btn-2"},[t._v("(点击可申请多份合同)")])])}],o=(n("a450"),n("8dee"),n("1bc7"),n("0c84"),n("3d6f")),c=n("82f8"),r=n("af0b"),s=n("a740"),d=n("36c8"),l=n("9254"),u=n("e589"),p=n("09b2"),h=n("b893"),_=n("d9d2"),f=(n("f121"),["#f65e5e","#5e97f6","#3bc2b5","#ff943e","#78919d","#9a89b9","#f6bf26","#6bb5ce","#f65e8d","#c5cb63"]),g={name:"AuthorizeContractManager",components:{AuthorizeCompanyListYf:d["a"],AuthorizeProjectListYf:l["a"],AuthorizeUserList:u["a"],AuthorizePicture:p["a"]},data:function(){var t,e,n=this.$store.state.authInfo,a=n.current_role,i=n.current_station,c=n.tenant_code,r=n.tenant_id,d=n.yunfuwu_role_id,l=!1;if(!c){l=!0;var u=Object(s["a"])();c=u.tenant_code,r=u.tenant_id,a=u.role_code}return{page:"",wizard:o["d"],current:t,go_back_link:e,tenant_code:c,tenant_id:r,current_role:a,yunfuwu_role_id:d,current_station:i,phone:"",contract:[{project:null,user:null,contract_no:""}],company_list:[],project_list:[],user_list:[],contract_index:-1,company_id:null,contract_detail:null,to_add_contract:l,initialized:!1}},mounted:function(){var t=this,e=this.tenant_code,n=this.tenant_id,a=Object(c["g"])({tenant_code:e,__tenant_id:n}).then((function(e){var n=e.data;if(!Array.isArray(n)&&n instanceof Object){var a=[];for(var i in n)a.push(n[i]);n=a}t.company_list=n})),i=Object(c["j"])({__tenant_id:this.tenant_id,code:"close_auth_pic,close_auth_pic_add_contract"}).then((function(e){var n,a=e.data||{},i=a.close_auth_pic,c=a.close_auth_pic_add_contract,r=t.to_add_contract?c:i;n="0"!==r?o["d"]:o["c"],t.to_add_contract?(t.wizard=n.slice(2),t.go_back_link="/authorize/overview/contract",t.current=t.wizard[0]):(t.wizard=n,t.current=n[2],t.go_back_link=n[1].route)}));Promise.all([a,i]).catch((function(t){console.error(t)})).finally((function(){t.initialized=!0}))},methods:{resetPage:function(){this.page=null},backToCompany:function(){this.page="company"},closePicture:function(){_["b"].closeModal();var t=this.wizard.indexOf(this.current);this.page=null,this.current=this.wizard[--t]},submit:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if("picture"!==this.page||0!==e.length){var n="";try{n=JSON.stringify(e)}catch(u){console.log(u)}var a=this.contract_detail,i=this.tenant_code,o=this.tenant_id,c=this.current_role,s=this.current_station,d=this.yunfuwu_role_id,l=this.sui.showIndicator({message:"提交中..."});return Object(r["c"])({tenant_code:i,yunfuwu_role_id:d,role_code:c,station_name:s,auth_id:Object(h["a"])(),contract_detail:a,__tenant_id:o,photos:n}).then((function(e){l.clear(),l=t.sui.showIndicator({message:"提交成功"}),t.$router.replace({path:"/authorize/overview/process"})})).finally((function(){l.clear()}))}this.sui.toast("请上传图片")},next:function(){var t=this,e=this.contract,n=this.tenant_code,a=this.tenant_id,i=this.wizard,o=i[i.length-1],c=e.map((function(t){return t.contract_no.trim()})),s=e.map((function(t,e){var n=t.contract_no,a=t.project,i=t.user;return{project_id:a&&a.project_id,contract_desc:"合同".concat(e+1),contract_no:n,jf_user_id:i&&i.user_id}})),d=s.every((function(e){var n=e.project_id,a=e.contract_no,i=e.jf_user_id;if(!n)return t.sui.toast("请选择项目");if(!i)return t.sui.toast("请选择甲方认证人");if(!a)return t.sui.toast("请添加合同");if(!a||a.length<3)t.sui.toast("请输入合同信息(至少3个字)");else{if(c.indexOf(a)===c.lastIndexOf(a))return!0;t.sui.toast("合同信息有重复")}}));if(d){if(!n)return this.sui.toast("参数错误");var l=s.map((function(t){return t.project_id}));Object(r["d"])({project_id:l,__tenant_id:a}).then((function(e){t.contract_detail=s,o===t.current?t.submit():(t.page="picture",t.current=o)}))}},onChangeProject:function(t){this.contract_index=t,this.page="company"},onChangeUser:function(t){var e=this,n=this.contract,a=this.tenant_id,i=n[t];i.project?(this.page="user",this.contract_index=t,Object(r["p"])({project_id:i.project.project_id,__tenant_id:a,role_code:1001}).then((function(t){e.user_list=t.data.map((function(t){return t.short=t.name.substr(0,1),t.color=f[t.user_code.substr(-1)],t}))}))):console.log("没有选择项目")},onSelectCompany:function(t){var e=this,n=this.tenant_id;this.company_id=t,this.page="project",Object(c["z"])({company_id:t,__tenant_id:n}).then((function(t){e.project_list=t.data}))},onSelectProject:function(t){var e=this.contract_index;this.$set(this.contract[e],"project",t),this.$set(this.contract[e],"user",null),this.contract_index=-1,this.project_list=[],this.company_id=null,this.page=null},onSelectUser:function(t){var e=this.contract_index;this.$set(this.contract[e],"user",t),this.contract_index=-1,this.user_list=[],this.page=null},onContractChange:function(t,e){this.contract[e].contract_no=t.target.value},removeContract:function(t){this.contract.splice(t,1)},addContract:function(){this.contract.push({project:null,user:null,contract_no:""})}}},v=g,b=(n("8a6b"),n("5d22")),x=Object(b["a"])(v,a,i,!1,null,"180de5ce",null);e["default"]=x.exports},3104:function(t,e,n){e=t.exports=n("690e")(!1),e.push([t.i,".gcxt[data-v-180de5ce] :export{colorPrimary:#0268b3;headerBackgroundColor:#fff;headerTextColor:#333}.gcxt .authorize-contract .content .yf-phone[data-v-180de5ce]{margin-top:14px}.gcxt .authorize-contract .content .fieldset[data-v-180de5ce]{position:relative;border-bottom:1px solid #f3f3f3}.gcxt .authorize-contract .content .fieldset .icon-_shanchu-1[data-v-180de5ce]{position:absolute;font-size:15px;color:#999;right:10px;top:10px}.gcxt .authorize-contract .content .field[data-v-180de5ce]{background:#fff;padding-left:15px;overflow:hidden;white-space:nowrap;position:relative}.gcxt .authorize-contract .content .field-inner[data-v-180de5ce]{border-bottom:1px solid #f3f3f3;display:-webkit-box;display:-ms-flexbox;display:flex}.gcxt .authorize-contract .content .field-inner .icon-_fanui[data-v-180de5ce]{position:absolute;font-size:14px;color:#ccc;right:10px;top:17px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.gcxt .authorize-contract .content .field-label[data-v-180de5ce]{display:inline-block;font-size:16px;vertical-align:middle;line-height:55px;min-width:30%;padding-right:10px}.gcxt .authorize-contract .content .field-content[data-v-180de5ce]{line-height:55px;font-size:15px;color:#666;text-indent:5px}.gcxt .authorize-contract .content .field input[data-v-180de5ce]{outline:none;border:none;font-size:15px;vertical-align:middle}.gcxt .authorize-contract .content .field .btn-1[data-v-180de5ce]{vertical-align:middle;line-height:56px;color:#0268b3;font-size:16px;padding-left:0}.gcxt .authorize-contract .content .field .btn-1 .iconfont[data-v-180de5ce]{font-size:14px}.gcxt .authorize-contract .content .field .btn-2[data-v-180de5ce]{vertical-align:middle;line-height:56px;color:#f90;font-size:16px}.gcxt .authorize-contract-count[data-v-180de5ce]{text-indent:15px;line-height:40px;font-size:13px;color:#999;border-bottom:1px solid #f3f3f3}.gcxt .authorize-contract .btn-next[data-v-180de5ce]{color:#0268b3;padding:20px 15px;position:relative;right:-15px;z-index:20;font-size:16px;background-color:transparent;outline:none;border:none}",""])},"8a6b":function(t,e,n){"use strict";n("fb56")},fb56:function(t,e,n){var a=n("3104");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("85cb").default;i("da52a360",a,!0,{sourceMap:!1,shadowMode:!1})}}]);