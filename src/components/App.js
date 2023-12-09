import React from "react";
import AccountContainer from "./AccountContainer";
import { useState, useEffect } from "react";

function App() {
  const [transaction, setTransaction] = useState([]);
  // //state for handling new transaction data
  // const [newTranscation, setNewTransaction] = useState({
  //   date: "",
  //   description: "",
  //   category: "",
  //   amount: "",
  // });

  const controller = new AbortController();

  function allTransactions() {
    return fetch(`http://localhost:8001/transactions`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setTransaction(data);

        controller.abort();
      });
  }

  useEffect(() => {
    allTransactions();
    console.log(transaction);
  }, []);

  // // method to handle the newTransaction
  // const handleTransaction = (event) => {
  //   setNewTransaction({
  //     ...newTranscation,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // }


  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer allTransactions={transaction} />
    </div>
  );
}

export default App;
