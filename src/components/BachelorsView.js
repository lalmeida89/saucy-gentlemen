import React, { Component } from 'react';
import BachelorsWrapper from './BachelorsWrapper';
import BachelorsTable from './bachelors-table';
import {Container, Row} from 'react-bootstrap';

const DisplayContestants = props => {
  let mapContestants = props.contestants.map((contestant, i) => (
    <BachelorsWrapper
      key={i}
      contestant={contestant}/>
  ))
  return (
    <div className='bachelors-container'>
      <Container>
        <Row>
          {mapContestants}
        </Row>
      </Container>
    </div>
  )
}

class BachelorsView extends Component {
  render() {
    return (
      <DisplayContestants contestants={BachelorsTable} />
    );
  }
}

export default BachelorsView
