(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-4787a6ba"],{"08d4":function(e,t,n){"use strict";n("3880")},"0bb6":function(e,t,n){"use strict";n("5ab2"),n("e10e"),n("309f"),n("0b53"),n("06a2"),n("ec25"),n("cc57"),n("2b45"),n("6d57");var i=n("28f8"),a=(n("163d"),n("fc9f")),o=function(e){var t="select si.*,\n\t\tsi.checkitem_id as item_id, si.checkitem_name as item_name, si.checkitem_parent_id as parent_id,\n\t\tsi.checkitem_name as name, si.checkitem_full_name as full_name,\n\t\t(select sum(cp.redline_deduction) from checkquality_problem cp where batch_type = '专项巡检' and cp.biz_id = si.id and cp.status != '草稿' and cp.status != '已关闭' ) as redline_deduction, \n\t\t(select count(*) from checkquality_problem cp where cp.biz_id = si.id ) as problemNum,\n\t\t(select sum(deduction) from checkquality_problem cp1 where batch_type = '专项巡检' and cp1.biz_id = si.id and cp1.status != '草稿' and cp1.status != '已关闭') as deduction \n\t\tfrom special_inspect si \n\t\twhere si.batch_id = '".concat(e,"' order by si.checkitem_code");return a.a.query(t)},r=function(e){e='"'.concat(e.join('", "'),'"');var t="select d.checkitem_id as parent_id, d.name, d.id as item_id from special_inspect_checkitem_desc as d where checkitem_id in (".concat(e,") order by sort");return a.a.query(t)},c=function(e){var t="select * from batch where id = '".concat(e,"'");return a.a.queryOne(t)},s=(n("8693"),n("7bac")),d=n("7cb8");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return r=e.done,e},e:function(e){c=!0,o=e},f:function(){try{r||null==n.return||n.return()}finally{if(c)throw o}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}t.a={getSpecialInspectCheckItem:function(e){var t=this;return o(e).then((function(n){return s.a.getUserKey("special_inspect_template_is_desc").then((function(e){if(e){var t=n.map((function(e){return e.item_id}));return r(t).then((function(e){return e=e.map((function(e){return u(u({},e),{},{isDesc:!0})})),n=n.concat(e)}))}return n})).then((function(n){return t.getPassrateMode(e).then((function(e){var i=function(e){var t="item_id",n="parent_id",i="children",a="descChildren",o={},r=[];for(var c in e)o[e[c][t]]=e[c];for(var s in o)0!==o[s][n]&&o[o[s][n]]?o[s].isDesc?(o[o[s][n]][a]||(o[o[s][n]][a]=[]),o[o[s][n]][a].push(o[s])):(o[o[s][n]][i]||(o[o[s][n]][i]=[]),o[o[s][n]][i].push(o[s])):r.push(o[s]);return r}(n);return 2===e?t.passrateMode2Calc(i):function e(t){var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=0,o=0,r=0,c=!1,s=0,l=0,u=p(t);try{for(u.s();!(n=u.n()).done;){var h=n.value;if(h.children&&h.children.length){var f=e(h.children,i+1);h.score=f.score,h.deductionLimit=f.deductionLimit,h.deduction=f.deduction,h.redline_deduction=f.redline_deduction,h.hasProblem=f.hasProblem,h.actualDeduction=f.actualDeduction;var b=0===h.score?0:(h.score-h.actualDeduction)/h.score;b=b||0,h.scoreRate=b}else{h.scoreRate=0;var m=Object(d.f)(h.checkitem_extension);h.deductionLimit=Number(m&&m.deduction_limit)||0,h.actualDeduction=Math.min(Math.max(h.deductionLimit||0,h.score),h.deduction)}h.score=Number(h.score)||0,h.deduction=Number(h.deduction)||0,h.redline_deduction=Number(h.redline_deduction)||0,h.weight=Number(h.weight)||0,h.level=i,("未设置"!==h.status||h.hasProblem)&&(r+=Math.min(h.score,h.deduction),l+=h.actualDeduction),(h.problemNum||"未设置"!==h.status||h.hasProblem)&&(a+=h.score,o+=h.deductionLimit,s+=h.redline_deduction,c=!0)}}catch(e){u.e(e)}finally{u.f()}return{score:a,deductionLimit:o,deduction:Object(d.e)(r,10),actualDeduction:l,hasProblem:c,redline_deduction:Object(d.e)(s,10)}}(i),i}))}))})).catch((function(e){$log.error("模板4-service-error => ",e)}))},getPassrateMode:function(e){return c(e).then((function(e){var t=Object(d.f)(e&&e.template_extension);return t&&t.mode4_passrate_mode||1}))},passrateMode2Calc:function(e){e&&e.length&&(!function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;(t||[]).forEach((function(t){if(t.level=n,t.weight=Number(t.weight),t.children&&t.children.length)e(t.children,n+1);else{if(t.isEnd=!0,0===n)return;var i=Object(d.f)(t.checkitem_extension);t.deductionLimit=i&&i.deduction_limit,Object(d.i)(t.deductionLimit)&&Object(d.i)(t.deduction)&&t.deduction>t.deductionLimit&&(t.deduction=t.deductionLimit),t.hasProblem=t.problemNum||"合格"===t.status}1===n&&(t.children&&t.children.length&&(t.deduction=0,t.redline_deduction=0,t.problemNum=0,t.hasProblem=!1,t.children.forEach((function(e){t.deduction+=e.deduction||0,t.redline_deduction+=e.redline_deduction||0,t.problemNum+=e.problemNum||0,e.hasProblem&&(t.hasProblem=!0)})),t.deduction=Object(d.e)(t.deduction,10),t.redline_deduction=Object(d.e)(t.redline_deduction,10)),t.deduction>t.score&&(t.deduction=t.score))}))}(e),e.forEach((function(e){if(e.children&&e.children.length){var t=e.children.filter((function(e){return e.hasProblem}));if(e.hasProblem=Boolean(t.length),e.hasProblem){var n=0;e.deduction=0,e.redline_deduction=0,e.problemNum=0,t.forEach((function(t){n+=t.score||0,e.deduction+=t.deduction||0,e.redline_deduction+=t.redline_deduction||0,e.problemNum+=t.problemNum||0})),e.score=Object(d.e)(e.score,10),e.deduction=Object(d.e)(e.deduction,10),e.redline_deduction=Object(d.e)(e.redline_deduction,10),e.scoreRate=Math.max(0===n?0:(n-e.deduction)/n,0)}}})))}}},"0ed4":function(e,t,n){var i=n("32b6");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("85cb").default)("56a4ad80",i,!0,{sourceMap:!1,shadowMode:!1})},"21c0":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA7pJREFUaAXtWEtPE1EU/s5YRDE+NuqGmGjagmCmJSx0Jz4WBlaauBETn0SJOxXfMT4WxGh0I4nxkRAXRhdufSx8/ASKEtpSNWokLojIAkyl9HimqOmUmencYQZd9CaTmXvmnPOd75x779w7QKVVMlDJQCUD/zIDFBQ4J6JbAL4j1yiqqnZQw+DHILACIcAJfREw8Q6Mlb+DfkXxzOYgCGhBOAV+dBYFb0Bs4v7wxiCwfCfAH1oWyLA5PiNYpnMzZD4IfCeAsS8dJdmfDpN5KyfCG3yI2eTCVwI80DgfhBMmhOJOAFXwlQCmJveCubY4ZvMzt3FfuMksm13PNwLMLSEJ/lTZcMjfueAbAfQPtwuB1WUJgLfzQENjeT13Gr4Q4KFwNTh/1hUkyyzJTV50petCyfOHjPmChuTDVchOrROcw7J0trnAK1bpQWjeY1BokBoHvha/UHkuS4CTdYsxiTrwVB1Acuf63/eIAC1UAXPQHROfKRCnAC0pyUghVJXE/J8ZimSyDnZSTpvGich6cdQja3qzjUrwYkJeiD1DtdZB9alhK0CHOcB3/2nwRrQMTSreiixfsgrekDkQwFI7o7mX8wo7THsCROXXdDuvfst5Xo+dS1sCpA89kAIdszOcMzlRF8WTz+3wbAkYBhRPX4fPX067QKzldJ5iQ9es301LbVehYiPui1yWGRXIdrgYx/RM6KZY5oxJZtFxRcCwk2X1qqwIM/f5Fk5nL9JuSPWPuvHjmoDhTHaSN+V2xI1jzzpEt2TYdLq1VyPATOiP3Jb1+aBbADU96kUsvZ+I2K2d4yQudVJwrO8+JBP7Sem7WfeJXiDWfkAleANTqQJ/guS30Rhy+b4/fV/umtZKevqpqi+lCvx1TjKU/G4aRry49EYgh7VewBxtcpBdrnrzRgBsnAH8bp5OaR4JwBOYM2NvSfFIgAKowBwR4OHmGvmkrXbOpoe3hFWF05+iqXoFRsbXFg4aikBl1Y3DfjbfUFavREGdAOfdDp/XIK1Dwjoo18sSXJuu+jAK2XhyEJcBIbyRwE/JR6n4a32PE3XbgPwV2RDqts5ZU14cPFSAw5YBED5Do33Qd8dLgi+oUyz1DHp7k5DbIxX5ZO0jv8ZS7iBUJ0A0UeLvuwR+Ektqo3KK6yW6IH8SrJvxjmLp+6hBVPZTXUJk1KTJ2ntT30VHeUsgf6DDyGUfiu/lspV6BFrQTfobcyAugA0V/hBfhrHx00Jkl/TSCFXvlJ9c31yaV9QqGahkoJKB/yADvwCwKfUADObhFgAAAABJRU5ErkJggg=="},"32b6":function(e,t,n){var i=n("5454");(e.exports=n("690e")(!1)).push([e.i,".zjapp .list-empty[data-v-b148a700]{display:flex;flex-direction:column;flex:1}.zjapp .app-btn-text[data-v-b148a700]{font-size:16px}.zjapp .icon-mark[data-v-b148a700]{display:inline-block;width:14px;height:14px;background:url("+i(n("21c0"))+') 0 no-repeat;background-size:16px 16px}.zjapp .desc-item-list[data-v-b148a700]{background-color:#fff;padding:10px 15px}.zjapp .desc-item[data-v-b148a700]{padding:10px;line-height:20px;color:#999;font-size:14px;border-radius:4px;background:#f4f4f4}.zjapp .desc-item[data-v-b148a700]:not(:first-child){margin-top:10px}.zjapp .tree-item[data-v-b148a700]{display:flex;padding-left:10px}.zjapp .tree-base[data-v-b148a700] {font-size:16px}.zjapp .tree-base[data-v-b148a700] .tree-main{margin-right:10px}.zjapp .tree-base[data-v-b148a700] .tree-text{font-size:16px;max-height:none}.zjapp .tree-base[data-v-b148a700] .tree-node{background-color:#fafafa}.zjapp .tree-base[data-v-b148a700] .tree-node-level-0{position:relative}.zjapp .tree-base[data-v-b148a700] .tree-node-level-0:after{content:"";width:4px;height:16px;background:#4275e8;position:absolute;left:0;top:50%;transform:translateY(-50%)}.zjapp .tree-base[data-v-b148a700] .tree-node-level-0,.zjapp .tree-base[data-v-b148a700] .tree-node-level-1{background-color:#fff}.zjapp .tree-base[data-v-b148a700] .tree-node-level-2 .tree-text,.zjapp .tree-base[data-v-b148a700] .tree-node-level-3 .tree-text{color:#999}.zjapp .tree-base[data-v-b148a700] .icon.icon-arrow-down,.zjapp .tree-base[data-v-b148a700] .icon.icon-arrow-up{margin-left:10px}',""])},3880:function(e,t,n){var i=n("b66d");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("85cb").default)("1e2c6191",i,!0,{sourceMap:!1,shadowMode:!1})},"3c77":function(e,t,n){"use strict";n("9dd9"),n("f548");var i=n("28f8"),a=(n("163d"),n("7bac")),o=n("4360");a.a.getUserObject("tree-base-open-set-memory").then((function(e){o.a.commit("components/SET_TREE_BASE_OPEN_SET",e||{})}));var r={name:"TreeBase",props:{data:{type:Array,default:function(){return[]}},keyword:{type:String,default:""},level:{type:Number,default:0},iconPosition:{type:String,default:"left"},indentSize:{type:Number,default:14},memoryOpenSet:{type:Boolean,default:!1},defaultOpenLevel:{type:Number,default:0},hasSlotLeft:{type:Boolean,default:!1},hasSlotRight:{type:Boolean,default:!1},listStyle:{type:Object,default:function(){return{}}},nodeStyle:{type:Object,default:function(){return{}}},textStyle:{type:Object,default:function(){return{}}}},data:function(){return{selfOpenSet:{}}},computed:{openSet:function(){return this.memoryOpenSet?o.a.state.components.treeBaseOpenSet:this.selfOpenSet},showSlotLeft:function(){return this.level?this.hasSlotLeft:!!this.$scopedSlots.left},showSlotRight:function(){return this.level?this.hasSlotRight:!!this.$scopedSlots.right}},methods:{itemClick:function(e){if(e.children&&e.children.length){if(this.memoryOpenSet)!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},o.a.state.components.treeBaseOpenSet,e);o.a.commit("components/SET_TREE_BASE_OPEN_SET",t),a.a.saveUserObject("tree-base-open-set-memory",t)}(Object(i.a)({},e.id,!this.isNodeOpen(e.id)));else this.$set(this.selfOpenSet,e.id,!this.isNodeOpen(e.id));this.$emit("onClickFoldNode",e)}else this.$emit("onClickEndNode",e);this.$emit("onClickNode",e)},isNodeOpen:function(e){return void 0===this.openSet[e]?this.level<this.defaultOpenLevel:this.openSet[e]},onClickNode:function(e){this.$emit("onClickNode",e)},onClickFoldNode:function(e){this.$emit("onClickFoldNode",e)},onClickEndNode:function(e){this.$emit("onClickEndNode",e)},keywordFilter:function(e){return this.keyword?e.replace(new RegExp(this.keyword,"gm"),'<span class="color-blue">'+this.keyword+"</span>"):e}}},c=(n("08d4"),n("17cc")),s=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tree-con"},e._l(e.data,(function(t){return n("div",{key:t.id,staticClass:"tree-list",style:Object.assign({},e.listStyle["level-all"],e.listStyle["level-"+e.level])},[n("div",{staticClass:"tree-node border-bottom",class:"tree-node-level-"+e.level,style:Object.assign({},e.nodeStyle["level-all"],e.nodeStyle["level-"+e.level]),on:{click:function(n){e.itemClick(t)}}},[n("div",{staticClass:"tree-indent",style:{width:e.indentSize*e.level+"px"}}),"left"===e.iconPosition?n("div",{staticClass:"tree-icon",class:{"icon-dropdown":t.children&&t.children.length&&(void 0===e.openSet[t.id]?e.level<e.defaultOpenLevel:e.openSet[t.id]),"icon-dropright":t.children&&t.children.length&&!(void 0===e.openSet[t.id]?e.level<e.defaultOpenLevel:e.openSet[t.id])}}):e._e(),n("div",{staticClass:"tree-main"},[e.showSlotLeft?e._t("left",null,{data:t}):n("div",{staticClass:"tree-text",style:Object.assign({},e.textStyle["level-all"],e.textStyle["level-"+e.level]),domProps:{innerHTML:e._s(e.keywordFilter(t.name))}})],2),e.showSlotRight?e._t("right",null,{data:t}):e._e(),"right"===e.iconPosition&&t.children&&t.children.length?n("icon",{staticClass:"icon-right",attrs:{name:(void 0===e.openSet[t.id]?e.level<e.defaultOpenLevel:e.openSet[t.id])?"arrow-up":"arrow-down"}}):e._e()],2),e._t("siblings",null,{data:t}),t.children&&t.children.length&&(void 0===e.openSet[t.id]?e.level<e.defaultOpenLevel:e.openSet[t.id])?[n("tree-base",{key:"children-"+t.id,attrs:{data:t.children,level:e.level+1,keyword:e.keyword,"default-open-level":e.defaultOpenLevel,"memory-open-set":e.memoryOpenSet,"icon-position":e.iconPosition,"has-slot-left":e.showSlotLeft,"has-slot-right":e.showSlotRight,"indent-size":e.indentSize,"list-style":e.listStyle,"node-style":e.nodeStyle,"text-style":e.textStyle},on:{onClickNode:e.onClickNode,onClickFoldNode:e.onClickFoldNode,onClickEndNode:e.onClickEndNode},scopedSlots:e._u([{key:"left",fn:function(t){return[e._t("left",null,{data:t.data})]}},{key:"right",fn:function(t){return[e._t("right",null,{data:t.data})]}},{key:"siblings",fn:function(t){return[e._t("siblings",null,{data:t.data})]}}])})]:e._e()],2)})))}),[],!1,null,"0083fc0a",null);t.a=s.exports},7403:function(e,t,n){"use strict";n.r(t);var i=n("8fd1").a,a=(n("c39f"),n("17cc")),o=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{"list-empty":e.isLoading||!e.listData||!e.listData.length}},[!e.isLoading&&e.listData.length?[n("tree-base",{staticClass:"tree-base",attrs:{data:e.listData,"indent-size":0,"memory-open-set":!0,"icon-position":"right"},on:{onClickNode:e.onClickNode},scopedSlots:e._u([{key:"left",fn:function(t){var i=t.data;return n("div",{staticClass:"tree-text",class:{"fw-b":0===i.level}},[e._v("\n        "+e._s(i.name)+"\n\n        "),0===i.level?n("span",{staticClass:"ml5"},[e._v("("+e._s(i.weight)+"%)")]):[1!==e.passrateMode||i.children&&i.children.length?e._e():n("span",{staticClass:"color-gray3 ml5"},[e._v("\n            ("+e._s(i.score||0)+"分)\n          ")]),2===e.passrateMode&&1===i.level?n("span",{staticClass:"color-gray3 ml5"},[e._v("\n            ("+e._s(i.score||0)+"分)\n          ")]):e._e()]],2)}},{key:"right",fn:function(t){var i=t.data;return[0===i.level?n("div",[i.hasProblem?n("span",{staticClass:"color-red"},[e._v("\n            -"+e._s(2===e.passrateMode?i.deduction:i.actualDeduction)+"分\n          ")]):e._e(),i.hasProblem?n("span",{staticClass:"color-red"},[e._v("\n            "+e._s(e._f("percent")(i.scoreRate,2))+"\n          ")]):e._e(),i.hasProblem?e._e():n("span",{staticClass:"color-gray3"},[e._v("未检")])]):e._e(),"合格"===i.status?n("div",{staticClass:"color-green"},[e._v(e._s(i.status))]):e._e(),1===e.passrateMode?["不合格"===i.status?n("div",{staticClass:"color-red"},[e._v("\n            -"+e._s(i.deduction||0)+"分\n          ")]):e._e(),i.problemNum&&"合格"!==i.status?n("div",{staticClass:"color-gray3 ml5"},[e._v("\n            "+e._s(i.problemNum)+"个问题\n          ")]):e._e()]:e._e(),2===e.passrateMode&&0!==i.level&&i.hasProblem&&"合格"!==i.status?[n("div",{staticClass:"color-red"},[e._v("-"+e._s(i.deduction||0)+"分")]),n("div",{staticClass:"color-gray3 ml5"},[e._v(e._s(i.problemNum)+"个问题")])]:e._e(),i.children&&0!==i.children.length||0===i.level?e._e():[i.problemNum||"合格"===i.status?e._e():n("div",{staticClass:"item-operate"},[e.editable?n("button",{staticClass:"btn btn-operate",on:{click:function(t){t.stopPropagation(),e.addProblem(i,i.id)}}},[e._v("\n              扣分\n            ")]):e._e()]),i.problemNum||"合格"===i.status?e._e():n("div",{staticClass:"item-operate"},[e.editable?n("button",{staticClass:"btn btn-operate",on:{click:function(t){t.stopPropagation(),e.setPass(i,i.id)}}},[e._v("\n              合格\n            ")]):e._e()])]]}},{key:"siblings",fn:function(t){var i=t.data;return i.descChildren?n("div",{staticClass:"desc-item-list border-bottom"},e._l(i.descChildren,(function(t,i){return n("div",{key:i,staticClass:"desc-item"},[e._v("\n          "+e._s(t.name)+"\n        ")])}))):e._e()}}])}),"检查完毕"===e.batch.status?n("div",{staticClass:"p15 color-gray3 align-c"},[e._v("\n      "+e._s(e._f("formatDate")(e.batch.modified_on))+" "+e._s(e.batch.created_by_name)+" 提交检查完毕\n    ")]):e._e(),e.isBatchCreator&&"检查完毕"!==e.batch.status?n("app-button-group",{staticClass:"mt20"},[n("app-button",{on:{click:e.submitBatch}},[e._v("\n        检查完毕并提交\n      ")])],1):e._e()]:e._e(),n("loading-status",{attrs:{"is-loading":e.isLoading,"is-empty":!e.listData.length,"empty-text":"暂无数据"}})],2)}),[],!1,null,"b148a700",null);t.default=o.exports},"8fd1":function(e,t,n){"use strict";(function(e){n("5ab2"),n("e10e");var i=n("28f8"),a=(n("6d57"),n("06a2"),n("07d2")),o=n("0bb6"),r=n("6e1b"),c=n("3516"),s=n("e2a7"),d=n("3bd5"),l=(n("6144"),n("3c77")),u=(n("966e"),n("48f4"));function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}var h=d.a.getUser();t.a={name:"IndexListTemplate4",components:{Item:a.default,TreeBase:l.a},props:{batchId:{type:String}},data:function(){return{isLoading:!1,batch:{},listData:[],placeTotal:[],isBatchCreator:!1,isBatchChecker:!1,editable:!1,batchMode:4,passrateMode:1}},watch:{batchId:{handler:function(e){e?this.init():(this.batch={},this.listData=[])},immediate:!0}},created:function(){this.$on("reload",this.init)},activated:function(){this.init()},methods:{init:function(){var e=this;return Promise.all([this.getPassrateMode(),this.getBatchData(),this.getListData()]).finally((function(){e.isLoading=!1,e.$emit("loaded",e.listData)})).catch((function(t){$log.error(t),e.batch={},e.listData=[],e.isLoading=!1}))},getBatchData:function(){var t=this;return this.batchId?r.a.getSpecialInspectBatchById(this.batchId).then((function(e){t.$store.commit("specialInspect/SET_BATCH_DATA",e),t.batch=e,t.isBatchCreator=e.created_by===h.user_id})).then((function(){return Promise.resolve().then((function(){var n=t.batch.root_id||t.batch.parent_id||t.batch.id;return c.a.getBatchUsers(n).then((function(n){var i=d.a.getUser().user_id;t.isBatchChecker=e.some(n,{user_id:i}),t.editable="检查完毕"!==t.batch.status&&t.isBatchChecker}))}))})):Promise.reject("缺少批次id")},getPassrateMode:function(){var e=this;return o.a.getPassrateMode(this.batchId).then((function(t){e.passrateMode=t}))},getListData:function(){var e=this;return this.batchId?o.a.getSpecialInspectCheckItem(this.batchId).then((function(t){e.$store.commit("specialInspect/SET_LIST_DATA",t),e.listData=t})).catch((function(e){s.a.alert(e)})):Promise.reject("缺少批次id")},submitBatch:function(){var t=this;return r.a.getBatchWillUploadNum(this.batch.id).then((function(n){if(e.isEmpty(n))return s.a.confirm("请确保所有检查人已上传数据，提交后不可修改，确认提交？").then((function(e){if(e){var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t.batch);return delete n.contracts,r.a.finishCheckBatch(n).then((function(){return u.default.setLocalChanged(),t.init()})).catch((function(e){console.error(e),e&&500102===e.errcode?s.a.alert("检测到检查结果有冲突，请下拉刷新后再试"):s.a.alert(e)}))}}));s.a.alert("还有问题正在上传，请等待问题上传完毕")}))},onClickNode:function(e){e.children&&e.children.length||("合格"===e.status?this.setPass(e,e.item_id):this.problemList(e,e.item_id))},setPass:function(e,t){this.$router.push({path:"/special-inspect-pass",query:{batchId:this.batch.id,specialInspectId:e.id,checkItemId:e.item_id,mode:this.batchMode,rootId:t}})},problemList:function(e,t){(e.problemNum||e.temporaryStorage)&&this.$router.push({path:"/special-inspect-problem-list",query:{batchId:this.batch.id,specialInspectId:e.id,checkItemId:e.item_id,mode:this.batchMode,rootId:t,editable:+this.editable}})},addProblem:function(e,t){this.$router.push({path:"/special-inspect-problem-edit",query:{batchId:this.batch.id,specialInspectId:e.id,checkItemId:e.item_id,mode:this.batchMode,rootId:t}})}}}}).call(this,n("391c"))},b66d:function(e,t,n){(e.exports=n("690e")(!1)).push([e.i,'.zjapp .tree-node[data-v-0083fc0a]{display:flex;flex-direction:row;align-items:center;justify-content:center;padding:8px 15px}.zjapp .tree-main[data-v-0083fc0a]{flex:1}.zjapp .tree-text[data-v-0083fc0a]{font-size:14px;color:#333;line-height:20px;padding:5px 0;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2}.zjapp .tree-indent[data-v-0083fc0a]{width:14px;height:20px}.zjapp .tree-icon[data-v-0083fc0a]{position:relative;width:20px;height:20px;line-height:20px;color:#c8c8c8;font-size:26px}.zjapp .icon-dropdown[data-v-0083fc0a]:before,.zjapp .icon-dropright[data-v-0083fc0a]:before{content:"";position:absolute;width:0;height:0;border:6px solid #c8c8c8}.zjapp .icon-dropdown[data-v-0083fc0a]:before{top:7px;left:0;border-left-color:transparent}.zjapp .icon-dropdown[data-v-0083fc0a]:before,.zjapp .icon-dropright[data-v-0083fc0a]:before{border-right-color:transparent;border-bottom-color:transparent}.zjapp .icon-dropright[data-v-0083fc0a]:before{top:4px;left:2px;border-top-color:transparent}.zjapp .icon-right[data-v-0083fc0a]{margin-left:10px;color:#c8c8c8;line-height:30px}',""])},c39f:function(e,t,n){"use strict";n("0ed4")}}]);