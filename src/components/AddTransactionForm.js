import React from "react";

function AddTransactionForm({addTransaction, newTransaction,handleTransaction}) {

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    addTransaction(); // Call the addTransaction function provided as a prop
  };

  return (
    <div className="ui segment">
      <form className="ui form">   
      {/* onSubmit={handleSubmit} */}
        <div className="inline fields">
          <input type="date" name="date" value={newTransaction.date} onChange={handleTransaction} />
          <input type="text" name="description" placeholder="Description" value={newTransaction.description} onChange={handleTransaction} />
          <input type="text" name="category" placeholder="Category" value={newTransaction.category} onChange={handleTransaction} />
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={newTransaction.amount} onChange={handleTransaction} />
        </div>
        <button className="ui button" type="submit" onClick={handleSubmit}> 
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;