import { Box, Button, Checkbox, Container, IconButton, ListItem, Skeleton, TextField, Tooltip, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useFetch } from '../../hooks/useFetch';
import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'sonner';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridOnIcon from '@mui/icons-material/GridOn';
import { grey } from '@mui/material/colors';




export const Tareas = ({ drawerOpen, titulo }) => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [importantTasks, setImportantTasks] = useState ([])
  const color = grey[800];
  const color2 = grey[500];
  const audio = new Audio("./sound.mp3");

  const currentDate = new Date();
  
  const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const dayOfWeek = daysOfWeek[currentDate.getDay()];

  const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  const month = months[currentDate.getMonth()];

  const formattedDate = `${dayOfWeek}, ${month} ${currentDate.getDate()}`


  useEffect(() => {
    if (data) {
      setTaskList(data.slice(0, 8));
    }
  }, [data]);

  const eliminarTask = (index) => {
    const updatedTasks = taskList.filter((_, i) => i !== index); 
    setTaskList(updatedTasks);
    setSelectedTasks(selectedTasks.filter((i) => i !== index));
    toast.error("Tarea eliminada");
  };

  const handleCheckboxChange = (index) => {
    if (!selectedTasks.includes(index)) {
      audio.play();
      toast.success("Tarea Completada");
    }
    setSelectedTasks((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const favoriteTask = (index) => {
    if (importantTasks.includes(index)) {
      setImportantTasks(importantTasks.filter((i) => i !== index));
      toast.info("Tarea desmarcada como Importante");
    } else {
      setImportantTasks([...importantTasks, index]);
      toast.info("Tarea asignada como Importante");
    }
  };


  const filteredTasks = taskList.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Toaster richColors position="bottom-right" />
      <Box sx={{
        flexGrow: 1,
        transition: 'margin 0.3s',
        padding: 1,
      }}>
        <Box sx={{
          display:"flex",
          alignItems:"center",
          textAlign: "center",
          m:3,
          pl:15,
          pr:15,
          flexDirection:"column"
        }}>
          <Typography variant="h2" sx={{ textAlign:"center", fontSize: 36, fontWeight:"semibold"  }}>
            Tareas Asignadas
          </Typography>
           <Box sx={{display:"flex", justifyContent:"space-between", width:"100%", alignItems:"center", textAlign:"center", mt:2}}>
              <Box sx={{display:"flex"}}>
                <Button sx={{textTransform:"none", display:"flex", gap:1, ml:2, alignItems:"center", borderBottom:"2px solid ", p:"3px", borderBottomColor: "primary.light"}}>
                <FormatListBulletedIcon sx={{color: color, fontSize: "medium"}}  />
                <Typography sx={{color:color}}>List</Typography>
                </Button>
                <Button sx={{textTransform:"none",display:"flex", gap:1, ml:2, alignItems:"center",}}>
                <GridOnIcon sx={{color: color, fontSize: "medium"}}  />
                <Typography sx={{color:color}}>Grid</Typography>
                </Button>
              </Box>
              <Typography variant="subtitle1" sx={{ fontSize: 18, ml:4, color: "primary.main" }}>
                  {formattedDate}
              </Typography>
              <TextField
                label="Buscar tareas Asigandas"
                variant="standard"
                fullWidth
                value={searchTerm}
                onChange={handleSearchChange}
                sx={{ maxWidth:"200px" }}
              />
          </Box>
        </Box>
        <ul>
          {error && <li>error: {error}</li>}
          {loading &&
            <Box>
              <Skeleton
                sx={{ width: "100%", height: 50, borderRadius: "10px", mt: 3 }}
                animation="wave"
                variant="rectangular" />
              <Skeleton
                sx={{ width: "100%", height: 50, borderRadius: "10px", mt: 3 }}
                animation="wave"
                variant="rectangular" />
              <Skeleton
                sx={{ width: "100%", height: 50, borderRadius: "10px", mt: 3 }}
                animation="wave"
                variant="rectangular" />
              <Skeleton
                sx={{ width: "100%", height: 50, borderRadius: "10px", mt: 3 }}
                animation="wave"
                variant="rectangular" />
            </Box>}
          {filteredTasks.length === 0 ? (
            <Typography variant="h3" sx={{ textAlign: 'center', mt: 10, fontSize: "24px", color: "gray" }}>
              No hay tareas Asignadas
            </Typography>
          ) : (
            filteredTasks.map((task, index) => (
              <ListItem
                key={index}
                sx={{
                  backgroundColor: selectedTasks.includes(index) ? 'lightgray' : 'white',
                  mt: 1,
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  transition: "200ms",
                  }}>
                <Box sx={{ alignItems: "center", display: "flex" }}>
                  <Checkbox
                    color="success"
                    checked={selectedTasks.includes(index)}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <span style={{
                    textDecoration: selectedTasks.includes(index) ? 'line-through' : 'none',
                  }}>
                    {task.title}
                  </span>
                </Box>
                <Box>
                  <Tooltip title="Importante" placement="top">
                    <IconButton color="primary" onClick={() => favoriteTask(index)}>
                    {importantTasks.includes(index) ? <StarIcon /> : <StarBorderIcon />}
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Borrar" placement="top">
                    <IconButton color="error" onClick={() => eliminarTask(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              </ListItem>
            ))
          )}
        </ul>
      </Box>
    </Container>
  );
};
