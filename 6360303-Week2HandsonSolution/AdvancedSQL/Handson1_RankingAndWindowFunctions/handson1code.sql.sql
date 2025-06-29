USE Week2HandsOn;

-- If table exists, drop it to avoid error
DROP TABLE IF EXISTS Products;

-- Create Products table
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10, 2)
);

-- Insert sample data
INSERT INTO Products (ProductID, ProductName, Category, Price) VALUES
(1, 'Laptop', 'Electronics', 1200.00),
(2, 'Smartphone', 'Electronics', 800.00),
(3, 'Tablet', 'Electronics', 600.00),
(4, 'Headphones', 'Accessories', 150.00),
(5, 'Charger', 'Accessories', 100.00),
(6, 'Smartwatch', 'Electronics', 950.00),
(7, 'Mouse', 'Accessories', 120.00),
(8, 'Camera', 'Electronics', 700.00),
(9, 'Keyboard', 'Accessories', 110.00);

-- Use ROW_NUMBER to rank products per category
SELECT 
    Category,
    ProductName,
    Price,
    ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS RowNum
FROM Products;

-- Use RANK to rank products per category
SELECT 
    Category,
    ProductName,
    Price,
    RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS RankNum
FROM Products;

-- Use DENSE_RANK to rank products per category
SELECT 
    Category,
    ProductName,
    Price,
    DENSE_RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS DenseRankNum
FROM Products;
