/*
 Date: 2016/01/21 11:00:00
*/

-- ****************************************************************************************** --
-- ！！！严重声明：该文件的最后一行，不能存在空行、回车符、换行符、sql 注释，否则在 iOS 上执行会报错 ！！！ --
-- ****************************************************************************************** --


-- ********************************************** Begin Of 大客服公共 sql ********************************************** --

-- ----------------------------
--  Table structure for yk_app_workbench_function_group
-- ----------------------------
CREATE TABLE IF NOT EXISTS yk_app_workbench_function_group (
  id                            TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  group_name                    TEXT,
  group_code                    TEXT,
  sort                          INTEGER
);

-- ----------------------------
--  Table structure for yk_app_workbench_function
-- ----------------------------
CREATE TABLE IF NOT EXISTS yk_app_workbench_function (
  id                            TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  group_id                      TEXT NOT NULL COLLATE NOCASE,
  func_name                     TEXT,
  func_code                     TEXT,
  icon_url                      TEXT,
  icon_local_url                TEXT,
  sort                          INTEGER
);


-- ********************************************** End Of 大客服公共 sql ********************************************** --





-- ********************************************** Begin Of 验房 sql ********************************************** --


-- ----------------------------
--  Table structure for global_storage
-- ----------------------------
CREATE TABLE IF NOT EXISTS global_storage
(
  key   TEXT PRIMARY KEY NOT NULL,
  value TEXT
);

-- ----------------------------
--  Table structure for project_storage
-- ----------------------------
CREATE TABLE IF NOT EXISTS project_storage
(
  proj_id       TEXT NOT NULL COLLATE NOCASE,
  key           TEXT NOT NULL,
  value         TEXT,

  PRIMARY KEY(proj_id, key)
);

-- ----------------------------
--  Table structure for data_download_log
-- ----------------------------
CREATE TABLE IF NOT EXISTS data_download_log
(
  id                      INTEGER PRIMARY KEY AUTOINCREMENT,
  type                    TEXT,
  downloaded_time_from    TEXT,
  downloaded_time_to      TEXT,
  create_on               DATETIME DEFAULT (datetime('now', 'localtime'))
);

-- ----------------------------
--  Table structure for batch_building
-- ----------------------------
CREATE TABLE IF NOT EXISTS batch_building
(
  id                      TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  batch_id                TEXT COLLATE NOCASE,
  batch_type              TEXT,
  building_id             TEXT COLLATE NOCASE,
  building_name           TEXT,
  data_timestamp          TEXT,
  sort                    INTEGER,
  is_downloaded           INTEGER,
  is_has_update           INTEGER,
  download_timestamp      TEXT
);

-- ----------------------------
--  Table structure for batch_unit
-- ----------------------------
CREATE TABLE IF NOT EXISTS batch_unit
(
  id                      TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  batch_id                TEXT COLLATE NOCASE,
  building_id             TEXT COLLATE NOCASE,
  building_name           TEXT,
  unit                    TEXT,
  sort                    INTEGER,
  is_downloaded           INTEGER,
  is_has_update           INTEGER,
  download_timestamp      TEXT
);

CREATE TABLE IF NOT EXISTS todo_batch_unit
(
    batch_unit_id         TEXT COLLATE NOCASE,
    todo_type             TEXT
);

-- ----------------------------
--  Table structure for batch_room
-- ----------------------------
CREATE TABLE IF NOT EXISTS batch_room
(
  id                                 TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  batch_id                           TEXT COLLATE NOCASE,
  batch_building_id                  TEXT COLLATE NOCASE,
  batch_unit_id                      TEXT COLLATE NOCASE,
  room_id                            TEXT COLLATE NOCASE,
  room_no                            TEXT,
  floor                              TEXT,
  unit                               TEXT,
  room_type_id                       TEXT COLLATE NOCASE,
  building_id                        TEXT COLLATE NOCASE,
  building_name                      TEXT,
  is_checked                         INTEGER,
  check_status                       TEXT DEFAULT '待检查',
  check_date                         TEXT,
  check_engineer                     TEXT COLLATE NOCASE,
  delivery_status                    TEXT,
  delivery_situation                 TEXT,
  delivery_date                      TEXT,
  delivery_engineer                  TEXT,
  first_delivery_situation           TEXT,
  first_delivery_date                TEXT,
  customer_name                      TEXT,
  customer_phone                     TEXT,
  water_meter_no                     TEXT,
  water_meter_degree                 TEXT,
  electric_meter_no                  TEXT,
  electric_meter_degree              TEXT,
  gas_meter_no                       TEXT,
  gas_meter_degree                   TEXT,
  heating_pressure_degree            TEXT,
  key_saved_count                    INTEGER,
  signature_url                      TEXT,
  signature_image_localpath          TEXT,
  satisfaction_level                 INTEGER,
  reject_reason                      TEXT,
  review_date                        TEXT,
  reviewed_by                        TEXT COLLATE NOCASE,
  review_signature_url               TEXT,
  review_signature_image_localpath   TEXT,
  review_remark                      TEXT,
  is_key_return                      INTEGER,
  opening_receive_date               TEXT,
  opening_status                     TEXT,
  is_virtual                         INTEGER DEFAULT 0,
  assess_customer_status             TEXT DEFAULT '待评价',
  satisfaction_remark                TEXT
);

-- ----------------------------
--  Table structure for batch_room_images
--
--  type:  review
-- ----------------------------
CREATE TABLE IF NOT EXISTS batch_room_images
(
  id                            TEXT PRIMARY KEY ON CONFLICT IGNORE COLLATE NOCASE,
  batch_room_id                 TEXT COLLATE NOCASE,
  batch_unit_id                 TEXT COLLATE NOCASE,
  type                          TEXT,
  img_url                       TEXT,
  img_localpath                 TEXT,
  img_thumbnail_localpath       TEXT,
  sort                          INTEGER
);

-- ----------------------------
--  Table structure for batch_room_delivery_rejection
-- ----------------------------
CREATE TABLE IF NOT EXISTS batch_room_delivery_rejection
(
  id                    TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  batch_room_id         TEXT COLLATE NOCASE,
  batch_unit_id         TEXT COLLATE NOCASE,
  reason                TEXT,
  remark                TEXT,
  created_on            TEXT,
  is_local              INTEGER,
  created_by_name       TEXT
);

-- ----------------------------
--  Table structure for batch_checkitem
-- ----------------------------
CREATE TABLE IF NOT EXISTS batch_checkitem
(
  id                   TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  batch_id             TEXT COLLATE NOCASE,
  item_id              TEXT COLLATE NOCASE,
  item_full_name       TEXT,
  is_for_rough         INTEGER,
  is_for_decorated     INTEGER,
  sort                 INTEGER
);

