import React from "react";
import {deleteToDoList} from "../action/index";
import {connect} from "react-redux";

const ToDoListCard = ({name, id, Show, setIsEdit, setEditID, onDeleteTodoList, onClick}) => {
    return (
        <div onClick={onClick}>
            <div>
                {name}
            </div>
            <button onClick={() => {
                Show(name);
                setIsEdit(true);
                setEditID(id)
            }}>
                edit
            </button>
            <button onClick={() => onDeleteTodoList(id)}>delete</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListCard);