import { Box } from "@mui/material";
import { NavDrawer } from "./components/navbar/NavDrawer";
import { Navbar } from "./components/navbar/Navbar";
import { useState } from "react";
import { Todo } from "./components/task/Todo";
export const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Navbar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <Box sx={{ display: "flex", bgcolor: "#eeeeee", height: "100vh" }}>
        {drawerOpen && <NavDrawer />}
        <Todo drawerOpen={drawerOpen} />
      </Box>
    </>
  );
};
