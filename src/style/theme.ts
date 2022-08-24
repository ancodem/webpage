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
      fontSize: '24px',
      fontWeight: '500',
      lineHeight: '24px',
    },
  },

  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#3483CC',
          transitionDuration: '1s',
          textDecoration: 'none',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '20px',

          '&:hover': {
            color: '#EB5757'
          },
        },
      },
    },

    MuiListItem: {
      styleOverrides: {
        root: {
          flexWrap: 'wrap',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '20px',
          '&::before': {
            content: '"–"',
            margin: ' 1px 8px 0 0',
            alignSelf: 'flex-start',
          }
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: '400',
          fontSize: '14px',
          color: 'white',
          lineHeight: '16px',
          backgroundColor: '#333333',
          borderRadius: '4px',
          height: '24px',
          transitionDuration: '500ms',

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
