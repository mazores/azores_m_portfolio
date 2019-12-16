-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 16, 2019 at 09:19 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_portitem`
--

CREATE TABLE `tbl_portitem` (
  `ID` int(11) NOT NULL,
  `Title` varchar(100) NOT NULL,
  `Category` varchar(200) NOT NULL,
  `FeatureImage` varchar(80) NOT NULL,
  `Hero` varchar(80) NOT NULL,
  `Description` varchar(1000) NOT NULL,
  `Image1` varchar(100) NOT NULL,
  `Image2` varchar(100) NOT NULL,
  `Image3` varchar(100) NOT NULL,
  `Image4` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_portitem`
--

INSERT INTO `tbl_portitem` (`ID`, `Title`, `Category`, `FeatureImage`, `Hero`, `Description`, `Image1`, `Image2`, `Image3`, `Image4`) VALUES
(1, 'Glossier Commercial', '3D Animation, Motion Graphics', 'glossier-feat.png', 'glossier-ad.mp4', 'I decided to create an advertisement for Glossier that features their make up set.<br><br>Using their branding and video style, I created an ad that sticks to their font, black and pink colors, and straightforward copy.', 'glossier1.png', 'glossier2.png', 'glossier3.png', 'glossier4.png'),
(2, 'Stories from the Grain', 'Graphic Design, Motion Graphics, Web Design, Wordpress', 'grain-feat.png', 'grain-vid.mp4', 'An online learning material that aims to strengthen the Ifugao\'s Indigenous Peoples Education curriculum, whose goal is to preserve the Ifugao culture through education. The learning material is a website that contains different infographic videos.', 'grain1.png', 'grain2.png', 'grain3.png', 'grain4.png'),
(3, 'Araw-Araw Desserts', 'Web Design, Photography', 'araw-feat.png', 'araw-web.mp4', 'Araw-Araw Desserts is a fictional dessert shop built on the idea of home being the idea of the owner\'s grandmother\'s chocolate chip cookies and cupcakes being baked everyday. I decided to brand the website based on warm but bright colors to evoke the feeling of home and made use of food photography to entice the user towards the product even more.', 'araw1.jpg', 'araw2.png', 'araw3.png', 'araw4.png'),
(4, 'Yellow Cab App Design', 'Graphic Design, UX/UI', 'yellowcab-feat.png', 'yellowcab.mp4', 'Tasked to create a branded UI/UX plan for a mobile app, I decided to focus on Yellow Cab Pizza which is a local Filipino pizza chain. ', 'yellowcab1.png', 'yellowcab2.png', 'yellowcab3.png', 'yellowcab4.png'),
(5, 'Thermal Security', '3D Animation, Motion Graphics', 'thermo-feat.png', 'thermo-vid.mp4', 'As part of a 24-hour project, I was tasked to design, model, and animate the video for a smart thermostat. To create a product that\'s different from the competition, we decided on creating both a white and wooden product that will match more homes\' interior designs.', 'thermo1.png', 'thermo2.png', 'thermo3.png', 'thermo4.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_portitem`
--
ALTER TABLE `tbl_portitem`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_portitem`
--
ALTER TABLE `tbl_portitem`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
