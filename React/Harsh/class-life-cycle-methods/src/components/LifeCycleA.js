import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

export default class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "manav",
    };
    console.log("LifecycleA constructor()");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedFromProps()");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleA componentDidMount()");
  }
  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate()");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate()");
    return null;
  }
  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate");
  }
  changeState = (name) => {
    this.setState({ name });
  };
  render() {
    console.log("LifecycleA render()");
    return (
      <div>
        Life cycle of component A
        <button onClick={() => this.changeState("rahul")}>
          change Name : Component A
        </button>
        <p>{this.state.name}</p>
        <LifeCycleB changeState={this.changeState} />
      </div>
    );
  }
}
