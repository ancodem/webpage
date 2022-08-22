import { styled, Box } from '@mui/material'
import Cn from '@mui/material/Container'

export const Container = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '0',
  height: '100vh',
}))

export const MainContent = styled(Box)(() => ({
  padding: '56px 156px',
  margin: '0',
  gap: '0',
  alignSelf: 'stretch',
  display: 'flex',
  flex: '1 1',
})) as typeof Box

export const ContentWrapper = styled(Cn)(() => ({
  display: 'flex',
  gap: '80px',
  flexDirection: 'column',
})) as typeof Box

export const ContentBlock = styled(Cn)(() => ({
  display: 'flex',
}))

