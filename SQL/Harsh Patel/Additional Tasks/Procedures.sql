USE Db_Sql
SELECT * FROM Employees

--Create Procedure
GO
CREATE PROCEDURE Dep1
AS
BEGIN
	SELECT * FROM Employees WHERE DepartmentID=90
	SELECT * FROM Employees WHERE Salary>10000
END
GO


--Modify Procedure

GO
ALTER PROCEDURE Dep1
AS
BEGIN
	SELECT * FROM Employees WHERE DepartmentID=90
	SELECT * FROM Employees WHERE Salary>10000
	SELECT * FROM Employees WHERE ManagerID=100 
END
GO

Execute Dep1

--Delete Procedure

DROP PROCEDURE Dep1

Parameters
GO
CREATE PROCEDURE Emp1
@FirstName VARCHAR(50),@LastName VARCHAR(50)
AS
BEGIN
	SELECT * FROM Employees WHERE FirstName=@FirstName
	SELECT * FROM Employees WHERE LastName=@LastName
END
GO

EXEC Emp1 'David','Lorentz'



GO
ALTER PROCEDURE Dep1
@DepartmentID INT,@Salary INT,
@ManagerID INT
AS
BEGIN
	SELECT * FROM Employees WHERE DepartmentID=@DepartmentID
	SELECT * FROM Employees WHERE Salary> @Salary
	SELECT * FROM Employees WHERE ManagerID=@ManagerID
END
GO
Dep1 90,10000,100
Dep1 @DepartmentID=110, @Salary=10000,
@ManagerID =100

GO
ALTER PROCEDURE Dep1
@DepartmentID INT=60,
@Salary INT=10000 ,
@ManagerID INT=100
AS
BEGIN
	SELECT * FROM Employees WHERE DepartmentID=@DepartmentID
	SELECT * FROM Employees WHERE Salary> @Salary
	SELECT * FROM Employees WHERE ManagerID=@ManagerID
END
GO
Dep1 90,10000,100
Dep1 @DepartmentID=110, @Salary=10000,
@ManagerID =100

--OUTPUT

GO
CREATE PROC Dep2
@Num1 INT,@Num2 INT,@Result INT OUTPUT
AS
BEGIN
	SET @Result=(@Num1+@Num2)
END
GO

DECLARE @a INT
EXEC Dep2 1,1,@result=@a OUTPUT;
SELECT @a

GO
ALTER PROC Emp2
@EmployeeID INT,
@DepartmentName VARCHAR(20) OUTPUT,
@FirstName VARCHAR(20) OUTPUT
AS
--IF EXISTS(SELECT * FROM Employees WHERE EmployeeID=@EmployeeID)
--BEGIN
	SELECT d.DepartmentName,e.FirstName FROM Employees e JOIN Departments d
	ON e.DepartmentID=d.DepartmentID WHERE EmployeeID=@EmployeeID
--RETURN 0
--END
GO
DECLARE @a VARCHAR(20),@b VARCHAR(20)
EXEC Emp2 197,@DepartmentName=@a,@FIrstNAme=@b
SELECT @a,@b
