import { Box, Divider, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import TodayIcon from '@mui/icons-material/Today';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

export const NavDrawer = () => {
  return (
    <Box sx={{ width: 250, bgcolor: "white", height: "100vh", boxShadow: 3 }}>
      <nav>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <TodayIcon />
            </ListItemIcon>
            <ListItemText primary="Mi día" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <StarBorderIcon />
            </ListItemIcon>
            <ListItemText primary="Importante" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Tareas" />
          </ListItemButton>
        </List>
      </nav>
      <Divider />
      <nav>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </List>
      </nav>
    </Box>
  );
};
