import { Typography, styled } from '@mui/material'

export const Name = styled(Typography)(() => ({
  alignItems: 'center',
  fontWeight: '500',
  lineHeight: '48px',
  fontSize: '40px',
  transitionDuration: '500ms',
  width: '360px',

  '&:hover': {
    backgroundColor: '#e2e3e3',
  },
})) as typeof Typography

