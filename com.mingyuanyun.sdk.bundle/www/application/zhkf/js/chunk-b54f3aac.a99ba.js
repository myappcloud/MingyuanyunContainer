(window["webpackJsonp_module_entry_zhkf_"]=window["webpackJsonp_module_entry_zhkf_"]||[]).push([["chunk-b54f3aac"],{a210:function(e,t,o){"use strict";var r=o("1834"),i=o("0938");t["a"]={insert:function(e,t){var o,n=["id","checkroom_problem_id","operate_type","operate_reason","operate_date","source"];return e.id=i["a"].uuid(),e.operate_date=i["a"].getNowDate(),e.checkroom_problem_id=e.problem_id,e.source="app",e.operate_reason||(e.operate_reason=""),o=r["a"].getColumnsValues(e,n,["operate_reason"]),t?(t.insert("checkroom_problem_operate_log",n,o),e.id):r["a"].insert("checkroom_problem_operate_log",n,o)},deleteByProblemId:function(e,t,o){var i={checkroom_problem_id:e};if(t&&""!=t&&(i.operate_type=t),!o)return r["a"].delete("checkroom_problem_operate_log",i);o.delete("checkroom_problem_operate_log",i)},deleteByUnitId:function(e,t,o){if(t){if(!o)return r["a"].delete("checkroom_problem_operate_log",{batch_unit_id:e,batch_room_id:t});o.delete("checkroom_problem_operate_log",{batch_unit_id:e,batch_room_id:t})}else{if(!o)return r["a"].delete("checkroom_problem_operate_log",{batch_unit_id:e});o.delete("checkroom_problem_operate_log",{batch_unit_id:e})}},getProblemSentBackLogInfo:function(e){var t='select operate_user_name, contractor_name, operate_date, operate_reason, remark from checkroom_problem_operate_log where operate_type = "退回给开发商" and checkroom_problem_id = ? order by operate_date desc';return r["a"].query(t,[e]).catch((function(e){console.log("getProblemSentBackLogInfo error=======",e)}))}}},a324:function(e,t,o){"use strict";o("e697");var r=o("1834"),i=o("fd50"),n=o("0938"),a=o("a14a"),c=o.n(a),_=o("9430"),d=o("a210"),p=function(e,t,o,i){i=i||!1;var n="select                                       p.id,                                           p.code,                       p.batch_room_id,                    p.position_id,                            pt.name position_name,           p.top_item_id,                          p.item_id,                                  ci.full_name as item_name, "+(i?"ifnull(ci.name, '其他') as short_item_name, ":"")+' p.desc_id,                                  p.remark,                                   p.emergency_degree,               p.coordinate,                             p.roomtype_diagram_id,             case p.status when "被退回" then "待派单" else  p.status end status,        case when di.id is null then 0 else 1 end is_local       from checkroom_problem p       left join position pt ON pt.id = p.position_id       left join data_increment di on di.relation_id = p.id and type ="问题" and operation = "add"     left join check_item ci on ci.id=p.item_id     where  p.batch_room_id = ? ';return o||(n+=' and p.status not in ("已作废", "非正常关闭") '),n+=t&&0!==t?" order by\tpt.sort,ci.sort":" order by\tp.regist_date desc",r["a"].query(n,[e])},s=function(e,t,o){var i='select        p.id,       p.position_id,       p.coordinate,       case p.status when "被退回" then "待派单" else  p.status end status,        case when di.id is null then 0 else 1 end is_local,         p.roomtype_diagram_id,      1 as isShow,       case when di.id is null then 0 else 1 end is_local     from checkroom_problem p       left join data_increment di on di.relation_id = p.id and type = "问题" and operation = "add"     where  p.batch_room_id = ? and p.item_id= ? ',n=[e,t];return o&&(i+='and p.desc_id  like "%" || ? || "%"',n.push(o)),r["a"].query(i,n)},m=function(e){var t=[];return e&&c.a.each(e,(function(e){c.a.find(t,(function(t){return t.operate_type===e.operate_type}))||t.push(e)})),t},l=function(e){var t="select p.id,p.code,p.batch_room_id,p.batch_id,p.proj_id,p.building_id,p.position_id,p.top_item_id,p.item_id,p.desc_id,p.remark,p.roomtype_diagram_id,p.coordinate,p.contractor_id,p.repair_remark,p.responsible_company_id,p.regist_date,p.dispatch_date,p.repair_date,p.sent_back_date,p.regist_user_id,p.sent_back_time,p.invalid_date,p.close_date,p.emergency_degree,p.repair_deadline, p.review_date, p.reviewed_by, p.repaired_by, p.assign_user_id,pt.name as position_name,pc.name as contractor_name,ci.full_name as item_name,p.is_passed_when_add ,case p.status when '被退回' then '待派单' else p.status end status,(select operate_reason from checkroom_problem_operate_log\t   where operate_type = '退回' and checkroom_problem_id = p.id    order by operate_date desc limit 1) sent_back_reason, (select operate_reason from checkroom_problem_operate_log\t   where operate_type = '非正常关闭' and checkroom_problem_id = p.id    order by operate_date desc limit 1) close_reason, (select operate_reason from checkroom_problem_operate_log\t   where operate_type = '作废' and checkroom_problem_id = p.id    order by operate_date desc limit 1) invalid_reason,  cb.type as batch_type, cb.child_type as batch_child_type  from checkroom_problem p left join position pt on pt.id=p.position_id left join contractor pc on pc.id=p.contractor_id inner join batch_room br on br.id = p.batch_room_id inner join checkroom_batch cb on cb.batch_id = p.batch_id left join check_item ci on ci.id=p.item_id  where p.id=?",o="select id, operate_type, operate_date from checkroom_problem_operate_log where checkroom_problem_id = ? order by operate_date desc";return r["a"].queryOne(t,[e]).then((function(t){return r["a"].query(o,[e]).then((function(o){var i=m(o),n=c.a.map(i,"id"),a='select img_localpath,img_thumbnail_localpath,img_url,type from problem_images where problem_id=? and (type = "rectify_before" or type is null or type = "" or business_id in("'+n.join('","')+'")) order by type,sort';return r["a"].query(a,[e]).then((function(e){return t.problem_images=e,t}))}))}))},u=function(e){var t="select 1 a from data_increment where operation='add' and type='问题' and relation_id=?";return r["a"].queryOne(t,[e])},b=function(e,t,o,i,a){var p=n["a"].getNowDate();return i=i?parseInt(i):0,v(e).then((function(s){if(!s)throw new Error("未找到batch_room_id相关数据");var m="已整改"===s.status?"repair_sent_back":"sent_back";return r["a"].transaction((function(l){l.update("checkroom_problem",{status:"被退回",sent_back_date:p,sent_back_time:i+1},{id:e},(function(i){var p={};p.batch_unit_id=s.batch_unit_id,p.batch_id=s.batch_id,p.proj_id=s.project_id,p.building_id=s.building_id,p.room_id=s.room_id;var u=d["a"].insert({problem_id:e,batch_unit_id:p.batch_unit_id,operate_type:"退回",operate_reason:o},l);if(l.delete("problem_images",{problem_id:e,type:"yf_send_back"}),!c.a.isEmpty(a)){var b=1,h=["id","problem_id","business_id","batch_unit_id","type","img_localpath","sort"];c.a.each(a,(function(t){t.id=n["a"].uuid(),t.problem_id=e,t.business_id=u||"",t.batch_unit_id=p.batch_unit_id,t.type="yf_send_back",t.sort=b;var o=r["a"].getColumnsValues(t,h);l.insert("problem_images",h,o),b++}))}_["a"].deleteDataIncrement(l,i,"问题","passed",e),_["a"].deleteDataIncrement(l,i,"问题","repair_passed",e),_["a"].insertDataIncrement(l,i,"问题",m,e,p.batch_unit_id,t,p.batch_id)}))})).then((function(){window.uploadStatus("waitUpload")}))}))},h=function(e){var t,o;return e&&e.problem_id?r["a"].transaction((function(r){r.update("checkroom_problem",{status:"非正常关闭",close_date:n["a"].getNowDate()},{id:e.problem_id},(function(t){if(!t.rowsAffected)throw console.error("abnormalCloseProblem: 未更新问题。id="+e.problem_id),new Error("未更新问题")})),t={problem_id:e.problem_id,batch_unit_id:e.batch_unit_id,operate_type:"非正常关闭",operate_reason:e.close_reason},d["a"].insert(t,r),o={type:"问题",operation:"abnormal_closed",relation_id:e.problem_id,batch_unit_id:e.batch_unit_id,batch_room_id:e.batch_room_id,batch_id:e.batch_id},_["a"].insert(r,o)})).then((function(){window.uploadStatus("waitUpload")})):(console.error("abnormalCloseProblem: problem或problem_id为空"),i["a"].reject("problem或problem_id为空"))},f=function(e,t,o){return v(e).then((function(r){if(!r)throw new Error("未找到batch_room_id相关数据");var i={id:e,batch_unit_id:r.batch_unit_id,batch_room_id:t,batch_id:r.batch_id,status:r.status};return y(i,null,o)}))},y=function(e,t,o){o=o||[];var i=function(t){var i=n["a"].getNowDate(),a="已整改"===e.status?"repair_passed":"passed";t.update("checkroom_problem",{status:"已通过",review_date:i},{id:e.id});var p=d["a"].insert({problem_id:e.id,batch_unit_id:e.batch_unit_id,operate_type:"通过"},t);if(t.delete("problem_images",{problem_id:e.id,type:"review"}),!c.a.isEmpty(o)){var s=1,m=["id","problem_id","business_id","batch_unit_id","type","img_localpath","sort"];c.a.each(o,(function(o){o.id=n["a"].uuid(),o.problem_id=e.id,o.business_id=p||"",o.batch_unit_id=e.batch_unit_id,o.type="review",o.sort=s;var i=r["a"].getColumnsValues(o,m);t.insert("problem_images",m,i),s++}))}_["a"].insert(t,{type:"问题",operation:a,relation_id:e.id,batch_unit_id:e.batch_unit_id,batch_room_id:e.batch_room_id,batch_id:e.batch_id})};return t?i(t):r["a"].transaction((function(e){i(e)})).then((function(){window.uploadStatus("waitUpload")}))},g=function(e,t){var o=function(t){t.update("checkroom_problem",{status:"待派单",review_date:null},{id:e}),d["a"].deleteByProblemId(e,"通过",t),_["a"].deleteDataIncrement(t,{rowsAffected:!0},"问题","passed",e)};return t?o(t):r["a"].transaction((function(e){o(e)}))},w=function(e,t,o){var i=n["a"].getNowDate();return k(t).then((function(n){if(!n||!n.length)throw new Error("未找到batch_room_id相关数据");return r["a"].transaction((function(r){r.update("checkroom_problem",{status:"已作废",invalid_date:i,review_date:null,is_passed_when_add:0},{id:e},(function(i){var a={},c=n[0];a.batch_unit_id=c.batch_unit_id,a.batch_id=c.batch_id,a.proj_id=c.project_id,a.building_id=c.building_id,a.room_id=c.room_id,d["a"].insert({problem_id:e,batch_unit_id:a.batch_unit_id,operate_type:"作废",operate_reason:o},r),_["a"].deleteDataIncrement(r,i,"问题","add",e),_["a"].deleteDataIncrement(r,i,"问题","passed",e),_["a"].insertDataIncrement(r,i,"问题","cancelled",e,a.batch_unit_id,t,a.batch_id)}))})).then((function(){window.uploadStatus("waitUpload")}))}))},k=function(e){var t=" select cb.project_id,br.batch_id,cb.type,br.batch_unit_id,br.room_id,br.building_id from batch_room br inner join checkroom_batch cb on cb.batch_id = br.batch_id where br.id = ?";return r["a"].query(t,[e])},v=function(e){var t="select cp.status, cb.project_id,br.batch_id,cb.type,br.batch_unit_id,br.room_id,br.building_id from checkroom_problem cp  inner join batch_room br on br.id = cp.batch_room_id  inner join checkroom_batch cb on cb.batch_id = br.batch_id where cp.id = ?";return r["a"].queryOne(t,[e])},j=function(e){var t=" select status,count(*)icount from checkroom_problem where batch_room_id = ? group by status ";return r["a"].query(t,[e])},P=function(e){return r["a"].queryOne("select cp.status, cp.coordinate, cp.batch_room_id, cp.roomtype_diagram_id, ryd.name as diagram_name from checkroom_problem cp inner join room_type_diagram ryd on ryd.id =  cp.roomtype_diagram_id where cp.id = ?",[e])},I=function(e){return r["a"].delete("problem_images",{id:e})},q={getProblemList:p,getProblemParams:k,getProblemInfo:l,isLocal:u,backProblem:b,cancelProblem:w,passProblem:f,passProblemExec:y,unDoPassProblemExecByEdit:g,abnormalCloseProblem:h,getProblemCountByBatchRoomId:j,getProblemListForSpecialCheckDiagram:s,getProblemPositionPointInfo:P,deleteProblemImage:I,getProblemListByBatchUnitId:function(e){var t=" select distinct cp.batch_room_id,cp.status,  case when cp.status = '待派单' or cp.status = '待指派' or cp.status = '待整改' then 1 when cp.status = '已整改' then 0 when cp.status = '已通过' then 2 end sort  from checkroom_problem cp  inner join batch_room br on cp.batch_room_id = br.id  where cp.status not in ('已作废','非正常关闭')  and br.batch_unit_id = ?  order by sort";return r["a"].query(t,[e])},getAllProblemListByPage:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20;t*=o;var i="select distinct cp.id, cp.code, cp.status,case cp.status when '待整改' then date(cp.repair_deadline) when '已整改' then date(cp.repair_date) when '已通过' then date(cp.review_date) when '已作废' then date(cp.invalid_date) when '已关闭' then date(cp.close_date) when '待派单' then date(cp.regist_date) else '' end as deal_time, br.floor, br.room_no, p.name as position, ci.full_name as item, cp.desc_id, c.name as contractor,cp.roomtype_diagram_id, cp.sent_back_time, cp.emergency_degree, cp.batch_room_id,cp.batch_unit_id,ifnull(u.name,'') as regist_user_name  from checkroom_problem cp  inner join batch_room br on cp.batch_room_id = br.id  inner join building_floor bf on bf.building_id=cp.building_id and bf.floor=br.floor  inner join position p on p.id = cp.position_id inner join check_item ci on ci.id = cp.item_id left join user u on u.id = cp.regist_user_id left join contractor c on c.id = cp.contractor_id left join check_item_desc cid on cid.id = cp.desc_id where "+e+" order by bf.sort desc, br.room_no, p.sort, ci.sort, cid.sort limit "+t+","+o;return r["a"].query(i)},getSelectedProblems:function(e){var t="select distinct cp.id, cp.batch_room_id as batchRoomId  from checkroom_problem cp  inner join batch_room br on cp.batch_room_id = br.id  inner join check_item ci on ci.id = cp.item_id left join user u on u.id = cp.regist_user_id where "+e;return r["a"].query(t)},getCountOfProblemStatus:function(e){var t='select r.status as name, r.status as value, count(1) as count,case r.status when "待派单" then 1 when "待整改" then 2 when "已整改" then 3 when "已通过" then 4 when "已作废" then 5 else 6 end sort from (select cp.status from checkroom_problem cp  inner join batch_room br on br.id = cp.batch_room_id  inner join user u on u.id = cp.regist_user_id inner join check_item ci on ci.id = cp.item_id  where '+e+") r group by status order by sort";return r["a"].query(t)},getCountOfCheckItem:function(e){var t="select r.name as name, r.id as value, count(1) as count from  (select ci.id, ci.full_name as name from checkroom_problem cp  inner join batch_room br on br.id = cp.batch_room_id  inner join user u on u.id = cp.regist_user_id inner join check_item ci on ci.id = cp.item_id  where "+e+") r group by id order by name";return r["a"].query(t)},getCountOfFloor:function(e){var t="select r.floor as name, r.floor as value,sort, count(1) as count from  (select br.floor,bf.sort from checkroom_problem cp  inner join batch_room br on br.id = cp.batch_room_id  inner join building_floor bf on bf.building_id=cp.building_id and bf.floor=br.floor inner join user u on u.id = cp.regist_user_id inner join check_item ci on ci.id = cp.item_id  where "+e+") r group by floor order by sort desc";return r["a"].query(t)},getCountOfRegister:function(e){var t="select r.name as name, r.id as value, count(1) as count from  (select u.id, u.name from checkroom_problem cp  inner join batch_room br on br.id = cp.batch_room_id  inner join user u on u.id = cp.regist_user_id inner join check_item ci on ci.id = cp.item_id  where "+e+") r group by id order by name";return r["a"].query(t)},getListInfoById:function(e){var t="select cp.id, cp.code, cp.status,case cp.status when '待整改' then date(cp.repair_deadline) when '已整改' then date(cp.repair_date) when '已通过' then date(cp.review_date) when '已作废' then date(cp.invalid_date) when '已关闭' then date(cp.close_date) else '' end as deal_time, br.floor,  br.room_no, p.name as position, ci.full_name as item, cp.desc_id, c.name as contractor,cp.roomtype_diagram_id, cp.sent_back_time, cp.emergency_degree, cp.batch_room_id,cp.batch_unit_id,ifnull(u.name,'') as regist_user_name  from checkroom_problem cp  inner join batch_room br on cp.batch_room_id = br.id  inner join building_floor bf on bf.building_id=cp.building_id and bf.floor=br.floor  inner join position p on p.id = cp.position_id inner join check_item ci on ci.id = cp.item_id left join user u on u.id = cp.regist_user_id left join contractor c on c.id = cp.contractor_id left join check_item_desc cid on cid.id = cp.desc_id where cp.id = ?";return r["a"].queryOne(t,[e])},getProblemIdWithoutImageUrl:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o="",i=[e];t&&(o+=" and di.batch_room_id = ?",i.push(t));var n="select di.relation_id         from problem_images pi         inner join data_increment di on di.relation_id = pi.problem_id         WHERE di.batch_unit_id = ? AND di.type = '问题' AND di.operation ='add'         and ifnull(pi.img_localpath, '') <> ''         and (ifnull(pi.img_url, '') = '') "+o;return r["a"].queryColumn(n,i,"relation_id")}};t["a"]=q},a405:function(e,t,o){"use strict";var r=o("1834"),i=o("0938"),n=o("a14a"),a=o.n(n),c=function(){var e={};return e={insert:function(t,o,n){var c,_=["id","batch_room_id","batch_unit_id","reason","remark","is_local","created_by_name","created_on"],d={id:i["a"].uuid(),batch_room_id:o,is_local:1,created_on:i["a"].getNowDate()};n=a.a.extend(d,n),c=r["a"].getColumnsValues(n,_,["remark"]),e.deleteRoomDeliveryRejection(t,o),t.insert("batch_room_delivery_rejection",_,c)},deleteRoomDeliveryRejection:function(e,t){var o={batch_room_id:t,is_local:1};e.delete("batch_room_delivery_rejection",o)},updateToNotLocalByBatchUnitId:function(e,t,o){return t?(o||r["a"]).update("batch_room_delivery_rejection",{is_local:0},{batch_room_id:t}):(o||r["a"]).update("batch_room_delivery_rejection",{is_local:0},{batch_unit_id:e})},getList:function(e){var t=" select reason,remark,created_by_name,created_on           from batch_room_delivery_rejection           where batch_room_id = ?           order by created_on desc";return r["a"].query(t,[e])},hasList:function(e){var t=" select 1 has from batch_room_delivery_rejection where batch_room_id = ? ";return r["a"].queryOne(t,[e]).then((function(e){return!!e}))},hasListWithoutLocal:function(e){var t="select 1 has from batch_room_delivery_rejection           where batch_room_id = ? and (is_local is null or is_local<>1)";return r["a"].queryOne(t,[e]).then((function(e){return!!e}))}}};t["a"]=c()}}]);