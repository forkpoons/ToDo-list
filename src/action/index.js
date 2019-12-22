import axios from 'axios';

const MockAdapter = require('axios-mock-adapter');
const mock = new MockAdapter(axios);
mock.onPost('/addtodolist').reply(200, {id: (Math.floor((Math.random() * (1000 - 1)) + 1000))});
mock.onPost('/edittodolist').reply(200);
mock.onPost('/deletetodolist').reply(200);

export const addToDoList = (name) => {
    return function (dispatch) {
        return axios.post('/addtodolist', {
            Name: name, headers: {'Content-Type': 'application/json'}
        })
            .then(function () {
                dispatch(addsToDoList(Math.floor((Math.random() * (1000 - 1)) + 1000), name))
            }).catch(function (error) {
                console.log(error);
            });
    }
};

export const addsToDoList = (id, name) => {
    return {
        type: 'ADD_TODOLIST',
        name,
        id,
    }
};

export const editToDoList = (id, name) => {
    return function (dispatch) {
        return axios.post('/edittodolist', {
            id: id, Name: name, headers: {'Content-Type': 'application/json'}
        })
            .then(function (response) {
                console.log(response.data);
                dispatch(editsToDoList(id, name))
            }).catch(function (error) {
                console.log(error);
            });
    }
};

export const editsToDoList = (id, name) => {
    return {
        type: 'EDIT_TODOLIST',
        name,
        id,
    }
};

export const deleteToDoList = (id, name) => {
    return function (dispatch) {
        return axios.post('/deletetodolist', {
            id: id, Name: name, headers: {'Content-Type': 'application/json'}
        })
            .then(function (response) {
                console.log('qweqweqweqwe');
                dispatch(setUseListID(0));
                dispatch(deletesToDoList(id));
            }).catch(function (error) {
                console.log(error);
            });
    }
};

export const deletesToDoList = (id) => {
    return {
        type: 'DELETE_TODOLIST',
        id,
    }
};

export const addToDo = (listid, name, urgency) => {
    return function (dispatch) {
        return axios.post('/addtodolist', {
            Name: name, headers: {'Content-Type': 'application/json'}
        })
            .then(function () {
                dispatch(addsToDo(listid, Math.floor((Math.random() * (1000 - 1)) + 1000), name, urgency, new Date()))
            }).catch(function (error) {
                console.log(error);
            });
    }
};

export const addsToDo = (listid, id, name, urgency, date) => {
    return {
        type: 'ADD_TODO',
        listid,
        name,
        id,
        urgency,
        date,
    }
};

export const editToDo = (listid, id, name, urgency) => {
    return function (dispatch) {
        return axios.post('/edittodolist', {
            id: id, Name: name, headers: {'Content-Type': 'application/json'}
        })
            .then(function (response) {
                console.log(response.data);
                dispatch(editsToDo(listid, id, name, urgency))
            }).catch(function (error) {
                console.log(error);
            });
    }
};

export const editsToDo = (listid, id, name, urgency) => {
    return {
        type: 'EDIT_TODO',
        listid,
        id,
        name,
        urgency,
    }
};

export const doneToDo = (listid, id, done) => {
    return {
        type: 'DONE_TODO',
        listid,
        id,
        done,
    }
};

export const deleteToDo = (listid, id) => {
    return function (dispatch) {
        return axios.post('/edittodolist', {
            id: id, headers: {'Content-Type': 'application/json'}
        })
            .then(function (response) {
                console.log(response.data);
                dispatch(deletesToDo(listid, id))
            }).catch(function (error) {
                console.log(error);
            });
    }
};

export const deletesToDo = (listid, id) => {
    return {
        type: 'DELETE_TODO',
        listid,
        id,
    }
};

export const setUseListID = (id) => {
    return {
        type: 'SET_USELISTID',
        id,
    }
};


export const setFilter = (filter) => {
    return {
        type: 'SET_FILTER',
        filter,
    }
};

