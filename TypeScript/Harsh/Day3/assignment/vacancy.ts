export class Vacancy {
    departmentId: number;
    departmentName: string;
    noOfVacancy: number;
    experienceRequired: number;
    qualificationRequired: string;

    constructor(departmentId: number, departmentName: string, noOfVacancy: number, experienceRequired: number,
        qualificationRequired: string) {
        this.departmentId = departmentId;
        this.departmentName = departmentName;
        this.noOfVacancy = noOfVacancy;
        this.experienceRequired = experienceRequired;
        this.qualificationRequired = qualificationRequired;

    }

    createVacancy() {
        console.log(`${this.departmentId}\t\t${this.departmentName}\t\t${this.noOfVacancy}\t\t${this.experienceRequired}\t\t${this.qualificationRequired}`);
    }
}