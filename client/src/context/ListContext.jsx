import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ListContext = createContext({});

const ListContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = () => {
    axios.get('http://localhost:5000/api/v1/tasks')
      .then(({ data }) => setTasks(data))
      .catch((error) => console.log(error));
  };

  const toggleStatus = ({ id, status, description }) => () => {
    axios.patch('http://localhost:5000/api/v1/tasks', { id, status, description })
      .then(()=> {
        tasks.forEach((item, index, array) => {
          if (item.id === id) {
            item.status = !item.status;
            setTasks([...array]);
          }
        })
      })
  };

  const addTask = (task) => () => {
    axios.post('http://localhost:5000/api/v1/tasks', { description: task })
      .then(({ data }) => setTasks([...tasks, data]))
      .catch((error) => console.log(error));
  };

  const removeTask = (id) => () => {
    axios.delete(`http://localhost:5000/api/v1/tasks/${id}`)
      .then(() => tasks.filter((item) => item.id !== id))
      .then((result) => setTasks(result))
      .catch((error) => console.log(error));
  };

  const updateTask = ({ id, status, description }) => () => {
    axios.patch('http://localhost:5000/api/v1/tasks', { id, status, description })
      .then((result) => {
        tasks.forEach((item) => {
          if (item.id === id) {
            item.description = result.data.description;
            setTasks([...tasks]);
          }
        })
      })
      .catch((error) => console.log(error));
  };

  return (
    <ListContext.Provider value={{ tasks, addTask, removeTask, updateTask, toggleStatus }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;
