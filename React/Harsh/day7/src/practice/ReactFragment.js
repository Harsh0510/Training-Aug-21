import React, { Component } from "react";
// * React Fragment and this.setState() is asynchronous
// * this.setState(object) vs this.setState(function)
class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrease = () => {
    console.log(`called first ${this.state.count}`);
    // * this.setState(object) :: It takes state object
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => console.log(`called second ${this.state.count}`)
    );
    console.log(`called third ${this.state.count}`);
  };
  handleDecrease = () => {
    console.log(`called first ${this.state.count}`);
    // * this.setState(function) :: It takes a function and return state object
    this.setState(
      (state, props) => {
        return { count: state.count - props.amount };
      },
      () => console.log(`called second ${this.state.count}`)
    );
    // this.setState((state, props) => {
    //   return { count: state.count - 1 };
    // });
    console.log(`called third ${this.state.count}`);
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <button type="button" onClick={this.handleDecrease}>
            decrease
          </button>
          <span>Count:{this.state.count}</span>
          <button type="button" onClick={this.handleIncrease}>
            increase
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default function ReactFragment() {
  return (
    <div>
      <Counter amount="2" />
    </div>
  );
}
