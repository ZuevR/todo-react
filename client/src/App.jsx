import React from 'react';
import { Container } from '@material-ui/core';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import ListContextProvider from './context/ListContext';

const App = () => {
  return (
    <div className="app">
      <Container maxWidth="md">
        <ListContextProvider>
          <TaskInput />
          <TaskList />
        </ListContextProvider>
      </Container>
    </div>
  );
};

export default App;
