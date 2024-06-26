import { Box, Divider, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import TodayIcon from '@mui/icons-material/Today';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react';


export const NavDrawer = ({ setSelectedComponent }) => {
  return (
    <Box sx={{ 
      width: { xs:"100%", sm: 260 },
      bgcolor: "white", 
      minHeight: "80vh", 
      boxShadow: 3 ,
    }}>
      <nav>
        <List>
          <ListItemButton onClick={() => setSelectedComponent('Midia')}>
            <ListItemIcon>
              <TodayIcon />
            </ListItemIcon>
            <ListItemText primary="Mi día" />
          </ListItemButton>
          <ListItemButton onClick={() => setSelectedComponent('Importante')}>
            <ListItemIcon>
              <StarBorderIcon />
            </ListItemIcon>
            <ListItemText primary="Importante" />
          </ListItemButton>
          <ListItemButton onClick={() => setSelectedComponent('Tareas')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Tareas Asignadas" />
          </ListItemButton>
        </List>
      </nav>
      <Divider />
      <nav>
        <List>
          <ListItemButton onClick={() => setSelectedComponent('Settings')}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Ajustes" />
          </ListItemButton>
        </List>
      </nav>
    </Box>
  );
};
