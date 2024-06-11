import { Box, IconButton, List, ListItem, Tooltip, Checkbox, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Toaster, toast } from 'sonner';
import { grey } from '@mui/material/colors';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';


const color = grey[300];

export const TodoForm = ({ tasks, setTasks }) => {
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [importantTasks, setImportantTasks] = useState([]);
  const audio = new Audio("./sound.mp3");

  const eliminarTask = (index) => {
    const taskEliminado = tasks.filter((task, i) => i !== index);
    setTasks(taskEliminado);
    setSelectedTasks(selectedTasks.filter((i) => i !== index));
    setImportantTasks(importantTasks.filter((i) => i !== index));
    toast.error("Tarea eliminada");
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

  const tasksCompletadas = tasks.filter((_, index) => selectedTasks.includes(index));
  const tasksActivas = tasks.filter((_, index) => !selectedTasks.includes(index));

  return (
    <>
      <Toaster closeButton richColors position="bottom-right" />
      <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: "stretch", mr: 10, ml: 5, alignItems: "center" }}>
        <List sx={{ width: "100%" }}>
          {tasks.map((task, index) => {
            if (selectedTasks.includes(index)) return null;
            return (
              <ListItem
                key={index}
                sx={{
                  bgcolor: "white",
                  m: 1,
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  transition: "300ms",
                  '&:hover': {
                    bgcolor: color,
                    boxShadow: 0
                  }
                }}
              >
                <Box sx={{ alignItems: "center" }}>
                  <Checkbox
                    color="success"
                    checked={false}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <span>{task}</span>
                </Box>
                <Box>
                  <Tooltip title="Importante" placement="top">
                    <IconButton color="primary" onClick={() => favoriteTask(index)} >
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
            );
          })}
        </List>
      </Box>
      <Box sx={{ mr: 10, ml: 5, alignItems: "center" }}>
        {tasksCompletadas.length > 0 && (
          <Accordion sx={{ backgroundColor: '#f0f0f0', borderRadius: '8px', boxShadow: 'none', m: 1 }}>
            <AccordionSummary
              sx={{ border: "none" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel-content"
              id="panel-header"
            >
              <Typography>Completadas </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ border: "none" }}>
              <List>
                {tasks.map((task, index) => {
                  if (!selectedTasks.includes(index)) return null;
                  return (
                    <ListItem
                      key={index}
                      sx={{
                        bgcolor: "lightgray",
                        m: 1,
                        borderRadius: "10px",
                        display: "flex",
                        justifyContent: "space-between",
                        transition: "200ms",
                      }}
                    >
                      <Box sx={{ alignItems: "center" }}>
                        <Checkbox
                          color="success"
                          checked={true}
                          onChange={() => handleCheckboxChange(index)}
                        />
                        <span style={{ textDecoration: 'line-through' }}>
                          {task}
                        </span>
                      </Box>
                      <Box>
                        <Tooltip title="Importante" placement="top">
                          <IconButton color="primary" onClick={() => favoriteTask(index)} >
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
                  );
                })}
              </List>
            </AccordionDetails>
          </Accordion>
        )}
      </Box>
    </>
  );
};
