import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import LoginForm from "@/components/auth/login-form"

describe("LoginForm", () => {
  it("renders the login form correctly", () => {
    render(<LoginForm />)

    expect(screen.getByTestId("login-form")).toBeInTheDocument()
    expect(screen.getByTestId("email-input")).toBeInTheDocument()
    expect(screen.getByTestId("password-input")).toBeInTheDocument()
    expect(screen.getByTestId("login-button")).toBeInTheDocument()
    expect(screen.getByText("FORGOT PASSWORD?")).toBeInTheDocument()
  })

  it("shows validation errors for empty fields", async () => {
    render(<LoginForm />)

    fireEvent.click(screen.getByTestId("login-button"))

    await waitFor(() => {
      expect(screen.getByTestId("email-error")).toBeInTheDocument()
      expect(screen.getByTestId("password-error")).toBeInTheDocument()
    })
  })

  it("shows validation error for invalid email", async () => {
    render(<LoginForm />)

    fireEvent.change(screen.getByTestId("email-input"), { target: { value: "invalid-email" } })
    fireEvent.change(screen.getByTestId("password-input"), { target: { value: "password123" } })
    fireEvent.click(screen.getByTestId("login-button"))

    await waitFor(() => {
      expect(screen.getByTestId("email-error")).toBeInTheDocument()
      expect(screen.getByText("Please enter a valid email address")).toBeInTheDocument()
    })
  })

  it("shows validation error for short password", async () => {
    render(<LoginForm />)

    fireEvent.change(screen.getByTestId("email-input"), { target: { value: "test@example.com" } })
    fireEvent.change(screen.getByTestId("password-input"), { target: { value: "short" } })
    fireEvent.click(screen.getByTestId("login-button"))

    await waitFor(() => {
      expect(screen.getByTestId("password-error")).toBeInTheDocument()
      expect(screen.getByText("Password must be at least 8 characters")).toBeInTheDocument()
    })
  })

  it("toggles password visibility when show/hide button is clicked", () => {
    render(<LoginForm />)

    const passwordInput = screen.getByTestId("password-input")
    const toggleButton = screen.getByTestId("toggle-password")

    // Initially password should be hidden
    expect(passwordInput).toHaveAttribute("type", "password")

    // Click to show password
    fireEvent.click(toggleButton)
    expect(passwordInput).toHaveAttribute("type", "text")

    // Click to hide password again
    fireEvent.click(toggleButton)
    expect(passwordInput).toHaveAttribute("type", "password")
  })

  it("submits the form with valid data", async () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation()

    render(<LoginForm />)

    fireEvent.change(screen.getByTestId("email-input"), { target: { value: "test@example.com" } })
    fireEvent.change(screen.getByTestId("password-input"), { target: { value: "password123" } })
    fireEvent.click(screen.getByTestId("login-button"))

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith("Form data submitted:", {
        email: "test@example.com",
        password: "password123",
      })
    })

    consoleSpy.mockRestore()
  })
})
