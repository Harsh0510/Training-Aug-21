"use strict";
exports.__esModule = true;
exports.Applicant = void 0;
var Applicant = /** @class */ (function () {
    function Applicant(applicantId, applicantName, departmentId, applicantQualification, applicantEmail, applicantPhoneNumber, applicantExperience) {
        this.applicantId = applicantId;
        this.applicantName = applicantName;
        this.departmentId = departmentId;
        this.applicantQualification = applicantQualification;
        this.applicantEmail = applicantEmail;
        this.applicantPhoneNumber = applicantPhoneNumber;
        this.applicantExperience = applicantExperience;
    }
    Applicant.prototype.displayApplicantData = function () {
        console.log("".concat(this.applicantId, "\t\t").concat(this.applicantName, "\t\t").concat(this.departmentId, "\t\t").concat(this.applicantQualification, "\t\t\t").concat(this.applicantEmail, "\t\t").concat(this.applicantPhoneNumber, "\t\t").concat(this.applicantExperience, "  "));
    };
    return Applicant;
}());
exports.Applicant = Applicant;
