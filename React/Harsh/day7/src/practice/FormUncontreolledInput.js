import React, { Component, createRef } from "react";
// uncontrolled inputs
// refs provide a way to access DOM nodes or React elements via the ref attribute
// * Refs are created using React.createRef() and attached to React elements via the ref attribute.
class Form extends Component {
  constructor(props) {
    super(props);
    this.name = createRef();
  }
  handleSubmit = (event) => {
    event.preventDefault();

    // const name = this.refs.myName; //deprecated
    // console.log(name.value);

    // accessing refs:using current attribute
    const nameValue = this.name.current.value;
    console.log(nameValue);

    // * Callback Refs ::

    // Instead of passing a ref attribute created by createRef(), you pass a function. The function receives the React component instance or HTML DOM element as its argument, which can be stored and accessed elsewhere.
    console.log(this.email.value);
  };

  render() {
    return (
      <section>
        <form
          onSubmit={(event) => {
            this.handleSubmit(event);
          }}
        >
          <label htmlFor="name">name</label>
          {/* <input type="text" id="name" ref="myName" /> */}
          <input type="text" id="name" ref={this.name} />
          {/* callback refs */}
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            ref={(node) => {
              this.email = node;
            }}
          />
          <input type="submit" name="btnSubmit" id="submit" value="submit" />
        </form>
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
