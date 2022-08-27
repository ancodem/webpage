import React from 'react'
import { Typography } from '@mui/material'

import { useAppSelector } from 'hooks'
import flag from 'assets/flag.png'
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
        <Typography sx={{ display: 'flex', gap: '8px' }}>
          <img src={flag} alt='flag' width='24px' height='24px' />
          English
        </Typography>
        <Stack />
      </UserInfo>

    </HeaderContainer >
  )
}
