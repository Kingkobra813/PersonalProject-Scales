import React, { Component } from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";

class ScaleDropdown extends Component {
  render() {
    return (
      <div>
        <DropdownButton
          //   bsTitle={this.props.chosenScale || "Scale"}
          title={this.props.chosenScale || "Scale"}
          onSelect={this.props.updateChosenScale}
          id={"scale"}
        >
          <MenuItem
            active={this.props.chosenScale === "ionian"}
            eventKey="ionian"
          >
            Ionian Scale
          </MenuItem>
          <MenuItem
            active={this.props.chosenScale === "dorian"}
            eventKey="dorian"
          >
            Dorian Scale
          </MenuItem>
          <MenuItem
            active={this.props.chosenScale === "phrygian"}
            eventKey="phrygian"
          >
            Phrygian Scale
          </MenuItem>
          <MenuItem
            active={this.props.chosenScale === "lydian"}
            eventKey="lydian"
          >
            Lydian Scale
          </MenuItem>
          <MenuItem
            active={this.props.chosenScale === "mixolydian"}
            eventKey="mixolydian"
          >
            Mixolydian Scale
          </MenuItem>
          <MenuItem
            active={this.props.chosenScale === "aeolian"}
            eventKey="aeolian"
          >
            Aeolian Scale
          </MenuItem>
          <MenuItem
            active={this.props.chosenScale === "locrian"}
            eventKey="locrian"
          >
            Locrian Scale
          </MenuItem>
          <MenuItem
            active={this.props.chosenScale === "minorPentatonic"}
            eventKey="minorPentatonic"
          >
            Minor Pentatonic
          </MenuItem>
          <MenuItem
            active={this.props.chosenScale === "majorPentatonic"}
            eventKey="majorPentatonic"
          >
            Major Pentatonic
          </MenuItem>
        </DropdownButton>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//     const { selectedScale } = state

//     return (
//         selectedScale
//     )
// }

// export default connect(mapStateToProps, { updateScale })(ScaleDropdown)
export default ScaleDropdown;
