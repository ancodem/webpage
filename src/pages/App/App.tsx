import PrintIcon from '@mui/icons-material/Print'
import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'

import sampleCode from 'assets/sampleCode.png'
import { usePrint } from 'hooks'
import {
  ContentSection,
  BlockQuote,
  Experience,
  Portfolio,
  YandexMap,
  Header,
} from 'components'
import {
  ContentContainer,
  PrintOnMobile,
  AppContainer,
  PrintInfo,
  AddInfo,
  Image,
  Main,
} from './App.styles'

export const App: React.FC = () => {
  const { printRef, handlePrint } = usePrint()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth)
  })
  return (
    <Box component="main">

      {
        (windowWidth > 900)
          ? <PrintInfo onClick={() => handlePrint()}>
            <PrintIcon />
            Print this page
          </PrintInfo>
          : <PrintOnMobile onClick={() => handlePrint()} />
      }

      <AppContainer ref={printRef} >

        <Header />

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
    </Box >
  )
}
