(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-845c4814"],{"042c":function(e,t,a){var o=a("a655");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,a("85cb").default)("7dcb4a88",o,!0,{sourceMap:!1,shadowMode:!1})},"0f2f":function(e,t,a){"use strict";a("042c")},"4cae":function(e,t,a){"use strict";a.r(t);a("163d");var o=a("3122"),n={props:{currentNode:{type:Object,default:function(){}},currentIndex:{type:Number,default:0}},data:function(){return{}},methods:{preventTouch:function(e){e.stopPropagation()},getThumbnail:function(e){try{return e?o.a.getThumbnailFromUrl(e):""}catch(e){return""}}}},r=(a("0f2f"),a("17cc")),i=Object(r.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"node-content",class:{"node-content-first":0===e.currentIndex,"node-content-complete":"已验收"===e.currentNode.status},on:{touchmove:e.preventTouch}},[a("div",{staticClass:"node-avatar",style:{"background-image":"url("+(e.currentIndex>0?e.getThumbnail(e.currentNode.operator_headimg_url):"")+")"}},[0===e.currentIndex?a("icon",{staticClass:"icon-avatar-start",attrs:{name:"baoyan"}}):e._e(),"已验收"===e.currentNode.status?a("icon",{staticClass:"icon-avatar-complete",attrs:{name:"yiwancheng"}}):e._e(),!e.currentNode.operator_headimg_url&&e.currentIndex>0?a("span",{staticClass:"node-avatar-name",class:{"node-avatar-complete-name":"已验收"===e.currentNode.status}},[e._v(e._s(e.currentNode.operator_user_info&&e.currentNode.operator_user_info.name?e.currentNode.operator_user_info.name.substr(-2):"暂无"))]):e._e()],1),a("div",{staticClass:"node-name"},[a("span",[e._v(e._s(e.currentNode.name))])]),e.currentIndex>0?a("div",{staticClass:"node-line"}):e._e()])}),[],!1,null,"59f35bf6",null);t.default=i.exports},a655:function(e,t,a){(e.exports=a("690e")(!1)).push([e.i,".zjapp .node-content[data-v-59f35bf6]{width:85px;height:120px;position:relative}.zjapp .node-content-first[data-v-59f35bf6]{width:50px}.zjapp .node-avatar[data-v-59f35bf6]{width:50px;height:50px;border:1px solid #dcdfe6;border-radius:50%;position:absolute;right:0;top:10px;background-repeat:no-repeat!important;background-size:100% 100%!important}.zjapp .icon-avatar-start[data-v-59f35bf6]{font-size:26px;color:#4275e8;line-height:46px;text-align:center}.zjapp .icon-avatar-complete[data-v-59f35bf6]{font-size:14px;color:#3db641;position:absolute;bottom:0;right:0;border-radius:50%;background-color:#fff}.zjapp .node-content-complete .node-avatar[data-v-59f35bf6]{border:1px solid #4275e8}.zjapp .node-content-complete .node-line[data-v-59f35bf6]{background:#4275e8}.zjapp .node-avatar-name[data-v-59f35bf6]{font-size:16px;line-height:50px;text-align:center;color:#333}.zjapp .node-avatar-complete-name[data-v-59f35bf6]{color:#4275e8}.zjapp .node-name[data-v-59f35bf6]{width:70px;height:20px;line-height:20px;font-size:12px;color:#666;text-align:center;position:absolute;right:-12px;top:70px}.zjapp .node-name span[data-v-59f35bf6]{word-wrap:break-word;word-break:break-all;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.zjapp .node-line[data-v-59f35bf6]{width:27px;height:1px;background:#dcdfe6;border-color:inherit;position:absolute;left:0;top:35px}",""])}}]);