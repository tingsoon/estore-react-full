import React, { Component } from "react";

class ProductDetail extends Component {
  render() {
    return (
      <div>
        <h1>Product Detail {this.props.match.params.id}</h1>
        <button onClick={() => this.props.history.goBack()}>GO BACK</button>
        <button onClick={() => this.props.history.push("/products/add")}>
          Add Product
        </button>
      </div>
    );
  }
}

export default ProductDetail;
