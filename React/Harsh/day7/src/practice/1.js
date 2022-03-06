import React, { Component } from "react";

export default class FormControlledComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      stateInfo: "",
      gender: "",
      hobbies: [],
    };
  }
  render() {
    return (
      <section>
        <form>
          <label>
            Name <input type="text" name="name" value="" />
          </label>
          <br />
          <label>
            Address <textarea name="address" value="" />
          </label>
          <br />
          <label>
            <select name="stateinfo" value="">
              <option value="Ahmedabad">Ahmedabad</option>
              <option selected value="Mumbai">
                Mumbai
              </option>
              <option selected value="Chennai">
                Chennai
              </option>
              <option value="Delhi">Delhi</option>
            </select>
          </label>
          <label>
            gender
            <input type="radio" name="gender" value="male" />
            Male
            <input type="radio" name="gender" value="female" />
            female
          </label>
          <label>
            Hobbies
            <input name="hobbies" type="checkbox" value="0">
              Hockey
            </input>
            <input name="hobbies" type="checkbox" value="1">
              Cricket
            </input>
            <input name="hobbies" type="checkbox" value="0">
              Badminton
            </input>
          </label>
          <input type="submit" value="submit" />
        </form>
      </section>
    );
  }
}
{
  /* <p>studentId:{studentId}</p>
                  <p>firstName:{firstName}</p>
                  <p>lastName:{lastName}</p>
                  {img && (
                    <img
                      src={URL.createObjectURL(img)}
                      alt="no load"
                      height="150"
                      width="150"
                    />
                  )}
                  <p>collegeName:{collegeName}</p>
                  {clgLogo && (
                    <img
                      src={URL.createObjectURL(clgLogo)}
                      alt="no load"
                      height="150"
                      width="150"
                    />
                  )} */
}
