import React from 'react'
import { Grid, Box, Typography } from '@mui/material'

import {
  Header, Portfolio, Experience, BlockQuote, GoogleMap, ContentSection
} from 'components'
import { Container, MainContent } from './styles'

const App: React.FC = () => (
  <Box component="main">
    <Header />

    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{
        margin: '56px 156px',
        textAlign: 'center',
      }}

    >

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
        <Grid container direction="column" spacing={4}>

          <Grid item xs={6}>
            <ContentSection title='Availability'>
              <Box>
                full time
              </Box>
            </ContentSection>
          </Grid>

          <Grid item xs={6}>
            <ContentSection title='Preferred environment'>
              <Typography>
                GitHub, MacOS, OSX
              </Typography>
            </ContentSection>
          </Grid>

        </Grid>
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
    </Grid>

  </Box >
)

export default App
