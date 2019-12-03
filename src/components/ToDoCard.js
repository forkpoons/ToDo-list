import React from "react";
import {Button} from 'react-bootstrap';
import {deleteToDoList} from "../action";
import {connect} from "react-redux";

const ToDoCard = ({name, date}) => {
    return (
        <div>
            <div>
                {name}
                {date.toString()}
            </div>
            <Button>Edit</Button>
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