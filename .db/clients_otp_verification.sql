-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 19, 2021 at 04:35 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `polywizz_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `clients_otp_verification`
--

CREATE TABLE `clients_otp_verification` (
  `id` int(11) NOT NULL,
  `id_number` varchar(20) NOT NULL,
  `client_id` varchar(20) NOT NULL,
  `otp_code` varchar(4) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `clients_otp_verification`
--

INSERT INTO `clients_otp_verification` (`id`, `id_number`, `client_id`, `otp_code`, `created_at`, `updated_at`) VALUES
(2, '034212167', '700425', '8819', '2021-10-18 20:17:32', '2021-10-18 20:17:32'),
(3, '032256562', '700336', '5511', '2021-10-18 20:48:56', '2021-10-18 20:48:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clients_otp_verification`
--
ALTER TABLE `clients_otp_verification`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clients_otp_verification`
--
ALTER TABLE `clients_otp_verification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
