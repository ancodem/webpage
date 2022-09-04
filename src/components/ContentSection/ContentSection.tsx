import React from 'react'

import { ContentTitle, Section } from './ContentSection.style'
import { ContentProps } from './ContentSection.types'

export const ContentSection
  : React.FC<ContentProps> =
  ({ title, children, boxSX, titleSX }) => (
    <Section component='section' sx={{ ...boxSX }}>
      <ContentTitle
        variant="h4"
        sx={{ ...titleSX }}
      >
        {title}
      </ContentTitle>
      {children}
    </Section>
  )
