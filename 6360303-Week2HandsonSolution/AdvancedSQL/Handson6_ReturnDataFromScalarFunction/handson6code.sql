
DROP PROCEDURE IF EXISTS sp_GetEmployeesByDept;
GO

--Create Stored Procedure
CREATE PROCEDURE sp_GetEmployeesByDept
    @DepartmentID INT
AS
BEGIN
    SELECT *
    FROM Employees
    WHERE DepartmentID = @DepartmentID;
END;
GO

--Execute the Stored Procedure (e.g., DepartmentID = 1 for HR)
EXEC sp_GetEmployeesByDept @DepartmentID = 1;
GO
