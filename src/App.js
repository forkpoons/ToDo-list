import React from 'react';
import './styles/App.sass';
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import ToDo from "./components/ToDo";
import {Container, Row, Col} from 'react-bootstrap';

function App() {
    return (
        <Container className="App">
            <Header/>
            <Container>
                <Row>
                    <Col md={6} xs={12}>
                        <ToDoList/>
                    </Col>
                    <Col md={6} xs={12}>
                        <ToDo/>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default App;
