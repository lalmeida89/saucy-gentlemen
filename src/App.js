import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BachelorsView from './components/BachelorsView';
import Rules from './components/Rules';
import TeamsView from './components/TeamsView';
import Button from 'react-bootstrap/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRules: false,
      showContestants: true,
      showTeams: false
    };
  }

  renderRules = () => {
    this.setState({
      showRules: true,
      showContestants: false,
      showTeams: false
    })
  }

  renderTeams = () => {
    this.setState({
      showRules: false,
      showContestants: false,
      showTeams: true
    })
  }

  renderContestants = () => {
    this.setState({
      showRules: false,
      showContestants: true,
      showTeams: false
    })
  }

  render() {
    const {showRules, showContestants, showTeams} = this.state

    return (
      <div className="App">
        <Button variant='primary' onClick={()=>this.renderRules()}>Rules </Button>
        <Button variant='secondary' onClick={()=>this.renderContestants()}>contestants </Button>
        <Button variant='info' onClick={()=>this.renderTeams()}>teams </Button>
        {showRules ? <Rules /> : null}
        {showContestants ? <BachelorsView /> : null}
        {showTeams ? <TeamsView /> : null}
      </div>
    )
  }
}

export default App;
