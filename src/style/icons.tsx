import { styled } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Cancel from '@mui/icons-material/Cancel'

export const CorrectIcon = styled(CheckCircleIcon)(() => ({
  color: '#33C127',
  position: 'absolute',
  top: '16px',
  right: '4px',
  height: '16px',
  widht: '16px',
}))

export const WrongIcon = styled(Cancel)(({ theme }) => ({
  color: theme.palette.hover.main,
  position: 'absolute',
  top: '16px',
  right: '4px',
  height: '16px',
  widht: '16px',
}))
