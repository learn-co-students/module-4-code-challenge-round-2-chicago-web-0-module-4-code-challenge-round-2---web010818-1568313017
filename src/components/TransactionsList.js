import React from 'react'
import { transactions } from '../transactionsData';

const TransactionsList = (props) => {
  { const mappedTransactions = transactions.map((transaction)=>{
    return <transaction 
      posted_at={this.props.posted_at} 
      description={this.props.description}
      category={this.props.description}
      amount={this.props.amount}
      />
  })
}
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

        {/* {<transaction transactionsStatus={this.transactionsStatus}/>} */}
        

      </tbody>
    </table>
  )
}

export default TransactionsList
