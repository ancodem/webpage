import React from 'react'
import { Box } from '@mui/material'

import { Header, Portfolio, Experience } from 'components'

import { ContentBlock, Container, ContentWrapper, MainContent } from './styles'

const App: React.FC = () => (
  <Container>
    <Header />

    <MainContent>

      {/* LEFT_SIDE =======================================================> */}
      <ContentWrapper >
        <ContentBlock sx={{ justifyContent: 'flex-end', }} >

          <Portfolio />
          <Experience />
        </ContentBlock>

        <ContentBlock sx={{ justifyContent: 'flex-end', }} >
          <Portfolio />
          <Experience />
        </ContentBlock>

      </ContentWrapper>

      {/* RIGHT_SIDE ======================================================> */}
      <ContentWrapper >
        <ContentBlock >
          <Portfolio />
          <Experience />
        </ContentBlock>
        <ContentBlock>
          <Box
            sx={{
              backgroundColor: 'gray',
              width: '600px',
              height: '300px',
              borderRadius: '6px',
            }}
          >
            map
          </Box>
        </ContentBlock>
      </ContentWrapper>

    </MainContent>

  </Container>
)

export default App
