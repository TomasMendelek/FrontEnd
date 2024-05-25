import { Box } from "@mui/material";
import { NavDrawer } from "./components/navbar/NavDrawer";
import { Navbar } from "./components/navbar/Navbar";
import { useState } from "react";
import { Midia } from "./components/task/Midia";
import { Importante } from "./components/importante/Importante"
import { Tareas } from "./components/tareas/Tareas";
import { Settings } from "./components/configuraciones/Settings";

export const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState('Midia');

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'Midia':
        return <Midia />;
      case 'Importante':
        return <Importante />;
      case 'Tareas':
        return <Tareas />;
      case 'Settings':
        return <Settings />;
      default:
        return <Midia />;
    }
  };

  return (
    <>
      <Navbar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <Box sx={{ display: "flex", bgcolor: "#eeeeee", height: "100vh" }}>
        {drawerOpen && <NavDrawer setSelectedComponent={setSelectedComponent} />}
        {renderSelectedComponent()}
      </Box>
    </>
  );
};
