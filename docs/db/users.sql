
CREATE TABLE `users` (
	`id` BINARY(16) NOT NULL PRIMARY KEY COMMENT "UUIDv7 to binary",
	`username` VARCHAR(100) NOT NULL,
	`password` VARCHAR(500) NOT NULL,
	`role` VARCHAR(30) DEFAULT NULL,
	`first_name` VARCHAR(100) DEFAULT NULL,
	`middle_name` VARCHAR(100) DEFAULT NULL,
	`last_name` VARCHAR(100) DEFAULT NULL,
	`email` VARCHAR(255) NOT NULL,
    `age` TINYINT UNSIGNED DEFAULT NULL,
    `sex` TINYINT DEFAULT NULL COMMNET "M: 0, F: 1",
	`lang` 	CHAR(2) NOT NULL,
	`country_code` CHAR(2) NOT NULL,
	`created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
	`updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
	
CREATE TABLE `addresses` (
    `id` BINARY(16) NOT NULL PRIMARY KEY,
    `user_id` BINARY(16) NOT NULL COMMENT "Reference user",
    `postal_code` VARCHAR(20) DEFAULT NULL,
	`state_or_region` VARCHAR(20) DEFAULT NULL,
	`city` VARCHAR(200) DEFAULT NULL,
	`address_line1` VARCHAR(255) DEFAULT NULL, -- Building name, room number, etc.
	`address_line2` VARCHAR(255) DEFAULT NULL, -- Building name, room number, etc.
	`raw_address` TEXT DEFAULT NULL COMMENT "Inputted raw address",
	`formatted_address` TEXT DEFAULT NULL COMMENT "Address for display",
    `address_lon` DOUBLE DEFAULT NULL,
    `address_lat` DOUBLE DEFAULT NULL,
	`created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `phones` (
  id BINARY(16) PRIMARY KEY,
  user_id BINARY(16) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,      -- Stored in E.164 format (e.g., 819012345678)
  country_code CHAR(2) NOT NULL,          -- ISO 3166-1 alpha-2 (e.g., 'JP')
  `type` VARCHAR(10) DEFAULT NULL COMMENT "home, mobile etc...",
  is_primary BOOLEAN DEFAULT FALSE,
  is_verified BOOLEAN DEFAULT FALSE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)ENGINE=InnoDB DEFAUTL CHARSET=uft8mb4;

CREATE TABLE `profiles` (
    `id` BINARY(16) NOT NULL PRIMARY KEY,
    `user_id` BINARY(16) NOT NULL COMMENT "Reference user",
    `introduction` DEFAULT NULL TEXT,
    `image_url` DEFAULT NULL VARCHAR(300)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;