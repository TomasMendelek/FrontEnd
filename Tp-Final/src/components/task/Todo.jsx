import { Box } from "@mui/material";
import { AddTask } from "./AddTask";
import { TodoForm } from "./TodoForm";
import { useState } from "react";



export const Todo = ({ drawerOpen }) => {
  const [tasks, setTasks] = useState([]) 

  

  const addTask = (task) =>{
    setTasks([...tasks, task])
  }


  return (
    <Box sx={{
      flexGrow: 1,
      transition: 'margin 0.3s',
      marginLeft: drawerOpen ? '1px' : '20px',
      padding: 2,
    }}>
        <AddTask onAdd={addTask}></AddTask>
        <TodoForm tasks={tasks} setTasks={setTasks}></TodoForm>
    </Box>
  );
};
