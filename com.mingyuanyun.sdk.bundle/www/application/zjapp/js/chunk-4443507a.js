(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-4443507a","chunk-739f37c8","chunk-45aa81b4"],{"0f4e":function(e,t,o){var i=o("f943");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,o("85cb").default)("eefaf198",i,!0,{sourceMap:!1,shadowMode:!1})},1168:function(e,t,o){var i=o("5454");(e.exports=o("690e")(!1)).push([e.i,".zjapp .drop-down-select-single[data-v-5e4fcff0]{display:flex;align-items:center;justify-content:center;margin:0 60px;height:44px;color:#fff}.zjapp .name[data-v-5e4fcff0]{position:relative;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:0 20px 0 0}.zjapp .arrow[data-v-5e4fcff0]{position:absolute;top:12px;right:0;width:18px;height:18px;background:url("+i(o("7fb27"))+") no-repeat 50%;background-size:100% 100%;pointer-events:none;transition:transform .2s}.zjapp .arrow.active[data-v-5e4fcff0]{transform:rotate(180deg)}.zjapp .black-arrow[data-v-5e4fcff0]{background:url("+i(o("6dba"))+") no-repeat 50%!important;background-size:100% 100%!important}",""])},2137:function(e,t,o){"use strict";var i=o("329b"),n=o("07d2"),s=o("915f"),a=o("04f3"),l={name:"DropDownSelectSingleDialog",components:{Item:n.default},mixins:[s.a],data:function(){return{show:!1,showList:!1,contentTop:64,listHeight:475,options:[],selected:{},backButtonEvent:null}},watch:{show:function(e){var t=this;e&&this.$nextTick((function(){t.showList=!0}))}},methods:{openPopup:function(e){this.value=!0,this.show=!0,this.options=e.options,this.selected=e.selected,this.el=e.el;var t=document.querySelector(".layout-main .layout-header");if(this.contentTop=t.offsetHeight,this.el){var o=this.el.getBoundingClientRect();this.contentTop=o.bottom}this.listHeight=window.innerHeight-this.contentTop-50>475?475:window.innerHeight-this.contentTop-50,this.backButtonEvent||(this.backButtonEvent=Object(a.a)(this.closePopup))},closePopup:function(){this.value=!1,this.showList=!1,this.backButtonEvent&&(Object(a.c)(this.backButtonEvent),this.backButtonEvent=null)},onClose:function(){this.show=!1},select:function(e){this.selected=e,this.$emit("select",e),this.closePopup()}}},r=(o("61b3"),o("17cc")),c=Object(r.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.show?o("div",{staticClass:"content",style:{top:e.contentTop+"px"},on:{click:function(t){return t.target!==t.currentTarget?null:e.closePopup(t)}}},[o("transition",{attrs:{name:"slide-down"},on:{afterLeave:e.onClose}},[e.showList?o("div",{staticClass:"list",style:{"max-height":e.listHeight+"px"}},e._l(e.options,(function(t,i){return o("item",{key:i,attrs:{border:"bottom","icon-right":t.id===e.selected.id?"qualified":""},on:{click:function(o){e.select(t)}}},[o("div",{staticClass:"item-text"},[e._v(e._s(t.name))])])}))):e._e()])],1):e._e()}),[],!1,null,"d6c06a4c",null).exports,d=!1;d||(d=new(i.default.extend(c))({el:document.createElement("div")}),document.body.appendChild(d.$el));var p=d,h=(o("9dd9"),o("f548"),o("6d57"),o("06a2"),o("88c5"),o("a1d4")),u=(o("6144"),o("9eea")),f=o("fc08"),g={name:"DropDownSelectPeojectDialog",components:{Tree:h.default,appSearchBar:u.default},mixins:[s.a],data:function(){return{show:!1,showList:!1,isSearching:!1,contentTop:64,listHeight:475,searchKeyword:"",options:[],selected:{},followProjectMapIds:new Map,backButtonEvent:null}},watch:{show:function(e){var t=this;e&&this.$nextTick((function(){t.showList=!0}))}},mounted:function(){},methods:{getFollowProjectIds:function(){var e=this;return f.a.getData().then((function(t){return e.followProjectMapIds=t.list}))},scrollToSelect:function(){var e=this.$refs.slidebox&&this.$refs.slidebox.$el,t=e&&e.querySelector(".is-checked");console.log("开始执行自动滚动",t,e),t&&(console.log("执行自动滚动",t),t.scrollIntoViewIfNeeded(!0))},openPopup:function(e){var t=this;this.getFollowProjectIds(),this.value=!0,this.show=!0,this.options=e.options,this.selected=e.selected,this.el=e.el;var o=document.querySelector(".layout-main .layout-header");if(this.contentTop=o.offsetHeight,this.el){var i=this.el.getBoundingClientRect();this.contentTop=i.bottom}this.listHeight=window.innerHeight-this.contentTop-50>475?475:window.innerHeight-this.contentTop-50,this.selected&&this.selected.id&&setTimeout((function(){t.scrollToSelect()}),200),this.backButtonEvent||(this.backButtonEvent=Object(a.a)(this.closePopup))},closePopup:function(){this.value=!1,this.showList=!1,this.searchKeyword="",this.backButtonEvent&&(Object(a.c)(this.backButtonEvent),this.backButtonEvent=null)},onClose:function(){this.show=!1,this.setSearchMode(!1),this.$refs["app-search-bar-tree-select"]&&this.$refs["app-search-bar-tree-select"].cancelSearch()},select:function(e,t){this.$refs["app-search-bar-checkitem-select"]&&this.$refs["app-search-bar-checkitem-select"].saveHistory(),this.selected=e,this.$emit("select",e,t),this.closePopup()},setSearchMode:function(e){this.isSearching=e},keywordFilter:function(e){return this.searchKeyword?e.replace(new RegExp(this.searchKeyword,"gm"),'<span class="color-blue">'+this.searchKeyword+"</span>"):e}}},m=(o("a90f"),Object(r.a)(g,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.show?o("div",{staticClass:"content",style:{top:e.contentTop+"px"},on:{click:function(t){return t.target!==t.currentTarget?null:e.closePopup(t)}}},[o("transition",{attrs:{name:"slide-down"},on:{afterLeave:e.onClose}},[e.showList?o("div",{staticClass:"list",style:{height:e.listHeight+"px"}},[o("app-search-bar",{ref:"app-search-bar-checkitem-select",staticClass:"bg-white",attrs:{"history-key":"follow-tree-search-history-key","simple-mode":!0},on:{changeSearchStatus:e.setSearchMode},model:{value:e.searchKeyword,callback:function(t){e.searchKeyword=t},expression:"searchKeyword"}}),!e.isSearching||e.searchKeyword?o("tree",{ref:"slidebox",staticClass:"scroll-view",attrs:{list:e.options,select:e.selected,"expand-on-click-node":!1,keyword:e.searchKeyword},on:{onSelect:e.select},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.item;return o("div",{staticClass:"tree-node"},[e.followProjectMapIds.get(i.id)?o("icon",{staticClass:"xingxing",attrs:{slot:"icon-left",name:"xingxing"},slot:"icon-left"}):e._e(),o("span",{staticClass:"main-name",domProps:{innerHTML:e._s(e.keywordFilter(i.name))}}),i.children&&i.children.length?o("span",{staticClass:"count"},[e._v(e._s(i.projectCount))]):e._e()],1)}}])}):e._e()],1):e._e()])],1):e._e()}),[],!1,null,"dff6fcc0",null).exports),w=!1;w||(w=new(i.default.extend(m))({el:document.createElement("div")}),document.body.appendChild(w.$el));var v=w,b=(o("cc57"),{name:"DropDownSelectPeojectDialog",components:{Tree:h.default,appSearchBar:u.default},mixins:[s.a],data:function(){return{show:!1,showList:!1,isSearching:!1,contentTop:64,listHeight:475,searchKeyword:"",options:[],selected:{},followProjectMapIds:new Map,backButtonEvent:null}},watch:{show:function(e){var t=this;e&&this.$nextTick((function(){t.showList=!0}))}},mounted:function(){},methods:{getFollowProjectIds:function(){var e=this;return f.a.getData().then((function(t){return e.followProjectMapIds=t.list}))},scrollToSelect:function(){var e=this.$refs.slidebox&&this.$refs.slidebox.$el,t=e&&e.querySelector(".is-checked");t&&t.scrollIntoViewIfNeeded(!0)},openPopup:function(e){var t=this;this.getFollowProjectIds(),this.value=!0,this.show=!0,this.options=e.options,this.selected=e.selected,this.el=e.el;var o=document.querySelector(".layout-main .layout-header");if(window.__YL_SUPER_APP__&&(o=document.querySelector(".workbench-container .index-header")),this.contentTop=o.offsetHeight,this.el){var i=this.el.getBoundingClientRect();this.contentTop=i.bottom}this.listHeight=window.innerHeight-this.contentTop-50>475?475:window.innerHeight-this.contentTop-50,this.selected&&this.selected.id&&setTimeout((function(){t.scrollToSelect()}),200),this.backButtonEvent||(this.backButtonEvent=Object(a.a)(this.closePopup))},closePopup:function(){this.value=!1,this.showList=!1,this.searchKeyword="",this.backButtonEvent&&(Object(a.c)(this.backButtonEvent),this.backButtonEvent=null)},onClose:function(){this.show=!1,this.setSearchMode(!1),this.$refs["app-search-bar-tree-select"]&&this.$refs["app-search-bar-tree-select"].cancelSearch()},select:function(e,t){this.$refs["app-search-bar-checkitem-select"]&&this.$refs["app-search-bar-checkitem-select"].saveHistory(),this.selected=e,this.$emit("select",e,t),this.closePopup()},setSearchMode:function(e){this.isSearching=e},keywordFilter:function(e){var t="";return t="1"===e.is_end?e.name.replace(new RegExp("^".concat(e.parent_name||"","-")),""):e.name,this.searchKeyword?t.replace(new RegExp(this.searchKeyword,"gm"),'<span class="color-blue">'+this.searchKeyword+"</span>"):t}}}),y=(o("ea9d"),Object(r.a)(b,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.show?o("div",{staticClass:"zjapp"},[o("div",{staticClass:"content",style:{top:e.contentTop+"px"},on:{click:function(t){return t.target!==t.currentTarget?null:e.closePopup(t)}}},[o("transition",{attrs:{name:"slide-down"},on:{afterLeave:e.onClose}},[e.showList?o("div",{staticClass:"list",style:{height:e.listHeight+"px"}},[o("app-search-bar",{ref:"app-search-bar-checkitem-select",staticClass:"bg-white",attrs:{"history-key":"home-tree-search-history-key","simple-mode":!0},on:{changeSearchStatus:e.setSearchMode},model:{value:e.searchKeyword,callback:function(t){e.searchKeyword=t},expression:"searchKeyword"}}),!e.isSearching||e.searchKeyword?o("tree",{ref:"slidebox",staticClass:"scroll-view",attrs:{"is-right":!1,accordion:!0,list:e.options,select:e.selected,keyword:e.searchKeyword,type:"check"},on:{onSelect:e.select},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.item;return o("div",{staticClass:"tree-node"},[o("span",{staticClass:"main-name",domProps:{innerHTML:e._s(e.keywordFilter(i))}}),i.is_expired&&0!==i.is_expired?o("span",{staticClass:"is-expired"},[e._v("租期已过")]):e._e()])}}])}):e._e()],1):e._e()])],1)]):e._e()}),[],!1,null,"6acabb3c",null).exports),x=!1;x||(x=new(i.default.extend(y))({el:document.createElement("div")}),document.body.appendChild(x.$el));var k=x,T=o("e2a7"),S={name:"DropDownSelectPeojectDialog",components:{Tree:h.default,appSearchBar:u.default},mixins:[s.a],data:function(){return{show:!1,showList:!1,isSearching:!1,contentTop:64,listHeight:475,searchKeyword:"",options:[],selected:{},backButtonEvent:null}},watch:{show:function(e){var t=this;e&&this.$nextTick((function(){t.showList=!0}))}},mounted:function(){},methods:{scrollToSelect:function(){var e=this.$refs.slidebox&&this.$refs.slidebox.$el,t=e&&e.querySelector(".is-checked");console.log("开始执行自动滚动",t,e),t&&(console.log("执行自动滚动",t),t.scrollIntoViewIfNeeded(!0))},openPopup:function(e){var t=this;this.value=!0,this.show=!0,this.options=e.options,this.selected=e.selected,this.el=e.el;var o=document.querySelector(".layout-main .layout-header");if(this.contentTop=o.offsetHeight,this.el){var i=this.el.getBoundingClientRect();this.contentTop=i.bottom}this.listHeight=window.innerHeight-this.contentTop-50>475?475:window.innerHeight-this.contentTop-50,this.selected&&this.selected.id&&setTimeout((function(){t.scrollToSelect()}),200),this.backButtonEvent||(this.backButtonEvent=Object(a.a)(this.closePopup))},closePopup:function(){this.value=!1,this.showList=!1,this.searchKeyword="",this.backButtonEvent&&(Object(a.c)(this.backButtonEvent),this.backButtonEvent=null)},onClose:function(){this.show=!1,this.setSearchMode(!1),this.$refs["app-search-bar-tree-select"]&&this.$refs["app-search-bar-tree-select"].cancelSearch()},select:function(e,t){if(console.log("当前选中节点",e),!("company"===e.label&&"0"===e.company_end||"project"===e.label&&"0"===e.is_end)){if("group"===e.label&&"0"===e.is_auth)return T.a.alert("您还没有集团级报表权限哦~");if("company"===e.label&&"0"===e.is_auth)return T.a.alert("您还没有公司级报表权限哦~");if("project"===e.label&&"0"===e.is_auth)return T.a.alert("您还没有项目级报表权限哦~");this.$refs["app-search-bar-checkitem-select"]&&this.$refs["app-search-bar-checkitem-select"].saveHistory(),this.selected=e,this.$emit("select",e,t),this.closePopup()}},setSearchMode:function(e){this.isSearching=e},keywordFilter:function(e){return this.searchKeyword?e.replace(new RegExp(this.searchKeyword,"gm"),'<span class="color-blue">'+this.searchKeyword+"</span>"):e}}},A=(o("8093"),Object(r.a)(S,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.show?o("div",{staticClass:"content",style:{top:e.contentTop+"px"},on:{click:function(t){return t.target!==t.currentTarget?null:e.closePopup(t)}}},[o("transition",{attrs:{name:"slide-down"},on:{afterLeave:e.onClose}},[e.showList?o("div",{staticClass:"list",style:{height:e.listHeight+"px"}},[o("app-search-bar",{ref:"app-search-bar-checkitem-select",staticClass:"bg-white",attrs:{"history-key":"follow-tree-search-history-key","simple-mode":!0},on:{changeSearchStatus:e.setSearchMode},model:{value:e.searchKeyword,callback:function(t){e.searchKeyword=t},expression:"searchKeyword"}}),!e.isSearching||e.searchKeyword?o("tree",{ref:"slidebox",staticClass:"scroll-view",attrs:{type:"check","is-right":!1,accordion:"","expand-on-click-node":!1,list:e.options,select:e.selected,keyword:e.searchKeyword},on:{onSelect:e.select},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.item;return o("div",{staticClass:"tree-node"},[o("span",{staticClass:"main-name",domProps:{innerHTML:e._s(e.keywordFilter(i.name))}})])}}])}):e._e()],1):e._e()])],1):e._e()}),[],!1,null,"3d35ea87",null).exports),j=!1;j||(j=new(i.default.extend(A))({el:document.createElement("div")}),document.body.appendChild(j.$el));var C=j,E={name:"DropDownSelectSingle",props:{options:{type:Array,default:function(){return[]}},selected:{type:Object,default:function(){}},type:{type:String,default:"single",validator:function(e){return-1!==["single","follow","home","report"].indexOf(e)}}},data:function(){return{single:p,follow:v,home:k,report:C,dialog:null}},computed:{show:function(){return this.dialog&&this.dialog.showList}},created:function(){var e=this;this.dialog=this[this.type],this.dialog.$on("select",(function(t,o){e.$emit("select",t,o)}))},destroyed:function(){this.dialog.$off("select")},methods:{toggle:function(e){this.dialog.show?this.dialog.closePopup():this.dialog.openPopup({el:e&&e.target,options:this.options,selected:this.selected})},closePopup:function(){this.dialog.closePopup()}}},B=(o("ca66"),Object(r.a)(E,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"drop-down-select-single",on:{click:e.toggle}},[e.$slots.default?e._t("default"):o("div",{staticClass:"name"},[e._v("\n    "+e._s(e.selected.name)+"\n    "),o("i",{class:{arrow:!0,"black-arrow":"home"!==e.type,active:e.show}})])],2)}),[],!1,null,"5e4fcff0",null));t.a=B.exports},"47e3":function(e,t,o){var i=o("c3c3");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,o("85cb").default)("5a059545",i,!0,{sourceMap:!1,shadowMode:!1})},"582f":function(e,t,o){var i=o("1168");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,o("85cb").default)("894716b4",i,!0,{sourceMap:!1,shadowMode:!1})},"61b3":function(e,t,o){"use strict";o("0f4e")},6429:function(e,t,o){var i=o("d257");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,o("85cb").default)("f66ad3be",i,!0,{sourceMap:!1,shadowMode:!1})},"6dba":function(e,t){e.exports="data:image/png;base64,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"},"774b":function(e,t,o){"use strict";o.r(t);var i=o("d18d").a,n=(o("b225"),o("17cc")),s=Object(n.a)(i,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"scroll-warp",staticClass:"scroll-warp",class:{"scroll-warp-pulling":e.pulling,"scroll-warp-complete":!e.hasNext&&!e.isEmpty,"scroll-warp-empty":e.isEmpty},style:{"padding-bottom":e.numberKeyboardCoverHeight+"px"},on:{scroll:e.onScroll,touchstart:e.onTouchstart,touchmove:e.onTouchmove,touchend:e.onTouchend}},[e.allowPullDown?o("div",{staticClass:"pull-refresh-warp",style:{height:e.pullDist+"px"}},[o("div",{staticClass:"pull-refresh"},[o("div",{staticClass:"animation-refresher",class:{refreshing:e.refreshing}}),e.updateTime?o("p",{staticClass:"pull-refresh-date"},[e._v("最后成功同步："+e._s(e.updateTime))]):e._e()])]):e._e(),e._t("default"),e.loading?o("div",{staticClass:"page-loading"},[o("svg",{staticClass:"svg-loading",attrs:{viewBox:"0 0 80 80"}},[o("circle",{attrs:{cx:"40",cy:"40",r:"36"}})])]):e._e(),e.hasNext||e.isEmpty?e._e():[e.$slots.end?e._t("end"):e._e(),!e.$slots.end&&e.endText?o("div",{staticClass:"end-text"},[e._v("\n      "+e._s(e.endText)+"\n    ")]):e._e()]],2)}),[],!1,null,"2b1a346c",null);t.default=s.exports},8093:function(e,t,o){"use strict";o("47e3")},"8dd8":function(e,t,o){"use strict";o("6429")},"990d":function(e,t,o){"use strict";(function(e){o("6d57"),o("cc57"),o("9dd9"),o("163d");var i=o("ceda");t.a={name:"Tree",components:{TreeNode:i.a},props:{list:{type:Array,default:function(){return[]}},select:{type:Object,default:function(){return{}}},keyword:{type:String,default:""},isAllOpen:{type:Boolean,default:!1},type:{type:String,default:"tree"},openLevel:{type:Number,default:0},accordion:{type:Boolean,default:!1},expandOnClickNode:{type:Boolean,default:!0},emptyLoadingStatusText:{type:String,default:"没有检查项"}},data:function(){return{isTree:!0,treeList:[]}},watch:{keyword:function(e){var t=this;this.$nextTick((function(){t.treeList=e?t.fitlerByKeyword(t.deepClone(t.list),e):t.deepClone(t.list)}))},list:function(e){e&&this.initData()}},created:function(){this.isTree=!0,this.initData()},methods:{initData:function(){if(e.isEmpty(this.list))return this.treeList=[];this.keyword?this.treeList=this.fitlerByKeyword(this.deepClone(this.list),this.keyword):this.treeList=this.deepClone(this.list)},deepClone:function(e){return JSON.parse(JSON.stringify(e))},onSelect:function(e,t){this.$emit("onSelect",e,t)},fitlerByKeyword:function(t,o){var i=this,n=[];return e.each(t,(function(t){if(new RegExp(o,"gm").test(t.name))t.isOpen=!0,n.push(t);else if(!e.isEmpty(t.children)){var s=i.fitlerByKeyword(t.children,o);e.isEmpty(s)||(t.isOpen=!0,t.children=s,n.push(t))}})),n},setVisibleLevel:function(e){!function t(o){o.forEach((function(o){o.level&&(o.isOpen=o.level<e),o.$children&&t(o.$children)}))}(this.$refs.treeNode)}}}}).call(this,o("391c"))},"9d55":function(e,t,o){(e.exports=o("690e")(!1)).push([e.i,'.zjapp .scroll-warp[data-v-2b1a346c]{flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.zjapp .scroll-warp-pulling[data-v-2b1a346c]{overflow:hidden}.zjapp .scroll-warp-complete[data-v-2b1a346c]:after{content:"";display:block;height:100px}.zjapp .scroll-warp-empty[data-v-2b1a346c]{display:flex;flex-direction:column}.zjapp .pull-refresh-warp[data-v-2b1a346c]{position:relative;height:0;overflow:hidden}.zjapp .pull-refresh[data-v-2b1a346c]{position:absolute;left:0;bottom:0;height:70px;width:100%;padding:6px;text-align:center}.zjapp .pull-refresh-date[data-v-2b1a346c]{margin-top:4px;height:16px;line-height:16px;font-size:12px;color:#bcbcbc}.zjapp .page-loading[data-v-2b1a346c]{padding:10px;text-align:center}.zjapp .end-text[data-v-2b1a346c]{color:#c8c8c8;background:#f4f4f4;position:relative;line-height:76px;height:76px;text-align:center}.zjapp .end-text[data-v-2b1a346c]:after,.zjapp .end-text[data-v-2b1a346c]:before{content:"";position:absolute;width:48px;height:1px;background:#e4e4e4;top:50%;margin-top:-1px}.zjapp .end-text[data-v-2b1a346c]:after{left:50%;transform:translateX(-92px)}.zjapp .end-text[data-v-2b1a346c]:before{right:50%;transform:translateX(90px)}.zjapp .end-slot[data-v-2b1a346c]{padding:30px;line-height:18px;text-align:center;color:#c8c8c8}',""])},a1d4:function(e,t,o){"use strict";o.r(t);var i=o("990d").a,n=o("17cc"),s=Object(n.a)(i,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"tree-list"},[e._l(e.treeList,(function(t){return o("tree-node",{key:t.id,ref:"treeNode",refInFor:!0,attrs:{item:t,type:e.type,select:e.select,open:e.isAllOpen||!!e.keyword,"default-open-level":e.openLevel},on:{onSelect:e.onSelect}})})),o("loading-status",{attrs:{"is-empty":!e.treeList.length,"empty-text":e.emptyLoadingStatusText}},[e.keyword?o("template",{slot:"empty-text"},[e._v("\n      未搜索到包含\n      "),o("span",{staticClass:"color-blue"},[e._v(e._s(e.keyword))]),e._v("\n      的结果\n    ")]):e._e()],2)],2)}),[],!1,null,null,null);t.default=s.exports},a7b1:function(e,t,o){var i=o("e5c7");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,o("85cb").default)("ceb05eda",i,!0,{sourceMap:!1,shadowMode:!1})},a859:function(e,t,o){(e.exports=o("690e")(!1)).push([e.i,".zjapp .tree-node[data-v-6acabb3c]{flex:1;display:flex;align-items:center;overflow:hidden}.zjapp .tree-node .main-name[data-v-6acabb3c]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.zjapp .tree-node .is-expired[data-v-6acabb3c]{min-width:60px;margin-left:12px;font-size:12px;text-align:center;border-radius:4px;color:#fff;background-color:#ff3c46}.zjapp .content[data-v-6acabb3c]{position:fixed;width:100%;bottom:0;background-color:rgba(0,0,0,.4);overflow:hidden}.zjapp .list[data-v-6acabb3c]{position:absolute;top:0;left:0;width:100%;overflow:auto;background-color:#fff;display:flex;flex-direction:column}.zjapp .list .scroll-view[data-v-6acabb3c]{flex:1;overflow-y:auto}[data-v-6acabb3c] .icon-qualified{width:34px;height:34px;line-height:34px;text-align:center;color:#4275e8}",""])},a90f:function(e,t,o){"use strict";o("a7b1")},b225:function(e,t,o){"use strict";o("ef48")},c3c3:function(e,t,o){(e.exports=o("690e")(!1)).push([e.i,".zjapp .tree-node[data-v-3d35ea87]{flex:1;display:flex;align-items:center}.zjapp .tree-node .main-name[data-v-3d35ea87]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.zjapp .content[data-v-3d35ea87]{position:fixed;width:100%;bottom:0;background-color:rgba(0,0,0,.4);overflow:hidden}.zjapp .list[data-v-3d35ea87]{position:absolute;top:0;left:0;width:100%;overflow:auto;background-color:#fff;display:flex;flex-direction:column}.zjapp .list .scroll-view[data-v-3d35ea87]{flex:1;overflow-y:auto}[data-v-3d35ea87] .icon-qualified{width:34px;height:34px;line-height:34px;text-align:center;color:#4275e8}",""])},ca66:function(e,t,o){"use strict";o("582f")},cb87:function(e,t,o){"use strict";(function(e){o("163d"),o("cc57");var i=o("07d2");t.a={name:"TreeNode",components:{Item:i.default,NodeContent:{props:{item:{required:!0}},render:function(e){var t=this.$parent.$parent.tree,o=this.item;return t.$scopedSlots.default?t.$scopedSlots.default({item:o}):e("span",{class:"main-name"},[o.name])}}},props:{level:{type:Number,default:0},item:{type:Object,default:function(){return{}}},pitem:{type:Object,default:function(){return{}}},select:{type:Object,default:function(){return{}}},open:{type:Boolean,default:!1},isRight:{type:Boolean,default:!0},type:{type:String,default:"tree"},defaultOpenLevel:{type:Number,default:0}},data:function(){return{isOpen:!1,tree:null}},computed:{},watch:{isOpen:function(e){e&&this.$parent&&!1===this.$parent.isOpen&&(this.$parent.isOpen=!0)}},created:function(){var t=this,o=this.$parent;o.isTree?this.tree=o:this.tree=o.tree,this.isOpen=this.item.id===this.select.id||(this.open||this.level<this.defaultOpenLevel),this.tree.accordion&&this.$on("tree-node-expand",(function(o){if(e.isArray(t.$children))for(var i=1;i<t.$children.length;i++)t.$children[i].item!==o&&(t.$children[i].isOpen=!1)}))},methods:{toggleFold:function(e,t){e&&e.stopPropagation(),this.isOpen=!this.isOpen,this.$parent.$emit("tree-node-expand",this.item,this.isOpen)},onSelect:function(e,t){this.tree.expandOnClickNode&&e.children&&e.children.length?this.toggleFold():this.$emit("onSelect",e,t)},getShowIconName:function(e){if(e.icon){var t=e.icon,o=t.show,i=t.name;return o?i:""}return"tree"===this.type?"arrow-right":"check"===this.type&&this.item.id===this.select.id?"qualified":""}}}}).call(this,o("391c"))},ceda:function(e,t,o){"use strict";var i=o("cb87").a,n=(o("8dd8"),o("17cc")),s=Object(n.a)(i,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"follow-tree"},[o("item",{class:{"bg-item-gray":e.level>1,"is-checked":e.item.id===e.select.id},attrs:{border:"bottom","icon-right":e.getShowIconName(e.item)},on:{click:function(t){e.onSelect(e.item,e.pitem)}}},[o("div",{staticClass:"item-text",style:"margin-left:"+5*e.level+"px"},[e.item.children&&e.item.children.length?o("div",{staticClass:"click-block",on:{click:function(t){e.toggleFold(t,e.item)}}}):e._e(),o("icon",{staticClass:"triangle",class:{"triangle-down":e.isOpen,translate:!e.item.children||!e.item.children.length},attrs:{name:"triangle-right"},on:{click:function(t){e.toggleFold(t,e.item)}}}),o("node-content",{attrs:{item:e.item}})],1)]),e._l(e.item.children,(function(t){return o("tree-node",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],key:t.id,attrs:{item:t,pitem:e.item,level:e.level+1,select:e.select,open:e.open,type:e.type,"default-open-level":e.defaultOpenLevel},on:{onSelect:e.onSelect}})}))],2)}),[],!1,null,"dcfca63a",null);t.a=s.exports},d18d:function(e,t,o){"use strict";(function(e){o("2b45");var i,n=o("4360"),s=o("48f4"),a=o("162a"),l=o("e2a7"),r=o("a500"),c=o("6f9e"),d={};t.a={name:"Scroller",props:{buildingId:{type:String,default:""},hasNext:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},isSync:{type:Boolean,default:!0},endText:{type:String,default:""},memoryScrollTop:{type:Boolean,default:!0},keepScrollTop:{type:Boolean},hasPullDown:{type:Boolean,default:!0},onPullDown:{type:Function}},data:function(){return{pullDist:0,refreshing:!1,pulling:!1,loading:!1,scrollTop:0,isCurrKeyboard:!1,gapBottom:0}},computed:{allowPullDown:function(){return this.hasPullDown&&(!!this.$listeners.pullDown||!!this.onPullDown)},updateTime:function(){return n.a.state.global.businessDownloadTime},numberKeyboardCoverHeight:function(){return n.a.state.global.isNumberInputOpen?n.a.state.global.numberKeyboardHeight-this.gapBottom:0}},mounted:function(){var e=this;c.a.$on("numberKeyboardOpen",this.onNumberKeyboardOpen),this.$nextTick((function(){var t=e.$refs["scroll-warp"]&&e.$refs["scroll-warp"].getBoundingClientRect&&e.$refs["scroll-warp"].getBoundingClientRect();t&&(e.gapBottom=document.documentElement.clientHeight-t.bottom),e.$el&&e.$el.addEventListener("focus",(function(t){var o=t&&t.target,i=o&&o.tagName&&o.tagName.toLowerCase();if("input"===i||"textarea"===i){window.addEventListener("resize",(function t(){var i=o.getBoundingClientRect(),n=e.$el.getBoundingClientRect(),s=i.bottom-n.bottom;s>0&&e.scrollBy(s),window.removeEventListener("resize",t,!1)}),!1)}}),!0)}))},destroyed:function(){c.a.$off("numberKeyboardOpen",this.onNumberKeyboardOpen)},activated:function(){var e=this.keepScrollTop||this.$router.isBack&&this.memoryScrollTop;this.scrollTop&&e&&(this.$refs["scroll-warp"].scrollTop=this.scrollTop)},deactivated:function(){this.memoryScrollTop&&(this.scrollTop=this.$refs["scroll-warp"].scrollTop)},methods:{onScroll:function(e){var t=this,o=this.$refs["scroll-warp"].scrollTop,i=this.$refs["scroll-warp"].scrollHeight;if(o+this.$refs["scroll-warp"].clientHeight>=i-5&&!this.loading&&this.hasNext){this.loading=!0;var n=this.$listeners.loadNext();n&&n.then&&"function"==typeof n.then?n.then((function(){t.loading=!1})):this.loading=!1}this.$emit("scroll",e)},getTouchDiretion:function(e){if(!(d&&e&&e.touches&&e.touches[0]))return"";var t=e.touches[0].clientX,o=e.touches[0].clientY;return Math.abs(o-d.y)>Math.abs(t-d.x)&&Math.abs(o-d.y)>=3?o>d.y?"down":"up":""},onTouchstart:function(e){this.allowPullDown&&e.touches&&1===e.touches.length&&(d={x:e.touches[0].clientX,y:e.touches[0].clientY,scrollTop:this.$refs["scroll-warp"].scrollTop,pullDist:this.pullDist})},onTouchmove:function(e){if(this.allowPullDown&&e.touches&&1===e.touches.length){var t=this.$refs["scroll-warp"].scrollTop,o=e.touches[0].clientY,i=o-d.y,n=this.getTouchDiretion(e);"down"===n?!this.refreshing&&t<=0?(this.pulling=!0,this.pullDist=(i-d.scrollTop)/2,e.preventDefault()):this.pulling=!1:"up"===n?this.pullDist>0&&(this.pullDist=d.pullDist-(d.y-o),e.preventDefault()):this.pullDist=d.pullDist}},onTouchend:function(){var e=this;this.allowPullDown&&(d={},this.pulling=!1,this.pullDist>=70&&this.isSync?this.refreshing?this.makePullTo(70):this.makePullTo(70).then((function(){if(e.refreshing=!0,e.onPullDown){var t=e.onPullDown();t&&t.then&&"function"==typeof t?t.finally((function(){e.refreshing=!1,e.makePullTo(0)})):(e.refreshing=!1,e.makePullTo(0))}else e.dataSync().then((function(){e.refreshing=!1,e.makePullTo(0),e.$emit("pullDown")})).catch((function(){e.refreshing=!1,e.makePullTo(0),e.$emit("pullDown")}))})):(this.refreshing=!1,this.makePullTo(0)))},makePullTo:function(e){var t=this,o=this.pullDist,i=e,n=i-o,s=o;return o===i?Promise.resolve():new Promise((function(e){!function a(){window.requestAnimationFrame((function(){s+=n/6,t.pullDist=s,o<i&&s<i||o>i&&s>i?a():(t.pullDist=i,t.refreshing=!1,e())}))}()}))},dataSync:function(){var e,t=s.default.getCurrentModuleCode(),o=s.default.getCurrentRoute(),i=o.meta&&o.meta.isTodo;if(s.default.isModuleNeedBuilding(t)&&!i){if(!this.buildingId)return new Promise((function(e){setTimeout((function(){e()}),500)}));e=this.buildingId}return r.a.addTrack("公共-手动下拉刷新","",""),a.a.beginManualUpdate(),s.default.checkSync(e).then((function(e){return a.a.endManualUpdate(),e})).catch((function(e){$log.error("下拉刷新错误",e),e&&"Error: Network Error"===e.toString()?l.a.alert("当前网络无法同步数据"):l.a.alert(e),a.a.endManualUpdate()}))},getScrollHeight:function(){return this.$refs["scroll-warp"].offsetHeight},getScrollTop:function(){return this.$refs["scroll-warp"].scrollTop},setScrollTop:function(e){this.$refs["scroll-warp"].scrollTop=e},scrollBy:function(e){var t=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=this.getScrollTop(),s=n+e,a=Math.round(o/16.7),l=e/a,r=n,c=i=+new Date;return n===s?Promise.resolve():new Promise((function(e){!function o(){window.requestAnimationFrame((function(){c===i&&(r+=l,t.$refs["scroll-warp"].scrollTop=r,n<s&&r<s||n>s&&r>s?o():(t.$refs["scroll-warp"].scrollTop=s,e()))}))}()}))},scrollTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,o=this.getScrollTop(),i=e-o;return this.scrollBy(i,t)},scrollToEle:function(e){var t=e.keyboardHeight||232,o=(e=e.$el?e.$el:e).getBoundingClientRect(),i=this.$refs["scroll-warp"].getBoundingClientRect();if(o&&i){var s=document.documentElement.clientHeight-(n.a.state.global.isNumberInputOpen?t:0),a=i.bottom<s?i.bottom:s,l=i.top-o.top,r=o.bottom-a;l>0?this.scrollBy(-l-10):r>0&&this.scrollBy(r+10)}},isCurrent:function(t,o){var i=this;t.length&&e.each(t,(function(e){e._uid===o?i.isCurrKeyboard=!0:i.isCurrent(e.$children,o)}))},onNumberKeyboardOpen:function(e){this.isCurrKeyboard=!1,this.isCurrent(this.$children,e._uid),this.isCurrKeyboard&&this.scrollToEle(e)}}}}).call(this,o("391c"))},d257:function(e,t,o){(e.exports=o("690e")(!1)).push([e.i,".zjapp .bg-item-gray[data-v-dcfca63a]{background-color:#fafafa}.zjapp .click-block[data-v-dcfca63a]{position:absolute;left:-10%;top:0;height:100%;width:70px}.zjapp .follow-tree .icon[data-v-dcfca63a]{font-size:12px}.zjapp .follow-tree .triangle[data-v-dcfca63a]{margin-right:8px;color:#c8c8c8;transition:all .3s;transform:rotate(0deg)}.zjapp .follow-tree .triangle.translate[data-v-dcfca63a]{color:transparent}.zjapp .follow-tree .triangle-down[data-v-dcfca63a]{transform:rotate(90deg)}.zjapp .follow-tree .item-text[data-v-dcfca63a]{position:relative;width:100%;display:flex;align-items:center;overflow:hidden}.zjapp .follow-tree .main-name[data-v-dcfca63a]{flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}",""])},e5c7:function(e,t,o){(e.exports=o("690e")(!1)).push([e.i,".zjapp .tree-node[data-v-dff6fcc0]{flex:1;display:flex;align-items:center}.zjapp .tree-node .main-name[data-v-dff6fcc0]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.zjapp .tree-node .xingxing[data-v-dff6fcc0]{font-size:14px;position:absolute;left:0;color:#4275e8;margin-right:6px}.zjapp .tree-node .xingxing.translate[data-v-dff6fcc0]{color:transparent}.zjapp .tree-node .count[data-v-dff6fcc0]{padding-left:6px;color:#999;font-size:14px}.zjapp .content[data-v-dff6fcc0]{position:fixed;width:100%;bottom:0;background-color:rgba(0,0,0,.4);overflow:hidden}.zjapp .list[data-v-dff6fcc0]{position:absolute;top:0;left:0;width:100%;overflow:auto;background-color:#fff;display:flex;flex-direction:column}.zjapp .list .scroll-view[data-v-dff6fcc0]{flex:1;overflow-y:auto}[data-v-dff6fcc0] .icon-qualified{width:34px;height:34px;line-height:34px;text-align:center;color:#4275e8}",""])},ea9d:function(e,t,o){"use strict";o("fce1")},ef48:function(e,t,o){var i=o("9d55");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,o("85cb").default)("a1a65c0c",i,!0,{sourceMap:!1,shadowMode:!1})},f943:function(e,t,o){(e.exports=o("690e")(!1)).push([e.i,".zjapp .content[data-v-d6c06a4c]{position:fixed;width:100%;bottom:0;background-color:rgba(0,0,0,.4);overflow:hidden}.zjapp .list[data-v-d6c06a4c]{position:absolute;top:0;left:0;width:100%;overflow:auto;background-color:#fff}[data-v-d6c06a4c] .icon-qualified{width:34px;height:34px;line-height:34px;text-align:center;color:#4275e8}",""])},fce1:function(e,t,o){var i=o("a859");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,o("85cb").default)("2598fc20",i,!0,{sourceMap:!1,shadowMode:!1})}}]);