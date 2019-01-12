import React, { Component } from "react";
import { updateSelectedScale } from "../../ducks/reducer";
import KeyDropdown from "../Buttons/KeyDropdown";
import ScaleDropdown from "../Buttons/ScaleDropdown";
import NoteGrid from "../Shared/NoteGrid/NoteGrid";
import SavedScales from "../Buttons/SavedScales";
import FretboardImage from "../Shared/SVG/basic-fretboard (1).jpg";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import SheetMusic from "../Shared/SVG/blankSheetMusic.jpg";

import axios from "axios";

const notes = [
  "A",
  "A#",
  "B",
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#"
];

const scales = {
  ionian: [2, 2, 1, 2, 2, 2, 1],
  dorian: [2, 1, 2, 2, 2, 1, 2],
  phrygian: [1, 2, 2, 2, 1, 2, 2],
  lydian: [2, 2, 2, 1, 2, 2, 1],
  mixolydian: [2, 2, 1, 2, 2, 1, 2],
  aeolian: [2, 1, 2, 2, 1, 2, 2],
  locrian: [1, 2, 2, 1, 2, 2, 2],
  minorPentatonic: [3, 2, 2, 3, 2],
  majorPentatonic: [2, 2, 3, 2, 3]
};

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenScale: "",
      rootNote: "",
      notes: []
    };
  }

  componentDidMount() {
    if (this.props.selectedScale) {
      this.getNotes(this.props.selectedKey, this.props.selectedScale);
      this.setState({
        chosenScale: this.props.selectedScale,
        rootNote: this.props.selectedKey
      });
    } else {
      //   this.getNotes(this.state.rootNote, this.state.chosenScale);
    }
  }

  getNotes = (rootNote, chosenScale) => {
    const indexOfRootNote = notes.indexOf(rootNote);
    let allNotes = [];
    const incrementor =
      chosenScale === "phrygian" || chosenScale === "locrian"
        ? 1
        : chosenScale === "minorPentatonic"
        ? 3
        : 2;
    let j = 0;
    allNotes.push(notes[indexOfRootNote]);
    for (
      let i = indexOfRootNote + incrementor;
      i < notes.length;
      i += scales[chosenScale][j]
    ) {
      allNotes.push(notes[i]);

      j++;
      if (j > 6) {
        j = 0;
      }
    }
    this.setState({ notes: allNotes, rootNote, chosenScale });
  };

  updateRootNote = rootNote => {
    this.getNotes(rootNote, this.state.chosenScale);
  };

  updateChosenScale = chosenScale => {
    this.getNotes(this.state.rootNote, chosenScale);
  };

  handleAddNote = event => {
    this.setState({ notes: this.state.notes.concat(event) });
  };

  handleSaveScale = () => {
    axios
      .post("/saved", {
        key: this.state.rootNote,
        scale: this.state.chosenScale
      })
      .then(response => {
        toast.success("Successfully saved to favorites.", {
          position: "top-center"
        });
      });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",

          alignItems: "center",
          flexDirection: "column",
          padding: "15px",
          backgroundColor: "#D3D3D3",
          background: `url('${SheetMusic}')`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
          margin: "0 auto",
          width: "50%"
        }}
      >
        <div
          style={{
            background: `url('${FretboardImage}')`,
            display: "flex",
            flexDirection: "column",
            // flexWrap: 'wrap',
            paddingTop: 0,
            paddingLeft: 0,
            width: 1204,
            height: 272,
            backgroundSize: "cover"
          }}
        >
          {/*
        pass function through NOteGrid
        then to Note
        */}
          <NoteGrid
            notes={this.state.notes}
            root={this.state.rootNote}
            handleAddNote={this.handleAddNote}
          />
        </div>
        {/* <Scales scale={this.state.chosenScale} rootNote={this.state.rootNote} updateNotes={this.updateNotes} /> */}
        <div style={{ display: "flex", padding: "10px" }}>
          <KeyDropdown
            updateRootNote={this.updateRootNote}
            rootNote={this.state.rootNote}
          />
          <ScaleDropdown
            updateChosenScale={this.updateChosenScale}
            chosenScale={this.state.chosenScale}
          />
          {/* <ScaleLeft />
                    <ScaleRight />
                    <ScaleAll />
                    <ScaleClear /> */}
          <Button onClick={this.handleSaveScale}>Save Scale</Button>
          <SavedScales />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  { updateSelectedScale }
)(Main);
