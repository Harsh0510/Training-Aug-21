import React, { Component } from "react";
import "../css/assignment.css";

class Form extends Component {
  state = {
    studentId: "",
    firstName: "",
    lastName: "",
    collegeName: "",
    student: [],
    formError: false,
  };

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      [event.target.name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(() => {
      return {
        formError: false,
      };
    });
    if (
      e.target.firstName.value !== "" &&
      e.target.lastName.value !== "" &&
      e.target.collegeName.value !== "" &&
      e.target.imageFile.value !== "" &&
      e.target.clgImageFile.value !== ""
    ) {
      this.img = this.image.files[0];
      this.logoImg = this.logoImage.files[0];
      let { student, ...person } = this.state;
      let personList = {
        ...person,
        studentId: student.length + 1,
        img: this.img,
        clgLogo: this.logoImg,
      };
      this.setState(
        (state, props) => {
          return {
            student: [...state.student, personList],
            studentId: "",
            firstName: "",
            lastName: "",
            collegeName: "",
          };
        },
        () => console.log(this.state.student)
      );
      this.image.value = "";
      this.logoImage.value = "";
    } else {
      this.setState(() => {
        return {
          formError: true,
        };
      });
    }
  };

  render() {
    return (
      <section>
        <article className="form">
          <form onSubmit={this.handleSubmit}>
            {this.state.formError && (
              <div style={{ color: "red", padding: "1rem" }}>
                Submit all data
              </div>
            )}
            <label htmlFor="firstName">FirstName</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            ></input>
            <label htmlFor="lastName">LastName</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            ></input>
            <label htmlFor="imageFile">Select a File </label>
            <input
              type="file"
              name="imageFile"
              id="imageFile"
              ref={(node) => (this.image = node)}
            ></input>
            <label htmlFor="collegeName">CollegeName</label>
            <input
              type="text"
              name="collegeName"
              id="collegeName"
              value={this.state.collegeName}
              onChange={this.handleChange}
            ></input>
            <label htmlFor="clgImageFile">Select a File </label>
            <input
              type="file"
              name="clgImageFile"
              id="clgImageFile"
              ref={(node) => (this.logoImage = node)}
            ></input>
            <input type="submit" name="btnSubmit" id="submit" value="submit" />
          </form>
        </article>
        <article>
          <section className="table">
            <table>
              <thead>
                <tr>
                  <th>studentId</th>
                  <th>firstName</th>
                  <th>lastName</th>
                  <th>image</th>
                  <th>collegeName</th>
                  <th>collegeLogo</th>
                </tr>
              </thead>
              <tbody>
                {this.state.student.map((item) => {
                  const {
                    studentId,
                    firstName,
                    lastName,
                    collegeName,
                    img,
                    clgLogo,
                  } = item;
                  return (
                    <tr>
                      <td>{studentId}</td>
                      <td>{firstName}</td>
                      <td>{lastName}</td>
                      <td>
                        {img && (
                          <img
                            src={URL.createObjectURL(img)}
                            alt="no load"
                            height="150"
                            width="150"
                          />
                        )}
                      </td>
                      <td>{collegeName}</td>
                      <td>
                        {clgLogo && (
                          <img
                            src={URL.createObjectURL(clgLogo)}
                            alt="no load"
                            height="150"
                            width="150"
                          />
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>

          {/* {this.img && this.logoImg && (
            <>
              <img src={URL.createObjectURL(this.img)} alt="no load" />
              <img src={URL.createObjectURL(this.logoImg)} alt="no load" />
            </>
          )} */}
        </article>
      </section>
    );
  }
}

export default function Assignment() {
  return (
    <div>
      <Form />
    </div>
  );
}
