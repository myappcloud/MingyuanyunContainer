(window["webpackJsonp_module_entry_gcxt_"]=window["webpackJsonp_module_entry_gcxt_"]||[]).push([["chunk-2d225611"],{e3c0:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},a=[],i=(n("6a61"),n("ed32")),u=n("042e"),c=n("f121"),o=n("a740"),s=n("d3d0"),d={name:"Authorize",data:function(){return{tenant_id:""}},watch:{$route:function(t,e){var n=t.query.tenant_id;n&&n!==e.query.tenant_id&&this.$store.dispatch(u["a"],{code:c["f"].join(","),__tenant_id:n})}},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch(s["a"]);case 2:e=Object(o["a"])(),n=this.$route.query.tenant_id,n||(n=e.tenant_id),n&&(this.$store.dispatch(u["a"],{code:c["f"].join(","),__tenant_id:n}),this.tenant_id=n);case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},_=d,h=n("5d22"),p=Object(h["a"])(_,r,a,!1,null,null,null);e["default"]=p.exports}}]);