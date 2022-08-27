import { styled, Link, Box } from '@mui/material'

export const AppContainer = styled(Box)(() => ({
}))

export const Main = styled(Box)(() => ({
  display: 'flex',
  margin: '56px 156px',

}))

export const InfoPiece = styled(Box)(() => ({
  display: 'inline-flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  flexBasis: '50%',
  flexGrow: '1',

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
