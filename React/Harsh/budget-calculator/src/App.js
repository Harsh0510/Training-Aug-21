import React, { useState, useEffect } from "react";
import "./App.css";
import { Alert } from "./components/Alert";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
import { v4 as uuidv4 } from "uuid";

// const initialExpense = [
//   {
//     id: uuidv4(),
//     charge: "rent",
//     amount: 1600,
//   },
//   {
//     id: uuidv4(),
//     charge: "car payment",
//     amount: 400,
//   },
//   {
//     id: uuidv4(),
//     charge: "credit card bill",
//     amount: 1200,
//   },
// ];
const initialExpense = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

// console.log(initialExpense);
function App() {
  // import useState
  // function returns two values
  // 1. actual value of state
  // 2 function for update the value
  // console.log(useState());
  // const result = useState(initialExpense);
  // console.log(result[0], result[1]);

  // useEffect let's perform side effects
  // runs after every render
  // first parameter - callback function(runs after render)
  // second parameter - array - for letting react know when to run useEffect

  //  *********** state values ***********

  // all expenses,add expense
  const [expenses, setExpenses] = useState(initialExpense);
  // single expense
  const [charge, setCharge] = useState("");
  // single amount
  const [amount, setAmount] = useState("");
  // alert
  const [alert, setAlert] = useState({ show: false });
  // edit
  const [edit, setEdit] = useState(false);
  // edit item
  const [id, setId] = useState(0);

  // **************** useEffect *****************
  useEffect(() => {
    console.log("called after useEffect");
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // ************* functionality **************

  // handle charge
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  // handle amount
  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  // handle alert
  const handleAlert = ({ type, text }) => {
    setAlert({
      show: true,
      type,
      text,
    });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        const tempExpenses = expenses.map((item) =>
          item.id === id ? { ...item, charge, amount } : item
        );
        setExpenses(tempExpenses);
        setEdit(false);
        handleAlert({ type: "success", text: "item edited" });
      } else {
        const singleExpense = { id: uuidv4(), charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "item added" });
      }
      setCharge("");
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: "charge can't be empty value and amount value has to be bigger than zero",
      });
    }
  };

  // clear all items
  const clearItems = () => {
    setExpenses([]);
    handleAlert({ type: "danger", text: "all items deleted" });
  };

  // handle delete
  const handleDelete = (id) => {
    const sorted = expenses.filter((expense) => expense.id !== id);
    setExpenses(sorted);
    handleAlert({ type: "danger", text: "item deleted" });
  };
  // handle edit
  const handleEdit = (id) => {
    const expense = expenses.find((item) => item.id === id);
    const { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpenseList
          expenses={expenses}
          clearItems={clearItems}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </main>
      <h1>
        total spending:{" "}
        <span className="total">
          ${" "}
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
