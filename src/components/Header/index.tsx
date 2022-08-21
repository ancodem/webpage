import React from 'react'
import { Typography } from '@mui/material'
import PrintIcon from '@mui/icons-material/Print'
import { useAppSelector } from 'hooks'
import NameField from 'components/NameField'
import Location from 'components/Location'
import Skills from 'components/Skills'
import { HeaderContainer, UserInfo, UserAvatar, PrintInfo } from './styles'

const Header: React.FC = () => {

  // STATE ------------------------------------------------------------------>
  const {
    userAvatar,
  } = useAppSelector(
    state => ({
      userAvatar: state.main.userAvatar,
    })
  )

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

      <PrintInfo><PrintIcon /> Print this page</PrintInfo>
    </HeaderContainer >
  )
}

export default Header
