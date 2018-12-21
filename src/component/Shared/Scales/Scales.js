import React, { Component } from "react"
// import { connect } from 'react-dom'
// import { updateScalePattern } from "../../../ducks/reducer"
// import Note from "./Note";

const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#",
    "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#",
    "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#",
    "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#",
    "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#",
    "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#",
    "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]

class Scales extends Component {
    constructor(props) {
        super(props)

        this.state = {
            scales: {
                ionian: [2, 2, 1, 2, 2, 2, 1],
                dorian: [2, 1, 2, 2, 2, 1, 2],
                phrygian: [1, 2, 2, 2, 1, 2, 2],
                lydian: [2, 2, 2, 1, 2, 2, 1],
                mixolydian: [2, 2, 1, 2, 2, 1, 2],
                aeolian: [2, 1, 2, 2, 1, 2, 2],
                locrian: [1, 2, 2, 1, 2, 2, 2]
            }
        }
    }
    render() {
        const indexOfRootNote = notes.indexOf(this.props.rootNote)
        let allNotes = [];
        let j = 0;
        allNotes.push(notes[indexOfRootNote]);
        for (let i = indexOfRootNote + 2; i < notes.length; i += this.state.scales[this.props.scale][j]) {
            allNotes.push(notes[i])
            // debugger;
            j++;
            if (j > 6) {
                j = 0;
            }
            // debugger;
        }
        console.log(allNotes);
        this.props.updateNotes(allNotes)
        return (
            <div>
                {/* first string */}
                {/* <Scale note="E" show={} />
                <Scale note="F" show={} />
                <Scale note="F#" show={} />
                <Scale note="G" show={} />
                <Scale note="G#" show={} />
                <Scale note="A" show={} />
                <Scale note="A#" show={} />
                <Scale note="B" show={} />
                <Scale note="C" show={} />
                <Scale note="C#" show={} />
                <Scale note="D" show={} />
                <Scale note="D#" show={} />
                <Scale note="E" show={} /> */}
                {/* second string */}
                {/* <Scale note="B" show={} />
                <Scale note="C" show={} />
                <Scale note="C#" show={} />
                <Scale note="D" show={} />
                <Scale note="D#" show={} />
                <Scale note="E" show={} />
                <Scale note="F" show={} />
                <Scale note="F#" show={} />
                <Scale note="G" show={} />
                <Scale note="G#" show={} />
                <Scale note="A" show={} />
                <Scale note="A#" show={} />
                <Scale note="B" show={} /> */}
                {/* third string */}
                {/* <Scale note="G" show={} />
                <Scale note="G#" show={} />
                <Scale note="A" show={} />
                <Scale note="A#" show={} />
                <Scale note="B" show={} />
                <Scale note="C" show={} />
                <Scale note="C#" show={} />
                <Scale note="D" show={} />
                <Scale note="D#" show={} />
                <Scale note="E" show={} />
                <Scale note="F" show={} />
                <Scale note="F#" show={} />
                <Scale note="G" show={} /> */}
                {/* fourth string */}
                {/* <Scale note="D" show={} />
                <Scale note="D#" show={} />
                <Scale note="E" show={} />
                <Scale note="F" show={} />
                <Scale note="F#" show={} />
                <Scale note="G" show={} />
                <Scale note="G#" show={} />
                <Scale note="A" show={} />
                <Scale note="A#" show={} />
                <Scale note="B" show={} />
                <Scale note="C" show={} />
                <Scale note="C#" show={} />
                <Scale note="D" show={} /> */}
                {/* sixth string */}
                {/* <Scale note="E" show={} />
                <Scale note="F" show={} />
                <Scale note="F#" show={} />
                <Scale note="G" show={} />
                <Scale note="G#" show={} />
                <Scale note="A" show={} />
                <Scale note="A#" show={} />
                <Scale note="B" show={} />
                <Scale note="C" show={} />
                <Scale note="C#" show={} />
                <Scale note="D" show={} />
                <Scale note="D#" show={} />
                <Scale note="E" show={} /> */}
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     const { scales } = state

//     return (
//         scales
//     )
// }

// export default connect(mapStateToProps, { updateScalePattern })(Scales)
export default Scales
