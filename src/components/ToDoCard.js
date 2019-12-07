import React from "react";
import {Button} from 'react-bootstrap';
import {deleteToDoList} from "../action";
import {connect} from "react-redux";

const ToDoCard = ({name, date, id, Show, setIsEdit, setEditID}) => {
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
            <Button>Delete</Button>
        </div>
    )
};

const mapStateToProps = () => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteTodoList: (id) => {
            dispatch(deleteToDoList(id))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoCard);