(window["webpackJsonp_module_entry_zhkf_"]=window["webpackJsonp_module_entry_zhkf_"]||[]).push([["chunk-27bb00d0"],{"334dd":function(e,t,n){t=e.exports=n("690e")(!1),t.push([e.i,"\n@charset \"UTF-8\";\n.zhkf .x-box[data-v-7b77777f] {\n  bottom: 58px;\n}\n.zhkf .urge-panel[data-v-7b77777f] {\n  margin-top: 10px;\n  background: #fff;\n}\n.zhkf .detail-top-content[data-v-7b77777f] {\n  overflow: hidden;\n  background: #fff;\n}\n.zhkf .select-user-wrapper[data-v-7b77777f] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  background: #fff;\n  height: 100vh;\n  width: 100vw;\n}\n.zhkf .detail-item[data-v-7b77777f] {\n  font-size: 14px;\n  padding: 0 15px;\n  line-height: 26px;\n  margin: 10px 0;\n  line-height: 26px;\n  position: relative;\n}\n.zhkf .detail-item .detail-label[data-v-7b77777f] {\n    display: inline-block;\n    color: #a0a0a0;\n    position: absolute;\n}\n.zhkf .detail-item .detail-text[data-v-7b77777f] {\n    display: inline-block;\n    margin-left: 90px;\n    color: #202020;\n}\n.zhkf .detail-item .detail-text .reminder[data-v-7b77777f]::after {\n      content: '\\3001';\n}\n.zhkf .detail-item .detail-text .reminder[data-v-7b77777f]:last-child::after {\n      content: '';\n}\n.zhkf .to-detail[data-v-7b77777f] {\n  font-size: 14px;\n  font-weight: 400;\n  color: #0085ff;\n  line-height: 20px;\n  text-align: center;\n  padding: 12px 0;\n}\n.zhkf .upgrade-detail-wrapper[data-v-7b77777f] .edit {\n  height: 110px !important;\n}\n",""])},7951:function(e,t,n){"use strict";n.r(t);n("6a61");var a=n("2e91"),i=(n("cc57"),n("6d57"),n("bb66")),r=n("39bb"),s=n("e559"),c=n("51ee"),o=n("516c"),l=n("94dc"),d=n("ba1a"),u={name:"ComponentName",components:{BottomBtn:i["a"],textBox:r["a"],cellSelector:s["a"],selectUser:c["a"]},data:function(){return{showSelectUser:!1,checked:!0,activeNames:[],checkedUser:[],checkedNames:"",params:{business_id:"",content:"",is_send_email:!0,receiver:[]}}},computed:{detail:function(){var e=d["a"].getDecodeQuery(this.$route.query);return e.data?JSON.parse(e.data):{}}},watch:{checkedUser:function(e){var t=[],n=[];e.forEach((function(e){t.push(e.name),n.push(e.id)})),this.checkedNames=t.join("、"),this.params.receiver=n}},activated:function(){document.title="风控问题催办",this.getDefaultReciver()},methods:{goBack:function(){this.initPage(),this.$router.go(-1)},emailChange:function(e){},getDefaultReciver:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["b"])({id:this.detail.upgrade_id});case 2:t=e.sent,this.checkedUser=t;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),urge:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.params.business_id=this.detail.upgrade_id,this.params.content&&this.params.content.trim()){e.next=3;break}return e.abrupt("return",this.$toast("请填写催办内容"));case 3:if(!this.params.is_send_email||this.params.receiver.length){e.next=5;break}return e.abrupt("return",this.$toast("请选择收件人"));case 5:return Object(o["b"])(),e.next=8,Object(l["i"])(this.params);case 8:t=e.sent,Object(o["a"])(),console.log(t),this.goBack();case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),initPage:function(){this.checkedUser=[],this.params.is_send_email=!0,this.params.content=""},checkChg:function(e,t){console.log(t),this.params.receiver=t},backFunc:function(){this.showSelectUser=!1}}},p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-view x-col upgrade-detail-wrapper"},[n("cus-nav-bar",{attrs:{title:"风险问题催办","left-arrow":"",border:!1,"use-click-left":""},on:{"click-left":e.goBack}}),e._v(" "),n("div",{staticClass:"page-content x-rel x-flex ovhd"},[n("div",{staticClass:"scroll-container x-abs x-box"},[n("div",{staticClass:"detail-top-content"},[n("div",{staticClass:"detail-item"},[n("span",{staticClass:"detail-label"},[e._v("问题牵头人")]),e._v(" "),n("span",{staticClass:"detail-text"},[e._v(e._s(e.detail.leader_name||""))])]),e._v(" "),n("div",{staticClass:"detail-item"},[n("span",{staticClass:"detail-label"},[e._v("整改时限")]),e._v(" "),n("span",{staticClass:"detail-text"},[e._v(e._s(e.detail.problem_deadline||"")+" ")])]),e._v(" "),n("split-line"),e._v(" "),n("text-box",{attrs:{placeholder:"请输入催办内容","max-length":200},model:{value:e.params.content,callback:function(t){e.$set(e.params,"content",t)},expression:"params.content"}})],1),e._v(" "),n("div",{staticClass:"urge-panel"},[n("van-switch-cell",{attrs:{title:"发送邮件"},on:{change:e.emailChange},model:{value:e.params.is_send_email,callback:function(t){e.$set(e.params,"is_send_email",t)},expression:"params.is_send_email"}}),e._v(" "),n("split-line"),e._v(" "),n("cell-selector",{directives:[{name:"show",rawName:"v-show",value:e.params.is_send_email,expression:"params.is_send_email"}],attrs:{label:"收件人",value:e.checkedNames},on:{change:e.checkChg},nativeOn:{click:function(t){e.showSelectUser=!0}}})],1),e._v(" "),n("p",{staticClass:"bottom-tip"},[e._v("默认发送给问题牵头人，并且抄送给其他升级提醒人")])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSelectUser,expression:"showSelectUser"}],staticClass:"select-user-wrapper"},[n("select-user",{attrs:{mutil:"",title:"选择收件人","back-action":e.backFunc},model:{value:e.checkedUser,callback:function(t){e.checkedUser=t},expression:"checkedUser"}})],1)]),e._v(" "),n("bottom-btn",{nativeOn:{click:function(t){return e.urge(t)}}},[n("span",[e._v("确认")])])],1)},h=[],f=n("d082");function b(e){n("ec0e")}var v=!1,m=b,k="data-v-7b77777f",g=null,x=Object(f["a"])(u,p,h,v,m,k,g);t["default"]=x.exports},"94dc":function(e,t,n){"use strict";n.d(t,"g",(function(){return i})),n.d(t,"f",(function(){return r})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"i",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return u})),n.d(t,"h",(function(){return p}));var a=n("1961");function i(e){return Object(a["b"])("check-task-upgrade-api/index/list",e)}function r(e){return Object(a["b"])("check-task-upgrade-api/index/risk-level-condition",e)}function s(e){return Object(a["b"])("check-task-upgrade-api/index/get-leader-list",e)}function c(e){return Object(a["b"])("check-task-upgrade-api/index/detail",e)}function o(e){return Object(a["d"])("check-task-upgrade-api/urge/add",e)}function l(e){return Object(a["b"])("check-task-upgrade-api/urge/default-recipients",e)}function d(e){return Object(a["b"])("check-task-upgrade-api/upgrade/risk-level",e)}function u(e){return Object(a["d"])("check-task-upgrade-api/upgrade/upgrade",e)}function p(e){return Object(a["b"])("check-task-upgrade-api/upgrade/get-reminder-names",e)}},ec0e:function(e,t,n){var a=n("334dd");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("85cb").default;i("ab65f162",a,!0,{})}}]);