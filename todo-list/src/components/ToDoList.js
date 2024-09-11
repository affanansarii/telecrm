import { DeleteIcon } from "@chakra-ui/icons";
import React from "react";
import { Button, ListGroup } from "react-bootstrap";

function ToDoList({ todos, removeTodo }) {

    return (

        <ListGroup>

            {todos.length === 0 ? (
                <p className="text-center">No todos available</p>
            ) : (
                todos.map((todo) => (

                    <ListGroup.Item key={todo.id} className="d-flex justify-content-between">

                        {todo.text}

                        <Button variant="danger" size="sm" onClick={() => removeTodo(todo.id)}> <DeleteIcon /> Remove</Button>

                    </ListGroup.Item>

                ))
            )}

        </ListGroup>

    )

}

export default ToDoList;