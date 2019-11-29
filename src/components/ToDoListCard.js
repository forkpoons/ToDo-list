import React from "react";
import {addToDoList} from "../action";
import {connect} from "react-redux";

const ToDoListCard = ({toDo, Show, setIsEdit, setEditID, onEditTodolist}) => {
    return (
        <div>
            <div>
                {toDo.name}
            </div>
            <button onClick={() => {Show(toDo.name); setIsEdit(true); setEditID(toDo.id)}}>edit</button>
            <button onClick={() => onEditTodolist(1)}>delete</button>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteTodolist: (name) => {
            dispatch(addToDoList(name))
        },
    }
};

export default connect( mapDispatchToProps)(ToDoListCard);