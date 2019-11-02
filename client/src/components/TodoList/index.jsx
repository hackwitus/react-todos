import * as React from 'react';
import axios from 'axios';
import {
  ListGroup,
  Spinner,
  FormControl,
  InputGroup,
  Button
} from 'react-bootstrap';
import Todo from '../Todo';

const TodoList = props => {
  const [inputValue, setInputValue] = React.useState('');
  const [todos, setTodos] = React.useState([]);

  const fetchTodos = async () => {
    const { data } = await axios.get('http://localhost:8080/todos');
    setTodos(data);
  };

  const toggleCompleted = async id => {
    let temp = todos;
    temp[id] = { ...temp[id], completed: !temp[id].completed };
    await axios.put(`http://localhost:8080/todos/${id}`, temp[id]);
    fetchTodos();
  };

  const addTodo = async () => {
    if (inputValue.length > 0) {
      const newTodo = {
        id: todos.length,
        task: inputValue,
        completed: false
      };
      setInputValue('');
      await axios.post('http://localhost:8080/todos', newTodo);
      fetchTodos();
    }
  };

  const deleteTodo = async id => {
    await axios.delete(`http://localhost:8080/todos/${id}`);
    fetchTodos();
  };

  const renderTodos = () => {
    if (todos.length < 1) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    } else {
      return todos.map(todo => {
        return (
          <Todo
            todo={todo}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
          />
        );
      });
    }
  };

  // Lifecycle Method -> Runs on componentDidMount & whenever a prop in the dependency array is changed
  React.useEffect(() => {
    fetchTodos();
  }, []); // <-- Dependency Array

  return (
    <div style={{ padding: '1rem' }}>
      <InputGroup size="lg" className="mb-3">
        <FormControl
          placeholder="New Task"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <InputGroup.Append>
          <Button variant="outline-success" onClick={addTodo}>
            Add Todo
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <ListGroup>{renderTodos()}</ListGroup>
    </div>
  );
};

export default TodoList;
