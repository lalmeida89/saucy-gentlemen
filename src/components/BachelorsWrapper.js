import React, { Component } from 'react'
import './bachelors.css';

class BachelorsWrapper extends Component {
  render() {
    return (
      <div className='bachelor-card' id={this.props.contestant.eliminated ? 'eliminated' : 'alive'}>
        <img className='bachelor-img'
          src={`https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/${this.props.contestant.img}.jpg`}
          alt={`${this.props.contestant.name}'s profile`}
        />
        <h6> {this.props.contestant.name} </h6>
        <p> ({this.props.contestant.age}) {this.props.contestant.hometown} </p>
        <p> Team: {!this.props.contestant.team? 'Not yet drafted' : this.props.contestant.team} </p>
        <p> Points: {this.props.contestant.points} </p>
        <p> Eliminated: {this.props.contestant.eliminated ? this.props.contestant.eliminationDate : 'Still Alive'} </p>
      </div>
    );
  }
}
export default BachelorsWrapper
