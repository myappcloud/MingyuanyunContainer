create table IF NOT EXISTS msg_config
(
   user_id                   text PRIMARY KEY not null,
   table_name    text COLLATE NOCASE
);

create table IF NOT EXISTS version
(
   version              text
);