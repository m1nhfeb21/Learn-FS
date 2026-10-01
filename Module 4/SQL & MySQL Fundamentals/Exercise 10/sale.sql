CREATE DATABASE SalesDB;
USE SalesDB;

CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY AUTO_INCREMENT,
    FullName VARCHAR(255) NOT NULL,
    Email VARCHAR(255)
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY AUTO_INCREMENT,
    OrderDate DATETIME,
    CustomerID INT,
    
    FOREIGN KEY (CustomerID)
        REFERENCES Customers(CustomerID)
);

INSERT INTO Customers (FullName, Email)
VALUES
('Nguyen Van A', 'vana@gmail.com'),
('Tran Thi B', 'thib@gmail.com');

INSERT INTO Orders (OrderDate, CustomerID)
VALUES
('2026-10-01 08:30:00', 1),
('2026-10-01 10:00:00', 1),
('2026-10-01 14:30:00', 2);

SELECT * FROM Customers;
SELECT * FROM Orders;


SELECT
    Orders.OrderID,
    Orders.OrderDate,
    Customers.FullName
FROM Orders
JOIN Customers
    ON Orders.CustomerID = Customers.CustomerID;
