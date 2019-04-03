import React, { Component } from 'react';
import BachelorsWrapper from './BachelorsWrapper';
import {bachelorsTable} from './bachelors-table';
import {Container, Row, Col} from 'react-bootstrap';

const DisplayContestants = props => {
  let mapContestants = props.contestants.map((contestant, i) => (
    <BachelorsWrapper
      contestant={contestant}/>
  ))
  return (
    <div>
      <h1>Saucy Gentlemen</h1>
      <Container>
        <Row>
          <Col>{mapContestants}</Col>
        </Row>
      </Container>
    </div>
  )
}

class BachelorsView extends Component {
  render() {
    return (
      <DisplayContestants contestants={bachelorsTable} />
    );
  }
}

export default BachelorsView
