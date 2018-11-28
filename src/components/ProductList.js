import React, { Component } from "react";
import ProductListItem from "./ProductListItem";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          title: "iphone xs",
          price: 1800,
          stock: 20
        },
        {
          id: 2,
          title: "iphone xs max",
          price: 2000,
          stock: 20
        },
        {
          id: 3,
          title: "Pixel 3",
          price: 1200,
          stock: 20
        }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
    this.onSale = this.onSale.bind(this);
  }

  onSale(id) {
    let index = this.state.products.findIndex(p => p.id === id);
    this.state.products[index].stock--;
    this.setState({ products: this.state.products });
  }

  _renderProducts() {
    return this.state.products.map(p => (
      <ProductListItem key={p.id} product={p} onSale={this.onSale} />
    ));
  }

  handleClick(e) {
    let products = [
      ...this.state.products,
      { id: 4, title: "nexus", price: 800, stock: 30 }
    ];
    this.setState({ products });
  }
  render() {
    console.log("render");
    return (
      <div>
        <button onClick={this.handleClick}>Add Product</button>
        <h1>Products</h1>
        {this._renderProducts()}
      </div>
    );
  }
}

export default ProductList;
