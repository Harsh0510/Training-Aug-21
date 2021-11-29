"use strict";
exports.__esModule = true;
exports.Vacancy = void 0;
var Vacancy = /** @class */ (function () {
    function Vacancy(departmentId, departmentName, noOfVacancy, experienceRequired, qualificationRequired) {
        this.departmentId = departmentId;
        this.departmentName = departmentName;
        this.noOfVacancy = noOfVacancy;
        this.experienceRequired = experienceRequired;
        this.qualificationRequired = qualificationRequired;
    }
    Vacancy.prototype.createVacancy = function () {
        console.log("".concat(this.departmentId, "\t\t").concat(this.departmentName, "\t\t").concat(this.noOfVacancy, "\t\t").concat(this.experienceRequired, "\t\t").concat(this.qualificationRequired));
    };
    return Vacancy;
}());
exports.Vacancy = Vacancy;
