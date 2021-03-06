-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: bookaroo
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authors` (
  `author_id` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`author_id`),
  UNIQUE KEY `id_UNIQUE` (`author_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` VALUES (1,'author1');
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bag_items`
--

DROP TABLE IF EXISTS `bag_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bag_items` (
  `bag_id` int NOT NULL,
  `book_id` int NOT NULL,
  `quantity` int NOT NULL,
  `isbn` varchar(45) NOT NULL,
  `publisher_id` varchar(45) NOT NULL,
  KEY `book_id_idx` (`book_id`),
  KEY `book_isbn_idx` (`isbn`),
  KEY `publisher_id_idx` (`publisher_id`),
  KEY `bag_idx` (`bag_id`),
  CONSTRAINT `bag` FOREIGN KEY (`bag_id`) REFERENCES `bags` (`bag_id`),
  CONSTRAINT `book_id` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`),
  CONSTRAINT `book_isbn` FOREIGN KEY (`isbn`) REFERENCES `books` (`isbn`),
  CONSTRAINT `publisher_id` FOREIGN KEY (`publisher_id`) REFERENCES `publishers` (`abn`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bag_items`
--

LOCK TABLES `bag_items` WRITE;
/*!40000 ALTER TABLE `bag_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `bag_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bags`
--

DROP TABLE IF EXISTS `bags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bags` (
  `bag_id` int NOT NULL,
  `user_id` int NOT NULL,
  `username` varchar(45) NOT NULL,
  PRIMARY KEY (`bag_id`),
  UNIQUE KEY `bag_id_UNIQUE` (`bag_id`),
  KEY `user_id_idx` (`user_id`,`username`),
  CONSTRAINT `users` FOREIGN KEY (`user_id`, `username`) REFERENCES `users` (`id`, `username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bags`
--

LOCK TABLES `bags` WRITE;
/*!40000 ALTER TABLE `bags` DISABLE KEYS */;
/*!40000 ALTER TABLE `bags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `isbn` varchar(45) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(200) DEFAULT NULL,
  `author_id` int DEFAULT NULL,
  `publisher_id` int DEFAULT NULL,
  `abn` varchar(45) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`isbn`,`id`),
  UNIQUE KEY `isbn_UNIQUE` (`isbn`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `id_idx` (`author_id`),
  CONSTRAINT `author_id` FOREIGN KEY (`author_id`) REFERENCES `authors` (`author_id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES ('0123456789',2,'Book 2',1,1,'1',NULL,NULL),('0261103253',35,' Lord of the Rings',NULL,NULL,NULL,' J.R.R. Tolkien','Fiction'),('1408855895',37,'Harry Potter and the Sorcerer\'s Stone',NULL,NULL,NULL,'J.K. Rowling','Fiction'),('9780241562994',3,'THE FORTUNE MEN',NULL,NULL,NULL,'Nadifa Mohamed','Fiction'),('9780241562995',12,'THE  MEN',NULL,NULL,NULL,'Nadifa Mohamed','Fiction'),('9780395453896',39,'Silent Spring',NULL,NULL,NULL,'Rachel Carson','Non-Fiction'),('9781491954591',41,'Learning React: Functional Web Development with React and Redux',NULL,NULL,NULL,'Alex Banks','Education'),('9781786468208',42,'Learning Spring Boot 2.0: Simplify the Development of Lightning Fast Applications Based on Microservices and Reactive Programming',NULL,NULL,NULL,'Greg L. Turnquist','Education'),('9783644008618',40,'A Brief History of Time',NULL,NULL,NULL,'Stephen Hawking','Non-Fiction');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(45) NOT NULL,
  `id` bigint NOT NULL,
  PRIMARY KEY (`category_id`),
  UNIQUE KEY `category_id_UNIQUE` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (4,'Fiction',1),(5,'Non-Fiction',2),(6,'Education',3);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_books`
--

DROP TABLE IF EXISTS `category_books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category_books` (
  `isbn` varchar(45) NOT NULL,
  `category_id` int NOT NULL,
  KEY `isbn_idx` (`isbn`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`),
  CONSTRAINT `isbn` FOREIGN KEY (`isbn`) REFERENCES `books` (`isbn`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_books`
--

LOCK TABLES `category_books` WRITE;
/*!40000 ALTER TABLE `category_books` DISABLE KEYS */;
/*!40000 ALTER TABLE `category_books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publishers`
--

DROP TABLE IF EXISTS `publishers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publishers` (
  `abn` varchar(45) NOT NULL,
  `user_id` int NOT NULL,
  `username` varchar(45) NOT NULL,
  `shop_name` varchar(45) NOT NULL,
  PRIMARY KEY (`abn`,`user_id`,`username`),
  UNIQUE KEY `abn_UNIQUE` (`abn`),
  KEY `id_idx` (`user_id`),
  KEY `username_idx` (`username`),
  CONSTRAINT `id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `username` FOREIGN KEY (`username`) REFERENCES `users` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publishers`
--

LOCK TABLES `publishers` WRITE;
/*!40000 ALTER TABLE `publishers` DISABLE KEYS */;
/*!40000 ALTER TABLE `publishers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `review_id` int NOT NULL,
  `comment` varchar(45) DEFAULT NULL,
  `rating` int NOT NULL,
  `isbn` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `date_added` datetime NOT NULL,
  PRIMARY KEY (`review_id`),
  UNIQUE KEY `review_id_UNIQUE` (`review_id`),
  KEY `books_idx` (`isbn`),
  KEY `user_username_idx` (`username`),
  CONSTRAINT `review_isbn` FOREIGN KEY (`isbn`) REFERENCES `books` (`isbn`),
  CONSTRAINT `review_username` FOREIGN KEY (`username`) REFERENCES `users` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `fullname` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `phone` int DEFAULT NULL,
  `account_type` varchar(45) NOT NULL,
  `status` tinyint NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `password` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`,`username`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (4,'example2@email.com','Example name anem',NULL,NULL,'public',1,'2021-09-14 00:23:15','2021-09-14 00:23:15','$2a$10$DkMhJKQMHKypYAG0WPJZ3u3fJlEUSuCb2molZpVU5w4n0thsuxu3.',NULL),(5,'example@gmail.com','name name',NULL,NULL,'public',1,'2021-09-14 00:32:45','2021-09-14 00:32:45','$2a$10$8VW8ixyq6hkiXb1nnxFaU.GsBS7Is1dSI2PFH8RWWeavlwjfE9dn2',NULL),(7,'example3@gmail.com','Example user 3',NULL,NULL,'public',1,'2021-09-16 23:09:52','2021-09-16 23:09:52','$2a$10$NZcH./Li5HJxhLR.bujQLO3T0uY9kPIEzZQ23QSqt47w2L1HjubMK',NULL),(8,'publisher@email.com','Publisher',NULL,NULL,'shop',1,'2021-09-17 01:38:10','2021-09-17 01:38:10','$2a$10$khrUyBlmAOUmL6xIaWLTbO0jlu5QTB4x/AamMde8wBQlZ0w4rMhiO',NULL),(9,'admin@mail.com','Admin',NULL,NULL,'admin',1,'2021-09-17 02:00:30','2021-09-17 02:00:30','$2a$10$yO1oo3d/BzNIBHh0FTBVNOTNraiN3nbVUkDTX4Q.V2kCYyN28B6DS',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-17  2:04:28
