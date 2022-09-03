import { createTheme } from '@mui/material/styles'

// EXTENDING THE PALETTE WIHT MY OWN TYPES ---------------------------------->
declare module '@mui/material/styles/createPalette' {
  interface Palette {
    neutral: { main: string },
    hover: { main: string },
    link: { main: string },
  }

  interface PaletteOptions {
    neutral?: { main: string }
    hover?: { main: string },
    link?: { main: string },
  }
}

// THEME -------------------------------------------------------------------->
const theme = createTheme({
  palette: {
    neutral: { main: '#f0f1f2' },
    hover: { main: '#EB5757' },
    link: { main: '#3483CC' }
  },

  typography: {
    h4: {
      lineHeight: '24px',
      fontWeight: '500',
      fontSize: '24px',
    },
  },

  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          transitionDuration: '1s',
          textDecoration: 'none',
          fontFamily: 'Roboto',
          lineHeight: '20px',
          fontWeight: '400',
          color: '#3483CC',
          fontSize: '16px',

          '&:hover': {
            color: '#EB5757'
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          transitionDuration: '500ms',
          backgroundColor: '#333333',
          fontFamily: 'Roboto',
          borderRadius: '4px',
          lineHeight: '16px',
          fontWeight: '400',
          fontSize: '14px',
          color: 'white',
          height: '24px',

          '&:hover': {
            backgroundColor: '#666666',
            cursor: 'default',
          },
        }
      }
    },
  }
}
)

export default theme
