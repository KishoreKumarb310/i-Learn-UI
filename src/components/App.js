import React, {Component} from 'react';
import '../styles/index.css';
import Login from './Login';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './Home';

class App extends Component {

    render(){
        const role = document.getElementById("role") || "T";
        const userName = document.getElementById("userName") || "Guest User";
        return(
            <div className="App">
                <Header userName = {userName}/>
                    <Home role={role}/>
                <Footer />
            </div>
        )
    }
}

export default App;