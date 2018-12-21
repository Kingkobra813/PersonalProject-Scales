import React, { Component } from "react"
import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

class SavedScales extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Link to='/Dashboard'>
                    <Button>Favorites</Button>
                </Link>

            </div>
        )
    }
}

export default SavedScales;