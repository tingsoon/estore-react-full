import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import { Route, Link, Switch } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";

class App extends Component {
  render() {
    return (
      <div className="App Header">
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/products">products</Link>
            </li>
            <li>
              <Link to="/products/add">Add product</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/products" component={ProductList} />
          <Route path="/products/add" component={AddProduct} />
          <Route path="/products/:id" component={ProductDetail} />
          <Route render={() => <p>Not Found</p>} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
