import { Box, Button, TextField } from '@mui/material'
import React from 'react'


export const AddTask = () => {
  return (
    <Box sx={{display:'flex', flexDirection:"row"}}>
    <TextField fullWidth label="Agregar Tareas" id="fullWidth" color="primary"/>
    <Button variant="contained">Co</Button>
    
    </Box>
  )
}
