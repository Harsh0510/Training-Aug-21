"use strict";
exports.__esModule = true;
exports.InterviewResult = void 0;
var InterviewResult = /** @class */ (function () {
    function InterviewResult(interviewId, marks, totalMarks) {
        this.interviewId = interviewId;
        this.marks = marks;
        this.totalMarks = totalMarks;
    }
    InterviewResult.prototype.displayResult = function () {
        if (this.marks >= (this.totalMarks * 50 / 100)) {
            this.isSelected = true;
            console.log("".concat(this.interviewId, " you are selected: ").concat(this.isSelected));
        }
        else {
            this.isSelected = false;
            console.log("".concat(this.interviewId, " you are selected: ").concat(this.isSelected));
        }
    };
    return InterviewResult;
}());
exports.InterviewResult = InterviewResult;
