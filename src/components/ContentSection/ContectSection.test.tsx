/**
 * @jest-environment jsdom
 */
import React from 'react'
import '@testing-library/jest-dom'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../../style/theme'
import { render, screen } from '@testing-library/react'
import { ContentSection } from './ContentSection'

describe('ContentSection testing', () => {

  test('Renders the component with text correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <ContentSection title='title'>some text</ContentSection>
      </ThemeProvider>
    )
    const content = screen.getByText(/some text/i)
    expect(content).toBeInTheDocument()
  })
  test('Renders the component with divs correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <ContentSection title='title'>
          <div>some</div>
          <div>text</div>
        </ContentSection>
      </ThemeProvider>
    )
    const divSome = screen.getByText(/some/i)
    const divText = screen.getByText(/text/i)

    expect(divSome).toBeInTheDocument()
    expect(divText).toBeInTheDocument()
  })
})


