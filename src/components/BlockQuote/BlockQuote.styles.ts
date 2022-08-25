import { Typography, Box, styled } from '@mui/material'

export const QuoteContainer = styled('blockquote')(({ theme }) => ({
  position: 'relative',
  maxWidth: '232px',
  maxHeight: '100px',
  textAlign: 'center',
  margin: '40px auto',

  '&::before': {
    position: 'absolute',
    zIndex: '-1',
    content: '"❝"',
    left: '-40px',
    top: '-40px',
    fontSize: '100px',
    height: '32px',
    width: '40px',
    color: theme.palette.neutral.main,
  },

  '&::after': {
    zIndex: '-1',
    position: 'absolute',
    right: '-15px',
    top: '20px',
    content: '"❞"',
    fontSize: '100px',
    width: '40px',
    color: theme.palette.neutral.main,
  }

})) as typeof Box

export const Quote = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'center',
  flexWrap: 'wrap',

})) as typeof Typography
