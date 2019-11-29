import React from "react";
import {connect} from 'react-redux';
import ToDoListCard from "./ToDoListCard";
import {addToDoList, editToDoList} from "../action/index";
import {Button, Modal, Form} from 'react-bootstrap';

const ToDoList = ({toDo, onAddTodolist, onEditTodolist}) => {
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

    let todolists = [];
    toDo.forEach((todo, key, map) => (
        todolists[key] = <ToDoListCard toDo={todo} Show={handleShow} setIsEdit={setIsEdit} setEditID={setEditID}/>
    ));

    return (
        <div className='toDoList'>
            <div>
                filter
            </div>
            <div>
                {todolists.map(e => e)}
            </div>
            <div style={{margin: '20px 0 0'}}>
                <Button onClick={() => handleShow("")}>add</Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{isEdit ? "Изменить" : "Добавить"} список дел.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Название <Form.Control type="text" placeholder="" value={value} onChange={handleChange}
                                           id="inputAddList" isInvalid={isInvalid}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => {
                        if (value !== "") {
                            handleClose();
                            if (isEdit)
                            {
                                console.log("qwe");
                                onEditTodolist(value, editID);
                            }
                            else
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);