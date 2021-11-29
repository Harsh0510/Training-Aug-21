"use strict";
exports.__esModule = true;
var applicant_1 = require("./applicant");
var vacancy_1 = require("./vacancy");
var interviewschedule_1 = require("./interviewschedule");
var interviewresult_1 = require("./interviewresult");
// applicant
var applicantObj = [new applicant_1.Applicant(1, "manav", 1, "mca", "manav112@gmail.com", "6756565656", 1),
    new applicant_1.Applicant(2, "raj", 3, "be", "raj112@gmail.com", "9676565445", 5)];
console.log("applicantId\tapplicantName\tdepartmentId\tapplicantQualification\tapplicantEmail\tapplicantPhoneNumber\tapplicantExperience");
for (var _i = 0, applicantObj_1 = applicantObj; _i < applicantObj_1.length; _i++) {
    var value1 = applicantObj_1[_i];
    value1.displayApplicantData();
}
// vacancy
var vacancyObj = [new vacancy_1.Vacancy(1, "node", 10, 1, "be"), new vacancy_1.Vacancy(2, ".net", 10, 1, "bca")];
console.log("departmentId\tdepartmentName\tnoOfVacancy\texperienceRequired\tqualificationRequired");
for (var _a = 0, vacancyObj_1 = vacancyObj; _a < vacancyObj_1.length; _a++) {
    var value = vacancyObj_1[_a];
    value.createVacancy();
}
// interview
var interviewObj = [new interviewschedule_1.Interview(1, 1, new Date("04-09-2021"), "rahul"), new interviewschedule_1.Interview(2, 2, new Date("01-09-2021"), "yash")];
console.log("applicantId\tinterviewId\tinterviewDate\tinterviewerName");
for (var _b = 0, interviewObj_1 = interviewObj; _b < interviewObj_1.length; _b++) {
    var value2 = interviewObj_1[_b];
    value2.displayInterviewDetails();
}
// interviewresult
var resultObj = [new interviewresult_1.InterviewResult(1, 70, 100), new interviewresult_1.InterviewResult(2, 55, 100)];
console.log("interviewId\tisselected");
for (var _c = 0, resultObj_1 = resultObj; _c < resultObj_1.length; _c++) {
    var value3 = resultObj_1[_c];
    value3.displayResult();
}
