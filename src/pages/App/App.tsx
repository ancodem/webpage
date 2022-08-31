import React, { lazy, useCallback, Suspense } from 'react'
import { Box, Typography } from '@mui/material'

import { YandexMap, BlockQuote, Experience, Header, Portfolio, ContentSection } from 'components'
import sampleCode from 'assets/sampleCode.png'
import { usePrint } from 'hooks'
import {
  Main, AppContainer, AddInfo, ContentContainer, Image
} from './App.styles'

export const App: React.FC = () => {
  const { printRef, handlePrint } = usePrint()
  const handlePrintPage = useCallback(
    () => handlePrint(), []
  )

  return (
    <AppContainer component="main" ref={printRef} >
      <Header handlePrint={handlePrintPage} />

      <Main>
        <ContentContainer>
          <ContentSection title='Portfolio'>
            <Portfolio />
          </ContentSection>

          <ContentSection title='Experience'>
            <Experience />
          </ContentSection>

          <ContentSection title='Sample code'>
            <Image alt='sample code' src={sampleCode} />
          </ContentSection>

          <AddInfo>
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
          </AddInfo>
        </ContentContainer>

        <ContentContainer>
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
          <YandexMap />
        </ContentContainer>
      </Main>
    </AppContainer >
  )
}
