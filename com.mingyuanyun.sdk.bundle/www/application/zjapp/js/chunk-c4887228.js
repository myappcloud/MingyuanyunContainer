(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-c4887228"],{"0c52":function(t,e,a){(t.exports=a("690e")(!1)).push([t.i,".zjapp .app-stepper[data-v-03df57b7]{display:inline-block;width:110px;height:34px;margin:-2px 0;white-space:nowrap;font-size:0;line-height:0;vertical-align:top}.zjapp .app-stepper .number-input[data-v-03df57b7]{width:51px;height:34px;border:1px solid #dcdcdc;border-radius:0;font-size:14px;text-align:center;background-color:#fff;color:#111;box-sizing:border-box}.zjapp .app-stepper .number-input-focus[data-v-03df57b7]{border-color:#4275e8}.zjapp .btn-add[data-v-03df57b7],.zjapp .btn-minus[data-v-03df57b7]{display:inline-block;width:28px;height:34px;line-height:34px;padding:0;border:1px solid #dcdcdc;color:#666;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-sizing:border-box;background-color:#fff}.zjapp .btn-minus[data-v-03df57b7]{border-right:none;border-radius:4px 0 0 4px}.zjapp .btn-add[data-v-03df57b7]{border-left:none;border-radius:0 4px 4px 0}.zjapp .icon-add[data-v-03df57b7],.zjapp .icon-minus[data-v-03df57b7]{font-size:11px;vertical-align:top;display:inline-block;margin-top:10.5px}.zjapp .disabled[data-v-03df57b7]{color:#c8c8c8}.zjapp .activing[data-v-03df57b7]{color:#4275e8}",""])},"0f7b":function(t,e,a){"use strict";a("f548"),a("163d");var i,n,o={name:"AppStepper",components:{NumberInput:a("6948").a},props:{value:{type:[String,Number],default:""},max:{type:[String,Number],default:200},range:{type:Array}},data:function(){return{addActiving:!1,minusActiving:!1}},computed:{rangeMin:function(){return this.range&&this.range[0]||0},rangeMax:function(){return this.range&&this.range[1]?this.range[1]:this.max},allowAdd:function(){return""!==this.value&&this.value<this.rangeMax},allowMinus:function(){return""!==this.value&&this.value>this.rangeMin}},methods:{onChange:function(t){t&&(t=String(t).replace(/\D/g,"")),parseInt(t,10)>parseInt(this.max,10)&&(t=this.max),this.$emit("input",Number(t)),this.$emit("change",Number(t))},add:function(){if(this.allowAdd){var t=parseInt(this.value,10)+1;this.isInRange(t)&&(this.$emit("input",t),this.$emit("change",t)),this.setActiving("add")}},minus:function(){if(this.allowMinus){var t=parseInt(this.value,10)-1;this.isInRange(t)&&(this.$emit("input",t),this.$emit("change",t)),this.setActiving("minus")}},isInRange:function(t){return t>=this.rangeMin&&t<=this.rangeMax},setActiving:function(t){var e=this;t&&("minus"===t?(this.minusActiving=!0,clearTimeout(n),n=setTimeout((function(){e.minusActiving=!1}),300)):(this.addActiving=!0,clearTimeout(i),i=setTimeout((function(){e.addActiving=!1}),300)))}}},s=(a("91cb"),a("17cc")),r=Object(s.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-stepper"},[a("button",{staticClass:"btn-minus",class:{disabled:!t.allowMinus,activing:t.minusActiving},on:{click:t.minus}},[a("icon",{attrs:{name:"minus"}})],1),a("number-input",{attrs:{value:t.value,type:"int",range:t.range},on:{input:t.onChange}}),a("button",{staticClass:"btn-add",class:{disabled:!t.allowAdd,activing:t.addActiving},on:{click:t.add}},[a("icon",{attrs:{name:"add"}})],1)],1)}),[],!1,null,"03df57b7",null);e.a=r.exports},"3c5b":function(t,e,a){"use strict";a.r(e);var i=a("df42").a,n=(a("a85a"),a("17cc")),o=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-content",{attrs:{title:"add"==t.type?"新建批次":"编辑批次","show-go-root":!0}},[a("div",{staticClass:"scroll-wrap"},[a("div",{staticClass:"list"},[a("item",{attrs:{label:"批次名称",mode:"edit"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.batchName,expression:"data.batchName"}],ref:"batch_add_name_input",staticClass:"input-align-r f16",attrs:{slot:"right",type:"text",placeholder:"请填写"},domProps:{value:t.data.batchName},on:{input:function(e){e.target.composing||t.$set(t.data,"batchName",e.target.value)}},slot:"right"})]),a("single-select",{attrs:{title:"所属标段",options:t.data.bidsectionData,mode:"edit",editabled:"add"===t.type},model:{value:t.data.batchBidsection,callback:function(e){t.$set(t.data,"batchBidsection",e)},expression:"data.batchBidsection"}}),a("user-select",{attrs:{options:t.data.inspectorData,title:"检查人",multi:!0,"before-open":t.isCheckItemSelected},on:{onSelect:t.selectCheckMan},model:{value:t.data.batchInspector,callback:function(e){t.$set(t.data,"batchInspector",e)},expression:"data.batchInspector"}}),a("item",{attrs:{label:"整改期限",mode:"edit"}},[a("template",{slot:"right"},[a("div",{staticClass:"item-con align-r"},[a("app-stepper",{staticClass:"date",attrs:{max:"999"},model:{value:t.data.timeLimit,callback:function(e){t.$set(t.data,"timeLimit",e)},expression:"data.timeLimit"}})],1),a("div",{staticClass:"item-font ml5"},[t._v("天")])])],2),a("user-select",{attrs:{title:"负责人",multi:!1,options:t.data.hasRightUsers},on:{onSelect:t.selectMaster},model:{value:t.data.batchCharger,callback:function(e){t.$set(t.data,"batchCharger",e)},expression:"data.batchCharger"}}),a("user-select",{attrs:{options:t.data.ccOptions,title:"抄送人",multi:!0,"before-open":t.isCheckItemSelected},on:{onSelect:t.selectCCMan},model:{value:t.data.cc,callback:function(e){t.$set(t.data,"cc",e)},expression:"data.cc"}})],1),a("app-button-group",["add"===t.type?a("app-button",{on:{click:t.saveBatch}},[t._v("\n        提交\n      ")]):a("app-button",{on:{click:t.saveBatch}},[t._v("\n        保存\n      ")])],1)],1)])}),[],!1,null,"2d2f490b",null);e.default=o.exports},"59a8":function(t,e,a){var i=a("a22f");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a("85cb").default)("0abade2e",i,!0,{sourceMap:!1,shadowMode:!1})},"774b":function(t,e,a){"use strict";var i=a("d18d").a,n=(a("b225"),a("17cc")),o=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"scroll-warp",staticClass:"scroll-warp",class:{"scroll-warp-pulling":t.pulling,"scroll-warp-complete":!t.hasNext&&!t.isEmpty,"scroll-warp-empty":t.isEmpty},style:{"padding-bottom":t.numberKeyboardCoverHeight+"px"},on:{scroll:t.onScroll,touchstart:t.onTouchstart,touchmove:t.onTouchmove,touchend:t.onTouchend}},[t.allowPullDown?a("div",{staticClass:"pull-refresh-warp",style:{height:t.pullDist+"px"}},[a("div",{staticClass:"pull-refresh"},[a("div",{staticClass:"animation-refresher",class:{refreshing:t.refreshing}}),t.updateTime?a("p",{staticClass:"pull-refresh-date"},[t._v("最后成功同步："+t._s(t.updateTime))]):t._e()])]):t._e(),t._t("default"),t.loading?a("div",{staticClass:"page-loading"},[a("svg",{staticClass:"svg-loading",attrs:{viewBox:"0 0 80 80"}},[a("circle",{attrs:{cx:"40",cy:"40",r:"36"}})])]):t._e(),t.hasNext||t.isEmpty?t._e():[t.$slots.end?t._t("end"):t._e(),!t.$slots.end&&t.endText?a("div",{staticClass:"end-text"},[t._v("\n      "+t._s(t.endText)+"\n    ")]):t._e()]],2)}),[],!1,null,"2b1a346c",null);e.a=o.exports},"91cb":function(t,e,a){"use strict";a("c82d")},9455:function(t,e,a){"use strict";a("f272")},"9d55":function(t,e,a){(t.exports=a("690e")(!1)).push([t.i,'.zjapp .scroll-warp[data-v-2b1a346c]{flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.zjapp .scroll-warp-pulling[data-v-2b1a346c]{overflow:hidden}.zjapp .scroll-warp-complete[data-v-2b1a346c]:after{content:"";display:block;height:100px}.zjapp .scroll-warp-empty[data-v-2b1a346c]{display:flex;flex-direction:column}.zjapp .pull-refresh-warp[data-v-2b1a346c]{position:relative;height:0;overflow:hidden}.zjapp .pull-refresh[data-v-2b1a346c]{position:absolute;left:0;bottom:0;height:70px;width:100%;padding:6px;text-align:center}.zjapp .pull-refresh-date[data-v-2b1a346c]{margin-top:4px;height:16px;line-height:16px;font-size:12px;color:#bcbcbc}.zjapp .page-loading[data-v-2b1a346c]{padding:10px;text-align:center}.zjapp .end-text[data-v-2b1a346c]{color:#c8c8c8;background:#f4f4f4;position:relative;line-height:76px;height:76px;text-align:center}.zjapp .end-text[data-v-2b1a346c]:after,.zjapp .end-text[data-v-2b1a346c]:before{content:"";position:absolute;width:48px;height:1px;background:#e4e4e4;top:50%;margin-top:-1px}.zjapp .end-text[data-v-2b1a346c]:after{left:50%;transform:translateX(-92px)}.zjapp .end-text[data-v-2b1a346c]:before{right:50%;transform:translateX(90px)}.zjapp .end-slot[data-v-2b1a346c]{padding:30px;line-height:18px;text-align:center;color:#c8c8c8}',""])},a22f:function(t,e,a){(t.exports=a("690e")(!1)).push([t.i,".zjapp .scroll-wrap[data-v-2d2f490b]{flex:1;overflow:auto;padding-bottom:100px}.zjapp .date[data-v-2d2f490b]{padding-right:30px}.zjapp .unit[data-v-2d2f490b]{position:absolute;right:15px;top:10px}.zjapp .cell-item[data-v-2d2f490b]{position:relative;font-size:16px;line-height:30px}.zjapp .cell-item input[data-v-2d2f490b]{border:none;margin:0;display:block;height:34px;color:#111;vertical-align:middle;line-height:16px;text-align:right}.zjapp .cell-item .fr[data-v-2d2f490b]{color:#b2b2b2;line-height:30px}.zjapp .cell-item i[data-v-2d2f490b]{float:right;margin-top:2px}.zjapp .cell-item .gray[data-v-2d2f490b]{color:#666}.zjapp .cell-item[data-v-2d2f490b] .van-cell__value{padding-left:90px}.zjapp .cell-item[data-v-2d2f490b] .van-cell__value .custom-text{position:absolute;left:0}.zjapp .cell-item[data-v-2d2f490b] .van-cell__right-icon{color:#c8c8c8}",""])},a85a:function(t,e,a){"use strict";a("59a8")},b225:function(t,e,a){"use strict";a("ef48")},c62c:function(t,e,a){(t.exports=a("690e")(!1)).push([t.i,'.zjapp .app-radio[data-v-2340da0b]{position:relative;line-height:20px;font-size:0}.zjapp .app-radio>*[data-v-2340da0b]{display:inline-block;vertical-align:middle}.zjapp .app-radio .app-radio-icon[data-v-2340da0b]{width:20px;height:20px;border:1px solid #d9d9d9;border-radius:20px}.zjapp .app-radio .app-radio-icon+*[data-v-2340da0b]{margin-left:10px;font-size:16px}.zjapp .app-radio .checked-icon[data-v-2340da0b]{position:relative;border:1px solid #4275e8}.zjapp .app-radio .checked-icon[data-v-2340da0b]:before{content:" ";background:#4275e8;display:inline-block;width:14px;height:14px;border-radius:20px;position:absolute;top:2px;left:2px}',""])},c82d:function(t,e,a){var i=a("0c52");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a("85cb").default)("26e0fa2e",i,!0,{sourceMap:!1,shadowMode:!1})},d18d:function(t,e,a){"use strict";(function(t){a("2b45");var i,n=a("4360"),o=a("48f4"),s=a("162a"),r=a("e2a7"),c=a("a500"),l=a("6f9e"),d={};e.a={name:"Scroller",props:{buildingId:{type:String,default:""},hasNext:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},isSync:{type:Boolean,default:!0},endText:{type:String,default:""},memoryScrollTop:{type:Boolean,default:!0},keepScrollTop:{type:Boolean},hasPullDown:{type:Boolean,default:!0},onPullDown:{type:Function}},data:function(){return{pullDist:0,refreshing:!1,pulling:!1,loading:!1,scrollTop:0,isCurrKeyboard:!1,gapBottom:0}},computed:{allowPullDown:function(){return this.hasPullDown&&(!!this.$listeners.pullDown||!!this.onPullDown)},updateTime:function(){return n.a.state.global.businessDownloadTime},numberKeyboardCoverHeight:function(){return n.a.state.global.isNumberInputOpen?n.a.state.global.numberKeyboardHeight-this.gapBottom:0}},mounted:function(){var t=this;l.a.$on("numberKeyboardOpen",this.onNumberKeyboardOpen),this.$nextTick((function(){var e=t.$refs["scroll-warp"]&&t.$refs["scroll-warp"].getBoundingClientRect&&t.$refs["scroll-warp"].getBoundingClientRect();e&&(t.gapBottom=document.documentElement.clientHeight-e.bottom),t.$el&&t.$el.addEventListener("focus",(function(e){var a=e&&e.target,i=a&&a.tagName&&a.tagName.toLowerCase();if("input"===i||"textarea"===i){window.addEventListener("resize",(function e(){var i=a.getBoundingClientRect(),n=t.$el.getBoundingClientRect(),o=i.bottom-n.bottom;o>0&&t.scrollBy(o),window.removeEventListener("resize",e,!1)}),!1)}}),!0)}))},destroyed:function(){l.a.$off("numberKeyboardOpen",this.onNumberKeyboardOpen)},activated:function(){var t=this.keepScrollTop||this.$router.isBack&&this.memoryScrollTop;this.scrollTop&&t&&(this.$refs["scroll-warp"].scrollTop=this.scrollTop)},deactivated:function(){this.memoryScrollTop&&(this.scrollTop=this.$refs["scroll-warp"].scrollTop)},methods:{onScroll:function(t){var e=this,a=this.$refs["scroll-warp"].scrollTop,i=this.$refs["scroll-warp"].scrollHeight;if(a+this.$refs["scroll-warp"].clientHeight>=i-5&&!this.loading&&this.hasNext){this.loading=!0;var n=this.$listeners.loadNext();n&&n.then&&"function"==typeof n.then?n.then((function(){e.loading=!1})):this.loading=!1}this.$emit("scroll",t)},getTouchDiretion:function(t){if(!(d&&t&&t.touches&&t.touches[0]))return"";var e=t.touches[0].clientX,a=t.touches[0].clientY;return Math.abs(a-d.y)>Math.abs(e-d.x)&&Math.abs(a-d.y)>=3?a>d.y?"down":"up":""},onTouchstart:function(t){this.allowPullDown&&t.touches&&1===t.touches.length&&(d={x:t.touches[0].clientX,y:t.touches[0].clientY,scrollTop:this.$refs["scroll-warp"].scrollTop,pullDist:this.pullDist})},onTouchmove:function(t){if(this.allowPullDown&&t.touches&&1===t.touches.length){var e=this.$refs["scroll-warp"].scrollTop,a=t.touches[0].clientY,i=a-d.y,n=this.getTouchDiretion(t);"down"===n?!this.refreshing&&e<=0?(this.pulling=!0,this.pullDist=(i-d.scrollTop)/2,t.preventDefault()):this.pulling=!1:"up"===n?this.pullDist>0&&(this.pullDist=d.pullDist-(d.y-a),t.preventDefault()):this.pullDist=d.pullDist}},onTouchend:function(){var t=this;this.allowPullDown&&(d={},this.pulling=!1,this.pullDist>=70&&this.isSync?this.refreshing?this.makePullTo(70):this.makePullTo(70).then((function(){if(t.refreshing=!0,t.onPullDown){var e=t.onPullDown();e&&e.then&&"function"==typeof e?e.finally((function(){t.refreshing=!1,t.makePullTo(0)})):(t.refreshing=!1,t.makePullTo(0))}else t.dataSync().then((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")})).catch((function(){t.refreshing=!1,t.makePullTo(0),t.$emit("pullDown")}))})):(this.refreshing=!1,this.makePullTo(0)))},makePullTo:function(t){var e=this,a=this.pullDist,i=t,n=i-a,o=a;return a===i?Promise.resolve():new Promise((function(t){!function s(){window.requestAnimationFrame((function(){o+=n/6,e.pullDist=o,a<i&&o<i||a>i&&o>i?s():(e.pullDist=i,e.refreshing=!1,t())}))}()}))},dataSync:function(){var t,e=o.default.getCurrentModuleCode(),a=o.default.getCurrentRoute(),i=a.meta&&a.meta.isTodo;if(o.default.isModuleNeedBuilding(e)&&!i){if(!this.buildingId)return new Promise((function(t){setTimeout((function(){t()}),500)}));t=this.buildingId}return c.a.addTrack("公共-手动下拉刷新","",""),s.a.beginManualUpdate(),o.default.checkSync(t).then((function(t){return s.a.endManualUpdate(),t})).catch((function(t){$log.error("下拉刷新错误",t),t&&"Error: Network Error"===t.toString()?r.a.alert("当前网络无法同步数据"):r.a.alert(t),s.a.endManualUpdate()}))},getScrollHeight:function(){return this.$refs["scroll-warp"].offsetHeight},getScrollTop:function(){return this.$refs["scroll-warp"].scrollTop},setScrollTop:function(t){this.$refs["scroll-warp"].scrollTop=t},scrollBy:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=this.getScrollTop(),o=n+t,s=Math.round(a/16.7),r=t/s,c=n,l=i=+new Date;return n===o?Promise.resolve():new Promise((function(t){!function a(){window.requestAnimationFrame((function(){l===i&&(c+=r,e.$refs["scroll-warp"].scrollTop=c,n<o&&c<o||n>o&&c>o?a():(e.$refs["scroll-warp"].scrollTop=o,t()))}))}()}))},scrollTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,a=this.getScrollTop(),i=t-a;return this.scrollBy(i,e)},scrollToEle:function(t){var e=t.keyboardHeight||232,a=(t=t.$el?t.$el:t).getBoundingClientRect(),i=this.$refs["scroll-warp"].getBoundingClientRect();if(a&&i){var o=document.documentElement.clientHeight-(n.a.state.global.isNumberInputOpen?e:0),s=i.bottom<o?i.bottom:o,r=i.top-a.top,c=a.bottom-s;r>0?this.scrollBy(-r-10):c>0&&this.scrollBy(c+10)}},isCurrent:function(e,a){var i=this;e.length&&t.each(e,(function(t){t._uid===a?i.isCurrKeyboard=!0:i.isCurrent(t.$children,a)}))},onNumberKeyboardOpen:function(t){this.isCurrKeyboard=!1,this.isCurrent(this.$children,t._uid),this.isCurrKeyboard&&this.scrollToEle(t)}}}}).call(this,a("391c"))},dc52:function(t,e,a){"use strict";var i={props:{text:{type:String,default:""},checked:{type:Boolean,default:!1},changeRadio:{type:Function,default:function(){return 0}}},data:function(){return{status:!1}},watch:{checked:function(t){this.status=t}},created:function(){this.status=this.checked},methods:{clickEvent:function(){this.status=!0,this.$emit("changeRadio",this.status)}}},n=(a("9455"),a("17cc")),o=Object(n.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-radio",on:{click:this.clickEvent}},[e("span",{class:{"app-radio-icon":!0,"checked-icon":this.status}}),this.text?e("span",[this._v(this._s(this.text))]):e("span",[this._t("default")],2)])}),[],!1,null,"2340da0b",null);e.a=o.exports},df42:function(t,e,a){"use strict";(function(t){a("5ab2"),a("6d57"),a("e10e"),a("cc57");var i=a("28f8"),n=a("dc52"),o=a("cd05"),s=a("5a71"),r=a("0f7b"),c=a("07d2"),l=a("fd50"),d=a("3bd5"),p=a("f97c"),u=a("3516"),h=a("7b81"),f=a("37d5"),b=a("e2a7");function g(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?g(Object(a),!0).forEach((function(e){Object(i.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e.a={components:{AppStepper:r.a,appRadio:n.a,UserSelect:o.a,SingleSelect:s.a,Item:c.a},data:function(){return{type:"add",viewTitle:"新建批次",batchId:"",showSectionDialog:!1,showCheckManDialog:!1,showMasterDialog:!1,showCCDialog:!1,batch:{},data:this.initData()}},activated:function(){$log.log("安全检查添加批次，activated"),this.init()},destroyed:function(){window.clearTimeout(this.timeoutEvent)},methods:{initData:function(){return{timeoutEvent:null,bidsectionData:[],inspectorData:[],hasRightUsers:[],ccOptions:[],batchName:"",timeLimit:7,type:"随机检查",checkItem:{id:"",name:""},building:{id:"",name:"",unit:""},cc:[],ccStr:"",purpose:"正式",batchBidsection:{},batchInspector:[],batchInspectorStr:"",batchCharger:{}}},init:function(){var e=this,a=this.$route.params,i=p.a.getDefaultProject().id;this.batch={},this.batchId=a&&a.id?a.id:"",this.data=this.initData(),l.a.when().then((function(){if(e.batchId)return e.type="edit",e.viewTitle="编辑批次",e.loadData();e.type="add",e.viewTitle="新建批次",e.$nextTick((function(){e.timeoutEvent=window.setTimeout((function(){e.$refs.batch_add_name_input.focus()}),500)}))})).then((function(){var t=d.a.getUser();if("add"===e.type)e.data.batchCharger=m(m({},t),{},{id:t.user_id,name:t.user_name});else if("edit"===e.type)return h.a.getUsersByIds([e.batch.in_charge_by||e.batch.created_by]).then((function(t){t.length&&(e.data.batchCharger={id:t[0].id,name:t[0].name})}))})).then((function(){f.default.getProjectCheckUsers(i,[31,32,33]).then((function(a){e.data.inspectorData=t.map(a,(function(a){var i=!1,n=!1;return a.user_id===e.data.batchCharger.id&&(i=!0,n=!0),t.extend({},a,{checked:i,disabled:n})}))}))})).catch((function(t){$log.error(t)})),u.a.getSectionList(i).then((function(a){e.data.bidsectionData=t.map(a,(function(t){return{id:t.id,name:t.name+"（"+t.proj_name+"）",proj_id:t.proj_id}}))})),f.default.getProjectUsers(i,[34]).then((function(t){e.data.hasRightUsers=t})),f.default.getProjectUsers(i,[31,32,33]).then((function(t){e.data.ccOptions=t}))},isCheckItemSelected:function(){if(!this.data.batchBidsection.name)return b.a.alert("请选择所属标段"),!1},closePopupRight:function(){this.showSectionDialog=!1,this.showCheckManDialog=!1,this.showMasterDialog=!1,this.showCCDialog=!1},selectSection:function(t){this.data.batchBidsection=t},selectCheckMan:function(e,a){var i=t.map(e,(function(t){return{id:t.user_id,name:t.user_name,checked:!0}}));this.$set(this.data,"batchInspector",i),this.$set(this.data,"batchInspectorStr",a)},selectMaster:function(t,e){this.$set(this.data,"batchCharger",m(m({},t),{},{id:t.user_id,name:t.user_name}))},selectCCMan:function(e,a){var i=t.map(e,(function(t){return{id:t.user_id,name:t.user_name,checked:!0}}));this.$set(this.data,"cc",i),this.$set(this.data,"ccStr",a)},loadData:function(){var e=this;return u.a.getBatchUsers(this.batchId).then((function(a){var i=[];e.data.batchInspector=t.map(a,(function(t){return i.push(t.user_name),{id:t.user_id,name:t.user_name,checked:!0}})),e.data.batchInspectorStr=i.join("、")})),u.a.getBatchCCs(this.batchId).then((function(a){var i=[];e.data.cc=t.map(a,(function(t){return i.push(t.user_name),{id:t.user_id,name:t.user_name}})),e.data.ccStr=i.join("、")})),u.a.getBatch(this.batchId).then((function(t){e.batch=t,e.data.batchName=t.name,e.data.timeLimit=t.repair_deadline,e.data.purpose=t.batch_purpose||"正式",e.data.batchBidsection={id:t.section_id,name:t.section_name+"（"+t.proj_name+"）",proj_id:t.proj_id}}))},swtichPurpose:function(t){this.$set(this.data,"purpose",t)},saveBatch:function(){var e=this;if(""!==this.data.batchName)if(this.data.batchBidsection&&this.data.batchBidsection.id)if(void 0!==this.data.timeLimit&&null!==this.data.timeLimit)if(this.data.batchInspector&&this.data.batchInspector.length){if(this.data.batchCharger.id){var a=!1,i=t.map(this.data.batchInspector,(function(t){return t.id===e.data.batchCharger.id&&(a=!0),t.id}));a||i.unshift(this.data.batchCharger.id);var n={batch:{id:this.batchId,batch_type:"安全检查",proj_id:this.data.batchBidsection.proj_id,bidsection_id:this.data.batchBidsection.id,name:this.data.batchName,repair_deadline:this.data.timeLimit,building_id:this.data.building.id,unit:this.data.building.unit,item_id:this.data.checkItem.id,batch_purpose:this.data.purpose||"正式",in_charge_by:this.data.batchCharger.id},batch_user:i,batch_cc:t.map(this.data.cc,(function(t){return t.id})),batch_room:t.map(this.batchRoom,(function(t){return{building_id:t.building_id,room_id:t.id,unit:t.unit}}))};return b.a.loading("请稍等..."),$log.log("安全检查添加批次，执行保存"),u.a.uploadBatch(n).then((function(t){$rootScope.newBatch=t,e.$router.go(-1)})).catch((function(t){b.a.alert(t)})).finally((function(){b.a.hideLoading()}))}b.a.alert("请选择负责人")}else b.a.alert("请选择检查人");else b.a.alert("请输入默认整改期限");else b.a.alert("请选择所属标段");else b.a.alert("请输入批次名称")}}}}).call(this,a("391c"))},ef48:function(t,e,a){var i=a("9d55");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a("85cb").default)("a1a65c0c",i,!0,{sourceMap:!1,shadowMode:!1})},f272:function(t,e,a){var i=a("c62c");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a("85cb").default)("6a97aac3",i,!0,{sourceMap:!1,shadowMode:!1})}}]);