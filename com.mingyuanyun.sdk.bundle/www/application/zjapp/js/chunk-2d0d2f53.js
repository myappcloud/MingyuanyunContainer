(window.webpackJsonp_module_entry_zjapp_=window.webpackJsonp_module_entry_zjapp_||[]).push([["chunk-2d0d2f53"],{"5b5e":function(e,t,r){"use strict";(function(e){r("9e76"),r("163d"),r("e697");var i,n=r("fd50"),a=r("3bd5"),c=r("ed08"),o=r("4ad6"),u=r("3122"),d=r("3516"),s=r("37d5"),_=r("f2d3"),l=r("48f4"),f=r("6bf2"),m=r.n(f),h=r("4360"),b=r("4921"),g=r("334f"),y=r("b725"),k=r("6b81"),v=r("2f02"),P=r("7364"),j=r("59f8"),q=r("c745"),C=r("0136"),S=function(t,r){var i=a.a.getUser();return g.a.getProblemCCAllColumn(t).then((function(n){if(e.some(n,(function(e){return e.cc===i.user_id&&e.type===r})))return g.a.updateProblemReadingTime(t);var a={id:i.user_id,name:i.user_name,type:r,reading_time:c.a.getNowDate()};return g.a.appendCC(t,a).then((function(){return g.a.updateProblemReadingTime(t)}))}))},w=function(e){var t=e.status;return"已关闭"===e.status&&(t="非正常关闭"),n.a.resolve({status_text:t})};i={getCheckProblemDraftList:function(e){return b.a.getCheckProblemDraftList(e).catch((function(e){return $log.error(e),n.a.reject(e)}))},getCheckProblemList:function(t){var r=a.a.getUser().user_id;return b.a.getCheckProblemList(t,r).then((function(a){return e.map(a,(function(e){i.getProblemLocalStatus({status:e.status}).then((function(t){e.status_text=t.status_text}))})),b.a.getCheckProblemCount(t,r).then((function(e){return n.a.resolve({data:a,total:e.count})}))})).catch((function(e){return $log.error(e),n.a.reject(e)}))},getCheckProblemInfo:function(t){return t?n.a.all([b.a.getCheckProblem(t),y.a.getRepair(t),k.a.getMutliReinspect(t),g.a.getCC(t),g.a.getProblemCCAllColumn(t),k.a.getReinspectByList(t)]).then((function(t){var r=t[0],i=t[5],a=t[1];a&&(r.repair_set=a,r.has_read=a.has_read);var c=t[2];e.isEmpty(c)?r.reinspect_set=[]:r.reinspect_set=c;var o=t[3];o&&o.length>0&&(r.cc_set_id_array=e.map(o,(function(e){return{id:e.user_id}})),r.cc_set_name_array=e.map(o,(function(e){return{name:e.user_name}})),r.cc_set_array=e.map(o,(function(e){return{id:e.user_id,name:e.user_name,mobile:e.mobile,is_im_user:e.is_im_user}})));var u=t[4];return u&&u.length>0&&(r.cc_set_all_id_array=e.map(u,(function(e){return{id:e.cc}}))),r.regist_by||r.sent_back_by||r.repair_by||r.reinspect_by?s.default.getAllProjectUsers(r.proj_id).then((function(t){if(r.regist_by){var n=e.find(t,(function(e){return e.user_id===r.regist_by}));n&&(r.regist=n)}if(r.sent_back_by){var a=e.find(t,(function(e){return e.user_id===r.sent_back_by}));a&&(r.sent_back={id:a.user_id,name:a.user_name,mobile:a.mobile,is_im_user:a.is_im_user})}if(r.repair_by){var c=e.find(t,(function(e){return e.user_id===r.repair_by}));c&&(r.repair=c)}return e.isEmpty(i)||(r.reinspectBy=e.map(i,(function(r){var i=e.find(t,(function(e){return e.user_id===r.reinspect}));return i?{id:i.user_id,name:i.user_name,mobile:i.mobile,is_im_user:i.is_im_user,reinspect_date:r.reinspect_date,reinspect_remark:r.reinspect_remark,reinspect_image_file:JSON.parse(r.reinspect_image_file||"[]"),reinspectById:r.id}:{id:r.reinspect,name:"该用户已被删除",mobile:"",is_im_user:null,reinspect_date:r.reinspect_date,reinspect_remark:"",reinspect_image_file:[],reinspectById:r.id}})),r.reinspectBy=e.filter(r.reinspectBy,(function(e){return!!e})),r.reinspect=e.filter(r.reinspectBy,(function(e){return!!e.reinspect_date}))),r.regist=r.regist||{},r.sent_back=r.sent_back||{},r.repair=r.repair||{},r.reinspect=r.reinspect||[],r})):(r.regist={},r.sent_back={},r.repair={},r.reinspect=[],n.a.resolve(r))})).catch((function(e){$log.log(e)})):n.a.resolve({})},submit:function(t,r,i){if(!1===i)return function(e,t){var r=a.a.getUser();return e.repair_deadline="",e.regist_by=r.user_id,e.regist_date=c.a.getNowDate(),e.created_by=r.user_id,e.created_on=c.a.getNowDate(),e.image_file=JSON.stringify(e.image_file),e.drawing_file&&(e.drawing_file=JSON.stringify(e.drawing_file)),$log.log("专项巡检--\x3e不通知整改"),b.a.submit(e).then((function(){return P.a.saveProblemStatusLog(e.proj_id,"",e.batch_id,e.id,"已提交","","",e.image_file)})).then((function(){return S(e.id,"登记人")})).then((function(t){return l.default.addSyncGroup([["checkquality_problem",e.id],["checkquality_cc",e.id]])})).then((function(){if("special-inspect-problem"!==t)return C.a.saveTodo({biz_id:e.id,proj_id:e.proj_id,module_code:t||"",type:2})})).catch((function(e){return $log.error(e),n.a.reject(e)}))}(t,r);if("待提交"!==t.status&&"草稿"!==t.status&&"合格草稿"!==t.status&&"不合格草稿"!==t.status)return n.a.reject("问题单状态异常");if(!t.checkItem.id)return n.a.reject("请先选择检查项");if(!t.repair_set||!t.repair_set.id)return n.a.reject("请选择问题的整改人");if(e.isEmpty(t.reinspect_set))return n.a.reject("请选择问题的复验人");var o=a.a.getUser();t.status="待整改";var u=new Date;return u.setDate(u.getDate()+Number(t.deadline)),t.repair_deadline=m()(u).format("YYYY-MM-DD"),"special-inspect-problem"===r&&t.regist_by&&t.regist_date&&t.created_by&&t.created_on||(t.regist_by=o.user_id,t.regist_date=c.a.getNowDate(),t.created_by=o.user_id,t.created_on=c.a.getNowDate()),t.image_file=JSON.stringify(t.image_file),t.drawing_file&&(t.drawing_file=JSON.stringify(t.drawing_file)),$log.log("现场检查--\x3e提交问题"),b.a.submit(t).then((function(){return P.a.saveProblemStatusLog(t.proj_id,t.bidsection_id,t.batch_id,t.id,"已提交","","",t.image_file)})).then((function(){return S(t.id,"登记人")})).then((function(){if("special-inspect-problem"!==r){var e=t.created_by===t.repair_set.id?1:2;return C.a.insertTodoData(t.created_by,t.id,r,e,0)}})).then((function(){return k.a.getReinspectByList(t.id)})).then((function(r){return l.default.addSyncGroup([["checkquality_problem",t.id],["checkquality_repair",t.id],["checkquality_reinspect",t.id],["checkquality_reinspect_by",e.map(r,"id")],["checkquality_cc",t.id]])})).catch((function(e){return $log.error(e),n.a.reject(e)}))},save:function(t){if("待提交"!==t.status&&"草稿"!==t.status&&"合格草稿"!==t.status&&"不合格草稿"!==t.status)return n.a.reject("问题单状态异常。");if(!/^\+?[0-9]*$/.test(t.deadline))return n.a.reject("整改期限必须是正整数");var r={id:t.id,remark:t.remark,image_file:t.image_file,batch_id:t.batch_id,batch_type:t.batch_type,bidsection_id:t.bidsection_id||"",proj_id:t.proj_id,created_by:t.created_by,created_on:c.a.getNowDate(),status:t.status,room_id:t.room_id||"",building_id:t.building_id||"",unit:t.unit||"",floor:t.floor||"",biz_id:t.biz_id||"",biz_children_id:t.biz_children_id||"",deduction:void 0===t.deduction?"":t.deduction,redline_deduction:4===t.mode||8===t.mode?t.redline_deduction:0,contract_id:t.contract&&t.contract.id?t.contract.id:"",voice_file:e.isEmpty(t.voice_file)?null:JSON.stringify(t.voice_file)};return t.repair_requirements&&(r.repair_requirements=t.repair_requirements||""),t.checkItem&&t.checkItem.id&&(r.item_id=t.checkItem.id),t.place&&t.place.full_name&&(r.place=t.place.full_name),t.contractor&&t.contractor.id&&(r.contractor_id=t.contractor.id),t.description&&t.description.id?r.desc_id=t.description.id:r.desc_id="",r.emergency_degree=t.level,t.deadline&&(r.deadline=t.deadline),t.place_point&&(r.problem_values=JSON.stringify(t.place_point)),r.image_file=JSON.stringify(t.image_file),t.drawing_file&&(r.drawing_file=JSON.stringify(t.drawing_file)),(t.process_mode||null===t.process_mode)&&(r.process_mode=t.process_mode),8===t.mode&&(r.deduction_level=t.deduction_level),t.id?b.a.update(r,t.cc_set,t.repair_set,t.reinspect_set).then((function(){return n.a.resolve(t.id)})).catch((function(e){return $log.error(e),n.a.reject(e)})):(r.id=c.a.uuid(),b.a.insert(r).then((function(){return b.a.update(r,t.cc_set,t.repair_set,t.reinspect_set)})).then((function(){return n.a.resolve(r.id)})).catch((function(e){return $log.error(e),n.a.reject(e)})))},delete:function(e){return b.a.getCheckProblem(e).then((function(t){return"待提交"===t.status||"草稿"===t.status||"合格草稿"===t.status||"不合格草稿"===t.status?b.a.delete(e).catch((function(e){return $log.error(e),n.a.reject(e)})):($log.log("问题单状态异常："+e),n.a.reject("问题单状态异常"))}))},repair:function(t,r){if("待整改"!==t.status)return n.a.reject("问题单状态异常");var i=a.a.getUser();t.status="待复验",t.repair_by=i.user_id,t.repair_date=c.a.getNowDate();var o=JSON.stringify(t.repair_image_file);return b.a.getCheckProblem(t.id).then((function(i){if(!i||"待整改"===i.status)return $log.log("现场检查--\x3e完成整改"),b.a.repairProblem(t.id,t.status,t.repair_by,t.repair_remark,t.repair_date,o).then((function(){return P.a.saveProblemStatusLog(t.proj_id,t.bidsection_id,t.batch_id,t.id,"已整改","",t.repair_remark,o)})).then((function(){return S(t.id,"操作人")})).then((function(){if("special-inspect-problem"!==r){var i=2;e.filter(t.reinspect_set,{user_id:t.repair_by}).length&&(i=1);var n=C.a.getTodoSort(t.status,t.repair_deadline,t.close_date,t.repair_date,t.sent_back_times,t.emergency_degree,"check");return C.a.insertTodoData(t.repair_by,t.id,"check",i,n)}})).then((function(){return l.default.addSyncGroup([["checkquality_problem",t.id],["checkquality_cc",t.id]])}));$log.log("提交整改时数据已变为")})).catch((function(e){return $log.error(e),n.a.reject(e)}))},reinspectPass:function(t,r){if("待复验"!==t.status)return n.a.reject("问题单状态异常");t.currentReinspectBy=t.currentReinspectBy||{};var i=a.a.getUser(),o="",u=e.isEmpty(t.currentReinspectBy.reinspect_image_file)?"":JSON.stringify(t.currentReinspectBy.reinspect_image_file);return b.a.getCheckProblem(t.id).then((function(a){if(!a||"待复验"===a.status)return k.a.reinspectPass(t.id,i.user_id,c.a.now(),u,t.currentReinspectBy.reinspect_remark||"").then((function(){return k.a.getReinspectByList(t.id).then((function(r){var a=e.every(r,(function(e){return!!e.reinspect_date})),u=e.find(r,{reinspect:i.user_id});return u?(o=u.id,a?(t.status="已通过",t.respect_by=i.user_id,t.reinspect_completed_date=c.a.getNowDate(),b.a.reinspectProblemPass(t.id,t.status,t.reinspect_completed_date,t.respect_by).then((function(){return P.a.saveProblemStatusLog(t.proj_id,t.bidsection_id,t.batch_id,t.id,"已复验","","","")}))):void 0):n.a.reject("问题单复验人异常")}))})).then((function(){return S(t.id,"操作人")})).then((function(){if("special-inspect-problem"!==r){var e=C.a.getTodoSort(t.status,t.repair_deadline,t.close_date,t.repair_date,t.sent_back_times,t.emergency_degree,"check");return C.a.insertTodoData(i.user_id,t.id,r||"check",2,e)}})).then((function(){return l.default.addSyncGroup([["checkquality_problem",t.id],["checkquality_reinspect_by",o],["checkquality_cc",t.id]])}))})).catch((function(e){return $log.error(e),n.a.reject(e)}))},reinspectReject:function(t,r){var i=[["checkquality_problem",t.id],["checkquality_cc",t.id]];if("待复验"!==t.status)return n.a.reject("问题单状态异常");if(!t.sent_back_remark)return n.a.reject("请填写退回原因");var o=a.a.getUser();t.sent_back_times?t.sent_back_times++:t.sent_back_times=1,t.status="待整改",t.sent_back_date=c.a.getNowDate(),t.sent_back_by=o.user_id;var u=JSON.stringify(t.sent_back_image_file);return $log.log("现场检查--\x3e复验退回"),b.a.reinspectProblemReject(t.id,t.status,t.sent_back_date,t.sent_back_remark,u,t.sent_back_by,t.sent_back_times).then((function(){return P.a.saveProblemStatusLog(t.proj_id,t.bidsection_id,t.batch_id,t.id,"已退回",t.sent_back_remark,"",u)})).then((function(){return k.a.clearReinspectByData(t.id)})).then((function(){return S(t.id,"操作人")})).then((function(){if("special-inspect-problem"!==r){var e=2;t.repair_set.id&&t.repair_set.id===o.user_id&&(e=1);var i=C.a.getTodoSort(t.status,t.repair_deadline,t.close_date,t.repair_date,t.sent_back_times,t.emergency_degree,"check");return C.a.insertTodoData(o.user_id,t.id,"check",e,i)}})).then((function(){return k.a.getReinspectByList(t.id).then((function(t){i.push(["checkquality_reinspect_by",e.map(t,"id")])}))})).then((function(){if(1===t.has_read)return y.a.update({has_read:0},{checkquality_problem_id:t.id}).then((function(){i.push(["checkquality_repair",t.id])}))})).then((function(){return l.default.addSyncGroup(i)})).catch((function(e){return $log.error(e),n.a.reject(e)}))},close:function(e,t){if("待整改"!==e.status)return n.a.reject("问题单状态异常");if(!e.close_reason)return n.a.reject("请填写关闭原因");var r=a.a.getUser();return e.close_date=c.a.getNowDate(),e.status="已关闭",$log.log("现场检查--\x3e非正常关闭"),b.a.closeProblem(e.id,e.status,e.close_date,e.close_reason).then((function(){return P.a.saveProblemStatusLog(e.proj_id,e.bidsection_id,e.batch_id,e.id,"已关闭",e.close_reason,"","")})).then((function(){return S(e.id,"操作人")})).then((function(){if("special-inspect-problem"!==t){var i=C.a.getTodoSort(e.status,e.repair_deadline,e.close_date,e.repair_date,e.sent_back_times,e.emergency_degree,"check");return C.a.insertTodoData(r.user_id,e.id,"check",2,i)}})).then((function(){return l.default.addSyncGroup([["checkquality_problem",e.id],["checkquality_cc",e.id]])})).catch((function(e){return $log.error(e),n.a.reject(e)}))},changeRepair:function(e,t,r){if(!e.repair_set||!e.repair_set.id)return n.a.reject("请指定一个整改人");var i=a.a.getUser();return $log.log("现场检查--\x3e修改整改人"),b.a.updateProblemModifiedBy(e.id).then((function(){if(t)return b.a.updateProblemContractor(e.id,e.contractor.id)})).then((function(){if(t){var r=e.contractor&&e.contractor.id||"";return b.a.updateProblemContractor(e.id,r)}})).then((function(){return y.a.changeProblemRepairer(e)})).then((function(){return v.a.saveProblemFpInfo(e.proj_id,e.bidsection_id,e.batch_id,e.id,e.repair_set.id,e.repair_set_old.id,"分配整改人")})).then((function(){return S(e.id,"操作人")})).then((function(){if("special-inspect-problem"!==r){var t=2;e.repair_set.id&&e.repair_set.id===i.user_id&&(t=1);var n=C.a.getTodoSort(e.status,e.repair_deadline,e.close_date,e.repair_date,e.sent_back_times,e.emergency_degree,"check");return C.a.insertTodoData(i.user_id,e.id,"check",t,n)}})).then((function(){return l.default.addSyncGroup([["checkquality_problem",e.id],["checkquality_repair",e.id],["checkquality_cc",e.id],["checkquality_problem_fpinfo",e.id]])})).catch((function(e){return $log.error(e),n.a.reject(e)}))},changeReinspect:function(t,r){if(e.isEmpty(t.reinspect_set))return n.a.reject("请指定一个复验人");var i=a.a.getUser();return $log.log("现场检查--\x3e修改复验人"),b.a.updateProblemModifiedBy(t.id).then((function(){return k.a.changeProblemReinspect(t.id,t.reinspect_set,!0)})).then((function(){var r=e.map(t.reinspect_set,(function(e){return e.id})).join(","),i=e.map(t.reinspect_set_old,(function(e){return e.id})).join(",");return v.a.saveProblemFpInfo(t.proj_id,t.bidsection_id,t.batch_id,t.id,r,i,"分配复验人")})).then((function(){return S(t.id,"操作人")})).then((function(){if("special-inspect-problem"!==r){var n=2;e.filter(t.reinspect_set,{user_id:i.user_id}).length&&"待复验"===t.status&&(n=1);var a=C.a.getTodoSort(t.status,t.repair_deadline,t.close_date,t.repair_date,t.sent_back_times,t.emergency_degree,"check");return C.a.insertTodoData(i.user_id,t.id,"check",n,a)}})).then((function(){return k.a.getReinspectByList(t.id)})).then((function(r){return l.default.addSyncGroup([["checkquality_problem",t.id],["checkquality_reinspect",t.id],["checkquality_reinspect_by",e.map(r,"id")],["checkquality_cc",t.id],["checkquality_problem_fpinfo",t.id]])})).catch((function(e){return $log.error(e),n.a.reject(e)}))},changeCC:function(e){return $log.log("现场检查--\x3e修改抄送人"),b.a.updateProblemModifiedBy(e.id).then((function(){return g.a.saveProblemCC(e.id,e.cc_set)})).then((function(){return l.default.addSyncGroup([["checkquality_problem",e.id],["checkquality_cc",e.id]])})).catch((function(e){return $log.error(e),n.a.reject(e)}))},changeContractor:function(e){return e.contractor&&e.contractor.id?($log.log("现场检查--\x3e修改责任单位"),b.a.updateProblemContractor(e.id,e.contractor.id).then((function(){return l.default.addSyncGroup([["checkquality_problem",e.id]])})).catch((function(e){return $log.error(e),n.a.reject(e)}))):n.a.reject("请指定责任单位")},changeRepairDeadline:function(e){if(!/^(\d+)-(\d{1,2})-(\d{1,2})$/.test(e.repair_deadline))return n.a.reject("整改期限需要一个日期格式的值");var t=m()(e.repair_deadline).format("YYYY-MM-DD"),r=m()().format("YYYY-MM-DD");return e.is_timeout=t<r,$log.log("现场检查--\x3e修改整改期限"),b.a.updateProblemRepairDeadline(e.id,e.repair_deadline).then((function(){return l.default.addSyncGroup([["checkquality_problem",e.id]])})).catch((function(e){return $log.error(e),n.a.reject(e)}))},getProblemLocalStatusById:function(e){return w({status:p.status})},getProblemLocalStatus:w,saveRepairInfo:function(e,t,r){return r=JSON.stringify(r),b.a.saveRepairInfo(e,t,r).then((function(){return b.a.getCheckProblemDraft(e).then((function(t){return _.a.backUpDraft(e,t.proj_id,"checkquality_problem",t)}))}))},problemRead:function(e){return y.a.update({has_read:1},{checkquality_problem_id:e}).then((function(){return l.default.addSyncGroup([["checkquality_problem",e],["checkquality_repair",e]])}))},takePictureAndSave:function(e){return u.a.takePicture().then((function(t){if(t)return d.a.getBatch(e).then((function(e){var r={proj_id:e.proj_id,bidsection_id:e.bidsection_id,batch_id:e.id,deadline:e.repair_deadline,batch_type:e.batch_type,created_by:a.a.getUser().user_id,created_on:c.a.now(),image_file:[t],status:"待提交"};return i.save(r)}))})).catch((function(e){return $log.error(e),n.a.reject(e)}))},saveByPicture:function(e,t){return e?d.a.getBatch(t).then((function(t){var r={proj_id:t.proj_id,bidsection_id:t.bidsection_id,batch_id:t.id,deadline:t.repair_deadline,batch_type:t.batch_type,created_by:a.a.getUser().user_id,created_on:c.a.now(),image_file:[{temp:e}],status:"待提交"};return i.save(r)})).catch((function(e){return $log.error(e),n.a.reject(e)})):n.a.when()},createProblem:function(e,t){return d.a.getBatch(t).then((function(t){var r={proj_id:t.proj_id,bidsection_id:t.bidsection_id,batch_id:t.id,deadline:t.repair_deadline,batch_type:t.batch_type,created_by:a.a.getUser().user_id,created_on:c.a.now(),image_file:[{temp:e}],status:"待提交"};return i.save(r)}))},takePicture:function(){return u.a.takePicture()},allowSelectPicture:function(){return j.a.getValue("upload_from_phone_albums").then((function(e){return"1"===e}))},reinspectByConflict:function(t){return e.isEmpty(t.reinspectBy)?n.a.when():k.a.removeProblemReinspectBy(t.reinspectBy[0].checkquality_problem_id).then((function(){return k.a.insertReinspectByList(t.reinspectBy)})).then((function(){return TodoRepository.removeProblemTodo(t.reinspectBy[0].checkquality_problem_id)})).then((function(){return TodoRepository.insertTodoList(t.todo)}))},copyProblem:function(t){return n.a.all([b.a.getProblemAllColumn(t),y.a.getRepairAllColumn(t),k.a.getReinspectAllColumn(t),k.a.getReinspectByList(t),g.a.getProblemCCAllColumn(t)]).then((function(t){var r=t[0],i=t[1],o=t[2],u=t[3],d=t[4];if(r.id=c.a.uuid(),r.status="待提交",r.regist_by="",r.repair_by="",r.repair_remark="",r.repair_date="",r.repair_image_file="",r.sent_back_by="",r.sent_back_date="",r.sent_back_times=0,r.sent_back_remark="",r.sent_back_image_file="",r.reinspect_by="",r.reinspect_completed_date="",r.close_date="",r.close_reason="",r.created_by=a.a.getUser().user_id,r.created_on=c.a.now(),r.modified_by=a.a.getUser().user_id,r.download_time="",r.update_timestamp="",r.repair_deadline&&!r.deadline&&r.regist_date){for(var s=r.repair_deadline.match(/\d+/g),_=0;_<s.length;_++)s[_]=parseInt(s[_]);for(var l=new Date(s[0],s[1]-1,s[2],s[3]||0,s[4]||0,s[5]||0),p=r.regist_date.match(/\d+/g),f=0;f<p.length;f++)p[f]=parseInt(p[f]);var m=new Date(p[0],p[1]-1,p[2],p[3]||0,p[4]||0,p[5]||0);r.deadline=Math.ceil((l.getTime()-m.getTime())/864e5)}r.regist_date="",r.repair_deadline="",e.each(i,(function(e){e.id=c.a.uuid(),e.checkquality_problem_id=r.id,e.download_time=""})),e.each(o,(function(e){e.id=c.a.uuid(),e.checkquality_problem_id=r.id,e.download_time=""})),e.each(u,(function(e){e.id=c.a.uuid(),e.checkquality_problem_id=r.id,e.reinspect_date="",i.reinspect_remark="",i.reinspect_image_file="",e.download_time=""}));var h=e.filter(d,(function(e){return"默认"===e.type}));return h=e.map(h,(function(e){return{id:e.cc}})),d=e.filter(d,(function(e){return"被抄送"===e.type})),d=e.map(d,(function(e){return{id:e.cc}})),n.a.all([b.a.insert(r),y.a.insert(i),k.a.insertReinspect(o),k.a.insertReinspectByList(u),g.a.saveProblemCC(r.id,d),g.a.saveDefaultCc(r.id,h)])}))},removeLocalInvalidProblem:function(t){var r=n.a.when();return t.problem_repair&&(r=r.then((function(){return y.a.removeInvalidData(t.problem.id,e.map(t.problem_repair,"id"))}))),t.problem_reinspect&&(r=r.then((function(){return k.a.removeInvalidData(t.problem.id,e.map(t.problem_reinspect,"id"))}))),t.problem_cc&&(r=r.then((function(){return g.a.removeInvalidData(t.problem.id,e.map(t.problem_cc,"id"))}))),t.children_Problem&&(r=r.then((function(){return b.a.removeInvalidChildProblem(t.problem.id,t.children_Problem)}))),r},removeLocalInvalidProblem1:function(t,r){var i=r.checkquality_problem;return n.a.when().then((function(){if(r.checkquality_problem)return b.a.deleteProblemById(i.id)})).then((function(){if(r.checkquality_repair)return y.a.removeInvalidData(i.id,e.map(r.checkquality_repair,"id"))})).then((function(){if(r.checkquality_cc)return g.a.removeInvalidData(i.id,e.map(r.checkquality_cc,"id"))}))},removeClosedBatchProblem:function(){return d.a.getClosedBatchIdList().then((function(e){return i.deleteBatchProblems(e)}))},deleteBatchProblems:function(t){return $log.log("删除已关闭批次的问题"),b.a.getProblemsByBatch(t).then((function(t){var r=n.a.when(),i=["image_file","repair_image_file","sent_back_image_file"],a=[];return e.each(t,(function(t){for(var r=0;r<i.length;++r){var n=t[i[r]]=JSON.parse(t[i[r]]||"[]");e.each(n,(function(e){e.local&&a.push(e.local),e.thumbnail&&a.push(e.thumbnail),e.temp&&a.push(e.temp)}))}})),e.each(a,(function(e){r=r.then((function(){return o.a.isFileExists(e)})).then((function(t){if(t)return o.a.deleteFile(e)}))})),r})).then((function(){return b.a.deleteProblemByBatch(t)}))},getLeaderComments:function(t){return b.a.getLeaderComments(t).then((function(t){return e.each(t,(function(e){e.user={id:e.user_id,name:e.user_name,mobile:e.mobile,is_im_user:e.is_im_user},e.image_file&&(e.image_file=JSON.parse(e.image_file))})),t}))},getPhotoRequired:function(e,t){var r=h.a.state.global.allGrayRelease.UsingProjectParameter;return q.a.getProjParameter(e,"is_photo_required",t).then((function(e){return r&&e&&e.length?Number(e[0].value):h.a.state.global.isPhotoRequired[t]})).catch((function(e){console.log("error",e)}))}},t.a=i}).call(this,r("391c"))}}]);