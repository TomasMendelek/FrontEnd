import React, { useState } from 'react';
import { Typography, IconButton, Toolbar, Button, Menu, MenuItem, Box, } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Search } from './Search';



export const Navbar = ({ drawerOpen, setDrawerOpen }) => {
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Toolbar component="nav" sx={{ bgcolor: 'primary.light', display: "flex", alignItems: "center", pl: 2, gap: 3, justifyContent:"space-between"}}>
      <Box sx={{display:"flex", alignItems:"center"}}>
      <IconButton onClick={toggleDrawer} sx={{ color: "white"  }}>
        <MenuIcon  />
      </IconButton>
      <Typography variant="h1" sx={{ p: 2, color: "white", fontSize:{xs: 14, sm: 16, md:24 }, fontWeight: "bold"  }}>To Do</Typography>
      </Box>
      <Search />
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        >
        <GitHubIcon sx={{color:"white"}}></GitHubIcon>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>
          <a style={{textDecoration: 'none', color: 'inherit'}} href="https://github.com/TomasMendelek" target="_blank" rel="noopener noreferrer">
            Perfil
          </a>
        </MenuItem>
        <MenuItem>
          <a style={{textDecoration: 'none', color: 'inherit'}} href="https://github.com/TomasMendelek/FrontEnd/tree/main/Tp-Final" target="_blank" rel="noopener noreferrer">
            Repositorio
          </a>
        </MenuItem>
      </Menu>

    </Toolbar>
  );
};
