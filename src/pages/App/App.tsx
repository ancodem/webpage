import React, { lazy, useState, Suspense } from 'react'
import PrintIcon from '@mui/icons-material/Print'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { ContentSkeleton } from 'components/ContentSection/ContentSection.style'
import { MapSkeleton } from 'components/YandexMap/YandexMap.styles'
import sampleCode from 'assets/sampleCode.png'
import { usePrint } from 'hooks'
import {
  Header,
} from 'components'

import {
  ContentContainer,
  AdditionalInfo,
  PrintOnMobile,
  AppContainer,
  PrintInfo,
  Image,
  Main,
} from './App.styles'

const ContentSection = lazy(() => import('components/ContentSection'))
const BlockQuote = lazy(() => import('components/BlockQuote'))
const Experience = lazy(() => import('components/Experience'))
const Portfolio = lazy(() => import('components/Portfolio'))
const YandexMap = lazy(() => import('components/YandexMap'))

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
            <Suspense fallback={<ContentSkeleton />}>
              <ContentSection title='Portfolio'>
                <Portfolio />
              </ContentSection>
            </Suspense>

            <Suspense fallback={<ContentSkeleton />}>
              <ContentSection title='Experience'>
                <Experience />
              </ContentSection>
            </Suspense>

            <Suspense fallback={<ContentSkeleton />}>
              <ContentSection title='Sample code'>
                <Image alt='sample code' src={sampleCode} />
              </ContentSection>
            </Suspense>

            <AdditionalInfo>
              <Suspense fallback={<ContentSkeleton />}>
                <ContentSection title='Availability'>
                  <Box>
                    full time
                  </Box>
                </ContentSection>
              </Suspense>

              <Suspense fallback={<ContentSkeleton />}>
                <ContentSection title='Preferred environment'>
                  <Typography>
                    GitHub, MacOS, OSX
                  </Typography>
                </ContentSection>
              </Suspense>
            </AdditionalInfo>
          </ContentContainer>

          <ContentContainer>
            <Suspense fallback={<ContentSkeleton />}>
              <ContentSection
                boxSX={{ textAlign: 'center' }}
                title='The Most Amaizing...'>
                <BlockQuote>
                  The only true wisdom is in knowing you know nothing...
                </BlockQuote>
              </ContentSection>
            </Suspense>

            <Suspense fallback={<ContentSkeleton />}>
              <ContentSection
                boxSX={{ textAlign: 'center' }}
                title='In clients I look for...'>
                <BlockQuote>
                  There is only one good, knowledge, and one evil, ignorance.
                </BlockQuote>
              </ContentSection>
            </Suspense>

            <Suspense fallback={<MapSkeleton />}>
              <YandexMap />
            </Suspense>

          </ContentContainer>
        </Main>
      </AppContainer >
    </Box >
  )
}
