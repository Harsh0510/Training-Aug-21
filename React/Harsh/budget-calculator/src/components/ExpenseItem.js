import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

export const ExpenseItem = ({ expense, handleDelete, handleEdit }) => {
  const { id, charge, amount } = expense;
  return (
    <>
      <li className="item">
        <div className="info">
          <div className="expense">{charge}</div>
          <div className="amount">{amount}</div>
        </div>
        <div>
          <button
            className="edit-btn"
            aria-label="edit button"
            onClick={() => {
              handleEdit(id);
            }}
          >
            <MdEdit />
          </button>
          <button
            className="clear-btn"
            aria-label="delete button"
            onClick={() => {
              handleDelete(id);
            }}
          >
            <MdDelete />
          </button>
        </div>
      </li>
    </>
  );
};
