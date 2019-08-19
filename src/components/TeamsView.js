import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import TeamsWrapper from './TeamsWrapper';
import TeamsTable from './teams-table';
import './teams.css';

const DisplayTeams = props => {
  const sectionLabels = ['Pick', 'Owner', 'QB1', 'Pts', 'QB2', 'Pts', 'Total Pts']
  let sortedTeams = props.teams.sort((a,b) => b.totalPoints - a.totalPoints)
  console.log(sortedTeams);
  let mapTeams = sortedTeams.map((team, idx) => (
      <tbody key={idx}>
        <TeamsWrapper
          team={team}
          pick={idx+1}/>
      </tbody>
  ))
  return(
    <Table striped bordered hover className='team-table'>
      <thead>
        <tr>
          {sectionLabels.map((el, i) => <th key={i}>{el}</th>)}
        </tr>
      </thead>
      {mapTeams}
    </Table>
  )
}

class TeamsView extends Component {
  render() {
    return (
      <DisplayTeams teams={TeamsTable} />
    );
  }
}
export default TeamsView
