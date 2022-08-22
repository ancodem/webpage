import { createTheme } from '@mui/material/styles'

const theme = createTheme({
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
          flexWrap: 'nowrap',
          '&::before': {
            content: '"–"',
            margin: ' 2px 8px 0 0',
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
            cursor: 'pointer',
          },
        }
      }
    },

    MuiInput: {
      styleOverrides: {
        root: {
          fontWeight: '400',
          fontSize: '14px',
          height: '24px',
          backgroundColor: '#e2e3e3'
        }
      }
    },
  }
})
export default theme
