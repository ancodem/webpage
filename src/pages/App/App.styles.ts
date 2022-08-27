import { styled, Link, Box } from '@mui/material'

export const AppContainer = styled(Box)(() => ({
}))

export const Main = styled(Box)(() => ({
  padding: '56px 156px',
  display: 'flex',

}))

export const InfoPiece = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  flexBasis: '50%',
  gap: '24px',
  border: 'solid 1px red'

}))

export const PrintInfo = styled(Link)(({ theme }) => ({
  display: 'flex',
  gap: '8px',
  fontWeight: '400',
  fontSize: '16px',
  position: 'absolute',
  top: '40px',
  right: '156px',
  transitionDuration: '500ms',

  [theme.breakpoints.down('md')]: {
    right: '100px',
  },
  '&:hover': {
    cursor: 'pointer',
    color: theme.palette.hover.main,
  },
})) as typeof Link
