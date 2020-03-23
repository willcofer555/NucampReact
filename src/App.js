import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponents';
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
            <div>
              <Main />
            </div>
        );
    }
}

  

export default App;
