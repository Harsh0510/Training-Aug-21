export class Interview {
    applicantId: number;
    interviewId: number;
    interviewerName: string;
    interviewDate: Date;

    constructor(applicantId: number, interviewId: number, interviewDate: Date, interviewerName: string) {
        this.applicantId = applicantId;
        this.interviewId = interviewId;
        this.interviewDate = interviewDate;
        this.interviewerName = interviewerName;
    }

    displayInterviewDetails() {
        console.log(`${this.applicantId}\t\t ${this.interviewId} \t\t${this.interviewDate}\t\t${this.interviewerName} `);
    }
}

