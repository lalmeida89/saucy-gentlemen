import React, { Component } from 'react'

class TeamsWrapper extends Component {
  render() {
    return (
        <tr>
          <td>{this.props.team}</td>
          <td>{this.props.teamOwner}</td>
          <td>{this.props.roster}</td>
        </tr>
    );
  }
}

export default TeamsWrapper
