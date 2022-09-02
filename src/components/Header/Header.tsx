import React from 'react'

import flag from 'assets/flag.png'
import { useAppSelector } from 'hooks'
import { Stack, NameField, Location } from 'components'
import {
  HeaderContainer,
  HeaderContent,
  UserAvatar,
  UserInfo,
  Language,
} from './Header.styles'

export const Header: React.FC = () => {
  const { userAvatar } =
    useAppSelector(state => state.main)

  return (
    <HeaderContainer component="header">
      <HeaderContent>

        <UserAvatar
          src={userAvatar}
          alt="avatar"
        />

        <UserInfo>
          <NameField />
          <Location />
          <Language>
            <img
              src={flag}
              alt='flag'
              width='24px'
              height='24px'
            />
            English
          </Language>
          <Stack />
        </UserInfo>

      </HeaderContent>
    </HeaderContainer >
  )
}
