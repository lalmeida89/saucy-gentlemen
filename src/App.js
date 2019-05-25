import React, { Component } from 'react';
import './App.css';
import BachelorsView from './components/BachelorsView';
import Rules from './components/Rules';
import TeamsView from './components/TeamsView';
import {Button} from 'react-bootstrap';
import {bachelorsTable} from './components/bachelors-table'

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

  randomDude = arr => {
    let theChosenOne = arr[Math.floor(Math.random()*arr.length)]
    return theChosenOne;
  }

  chooseTeams = arr => {
    let dupe = arr.slice()
    console.log(dupe);
    for (let i = 0; i < arr.length; i++) {
      let theGuy = this.randomDude(dupe)
      let theGuyIndex = dupe.indexOf(theGuy)
      console.log(theGuy, theGuyIndex);
      dupe.splice(theGuyIndex, 1)
    }
  }

  componentDidMount = () => {
    this.chooseTeams(bachelorsTable)
  }

  render() {
    const {showRules, showContestants, showTeams} = this.state

    return (
      <div className="App">
        <h1 className="saucy-gents-header"> Saucy Gentlemen </h1>
        <Button variant='primary' onClick={()=>this.renderContestants()}> Contestants </Button>
        <Button variant='primary' onClick={()=>this.renderTeams()}> Standings </Button>
        <Button variant='primary' onClick={()=>this.renderRules()}> Rules </Button>
        {showRules ? <Rules /> : null}
        {showContestants ? <BachelorsView /> : null}
        {showTeams ? <TeamsView /> : null}
      </div>
    )
  }
}

export default App;
