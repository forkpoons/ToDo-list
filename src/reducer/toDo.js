const testValue = {name: 'Test', id: 0, list: [{name: 'do 1', date: '', done: false, urgency: false}]};
const toDo = (state = new Map([[0, testValue]]),
              action) => {
    console.log(state);
    switch (action.type) {
        case 'ADD_TODOLIST':
            return state.set(action.id, {
                name: action.name,
                id: action.id,
                list: [{name: 'do 1', date: '', done: false, urgency: false}]
            });
        case 'EDIT_TODOLIST':
            return state.set(action.id, {
                name: action.name,
                id: action.id,
                list: [{name: 'do 1', date: '', done: false, urgency: false}]
            });
        case 'DELETE_TODOLIST':
            return state.delete(action.id);
        default:
            return state;
    }
};

export default toDo;