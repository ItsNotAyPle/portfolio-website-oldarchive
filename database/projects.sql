USE `portfolio-website`;
CREATE TABLE IF NOT EXISTS `projects` (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `github_url` TEXT NOT NULL,
  `languages` VARCHAR(50) NOT NULL,
  `date_created` DATETIME DEFAULT NOW() NOT NULL
);
