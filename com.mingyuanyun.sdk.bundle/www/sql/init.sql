
-- 移动质检建表语句
CREATE TABLE
IF NOT EXISTS global_storage
(
  key   TEXT PRIMARY KEY NOT NULL,
  value TEXT
);

--  数据库版本表
CREATE TABLE
IF NOT EXISTS _version
(
    version TEXT NOT NULL,
    time    DATETIME DEFAULT
(datetime
('now', 'localtime'))
);

-- 承建商
create table
IF NOT EXISTS contractor
(
   id                   text PRIMARY KEY not null,
   name                 text,
   name_py                 text
);
CREATE INDEX
IF NOT EXISTS "ix_contractor_name_py" ON "contractor"
("name_py" ASC);

-- 标段
create table
IF NOT EXISTS section
(
   id                   text COLLATE NOCASE PRIMARY KEY not null,
   name                 text COLLATE NOCASE not null,
   proj_id              text COLLATE NOCASE,
   contractor_id        text COLLATE NOCASE,
   created_on           text COLLATE NOCASE,
   checkitem_setting    integer,
   inspect_id           text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS "ix_section_proj_id" ON "section"
(proj_id);

-- 批次
create table
IF NOT EXISTS batch
(
   id                   text COLLATE NOCASE PRIMARY KEY not null,
   batch_type           text COLLATE NOCASE not null,
   proj_id              text COLLATE NOCASE,
   bidsection_id        text COLLATE NOCASE,
   name                 text COLLATE NOCASE,
   repair_deadline      integer,
   entry_requirements   integer,
   created_by           text COLLATE NOCASE,
   is_downloaded        text COLLATE NOCASE,
   created_on           text COLLATE NOCASE,
   modified_on          text COLLATE NOCASE,
   item_id              text COLLATE NOCASE,
   building_id          text COLLATE NOCASE,
   unit                 text COLLATE NOCASE,
   batch_purpose        text COLLATE NOCASE,
   repair_mode          integer,
   template_id          text COLLATE NOCASE,
   status               text COLLATE NOCASE,
   score                text,
   is_closed            integer,
   in_charge_by         text COLLATE NOCASE,
   place                text COLLATE NOCASE,
   parent_id            text COLLATE NOCASE,
   root_id              text COLLATE NOCASE,
   template_extension   text COLLATE NOCASE,
   is_default           integer default 0 -- 是否为默认批次[1为默认,0为非默认]
);
CREATE INDEX
IF NOT EXISTS "ix_batch_proj_id" ON "batch"
(proj_id);
CREATE INDEX
IF NOT EXISTS "ix_batch_bidsection_id" ON "batch"
(bidsection_id);

-- 批次检查人
create table
IF NOT EXISTS batch_user
(
   id                   text PRIMARY KEY not null,
   proj_id              text,
   bidsection_id        text,
   batch_id             text,
   user_id              text,
   user_name            text
);
CREATE INDEX
IF NOT EXISTS "ix_batch_user_batch_id" ON "batch_user"
(batch_id);
CREATE INDEX
IF NOT EXISTS "ix_batch_user_proj_id" ON "batch_user"
(proj_id);
CREATE INDEX
IF NOT EXISTS "ix_batch_user_bidsection_id" ON "batch_user"
(bidsection_id);

-- 检查项
create table
IF NOT EXISTS problem_class
(
   id                   text PRIMARY KEY not null,
   code                 text,
   name                 text,
   full_name            text,
   parent_id            text,
   type                 integer,
   content              text,
   content_image              text COLLATE NOCASE,
   measurement_points integer,
   standard_min integer,
   standard_max integer,
   passrate_mode integer,
   accept_standard      text,
   process_mode integer,
   measurement_area_num integer,
   measurement_area_name    text COLLATE NOCASE,
   per_area_points integer,
   need_check integer,
   need_workload integer,
   need_workload_unit text,
   is_use text,
   is_batch text,
   extension text,
   source text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS "ix_problem_class_parent_id" ON "problem_class"
(parent_id);
CREATE INDEX
IF NOT EXISTS "ix_problem_class_type" ON "problem_class"
("type");
CREATE INDEX
IF NOT EXISTS ix_problem_class_parent_id_type ON problem_class
(parent_id, type);

-- 问题描述
create table
IF NOT EXISTS problem
(
   id                   text PRIMARY KEY not null,
   class_id             text not null,
   name                 text,
   sort                 integer
);
create index
IF NOT EXISTS ix_class_id on problem
(class_id);

--
create table
IF NOT EXISTS user_project
(
   id              text COLLATE NOCASE,
   name            text COLLATE NOCASE,
   name_py         text COLLATE NOCASE,
   org_order_sort  text COLLATE NOCASE,
   order_sort      text COLLATE NOCASE,
   parent_name     text COLLATE NOCASE,
   expire_time     text COLLATE NOCASE
);
CREATE UNIQUE INDEX
IF NOT EXISTS idx_id ON user_project
(id);

-- 用户项目权限
create table
IF NOT EXISTS project_participant
(
   proj_id              text COLLATE NOCASE,
   user_id              text COLLATE NOCASE,
   role_type            integer
);
CREATE INDEX
IF NOT EXISTS idx_user_id ON project_participant
(user_id);
CREATE INDEX
IF NOT EXISTS idx_role_type ON project_participant
(role_type);
CREATE INDEX
IF NOT EXISTS idx_proj_id_user_id ON project_participant
(proj_id, user_id);

-- 用户表
create table
IF NOT EXISTS user
(
   id                   text PRIMARY KEY not null,
   name                 text,
   name_py              text,
   mobile               text,
   head_portrait        text COLLATE NOCASE,
   is_im_user           integer,
   special_mode         integer COLLATE NOCASE default 0,
   post               text
);
CREATE INDEX
IF NOT EXISTS idx_name ON user
(name);

-- 标段检查项
create table
IF NOT EXISTS section_checkitem
(
   id                   text PRIMARY KEY not null,
   proj_id              text COLLATE NOCASE,
   bidsection_id        text COLLATE NOCASE,
   contractor_id        text COLLATE NOCASE,
   item_id              text COLLATE NOCASE,
   parent_id            text COLLATE NOCASE,
   item_type            text COLLATE NOCASE,
   repair               text COLLATE NOCASE,
   reinspect            text COLLATE NOCASE,
   cc                   text COLLATE NOCASE,
   need_receiver        integer,
   constructer          text COLLATE NOCASE,
   need_constructer     integer,
   area_acceptor        text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS idx_section_checkitem_bidsection_id ON section_checkitem
(bidsection_id);
CREATE INDEX
IF NOT EXISTS idx_section_checkitem_item_id ON section_checkitem
(item_id);
CREATE INDEX
IF NOT EXISTS idx_section_checkitem_parent_id ON section_checkitem
(parent_id);
CREATE INDEX
IF NOT EXISTS idx_section_checkitem_item_type ON section_checkitem
(item_type);
CREATE INDEX
IF NOT EXISTS idx_section_checkitem_parent_id_bidsection_id_item_type ON section_checkitem
(parent_id, bidsection_id, item_type);

-- 问题表
create table
IF NOT EXISTS checkquality_problem
(
   id                       text PRIMARY KEY not null,
   proj_id                  text COLLATE NOCASE,
   bidsection_id            text COLLATE NOCASE,
   batch_id                 text COLLATE NOCASE,
   batch_type               text COLLATE NOCASE,
   item_id                  text COLLATE NOCASE,
   contractor_id            text COLLATE NOCASE,
   desc_id                  text COLLATE NOCASE,
   remark                   text COLLATE NOCASE,
   place                    text COLLATE NOCASE,
   image_file               text COLLATE NOCASE,
   building_id              text COLLATE NOCASE,
   room_id                  text COLLATE NOCASE,
   measurement_points       integer,
   problem_points           integer,
   status                   text COLLATE NOCASE,
   emergency_degree         text COLLATE NOCASE,
   deadline                 integer,
   regist_by                text COLLATE NOCASE,
   regist_date              text COLLATE NOCASE,
   repair_by                text COLLATE NOCASE,
   repair_deadline          text COLLATE NOCASE,
   repair_date              text COLLATE NOCASE,
   repair_image_file        text COLLATE NOCASE,
   sent_back_by             text COLLATE NOCASE,
   sent_back_date           text COLLATE NOCASE,
   sent_back_times          integer,
   sent_back_remark         text COLLATE NOCASE,
   sent_back_image_file     text COLLATE NOCASE,
   reinspect_by             text COLLATE NOCASE,
   reinspect_completed_date text COLLATE NOCASE,
   close_date               text COLLATE NOCASE,
   close_reason             text COLLATE NOCASE,
   created_by               text COLLATE NOCASE,
   modified_by              text COLLATE NOCASE,
   created_on               text COLLATE NOCASE,
   update_timestamp        text COLLATE NOCASE,
   download_time               text COLLATE NOCASE,
   parent_id               text COLLATE NOCASE,
   problem_values text COLLATE NOCASE,
   process_check_id text COLLATE NOCASE,
   unit text COLLATE NOCASE,
   repair_remark text COLLATE NOCASE,
   standard_min          integer,
   standard_max          integer,
   passrate_mode          integer,
   entry_requirements          integer,
   drawing_file        text COLLATE NOCASE,
   biz_id               text COLLATE NOCASE,
   biz_children_id               text COLLATE NOCASE,
   deduction          double,
   redline_deduction  double,
   problem_values_zip        text,
   floor text COLLATE NOCASE,
   process_mode integer COLLATE NOCASE,
   item_full_name        text,
   item_name        text,
   contract_id text COLLATE NOCASE,
   deduction_level text COLLATE NOCASE,
   repair_requirements text,  -- 现场、安全、质量整改要求
   voice_file text COLLATE NOCASE -- 语音地址，json数据
);
CREATE INDEX
IF NOT EXISTS idx_checkquality_problem_batch_id ON checkquality_problem
(batch_id);
CREATE INDEX
IF NOT EXISTS idx_checkquality_problem_parent_id ON checkquality_problem
(parent_id);
CREATE INDEX
IF NOT EXISTS idx_checkquality_problem_proj_id ON checkquality_problem
(proj_id);
CREATE INDEX
IF NOT EXISTS idx_checkquality_problem_item_id ON checkquality_problem
(item_id);
CREATE INDEX
IF NOT EXISTS idx_checkquality_problem_building_id ON checkquality_problem
(building_id);
CREATE INDEX
IF NOT EXISTS idx_checkquality_problem_room_id ON checkquality_problem
(room_id);
CREATE INDEX
IF NOT EXISTS idx_checkquality_problem_process_check_id ON checkquality_problem
(process_check_id);
CREATE INDEX
IF NOT EXISTS idx_checkquality_problem_desc_id ON checkquality_problem
(desc_id);
CREATE INDEX
IF NOT EXISTS idx_batch_type_status_regist_date ON checkquality_problem
(batch_type, status, regist_date);
CREATE INDEX
IF NOT EXISTS idx_checkquality_problem_biz_id ON checkquality_problem
(biz_id);
CREATE INDEX
IF NOT EXISTS idx_checkquality_problem_contract_id ON checkquality_problem
(contract_id);
CREATE INDEX
IF NOT EXISTS idx_checkquality_problem_biz_children_id ON checkquality_problem
(biz_children_id);

-- 问题抄送人
create table
IF NOT EXISTS checkquality_cc
(
   id                       text PRIMARY KEY not null,
   checkquality_problem_id  text,
   reading_time             text,
   cc                       text,
   download_time            text COLLATE NOCASE,
   update_timestamp         text COLLATE NOCASE,
   type                     text
);
CREATE INDEX
IF NOT EXISTS idx_checkquality_cc_problem_id ON checkquality_cc
(checkquality_problem_id);
CREATE INDEX
IF NOT EXISTS idx_checkquality_problem_id_cc_type ON checkquality_cc
(checkquality_problem_id, cc, type);

-- 问题整改人
create table
IF NOT EXISTS checkquality_repair
(
   id                       text PRIMARY KEY not null,
   checkquality_problem_id  text,
   reading_time             text,
   download_time            text COLLATE NOCASE,
   update_timestamp         text COLLATE NOCASE,
   repair                   text,
   has_read                 integer
);
CREATE INDEX
IF NOT EXISTS idx_checkquality_repair_problem_id ON checkquality_repair
(checkquality_problem_id);
CREATE INDEX
IF NOT EXISTS idx_checkquality_repair_repair ON checkquality_repair
(repair);
CREATE INDEX
IF NOT EXISTS idx_checkquality_problem_id_repair ON checkquality_repair
(checkquality_problem_id, repair);

-- 问题复验人
create table
IF NOT EXISTS checkquality_reinspect
(
   id                       text PRIMARY KEY not null,
   checkquality_problem_id  text,
   reading_time             text,
   download_time            text COLLATE NOCASE,
   update_timestamp         text COLLATE NOCASE,
   reinspect                text
);
CREATE INDEX
IF NOT EXISTS idx_checkquality_reinspect_problem_id ON checkquality_reinspect
(checkquality_problem_id);
CREATE INDEX
IF NOT EXISTS idx_checkquality_problem_id_reinspect ON checkquality_reinspect
(checkquality_problem_id, reinspect);

-- 问题责任人指派记录
create table
IF NOT EXISTS checkquality_problem_fpinfo
(
   id                       text PRIMARY KEY not null,
   proj_id                  text,
   bidsection_id            text,
   batch_id                 text,
   checkquality_problem_id  text,
   user_id_new              text,
   user_id_old              text,
   fp_date                  text,
   fp_type                  text,
   created_by               text,
   created_on               text
);
CREATE INDEX
IF NOT EXISTS idx_checkquality_problem_id ON checkquality_problem_fpinfo
(checkquality_problem_id);

-- 问题状态变更日志
create table
IF NOT EXISTS checkquality_problem_log
(
   id                       text PRIMARY KEY not null,
   proj_id                  text,
   bidsection_id            text,
   batch_id                 text,
   checkquality_problem_id  text,
   operate_type             text,
   operate_reason           text,
   remark                   text,
   image_file               text,
   created_by               text,
   created_on               text
);

-- 图片下载队列
create table
IF NOT EXISTS download_image_queue
(
   id                     text not null,
   table_name    text,
   retry        integer,
   ordinal        integer DEFAULT 65535,
   time                 text,
   image_size                 text,
   image_folder                 text
);

create table
IF NOT EXISTS build_unit
(
   id                   text COLLATE NOCASE PRIMARY KEY NOT NULL,
   name                 text COLLATE NOCASE,
   building_id          text COLLATE NOCASE,
   sort                 integer
);
CREATE INDEX
IF NOT EXISTS idx_build_unit_building_id ON build_unit
(building_id);

create table
IF NOT EXISTS building
(
   id                   text COLLATE NOCASE PRIMARY KEY NOT NULL,
   name                 text COLLATE NOCASE,
   name_py              text COLLATE NOCASE,
   proj_id              text COLLATE NOCASE,
   code                 text COLLATE NOCASE,
   sort                 integer
);
CREATE INDEX
IF NOT EXISTS idx_building_proj_id ON building
(proj_id);

create table
IF NOT EXISTS section_building
(
   id                   text COLLATE NOCASE PRIMARY KEY NOT NULL,
   section_id           text COLLATE NOCASE,
   building_id          text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS idx_section_building_section_id ON section_building
(section_id);

create table
IF NOT EXISTS room
(
   id                   text COLLATE NOCASE PRIMARY KEY NOT NULL,
   room_no              text COLLATE NOCASE,
   no                   text COLLATE NOCASE,
   unit                 text COLLATE NOCASE,
   building_id          text COLLATE NOCASE,
   floor                text COLLATE NOCASE,
   roomtype_id          text COLLATE NOCASE,
   floor_sort           integer,
   is_virtual           integer,
   sort                 integer
);
CREATE INDEX
IF NOT EXISTS idx_room_building_id ON room
(building_id);

create table
IF NOT EXISTS batch_room
(
   id                   text COLLATE NOCASE PRIMARY KEY NOT NULL,
   batch_id             text COLLATE NOCASE,
   room_id              text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS idx_batch_room_batch_id ON batch_room
(batch_id);

-- 工序移交
create table
IF NOT EXISTS process_check
(
   id                   text COLLATE NOCASE PRIMARY KEY NOT NULL,
   proj_id              text COLLATE NOCASE,
   bidsection_id        text COLLATE NOCASE,
   batch_id             text COLLATE NOCASE,
   batch_type           text COLLATE NOCASE,
   item_id              text COLLATE NOCASE,
   contractor_id        text COLLATE NOCASE,
   building_id          text COLLATE NOCASE,
   unit                 text COLLATE NOCASE,
   floor                text COLLATE NOCASE,
   is_active            integer,
   status               text COLLATE NOCASE,
   repair               text COLLATE NOCASE,
   receiver             text COLLATE NOCASE,
   reinspect            text COLLATE NOCASE,
   download_time        text COLLATE NOCASE,
   update_timestamp     text COLLATE NOCASE,
   code                 text,
   receive_contractor_id     text COLLATE NOCASE,
   constructer          text COLLATE NOCASE,
   process_mode         integer,
   regist_date          text COLLATE NOCASE,
   location_id          text COLLATE NOCASE,
   custom_location      text COLLATE NOCASE,
   area_acceptor        text COLLATE NOCASE

);
CREATE INDEX
IF NOT EXISTS idx_process_check_batch_id ON process_check
(batch_id);

create table
IF NOT EXISTS process_check_status
(
   id                   text COLLATE NOCASE PRIMARY KEY NOT NULL,
   process_check_id     text COLLATE NOCASE,
   type                 text COLLATE NOCASE,
   image_file           text COLLATE NOCASE,
   status               text COLLATE NOCASE,
   remark               text COLLATE NOCASE,
   person_in_charge     text COLLATE NOCASE,
   complete_date        text COLLATE NOCASE,
   is_auto_complete     integer,
   download_time        text COLLATE NOCASE,
   update_timestamp     text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS idx_process_check_status ON process_check_status
(process_check_id);

create table
IF NOT EXISTS process_check_checkpoint_detail
(
   id                   text PRIMARY KEY not null,
   process_check_id     text COLLATE NOCASE default "",
   status_id            text COLLATE NOCASE default "",
   checkpoint_id        text COLLATE NOCASE default "",
   title                text default "",
   content              text default "",
   sort                 integer default "",
   image_file           text default "",
   download_time        text default "",
   update_timestamp     text default "",
   is_open              integer
);

create table
IF NOT EXISTS process_check_send_back_checkpoint_detail
(
   id                   text PRIMARY KEY not null,
   process_check_id     text COLLATE NOCASE default "",
   send_back_id         text COLLATE NOCASE default "",
   checkpoint_id        text COLLATE NOCASE default "",
   title                text default "",
   content              text default "",
   sort                 interal
(4) default "",
   image_file           text default "",
   download_time        text default "",
   update_timestamp     text default ""
);

create table
IF NOT EXISTS location_complete_rate
(
   id                   text PRIMARY KEY not null,
   location_id          text COLLATE NOCASE default "",
   item_id              text COLLATE NOCASE default "",
   complete_rate        text COLLATE NOCASE default ""
);

create table
IF NOT EXISTS building_floor
(
   floor                text COLLATE NOCASE,
   building_id          text COLLATE NOCASE,
   sort                 integer
);
CREATE INDEX
IF NOT EXISTS idx_building_floor ON building_floor
(building_id);

create table
IF NOT EXISTS batch_cc
(
   id                   text COLLATE NOCASE PRIMARY KEY NOT NULL,
   batch_id             text COLLATE NOCASE,
   user_id                   text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS idx_batch_cc ON batch_cc
(batch_id);

create table
IF NOT EXISTS local_reading_status
(
   id                   text PRIMARY KEY NOT NULL,
   type                text COLLATE NOCASE,
   relation_id          text COLLATE NOCASE,
   reading_time         text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS idx_local_reading_status_relation_id ON local_reading_status
(relation_id);
CREATE INDEX
IF NOT EXISTS idx_local_reading_status_type ON local_reading_status
(type);

create table
IF NOT EXISTS project_roomtype
(
   id                   text PRIMARY KEY NOT NULL,
   proj_id              text COLLATE NOCASE,
   roomtype             text COLLATE NOCASE,
   room_structure       text COLLATE NOCASE,
   diagram_file         text COLLATE NOCASE
);

create table
IF NOT EXISTS options
(
   id                   text PRIMARY KEY NOT NULL,
   name                 text COLLATE NOCASE,
   value                text COLLATE NOCASE,
   text                 text COLLATE NOCASE
);


create table
IF NOT EXISTS check_accept
(
   id                   text PRIMARY KEY not null,
   proj_id              text COLLATE NOCASE,
   bidsection_id        text COLLATE NOCASE,
   batch_id             text COLLATE NOCASE,
   item_id              text COLLATE NOCASE,
   building_id          text COLLATE NOCASE,
   unit                 text COLLATE NOCASE,
   room_id              text COLLATE NOCASE,
   status               text COLLATE NOCASE,
   acceptor             text COLLATE NOCASE,
   accept_date          text COLLATE NOCASE,
   accept_standard      text COLLATE NOCASE,
   update_timestamp     text COLLATE NOCASE,
   code                 text COLLATE NOCASE,
   drawing_file              text COLLATE NOCASE,
   download_time        text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS idx_check_accept_batch_id ON check_accept
(batch_id);
CREATE INDEX
IF NOT EXISTS idx_check_accept_item_id ON check_accept
(item_id);
CREATE INDEX
IF NOT EXISTS idx_check_accept_room_id ON check_accept
(room_id);


create table
IF NOT EXISTS check_accept_detail
(
   id                   text PRIMARY KEY not null,
   check_accept_id      text COLLATE NOCASE,
   x                    text COLLATE NOCASE,
   y                    text COLLATE NOCASE,
   image_file           text COLLATE NOCASE,
   value               text COLLATE NOCASE,
   remark               text COLLATE NOCASE,
   download_time        text COLLATE NOCASE,
   desc_id              text COLLATE NOCASE,
   update_timestamp     text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS idx_check_accept_detail_check_accept_id ON check_accept_detail
(check_accept_id);

--材料验收
create table
IF NOT EXISTS material
(
    id                   text PRIMARY KEY NOT NULL,
    proj_id              text COLLATE NOCASE,
    name                 text COLLATE NOCASE,
    name_py              text COLLATE NOCASE,
    quantity_unit        text COLLATE NOCASE,
    download_time        text COLLATE NOCASE,
    category_name        text COLLATE NOCASE,
    category_id          text COLLATE NOCASE,
    code                 integer,
    guideline            text COLLATE NOCASE,
    source               text COLLATE NOCASE
);
CREATE INDEX IF NOT EXISTS idx_material__category_id ON material (category_id);

create table
IF NOT EXISTS material_category
(
    id                   text PRIMARY KEY NOT NULL,
    code                 integer,
    name                 text COLLATE NOCASE,
    download_time        text COLLATE NOCASE,
    source               text COLLATE NOCASE
);

create table
IF NOT EXISTS material_brand
(
    id                   text PRIMARY KEY not null,
    name                 text COLLATE NOCASE,
    name_py              text COLLATE NOCASE,
    material_id          text COLLATE NOCASE,
    brand_source         integer,
    download_time        text COLLATE NOCASE
);

create table
IF NOT EXISTS material_type
(
   id                   text PRIMARY KEY NOT NULL,
   name                 text COLLATE NOCASE,
   name_py              text COLLATE NOCASE,
   material_id          text COLLATE NOCASE,
   quantity_unit        text COLLATE NOCASE,
   download_time        text COLLATE NOCASE,
   code                 integer,
   source               text COLLATE NOCASE
);
CREATE INDEX IF NOT EXISTS idx_material_type__mid_code_name ON material_type (material_id, code, name_py);

create table
IF NOT EXISTS material_specification
(
   id                   text PRIMARY KEY NOT NULL,
   name                 text COLLATE NOCASE,
   name_py              text COLLATE NOCASE,
   material_id          text COLLATE NOCASE,
   material_type_id     text COLLATE NOCASE,
   download_time        text COLLATE NOCASE
);

create table
IF NOT EXISTS material_task
(
   id                   text PRIMARY KEY NOT NULL,
   proj_id              text COLLATE NOCASE,
   bidsection_id        text COLLATE NOCASE,
   material_id          text COLLATE NOCASE,
   material             text COLLATE NOCASE,
   quantity_unit        text COLLATE NOCASE,
   name                 text COLLATE NOCASE,
   used_part            text COLLATE NOCASE,
   supplier             text COLLATE NOCASE,
   recipient_unit       text COLLATE NOCASE,
   recipient            text COLLATE NOCASE,
   supervisor           text COLLATE NOCASE,
   constructer          text COLLATE NOCASE,
   status               text COLLATE NOCASE,
   sort                 text COLLATE NOCASE,
   allow_task_accept_together integer default 0,
   created_on           text COLLATE NOCASE,
   created_by           text COLLATE NOCASE,
   modified_by          text COLLATE NOCASE,
   update_timestamp     text COLLATE NOCASE,
   need_check           text COLLATE NOCASE,
   download_time        text COLLATE NOCASE,
   material_type_list   text COLLATE NOCASE,
   category_name        text COLLATE NOCASE,
   checker              text COLLATE NOCASE,
   remark               text COLLATE NOCASE,
   area_acceptor        text COLLATE NOCASE,
   contract_id          text COLLATE NOCASE,
   contract_name        text COLLATE NOCASE,
   is_flow              integer default 0,
   current_task_process_id  text COLLATE NOCASE,
   entry_date           text COLLATE NOCASE,
   sendback_date        text COLLATE NOCASE
);

create table
IF NOT EXISTS material_task_log
(
   id                   text PRIMARY KEY NOT NULL,
   task_id              text COLLATE NOCASE,
   recipient_unit       text COLLATE NOCASE,
   recipient            text COLLATE NOCASE,
   supervisor           text COLLATE NOCASE,
   status_before        text COLLATE NOCASE,
   status               text COLLATE NOCASE,
   image_file           text COLLATE NOCASE,
   remark               text COLLATE NOCASE,
   cc                   text COLLATE NOCASE,
   occurrence_date      text COLLATE NOCASE,
   operate_user         text COLLATE NOCASE,
   operate_status       text COLLATE NOCASE,
   role_type            text COLLATE NOCASE,
   task_process_id      text COLLATE NOCASE,
   created_on           text COLLATE NOCASE,
   created_by           text COLLATE NOCASE,
   download_time        text COLLATE NOCASE,
   update_timestamp     text COLLATE NOCASE
);

create table
IF NOT EXISTS material_task_detail
(
   id                   text PRIMARY KEY NOT NULL,
   task_id              text COLLATE NOCASE,
   material_id          text COLLATE NOCASE,
   material             text COLLATE NOCASE,
   brand_id             text COLLATE NOCASE,
   brand                text COLLATE NOCASE,
   material_type_id     text COLLATE NOCASE,
   material_type        text COLLATE NOCASE,
   specification_id     text COLLATE NOCASE,
   specification        text COLLATE NOCASE,
   quantity_unit        text COLLATE NOCASE,
   quantity             double,
   inspection_num       integer,
   retest_num           integer,
   created_on           text COLLATE NOCASE,
   created_by           text COLLATE NOCASE,
   download_time        text COLLATE NOCASE,
   update_timestamp     text
);

create table
IF NOT EXISTS material_task_user
(
   id                   text PRIMARY KEY NOT NULL,
   task_id              text COLLATE NOCASE,
   user_old             text COLLATE NOCASE,
   user_new             text COLLATE NOCASE,
   status               text COLLATE NOCASE,
   created_on           text COLLATE NOCASE,
   created_by           text COLLATE NOCASE,
   download_time        text COLLATE NOCASE,
   update_timestamp     text
);

-- 材料任务流程节点表
create table
IF NOT EXISTS material_task_process
(
   id                   text PRIMARY KEY NOT NULL,
   name                 text COLLATE NOCASE,
   task_id              text COLLATE NOCASE,
   node_id              text COLLATE NOCASE,
   next_id              text COLLATE NOCASE
);

-- 材料任务节点用户表
create table
IF NOT EXISTS material_task_process_user
(
   id                   text PRIMARY KEY NOT NULL,
   task_id              text COLLATE NOCASE,
   task_process_id      text COLLATE NOCASE,
   user_id              text COLLATE NOCASE
);

create table
IF NOT EXISTS template_manage
(
   id                     text PRIMARY KEY not null,
   name                   text COLLATE NOCASE,
   name_py                text COLLATE NOCASE,
   proj_id                text COLLATE NOCASE,
   type                   text COLLATE NOCASE,
   process_id             text COLLATE NOCASE,
   upload_time            text COLLATE NOCASE,
   url                    text COLLATE NOCASE,
   file_size              integer,
   template_manage_dir_id text COLLATE NOCASE default "",
   code                   text,
   process_check_id       text COLLATE NOCASE default "",
   material_id            text COLLATE NOCASE default "",
   pinyin                 text COLLATE NOCASE
);

create table
IF NOT EXISTS template_manage_local
(
   id                   text PRIMARY KEY not null,
   download_time        text COLLATE NOCASE,
   local_download_time  text COLLATE NOCASE,
   name                 text COLLATE NOCASE,
   url                  text COLLATE NOCASE
);

--公告
create table
IF NOT EXISTS notice
(
   id                   text PRIMARY KEY not null,
   proj_id              text COLLATE NOCASE,
   title                text COLLATE NOCASE,
   content              text COLLATE NOCASE,
   publish_time         text COLLATE NOCASE,
   publish_by         text COLLATE NOCASE,
   is_offline           integer
);

create table
IF NOT EXISTS gray_release
(
   id                   text PRIMARY KEY not null,
   key                  text COLLATE NOCASE,
   value                integer
);

create table
IF NOT EXISTS upload_queue
(
   id                   text PRIMARY KEY not null,
   relation_table_name  text,
   relation_id          text,
   relation_column          text,
   time                 text,
   group_id             text,
   retry                integer default 0,
   status               text COLLATE NOCASE
);

create table
IF NOT EXISTS upload_error
(
   id                   text PRIMARY KEY not null,
   relation_table_name  text,
   relation_id          text,
   relation_column          text,
   time                 text,
   group_id             text,
   ordinal              integer,
   upload_data          text,
   error                text,
   create_date          text,
   feedback_date        text
);

create table
IF NOT EXISTS download_proj_queue
(
   proj_id              text COLLATE NOCASE,
   start_download_time  text COLLATE NOCASE,
   end_download_time    text COLLATE NOCASE,
   type                 text COLLATE NOCASE,
   type_name            text COLLATE NOCASE,
   group_id            text COLLATE NOCASE,
   total                integer,
   page_size            integer,
   page_index           integer,
   is_new               integer
);

create table
IF NOT EXISTS temp_download_data
(
   id                   text PRIMARY KEY not null,
   data                 text COLLATE NOCASE,
   remark            text COLLATE NOCASE,
   file            text,
   ordinal               integer
);

create table
IF NOT EXISTS checkquality_reinspect_by
(
   id                   text PRIMARY KEY not null,
   checkquality_problem_id text COLLATE NOCASE,
   reinspect            text COLLATE NOCASE,
   reinspect_date       text COLLATE NOCASE,
   reinspect_remark     text COLLATE NOCASE,
   reinspect_image_file text COLLATE NOCASE,
   download_time        text,
   update_timestamp     text
);

create table
IF NOT EXISTS checkitem_relation
(
   id                   text PRIMARY KEY not null,
   group_id             text COLLATE NOCASE,
   item_id              text COLLATE NOCASE
);

create table
IF NOT EXISTS drawing_roomtype
(
   id                   text PRIMARY KEY not null,
   roomtype_id              text COLLATE NOCASE,
   item_id              text COLLATE NOCASE,
   drawing_file         text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS ix_drawing_roomtype ON drawing_roomtype
(roomtype_id, item_id);

-- 待上传问题队列
create table
IF NOT EXISTS data_increment_check_quality
(
   id                     text PRIMARY KEY not null,
   relation_table_name    text,
   relation_id            text,
   proj_id                text,
   bidsection_id          text,
   batch_id               text,
   operation              text,
   time                  text,
   priority               integer
);

-- 缩略图下载队列
create table
IF NOT EXISTS download_thumbnail_queue
(
   id                     text PRIMARY KEY not null,
   table_name    text,
   retry        integer,
   ordinal        integer DEFAULT 65535,
   time                 text
);

create table
IF NOT EXISTS material_task_cc
(
   id                     text PRIMARY KEY not null,
   task_id     text COLLATE NOCASE,
   reading_time         text COLLATE NOCASE,
   cc                   text COLLATE NOCASE,
   type                 text COLLATE NOCASE,
   download_time        text COLLATE NOCASE,
   update_timestamp     text
);
CREATE INDEX
IF NOT EXISTS ix_material_task_cc__task_id ON material_task_cc
(task_id);

create table
IF NOT EXISTS download_business_queue
(
   id                   text COLLATE NOCASE PRIMARY KEY NOT NULL,
   proj_id              text COLLATE NOCASE,
   building_id              text COLLATE NOCASE,
   start_download_time  text COLLATE NOCASE,
   start_todo_time      text COLLATE NOCASE,
   end_download_time    text COLLATE NOCASE,
   type                 text COLLATE NOCASE,
   type_name            text COLLATE NOCASE,
   group_id            text COLLATE NOCASE,
   total                integer,
   page_size            integer,
   page_index           integer,
   current_page_index   integer,
   module_code          text COLLATE NOCASE,
   is_new               integer
);

create table
IF NOT EXISTS process_check_cc
(
   id                   text PRIMARY KEY not null,
   process_check_id     text COLLATE NOCASE,
   cc                   text COLLATE NOCASE,
   download_time        text COLLATE NOCASE,
   update_timestamp     text
);
CREATE INDEX
IF NOT EXISTS ix_process_check_cc__process_check_id ON process_check_cc
(process_check_id);

create table
IF NOT EXISTS building_checkitem
(
   id                   text PRIMARY KEY not null,
   building_id          text COLLATE NOCASE,
   unit                 text COLLATE NOCASE,
   bidsection_id        text COLLATE NOCASE,
   contractor_id        text COLLATE NOCASE,
   item_id              text COLLATE NOCASE,
   item_type            text COLLATE NOCASE,
   repair               text COLLATE NOCASE,
   reinspect            text COLLATE NOCASE,
   cc                   text COLLATE NOCASE
);

CREATE INDEX
IF NOT EXISTS ix_building_checkitem__building_id ON building_checkitem
(building_id, unit, item_type, item_id);

create table
IF NOT EXISTS process_check_floor
(
   id                   text COLLATE NOCASE PRIMARY KEY NOT NULL,
   process_check_id     text COLLATE NOCASE,
   floor                text COLLATE NOCASE,
   unit                 text COLLATE NOCASE,
   room_id              text COLLATE NOCASE,
   download_time        text COLLATE NOCASE,
   update_timestamp     text
);
CREATE INDEX
IF NOT EXISTS idx_process_check_floor ON process_check_floor
(process_check_id);


create table
IF NOT EXISTS image_process
(
   id                   text COLLATE NOCASE PRIMARY KEY NOT NULL,
   proj_id              text COLLATE NOCASE,
   process_status       text COLLATE NOCASE,
   image_file           text COLLATE NOCASE,
   remark               text COLLATE NOCASE,
   created_on           text COLLATE NOCASE,
   modified_on          text COLLATE NOCASE,
   created_by           text COLLATE NOCASE,
   is_deleted           text COLLATE NOCASE,
   download_time        text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS idx_proj_id ON image_process
(proj_id);

create table
IF NOT EXISTS image_process_cc
(
   id                   text PRIMARY KEY not null,
   image_process_id     text COLLATE NOCASE,
   cc                   text COLLATE NOCASE,
   download_time        text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS ix_image_process_cc_image_process_id ON image_process_cc
(image_process_id);

create table
IF NOT EXISTS section_contractor
(
   id                   text PRIMARY KEY not null,
   bidsection_id        text COLLATE NOCASE,
   contractor_id        text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS ix_section_contractor ON section_contractor
(bidsection_id);

-- 专项巡检模板表
create table
IF NOT EXISTS special_inspect_template
(
   id                   text PRIMARY KEY not null,
   name                 text COLLATE NOCASE,
   mode                 integer,
   update_timestamp     text COLLATE NOCASE,
   template_extension   text COLLATE NOCASE,
   is_display           integer DEFAULT 1
);

create table
IF NOT EXISTS special_inspect_checkitem_desc
(
   id                   text PRIMARY KEY not null,
   checkitem_id         text COLLATE NOCASE,
   sort                 integer,
   name                 text COLLATE NOCASE
);

create index
IF NOT EXISTS ix_special_inspect_checkitem_desc on special_inspect_checkitem_desc
(
   checkitem_id
);

create table
IF NOT EXISTS special_inspect
(
   id                   text PRIMARY KEY not null,
   checkitem_id         text COLLATE NOCASE,
   checkitem_code       text COLLATE NOCASE,
   checkitem_name       text COLLATE NOCASE,
   checkitem_full_name  text COLLATE NOCASE,
   checkitem_parent_id  text COLLATE NOCASE,
   guideline            text COLLATE NOCASE,
   guideline_image      text COLLATE NOCASE,
   weight               integer,
   score                double,
   reward               double,  -- 得分
   level                text COLLATE NOCASE,  -- 已选选项
   deduction            double,
   proj_id              text COLLATE NOCASE,
   batch_id             text COLLATE NOCASE,
   remark               text COLLATE NOCASE,
   image_file           text COLLATE NOCASE,
   status               text COLLATE NOCASE,
   checker              text COLLATE NOCASE,
   check_time           text COLLATE NOCASE,
   download_time        text COLLATE NOCASE,
   update_timestamp     text COLLATE NOCASE,
   is_redline_deduction integer,
   checkitem_extension  text COLLATE NOCASE
);

create index
IF NOT EXISTS ix_special_inspect__proj_id on special_inspect
(
   proj_id
);

create index
IF NOT EXISTS ix_special_inspect__batch_id on special_inspect
(
   batch_id
);

create table
IF NOT EXISTS ad
(
   id                   text PRIMARY KEY not null,
   start_date           text,
   end_date             text,
   image_file           text,
   click_url            text,
   page_title           text,
   duration             integer,
   is_set               integer,
   priority             integer default 0,
   allow_skip           integer default 1
);

create table
IF NOT EXISTS batch_checkitem
(
   id                   text PRIMARY KEY not null,
   batch_id             text COLLATE NOCASE,
   item_id              text COLLATE NOCASE
);

create index
IF NOT EXISTS ix_batch_checkitem on batch_checkitem
(
   batch_id
);

create table
IF NOT EXISTS download_business_time
(
   id                   text PRIMARY KEY not null,
   proj_id              text COLLATE NOCASE,
   building_id              text COLLATE NOCASE,
   module_code          text COLLATE NOCASE,
   time                 text COLLATE NOCASE,
   is_data_changed       integer
);

create table
IF NOT EXISTS download_queue
(
   id                   text PRIMARY KEY not null,
   proj_id              text COLLATE NOCASE,
   building_id          text COLLATE NOCASE,
   module_code          text COLLATE NOCASE,
   type                 text COLLATE NOCASE,
   end_time             text COLLATE NOCASE,
   is_manual            integer,
   is_batch             integer
);

create table
IF NOT EXISTS building_pile
(
   id                   text PRIMARY KEY not null,
   building_id          text COLLATE NOCASE,
   pile_num             integer,
   roomtype_id          text COLLATE NOCASE
);

create table
IF NOT EXISTS checkpoint
(
   id                   text PRIMARY KEY not null,
   item_id              text COLLATE NOCASE,
   title                text COLLATE NOCASE,
   content              text COLLATE NOCASE,
   enter_type           text default "image",
   enter_type_option    text default "",
   is_fill              integer default 1,
   sort                 integer,
   module_code          text
);

create table
IF NOT EXISTS process_accept
(
   id                   text PRIMARY KEY not null,
   proj_id              text COLLATE NOCASE,
   bidsection_id        text COLLATE NOCASE,
   item_id              text COLLATE NOCASE,
   building_id          text COLLATE NOCASE,
   unit                 text COLLATE NOCASE,
   status               text COLLATE NOCASE,
   accept_by            text COLLATE NOCASE,
   accept_date          text COLLATE NOCASE,
   pile_data            text COLLATE NOCASE,
   process_mode         integer,
   created_by           text COLLATE NOCASE,
   created_on           text COLLATE NOCASE,
   download_time        text COLLATE NOCASE,
   pile_address         text COLLATE NOCASE,
   location_id          text COLLATE NOCASE,
   custom_location      text COLLATE NOCASE
);

create table
IF NOT EXISTS process_accept_floor
(
   id                   text PRIMARY KEY not null,
   process_accept_id    text COLLATE NOCASE,
   floor                text COLLATE NOCASE,
   room_id              text COLLATE NOCASE,
   problem_values       text COLLATE NOCASE,
   drawing_file         text COLLATE NOCASE,
   download_time        text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS idx_process_accept_floor_process_accept_id ON process_accept_floor
(process_accept_id);

create table
IF NOT EXISTS process_accept_detail
(
   id                   text PRIMARY KEY not null,
   process_accept_id    text COLLATE NOCASE,
   checkpoint_id        text COLLATE NOCASE,
   title                text COLLATE NOCASE,
   content              text COLLATE NOCASE,
   image_file           text COLLATE NOCASE,
   download_time        text COLLATE NOCASE,
   problem_values       text,
   sort                 integer,
   is_open              text default "",
   created_on           text,
   created_by           text,
   modified_by          text,
   modified_on          text
);
CREATE INDEX
IF NOT EXISTS idx_process_accept_detail_process_accept_id ON process_accept_detail
(process_accept_id);

create table
IF NOT EXISTS process_accept_user
(
   id                   text PRIMARY KEY not null,
   process_accept_id    text COLLATE NOCASE,
   type                 text COLLATE NOCASE,
   user_id              text COLLATE NOCASE,
   download_time        text COLLATE NOCASE,
   created_on           text
);
CREATE INDEX
IF NOT EXISTS idx_process_accept_user_process_accept_id ON process_accept_user
(process_accept_id);

create table
IF NOT EXISTS process_check_send_back
(
   id                   text PRIMARY KEY not null,
   process_check_id     text COLLATE NOCASE,
   type                 text COLLATE NOCASE,
   image_file           text COLLATE NOCASE,
   status               text COLLATE NOCASE,
   remark               text COLLATE NOCASE,
   person_in_charge     text COLLATE NOCASE,
   complete_date        text COLLATE NOCASE,
   contractor           text COLLATE NOCASE,
   group_id             text COLLATE NOCASE,
   update_timestamp     text COLLATE NOCASE,
   download_time        text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS idx_process_check_send_back_process_check_id ON process_check_send_back
(process_check_id);

create table
IF NOT EXISTS user_statistics
(
   id                   text PRIMARY KEY not null,
   user_id              text,
   operation            text,
   count                integer,
   source               text,
   operate_time         text,
   module_code          text,
   params               text
);


CREATE TABLE
IF NOT EXISTS special_inspect_bidsection_checkitem
(
  id                    text PRIMARY KEY not null,
  template_id           text,
  proj_id               text COLLATE NOCASE,
  bidsection_id         text,
  item_id               text,
  root_id               text,
  parent_id             text,
  contractor_id         text,
  repair                text,
  reinspect             text,
  cc                    text
);
CREATE INDEX
IF NOT EXISTS idx_special_inspect_bidsection_checkitem_bidsection_id ON special_inspect_bidsection_checkitem
(bidsection_id);
CREATE INDEX
IF NOT EXISTS idx_special_inspect_bidsection_checkitem_item_id ON special_inspect_bidsection_checkitem
(item_id);

CREATE TABLE
IF NOT EXISTS special_inspect_building_checkitem
(
  id                    text PRIMARY KEY not null,
  template_id           text ,
  building_id           text COLLATE NOCASE,
  unit                  text,
  item_id               text,
  parent_id             text,
  bidsection_id         text,
  contractor_id         text,
  repair                text,
  reinspect             text,
  cc                    text
);
CREATE INDEX
IF NOT EXISTS idx_special_inspect_building_checkitem_building_id ON special_inspect_building_checkitem
(building_id);
CREATE INDEX
IF NOT EXISTS idx_special_inspect_building_checkitem_item_id ON special_inspect_building_checkitem
(item_id);
create table
IF NOT EXISTS checkquality_comment
(
   id                   text PRIMARY KEY not null,
   checkquality_problem_id text COLLATE NOCASE,
   content              text COLLATE NOCASE,
   image_file           text COLLATE NOCASE,
   user_id              text COLLATE NOCASE,
   comment_on           text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS ix__checkquality_comment ON checkquality_comment
(checkquality_problem_id);

create table
IF NOT EXISTS templet_plan
(
   id                   text PRIMARY KEY not null,
   name                 text COLLATE NOCASE,
   proj_id              text COLLATE NOCASE,
   created_on           text
);
CREATE INDEX
IF NOT EXISTS ix_templet_plan ON templet_plan
(proj_id);

create table
IF NOT EXISTS templet_plan_detail
(
   id                   text PRIMARY KEY not null,
   templet_plan_id      text COLLATE NOCASE,
   name                 text COLLATE NOCASE,
   type                 text COLLATE NOCASE,
   proj_id              text COLLATE NOCASE,
   contractor           text COLLATE NOCASE,
   deadline             text COLLATE NOCASE,
   in_charge_by         text COLLATE NOCASE,
   status               text COLLATE NOCASE,
   new_status           text,
   pictures             text COLLATE NOCASE,
   remark               text COLLATE NOCASE,
   content              text COLLATE NOCASE,
   sort                 integer,
   complete_time        text,
   update_timestamp        text,
   modified_by        text COLLATE NOCASE,
   download_time        text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS ix_templet_plan_detail ON templet_plan_detail
(templet_plan_id);

create table
IF NOT EXISTS templet_plan_checkpoint
(
  id                      text PRIMARY KEY not null,
  proj_id                 text,
  templet_plan_id         text,
  templet_plan_detail_id  text,
  title                   text,
  content                 text,
  images                  text,
  sort                    integer,
  download_time           text
);
CREATE INDEX IF NOT EXISTS ix_templet_plan_checkpoint_templet_plan_id ON templet_plan_checkpoint (templet_plan_id);
CREATE INDEX IF NOT EXISTS ix_templet_plan_checkpoint_templet_plan_detail_id ON templet_plan_checkpoint (templet_plan_detail_id);

create table
IF NOT EXISTS templet_plan_detail_reviewer
(
   id                   text PRIMARY KEY not null,
   templet_plan_detail_id text COLLATE NOCASE,
   user_id              text COLLATE NOCASE,
   pictures             text COLLATE NOCASE,
   remark               text COLLATE NOCASE,
   review_at            text COLLATE NOCASE,
   download_time        text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS ix_templet_plan_detail_reviewer ON templet_plan_detail_reviewer
(templet_plan_detail_id);

create table
IF NOT EXISTS schedule_plan
(
   id                   text PRIMARY KEY not null,
   name                 text COLLATE NOCASE,
   name_py              text COLLATE NOCASE,
   proj_id              text COLLATE NOCASE,
   created_on           text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS ix_proj_id ON schedule_plan
(proj_id);

create table
IF NOT EXISTS schedule_plan_detail
(
   id                   text PRIMARY KEY not null,
   schedule_plan_id     text COLLATE NOCASE,
   name                 text COLLATE NOCASE,
   level                text COLLATE NOCASE,
   deadline             text COLLATE NOCASE,
   in_charge_by         text COLLATE NOCASE,
   status               text COLLATE NOCASE,
   complete_time        text COLLATE NOCASE,
   sort                 integer COLLATE NOCASE,
   complete_by          text COLLATE NOCASE,
   is_system            integer DEFAULT 0,
   download_time        text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS ix_proj_id ON schedule_plan_detail
(proj_id);
CREATE INDEX
IF NOT EXISTS ix_schedule_plan_id ON schedule_plan_detail
(schedule_plan_id);

create table
IF NOT EXISTS schedule_plan_detail_report
(
   id                   text PRIMARY KEY not null,
   schedule_plan_detail_id text COLLATE NOCASE,
   user_id              text COLLATE NOCASE,
   pictures             text COLLATE NOCASE,
   remark               text COLLATE NOCASE,
   report_on            text COLLATE NOCASE,
   download_time        text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS ix_schedule_plan_detail_id ON schedule_plan_detail_report
(schedule_plan_detail_id);

create table
IF NOT EXISTS schedule_plan_detail_cc
(
   id                   text PRIMARY KEY not null,
   schedule_plan_detail_id text COLLATE NOCASE,
   cc                   text COLLATE NOCASE,
   download_time        text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS ix_schedule_plan_detail_id ON schedule_plan_detail_cc
(schedule_plan_detail_id);

create table
IF NOT EXISTS closed_water_test
(

   id                   text PRIMARY KEY not null,
   proj_id              text,
   bidsection_id        text,
   building_id          text,
   unit                 text,
   room_id              text,
   status               text,
   created_on           text,
   created_by           text,
   modified_on          text,
   modified_by          text,
   update_timestamp     text,
   download_time        text
);
create table
IF NOT EXISTS closed_water_test_cc
(
   id                   text PRIMARY KEY not null,
   test_id              text,
   cc                   text,
   type                 text,
   update_timestamp     text,
   download_time        text
);

create table
IF NOT EXISTS closed_water_test_detail
(
   id                       text PRIMARY KEY not null,
   test_id                  text,
   image_file               text,
   regist_by                text,
   regist_date              text,
   status                   text,
   remark                   text,
   acceptor                 text,
   accept_date              text,
   accept_image_file        text,
   accept_remark            text,
   contractor               text,
   created_on               text,
   created_by               text,
   download_time            text,
   point_values             text,
   accept_point_values      text,
   roomtype_diagram_url     text
);
CREATE INDEX
IF NOT EXISTS idx_closed_water_test_detail ON closed_water_test_detail
(test_id);

create table
IF NOT EXISTS contractor_user
(
   id                   text PRIMARY KEY not null,
   contractor_id        text COLLATE NOCASE,
   user_id              text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS ix_contractor_user_user_id ON contractor_user
(user_id);

create table
IF NOT EXISTS template_manage_projs
(
   id                   text PRIMARY KEY not null,
   template_manage_id   text COLLATE NOCASE,
   proj_id              text COLLATE NOCASE
);

create table
IF NOT EXISTS user_role
(
   user_id              text,
   role_type            integer
);
CREATE INDEX
IF NOT EXISTS ix_user_role__user_id ON user_role
(user_id);

create table
IF NOT EXISTS project_permission
(
   proj_id              text,
   user_id              text
);
CREATE INDEX
IF NOT EXISTS ix_project_permission ON project_permission
(proj_id, user_id);

-- 图片下载队列
create table
IF NOT EXISTS download_house_image_queue
(
   id                     text not null,
   table_name    text,
   retry        integer,
   ordinal        integer DEFAULT 65535,
   time                 text,
   image_size                 text,
   image_folder                 text
);

-- 图片下载队列
create table
IF NOT EXISTS download_measure_drawing_queue
(
   id                     text not null,
   table_name    text,
   retry        integer,
   ordinal        integer DEFAULT 65535,
   time                 text,
   image_size                 text,
   image_folder                 text
);

-- 图片下载队列
create table
IF NOT EXISTS download_process_drawing_queue
(
   id                     text not null,
   table_name    text,
   retry        integer,
   ordinal        integer DEFAULT 65535,
   time                 text,
   image_size                 text,
   image_folder                 text
);

create table
IF NOT EXISTS project_statistics
(
   user_id              text,
   proj_id              text,
   count                integer,
   occur_date           text,
   is_upload           integer
);

create table
IF NOT EXISTS decoration
(
   id text PRIMARY KEY not null,
   item_id text,
   proj_id  text,
   building_id text,
   unit text,
   bidsection_id  text,
   status  text,
   workload interger,
   workload_unit  text,
   worker_number interger,
   remark  text,
   contractor  text,
   picture  text,
   created_on  text,
   created_by  text,
   modified_on  text,
   modified_by  text,
   download_time text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS idx_decoration__proj_id ON decoration
(proj_id);

create table
IF NOT EXISTS decoration_room
(
   id text PRIMARY KEY not null,
   decoration_id text,
   room_id text,
   floor text,
   proj_id text,
   created_on text,
   created_by text,
   download_time text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS idx_decoration_room__decoration_id ON decoration_room
(decoration_id);

create table
IF NOT EXISTS decoration_acceptor
(
   id text PRIMARY KEY not null,
   decoration_id text,
   user_id text,
   remark text,
   picture text,
   created_on text,
   created_by text,
   modified_on text,
   modified_by text,
   download_time text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS idx_decoration_acceptor__decoration_id ON decoration_acceptor
(decoration_id);

create table
IF NOT EXISTS section_material
(
   id                   text PRIMARY KEY not null,
   proj_id              text COLLATE NOCASE,
   bidsection_id        text COLLATE NOCASE,
   material_id          text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS idx_section_material__proj_id ON section_material
(proj_id);
CREATE INDEX
IF NOT EXISTS idx_section_material__bidsection_id ON section_material
(bidsection_id);

create table
IF NOT EXISTS section_material_type
(
   id                   text PRIMARY KEY not null,
   proj_id              text COLLATE NOCASE,
   bidsection_id        text COLLATE NOCASE,
   material_type_id     text COLLATE NOCASE,
   need_area_acceptor   integer,
   area_acceptor         text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS idx_section_material_type__proj_id ON section_material_type
(proj_id);
CREATE INDEX
IF NOT EXISTS idx_section_material_type__bidsection_id ON section_material_type
(bidsection_id);
CREATE INDEX
IF NOT EXISTS idx_section_material_type__material_type_id ON section_material_type
(material_type_id);

create table
IF NOT EXISTS photo_requirement
(
   id                   text PRIMARY KEY not null,
   title                text,
   minimum              text,
   sort                 integer,
   user_type            integer
);

create table
IF NOT EXISTS material_task_photo_requirement
(
   id                   text PRIMARY KEY not null,
   task_id              text,
   task_process_id      text COLLATE NOCASE,
   desc                 text,
   photo_requirement_id text COLLATE NOCASE,
   title                text,
   image_file           text,
   sort                 integer,
   user_type            integer,
   regist_by            text,
   regist_date          text,
   created_on           text,
   created_by           text,
   download_time        text COLLATE NOCASE,
   update_timestamp     text
);
CREATE INDEX
IF NOT EXISTS idx_material_task_photo_requirement__task_id ON material_task_photo_requirement
(task_id);

create table
IF NOT EXISTS building_floor_roomtype
(
   id                   text PRIMARY KEY not null,
   building_id          text COLLATE NOCASE,
   unit                 text,
   floor                text,
   roomtype_id          text COLLATE NOCASE,
   type                 integer
);
CREATE INDEX
IF NOT EXISTS idx_building_floor_roomtype__building_id ON building_floor_roomtype
(building_id);


create table
IF NOT EXISTS templet_problem
(
   id                   text PRIMARY KEY not null,
   proj_id              text COLLATE NOCASE,
   templet_plan_id      text COLLATE NOCASE,
   templet_plan_detail_id text COLLATE NOCASE,
   contractor_id        text COLLATE NOCASE,
   remark               text,
   image_file           text,
   status               text,
   deadline             integer,
   regist_by            text,
   regist_date          text,
   repair_by            text,
   repair_deadline      text,
   repair_date          text,
   repair_remark        text,
   repair_image_file    text,
   sent_back_by         text,
   sent_back_date       text,
   sent_back_times      integer,
   sent_back_remark     text,
   sent_back_image_file text,
   reinspect_by         text,
   reinspect_completed_date text,
   close_date           text,
   close_reason         text,
   created_on           text,
   created_by           text,
   modified_by          text,
   update_timestamp     text,
   download_time        text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS idx_templet_problem__proj_id ON templet_problem
(proj_id);
CREATE INDEX
IF NOT EXISTS idx_templet_problem__templet_plan_id ON templet_problem
(templet_plan_id);
CREATE INDEX
IF NOT EXISTS idx_templet_problem__templet_plan_detail_id ON templet_problem
(templet_plan_detail_id);


create table
IF NOT EXISTS templet_problem_repair
(
   id                   text PRIMARY KEY not null,
   templet_problem_id   text COLLATE NOCASE,
   repair               text,
   reading_time         text,
   has_read             integer,
   created_on           text,
   created_by           text,
   update_timestamp     text,
   download_time        text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS idx_templet_problem_repair__templet_problem_id ON templet_problem_repair
(templet_problem_id);

create table
IF NOT EXISTS templet_problem_reinspect_by
(
   id                   text PRIMARY KEY not null,
   templet_problem_id   text COLLATE NOCASE,
   reinspect            text,
   reinspect_date       text,
   reinspect_image_file text,
   reinspect_remark     text,
   created_on           text,
   created_by           text,
   update_timestamp     text,
   download_time        text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS idx_templet_problem_reinspect_by__templet_problem_id ON templet_problem_reinspect_by
(templet_problem_id);

create table
IF NOT EXISTS templet_problem_cc
(
   id                   text PRIMARY KEY not null,
   templet_problem_id   text COLLATE NOCASE,
   reading_time         text,
   cc                   text,
   type                 text,
   created_on           text,
   created_by           text,
   update_timestamp     text,
   download_time        text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS idx_templet_problem_cc__templet_problem_id ON templet_problem_cc
(templet_problem_id);

-- 摄像头图片缓存表
create table
IF NOT EXISTS monitor_cover_url
(
   id                   text PRIMARY KEY not null,
   deviceSerial         text,
   cameraNo             text,
   coverUrl             text
);

create table
IF NOT EXISTS upload_image
(
   path                   text PRIMARY KEY not null,
   url           text,
   created_on         text
);
CREATE INDEX
IF NOT EXISTS idx_upload_image__created_on ON upload_image
(created_on);

create table
IF NOT EXISTS schedule_plan_detail_place
(
   id                          text PRIMARY KEY not null,
   schedule_plan_detail_id     text COLLATE NOCASE,
   proj_id                     text COLLATE NOCASE,
   building_id                 text COLLATE NOCASE,
   unit                        text COLLATE NOCASE,
   floor                       text COLLATE NOCASE,
   room_id                     text COLLATE NOCASE,
   item_id                     text COLLATE NOCASE,
   download_time               text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS idx_schedule_plan_detail_place__schedule_plan_detail_id ON schedule_plan_detail_place
(schedule_plan_detail_id);

-- 工序验收v2
create table
IF NOT EXISTS process_acceptv2
(
   id                   text PRIMARY KEY not null,
   proj_id              text COLLATE NOCASE,
   bidsection_id        text COLLATE NOCASE,
   item_id              text COLLATE NOCASE,
   building_id          text COLLATE NOCASE,
   unit                 text,
   status               text,
   contractor_id        text COLLATE NOCASE,
   process_mode         integer,
   regist_date          text,
   download_time        text,
   update_timestamp     text,
   custom_location     text
);
CREATE INDEX
IF NOT EXISTS idx_process_acceptv2__proj_id ON process_acceptv2
(proj_id);
CREATE INDEX
IF NOT EXISTS idx_process_acceptv2__building_id ON process_acceptv2
(building_id);

create table
IF NOT EXISTS process_acceptv2_item
(
   id                   text PRIMARY KEY not null,
   item_id              text COLLATE NOCASE,
   proj_type            integer,
   accept_type          integer,
   name                 text,
   content              text,
   standard_symbol      text,
   standard             text,
   sort                 integer
);

create table
IF NOT EXISTS process_acceptv2_floor
(
   id                   text PRIMARY KEY not null,
   accept_id            text COLLATE NOCASE,
   floor                text,
   room_id              text COLLATE NOCASE,
   download_time        text,
   update_timestamp     text
);
CREATE INDEX
IF NOT EXISTS idx_process_acceptv2_floor__accept_id ON process_acceptv2_floor
(accept_id);

create table
IF NOT EXISTS process_acceptv2_status
(
   id                   text PRIMARY KEY not null,
   accept_id            text COLLATE NOCASE,
   type                 text,
   status               text,
   master_status        text,
   common_status        text,
   measure_lowest_rate  text,
   person_in_charge     text COLLATE NOCASE,
   image_file           text,
   remark               text,
   complete_date        text,
   download_time        text,
   update_timestamp     text
);
CREATE INDEX
IF NOT EXISTS idx_process_acceptv2_status__accept_id ON process_acceptv2_status
(accept_id);

create table
IF NOT EXISTS process_acceptv2_detail
(
   id                   text PRIMARY KEY not null,
   accept_id            text COLLATE NOCASE,
   accept_status_id     text COLLATE NOCASE,
   accept_item_id       text COLLATE NOCASE,
   proj_type            integer,
   accept_type          integer,
   name                 text,
   content              text,
   standard_symbol      text,
   standard             text,
   sort                 integer,
   status               text,
   rate                 float,
   problem_values       text,
   problem_points       integer,
   measurement_points   integer,
   download_time        text,
   update_timestamp     text
);
CREATE INDEX
IF NOT EXISTS idx_process_acceptv2_detail__accept_id ON process_acceptv2_detail
(accept_id);

create table
IF NOT EXISTS process_acceptv2_send_back
(
   id                   text PRIMARY KEY not null,
   accept_id            text COLLATE NOCASE,
   type                 text,
   status               text,
   master_status        text,
   common_status        text,
   measure_lowest_rate  float,
   person_in_charge     text COLLATE NOCASE,
   image_file           text,
   remark               text,
   complete_date        text,
   group_id             text,
   download_time        text,
   update_timestamp     text
);
CREATE INDEX
IF NOT EXISTS idx_process_acceptv2_send_back__accept_id ON process_acceptv2_send_back
(accept_id);

create table
IF NOT EXISTS process_acceptv2_send_back_detail
(
   id                   text PRIMARY KEY not null,
   accept_id            text COLLATE NOCASE,
   accept_send_back_id  text COLLATE NOCASE,
   accept_item_id       text COLLATE NOCASE,
   proj_type            integer,
   accept_type          integer,
   name                 text,
   content              text,
   standard_symbol      text,
   standard             text,
   sort                 integer,
   status               text,
   rate                 text,
   problem_values       text,
   problem_points       integer,
   measurement_points   integer,
   download_time        text,
   update_timestamp     text
);
CREATE INDEX
IF NOT EXISTS idx_process_acceptv2_send_back_detail__accept_id ON process_acceptv2_send_back_detail
(accept_id);

create table
if not exists process_acceptv2_cc
(
   id                   text PRIMARY KEY not null,
   accept_id            text COLLATE NOCASE,
   cc                   text,
   type                 text,
   download_time        text,
   update_timestamp     text
);
CREATE INDEX
IF NOT EXISTS process_acceptv2_cc__accept_id ON process_acceptv2_cc
(accept_id);

create table
IF NOT EXISTS process_acceptv2_user
(
   id                   text PRIMARY KEY not null,
   accept_id            text COLLATE NOCASE default "",
   accept_status_id     text COLLATE NOCASE,
   type                 text COLLATE NOCASE,
   user_id              text COLLATE NOCASE,
   download_time        text COLLATE NOCASE,
   update_timestamp     text default "",
   created_on           text
);

create table
IF NOT EXISTS process_acceptv2_send_back_user
(
   id                      text PRIMARY KEY not null,
   accept_id               text COLLATE NOCASE default "",
   accept_send_back_id     text COLLATE NOCASE,
   type                    text COLLATE NOCASE,
   user_id                 text COLLATE NOCASE,
   download_time           text COLLATE NOCASE,
   update_timestamp        text default "",
   created_on              text
);


create table
IF NOT EXISTS process_acceptv2_checkpoint
(
   id                   text PRIMARY KEY not null,
   accept_id            text COLLATE NOCASE default "",
   accept_status_id     text COLLATE NOCASE default "",
   checkpoint_id        text COLLATE NOCASE default "",
   title                text default "",
   content              text default "",
   sort                 integer default "",
   image_file           text default "",
   download_time        text default "",
   update_timestamp     text default "",
   is_open              integer
);

create table
IF NOT EXISTS process_acceptv2_send_back_checkpoint
(
   id                   text PRIMARY KEY not null,
   accept_id            text COLLATE NOCASE default "",
   accept_send_back_id  text COLLATE NOCASE default "",
   checkpoint_id        text COLLATE NOCASE default "",
   title                text default "",
   content              text default "",
   sort                 integer default "",
   image_file           text default "",
   download_time        text default "",
   update_timestamp     text default ""
);

-- 实测实量问题表
create table
if not exists measure_problem
(
   id                   text PRIMARY KEY not null,
   proj_id              text COLLATE NOCASE,
   bidsection_id        text COLLATE NOCASE,
   batch_id             text COLLATE NOCASE,
   remark               text,
   image_file           text,
   building_id          text COLLATE NOCASE,
   unit                 text,
   room_id              text COLLATE NOCASE,
   floor                text,
   place                text,
   status               text,
   regist_by            text,
   regist_date          text,
   repair_by            text,
   repair_date          text,
   repair_remark        text,
   repair_image_file    text,
   entry_requirements   integer,
   drawing_file         text,
   process_mode         integer,
   download_time        text,
   update_timestamp     text
);
CREATE INDEX
IF NOT EXISTS idx_measure_problem__proj_id ON measure_problem
(proj_id);
CREATE INDEX
IF NOT EXISTS idx_measure_problem__batch_id_room_id ON measure_problem
(batch_id, room_id);
CREATE INDEX
IF NOT EXISTS idx_measure_problem__building_id ON measure_problem
(building_id);

create table
if not exists measure_problem_repair
(
   id                   text PRIMARY KEY not null,
   measure_problem_id   text COLLATE NOCASE,
   repair               text,
   reading_time         text,
   has_read             integer,
   download_time        text,
   update_timestamp     text
);
CREATE INDEX
IF NOT EXISTS idx_measure_problem_repair__measure_problem_id ON measure_problem_repair
(measure_problem_id);


create table
IF NOT EXISTS measure_problem_cc
(
   id                   text PRIMARY KEY not null,
   measure_problem_id   text COLLATE NOCASE,
   reading_time         text,
   cc                   text,
   type                 text,
   download_time        text,
   update_timestamp     text
);
CREATE INDEX
IF NOT EXISTS idx_measure_problem_cc__measure_problem_id ON measure_problem_cc
(measure_problem_id);

create table
IF NOT EXISTS measure_problem_item
(
   id                           text PRIMARY KEY not null,
   measure_problem_id           text COLLATE NOCASE,
   item_id                      text COLLATE NOCASE,
   measurement_points           integer,
   problem_points               integer,
   standard_min                 integer,
   standard_max                 integer,
   passrate_mode                integer,
   problem_values               text,
   problem_values_zip           text,
   download_time                text,
   update_timestamp             text,
   standard_intensity_value     text,
   intensity_value              text,
   construction_unit_id         text,
   extension                    text
);
CREATE INDEX
IF NOT EXISTS idx_measure_problem_item__measure_problem_id ON measure_problem_item
(measure_problem_id);
CREATE INDEX
IF NOT EXISTS idx_measure_problem_item__construction_unit_id ON measure_problem_item
(construction_unit_id);

create table
if not exists inspect_template
(
   id                   text PRIMARY KEY not null,
   name                 text,
   type                 text,
   code                 text
);
CREATE INDEX
IF NOT EXISTS idx_inspect_template__type ON inspect_template
(type);

create table
if not exists inspect_template_checkitem
(
   id                   text PRIMARY KEY not null,
   template_id          text COLLATE NOCASE,
   code                 text,
   name                 text,
   full_name            text,
   parent_id            text COLLATE NOCASE,
   guideline            text
);
CREATE INDEX
IF NOT EXISTS idx_inspect_template_checkitem__template_id ON inspect_template_checkitem
(template_id);

create table
if not exists inspect_template_checkitem_desc
(
   id                   text PRIMARY KEY not null,
   item_id              text COLLATE NOCASE,
   sort                 integer,
   name                 text
);
CREATE INDEX
IF NOT EXISTS idx_inspect_template_checkitem_desc__item_id ON inspect_template_checkitem_desc
(item_id);

create table
if not exists building_item_process_mode
(
   id                   text PRIMARY KEY not null,
   building_id          text,
   type                 text,
   item_id              text,
   process_mode         integer
);
CREATE INDEX
IF NOT EXISTS idx_building_item_process_mode__building_id_item_id ON building_item_process_mode
(building_id, item_id);

create table
if not exists special_inspect_batch_contracts
(
   id                   text PRIMARY KEY not null,
   batch_id             text COLLATE NOCASE,
   contract_id          text COLLATE NOCASE,
   remark               text COLLATE NOCASE,
   sort                 integer
);
CREATE INDEX
IF NOT EXISTS idx_special_inspect_batch_contracts__batch_id_contract_id ON special_inspect_batch_contracts
(batch_id, contract_id);

create table
if not exists contractor_contracts
(
   id                   text PRIMARY KEY not null,
   name                 text COLLATE NOCASE,
   code                 text COLLATE NOCASE,
   contractor_id        text COLLATE NOCASE,
   sort                 integer
);
CREATE INDEX
IF NOT EXISTS idx_contractor_contracts__contract_id ON contractor_contracts
(contractor_id);

create table
if not exists download_todo_time
(
   id                   text PRIMARY KEY not null,
   proj_id              text COLLATE NOCASE,
   module_code          text,
   time                 text
);

create table
if not exists todo
(
   id                   text PRIMARY KEY not null,
   biz_id               text COLLATE NOCASE,
   module_code          text,
   proj_id              text,
   type                 integer,
   sort                 text,
   complete_date        text
);
CREATE INDEX
IF NOT EXISTS idx_todo__module_code__type ON todo
(module_code, type);

create table
if not exists todo_draft
(
   tb_name              text,
   json_data            text
);

create table
if not exists bussiness_draft
(
   id                   text PRIMARY KEY not null,
   proj_id              text COLLATE NOCASE,
   building_id          text COLLATE NOCASE,
   problem_values       text COLLATE NOCASE,
   tb_name              text,
   json_data            text
);

CREATE TABLE
IF NOT EXISTS special_inspect_measure_item
(
   id                       text PRIMARY KEY not null,
   special_inspect_id       text COLLATE NOCASE,
   group_id                 text COLLATE NOCASE,
   measurement_area_name    text COLLATE NOCASE,
   measurement_area_num     integer DEFAULT 3,
   per_area_points          integer DEFAULT 5,
   measurement_points       integer,
   problem_points           integer,
   standard_min             text COLLATE NOCASE,
   standard_max             text COLLATE NOCASE,
   extension                text COLLATE NOCASE default "",
   passrate_mode            text COLLATE NOCASE,
   problem_values           text COLLATE NOCASE,
   problem_values_zip       text COLLATE NOCASE,
   download_time            text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS special_inspect_measure_item__special_inspect_id ON special_inspect_measure_item
(special_inspect_id);
CREATE INDEX
IF NOT EXISTS special_inspect_measure_item__group_id ON special_inspect_measure_item
(group_id);

create table
if not exists special_inspect_template_batch_combo
(
   id                   text PRIMARY KEY not null,
   batch_id             text COLLATE NOCASE,
   parent_template_id   text COLLATE NOCASE,
   template_id          text COLLATE NOCASE,
   weight               text,
   sort                 integer
);
CREATE INDEX
IF NOT EXISTS special_inspect_template_batch_combo__batch_id ON special_inspect_template_batch_combo
(batch_id);
CREATE INDEX
IF NOT EXISTS special_inspect_template_batch_combo__parent_template_id ON special_inspect_template_batch_combo
(parent_template_id);
CREATE INDEX
IF NOT EXISTS special_inspect_template_batch_combo__template_id ON special_inspect_template_batch_combo
(template_id);

create table
if not exists location
(
   id                   text PRIMARY KEY not null,
   proj_id              text COLLATE NOCASE,
   name                 text,
   parent_id            text COLLATE NOCASE,
   sort                 integer,
   drawing_file         text
);
CREATE INDEX
IF NOT EXISTS location__proj_id ON location
(proj_id);
CREATE INDEX
IF NOT EXISTS location__parent_id ON location
(parent_id);

create table
if not exists bidsection_location
(
   id                   text PRIMARY KEY not null,
   location_id          text COLLATE NOCASE,
   bidsection_id        text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS bidsection_location__bidsection_id ON bidsection_location
(bidsection_id);

create table
if not exists measure_problem_point
(
   id                   text PRIMARY KEY not null,
   measure_problem_id   text COLLATE NOCASE,
   status               text,
   repair_by            text COLLATE NOCASE,
   repair_picture       text,
   repair_remark        text,
   repair_date          text,
   reinspect_by         text COLLATE NOCASE,
   reinspect_picture    text,
   reinspect_remark     text,
   reinspect_date       text,
   closed_reason        text,
   closed_remark        text,
   closed_picture       text,
   closed_by            text COLLATE NOCASE,
   closed_date          text,
   sendback_num         integer,
   download_time        text,
   update_timestamp     text
);
CREATE INDEX
IF NOT EXISTS measure_problem_point__measure_problem ON measure_problem_point
(measure_problem_id);


create table
if not exists measure_problem_point_item
(
   id                   text PRIMARY KEY not null,
   problem_item_id      text COLLATE NOCASE,
   point_id             text COLLATE NOCASE,
   original_value       text,
   repair_value         text,
   reinspect_value      text,
   download_time        text,
   update_timestamp     text
);
CREATE INDEX
IF NOT EXISTS measure_problem_point_item__problem_item_id ON measure_problem_point_item
(problem_item_id);
CREATE INDEX
IF NOT EXISTS measure_problem_point_item__point_id ON measure_problem_point_item
(point_id);


create table
if not exists measure_problem_point_send_back
(
   id                   text PRIMARY KEY not null,
   point_id             text COLLATE NOCASE,
   repair_by            text COLLATE NOCASE,
   repair_picture       text,
   repair_remark        text,
   repair_date          text,
   sendback_reason      text,
   sendback_remark      text,
   sendback_picture     text,
   reinspect_by         text COLLATE NOCASE,
   reinspect_date       text,
   download_time        text,
   update_timestamp     text
);
CREATE INDEX
IF NOT EXISTS measure_problem_point_send_back__point_id ON measure_problem_point_send_back
(point_id);


create table
if not exists measure_problem_point_item_send_back
(
   id                   text PRIMARY KEY not null,
   sendback_id          text COLLATE NOCASE,
   point_id             text COLLATE NOCASE,
   problem_item_id      text COLLATE NOCASE,
   original_value       text,
   repair_value         text,
   download_time        text,
   update_timestamp     text
);
CREATE INDEX
IF NOT EXISTS measure_problem_point_item_send_back__sendback_id ON measure_problem_point_item_send_back
(sendback_id);
CREATE INDEX
IF NOT EXISTS measure_problem_point_item_send_back__point_id ON measure_problem_point_item_send_back
(point_id);


create table
if not exists measure_problem_reinspect
(
   id                   text PRIMARY KEY not null,
   measure_problem_id   text COLLATE NOCASE,
   reinspect            text COLLATE NOCASE,
   reading_time         text,
   has_read             integer,
   download_time        text,
   update_timestamp     text
);
CREATE INDEX
IF NOT EXISTS measure_problem_reinspect__measure_problem_id ON measure_problem_reinspect
(measure_problem_id);

create table
if not exists template_manage_dirs
(
    id          text PRIMARY KEY not null,
    parent_id   text COLLATE NOCASE default "",
    code        text,
    name        text,
    pinyin      text COLLATE NOCASE
);
CREATE INDEX
IF NOT EXISTS template_manage_dirs__parent_id ON template_manage_dirs
(parent_id);

create table
IF NOT EXISTS download_batch_build
(
   building_id    text COLLATE NOCASE,
   module_code    text COLLATE NOCASE,
   proj_id        text COLLATE NOCASE,
   parent_proj_id text COLLATE NOCASE
);

create table
IF NOT EXISTS user_interactive
(
    id          text PRIMARY KEY not null,
    device_id   text COLLATE NOCASE default "",
    input   text COLLATE NOCASE default "",
    type   text COLLATE NOCASE default "",
    update_timestamp     text
);

create table
IF NOT EXISTS water_pouring_test_room_status
(
   id                text PRIMARY KEY not null,
   proj_id           text COLLATE NOCASE,
   bidsection_id     text COLLATE NOCASE,
   building_id       text COLLATE NOCASE,
   unit              text,
   floor             text,
   room_id           text COLLATE NOCASE,
   status            text,
   update_timestamp  text
);

CREATE INDEX
IF NOT EXISTS water_pouring_test_room_status__proj_id ON water_pouring_test_room_status
(proj_id);
CREATE INDEX
IF NOT EXISTS water_pouring_test_room_status__bidsection_id ON water_pouring_test_room_status
(bidsection_id);
CREATE INDEX
IF NOT EXISTS water_pouring_test_room_status__building_id ON water_pouring_test_room_status
(building_id);
CREATE INDEX
IF NOT EXISTS water_pouring_test_room_status__room_id ON water_pouring_test_room_status
(room_id);

create table
IF NOT EXISTS water_pouring_test
(
   id                text PRIMARY KEY not null,
   name              text,
   proj_id           text COLLATE NOCASE,
   bidsection_id     text COLLATE NOCASE,
   building_id       text COLLATE NOCASE,
   regist_by         text,
   regist_date       text,
   image_file         text,
   start_date        text,
   remark            text,
   update_timestamp  text,
   download_time     text
);

CREATE INDEX
IF NOT EXISTS water_pouring_test__proj_id ON water_pouring_test
(proj_id);
CREATE INDEX
IF NOT EXISTS water_pouring_test__bidsection_id ON water_pouring_test
(bidsection_id);
CREATE INDEX
IF NOT EXISTS water_pouring_test__building_id ON water_pouring_test
(building_id);

create table
IF NOT EXISTS water_pouring_test_detail
(
   id                         text PRIMARY KEY not null,
   test_id                    text COLLATE NOCASE,
   unit                       text,
   floor                       text,
   room_id                    text COLLATE NOCASE,
   status                     text,
   acceptor                   text,
   accept_date                text,
   accept_indoor_image_file    text,
   accept_outdoor_image_file   text,
   accept_remark              text,
   contractor                 text,
   update_timestamp           text,
   download_time              text
);

CREATE INDEX IF NOT EXISTS water_pouring_test_detail__test_id ON water_pouring_test_detail (test_id);
CREATE INDEX IF NOT EXISTS water_pouring_test_detail__room_id ON water_pouring_test_detail (room_id);

create table IF NOT EXISTS pile_accept
(
   id                   text PRIMARY KEY not null,
   proj_id              text COLLATE NOCASE,
   bidsection_id        text COLLATE NOCASE,
   item_id              text COLLATE NOCASE,
   building_id          text COLLATE NOCASE,
   status               text COLLATE NOCASE,
   accept_by            text COLLATE NOCASE,
   accept_date          text COLLATE NOCASE,
   pile_data            text COLLATE NOCASE,
   created_by           text COLLATE NOCASE,
   created_on           text COLLATE NOCASE,
   download_time        text COLLATE NOCASE,
   pile_address         text COLLATE NOCASE,
   process_mode         integer DEFAULT 1
);

create table IF NOT EXISTS pile_accept_detail
(
   id                   text PRIMARY KEY not null,
   pile_accept_id       text COLLATE NOCASE,
   checkpoint_id        text COLLATE NOCASE,
   title                text COLLATE NOCASE,
   content              text COLLATE NOCASE,
   image_file            text COLLATE NOCASE,
   download_time        text COLLATE NOCASE,
   sort                 integer,
   is_open              text default "",
   enter_type           text default "image",
   enter_content        text default "",
   enter_type_option    text default "",
   is_fill              integer default 1,
   created_on           text,
   created_by           text,
   modified_by          text,
   modified_on          text
);
CREATE INDEX IF NOT EXISTS idx_pile_accept_detail_pile_accept_id ON pile_accept_detail (pile_accept_id);

create table IF NOT EXISTS pile_accept_user
(
   id                   text PRIMARY KEY not null,
   pile_accept_id       text COLLATE NOCASE,
   type                 text COLLATE NOCASE,
   user_id              text COLLATE NOCASE,
   download_time        text COLLATE NOCASE,
   created_on           text
);
CREATE INDEX IF NOT EXISTS idx_pile_accept_user_pile_accept_id ON pile_accept_user (pile_accept_id);

create table IF NOT EXISTS business_log
(
   id               PRIMARY KEY not null,
   relation_id 	  text,
   business_type 	  text,
   event 			  text,
   diff 				  text,
   images           text,
   operator_id 	  text,
   operator_name	  text,
   operation_time   text
);



-- 激光扫描实测表 -- start

-- 激光扫描实测 - 第三方检查项表
create table  IF NOT EXISTS ls_measure_third_part_checkitem
(
   id               PRIMARY KEY not null,
   checkitem_id 	  text, -- 第三方检查项id
   name 	           text, -- 检查项名称
   sort             text,
   update_timestamp text -- 更新时间
);
CREATE INDEX IF NOT EXISTS idx_ls_measure_third_part_checkitem_checkitem_id ON ls_measure_third_part_checkitem (checkitem_id);

-- 激光扫描实测 - 第三方检查项关联表
create table  IF NOT EXISTS ls_measure_relation_checkitem
(
   id                   PRIMARY KEY not null,
   parent_checkitem_id 	text, -- 父级检查项id
   checkitem_id 	      text, -- 末级检查项id
   third_checkitem_id 	text, -- 第三方检查项id
   update_timestamp     text -- 更新时间
);
CREATE INDEX IF NOT EXISTS idx_ls_measure_relation_checkitem_checkitem_id ON ls_measure_relation_checkitem (checkitem_id);

-- 激光扫描实测 - 测站表
create table  IF NOT EXISTS ls_measure_station
(
  id                    PRIMARY KEY not null,
	name                  text,
	proj_id               text,
	bidsection_id         text,
	building_id           text,
	unit                  text,
	floor                 text,
	room_id               text,
	parent_checkitem_id   text,
   regist_date           text,
   regist_by             text,
	update_timestamp      text
);
CREATE INDEX IF NOT EXISTS idx_ls_measure_station_room_id ON ls_measure_station (room_id);

-- 激光扫描实测 - 检查项表
create table  IF NOT EXISTS ls_measure_checkitem
(
   id                   PRIMARY KEY not null,
   station_id 	         text, -- 测站id
   parent_checkitem_id 	text, -- 父级检查项id
   checkitem_id 	      text, -- 末级检查项id
   design_val 	         text, -- 设计值
   standard 	          text, -- 检查项合格标准
   passrate_mode 	      integer, -- 实测实量合格率计算方法
   update_timestamp     text -- 更新时间
);
CREATE INDEX IF NOT EXISTS idx_ls_measure_checkitem_station_id ON ls_measure_checkitem (station_id);

-- 激光扫描实测 - 测量批次表
create table  IF NOT EXISTS ls_measure_batch
(
   id                   PRIMARY KEY not null,
   proj_id 	            text, -- 项目id
   bidsection_id 	      text, -- 标段id
   building_id 	      text, -- 楼栋id
   unit 	               text, -- 单元
   floor 	            text, -- 楼层
   room_id 	            text, -- 房间id
   parent_checkitem_id 	text, -- 父级检查项id
   status               integer,
   regist_date          text,
   regist_by            text,
   download_time        text,
   update_timestamp     text -- 更新时间
);
CREATE INDEX IF NOT EXISTS idx_ls_measure_batch_room_id ON ls_measure_batch (room_id);
CREATE INDEX IF NOT EXISTS idx_ls_measure_batch_parent_checkitem_id ON ls_measure_batch (parent_checkitem_id);

-- 激光扫描实测 - 测量结果表
create table  IF NOT EXISTS ls_measure_result
(
   id                         PRIMARY KEY not null,
   batch_id 	                text, -- 批次id
   station_id 	              text, -- 测站id
   task_id                    text, -- 测站id
   third_checkitem_id         text, -- 第三方检查项id
   proj_id 	                  text, -- 项目id
   bidsection_id 	            text, -- 标段id
   building_id 	              text, -- 楼栋id
   unit 	                    text, -- 单元
   floor 	                    text, -- 楼层
   room_id 	                  text, -- 房间id
   parent_checkitem_id 	      text, -- 父级检查项id
   checkitem_id 	            text, -- 末级检查项id
   measurement_points 	      integer, -- 实测点数
   problem_points 	          integer, -- 问题点数
   measure_data 	            text, -- 测量数据
   measure_data_zip 	        text, -- 测量数据，压缩
   design_val 	              text, -- 设计值
   standard 	                text, -- 检查项合格标准
   passrate_mode 	            integer, -- 实测实量合格率计算方法
   role_type 	                integer, -- 角色类型，31：施工单位,32：监理单位,33:建设单位'
   pass_rate                  text, -- 合格率
   download_time,             text, -- 下载时间
   update_timestamp           text -- 更新时间
);
CREATE INDEX IF NOT EXISTS idx_ls_measure_result_batch_id ON ls_measure_result (batch_id);
CREATE INDEX IF NOT EXISTS idx_ls_measure_result_station_id ON ls_measure_result (station_id);
CREATE INDEX IF NOT EXISTS idx_ls_measure_result_room_id ON ls_measure_result (room_id);
CREATE INDEX IF NOT EXISTS idx_ls_measure_result_checkitem_id ON ls_measure_result (checkitem_id);

create table  IF NOT EXISTS special_inspect_place
(
  id                        PRIMARY KEY not null,
  name                      text,
  batch_id                  text,
  proj_id                   text,
  building_id               text,
  unit                      text,
  floor                     text,
  room_id                   text,
  regist_date               text,
  download_time             text
);
CREATE INDEX IF NOT EXISTS idx_special_inspect_place_batch_id ON special_inspect_place (batch_id);
CREATE INDEX IF NOT EXISTS idx_special_inspect_place_proj_id ON special_inspect_place (proj_id);

create table  IF NOT EXISTS special_inspect_place_checkitem
(
  id                        PRIMARY KEY not null,
  batch_id                  text,
  proj_id                   text,
  place_id                  text,
  special_inspect_id        text,
  status                    text,
  deduction                 integer,
  remark                    text,
  image_file                text,
  checker                   text,
  check_time                text,
  download_time             text
);

CREATE INDEX IF NOT EXISTS idx_special_inspect_place_checkitem_batch_id ON special_inspect_place_checkitem (batch_id);
CREATE INDEX IF NOT EXISTS idx_special_inspect_place_checkitem_proj_id ON special_inspect_place_checkitem (proj_id);
CREATE INDEX IF NOT EXISTS idx_special_inspect_place_checkitem_special_inspect_id ON special_inspect_place_checkitem (special_inspect_id);

-- 材料-供应链订单表
create table IF NOT EXISTS material_supply_order
(
   id                   text PRIMARY KEY not null, -- 主键
   task_id              text, -- 主表id
   proj_id              text, -- 项目id
   material_id          text, -- 材料id
   contractor_id        text, -- 供应商id
   construct_user_id    text, -- 建设单位用户id
   shipping_id          text, -- 第三方送货单唯一id
   shipping_no          text, -- 第三方送货单
   shipping_detail      text, -- 送货单详情
   source               integer, -- 来源：0，无；1，体制内；2，体制外
   status               text, -- 当前任务状态
   shipping_remark      text, -- 第三方备注信息
   shipping_image       text, -- 供货单照片
   sendback_reason      text, -- 退回原因
   created_on           text, -- 创建时间
   mobile               text, -- 手机
   cancel_reason        text, -- 作废原因
   download_time        text,
   update_timestamp     text COLLATE NOCASE
);

create table  IF NOT EXISTS project_parameter
(
  id                        PRIMARY KEY not null,
  proj_id                   text,
  group_key                 text,
  key                       text,
  value                     text,
  sort                      integer
);

CREATE INDEX IF NOT EXISTS idx_project_parameter_proj_id ON project_parameter (proj_id);
CREATE INDEX IF NOT EXISTS idx_project_parameter_group_key ON project_parameter (group_key);
