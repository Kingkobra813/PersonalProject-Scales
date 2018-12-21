import React from 'react'

export default ({ name, root }) => <div style={{
    borderRadius: '50%', width: 30, height: 30, backgroundColor: root === name ? 'red' : 'green', padding: '5px'

}}>{name}</div>