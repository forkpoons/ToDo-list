const toDo = (state = {
                  0: {name: 'Test', list: {0:{name: 'do 1', date: new Date(), done: false, urgency: false}}},
                  1: {name: 'Test', list: {0:{name: 'do 1', date: new Date(), done: false, urgency: false}}}
              },
              action) => {
    console.log(state, action);

    let newState;
    switch (action.type) {
        case 'ADD_TODOLIST':
            return {
                ...state,
                [action.id]: {
                    name: action.name,
                    list: [{name: 'do 1', date: new Date(), done: false, urgency: false}],
                }
            };
        case 'ADD_TODO':
        case 'EDIT_TODO':
            return {
                ...state,
                [action.listid]: {
                    list: {...state[action.listid].list,  [action.id]: {name: action.name, date: new Date(), done: false, urgency: action.urgency}},
                }};
        case 'EDIT_TODOLIST':
            return {
                ...state,
                [action.id]: {
                    name: action.name,
                    list: state[action.id].list,
                }
            };
        case 'DELETE_TODOLIST':
            newState = state;
            delete newState[action.id];
            return Object.assign({}, newState, {});
        default:
            return state;
    }
};

export default toDo;