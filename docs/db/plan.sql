


CREATE TABLE `plan` (
    `id` BINARY(16) NOT NULL PRIMARY KEY,
    `user_id` BINARY(16) NOT NULL COMMENT "References users table",

)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



CREATE TABLE `spot`

-- TODO:
CREATE TABLE `for search`