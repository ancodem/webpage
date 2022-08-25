import { styled, Typography, Box, Input } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Cancel from '@mui/icons-material/Cancel'

export const CorrectIcon = styled(CheckCircleIcon)(() => ({
  boxSizing: 'border-box',
  color: '#33C127',
  position: 'absolute',
  top: '5px',
  right: '4px',
  height: '16px',
  widht: '16px',
}))

export const WrongIcon = styled(Cancel)(({ theme }) => ({
  color: theme.palette.hover.main,
  position: 'absolute',
  top: '5px',
  right: '4px',
  height: '16px',
  widht: '16px',
}))

export const InputContainer = styled(Box)(() => ({
  position: 'relative',
})) as typeof Box

export const InputArea = styled(Input)(() => ({
  fontWeight: '400',
  fontSize: '14px',
  height: '24px',
  backgroundColor: '#e2e3e3'
}))

