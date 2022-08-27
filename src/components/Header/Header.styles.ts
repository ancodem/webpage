import { styled, Box, Avatar, Link } from '@mui/material'

export const HeaderContainer = styled(Box)(({ theme }) => ({
  width: '100vw',
  padding: '40px 156px 16px 156px',
  backgroundColor: theme.palette.neutral.main,
  display: 'flex',
  flexDirection: 'row',
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

export const UserInfo = styled(Box)(() => ({
  minWidth: '360px',
  margin: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})) as typeof Box

export const UserAvatar = styled(Avatar)(() => ({
  width: '168px',
  height: '168px',
  border: 'solid 4px white',
})) as typeof Avatar

export const PrintInfo = styled(Link)(({ theme }) => ({
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
