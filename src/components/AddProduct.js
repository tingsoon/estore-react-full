import React, { Component } from "react";

class AddProduct extends Component {
  constructor() {
    super();
    this.state = {
      productTitle: "iphone",
      productPrice: 0,
      productStock: 0
    };
  }

  componentDidMount() {
    console.dir(this.stockRef);
  }

  handleChangeTitle = event => {
    this.setState({
      productTitle: event.target.value
    });
  };
  handleChangePrice = (n, event) => {
    this.setState({
      productPrice: event.target.value * n
    });
  };
  handleChangeStock = event => {
    this.setState({
      productStock: event.target.value
    });
  };

  handleSubmit = event => {
    alert(JSON.stringify({ ...this.state, stock: this.stockRef.value }));
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <button onClick={() => (this.stockRef.value = Math.random())}>
          SET
        </button>
        <button onClick={() => alert(this.stockRef.value)}>GET</button>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            value={this.state.productTitle}
            onChange={this.handleChangeTitle}
          />
          <input
            type="number"
            name="price"
            value={this.state.productPrice}
            onChange={e => this.handleChangePrice(5, e)}
          />
          <input
            type="number"
            name="stock"
            ref={eleRef => (this.stockRef = eleRef)}
          />
          <input type="submit" value="add" />
        </form>
      </div>
    );
  }
}

export default AddProduct;
