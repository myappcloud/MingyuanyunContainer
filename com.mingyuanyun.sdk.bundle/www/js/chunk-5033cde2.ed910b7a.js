(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5033cde2"],{"0494":function(t,i,e){"use strict";e.r(i);var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("app-container",[e("app-header",{attrs:{title:"消息"},on:{"click-right":t.setState}},[e("span",{attrs:{slot:"right"},slot:"right"},[t._v("全部已读")])]),t.showTab?e("van-tabs",{attrs:{color:"#2c5cf7","line-width":16},on:{change:t.tabsChange},model:{value:t.activeTab,callback:function(i){t.activeTab=i},expression:"activeTab"}},t._l(t.tabsArray,(function(t){return e("van-tab",{key:t.product,attrs:{title:t.name,name:t.product}})})),1):t._e(),e("div",{staticClass:"list"},[e("van-pull-refresh",{staticClass:"refresh-wrapper",on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(i){t.isLoading=i},expression:"isLoading"}},[e("empty-page",{attrs:{emptyMsg:"暂无消息",showEmpty:!t.list.length,loadingPage:this.loading}}),e("van-list",{attrs:{finished:t.finished,"finished-text":"— 干工程是有底线的 —","immediate-check":!1},on:{load:t.loadMore},model:{value:t.loadingMore,callback:function(i){t.loadingMore=i},expression:"loadingMore"}},t._l(t.list,(function(i,n){return e("div",{key:n,staticClass:"block",on:{click:function(e){return t.open(i)}}},[e("div",[e("div",{staticClass:"toper"},[e("span",{staticClass:"type"},[e("img",{attrs:{src:i.icon||""}}),t._v(" "+t._s(i.type)+" ")]),e("span",{staticClass:"time"},[t._v(t._s(i.date))])]),e("div",{staticClass:"inner"},[e("div",{staticClass:"title",class:{unread:!i.isRead}},[t._v(" "+t._s(i.title)+" ")]),e("div",{staticClass:"message"},[t._v(t._s(i.message))])])])])})),0)],1)],1)],1)},r=[],o=(e("51d7"),e("77f1"),e("cdf1"),e("5cff"),e("4318"),e("b4e6"),e("1e6a"),e("5e68"),e("4d20"),e("2e4f"),e("dcd4"),e("4c09")),s=e("28f8"),c=e("8bee"),l=e("273e"),u=e("c325"),d=e("3c4e"),f=e("6569"),h=e("b38c"),v=0,p={gcxt:"工程协同",zhkf:"智慧客服",zjapp:"工程在线"},g={name:"MessageIndex",components:(n={},Object(s["a"])(n,c["a"].name,c["a"]),Object(s["a"])(n,l["a"].name,l["a"]),n),data:function(){return{loading:!1,currPage:1,isLoading:!1,loadingMore:!1,finished:!1,list:[],activeTab:"",products:[]}},activated:function(){var t=Object(o["a"])(window.GLOBAL_ENV.PRODUCTS);if(!Object(h["b"])()){var i=t.findIndex((function(t){return"zhkf"===t}));i>=0&&t.splice(i,1)}this.products=t,this.products.includes(this.activeTab)||(this.products.includes("gcxt")?this.activeTab="gcxt":this.products.includes("zhkf")?this.activeTab="zhkf":this.products.includes("zjapp")?this.activeTab="zjapp":this.activeTab=""),this.init()},computed:{tabsArray:function(){var t=this,i=[];return Object.keys(p).forEach((function(e){t.products.find((function(t){return t===e}))&&i.push({product:e,name:p[e]})})),i},showTab:function(){return!!this.tabsArray&&this.tabsArray.length>1}},methods:{init:function(){this.loading=!1,v=0,this.currPage=1,this.list=[],this.load()},load:function(){var t=this;return"zjapp"===this.activeTab?(this.list=[f["a"]["zjapp"].daily_paper],void(this.finished=!0)):this.loading?Promise.reject(!1):(this.loading=!0,d["a"].getMessageList(this.currPage,this.activeTab).then((function(i){v=i.totalPage,console.log("totalPage ====> ",v),1===t.currPage?t.list=i.list:t.list=t.list.concat(i.list),t.currPage++,t.loading=!1,t.finished=!!(v&&t.currPage>v)||0===v,console.log("this.list.length ===> ",t.list.length)})).catch((function(i){return console.error(i),t.loading=!1,Promise.reject("获取失败")})))},onRefresh:function(){var t=this;return"zjapp"===this.activeTab?(this.isLoading=!1,!1):!this.loading&&(this.isLoading=!0,this.currPage=1,void this.load().then((function(){t.isLoading=!1})).catch((function(){t.isLoading=!1})))},loadMore:function(){var t=this;return this.finished=!!(v&&this.currPage>v)||0===v,this.finished?(this.loadingMore=!1,!1):(console.log("this.load() ===> ",this.load()),this.load().then((function(){t.finished=!0,t.loadingMore=!1})).catch((function(){t.finished=!0,t.loadingMore=!1})))},setState:function(){var t=this;if("zjapp"!==this.activeTab)return d["a"].setState([],this.activeTab).then((function(){t.list.forEach((function(t){t.isRead=!0}))}))},open:function(t){return"gcxt"===this.activeTab&&(t.isRead=!0,d["a"].setState([t.id],this.activeTab)),u["a"].goto(t)},tabsChange:function(){this.init()}}},b=g,y=(e("a4bd"),e("5d22")),m=Object(y["a"])(b,a,r,!1,null,"aa129438",null);i["default"]=m.exports},"2aeb":function(t,i,e){},3098:function(t,i,e){"use strict";var n=e("bbcf"),a=e("6921"),r=e("4c16"),o=e("631e"),s=e("2fb1"),c=e("60ce").f,l=e("7e26"),u=r.Symbol;if(a&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),i=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(d[i]=!0),i};l(f,u);var h=f.prototype=u.prototype;h.constructor=f;var v=h.toString,p="Symbol(test)"==String(u("test")),g=/^Symbol\((.*)\)[^)]+$/;c(h,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,i=v.call(t);if(o(d,t))return"";var e=p?i.slice(7,-1):i.replace(g,"$1");return""===e?void 0:e}}),n({global:!0,forced:!0},{Symbol:f})}},"3e68":function(t,i,e){var n=e("bbcf"),a=e("fa18"),r=e("9997"),o=!r((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:o},{from:a})},"4c09":function(t,i,e){"use strict";e.d(i,"a",(function(){return c}));var n=e("ed16");function a(t){if(Array.isArray(t))return Object(n["a"])(t)}e("f869"),e("3098"),e("eb14"),e("3e68"),e("4d20"),e("2181"),e("659e");function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var o=e("69a9");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||r(t)||Object(o["a"])(t)||s()}},"69a9":function(t,i,e){"use strict";e.d(i,"a",(function(){return a}));e("3e68"),e("eb27"),e("1e6a"),e("4d20"),e("8d56"),e("2181");var n=e("ed16");function a(t,i){if(t){if("string"===typeof t)return Object(n["a"])(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(n["a"])(t,i):void 0}}},"77f1":function(t,i,e){"use strict";var n=e("bbcf"),a=e("0ecc").find,r=e("33a4"),o=e("e9a9"),s="find",c=!0,l=o(s);s in[]&&Array(1)[s]((function(){c=!1})),n({target:"Array",proto:!0,forced:c||!l},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),r(s)},a4bd:function(t,i,e){"use strict";e("2aeb")},eb14:function(t,i,e){var n=e("41ba");n("iterator")},eb27:function(t,i,e){"use strict";var n=e("bbcf"),a=e("2fb1"),r=e("ec82"),o=e("5501"),s=e("5152"),c=e("e855"),l=e("7389"),u=e("19d6"),d=e("780c"),f=e("e9a9"),h=d("slice"),v=f("slice",{ACCESSORS:!0,0:0,1:2}),p=u("species"),g=[].slice,b=Math.max;n({target:"Array",proto:!0,forced:!h||!v},{slice:function(t,i){var e,n,u,d=c(this),f=s(d.length),h=o(t,f),v=o(void 0===i?f:i,f);if(r(d)&&(e=d.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)?a(e)&&(e=e[p],null===e&&(e=void 0)):e=void 0,e===Array||void 0===e))return g.call(d,h,v);for(n=new(void 0===e?Array:e)(b(v-h,0)),u=0;h<v;h++,u++)h in d&&l(n,u,d[h]);return n.length=u,n}})},ed16:function(t,i,e){"use strict";function n(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,n=new Array(i);e<i;e++)n[e]=t[e];return n}e.d(i,"a",(function(){return n}))},f719:function(t,i,e){var n=e("708d"),a=e("9cc0");t.exports=function(t,i,e,r){try{return r?i(n(e)[0],e[1]):i(e)}catch(o){throw a(t),o}}},fa18:function(t,i,e){"use strict";var n=e("9d80"),a=e("529d"),r=e("f719"),o=e("5a4f"),s=e("5152"),c=e("7389"),l=e("8fcf");t.exports=function(t){var i,e,u,d,f,h,v=a(t),p="function"==typeof this?this:Array,g=arguments.length,b=g>1?arguments[1]:void 0,y=void 0!==b,m=l(v),j=0;if(y&&(b=n(b,g>2?arguments[2]:void 0,2)),void 0==m||p==Array&&o(m))for(i=s(v.length),e=new p(i);i>j;j++)h=y?b(v[j],j):v[j],c(e,j,h);else for(d=m.call(v),f=d.next,e=new p;!(u=f.call(d)).done;j++)h=y?r(d,b,[u.value,j],!0):u.value,c(e,j,h);return e.length=j,e}}}]);