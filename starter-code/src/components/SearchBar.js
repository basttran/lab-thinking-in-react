import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <form>
          <label>
            Search
            <input
              onChange={event => this.props.nameChange(event)}
              type="text"
              name="nameFilter"
              value={this.props.nameValue}
            />
          </label>
          <label>
            Only Show Products in Stock
            <input
              onChange={event => this.props.stockChange(event)}
              type="checkbox"
              name="stockFilter"
              value={this.props.stockValue}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
