// import and export(named,default)

import React from "react";
// import Booklist from "./practice/Booklist";
import "./App.css";
import StudentList from "./assignment/StudentList";
// import React, { Component } from "react";
// import { name, age, person } from "./data";
// import * as data from "./data";
// import Banner from "./components/Header/Banner";

// const App = () => (
// <section>
//   <Banana />
//   <p>This is my content</p>
//   <p>{data.name}</p>
//   <p>{data.age}</p>
//   <p>{data.person.name}</p>
// </section>
// );

// class based components

// class App extends React.Component {
//   render() {
//     return (
//       <section>
//         <Banana />
//         <p>This is my content</p>
//         <p>{data.name}</p>
//         <p>{data.age}</p>
//         <p>{data.person.name}</p>
//       </section>
//     );
//   }
// }

// state

// const App = () => (
//   <section>
//     <Booklist />
//   </section>
// );]

const App = () => (
  <section>
    <StudentList />
  </section>
);

export default App;
