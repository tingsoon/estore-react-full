import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ProductListItem extends PureComponent {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log("nextProps", nextProps);
  //   // console.log("this.props", this.props);``
  //   return this.props.product != nextProps.product;
  // }

  handleClick() {
    this.props.onSale(this.props.product.id);
  }

  render() {
    let { title, stock, price, id } = this.props.product;
    return (
      <div>
        <h2>
          <Link to={`/products/${id}`}>
            {title}({stock}){new Date().toISOString()}
          </Link>
        </h2>
        <h2>{price}</h2>
        <button onClick={this.handleClick}>SELL</button>
      </div>
    );
  }
}

ProductListItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired
  }),
  onSale: PropTypes.func.isRequired
};

ProductListItem.defaultProps = {
  product: {
    id: 0,
    title: "none",
    price: -1,
    stock: -1
  }
};

export default ProductListItem;
