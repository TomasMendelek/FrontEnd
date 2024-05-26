import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export const Mantenimiento = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{
        borderRadius: "1px",
        height: "90%",
        mt: { xs: 2, sm: 3, md: 3 },
        mx: { xs: 2, sm: 5, md: 15 },
        textAlign: "center"
      }}>
        <Typography variant='h2' sx={{
          fontSize: { xs: 30, sm: 36, md: 42 }, 
          pt: { xs: 3, sm: 4, md: 5 },
          fontWeight: "bold"
        }}>
          Pagina en Construccion
        </Typography>

        <Typography variant="h5" sx={{
          fontSize: { xs: 18, sm: 20, md: 22 }, 
          pt: { xs: 3, sm: 4, md: 5 },
          color: "gray",
          pb: { xs: 8, sm: 10, md: 15 }
          }}>
            ¡Estamos Trabajando en esta sección de la Página!
          </Typography>
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            mt: { xs: 2, sm: 2, md: 2 }
          }}>
            <img src="/undraw_programming_re_kg9v.svg" alt="En construcción" style={{ maxWidth: '300px', width: { xs: "100%", sm: "55%", md: "50%" } }} />
          </Box>
      </Box>
    </Container>
  )
}
