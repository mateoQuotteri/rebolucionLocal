-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema rebolucion_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema rebolucion_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `rebolucion_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `rebolucion_db` ;

-- -----------------------------------------------------
-- Table `rebolucion_db`.`teachers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rebolucion_db`.`teachers` (
  `email` VARCHAR(100) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `rebolucion_db`.`modules`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rebolucion_db`.`modules` (
  `title` VARCHAR(100) NOT NULL,
  `units` INT NOT NULL,
  `shortDescription` VARCHAR(255) NOT NULL,
  `difficulty` VARCHAR(255) NOT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  `image` TEXT NULL DEFAULT NULL,
  `video` VARCHAR(255) NOT NULL,
  `id_teachers` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_modules_teachers1_idx` (`id_teachers` ASC) VISIBLE,
  CONSTRAINT `fk_modules_teachers1`
    FOREIGN KEY (`id_teachers`)
    REFERENCES `rebolucion_db`.`teachers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 42
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_croatian_ci;


-- -----------------------------------------------------
-- Table `rebolucion_db`.`units`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rebolucion_db`.`units` (
  `title` VARCHAR(100) NOT NULL,
  `description` TEXT NOT NULL,
  `video` VARCHAR(255) NOT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_modulo` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_modulo` (`id_modulo` ASC) VISIBLE,
  CONSTRAINT `units_ibfk_1`
    FOREIGN KEY (`id_modulo`)
    REFERENCES `rebolucion_db`.`modules` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 41
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `rebolucion_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rebolucion_db`.`users` (
  `email` VARCHAR(100) NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `lastname` VARCHAR(50) NOT NULL,
  `password` VARCHAR(100) NULL DEFAULT NULL,
  `phone` INT NULL DEFAULT NULL,
  `city` VARCHAR(100) NULL DEFAULT NULL,
  `state` VARCHAR(100) NULL DEFAULT NULL,
  `country` VARCHAR(100) NULL DEFAULT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  `googleID` DOUBLE NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `country_UNIQUE` (`country` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 99
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
