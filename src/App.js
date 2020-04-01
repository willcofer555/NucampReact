import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponents';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import './App.css';
    



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        campsites: ''
    };
}
  
  
  render() {
        return (
          <BrowserRouter>
             <div>
              <Main />
            </div>
          </BrowserRouter>
            
        );
    }
}

  

export default App;