-- ----------------------------
--  Table structure for building_floor
-- ----------------------------
CREATE TABLE IF NOT EXISTS building_floor
(
  building_id         TEXT COLLATE NOCASE,
  floor               TEXT,
  sort                INTEGER
);

-- ----------------------------
--  Table structure for building_unit
-- ----------------------------
CREATE TABLE IF NOT EXISTS building_unit
(
  building_id         TEXT COLLATE NOCASE,
  unit                TEXT,
  sort                INTEGER
);

-- ----------------------------
--  Table structure for check_item_desc
-- ----------------------------
CREATE TABLE IF NOT EXISTS check_item_desc
(
  id                    TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  name                  TEXT,
  check_item_id         TEXT COLLATE NOCASE,
  is_remark_required    INTEGER,
  sort                  INTEGER,
  is_for_decorated      INTEGER,
  is_for_rough          INTEGER
);

-- ----------------------------
--  Table structure for checkroom_batch
-- ----------------------------
CREATE TABLE IF NOT EXISTS checkroom_batch
(
  batch_id             TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  batch_name           TEXT,
  project_id           TEXT COLLATE NOCASE,
  project_name         TEXT,
  type                 TEXT,
  child_type           TEXT,
  sort                 INTEGER,
  is_closed            INTEGER
);

-- ----------------------------
--  Table structure for checkroom_problem
-- ----------------------------
CREATE TABLE IF NOT EXISTS checkroom_problem
(
  id                         TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  code                       TEXT,
  batch_room_id              TEXT COLLATE NOCASE,
  batch_building_id          TEXT COLLATE NOCASE,
  batch_unit_id              TEXT COLLATE NOCASE,
  batch_id                   TEXT COLLATE NOCASE,
  proj_id                    TEXT COLLATE NOCASE,
  building_id                TEXT COLLATE NOCASE,
  room_id                    TEXT COLLATE NOCASE,
  position_id                TEXT COLLATE NOCASE,
  top_item_id                TEXT COLLATE NOCASE,
  item_id                    TEXT COLLATE NOCASE,
  desc_id                    TEXT COLLATE NOCASE,
  remark                     TEXT,
  roomtype_diagram_id        TEXT COLLATE NOCASE,
  coordinate                 TEXT,
  contractor_id              TEXT COLLATE NOCASE,
  responsible_company_id     TEXT COLLATE NOCASE,
  status                     TEXT,
  regist_date                TEXT,
  regist_user_id             TEXT COLLATE NOCASE,
  dispatch_date              TEXT,
  repair_date                TEXT,
  repaired_by                TEXT COLLATE NOCASE,
  repair_remark              TEXT,
  repair_deadline            TEXT,
  review_date                TEXT,
  reviewed_by                TEXT COLLATE NOCASE,
  sent_back_date             TEXT,
  sent_back_time             INTEGER,
  invalid_date               TEXT,
  close_date                 TEXT,
  emergency_degree           TEXT,
  is_passed_when_add         INTEGER,
  assign_user_id             TEXT COLLATE NOCASE
);

-- ----------------------------
--  Table structure for checkroom_problem_log
-- ----------------------------
CREATE TABLE IF NOT EXISTS checkroom_problem_log
(
  id                          TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  batch_unit_id               TEXT COLLATE NOCASE,
  checkroom_problem_id        TEXT COLLATE NOCASE,
  operate_type                TEXT,
  operate_reason              TEXT,
  created_on                  TEXT,
  created_by                  TEXT COLLATE NOCASE
);

-- ----------------------------
--  Table structure for checkroom_problem_operate_log
-- ----------------------------
CREATE TABLE IF NOT EXISTS checkroom_problem_operate_log
(
  id                          TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  batch_unit_id               TEXT COLLATE NOCASE,
  checkroom_problem_id        TEXT COLLATE NOCASE,
  operate_type                TEXT,
  operate_reason              TEXT,
  operate_date                TEXT,
  -- operate_user_id             TEXT COLLATE NOCASE,
  operate_user_name			      TEXT,
  -- contractor_id             	 TEXT COLLATE NOCASE,
  contractor_name			        TEXT,
  remark        			        TEXT,
  created_by                  TEXT COLLATE NOCASE,
  source                      TEXT
);

-- ----------------------------
--  Table structure for construction_range
-- ----------------------------
CREATE TABLE IF NOT EXISTS construction_range
(
  id                          TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  contractor_id               TEXT COLLATE NOCASE,
  mode                        TEXT,    -- 承建范围设置模式: 全部｜标准房间｜公区｜指定房间
  building_id                 TEXT COLLATE NOCASE,
  item_id                     TEXT COLLATE NOCASE,
  desc_id                     TEXT COLLATE NOCASE,
  contractor_name             TEXT,
  unit                        TEXT,
  floor                       TEXT,
  room_id                     TEXT COLLATE NOCASE
);

-- ----------------------------
--  Table structure for data_increment
-- ----------------------------
CREATE TABLE IF NOT EXISTS data_increment (
  id                          TEXT PRIMARY KEY NOT NULL,
  type                        TEXT,
  relation_id                 TEXT COLLATE NOCASE,
  data_timestamp              TEXT,
  batch_unit_id               TEXT COLLATE NOCASE,
  batch_room_id               TEXT COLLATE NOCASE,
  batch_id                    TEXT COLLATE NOCASE,
  operation                   TEXT
);

-- ----------------------------
--  Table structure for position
-- ----------------------------
CREATE TABLE IF NOT EXISTS position
(
  id              TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  name            TEXT,
  sort            INTEGER
);

-- ----------------------------
--  Table structure for position_checkitem
-- ----------------------------
CREATE TABLE IF NOT EXISTS position_checkitem
(
  id                    TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  position_id           TEXT COLLATE NOCASE,
  item_id               TEXT COLLATE NOCASE,
  item_name             TEXT,
  parent_item_id        TEXT COLLATE NOCASE,
  level                 INTEGER,
  sort                  INTEGER,
  is_for_rough          INTEGER,
  is_for_decorated      INTEGER
);

-- ----------------------------
--  Table structure for project_position_checkitem
-- ----------------------------
CREATE TABLE IF NOT EXISTS project_position_checkitem
(
  id                    TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  proj_id               TEXT COLLATE NOCASE,
  position_id           TEXT COLLATE NOCASE,
  item_id               TEXT COLLATE NOCASE
);

