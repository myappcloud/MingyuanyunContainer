(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c04793a4"],{"0aa7":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"e",(function(){return s})),n.d(e,"d",(function(){return l})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return u}));n("51d7"),n("4d20");var r=n("10c8"),o=window.GLOBAL_ENV.SSO_CENTER_DEFAULT_API,a=function(t){return t.errcode?Promise.reject(t.message):Promise.resolve(t.data)},i=function(){return Object(r["a"])({url:"".concat(o,"/m/PermissionApply/permission-auth/get-user-base-info")}).then((function(t){return a(t)})).then((function(t){return t.base_info}))},s=function(t){return Object(r["a"])({method:"POST",url:"".concat(o,"/m/PermissionApply/permission-approval/get-user-role-info"),data:t,retry:!1}).then((function(t){return 0!=t.errcode?Promise.reject("请求失败"):Promise.resolve(t.data)})).catch((function(t){return Promise.reject(t)}))},l=function(t){return Object(r["a"])({method:"POST",url:"".concat(o,"/m/PermissionApply/permission-approval/get-user-post-info"),data:t,retry:!1}).then((function(t){return 0!=t.errcode?Promise.reject("请求失败"):Promise.resolve(t.data)})).catch((function(t){return Promise.reject(t)}))},c=function(t){return Object(r["a"])({method:"POST",url:"".concat(o,"/m/PermissionApply/permission-approval/get-contractor-list"),data:t,retry:!1}).then((function(t){return 0!=t.errcode?Promise.reject("请求失败"):Promise.resolve(t.data)})).catch((function(t){return Promise.reject(t)}))},u=function(t){return Object(r["a"])({method:"POST",url:"".concat(o,"/m/PermissionApply/permission-approval/get-org-list"),data:t,retry:!1}).then((function(t){return 0!=t.errcode?Promise.reject("请求失败"):Promise.resolve(t.data)})).catch((function(t){return Promise.reject(t)}))}},"3aed":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-cell",class:{border:t.border},on:{click:t.onClick}},[n("div",{staticClass:"app-cell-title"},[t._v(" "+t._s(t.title)+" "),t._t("title")],2),n("div",{staticClass:"app-cell-value",class:{placeholder:t.placeholder&&!t.value}},[t._v(" "+t._s(t.value||t.placeholder)+" "),t.label?n("div",{staticClass:"app-cell-label"},[t._v(" "+t._s(t.label)+" ")]):t._e()]),n("div",{staticClass:"app-cell-right"},[t._t("right"),n("van-icon",{directives:[{name:"show",rawName:"v-show",value:t.isLink,expression:"isLink"}],attrs:{name:"arrow"}})],2)])},o=[],a={name:"AppCell",props:{isLink:{type:Boolean,default:!0},border:{type:Boolean,default:!1},title:{type:String,default:""},value:{type:String,default:""},label:{type:String,default:""},placeholder:{type:String,default:""}},methods:{onClick:function(){this.$emit("click")}}},i=a,s=(n("98d8"),n("5d22")),l=Object(s["a"])(i,r,o,!1,null,"1e95b125",null);e["a"]=l.exports},"61e6":function(t,e,n){},"8afb":function(t,e,n){},"98d8":function(t,e,n){"use strict";n("8afb")},b7be:function(t,e,n){"use strict";n.r(e),n.d(e,"commonDetailObj",(function(){return h}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-info-wrapper"},[n("app-header",{attrs:{title:"个人信息"}}),n("div",{staticClass:"user-info-content"},[n("cell",{staticClass:"van-hairline--bottom",attrs:{title:"头像"},on:{click:t.editAvatar}},[n("template",{slot:"right"},[n("div",{staticClass:"avatar"},[t.userInfo.avatarUrl?n("img",{attrs:{src:t.userInfo.avatarUrl}}):t._e()])])],2),n("cell",{staticClass:"van-hairline--bottom",attrs:{title:"姓名",isLink:!1}},[n("template",{slot:"right"},[t._v(t._s(t.userInfo.name))])],2),n("cell",{staticClass:"van-hairline--bottom",attrs:{title:"手机号码",isLink:!1}},[n("template",{slot:"right"},[t._v(t._s(t.userInfo.mobile))])],2),n("cell",{attrs:{title:"角色",isLink:t.roleList.length>2,border:!0},on:{click:t.toRoleDetail}},[n("template",{slot:"right"},[t.roleList.length>2?n("span",[t._v(t._s(t.roleList.length))]):n("span",t._l(t.roleList,(function(e,r){return n("div",{key:r},[t._v(" "+t._s(e.fullName||e.name)+" ")])})),0)])],2),n("cell",{attrs:{border:!0,isLink:t.postList.length>2,title:"岗位"},on:{click:t.toPostDetail}},[n("template",{slot:"right"},[t.postList.length>2?n("span",[t._v(t._s(t.postList.length))]):n("span",t._l(t.postList,(function(e,r){return n("div",{key:r},[t._v(" "+t._s(e)+" ")])})),0)])],2),n("cell",{attrs:{border:!0,isLink:t.orgAndContractorList.length>2,title:"0"==t.userInfo.userType?"所属组织":"所属供应商"},on:{click:t.toOrgAnddContractorDetail}},[n("template",{slot:"right"},[t.orgAndContractorList.length>2?n("span",[t._v(t._s(t.orgAndContractorList.length))]):n("span",t._l(t.orgAndContractorList,(function(e,r){return n("div",{key:r},[t._v(" "+t._s(e.name)+" ")])})),0)])],2),n("cell",{attrs:{title:"修改密码"},on:{click:t.toPassword}})],1),n("van-popup",{staticClass:"avatarSelector",attrs:{position:"bottom"},model:{value:t.showAvatarSelect,callback:function(e){t.showAvatarSelect=e},expression:"showAvatarSelect"}},[n("div",{staticClass:"actions"},t._l(t.actions,(function(e,r){return n("div",{key:r,staticClass:"action-item action-button",class:{"van-hairline--bottom":!r},on:{click:function(n){return t.onSelect(e)}}},[t._v(" "+t._s(e.name)+" ")])})),0),n("div",{staticClass:"cancel action-button",on:{click:t.onCancel}},[t._v(" 取消 ")])])],1)},o=[],a=(n("957b"),n("1e6a"),n("4d20"),n("3aed")),i=n("1f03"),s=n("e98e"),l=n("9d46"),c=n("6a2c"),u=n("4aba"),p=n.n(u),f=n("0aa7"),h={title:"",list:[]},d={components:{Cell:a["a"]},data:function(){return{showAvatarSelect:!1,userInfo:{avatarUrl:"",name:"",mobile:"",role:"",post:"",userType:""},actions:[{name:"拍照",type:1},{name:"从相册选择",type:2}],roleList:[],postList:[],contractorList:[],orgList:[]}},activated:function(){this.init()},computed:{orgAndContractorList:function(){return 0==this.userInfo.userType?this.orgList.map((function(t){return{name:t.fullPathName}})):this.contractorList}},methods:{init:function(){var t=this;c["a"].getUserRoleInfo().then((function(){var e=Object(i["getUserContext"])();t.userInfo.avatarUrl=Object(s["getWebViewPath"])(e.avatarPath)||e.avatarUrl||"",t.userInfo.name=e.tenantInfo.tenantName||"",t.userInfo.title="",t.userInfo.mobile=e.tenantInfo.mobile||"",t.userInfo.role=e.role,t.userInfo.post=e.post,t.userInfo.userType=e.userType,Object(f["e"])({type:"list"}).then((function(e){t.roleList=e})),Object(f["d"])({type:"list"}).then((function(e){t.postList=e})),0!=e.userType?Object(f["b"])({type:"list"}).then((function(e){console.log(e,"ContractorContractorContractorContractor"),t.contractorList=e})):Object(f["c"])({type:"list"}).then((function(e){console.log(e,"OrgOrgOrgOrgOrg"),t.orgList=e}))}))},editAvatar:function(){this.showAvatarSelect=!0},onSelect:function(t){var e,n=this,r=p()(),o=Object(s["getPrefixPath"])("avatar");o.fullPath+=r+".jpg",o.relativePath+=r+".jpg",l["a"].takeAvatar(o.fullPath,"拍照"!==t.name).then((function(){return n.$toast.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"正在上传头像..."}),c["a"].uploadAvatar(o.fullPath).then((function(t){e=t,n.$toast.clear()})).catch((function(){return n.$toast.clear(),n.$toast("上传头像失败"),Promise.reject("上传头像失败")}))})).then((function(){return{original:e,localPath:o.fullPath+"?"+(new Date).getTime()}})).then((function(t){t&&(Object(i["setUserContext"])({avatarUrl:t.original,avatarPath:t.localPath}),n.userInfo.avatarUrl=Object(s["getWebViewPath"])(t.localPath),n.$toast("保存成功"),n.showAvatarSelect=!1)})).catch((function(t){console.log(t),n.$toast.clear()}))},onCancel:function(){this.showAvatarSelect=!1},toPassword:function(){this.$router.push({name:"password"})},toRoleDetail:function(){this.roleList.length>2&&(h.title="角色",console.log(this.roleList,"roleList"),h.list=this.roleList.map((function(t){return{name:t.fullPath}})),this.$router.push("/user/info-detail"))},toPostDetail:function(){this.postList.length>2&&(h.title="岗位",h.list=this.postList.map((function(t){return{name:t}})),this.$router.push("/user/info-detail"))},toOrgAnddContractorDetail:function(){this.orgAndContractorList.length>2&&(0==this.userInfo.userType?h.title="所属组织":h.title="所属供应商",h.list=this.orgAndContractorList,this.$router.push("/user/info-detail"))}}},m=d,v=(n("fc8c"),n("5d22")),g=Object(v["a"])(m,r,o,!1,null,"779afba9",null);e["default"]=g.exports},fc8c:function(t,e,n){"use strict";n("61e6")}}]);