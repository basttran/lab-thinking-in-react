import React, { Component } from "react";
// import data from '../data.json'
import ProductRow from "./ProductRow.js";

class ProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataArray: this.props.products
    };
  }
  render() {
    const { dataArray } = this.state;
    console.log("ProductTable.js", dataArray);
    return (
      <div className="ProductTable">
        <ul>
          {dataArray.map(oneProduct => {
            return (
              <li key={oneProduct.name}>
                <ProductRow product={oneProduct} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ProductTable;
