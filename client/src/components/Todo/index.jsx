import React from 'react';
import { ListGroup, ButtonGroup, Button } from 'react-bootstrap';

const Todo = ({
  todo: { id, completed, task },
  toggleCompleted,
  deleteTodo
}) => {
  return (
    <ListGroup.Item
      key={id}
      variant={completed ? 'success' : 'danger'}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      {task}
      <ButtonGroup>
        <Button onClick={() => toggleCompleted(id)}>Toggle Completed</Button>
        <Button variant="danger" onClick={() => deleteTodo(id)}>
          Delete Task
        </Button>
      </ButtonGroup>
    </ListGroup.Item>
  );
};

export default Todo;
