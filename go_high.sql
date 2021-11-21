-- -------------------------------------------------------------
-- TablePlus 4.1.0(376)
--
-- https://tableplus.com/
--
-- Database: go_high
-- Generation Time: 2021-11-21 13:08:39.2320
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `age` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `name` varchar(255) NOT NULL,
  `is_active` tinyint(4) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_of_birth` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `wallet`;
CREATE TABLE `wallet` (
  `is_active` tinyint(4) NOT NULL,
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `total_amount` int(11) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_72548a47ac4a996cd254b08252` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `wallet_transaction`;
CREATE TABLE `wallet_transaction` (
  `is_active` tinyint(4) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `wallet_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `transaction_type` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=latin1;

INSERT INTO `user` (`age`, `first_name`, `last_name`, `id`) VALUES
(1, '1wewe', 'ewe', 10),
(10, 'test', 'test2', 11),
(10, 'test', 'test2', 12),
(10, 'test', 'test2', 13),
(10, 'test', 'test2', 14),
(10, 'test', 'test2', 15),
(10, 'test', 'test2', 16);

INSERT INTO `wallet` (`is_active`, `updated_at`, `id`, `user_id`, `total_amount`, `created_at`) VALUES
(1, '2021-11-19 05:36:37.184980', 7, 0, 10, '2021-11-19 05:36:37.184980'),
(1, '2021-11-19 05:37:51.171642', 10, 13, 10, '2021-11-19 05:37:51.171642'),
(1, '2021-11-19 05:52:49.000000', 11, 14, 500, '2021-11-19 05:37:58.388496'),
(1, '2021-11-21 07:37:03.857274', 13, 11, 10, '2021-11-21 07:37:03.857274');

INSERT INTO `wallet_transaction` (`is_active`, `id`, `user_id`, `wallet_id`, `amount`, `transaction_type`, `created_at`, `updated_at`) VALUES
(0, 23, 1, 1, 10, 'DEBIT', '2021-11-09 00:30:32.850120', '2021-11-09 00:30:32.877226'),
(0, 24, 1, 1, 10, 'DEBIT', '2021-11-09 00:30:32.850120', '2021-11-09 00:30:32.877226'),
(0, 25, 1, 1, 10, 'DEBIT', '2021-11-09 00:30:36.541348', '2021-11-09 00:30:36.541348'),
(0, 26, 1, 1, 10, 'DEBIT', '2021-11-09 00:30:37.280044', '2021-11-09 00:30:37.280044'),
(0, 27, 1, 1, 10, 'DEBIT', '2021-11-09 00:31:08.854917', '2021-11-09 00:31:08.854917'),
(0, 28, 1, 1, 10, 'DEBIT', '2021-11-18 16:29:41.665752', '2021-11-18 16:29:41.665752'),
(0, 29, 1, 1, 10, 'DEBIT', '2021-11-19 05:01:20.880939', '2021-11-19 05:01:20.880939'),
(0, 30, 0, 2, 10, 'CREDIT', '2021-11-19 05:31:36.785193', '2021-11-19 05:31:36.785193'),
(0, 31, 13, 10, 10, 'CREDIT', '2021-11-19 05:37:51.198163', '2021-11-19 05:37:51.198163'),
(0, 32, 14, 11, 10, 'CREDIT', '2021-11-19 05:37:58.410703', '2021-11-19 05:37:58.410703'),
(0, 33, 14, 11, 10, 'DEBIT', '2021-11-19 05:38:47.354346', '2021-11-19 05:38:47.354346'),
(0, 34, 14, 11, 100, 'CREDIT', '2021-11-19 05:48:38.893351', '2021-11-19 05:48:38.893351'),
(0, 35, 14, 11, 100, 'CREDIT', '2021-11-19 05:48:40.277625', '2021-11-19 05:48:40.277625'),
(0, 36, 14, 11, 100, 'CREDIT', '2021-11-19 05:49:33.561971', '2021-11-19 05:49:33.561971'),
(0, 37, 14, 11, 100, 'CREDIT', '2021-11-19 05:50:11.487826', '2021-11-19 05:50:11.487826'),
(0, 38, 14, 11, 100, 'CREDIT', '2021-11-19 05:52:49.286127', '2021-11-19 05:52:49.286127'),
(0, 39, 11, 13, 10, 'CREDIT', '2021-11-21 07:37:03.913958', '2021-11-21 07:37:03.913958');



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;