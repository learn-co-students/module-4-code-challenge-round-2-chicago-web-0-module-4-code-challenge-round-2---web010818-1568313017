import React from "react";

// Function component. Don't use this.props --> just props
const Search = props => {
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        // Call the parent's function
        onChange={props.handleChange}
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
