import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

const URL = "https://boiling-brook-94902.herokuapp.com/transactions"

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [],
      filter: ""
    }
  }

  componentDidMount() {
    this.fetchTransactions()
  }

  fetchTransactions = () => {
    fetch(URL)
      .then(response => response.json())
      .then(response => this.setState({
        transactions: response
      })
        .catch(alert)
      )
  }

  handleChange = (event) => {
    this.setState({
      filter: event.target.value
    })
    console.log(event)
  }

  filterTransactions = () => {
    return this.state.transactions.filter(
      transaction =>
        (transaction.description.toLowerCase().includes(this.state.filter.toLowerCase())) ||
        (transaction.category.toLowerCase().includes(this.state.filter.toLowerCase()))
    )
  }


  render() {

    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList transactions={this.filterTransactions()} />
      </div>
    )
  }
}

export default AccountContainer
