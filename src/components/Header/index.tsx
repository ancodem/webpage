import React, { useState } from 'react'
import { Box, Typography, Input } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import PrintIcon from '@mui/icons-material/Print'
import { useAppSelector, useActions } from 'hooks'
import { StackType } from 'store/reducers/reducer.types'
import { HeaderContainer, UserInfo, UserAvatar, Skill, PrintInfo } from './styles'
import NameField from './components/NameField'
import Location from './components/Location'

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

        <Box sx={{ display: 'flex', gap: '8px' }}>
          {userStack.map((s: StackType) => <Skill key={s.id} label={s.technologyName} />)}
          {isInEditingMode
            ? <Input
              onChange={(e) => updateInput(e.target.value)}
              value={input}
              placeholder='skill'
              sx={{
                fontWeight: '400',
                fontSize: '14px',
                height: '24px',
                backgroundColor: '#e2e3e3'
              }}
            />
            : <Skill label={<AddIcon />} onClick={() => toggleEditingMode(true)} />}
        </Box>
      </UserInfo>

      <PrintInfo><PrintIcon /> Print this page</PrintInfo>
    </HeaderContainer >
  )
}

export default Header
