import styled from '@emotion/styled'
import { Box, Avatar, Typography, Chip, Link } from '@mui/material'

export const HeaderContainer = styled(Box)(({ theme }) => ({
  padding: '40px 156px 16px 156px',
  backgroundColor: '#f0f1f2',
  display: 'flex',
  flexDirection: 'row',
})) as typeof Box

export const UserInfo = styled(Box)(({ theme }) => ({
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})) as typeof Box

export const UserAvatar = styled(Avatar)(({ theme }) => ({
  width: '168px',
  height: '168px',
  border: 'solid 4px white',
})) as typeof Avatar

export const UserName = styled(Typography)(({ theme }) => ({
  fontWeight: '500',
  lineHeight: '48px',
  fontSize: '40px',
  '&:hover': {
    backgroundColor: '#e2e3e3',
  },
})) as typeof Typography

export const Skill = styled(Chip)(({ theme }) => ({
  fontWeight: '400',
  fontSize: '14px',
  color: 'white',
  lineHeight: '16px',
  backgroundColor: '#333333',
  borderRadius: '4px',
  height: '24px',
  marginRight: '10px',
})) as typeof Chip

export const PrintInfo = styled(Link)(({ theme }) => ({
  fontWeight: '400',
  fontSize: '16px',
  position: 'absolute',
  top: '40px',
  right: '156px',

  '&:hover': {
    cursor: 'pointer',
  },
})) as typeof Link
