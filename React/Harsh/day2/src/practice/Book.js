import React, { Component } from "react";
import Buttons from "./Buttons";
export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      showInfo: false,
    };
  }
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  addCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  lowerCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  resetCount = () => {
    this.setState({
      count: 0,
    });
  };

  // handleClick = () => {
  //   console.log("you clicked me");
  //   console.log(this.state.count);
  // };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 1,
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick() {
  //   console.log("you clicked me");
  //   console.log(this.state.count);
  // }
  render() {
    // console.log(this.props);
    const { id, Image, Title, Author } = this.props.book;
    const { handleDelete } = this.props;
    const checkInfo = (info) => {
      if (info === true) {
        return (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            reiciendis?
          </p>
        );
      } else {
        return null;
      }
    };
    return (
      <article className="books">
        <img src={Image} alt="no load" height="150" width="150" />
        <div>
          <h4>Title : {Title}</h4>
          <h6>Author : {Author}</h6>
          <h3>count:{this.state.count}</h3>
          {/* <button type="button" onClick={this.handleClick}>
            add count
          </button> */}
          <button type="button" onClick={this.addCount}>
            add count
          </button>
          <button type="button" onClick={this.lowerCount}>
            lower count
          </button>
          <button type="button" onClick={this.resetCount}>
            reset count
          </button>
          <Buttons handleDelete={handleDelete} id={id} />
          <button type="button" onClick={this.handleInfo}>
            toggle info
          </button>
          {checkInfo(this.state.showInfo)}
          {/* inline if with logical && operator */}
          {/* {this.state.showInfo && (
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
              eum ea reprehenderit debitis voluptas nam ullam esse vel hic
              suscipit?
            </p>
          )} */}

          {/* inline if-else with conditional operator */}
          {/* ternary operator */}
          {/* {this.state.showInfo ? (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              mollitia.
            </p>
          ) : null} */}
        </div>
      </article>
    );
  }
}
