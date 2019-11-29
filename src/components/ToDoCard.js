import React from "react";
import { Button} from 'react-bootstrap';

const ToDoCard = ({toDo}) => {
    return (
        <div>
            <div>
            {toDo.name}
            </div>
            <Button>Edit</Button>
            <Button>Delete</Button>
        </div>
    )
};

export default ToDoCard;