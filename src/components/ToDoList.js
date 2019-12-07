import React from "react";
import {connect} from 'react-redux';
import ToDoListCard from "./ToDoListCard";
import {addToDoList, editToDoList, setUseListID} from "../action/index";
import {Button, Modal, Form} from 'react-bootstrap';

const ToDoList = ({toDo, onAddTodolist, onEditTodolist, onSetUseListID}) => {
    const [show, setShow] = React.useState(false);
    const [value, setValue] = React.useState("");
    const [isInvalid, setIsInvalid] = React.useState(false);
    const [isEdit, setIsEdit] = React.useState(false);
    const [editID, setEditID] = React.useState(0);

    const handleChange = event => {
        setValue(event.target.value);
        setIsInvalid(false)
    };
    const handleClose = () => {
        setShow(false);
        setIsInvalid(false);
        setIsEdit(false);
    };
    const handleShow = name => {
        setShow(true);
        setValue(name);
    };

    let toDoListCard = [];
    for (let key in toDo) {
        toDoListCard.push(toDo[key]);
        toDoListCard[toDoListCard.length-1].id = key*1;
    }

    console.log(toDoListCard);
    return (
        <div className='toDoList'>
            <div>
                filter
            </div>
            <div>
                {toDoListCard.map(todo => (<ToDoListCard key={todo.id} name={todo.name} id={todo.id} Show={handleShow} setIsEdit={setIsEdit}
                                                         setEditID={setEditID} onClick={() => onSetUseListID(todo.id)}/>))}
            </div>
            <div style={{margin: '20px 0 0'}}>
                <Button onClick={() => handleShow("")}>add</Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{isEdit ? "Изменить" : "Добавить"} список дел.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Название
                    <Form.Control type="text" placeholder="" value={value} onChange={handleChange}
                                  id="inputAddList" isInvalid={isInvalid}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => {
                        if (value !== "") {
                            handleClose();
                            if (isEdit) {
                                console.log("qwe");
                                onEditTodolist(editID, value);
                            } else
                                onAddTodolist(value);
                        } else {
                            setIsInvalid(true)
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
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTodolist: (name) => {
            dispatch(addToDoList(name))
        },
        onEditTodolist: (id, name) => {
            dispatch(editToDoList(id, name))
        },
        onSetUseListID: (id) => {
            dispatch(setUseListID(id))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);