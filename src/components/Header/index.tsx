import React from 'react'
import { Box, Typography, Link } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { HeaderContainer, UserAvatar, UserName, Skill } from './styles'

const Header: React.FC = () => {
  const skills = ['ruby', 'php', 'Java Script', <AddIcon />]
  return (
    <HeaderContainer>
      <UserAvatar
        src="https://resize-media.festival-cannes.com/fit-in/2560x1620/media_image/0001/48/c3c10a98dd47ddf0cba7be6850f0815dae7841a8.jpeg"
        alt="avatar"
      />
      <Box
        sx={{
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
        component='div'>
        <UserName >
          John Smith
        </UserName>
        <Typography>
          City
        </Typography>
        <Typography>
          language
        </Typography>
        <Box>
          {skills.map(skill => <Skill key={skill} label={skill} />)}
        </Box>
      </Box>
      <Link
        sx={{
          fontWeight: '400',
          fontSize: '16px',
          position: 'absolute',
          top: '40px',
          right: '156px',
          '&:hover': {
            cursor: 'pointer',
          }
        }}
      >
        print this page
      </Link>
    </HeaderContainer>
  )
}

export default Header
