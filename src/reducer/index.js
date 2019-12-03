import {combineReducers} from 'redux';
import user from "./user";
import toDo from "./toDo";
import status from "./status";

const reducer = combineReducers({
    user,
    toDo,
    status,
});

export default reducer