(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-11cbc228"],{"234e":function(t,e,a){(t.exports=a("690e")(!1)).push([t.i,".zjapp .inventory-detail[data-v-f4906592]{opacity:1;max-height:100%;overflow:auto}.zjapp .inventory-detail .item-special_center[data-v-f4906592] .item-text{display:flex;align-items:center}.zjapp .inventory-detail .item-price_p[data-v-f4906592]{margin:7px 0 15px}",""])},"5ab9":function(t,e,a){"use strict";a.r(e);var i=a("3e83"),n=(a("9a33"),a("6d57"),a("e10e"),a("07d2")),r=a("e68e"),s=a("cd05"),o=a("1b7e"),d=a("f3a3"),u={name:"InventoryDetail",components:{Item:n.a,ItemImgList:r.a,UserSelect:s.a},data:function(){return{isDraftLoading:!1,id:"",data:{}}},computed:{dateTime:function(){var t=this.data.submit_time;return t?t.slice(0,t.length-3):""},title:function(){if(Object.keys(this.data).length<=0)return"盘点详情";var t=this.data.inventory_date;return t?this.data.material_name+" "+t.split("-")[1]+"-"+t.split("-")[2]:this.data.material_name}},activated:function(){this.data={},this.id=this.$route.query.id,this.isDraftLoading=!0,this.page=1,this.getHasNetwork()},methods:{getDetail:function(){var t=this,e={id:this.id};return!!e.id&&Object(d.a)(e).then((function(e){e?(e.images=e.images&&t.jsonJudeg(e.images)?JSON.parse(e.images):[],e.submitter={id:e.user_id,name:e.user_name,mobile:e.mobile,is_im_user:e.is_im_user},e.next_inventory_time=(e.start_date||"开工")+" 至 "+e.end_date,e.used_quantity=e.used_quantity+e.unit,e.remainder_quantity=e.remainder_quantity+e.unit,e.occurrence_quantity=e.occurrence_quantity+e.unit,t.data=e):t.data={},t.isDraftLoading=!1})).catch((function(e){t.isDraftLoading=!1,$log.error("材料盘点详情error：",e)}))},jsonJudeg:function(t){try{if("object"===Object(i.a)(JSON.parse(t)))return!0}catch(t){return!1}},getHasNetwork:function(){var t=this;o.a.getHasNetwork().then((function(e){e?t.getDetail():(t.$toast("当前无网络！"),t.isDraftLoading=!1)}))}}},l=(a("9856"),a("17cc")),c=Object(l.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-content",{attrs:{"show-go-root":!0,title:t.title}},[a("div",{staticClass:"inventory-detail"},[a("div",{directives:[{name:"show",rawName:"v-show",value:Object.keys(t.data).length,expression:"Object.keys(data).length"}],staticClass:"list bg-white pt10 pb10 border"},[a("item",{attrs:{label:"材料",text:t.data.material_name}}),a("item",{attrs:{label:"盘点时段",text:t.data.next_inventory_time}}),a("item",{attrs:{label:"本期进场",text:t.data.occurrence_quantity}}),a("item",{staticClass:"item-special_center",attrs:{label:"本期已施工设计用量",text:t.data.used_quantity}}),a("item",{attrs:{label:"现场剩余",text:t.data.remainder_quantity}}),a("item",{attrs:{label:"备注"}},[a("div",{staticClass:"item-con",attrs:{slot:"right"},slot:"right"},[a("div",[a("p",{staticClass:"item-price_p"},[t._v(t._s(t.data.remark))]),a("item-img-list",{attrs:{"online-mode":!0,editabled:!1},model:{value:t.data.images,callback:function(e){t.$set(t.data,"images",e)},expression:"data.images"}})],1)])]),a("user-select",{attrs:{title:"提交人",date:t.dateTime,mode:"view",editabled:!1},model:{value:t.data.submitter,callback:function(e){t.$set(t.data,"submitter",e)},expression:"data.submitter"}})],1),a("loading-status",{attrs:{"is-loading":t.isDraftLoading,"is-empty":!Object.keys(t.data).length,"empty-text":"暂无盘点记录"}})],1)])}),[],!1,null,"f4906592",null);e.default=c.exports},9856:function(t,e,a){"use strict";a("d04d")},d04d:function(t,e,a){var i=a("234e");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a("85cb").default)("0bd8b20a",i,!0,{sourceMap:!1,shadowMode:!1})},f3a3:function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"e",(function(){return r})),a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return o})),a.d(e,"d",(function(){return d}));var i=a("162a");function n(t){return i.a.request("/online/material-inventory/list",t)}function r(t){return i.a.post("/online/material-inventory/save-data",null,t)}function s(t){return i.a.request("/online/material-inventory/history",t)}function o(t){return i.a.request("/online/material-inventory/detail",t)}function d(t){return i.a.post("/online/material-inventory/change-status",null,t)}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX21vZHVsZV9lbnRyeV96amFwcF9fLy4vc3JjL3ZpZXdzL2ludmVudG9yeS9kZXRhaWwudnVlP2E0NTAiLCJ3ZWJwYWNrOi8vX19tb2R1bGVfZW50cnlfemphcHBfXy8uL3NyYy92aWV3cy9pbnZlbnRvcnkvZGV0YWlsLnZ1ZT9hZjM2Iiwid2VicGFjazovL19fbW9kdWxlX2VudHJ5X3pqYXBwX18vLi9zcmMvdmlld3MvaW52ZW50b3J5L2RldGFpbC52dWU/YmM4MiIsIndlYnBhY2s6Ly9fX21vZHVsZV9lbnRyeV96amFwcF9fL3NyYy92aWV3cy9pbnZlbnRvcnkvZGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly9fX21vZHVsZV9lbnRyeV96amFwcF9fLy4vc3JjL3ZpZXdzL2ludmVudG9yeS9kZXRhaWwudnVlIiwid2VicGFjazovL19fbW9kdWxlX2VudHJ5X3pqYXBwX18vLi9zcmMvdmlld3MvaW52ZW50b3J5L2RldGFpbC52dWU/ZTQ5ZiIsIndlYnBhY2s6Ly9fX21vZHVsZV9lbnRyeV96amFwcF9fLy4vc3JjL3ZpZXdzL2ludmVudG9yeS9kZXRhaWwudnVlP2M3NGEiLCJ3ZWJwYWNrOi8vX19tb2R1bGVfZW50cnlfemphcHBfXy8uL3NyYy9hcGkvaW52ZW50b3J5LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJwdXNoIiwiaSIsIm5hbWUiLCJjb21wb25lbnRzIiwiSXRlbSIsIkl0ZW1JbWdMaXN0IiwiVXNlclNlbGVjdCIsImRhdGEiLCJpc0RyYWZ0TG9hZGluZyIsImlkIiwiY29tcHV0ZWQiLCJkYXRlVGltZSIsInQiLCJzbGljZSIsImxlbmd0aCIsInRpdGxlIiwiT2JqZWN0Iiwia2V5cyIsInRoaXMiLCJkIiwibWF0ZXJpYWxfbmFtZSIsInNwbGl0IiwiYWN0aXZhdGVkIiwiJHJvdXRlIiwicXVlcnkiLCJwYWdlIiwiZ2V0SGFzTmV0d29yayIsIm1ldGhvZHMiLCJnZXREZXRhaWwiLCJwYXJhbXMiLCJqc29uSnVkZWciLCJuZXR3b3JrIiwicmVzIiwiY29tcG9uZW50IiwiX3ZtIiwiX2giLCIkY3JlYXRlRWxlbWVudCIsIl9jIiwiX3NlbGYiLCJhdHRycyIsInN0YXRpY0NsYXNzIiwiZGlyZWN0aXZlcyIsInJhd05hbWUiLCJ2YWx1ZSIsImV4cHJlc3Npb24iLCJuZXh0X2ludmVudG9yeV90aW1lIiwib2NjdXJyZW5jZV9xdWFudGl0eSIsInVzZWRfcXVhbnRpdHkiLCJyZW1haW5kZXJfcXVhbnRpdHkiLCJzbG90IiwiX3YiLCJfcyIsInJlbWFyayIsIm1vZGVsIiwiY2FsbGJhY2siLCIkJHYiLCIkc2V0IiwiY29udGVudCIsImxvY2FscyIsImFkZCIsImRlZmF1bHQiLCJpbnZlbnRvcnlHZXRMaXN0IiwiV2ViU2VydmljZSIsInJlcXVlc3QiLCJpbnZlbnRvcnlQb3N0QWRkIiwicG9zdCIsImludmVudG9yeUdldEhpc3RvcnkiLCJpbnZlbnRvcnlHZXREZXRhaWwiLCJpbnZlbnRvcnlHZXRPcGVuRG93biJdLCJtYXBwaW5ncyI6IndJQUFVQSxFQUFPQyxRQUFVLEVBQVEsT0FBUixFQUE4RSxJQUtqR0MsS0FBSyxDQUFDRixFQUFPRyxFQUFJLHlRQUEwUSxNLDJDQ0xuUyxJLHdHQ0FtYyxFQzJFbmMsQ0FDRUMsS0FBTSxrQkFDTkMsV0FBWSxDQUNWQyxLQUFKLElBQ0lDLFlBQUosSUFDSUMsV0FBSixLQUVFQyxLQVBGLFdBUUksTUFBTyxDQUVMQyxnQkFBZ0IsRUFFaEJDLEdBQUksR0FDSkYsS0FBTSxLQXNCVkcsU0FBVSxDQUtSQyxTQUxKLFdBTU0sSUFBTix3QkFDTSxPQUFPQyxFQUFJQSxFQUFFQyxNQUFNLEVBQUdELEVBQUVFLE9BQVMsR0FBSyxJQU14Q0MsTUFiSixXQWNNLEdBQUlDLE9BQU9DLEtBQUtDLEtBQUtYLE1BQU1PLFFBQVUsRUFBRyxNQUFPLE9BQy9DLElBQU4sMkJBQ00sT0FBS0ssRUFDRUQsS0FBS1gsS0FBS2EsY0FBZ0IsSUFBTUQsRUFBRUUsTUFBTSxLQUFLLEdBQUssSUFBTUYsRUFBRUUsTUFBTSxLQUFLLEdBRDdESCxLQUFLWCxLQUFLYSxnQkFJN0JFLFVBdkRGLFdBd0RJSixLQUFLWCxLQUFPLEdBQ1pXLEtBQUtULEdBQUtTLEtBQUtLLE9BQU9DLE1BQU1mLEdBQzVCUyxLQUFLVixnQkFBaUIsRUFDdEJVLEtBQUtPLEtBQU8sRUFDWlAsS0FBS1EsaUJBRVBDLFFBQVMsQ0FLUEMsVUFMSixXQUtBLFdBQ0EsR0FDUW5CLEdBQUlTLEtBQUtULElBRVgsUUFBS29CLEVBQU9wQixJQUNMLE9BQWIsSUFBYSxDQUFiLEdBQ0Esa0JBQ0EsR0FDVSxFQUFWLCtEQUNVLEVBQVYsV0FDWSxHQUFaLFVBQ1ksS0FBWixZQUNZLE9BQVosU0FDWSxXQUFaLGNBRVUsRUFBViwwREFFVSxFQUFWLHFDQUNVLEVBQVYsK0NBQ1UsRUFBVixpREFFVSxFQUFWLFFBRVUsRUFBVixRQUVRLEVBQVIscUJBRUEsbUJBQ1EsRUFBUixrQkFDUSxLQUFSLDRCQU1JcUIsVUF4Q0osU0F3Q0EsR0FDTSxJQUNFLEdBQVIsV0FBWSxPQUFaLElBQVksQ0FBWixlQUNVLE9BQU8sRUFFakIsU0FDUSxPQUFPLElBT1hKLGNBckRKLFdBcURBLFdBQ01LLEVBQU4sb0NBQ1lDLEVBRUYsRUFBVixhQUVVLEVBQVYsaUJBQ1UsRUFBVix5Qix3QkM3TElDLEVBQVksWUFDZCxHSFRXLFdBQWEsSUFBSUMsRUFBSWhCLEtBQVNpQixFQUFHRCxFQUFJRSxlQUFtQkMsRUFBR0gsRUFBSUksTUFBTUQsSUFBSUYsRUFBRyxPQUFPRSxFQUFHLGVBQWUsQ0FBQ0UsTUFBTSxDQUFDLGdCQUFlLEVBQUssTUFBUUwsRUFBSW5CLFFBQVEsQ0FBQ3NCLEVBQUcsTUFBTSxDQUFDRyxZQUFZLG9CQUFvQixDQUFDSCxFQUFHLE1BQU0sQ0FBQ0ksV0FBVyxDQUFDLENBQUN2QyxLQUFLLE9BQU93QyxRQUFRLFNBQVNDLE1BQU8zQixPQUFPQyxLQUFLaUIsRUFBSTNCLE1BQVksT0FBRXFDLFdBQVcsNkJBQTZCSixZQUFZLGtDQUFrQyxDQUFDSCxFQUFHLE9BQU8sQ0FBQ0UsTUFBTSxDQUFDLE1BQVEsS0FBSyxLQUFPTCxFQUFJM0IsS0FBS2EsaUJBQWlCaUIsRUFBRyxPQUFPLENBQUNFLE1BQU0sQ0FBQyxNQUFRLE9BQU8sS0FBT0wsRUFBSTNCLEtBQUtzQyx1QkFBdUJSLEVBQUcsT0FBTyxDQUFDRSxNQUFNLENBQUMsTUFBUSxPQUFPLEtBQU9MLEVBQUkzQixLQUFLdUMsdUJBQXVCVCxFQUFHLE9BQU8sQ0FBQ0csWUFBWSxzQkFBc0JELE1BQU0sQ0FBQyxNQUFRLFlBQVksS0FBT0wsRUFBSTNCLEtBQUt3QyxpQkFBaUJWLEVBQUcsT0FBTyxDQUFDRSxNQUFNLENBQUMsTUFBUSxPQUFPLEtBQU9MLEVBQUkzQixLQUFLeUMsc0JBQXNCWCxFQUFHLE9BQU8sQ0FBQ0UsTUFBTSxDQUFDLE1BQVEsT0FBTyxDQUFDRixFQUFHLE1BQU0sQ0FBQ0csWUFBWSxXQUFXRCxNQUFNLENBQUMsS0FBTyxTQUFTVSxLQUFLLFNBQVMsQ0FBQ1osRUFBRyxNQUFNLENBQUNBLEVBQUcsSUFBSSxDQUFDRyxZQUFZLGdCQUFnQixDQUFDTixFQUFJZ0IsR0FBR2hCLEVBQUlpQixHQUFHakIsRUFBSTNCLEtBQUs2QyxXQUFXZixFQUFHLGdCQUFnQixDQUFDRSxNQUFNLENBQUMsZUFBYyxFQUFLLFdBQVksR0FBT2MsTUFBTSxDQUFDVixNQUFPVCxFQUFJM0IsS0FBVyxPQUFFK0MsU0FBUyxTQUFVQyxHQUFNckIsRUFBSXNCLEtBQUt0QixFQUFJM0IsS0FBTSxTQUFVZ0QsSUFBTVgsV0FBVyxrQkFBa0IsT0FBT1AsRUFBRyxjQUFjLENBQUNFLE1BQU0sQ0FBQyxNQUFRLE1BQU0sS0FBT0wsRUFBSXZCLFNBQVMsS0FBTyxPQUFPLFdBQVksR0FBTzBDLE1BQU0sQ0FBQ1YsTUFBT1QsRUFBSTNCLEtBQWMsVUFBRStDLFNBQVMsU0FBVUMsR0FBTXJCLEVBQUlzQixLQUFLdEIsRUFBSTNCLEtBQU0sWUFBYWdELElBQU1YLFdBQVcscUJBQXFCLEdBQUdQLEVBQUcsaUJBQWlCLENBQUNFLE1BQU0sQ0FBQyxhQUFhTCxFQUFJMUIsZUFBZSxZQUFZUSxPQUFPQyxLQUFLaUIsRUFBSTNCLE1BQU1PLE9BQU8sYUFBYSxhQUFhLE9BQ2o4QyxJR1dwQixFQUNBLEtBQ0EsV0FDQSxNQUlhLFVBQUFtQixFLDJDQ25CZixXLHFCQ0dBLElBQUl3QixFQUFVLEVBQVEsUUFDQSxpQkFBWkEsSUFBc0JBLEVBQVUsQ0FBQyxDQUFDM0QsRUFBT0csRUFBSXdELEVBQVMsTUFDN0RBLEVBQVFDLFNBQVE1RCxFQUFPQyxRQUFVMEQsRUFBUUMsU0FHL0JDLEVBREgsRUFBUSxRQUEwRkMsU0FDM0YsV0FBWUgsR0FBUyxFQUFNLENBQUMsV0FBWSxFQUFNLFlBQWEsSyxrQ0NSNUUsMExBS08sU0FBU0ksRUFBaUJ0RCxHQUMvQixPQUFPdUQsSUFBV0MsUUFBUSxrQ0FBbUN4RCxHQUl4RCxTQUFTeUQsRUFBaUJ6RCxHQUMvQixPQUFPdUQsSUFBV0csS0FBSyx1Q0FBd0MsS0FBTTFELEdBSWhFLFNBQVMyRCxFQUFvQjNELEdBQ2xDLE9BQU91RCxJQUFXQyxRQUFRLHFDQUFzQ3hELEdBSTNELFNBQVM0RCxFQUFtQjVELEdBQ2pDLE9BQU91RCxJQUFXQyxRQUFRLG9DQUFxQ3hELEdBSTFELFNBQVM2RCxFQUFxQjdELEdBQ25DLE9BQU91RCxJQUFXRyxLQUNoQiwyQ0FDQSxLQUNBMUQiLCJmaWxlIjoianMvY2h1bmstMTFjYmMyMjguanM/djE2MDg3MTQ0NTExOTUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDEuMC4xQGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi56amFwcCAuaW52ZW50b3J5LWRldGFpbFtkYXRhLXYtZjQ5MDY1OTJde29wYWNpdHk6MTttYXgtaGVpZ2h0OjEwMCU7b3ZlcmZsb3c6YXV0b30uemphcHAgLmludmVudG9yeS1kZXRhaWwgLml0ZW0tc3BlY2lhbF9jZW50ZXJbZGF0YS12LWY0OTA2NTkyXSAuaXRlbS10ZXh0e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXJ9LnpqYXBwIC5pbnZlbnRvcnktZGV0YWlsIC5pdGVtLXByaWNlX3BbZGF0YS12LWY0OTA2NTkyXXttYXJnaW46N3B4IDAgMTVweH1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygncGFnZS1jb250ZW50Jyx7YXR0cnM6e1wic2hvdy1nby1yb290XCI6dHJ1ZSxcInRpdGxlXCI6X3ZtLnRpdGxlfX0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImludmVudG9yeS1kZXRhaWxcIn0sW19jKCdkaXYnLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6KE9iamVjdC5rZXlzKF92bS5kYXRhKS5sZW5ndGgpLGV4cHJlc3Npb246XCJPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGhcIn1dLHN0YXRpY0NsYXNzOlwibGlzdCBiZy13aGl0ZSBwdDEwIHBiMTAgYm9yZGVyXCJ9LFtfYygnaXRlbScse2F0dHJzOntcImxhYmVsXCI6XCLmnZDmlplcIixcInRleHRcIjpfdm0uZGF0YS5tYXRlcmlhbF9uYW1lfX0pLF9jKCdpdGVtJyx7YXR0cnM6e1wibGFiZWxcIjpcIuebmOeCueaXtuautVwiLFwidGV4dFwiOl92bS5kYXRhLm5leHRfaW52ZW50b3J5X3RpbWV9fSksX2MoJ2l0ZW0nLHthdHRyczp7XCJsYWJlbFwiOlwi5pys5pyf6L+b5Zy6XCIsXCJ0ZXh0XCI6X3ZtLmRhdGEub2NjdXJyZW5jZV9xdWFudGl0eX19KSxfYygnaXRlbScse3N0YXRpY0NsYXNzOlwiaXRlbS1zcGVjaWFsX2NlbnRlclwiLGF0dHJzOntcImxhYmVsXCI6XCLmnKzmnJ/lt7Lmlr3lt6Xorr7orqHnlKjph49cIixcInRleHRcIjpfdm0uZGF0YS51c2VkX3F1YW50aXR5fX0pLF9jKCdpdGVtJyx7YXR0cnM6e1wibGFiZWxcIjpcIueOsOWcuuWJqeS9mVwiLFwidGV4dFwiOl92bS5kYXRhLnJlbWFpbmRlcl9xdWFudGl0eX19KSxfYygnaXRlbScse2F0dHJzOntcImxhYmVsXCI6XCLlpIfms6hcIn19LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJpdGVtLWNvblwiLGF0dHJzOntcInNsb3RcIjpcInJpZ2h0XCJ9LHNsb3Q6XCJyaWdodFwifSxbX2MoJ2RpdicsW19jKCdwJyx7c3RhdGljQ2xhc3M6XCJpdGVtLXByaWNlX3BcIn0sW192bS5fdihfdm0uX3MoX3ZtLmRhdGEucmVtYXJrKSldKSxfYygnaXRlbS1pbWctbGlzdCcse2F0dHJzOntcIm9ubGluZS1tb2RlXCI6dHJ1ZSxcImVkaXRhYmxlZFwiOmZhbHNlfSxtb2RlbDp7dmFsdWU6KF92bS5kYXRhLmltYWdlcyksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS4kc2V0KF92bS5kYXRhLCBcImltYWdlc1wiLCAkJHYpfSxleHByZXNzaW9uOlwiZGF0YS5pbWFnZXNcIn19KV0sMSldKV0pLF9jKCd1c2VyLXNlbGVjdCcse2F0dHJzOntcInRpdGxlXCI6XCLmj5DkuqTkurpcIixcImRhdGVcIjpfdm0uZGF0ZVRpbWUsXCJtb2RlXCI6XCJ2aWV3XCIsXCJlZGl0YWJsZWRcIjpmYWxzZX0sbW9kZWw6e3ZhbHVlOihfdm0uZGF0YS5zdWJtaXR0ZXIpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0uZGF0YSwgXCJzdWJtaXR0ZXJcIiwgJCR2KX0sZXhwcmVzc2lvbjpcImRhdGEuc3VibWl0dGVyXCJ9fSldLDEpLF9jKCdsb2FkaW5nLXN0YXR1cycse2F0dHJzOntcImlzLWxvYWRpbmdcIjpfdm0uaXNEcmFmdExvYWRpbmcsXCJpcy1lbXB0eVwiOiFPYmplY3Qua2V5cyhfdm0uZGF0YSkubGVuZ3RoLFwiZW1wdHktdGV4dFwiOlwi5pqC5peg55uY54K56K6w5b2VXCJ9fSldLDEpXSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jYWNoZS1sb2FkZXJAMi4wLjFAY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEyLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL190aHJlYWQtbG9hZGVyQDIuMS4zQHRocmVhZC1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJAOC4yLjFAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2NhY2hlLWxvYWRlckAyLjAuMUBjYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS43LjBAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jYWNoZS1sb2FkZXJAMi4wLjFAY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEyLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL190aHJlYWQtbG9hZGVyQDIuMS4zQHRocmVhZC1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJAOC4yLjFAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2NhY2hlLWxvYWRlckAyLjAuMUBjYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS43LjBAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XG4gIDxwYWdlLWNvbnRlbnRcbiAgICA6c2hvdy1nby1yb290PVwidHJ1ZVwiXG4gICAgOnRpdGxlPVwidGl0bGVcIlxuICA+XG4gICAgPGRpdiBjbGFzcz1cImludmVudG9yeS1kZXRhaWxcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgdi1zaG93PVwiT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoXCJcbiAgICAgICAgY2xhc3M9XCJsaXN0IGJnLXdoaXRlIHB0MTAgcGIxMCBib3JkZXJcIlxuICAgICAgPlxuICAgICAgICA8aXRlbVxuICAgICAgICAgIGxhYmVsPVwi5p2Q5paZXCJcbiAgICAgICAgICA6dGV4dD1cImRhdGEubWF0ZXJpYWxfbmFtZVwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPGl0ZW1cbiAgICAgICAgICBsYWJlbD1cIuebmOeCueaXtuautVwiXG4gICAgICAgICAgOnRleHQ9XCJkYXRhLm5leHRfaW52ZW50b3J5X3RpbWVcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxpdGVtXG4gICAgICAgICAgbGFiZWw9XCLmnKzmnJ/ov5vlnLpcIlxuICAgICAgICAgIDp0ZXh0PVwiZGF0YS5vY2N1cnJlbmNlX3F1YW50aXR5XCJcbiAgICAgICAgLz5cblxuICAgICAgICA8aXRlbVxuICAgICAgICAgIGxhYmVsPVwi5pys5pyf5bey5pa95bel6K6+6K6h55So6YePXCJcbiAgICAgICAgICBjbGFzcz1cIml0ZW0tc3BlY2lhbF9jZW50ZXJcIlxuICAgICAgICAgIDp0ZXh0PVwiZGF0YS51c2VkX3F1YW50aXR5XCJcbiAgICAgICAgLz5cblxuICAgICAgICA8aXRlbVxuICAgICAgICAgIGxhYmVsPVwi546w5Zy65Ymp5L2ZXCJcbiAgICAgICAgICA6dGV4dD1cImRhdGEucmVtYWluZGVyX3F1YW50aXR5XCJcbiAgICAgICAgLz5cblxuICAgICAgICA8aXRlbSBsYWJlbD1cIuWkh+azqFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHNsb3Q9XCJyaWdodFwiXG4gICAgICAgICAgICBjbGFzcz1cIml0ZW0tY29uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cIml0ZW0tcHJpY2VfcFwiPnt7ZGF0YS5yZW1hcmt9fTwvcD5cbiAgICAgICAgICAgICAgPGl0ZW0taW1nLWxpc3RcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZGF0YS5pbWFnZXNcIlxuICAgICAgICAgICAgICAgIDpvbmxpbmUtbW9kZT1cInRydWVcIlxuICAgICAgICAgICAgICAgIDplZGl0YWJsZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9pdGVtPlxuICAgICAgICA8dXNlci1zZWxlY3RcbiAgICAgICAgICB2LW1vZGVsPVwiZGF0YS5zdWJtaXR0ZXJcIlxuICAgICAgICAgIHRpdGxlPVwi5o+Q5Lqk5Lq6XCJcbiAgICAgICAgICA6ZGF0ZT1cImRhdGVUaW1lXCJcbiAgICAgICAgICBtb2RlPVwidmlld1wiXG4gICAgICAgICAgOmVkaXRhYmxlZD1cImZhbHNlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGxvYWRpbmctc3RhdHVzXG4gICAgICAgIDppcy1sb2FkaW5nPVwiaXNEcmFmdExvYWRpbmdcIlxuICAgICAgICA6aXMtZW1wdHk9XCIhT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoXCJcbiAgICAgICAgZW1wdHktdGV4dD1cIuaaguaXoOebmOeCueiusOW9lVwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICA8L3BhZ2UtY29udGVudD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgSXRlbSBmcm9tICdAc3JjL2NvbXBvbmVudHMvaXRlbS8nO1xuaW1wb3J0IEl0ZW1JbWdMaXN0IGZyb20gJ0BzcmMvY29tcG9uZW50cy9pdGVtLWltZy1saXN0JztcbmltcG9ydCBVc2VyU2VsZWN0IGZyb20gJ0Bjb21wb25lbnRzL3VzZXItc2VsZWN0JztcbmltcG9ydCBuZXR3b3JrIGZyb20gJ0BzcmMvZnJhbWV3b3JrL25ldHdvcmsnO1xuXG5pbXBvcnQgeyBpbnZlbnRvcnlHZXREZXRhaWwgfSBmcm9tICdAc3JjL2FwaS9pbnZlbnRvcnknO1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnSW52ZW50b3J5RGV0YWlsJyxcbiAgY29tcG9uZW50czoge1xuICAgIEl0ZW0sXG4gICAgSXRlbUltZ0xpc3QsXG4gICAgVXNlclNlbGVjdCxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8g5Yqg6L295LitXG4gICAgICBpc0RyYWZ0TG9hZGluZzogZmFsc2UsXG5cbiAgICAgIGlkOiAnJywgLy8g5a2Y5pS+55uY54K5aWRcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgLy8gaWQ6ICcxMTEnLFxuICAgICAgICAvLyBtYXRlcmlhbF9uYW1lOiAn5rC05rOl5paH5a2X6LaF6ZW/5paH5a2X6LaF6ZW/5paH5a2X6LaF6ZW/5paH5a2X6LaF6ZW/5paH5a2X6LaF6ZW/5paH5a2X6LaF6ZW/JyxcbiAgICAgICAgLy8gaW52ZW50b3J5X2RhdGU6ICcyMDE5LTAzLTA4JyxcbiAgICAgICAgLy8gdXNlZF9xdWFudGl0eTogJzIwMOWQqCcsXG4gICAgICAgIC8vIHJlbWFpbmRlcl9xdWFudGl0eTogJzXlkKgnLFxuICAgICAgICAvLyByZW1hcms6ICfmjIkz5ZCoL+exs+iuoeeulycsXG4gICAgICAgIC8vIGltYWdlczogW1xuICAgICAgICAvLyAgIHtcbiAgICAgICAgLy8gICAgIFwiaWRcIjogXCJhZmM1MWY3Mi1hOTgwLTlkOWItN2Q5Zi05YTNiNjM0ZTZmNThcIixcbiAgICAgICAgLy8gICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pbWctdGVzdC5teXlzcS5jb20uY24vbW9iaWxlY2hlY2txdWFsaXR5L3VwbG9hZC8zOWVkOWQ1MC04OWY0LTQ1NzAtMjJmMi1jODY3ZWU3Yjg3OGEuanBnXCIsXG4gICAgICAgIC8vICAgfV0sXG4gICAgICAgIC8vIHN1Ym1pdHRlcjoge1xuICAgICAgICAvLyAgIFwiaWRcIjogXCIyMmIxMWRiNC1lOTA3LTRmMWYtODgzNS1iOWRhYWI2ZTFmMjNcIixcbiAgICAgICAgLy8gICBcIm5hbWVcIjogXCLotoXnuqfnlKjmiLdcIixcbiAgICAgICAgLy8gICBcIm1vYmlsZVwiOiBcIjEzOTI4NDA2MzUzXCIsXG4gICAgICAgIC8vICAgXCJpc19pbV91c2VyXCI6IDEsXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIHN1Ym1pdF90aW1lOiAnMjAxOS0wNS0wNiAxNToyNDoyNicsXG4gICAgICB9LFxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgLyoqXG4gICAgICogW2RhdGVUaW1lIOaPkOS6pOS6uuaXtumXtF1cbiAgICAgKiBAcmV0dXJuIHtbU3RyaW5nXX0gW+WOu+mZpOenkueahOaXtumXtF1cbiAgICAgKi9cbiAgICBkYXRlVGltZSgpIHtcbiAgICAgIGNvbnN0IHQgPSB0aGlzLmRhdGEuc3VibWl0X3RpbWU7XG4gICAgICByZXR1cm4gdCA/IHQuc2xpY2UoMCwgdC5sZW5ndGggLSAzKSA6ICcnO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogW3RpdGxlIOagh+mimF1cbiAgICAgKiBAcmV0dXJuIHtbU3RyaW5nXX0gW+agh+mimF1cbiAgICAgKi9cbiAgICB0aXRsZSgpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmxlbmd0aCA8PSAwKSByZXR1cm4gJ+ebmOeCueivpuaDhSc7XG4gICAgICBjb25zdCBkID0gdGhpcy5kYXRhLmludmVudG9yeV9kYXRlO1xuICAgICAgaWYgKCFkKSByZXR1cm4gdGhpcy5kYXRhLm1hdGVyaWFsX25hbWU7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhLm1hdGVyaWFsX25hbWUgKyAnICcgKyBkLnNwbGl0KCctJylbMV0gKyAnLScgKyBkLnNwbGl0KCctJylbMl07XG4gICAgfSxcbiAgfSxcbiAgYWN0aXZhdGVkKCkge1xuICAgIHRoaXMuZGF0YSA9IHt9OyAvLyDmuIXpmaTmlbDmja5cbiAgICB0aGlzLmlkID0gdGhpcy4kcm91dGUucXVlcnkuaWQ7XG4gICAgdGhpcy5pc0RyYWZ0TG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5wYWdlID0gMTtcbiAgICB0aGlzLmdldEhhc05ldHdvcmsoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC8qKlxuICAgICAqIFtnZXREZXRhaWwg6I635Y+W6K+m5oOFXVxuICAgICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGdldERldGFpbCgpIHtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICB9O1xuICAgICAgaWYgKCFwYXJhbXMuaWQpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiBpbnZlbnRvcnlHZXREZXRhaWwocGFyYW1zKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgIHJlcy5pbWFnZXMgPSByZXMuaW1hZ2VzICYmIHRoaXMuanNvbkp1ZGVnKHJlcy5pbWFnZXMpID8gSlNPTi5wYXJzZShyZXMuaW1hZ2VzKSA6IFtdOyAvLyDlpoLmnpzmsqHmnInlm77niYfvvIzliJnov5Tlm57nqbrmlbDnu4RcbiAgICAgICAgICAgIHJlcy5zdWJtaXR0ZXIgPSB7XG4gICAgICAgICAgICAgIGlkOiByZXMudXNlcl9pZCxcbiAgICAgICAgICAgICAgbmFtZTogcmVzLnVzZXJfbmFtZSxcbiAgICAgICAgICAgICAgbW9iaWxlOiByZXMubW9iaWxlLFxuICAgICAgICAgICAgICBpc19pbV91c2VyOiByZXMuaXNfaW1fdXNlcixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXMubmV4dF9pbnZlbnRvcnlfdGltZSA9IChyZXMuc3RhcnRfZGF0ZSB8fCAn5byA5belJykgKyAnIOiHsyAnICsgcmVzLmVuZF9kYXRlO1xuXG4gICAgICAgICAgICByZXMudXNlZF9xdWFudGl0eSA9IHJlcy51c2VkX3F1YW50aXR5ICsgcmVzLnVuaXQ7XG4gICAgICAgICAgICByZXMucmVtYWluZGVyX3F1YW50aXR5ID0gcmVzLnJlbWFpbmRlcl9xdWFudGl0eSArIHJlcy51bml0O1xuICAgICAgICAgICAgcmVzLm9jY3VycmVuY2VfcXVhbnRpdHkgPSByZXMub2NjdXJyZW5jZV9xdWFudGl0eSArIHJlcy51bml0O1xuXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSByZXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmlzRHJhZnRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChyZXMgPT4ge1xuICAgICAgICAgIHRoaXMuaXNEcmFmdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAkbG9nLmVycm9yKCfmnZDmlpnnm5jngrnor6bmg4VlcnJvcu+8micsIHJlcyk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogW+WIpOaWrSDlgLwg5piv5ZCm5Li6IGpzb24gXVxuICAgICAqL1xuICAgIGpzb25KdWRlZyhzdHIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgSlNPTi5wYXJzZShzdHIpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogW2dldEhhc05ldHdvcmsg5Yik5pat5piv5ZCm5pyJ572RXVxuICAgICAqL1xuICAgIGdldEhhc05ldHdvcmsoKSB7XG4gICAgICBuZXR3b3JrLmdldEhhc05ldHdvcmsoKS50aGVuKHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAvLyDmnInnvZFcbiAgICAgICAgICB0aGlzLmdldERldGFpbCgpOyAvLyDosIPnlKjmjqXlj6NcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLiR0b2FzdCgn5b2T5YmN5peg572R57uc77yBJyk7XG4gICAgICAgICAgdGhpcy5pc0RyYWZ0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLmludmVudG9yeS1kZXRhaWwge1xuICBvcGFjaXR5OiAxO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgLml0ZW0tc3BlY2lhbF9jZW50ZXIgL2RlZXAvIC5pdGVtLXRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuaXRlbS1wcmljZV9wIHtcbiAgICBtYXJnaW46IDdweCAwIDE1cHg7XG4gIH1cbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2RldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjQ5MDY1OTImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZjQ5MDY1OTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuNy4wQHZ1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZjQ5MDY1OTJcIixcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjJAdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMS4wLjFAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuOS41QHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMy4wLjBAcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMy4wLjBAcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fc2Fzcy1sb2FkZXJANy4xLjBAc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtNCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2NhY2hlLWxvYWRlckAyLjAuMUBjYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS43LjBAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mNDkwNjU5MiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDEuMC4xQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjkuNUB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDMuMC4wQHBvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDMuMC4wQHBvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Nhc3MtbG9hZGVyQDcuMS4wQHNhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTQhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jYWNoZS1sb2FkZXJAMi4wLjFAY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuNy4wQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZjQ5MDY1OTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjJAdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIwYmQ4YjIwYVwiLCBjb250ZW50LCB0cnVlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pOyIsImltcG9ydCBXZWJTZXJ2aWNlIGZyb20gJ0BzcmMvc2VydmljZS9jb21tb24vd2ViLXNlcnZpY2UnO1xuXG4vLyDmnZDmlpnnm5jngrlhcGlcblxuLy8g5p2Q5paZ55uY54K5ID09PiDnm5jngrnliJfooahcbmV4cG9ydCBmdW5jdGlvbiBpbnZlbnRvcnlHZXRMaXN0KGRhdGEpIHtcbiAgcmV0dXJuIFdlYlNlcnZpY2UucmVxdWVzdCgnL29ubGluZS9tYXRlcmlhbC1pbnZlbnRvcnkvbGlzdCcsIGRhdGEpO1xufVxuXG4vLyDmnZDmlpnnm5jngrkgPT0+IOa3u+WKoOebmOeCueiusOW9lVxuZXhwb3J0IGZ1bmN0aW9uIGludmVudG9yeVBvc3RBZGQoZGF0YSkge1xuICByZXR1cm4gV2ViU2VydmljZS5wb3N0KCcvb25saW5lL21hdGVyaWFsLWludmVudG9yeS9zYXZlLWRhdGEnLCBudWxsLCBkYXRhKTtcbn1cblxuLy8g5p2Q5paZ55uY54K5ID09PiDnm5jngrnljoblj7LliJfooahcbmV4cG9ydCBmdW5jdGlvbiBpbnZlbnRvcnlHZXRIaXN0b3J5KGRhdGEpIHtcbiAgcmV0dXJuIFdlYlNlcnZpY2UucmVxdWVzdCgnL29ubGluZS9tYXRlcmlhbC1pbnZlbnRvcnkvaGlzdG9yeScsIGRhdGEpO1xufVxuXG4vLyDmnZDmlpnnm5jngrkgPT0+IOebmOeCueivpuaDhVxuZXhwb3J0IGZ1bmN0aW9uIGludmVudG9yeUdldERldGFpbChkYXRhKSB7XG4gIHJldHVybiBXZWJTZXJ2aWNlLnJlcXVlc3QoJy9vbmxpbmUvbWF0ZXJpYWwtaW52ZW50b3J5L2RldGFpbCcsIGRhdGEpO1xufVxuXG4vLyDmnZDmlpnnm5jngrkgPT0+IOW8gOWQr+WFs+mXreebmOeCuVxuZXhwb3J0IGZ1bmN0aW9uIGludmVudG9yeUdldE9wZW5Eb3duKGRhdGEpIHtcbiAgcmV0dXJuIFdlYlNlcnZpY2UucG9zdChcbiAgICAnL29ubGluZS9tYXRlcmlhbC1pbnZlbnRvcnkvY2hhbmdlLXN0YXR1cycsXG4gICAgbnVsbCxcbiAgICBkYXRhXG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9