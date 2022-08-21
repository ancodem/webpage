import styled from '@emotion/styled'
import { Box, Chip } from '@mui/material'

export const Skill = styled(Chip)(({ theme }) => ({
  fontWeight: '400',
  fontSize: '14px',
  color: 'white',
  lineHeight: '16px',
  backgroundColor: '#333333',
  borderRadius: '4px',
  height: '24px',
  transitionDuration: '500ms',

  '&:hover': {
    backgroundColor: '#666666',
    cursor: 'pointer',
  },
})) as typeof Chip

export const SkillBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '8px',
})) as typeof Box
