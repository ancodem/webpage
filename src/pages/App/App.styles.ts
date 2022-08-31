import { styled, Link, Box } from '@mui/material'

export const AppContainer = styled(Box)(() => ({
  // epmty 
})) as typeof Box

export const Image = styled('img')(({ theme }) => ({
  width: '264px',
  height: 'auto',
  [theme.breakpoints.down('lg')]: {
    width: '200px',
  },
  [theme.breakpoints.down('md')]: {
    width: '500px',
    justifSelf: 'center'
  },
  [theme.breakpoints.down('sm')]: {
    width: '300px',
    justifSelf: 'center'
  }
}))

export const Main = styled(Box)(({ theme }) => ({
  boxSizing: 'border-box',
  margin: '56px auto',
  maxWidth: '1104px',

})) as typeof Box

export const ContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  maxWidth: '1104px',
  minHeight: '200px',
  margin: '40px auto',
  gap: '50px',
  [theme.breakpoints.down('lg')]: {
    gap: '40px',
    maxWidth: '900px',
  },
  [theme.breakpoints.down('md')]: {
    gap: '35px',
    maxWidth: '600px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    gap: '35px',
    maxWidth: '400px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },


})) as typeof Box

export const AddInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
})) as typeof Box

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

