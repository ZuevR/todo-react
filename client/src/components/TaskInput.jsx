import React, { useContext, useState } from 'react';
import { Button, Input } from '@material-ui/core';
import { ListContext } from '../context/ListContext';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const { addTask } = useContext(ListContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTask('')
  };

  return (
    <form style={{ display: 'flex', maxWidth: '80%', margin: '0 auto' }} onSubmit={handleSubmit}>
      <Input
        fullWidth
        autoFocus
        value={task}
        onChange={({ target: { value } }) => {
          setTask(value)
        }}
        placeholder="Enter new task"
        color="primary"
      />
      <Button
        type="submit"
        color="primary"
        variant="contained"
        onClick={addTask(task)}
      >
        Add
      </Button>
    </form>
  );
};

export default TaskInput;
