import React, { Component } from "react";
import "../css/FormControlledComponent.css";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    people: [],
  };

  handleChange = (event) => {
    // console.log(event);
    // console.log(event.target);
    // // console.log(event.target.name);
    // console.log(event.target.value);
    // const name = event.target.name;
    // const value = event.target.value;

    // handle multiple inputs
    // input name and state name can be different

    // if (name === "firstName") {
    //   this.setState({
    //     firstName: value,
    //   });
    // } else if (name === "lastName") {
    //   this.setState({
    //     lastName: value,
    //   });
    // }

    // input name and state name must be same
    const value = event.target.value.toUpperCase();
    this.setState({
      [event.target.name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName } = this.state;
    const person = `${firstName} ${lastName} `;
    this.setState({
      people: [...this.state.people, person],
      firstName: "",
      lastName: "",
    });
  };

  render() {
    return (
      <section>
        <article>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="firstName">FirstName</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <label htmlFor="lastName">LastName</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <input type="submit" name="btnSubmit" id="submit" value="submit" />
          </form>
        </article>
        <article>
          <h1>people : {this.state.people}</h1>
        </article>
      </section>
    );
  }
}

export default function App() {
  return (
    <article>
      <div>
        <Form />
      </div>
    </article>
  );
}