-- ----------------------------
--  Table structure for problem_images
--
--  type:  rectify_before、rectify_after
-- ----------------------------
CREATE TABLE IF NOT EXISTS problem_images
(
  id                            TEXT PRIMARY KEY ON CONFLICT IGNORE COLLATE NOCASE,
  problem_id                    TEXT COLLATE NOCASE,
  business_id                   TEXT COLLATE NOCASE,
  batch_unit_id                 TEXT COLLATE NOCASE,
  type                          TEXT,
  img_url                       TEXT,
  img_localpath                 TEXT,
  img_thumbnail_localpath       TEXT,
  sort                          INTEGER
);

-- ----------------------------
--  Table structure for project_contractor
-- ----------------------------
CREATE TABLE IF NOT EXISTS project_contractor
(
  contractor_id       TEXT COLLATE NOCASE,
  proj_id             TEXT COLLATE NOCASE,
  leader_id           TEXT COLLATE NOCASE
);

-- ----------------------------
--  Table structure for contractor
-- ----------------------------
CREATE TABLE IF NOT EXISTS contractor
(
  id         TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  name       TEXT,
  sort       INTEGER
);

-- ----------------------------
--  Table structure for room_satisfaction_value
-- ----------------------------
CREATE TABLE IF NOT EXISTS room_satisfaction_value
(
  id                TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  dimension_id      TEXT COLLATE NOCASE,
  value             TEXT,
  batch_id          TEXT COLLATE NOCASE,
  batch_unit_id     TEXT COLLATE NOCASE,
  batch_room_id     TEXT COLLATE NOCASE,
  source            TEXT DEFAULT ''      -- 收楼动作的来源：'', app 在app操作的（来源都是app）--
);

-- ----------------------------
--  Table structure for room_type
-- ----------------------------
CREATE TABLE IF NOT EXISTS room_type
(
  id                    TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  name                  TEXT,
  room_structure        TEXT,
  fitment_standard      TEXT
);

-- ----------------------------
--  Table structure for room_type_diagram
-- ----------------------------
CREATE TABLE IF NOT EXISTS room_type_diagram
(
  id                TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  name              TEXT,
  sort              INTEGER,
  url               TEXT,
  local_path        TEXT,
  room_type_id      TEXT
);

-- ----------------------------
--  Table structure for room_type_position
-- ----------------------------
CREATE TABLE IF NOT EXISTS room_type_position
(
  id               TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  room_type_id     TEXT COLLATE NOCASE,
  position_id      TEXT COLLATE NOCASE
);

-- ----------------------------
--  Table structure for roomtype_diagram_partition
-- ----------------------------
CREATE TABLE IF NOT EXISTS roomtype_diagram_partition
(
  id              TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  roomtype_id     TEXT COLLATE NOCASE,
  diagram_id      TEXT COLLATE NOCASE,
  coordinate      TEXT,
  position_id     TEXT COLLATE NOCASE,
  sort            INTEGER
);

-- ----------------------------
--  Table structure for satisfaction_dimension
-- ----------------------------
CREATE TABLE IF NOT EXISTS satisfaction_dimension
(
  id            TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  type          TEXT,
  dimension     TEXT,
  sort          INTEGER
);

-- ----------------------------
--  Table structure for check_item_guide
-- ----------------------------
CREATE TABLE IF NOT EXISTS check_item_guide
(
  id          TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  item_id     TEXT COLLATE NOCASE,
  remark      TEXT
);

-- ----------------------------
--  Table structure for check_item
-- ----------------------------
CREATE TABLE IF NOT EXISTS check_item
(
  id                  TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  name                TEXT,
  full_name           TEXT,
  parent_id           TEXT COLLATE NOCASE,
  config_type         TEXT,
  apply_scope         TEXT DEFAULT '全部',
  is_for_decorated    INTEGER,
  is_for_rough        INTEGER,
  sort                INTEGER,
  ifEnd               INTEGER,
  code                TEXT,
  level               INTEGER
);

-- ----------------------------
--  Table structure for batch_building_download
-- ----------------------------
CREATE TABLE IF NOT EXISTS batch_building_download
(
    id                  TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
    batch_building_id   TEXT COLLATE NOCASE,
    download_time       TEXT
);

CREATE TABLE IF NOT EXISTS download_timestamp
(
    id                  TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
    business_type       TEXT,
    business_id         TEXT COLLATE NOCASE,
    download_time       TEXT
);

CREATE TABLE IF NOT EXISTS user
(
    id                  TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
    source              TEXT NOT NULL,
    name                TEXT,
    mobile              TEXT
);

CREATE TABLE IF NOT EXISTS checkitem_remark_history
(
    id                  TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
    item_id             TEXT COLLATE NOCASE,
    desc_id             TEXT COLLATE NOCASE,
    remark              TEXT,
    used_time           INTEGER,
    last_used_time      TEXT
);

CREATE TABLE IF NOT EXISTS important_checkitem
(
    id                                TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
    batch_id                          TEXT COLLATE NOCASE,
    item_name                         TEXT,
    desc_name                         TEXT,
    problem_count_each_room           DOUBLE,
    problem_count_each_room_group     DOUBLE
);

CREATE TABLE IF NOT EXISTS local_config
(
    id          TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
    type        TEXT,
    key         TEXT,
    value       TEXT
);

CREATE TABLE IF NOT EXISTS behavior
(
    id                  TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
    operation_name      TEXT,
    source              TEXT,
    operate_time        TEXT,
    remark              TEXT
);

-- ----------------------------
--  Table structure for room_design_change
-- ----------------------------
CREATE TABLE IF NOT EXISTS room_design_change
(
    id              TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
    room_id         TEXT COLLATE NOCASE,
    location        TEXT,
    content         TEXT,
    remark          TEXT,
    sort            INTEGER
);

CREATE TABLE IF NOT EXISTS room_design_change_problem
(
    id                      TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
    design_change_id        TEXT COLLATE NOCASE,
    checkroom_problem_id    TEXT COLLATE NOCASE
);

-- ----------------------------
--  Table structure for fitment
-- ----------------------------
CREATE TABLE IF NOT EXISTS fitment_checkitem_option
(
  id                    TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  proj_id               TEXT COLLATE NOCASE,
  item_id               TEXT COLLATE NOCASE,
  name                  TEXT,
  brand                 TEXT,
  model                 TEXT,
  color                 TEXT,
  specifications        TEXT,
  img_url               TEXT,
  img_local             TEXT,
  remark                TEXT
);

CREATE TABLE IF NOT EXISTS fitment_style
(
  id                TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  proj_id           TEXT COLLATE NOCASE,
  name              TEXT
);

