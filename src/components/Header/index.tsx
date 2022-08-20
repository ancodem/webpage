import React from 'react'
import { Box, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { HeaderContainer, UserInfo, UserAvatar, UserName, Skill, PrintInfo } from './styles'

const Header: React.FC = () => {
  const skills = ['ruby', 'php', 'Java Script', <AddIcon />]
  return (
    <HeaderContainer>
      <UserAvatar
        src="https://resize-media.festival-cannes.com/fit-in/2560x1620/media_image/0001/48/c3c10a98dd47ddf0cba7be6850f0815dae7841a8.jpeg"
        alt="avatar"
      />

      <UserInfo>
        <UserName >John Smith</UserName>
        <Typography>City</Typography>
        <Typography>language</Typography>

        <Box>
          {skills.map(skill => <Skill key={skill} label={skill} />)}
        </Box>
      </UserInfo>

      <PrintInfo>print this page</PrintInfo>
    </HeaderContainer>
  )
}

export default Header
