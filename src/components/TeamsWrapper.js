import React, { Component } from 'react'

class TeamsWrapper extends Component {
  render() {
    return (
        <tr>
          <td><b>{this.props.pick}</b></td>
          <td><b>{this.props.team.teamOwner}</b></td>
          <td>{this.props.team.bachelor1}</td>
          <td>{this.props.team.bach1Points}</td>
          <td>{this.props.team.bachelor2}</td>
          <td>{this.props.team.bach2Points}</td>
          <td>{this.props.team.totalPoints}</td>
        </tr>
    );
  }
}

export default TeamsWrapper
