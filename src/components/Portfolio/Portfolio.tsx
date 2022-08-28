import React from 'react'
import { PortfolioList, PortfolioItem, PortfolioLink } from './Portfolio.styles'

const sampleWorks: Array<{ id: number, title: string }> = [
  { id: 0, title: 'Bootstrap 4 Material Design (Sample Link)' },
  { id: 1, title: 'Modern JavaScript stack' },
  { id: 2, title: 'Datepicker for twitter bootstrap' },
  { id: 3, title: 'Fast and reliable Bootstrap widgets in Angular ' },
]

export const Portfolio: React.FC = () => (
  <PortfolioList>
    {sampleWorks.map(work =>
      <PortfolioItem key={work.id}>
        <PortfolioLink href={work.title}>
          {work.title}
        </PortfolioLink>
      </PortfolioItem>)}
  </PortfolioList>
)
