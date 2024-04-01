import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/actions';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const [taskNotes, setTaskNotes] = useState({});

  useEffect(() => {
    const storedNotes = localStorage.getItem('taskNotes');
    if (storedNotes) {
      setTaskNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('taskNotes', JSON.stringify(taskNotes));
  }, [taskNotes]);

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggle = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  const handleNoteChange = (taskId, note) => {
    setTaskNotes(prevNotes => ({
      ...prevNotes,
      [taskId]: note
    }));
  };

  return (
    <div className="row">
      {tasks.map(task => (
        <div key={task.id} className="col-md-4 mb-3">
          <div className={`card ${task.completed ? 'bg-white' : ''}`}>
            <div className="card-body">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={task.completed}
                  onChange={() => handleToggle(task.id)}
                  style={{ appearance: 'none' }} 
                />
                <label className="form-check-label" style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'green' : 'initial' }}>
                  {task.name}
                </label>
              </div>
              <textarea
                className="form-control mt-2"
                rows="3"
                placeholder="Enter notes here"
                value={taskNotes[task.id] || ''}
                onChange={(e) => handleNoteChange(task.id, e.target.value)}
              ></textarea>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <button onClick={() => handleDelete(task.id)} className="btn btn-sm btn-danger">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
