
import React, { useState } from 'react';
import { Button,Form, FormControl, InputGroup } from 'react-bootstrap';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter task"
          value={taskInput}
          onChange={handleInputChange}
        />
        <Button variant="outline-primary" onClick={addTask}>Add</Button>
      </InputGroup>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            {task}
            <Button variant="danger" onClick={() => removeTask(index)}>Remove</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
