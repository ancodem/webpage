import React from 'react'
import { Box, Typography } from '@mui/material'

import {
  Header, Portfolio, Experience, BlockQuote, GoogleMap, ContentSection
} from 'components'
import { Container, MainContent } from './styles'

const App: React.FC = () => (
  <Container>
    <Header />

    <MainContent>

      <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <ContentSection title='Portfolio'>
          <Portfolio />
        </ContentSection>

        <ContentSection title='Experience'>
          <Experience />
        </ContentSection>

        <ContentSection title='Portfolio'>
          <Portfolio />
        </ContentSection>

        <Box sx={{ backgroundColor: 'red', gap: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'stretch' }}>
          <ContentSection title='Availability'>
            <Box>
              full time
            </Box>
          </ContentSection>
          <ContentSection title='Preferred environment'>
            <Typography>
              GitHub, MacOS, OSX
            </Typography>
          </ContentSection>
        </Box>

      </Box >

      <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>

        <ContentSection
          boxSX={{ textAlign: 'center' }}
          title='The Most Amaizing...'>
          <BlockQuote>
            The only true wisdom is in knowing you know nothing...
          </BlockQuote>
        </ContentSection>

        <ContentSection
          boxSX={{ textAlign: 'center' }}
          title='In clients I look for...'>
          <BlockQuote>
            There is only one good, knowledge, and one evil, ignorance.
          </BlockQuote>
        </ContentSection>

        <GoogleMap />

      </Box>
    </MainContent>

  </Container>
)

export default App
