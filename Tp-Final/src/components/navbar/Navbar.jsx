import { Box, Button, Drawer, Typography } from "@mui/material"
import { NavDrawer } from "./NavDrawer"
import { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
export const Navbar = () => {

    const [open, SetOpen] = useState(false);

  return (
    <Box component="nav" sx={{bgcolor: 'primary.light', display:"flex", alignItems: "center", pl:2, gap:3 }}>
      <MenuIcon sx={{ fontSize: 34, color:"white", m: 1  }} />
      <Typography variant="h1" sx={{p:2, color:"white", fontSize:24, fontWeight: "bold" }}>To Do</Typography>
      

    </Box>
  )
}