CREATE TABLE IF NOT EXISTS fitment_style_checkitem
(
  id                       TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  fitment_style_id         TEXT COLLATE NOCASE,
  position_id              TEXT COLLATE NOCASE,
  item_id                  TEXT COLLATE NOCASE,
  checkitem_option_id      TEXT COLLATE NOCASE
);

CREATE TABLE IF NOT EXISTS room
(
  id                   TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  room_id              TEXT COLLATE NOCASE,
  fitment_style_id     TEXT COLLATE NOCASE
);

CREATE TABLE IF NOT EXISTS room_fitment_checkitem
(
  id                     TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  room_id                TEXT COLLATE NOCASE,
  style_checkitem_id     TEXT COLLATE NOCASE,
  checkitem_option_id    TEXT COLLATE NOCASE
);

-- 默认头像 --
CREATE TABLE IF NOT EXISTS default_avatar
(
    id                  TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
    img_url             TEXT,
    img_local_path      TEXT,
    type                TEXT         -- 群：chatgroup；开发商：developer；承建商：contractor --
);

-- 用户信息 --
CREATE TABLE IF NOT EXISTS chat_user
(
  id                      TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  user_id                 TEXT NOT NULL COLLATE NOCASE,
  name                    TEXT NOT NULL COLLATE NOCASE,
  mobile                  TEXT,
  avatar_url              TEXT,
  avatar_local_path       TEXT
);

-- 用户所属公司 --
CREATE TABLE IF NOT EXISTS user_company
(
  user_id         TEXT NOT NULL COLLATE NOCASE,
  company_id      TEXT NOT NULL COLLATE NOCASE
);

-- 公司 --
CREATE TABLE IF NOT EXISTS company
(
  id                   TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  short_name           TEXT NOT NULL COLLATE NOCASE,
  full_name            TEXT NOT NULL COLLATE NOCASE
);

-- 群信息 --
CREATE TABLE IF NOT EXISTS chat_group
(
  id                  TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  name                TEXT NOT NULL COLLATE NOCASE,
  is_system           TEXT NOT NULL COLLATE NOCASE,
  manager_id          TEXT NOT NULL COLLATE NOCASE,
  avatar_id           TEXT NOT NULL COLLATE NOCASE
);

-- 群成员 --
CREATE TABLE IF NOT EXISTS chat_group_user
(
  id                TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  group_id          TEXT NOT NULL COLLATE NOCASE,
  user_id           TEXT NOT NULL COLLATE NOCASE
);

-- 会话表 --
CREATE TABLE IF NOT EXISTS chat
(
  id                  TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  name                TEXT NOT NULL COLLATE NOCASE,
  chat_type           TEXT NOT NULL COLLATE NOCASE, -- 群聊：group，私聊：private --
  relation_id         TEXT NOT NULL COLLATE NOCASE, -- 群聊时记group_id，私聊时记对方的user_id --
  last_message        TEXT,
  refresh_time        TEXT,
  delete_time         TEXT,
  is_top              INTEGER,
  not_read_count      INTEGER,
  is_silent           INTEGER
);

-- 房间检查清单已阅表 --
CREATE TABLE IF NOT EXISTS batch_room_check_list_done
(
  batch_room_id      TEXT  NOT NULL COLLATE NOCASE,
  position_id        TEXT NOT NULL COLLATE NOCASE,
  item_id            TEXT NOT NULL COLLATE NOCASE
);

-- 检查项使用次数表 --
CREATE TABLE IF NOT EXISTS check_item_used
(
  item_id           TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  used_times        INTEGER
);

-- 问题描述使用次数表 --
CREATE TABLE IF NOT EXISTS item_desc_used
(
  desc_id           TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  used_times        INTEGER
);

-- 检查项户均问题数 --
CREATE TABLE IF NOt EXISTS check_item_room_average_problem_num
(
  item_id         TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  num             TEXT
);

-- 问题描述的户均问题数 --
CREATE TABLE IF NOt EXISTS desc_room_average_problem_num
(
  desc_id         TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  num             TEXT
);

-- 公告表 --
CREATE TABLE IF NOT EXISTS notice
(
  id              TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  is_read         TEXT
);

-- 标签表 --
CREATE TABLE IF NOT EXISTS tag
(
  id              TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  name            TEXT,
  sort            INTEGER
);

-- 客户标签表 --
CREATE TABLE IF NOT EXISTS customer_tag
(
  customer_id           TEXT COLLATE NOCASE,
  tag_id                TEXT COLLATE NOCASE,
  source                TEXT DEFAULT '',      -- 标签的来源：'', app 在app操作的（无论是删除还是添加，来源都是app）--
  operation             TEXT DEFAULT '',      -- 标签的操作：add, delete --

  CONSTRAINT pk_customer_tag PRIMARY KEY (customer_id, tag_id) ON CONFLICT IGNORE
);

-- 客户评价表 --
CREATE TABLE IF NOT EXISTS customer_assess
(
  customer_id           TEXT PRIMARY KEY ON CONFLICT IGNORE COLLATE NOCASE,
  remark                TEXT,
  source                TEXT DEFAULT ''       -- 标签的来源：'', app 在app操作的（无论是删除还是添加，来源都是app）--
);

-- 业主和房间关联表 --
CREATE TABLE IF NOT EXISTS customer_room
(
  customer_id           TEXT COLLATE NOCASE,
  room_id               TEXT COLLATE NOCASE,
  customer_name         TEXT,
  customer_phone        TEXT
);

-- 我的项目表 --
CREATE TABLE IF NOT EXISTS my_project
(
  id                    TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  name                  TEXT,
  is_default            INTEGER DEFAULT 0,
  sort                  INTEGER DEFAULT 0
);

-- 丢失图片 --
-- type: problem, material --
CREATE TABLE IF NOT EXISTS lose_image
(
  relation_id           TEXT COLLATE NOCASE,
  type                  TEXT,
  batch_unit_id         TEXT COLLATE NOCASE,
  count                 INTEGER DEFAULT 0
);

-- 问题原因 --
CREATE TABLE IF NOT EXISTS problem_reason_config
(
  id                    TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  sort                  INTEGER DEFAULT 0,
  reason                TEXT
);

-- 问题原因关联表 --
CREATE TABLE IF NOT EXISTS problem_reason
(
  id                      TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  checkroom_problem_id    TEXT COLLATE NOCASE,
  reason_id               TEXT COLLATE NOCASE
);

