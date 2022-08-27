import { styled, Box, Typography } from '@mui/material'

export const ContentTitle = styled(Typography)(() => ({
  textAlign: 'left',
  marginBottom: '14px',
}))

export const Section = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '220px',
  justifSelf: 'flext-start',
})) as typeof Box
