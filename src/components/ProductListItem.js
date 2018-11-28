import React, { Component } from "react";

class ProductListItem extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onSale(this.props.product.id);
  }

  render() {
    let { title, stock, price } = this.props.product;
    return (
      <div>
        <h2>
          {title}({stock})
        </h2>
        <h2>{price}</h2>
        <button onClick={this.handleClick}>SELL</button>
      </div>
    );
  }
}

export default ProductListItem;
