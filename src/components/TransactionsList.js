import React from "react";
import Transaction from "./Transaction";

function TransactionsList({transaction}) {
  console.log(transaction)


  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          
        </tr>
        {/* render a list of <Transaction> components here */}
        {transaction.map((item, index) => (
          <tr key={item.id}>
        <td>{item.date}</td>
        <td>{item.description}</td>
        <td>{item.category}</td>
        <td>{item.amount}</td>
        </tr>
        ))}
      </tbody>
    </table>
  );
}


export default TransactionsList;
