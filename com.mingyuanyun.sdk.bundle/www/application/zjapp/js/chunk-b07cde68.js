(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-b07cde68"],{"0def":function(t,e,a){"use strict";a.r(e);var i=a("674f").a,s=(a("f64b"),a("17cc")),r=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-content",{attrs:{title:"安全晨会明细"}},[t.isLoading||t.emptyTips?t._e():a("scroller",[a("div",{staticClass:"hd"},[a("div",{staticClass:"hd-title"},[t._v(t._s(t.project.name))]),a("div",{staticClass:"hd-text"},[t._v("施工单位："+t._s(t.contractor.name))]),a("div",{staticClass:"hd-text"},[t._v("晨会时间："+t._s(t._f("formatDate")(t.date)))])]),a("div",{staticClass:"title-table"},[t._v("班组及人数")]),a("table",{staticClass:"table-teams"},[a("thead",[a("tr",[a("th",[t._v("序号")]),a("th",{staticClass:"border-left"},[t._v("班组")]),a("th",{staticClass:"border-left"},[t._v("人数")])])]),a("tbody",t._l(t.teams,(function(e,i){return a("tr",{key:i,staticClass:"border-top"},[a("td",[t._v(t._s(i+1))]),a("td",{staticClass:"border-left"},[t._v(t._s(e.name))]),a("td",{staticClass:"border-left"},[t._v(t._s(e.num))])])}))),a("tfoot",[a("tr",{staticClass:"border-top"},[a("td",{attrs:{colspan:"2"}},[t._v("合计")]),a("td",{staticClass:"border-left"},[t._v(t._s(t.teamsTotal))])])])]),t.images.length?a("item",{staticClass:"mt10",attrs:{label:"现场照片"}},[a("div",{staticClass:"item-con",attrs:{slot:"right"},slot:"right"},[a("item-img-list",{attrs:{"online-mode":!0,editabled:!1},model:{value:t.images,callback:function(e){t.images=e},expression:"images"}})],1)]):t._e(),t.remark?a("item",{attrs:{label:"备注",text:t.remark}}):t._e(),a("user-select",{attrs:{title:"记录人",date:t._f("formatDate")(t.registOn),mode:"view",editabled:!1},model:{value:t.register,callback:function(e){t.register=e},expression:"register"}})],1),a("loading-status",{attrs:{"is-loading":t.isLoading,"is-empty":""!==t.emptyTips,"empty-text":t.emptyTips}})],1)}),[],!1,null,"2f2f507a",null);e.default=r.exports},"5e62":function(t,e,a){var i=a("dbfd2");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a("85cb").default)("0a4e08e8",i,!0,{sourceMap:!1,shadowMode:!1})},"674f":function(t,e,a){"use strict";(function(t){var i=a("774b"),s=a("07d2"),r=a("cd05"),o=a("e68e"),n=a("1b7e"),d=a("162a");e.a={name:"MeetingIndex",components:{Scroller:i.default,Item:s.default,UserSelect:r.a,ItemImgList:o.a},data:function(){return{id:"",isLoading:!0,emptyTips:"",project:{},contractor:{},date:"",teams:[{team:{},workers:0}],teamsTotal:0,images:[],remark:"是的去非水电费",register:{},registOn:""}},activated:function(){this.id=this.$route.query.id,this.emptyTips="",this.init()},methods:{init:function(){var e=this;if(this.isLoading=!0,this.id)return n.a.getHasNetwork().then((function(t){if(!t)return Promise.reject({errmsg:"当前无网络连接"})})).then((function(){return d.a.request("/online/safety-party/view",{id:e.id}).then((function(a){e.project={id:a.proj_id,name:a.proj_name},e.contractor={id:a.construction_unit_id,name:a.construction_unit},e.date=a.meeting_at,e.teams=a.groups,e.teamsTotal=t.reduce(a.groups||[],(function(t,e){return t+(e.num||0)}),0),e.remark=a.remark,e.images=JSON.parse(a.image_files||"[]"),e.register={id:a.register_by,name:a.register,mobile:a.mobile,is_im_user:a.is_im_user},e.registOn=a.created_on,e.isLoading=!1}))})).catch((function(t){e.emptyTips=t.errmsg||"获取晨会记录失败",e.isLoading=!1}));this.emptyTips="参数错误",this.isLoading=!1}}}}).call(this,a("391c"))},dbfd2:function(t,e,a){(t.exports=a("690e")(!1)).push([t.i,".zjapp .hd[data-v-2f2f507a]{padding:15px;background-color:#fff}.zjapp .hd-title[data-v-2f2f507a]{padding:3px 0;margin-bottom:5px;line-height:20px;font-size:18px;color:#333}.zjapp .hd-text[data-v-2f2f507a],.zjapp .title-table[data-v-2f2f507a]{line-height:18px;font-size:12px;color:#999}.zjapp .title-table[data-v-2f2f507a]{padding:5px 15px;margin-top:10px}.zjapp .table-teams[data-v-2f2f507a]{width:100%;border-collapse:collapse}.zjapp .table-teams thead[data-v-2f2f507a]{color:#888;background-color:#fafafa}.zjapp .table-teams tbody[data-v-2f2f507a]{color:#666;background-color:#fff}.zjapp .table-teams tfoot[data-v-2f2f507a]{color:#333;background-color:#fafafa}.zjapp .table-teams th[data-v-2f2f507a]{height:30px;font-weight:400}.zjapp .table-teams td[data-v-2f2f507a],.zjapp .table-teams th[data-v-2f2f507a]{padding:5px;text-align:center;font-size:14px;border:none}.zjapp .table-teams td[data-v-2f2f507a]{height:46px;line-height:16px}",""])},f64b:function(t,e,a){"use strict";a("5e62")}}]);