import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = ({
      data: transactions,
      filtered: ''
   })
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

   }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(items => {
      return this.setState({
        data: items
      })
    })
  }

  handleChange = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  filteredTransactions = () => {
    return this.state.data.filter(elem => (elem.category + " " + elem.description).toLowerCase().includes(this.state.filter))
  }

  render() {

    return (
      <div>
        <Search filter={this.handleChange} />
        <TransactionsList transactions={this.state.filter? this.filteredTransactions() : this.state.data} />
      </div>
    )
  }
}

export default AccountContainer
