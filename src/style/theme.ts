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
