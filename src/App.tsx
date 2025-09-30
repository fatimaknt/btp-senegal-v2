import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'

// Thème BTP professionnel - Orange et Blanc avec accents Sénégal
// Test HMR - Modification du thème - Version 4 - HMR Test Actif
const theme = createTheme({
  palette: {
    primary: {
      main: '#e67e22', // Orange BTP modifié pour test HMR - Version 4
      light: '#f39c12',
      dark: '#d35400',
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
    borderRadius: 20, // HMR Test - Border radius encore plus arrondi - Version 4
  },
})

function App() {
  // HMR Test - Fonction App modifiée - Version 4 avec console.log
  console.log('🚀 HMR Test - App.tsx modifié - Version 4')

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App