import React, { Component } from "react";

class ProductDetail extends Component {
  render() {
    return (
      <div>
        <h1>Product Detail {this.props.match.params.id}</h1>
      </div>
    );
  }
}

export default ProductDetail;
