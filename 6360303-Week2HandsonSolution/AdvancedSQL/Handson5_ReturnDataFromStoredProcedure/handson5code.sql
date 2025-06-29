
DROP PROCEDURE IF EXISTS sp_CountEmployeesByDept;
GO

--Create Stored Procedure
CREATE PROCEDURE sp_CountEmployeesByDept
    @DepartmentID INT
AS
BEGIN
    SELECT COUNT(*) AS TotalEmployees
    FROM Employees
    WHERE DepartmentID = @DepartmentID;
END;
GO

--Execute the stored procedure with sample dept ID (1 = HR)
EXEC sp_CountEmployeesByDept @DepartmentID = 1;
GO
