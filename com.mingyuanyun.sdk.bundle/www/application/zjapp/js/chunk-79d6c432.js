(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-79d6c432"],{1922:function(t,e,r){var o=r("1a17");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,r("85cb").default)("6e8b9670",o,!0,{sourceMap:!1,shadowMode:!1})},"1a17":function(t,e,r){(t.exports=r("690e")(!1)).push([t.i,".zjapp #myVideo[data-v-5cc78fba]{width:100%;height:240px}.zjapp .fullscreen-control-box[data-v-5cc78fba]{position:absolute;z-index:999999999999;transform:translateZ(1000px)}.zjapp .fullscreen-control-box.opacity[data-v-5cc78fba]{opacity:.3}.zjapp .fullscreen-control-box.btns-box[data-v-5cc78fba]{position:absolute;left:47px;bottom:74px;display:flex;flex-direction:row}.zjapp .fullscreen-control-box.btns-box .btn-item[data-v-5cc78fba]{width:55px;height:55px;margin-right:20px;text-align:center;line-height:55px;border-radius:50%;background:rgba(0,0,0,.5);color:#fff}.zjapp .fullscreen-control-box.btns-box .btn-item.active[data-v-5cc78fba]{color:#2c5cf7}.zjapp .fullscreen-control-box.rocker-box[data-v-5cc78fba]{right:40px;bottom:39px}.zjapp .default-control-box .click-control-btns-wrapper[data-v-5cc78fba]{display:flex;flex-direction:row;justify-content:space-between;padding:20px;padding-bottom:0}.zjapp .default-control-box .click-control-btns-wrapper .btn-item[data-v-5cc78fba]{width:140px;height:52px;text-align:center;line-height:52px;border:1px solid #c8c8c8;border-radius:26px;color:#333;background:#fff}.zjapp .default-control-box .click-control-btns-wrapper .btn-item.disabled[data-v-5cc78fba]{color:rgba(51,51,51,.5)}.zjapp .default-control-box .click-control-btns-wrapper .btn-item[data-v-5cc78fba]:active{border:1px solid #2c5cf7;color:#2c5cf7}.zjapp .default-control-box .rocker-ctrl-wrapper[data-v-5cc78fba]{text-align:center}",""])},3:function(t,e){},"31ef":function(t,e,r){var o=r("5e0d");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,r("85cb").default)("3fdb5d3e",o,!0,{sourceMap:!1,shadowMode:!1})},4:function(t,e){},"5e0d":function(t,e,r){(t.exports=r("690e")(!1)).push([t.i,".zjapp .rocker-comp-wrapper{position:relative;display:inline-block;border-radius:50%;background:#fff}.zjapp .rocker-comp-wrapper .arrow-icon{position:absolute;font-size:16px}.zjapp .rocker-comp-wrapper .arrow-icon.active{color:#2c5cf7}.zjapp .rocker-comp-wrapper .arrow-icon.disabled{color:rgba(51,51,51,.5)}.zjapp .rocker-comp-wrapper .arrow-icon.arrow-up{top:20px;left:50%;transform:translateX(-50%)}.zjapp .rocker-comp-wrapper .arrow-icon.arrow-left{top:50%;left:20px;transform:translateY(-50%)}.zjapp .rocker-comp-wrapper .arrow-icon.arrow-right{top:50%;right:20px;transform:translateY(-50%)}.zjapp .rocker-comp-wrapper .arrow-icon.arrow-down{bottom:20px;left:50%;transform:translateX(-50%)}.zjapp .rocker-comp-wrapper .rocker-comp-ctrl-box{position:absolute;border-radius:50%;border:1px solid #c8c8c8;background:#fff;box-shadow:0 0 6px 0 rgba(0,0,0,.1);z-index:9}.zjapp .rocker-comp-wrapper .color-div{position:absolute;width:100%;height:100%;border-radius:50%;background:linear-gradient(270deg,rgba(44,92,247,.22) 0,rgba(44,92,247,0) 20%,transparent)}",""])},"831b":function(t,e,r){t.exports=r.p+"img/default-monitor-list.a3dd8002.jpg"},"8d40":function(t,e,r){"use strict";r("1922")},cba0:function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return s})),r.d(e,"d",(function(){return l})),r.d(e,"e",(function(){return u})),r.d(e,"a",(function(){return p}));var o=r("5e8d"),n=r("162a"),i=r("bcc78"),a=r("da71");function c(t){return Object(o.a)().then((function(){var e=i.a.monitorPointsData.url;return n.a.request(e,t)}))}function s(t){return Object(o.a)().then((function(){var e=a.a.commonProxy.url;return n.a.post(e,{},t)}))}function l(t){return Object(o.a)().then((function(){var e=i.a.monitorList.url;return n.a.request(e,t)}))}function u(t){return Object(o.a)().then((function(){var e=i.a.monitorUpdateCoverUrl.url;return n.a.post(e,{},t)}))}function p(t){return Object(o.a)().then((function(){var e=i.a.monitorControl.url;return n.a.post(e,{},t)}))}},f397:function(t,e,r){"use strict";r.r(e);r("9a33"),r("6491"),r("6a61");var o,n=r("2e91"),i=r("d07f"),a=(r("587e"),r("831b")),c=r.n(a),s=(r("fe6f"),r("2b45"),r("163d"),r("e2a7")),l=0,u=1,p="ZOOM_IN",f="ZOOM_OUT",h="LEFT",d="RIGHT",b="UP",m="DOWN",g="LEFT_UP",v="LEFT_DOWN",w="RIGHT_UP",k="RIGHT_DOWN",C={props:{size:{type:Number,default:251},controlSize:{type:Number,default:115},disabled:{type:Boolean,default:!1},theme:{type:String,default:"default"},canMoveSize:{type:Number,default:10}},data:function(){return{clientLeft:0,clientTop:0,controlClientLeft:0,controlClientTop:0,offLeft:0,offTop:0,isOnTheTouch:!1,lastNotStopEvent:""}},computed:{currentAngle:function(){var t=1*this.offLeft+0*this.offTop,e=0*this.offLeft-1*this.offTop,r=Math.atan2(e,t)/Math.PI*180;return Math.round(r+360)%360},arrowActiveStatus:function(){if(0===this.currentAngle)return[!1,!1,!1,!1];return[this.currentAngle>=22.5&&this.currentAngle<157.5,this.currentAngle>0&&this.currentAngle<67.5||this.currentAngle>=292.5&&this.currentAngle<360,this.currentAngle>=202.5&&this.currentAngle<337.5,this.currentAngle>=112.5&&this.currentAngle<247.5]},colorDivStyle:function(){var t=0;return this.arrowActiveStatus[0]&&this.arrowActiveStatus[1]&&(t=45),this.arrowActiveStatus[0]&&this.arrowActiveStatus[3]&&(t=135),this.arrowActiveStatus[2]&&this.arrowActiveStatus[1]&&(t=315),this.arrowActiveStatus[2]&&this.arrowActiveStatus[3]&&(t=225),0===t&&(this.arrowActiveStatus[0]&&(t=90),this.arrowActiveStatus[1]&&(t=0),this.arrowActiveStatus[2]&&(t=270),this.arrowActiveStatus[3]&&(t=180)),{transform:"rotate(-".concat(t,"deg)")}},wrapperStyle:function(){var t={width:"".concat(this.size,"px"),height:"".concat(this.size,"px"),color:"#333333",border:"solid 1px #C8C8C8"};return"dark"===this.theme&&(t.background="rgba(0,0,0,0.5)",t.color="white!important",t.border="none"),t},controlStyle:function(){var t={left:"".concat((this.size-this.controlSize)/2+this.offLeft,"px"),top:"".concat((this.size-this.controlSize)/2+this.offTop,"px"),width:"".concat(this.controlSize,"px"),height:"".concat(this.controlSize,"px")};return"dark"===this.theme&&(t.background="rgba(255, 255, 255, 0.5)"),t},centerOfCircle:function(){var t=this.size/2;return{left:this.clientLeft+t,top:this.clientTop+t}}},watch:{arrowActiveStatus:{deep:!0,handler:function(t,e){if(t.toString()!==e.toString()){var r=[];if(t[0]&&r.push("top"),t[2]&&r.push("bottom"),t[3]&&r.push("left"),t[1]&&r.push("right"),0===r.length)this.$emit("change","stop-".concat(this.lastNotStopEvent));else{var o=r.join("-"),n={top:b,bottom:m,left:h,right:d,"top-left":g,"top-right":w,"bottom-left":v,"bottom-right":k}[o];this.lastNotStopEvent=n,this.$emit("change",n)}}}}},methods:{_getTouchLeftTop:function(t){var e=t.touches[0];return{left:e.clientX,top:e.clientY}},touchstartHandler:function(t){if(this.disabled)return s.a.alert("当前云台不可控"),!1;var e=this._getTouchLeftTop(t),r=e.left,o=e.top;return r>this.controlClientLeft&&r<this.controlClientLeft+this.controlSize&&o>this.controlClientTop&&o<this.controlClientTop+this.controlSize&&(this.isOnTheTouch=!0,!0)},touchmoveHandler:function(t){if(this.isOnTheTouch){var e=this._getTouchLeftTop(t),r=e.left,o=e.top,n=r-this.centerOfCircle.left,i=o-this.centerOfCircle.top,a=n>=0,c=i>=0,s=Math.abs(n),l=Math.abs(i),u=l/s,p=Math.sqrt(1+Math.pow(u,2)),f=this.canMoveSize/p,h=f*u,d=f>s?s:f,b=h>l?l:h;this.offLeft=a?d:0-d,this.offTop=c?b:0-b}},touchendHandler:function(){this.isOnTheTouch=!1,this.offLeft=0,this.offTop=0},init:function(){var t=this;this.$nextTick((function(){var e=t.$refs["rocker-wrapper"].getBoundingClientRect(),r=t.$refs["rocker-control"].getBoundingClientRect();t.clientLeft=e.left,t.clientTop=e.top,t.controlClientLeft=r.left,t.controlClientTop=r.top}))}}},x=(r("fca9"),r("17cc")),y=Object(x.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"rocker-wrapper",staticClass:"rocker-comp-wrapper",style:t.wrapperStyle,on:{touchstart:function(e){return e.stopPropagation(),e.preventDefault(),t.touchstartHandler(e)},touchmove:function(e){return e.stopPropagation(),e.preventDefault(),t.touchmoveHandler(e)},touchend:function(e){return e.stopPropagation(),e.preventDefault(),t.touchendHandler(e)}}},[r("icon",{staticClass:"arrow-icon arrow-up",class:{active:t.arrowActiveStatus[0],disabled:t.disabled},attrs:{name:"arrow-up"}}),r("icon",{staticClass:"arrow-icon arrow-right",class:{active:t.arrowActiveStatus[1],disabled:t.disabled},attrs:{name:"arrow-right"}}),r("icon",{staticClass:"arrow-icon arrow-down",class:{active:t.arrowActiveStatus[2],disabled:t.disabled},attrs:{name:"arrow-down"}}),r("icon",{staticClass:"arrow-icon arrow-left",class:{active:t.arrowActiveStatus[3],disabled:t.disabled},attrs:{name:"arrow-left"}}),t.currentAngle>0?r("div",{staticClass:"color-div",style:t.colorDivStyle}):t._e(),r("div",{ref:"rocker-control",staticClass:"rocker-comp-ctrl-box",style:t.controlStyle})],1)}),[],!1,null,null,null).exports,S=r("cba0"),T={components:{Rocker:y},props:{id:{type:String,default:""},url:{type:String,default:""},title:{type:String,default:"视频监控"},type:{type:String,default:""}},data:function(){return{cover:c.a,isFirst:!0,player:null,currentIsFullScreen:!1,count:0,rockerDisabled:!0,fullscreenCtrlBtnsLayout:{fangda:{left:0,top:0},suoxiao:{left:0,top:0}},fullscreenRockerIsOpacity:!0,fullscreenRockerIsClickFlag:!1,fullscreenRockerIsOpacityTimeout:null,currentZoomIsChanging:!1,currentZoomIsMakeBig:!1,lastCommand:"",fullscreenBtnItemActive:{zoomIn:!1,zoomOut:!1},rockerConfig:{wrapper:0,content:0}}},computed:{showControlInstance:function(){return"hik"===this.type}},activated:function(){var t=this;this.$nextTick((function(){setTimeout((function(){t.init()}),50)}))},methods:{isFullScreen:function(){var t=this;console.log("全屏"),this.currentIsFullScreen=!0,MUtils.setDeviceOrientation("landscape"),!this.rockerDisabled&&this.showControlInstance&&setTimeout((function(){t.$refs.fullscreenRocker&&t.$refs.fullscreenRocker.init();var e=t.$refs.fangdaBtn.getBoundingClientRect(),r=e.left,o=e.top,n=t.$refs.suoxiaoBtn.getBoundingClientRect(),i=n.left,a=n.top;t.fullscreenCtrlBtnsLayout.fangda.left=r,t.fullscreenCtrlBtnsLayout.fangda.top=o,t.fullscreenCtrlBtnsLayout.suoxiao.left=i,t.fullscreenCtrlBtnsLayout.suoxiao.top=a}),500)},exitfullScreen:function(){var t=this;console.log("退出全屏"),this.currentIsFullScreen=!1,MUtils.setDeviceOrientation("portrait"),setTimeout((function(){t.$refs.rocker&&t.$refs.rocker.init()}),500)},fullScreen:function(){this.count++,this.count%2==0?(console.log("退出全屏"),this.exitfullScreen()):this.isFullScreen()},doMonitorControl:(o=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r,o=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=o.length>0&&void 0!==o[0]?o[0]:u,r=o.length>1&&void 0!==o[1]?o[1]:b,e!==l||r!==this.lastCommand){t.next=4;break}return t.abrupt("return");case 4:if(t.prev=4,e!==l||!this.lastCommand){t.next=8;break}return t.next=8,Object(S.a)({id:this.id,action:u,command:this.lastCommand});case 8:return t.next=10,Object(S.a)({id:this.id,action:e,command:r});case 10:this.rockerDisabled=!1,t.next=17;break;case 13:t.prev=13,t.t0=t.catch(4),100===parseInt(t.t0.errcode)&&(this.rockerDisabled=!0),s.a.alert(t.t0.errmsg);case 17:this.lastCommand=e===u?"":r;case 18:case"end":return t.stop()}}),t,this,[[4,13]])}))),function(){return o.apply(this,arguments)}),rockerChangeHandler:function(t){if(t.startsWith("stop-")){var e=t.split("-");e[1]&&this.doMonitorControl(u,e[1])}else this.doMonitorControl(l,t)},yuntaiZoomCtrl:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.rockerDisabled)return s.a.alert("当前云台不可控");var r=e?"zoomIn":"zoomOut";this.fullscreenBtnItemActive[r]=!0,setTimeout((function(){t.fullscreenBtnItemActive[r]=!1}),100),this.yuntaiZoomCtrling=!0;var o=e?p:f;this.doMonitorControl(l,o),this.currentZoomIsChanging=!0,this.currentZoomIsMakeBig=e},yuntaiZoomCtrlEnd:function(){this.doMonitorControl(u,this.yuntaiZoomCtrCommand),this.currentZoomIsChanging=!1,this.currentZoomIsMakeBig=!1},fullscreenCtrlBtnHandler:function(t,e){var r=this.fullscreenCtrlBtnsLayout[t],o=r.left,n=r.top,i=o+55,a=n+55,c=e.touches[0],s=c.clientX,l=c.clientY;return s>=o&&s<=i&&l>=n&&l<=a&&(this.yuntaiZoomCtrl("fangda"===t),!0)},videoWrapperTouchstartHandler:function(t){if(t.stopPropagation(),this.currentIsFullScreen){var e=this.$refs.fullscreenRocker&&this.$refs.fullscreenRocker.touchstartHandler(t),r=this.fullscreenCtrlBtnHandler("fangda",t),o=this.fullscreenCtrlBtnHandler("suoxiao",t);this.fullscreenRockerIsClickFlag=e||r||o,this.fullscreenRockerIsClickFlag&&(this.fullscreenRockerIsOpacity=!1)}},videoWrapperTouchmoveHandler:function(t){t.stopPropagation(),this.currentIsFullScreen&&this.$refs.fullscreenRocker&&this.$refs.fullscreenRocker.touchmoveHandler(t)},videoWrapperTouchendHandler:function(t){var e=this;t.stopPropagation(),this.currentIsFullScreen&&(this.$refs.fullscreenRocker&&this.$refs.fullscreenRocker.touchendHandler(t),this.fullscreenRockerIsClickFlag&&(this.fullscreenRockerIsOpacityTimeout&&clearTimeout(this.fullscreenRockerIsOpacityTimeout),this.fullscreenRockerIsOpacityTimeout=setTimeout((function(){e.fullscreenRockerIsOpacity=!0}),1e4)),this.currentZoomIsChanging&&this.yuntaiZoomCtrlEnd(this.currentZoomIsMakeBig))},init:function(){var t=this,e=this.createVideoElement();console.log(e);this.player=Object(i.a)(e,{controls:!0,autoplay:!0,preload:"auto",controlBar:{currentTimeDisplay:!1,timeDivider:!1,durationDisplay:!1,progressControl:!1,remainingTimeDisplay:!1,playbackRateMenuButton:!1}}),this.player.ready((function(){t.player.play()})),this.player.on("fullscreenchange",this.fullScreen),this.showControlInstance&&(setTimeout((function(){var e=t.$refs.defaultControlBox.getBoundingClientRect(),r=window.screen.height-(e.top+72+44)+10;r>251&&(r=251);var o=r*(115/251);t.rockerConfig.wrapper=r,t.rockerConfig.content=o,t.$refs.rocker&&t.$refs.rocker.init()}),500),this.doMonitorControl())},createVideoElement:function(){var t=document.createElement("video");t.classList.add("video-js","vjs-big-play-centered","vjs-fluid"),t.style.height="280px",t.poster=this.cover,t.setAttribute("playsinline",!0),t.setAttribute("webkit-playsinline",!0);var e=document.createElement("source");return e.setAttribute("type","video/mp4"),e.setAttribute("src",this.url),t.appendChild(e),this.$refs.scroll.appendChild(t),t}},beforeRouteLeave:function(t,e,r){this.player&&this.player.dispose(),MUtils.setDeviceOrientation("portrait"),r()}},z=(r("8d40"),Object(x.a)(T,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("page-content",{attrs:{title:t.title}},[r("div",{ref:"scroll",staticClass:"scroll-wrap"}),t.showControlInstance?r("div",{ref:"defaultControlBox",staticClass:"default-control-box"},[r("div",{ref:"clickControlBtnsWrapper",staticClass:"click-control-btns-wrapper"},[r("div",{staticClass:"btn-item",class:{disabled:t.rockerDisabled},on:{touchstart:function(e){t.yuntaiZoomCtrl()},touchend:function(e){t.yuntaiZoomCtrlEnd()}}},[r("icon",{attrs:{name:"fangda"}})],1),r("div",{staticClass:"btn-item",class:{disabled:t.rockerDisabled},on:{touchstart:function(e){t.yuntaiZoomCtrl(!1)},touchend:function(e){t.yuntaiZoomCtrlEnd(!1)}}},[r("icon",{attrs:{name:"suoxiao"}})],1)]),0!==t.rockerConfig.wrapper?r("div",{staticClass:"rocker-ctrl-wrapper"},[r("rocker",{ref:"rocker",attrs:{size:t.rockerConfig.wrapper,"control-size":t.rockerConfig.content,disabled:t.rockerDisabled},on:{change:t.rockerChangeHandler}})],1):t._e()]):t._e()])}),[],!1,null,"5cc78fba",null));e.default=z.exports},fca9:function(t,e,r){"use strict";r("31ef")}}]);