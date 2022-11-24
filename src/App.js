import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import Shopping from "./pages/Shopping";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Router>
          <Home path="home" />
          <Tour path="tour" />
          <Login path="login" />
          <Upload path="upload" />
          <Shopping path="shopping" />
        </Router>
      </div>
    );
  }
}

export default App;
