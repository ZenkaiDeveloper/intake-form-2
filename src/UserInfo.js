import React, { Component } from 'react';

class UserInfo extends Component {
  submitHandler = e=>{
    e.preventDefault();
    console.log("hi");
  }
  render() {
    return (
      <div className="App">
      <h2 className="show-title">My Profile</h2>
      <form onSubmit = {this.submitHandler}>
        <div>
          <label>Name</label>
          <input type="text"></input>
        </div>

        <div>
          <label>Date Of Birth</label>
          <input type="date"></input>
        </div>

        <div>
          <label>Email</label>
          <input type="email"></input>
        </div>

        <div>
          <label>Phone</label>
          <input type="phone"></input>
        </div>

        <textarea className="message"></textarea>
        <input type="submit"></input>
      </form>
      </div>
    );
  }
}

export default UserInfo;
