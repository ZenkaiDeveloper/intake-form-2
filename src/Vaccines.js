import React, { Component } from 'react';

class Vaccines extends Component {
  submitHandler = e=>{
    e.preventDefault();

      let arr = localStorage.getItem(e.target.innerText);
      let obj = {
        name:e.target.name.value,
        date: e.target.date.value,
        message: e.target.message.value
      };
      arr.push(obj);
      localStorage.setItem(localStorage.getItem(e.target.innerText), arr);


    console.log("hi");
  }
  render() {
    return (
      <div className="App">
      <h2 className="show-title">{this.props.name}</h2>
      <form onSubmit = {this.submitHandler}>
        <div>
          <label>Name</label>
          <input autoComplete="off" name="name" type="text"></input>
        </div>

        <div>
          <label>Date</label>
          <input name="date" type="date"></input>
        </div>

        <textarea name="message" className="message"></textarea>
        <input type="submit"></input>
      </form>
      </div>
    );
  }
}

export default Vaccines;
