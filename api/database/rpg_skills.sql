CREATE DATABASE  IF NOT EXISTS `rpg` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `rpg`;
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: rpg
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `skills`
--

DROP TABLE IF EXISTS `skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skills` (
  `skills_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `value` int NOT NULL,
  `character_id` int NOT NULL,
  PRIMARY KEY (`skills_id`),
  KEY `skills_fk0` (`character_id`),
  CONSTRAINT `skills_fk0` FOREIGN KEY (`character_id`) REFERENCES `character` (`character_id`)
) ENGINE=InnoDB AUTO_INCREMENT=171 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skills`
--

LOCK TABLES `skills` WRITE;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
INSERT INTO `skills` VALUES (1,'1',4,8),(2,'2',3,8),(3,'3',3,8),(4,'4',2,8),(5,'5',2,8),(6,'6',2,8),(7,'7',1,8),(8,'8',1,8),(9,'9',1,8),(10,'0',1,8),(11,'1',1,19),(12,'2',2,19),(13,'312',2,19),(14,'2',3,19),(15,'1',3,19),(16,'2',3,19),(17,'1',4,19),(18,'2',4,19),(19,'3',4,19),(20,'4',4,19),(21,'wq',1,20),(22,'we',2,20),(23,'e',2,20),(24,'e',3,20),(25,'w',3,20),(26,'q',3,20),(27,'w',4,20),(28,'w',4,20),(29,'w',4,20),(30,'we',4,20),(31,'wq',1,21),(32,'we',2,21),(33,'e',2,21),(34,'e',3,21),(35,'w',3,21),(36,'q',3,21),(37,'w',4,21),(38,'w',4,21),(39,'w',4,21),(40,'we',4,21),(41,'wq',1,22),(42,'we',2,22),(43,'e',2,22),(44,'e',3,22),(45,'w',3,22),(46,'q',3,22),(47,'w',4,22),(48,'w',4,22),(49,'w',4,22),(50,'we',4,22),(51,'wq',1,23),(52,'we',2,23),(53,'e',2,23),(54,'e',3,23),(55,'w',3,23),(56,'q',3,23),(57,'w',4,23),(58,'w',4,23),(59,'w',4,23),(60,'we',4,23),(61,'wq',1,24),(62,'we',2,24),(63,'e',2,24),(64,'e',3,24),(65,'w',3,24),(66,'q',3,24),(67,'w',4,24),(68,'w',4,24),(69,'w',4,24),(70,'we',4,24),(71,'wq',1,25),(72,'we',2,25),(73,'e',2,25),(74,'e',3,25),(75,'w',3,25),(76,'q',3,25),(77,'w',4,25),(78,'w',4,25),(79,'w',4,25),(80,'we',4,25),(81,'wq',1,26),(82,'we',2,26),(83,'e',2,26),(84,'e',3,26),(85,'w',3,26),(86,'q',3,26),(87,'w',4,26),(88,'w',4,26),(89,'w',4,26),(90,'we',4,26),(91,'wq',1,27),(92,'we',2,27),(93,'e',2,27),(94,'e',3,27),(95,'w',3,27),(96,'q',3,27),(97,'w',4,27),(98,'w',4,27),(99,'w',4,27),(100,'we',4,27),(101,'wq',1,28),(102,'we',2,28),(103,'e',2,28),(104,'e',3,28),(105,'w',3,28),(106,'q',3,28),(107,'w',4,28),(108,'w',4,28),(109,'w',4,28),(110,'we',4,28),(111,'wq',1,29),(112,'we',2,29),(113,'e',2,29),(114,'e',3,29),(115,'w',3,29),(116,'q',3,29),(117,'w',4,29),(118,'w',4,29),(119,'w',4,29),(120,'we',4,29),(121,'wq',1,30),(122,'we',2,30),(123,'e',2,30),(124,'e',3,30),(125,'w',3,30),(126,'q',3,30),(127,'w',4,30),(128,'w',4,30),(129,'w',4,30),(130,'we',4,30),(131,'12',1,57),(132,'23',2,57),(133,'23',2,57),(134,'2',3,57),(135,'2',3,57),(136,'2',3,57),(137,'2',4,57),(138,'2',4,57),(139,'2',4,57),(140,'2',4,57),(141,'32',1,64),(142,'1',2,64),(143,'2',2,64),(144,'3',3,64),(145,'4',3,64),(146,'123',3,64),(147,'s',4,64),(148,'d',4,64),(149,'f',4,64),(150,'5',4,64),(151,'32',1,65),(152,'1',2,65),(153,'2',2,65),(154,'3',3,65),(155,'4',3,65),(156,'123',3,65),(157,'s',4,65),(158,'d',4,65),(159,'f',4,65),(160,'5',4,65),(161,'32',1,66),(162,'1',2,66),(163,'2',2,66),(164,'3',3,66),(165,'4',3,66),(166,'123',3,66),(167,'s',4,66),(168,'d',4,66),(169,'f',4,66),(170,'5',4,66);
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-31 10:40:05
