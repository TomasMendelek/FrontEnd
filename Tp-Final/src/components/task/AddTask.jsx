import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import '/src/index.css';
import { grey } from '@mui/material/colors';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import TableViewIcon from '@mui/icons-material/TableView';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridOnIcon from '@mui/icons-material/GridOn';



export const AddTask = ({ onAdd, tasks = [] }) => {
  const [task, setTask] = useState('');
  const color = grey[800];
  const color2 = grey[500];
  const currentDate = new Date();
  
  const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const dayOfWeek = daysOfWeek[currentDate.getDay()];

  const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  const month = months[currentDate.getMonth()];

  const formattedDate = `${dayOfWeek}, ${month} ${currentDate.getDate()}`


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

  const taskCount = tasks.length;

  return (
    <>
    <Box  sx={{ display:"flex", alignItems:"center", justifyContent:"space-between", mr:10, mt:2}}>
      <Box sx={{display:"flex", alignItems:"center"}}>
        <WbSunnyIcon sx={{ml:4, mr:1}} />
        <Typography variant="h2" sx={{ fontSize: 36, ml: 1, mr: 2, color: color }}>
           Mi día 
        </Typography>
        {taskCount > 0 && <Typography variant='h3' sx={{fontSize:"23px", color:color2}}>
          ( {taskCount} )
          </Typography>}
          <Box sx={{display:"flex", gap:1, ml:2, alignItems:"center", borderBottom:"2px solid ", p:"3px", borderBottomColor: "primary.light"}}>
          <FormatListBulletedIcon sx={{color: color, fontSize: "medium"}}  />
          <Typography sx={{color:color}}>List</Typography>
          </Box>
          <Box sx={{display:"flex", gap:1, ml:2, alignItems:"center",}}>
          <GridOnIcon sx={{color: color, fontSize: "medium"}}  />
          <Typography sx={{color:color}}>Grid</Typography>
          </Box>
      </Box>
      <Box sx={{display:"flex", gap:1}}>
        <Button sx={{display:"flex", alignItems:"center", color: color}}>
        <ImportExportIcon />
        Short
        </Button>
        <Button sx={{display:"flex", alignItems:"center", color:color}}>
        <TableViewIcon />
        Group
        </Button>
        
      </Box>
    </Box >
    <Typography variant="subtitle1" sx={{ fontSize: 14, ml:4, color: "grey" }}>
        {formattedDate}
      </Typography>
      <Box component={"section"} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'stretch', mt: 0, ml: 2, mr: 2, mb: 2, alignItems: 'center' }}>
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
