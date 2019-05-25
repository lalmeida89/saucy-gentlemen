import React, { Component } from 'react'
import './rules.css'

class Rules extends Component {
  render() {
    return (
      <div className='rules'>
        <h3> Scoring Breakdown </h3>
        <p> Each team will be randomly assigned two hot dudes during the second week of The Bachelorette </p>
        <p> Teams are awarded points based on how long their players survive </p>
        <p> Each week that a player survives, their team will earn points based as follows: <br />
            Surving the first week = 1 point. <br />
            Surving the second week = 2 points. <br />
            Surving the third week = 3 points. <br />
            And so on.
        </p>
        <p> If one of the players on your team wins the whole damn thang, that team will be awarded 12 points. </p>
        <p> The points standing, from highest to lowest, will determine the draft order </p>
        <p> In case of a tie, standings will be determine by the combined height of both of their players </p>
        <p> Standings will be updated every Tuesday night </p>
      </div>
    );
  }
}
export default Rules
