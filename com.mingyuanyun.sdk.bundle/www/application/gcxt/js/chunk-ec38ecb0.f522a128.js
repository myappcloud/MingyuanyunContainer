(window["webpackJsonp_module_entry_gcxt_"]=window["webpackJsonp_module_entry_gcxt_"]||[]).push([["chunk-ec38ecb0"],{"1f90":function(e,t,o){var a=o("7143");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=o("85cb").default;i("0acf6998",a,!0,{sourceMap:!1,shadowMode:!1})},"4e28":function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"searchTool",class:{active:e.active}},[o("div",{staticClass:"searchTool-header"},[o("div",{staticClass:"searchTool-field"},[o("i",{staticClass:"iconfont icon-_sousuo icon__search"}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],staticClass:"searchTool-input",attrs:{type:"text",placeholder:"搜索"},domProps:{value:e.keyword},on:{focus:e.enter,input:function(t){t.target.composing||(e.keyword=t.target.value)}}}),o("i",{staticClass:"iconfont icon-baocuo",on:{click:e.clear}})]),o("button",{staticClass:"searchTool-btn-quit",attrs:{type:"button"},on:{click:e.quit}},[e._v("\n      取消\n    ")])]),o("div",{staticClass:"searchTool-body"},[e.user.length&&"member"===e.type?o("ul",{staticClass:"userList"},[o("li",{staticClass:"address-title"},[e._v("联系人")]),e._l(e.user,(function(t,a){return o("li",{key:a,staticClass:"userList-item",on:{click:function(o){e.selectuser(t,"PRIVATE")}}},[o("img",{staticClass:"userList-item-photo",attrs:{alt:"",src:t.photo?t.photo:e.defaultImage}}),o("div",{staticClass:"userList-item-name"},[o("span",[e._v(e._s(t.name))]),t.station_name?o("span",{staticClass:"position"},[e._v("\n            ("+e._s(t.station_name)+")\n          ")]):e._e()])])}))],2):e._e(),e.group.length&&"group"===e.type?o("ul",{staticClass:"searchResult-group"},[o("li",{staticClass:"address-title"},[e._v("群聊")]),e._l(e.group,(function(t,a){return o("li",{key:a,staticClass:"searchResult-group-item",on:{click:function(o){e.selectuser(t,"GROUP")}}},[e._m(0,!0),o("div",{staticClass:"searchResult-group-detail"},[o("div",{staticClass:"searchResult-group-name"},[e._v(e._s(t.group_name))]),o("include-user",{attrs:{user:t.members[0],keyword:e.keyword}})],1)])}))],2):e._e()])])},i=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"searchResult-group-icon"},[o("i",{staticClass:"iconfont icon-gongchengxietong-icon-34"})])}],r=(o("c0c3"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"searchResult-group-include",domProps:{innerHTML:e.xss(e._s(e.filterText))}},[o("span",[e._v("包含:")]),o("span",[e._v("111")])])}),s=[],n=(o("f548"),o("cc57"),{name:"IncludeUser",props:{user:{type:Object,default:function(){return{}}},keyword:{type:String,default:function(){return""}}},data:function(){return{filterText:""}},created:function(){if(this.user){var e=this.user.name;this.filterText="<span>包含: </span>"+e.replace(this.keyword,'<span class="highlight">'+this.keyword+"</span>")}}}),c=n,l=o("c701"),d=Object(l["a"])(c,r,s,!1,null,"197a5e54",null),f=d.exports,u=o("ddf0"),p=o("8c3a"),g=o.n(p),h=o("8b7b"),x=o("34ae"),v={name:"SearchTool",components:{includeUser:f},props:{type:{type:String,default:function(){return"member"}}},data:function(){return{keyword:"",active:!1,searchId:null,user:[],group:[],defaultImage:g.a,userInfo:{}}},watch:{keyword:function(e){var t=this;this.searchId&&clearTimeout(this.searchId),this.searchId=setTimeout((function(){t.search(e),this.searchId=null}),500)}},methods:{enter:function(){this.active=!0},quit:function(){this.keyword="",this.active=!1},clear:function(){this.keyword=""},search:function(e){var t=this;e?Object(u["f"])({keyword:e}).then((function(e){var o=e.data;t.group=o.group,t.user=o.user})):(this.group=[],this.user=[])},onSelectSearchUser:function(e,t){if(t===this.PRIVATE)this.createIm(e),this.userInfo[e.user_id]=e;else if(t===this.GROUP){var o={user_id:e.group_id,name:e.group_name,photo:null};Object(h["d"])(o,null,1),x["a"].__im_user=this.GROUP+":"+e.group_id,this.groupName[e.group_id]=e.group_name,this.current={conversationType:this.GROUP,targetId:e.group_id,group_name:e.group_name}}},selectuser:function(e,t){this.quit(),localStorage.IM_SelectedUser=JSON.stringify(e),this.$router.push("/message-im-personInfo")}}},m=v,b=(o("a333"),Object(l["a"])(m,a,i,!1,null,"5ae01f2f",null));t["a"]=b.exports},7143:function(e,t,o){t=e.exports=o("690e")(!1),t.push([e.i,".gcxt .relativeProject[data-v-b610fa88]{list-style:none;margin:0;padding:0;background-color:#fff}.gcxt .relativeProject .icon-_xiangmu[data-v-b610fa88]{position:absolute;font-size:25px;left:15px;top:12px;color:#2c5cf7;opacity:.7}.gcxt .relativeProject .icon-_fanui[data-v-b610fa88]{position:absolute;font-size:18px;right:16px;top:16.5px;color:#c7c7cc;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.gcxt .relativeProject-item[data-v-b610fa88]{border-bottom:1px solid #efefef;position:relative;padding-left:15px}.gcxt .relativeProject-item[data-v-b610fa88]:last-child{border-bottom:none}.gcxt .subProject .relativeProject-item[data-v-b610fa88]{border-bottom:1px solid #efefef}.gcxt .subProject:last-child .relativeProject-item[data-v-b610fa88]:last-child{border-bottom:none}.gcxt .relativeProject-name[data-v-b610fa88]{padding-left:39px;line-height:60px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:16px}.gcxt .userList[data-v-b610fa88]{list-style:none;margin:0;padding:0;background-color:#fff}.gcxt .userList-title[data-v-b610fa88]{height:25px;line-height:25px;font-size:13px;text-indent:15px;background-color:#f5f5f5}.gcxt .userList-item[data-v-b610fa88]{height:60px;line-height:60px;padding-left:15px;position:relative}.gcxt .userList-item-photo[data-v-b610fa88]{position:absolute;left:16px;top:10px;width:40px;height:40px;border:none}.gcxt .editGroupMode .userList-item-photo[data-v-b610fa88]{left:52px}.gcxt .userList-item-name[data-v-b610fa88]{padding-left:56px;border-bottom:1px solid #efefef}.gcxt .editGroupMode .userList-item-name[data-v-b610fa88]{padding-left:92px}.gcxt .userList-item:last-child .userList-item-name[data-v-b610fa88]{border-bottom:none}.gcxt #remove .selectMark[data-v-b610fa88],.gcxt #selectUser .selectMark[data-v-b610fa88]{border:1px solid #c7c7c7;position:absolute;width:20px;height:20px;font-size:12px;line-height:20px;border-radius:50%;text-align:center;color:#fff;left:16px;top:20px}.gcxt #remove .selectMark.icon-right1[data-v-b610fa88],.gcxt #selectUser .selectMark.icon-right1[data-v-b610fa88]{background-color:#509afa;border:1px solid #fff}.gcxt #selectUser .selectMark.lockActiveUser[data-v-b610fa88]{background-color:#aaa}.gcxt[data-v-b610fa88] :export{colorPrimary:#2c5cf7;headerBackgroundColor:#fff;headerTextColor:#333}.gcxt .content[data-v-b610fa88]{padding-top:44px}.gcxt .createGroup[data-v-b610fa88]{color:#2c5cf7}",""])},"71f2":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page-group"},[o("div",{staticClass:"page page-current"},[o("v-header",{attrs:{title:e.editGroupMode?"选择联系人":"通讯录"}},[o("template",{slot:"right"},[e.editGroupMode?o("a",{staticClass:"icon createGroup",domProps:{textContent:e._s("确定("+e.activeUser.length+")")},on:{click:function(t){e.editGroup("add")}}}):e._e()])],2),e.editGroupMode?e._e():o("search-tool",{attrs:{type:"member"}}),o("div",{staticClass:"content",class:{editGroupMode:e.editGroupMode}},[e.userList?e._l(e.userList,(function(t,a){return o("ul",{key:a,staticClass:"userList"},[o("li",{staticClass:"userList-title"},[e._v(e._s(a))]),e._l(t,(function(t,a){return o("li",{key:a,staticClass:"userList-item",on:{click:function(o){e.onSelectAddressUser(t)}}},[e.editGroupMode&&e.activeUser.indexOf(t.user_id)>=0?o("span",{staticClass:"iconfont icon-right1 selectMark"}):e.editGroupMode&&e.lockActiveUser.indexOf(t.user_id)>=0?o("span",{staticClass:"iconfont icon-right1 selectMark lockActiveUser"}):e.editGroupMode?o("span",{staticClass:"iconfont selectMark"}):e._e(),o("img",{staticClass:"userList-item-photo",attrs:{alt:"",src:t.photo?t.photo:e.defaultImage}}),o("div",{staticClass:"userList-item-name"},[o("span",[e._v(e._s(t.name))]),t.station_name?o("span",{staticClass:"position"},[e._v("\n                ("+e._s(t.station_name)+")\n              ")]):e._e()])])}))],2)})):e._e()],2)],1)])},i=[],r=o("8c3a"),s=o.n(r),n=o("4e28"),c=o("ddf0"),l=o("34ae"),d={name:"SelectUser",components:{searchTool:n["a"]},data:function(){return{userList:{},selectedUser:null,defaultImage:s.a,editGroupMode:"",lockActiveUser:[],activeUser:[]}},created:function(){this.getRelativeUser()},methods:{getRelativeUser:function(){var e=this;Object(c["d"])({project_id:this.$route.query.project_id}).then((function(t){e.userList=t.data}))},onSelectAddressUser:function(e){if(this.editGroupMode){if(this.lockActiveUser.indexOf(e.user_id)<0){var t=this.activeUser.indexOf(e.user_id);t>=0?this.activeUser.splice(t,1):this.activeUser.push(e.user_id)}}else this.selectedUser=e,l["a"].IM_SelectedUser=e,this.$router.push("/message-im-personInfo")}}},f=d,u=(o("e40a"),o("c701")),p=Object(u["a"])(f,a,i,!1,null,"b610fa88",null);t["default"]=p.exports},"8b7b":function(e,t,o){"use strict";o.d(t,"d",(function(){return M})),o.d(t,"a",(function(){return h})),o.d(t,"b",(function(){return x})),o.d(t,"c",(function(){return k}));o("cc57"),o("06a2"),o("6d57");var a=o("a740"),i=o("4360"),r=o("21aa"),s=o("a18c"),n=o("ddf0"),c=o("34ae"),l=o("d9d2"),d=function(){var e="";return function(){if(e)return e;var t=location.protocol+location.host+location.pathname;return e=t.substring(0,t.lastIndexOf("/")+1),e}}(),f=d()+"static/images/IM/back.png",u=d()+"static/images/IM/info.png",p=d()+"static/images/IM/groupInfo.png",g=d()+"static/images/IM/tel.png",h="GROUP",x="PRIVATE",v=[],m={},b={};function _(){return new Promise((function(e,t){window.RongCloudLibPlugin?window.RongCloudLibPlugin.getConversationList((function(t,o){t&&"success"===t.status&&(console.log("会话列表",t),e(t.result))})):e([])}))}function k(){return new Promise((function(e,t){_().then(C).then(T).then((function(){e(v)}))}))}function w(e){if(!e)return null;var t=b,o=v;return e.forEach((function(e){t[e.group_id]=e.group_name})),o.forEach((function(e,o){if(e.conversationType===h){var a=t[e.targetId];a&&(v[o].group_name=a)}})),e}function y(e){if(!e)return null;var t=m,o=v;return e.forEach((function(e){t[e.user_id]=e})),o.forEach((function(e,o){if(e.conversationType===x){var a=t[e.targetId];a&&(v[o].targetInfo=a)}})),e}function C(e,t){var o=m,a=b,i=[],r=[];return e.forEach((function(e){e.conversationType===x?o[e.targetId]?e.targetInfo=o[e.targetId]:i.push(e.targetId):e.conversationType===h&&(!o[e.senderUserId]&&i.indexOf(e.senderUserId)<0&&!isNaN(e.senderUserId)&&""!==e.senderUserId&&i.push(e.senderUserId),a[e.targetId]?e.group_name=a[e.targetId]:r.push(e.targetId))})),v=e,i.length||r.length?Promise.all([I(i),P(r)]):null}function I(e){return e&&e.length?new Promise((function(t,o){Object(n["b"])({user_ids:JSON.stringify(e)}).then((function(e){t(e.data)}))})):Promise.resolve()}function P(e){return e&&e.length?new Promise((function(t,o){Object(n["a"])({group_ids:e.join(",")}).then((function(e){t(e.data)}))})):Promise.resolve()}function T(e){if(e){var t=e[0],o=e[1];y(t),w(o)}}function M(e,t,o){if(window.MRongCloudCaigou){o=void 0===o?0:o;var n=Object(a["d"])(),d={userId:n.user_id,name:Object(a["a"])("xt_user_name"),portraitUri:n.photo},h={userId:e.user_id,name:e.name,portraitUri:e.photo},x={onOpenIMSuccess:function(){console.log("开启聊天")},onOpenIMError:function(){console.error(arguments),l["b"].toast("打开聊天失败"),c["a"].__im_user=void 0},onGoBack:function(){c["a"].__im_user=void 0,i["a"].commit(r["c"],null),s["a"].push("/home/message")},onClickBusInfo:function(e){console.log("点击businfo区域"),console.log(arguments)},onClickPortrait:function(e){console.log(e),console.log("点击了聊天用户头像"),c["a"].__im_user=void 0},onClickRightIcon:function(){}},v={isShowRightBtn:!0,conversationType:o,navBar:{leftIconPath:f,rightIconPath:p,barColor:"#3492e9",barTitleColor:"#ffffff"},closeOpenAnimation:!0,closeBackAnimation:!0};o||(v.navBar.rightIconPath=u,v.navBar.rightSubIconPath=g,v.navBar.rightSubParam={type:1,value:e.user_code}),v.busInfo=t,console.log(v,"----im");try{window.MRongCloudCaigou.openIm(d,h,x,v)}catch(m){console.log(m),c["a"].__im_user=void 0}}else console.warn("打开会话框失败，MRongCloudCaigou插件不存在，请检测打包配置。")}},"8c3a":function(e,t,o){e.exports=o.p+"img/defaultHeader.081b481c.png"},a333:function(e,t,o){"use strict";o("d678")},d678:function(e,t,o){var a=o("e7e1");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=o("85cb").default;i("26bbd348",a,!0,{sourceMap:!1,shadowMode:!1})},e40a:function(e,t,o){"use strict";o("1f90")},e7e1:function(e,t,o){t=e.exports=o("690e")(!1),t.push([e.i,".gcxt[data-v-5ae01f2f] :export{colorPrimary:#2c5cf7;headerBackgroundColor:#fff;headerTextColor:#333}.gcxt .relativeProject[data-v-5ae01f2f]{list-style:none;margin:0;padding:0;background-color:#fff}.gcxt .relativeProject .icon-_xiangmu[data-v-5ae01f2f]{position:absolute;font-size:25px;left:15px;top:12px;color:#2c5cf7;opacity:.7}.gcxt .relativeProject .icon-_fanui[data-v-5ae01f2f]{position:absolute;font-size:18px;right:16px;top:16.5px;color:#c7c7cc;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.gcxt .relativeProject-item[data-v-5ae01f2f]{border-bottom:1px solid #efefef;position:relative;padding-left:15px}.gcxt .relativeProject-item[data-v-5ae01f2f]:last-child{border-bottom:none}.gcxt .subProject .relativeProject-item[data-v-5ae01f2f]{border-bottom:1px solid #efefef}.gcxt .subProject:last-child .relativeProject-item[data-v-5ae01f2f]:last-child{border-bottom:none}.gcxt .relativeProject-name[data-v-5ae01f2f]{padding-left:39px;line-height:60px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:16px}.gcxt .userList[data-v-5ae01f2f]{list-style:none;margin:0;padding:0;background-color:#fff}.gcxt .userList-title[data-v-5ae01f2f]{height:25px;line-height:25px;font-size:13px;text-indent:15px;background-color:#f5f5f5}.gcxt .userList-item[data-v-5ae01f2f]{height:60px;line-height:60px;padding-left:15px;position:relative}.gcxt .userList-item-photo[data-v-5ae01f2f]{position:absolute;left:16px;top:10px;width:40px;height:40px;border:none}.gcxt .editGroupMode .userList-item-photo[data-v-5ae01f2f]{left:52px}.gcxt .userList-item-name[data-v-5ae01f2f]{padding-left:56px;border-bottom:1px solid #efefef}.gcxt .editGroupMode .userList-item-name[data-v-5ae01f2f]{padding-left:92px}.gcxt .userList-item:last-child .userList-item-name[data-v-5ae01f2f]{border-bottom:none}.gcxt #remove .selectMark[data-v-5ae01f2f],.gcxt #selectUser .selectMark[data-v-5ae01f2f]{border:1px solid #c7c7c7;position:absolute;width:20px;height:20px;font-size:12px;line-height:20px;border-radius:50%;text-align:center;color:#fff;left:16px;top:20px}.gcxt #remove .selectMark.icon-right1[data-v-5ae01f2f],.gcxt #selectUser .selectMark.icon-right1[data-v-5ae01f2f]{background-color:#509afa;border:1px solid #fff}.gcxt #selectUser .selectMark.lockActiveUser[data-v-5ae01f2f]{background-color:#aaa}.gcxt .searchTool[data-v-5ae01f2f]{position:absolute;left:0;top:2.2rem;width:100%;z-index:1110}.gcxt .xt-ios .searchTool[data-v-5ae01f2f]{top:2.9rem}.gcxt .searchTool+.content[data-v-5ae01f2f]{padding-top:44px}.gcxt .searchTool-header[data-v-5ae01f2f]{background-color:#fff;border-bottom:1px solid #ececec;height:44px;padding:7px 12px;width:100%;-webkit-transition:all .2s linear;transition:all .2s linear;position:absolute;top:0}.gcxt .searchTool-field[data-v-5ae01f2f]{background-color:#f7f8fa;border-radius:15px;height:30px;padding:0 28px 0 40px}.gcxt .searchTool-input[data-v-5ae01f2f]{display:block;background-color:transparent;width:100%;-webkit-appearance:none;-webkit-box-shadow:none;box-shadow:none;border:none;position:relative;z-index:15;text-align:center;font-size:14px;height:30px;padding:0}.gcxt .icon-_sousuo[data-v-5ae01f2f]{left:50%;margin-left:-30px;position:absolute;top:12px;color:#bdbdbd;font-size:14px}.gcxt .searchTool .icon-baocuo[data-v-5ae01f2f]{display:none;position:absolute;right:73px;top:13px;color:#c7c7cc;font-size:13px;z-index:15}.gcxt .searchTool-btn-quit[data-v-5ae01f2f]{display:none;position:absolute;background-color:transparent;-webkit-appearance:none;outline:none;border:none;padding:0;color:#000;font-size:15px;right:16px;top:11px}.gcxt .searchTool.active[data-v-5ae01f2f]{bottom:0}.gcxt .searchTool.active .searchTool-header[data-v-5ae01f2f]{z-index:100;background-color:#fff;padding-right:60px}.gcxt .searchTool.active .icon-_sousuo[data-v-5ae01f2f],.gcxt .searchTool.active .icon-baocuo[data-v-5ae01f2f],.gcxt .searchTool.active .searchTool-btn-quit[data-v-5ae01f2f]{display:block}.gcxt .searchTool.active .icon-_sousuo[data-v-5ae01f2f]{left:26px;margin-left:0}.gcxt .searchTool.active .searchTool-input[data-v-5ae01f2f]{text-align:left}.gcxt .searchTool-body[data-v-5ae01f2f]{position:absolute;width:0;height:0;overflow:hidden;background-color:#f5f5f9}.gcxt .searchTool.active .searchTool-body[data-v-5ae01f2f]{width:100%;height:100%;overflow-y:auto}.gcxt .address-title[data-v-5ae01f2f]{background-color:#f1f1f1;line-height:31px;padding-left:14px;font-size:13px;color:#69696e}.gcxt .searchResult-group[data-v-5ae01f2f]{list-style:none;margin:0;padding:0;background-color:#fff}.gcxt .searchResult-group-item[data-v-5ae01f2f]{position:relative;padding-left:15px;height:60px}.gcxt .searchResult-group-icon[data-v-5ae01f2f]{position:absolute;left:15px;top:10px;color:#fff;background-image:-webkit-gradient(linear,left bottom,left top,from(#8e72ff),to(#737dff));background-image:linear-gradient(0deg,#8e72ff,#737dff);width:40px;height:40px;border-radius:5px;text-align:center;line-height:40px}.gcxt .searchResult-group .iconfont[data-v-5ae01f2f]{font-size:25px}.gcxt .searchResult-group-detail[data-v-5ae01f2f]{height:60px;padding-left:56px;border-bottom:1px solid #efefef}.gcxt .searchResult-group-item:last-child .searchResult-group-detail[data-v-5ae01f2f]{border-bottom:none}.gcxt .searchResult-group-name[data-v-5ae01f2f]{font-size:16px;line-height:22px;padding-top:10px}.gcxt .searchResult-group-include[data-v-5ae01f2f]{font-size:13px;color:#8e8e93}.gcxt .searchResult-group-include[data-v-5ae01f2f],.gcxt .searchResult-group-name[data-v-5ae01f2f]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gcxt .searchResult-group .highlight[data-v-5ae01f2f]{color:#8bc34a}",""])}}]);