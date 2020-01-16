import React, { Component } from 'react';
import { render } from 'react-dom';
import Performance from './Performance';
import { Container } from 'reactstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Container>
        <Performance />
      </Container>
    );
  }
}

render(<App />, document.getElementById('root'));
