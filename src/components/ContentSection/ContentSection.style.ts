import { styled, Box, Typography } from '@mui/material'

export const ContentTitle = styled(Typography)(() => ({
  marginBottom: '24px',
}))

export const Section = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  border: 'solid 1px gray',
  maxWidth: '550px',
  marginBottom: '80px',
})) as typeof Box
