import React from "react";
import {connect} from 'react-redux';
import ToDoCard from "./ToDoCard";
import {addToDo, editToDo} from "../action/index";
import {Button, Modal, Form} from 'react-bootstrap';

const ToDoList = ({toDo, status, onAddTodo, onEditTodo}) => {
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

    let toDoCard = [];
    for (let key in toDo[status.useListID].list) {
        toDoCard.push(toDo[status.useListID].list[key]);
        toDoCard[toDoCard.length-1].id = key*1;
    }

    return (
        <div className='toDoList'>
            <div>
                {toDo[status.useListID].name}
            </div>
            <div>
                {toDoCard.map(todo => (<ToDoCard name={todo.name} date={todo.date} id={todo.id} Show={handleShow} setIsEdit={setIsEdit}
                                                 setEditID={setEditID} />))}
            </div>
            <div style={{margin: '20px 0 0'}}>
                <Button onClick={() => handleShow("")}>add</Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{isEdit ? "Изменить" : "Добавить"} дело.</Modal.Title>
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
                                onEditTodo(editID, value);
                            } else
                                onAddTodo(status.useListID, value, true);
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