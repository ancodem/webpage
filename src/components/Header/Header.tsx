import React from 'react'
import { Typography } from '@mui/material'

import NameField from 'components/NameField'
import Location from 'components/Location'
import Skills from 'components/Skills'
import { useAppSelector } from 'hooks'
import {
  HeaderContainer,
  UserInfo,
  UserAvatar
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
        <Skills />
      </UserInfo>

    </HeaderContainer >
  )
}
