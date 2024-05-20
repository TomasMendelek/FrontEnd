import { Box } from "@mui/material";
import { AddTask } from "./AddTask";
export const Todo = ({ drawerOpen }) => {
  return (
    <Box sx={{
      flexGrow: 1,
      transition: 'margin 0.3s',
      marginLeft: drawerOpen ? '1px' : '20px',
      padding: 2,
    }}>
        <AddTask></AddTask>
    </Box>
  );
};
