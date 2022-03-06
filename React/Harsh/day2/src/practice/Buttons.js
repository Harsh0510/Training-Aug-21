import React from "react";

export default function Buttons({ handleDelete, id }) {
  const btnStyle = {
    backgroundColor: "red",
    color: "white",
    fontSize: "2rem",
    height: "40px",
    marginTop: "10px",
  };
  return (
    <button type="button" style={btnStyle} onClick={() => handleDelete(id)}>
      delete me
    </button>
  );
}
