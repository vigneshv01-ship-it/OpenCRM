CREATE DATABASE OpenCRMDB;
-- USE OpenCRMDB;
Create Table customer(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(100), address varchar(255), PRIMARY KEY(id));
INSERT INTO customer (name, address) values ("Madras Maligai", "8, Nehru Road, Tambaram West, Chennai 600045");

Create Table user(id INT NOT NULL AUTO_INCREMENT, name nvarchar(20), password nvarchar(20), isActive bool, PRIMARY KEY(id));
INSERT INTO user(name, password, isActive) values("admin","pass",1);

Create Table product (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(100), category INT, isActive bool, PRIMARY KEY(id)); -- Add Cost
INSERT INTO product(name, category, isActive) values("Sample Product", 10, 1);
INSERT INTO product(name, category, isActive) values("Product No. 2", 10, 1);

Create Table Orders (id INT NOT NULL AUTO_INCREMENT, customer_id INT NOT NULL, salesperson_id INT NOT NULL, pay_method_id INT NOT NULL, cost DOUBLE,
pay_status_id INT NOT NULL, product_list_id INT NOT NULL, PRIMARY KEY(id));
INSERT INTO Orders(customer_id, salesperson_id, pay_method_id, cost, pay_status_id, product_list_id)
            values(1, 1, 1, 3000.50, 1, 1);

Create table Orders_product(id INT NOT NULL, product_id INT NOT NULL, Order_id INT NOT NULL); -- Add Quantity
INSERT INTO Orders_product(id, product_id, Order_id) values(1,1,1);
INSERT INTO Orders_product(id, product_id, Order_id) values(1,2,1);


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

