import React from "react";
import "./App.css";
import GetStudents from "./components/GetStudents";
import CreateStudent from "./components/CreateStudent";

export default function App() {
  return (
    <div>
      <GetStudents />
      <CreateStudent />
    </div>
  );
}
  