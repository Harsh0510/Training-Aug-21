
1)
CREATE TABLE COUNTRIES 
(
	 CountryId INT PRIMARY KEY NOT NULL, 
	 CountryName VARCHAR(20) CONSTRAINT ChkCountryName CHECK(CountryName IN('italy','india','china')),
	 RegionId INT CONSTRAINT UniqueRegionId UNIQUE
)
INSERT INTO COUNTRIES VALUES(2,'India',2)
SELECT * FROM COUNTRIES
2)
CREATE TABLE  JobHistory
(
	EmployeeId INT PRIMARY KEY NOT NULL, 
	StartDate DATE, 
	End_Date DATE CONSTRAINT ChkEndDate CHECK(End_Date LIKE '--/--/----'), 
	Job_Id INT,
	Department_Id INT
)
INSERT INTO JobHistory VALUES(1,'10/08/2021','09/08/2021',1,1)
SELECT * FROM JobHistory
3)
CREATE TABLE JOBS 
(
	JobId INT,
	JobTitle VARCHAR(20) CONSTRAINT DefaultJobTitle DEFAULT ' ',
	MinSalary INT CONSTRAINT DefaultMinSalary DEFAULT 8000,
	MaxSalary INT CONSTRAINT DefaultMaxSalary DEFAULT NULL,
)
INSERT INTO JOBS(JobId)VALUES(1)
SELECT * FROM JOBS
4)
CREATE TABLE Departments(
	Department_Id INT NOT NULL CONSTRAINT PK_dpt PRIMARY KEY IDENTITY(1,1), 
	Dept_Name VARCHAR(30)
)
INSERT INTO Departments VALUES('HR')
INSERT INTO Departments VALUES('Accounts')
INSERT INTO Departments VALUES('Development')
INSERT INTO Departments VALUES('Designing')

SELECT * FROM Departments

CREATE TABLE EMPLOYEES
(
	 Employee_Id INT PRIMARY KEY NOT NULL, 
	 FirstName VARCHAR(20),
	 LastName VARCHAR(20),
	 Email VARCHAR(20),
	 PhoneNumber VARCHAR(15),
	 Hire_Date DATE,
	 Job_Id INT  CONSTRAINT FkJobId FOREIGN KEY REFERENCES jobs(Job_Id),
	 Salary INT,
	 Commission INT,
	 Manager_Id INT,
	 Department_Id INT CONSTRAINT FkDepartmentId FOREIGN KEY REFERENCES Departments(Department_Id)
)
ASSIGNMENT TASK:-
CREATE TABLE EmployeesB
(
    EmployeeID int PRIMARY KEY,
    Department varchar(10) NOT NULL,
    Department_Id INT NOT NULL,
    FirstName varchar(15) NOT NULL,
    LastName varchar(15) NOT NULL,
    PhoneNo numeric(10) NOT NULL,
    Email varchar(50) CONSTRAINT ckEmail CHECK(Email LIKE '_%@__%.__%'),
    JoiningDate date NOT NULL,
    Commission int,

 

)

 

CREATE TABLE Inventory
(
    CarID int NOT NULL PRIMARY KEY,
    CarCompany varchar(10) NOT NULL,
    CarName varchar(10) NOT NULL,
    Stock int NOT NULL,
    MRP money NOT NULL,
    Discount int,
)

 

CREATE TABLE Sales
(
    EmployeeID int NOT NULL, 
    CarID int NOT NULL,
    SaleID int NOT NULL PRIMARY KEY,
    SaleDate date NOT NULL,
    SaleAmt int NOT NULL,
    PaymentMethod varchar(10) NOT NULL,
    CustomerName varchar(30) NOT NULL,
    CONSTRAINT fk_CarID FOREIGN KEY (CarID) REFERENCES Inventory(CarID) ON DELETE CASCADE ON UPDATE CASCADE
)

 

ALTER TABLE Sales
ADD CONSTRAINT fk_empid FOREIGN KEY (EmployeeID) REFERENCES EmployeesB(EmployeeID) ON DELETE CASCADE ON UPDATE CASCADE