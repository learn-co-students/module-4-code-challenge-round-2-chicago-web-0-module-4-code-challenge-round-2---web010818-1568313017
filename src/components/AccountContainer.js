import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: transactions, 
      searchInput: ''
    }
  }

  componentDidMount() {
    this.fetchTransactions()
  }

  fetchTransactions = () => {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(resp => resp.json())
    .then(transactions => {
      this.setState({
        transactions: transactions
      })
    })
  }

  handleSearch = (event) => {
    console.log(event.target.value)
    this.setState({
      searchInput: event.target.value
    })
  }

  handleFilter() {
   return this.state.transactions.filter(transaction => 
     transaction.description.includes(this.state.searchInput) || transaction.category.includes(this.state.searchInput)
     
    )
  }



  render() {

    return (
      <div>
        <Search handleSearch={this.handleSearch}/>
        <TransactionsList 
        transactions={
          this.state.searchInput ? this.handleFilter() : this.state.transactions
        } />
      </div>
    )
  }
}

export default AccountContainer
