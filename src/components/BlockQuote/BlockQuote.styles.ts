import { Typography, Box, styled } from '@mui/material'

export const QuoteContainer = styled('blockquote')(({ theme }) => ({
  position: 'relative',
  maxWidth: '240px',
  maxHeight: '100px',

  '&::before': {
    position: 'absolute',
    zIndex: '-1',
    content: '"❝"',
    left: '-28px',
    top: '-20px',
    fontSize: '65px',
    color: theme.palette.neutral.main,

    [theme.breakpoints.down('lg')]: {
      fontSize: '50px',
      left: '-20px',
      top: '-15px',
    },
  },

  '&::after': {
    zIndex: '-1',
    position: 'absolute',
    right: '-15px',
    top: '20px',
    content: '"❞"',
    fontSize: '65px',
    color: theme.palette.neutral.main,

    [theme.breakpoints.down('lg')]: {
      fontSize: '50px',
      right: '-20px',
      top: '25px',
    },
  }

})) as typeof Box

export const Quote = styled(Typography)(() => ({
  fontSize: '16px',
  textAlign: 'center',
  flexWrap: 'wrap',

})) as typeof Typography
