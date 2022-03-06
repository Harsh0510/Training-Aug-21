import React from "react";
import { ExpenseItem } from "./ExpenseItem";
import { MdDelete } from "react-icons/md";

export const ExpenseList = ({
  expenses,
  clearItems,
  handleDelete,
  handleEdit,
}) => {
  return (
    <section>
      <>
        <ul className="list">
          {expenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                expense={expense}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            );
          })}
        </ul>
        <button className="btn" onClick={clearItems}>
          clear expenses
          <MdDelete className="btn-icon"></MdDelete>
        </button>
      </>
    </section>
  );
};
