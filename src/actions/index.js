import * as types from '../constants/ActionType';

export const listAll = () => {
    return {
        type: types.LIST_ALL
    };
}

export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        payload: task
    };
}

export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    };
}

export const openForm = () => {
    return {
        type: types.OPEN_FORM
    };
}

export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    };
}

export const toggleStatus = (id) => {
    return {
        type: types.TOGGLE_STATUS,
        payload: id
    };
}

export const deleteTask = (id) => {
    return {
        type: types.DELETE_TASK,
        payload: id
    };
}