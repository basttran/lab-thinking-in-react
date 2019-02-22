import React, { Component } from "react";
// import data from '../data.json'
import SearchBar from "./SearchBar.js";
import ProductTable from "./ProductTable.js";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataArray: this.props.products,
      nameValue: "",
      stockValue: ""
    };
  }

  updateName(event) {
    this.props.updateName(event);
  }

  render() {
    const { dataArray } = this.state;
    console.log("FilterableProductTable.js", dataArray);
    return (
      <div className="FilterableProductTable">
        <SearchBar
          nameValue={this.state.nameValue}
          stockValue={this.props.stockValue}
          nameChange={event => this.updateName(event)}
          stockChange={event => this.stockName(event)}
        />
        <ProductTable products={dataArray} />
      </div>
    );
  }
}

export default FilterableProductTable;
