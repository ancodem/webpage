/**
 * @jest-environment jsdom
 */
import React from 'react'
import '@testing-library/jest-dom'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../../style/theme'
import { render, screen } from '@testing-library/react'
import { BlockQuote } from './BlockQuote'

describe('BlockQuote testing', () => {

  test('Renders the BlockQuote correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <BlockQuote>some text for quote</BlockQuote>
      </ThemeProvider>
    )
    const quote = screen.getByText(/some text for quote/i)
    expect(quote).toBeInTheDocument()
  })
})

