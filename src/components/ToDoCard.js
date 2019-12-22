import React from "react";
import {Button, Form} from 'react-bootstrap';
import {deleteToDo, doneToDo} from "../action";
import {connect} from "react-redux";

const ToDoCard = ({name, date, id, urgency, done, Show, setIsEdit, setEditID, status, onDeleteTodo, onDoneToDo}) => {
    const handleDone = (event) => {
        console.log("event");
        onDoneToDo(status.useListID, id, event.target.checked);
    };

    return (
        <div>
            <div>
                <Form.Check custom checked={done} type="checkbox" label=" " id={"ch" + id} inline onChange={handleDone}/>
                {urgency ? "X " : "O "}
                {name}
                {date.toTimeString()}
            </div>
            <Button onClick={() => {
                Show(name, urgency);
                setIsEdit(true);
                setEditID(id)
            }}> edit
            </Button>
            <Button onClick={() => onDeleteTodo(status.useListID, id)}>Delete</Button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {status: state.status,}
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteTodo: (listid, id) => {
            dispatch(deleteToDo(listid, id));
        },
        onDoneToDo: (listid, id, done) => {
            dispatch(doneToDo(listid, id, done));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoCard);