import React, { Component } from "react"
import { Button } from "react-bootstrap"
import loginBackgroundImage from '../Shared/SVG/jazz-guitar-scales-6b.png'


class Auth extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{
                background: `url('${loginBackgroundImage}')`,

                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                padding: '15px',
                height: '100vh',
                width: '100vw',

            }}>
                <div style={{
                    height: '60vh',
                    width: '60vw',
                    background: '#D3D3D3',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: 'solid #7F7F7F',

                }}>
                    <div>
                        <h1>Guitar Scale Generator</h1>

                        <Button href='http://localhost:3005/login'>Login</Button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Auth;