


CREATE TABLE `plan` (
    `id` BINARY(16) NOT NULL PRIMARY KEY,
    `user_id` BINARY(16) NOT NULL COMMENT "References users table",
    `title` VARCHAR(100) NOT NULL,
    `departure` VARCHAR(100) NOT NULL,
    `destination` VARCHAR(100 NOT NULL,
    `start_at` DATETIME DEFAULT CURRENT_DATETIME,
    `end_at` DATETIME DEFAULT CURRENT_DATETIME,
    `duration` tinyint NOT NULL,

)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



CREATE TABLE `spot`

-- TODO:
CREATE TABLE `for search`