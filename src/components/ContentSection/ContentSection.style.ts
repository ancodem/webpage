import { styled, Box, Typography } from '@mui/material'

export const ContentTitle = styled(Typography)(() => ({
  marginBottom: '24px',
  border: 'solid 1px black'
}))

export const Section = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '288px',
  marginBottom: '80px',
  justifSelf: 'flext-start',
  border: 'solid 1px black'
})) as typeof Box
