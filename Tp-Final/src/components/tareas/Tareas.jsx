import { Box, Checkbox, Container, IconButton, List, ListItem, Skeleton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { AddTask } from '../task/AddTask';
import { useFetch } from '../../hooks/useFetch';
import { useState } from 'react'; // Necesitamos importar useState
import { Toaster, toast } from 'sonner'; // Importamos toast

export const Tareas = ({ drawerOpen, titulo }) => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");
  const [selectedTasks, setSelectedTasks] = useState([]);
  const audio = new Audio("./sound.mp3");

  const eliminarTask = (index) => {
    const taskEliminado = data.filter((task, i) => i !== index); // Filtramos la tarea eliminada en data
    
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

  const limitedData = data ? data.slice(0, 10) : [];

  return (
    <Container maxWidth="xl">
      <Toaster richColors position="bottom-right" />
      <Box sx={{
        flexGrow: 1,
        transition: 'margin 0.3s',
        marginLeft: drawerOpen ? '1px' : '20px',
        padding: 2,
      }}>
        <AddTask titulo="Tareas Asignadas" />
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
          {limitedData.map((task, index) => (
            <ListItem
              key={index}
              sx={{
                bgcolor: "white",
                m: 1,
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                transition: "200ms"
              }}>
              <Box sx={{ alignItems: "center" }}>
                <Checkbox
                  color="success"
                  checked={selectedTasks.includes(index)}
                  onChange={() => handleCheckboxChange(index)}
                />
                <span>{task.title}</span>
              </Box>
              <Tooltip placement="right" title="Borrar">
                <IconButton onClick={() => eliminarTask(index)} color='error'>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </ListItem>
          ))}
        </ul>
      </Box>
    </Container>
  );
}
