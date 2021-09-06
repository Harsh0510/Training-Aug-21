--Database
CREATE DATABASE Day6_August17
USE Day6_August17

--Tables
--Customer
CREATE TABLE Customer (
	CName VARCHAR(19) CONSTRAINT PK_Customer PRIMARY KEY
	, City VARCHAR(18) NOT NULL
)

INSERT INTO Customer VALUES
        ('ANIL', 'KOLKATA')
    ,    ('SUNIL', 'DELHI')
    ,    ('MEHUL', 'BARODA')
    ,    ('MANDAR', 'PATNA')
    ,    ('MADHURI', 'NAGPUR')
    ,    ('PRAMOD', 'NAGPUR')
    ,    ('SANDIP', 'SURAT')
    ,    ('SHIVANI', 'MUMBAI')
    ,    ('KRANTI', 'MUMBAI')
    ,    ('NAREN', 'MUMBAI')



--Brnach
CREATE TABLE Branch (
	BName VARCHAR(19) CONSTRAINT PK_Branch PRIMARY KEY
	, City VARCHAR(18) NOT NULL
)

INSERT INTO Branch VALUES
	( 'VRCE', 'NAGPUR')
	, ( 'AJNI', 'NAGPUR')
	, ( 'KAROLBAGH', 'DELHI')
	, ( 'CHANDNI', 'DELHI')
	, ( 'DHARAMPETH', 'NAGPUR')
	, ( 'M.G.ROAD', 'BANGLORE')
	, ( 'ANDHERI', 'MUMBAI')
	, ( 'VIRAR', 'MUMBAI')
	, ( 'NEHRU PLACE', 'DELHI')
	, ( 'POWAI', 'MUMBAI')



--Deposite
CREATE TABLE Deposit (
	ActNo VARCHAR(5) CONSTRAINT PK_Deposit PRIMARY KEY
	, CName VARCHAR(19) CONSTRAINT FK_Customer_Deposit FOREIGN KEY (CName) REFERENCES Customer(CName)
	, BName VARCHAR(19) CONSTRAINT FK_Branch_Deposit FOREIGN KEY (BName) REFERENCES Branch(BName)
	, Amount INT NOT NULL
	, ADate DATE NOT NULL
)

INSERT INTO Deposit VALUES
	('100', 'ANIL', 'VRCE', 1000, '1-Mar-1995')
	, ('101', 'SUNIL', 'AJNI',5000, '4-Jan-1996')
	, ('102', 'MEHUL', 'KAROLBAGH', 3500, '17-Nov-1995')
	, ('104', 'MADHURI', 'CHANDNI', 1200, '17-Dec-1995')
	, ('105', 'PRAMOD', 'M.G.ROAD', 3000, '27-Mar-1996')
	, ('106', 'SANDIP', 'ANDHERI', 2000, '31-Mar-1996')
	, ('107', 'SHIVANI', 'VIRAR', 1000, '5-Sep-1995')
	, ('108', 'KRANTI', 'NEHRU PLACE', 5000, '2-Jul-1995')
	, ('109', 'NAREN', 'POWAI', 7000, '10-Aug-1995')

--Borrow
CREATE TABLE Borrow (
	LoanNo VARCHAR(5) CONSTRAINT PK_Borrow PRIMARY KEY
	, CName VARCHAR(19) CONSTRAINT FK_Customer_Borrow FOREIGN KEY (CName) REFERENCES Customer(CName)
	, BName VARCHAR(19) CONSTRAINT FK_Branch_Borrow FOREIGN KEY (BName) REFERENCES Branch(BName)
	, Amount INT NOT NULL
)

INSERT INTO Borrow VALUES
	('201', 'ANIL', 'VRCE', 1000)
	, ('206', 'MEHUL', 'AJNI', 5000)
	, ('311', 'SUNIL', 'DHARAMPETH', 3000)
	, ('321', 'MADHURI', 'ANDHERI', 2000)
	, ('375', 'PRAMOD', 'VIRAR', 8000)
	, ('481', 'KRANTI', 'NEHRU PLACE', 3000)


SELECT *
FROM Customer
SELECT *
FROM Branch
SELECT *
FROM Deposit
SELECT *
FROM Borrow

--Q1: List Names of Customers who are Depositors and have Same Branch City as that of SUNIL
SELECT CName
FROM Deposit Dp
JOIN Branch Br
ON Br.BName = Dp.BName
WHERE Br.City IN
	(
	SELECT City
	FROM Branch
	WHERE BName = 
		(
		SELECT BName
		FROM Deposit
		WHERE CName = 'Sunil'
		)
	)

--Q2: List All the Depositors Having Depositors Having Deposit in All the Branches where SUNIL is Having Account
SELECT *
FROM Deposit
WHERE BName IN
	(
	SELECT BName 
	FROM Deposit
	WHERE CName = 'Sunil'
	UNION
	SELECT BName
	FROM Borrow
	WHERE CName = 'Sunil'
	)

--Q3: List the Names of Customers Living in the City where the Maximum Number of Depositors are Located
SELECT CName, City
FROM Customer
WHERE City IN
	(
	SELECT City FROM
			(
			SELECT DENSE_RANK() OVER(ORDER BY COUNT(Br.City) DESC) 'Rank' ,Br.City
			FROM Deposit Dp
			JOIN Branch Br
			ON Dp.BName = Br.BName
			GROUP BY Br.City
			) Tmp
			WHERE Rank = 1
	)

--Q4: List Names of Borrowers Having Deposit Amount Greater than 1000 and Loan Amount Greater than 2000
SELECT Bo.CName
FROM Borrow Bo
JOIN Deposit Dp
ON Bo.CName = Dp.CName
AND Dp.Amount > 1000
AND Bo.Amount > 2000

--Q5: List All the Customers Living in NAGPUR and Having the Branch City as MUMBAI or DELHI
SELECT *
FROM Customer Ct
JOIN Deposit Dp
ON Ct.CName = Dp.CName
JOIN Branch Br
ON Dp.BName = Br.BName
AND Ct.City = 'Nagpur'
AND Br.City IN ('Mumbai', 'Delhi')

--Q6: Count the Number of Customers Living in the City where Branch is Located
SELECT City, COUNT(*) 'Number of Customers'
FROM Customer
WHERE City IN 
	(
	SELECT City
	FROM Branch
	)
GROUP BY City
