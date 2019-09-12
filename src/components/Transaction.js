import React from 'react'
import TransactionsList from './TransactionsList'

const Transaction = (props) => {
  transactionsStatus.map  
  return (
    <tr>
      <td>{props.transactionsStatus.posted_at}</td>
      <td>{props.transactionsStatus.description}</td>
      <td>{props.transactionsStatus.category}</td>
      <td>{props.transactionsStatus.amount}</td>
    </tr>
  )
}

export default Transaction
