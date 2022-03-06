import React, { Component } from "react";
import PropTypes from "prop-types";
// object with particular shape

const Person = ({ person: { img, name, age, info } }) => {
  return (
    <section>
      <img src={img} alt="person"></img>
      <p>name : {name}</p>
      <p>age : {age}</p>
      <p>info : {info || "person info"} </p>
    </section>
  );
};
// define shape an object
Person.propTypes = {
  person: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    info: PropTypes.string.isRequired,
  }),
};

Person.defaultProps = {
  person: { info: "person info" },
};

export default class App1 extends Component {
  state = {
    people: [
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/men/78.jpg",
        name: "manav",
        age: 22,
      },
      {
        id: 2,
        img: "https://randomuser.me/api/portraits/men/79.jpg",
        name: "raj",
        age: 22,
      },
    ],
  };
  render() {
    return (
      <article>
        {this.state.people.map((item) => (
          <Person key={item.id} person={item} />
        ))}
      </article>
    );
  }
}
