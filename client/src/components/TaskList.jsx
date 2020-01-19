import React, { useContext } from 'react';
import { List } from '@material-ui/core';
import { ListContext } from '../context/ListContext';
import Task from './Task';

const TaskList = () => {
  const { tasks } = useContext(ListContext);

  return (
    <List style={{ maxWidth: '80%', margin: '0 auto' }}>
      {tasks.map(item => (
        <Task item={item} key={item.id} />
      ))}
    </List>
  );
};

export default TaskList;
