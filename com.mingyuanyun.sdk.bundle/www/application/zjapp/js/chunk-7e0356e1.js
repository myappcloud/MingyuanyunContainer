(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-7e0356e1"],{3:function(e,t){},4:function(e,t){},"43f3":function(e,t,n){(e.exports=n("690e")(!1)).push([e.i,".zjapp #myVideo[data-v-73169b8e]{width:100%;height:240px}",""])},"4d9f":function(e,t,n){var i=n("43f3");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("85cb").default)("7d49bfb8",i,!0,{sourceMap:!1,shadowMode:!1})},"831b":function(e,t,n){e.exports=n.p+"img/default-monitor-list.a3dd8002.jpg"},"9beb":function(e,t,n){"use strict";n("4d9f")},f397:function(e,t,n){"use strict";n.r(t);var i=n("d07f"),o=(n("587e"),n("831b")),s=n.n(o),r=n("fe6f"),a=0;function l(e){document.fullscreenElement?c():u()}function c(){console.log("全屏"),MUtils.setDeviceOrientation("landscape")}function u(){console.log("退出全屏"),MUtils.setDeviceOrientation()}function p(){++a%2==0?(console.log("退出全屏"),u()):c()}var d={props:{url:{type:String,default:""},title:{type:String,default:"视频监控"}},data:function(){return{cover:s.a,isFirst:!0,player:null}},activated:function(){var e=this;this.$nextTick((function(){setTimeout((function(){e.init()}),50)}))},methods:{init:function(){var e=this,t=this.createVideoElement();console.log(t);this.player=Object(i.a)(t,{controls:!0,autoplay:!0,preload:"auto",controlBar:{currentTimeDisplay:!1,timeDivider:!1,durationDisplay:!1,progressControl:!1,remainingTimeDisplay:!1,playbackRateMenuButton:!1}}),this.player.ready((function(){e.player.play()})),Object(r.a)()?this.player.on("fullscreenchange",l):this.player.on("fullscreenchange",p)},createVideoElement:function(){var e=document.createElement("video");e.classList.add("video-js","vjs-big-play-centered","vjs-fluid"),e.style.height="280px",e.poster=this.cover;var t=document.createElement("source");return t.setAttribute("type","video/mp4"),t.setAttribute("src",this.url),e.appendChild(t),this.$refs.scroll.appendChild(e),e}},beforeRouteLeave:function(e,t,n){this.player&&this.player.dispose(),n()}},f=(n("9beb"),n("17cc")),h=Object(f.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("page-content",{attrs:{title:this.title}},[t("div",{ref:"scroll",staticClass:"scroll-wrap"})])}),[],!1,null,"73169b8e",null);t.default=h.exports}}]);