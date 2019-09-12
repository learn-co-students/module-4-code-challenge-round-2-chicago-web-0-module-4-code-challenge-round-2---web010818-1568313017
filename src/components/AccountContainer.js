import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
      this.state={
        transactionsStatus: [],
        searchTerm: ''
      }

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  handleChange(event) {
    event.preventDefault
    const userInput = event.target.value
    this.setState({searchTerm: userInput})
    // if(searchTerm === )
    // ^ if the value of searchTerm in the state equals the value of either
    // the description or the category of the particular transaction,
    // then display only that transaction
  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.transactionsStatus}/>
      </div>
    )
  }
  componentDidMount() {
    fetch(`https://boiling-brook-94902.herokuapp.com/transactions`)
      .then(resp => resp.json())
      .then(transactionData => this.setState({transactionData}))
      // console.log(errors)
  }
}

export default AccountContainer
