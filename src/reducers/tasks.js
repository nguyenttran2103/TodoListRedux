import * as types from '../constants/ActionType';

var data = JSON.parse(localStorage.getItem('tasks'));
var initState = data ? data : [];

const tasks = (state = initState, action) => {
    switch(action.type) {
        case types.LIST_ALL:
            return state;
        default:
            return state;
    }
}

export default tasks;