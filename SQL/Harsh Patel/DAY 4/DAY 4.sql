1)
SELECT RANK() OVER(ORDER BY Salary DESC)  [Rank_Sal], *  
FROM Employees
2)
SELECT Salary FROM
(SELECT DENSE_RANK() OVER(ORDER BY Salary DESC) [Rank_Sal], Salary
FROM Employees) Temp 
WHERE Rank_Sal = 4
GROUP BY Salary
3)
SELECT Dept.DepartmentName, SUM(Emp.Salary) AS [Total]
FROM Employees AS Emp
INNER JOIN Departments AS Dept
ON Emp.DepartmentID = Dept.DepartmentID
GROUP BY Dept.DepartmentName

4)
SELECT Dept.DepartmentName, SUM(Emp.Salary) AS [Total]
FROM Employees AS Emp
INNER JOIN Departments AS Dept
ON Emp.DepartmentID = Dept.DepartmentID
GROUP BY Dept.DepartmentName
ORDER BY SUM(Emp.Salary) DESC

5)
SELECT Dept.DepartmentName, MAX(Emp.Salary) AS [Max_Salary]
FROM Employees AS Emp
INNER JOIN Departments AS Dept
ON Emp.DepartmentID = Dept.DepartmentID
GROUP BY Dept.DepartmentName 
ORDER BY MAX(Emp.Salary) ASC

6)
SELECT Dept.DepartmentName,MIN(Emp.SALARY)AS [MIN_SALARY]
FROM Employees Emp INNER JOIN Departments Dept ON Emp.DepartmentID=Dept.DepartmentID
GROUP BY Dept.DepartmentName
ORDER BY MIN(Emp.Salary) ASC

7)
SELECT Dept.DepartmentName, SUM(Emp.Salary) AS [Total_Salary]
FROM Employees AS Emp
INNER JOIN Departments AS Dept
ON Emp.DepartmentID  = Dept.DepartmentID
GROUP BY Dept.DepartmentName
HAVING SUM(Emp.Salary) > 50000
ORDER BY Sum(Emp.Salary) DESC