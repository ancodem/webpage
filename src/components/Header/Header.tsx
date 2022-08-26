import React from 'react'
import { Typography } from '@mui/material'

import { useAppSelector } from 'hooks'
import { Stack, NameField, Location } from 'components'
import {
  HeaderContainer,
  UserInfo,
  UserAvatar,
} from './Header.styles'

export const Header: React.FC = () => {
  const { userAvatar } =
    useAppSelector(state => state.main)

  return (
    <HeaderContainer>

      <UserAvatar
        src={userAvatar}
        alt="avatar"
      />

      <UserInfo>
        <NameField />
        <Location />
        <Typography>language</Typography>
        <Stack />
      </UserInfo>

    </HeaderContainer >
  )
}
