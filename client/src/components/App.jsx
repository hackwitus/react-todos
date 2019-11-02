import React from 'react';
import { Container } from 'react-bootstrap';
import TodoList from './TodoList';

const App = props => {
  return (
    <Container>
      <TodoList />
    </Container>
  );
};

export default App;
