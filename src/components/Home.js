import React, {Component} from 'react';
import Student from './Student';
import Login from './Login';
import Teacher from './Teacher';

class Home extends Component {

    render(){
        const role = this.props.role;
        const innerComp = this.getComponent(role);
        return (
            <div className="home">
                {innerComp}
            </div>
        )
    }

    getComponent(role){
        switch(role){
            case "S":
                return <Student/>;

            case "T":
                return <Teacher/>

            default:
                return <Login/>;

        }
    }
}

export default Home;