1) UPDATE Employees SET Email='NOT AVAILABLE'
SELECT * FROM Employees

2) UPDATE Employees SET Email='NOT AVAILABLE',CommissionPct=.10
SELECT * FROM Employees

3) UPDATE Employees SET Email='NOT AVAILABLE',CommissionPct=.10 WHERE DepartmentID=110
SELECT * FROM Employees

4) UPDATE Employees SET Email='NOT AVAILABLE' WHERE DepartmentID=80 AND CommissionPct<0.2
SELECT * FROM Employees

5) UPDATE Employees SET Email = 'Changed' FROM Employees as Emp JOIN Departments as Dpt ON Emp.DepartmentID = Dpt.DepartmentID AND Dpt.DepartmentName = 'Accounting'
SELECT * FROM Employees

6) UPDATE Employees SET Salary=8000 WHERE EmployeeID=105 AND Salary<5000
SELECT * FROM Employees

7) UPDATE Employees SET JobId = 'SH_CLERK' WHERE EmployeeID = 118 AND DepartmentID = 30 AND JobId NOT LIKE 'SH%'
SELECT * FROM Employees

8) UPDATE Employees SET Salary  =  CASE 
WHEN DepartmentID = 40 THEN   (Salary + (Salary * 25 /100))
WHEN DepartmentID = 90 THEN   (Salary + (Salary * 15 /100))
WHEN DepartmentID = 110 THEN (Salary + (Salary * 10 /100))
WHEN DepartmentID NOT IN(40,90,110) THEN Salary
END
SELECT * FROM Employees




BASIC SELECT QUERIES

1) SELECT * FROM Employees
2) SELECT FirstName,LastName FROM Employees
3) SELECT FirstName'Employee Name' FROM Employees
4) SELECT FirstName AS'Employee Name' FROM Employees
5) SELECT 'Employee Name'=FirstName FROM Employees
6) SELECT * FROM Employees WHERE FirstName='Steven'
7) SELECT * FROM Employees WHERE FirstName='Neena' AND FirstName='Lex'
8) SELECT * FROM Employees WHERE FirstName NOT (LIKE'Neena' ANd 'Lex')
9) SELECT * FROM Employees WHERE Salary BETWEEN 5000 AND 8000
10) SELECT FirstName,LastName,Salary,PF=Salary*0.12 FROM Employees
11) SELECT * FROM Employees WHERE FirstName LIKE'N%'
12) SELECT DISTINCT DepartmentID from Employees
13) SELECT * FROM Employees ORDER BY FirstName DESC
14) SELECT EmployeeID,FirstName,LastName,Salary FROM Employees ORDER BY SALARY ASC
15) SELECT TOP 2 Salary FROM Employees