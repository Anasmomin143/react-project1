import React, { Component } from 'react'

export default class Minipro extends Component {
  constructor() {
    super()
    this.state = {
      studname: 'Anas',
      marks: 25,
      result: ''
    }
  }
  studname = this.state.studname
  render() {
    return (
      <div>
        <p>Student Name : {this.state.studname}</p>
        <p>marks : {this.state.marks} </p>
        <p>Result : {this.state.result}</p>
        <button onClick={() => {
         
        }}>Submit</button>

      </div>
    )
  }
}
