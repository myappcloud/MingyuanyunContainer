(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-07363cb3"],{"11e8":function(t,e,i){"use strict";i("9e76"),i("2b45"),i("163d");var o=function(){},n=function(t){var e=Date.now||function(){return+new Date},i={},o=1,n={effect:{}};return n.effect.Animate={requestAnimationFrame:function(){var e=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame,i=!!e;if(e&&!/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(e.toString())&&(i=!1),i)return function(t,i){e(t,i)};var o={},n=1,s=null,a=+new Date;return function(t,e){var i=n++;return o[i]=t,null===s&&(s=setInterval((function(){var t=+new Date,e=o;for(var i in o={},0,e)e.hasOwnProperty(i)&&(e[i](t),a=t);t-a>2500&&(clearInterval(s),s=null)}),1e3/60)),i}}(),stop:function(t){var e=null!=i[t];return e&&(i[t]=null),e},isRunning:function(t){return null!=i[t]},start:function(t,s,a,r,l,c){var _=e(),h=_,p=0,u=0,f=o++;if(c||(c=document.body),f%20==0){var m={};for(var g in i)m[g]=!0;i=m}return i[f]=!0,n.effect.Animate.requestAnimationFrame((function o(m){var g=!0!==m,d=e();if(!i[f]||s&&!s(f))return i[f]=null,void(a&&a(60-u/((d-_)/1e3),f,!1));if(g)for(var v=Math.round((d-h)/(1e3/60))-1,y=0;y<Math.min(v,4);y++)o(!0),u++;r&&(p=(d-_)/r)>1&&(p=1);var T=l?l(p):p;!1!==t(T,d,g)&&1!==p||!g?g&&(h=d,n.effect.Animate.requestAnimationFrame(o,c)):(i[f]=null,a&&a(60-u/((d-_)/1e3),f,1===p||null==r))}),c),f}},n}(window),s=function(t,e){for(var i in this.__callback=t,this.options={scrollingX:!0,scrollingY:!0,animating:!0,animationDuration:250,bouncing:!0,locking:!0,paging:!1,snapping:!1,zooming:!1,minZoom:.5,maxZoom:3,speedMultiplier:1,scrollingComplete:o,penetrationDeceleration:.03,penetrationAcceleration:.08},e)this.options[i]=e[i]},a=function(t){return Math.pow(t-1,3)+1},r=function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},l={__isSingleTouch:!1,__isTracking:!1,__didDecelerationComplete:!1,__isGesturing:!1,__isDragging:!1,__isDecelerating:!1,__isAnimating:!1,__clientLeft:0,__clientTop:0,__clientWidth:0,__clientHeight:0,__contentWidth:0,__contentHeight:0,__snapWidth:100,__snapHeight:100,__refreshHeight:null,__refreshActive:!1,__refreshActivate:null,__refreshDeactivate:null,__refreshStart:null,__zoomLevel:1,__scrollLeft:0,__scrollTop:0,__maxScrollLeft:0,__maxScrollTop:0,__scheduledLeft:0,__scheduledTop:0,__scheduledZoom:0,__lastTouchLeft:null,__lastTouchTop:null,__lastTouchMove:null,__positions:null,__minDecelerationScrollLeft:null,__minDecelerationScrollTop:null,__maxDecelerationScrollLeft:null,__maxDecelerationScrollTop:null,__decelerationVelocityX:null,__decelerationVelocityY:null,setDimensions:function(t,e,i,o){t===+t&&(this.__clientWidth=t),e===+e&&(this.__clientHeight=e),i===+i&&(this.__contentWidth=i),o===+o&&(this.__contentHeight=o),this.__computeScrollMax(),this.scrollTo(this.__scrollLeft,this.__scrollTop,!0)},setPosition:function(t,e){this.__clientLeft=t||0,this.__clientTop=e||0},setSnapSize:function(t,e){this.__snapWidth=t,this.__snapHeight=e},activatePullToRefresh:function(t,e,i,o){this.__refreshHeight=t,this.__refreshActivate=e,this.__refreshDeactivate=i,this.__refreshStart=o},triggerPullToRefresh:function(){this.__publish(this.__scrollLeft,-this.__refreshHeight,this.__zoomLevel,!0),this.__refreshStart&&this.__refreshStart()},finishPullToRefresh:function(){this.__refreshActive=!1,this.__refreshDeactivate&&this.__refreshDeactivate(),this.scrollTo(this.__scrollLeft,this.__scrollTop,!0)},getValues:function(){return{left:this.__scrollLeft,top:this.__scrollTop,zoom:this.__zoomLevel}},getScrollMax:function(){return{left:this.__maxScrollLeft,top:this.__maxScrollTop}},zoomTo:function(t,e,i,o,s){if(!this.options.zooming)throw new Error("Zooming is not enabled!");s&&(this.__zoomComplete=s),this.__isDecelerating&&(n.effect.Animate.stop(this.__isDecelerating),this.__isDecelerating=!1);var a=this.__zoomLevel;null==i&&(i=this.__clientWidth/2),null==o&&(o=this.__clientHeight/2),t=Math.max(Math.min(t,this.options.maxZoom),this.options.minZoom),this.__computeScrollMax(t);var r=(i+this.__scrollLeft)*t/a-i,l=(o+this.__scrollTop)*t/a-o;r>this.__maxScrollLeft?r=this.__maxScrollLeft:r<0&&(r=0),l>this.__maxScrollTop?l=this.__maxScrollTop:l<0&&(l=0),this.__publish(r,l,t,e)},zoomBy:function(t,e,i,o,n){this.zoomTo(this.__zoomLevel*t,e,i,o,n)},scrollTo:function(t,e,i,o){if(this.__isDecelerating&&(n.effect.Animate.stop(this.__isDecelerating),this.__isDecelerating=!1),null!=o&&o!==this.__zoomLevel){if(!this.options.zooming)throw new Error("Zooming is not enabled!");t*=o,e*=o,this.__computeScrollMax(o)}else o=this.__zoomLevel;this.options.scrollingX?this.options.paging?t=Math.round(t/this.__clientWidth)*this.__clientWidth:this.options.snapping&&(t=Math.round(t/this.__snapWidth)*this.__snapWidth):t=this.__scrollLeft,this.options.scrollingY?this.options.paging?e=Math.round(e/this.__clientHeight)*this.__clientHeight:this.options.snapping&&(e=Math.round(e/this.__snapHeight)*this.__snapHeight):e=this.__scrollTop,t=Math.max(Math.min(this.__maxScrollLeft,t),0),e=Math.max(Math.min(this.__maxScrollTop,e),0),t===this.__scrollLeft&&e===this.__scrollTop&&(i=!1),this.__isTracking||this.__publish(t,e,o,i)},scrollBy:function(t,e,i){var o=this.__isAnimating?this.__scheduledLeft:this.__scrollLeft,n=this.__isAnimating?this.__scheduledTop:this.__scrollTop;this.scrollTo(o+(t||0),n+(e||0),i)},doMouseZoom:function(t,e,i,o){var n=t>0?.97:1.03;return this.zoomTo(this.__zoomLevel*n,!1,i-this.__clientLeft,o-this.__clientTop)},doTouchStart:function(t,e){if(null==t.length)throw new Error("Invalid touch list: "+t);if(e instanceof Date&&(e=e.valueOf()),"number"!=typeof e)throw new Error("Invalid timestamp value: "+e);var i,o;this.__interruptedAnimation=!0,this.__isDecelerating&&(n.effect.Animate.stop(this.__isDecelerating),this.__isDecelerating=!1,this.__interruptedAnimation=!0),this.__isAnimating&&(n.effect.Animate.stop(this.__isAnimating),this.__isAnimating=!1,this.__interruptedAnimation=!0);var s=1===t.length;s?(i=t[0].pageX,o=t[0].pageY):(i=Math.abs(t[0].pageX+t[1].pageX)/2,o=Math.abs(t[0].pageY+t[1].pageY)/2),this.__initialTouchLeft=i,this.__initialTouchTop=o,this.__zoomLevelStart=this.__zoomLevel,this.__lastTouchLeft=i,this.__lastTouchTop=o,this.__lastTouchMove=e,this.__lastScale=1,this.__enableScrollX=!s&&this.options.scrollingX,this.__enableScrollY=!s&&this.options.scrollingY,this.__isTracking=!0,this.__didDecelerationComplete=!1,this.__isDragging=!s,this.__isSingleTouch=s,this.__positions=[]},doTouchMove:function(t,e,i){if(null==t.length)throw new Error("Invalid touch list: "+t);if(e instanceof Date&&(e=e.valueOf()),"number"!=typeof e)throw new Error("Invalid timestamp value: "+e);if(this.__isTracking){var o,n;2===t.length?(o=Math.abs(t[0].pageX+t[1].pageX)/2,n=Math.abs(t[0].pageY+t[1].pageY)/2):(o=t[0].pageX,n=t[0].pageY);var s=this.__positions;if(this.__isDragging){var a=o-this.__lastTouchLeft,r=n-this.__lastTouchTop,l=this.__scrollLeft,c=this.__scrollTop,_=this.__zoomLevel;if(null!=i&&this.options.zooming){var h=_;if(_=_/this.__lastScale*i,h!==(_=Math.max(Math.min(_,this.options.maxZoom),this.options.minZoom))){var p=o-this.__clientLeft,u=n-this.__clientTop;l=(p+l)*_/h-p,c=(u+c)*_/h-u,this.__computeScrollMax(_)}}if(this.__enableScrollX){l-=a*this.options.speedMultiplier;var f=this.__maxScrollLeft;(l>f||l<0)&&(this.options.bouncing?l+=a/2*this.options.speedMultiplier:l=l>f?f:0)}if(this.__enableScrollY){c-=r*this.options.speedMultiplier;var m=this.__maxScrollTop;(c>m||c<0)&&(this.options.bouncing?(c+=r/2*this.options.speedMultiplier,this.__enableScrollX||null==this.__refreshHeight||(!this.__refreshActive&&c<=-this.__refreshHeight?(this.__refreshActive=!0,this.__refreshActivate&&this.__refreshActivate()):this.__refreshActive&&c>-this.__refreshHeight&&(this.__refreshActive=!1,this.__refreshDeactivate&&this.__refreshDeactivate()))):c=c>m?m:0)}s.length>60&&s.splice(0,30),s.push(l,c,e),this.__publish(l,c,_)}else{var g=this.options.locking?3:0,d=Math.abs(o-this.__initialTouchLeft),v=Math.abs(n-this.__initialTouchTop);this.__enableScrollX=this.options.scrollingX&&d>=g,this.__enableScrollY=this.options.scrollingY&&v>=g,s.push(this.__scrollLeft,this.__scrollTop,e),this.__isDragging=(this.__enableScrollX||this.__enableScrollY)&&(d>=5||v>=5),this.__isDragging&&(this.__interruptedAnimation=!1)}this.__lastTouchLeft=o,this.__lastTouchTop=n,this.__lastTouchMove=e,this.__lastScale=i}},doTouchEnd:function(t){if(t instanceof Date&&(t=t.valueOf()),"number"!=typeof t)throw new Error("Invalid timestamp value: "+t);if(this.__isTracking){if(this.__isTracking=!1,this.__isDragging)if(this.__isDragging=!1,this.__isSingleTouch&&this.options.animating&&t-this.__lastTouchMove<=100){for(var e=this.__positions,i=e.length-1,o=i,n=i;n>0&&e[n]>this.__lastTouchMove-100;n-=3)o=n;if(o!==i){var s=e[i]-e[o],a=this.__scrollLeft-e[o-2],r=this.__scrollTop-e[o-1];this.__decelerationVelocityX=a/s*(1e3/60),this.__decelerationVelocityY=r/s*(1e3/60);var l=this.options.paging||this.options.snapping?4:1;Math.abs(this.__decelerationVelocityX)>l||Math.abs(this.__decelerationVelocityY)>l?this.__refreshActive||this.__startDeceleration(t):this.options.scrollingComplete()}else this.options.scrollingComplete()}else t-this.__lastTouchMove>100&&this.options.scrollingComplete();this.__isDecelerating||(this.__refreshActive&&this.__refreshStart?(this.__publish(this.__scrollLeft,-this.__refreshHeight,this.__zoomLevel,!0),this.__refreshStart&&this.__refreshStart()):((this.__interruptedAnimation||this.__isDragging)&&this.options.scrollingComplete(),this.scrollTo(this.__scrollLeft,this.__scrollTop,!0,this.__zoomLevel),this.__refreshActive&&(this.__refreshActive=!1,this.__refreshDeactivate&&this.__refreshDeactivate()))),this.__positions.length=0}},__publish:function(t,e,i,o){var s=this,l=s.__isAnimating;if(l&&(n.effect.Animate.stop(l),s.__isAnimating=!1),o&&s.options.animating){s.__scheduledLeft=t,s.__scheduledTop=e,s.__scheduledZoom=i;var c=s.__scrollLeft,_=s.__scrollTop,h=s.__zoomLevel,p=t-c,u=e-_,f=i-h;s.__isAnimating=n.effect.Animate.start((function(t,e,i){i&&(s.__scrollLeft=c+p*t,s.__scrollTop=_+u*t,s.__zoomLevel=h+f*t,s.__callback&&s.__callback(s.__scrollLeft,s.__scrollTop,s.__zoomLevel))}),(function(t){return s.__isAnimating===t}),(function(t,e,i){e===s.__isAnimating&&(s.__isAnimating=!1),(s.__didDecelerationComplete||i)&&s.options.scrollingComplete(),s.options.zooming&&(s.__computeScrollMax(),s.__zoomComplete&&(s.__zoomComplete(),s.__zoomComplete=null))}),s.options.animationDuration,l?a:r)}else s.__scheduledLeft=s.__scrollLeft=t,s.__scheduledTop=s.__scrollTop=e,s.__scheduledZoom=s.__zoomLevel=i,s.__callback&&s.__callback(t,e,i),s.options.zooming&&(s.__computeScrollMax(),s.__zoomComplete&&(s.__zoomComplete(),s.__zoomComplete=null))},__computeScrollMax:function(t){null==t&&(t=this.__zoomLevel),this.__maxScrollLeft=Math.max(this.__contentWidth*t-this.__clientWidth,0),this.__maxScrollTop=Math.max(this.__contentHeight*t-this.__clientHeight,0)},__startDeceleration:function(t){var e=this;if(e.options.paging){var i=Math.max(Math.min(e.__scrollLeft,e.__maxScrollLeft),0),o=Math.max(Math.min(e.__scrollTop,e.__maxScrollTop),0),s=e.__clientWidth,a=e.__clientHeight;e.__minDecelerationScrollLeft=Math.floor(i/s)*s,e.__minDecelerationScrollTop=Math.floor(o/a)*a,e.__maxDecelerationScrollLeft=Math.ceil(i/s)*s,e.__maxDecelerationScrollTop=Math.ceil(o/a)*a}else e.__minDecelerationScrollLeft=0,e.__minDecelerationScrollTop=0,e.__maxDecelerationScrollLeft=e.__maxScrollLeft,e.__maxDecelerationScrollTop=e.__maxScrollTop;var r=e.options.snapping?4:.001;e.__isDecelerating=n.effect.Animate.start((function(t,i,o){e.__stepThroughDeceleration(o)}),(function(){var t=Math.abs(e.__decelerationVelocityX)>=r||Math.abs(e.__decelerationVelocityY)>=r;return t||(e.__didDecelerationComplete=!0),t}),(function(t,i,o){e.__isDecelerating=!1,e.__didDecelerationComplete&&e.options.scrollingComplete(),e.scrollTo(e.__scrollLeft,e.__scrollTop,e.options.snapping)}))},__stepThroughDeceleration:function(t){var e=this.__scrollLeft+this.__decelerationVelocityX,i=this.__scrollTop+this.__decelerationVelocityY;if(!this.options.bouncing){var o=Math.max(Math.min(this.__maxDecelerationScrollLeft,e),this.__minDecelerationScrollLeft);o!==e&&(e=o,this.__decelerationVelocityX=0);var n=Math.max(Math.min(this.__maxDecelerationScrollTop,i),this.__minDecelerationScrollTop);n!==i&&(i=n,this.__decelerationVelocityY=0)}if(t?this.__publish(e,i,this.__zoomLevel):(this.__scrollLeft=e,this.__scrollTop=i),!this.options.paging){this.__decelerationVelocityX*=.95,this.__decelerationVelocityY*=.95}if(this.options.bouncing){var s=0,a=0,r=this.options.penetrationDeceleration,l=this.options.penetrationAcceleration;e<this.__minDecelerationScrollLeft?s=this.__minDecelerationScrollLeft-e:e>this.__maxDecelerationScrollLeft&&(s=this.__maxDecelerationScrollLeft-e),i<this.__minDecelerationScrollTop?a=this.__minDecelerationScrollTop-i:i>this.__maxDecelerationScrollTop&&(a=this.__maxDecelerationScrollTop-i),0!==s&&(s*this.__decelerationVelocityX<=0?this.__decelerationVelocityX+=s*r:this.__decelerationVelocityX=s*l),0!==a&&(a*this.__decelerationVelocityY<=0?this.__decelerationVelocityY+=a*r:this.__decelerationVelocityY=a*l)}}};for(var c in l)s.prototype[c]=l[c];var _=s;var h=function(t){var e,i=window,o=document.documentElement.style;i.opera&&"[object Opera]"===Object.prototype.toString.call(opera)?e="presto":"MozAppearance"in o?e="gecko":"WebkitAppearance"in o?e="webkit":"string"==typeof navigator.cpuClass&&(e="trident");var n={trident:"ms",gecko:"Moz",webkit:"Webkit",presto:"O"}[e],s=document.createElement("div"),a=n+"Perspective",r=n+"Transform";return void 0!==s.style[a]?function(e,i,o){t.style[r]="translate3d("+-e+"px,"+-i+"px,0) scale("+o+")"}:void 0!==s.style[r]?function(e,i,o){t.style[r]="translate("+-e+"px,"+-i+"px) scale("+o+")"}:function(e,i,o){t.style.marginLeft=e?-e/o+"px":"",t.style.marginTop=i?-i/o+"px":"",t.style.zoom=o||""}},p=i("17cc"),u=Object(p.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"spinner",attrs:{viewBox:"0 0 64 64"}},[e("g",{attrs:{"stroke-width":"4","stroke-linecap":"round"}},[e("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(180)"}},[e("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1",repeatCount:"indefinite"}})]),e("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(210)"}},[e("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:"0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0",repeatCount:"indefinite"}})]),e("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(240)"}},[e("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1",repeatCount:"indefinite"}})]),e("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(270)"}},[e("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15",repeatCount:"indefinite"}})]),e("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(300)"}},[e("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25",repeatCount:"indefinite"}})]),e("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(330)"}},[e("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35",repeatCount:"indefinite"}})]),e("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(0)"}},[e("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45",repeatCount:"indefinite"}})]),e("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(30)"}},[e("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55",repeatCount:"indefinite"}})]),e("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(60)"}},[e("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65",repeatCount:"indefinite"}})]),e("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(90)"}},[e("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7",repeatCount:"indefinite"}})]),e("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(120)"}},[e("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85",repeatCount:"indefinite"}})]),e("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(150)"}},[e("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1",repeatCount:"indefinite"}})])])])}),[],!1,null,null,null).exports,f={props:{fillColor:{type:String,default:"#AAA"}}},m=Object(p.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticStyle:{"enable-background":"new 0 0 63.657 63.657"},attrs:{viewBox:"0 0 63.657 63.657","xml:space":"preserve",width:"512px",height:"512px"}},[e("g",[e("g",[e("g",[e("g",[e("polygon",{attrs:{points:"31.891,63.657 0.012,35.835 2.642,32.821 31.886,58.343 61.009,32.824 63.645,35.832",fill:this.fillColor}})])]),e("g",[e("g",[e("rect",{attrs:{x:"29.827",width:"4",height:"60",fill:this.fillColor}})])])]),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g")]),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g")])}),[],!1,null,null,null).exports,g=/^[\d]+(\%)?$/,d=function(t){return"%"!==t[t.length-1]?t+"px":t},v=function(t){return g.test(t)},y={name:"IonicScroller",components:{Spinner:u,Arrow:m},props:{onRefresh:Function,onInfinite:Function,refreshText:{type:String,default:"下拉刷新"},noDataText:{type:String,default:"没有更多数据"},width:{type:String,default:"100%",validator:v},height:{type:String,default:"100%",validator:v},snapping:{type:Boolean,default:!1},snapWidth:{type:Number,default:100},snapHeight:{type:Number,default:100},animating:{type:Boolean,default:!0},animationDuration:{type:Number,default:250},bouncing:{type:Boolean,default:!0},scrollingX:{type:Boolean,default:!1},scrollingY:{type:Boolean,default:!0},refreshLayerColor:{type:String,default:"#AAA"},loadingLayerColor:{type:String,default:"#AAA"},cssClass:String,minContentHeight:{type:Number,default:0}},data:function(){return{containerId:"outer-"+Math.random().toString(36).substring(3,8),contentId:"inner-"+Math.random().toString(36).substring(3,8),state:0,loadingState:0,showLoading:!1,container:void 0,content:void 0,scroller:void 0,pullToRefreshLayer:void 0,mousedown:!1,infiniteTimer:void 0,resizeTimer:void 0,positionCache:{}}},computed:{w:function(){return d(this.width)},h:function(){return d(this.height)},showInfiniteLayer:function(){var t=0;return this.content&&(t=this.content.offsetHeight),!!this.onInfinite&&t>this.minContentHeight}},activated:function(){var t=this;this.$router.isBack&&(this.positionCache.left||this.positionCache.top)&&setTimeout((function(){t.scrollTo(t.positionCache.left||0,t.positionCache.top||0,null)}),0)},deactivated:function(){this.positionCache=this.getPosition()},mounted:function(){var t=this;this.container=document.getElementById(this.containerId),this.container.style.width=this.w,this.container.style.height=this.h,this.content=document.getElementById(this.contentId),this.cssClass&&this.content.classList.add(this.cssClass),this.pullToRefreshLayer=this.content.getElementsByTagName("div")[0];var e=h(this.content);this.scroller=new _(e,{scrollingX:this.scrollingX,scrollingY:this.scrollingY,snapping:this.snapping,animating:this.animating,animationDuration:this.animationDuration,bouncing:this.bouncing}),this.onRefresh&&this.scroller.activatePullToRefresh(60,(function(){t.state=1}),(function(){t.state=0}),(function(){t.state=2,t.$on("$finishPullToRefresh",(function(){setTimeout((function(){t.state=0,t.finishPullToRefresh()}))})),t.onRefresh(t.finishPullToRefresh)})),this.onInfinite&&(this.infiniteTimer=setInterval((function(){var e=t.scroller.getValues().top;if(t.content.offsetHeight>0&&e+60>t.content.offsetHeight-t.container.clientHeight){if(t.loadingState)return;t.loadingState=1,t.showLoading=!0,t.onInfinite(t.finishInfinite)}}),10));var i=this.container.getBoundingClientRect();this.scroller.setPosition(i.left+this.container.clientLeft,i.top+this.container.clientTop),this.snapping&&this.scroller.setSnapSize(this.snapWidth,this.snapHeight);var o=function(){return{width:t.content.offsetWidth,height:t.content.offsetHeight}},n=o(),s=n.content_width,a=n.content_height;this.resizeTimer=setInterval((function(){var e=o(),i=e.width,n=e.height;i===s&&n===a||(s=i,a=n,t.resize())}),10)},destroyed:function(){clearInterval(this.resizeTimer),this.infiniteTimer&&clearInterval(this.infiniteTimer)},methods:{resize:function(){var t=this.container,e=this.content;this.scroller.setDimensions(t.clientWidth,t.clientHeight,Math.max(e.offsetWidth,this.$slots.default?this.$slots.default[0].elm.offsetWidth:0),e.offsetHeight)},finishPullToRefresh:function(){this.scroller.finishPullToRefresh()},finishInfinite:function(t){this.loadingState=t?2:0,this.showLoading=!1,2===this.loadingState&&this.resetLoadingState()},triggerPullToRefresh:function(){this.scroller.triggerPullToRefresh()},scrollTo:function(t,e,i){this.scroller.scrollTo(t,e,i)},scrollBy:function(t,e,i){this.scroller.scrollBy(t,e,i)},touchStart:function(t){t.target.tagName.match(/input|textarea|select/i)||this.scroller.doTouchStart(t.touches,t.timeStamp)},touchMove:function(t){t.preventDefault(),this.scroller.doTouchMove(t.touches,t.timeStamp)},touchEnd:function(t){this.scroller.doTouchEnd(t.timeStamp)},mouseDown:function(t){t.target.tagName.match(/input|textarea|select/i)||(this.scroller.doTouchStart([{pageX:t.pageX,pageY:t.pageY}],t.timeStamp),this.mousedown=!0)},mouseMove:function(t){this.mousedown&&(this.scroller.doTouchMove([{pageX:t.pageX,pageY:t.pageY}],t.timeStamp),this.mousedown=!0)},mouseUp:function(t){this.mousedown&&(this.scroller.doTouchEnd(t.timeStamp),this.mousedown=!1)},getPosition:function(){var t=this.scroller.getValues();return{left:parseInt(t.left),top:parseInt(t.top)}},resetLoadingState:function(){var t=this;this.scroller.getValues().top+60>this.content.offsetHeight-this.container.clientHeight?setTimeout((function(){t.resetLoadingState()}),1e3):this.loadingState=0}}},T=(i("835d"),Object(p.a)(y,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"_v-container",attrs:{id:t.containerId},on:{touchstart:function(e){t.touchStart(e)},touchmove:function(e){t.touchMove(e)},touchend:function(e){t.touchEnd(e)},mousedown:function(e){t.mouseDown(e)},mousemove:function(e){t.mouseMove(e)},mouseup:function(e){t.mouseUp(e)}}},[i("div",{staticClass:"_v-content",attrs:{id:t.contentId}},[t.onRefresh?i("div",{staticClass:"pull-to-refresh-layer",class:{active:1==t.state,"active refreshing":2==t.state}},[i("span",{staticClass:"spinner-holder"},[2!=t.state?i("arrow",{staticClass:"arrow",attrs:{"fill-color":t.refreshLayerColor}}):t._e(),2!=t.state?i("span",{staticClass:"text",style:{color:t.refreshLayerColor},domProps:{textContent:t._s(t.refreshText)}}):t._e(),2==t.state?i("span",[t._t("refresh-spinner",[i("spinner",{style:{fill:t.refreshLayerColor,stroke:t.refreshLayerColor}})])],2):t._e()],1)]):t._e(),t._t("default"),t.showInfiniteLayer?i("div",{staticClass:"loading-layer"},[i("span",{staticClass:"spinner-holder",class:{active:t.showLoading}},[t._t("infinite-spinner",[i("spinner",{style:{fill:t.loadingLayerColor,stroke:t.loadingLayerColor}})])],2),i("div",{staticClass:"no-data-text",class:{active:!t.showLoading&&2==t.loadingState},style:{color:t.loadingLayerColor},domProps:{textContent:t._s(t.noDataText)}})]):t._e()],2)])}),[],!1,null,"5598c3d0",null));e.a=T.exports},"835d":function(t,e,i){"use strict";i("8ac6")},"8ac6":function(t,e,i){var o=i("c273");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i("85cb").default)("53dfc960",o,!0,{sourceMap:!1,shadowMode:!1})},c273:function(t,e,i){(t.exports=i("690e")(!1)).push([t.i,".zjapp ._v-container[data-v-5598c3d0]{-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%;height:100%;position:absolute;top:0;left:0;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.zjapp ._v-container>._v-content[data-v-5598c3d0]{width:100%;-webkit-transform-origin:left top;-webkit-transform:translateZ(0);-moz-transform-origin:left top;-moz-transform:translateZ(0);-ms-transform-origin:left top;-ms-transform:translateZ(0);-o-transform-origin:left top;-o-transform:translateZ(0);transform-origin:left top;transform:translateZ(0)}.zjapp ._v-container>._v-content>.pull-to-refresh-layer[data-v-5598c3d0]{width:100%;height:60px;margin-top:-60px;text-align:center;font-size:16px;color:#aaa}.zjapp ._v-container>._v-content>.loading-layer[data-v-5598c3d0]{width:100%;height:60px;text-align:center;font-size:16px;line-height:60px;color:#aaa;position:relative}.zjapp ._v-container>._v-content>.loading-layer>.no-data-text[data-v-5598c3d0]{position:absolute;left:0;top:0;width:100%;height:100%;z-index:1}.zjapp ._v-container>._v-content>.loading-layer>.no-data-text[data-v-5598c3d0],.zjapp ._v-container>._v-content>.loading-layer>.spinner-holder[data-v-5598c3d0]{opacity:0;transition:opacity .15s linear;-webkit-transition:opacity .15s linear}.zjapp ._v-container>._v-content>.loading-layer>.no-data-text.active[data-v-5598c3d0],.zjapp ._v-container>._v-content>.loading-layer>.spinner-holder.active[data-v-5598c3d0]{opacity:1}.zjapp ._v-container>._v-content>.loading-layer .spinner-holder[data-v-5598c3d0],.zjapp ._v-container>._v-content>.pull-to-refresh-layer .spinner-holder[data-v-5598c3d0]{text-align:center;-webkit-font-smoothing:antialiased}.zjapp ._v-container>._v-content>.loading-layer .spinner-holder .arrow[data-v-5598c3d0],.zjapp ._v-container>._v-content>.pull-to-refresh-layer .spinner-holder .arrow[data-v-5598c3d0]{width:20px;height:20px;margin:8px auto 0 auto;transform:translateZ(0) rotate(0deg);transition:transform .2s linear}.zjapp ._v-container>._v-content>.loading-layer .spinner-holder .text[data-v-5598c3d0],.zjapp ._v-container>._v-content>.pull-to-refresh-layer .spinner-holder .text[data-v-5598c3d0]{display:block;margin:0 auto;font-size:14px;line-height:20px;color:#aaa}.zjapp ._v-container>._v-content>.loading-layer .spinner-holder .spinner[data-v-5598c3d0],.zjapp ._v-container>._v-content>.pull-to-refresh-layer .spinner-holder .spinner[data-v-5598c3d0]{margin-top:14px;width:32px;height:32px;fill:#444;stroke:#69717d}.zjapp ._v-container>._v-content>.pull-to-refresh-layer.active .spinner-holder .arrow[data-v-5598c3d0]{transform:translateZ(0) rotate(180deg)}",""])}}]);