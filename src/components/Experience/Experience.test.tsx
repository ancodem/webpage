/**
 * @jest-environment jsdom
 */

import React from 'react'
import '@testing-library/jest-dom'
import { ThemeProvider } from '@mui/material/styles'
import theme from 'style/theme'
import { store } from 'store/store'
import { Provider } from 'react-redux'
import { render, screen, fireEvent } from '@testing-library/react'
import { Experience } from './Experience'

describe('Experience component testing', () => {

  beforeEach(() => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Experience />
        </ThemeProvider>
      </Provider>
    )
  })

  test('Renders the component correctly', () => {
    const expItem = screen.getByText('PHP')
    expect(expItem).toBeInTheDocument()
  })

  test('Inputs should not be in the dom', () => {
    const expItems = screen.queryAllByRole('form')
    expect(expItems).toHaveLength(0)
  })

  test('1 input field should appear', async () => {
    const inputSwitch = screen.getAllByTestId('experience-item')
    fireEvent.click(inputSwitch[0])
    const inputField = await screen.getByRole('form')
    expect(inputField).toBeInTheDocument()
  })
})


