import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function GetStudents() {
  const apiEndPoint = "http://localhost:5000/students";
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios.get(apiEndPoint).then((data) => setStudents(data.data));
  }, []);

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {students.map((data) => {
              return (
                <tr key={data.ID}>
                  <td>{data.ID}</td>
                  <td>{data.Name}</td>
                  <td>{data.Address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
