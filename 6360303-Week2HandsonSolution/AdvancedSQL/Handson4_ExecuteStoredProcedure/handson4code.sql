
DROP FUNCTION IF EXISTS fn_CalculateAnnualSalary;
GO

--Create Scalar Function
CREATE FUNCTION fn_CalculateAnnualSalary (@EmployeeID INT)
RETURNS DECIMAL(10,2)
AS
BEGIN
    DECLARE @AnnualSalary DECIMAL(10,2);

    SELECT @AnnualSalary = Salary * 12
    FROM Employees
    WHERE EmployeeID = @EmployeeID;

    RETURN @AnnualSalary;
END;
GO

--Execute the Scalar Function
SELECT dbo.fn_CalculateAnnualSalary(1) AS AnnualSalary;
GO
