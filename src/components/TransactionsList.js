import React from "react";
import Transaction from "./Transaction.js";

const TransactionsList = props => {
  const renderTransactions = () => {
    if (props.transactions.length !== 0)
      return props.transactions.map(transaction => {
        return (
          <Transaction
            posted_at={transaction.posted_at}
            description={transaction.description}
            category={transaction.category}
            amount={transaction.amount}
            key={transaction.id}
          />
        );
      });
  };
  
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Posted At</h3>
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

        {renderTransactions()}
      </tbody>
    </table>
  );
};

export default TransactionsList;
