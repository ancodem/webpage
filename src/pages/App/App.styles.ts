import { styled, Link, Box } from '@mui/material'

export const AppContainer = styled(Box)(() => ({
}))

export const Main = styled(Box)(() => ({
  boxSizing: 'border-box',
  margin: '56px auto',
  maxWidth: '1104px',
  display: 'grid',
  gridTemplateColumns: '235px 225px 225px 250px ',
  gridTemplateRows: '1fr 1fr',
  justifyContent: 'space-between',
  gap: '24px',
  rowGap: '80px',

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
