import { styled, Link, Box } from '@mui/material'
import PrintIcon from '@mui/icons-material/Print'

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
    justifSelf: 'center',
    width: '500px',
  },

  [theme.breakpoints.down('sm')]: {
    justifSelf: 'center',
    width: '300px',
  }

}))

export const Main = styled(Box)(() => ({
  boxSizing: 'border-box',
  margin: '56px auto',
  maxWidth: '1104px',

})) as typeof Box

export const ContentContainer = styled(Box)(({ theme }) => ({
  margin: '40px auto',
  maxWidth: '1104px',
  minHeight: '200px',
  display: 'flex',
  gap: '50px',

  [theme.breakpoints.down('lg')]: {
    maxWidth: '900px',
    gap: '40px',
  },

  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    maxWidth: '600px',
    flexWrap: 'wrap',
    gap: '35px',
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '400px',
    gap: '35px',
  },

})) as typeof Box

export const AdditionalInfo = styled(Box)(({ theme }) => ({
  flexDirection: 'column',
  display: 'flex',
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
  transitionDuration: '500ms',
  position: 'absolute',
  fontWeight: '400',
  fontSize: '16px',
  display: 'flex',
  right: '56px',
  top: '40px',
  gap: '8px',

  [theme.breakpoints.down('md')]: {
    right: '100px',
  },

  '&:hover': {
    color: theme.palette.hover.main,
    cursor: 'pointer',
  },

})) as typeof Link

export const PrintOnMobile = styled(PrintIcon)(({ theme }) => ({
  backgroundColor: theme.palette.link.main,
  borderRadius: '50%',
  position: 'fixed',
  padding: '10px',
  bottom: '20px',
  height: '40px',
  color: 'white',
  width: '40px',
  right: '10px',
  zIndex: '5',

}))
