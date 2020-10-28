import React, {Component} from 'react';
import '../../styles/header.css';
import logo from '../../resources/iLearn.png';

class Header extends Component {

    render(){
        return (
            <div className="header">
                    <img id = "logo" src={logo} alt="i-Learn"></img> 
                    <span id = "userName">Welcome {this.props.userName}</span> 
            </div>
        )
    }
}

export default Header;