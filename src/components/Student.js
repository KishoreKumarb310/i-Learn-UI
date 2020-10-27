import React, {Component} from 'react';
import Tiles from './reused/Tiles';
import data from '../resources/data/tiles/student.json';

class Student extends Component {

    constructor(){
        super();
        this.state = {
            "tilesData" : data
        }
    }

    render(){
        return(
            <div className="tileContainer">
                   {
                       this.state.tilesData.map(( (tile, i) => 
                            <Tiles key={i} name={tile.name} />
                       ))
                   }
                    
            </div>
        )
    }
}

export default Student;