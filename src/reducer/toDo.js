const toDo = (state = {
                  0: {name: 'Test', list: [{name: 'do 1', date: new Date(), done: false, urgency: false}]},
                  1: {name: 'Test', list: [{name: 'do 1', date: new Date(), done: false, urgency: false}]}
              },
              action) => {
    console.log(state, action);
    switch (action.type) {
        case 'ADD_TODOLIST':
            return {
                ...state,
                [action.id]: {
                    name: action.name,
                    list: [{name: 'do 1', date: new Date(), done: false, urgency: false}],
                }
            }
                ;
        case 'EDIT_TODOLIST':
            return {
                ...state,
                [action.id]: {
                    name: action.name,
                    list: state[action.id].list,
                }
            };
        case 'DELETE_TODOLIST':
            let newState = state;
            delete newState[action.id];
            return Object.assign({}, newState, {});
        default:
            return state;
    }
};

export default toDo;