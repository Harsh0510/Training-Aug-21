import React, { Component } from "react";
import PropTypes from "prop-types";
// proptypes : install module prop-types
// built in type checking to validate props
// array,bool,func,number,object,string,symbol
// isrequired default

const Person = ({ img, name, age, info }) => {
  return (
    <section>
      <img src={img} alt="person"></img>
      <p>name : {name}</p>
      <p>age : {age}</p>
      <p>info : {info}</p>
    </section>
  );
};

Person.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  info: PropTypes.string.isRequired,
};

Person.defaultProps = {
  info: "person info",
};
export default class App extends Component {
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
          <Person
            key={item.id}
            img={item.img}
            name={item.name}
            age={item.age}
            info={item.info}
          />
        ))}
      </article>
    );
  }
}
