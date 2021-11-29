export class Applicant {
    applicantId: number;
    applicantName: string;
    departmentId: number;
    applicantQualification: string;
    applicantEmail: string;
    applicantPhoneNumber: string;
    applicantExperience: number;


    constructor(applicantId: number, applicantName: string, departmentId: number, applicantQualification: string, applicantEmail: string, applicantPhoneNumber: string, applicantExperience: number) {
        this.applicantId = applicantId;
        this.applicantName = applicantName;
        this.departmentId = departmentId;
        this.applicantQualification = applicantQualification;
        this.applicantEmail = applicantEmail;
        this.applicantPhoneNumber = applicantPhoneNumber;
        this.applicantExperience = applicantExperience;

    }

    displayApplicantData() {
        console.log(`${this.applicantId}\t\t${this.applicantName}\t\t${this.departmentId}\t\t${this.applicantQualification}\t\t\t${this.applicantEmail}\t\t${this.applicantPhoneNumber}\t\t${this.applicantExperience}  `);

    }
}



