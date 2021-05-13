//import logo from './logo.svg';
import React, { Component } from 'react';
import Menu from './Menu';
import './App.css';
import Dado from './Dado';
const initialState={
  ruta:'home'
}
class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }
 cambioDeRuta=(ruta)=>{
  this.setState({ruta: ruta})
 }
  render() {
    return (
      <div className='App'>

        {this.state.ruta==='home'
          ?<Menu cambioDeRuta={this.cambioDeRuta} />
          : <Dado />
        }
           
      </div>
    );
  }
  
}

export default App;
