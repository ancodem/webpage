import { styled } from '@mui/material'
import Typography from '@mui/material/Typography'

export const Name = styled(Typography)(() => ({
  transitionDuration: '500ms',
  alignItems: 'center',
  lineHeight: '48px',
  fontWeight: '500',
  fontSize: '40px',
  width: '360px',

  '&:hover': {
    backgroundColor: '#e2e3e3',
  },
})) as typeof Typography

