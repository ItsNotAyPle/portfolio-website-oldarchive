USE `portfolio-website`;
CREATE TABLE IF NOT EXISTS `blogs` (
  `id` INTEGER AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `content` TEXT NOT NULL,
  `datetime_created` DATETIME DEFAULT NOW()
)
