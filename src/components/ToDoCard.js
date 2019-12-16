import React from "react";
import {Button} from 'react-bootstrap';
import {deleteToDo} from "../action";
import {connect} from "react-redux";

const ToDoCard = ({name, date, id, Show, setIsEdit, setEditID, status, onDeleteTodo}) => {
    return (
        <div>
            <div>
                {name}
                {date.toTimeString()}
            </div>
            <Button onClick={() => {
                Show(name);
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
            dispatch(deleteToDo(listid, id))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoCard);