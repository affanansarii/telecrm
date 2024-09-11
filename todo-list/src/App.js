import './App.css';
import { Col, Container, Row } from "react-bootstrap";
import ToDoList from './components/ToDoList';
import { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo';

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {

    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setTodos(savedTodos);
    }

  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), text: todo }]);
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (

    <Container className='mt-5'>

      <Row>
        <Col>
          <h1 className='text-center'>Todo App</h1>
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <AddTodo addTodo={addTodo} />
          <ToDoList todos={todos} removeTodo={removeTodo} />
        </Col>
      </Row>

    </Container>

  );
}

export default App;
