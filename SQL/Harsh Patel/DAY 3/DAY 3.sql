1) SELECT FirstName AS 'NAME',LEN(FirstName) AS 'LENGTH' FROM Employees WHERE FirstName LIKE 'A%' OR FirstName LIKE 'J%' OR FirstName LIKE 'M%' ORDER BY FirstName ASC
2) SELECT Firstname, CONCAT('$',SPACE(1),CAST(CAST(Salary AS DECIMAL(10,5)) AS varchar)) AS 'SALARY' FROM Employees
3) SELECT EmployeeID 'Code',FirstName,LastName,HireDate FROM Employees WHERE CAST(DATEPART(DD,HireDate) AS INT)=7 OR CAST(DATEPART(MM,HireDate) AS INT)=7
4) SELECT LEN(FirstName) FROM Employees WHERE LastName LIKE ('--C%')
5) SELECT RIGHT(CAST(PhoneNumber AS VARCHAR),4) AS 'Number' FROM Employees
6) SELECT REPLACE(CAST(PhoneNumber AS VARCHAR),'124','999') AS 'Number' FROM Employees
7) SELECT FirstName, DATEDIFF(YY,HireDate,GETDATE()) AS 'AGE' FROM Employees
8) SELECT  HireDate FROM Employees WHERE DATEPART(WEEKDAY,HireDate) = 2
9) SELECT FirstName,HireDate FROM Employees WHERE HireDate BETWEEN '1987-06-01' AND '1987-07-30'
10) SELECT FORMAT(HireDate,'hh:mm tt MMM d, yyyy') FROM Employees
11) SELECT FirstName,LastName FROM Employees WHERE DATEPART(MM,HireDate)=6
12) SELECT FirstName,LastName, DATEDIFF(YY,HireDate,GETDATE()) AS EXPERIENCE FROM EMPLOYEES
13) SELECT FirstName FROM Employees WHERE DATEPART(YY,HireDate)=1987
