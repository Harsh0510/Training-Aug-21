export class InterviewResult {
    interviewId: number;
    marks: number;
    isSelected?: boolean;
    totalMarks: number;


    constructor(interviewId: number, marks: number, totalMarks: number) {
        this.interviewId = interviewId;
        this.marks = marks;
        this.totalMarks = totalMarks;
    }

    displayResult() {
        if (this.marks >= (this.totalMarks * 50 / 100)) {
            this.isSelected = true;
            console.log(`${this.interviewId} you are selected: ${this.isSelected}`);
        }
        else {
            this.isSelected = false;
            console.log(`${this.interviewId} you are selected: ${this.isSelected}`);
        }
    }

}

