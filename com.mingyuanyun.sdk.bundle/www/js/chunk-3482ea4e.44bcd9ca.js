(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3482ea4e"],{"0494":function(t,i,a){"use strict";a.r(i);var e,n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("app-container",[a("app-header",{attrs:{title:"消息"},on:{"click-right":t.setState}},[a("span",{attrs:{slot:"right"},slot:"right"},[t._v("全部已读")])]),t.showTab?a("van-tabs",{attrs:{color:"#2c5cf7","line-width":16},on:{change:t.tabsChange},model:{value:t.activeTab,callback:function(i){t.activeTab=i},expression:"activeTab"}},t._l(t.tabsArray,(function(t){return a("van-tab",{key:t.product,attrs:{title:t.name,name:t.product}})})),1):t._e(),a("div",{staticClass:"list"},[a("van-pull-refresh",{staticClass:"refresh-wrapper",on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(i){t.isLoading=i},expression:"isLoading"}},[a("empty-page",{attrs:{emptyMsg:"暂无消息",showEmpty:!t.list.length,loadingPage:this.loading}}),a("van-list",{attrs:{finished:t.finished,"finished-text":"— 干工程是有底线的 —","immediate-check":!1},on:{load:t.loadMore},model:{value:t.loadingMore,callback:function(i){t.loadingMore=i},expression:"loadingMore"}},t._l(t.list,(function(i,e){return a("div",{key:e,staticClass:"block",on:{click:function(a){return t.open(i)}}},[a("div",[a("div",{staticClass:"toper"},[a("span",{staticClass:"type"},[a("img",{attrs:{src:i.icon||""}}),t._v(" "+t._s(i.type)+" ")]),a("span",{staticClass:"time"},[t._v(t._s(i.date))])]),a("div",{staticClass:"inner"},[a("div",{staticClass:"title",class:{unread:!i.isRead}},[t._v(" "+t._s(i.title)+" ")]),a("div",{staticClass:"message"},[t._v(t._s(i.message))])])])])})),0)],1)],1)],1)},r=[],o=a("58c8"),s=a("7dd6"),c=(a("1d43"),a("47b8"),a("bf2f"),a("b3b0"),a("a5f8"),a("3bae"),a("62f9"),a("4cd5"),a("27ae"),a("16ca"),a("7ae2")),d=a("8a83"),f=a("c325"),l=a("3c4e"),u=a("6569"),h=a("b38c"),v=0,p={gcxt:"工程协同",zhkf:"智慧客服",zjapp:"工程在线"},g={name:"MessageIndex",components:(e={},Object(s["a"])(e,c["a"].name,c["a"]),Object(s["a"])(e,d["a"].name,d["a"]),e),data:function(){return{loading:!1,currPage:1,isLoading:!1,loadingMore:!1,finished:!1,list:[],activeTab:"",products:[]}},activated:function(){var t=Object(o["a"])(window.GLOBAL_ENV.PRODUCTS);if(!Object(h["b"])()){var i=t.findIndex((function(t){return"zhkf"===t}));i>=0&&t.splice(i,1)}this.products=t,this.products.includes(this.activeTab)||(this.products.includes("gcxt")?this.activeTab="gcxt":this.products.includes("zhkf")?this.activeTab="zhkf":this.products.includes("zjapp")?this.activeTab="zjapp":this.activeTab=""),this.init()},computed:{tabsArray:function(){var t=this,i=[];return Object.keys(p).forEach((function(a){t.products.find((function(t){return t===a}))&&i.push({product:a,name:p[a]})})),i},showTab:function(){return!!this.tabsArray&&this.tabsArray.length>1}},methods:{init:function(){this.loading=!1,v=0,this.currPage=1,this.list=[],this.load()},load:function(){var t=this;return"zjapp"===this.activeTab?(this.list=[u["a"]["zjapp"].daily_paper],void(this.finished=!0)):this.loading?Promise.reject(!1):(this.loading=!0,l["a"].getMessageList(this.currPage,this.activeTab).then((function(i){v=i.totalPage,console.log("totalPage ====> ",v),1===t.currPage?t.list=i.list:t.list=t.list.concat(i.list),t.currPage++,t.loading=!1,t.finished=!!(v&&t.currPage>v)||0===v,console.log("this.list.length ===> ",t.list.length)})).catch((function(i){return console.error(i),t.loading=!1,Promise.reject("获取失败")})))},onRefresh:function(){var t=this;return"zjapp"===this.activeTab?(this.isLoading=!1,!1):!this.loading&&(this.isLoading=!0,this.currPage=1,void this.load().then((function(){t.isLoading=!1})).catch((function(){t.isLoading=!1})))},loadMore:function(){var t=this;return this.finished=!!(v&&this.currPage>v)||0===v,this.finished?(this.loadingMore=!1,!1):(console.log("this.load() ===> ",this.load()),this.load().then((function(){t.finished=!0,t.loadingMore=!1})).catch((function(){t.finished=!0,t.loadingMore=!1})))},setState:function(){var t=this;if("zjapp"!==this.activeTab)return l["a"].setState([],this.activeTab).then((function(){t.list.forEach((function(t){t.isRead=!0}))}))},open:function(t){return"gcxt"===this.activeTab&&(t.isRead=!0,l["a"].setState([t.id],this.activeTab)),f["a"].goto(t)},tabsChange:function(){this.init()}}},b=g,y=(a("a4bd"),a("5d22")),m=Object(y["a"])(b,n,r,!1,null,"aa129438",null);i["default"]=m.exports},"2aeb":function(t,i,a){},"4cd5":function(t,i,a){"use strict";var e=a("1f04"),n=a("59bf").find,r=a("05e7"),o="find",s=!0;o in[]&&Array(1)[o]((function(){s=!1})),e({target:"Array",proto:!0,forced:s},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),r(o)},"58c8":function(t,i,a){"use strict";a.d(i,"a",(function(){return c}));var e=a("d08d");function n(t){if(Array.isArray(t))return Object(e["a"])(t)}a("01e5"),a("e487"),a("27ae"),a("c2f8"),a("591f"),a("feb3"),a("7a3a");function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var o=a("caff");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return n(t)||r(t)||Object(o["a"])(t)||s()}},"5d08":function(t,i,a){"use strict";var e=a("1f04"),n=a("97f5"),r=a("0914"),o=a("5156"),s=a("a187"),c=a("b7d9"),d=a("98a5"),f=a("3086"),l=a("7041"),u=l("slice"),h=f("species"),v=[].slice,p=Math.max;e({target:"Array",proto:!0,forced:!u},{slice:function(t,i){var a,e,f,l=c(this),u=s(l.length),g=o(t,u),b=o(void 0===i?u:i,u);if(r(l)&&(a=l.constructor,"function"!=typeof a||a!==Array&&!r(a.prototype)?n(a)&&(a=a[h],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return v.call(l,g,b);for(e=new(void 0===a?Array:a)(p(b-g,0)),f=0;g<b;g++,f++)g in l&&d(e,f,l[g]);return e.length=f,e}})},"7a3a":function(t,i,a){var e=a("1f04"),n=a("f180"),r=a("7e06"),o=!r((function(t){Array.from(t)}));e({target:"Array",stat:!0,forced:o},{from:n})},a4bd:function(t,i,a){"use strict";a("2aeb")},c2f8:function(t,i,a){var e=a("bd91");e("iterator")},caff:function(t,i,a){"use strict";a.d(i,"a",(function(){return n}));a("5d08"),a("27ae"),a("1d43"),a("7a3a"),a("591f");var e=a("d08d");function n(t,i){if(t){if("string"===typeof t)return Object(e["a"])(t,i);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(e["a"])(t,i):void 0}}},d08d:function(t,i,a){"use strict";function e(t,i){(null==i||i>t.length)&&(i=t.length);for(var a=0,e=new Array(i);a<i;a++)e[a]=t[a];return e}a.d(i,"a",(function(){return e}))},e487:function(t,i,a){"use strict";var e=a("1f04"),n=a("8fe5"),r=a("f14a"),o=a("2ccf"),s=a("97f5"),c=a("d320").f,d=a("a123"),f=r.Symbol;if(n&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},u=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),i=this instanceof u?new f(t):void 0===t?f():f(t);return""===t&&(l[i]=!0),i};d(u,f);var h=u.prototype=f.prototype;h.constructor=u;var v=h.toString,p="Symbol(test)"==String(f("test")),g=/^Symbol\((.*)\)[^)]+$/;c(h,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,i=v.call(t);if(o(l,t))return"";var a=p?i.slice(7,-1):i.replace(g,"$1");return""===a?void 0:a}}),e({global:!0,forced:!0},{Symbol:u})}},f180:function(t,i,a){"use strict";var e=a("0c1b"),n=a("f8d3"),r=a("fd17"),o=a("1a0a"),s=a("a187"),c=a("98a5"),d=a("203f");t.exports=function(t){var i,a,f,l,u,h,v=n(t),p="function"==typeof this?this:Array,g=arguments.length,b=g>1?arguments[1]:void 0,y=void 0!==b,m=d(v),j=0;if(y&&(b=e(b,g>2?arguments[2]:void 0,2)),void 0==m||p==Array&&o(m))for(i=s(v.length),a=new p(i);i>j;j++)h=y?b(v[j],j):v[j],c(a,j,h);else for(l=m.call(v),u=l.next,a=new p;!(f=u.call(l)).done;j++)h=y?r(l,b,[f.value,j],!0):f.value,c(a,j,h);return a.length=j,a}},fd17:function(t,i,a){var e=a("baa9"),n=a("cd08");t.exports=function(t,i,a,r){try{return r?i(e(a)[0],a[1]):i(a)}catch(o){throw n(t),o}}}}]);