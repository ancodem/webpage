import React, { lazy, Suspense } from 'react'
import { Box, Typography } from '@mui/material'
import PrintIcon from '@mui/icons-material/Print'

import sampleCode from 'assets/sampleCode.png'
import { BlockQuote, Experience, Header, Portfolio, ContentSection } from 'components'
import { usePrint } from 'hooks'
import {
  Main, AppContainer, AddInfo, ContentContainer, PrintInfo, Image
} from './App.styles'

const GoogleMap = lazy(() => import('components/GoogleMap'))

export const App: React.FC = () => {
  const { printRef, handlePrint } = usePrint()

  return (
    <>
      <PrintInfo onClick={handlePrint}>
        <PrintIcon />
        Print this page
      </PrintInfo>

      <AppContainer component="main" ref={printRef} >
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
              <Box
                sx={{ height: '50px', width: '40px' }}
              >
                <Image alt='sample code' src={sampleCode} />
              </Box>
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
            <Suspense fallback={<div>loading...</div>}>
              <GoogleMap />
            </Suspense>

          </ContentContainer>
        </Main>
      </AppContainer >
    </>
  )
}
