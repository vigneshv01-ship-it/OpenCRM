CREATE DATABASE OpenCRMDB;
-- USE OpenCRMDB;
Create Table customer(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(100), address varchar(255), PRIMARY KEY(id));
INSERT INTO customer (name, address) values ("Madras Maligai", "8, Nehru Road, Tambaram West, Chennai 600045");