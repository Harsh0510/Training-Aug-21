import React, { Component } from "react";

export default class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "raj",
    };
    console.log("LifecycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleB componentDidMount()");
  }

  shouldComponentUpdate() {
    console.log("LifecycleB shouldComponentUpdate()");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleB getSnapshotBeforeUpdate()");
    return null;
  }
  componentDidUpdate() {
    console.log("LifecycleB componentDidUpdate()");
  }
  changeState = (name) => {
    this.setState({ name });
  };

  render() {
    console.log("LifecycleB render()");
    return (
      <div>
        Life cycle of component B
        <button onClick={() => this.changeState("yash")}>
          change Name : component B
        </button>
        <p>{this.state.name}</p>
      </div>
    );
  }
}
