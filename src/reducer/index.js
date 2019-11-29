import {combineReducers} from 'redux';
import user from "./user";
import toDo from "./toDo";

const reducer = combineReducers({
    user,
    toDo,
});

export default reducer