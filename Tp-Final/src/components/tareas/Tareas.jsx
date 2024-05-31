import { Box, Checkbox, Container, IconButton, ListItem, Skeleton, Tooltip, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useFetch } from '../../hooks/useFetch';
import { useState, useEffect } from 'react';
import { Toaster, toast } from 'sonner';

export const Tareas = ({ drawerOpen, titulo }) => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [taskList, setTaskList] = useState([]);

  const audio = new Audio("./sound.mp3");

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

  return (
    <Container>
      <Toaster richColors position="bottom-right" />
      <Box sx={{
        flexGrow: 1,
        transition: 'margin 0.3s',
        padding: 1,
        
      }}>
        <Typography variant="h2" sx={{textAlign:"center", fontSize: 36, ml: 4 }}>
        Tareas Asignadas
        </Typography>
        <ul sx={{}}>
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
          {taskList.length === 0 ? (
            <Typography variant="h3" sx={{ textAlign: 'center', mt: 10, fontSize:"24px", color:"gray" }}>
              No hay tareas Asignadas
            </Typography>
      
          ) : (
            taskList.map((task, index) => (
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
                <Tooltip placement="right" title="Borrar">
                  <IconButton onClick={() => eliminarTask(index)} color='error'>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </ListItem>
            ))
          )}
        </ul>
      </Box>
    </Container>
  );
};