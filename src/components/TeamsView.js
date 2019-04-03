import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import TeamsWrapper from './TeamsWrapper';
import {teamsTable} from './teams-table'

const DisplayTeams = props => {
  let mapTeams = props.teams.map((team, idx) => {
    if(idx == 0){
      return(
        <thead>
          <tr>
            <th>{team[0]}</th>
            <th>{team[1]}</th>
            <th>{team[2]}</th>
          </tr>
        </thead>
      )
    }
    return (
      <tbody>
        <TeamsWrapper team={team.team} teamOwner={team.teamOwner} roster={team.roster} />
      </tbody>
    )
  })
  return(
    <Table striped bordered hover>
      {mapTeams}
    </Table>
  )
}

class TeamsView extends Component {
  render() {
    return (
      <DisplayTeams teams={teamsTable} />
    );
  }
}
export default TeamsView
