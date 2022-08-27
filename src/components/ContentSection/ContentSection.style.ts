import { styled, Box, Typography } from '@mui/material'

export const ContentTitle = styled(Typography)(() => ({
  marginBottom: '24px',
}))

export const Section = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '265px',
  justifSelf: 'flext-start',
})) as typeof Box
