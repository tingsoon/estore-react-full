import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login";

class App extends Component {
  render() {
    let isAdmin = true;
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
          <Route
            path="/products/add"
            render={props => {
              return isAdmin ? (
                <AddProduct {...props} extras={[]} />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/login" component={Login} />
          <Route render={() => <p>Not Found</p>} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
