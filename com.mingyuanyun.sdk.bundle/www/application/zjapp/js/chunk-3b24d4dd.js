(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-3b24d4dd"],{"21d8":function(e,t,i){"use strict";i("23c4")},"23c4":function(e,t,i){var n=i("44ed");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,i("85cb").default)("cdb832ae",n,!0,{sourceMap:!1,shadowMode:!1})},"44ed":function(e,t,i){(e.exports=i("690e")(!1)).push([e.i,".zjapp .bg-item-gray[data-v-c02f2c0e]{background-color:#fafafa}.zjapp .click-block[data-v-c02f2c0e]{position:absolute;left:-10%;top:0;height:100%;width:70px}.zjapp .follow-tree .icon[data-v-c02f2c0e]{font-size:12px}.zjapp .follow-tree .triangle[data-v-c02f2c0e]{margin-right:8px;color:#c8c8c8;transition:all .3s;transform:rotate(0deg)}.zjapp .follow-tree .triangle.translate[data-v-c02f2c0e]{color:transparent}.zjapp .follow-tree .triangle-down[data-v-c02f2c0e]{transform:rotate(90deg)}.zjapp .follow-tree .item-text[data-v-c02f2c0e]{position:relative;width:100%;display:flex;align-items:center;overflow:hidden}.zjapp .follow-tree .main-name[data-v-c02f2c0e]{flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}",""])},"990d":function(e,t,i){"use strict";(function(e){i("cc57"),i("9dd9"),i("163d");var n=i("ceda");t.a={components:{TreeNode:n.a},props:{list:{type:Array,default:function(){return[]}},select:{type:Object,default:function(){return{}}},keyword:{type:String,default:""},isAllOpen:{type:Boolean,default:!1},type:{type:String,default:"tree"},openLevel:{type:Number,default:0},accordion:{type:Boolean,default:!1},expandOnClickNode:{type:Boolean,default:!0},emptyLoadingStatusText:{type:String,default:"没有检查项"}},data:function(){return{isTree:!0,treeList:[]}},watch:{keyword:function(e){var t=this;this.$nextTick((function(){t.treeList=e?t.fitlerByKeyword(t.deepClone(t.list),e):t.deepClone(t.list)}))},list:function(e){e&&this.initData()}},created:function(){this.isTree=!0,this.initData()},methods:{initData:function(){if(e.isEmpty(this.list))return this.treeList=[];this.keyword?this.treeList=this.fitlerByKeyword(this.deepClone(this.list),this.keyword):this.treeList=this.deepClone(this.list)},deepClone:function(e){return JSON.parse(JSON.stringify(e))},onSelect:function(e,t){this.$emit("onSelect",e,t)},fitlerByKeyword:function(t,i){var n=this,l=[];return e.each(t,(function(t){if(new RegExp(i,"gm").test(t.name))t.isOpen=!0,l.push(t);else if(!e.isEmpty(t.children)){var o=n.fitlerByKeyword(t.children,i);e.isEmpty(o)||(t.isOpen=!0,t.children=o,l.push(t))}})),l}}}}).call(this,i("391c"))},a1d4:function(e,t,i){"use strict";i.r(t);var n=i("990d").a,l=i("17cc"),o=Object(l.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"tree-list"},[e._l(e.treeList,(function(t){return i("tree-node",{key:t.id,attrs:{item:t,type:e.type,select:e.select,open:e.isAllOpen||!!e.keyword,"default-open-level":e.openLevel},on:{onSelect:e.onSelect}})})),i("loading-status",{attrs:{"is-empty":!e.treeList.length,"empty-text":e.emptyLoadingStatusText}},[e.keyword?i("template",{slot:"empty-text"},[e._v("\n      未搜索到包含\n      "),i("span",{staticClass:"color-blue"},[e._v(e._s(e.keyword))]),e._v("\n      的结果\n    ")]):e._e()],2)],2)}),[],!1,null,null,null);t.default=o.exports},cb87:function(e,t,i){"use strict";(function(e){i("163d"),i("cc57");var n=i("07d2");t.a={name:"TreeNode",components:{Item:n.default,NodeContent:{props:{item:{required:!0}},render:function(e){var t=this.$parent.$parent.tree,i=this.item;return t.$scopedSlots.default?t.$scopedSlots.default({item:i}):e("span",{class:"main-name"},[i.name])}}},props:{level:{type:Number,default:0},item:{type:Object,default:function(){return{}}},pitem:{type:Object,default:function(){return{}}},select:{type:Object,default:function(){return{}}},open:{type:Boolean,default:!1},isRight:{type:Boolean,default:!0},type:{type:String,default:"tree"},defaultOpenLevel:{type:Number,default:0}},data:function(){return{isOpen:!1,tree:null}},computed:{},watch:{isOpen:function(e){e&&this.$parent&&!1===this.$parent.isOpen&&(this.$parent.isOpen=!0)}},created:function(){var t=this,i=this.$parent;i.isTree?this.tree=i:this.tree=i.tree,this.isOpen=this.item.id===this.select.id||(this.open||this.level<this.defaultOpenLevel),this.tree.accordion&&this.$on("tree-node-expand",(function(i){if(e.isArray(t.$children))for(var n=1;n<t.$children.length;n++)t.$children[n].item!==i&&(t.$children[n].isOpen=!1)}))},methods:{toggleFold:function(e,t){e&&e.stopPropagation(),this.isOpen=!this.isOpen,this.$parent.$emit("tree-node-expand",this.item)},onSelect:function(e,t){this.tree.expandOnClickNode&&e.children&&e.children.length?this.toggleFold():this.$emit("onSelect",e,t)},getShowIconName:function(e){if(e.icon){var t=e.icon,i=t.show,n=t.name;return i?n:""}return"tree"===this.type?"arrow-right":"check"===this.type&&this.item.id===this.select.id?"qualified":""}}}}).call(this,i("391c"))},ceda:function(e,t,i){"use strict";var n=i("cb87").a,l=(i("21d8"),i("17cc")),o=Object(l.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"follow-tree"},[i("item",{class:{"bg-item-gray":e.level>1,"is-checked":e.item.id===e.select.id},attrs:{border:"bottom","icon-right":e.getShowIconName(e.item)},on:{click:function(t){e.onSelect(e.item,e.pitem)}}},[i("div",{staticClass:"item-text",style:"margin-left:"+5*e.level+"px"},[e.item.children&&e.item.children.length?i("div",{staticClass:"click-block",on:{click:function(t){e.toggleFold(t,e.item)}}}):e._e(),i("icon",{staticClass:"triangle",class:{"triangle-down":e.isOpen,translate:!e.item.children||!e.item.children.length},attrs:{name:"triangle-right"},on:{click:function(t){e.toggleFold(t,e.item)}}}),i("node-content",{attrs:{item:e.item}})],1)]),e._l(e.item.children,(function(t){return i("tree-node",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],key:t.id,attrs:{item:t,pitem:e.item,level:e.level+1,select:e.select,open:e.open,type:e.type,"default-open-level":e.defaultOpenLevel},on:{onSelect:e.onSelect}})}))],2)}),[],!1,null,"c02f2c0e",null);t.a=o.exports}}]);