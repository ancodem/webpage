import React, { useState } from 'react'
import { Box, Typography, Input } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import PrintIcon from '@mui/icons-material/Print'
import { useAppSelector, useActions } from 'hooks'
import { StackType } from 'store/reducers/reducer.types'
import { InputField } from 'style/reusableSC'
import NameField from 'components/NameField'
import Location from 'components/Location'
import Skills from 'components/Skills'
import { HeaderContainer, UserInfo, UserAvatar, Skill, PrintInfo } from './styles'

const Header: React.FC = () => {

  // STATE ------------------------------------------------------------------>
  const [isInEditingMode, toggleEditingMode] = useState(false)
  const [input, updateInput] = useState('')

  const {
    userStack,
    userAvatar,
  } = useAppSelector(
    state => ({
      userStack: state.main.userStack,
      userAvatar: state.main.userAvatar,
    })
  )

  // HANDLERS --------------------------------------------------------------->
  const { addTechnology } = useActions()


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
