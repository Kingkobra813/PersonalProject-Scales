import React, { Component } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const BASE_URL = "http://localhost:3005";

class SaveScale extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  alertSave = () => {
    axios.post("/saved").then(response => {
      alert("Successfully saved to favorites.");
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.alertSave}>Save</Button>
      </div>
    );
  }
}

export default SaveScale;
