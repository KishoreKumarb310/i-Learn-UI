import React, {Component} from 'react';
import '../styles/index.css';
import Login from './Login';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './Home';

class App extends Component {

    render(){
        const role = document.getElementById("role") || "Student";
        return(
            <div className="App">
                <Header />
                    <Home role={role}/>
                <Footer />
            </div>
        )
    }
}

export default App;