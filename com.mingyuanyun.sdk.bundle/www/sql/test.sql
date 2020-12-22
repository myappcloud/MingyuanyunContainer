delete from schedule_plan;
delete from schedule_plan_detail;
delete from schedule_plan_detail_report;
delete from schedule_plan_detail_cc;

insert into schedule_plan (id, name, proj_id)
values ('993c216c-e46c-11e7-9d6b-005056a65fd7', '计划1', '39d68bf1-c09f-4dfc-11d7-619c9290384d');

    INSERT INTO schedule_plan_detail (id, schedule_plan_id, name, level, deadline, in_charge_by, status, sort, complete_time)
    VALUES ('993fed6b-e46c-11e7-9d6b-005056a65fd7', '993c216c-e46c-11e7-9d6b-005056a65fd7', '节点1', '1级', null, '39d91ee9-42f4-7d9d-1ea6-97bd8f804f5e', '', 1, NULL);

    INSERT INTO schedule_plan_detail (id, schedule_plan_id, name, level, deadline, in_charge_by, status, sort, complete_time)
    VALUES ('99418099-e46c-11e7-9d6b-005056a65fd7', '993c216c-e46c-11e7-9d6b-005056a65fd7', '节点2', '1级', '2017-12-13 15:50:37', '39d91ee9-42f4-7d9d-1ea6-97bd8f804f5e', '已完成', 2, '2017-12-15 15:50:37');

    INSERT INTO schedule_plan_detail (id, schedule_plan_id, name, level, deadline, in_charge_by, status, sort, complete_time)
    VALUES ('99435b35-e46c-11e7-9d6b-005056a65fd7', '993c216c-e46c-11e7-9d6b-005056a65fd7', '节点3', '2级', '2017-12-14 15:50:37', '39d91ee9-42f4-7d9d-1ea6-97bd8f804f5e', '已完成', 3, '2017-12-14 18:50:37');

    INSERT INTO schedule_plan_detail (id, schedule_plan_id, name, level, deadline, in_charge_by, status, sort, complete_time)
    VALUES ('99450cb6-e46c-11e7-9d6b-005056a65fd7', '993c216c-e46c-11e7-9d6b-005056a65fd7', '节点4', '1级', '2017-12-15 15:50:37', '39d91ee9-42f4-7d9d-1ea6-97bd8f804f5e', '', 4, NULL);

        INSERT INTO schedule_plan_detail_cc (id, schedule_plan_detail_id, cc)
        VALUES ('9946e47d-e46c-11e7-9d6b-005056a65fd7', '99450cb6-e46c-11e7-9d6b-005056a65fd7', '39dc9ec1-d188-3d08-d1a7-7c0a70dba02b');

    INSERT INTO schedule_plan_detail (id, schedule_plan_id, name, level, deadline, in_charge_by, status, sort, complete_time)
    VALUES ('9948aeb2-e46c-11e7-9d6b-005056a65fd7', '993c216c-e46c-11e7-9d6b-005056a65fd7', '节点5', '1级', '2017-12-29 15:50:37', '39dc9ec1-3135-56c9-56d2-6aa9234328d3', '', 5, NULL);

        INSERT INTO schedule_plan_detail_cc (id, schedule_plan_detail_id, cc)
        VALUES ('1829b960-e46d-11e7-9d6b-005056a65fd7', '9948aeb2-e46c-11e7-9d6b-005056a65fd7', '39dc9ec1-d188-3d08-d1a7-7c0a70dba02b');

        INSERT INTO schedule_plan_detail_cc (id, schedule_plan_detail_id, cc)
        VALUES ('182b09f5-e46d-11e7-9d6b-005056a65fd7', '9948aeb2-e46c-11e7-9d6b-005056a65fd7', '39dfd1fb-491e-5a86-4244-c3020b240d9b');

    INSERT INTO schedule_plan_detail (id, schedule_plan_id, name, level, deadline, in_charge_by, status, sort, complete_time)
    VALUES ('182c39e8-e46d-11e7-9d6b-005056a65fd7', '993c216c-e46c-11e7-9d6b-005056a65fd7', '节点6', '1级', '2017-12-31 15:50:37', '39d91ee9-42f4-7d9d-1ea6-97bd8f804f5e', '', 6, NULL);


insert into schedule_plan (id, name, proj_id)
values ('993e1bb0-e46c-11e7-9d6b-005056a65fd7', '计划2', '39d68bf1-c09f-4dfc-11d7-619c9290384d');
