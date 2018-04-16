import { combineReducers } from 'redux';
import tasks from './tasks';
import taskForm from './taskForm';

const rootReducer = combineReducers({
    tasks,
    displayForm: taskForm
});

export default rootReducer;