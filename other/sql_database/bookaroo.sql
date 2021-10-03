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
  KEY `publisher_id_idx` (`publisher_id`),
  KEY `bag_idx` (`bag_id`),
  CONSTRAINT `bag` FOREIGN KEY (`bag_id`) REFERENCES `bags` (`bag_id`),
  CONSTRAINT `book_id` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`),
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
  `isbn` varchar(45) DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(200) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `book_status` varchar(45) NOT NULL,
  `owner_user_id` varchar(255) DEFAULT NULL,
  `price` float NOT NULL,
  `quantity` int NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES ('9780241562994',3,'THE FORTUNE MEN','Nadifa Mohamed','Fiction','used','5',12,1,'Mahmood Mattan is a fixture in Cardiff\'s Tiger Bay, 1952, which bustles with Somali and West Indian sailors, Maltese businessmen and Jewish families. He is a father, chancer, petty criminal. He is a smooth-talker with rakish charm and an eye for a good game. He is many things, but he is not a murderer.'),('0261103253',35,' Lord of the Rings',' J.R.R. Tolkien','Fiction','used','5',22,3,'The future of civilization rests in the fate of the One Ring, which has been lost for centuries. Powerful forces are unrelenting in their search for it. But fate has placed it in the hands of a young Hobbit named Frodo Baggins (Elijah Wood), who inherits the Ring and steps into legend. A daunting task lies ahead for Frodo when he becomes the Ringbearer - to destroy the One Ring in the fires of Mount Doom where it was forged.'),('1408855895',37,'Harry Potter and the Sorcerer\'s Stone','J.K. Rowling','Fiction','used','5',22,2,'Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.'),('9780395453896',39,'Silent Spring','Rachel Carson','Non-Fiction','used','5',6,3,'Silent Spring is considered the book that started the global grassroots environmental movement. Released in 1962, it focuses on the negative effects of chemical pesticides that were, at the time, a large part of US agriculture. Rachel Carson and her work began initiating a shift in global environmental consciousness.'),('9783644008618',40,'A Brief History of Time','Stephen Hawking','Non-Fiction','used','5',16,2,'A Brief History of Time: From the Big Bang to Black Holes is a book on theoretical cosmology by English physicist Stephen Hawking. It was first published in 1988. Hawking wrote the book for readers who had no prior knowledge of physics and people who are interested in learning something new about interesting subjects.'),('9781491954591',41,'Learning React: Functional Web Development with React and Redux','Alex Banks','Education','used','5',68,1,'If you want to learn how to build efficient user interfaces with React, this is your book. Authors Alex Banks and Eve Porcello show you how to create UIs with this small JavaScript library that can deftly display data changes on large-scale, data-driven websites without page reloads. Along the way, you\'ll learn how to work with functional programming and the latest ECMAScript features.'),('9781786468208',42,'Learning Spring Boot 2.0: Simplify the Development of Lightning Fast Applications Based on Microservices and Reactive Programming','Greg L. Turnquist','Education','used','5',82,3,'Use Spring Boot to build lightning-fast apps About This Book - Get up to date with the defining characteristics of Spring Boot 2.0 in Spring Framework 5 - Learn to perform Reactive programming with SpringBoot - Learn about developer tools, AMQP messaging, WebSockets, security, MongoDB data access, REST, and more Who This Book Is For This book is designed for both novices and experienced Spring developers'),('978024156295',43,'DUNE','Frank Herbert','Fiction','used','4',14,1,'Dune is a 1965 science-fiction novel by American author Frank Herbert, originally published as two separate serials in Analog magazine. It tied with Roger Zelazny\'s This Immortal for the Hugo Award in 1966, and it won the inaugural Nebula Award for Best Novel.'),('0375432302',44,'The Da Vinci Code','Dan Brown','Fiction','used','5',25,1,'While in Paris on business, Harvard symbologist Robert Langdon receives an urgent late-night phone call: the elderly curator of the Louvre has been murdered inside the museum. Near the body, police have found a baffling cipher. While working to solve the enigmatic riddle, Langdon is stunned to discover it leads to a trail of clues hidden in the works of Da Vinci -- clues visible for all to see -- yet ingeniously disguised.');
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
  `book_id` int NOT NULL,
  `category_id` int NOT NULL,
  KEY `isbn_idx` (`book_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `boook_id` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`),
  CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`)
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
  `id` int NOT NULL AUTO_INCREMENT,
  `comment` varchar(45) DEFAULT NULL,
  `rating` int NOT NULL,
  `book_id` int NOT NULL,
  `username` varchar(45) NOT NULL,
  `date_added` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `user_username_idx` (`username`),
  KEY `book_id_idx` (`book_id`),
  CONSTRAINT `review_book` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`),
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

-- Dump completed on 2021-09-28 14:47:20