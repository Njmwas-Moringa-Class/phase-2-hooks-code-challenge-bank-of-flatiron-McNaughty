import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({ allTransactions }) {
//   function individualT(){
//     allTransactions.map((iTransact) => {
//     return (
//       <li key={iTransact.id} >
//         transaction={iTransact}</li>

//     )
//   })
// }

  console.log(allTransactions)

  return (
    <div>
      <Search />
      <AddTransactionForm />
      {/* {allTransactions.map((iTransact) => {
        return (
          <TransactionsList
            key={iTransact.id}
            transaction={iTransact}
          />
        );
      })} */}
      <TransactionsList transaction={allTransactions}/>
    </div>
  );
}

export default AccountContainer;
