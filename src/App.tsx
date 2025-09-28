import React from 'react'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import Router from './Router'

// Thème BTP professionnel - Orange et Blanc avec accents Sénégal
// Test HMR - Modification du thème - Version 3 - HMR Test
const theme = createTheme({
  palette: {
    primary: {
      main: '#f97316', // Orange BTP vif (couleur principale) - HMR Test
      light: '#fb923c',
      dark: '#ea580c',
    },
    secondary: {
      main: '#1e293b', // Gris foncé professionnel
      light: '#475569',
      dark: '#0f172a',
    },
    success: {
      main: '#00853f', // Vert Sénégal (accents discrets)
    },
    info: {
      main: '#0ea5e9', // Bleu moderne
    },
    background: {
      default: '#ffffff',
      paper: '#f8fafc',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      letterSpacing: '-0.01em',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 16, // HMR Test - Border radius augmenté
  },
})

function App() {
  // HMR Test - Fonction App modifiée
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  )
}

export default App