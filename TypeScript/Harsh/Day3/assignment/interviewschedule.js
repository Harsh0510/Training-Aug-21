"use strict";
exports.__esModule = true;
exports.Interview = void 0;
var Interview = /** @class */ (function () {
    function Interview(applicantId, interviewId, interviewDate, interviewerName) {
        this.applicantId = applicantId;
        this.interviewId = interviewId;
        this.interviewDate = interviewDate;
        this.interviewerName = interviewerName;
    }
    Interview.prototype.displayInterviewDetails = function () {
        console.log("".concat(this.applicantId, "\t\t ").concat(this.interviewId, " \t\t").concat(this.interviewDate, "\t\t").concat(this.interviewerName, " "));
    };
    return Interview;
}());
exports.Interview = Interview;
