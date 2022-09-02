import { styled, Typography, Box, Input } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Cancel from '@mui/icons-material/Cancel'

export const CorrectIcon = styled(CheckCircleIcon)(() => ({
  boxSizing: 'border-box',
  position: 'absolute',
  color: '#33C127',
  height: '16px',
  widht: '16px',
  right: '4px',
  top: '4px',
}))

export const WrongIcon = styled(Cancel)(({ theme }) => ({
  color: theme.palette.hover.main,
  position: 'absolute',
  height: '16px',
  widht: '16px',
  right: '4px',
  top: '3px',
}))

export const InputContainer = styled(Box)(() => ({
  position: 'relative',
  maxWidth: '360px',

})) as typeof Box

export const InputArea = styled(Input)(() => ({
  backgroundColor: '#e2e3e3',
  fontWeight: '400',
  fontSize: '14px',
  height: '16px',
}))

export const WarningMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.hover.main,
  position: 'absolute',
  right: '-100px',
  zIndex: '2',
  top: '1px',
}))

