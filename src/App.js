import React, { Component } from "react";
import Router from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToastContainer />
        {Router}
      </div>
    );
  }
}

export default App;
