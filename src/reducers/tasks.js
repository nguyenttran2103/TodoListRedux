import * as types from '../constants/ActionType';

var data = JSON.parse(localStorage.getItem('tasks'));
var initState = data ? data : [];

var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var generateId = () => {
    return s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4();
}

const tasks = (state = initState, action) => {
    var foundIndex = -1;
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:            
            state.push({
                id: generateId(),
                name: action.payload.name,
                status: action.payload.status
            });
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.TOGGLE_STATUS:
            foundIndex = state.findIndex(task => task.id === action.payload);
            state[foundIndex] = {
                ...state[foundIndex],
                status: !state[foundIndex].status
            }    
            localStorage.setItem("tasks", JSON.stringify(state));
            return [...state];
        case types.DELETE_TASK:
            foundIndex = state.findIndex(task => task.id === action.payload);
            state.splice(foundIndex, 1);
            localStorage.setItem("tasks", JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
}

export default tasks;