import React, { useState } from 'react'
import { Box, Typography, Input } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useAppSelector, useActions } from 'hooks'
import { StackType } from 'store/reducers/reducer.types'
import { HeaderContainer, UserInfo, UserAvatar, UserName, Skill, PrintInfo } from './styles'
import NameField from './components/NameField'

const Header: React.FC = () => {

  // STATE ------------------------------------------------------------------>
  const [isInEditingMode, toggleEditingMode] = useState(false)

  const {
    userStack,
    userAvatar,
    userInput,
  } = useAppSelector(
    state => ({
      userStack: state.main.userStack,
      userAvatar: state.main.userAvatar,
      userInput: state.main.input,
    })
  )

  // HANDLERS --------------------------------------------------------------->
  const { addTechnology, updateInput } = useActions()

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
        <NameField />
        <Typography>City</Typography>
        <Typography>language</Typography>

        <Box>
          {userStack.map((s: StackType) => <Skill key={s.id} label={s.technologyName} />)}
          {isInEditingMode
            ? <Input
              onChange={(e) => handleInput(e.target.value)}
              value={userInput}
              placeholder='skill'
              sx={{
                fontWeight: '400',
                fontSize: '14px',
                maxHeight: '16px',
              }}
            />
            : <Skill label={<AddIcon />} onClick={() => toggleEditingMode(true)} />}
        </Box>
      </UserInfo>

      <PrintInfo>print this page</PrintInfo>
    </HeaderContainer>
  )
}

export default Header
