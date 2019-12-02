const toDo = (state = {
                  0: {name: 'Test', list: [{name: 'do 1', date: '', done: false, urgency: false}]},
                  1: {name: 'Test', list: [{name: 'do 1', date: '', done: false, urgency: false}]}
              },
              action) => {
    console.log(state, action);
    switch (action.type) {
        case 'ADD_TODOLIST':
            console.log(Object.assign({}, state, {
                [action.id]: {
                    name: action.name,
                    id: action.id,
                    list: [{name: 'do 1', date: '', done: false, urgency: false}]
                }
            }));
            return Object.assign({}, state, {
                [action.id]: {
                    name: action.name,
                    id: action.id,
                    list: [{name: 'do 1', date: '', done: false, urgency: false}]
                }
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