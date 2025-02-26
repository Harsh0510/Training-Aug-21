import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import App1 from "./practice/ProtoType";
// import App2 from "./practice/ProtoTypeObjectShape";
// import App3 from "./practice/FormControlledInput";
// import App4 from "./practice/FormUncontreolledInput";
// import App5 from "./practice/ReactFragment";
import Assignment from "./assignment/assignment";
import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// ReactDOM.render(<App1 />, document.getElementById("root"));
// ReactDOM.render(<App2 />, document.getElementById("root"));
// ReactDOM.render(<App5 />, document.getElementById("root"));
ReactDOM.render(<Assignment />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
