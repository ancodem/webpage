import styled from '@emotion/styled';
import { Box, Avatar, Typography, Chip } from '@mui/material'

export const HeaderContainer = styled(Box)(() => ({
  padding: '40px 156px 16px 156px',
  backgroundColor: '#f0f1f2',
  display: 'flex',
  flexDirection: 'row',
})) as typeof Box

export const UserAvatar = styled(Avatar)(() => ({
  width: '168px',
  height: '168px',
  border: 'solid 4px white',
})) as typeof Avatar

export const UserName = styled(Typography)(() => ({
  fontWeight: '500',
  lineHeight: '48px',
  fontSize: '40px',
})) as typeof Typography

export const Skill = styled(Chip)(() => ({
  fontWeight: '400',
  fontSize: '14px',
  color: 'white',
  lineHeight: '16px',
  backgroundColor: '#333333',
  borderRadius: '4px',
  height: '24px',
  marginRight: '10px',
})) as typeof Chip

