// login-form.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import LoginForm from '../../components/auth/login-form'

describe('LoginForm', () => {
  // ✅ 1. Renders the form
  it('renders the form correctly', () => {
    render(<LoginForm />)
    expect(screen.getByTestId('login-form')).toBeInTheDocument()
  })

  //  Positive test: submits form with valid data
  it('submits with valid email and password', async () => {
    render(<LoginForm />)

    fireEvent.change(screen.getByTestId('email-input'), {
      target: { value: 'test@example.com' },
    })
    fireEvent.change(screen.getByTestId('password-input'), {
      target: { value: '12345678' },
    })

    fireEvent.click(screen.getByTestId('login-button'))

    await waitFor(() => {
      expect(screen.getByTestId('login-button')).toHaveTextContent('LOGGING IN...')
    })
  })

  //   Negative test: shows errors when both fields are empty
  it('shows validation errors on empty submit', async () => {
    render(<LoginForm />)

    fireEvent.click(screen.getByTestId('login-button'))

    await waitFor(() => {
      expect(screen.getByTestId('email-error')).toHaveTextContent('Email is required')
      expect(screen.getByTestId('password-error')).toHaveTextContent('Password is required')
    })
  })


  // Negative test: invalid email format
  it('shows error for invalid email', async () => {
    render(<LoginForm />)
  
    fireEvent.change(screen.getByTestId('email-input'), {
      target: { value: 'invalid' },
    })
    fireEvent.change(screen.getByTestId('password-input'), {
      target: { value: '12345678' },
    })
  
    fireEvent.click(screen.getByTestId('login-button'))
  
    // Wait for the form to re-render and check for the error message
    await waitFor(() => {
      const emailError = screen.getByTestId('email-error')
      expect(emailError).toHaveTextContent('Please enter a valid email address')
    })
  })

  // Negative test: short passwords
  it('shows error for short password', async () => {
    render(<LoginForm />)

    fireEvent.change(screen.getByTestId('email-input'), {
      target: { value: 'test@example.com' },
    })
    fireEvent.change(screen.getByTestId('password-input'), {
      target: { value: '123' },
    })

    fireEvent.click(screen.getByTestId('login-button'))

    await waitFor(() => {
      expect(screen.getByTestId('password-error')).toHaveTextContent('Password must be at least 8 characters')
    })
  })

  // Negative test: valid email but short password
  it('shows password error even when email is valid', async () => {
    render(<LoginForm />)

    fireEvent.change(screen.getByTestId('email-input'), {
      target: { value: 'valid@example.com' },
    })
    fireEvent.change(screen.getByTestId('password-input'), {
      target: { value: '123' },
    })

    fireEvent.click(screen.getByTestId('login-button'))

    await waitFor(() => {
      expect(screen.getByTestId('password-error')).toHaveTextContent('Password must be at least 8 characters')
    })
  })

  // Toggle password visibility test
  it('toggles password visibility', () => {
    render(<LoginForm />)

    const passwordInput = screen.getByTestId('password-input')
    const toggleButton = screen.getByTestId('toggle-password')

    expect(passwordInput).toHaveAttribute('type', 'password')

    fireEvent.click(toggleButton)
    expect(passwordInput).toHaveAttribute('type', 'text')

    fireEvent.click(toggleButton)
    expect(passwordInput).toHaveAttribute('type', 'password')
  })



})
