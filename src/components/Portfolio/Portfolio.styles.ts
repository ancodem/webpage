import { styled, ListItem, List, Link } from '@mui/material'

export const PortfolioList = styled(List)(() => ({
  width: '264px',
  padding: '0px',
}))

export const PortfolioItem = styled(ListItem)(() => ({
  padding: '4px 0px',
  minHeight: '20px',
  maxWidth: '245px',
  display: 'flex',
  '&::before': {
    alignSelf: 'baseline',
    marginRight: '8px',
    marginTop: '0px',
    content: '"–"',
  }
}))

export const PortfolioLink = styled(Link)(() => ({
  width: 'inherit',

}))
