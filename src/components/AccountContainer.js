import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
// import { transactions } from "../transactionsData";

// 1) Display list of Trans on page after fetch trans:[]
// 2) Update state with search for filtering***filter:''
// 3) filter by description or category of user input

const URL = "https://boiling-brook-94902.herokuapp.com/transactions";

class AccountContainer extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
      filter: ""
    };
  }

  componentDidMount() {
    this.fetchTrans();
  }

  fetchTrans = () => {
    fetch(URL)
      .then(res => res.json())
      .then(trans => this.setState({ transactions: trans }));
  };

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  filterTrans = () => {
    return this.state.transactions.filter(transaction => {
      return (
        transaction.category
          .toLowerCase()
          .includes(this.state.filter.toLowerCase()) ||
        transaction.description
          .toLowerCase()
          .includes(this.state.filter.toLowerCase())
      );
    });
  };

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList transactions={this.filterTrans()} />
      </div>
    );
  }
}

export default AccountContainer;
