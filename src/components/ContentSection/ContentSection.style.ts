import { styled, Box, Typography } from '@mui/material'

export const ContentTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'left',
  marginBottom: '14px',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  }
})) as typeof Typography

export const Section = styled(Box)(({ theme }) => ({
  boxSsizing: 'border-box',
  display: 'inline-flex',
  flexDirection: 'column',
  minWidth: '250px',
  justifSelf: 'flext-start',
  [theme.breakpoints.down('lg')]: {
    minWidth: '200px',
    flexWrap: 'wrap',
  },
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  }
})) as typeof Box
