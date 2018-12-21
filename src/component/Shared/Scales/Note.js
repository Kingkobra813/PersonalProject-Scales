import React from "react"

const Note = props => {
    return props.show && <p>{props.note}</p>
}

export default Note;