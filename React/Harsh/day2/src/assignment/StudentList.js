import React, { Component } from "react";
import Student from "./Student";
import StudentsData from "./StudentsData";

class StudentList extends Component {
  state = { students: StudentsData };
  handleDelete = (id) => {
    const sortedStudent = this.state.students.filter(
      (item) => item.StudentId !== id
    );
    this.setState({
      students: sortedStudent,
    });
  };

  render() {
    return (
      <section>
        <h2>Student Information</h2>
        <div className="student">
          {this.state.students.map((elem) => (
            <Student student={elem} handleDelete={this.handleDelete} />
          ))}
        </div>
      </section>
    );
  }
}

export default StudentList;
