import React, { Component } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
import { updateSelectedScale, getSavedScales } from "../../ducks/reducer";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scales: this.props.savedScales
    };
  }

  componentDidMount = () => {
    axios.get("/saved").then(response => {
      this.setState({ scales: response.data });
    });
  };

  deleteSavedScale = id => {
    axios.delete(`/saved/${id}`).then(response => {
      this.setState({ scales: response.data });
      toast.warn("Successfully removed scale from favorites", {
        position: "top-center"
      });
    });
  };

  render() {
    return (
      <div>
        {this.state.scales.map((scaleObj, index) => {
          let { scale, key, id } = scaleObj;
          return (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#D3D3D3",
                padding: "5px"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  border: "solid #7F7F7F",
                  borderRadius: "10px",
                  height: "125px",
                  width: "300px",
                  backgroundColor: "white"
                }}
              >
                <h3>
                  {key} - {scale}
                </h3>
                <Link to="/Main">
                  <Button
                    onClick={() => {
                      this.props.updateSelectedScale(scale, key);
                    }}
                  >
                    Load
                  </Button>
                </Link>
                <Button onClick={() => this.deleteSavedScale(id)}>
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  { updateSelectedScale, getSavedScales }
)(Dashboard);
