import { Typography, Container, styled } from '@mui/material'

export const QuoteContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '100px',
  alignItems: 'center',

  '&::before': {
    content: '"❝"',
    alignSelf: 'flex-start',
    fontSize: '100px',
    height: '32px',
    width: '40px',
    color: theme.palette.neutral.main,
  },

  '&::after': {
    content: '"❞"',
    alignSelf: 'flex-end',
    fontSize: '100px',
    width: '40px',
    color: theme.palette.neutral.main,
  }

})) as typeof Container

export const Quote = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'center',
  flexWrap: 'wrap',

})) as typeof Typography
