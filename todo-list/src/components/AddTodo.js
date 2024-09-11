import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AddIcon } from "@chakra-ui/icons";

function AddTodo({ addTodo }) {

    const [todo, setTodo] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();

        if (todo.trim() !== '') {
            addTodo(todo);
            setTodo('');
        }

    }

    return (

        <Form onSubmit={handleSubmit} className="mb-3">

            <Form.Group controlId="formBasicTodo">

                <Form.Control type="text" placeholder="Add a new Todo" value={todo} onChange={(e) => setTodo(e.target.value)} />

            </Form.Group>

            <Button variant="primary" type="submit" block> <AddIcon /> Add Todo</Button>

        </Form>

    )

}

export default AddTodo;