import React from "react";
import Note from "./Note";

class NoteGrid extends React.Component {
  render() {
    return (
      <div>
        {/* string 1 */}
        <div style={{ display: "flex", height: 40 }}>
          <div
            style={{
              width: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 50

              // backgroundColor: 'red',
              // width: 70,
              // opacity: .8,
              // border: '1px solid green',
              // height: 50
            }}
          >
            {this.props.notes.includes("E") && (
              <Note name="E" root={this.props.root} />
            )}
          </div>

          {/* fret 1 */}
          <div
            style={{
              width: 120,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("F") && (
              <Note name="F" root={this.props.root} />
            )}
          </div>
          {/* fret 2 */}
          <div
            style={{
              width: 117,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("F#") && (
              <Note name="F#" root={this.props.root} />
            )}
          </div>
          {/* fret 3 */}
          <div
            style={{
              width: 112,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("G") && (
              <Note name="G" root={this.props.root} />
            )}
          </div>
          {/* fret 4 */}
          <div
            style={{
              width: 105,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("G#") && (
              <Note name="G#" root={this.props.root} />
            )}
          </div>
          {/* fret 5 */}
          <div
            style={{
              width: 99,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("A") && (
              <Note name="A" root={this.props.root} />
            )}
          </div>
          {/* fret 6 */}
          <div
            style={{
              width: 93,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("A#") && (
              <Note name="A#" root={this.props.root} />
            )}
          </div>
          {/* fret 7 */}
          <div
            style={{
              width: 88,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("B") && (
              <Note name="B" root={this.props.root} />
            )}
          </div>
          {/* fret 8 */}
          <div
            style={{
              width: 84,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("C") && (
              <Note name="C" root={this.props.root} />
            )}
          </div>
          {/* fret 9 */}
          <div
            style={{
              width: 80,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("C#") && (
              <Note name="C#" root={this.props.root} />
            )}
          </div>
          {/* fret 10 */}
          <div
            style={{
              width: 75,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("D") && (
              <Note name="D" root={this.props.root} />
            )}
          </div>
          {/* fret 11 */}
          <div
            style={{
              width: 70,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("D#") && (
              <Note name="D#" root={this.props.root} />
            )}
          </div>
          {/* fret 12 */}
          <div
            style={{
              width: 67,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("E") && (
              <Note name="E" root={this.props.root} />
            )}
          </div>
        </div>

        {/* string 2 */}
        <div style={{ display: "flex", height: 45 }}>
          <div
            style={{
              width: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 50

              //
              // width: 70,
              // display: 'flex',

              //
              // height: 50
            }}
          >
            {this.props.notes.includes("B") && (
              <Note name="B" root={this.props.root} />
            )}
          </div>

          {/* fret 1 */}
          <div
            style={{
              width: 120,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("C") && (
              <Note name="C" root={this.props.root} />
            )}
          </div>
          {/* fret 2 */}
          <div
            style={{
              width: 117,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("C#") && (
              <Note name="C#" root={this.props.root} />
            )}
          </div>
          {/* fret 3 */}
          <div
            style={{
              width: 112,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("D") && (
              <Note name="D" root={this.props.root} />
            )}
          </div>
          {/* fret 4 */}
          <div
            style={{
              width: 105,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("D#") && (
              <Note name="D#" root={this.props.root} />
            )}
          </div>
          {/* fret 5 */}
          <div
            style={{
              width: 99,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("E") && (
              <Note name="E" root={this.props.root} />
            )}
          </div>
          {/* fret 6 */}
          <div
            style={{
              width: 93,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("F") && (
              <Note name="F" root={this.props.root} />
            )}
          </div>
          {/* fret 7 */}
          <div
            style={{
              width: 88,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("F#") && (
              <Note name="F#" root={this.props.root} />
            )}
          </div>
          {/* fret 8 */}
          <div
            style={{
              width: 84,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("G") && (
              <Note name="G" root={this.props.root} />
            )}
          </div>
          {/* fret 9 */}
          <div
            style={{
              width: 80,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("G#") && (
              <Note name="G#" root={this.props.root} />
            )}
          </div>
          {/* fret 10 */}
          <div
            style={{
              width: 75,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("A") && (
              <Note name="A" root={this.props.root} />
            )}
          </div>
          {/* fret 11 */}
          <div
            style={{
              width: 70,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("A#") && (
              <Note name="A#" root={this.props.root} />
            )}
          </div>
          {/* fret 12 */}
          <div
            style={{
              width: 67,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("B") && (
              <Note name="B" root={this.props.root} />
            )}
          </div>
        </div>

        {/* string 3 */}

        <div style={{ display: "flex", height: 45 }}>
          <div
            style={{
              width: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 50
            }}
          >
            {this.props.notes.includes("G") && (
              <Note name="G" root={this.props.root} />
            )}
          </div>

          {/* fret 1 */}
          <div
            style={{
              width: 120,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("G#") && (
              <Note name="G#" root={this.props.root} />
            )}
          </div>
          {/* fret 2 */}
          <div
            style={{
              width: 117,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("A") && (
              <Note name="A" root={this.props.root} />
            )}
          </div>
          {/* fret 3 */}
          <div
            style={{
              width: 112,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("A#") && (
              <Note name="A#" root={this.props.root} />
            )}
          </div>
          {/* fret 4 */}
          <div
            style={{
              width: 105,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("B") && (
              <Note name="B" root={this.props.root} />
            )}
          </div>
          {/* fret 5 */}
          <div
            style={{
              width: 99,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("C") && (
              <Note name="C" root={this.props.root} />
            )}
          </div>
          {/* fret 6 */}
          <div
            style={{
              width: 93,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("C#") && (
              <Note name="C#" root={this.props.root} />
            )}
          </div>
          {/* fret 7 */}
          <div
            style={{
              width: 88,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("D") && (
              <Note name="D" root={this.props.root} />
            )}
          </div>
          {/* fret 8 */}
          <div
            style={{
              width: 84,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("D#") && (
              <Note name="D#" root={this.props.root} />
            )}
          </div>
          {/* fret 9 */}
          <div
            style={{
              width: 80,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("E") && (
              <Note name="E" root={this.props.root} />
            )}
          </div>
          {/* fret 10 */}
          <div
            style={{
              width: 75,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("F") && (
              <Note name="F" root={this.props.root} />
            )}
          </div>
          {/* fret 11 */}
          <div
            style={{
              width: 70,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("F#") && (
              <Note name="F#" root={this.props.root} />
            )}
          </div>
          {/* fret 12 */}
          <div
            style={{
              width: 67,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("G") && (
              <Note name="G" root={this.props.root} />
            )}
          </div>
        </div>

        {/* string 4 */}

        <div style={{ display: "flex", height: 45 }}>
          <div
            style={{
              width: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 50
            }}
          >
            {this.props.notes.includes("D") && (
              <Note name="D" root={this.props.root} />
            )}
          </div>

          {/* fret 1 */}
          <div
            style={{
              width: 120,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("D#") && (
              <Note name="D#" root={this.props.root} />
            )}
          </div>
          {/* fret 2 */}
          <div
            style={{
              width: 117,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("E") && (
              <Note name="E" root={this.props.root} />
            )}
          </div>
          {/* fret 3 */}
          <div
            style={{
              width: 112,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("F") && (
              <Note name="F" root={this.props.root} />
            )}
          </div>
          {/* fret 4 */}
          <div
            style={{
              width: 105,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("F#") && (
              <Note name="F#" root={this.props.root} />
            )}
          </div>
          {/* fret 5 */}
          <div
            style={{
              width: 99,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("G") && (
              <Note name="G" root={this.props.root} />
            )}
          </div>
          {/* fret 6 */}
          <div
            style={{
              width: 93,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("G#") && (
              <Note name="G#" root={this.props.root} />
            )}
          </div>
          {/* fret 7 */}
          <div
            style={{
              width: 88,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("A") && (
              <Note name="A" root={this.props.root} />
            )}
          </div>
          {/* fret 8 */}
          <div
            style={{
              width: 84,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("A#") && (
              <Note name="A#" root={this.props.root} />
            )}
          </div>
          {/* fret 9 */}
          <div
            style={{
              width: 80,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("B") && (
              <Note name="B" root={this.props.root} />
            )}
          </div>
          {/* fret 10 */}
          <div
            style={{
              width: 75,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("C") && (
              <Note name="C" root={this.props.root} />
            )}
          </div>
          {/* fret 11 */}
          <div
            style={{
              width: 70,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("C#") && (
              <Note name="C#" root={this.props.root} />
            )}
          </div>
          {/* fret 12 */}
          <div
            style={{
              width: 67,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("D") && (
              <Note name="D" root={this.props.root} />
            )}
          </div>
        </div>

        {/* string 5 */}

        <div style={{ display: "flex", height: 50 }}>
          <div
            style={{
              width: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 50
            }}
          >
            {this.props.notes.includes("A") && (
              <Note name="A" root={this.props.root} />
            )}
          </div>

          {/* fret 1 */}
          <div
            style={{
              width: 120,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("A#") && (
              <Note name="A#" root={this.props.root} />
            )}
          </div>
          {/* fret 2 */}
          <div
            style={{
              width: 117,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("B") && (
              <Note name="B" root={this.props.root} />
            )}
          </div>
          {/* fret 3 */}
          <div
            style={{
              width: 112,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("C") && (
              <Note name="C" root={this.props.root} />
            )}
          </div>
          {/* fret 4 */}
          <div
            style={{
              width: 105,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("C#") && (
              <Note name="C#" root={this.props.root} />
            )}
          </div>
          {/* fret 5 */}
          <div
            style={{
              width: 99,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("D") && (
              <Note name="D" root={this.props.root} />
            )}
          </div>
          {/* fret 6 */}
          <div
            style={{
              width: 93,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("D#") && (
              <Note name="D#" root={this.props.root} />
            )}
          </div>
          {/* fret 7 */}
          <div
            style={{
              width: 88,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("E") && (
              <Note name="E" root={this.props.root} />
            )}
          </div>
          {/* fret 8 */}
          <div
            style={{
              width: 84,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("F") && (
              <Note name="F" root={this.props.root} />
            )}
          </div>
          {/* fret 9 */}
          <div
            style={{
              width: 80,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("F#") && (
              <Note name="F#" root={this.props.root} />
            )}
          </div>
          {/* fret 10 */}
          <div
            style={{
              width: 75,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("G") && (
              <Note name="G" root={this.props.root} />
            )}
          </div>
          {/* fret 11 */}
          <div
            style={{
              width: 70,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("G#") && (
              <Note name="G#" root={this.props.root} />
            )}
          </div>
          {/* fret 12 */}
          <div
            style={{
              width: 67,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("A") && (
              <Note name="A" root={this.props.root} />
            )}
          </div>
        </div>

        {/* string 6 */}

        <div style={{ display: "flex", height: 50 }}>
          <div
            style={{
              width: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 50
            }}
          >
            {this.props.notes.includes("E") && (
              <Note name="E" root={this.props.root} />
            )}
          </div>

          {/* fret 1 */}
          <div
            style={{
              width: 120,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("F") && (
              <Note name="F" root={this.props.root} />
            )}
          </div>
          {/* fret 2 */}
          <div
            style={{
              width: 117,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("F#") && (
              <Note name="F#" root={this.props.root} />
            )}
          </div>
          {/* fret 3 */}
          <div
            style={{
              width: 112,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("G") && (
              <Note name="G" root={this.props.root} />
            )}
          </div>
          {/* fret 4 */}
          <div
            style={{
              width: 105,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("G#") && (
              <Note name="G#" root={this.props.root} />
            )}
          </div>
          {/* fret 5 */}
          <div
            style={{
              width: 99,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("A") && (
              <Note name="A" root={this.props.root} />
            )}
          </div>
          {/* fret 6 */}
          <div
            style={{
              width: 93,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("A#") && (
              <Note name="A#" root={this.props.root} />
            )}
          </div>
          {/* fret 7 */}
          <div
            style={{
              width: 88,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("B") && (
              <Note name="B" root={this.props.root} />
            )}
          </div>
          {/* fret 8 */}
          <div
            style={{
              width: 84,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("C") && (
              <Note name="C" root={this.props.root} />
            )}
          </div>
          {/* fret 9 */}
          <div
            style={{
              width: 80,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("C#") && (
              <Note name="C#" root={this.props.root} />
            )}
          </div>
          {/* fret 10 */}
          <div
            style={{
              width: 75,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("D") && (
              <Note name="D" root={this.props.root} />
            )}
          </div>
          {/* fret 11 */}
          <div
            style={{
              width: 70,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("D#") && (
              <Note name="D#" root={this.props.root} />
            )}
          </div>
          {/* fret 12 */}
          <div
            style={{
              width: 67,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 50
            }}
          >
            {this.props.notes.includes("E") && (
              <Note name="E" root={this.props.root} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default NoteGrid;
