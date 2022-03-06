import React, { Component } from "react";
class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
    };
  }
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    var {
      StudentImage,
      StudentId,
      FirstName,
      LastName,
      DOB,
      CollegeName,
      Address,
      CollegeLogo,
    } = this.props.student;
    var { handleDelete } = this.props;
    var btnStyle = {
      backgroundColor: "red",
      color: "white",
      fontSize: "1rem",
      height: "30px",
    };

    return (
      <article className="students">
        <img src={StudentImage} alt="no load" height="150" width="150" />
        <p>Id : {StudentId}</p>
        <p>Name : {`${FirstName} ${LastName}`}</p>
        <p>DOB : {DOB}</p>
        <button
          type="button"
          style={btnStyle}
          onClick={() => handleDelete(StudentId)}
        >
          Delete
        </button>
        <button type="btn" style={btnStyle} onClick={this.handleInfo}>
          toggle info
        </button>
        {this.state.showInfo ? (
          <section>
            <p>CollegeName : {CollegeName}</p>
            <p>Address : {Address}</p>
            <img src={CollegeLogo} alt="no load" height="150" width="150" />
          </section>
        ) : null}
      </article>
    );
  }
}

export default Student;
