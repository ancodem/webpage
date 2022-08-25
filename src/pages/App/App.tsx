import React, { useRef } from 'react'
import { Container, Box, Typography, Grid } from '@mui/material'
import { useReactToPrint } from 'react-to-print'
import PrintIcon from '@mui/icons-material/Print'

import {
  Header,
  Portfolio,
  Experience,
  BlockQuote,
  GoogleMap,
  ContentSection
} from 'components'
import { PrintInfo } from './App.styles'

export const App: React.FC = () => {
  const printRef = useRef(null)

  const handlePrint = useReactToPrint({
    content: () => printRef.current
  })

  return (
    <Box >
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

          <Grid item xs={6}>
            <GoogleMap />
          </Grid>

        </Grid >
      </Container>
    </Box >
  )
}
