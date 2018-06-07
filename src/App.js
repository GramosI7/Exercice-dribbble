import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar";
import SousNav from "./SousNav";
import Products from "./Products";
import Footer from "./Footer";
import photo from "./Tableau";


console.log(photo);

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <SousNav />
        <br/>
        <div className="flex">
        <Products />
        </div>
        
        <Footer />
      </div>
    );
  }
}

export default App;
