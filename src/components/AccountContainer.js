import React, { useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({ allTransactions }) {
  // console.log(allTransactions)

  //Initializing state variable for the transaction form data
  const [newTransaction, setNewTransaction] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  },[]);

  const handleSubmit = () => {
    

    // Post new transaction
    fetch(`http://localhost:8001/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then((response) => {
        if (response.ok) {
          console.log("New transaction has been logged successfully");
        } else {
          console.error("Failed transaction");
        }
      })
      .catch((error) => {
        console.error("Error logging the transaction:", error);
      });

    //Reset fields submitted
    setNewTransaction({
      date: "",
      description: "",
      category: "",
      amount: "",
    });
    // reload page after post
    window.location.reload();
  };

  // method to handle the newTransaction
  const handleTransaction = (event) => {
    // we will pick the name and value properties of the event target.
    const { name, value } = event.target;
    setNewTransaction({
      ...newTransaction,
      [name]: value,
    });
  };

  return (
    <div>
      <Search />
      <AddTransactionForm addTransaction={handleSubmit} newTransaction={newTransaction} handleTransaction={handleTransaction}/>
      <TransactionsList transaction={allTransactions} />
    </div>
  );
}

export default AccountContainer;
