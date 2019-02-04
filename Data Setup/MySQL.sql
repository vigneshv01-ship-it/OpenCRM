-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema OpenCRMDB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema OpenCRMDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `OpenCRMDB` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema OpenCRMDev
-- -----------------------------------------------------
USE `OpenCRMDB` ;

-- -----------------------------------------------------
-- Table `OpenCRMDB`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `OpenCRMDB`.`users` ;

CREATE TABLE IF NOT EXISTS `OpenCRMDB`.`users` (
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(50) NULL,
  `password` VARCHAR(32) NOT NULL,
  `create_time` VARCHAR(40) NULL,
  `user_id` INT NOT NULL,
  `isActive` TINYINT(1) NOT NULL,
  PRIMARY KEY (`user_id`));


-- -----------------------------------------------------
-- Table `OpenCRMDB`.`category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `OpenCRMDB`.`category` ;

CREATE TABLE IF NOT EXISTS `OpenCRMDB`.`category` (
  `category_id` INT NOT NULL,
  `category_name` VARCHAR(45) NOT NULL,
  `parent` INT NOT NULL,
  PRIMARY KEY (`category_id`));


-- -----------------------------------------------------
-- Table `OpenCRMDB`.`zone`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `OpenCRMDB`.`zone` ;

CREATE TABLE IF NOT EXISTS `OpenCRMDB`.`zone` (
  `zone_id` INT NOT NULL,
  `zone_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`zone_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OpenCRMDB`.`customer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `OpenCRMDB`.`customer` ;

CREATE TABLE IF NOT EXISTS `OpenCRMDB`.`customer` (
  `customer_id` INT NOT NULL,
  `customer_name` VARCHAR(45) NOT NULL,
  `address` VARCHAR(200) NOT NULL,
  `zone_id` INT NOT NULL,
  PRIMARY KEY (`customer_id`),
  INDEX `fk_customer_zone_idx` (`zone_id` ASC),
  CONSTRAINT `fk_customer_zone`
    FOREIGN KEY (`zone_id`)
    REFERENCES `OpenCRMDB`.`zone` (`zone_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OpenCRMDB`.`pay_method`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `OpenCRMDB`.`pay_method` ;

CREATE TABLE IF NOT EXISTS `OpenCRMDB`.`pay_method` (
  `pay_method_id` INT NOT NULL,
  `pay_method_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`pay_method_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OpenCRMDB`.`pay_status`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `OpenCRMDB`.`pay_status` ;

CREATE TABLE IF NOT EXISTS `OpenCRMDB`.`pay_status` (
  `pay_status_id` INT NOT NULL,
  `pay_status_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`pay_status_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OpenCRMDB`.`products`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `OpenCRMDB`.`products` ;

CREATE TABLE IF NOT EXISTS `OpenCRMDB`.`products` (
  `product_id` INT NOT NULL,
  `product_name` VARCHAR(45) NOT NULL,
  `category_id` INT NOT NULL,
  `isActive` TINYINT(1) NOT NULL,
  `unit_cost` DOUBLE NOT NULL,
  PRIMARY KEY (`product_id`),
  INDEX `fk_products_category_idx` (`category_id` ASC),
  CONSTRAINT `fk_products_category`
    FOREIGN KEY (`category_id`)
    REFERENCES `OpenCRMDB`.`category` (`category_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OpenCRMDB`.`orders_products`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `OpenCRMDB`.`orders_products` ;

CREATE TABLE IF NOT EXISTS `OpenCRMDB`.`orders_products` (
  `orders_products_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `product_units` INT NOT NULL,
  PRIMARY KEY (`orders_products_id`, `product_id`),
  INDEX `fk_orders_products_products_idx` (`product_id` ASC),
  CONSTRAINT `fk_orders_products_products`
    FOREIGN KEY (`product_id`)
    REFERENCES `OpenCRMDB`.`products` (`product_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `OpenCRMDB`.`orders`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `OpenCRMDB`.`orders` ;

CREATE TABLE IF NOT EXISTS `OpenCRMDB`.`orders` (
  `order_id` INT NOT NULL,
  `customer_id` INT NOT NULL,
  `salesperson_id` INT NULL,
  `pay_method_id` INT NULL,
  `pay_status_id` INT NULL,
  `orders_products_id` INT NULL,
  `create_time` VARCHAR(45) NULL DEFAULT 'CURRENT_TIMESTAMP',
  `update_time` VARCHAR(45) NULL,
  PRIMARY KEY (`order_id`),
  INDEX `fk_orders_customerid_idx` (`customer_id` ASC),
  INDEX `fk_orders_salesperson_idx` (`salesperson_id` ASC),
  INDEX `fk_orders_paymethod_idx` (`pay_method_id` ASC),
  INDEX `fk_orders_paystatus_idx` (`pay_status_id` ASC),
  INDEX `fk_orders_ordersproducts_idx` (`orders_products_id` ASC),
  CONSTRAINT `fk_orders_customer`
    FOREIGN KEY (`customer_id`)
    REFERENCES `OpenCRMDB`.`customer` (`customer_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_salesperson`
    FOREIGN KEY (`salesperson_id`)
    REFERENCES `OpenCRMDB`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_paymethod`
    FOREIGN KEY (`pay_method_id`)
    REFERENCES `OpenCRMDB`.`pay_method` (`pay_method_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_paystatus`
    FOREIGN KEY (`pay_status_id`)
    REFERENCES `OpenCRMDB`.`pay_status` (`pay_status_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_ordersproducts`
    FOREIGN KEY (`orders_products_id`)
    REFERENCES `OpenCRMDB`.`orders_products` (`orders_products_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = '				';


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


SELECT  O.id 'Order No'
        , C.Name 'Customer Name'
        , U.name 'Salesperson'
        , O.pay_method_id 'Pay Method'
        , O.cost 'Cost'
        , O.pay_status_id 'Pay Status'
        , P.name 'Product Name'
        , P.category 'Product Category'
        , 'Quantity'
        , 'Unit Cost'
FROM Orders O
INNER JOIN Orders_product OP ON OP.Order_id = O.id AND OP.id = O.product_list_id
INNER JOIN product P ON OP.product_id = P.id
INNER JOIN customer C ON C.id = O.customer_id
INNER JOIN user U ON U.id = O.salesperson_id;