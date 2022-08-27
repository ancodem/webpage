import React, { lazy, Suspense } from 'react'
import { Box, Typography } from '@mui/material'
import PrintIcon from '@mui/icons-material/Print'

import { BlockQuote, Experience, Header, Portfolio, ContentSection } from 'components'
import { usePrint } from 'hooks'
import { Main, InfoPiece, AppContainer, PrintInfo } from './App.styles'

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
          <InfoPiece>
            <ContentSection title='Portfolio'>
              <Portfolio />
            </ContentSection>

            <ContentSection title='Experience'>
              <Experience />
            </ContentSection>

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
          </InfoPiece>

          <InfoPiece>
            <ContentSection title='Sample code'>
              <img alt='sample code' src='assets/sampleCode.png' />
            </ContentSection>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'justify',

              }}>

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


            <Suspense fallback={<div>loading...</div>}>
              <GoogleMap />
            </Suspense>
          </InfoPiece>

        </Main>
      </AppContainer >
    </>
  )
}
