import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from './actions'; 


const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const updatedTasksAdd = [...state.tasks, { ...action.payload, completed: false }];
      localStorage.setItem('tasks', JSON.stringify(updatedTasksAdd)); 
      return {
        ...state,
        tasks: updatedTasksAdd,
      };
    case DELETE_TASK:
      const updatedTasksDelete = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(updatedTasksDelete)); 
      return {
        ...state,
        tasks: updatedTasksDelete,
      };
    case TOGGLE_TASK: 
      const updatedTasksToggle = state.tasks.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasksToggle)); 
      return {
        ...state,
        tasks: updatedTasksToggle,
      };
    default:
      return state;
  }
};

export default rootReducer;
