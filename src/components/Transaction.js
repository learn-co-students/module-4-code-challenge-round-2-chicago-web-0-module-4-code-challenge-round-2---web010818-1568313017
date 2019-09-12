import React from "react";

// Function component. Don't use this.props --> just props
const Transaction = props => {
  // console.log(props);
  return (
    <tr>
      <td>{props.transaction.posted_at}</td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.category}</td>
      <td>{props.transaction.amount}</td>
      {/* Yay! */}
    </tr>
  );
};

export default Transaction;
