import React, { useRef } from 'react'
import { Box, Typography } from '@mui/material'
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
    <>
      <PrintInfo onClick={handlePrint}>
        <PrintIcon />
        Print this page
      </PrintInfo>

      <Box component="main" ref={printRef}>
        <Header />

        <Box>
          <ContentSection title='Portfolio'>
            <Portfolio />
          </ContentSection>

          <ContentSection title='Experience'>
            <Experience />
          </ContentSection>

          <ContentSection title='Portfolio'>
            <Portfolio />
          </ContentSection>

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

      </Box >
    </>
  )
}
