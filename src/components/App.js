import React, {Component} from 'react';
import '../styles/index.css';
import book from '../resources/book.jpg';

class App extends Component {

    render(){
        return(
            <div className="App">
                <header className="title">i-Learn</header>
                <div className="wrapper">
                    <img src={book} alt="book-imahe" />
                </div>
                <footer className="footer">&copy;kiku_corps</footer>
            </div>
        )
    }
}

export default App;