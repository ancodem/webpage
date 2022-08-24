import { Typography, Input, styled } from '@mui/material'

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

export const NameInput = styled(Input)(() => ({
  fontWeight: '500',
  height: '48px',
  maxHeight: '48px',
  fontSize: '40px',
  width: '360px',
}))

export const ErrorMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.hover.main,
  position: 'absolute',
  top: '16px',
  right: '-100px',

}))
