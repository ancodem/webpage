import styled from '@emotion/styled'
import { List } from '@mui/material'

export const StackContainer = styled(List)(() => ({
  display: 'flex',
  gap: '8px',
  padding: '0px',
})) as typeof List
