/**
 * @jest-environment jsdom
 */
import React from 'react'
import '@testing-library/jest-dom'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../../style/theme'
import { render, screen } from '@testing-library/react'
import { BlockQuote } from './BlockQuote'


test('Renders the BlockQuote', () => {
  render(
    <ThemeProvider theme={theme}>
      <BlockQuote>some text for quote</BlockQuote>
    </ThemeProvider>
  )
  const quote = screen.getByText(/some text for quote/i)
  expect(quote).toBeInTheDocument()
})
