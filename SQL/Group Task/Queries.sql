--Voters Name with constituency name,District name and voter id

SELECT CONCAT(p1.FirstName,SPACE(2),p1.LastName) AS FullName,c.ConstituencyName,d.DistrictName,v.VoterID FROM People p1
JOIN VOTERS v ON p1.AadharcardNo=v.AadharcardNo JOIN PollingBooth p ON p.PollingBoothID=v.PollingBoothID JOIN
Constituency c ON c.ConstituencyID=p.ConstituencyID JOIN DistrictInfo d ON d.DistrictID=c.ConstituencyID 


--Voters Name with their Age
SELECT CONCAT(p1.FirstName,SPACE(2),p1.LastName),DATEDIFF(YY,DOB,GETDATE()) AS AGE
FROM People p1
JOIN VOTERS v ON p1.AadharcardNo=v.AadharcardNo

--No Voters in each District

SELECT D.DistrictName,SUM(VoterID) [Voters] from VOTERS v,PollingBooth P,Constituency C,DistrictInfo D
WHERE p.PollingBoothID=v.PollingBoothID AND P.ConstituencyID = C.ConstituencyID AND
C.DistrictID = D.DistrictID GROUP BY D.DistrictName

--LIST OUT CONSTITTUENCIES WHICH HAVE NO VOTERS
	
	SELECT C.ConstituencyName FROM Constituency C, PollingBooth P, VOTERS V WHERE C.ConstituencyID=P.ConstituencyID 
	AND P.PollingBoothID=V.PollingBoothID AND VoterID 
	NOT IN (SELECT VoterID FROM VOTERS) order by c.ConstituencyName

--LIST OUT CONSTITUENCIES WHICH HAVE NO PARTY MEMBERS


	SELECT C.ConstituencyName FROM Constituency C,PartyMembers p WHERE C.ConstituencyID=p.ConstituencyID
	AND C.ConstituencyID
	NOT IN(SELECT p.ConstituencyID FROM PartyInfo)

--LIST OUT VOTERS WHO ARE >50 YEARS OF AGE

SELECT CONCAT(p1.FirstName,SPACE(2),p1.LastName) 
FROM People p1
JOIN VOTERS v ON p1.AadharcardNo=v.AadharcardNo
WHERE DATEDIFF(YY,DOB,GETDATE())>50

--LIST OUT VOTER NAME AND CONSTITUECY WHO ARE OLDER THAN THE AVERAGE AGE OF VOTERS

SELECT (FirstName + ' ' + LastName) [Name],C.ConstituencyName,DATEDIFF(YYYY,P1.DOB,GETDATE()) [Age]
FROM VOTERS V,Constituency C,PollingBooth P,People p1 
WHERE p1.AadharcardNo=v.AadharcardNo AND  V.PollingBoothID = P.PollingBoothID AND P.ConstituencyID = C.ConstituencyID AND
DATEDIFF(YYYY,p1.DOB,GETDATE()) >  (SELECT AVG(AGE) FROM (SELECT DATEDIFF(YYYY,p1.DOB,GETDATE()) [AGE] FROM People)a)


--List Out The pollingBooths which belong Constituencies in naroda,vatva, Anjar

SELECT p.PollingBoothID,c.ConstituencyName FROM PollingBooth p JOIN Constituency c ON p.ConstituencyID=c.ConstituencyID
WHERE C.ConstituencyName IN ('Naroda','Vatva','Anjar')

--List Of the candidates members of party which is currently ruling

SELECT CONCAT(FirstName,SPACE(2),LastName) FROM People p JOIN Candidate c ON c.AadharcardNo=p.AadharcardNo
JOIN RulingParty R ON c.CandidateID=r.CandidateID


--LIst of party which contest from their respective constituency

SELECT p.PartyName,c.ConstituencyName FROM PartyInfo p JOIN DistrictInfo d ON p.DistrictHQID=d.DistrictID JOIN Constituency c
ON d.DistrictName=c.DistrictID 

--party with their ruling history with their respective constituency name
SELECT p.PartyName,c.ConstituencyName,r.StartDate,r.EndDate FROM PartyInfo p JOIN DistrictInfo d ON p.DistrictHQID=d.DistrictID JOIN Constituency c
ON d.DistrictName=c.DistrictID JOIN RulingParty r ON r.ConstituencyID=c.ConstituencyID

--List OF Voters Whose Name Starts With R

	SELECT CONCAT(p1.FirstName,SPACE(2),p1.LastName)
	FROM People p1
	JOIN VOTERS v ON p1.AadharcardNo=v.AadharcardNo WHERE FirstName LIKE'R%'

-- List Of the Officer With Their DepartmentName

	SELECT CONCAT(p1.FirstName,SPACE(2),p1.LastName),o.DepartName
	FROM People p1
	JOIN Officer o ON p1.AadharcardNo=o.AadharcardNo 

--List the officer with their constituency name and District Name

	SELECT CONCAT(p1.FirstName,SPACE(2),p1.LastName)
	FROM People p1
	JOIN Officer o ON p1.AadharcardNo=o.AadharcardNo JOIN PollingBooth p 
	ON p.OfficerID=o.OfficerID JOIN Constituency c ON p.ConstituencyID=c.ConstituencyID
	JOIN DistrictInfo d ON d.DistrictID=c.ConstituencyID

--List the Party members with their designation and education level

	SELECT CONCAT(p1.FirstName,SPACE(2),p1.LastName),p.Designation,p.EducationLevel
	FROM People p1
	JOIN PartyMembers p ON p1.AadharcardNo=p.AadharcardNo 