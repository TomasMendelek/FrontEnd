import { Box, IconButton, List, ListItem, Tooltip, Checkbox } from '@mui/material'
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export const TodoForm = ({ tasks, setTasks }) => {

  const eliminarTask = (index) => {
    const taskEliminado = tasks.filter((task, i) => i !== index);
    setTasks(taskEliminado)
  }


  return (
    <Box sx={{display:'flex', flexDirection:"row", justifyContent:"stretch", mr:10, ml:5, alignItems:"center"}}>
        <List sx={{ width:"100%"}}>
        
          {tasks.map((task, index) => (
            <ListItem key={index} sx={{ bgcolor: "white", m:1, borderRadius: "10px", display:"flex", justifyContent:"space-between"}}>
            <Box sx={{alignItems:"center"}}>
              <Checkbox color="success" />
              {task}
            </Box>
            <Tooltip placement="right"  title="Borrar">
              <IconButton onClick={() => eliminarTask(index)}  color='error'>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </ListItem>
          ))}
        </List>
    </Box>
  );
}
