import React, { useState } from 'react'
import { Box, Typography, Input } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useAppSelector, useActions } from 'hooks'
import { StackType } from 'store/reducers/reducer.types'
import { HeaderContainer, UserInfo, UserAvatar, UserName, Skill, PrintInfo } from './styles'

const Header: React.FC = () => {

  // STATE ------------------------------------------------------------------>
  const [isInEditingMode, toggleEditingMode] = useState(false)

  const {
    userName,
    userStack,
    userAvatar,
    userInput,
  } = useAppSelector(
    state => ({
      userName: state.main.userName,
      userStack: state.main.userStack,
      userAvatar: state.main.userAvatar,
      userInput: state.main.input,
    })
  )

  // HANDLERS --------------------------------------------------------------->
  const { addTechnology, updateInput } = useActions()

  const handleSubmit = () => {
    toggleEditingMode(false)
  }
  const handleInput = (input: string) => {
    updateInput(input)
  }


  // JSX  ------------------------------------------------------------------->
  return (
    <HeaderContainer>
      <UserAvatar
        src={userAvatar}
        alt="avatar"
      />

      <UserInfo>
        {isInEditingMode
          ? <Input
            onChange={(e) => handleInput(e.target.value)}
            value={userInput}
            placeholder={userName}
            onSubmit={handleSubmit}
          />
          : <UserName onClick={() => toggleEditingMode(true)}>{userName}</UserName>
        }
        <Typography>City</Typography>
        <Typography>language</Typography>

        <Box>
          {userStack.map((s: StackType) => <Skill key={s.id} label={s.technologyName} />)}
          {isInEditingMode
            ? <Input
              onChange={(e) => handleInput(e.target.value)}
              value={userInput}
              placeholder='skill'
              onSubmit={handleSubmit}
            />
            : <Skill label={<AddIcon />} onClick={() => toggleEditingMode(true)} />}
        </Box>
      </UserInfo>

      <PrintInfo>print this page</PrintInfo>
    </HeaderContainer>
  )
}

export default Header
