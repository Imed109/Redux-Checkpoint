// ListTask.js
import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  const tasks = useSelector(state => state.tasks);
  const filter = useSelector(state => state.filter);
  
  const filteredTasks = tasks ? tasks.filter(task => {
    if (filter === 'DONE') {
      return task.isDone;
    } else if (filter === 'NOT_DONE') {
      return !task.isDone;
    }
    return true;  }) : [];


  return (
    <ul>
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default ListTask;