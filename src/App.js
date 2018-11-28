import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";

class App extends Component {
  render() {
    return (
      <div className="App Header">
        <Header />
        <ProductList />
        <Footer />
      </div>
    );
  }
}

export default App;