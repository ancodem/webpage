import { styled, Box, Typography } from '@mui/material'

export const ContentTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '14px',
  textAlign: 'left',

  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  }

})) as typeof Typography

export const Section = styled(Box)(({ theme }) => ({
  justifSelf: 'flext-start',
  boxSsizing: 'border-box',
  flexDirection: 'column',
  display: 'inline-flex',
  minWidth: '250px',

  [theme.breakpoints.down('lg')]: {
    minWidth: '200px',
    flexWrap: 'wrap',
  },

  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  }

})) as typeof Box
