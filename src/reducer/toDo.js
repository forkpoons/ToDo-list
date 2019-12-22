const toDo = (state = {
                  1: {name: 'Test', list: {0: {name: 'do 1', date: new Date(), done: true, urgency: false}}},
                  2: {name: 'Test2', list: {0: {name: 'do 2', date: new Date(), done: false, urgency: false}}}
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
                    list: [],
                }
            };
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
        case 'ADD_TODO':
            return {
                ...state,
                [action.listid]: {
                    name: state[action.listid].name,
                    list: {
                        ...state[action.listid].list,
                        [action.id]: {name: action.name, date: action.date, done: false, urgency: action.urgency}
                    },
                }
            };
        case 'EDIT_TODO':
            return {
                ...state,
                [action.listid]: {
                    name: state[action.listid].name,
                    list: {
                        ...state[action.listid].list,
                        [action.id]: {name: action.name, date: new Date(), done: state[action.listid].list[action.id].done, urgency: action.urgency}
                    },
                }
            };
        case 'DONE_TODO':
            return {
                ...state,
                [action.listid]: {
                    name: state[action.listid].name,
                    list: {
                        ...state[action.listid].list,
                        [action.id]: {name: state[action.listid].list[action.id].name, date: state[action.listid].list[action.id].date, done: action.done, urgency: state[action.listid].list[action.id].urgency}
                    },
                }
            };
        case 'DELETE_TODO':
            newState = state;
            delete newState[action.listid].list[action.id];
            console.log(newState);
            return Object.assign({}, newState, {});
        default:
            return state;
    }
};

export default toDo;