import React, { Component } from "react"
import { DropdownButton, MenuItem, Button } from "react-bootstrap"
import { connect } from 'react-redux';
import { updateScale } from "../../ducks/reducer"

class ScaleDropdown extends Component {


    render() {

        // console.log("scaledropdown", this.props.chosenScale)
        return (
            <div>
                <DropdownButton
                    bsTitle={this.props.chosenScale || "Scale"}
                    title={this.props.chosenScale || "Scale"}
                    onSelect={this.props.updateChosenScale}
                >
                    <MenuItem active={this.props.chosenScale === "ionian"} eventKey="ionian">Ionian Scale</MenuItem>
                    <MenuItem active={this.props.chosenScale === "dorian"} eventKey="dorian">Dorian Scale</MenuItem>
                    <MenuItem active={this.props.chosenScale === "phrygian"} eventKey="phrygian">Phrygian Scale</MenuItem>
                    <MenuItem active={this.props.chosenScale === "lydian"} eventKey="lydian">Lydian Scale</MenuItem>
                    <MenuItem active={this.props.chosenScale === "mixolydian"} eventKey="mixolydian">Mixolydian Scale</MenuItem>
                    <MenuItem active={this.props.chosenScale === "aeolian"} eventKey="aeolian">Aeolian Scale</MenuItem>
                    <MenuItem active={this.props.chosenScale === "locrian"} eventKey="locrian">Locrian Scale</MenuItem>


                </DropdownButton>
            </div>

        )
    }

}

// function mapStateToProps(state) {
//     const { selectedScale } = state

//     return (
//         selectedScale
//     )
// }

// export default connect(mapStateToProps, { updateScale })(ScaleDropdown)
export default ScaleDropdown