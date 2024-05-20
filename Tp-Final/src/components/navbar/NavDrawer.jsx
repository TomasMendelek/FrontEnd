import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText } from '@mui/material'
import React from 'react'
import TodayIcon from '@mui/icons-material/Today';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

export const NavDrawer = () => {
  return (
    <Box sx={{width: 250, bgcolor:"white", height: "100vh", boxShadow: 3 }}>
        <nav>
        <List>
        <ListItemButton>
            <ListItemIcon>
                <TodayIcon/>
            </ListItemIcon>
            <ListItemText primary="Mi dia"></ListItemText>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <StarBorderIcon/>
            </ListItemIcon>
            <ListItemText primary="Inportante"></ListItemText>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="Tareas"></ListItemText>
        </ListItemButton>
    </List>
    </nav>
    <Divider />
    <nav>
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings"></ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
    </nav>
    
    
    
    </Box>
  )
}
