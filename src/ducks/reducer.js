import axios from "axios";

const BASE_URL = "http://localhost:3005"

const initialState = {
    keyNote: '',
    scale: '',
    scalePattern: '',
    selectedKey: '',
    selectedScale: '',
    savedScales: []
}

const UPDATE_KEY_NOTE = "UPDATE_KEY_NOTE"
const UPDATE_SCALE = "UPDATE_SCALE"
const UPDATE_SCALE_PATTERN = "UPDATE_SCALE_PATTERN"
const UPDATE_SELECTED_SCALE = "UPDATE_SELECTED_SCALE"
const GET_SAVED_SCALES = "GET_SAVED_SCALES"

function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_KEY_NOTE:
            return Object.assign({}, state, { key: action.payload })
        case UPDATE_SCALE:
            return Object.assign({}, state, { scale: action.payload })
        case UPDATE_SCALE_PATTERN:
            return Object.assign({}, state, { scalePattern: action.payload })
        case UPDATE_SELECTED_SCALE:
            return Object.assign({}, state, { selectedScale: action.payload.scale, selectedKey: action.payload.key })
        case GET_SAVED_SCALES:
            console.log('in the case', action.payload)
            return Object.assign({}, state, { savedScales: action.payload })
        default: return state
    }
}

export function updateKeyNote(key) {
    return {
        type: UPDATE_KEY_NOTE,
        payload: key
    }
}

export function updateScale(scale) {
    return {
        type: UPDATE_SCALE,
        payload: scale
    }
}

export function updateScalePattern(scalePattern) {
    return {
        type: UPDATE_SCALE_PATTERN,
        payload: scalePattern
    }
}

export function updateSelectedScale(scale, key) {
    return {
        type: UPDATE_SELECTED_SCALE,
        payload: { scale, key }
    }
}

export function getSavedScales() {
    // return {
    //     type: GET_SAVED_SCALES,
    //     payload: 
    // }
}

export default reducer