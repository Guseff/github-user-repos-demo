import React, { Component, PropTypes } from 'react'

export default class Reposes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { reposes } = this.props

        return <div className='ui eight wide column'>         
            {reposes.map(
                (name, index) => <p key={index}>{name}</p>
            )}
        </div>      
    }
}

Reposes.PropTypes = {
    reposes: PropTypes.array.isRequired
}