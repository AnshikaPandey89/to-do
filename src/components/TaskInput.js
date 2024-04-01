import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const TaskInput = () => {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      dispatch(addTask({ id: Date.now(), name: taskName, completed: false }));
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          value={taskName}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter task"
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">Add Task</button>
        </div>
      </div>
    </form>
  );
};

export default TaskInput;
