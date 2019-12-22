const status = (state = {useListID: 0, filter:'notExecuted'}, action) => {
    switch (action.type) {
        case 'SET_USELISTID':
            return {...state, useListID: action.id};
        case 'SET_FILTER':
            return {...state, filter: action.filter};
        default:
            return state;
    }
};

export default status;