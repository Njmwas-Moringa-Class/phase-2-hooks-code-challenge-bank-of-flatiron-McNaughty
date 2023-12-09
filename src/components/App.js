import React from "react";
import AccountContainer from "./AccountContainer";
import { useState, useEffect } from "react";

function App() {

  const [transaction, setTransaction] = useState([])
  const controller = new AbortController();

  function allTransactions(){
    return (
    fetch(`http://localhost:8001/transactions`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      setTransaction(data)
     
      controller.abort();
    }))
  }

  useEffect(() => {
    allTransactions()
    console.log(transaction)
  },[])

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer allTransactions={transaction}/>
    </div>
  );
}

export default App;
