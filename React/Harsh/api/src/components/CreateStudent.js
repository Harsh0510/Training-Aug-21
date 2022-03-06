import React from "react";
import axios from "axios";
import { useState } from "react";

export default function CreateStudent() {
  const apiEndPoint = `http://localhost:5000/students`;
  const [inputs, setInputs] = useState({
    name: "",
    address: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const student = {
      Name: inputs.name,
      Address: inputs.address,
    };
    await axios.post(apiEndPoint, student);
    setInputs({
      name: "",
      address: "",
    });
  };
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={inputs.name}
          onChange={handleChange}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          value={inputs.address}
          onChange={handleChange}
        />
        <button type="button">submit</button>
      </form>
    </section>
  );
}
