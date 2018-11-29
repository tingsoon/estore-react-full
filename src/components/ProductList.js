import React, { Component } from "react";
import ProductListItem from "./ProductListItem";
import { connect } from "react-redux";
import { getProductsActionCreator } from "../actionCreators/product";
class ProductList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onSale = this.onSale.bind(this);
  }

  onSale(id) {
    let index = this.state.products.findIndex(p => p.id === id);
    let newProduct = { ...this.state.products[index] };
    newProduct.stock--;
    this.state.products[index] = newProduct;
    this.setState({ products: this.state.products });
  }

  _renderProducts() {
    return this.props.products.map(p => (
      <ProductListItem key={p.id} product={p} onSale={this.onSale} />
    ));
  }

  componentDidMount() {
    let action = getProductsActionCreator();
    this.props.dispatchFromStore(action);
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

function mapStateToProps(wholeApplicationState) {
  return {
    products: wholeApplicationState.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchFromStore: dispatch
  };
}

const connectMeToProvider = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default connectMeToProvider(ProductList);
