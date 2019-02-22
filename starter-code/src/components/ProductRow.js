import React, { Component } from "react";
// import data from '../data.json'
// import ProductRow from "./components/ProductRow.js";

class ProductRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productInfo: this.props.product
    };
  }
  render() {
    const { productInfo } = this.state;
    console.log("ProductRow", productInfo);
    return (
      <div className="ProductRow">
        <h4>{productInfo.name}</h4>
        <p>{productInfo.price}</p>
      </div>
    );
  }
}

export default ProductRow;
