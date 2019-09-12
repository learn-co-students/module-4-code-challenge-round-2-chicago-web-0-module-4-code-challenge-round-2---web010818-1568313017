import React from 'react'

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.transaction.posted_at}</td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.category}</td>
      <td>{props.transaction.amount.toLocaleString('rro-RO', { style: 'currency', currency: 'RON' })}</td>
    </tr>
  )
}

export default Transaction