-- ----------------------------
--  Table structure for batch_room_material
--  material_type: image,voice,video
--  status: 待审核,通过,不通过
-- ----------------------------
CREATE TABLE IF NOT EXISTS batch_room_material
(
  id                            TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  batch_unit_id                 TEXT COLLATE NOCASE,
  batch_room_id                 TEXT COLLATE NOCASE,
  position_id                   TEXT COLLATE NOCASE,
  item_id                       TEXT COLLATE NOCASE,
  shooting_user_id              TEXT COLLATE NOCASE,
  sort                          INTEGER,
  material_type                 TEXT,
  material_url                  TEXT,
  material_localpath            TEXT,
  material_thumbnail_localpath  TEXT,
  shooting_date                 TEXT,
  status                        TEXT,
  reviewed_by                   TEXT COLLATE NOCASE,
  review_date                   TEXT,
  review_reason                 TEXT,
  review_remark                 TEXT
);

-- ----------------------------
--  Table structure for batch_room_material_feedback
--  status: 待回复,已回复,已转派
-- ----------------------------
CREATE TABLE IF NOT EXISTS batch_room_material_feedback
(
  id                            TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  material_id                   TEXT COLLATE NOCASE,
  batch_unit_id                 TEXT COLLATE NOCASE,
  batch_room_id                 TEXT COLLATE NOCASE,
  feedback_user_id              TEXT COLLATE NOCASE,
  status                        TEXT,
  code                          TEXT,
  source                        TEXT,
  feedback_date                 TEXT,
  feedback_content              TEXT,
  ref_business_id               TEXT COLLATE NOCASE,
  replied_by                    TEXT COLLATE NOCASE,
  reply_date                    TEXT,
  reply_reason                  TEXT,
  reply_remark                  TEXT
);

-- ----------------------------
--  Table structure for batch_room_delivery_item
-- ----------------------------
CREATE TABLE IF NOT EXISTS batch_room_delivery_item
(
  id                            TEXT PRIMARY KEY NOT NULL COLLATE NOCASE,
  batch_room_id                 TEXT COLLATE NOCASE,
  item_name                     TEXT,
  item_type                     TEXT,
  unit                          TEXT,
  max_length                    INTEGER,
  is_required                   INTEGER,
  sort                          INTEGER,
  value                         TEXT
);

-- ----------------------------
--  Indexes structure for table batch_room_delivery_item
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_batch_room_delivery_item_batch_room_id ON batch_room_delivery_item (batch_room_id);


-- ----------------------------
--  Indexes structure for table lose_image
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_lose_image_batch_unit_id ON lose_image (batch_unit_id);
CREATE INDEX IF NOT EXISTS idx_lose_image_relation_id_type ON lose_image (relation_id,type);


-- ----------------------------
--  Indexes structure for table batch_room_material_feedback
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_batch_room_material_feedback_material_id ON batch_room_material_feedback (material_id);
CREATE INDEX IF NOT EXISTS idx_batch_room_material_feedback_batch_room_id ON batch_room_material_feedback (batch_room_id);
CREATE INDEX IF NOT EXISTS idx_batch_room_material_feedback_batch_unit_id ON batch_room_material_feedback (batch_unit_id);


-- ----------------------------
--  Indexes structure for table batch_room_material
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_batch_room_material_ids_1 ON batch_room_material (batch_room_id,position_id,item_id);
CREATE INDEX IF NOT EXISTS idx_batch_room_material_batch_unit_id ON batch_room_material (batch_unit_id);


-- ----------------------------
--  Indexes structure for table problem_reason
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_problem_reason_checkroom_problem_id ON problem_reason (checkroom_problem_id);


-- ----------------------------
--  Indexes structure for table customer_room
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_customer_room_room_id ON customer_room (room_id);


-- ----------------------------
--  Indexes structure for table download_timestamp
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_download_timestamp_business_type_business_id ON download_timestamp (business_type, business_id);


-- ----------------------------
--  Indexes structure for table batch_building
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_batch_building_building_id ON batch_building (building_id);
CREATE INDEX IF NOT EXISTS idx_batch_building_batch_id ON batch_building (batch_id);

-- ----------------------------
--  Indexes structure for table batch_room
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_batch_room_batch_id ON batch_room (batch_id);
CREATE INDEX IF NOT EXISTS idx_batch_room_batch_building_id ON batch_room (batch_building_id);
CREATE INDEX IF NOT EXISTS idx_batch_room_room_id ON batch_room (room_id);

-- ----------------------------
--  Indexes structure for table batch_room_images
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_batch_room_images_batch_room_id ON batch_room_images (batch_room_id);
CREATE INDEX IF NOT EXISTS idx_batch_room_images_batch_unit_id ON batch_room_images (batch_unit_id);

-- ----------------------------
--  Indexes structure for table batch_room_delivery_rejection
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_batch_room_delivery_rejection_batch_room_id ON batch_room_delivery_rejection (batch_room_id);
CREATE INDEX IF NOT EXISTS idx_batch_room_delivery_rejection_batch_unit_id ON batch_room_delivery_rejection (batch_unit_id);

-- ----------------------------
--  Indexes structure for table batch_checkitem
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_batch_checkitem_batch_id ON batch_checkitem (batch_id);

-- ----------------------------
--  Indexes structure for table building_unit
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_building_unit_building_id ON building_unit (building_id);

-- ----------------------------
--  Indexes structure for table check_item_desc
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_check_item_desc_check_item_id ON check_item_desc (check_item_id);

-- ----------------------------
--  Indexes structure for table checkroom_problem
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_checkroom_problem_batch_room_id ON checkroom_problem (batch_room_id);
CREATE INDEX IF NOT EXISTS idx_checkroom_problem_batch_building_id ON checkroom_problem (batch_building_id);
CREATE INDEX IF NOT EXISTS idx_checkroom_problem_batch_id ON checkroom_problem (batch_id);
CREATE INDEX IF NOT EXISTS idx_checkroom_problem_proj_id ON checkroom_problem (proj_id);
CREATE INDEX IF NOT EXISTS idx_checkroom_problem_building_id ON checkroom_problem (building_id);
CREATE INDEX IF NOT EXISTS idx_checkroom_problem_room_id ON checkroom_problem (room_id);
CREATE INDEX IF NOT EXISTS idx_checkroom_problem_position_id ON checkroom_problem (position_id);
CREATE INDEX IF NOT EXISTS idx_checkroom_problem_item_id ON checkroom_problem (item_id);
CREATE INDEX IF NOT EXISTS idx_checkroom_problem_desc_id ON checkroom_problem (desc_id);
CREATE INDEX IF NOT EXISTS idx_checkroom_problem_contractor_id ON checkroom_problem (contractor_id);
CREATE INDEX IF NOT EXISTS idx_checkroom_problem_roomtype_diagram_id ON checkroom_problem (roomtype_diagram_id);
CREATE INDEX IF NOT EXISTS idx_checkroom_problem_responsible_company_id ON checkroom_problem (responsible_company_id);

