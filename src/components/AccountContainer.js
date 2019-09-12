import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
// import { transactions } from "../transactionsData";

class AccountContainer extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
      searchQuery: ""
    };
  }

  handleChange = event => {
    this.setState({ searchQuery: event.target.value });
  };

  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(resp => resp.json())
      .then(json => this.setState({ transactions: json }));
  }

  // I made this case-agnostic for easier use
  filterTransactionsByCategory = () => {
    return this.state.searchQuery === ""
      ? this.state.transactions
      : this.state.transactions.filter(transaction => {
          const category = transaction.category.toLowerCase();
          return category.includes(this.state.searchQuery.toLowerCase());
        });
  };

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList transactions={this.filterTransactionsByCategory()} />
      </div>
    );
  }
}

export default AccountContainer;
