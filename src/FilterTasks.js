import React from 'react';
import { useDispatch } from 'react-redux';
import { filterTasks } from './JS/actions/Actions'; // Import your action creator

const FilterTasks = () => {
  const dispatch = useDispatch();

  const handleFilter = (filterType) => {
    dispatch(filterTasks(filterType)); // Dispatch action with the filter type
  };

  return (
    <div>
      <button onClick={() => handleFilter('ALL')}>All</button>
      <button onClick={() => handleFilter('DONE')}>Done</button>
      <button onClick={() => handleFilter('NOT_DONE')}>Not Done</button>
    </div>
  );
};

export default FilterTasks;