-- ----------------------------
--  Indexes structure for table construction_range
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_construction_range_contractor_id ON construction_range (contractor_id);
CREATE INDEX IF NOT EXISTS idx_construction_range_building_id ON construction_range (building_id);
CREATE INDEX IF NOT EXISTS idx_construction_range_item_id ON construction_range (item_id);
CREATE INDEX IF NOT EXISTS idx_construction_range_unit ON construction_range (unit);
CREATE INDEX IF NOT EXISTS idx_construction_range_floor ON construction_range (floor);
CREATE INDEX IF NOT EXISTS idx_construction_range_room_id ON construction_range (room_id);
CREATE INDEX IF NOT EXISTS idx_construction_range_desc_id ON construction_range (desc_id);
-- ----------------------------
--  Indexes structure for table position_checkitem
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_position_checkitem_itemid ON position_checkitem (item_id);
CREATE INDEX IF NOT EXISTS idx_position_checkitem_position_id ON position_checkitem (position_id);

-- ----------------------------
--  Indexes structure for table problem_images
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_problem_images_problem_id ON problem_images (problem_id);
CREATE INDEX IF NOT EXISTS idx_problem_images_batch_unit_id ON problem_images (batch_unit_id);

-- ----------------------------
--  Indexes structure for table room_satisfaction_value
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_room_satisfaction_value_batch_room_id ON room_satisfaction_value (batch_room_id);
CREATE INDEX IF NOT EXISTS idx_room_satisfaction_value_batch_unit_id ON room_satisfaction_value (batch_unit_id);
CREATE INDEX IF NOT EXISTS idx_room_satisfaction_value_batch_id ON room_satisfaction_value (batch_id);
CREATE INDEX IF NOT EXISTS idx_room_satisfaction_value_dimension_id ON room_satisfaction_value (dimension_id);

-- ----------------------------
--  Indexes structure for table room_type_position
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_room_type_position_position_id ON room_type_position (position_id);
CREATE INDEX IF NOT EXISTS idx_room_type_position_room_type_id ON room_type_position (room_type_id);

-- ----------------------------
--  Indexes structure for table roomtype_diagram_partition
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_roomtype_diagram_partition_roomtype_id ON roomtype_diagram_partition (roomtype_id);
CREATE INDEX IF NOT EXISTS idx_roomtype_diagram_partition_diagram_id ON roomtype_diagram_partition (diagram_id);
CREATE INDEX IF NOT EXISTS idx_roomtype_diagram_partition_position_id ON roomtype_diagram_partition (position_id);

-- ----------------------------
--  Indexes structure for table check_item_guide
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_check_item_guide_item_id ON check_item_guide (item_id);

-- ----------------------------
--  Indexes structure for table project_contractor
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_project_contractor_proj_id ON project_contractor (proj_id);

-- ----------------------------
--  Indexes structure for table data_increment
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_data_increment_batch_id ON data_increment (batch_id);
CREATE INDEX IF NOT EXISTS idx_data_increment_batch_unit_id ON data_increment (batch_unit_id);
CREATE INDEX IF NOT EXISTS idx_data_increment_batch_room_id ON data_increment (batch_room_id);

-- ----------------------------
--  Indexes structure for table checkroom_problem_log
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_checkroom_problem_log_checkroom_problem_id ON checkroom_problem_log (checkroom_problem_id);

-- ----------------------------
--  Indexes structure for table checkroom_problem_operate_log
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_checkroom_problem_operate_log_checkroom_problem_id ON checkroom_problem_operate_log (checkroom_problem_id);

-- ----------------------------
--  Indexes structure for table room_design_change
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_room_design_change_room_id ON room_design_change (room_id);

-- ----------------------------
--  Indexes structure for table room_design_change_problem
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_room_design_change_problem_problem_id ON room_design_change_problem (checkroom_problem_id);

-- ----------------------------
--  Indexes structure for table fitment_checkitem_option
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_fitment_checkitem_option_proj_id_item_id ON fitment_checkitem_option (proj_id, item_id);

-- ----------------------------
--  Indexes structure for table fitment_style_checkitem
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_fitment_style_checkitem_fitment_style_id ON fitment_style_checkitem (fitment_style_id);

-- ----------------------------
--  Indexes structure for table room_fitment_checkitem
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_room_fitment_checkitem_room_id ON room_fitment_checkitem (room_id);

-- ----------------------------
--  Indexes structure for table chat_user
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_chat_user_user_id ON chat_user (user_id);

-- ----------------------------
--  Indexes structure for table chat_group_user
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_chat_group_user_group_id ON chat_group_user (group_id);

-- ----------------------------
--  Indexes structure for table user_company
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_user_company_user_id ON user_company (user_id);

-- ----------------------------
--  Indexes structure for table chat
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_chat_user_id ON chat (relation_id);



-- ----------------------------
--  Indexes structure for table batch_room_check_list_done
-- ----------------------------
CREATE INDEX IF NOT EXISTS idx_batch_room_check_list_done_ids ON batch_room_check_list_done (batch_room_id, position_id, item_id);



-- ********************************************** End Of 验房 sql ********************************************** --






-- ********************************************** Begin Of 客服 sql ********************************************** --

-- ****************************************************************************************** --
-- ！！！严重声明：该文件的最后一行，不能存在空行、回车符、换行符、sql 注释，否则在 iOS 上执行会报错 ！！！ --
-- ****************************************************************************************** --



-- ******** 主数据表 ******** --
-- ----------------------------
--  Table: t_user
--  说明: 用户表
-- ----------------------------
CREATE TABLE IF NOT EXISTS t_user
(
    id CHAR(36) NOT NULL,
    name VARCHAR(50)  DEFAULT '',
    mobile VARCHAR(20) DEFAULT '',
    PRIMARY KEY (id)
);

-- ----------------------------
--  Table: t_project
--  说明: 项目表
-- ----------------------------
CREATE TABLE IF NOT EXISTS t_project
(
    id CHAR(36) NOT NULL,
    name VARCHAR(50)  DEFAULT '',
    parent_id CHAR(36) DEFAULT '',
    corp_id CHAR(36) NOT NULL DEFAULT '',
    corp_name VARCHAR(50) NOT NULL DEFAULT '',
    is_end TINYINT(1) DEFAULT 0,
    order_sort VARCHAR(255) DEFAULT '',
    PRIMARY KEY (id)
);

