import { Box, Typography, IconButton, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = ({ drawerOpen, setDrawerOpen }) => {
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Toolbar component="nav" sx={{ bgcolor: 'primary.light', display: "flex", alignItems: "center", pl: 2, gap: 3 }}>
      <IconButton onClick={toggleDrawer} sx={{ color: "white" }}>
        <MenuIcon sx={{ fontSize: 34, m: 1 }} />
      </IconButton>
      <Typography variant="h1" sx={{ p: 2, color: "white", fontSize: 24, fontWeight: "bold" }}>To Do</Typography>
    </Toolbar>
  );
};
