import React, { Component } from 'react'

class TeamsWrapper extends Component {
  render() {
    return (
        <tr>
          <td>{this.props.team.teamName}</td>
          <td>{this.props.team.teamOwner}</td>
          <td>{this.props.team.roster}</td>
        </tr>
    );
  }
}

export default TeamsWrapper
