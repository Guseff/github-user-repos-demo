import React, { Component, PropTypes } from 'react'

export default class Users extends Component {
    constructor(props) {
        super(props);

        this.selectChange = this.selectChange.bind(this);
        this.goBtnClick = this.goBtnClick.bind(this);
    }

    selectChange(e) {
        this.props.goRepos(e.target.value);
    } 

    goBtnClick() {
       this.props.listRepos(this.props.selected);
    }

    render() {
        const { names } = this.props;

        return <div className='ui four wide column'>
            <p>
                <select className='ui dropdown' id='select' onChange={this.selectChange}>
                    <option value=''>Choose User...</option>
                    {names.map(
                        (name, index) => <option key={index} value={name}>{name}</option>
                    )}
                </select>
                <button className='ui button' onClick={this.goBtnClick}>GO</button>
            </p>                       
        </div>
        
    }
}

Users.PropTypes = {
    names: PropTypes.array.isRequired
}