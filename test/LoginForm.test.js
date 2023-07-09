/**
 * @jest-environment jsdom
 */

import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import LoginForm from '../src/components/LoginForm'

// eslint-disable-next-line no-undef
test('renders login form', () => {

  render(<LoginForm />)

  const username = screen.getByText('Username')
  const password = screen.getByText('Password')
  // eslint-disable-next-line no-undef
  expect(username).toBeDefined()
  expect(password).toBeDefined()
})