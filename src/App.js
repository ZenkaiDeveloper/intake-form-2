import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Vaccines from './Vaccines';
import UserInfo from './UserInfo';
import Report from './report';
import {Link, Route} from 'react-router-dom';

class App extends Component {
  state = {
    mainComponent:""
  }

  clickHandler = (e) =>{
    this.setState({
      mainComponent: e.target.innerText
    })
  }

  render() {
    return (
      this.state.mainComponent === "Generate Document" ? <Report /> : (
      <div className="App">


        <div className="wrapper">
          <div className="categories">
            <p onClick={this.clickHandler}>Vaccines</p>
            <p onClick={this.clickHandler}>Surgeries</p>
            <p onClick={this.clickHandler}>Medications</p>
            <p onClick={this.clickHandler}>Allergies</p>
            <p onClick={this.clickHandler}>My Profile</p>

            <button onClick={this.clickHandler} className="btn-danger">Generate Document</button>


          </div>
          <div className="main">
            {this.state.mainComponent === "My Profile" ? <UserInfo/> : <Vaccines name={this.state.mainComponent}/>}
          </div>
        </div>
      </div>
    )
    );
  }
}

export default App;
