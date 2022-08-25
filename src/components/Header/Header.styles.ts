import { styled, Box, Avatar, Link } from '@mui/material'

export const HeaderContainer = styled(Box)(({ theme }) => ({
  padding: '40px 156px 16px 156px',
  backgroundColor: theme.palette.neutral.main,
  display: 'flex',
  flexDirection: 'row',
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
  display: 'flex',
  gap: '8px',
  fontWeight: '400',
  fontSize: '16px',
  position: 'absolute',
  top: '40px',
  right: '156px',
  transitionDuration: '500ms',

  '&:hover': {
    cursor: 'pointer',
    color: theme.palette.hover.main,
  },
})) as typeof Link