-- -----------------------------------
-- Table:t_building
-- 说明: 楼栋表
-- -----------------------------------

CREATE TABLE IF NOT EXISTS t_building
(
    id CHAR(36) NOT NULL,
    name VARCHAR(50) DEFAULT '',
    full_name VARCHAR(255) DEFAULT '',
    proj_id CHAR(36) DEFAULT '',
    is_end TINYINT(1) DEFAULT 0,
    order_sort VARCHAR(255) DEFAULT '',
    product_ids TEXT DEFAULT '',
    PRIMARY KEY (id)
);

-- -----------------------------------
-- Table:t_building_unit
-- 说明: 单元表
-- -----------------------------------

CREATE TABLE IF NOT EXISTS t_building_unit
(
    id CHAR(36) NOT NULL,
    building_id CHAR(50) DEFAULT '',
    unit VARCHAR(10) DEFAULT '',
    full_name VARCHAR(255) DEFAULT '',
    sort INT(11) DEFAULT 0,
    product_ids TEXT DEFAULT '',
    PRIMARY KEY (id)
);

-- -----------------------------------
-- Table:t_building_floor
-- 说明: 楼层表
-- -----------------------------------

CREATE TABLE IF NOT EXISTS t_building_floor
(
    building_id CHAR(36) DEFAULT '',
    floor VARCHAR(10) DEFAULT '',
    sort INT(11) DEFAULT 0,
    PRIMARY KEY (building_id, floor)
);

-- -----------------------------------
-- Table:t_room
-- 说明: 房间表
-- -----------------------------------

CREATE TABLE IF NOT EXISTS t_room
(
    id CHAR(36) NOT NULL,
    building_id CHAR(36) DEFAULT '',
    proj_id CHAR(36) DEFAULT '',
    unit VARCHAR(10) DEFAULT '',
    floor VARCHAR(10) DEFAULT '',
    room_no VARCHAR(20) DEFAULT '',
    name VARCHAR(100) DEFAULT '',
    sort INT(8) DEFAULT 0,
    product_guid CHAR(36) DEFAULT '',
    product_name VARCHAR(50) DEFAULT '',
    PRIMARY KEY (id)
);

-- -----------------------------------
-- Table:t_parameter_value
-- 说明: 参数表
-- -----------------------------------

CREATE TABLE IF NOT EXISTS t_parameter_value
(
    id CHAR(36) NOT NULL,
    code VARCHAR(50) DEFAULT '',
    title VARCHAR(50) DEFAULT '',
    value TEXT DEFAULT '',
    sort INT(11) DEFAULT 0,
    PRIMARY KEY (id)
);

-- ---------------------------------------
-- Table:kf_time_stamp
-- 说明:时间戳表
-- ---------------------------------------

CREATE TABLE IF NOT EXISTS kf_time_stamp
(
    type VARCHAR(20) DEFAULT '',
    time_stamp VARCHAR(50) DEFAULT '',
    PRIMARY KEY (type)
);

-- 主数据索引 --

CREATE INDEX IF NOT EXISTS idx_t_building_proj_id ON t_building (proj_id);
CREATE INDEX IF NOT EXISTS idx_t_building_unit_building_id ON t_building_unit (building_id);
CREATE INDEX IF NOT EXISTS idx_t_building_floor_building_id ON t_building_floor (building_id);
CREATE INDEX IF NOT EXISTS idx_t_room_building_id ON t_room (building_id);
CREATE INDEX IF NOT EXISTS idx_t_room_unit ON t_room (unit);
CREATE INDEX IF NOT EXISTS idx_t_room_floor ON t_room (floor);
CREATE INDEX IF NOT EXISTS idx_t_parameter_value_code ON t_parameter_value (code);

-- 检查任务数控表 --

-- -----------------------------------
-- Table:kf_check_task_batch
-- 说明: 检查任务表
-- -----------------------------------
CREATE TABLE IF NOT EXISTS kf_check_task_batch
(
    id CHAR(36) NOT NULL,
    corp_id CHAR(36) DEFAULT '',
    proj_id CHAR(36) DEFAULT '',
    check_node_id CHAR(36) DEFAULT '',
    name VARCHAR(50) DEFAULT '',
    full_name VARCHAR(255) DEFAULT '',
    users_name VARCHAR(255) DEFAULT '',
    begin_time TEXT DEFAULT '',
    end_time TEXT DEFAULT '',
    complete_time TEXT DEFAULT '',
    begin_check_time TEXT DEFAULT '',
    status VARCHAR(10) DEFAULT '',
    PRIMARY KEY (id)
);

-- -----------------------------------
-- Table:kf_check_task_batch_scope
-- 说明: 检查任务范围表
-- -----------------------------------
CREATE TABLE IF NOT EXISTS kf_check_task_batch_scope
(
    id CHAR(36) NOT NULL,
    check_task_batch_id CHAR(36) DEFAULT '',
    proj_id CHAR(36) DEFAULT '',
    sub_proj_id CHAR(36) DEFAULT '',
    building_id CHAR(36) DEFAULT '',
    building_full_name VARCHAR(50) DEFAULT '',
    product_ids TEXT DEFAULT '',
    PRIMARY KEY (id)
);

-- -----------------------------------
-- Table:kf_check_task_batch_item_detail
-- 说明: 检查任务审查要点表
-- -----------------------------------
CREATE TABLE IF NOT EXISTS kf_check_task_batch_item_detail
(
    id CHAR(36) NOT NULL,
    check_task_batch_id CHAR(36) DEFAULT '',
    check_task_batch_item_id CHAR(36) DEFAULT '',
    item_detail_name VARCHAR(500) DEFAULT '',
    item_detail_score FLOAT DEFAULT 0,
    item_detail_sort TINYINT(1) DEFAULT 0,
    status VARCHAR(10) DEFAULT '',
    check_status VARCHAR(10) DEFAULT '',
    PRIMARY KEY (id)
);

-- -----------------------------------
-- Table:kf_check_task_batch_item
-- 说明: 检查任务检查项表
-- -----------------------------------
CREATE TABLE IF NOT EXISTS kf_check_task_batch_item
(
    id CHAR(36) NOT NULL,
    check_task_batch_id CHAR(36) DEFAULT '',
    check_item_order_code VARCHAR(50) DEFAULT '',
    check_item_name VARCHAR(50) DEFAULT '',
    check_item_full_name VARCHAR(500) DEFAULT '',
    PRIMARY KEY (id)
);

