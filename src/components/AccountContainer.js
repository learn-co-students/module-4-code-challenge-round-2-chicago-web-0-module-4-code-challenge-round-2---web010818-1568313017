import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      allTransactions: [],
      filteredTransactions: null
    }

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(resp => resp.json())
    .then(fetchedTransactions => {
      this.setState({ allTransactions: fetchedTransactions})
    })
  }

  handleChange = (srcValue) => {
    console.log("Search Value Inside handleSearch", srcValue)
    this.setState(prevState => {
      const filteredTransactions = prevState.allTransactions.filter(trans => 
        trans.description.toLowerCase().includes(srcValue.toLowerCase()) 
        || 
        trans.category.toLowerCase().includes(srcValue.toLowerCase())
        )
      return {
        filteredTransactions
      }
    })
  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList 
          transactions={
            this.state.filteredTransactions ? 
            this.state.filteredTransactions 
            : 
            this.state.allTransactions
          }
        />
      </div>
    )
  }
}

export default AccountContainer