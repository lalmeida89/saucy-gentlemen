import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import TeamsWrapper from './TeamsWrapper';
import {teamsTable} from './teams-table';
import './teams.css';

const DisplayTeams = props => {
  console.log(props.teams.sort((a,b) => a.points > b.points ))
  let mapTeams = props.teams.map((team, idx) => {
    if(idx === 0){
      return(
        <thead key={idx}>
          <tr>
            {team.map((el, i) => <th key={i}>{el}</th>)}
          </tr>
        </thead>
      )
    }
    return (
      <tbody key={idx}>
        <TeamsWrapper
          team={team} />
      </tbody>
    )
  })
  return(
    <Table striped bordered hover className='team-table'>
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
