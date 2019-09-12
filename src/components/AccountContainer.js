import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";

const URL = "https://boiling-brook-94902.herokuapp.com/transactions";

// Class component. Use this.props
class AccountContainer extends Component {
  constructor() {
    super();

    this.state = {
      transactions: [],
      filter: ""
    };
  }

  // DOMContentLoaded
  componentDidMount() {
    this.fetchTransactions();
  }

  fetchTransactions = () => {
    fetch(URL)
      .then(resp => resp.json())
      // .then(transactions => console.log(transactions))
      .then(transactions =>
        this.setState({
          transactions
        })
      )
      .catch(alert);
  };

  handleChange = event => {
    // console.log("got here");
    // console.log(event.target.value);
    this.setState({ filter: event.target.value });
  };

  filterTransactions = () => {
    // Filter through the transactions array from state
    return this.state.transactions.filter(
      // For each transaction in the array
      transaction =>
        // If the description of the transaction
        transaction.description
          .toLowerCase()
          // Contains the text in the filter string
          .includes(this.state.filter.toLowerCase()) ||
        // Or if the category
        transaction.category
          .toLowerCase()
          // Contains the text in the filter string
          .includes(this.state.filter.toLowerCase())
      // Return it
    );
  };

  render() {
    // console.log(this.state.transactions);
    console.log(this.state.filter);
    return (
      <div>
        {/* Give it the function */}
        <Search handleChange={this.handleChange} />
        {/* Give it the stuff */}
        {/* If there's something in the filter, do the thing. Otherwise show them all. */}
        <TransactionsList
          transactions={
            this.state.filter
              ? this.filterTransactions()
              : this.state.transactions
          }
        />
      </div>
    );
  }
}

export default AccountContainer;
