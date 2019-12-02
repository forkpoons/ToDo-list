import React from "react";
import {addToDoList} from "../action";
import {connect} from "react-redux";

const ToDoListCard = ({name, id, Show, setIsEdit, setEditID, onDeleteTodoList}) => {
    console.log('sss',name);
    return (
        <div>
            <div>
                {name}
            </div>
            <button onClick={() => {Show(name); setIsEdit(true); setEditID(id)}}>edit</button>
            <button onClick={() => onDeleteTodoList(id)}>delete</button>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteTodoList: (name) => {
            dispatch(addToDoList(name))
        },
    }
};

export default connect( mapDispatchToProps)(ToDoListCard);