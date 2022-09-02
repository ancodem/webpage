import { styled, Typography, Container, Box, Avatar } from '@mui/material'

export const HeaderContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.neutral.main,
  width: '100vw',

})) as typeof Box

export const UserInfo = styled(Box)(() => ({
  flexDirection: 'column',
  minWidth: '360px',
  display: 'flex',
  margin: '24px',
  gap: '8px',

})) as typeof Box

export const UserAvatar = styled(Avatar)(() => ({
  border: 'solid 4px white',
  height: '168px',
  width: '168px',

})) as typeof Avatar

export const HeaderContent = styled(Container)(({ theme }) => ({
  padding: '40px 156px 16px 156px',
  flexDirection: 'row',
  position: 'relative',
  maxWidth: '1104px',
  display: 'flex',

  [theme.breakpoints.down('md')]: {
    padding: '30px 100px 16px 100px'
  },

  [theme.breakpoints.down('sm')]: {
    padding: '20px 50px 16px 50px',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },

})) as typeof Box

export const Language = styled(Typography)(({ theme }) => ({
  display: 'flex',
  gap: '8px',

  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center'
  },

})) as typeof Typography
