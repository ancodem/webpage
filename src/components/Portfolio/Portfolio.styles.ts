import { styled, ListItem, List, Link } from '@mui/material'

export const PortfolioList = styled(List)(() => ({
  width: '264px',
  padding: '0px',
}))

export const PortfolioItem = styled(ListItem)(() => ({
  minHeight: '20px',
  maxWidth: '245px',
  padding: '4px 0px',
  display: 'flex',
  '&::before': {
    alignSelf: 'baseline',
    content: '"–"',
    marginRight: '8px',
    marginTop: '0px'
  }
}))

export const PortfolioLink = styled(Link)(() => ({
  width: 'inherit',

}))
