import React from 'react'
import { Typography } from '@mui/material'

import { useAppSelector } from 'hooks'
import NameField from 'components/NameField'
import Location from 'components/Location'
import Skills from 'components/Skills'
import { HeaderContainer, UserInfo, UserAvatar, PrintInfo } from './styles'

const Header: React.FC = () => {

  // STATE ------------------------------------------------------------------>
  const { userAvatar } = useAppSelector(state => state.main)

  // JSX  ------------------------------------------------------------------->
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

export default Header
