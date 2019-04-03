import React, { Component } from 'react'
import './bachelors.css';

class BachelorsWrapper extends Component {
  render() {
    return (
      <div className='bachelor-card'>
        <img className='bachelor-img'
          src={`https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/${this.props.contestant.img}.jpg`}
          alt={`${this.props.contestant.name}'s picture`}
        />
        <h2> {this.props.contestant.name} </h2>
        <h4> {this.props.contestant.age}  </h4>
      </div>
    );
  }
}
export default BachelorsWrapper
