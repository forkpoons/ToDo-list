import React from "react";
import {connect} from 'react-redux';
import ToDoListCard from "./ToDoListCard";
import {addToDoList, editToDoList, setUseListID, setFilter} from "../action/index";
import {Button, Modal, Form} from 'react-bootstrap';

const ToDoList = ({toDo, filter, onAddTodolist, onEditTodolist, onSetUseListID, onSetFilter}) => {
    const [show, setShow] = React.useState(false);
    const [value, setValue] = React.useState("");
    const [isInvalid, setIsInvalid] = React.useState(false);
    const [isEdit, setIsEdit] = React.useState(false);
    const [editID, setEditID] = React.useState(0);

    const handleChange = event => {
        setValue(event.target.value);
        setIsInvalid(false)
    };

    const handleChangeSelect = event => {
        onSetUseListID(0);
        onSetFilter(event.target.value);
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
        let done = 1;
        let len = 0;
        for (let keyl in toDo[key].list) {
            len++;
        }
        if (len === 0) {
            done = 0;
        } else {
            for (let keyl in toDo[key].list) {
                if (toDo[key].list[keyl].done === false) {
                    done = 2
                }
            }

        }
        if (filter === "executed") {
            if(done === 2 || done === 0){
                toDoListCard.push(toDo[key]);
                toDoListCard[toDoListCard.length - 1].done = done;
                toDoListCard[toDoListCard.length - 1].id = key * 1;
            }
        } else if (filter === "notExecuted") {
            if(done === 1){
                toDoListCard.push(toDo[key]);
                toDoListCard[toDoListCard.length - 1].done = done;
                toDoListCard[toDoListCard.length - 1].id = key * 1;
            }
        } else {
            toDoListCard.push(toDo[key]);
            toDoListCard[toDoListCard.length - 1].done = done;
            toDoListCard[toDoListCard.length - 1].id = key * 1;
        }

    }

    console.log(toDoListCard);
    return (
        <div className='toDoList'>
            <div>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control as="select" value={filter} onChange={handleChangeSelect}>
                        <option value="notExecuted">Неисполненные</option>
                        <option value="executed">Исполненные</option>
                        <option value="all">Все</option>
                    </Form.Control>
                </Form.Group>
            </div>
            <div>
                {toDoListCard.map(todo => (
                    <ToDoListCard key={todo.id} done={todo.done} name={todo.name} id={todo.id} Show={handleShow}
                                  setIsEdit={setIsEdit}
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
        filter: state.status.filter,
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
        onSetFilter: (filter) => {
            dispatch(setFilter(filter))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);