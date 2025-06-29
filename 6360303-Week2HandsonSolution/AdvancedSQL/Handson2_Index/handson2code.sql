-- DROP TABLES IN CORRECT ORDER (to avoid FK errors)
DROP TABLE IF EXISTS OrderDetails;
DROP TABLE IF EXISTS Orders;
DROP TABLE IF EXISTS Products;
DROP TABLE IF EXISTS Customers;

-- RECREATE TABLES

CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(100),
    Region VARCHAR(50)
);

CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10, 2)
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE OrderDetails (
    OrderDetailID INT PRIMARY KEY,
    OrderID INT,
    ProductID INT,
    Quantity INT,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- INSERT SAMPLE DATA

INSERT INTO Customers (CustomerID, Name, Region) VALUES
(1, 'Alice', 'North'),
(2, 'Bob', 'South'),
(3, 'Charlie', 'East'),
(4, 'David', 'West');

INSERT INTO Products (ProductID, ProductName, Category, Price) VALUES
(1, 'Laptop', 'Electronics', 1200.00),
(2, 'Smartphone', 'Electronics', 800.00),
(3, 'Tablet', 'Electronics', 600.00),
(4, 'Headphones', 'Accessories', 150.00);

INSERT INTO Orders (OrderID, CustomerID, OrderDate) VALUES
(1, 1, '2023-01-15'),
(2, 2, '2023-02-20'),
(3, 3, '2023-03-25'),
(4, 4, '2023-04-30');

INSERT INTO OrderDetails (OrderDetailID, OrderID, ProductID, Quantity) VALUES
(1, 1, 1, 1),
(2, 2, 2, 2),
(3, 3, 3, 1),
(4, 4, 4, 3);

-- NON-CLUSTERED INDEX EXERCISE

-- Step 1: Query before index
SELECT * FROM Products WHERE ProductName = 'Laptop';

-- Step 2: Create NONCLUSTERED index
CREATE NONCLUSTERED INDEX idx_ProductName ON Products(ProductName);

-- Step 3: Query after index
SELECT * FROM Products WHERE ProductName = 'Laptop';

-- ORDER DATE INDEX EXERCISE (Use NONCLUSTERED instead of CLUSTERED)

-- Step 1: Query before index
SELECT * FROM Orders WHERE OrderDate = '2023-01-15';

-- Step 2: Create NONCLUSTERED index (not clustered to avoid conflict)
CREATE NONCLUSTERED INDEX idx_OrderDate ON Orders(OrderDate);

-- Step 3: Query after index
SELECT * FROM Orders WHERE OrderDate = '2023-01-15';

-- COMPOSITE INDEX EXERCISE

-- Step 1: Query before index
SELECT * FROM Orders WHERE CustomerID = 1 AND OrderDate = '2023-01-15';

-- Step 2: Create composite index
CREATE NONCLUSTERED INDEX idx_Customer_OrderDate
ON Orders(CustomerID, OrderDate);

-- Step 3: Query after index
SELECT * FROM Orders WHERE CustomerID = 1 AND OrderDate = '2023-01-15';
