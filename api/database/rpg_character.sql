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
-- Table structure for table `character`
--

DROP TABLE IF EXISTS `character`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `character` (
  `character_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `description` varchar(255) NOT NULL,
  `refresh` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`character_id`),
  KEY `Character_fk0` (`user_id`),
  CONSTRAINT `Character_fk0` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `character`
--

LOCK TABLES `character` WRITE;
/*!40000 ALTER TABLE `character` DISABLE KEYS */;
INSERT INTO `character` VALUES (1,'johan','XD bohater',0,1),(2,'brutus','boh 2 ',0,1),(6,'polo1t28','s',3,1),(7,'polo1t28','s',3,1),(8,'polo1t28','s',3,1),(9,'polo1t28','s',3,1),(10,'polo1t28','s',3,1),(11,'polo1t28','s',3,1),(12,'polo1t28','s',3,1),(13,'polo1t28','s',3,1),(14,'polo1t28','s',3,1),(15,'polo1t28','s',3,1),(16,'polo1t28','s',3,1),(17,'polo1t28','s',3,1),(18,'polo1t28','s',3,1),(19,'polo1t28','s',3,1),(20,'GPS','2',3,1),(21,'GPS','2',3,1),(22,'GPS','2',3,1),(23,'GPS','2',3,1),(24,'GPS','2',3,1),(25,'GPS','2',3,1),(26,'GPS','2',3,1),(27,'GPS','2',3,1),(28,'GPS','2',3,1),(29,'GPS','2',3,1),(30,'GPS','2',3,1),(31,'polo1t28','s',3,1),(32,'polo1t28','s',3,1),(33,'polo1t28','s',3,1),(34,'polo1t28','s',3,1),(35,'polo1t28','s',3,1),(36,'polo1t28','s',3,1),(37,'polo1t28','s',3,1),(38,'polo1t28','s',3,1),(39,'polo1t28','s',3,1),(40,'polo1t28','s',3,1),(41,'polo1t28','s',3,1),(42,'polo1t28','s',3,1),(43,'polo1t28','s',3,1),(44,'polo1t28','s',3,1),(45,'polo1t28','s',3,1),(46,'polo1t28','s',3,1),(47,'polo1t28','s',3,1),(48,'polo1t28','s',3,1),(49,'polo1t28','s',3,1),(50,'polo1t28','s',3,1),(51,'polo1t28','s',3,1),(52,'polo1t28','s',3,1),(53,'polo1t28','s',3,1),(54,'polo1t28','s',3,1),(55,'wqeqweqw','ewqeqw',3,1),(56,'wqeqweqw','ewqeqw',3,1),(57,'wqeqweqw','ewqeqw',3,1),(58,'polo1t28','ewq',3,1),(59,'polo1t28','ewq',3,1),(60,'polo1t28','ewq',3,1),(61,'polo1t28','ewq',3,1),(62,'polo1t28','ewq',3,1),(63,'polo1t28','ewq',3,1),(64,'polo1t28','ewq',3,1),(65,'polo1t28','ewq',3,1),(66,'polo1t28','ewq',3,1);
/*!40000 ALTER TABLE `character` ENABLE KEYS */;
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
