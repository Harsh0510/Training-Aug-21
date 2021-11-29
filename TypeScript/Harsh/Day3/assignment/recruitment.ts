import { Applicant } from "./applicant";
import { Vacancy } from "./vacancy";
import { Interview } from "./interviewschedule"
import { InterviewResult } from "./interviewresult";


// applicant

var applicantObj: Array<Applicant> = [new Applicant(1, "manav", 1, "mca", "manav112@gmail.com", "6756565656", 1),
new Applicant(2, "raj", 3, "be", "raj112@gmail.com", "9676565445", 5)]

console.log("applicantId\tapplicantName\tdepartmentId\tapplicantQualification\tapplicantEmail\tapplicantPhoneNumber\tapplicantExperience");
for (var value1 of applicantObj) {
    value1.displayApplicantData();
}

// vacancy
var vacancyObj: Array<Vacancy> = [new Vacancy(1, "node", 10, 1, "be"), new Vacancy(2, ".net", 10, 1, "bca")]

console.log("departmentId\tdepartmentName\tnoOfVacancy\texperienceRequired\tqualificationRequired");
for (var value of vacancyObj) {
    value.createVacancy();
}

// interview

var interviewObj: Array<Interview> = [new Interview(1, 1, new Date("04-09-2021"), "rahul"), new Interview(2, 2, new Date("01-09-2021"), "yash")]

console.log("applicantId\tinterviewId\tinterviewDate\tinterviewerName");
for (var value2 of interviewObj) {
    value2.displayInterviewDetails();
}

// interviewresult

var resultObj: Array<InterviewResult> = [new InterviewResult(1, 70, 100), new InterviewResult(2, 55, 100)]

console.log("interviewId\tisselected");
for (var value3 of resultObj) {
    value3.displayResult();
}
