-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: gami
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carreras`
--

DROP TABLE IF EXISTS `carreras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carreras` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carreras`
--

LOCK TABLES `carreras` WRITE;
/*!40000 ALTER TABLE `carreras` DISABLE KEYS */;
INSERT INTO `carreras` VALUES (1,'Tecnicatua en Análisis de Sistemas'),(2,'Tecnicatura en Administración de Empresas'),(3,'Profesorado en Educación Inicial'),(4,'Profesorado en Educación Superior');
/*!40000 ALTER TABLE `carreras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inscripciones`
--

DROP TABLE IF EXISTS `inscripciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inscripciones` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Id_alumno` int DEFAULT NULL,
  `Id_materia` int DEFAULT NULL,
  `usu_alta` varchar(100) DEFAULT NULL,
  `fe_alta` datetime DEFAULT NULL,
  `usu_mod` varchar(100) DEFAULT NULL,
  `fe_mod` datetime DEFAULT NULL,
  `usu_baja` varchar(100) DEFAULT NULL,
  `fe_baja` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `Id_alumno` (`Id_alumno`),
  KEY `Id_materia` (`Id_materia`),
  CONSTRAINT `inscripciones_ibfk_1` FOREIGN KEY (`Id_alumno`) REFERENCES `usuarios` (`Id`),
  CONSTRAINT `inscripciones_ibfk_2` FOREIGN KEY (`Id_materia`) REFERENCES `materias` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inscripciones`
--

LOCK TABLES `inscripciones` WRITE;
/*!40000 ALTER TABLE `inscripciones` DISABLE KEYS */;
INSERT INTO `inscripciones` VALUES (1,4,1,'gfulguera','2025-06-16 00:17:45','gfulguera','2025-06-16 22:53:42','gfulguera','2025-06-16 22:54:10'),(2,4,5,'gfulguera','2025-06-16 00:28:21',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `inscripciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materias`
--

DROP TABLE IF EXISTS `materias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materias` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(100) DEFAULT NULL,
  `Carrera` int DEFAULT NULL,
  `usu_alta` varchar(100) DEFAULT NULL,
  `fe_alta` datetime DEFAULT NULL,
  `usu_mod` varchar(100) DEFAULT NULL,
  `fe_mod` datetime DEFAULT NULL,
  `usu_baja` varchar(100) DEFAULT NULL,
  `fe_baja` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `Carrera` (`Carrera`),
  CONSTRAINT `materias_ibfk_1` FOREIGN KEY (`Carrera`) REFERENCES `carreras` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materias`
--

LOCK TABLES `materias` WRITE;
/*!40000 ALTER TABLE `materias` DISABLE KEYS */;
INSERT INTO `materias` VALUES (1,'Base de Datos I',1,'prueba','2025-06-15 01:34:33',NULL,NULL,NULL,NULL),(2,'Sociologia',3,'prueba','2025-06-15 01:36:06',NULL,NULL,NULL,NULL),(4,'Sociologia II',3,'prueba','2025-06-15 01:37:16','gfulguera','2025-06-16 23:25:36',NULL,NULL),(5,'Programación I',1,'gfulguera','2025-06-16 00:27:54',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `materias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Administrador'),(2,'Coordinador'),(3,'Alumno');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(100) DEFAULT NULL,
  `Mail` varchar(100) DEFAULT NULL,
  `Username` varchar(100) DEFAULT NULL,
  `Password` varchar(200) DEFAULT NULL,
  `Rol` int DEFAULT NULL,
  `usu_alta` varchar(100) DEFAULT NULL,
  `fe_alta` datetime DEFAULT NULL,
  `usu_mod` varchar(100) DEFAULT NULL,
  `fe_mod` datetime DEFAULT NULL,
  `usu_baja` varchar(100) DEFAULT NULL,
  `fe_baja` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Username` (`Username`),
  KEY `Rol` (`Rol`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`Rol`) REFERENCES `roles` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Yop','a@a.com','gfulguera','$2b$10$IlSJILz5R0.kXIFTGlVW4.Ahe.572dPyDr9LJVpq2j6sbUfxMH8xe',1,'localhost','2025-06-10 15:02:57',NULL,NULL,NULL,NULL),(4,'Julio Perez','julioperez@hotmail.com','juperez','$2b$10$BjmsikhZh91wUbpir0u5N.Ptjt5GIjk9LcR.9/1aNRgSVwdbFd8NG',3,'prueba','2025-06-14 22:25:01','gfulguera','2025-06-16 22:37:15',NULL,NULL),(6,'Juan Perez','juan@hotmail.com','jperez','$2b$10$IW8danZtzzjqGlLa7zANhuLMqKBmw57iQAFmoCDWuDyM1Xj4woX4u',3,'prueba','2025-06-14 22:25:36','jperez','2025-06-16 19:09:52','gfulguera','2025-06-15 00:58:59'),(8,'Cristian Sosa','cris@gmail.com','csosa','$2b$10$cj6CfBv3Dzilfd5s/Ec0C.9BWLoes7sb1YM7QE1FBjkWtyUsSytIa',3,'prueba','2025-06-15 00:49:47',NULL,NULL,'gfulguera','2025-06-15 00:59:25'),(9,'Cristina Sosa','cris1988@gmail.com.ar','cris','$2b$10$C2DMfM1Vv.vNzmUjlG6Cu.BZNNWma.vqT3n/9Vb/jZf1TAJOGF216',3,'gfulguera','2025-06-15 00:51:18','gfulguera','2025-06-16 18:13:07',NULL,NULL),(10,'Julieta Venegas','julietavenegas@outlook.com.ar','juliVenegas','$2b$10$NcqzdhGYqHOZPfIXsIH/m.47oKZUeygUJEMfRcH3LvGcWPr4XHs2G',3,'gfulguera','2025-06-16 18:06:25',NULL,NULL,NULL,NULL),(15,'Luis Suarez','lucho@gmail.com','lusuarez','$2b$10$gmB0jumKR8QlWs/8MhZlTOQ2DY6v/AsZE2u7bw8PyOR/Zx41PGAFe',1,'gfulguera','2025-06-16 23:48:55',NULL,NULL,NULL,NULL),(16,'Maria Sust','mar1990@gmail.com','maria','$2b$10$UMPJvCLdZH0z/yiTxLreh.Q4k9JTvyGKHPIshXOvm3WCUWth1LFFO',2,'gfulguera','2025-06-17 00:14:20',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-17 20:55:35
