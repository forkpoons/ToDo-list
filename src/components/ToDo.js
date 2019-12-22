import React from "react";
import {connect} from 'react-redux';
import ToDoCard from "./ToDoCard";
import {addToDo, editToDo} from "../action/index";
import {Button, Modal, Form} from 'react-bootstrap';

const ToDoList = ({toDo, status, onAddTodo, onEditTodo}) => {
    const [show, setShow] = React.useState(false);
    const [value, setValue] = React.useState("");
    const [urgency, setUrgency] = React.useState(false);
    const [isInvalid, setIsInvalid] = React.useState(false);
    const [isEdit, setIsEdit] = React.useState(false);
    const [editID, setEditID] = React.useState(0);

    const handleChange = event => {
        setValue(event.target.value);
        setIsInvalid(false);
    };

    const handleChangeUrgency = event => {
        console.log(event.target.checked);
        setUrgency(event.target.checked);
    };

    const handleClose = () => {
        setUrgency(false);
        setShow(false);
        setIsInvalid(false);
        setIsEdit(false);
    };

    const handleShow = (name, urgency) => {
        setShow(true);
        setValue(name);
        setUrgency(urgency);
    };

    let toDoCard = [];
    if (status.useListID !== 0) {
        for (let key in toDo[status.useListID].list) {
            toDoCard.push(toDo[status.useListID].list[key]);
            toDoCard[toDoCard.length - 1].id = key * 1;
        }
    }

    return (
        <div className='toDo'>
            <div>
                {status.useListID ? toDo[status.useListID].name : status.useListID}
            </div>
            <div>
                {toDoCard.map(todo => (<ToDoCard name={todo.name} date={todo.date} id={todo.id} urgency={todo.urgency} done={todo.done} Show={handleShow} setIsEdit={setIsEdit}
                                                 setEditID={setEditID} key={todo.id}/>))}
            </div>
            <div style={{margin: '20px 0 0'}}>
                <Button onClick={() => handleShow("", false)}>add</Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{isEdit ? "Изменить" : "Добавить"} дело.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Название
                    <Form.Control type="text" placeholder="" value={value} onChange={handleChange}
                                  id="inputAddList" isInvalid={isInvalid}/>
                    <Form.Check custom label="Важность" onChange={handleChangeUrgency} type="checkbox" checked={urgency} id="checkUrgency"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => {
                        if (value !== "") {
                            handleClose();
                            if (isEdit) {
                                console.log("qwe");
                                onEditTodo(status.useListID, editID, value, urgency);
                            } else
                                onAddTodo(status.useListID, value, urgency);
                        } else {
                            setIsInvalid(true);
                        }
                    }}>
                        {isEdit ? "Изменить" : "Добавить"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        toDo: state.toDo,
        status: state.status,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTodo: (listid, name, urgency) => {
            dispatch(addToDo(listid, name, urgency))
        },
        onEditTodo: (listid, id, name, urgency) => {
            dispatch(editToDo(listid ,id, name, urgency))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);