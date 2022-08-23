import { styled, Box } from '@mui/material'
import Cn from '@mui/material/Container'

export const Container = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '0',
  height: '100vh',
}))

export const MainContent = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '36px',
  alignContent: 'center',
  padding: '56px 156px',
  margin: '0',
  flex: '1 1',
})) as typeof Box

