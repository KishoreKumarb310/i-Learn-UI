import React, {Component} from 'react';
import Router from 'react-router';

class Tiles extends Component{

    constructor(){
        super();
        this.state = {};
    }

    render(){
        return (
                <div className="card">
                    <h3>{this.props.name}</h3>
                </div>
        )
    
    }
}

export default Tiles;