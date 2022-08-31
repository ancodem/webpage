import React from 'react'
import PrintIcon from '@mui/icons-material/Print'

import flag from 'assets/flag.png'
import { useAppSelector } from 'hooks'
import { Stack, NameField, Location } from 'components'
import {
  HeaderContainer,
  UserInfo,
  UserAvatar,
  HeaderContent,
  PrintInfo,
  Language,
} from './Header.styles'

interface HeaderProps {
  handlePrint: () => void
}

export const Header: React.FC<HeaderProps> = ({ handlePrint }) => {
  const { userAvatar } =
    useAppSelector(state => state.main)

  return (
    <HeaderContainer component="header">
      <HeaderContent>

        <PrintInfo onClick={() => handlePrint()}>
          <PrintIcon />
          Print this page
        </PrintInfo>

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
