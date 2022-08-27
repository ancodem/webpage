import React, { lazy, Suspense } from 'react'
import { Container, Box, Typography, Grid } from '@mui/material'
import PrintIcon from '@mui/icons-material/Print'

import { BlockQuote, Experience, Header, Portfolio, ContentSection } from 'components'
import { usePrint } from 'hooks'
import { PrintInfo } from './App.styles'

const GoogleMap = lazy(() => import('components/GoogleMap'))

export const App: React.FC = () => {
  const { printRef, handlePrint } = usePrint()

  return (
    <Box ref={printRef} >
      <PrintInfo onClick={handlePrint}>
        <PrintIcon />
        Print this page
      </PrintInfo>

      <Header />
      <Container>
        <Grid sx={{ marginTop: '56px', padding: '0px' }} columnSpacing="40px" rowSpacing="72px" container ref={printRef} justifyContent='flex-start' >

          <Grid item xs={3}>
            <ContentSection title='Portfolio'>
              <Portfolio />
            </ContentSection>
          </Grid>

          <Grid item xs={3}>
            <ContentSection title='Experience'>
              <Experience />
            </ContentSection>
          </Grid>

          <Grid item xs={3}>
            <ContentSection title='Portfolio'>
              <Portfolio />
            </ContentSection>
          </Grid>

          <Grid item xs={3}>
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
          </Grid>

          <Grid item xs={3}>
            <ContentSection
              boxSX={{ textAlign: 'center' }}
              title='The Most Amaizing...'>
              <BlockQuote>
                The only true wisdom is in knowing you know nothing...
              </BlockQuote>
            </ContentSection>
          </Grid>

          <Grid item xs={3}>
            <ContentSection
              boxSX={{ textAlign: 'center' }}
              title='In clients I look for...'>
              <BlockQuote>
                There is only one good, knowledge, and one evil, ignorance.
              </BlockQuote>
            </ContentSection>
          </Grid>

          <Suspense fallback={<div>loading...</div>}>
            <Grid item xs={6}>
              <GoogleMap />
            </Grid>
          </Suspense>

        </Grid >
      </Container>
    </Box >
  )
}
