import { Typography, Box, styled } from '@mui/material'

export const QuoteContainer = styled('blockquote')(({ theme }) => ({
  position: 'relative',
  maxHeight: '100px',
  maxWidth: '240px',

  '&::before': {
    color: theme.palette.neutral.main,
    position: 'absolute',
    fontSize: '65px',
    content: '"❝"',
    left: '-28px',
    zIndex: '-1',
    top: '-20px',

    [theme.breakpoints.down('lg')]: {
      fontSize: '50px',
      left: '-20px',
      top: '-15px',
    },
  },

  '&::after': {
    color: theme.palette.neutral.main,
    position: 'absolute',
    fontSize: '65px',
    right: '-15px',
    content: '"❞"',
    top: '20px',
    zIndex: '-1',

    [theme.breakpoints.down('lg')]: {
      fontSize: '50px',
      right: '-20px',
      top: '25px',
    },
  }

})) as typeof Box

export const Quote = styled(Typography)(() => ({
  textAlign: 'center',
  fontSize: '16px',
  flexWrap: 'wrap',

})) as typeof Typography
