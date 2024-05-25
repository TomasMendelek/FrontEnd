import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import '/src/index.css';
import { grey } from '@mui/material/colors';
const color = grey[800];


export const AddTask = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      onAdd(task);
      setTask('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };
  

  return (
    <>
      <Typography variant="h2" sx={{ fontSize: 36, ml: 4, color: color }}>
        Mi día 
        </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'stretch', mt: 0, ml: 2, mr: 2, mb: 2, alignItems: 'center' }}>
        <input
          className='addTask'
          type="text"
          placeholder="Agregar Tarea!"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button sx={{ m: 1 }} variant="contained" onClick={handleAddTask}>Agregar</Button>
      </Box>
    </>
  );
};
