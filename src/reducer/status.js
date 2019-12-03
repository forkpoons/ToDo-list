const status = (state = {useListID: 0}, action) => {
    switch (action.type) {
        case 'SET_USELISTID':
            return {...state, useListID: action.id};
        default:
            return state;
    }
};

export default status;