-- -----------------------------------
-- Table:kf_check_task_problem
-- 说明: 检查任务-问题表
-- -----------------------------------
CREATE TABLE IF NOT EXISTS kf_check_task_problem
(
    id CHAR(36) NOT NULL,
    code VARCHAR(50) DEFAULT '',
    corp_id CHAR(36) DEFAULT '',
    proj_id CHAR(36) DEFAULT '',
    check_task_batch_id CHAR(36) DEFAULT '',
    check_task_batch_item_id CHAR(36) DEFAULT '',
    check_task_batch_item_detail_id CHAR(36) DEFAULT '',
    master_problem_id CHAR(36) DEFAULT '',
    is_child_problem TINYINT(1) DEFAULT '',
    subject VARCHAR(500) DEFAULT '',
    scheme VARCHAR(500) DEFAULT '',
    risk_level CHAR(36) DEFAULT '',
    risk_level_title VARCHAR(50) DEFAULT '',
    risk_stage CHAR(36) DEFAULT '',
    risk_stage_title VARCHAR(50) DEFAULT '',
    risks_type CHAR(500) DEFAULT '',
    expect_pay_fee DECIMAL(18,2) DEFAULT 0,
    pay_fee DECIMAL(18,2) DEFAULT 0,
    confirm_status VARCHAR(10) DEFAULT '',
    status VARCHAR(10) DEFAULT '',
    register_id CHAR(36) DEFAULT '',
    register_name VARCHAR(50) DEFAULT '',
    register_time TEXT DEFAULT '',
    leader_id CHAR(36) DEFAULT '',
    leader_name VARCHAR(50) DEFAULT '',
    handler_id CHAR(36) DEFAULT '',
    handler_name VARCHAR(50) DEFAULT '',
    reviewer_id CHAR(36) DEFAULT '',
    reviewer_name VARCHAR(50) DEFAULT '',
    problem_deadline TEXT DEFAULT '',
    assign_time TEXT DEFAULT '',
    close_time TEXT DEFAULT '',
    expect_complete_time TEXT DEFAULT '',
    PRIMARY KEY (id)
);

-- -----------------------------------
-- Table:kf_check_task_problem_scope
-- 说明: 检查任务-问题-范围表
-- -----------------------------------
CREATE TABLE IF NOT EXISTS kf_check_task_problem_scope
(
    id CHAR(36) NOT NULL,
    check_task_problem_id CHAR(36) NOT NULL DEFAULT '',
    proj_id CHAR(36) NOT NULL DEFAULT '',
    sub_proj_id CHAR(36) NOT NULL DEFAULT '',
    building_id CHAR(36) NOT NULL DEFAULT '',
    room_id CHAR(36) NOT NULL DEFAULT '',
    PRIMARY KEY (id)
);

-- -----------------------------------
-- Table:kf_image
-- 说明: 图片上传表
-- -----------------------------------
CREATE TABLE IF NOT EXISTS kf_image
(
    id CHAR(36) NOT NULL,
    business_type VARCHAR(20) NOT NULL DEFAULT '',
    business_id CHAR(36) NOT NULL DEFAULT '',
    local_path VARCHAR(255) NOT NULL DEFAULT '',
    original_image_url VARCHAR(255) NOT NULL DEFAULT '',
    preview_image_url VARCHAR(255) NOT NULL DEFAULT '',
    PRIMARY KEY (id)
);

-- -----------------------------------
-- Table:kf_check_task_log
-- 说明: 图片上传表
-- -----------------------------------
CREATE TABLE IF NOT EXISTS kf_check_task_log
(
    id CHAR(36) NOT NULL,
    check_task_batch_id CHAR(36) NOT NULL DEFAULT '',
    check_task_batch_item_detail_id CHAR(36) NOT NULL DEFAULT '',
    check_task_problem_id CHAR(36) NOT NULL DEFAULT '',
    operation_type VARCHAR(20) NOT NULL DEFAULT '',
    remark VARCHAR(255) NOT NULL DEFAULT '',
    operator_id CHAR(36) NOT NULL DEFAULT '',
    operator_name VARCHAR(50) NOT NULL DEFAULT '',
    operation_time TEXT DEFAULT '',
    operation_terminal VARCHAR(20) DEFAULT 'app',
    PRIMARY KEY (id)
);

-- -----------------------------------
-- Table:kf_increment
-- 说明:增量表
-- -----------------------------------
CREATE TABLE IF NOT EXISTS kf_increment
(
    id CHAR(36) NOT NULL,
    business_type VARCHAR(20) NOT NULL DEFAULT '',
    business_id CHAR(36) NOT NULL DEFAULT '',
    operation VARCHAR(20) NOT NULL DEFAULT '',
    PRIMARY KEY (id)
);

-- ---------------- 2019-03-18 版本增加 ---------------------
-- -------------------------------------
-- Table:kf_check_task_batch_item_detail_person
-- 说明:检查要点-用户关联表
CREATE TABLE IF NOT EXISTS kf_check_task_batch_item_detail_person
(
    id CHAR(36) NOT NULL,
    check_task_batch_item_detail_id CHAR(36) NOT NULL DEFAULT '',
    check_task_batch_id CHAR(36) NOT NULL DEFAULT '',
    check_task_batch_item_id CHAR(36) NOT NULL DEFAULT '',
    department_id CHAR(36) NOT NULL DEFAULT '',
    user_id CHAR(36) NOT NULL DEFAULT '',
    user_name VARCHAR(50) NOT NULL DEFAULT '',
    status VARCHAR(10) DEFAULT '',
    item_detail_score FLOAT DEFAULT 0,
    result_change_times INT(11) DEFAULT 0,
    PRIMARY KEY (id)
);

-- ------------------ 20190729 版本增加 --------------------
-- ---------------------------------------------------
-- 说明:检查节点表
CREATE TABLE IF NOT EXISTS kf_check_node
(
    id CHAR(36) NOT NULL,
    name VARCHAR(50) NOT NULL DEFAULT '',
    sort TINYINT(1) NOT NULL DEFAULT 0,
    no_pass_rule VARCHAR(10) NOT NULL DEFAULT '',
    scoring_rule VARCHAR(10) NOT NULL DEFAULT '',
    is_batch TINYINT(1) NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);

-- ------------------ 20200825 版本增加 --------------------
-- ---------------------------------------------------
-- 说明:自定义表单，超级表单
CREATE TABLE IF NOT EXISTS mform_metadata
(
    key TEXT PRIMARY KEY NOT NULL,
    value TEXT
);
