import React, { Component } from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";

class KeyDropdown extends Component {
  render() {
    return (
      <div>
        <DropdownButton
          //   bstitle={this.props.rootNote || "Key"}
          title={this.props.rootNote || "Key"}
          onSelect={this.props.updateRootNote}
          id={"key"}
        >
          <MenuItem active={this.props.rootNote === "C"} eventKey="C">
            C
          </MenuItem>
          <MenuItem active={this.props.rootNote === "C#"} eventKey="C#">
            C#
          </MenuItem>
          <MenuItem active={this.props.rootNote === "D"} eventKey="D">
            D
          </MenuItem>
          <MenuItem active={this.props.rootNote === "D#"} eventKey="D#">
            D#
          </MenuItem>
          <MenuItem active={this.props.rootNote === "E"} eventKey="E">
            E
          </MenuItem>
          <MenuItem active={this.props.rootNote === "F"} eventKey="F">
            F
          </MenuItem>
          <MenuItem active={this.props.rootNote === "F#"} eventKey="F#">
            F#
          </MenuItem>
          <MenuItem active={this.props.rootNote === "G"} eventKey="G">
            G
          </MenuItem>
          <MenuItem active={this.props.rootNote === "G#"} eventKey="G#">
            G#
          </MenuItem>
          <MenuItem active={this.props.rootNote === "A"} eventKey="A">
            A
          </MenuItem>
          <MenuItem active={this.props.rootNote === "A#"} eventKey="A#">
            A#
          </MenuItem>
          <MenuItem active={this.props.rootNote === "B"} eventKey="B">
            B
          </MenuItem>
        </DropdownButton>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//     const { keyNote } = state

//     return (
//         keyNote
//     )
// }

// export default connect(mapStateToProps, { updateKeyNote })(KeyDropdown)
export default KeyDropdown;
